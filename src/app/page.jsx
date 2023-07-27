import styles from "./page.module.scss";

import Hero from "@/libs/components/hero/Hero";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";
import Direction from "@/libs/components/ourDirections/Direction";
import AboutCompany from "@/libs/components/about_company/AboutCompany";


export default function Home() {
  return (
    <>
      <ContactPanel />
      <Hero />

      <Direction />
      <AboutCompany />
    </>
  );
}