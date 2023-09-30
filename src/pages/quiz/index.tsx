import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Page1 } from "~/components/QuizPages/Page1";
import { Page2 } from "~/components/QuizPages/Page2";
import { Page3 } from "~/components/QuizPages/Page3";
export default function Step1() {
  const [page, setPage] = useState(0);
  const nextPage = (number = 1) => {
    setPage((page) => page + number);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center p-2">
      <div className="flex gap-2">
        <AnimatePresence mode="popLayout">
          {page === 0 && <Page1 nextPage={nextPage} />}
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
          {page === 1 && <Page2 nextPage={nextPage} />}
        </AnimatePresence>
        <AnimatePresence>
          {page === 2 && <Page3 nextPage={nextPage} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
