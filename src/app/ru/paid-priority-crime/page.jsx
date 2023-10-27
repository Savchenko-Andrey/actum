import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/shared/enums/enum";

import ContactPanel from "@/libs/components/contactPanel/ContactPanel";
import HeroLawyers from "@/libs/pages/components/hero/HeroLawyers";
import QuestionsList from "@/libs/pages/components/QuestionList/QuestionsList";
import Specialists from "@/libs/pages/components/specialists/Specialists";
import StepsLawyers from "@/libs/pages/components/stepLawyers/StepsLawyers";
import Description from "@/libs/pages/services/components/description/Description";
import Response from "@/libs/components/response/Response";
import AboutCards from "@/libs/pages/components/aboutCards/AboutCards";
import SuccessfulBusiness from "@/libs/pages/components/successfulBusiness/SuccessfulBusiness";
import FormSection from "@/libs/pages/components/formSection/FormSection";
import Price from "@/libs/pages/components/priceCards/Price";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

import { getFamilyLwyer } from "@/shared/services/api/getFamilyLawyer";

export default async function Crimes() {
  const {
    data: {
      attributes: { Form: form, Info: info },
    },
  } = await getFamilyLwyer();
  return (
    <>
      <ContactPanel type={"crime"} />
      <HeroLawyers type={"crime"} />
      <QuestionsList type={"crime"} />
      <AboutCards type={"crime"} />
      <SuccessfulBusiness type={"crime"} />
      <Specialists type={"crime"} />
      <Description type={"crime"} />
      <Response type={"crime"} />
      <StepsLawyers type={"crime"} />
      <Price type={"crime"} />
      <FormSection type={"crime"} formData={form} {...info} />
    </>
  );
}