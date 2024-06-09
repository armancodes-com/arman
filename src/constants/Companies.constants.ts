import { StaticImageData } from "next/image";
import OneFitImage from "../../public/images/Onefit.jpeg";
import FanoosPrintImage from "../../public/images/fanoos-print.jpeg";
import NGAImage from "../../public/images/nga-logo.jpeg";

export interface ICompanyInfoProps {
  id: string;
  image: string | StaticImageData;
  role: string;
  companyName: string;
  location: string;
  startDate: string;
  endData: string | "present";
  jobType: "Remote" | "Hybrid" | "On-site";
}

export const COMPANIES_DATA: ICompanyInfoProps[] = [
  {
    id: "1",
    image: OneFitImage,
    companyName: "One Fit",
    jobType: "Hybrid",
    location: "Amsterdam, Netherlands",
    role: "Backend Engineer",
    startDate: "2022",
    endData: "present",
  },
  {
    id: "2",
    image: NGAImage,
    companyName: "NGA - Next Generation Advanced",
    jobType: "Remote",
    location: "Los Angeles, United States",
    role: "Backend Developer",
    startDate: "2020",
    endData: "2022",
  },
  {
    id: "3",
    image: FanoosPrintImage,
    companyName: "Fanoosprint",
    jobType: "On-site",
    location: "Tehran, Iran",
    role: "Backend Developer",
    startDate: "2019",
    endData: "2020",
  },
];
