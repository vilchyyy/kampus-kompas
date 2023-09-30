import { MotionButton } from "../MotionCompoenents";
import { motion } from "framer-motion";
import Slider from "rc-slider";
import { ibm_serif } from "~/pages";
import "rc-slider/assets/index.css";
import { type LocalizationKmType, useFormStore } from "~/state/stateForm";

interface Props {
  nextPage(arg0?: number): void;
}
export const Page3a = ({ nextPage }: Props) => {
  const { setLocalizationKmType } = useFormStore();

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
        Jak daleko może znajdować się uczelnia?
      </motion.h2>
      <motion.div className="flex w-full flex-col items-center justify-center gap-10">
        <Slider
          className="m-2 w-80"
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
            50: "50 km",
            100: "100 km",
            200: "200 km",
            300: "300 km",
            500: "500 km",
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
          Dalej
        </MotionButton>
      </motion.div>
    </motion.div>
  );
};