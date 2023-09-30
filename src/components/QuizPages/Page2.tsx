import { motion } from "framer-motion";
import { useFormStore } from "~/state/stateForm";
import { MotionButton } from "../MotionCompoenents";

interface Props {
  nextPage(): void;
}
export const Page2 = ({ nextPage }: Props) => {
  const { setStudiesType } = useFormStore();
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
          setStudiesType("fullTime");
          nextPage();
        }}
      >
        Studia dzienne
      </MotionButton>
      <MotionButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setStudiesType("partTime");
          nextPage();
        }}
      >
        Studia zaoczne
      </MotionButton>
      <MotionButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setStudiesType("online");
          nextPage();
        }}
      >
        Studia online
      </MotionButton>
      <MotionButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setStudiesType("evening");
          nextPage();
        }}
      >
        Studia wieczorowe
      </MotionButton>
    </motion.div>
  );
};
