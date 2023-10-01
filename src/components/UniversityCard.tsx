interface University {
  id: string;
  city: string;
  name: string;
  description: string;
  website: string;
  image: string;
}
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
export const UniversityCard = ({ university }: { university: University }) => {
  // console.log(university);

  return (
    <Card className={`h-80 w-96 flex-grow border-2 `} key={university.id}>
      <CardHeader>
        <CardTitle>{university.name}</CardTitle>
      </CardHeader>
      <CardDescription className="p-2">{university.city}</CardDescription>
      <Image className="overflow-hidden object-cover" src={university.image} width={800} height={50} alt="uczelnia" />
      {/* add city to the left bottom of the card */}
    </Card>
  );
};
