import { Fira_Code } from "next/font/google";
import ConnectLinksList from "./ConnectList";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
});


const ConnectSection = () => {
  return (
    <section className="mt-11 space-y-4 px-4 md:mt-20 md:space-y-10 md:p-0">
      <header>
        <h2
          className={`${firaCode.className} text-body1 font-bold capitalize md:text-title3`}
        >
          connect
        </h2>
      </header>

      <ConnectLinksList />
    </section>
  );
};

export default ConnectSection;
