import { useFormStore } from "~/state/stateForm";
import { MotionButton } from "../MotionCompoenents";
import { motion } from "framer-motion";
import { ibm_serif } from "~/pages";
import { useTranslation } from "react-i18next";

interface Props {
  nextPage(arg0?: number): void;
}
export const Page10 = ({ nextPage }: Props) => {
  const { setSkills } = useFormStore();
  const { t } = useTranslation();

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
        {t("Jakie umiejętności uważasz za swoje największe atuty?")}
      </motion.h2>
      <motion.div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
        <MotionButton
          className="w-52 md:w-36 lg:w-44"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setSkills("dataAnalyze");
            nextPage();
          }}
        >
          {t("Rozwiązywanie problemów")}
        </MotionButton>
        <MotionButton
          className=" w-52 md:w-36 lg:w-44"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setSkills("communication");
            nextPage();
          }}
        >
          {t("Empatia i komunikacja")}
        </MotionButton>
        <MotionButton
          className="w-52 md:w-36 lg:w-44"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setSkills("creativity");
            nextPage();
          }}
        >
          {t("Kreatywność i innowacyjność")}
        </MotionButton>
        <MotionButton
          className="w-52 md:w-36 lg:w-44"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setSkills("technologyUnderstanding");
            nextPage();
          }}
        >
          {t("Zrozumienie technologii")}
        </MotionButton>
      </motion.div>
    </motion.div>
  );
};
