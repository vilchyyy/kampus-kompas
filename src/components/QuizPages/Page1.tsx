import { Button } from "@/components/ui/button";
import { useFormStore } from "~/state/stateForm";

interface Props {
  nextPage(): void;
}
export const Page1 = ({ nextPage }: Props) => {
  const { setUserType } = useFormStore();
  return (
    <div className="flex gap-2">
      <Button
        onClick={() => {
          setUserType("parent");
          nextPage();
        }}
      >
        Rodzicem
      </Button>
      <Button
        onClick={() => {
          setUserType("schoolGraduate");
          nextPage();
        }}
      >
        Absolwentem szkoły ponadpodstawowej
      </Button>
      <Button
        onClick={() => {
          setUserType("collegeGraduate");
          nextPage();
        }}
      >
        Absolwentem studiów
      </Button>
      <Button
        onClick={() => {
          setUserType("abroadGraduate");
          nextPage();
        }}
      >
        Absolwentem z zagranicy
      </Button>
    </div>
  );
};
