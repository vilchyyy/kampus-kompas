import { motion } from "framer-motion";
import { useFormStore } from "~/state/stateForm";
import { MotionButton } from "../MotionCompoenents";
import { ibm_serif } from "~/pages";

interface Props {
  nextPage(): void;
}
export const Page1 = ({ nextPage }: Props) => {
  const { setUserType } = useFormStore();
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
        Kim jesteś?
      </motion.h2>
      <motion.div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
        <MotionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setUserType("parent");
            nextPage();
          }}
        >
          Rodzicem
        </MotionButton>
        <MotionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setUserType("schoolGraduate");
            nextPage();
          }}
        >
          Absolwentem szkoły ponadpodstawowej
        </MotionButton>
        <MotionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setUserType("collegeGraduate");
            nextPage();
          }}
        >
          Absolwentem studiów
        </MotionButton>
        <MotionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setUserType("abroadGraduate");
            nextPage();
          }}
        >
          Absolwentem z zagranicy
        </MotionButton>
      </motion.div>
    </motion.div>
  );
};
