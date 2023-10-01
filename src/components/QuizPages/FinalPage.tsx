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
    <div className="flex w-screen">
      <div className="mx-auto mt-[500px] flex w-full max-w-7xl flex-col items-center justify-center gap-10 lg:mt-0 lg:flex-row lg:justify-between">
        <div className="flex flex-col place-content-center">
          <h1 className={`${ibm_serif.className} mx-auto mb-6  text-2xl`}>
            Oto posortowane ścieżki studiów specjalnie dla ciebie:{" "}
          </h1>
          <ScrollArea className="flex max-h-[500px]  flex-col  rounded-sm">
            <ul className="flex flex-col gap-4 p-10">
              {hello.data?.filtered.map((el, index) => (
                <MatchCard
                  image={el.image ?? ""}
                  name={el.uni?.name}
                  kierunek={el.kierunek}
                  tryb={el.tryb}
                  key={index}
                />
              ))}
            </ul>
          </ScrollArea>
        </div>
        <div>
          <h1 className={`${ibm_serif.className} mb-6  text-2xl`}>
            A oto twoje miejsce na naszym kompasie:{" "}
          </h1>
          <div className="aspect-square relative">
            {hello.data?.compass && <div style={{ bottom: `${(hello.data?.compass.y + 1)*50}%`, left: `${(hello.data.compass.x+1)*50}%` }} className={`w-4 h-4 rounded-full absolute bg-zinc-800`}></div>}
            <Image
              className="w-full h-full my-2 rounded-2xl border shadow-[0px_0px_20px_10px_#00000024]"
              src="/spektrum.svg"
              width={500}
              height={500}
              alt="logo"
            />
          </div>

          <p className="w-[500px]">
            Nasz kompas na podstawie twoich odpowiedzi na pytania pokazuje twoje
            preferencje w wyborze studiów. Umieszczony zostajesz na osiach
            elastyczności i techniczności studiów.
          </p>
        </div>
      </div>
    </div>
  );
};
