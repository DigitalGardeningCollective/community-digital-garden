import { Box, Button, Divider, Flex, SimpleGrid, SkeletonCircle, SkeletonText, Table, TableContainer, Tbody, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { usePagination } from '@mantine/hooks';
import { Fragment, useEffect, useState } from "react";
import { InfoDisplay } from "../InfoDisplay/InfoDisplay";

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
    handleOnClick: (id: string | number) => void;
    query?: (from: number, to: number) => Promise<any>; // before T[] | undefined
    // Note: query isn't used when hasMockData is true
    renderComponent: (data: Record<string, unknown>) => JSX.Element;
    dataName: string;

    // Grid Layout
    numberPerRow?: number;

    // Table Layout
    tableHeaderNames?: string[];
}

export const Dataview = <T extends Record<string, unknown>>({
    hasMockData,
    mockData,
    layout,
    totalCount,
    numberToShow,
    query,
    numberPerRow,
    tableHeaderNames,
    renderComponent,
    dataName
}: Props<T>) => {
    const [result, setResult] = useState<{
        isLoading: boolean,
        data: T[] | undefined
    }>({ isLoading: false, data: [] });

    const [page, onChange] = useState(1);

    let totalPages: number | undefined = undefined;
    
    if (totalCount) {
        totalPages = (totalCount <= numberToShow) ? 1 : Math.ceil(totalCount / numberToShow);
    }

    const pagination = usePagination({ total: totalPages ?? 0, page, onChange });

    // console.log('totalPages -', totalPages);
    // console.log('page -', page);
    // console.log('result -', result);

    const reset = () => {
        pagination.setPage(1);
    }

    useEffect(() => {
        // Used when a moderator switches tabs when a tab isn't on the first page of results
        if (totalPages && (page > totalPages)) {
            reset();
        }

        let active = true;
        if (hasMockData && mockData) {
            loadMockData(mockData);
        } else {
            loadAPIData();
        }
        return () => { active = false }
      
        function loadMockData(mockData: T[]) {
            setResult({ isLoading: true, data: [] }); // this is optional
            const from = (page == 1 ? 0 : ((page - 1) * numberToShow));
            const to = (page == 1 ? (numberToShow - 1) : ((page * numberToShow) - 1));
            const res = mockData.slice(from, to + 1);
            if (!active) { return }
            setResult({ isLoading: false, data: res });
        }

        async function loadAPIData() {
          let res;
          setResult({ isLoading: true, data: [] }); // this is optional
          const from = (page == 1 ? 0 : ((page - 1) * numberToShow));
          const to = (page == 1 ? (numberToShow - 1) : ((page * numberToShow) - 1));
          if (query) {
            res = await query(from, to);
          }          
          if (!active) { return }
          setResult({ isLoading: false, data: res });
        }
        // eslint-disable-next-line
      }, [page, query]); // intentional

    const handlePrevious = () => {
        pagination.setPage(page - 1);
    }

    const handleNext = () => {
        pagination.setPage(page + 1);
    }

    const renderNineSkeletonBoxes = () => {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => 
            <Box key={index} padding='6' boxShadow='lg' bg='white'>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Box>)
    }

    return (
        // when not loading
        (totalCount && result && !result.isLoading) ?
                // data.length > 0
                result.data && result.data.length > 0 ?
                    <>
                        {
                            { "GRID":
                                    <SimpleGrid
                                        // height={"100vh"} 
                                        minChildWidth={
                                            numberPerRow == 3 ?
                                                { base: "30%", md: "30%", sm: "40%" } :
                                                { base: "40%", md: "40%", sm: "50%" }
                                        } 
                                        spacing={5}
                                        >
                                        { result.data.map(r => renderComponent(r)) }
                                    </SimpleGrid>,
                                "LIST":
                                        <VStack>
                                            {  
                                                result.data.map((r, index) => (
                                                        <Fragment key={index}>
                                                            { renderComponent(r) }
                                                            <Divider />
                                                        </Fragment>
                                                    ))
                                            }
                                        </VStack>,
                                "TABLE": 
                                    <TableContainer width={'100%'}>
                                            <Box overflowX={'auto'}>
                                                <Table variant='striped' colorScheme='teal'>
                                                    <Thead>
                                                        <Tr>
                                                            { tableHeaderNames?.map((name, index) => 
                                                                    <Th key={index}>{ name }</Th>
                                                                )
                                                            }
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        { result.data.map(r => renderComponent(r)) }
                                                    </Tbody>
                                                </Table>
                                            </Box>
                                        </TableContainer>
                            } [layout]
                        }
                        <Flex width={'100%'} direction={'row'} justifyContent={'center'}>
                            <Button onClick={() => handlePrevious()} isDisabled={ page == 1 }>Previous</Button>
                            <Button onClick={() => handleNext()} isDisabled={ page == totalPages }>Next</Button>
                        </Flex>
                    </>
                :
                // data.length == 0
                <InfoDisplay message={`No ${dataName}s can be Found`} />
            :
            // When Loading
            {  "GRID":  
                (<SimpleGrid
                    minChildWidth={
                        numberPerRow == 3 ?
                            { base: "30%", md: "30%", sm: "40%" } :
                            { base: "40%", md: "40%", sm: "50%" }
                    } 
                    spacing={5}
                    >
                        { renderNineSkeletonBoxes() }
                    </SimpleGrid>),
                "LIST":
                    (<VStack>
                        { renderNineSkeletonBoxes() }
                    </VStack>),
                "TABLE": 
                    ((<VStack width={"100%"}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => 
                                <Box key={index} width={"100%"} padding='6' boxShadow='lg' bg='white'>                                    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                            </Box>)
                        }
                    </VStack>))
              } [layout]
        )
}