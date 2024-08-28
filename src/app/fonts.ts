import { Ubuntu, Fira_Code, Alexandria, Quantico } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "600"],
});

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  preload: false,
});

const quantico = Quantico({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: false,
});

export { ubuntu, firaCode, alexandria, quantico };
