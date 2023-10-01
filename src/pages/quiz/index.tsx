import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Nav from "~/components/Nav";
import { Page1 } from "~/components/QuizPages/Page1";
import { Page2 } from "~/components/QuizPages/Page2";
import { Page3 } from "~/components/QuizPages/Page3";
import { Page3a } from "~/components/QuizPages/Page3a";
import { Page4 } from "~/components/QuizPages/Page4";
import { Page5 } from "~/components/QuizPages/Page5";
import { Page6 } from "~/components/QuizPages/Page6";
import { Page7 } from "~/components/QuizPages/Page7";
import { Page8 } from "~/components/QuizPages/Page8";
import { Page9 } from "~/components/QuizPages/Page9";
import { Page10 } from "~/components/QuizPages/Page10";
import { Page11 } from "~/components/QuizPages/Page11";
import { Page12 } from "~/components/QuizPages/Page12";
import { Page13 } from "~/components/QuizPages/Page13";
import { Page14 } from "~/components/QuizPages/Page14";
import { Page15 } from "~/components/QuizPages/Page15";
import { Page16 } from "~/components/QuizPages/Page16";
import { Page17 } from "~/components/QuizPages/Page17";
import { Page18 } from "~/components/QuizPages/Page18";
import { FinalPage } from "~/components/QuizPages/FinalPage";
import { ProgressDot } from "~/components/ProgressDot";

export default function Step1() {
  const [page, setPage] = useState(0);
  const nextPage = (number = 1) => {
    setPage((page) => page + number);
  };

  return (
    <div className="h-screen">
      <Nav />
      <div className=" mt-[-6rem] flex h-screen items-center justify-center p-2">
        <div className="flex flex-col gap-2">
          <AnimatePresence mode="popLayout">
            {page === 0 && <Page1 nextPage={nextPage} />}
          </AnimatePresence>
          <AnimatePresence mode="popLayout">
            {page === 1 && <Page2 nextPage={nextPage} />}
          </AnimatePresence>
          <AnimatePresence>
            {page === 2 && <Page3 nextPage={nextPage} />}
          </AnimatePresence>
          <AnimatePresence>
            {page === 3 && <Page3a nextPage={nextPage} />}
          </AnimatePresence>
          <AnimatePresence>
            {page === 4 && <Page4 nextPage={nextPage} />}
          </AnimatePresence>
          <AnimatePresence>
            {page === 5 && <Page5 nextPage={nextPage} />}
          </AnimatePresence>
          <AnimatePresence>
            {page === 6 && <Page6 nextPage={nextPage} />}
          </AnimatePresence>
          <AnimatePresence>
            {page === 7 && <Page7 nextPage={nextPage} />}
          </AnimatePresence>
          <AnimatePresence>
            {page === 8 && <Page8 nextPage={nextPage} />}
          </AnimatePresence>
          <AnimatePresence>
            {page === 9 && <Page9 nextPage={nextPage} />}
          </AnimatePresence>
          <AnimatePresence>
            {page === 10 && <Page10 nextPage={nextPage} />}
          </AnimatePresence>
          <AnimatePresence>
            {page === 11 && <Page11 nextPage={nextPage} />}
          </AnimatePresence>
          <AnimatePresence>
            {page === 12 && <Page12 nextPage={nextPage} />}
          </AnimatePresence>
          <AnimatePresence>
            {page === 13 && <Page13 nextPage={nextPage} />}
          </AnimatePresence>
          <AnimatePresence>
            {page === 14 && <Page14 nextPage={nextPage} />}
          </AnimatePresence>
          <AnimatePresence>
            {page === 15 && <Page15 nextPage={nextPage} />}
          </AnimatePresence>
          <AnimatePresence>
            {page === 16 && <Page16 nextPage={nextPage} />}
          </AnimatePresence>
          <AnimatePresence>
            {page === 17 && <Page17 nextPage={nextPage} />}
          </AnimatePresence>
          <AnimatePresence>
            {page === 18 && <Page18 nextPage={nextPage} />}
          </AnimatePresence>
          <AnimatePresence>{page === 19 && <FinalPage />}</AnimatePresence>
          <AnimatePresence>
            {page < 19 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed bottom-8 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1"
              >
                {(() => {
                  const dots = [];
                  for (let i = 0; i <= 18; i++) {
                    dots.push(<ProgressDot page={page} index={i} />);
                  }
                  return dots;
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
