import dynamic from "next/dynamic";

import Hero from "@/libs/components/hero/Hero";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";

const Direction = dynamic(() =>
  import("@/libs/components/ourDirections/Direction")
);
const Response = dynamic(() => import("@/libs/components/response/Response"));
const AboutCompany = dynamic(() =>
  import("@/libs/components/about_company/AboutCompany")
);

import { getHomePage } from "@/shared/services/api/api";

const structuredData = {
  "@context": "http://schema.org/",
  "@type": "LocalBusiness",
  name: "Адвокатське об’єднання Актум",
  image:
    "https://actum.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdesctop-filter.0f6eb970.png&w=1920&q=75",
  telephone: "+38-067-179-72-13",
  url: "https://actum.vercel.app/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Оболонська набережна 15, корпус 5",
    addressLocality: "Київ",
    addressRegion: "Київська область",
    postalCode: "04210",
    addressCountry: "Україна",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "10:00",
      closes: "17:00",
    },
  ],
};

export default async function Home() {
  const {
    data: {
      attributes: {
        Hero: hero,
        Directions: directions,
        Responses: responses,
        About: about,
      },
    },
  } = await getHomePage("ru");

  return (
    <>
      <div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        ></script>
      </div>
      <Hero type={"home"} {...hero} />
      <ContactPanel type={"home"} />
      <Direction {...directions} />
      <AboutCompany type={"family"} {...about} />
      <Response type={"family"} {...responses[0]} />
    </>
  );
}