import { Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { usePagination } from '@mantine/hooks';
import { useEffect, useState } from "react";
import { PieceCard } from "../PieceCard/PieceCard";
import { usePieceAPI } from "@/hooks/usePieceAPI";

interface Props {
    numberToShow: number;
//   query: (from: number, to: number) => Promise<[any]>;
//   Component: JSX.Element;
}

export const Dataview = ({ numberToShow }: Props) => {
    const [result, setResult] = useState<any[] | undefined>([]);
    const { fetchPiecesWithinRange, count } = usePieceAPI(2);

    const [page, onChange] = useState(1);
    const totalPages = Math.ceil(count / numberToShow);
    const pagination = usePagination({ total: totalPages, page, onChange });

    // console.log('totalPages -', totalPages);
    // console.log('page -', page);

    useEffect(() => {
        let active = true;
        load();
        return () => { active = false }
      
        async function load() {
          setResult([]); // this is optional
        //   const res = await query(0, activePage)
          const from = (page == 1 ? 0 : ((page - 1) * numberToShow));
          const to = (page == 1 ? (numberToShow - 1) : ((page * numberToShow) - 1));
          const res = await fetchPiecesWithinRange(from, to);
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
                    minChildWidth={{ base: "30%", md: "30%", sm: "40%" }} 
                    spacing={5}>
                    { result.map(r => <PieceCard key={r.id} piece={r} contributor={{ 
                            // TODO - Replace by referencing that test hook from the DGC
                            full_name: "Joshwin Greene", 
                            avatar_url: "https://joshwin.dev/img/joshwin-linkedin-photo.JPG",
                            id: 'sdlkfjsdlf',
                            bio: "Hello World!",
                            created_at: "2023-07-23 17:50:44.769474+00",
                            updated_at: null,
                            username: "joshwin_greene"
                        }} />) }
                </SimpleGrid>
                <Flex width={'100%'} direction={'row'} justifyContent={'center'}>
                    <Button onClick={() => handlePrevious()} isDisabled={ page == 1 }>Previous</Button>
                    <Button onClick={() => handleNext()} isDisabled={ page == totalPages }>Next</Button>
                </Flex>
            </>
    )
}