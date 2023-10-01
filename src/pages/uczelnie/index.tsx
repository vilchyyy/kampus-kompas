import { Separator } from "@/components/ui/separator";
import { z } from "zod";
import Nav from "~/components/Nav";
import { UniversityCard } from "~/components/UniversityCard";
import { AllTypes } from "~/server/api/routers/example";
import { useFormStore } from "~/state/stateForm";
import { api } from "~/utils/api";

export default function Uczelnie() {
  const uczelnie = api.example.uczelnie.useQuery();
  return (
    <div className="h-screen">
      <Nav />
      <div className="mt-[-5.1rem] flex h-screen ">
        <div className="mt-[5.1rem] w-1/5 border-r-2 p-2"></div>
        <div className="mt-[5.1rem] w-4/5">
          <div className="flex h-full flex-wrap justify-evenly gap-2 overflow-y-scroll p-2">
            {uczelnie.data?.uczelnie.map((item) => (
              <UniversityCard
                key={item.id}
                university={{
                  id: String(item.id),
                  description: item.name,
                  name: item.name,
                  website: "https://radzi.link",
                  city: item.miasto,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
