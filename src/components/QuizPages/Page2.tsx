import { motion } from "framer-motion";
import { useFormStore } from "~/state/stateForm";
import { MotionButton } from "../MotionCompoenents";
import { ibm_serif } from "~/pages";

interface Props {
  nextPage(): void;
}
export const Page2 = ({ nextPage }: Props) => {
  const { setStudiesType } = useFormStore();
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
        Jakim rodzajem studiów jesteś zainteresowany?
      </motion.h2>
      <motion.div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
        <MotionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setStudiesType("fullTime");
            nextPage();
          }}
          className="w-60"
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
          className="w-60"
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
          className="w-60"
        >
          Studia online
        </MotionButton>
      </motion.div>
    </motion.div>
  );
};
