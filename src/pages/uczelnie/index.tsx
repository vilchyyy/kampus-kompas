import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronRight } from "lucide-react";
import { SyntheticEvent, useState } from "react";
import { Translation } from "react-i18next";
import Nav from "~/components/Nav";
import { UniversityCard } from "~/components/UniversityCard";
import { api } from "~/utils/api";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/router";

export default function Uczelnie() {
  const router = useRouter();
  console.log(router.query);
  const uczelnie = api.example.uczelnie.useQuery(router.query.search as string);
  return (
    <div className="h-screen">
      <Nav />
      <div className="mt-[-5.1rem] flex h-screen">
        <div className="mt-[5.1rem] w-4/5 flex-grow">
          <div className="flex h-full flex-wrap justify-evenly gap-4 overflow-y-auto p-2">
            {uczelnie.data?.uczelnie.map((item) => (
              <UniversityCard
                key={item.id}
                university={{
                  id: String(item.id),
                  description: item.name,
                  name: item.name,
                  website: "https://radzi.link",
                  city: item.miasto ?? "",
                  image: item.image ?? "",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
