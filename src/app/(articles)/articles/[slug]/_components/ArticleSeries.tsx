import IconArrowDownCircle from "@/assets/icons/ArrowDownCircle";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  preload: true,
});

const ArticleSeries = () => {
  return (
    <div className="bg-tertiary-bg-2 flex justify-between rounded-10 px-2 py-4 md:pl-6 md:pr-8">
      <div className="flex flex-col space-y-6">
        <span
          className={`${alexandria.className} text-caption2 font-medium capitalize text-[#9269BA] md:text-body2`}
        >
          series
        </span>
        <span
          className={`${alexandria.className} text-caption2 font-medium md:text-caption1`}
        >
          Build-Time Syntax Highlighting... |{" "}
          <span className="text-[#9269BA]">2 of 10</span>
        </span>
      </div>

      <div className="flex justify-center md:items-center">
        <IconArrowDownCircle
          viewBox="0 0 54 54"
          className="h-8 w-8 cursor-pointer md:h-12 md:w-12 [&_path]:stroke-[#9269BA]"
        />
      </div>
    </div>
  );
};

export default ArticleSeries;
