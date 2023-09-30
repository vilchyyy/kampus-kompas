import { motion } from "framer-motion";
import { useFormStore } from "~/state/stateForm";
import { MotionButton } from "../MotionButton";

interface Props {
  nextPage(): void;
}
export const Page1 = ({ nextPage }: Props) => {
  const { setUserType } = useFormStore();
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
  );
};
