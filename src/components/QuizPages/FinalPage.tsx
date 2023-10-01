import { type z } from "zod";
import { type AllTypes } from "~/server/api/routers/example";
import { useFormStore } from "~/state/stateForm";
import { api } from "~/utils/api";
import Nav from "../Nav";
import Image from "next/image";
import MatchCard from "../MatchCard";
import { ScrollArea } from "@/components/ui/scroll-area";

export const FinalPage = () => {
  const hello = api.example.hello.useQuery(
    useFormStore.getState() as z.infer<typeof AllTypes>,
  );
  console.log(hello.data);
  return (
    <div className="w-screen flex">
      
      <div className="flex max-w-7xl mx-auto w-full justify-between">
        <ScrollArea className="flex max-h-[500px]  rounded-sm  flex-col">
          <ul className="flex flex-col gap-4 p-10">
            {hello.data?.filtered.map((el, index) => (
                <MatchCard image={el.image ?? ""} name={el.uni?.name} kierunek={el.kierunek} tryb={el.tryb} key={index} />          
            ))}
          </ul>
        </ScrollArea>

        <Image className="rounded-2xl my-2 border shadow-[0px_0px_20px_10px_#00000024]" src="/spektrum.svg" width={500} height={500} alt="logo" />
      </div>

    </div>
  );
};
