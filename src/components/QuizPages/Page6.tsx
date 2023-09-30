import { useFormStore } from "~/state/stateForm";
import { MotionButton } from "../MotionCompoenents";
import { motion } from "framer-motion";
import { ibm_serif } from "~/pages";

interface Props {
  nextPage(arg0?: number): void;
}
export const Page6 = ({ nextPage }: Props) => {
  const { setWorkType } = useFormStore();
  return (
    <motion.div
      initial={{ opacity: 0, display: "none" }}
      animate={{ opacity: 1, display: "flex", transition: { delay: 0.5 } }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center gap-5"
    >
      <motion.h2
        className={`${ibm_serif.className} font scroll-m-20 border-b pb-2 text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0`}
      >
        Czy preferujesz pracę z ludźmi, pracę z danymi, czy może prace z
        przyrodą?
      </motion.h2>
      <motion.div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
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
    </motion.div>
  );
};
