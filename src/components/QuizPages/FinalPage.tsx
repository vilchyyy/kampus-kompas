import { type z } from "zod";
import { type AllTypes } from "~/server/api/routers/example";
import { useFormStore } from "~/state/stateForm";
import { api } from "~/utils/api";
import Nav from "../Nav";
import Image from "next/image";
import MatchCard from "../MatchCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ibm_serif } from "~/pages";

export const FinalPage = () => {
  const hello = api.example.hello.useQuery(
    useFormStore.getState() as z.infer<typeof AllTypes>,
  );
  console.log(hello.data);
  return (
    <div className="w-screen flex">
      
      <div className="flex max-w-7xl mx-auto w-full flex-col lg:flex-row gap-10 items-center justify-center mt-[500px] lg:mt-0 lg:justify-between">
        <div className="flex flex-col place-content-center">
          <h1 className={`${ibm_serif.className} mb-6 mx-auto  text-2xl`}>Oto Idealne ścieżki studiów dla ciebie: </h1>
        <ScrollArea className="flex max-h-[500px]  rounded-sm  flex-col">
          <ul className="flex flex-col gap-4 p-10">
            {hello.data?.filtered.map((el, index) => (
                <MatchCard image={el.image ?? ""} name={el.uni?.name} kierunek={el.kierunek} tryb={el.tryb} key={index} />          
            ))}
          </ul>
        </ScrollArea>
        </div>
      <div>
      <h1 className={`${ibm_serif.className} mb-6  text-2xl`}>A oto twoje miejsce na naszym kompasie: </h1>
        <Image className=" rounded-2xl h-min my-2 border shadow-[0px_0px_20px_10px_#00000024]" src="/spektrum.svg" width={500} height={500} alt="logo" />
        <p className="w-[500px]">Nasz kompas na podstawie twoich odpowiedzi na pytania pokazuje twoje preferencje w wyborze studiów.
            Umieszczony zostajesz na osiach elastyczności i techniczności studiów.
        </p>
      </div>
    </div>

    </div>
  );
};
