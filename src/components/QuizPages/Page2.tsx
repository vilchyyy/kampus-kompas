import { Button } from "@/components/ui/button";
import { useFormStore } from "~/state/stateForm";

interface Props {
  nextPage(): void;
}
export const Page2 = ({ nextPage }: Props) => {
  const { setStudiesType } = useFormStore();
  return (
    <div className="flex gap-2">
      <Button
        onClick={() => {
          setStudiesType("fullTime");
          nextPage();
        }}
      >
        Studia dzienne
      </Button>
      <Button
        onClick={() => {
          setStudiesType("partTime");
          nextPage();
        }}
      >
        Studia zaoczne
      </Button>
      <Button
        onClick={() => {
          setStudiesType("online");
          nextPage();
        }}
      >
        Studia online
      </Button>
      <Button
        onClick={() => {
          setStudiesType("evening");
          nextPage();
        }}
      >
        Studia wieczorowe
      </Button>
    </div>
  );
};
