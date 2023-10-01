interface University {
  id: string;
  city: string;
  name: string;
  description: string;
  website: string;
}
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export const UniversityCard = ({ university }: { university: University }) => {
  // console.log(university);

  return (
    <Card className="h-80 w-96 flex-grow border-2" key={university.id}>
      <CardHeader>
        <CardTitle>{university.name}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardDescription className="p-2">{university.city}</CardDescription>
      {/* add city to the left bottom of the card */}
    </Card>
  );
};
