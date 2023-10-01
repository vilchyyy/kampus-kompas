import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronRight } from "lucide-react";
import { SyntheticEvent, useState } from "react";
import { Translation } from "react-i18next";
import Nav from "~/components/Nav";
import { UniversityCard } from "~/components/UniversityCard";
import { api } from "~/utils/api";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Uczelnie() {
  const data = api.example.uczelnie.useQuery();
  const [order, setOrder] = useState("asc");
  const [isOpen, setIsOpen] = useState(true);
  const [filters, setFilters] = useState({
    techniczna: true,
    medyczna: true,
    dzienne: true,
    zaoczne: true,
    online: true,
    humanistyczny: true,
    społeczny: true,
    ścisły: true,
    przyrodniczy: true,
    artystyczny: true,
    rolniczy: true,
    weterynaryjny: true,
  });
  console.log(filters);
  return (
    <>
      <div className="h-screen">
        <Nav />
        <div className="mt-[-5.1rem] flex h-screen">
          <div
            className={`mt-[5.1rem] w-1/5 max-w-xs ${
              !isOpen ? "border-none" : "border-r-2"
            } overflow-y-auto p-2`}
          >
            <ChevronRight
              className={`${isOpen && "rotate-180"} transition-transform`}
              size={26}
              strokeWidth={1}
              onClick={() => setIsOpen((prevState) => !prevState)}
            />
            <div className={`${isOpen ? "visible" : "hidden"}`}>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                Sortuj według:
              </p>
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
              <p className="leading-7 [&:not(:first-child)]:mt-3">Filtry:</p>
              <ScrollArea className="flex max-h-[500px]  flex-col  rounded-sm">
                <div className=" flex items-center space-x-2 p-2">
                  <Checkbox
                    id="dzienne"
                    checked={filters.dzienne}
                    onClick={() => {
                      setFilters((prevState) => ({
                        ...prevState,
                        dzienne: !prevState.dzienne,
                      }));
                    }}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="dzienne"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Studia dzienne
                    </label>
                  </div>
                </div>
                <div className=" flex items-center space-x-2 p-2">
                  <Checkbox
                    id="zaoczne"
                    checked={filters.zaoczne}
                    onClick={() => {
                      setFilters((prevState) => ({
                        ...prevState,
                        zaoczne: !prevState.zaoczne,
                      }));
                    }}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="zaoczne"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Studia zaoczne
                    </label>
                  </div>
                </div>
                <div className=" flex items-center space-x-2 p-2">
                  <Checkbox
                    id="online"
                    checked={filters.online}
                    onClick={() => {
                      setFilters((prevState) => ({
                        ...prevState,
                        online: !prevState.online,
                      }));
                    }}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="online"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Studia online
                    </label>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
          <div className="mt-[5.1rem] w-4/5 flex-grow">
            <div className="flex h-full flex-wrap justify-evenly gap-2 overflow-y-auto p-2">
              {data.data?.kierunki
                .filter((item) => {
                  // it
                
                .map((item) => (
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
    </>
  );
}
