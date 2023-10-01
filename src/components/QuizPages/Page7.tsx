import { useFormStore } from "~/state/stateForm";
import { MotionButton } from "../MotionCompoenents";
import { motion } from "framer-motion";
import { ibm_serif } from "~/pages";
import { useTranslation } from "react-i18next"

interface Props {
  nextPage(arg0?: number): void;
}
export const Page7 = ({ nextPage }: Props) => {
  const { setWorkDestinationType } = useFormStore();
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
        {t("Czy preferujesz kierunki studiów prowadzące do pracy biurowej, fizyczna, naukowej, czy może bardziej jako freelancer?")}
      </motion.h2>
      <motion.div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
        <MotionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setWorkDestinationType("office");
            nextPage();
          }}
        >
          {t("Praca biurowa")}
        </MotionButton>
        <MotionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setWorkDestinationType("science");
            nextPage();
          }}
        >
          {t("Praca naukowa")}
        </MotionButton>
        <MotionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setWorkDestinationType("manual");
            nextPage();
          }}
        >
          {t("Praca fizyczna")}
        </MotionButton>
        <MotionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setWorkDestinationType("freelancer");
            nextPage();
          }}
        >
          {t("Freelancerka")}
        </MotionButton>
      </motion.div>
    </motion.div>
  );
};
