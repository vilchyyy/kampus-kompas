import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import Nav from "~/components/Nav";
import { UniversityCard } from "~/components/UniversityCard";
import { api } from "~/utils/api";

export default function Uczelnie() {
  const uczelnie = api.example.uczelnie.useQuery();
  const [order, setOrder] = useState("asc");
  return (
    <div className="h-screen">
      <Nav />
      <div className="mt-[-5.1rem] flex h-screen ">
        <div className="mt-[5.1rem] w-1/5 max-w-xs border-r-2 p-2">
          <p className="leading-7 [&:not(:first-child)]:mt-6">Sortuj po:</p>
          <div className="flex justify-between gap-2 py-2">
            <Button
              className="w-1/2"
              variant={order === "popularity" ? "default" : "outline"}
              onClick={() => {
                setOrder("popularity");
              }}
            >
              Popularności
            </Button>
            <Button
              className="w-1/2"
              variant={order === "ranking" ? "default" : "outline"}
              onClick={() => {
                setOrder("ranking");
              }}
            >
              Rankingu
            </Button>
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">Filtry:</p>
          <div className="flex items-center space-x-2">
            <Checkbox id="techniczna" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="techniczna"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Szkoła techniczna
              </label>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="techniczna" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="techniczna"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Szkoła techniczna
              </label>
            </div>
          </div>
        </div>
        <div className="mt-[5.1rem] w-4/5 flex-grow">
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
