import { Box, Button, Divider, Flex, SimpleGrid, Skeleton, SkeletonCircle, SkeletonText, VStack } from "@chakra-ui/react";
import { usePagination } from '@mantine/hooks';
import { useEffect, useState } from "react";
import { UniformDataFormat } from "../PieceCard/PieceCard";

export enum DataLayout {
    Grid = "GRID",
    List = "LIST",
    Table = "TABLE"
}

interface Props<T> {
    // When providing mock data
    hasMockData?: boolean;
    mockData?: T[];

    // Required by all layouts
    layout: DataLayout;
    totalCount: number | undefined;
    numberToShow: number;
    uniformDataRetrievalMethod: (data: T, hasMockData?: boolean) => UniformDataFormat;
    Component: any;
    query?: (from: number, to: number) => Promise<any>; // before T[] | undefined
    // Note: Don't set this when providing mock data

    // Grid Layout
    numberPerRow?: number;
}

export const Dataview = <T extends Record<string, unknown>>({
    layout,
    totalCount,
    numberToShow,
    numberPerRow,
    uniformDataRetrievalMethod,
    Component,
    query,
    hasMockData,
    mockData
}: Props<T>) => {
    const [result, setResult] = useState<T[] | undefined>([]);

    const [page, onChange] = useState(1);

    let totalPages = undefined;
    
    if (totalCount) {
        totalPages = (totalCount <= numberToShow) ? 1 : Math.ceil(totalCount / numberToShow);
    }

    const pagination = usePagination({ total: totalPages ?? 0, page, onChange });

    console.log('totalPages -', totalPages);
    console.log('page -', page);
    console.log('result -', result);

    useEffect(() => {
        let active = true;
        if (hasMockData && mockData) {
            loadMockData(mockData);
        } else {
            loadAPIData();
        }
        return () => { active = false }
      
        function loadMockData(mockData: T[]) {
            setResult([]); // this is optional
            const from = (page == 1 ? 0 : ((page - 1) * numberToShow));
            const to = (page == 1 ? (numberToShow - 1) : ((page * numberToShow) - 1));
            const res = mockData.slice(from, to + 1);
            if (!active) { return }
            setResult(res);
        }

        async function loadAPIData() {
          let res;
          setResult([]); // this is optional
          const from = (page == 1 ? 0 : ((page - 1) * numberToShow));
          const to = (page == 1 ? (numberToShow - 1) : ((page * numberToShow) - 1));
          if (query) {
            res = await query(from, to);
          }          
          if (!active) { return }
          setResult(res);
        }
        // eslint-disable-next-line
      }, [page]); // intentional

    const handlePrevious = () => {
        pagination.setPage(page - 1);
    }

    const handleNext = () => {
        pagination.setPage(page + 1);
    }

    return (
        (totalCount && result && result.length !== 0) ?
            // When not loading
            <>
                { layout == DataLayout.Grid && 
                    <SimpleGrid
                        // height={"100vh"} 
                        minChildWidth={
                            numberPerRow == 3 ?
                                { base: "30%", md: "30%", sm: "40%" } :
                                { base: "40%", md: "40%", sm: "50%" }
                        } 
                        spacing={5}
                        >
                        { result.map(r => {
                                    const data = uniformDataRetrievalMethod(r, hasMockData);

                                    return (
                                        <Component key={data.id} data={data} />
                                    )
                                }
                            ) }
                    </SimpleGrid>
                }
                { layout == DataLayout.List &&
                    <VStack>
                        { result.map(r => {
                                    const data = uniformDataRetrievalMethod(r, hasMockData);

                                    return (
                                        <>
                                            <Component key={data.id} data={data} />
                                            <Divider />
                                        </>
                                    )
                                }
                        ) }
                    </VStack>
                }
                <Flex width={'100%'} direction={'row'} justifyContent={'center'}>
                    <Button onClick={() => handlePrevious()} isDisabled={ page == 1 }>Previous</Button>
                    <Button onClick={() => handleNext()} isDisabled={ page == totalPages }>Next</Button>
                </Flex>
            </> 
            :
            // When Loading
            (layout == DataLayout.Grid ?
                (
                    <SimpleGrid
                        minChildWidth={
                            numberPerRow == 3 ?
                                { base: "30%", md: "30%", sm: "40%" } :
                                { base: "40%", md: "40%", sm: "50%" }
                        } 
                        spacing={5}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => 
                            <Box key={index} padding='6' boxShadow='lg' bg='white'>
                                <SkeletonCircle size='10' />
                                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                        </Box>)
                        }
                    </SimpleGrid>
            ) :
            (
                <VStack>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => 
                            <Box key={index} padding='6' boxShadow='lg' bg='white'>
                                <SkeletonCircle size='10' />
                                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                        </Box>)
                    }
                </VStack>
            )   
        )
    )
}