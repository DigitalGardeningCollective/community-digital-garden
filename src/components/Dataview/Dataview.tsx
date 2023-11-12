import { SimpleGrid } from "@chakra-ui/react";
import { Pagination } from '@mantine/core';
import { useEffect, useState } from "react";
import { PieceCard } from "../PieceCard/PieceCard";
import { useFetchPiecesWithRange } from "@/hooks/useFetchPiecesWithRange";

interface Props {
//   query: (from: number, to: number) => Promise<[any]>;
//   Component: JSX.Element;
}

export const Dataview = ({  }: Props) => {
    const [result, setResult] = useState<any[] | undefined>([]);
    const [activePage, setPage] = useState(1);
    const { fetchPiecesWithRange } = useFetchPiecesWithRange();

    useEffect(() => {
        let active = true
        load()
        return () => { active = false }
      
        async function load() {
          setResult([]) // this is optional
        //   const res = await query(0, activePage)
          const res = await fetchPiecesWithRange(0, 8);
          if (!active) { return }
          setResult(res)
        }
      }, []); // intentional

    return (
      <>
        <SimpleGrid
            // height={"100vh"} 
            minChildWidth={{ base: "30%", md: "30%", sm: "40%" }} 
            spacing={5}
        >
            { result && result.map(r => <PieceCard key={r.id} piece={r} contributor={{ 
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
        <Pagination value={activePage} onChange={setPage} total={1} />
      </>
    )
  }