import { useFormStore } from "~/state/stateForm";
import { MotionButton } from "../MotionCompoenents";
import { motion } from "framer-motion";
import { ibm_serif } from "~/pages";

interface Props {
  nextPage(arg0?: number): void;
}
export const Page14 = ({ nextPage }: Props) => {
  const { setHistoryAndCultureType } = useFormStore();
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
        Pasjonuję mnie historia oraz kultura.
      </motion.h2>
      <motion.div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
        <MotionButton
          className="w-52 md:w-36 lg:w-44"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setHistoryAndCultureType(0);
            nextPage();
          }}
        >
          Bardzo się nie zgadzam
        </MotionButton>
        <MotionButton
          className=" w-52 md:w-36 lg:w-44"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setHistoryAndCultureType(1);
            nextPage();
          }}
        >
          Nie zgadzam się
        </MotionButton>
        <MotionButton
          className="w-52 md:w-36 lg:w-44"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setHistoryAndCultureType(2);
            nextPage();
          }}
        >
          Bez zdania
        </MotionButton>

        <MotionButton
          className="w-52 md:w-36 lg:w-44"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setHistoryAndCultureType(3);
            nextPage();
          }}
        >
          Zgadzam się
        </MotionButton>
        <MotionButton
          className="w-52 md:w-36 lg:w-44"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setHistoryAndCultureType(4);
            nextPage();
          }}
        >
          Bardzo się zgadzam
        </MotionButton>
      </motion.div>
    </motion.div>
  );
};
