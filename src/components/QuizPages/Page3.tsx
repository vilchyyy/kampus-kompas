import { Button } from "@/components/ui/button";
import { useFormStore } from "~/state/stateForm";

interface Props {
  nextPage(arg0?: number): void;
}
export const Page3 = ({ nextPage }: Props) => {
  const { setLocalization } = useFormStore();
  return (
    <div className="flex gap-2">
      <Button
        onClick={() => {
          setLocalization("notImportant");
          nextPage(2);
        }}
      >
        Nie ważnes
      </Button>
      <Button
        onClick={() => {
          setLocalization("important");
          nextPage();
        }}
      >
        Ważne
      </Button>
    </div>
  );
};
