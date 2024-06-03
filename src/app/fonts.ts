import { Ubuntu, Fira_Code } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "600"],
});

export { ubuntu, firaCode };
