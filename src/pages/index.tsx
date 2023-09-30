import { Button } from "@/components/ui/button";
import { ArrowDown01Icon, ArrowDownIcon, GraduationCap, SchoolIcon, Users, UsersIcon } from "lucide-react";
import { IBM_Plex_Serif } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { any, string, z } from "zod";
import Nav from "~/components/Nav";
import { useFormStore } from "~/state/stateForm";
import { api } from "~/utils/api";
import type { AllTypes } from "~/server/api/routers/example";

const ibm_serif = IBM_Plex_Serif({
  weight: "700",
  subsets: ["latin"],
});

export default function Home() {
  const hello = api.example.hello.useQuery(
    ( useFormStore.getState()  ) );
  console.log(hello.data)
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Nav logoFont={ibm_serif.className} />
        <div className="container flex h-screen flex-col items-center gap-6 px-4 py-10 sm:max-w-7xl sm:items-start ">
          <h1
            className={
              ibm_serif.className + " text-3xl text-slate-800 sm:text-5xl"
            }
          >
            Twoj asystent w wyborze ścieżki życia
          </h1>
          <p className=" sm:text-lg">

          Rozwiąż nasz quiz i odkryj idealną uczelnię w 5 minut! Nasz algorytm dopasuje uczelnie do twoich preferencji i pokaże je na spektrum elastyczności i techniczności studiów. 
          Oś pionowa to elastyczność studiów, od tradycyjnych do online, a oś pozioma to techniczność studiów, od politechnik do tradycyjnych.
          </p>

          <div className="flex pb-8 w-full items-center justify-around sm:justify-start sm:gap-6 ">
            {/* <ArrowDownIcon className="w-10 h-10" /> */}
            <p className="text-lg">
              Zobacz jakie to{" "}
              <span className="font-bold underline underline-offset-4">
                proste
              </span>
            </p>

            <Button className="p-6 px-10">
              <p className="text-lg">Rozpocznij quiz</p>
            </Button>
          </div>
          <div className="flex flex-wrap lg:gap-32 gap-12 lg:items-center justify-center  w-full">
              <Image className="rounded-2xl border shadow-[0px_0px_20px_10px_#00000024]" src="/spektrum.svg" width={500}  height={500} alt="logo" />
            <div className="flex h-full gap-8 flex-col max-w-lg">
              <div className="flex items-center gap-4">
                <p>Jesteś maturzystą i poszukujesz idealnej uczelni w której zdobędziesz kompetencje i poszerzysz swoje grono przyjaciół?
                  Dobrze trafiłeś, przystąp do 5 minutowego quizu i dowiedz się która uczelnia jest dla Ciebie najlepsza!
                </p>
                <SchoolIcon className="h-40 w-40 p-8 min-w-max flex  justify-center rounded-xl border-2 border-black shadow-[0px_0px_20px_10px_#00000024] " />
              </div>
               
              <div className="flex items-center gap-4">
                <GraduationCap className="h-40 w-40 p-8 min-w-max flex  justify-center rounded-xl border-2 border-black shadow-[0px_0px_20px_10px_#00000024] " />
                <p>A może skończyłeś już studia i poszukujesz szkoły podyplomowej, bądź doktorskiej.
                  Nic nie szkodzi, nasz quiz jest dla Ciebie! Przystąp do niego i dowiedz się która uczelnia będzie oferować oczekiwany przez Ciebie rodzaj i kierunek studiów.
                </p>
              </div>
                <div className="flex items-center gap-4">
                <p>
                  Jesteś rodzicem i trafiłeś na naszą stronę bo martwisz się o przyszłość swojego dziecka? 
                  Nie ma się czym martwić, nasz quiz jest dla Ciebie! Przystąp do niego i dowiedz się która uczelnia będzie oferować oczekiwany przez Twoje dziecko rodzaj i kierunek studiów.
                </p>
                <UsersIcon className="h-40 w-40 p-8 min-w-max flex  justify-center rounded-xl border-2 border-black shadow-[0px_0px_20px_10px_#00000024] " />
              </div>
            </div>
          </div>

          <p className="text-2xl">
            {/* {hello.data ? hello.data : "Loading tRPC query..."} */}
          </p>
        </div>
      </main>
    </>
  );
}
