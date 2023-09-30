import { useFormStore } from "~/state/stateForm";
import { MotionButton } from "../MotionCompoenents";
import { motion } from "framer-motion";

interface Props {
  nextPage(arg0?: number): void;
}
export const Page3 = ({ nextPage }: Props) => {
  const { setWorkType } = useFormStore();
  return (
    <motion.div
      className="flex gap-2"
      initial={{ opacity: 0, display: "none" }}
      animate={{ opacity: 1, display: "flex", transition: { delay: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <MotionButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
        setWorkType("workWithHumans");
          nextPage();
        }}
      >
        Praca z ludźmi
      </MotionButton>
      <MotionButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
        setWorkType("workWithData");
          nextPage();
        }}

      >
        Praca z danymi
      </MotionButton>
      <MotionButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
            setWorkType("workWithNature");
          nextPage();
        }}

      >
        Praca z naturą
      </MotionButton>
    </motion.div>
  );
};
