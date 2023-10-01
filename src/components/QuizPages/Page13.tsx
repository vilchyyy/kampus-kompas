import { useFormStore } from "~/state/stateForm";
import { MotionButton } from "../MotionCompoenents";
import { motion } from "framer-motion";
import { ibm_serif } from "~/pages";
import { useTranslation } from "react-i18next"

interface Props {
  nextPage(arg0?: number): void;
}
export const Page13 = ({ nextPage }: Props) => {
  const { setTechLoveType } = useFormStore();
  const { t } = useTranslation()

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
        {t("Jestem zainteresowany pracą z technologią i komputerami.")}
      </motion.h2>
      <motion.div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
        <MotionButton
          className="w-52 md:w-36 lg:w-44"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setTechLoveType(0);
            nextPage();
          }}
        >
          {t("Bardzo się nie zgadzam")}
        </MotionButton>
        <MotionButton
          className=" w-52 md:w-36 lg:w-44"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setTechLoveType(1);
            nextPage();
          }}
        >
          {t("Nie zgadzam się")}
        </MotionButton>
        <MotionButton
          className="w-52 md:w-36 lg:w-44"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setTechLoveType(2);
            nextPage();
          }}
        >
          {t("Bez zdania")}
        </MotionButton>

        <MotionButton
          className="w-52 md:w-36 lg:w-44"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setTechLoveType(3);
            nextPage();
          }}
        >
          {t("Zgadzam się")}
        </MotionButton>
        <MotionButton
          className="w-52 md:w-36 lg:w-44"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setTechLoveType(4);
            nextPage();
          }}
        >
          {t("Bardzo się zgadzam")}
        </MotionButton>
      </motion.div>
    </motion.div>
  );
};
