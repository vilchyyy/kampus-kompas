import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface MatchCardProps {
    name?: string;
    kierunek?: string;
    image?: string;
    tryb?: string;
}

export default function MatchCard( {tryb, name, kierunek, image}: MatchCardProps){
    return (

        <Card className="flex py-20 px-10 h-28 items-center w-full justify-between">
            <Image className="mx-8 ml-6 rounded-2xl" src={image ?? ""} width={200} height={100} alt="logo uczelni" />
            <div>
            <CardTitle className="text-2xl w-80 first-letter">{name}</CardTitle >                 
                <div className="flex w-full justify-between items-center">
                <CardDescription>{kierunek} - {tryb}</CardDescription>
                </div>

            </div>

        </Card>
  
    )

}