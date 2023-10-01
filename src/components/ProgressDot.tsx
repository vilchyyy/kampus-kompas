import { motion } from "framer-motion";

export const ProgressDot = ({
  page,
  index,
}: {
  page: number;
  index: number;
}) => {
  return (
    <motion.div
      layout
      className={`${
        page === index
          ? "h-3 w-3 bg-zinc-700"
          : page > index
          ? "h-2 w-2 bg-zinc-500"
          : "h-2 w-2 bg-zinc-400"
      } rounded-full `}
    ></motion.div>
  );
};
