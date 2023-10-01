import { MotionButton } from "../MotionCompoenents";
import { motion } from "framer-motion";
import Slider from "rc-slider";
import { ibm_serif } from "~/pages";
import "rc-slider/assets/index.css";
import { type LocalizationKmType, useFormStore } from "~/state/stateForm";
import { useTranslation } from "react-i18next"

interface Props {
  nextPage(arg0?: number): void;
}
export const Page3a = ({ nextPage }: Props) => {
  const { setLocalizationKmType } = useFormStore();
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
        {t("Jak daleko może znajdować się uczelnia?")}
      </motion.h2>
      <motion.div className="flex w-full flex-col items-center justify-center gap-16 p-4">
        <Slider
          className="w-80"
          min={50}
          max={500}
          defaultValue={50}
          styles={{
            rail: { backgroundColor: "#8e8e8e" },
            track: { backgroundColor: "#141414" },
            handle: {
              backgroundColor: "#000000",
              border: "none",
              outline: "none",
            },
            tracks: { backgroundColor: "#000000" },
          }}
          dotStyle={{
            backgroundColor: "#000000",
            border: "none",
            outline: "none",
          }}
          activeDotStyle={{
            backgroundColor: "#000000",
            border: "none",
            outline: "none",
            scale: 1.5,
          }}
          marks={{
            50: {
              style: { wordBreak: "break-all", width: "26px" },
              label: "50 km",
            },
            100: {
              style: { wordBreak: "break-all", width: "26px" },
              label: "100 km",
            },
            200: {
              style: { wordBreak: "break-all", width: "26px" },
              label: "200 km",
            },
            300: {
              style: { wordBreak: "break-all", width: "26px" },
              label: "300 km",
            },
            500: {
              style: { wordBreak: "break-all", width: "26px" },
              label: "500 km",
            },
          }}
          step={null}
          onChange={(value) => {
            setLocalizationKmType(
              String(value as number) as LocalizationKmType,
            );
          }}
        />
        <MotionButton
          className=" w-52 md:w-36 lg:w-44"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            nextPage();
          }}
        >
          {t("Dalej")}
        </MotionButton>
      </motion.div>
    </motion.div>
  );
};
