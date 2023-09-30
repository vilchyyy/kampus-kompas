import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";

interface NavProps {
    className?: string;
    logoFont?: string;
}

export default function Nav({className, logoFont}: NavProps){
    const router = useRouter();
    return (
        <>
       <div className="mx-auto hover:cursor-pointer flex w-full h-20 gap-6 px-4 justify-between items-center sm:max-w-screen-2xl">
        <div className="flex gap-6 justify-center items-center mx-4">
            <Image  onClick={(e) => {
              e.preventDefault();
              router.push("/").catch((err) => console.log(err));
       }} src="compass.svg" className="h-12 w-12 min-w-max -mr-3 " width={50} height={50} alt="logo" />
            <p  onClick={(e) => {
              e.preventDefault();
              router.push("/").catch((err) => console.log(err));
       }} className="font-bold mr-4 sm:block hidden">KampusKompas</p>
            <p>FAQ</p>
            <p className="min-w-min">About&nbsp;Us</p>
        </div>


        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="wyszukaj uczelnie..." />
            <Button className="w-10 p-2" type="submit">
                <SearchIcon className="w-10 h-10"/>
            </Button>
        </div>
        
       </div>
       <Separator/>
       </>
    )   
}
