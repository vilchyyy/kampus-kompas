import { useFormStore } from "~/state/stateForm";
import { MotionButton, MotionSlider } from "../MotionCompoenents";
import { motion } from "framer-motion";

interface Props {
  nextPage(arg0?: number): void;
}
export const Page3 = ({ nextPage }: Props) => {
  const { setRankingType } = useFormStore();
  return (
    <motion.div>
      <MotionSlider
        className="w-80 p-4"
        defaultValue={[0]}
        max={10}
        min={-10}
        step={1}
        onValueChange={(value) => {
          setRankingType(value[0] ?? 0);
        }}
      />
      <MotionButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => nextPage()}
      >
        Dalej
      </MotionButton>
    </motion.div>
  );
};
