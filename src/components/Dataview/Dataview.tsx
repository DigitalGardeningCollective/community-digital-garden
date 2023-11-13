import { Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { usePagination } from '@mantine/hooks';
import { useEffect, useState } from "react";
import { UniformDataFormat } from "../PieceCard/PieceCard";

interface Props<T> {
    total: number;
    numberToShow: number;
    numberPerRow: number;
    query: (from: number, to: number) => Promise<T[] | undefined>;
    uniformDataRetrievalMethod: (data: T) => UniformDataFormat;
    Component: any;
}

export const Dataview = <T extends Record<string, unknown>>({
    total,
    numberToShow,
    numberPerRow,
    query,
    uniformDataRetrievalMethod,
    Component
}: Props<T>) => {
    const [result, setResult] = useState<T[] | undefined>([]);

    const [page, onChange] = useState(1);
    const totalPages = total <= numberToShow ? 1 : Math.ceil(total / numberToShow);
    const pagination = usePagination({ total: totalPages, page, onChange });

    console.log('totalPages -', totalPages);
    console.log('page -', page);

    useEffect(() => {
        let active = true;
        load();
        return () => { active = false }
      
        async function load() {
          setResult([]); // this is optional
          const from = (page == 1 ? 0 : ((page - 1) * numberToShow));
          const to = (page == 1 ? (numberToShow - 1) : ((page * numberToShow) - 1));
          const res = await query(from, to);
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
        result && result.length !== 0 && 
            <>
                <SimpleGrid
                    // height={"100vh"} 
                    minChildWidth={
                        numberPerRow == 3 ?
                            { base: "30%", md: "30%", sm: "40%" } :
                            { base: "40%", md: "40%", sm: "50%" }
                    } 
                    spacing={5}>
                    { result.map(r => {
                                const data = uniformDataRetrievalMethod(r);

                                return (
                                    <Component key={data.id} data={ data } />
                                )
                            }
                        ) }
                </SimpleGrid>
                <Flex width={'100%'} direction={'row'} justifyContent={'center'}>
                    <Button onClick={() => handlePrevious()} isDisabled={ page == 1 }>Previous</Button>
                    <Button onClick={() => handleNext()} isDisabled={ page == totalPages }>Next</Button>
                </Flex>
            </>
    )
}