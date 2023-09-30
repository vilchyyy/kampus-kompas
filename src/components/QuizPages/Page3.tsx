import { useFormStore } from "~/state/stateForm";
import { MotionButton } from "../MotionButton";

interface Props {
  nextPage(arg0?: number): void;
}
export const Page3 = ({ nextPage }: Props) => {
  const { setLocalizationType } = useFormStore();
  return (
    <div className="flex gap-2">
      <MotionButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setLocalizationType("notImportant");
          nextPage(2);
        }}
      >
        Nie ważnes
      </MotionButton>
      <MotionButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setLocalizationType("important");
          nextPage();
        }}
      >
        Ważne
      </MotionButton>
    </div>
  );
};
