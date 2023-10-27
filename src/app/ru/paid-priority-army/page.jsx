import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/shared/enums/enum";

import ContactPanel from "@/libs/components/contactPanel/ContactPanel";
import HeroLawyers from "@/libs/pages/components/hero/HeroLawyers";
import QuestionsList from "@/libs/pages/components/QuestionList/QuestionsList";
import Specialists from "@/libs/pages/components/specialists/Specialists";
import StepsLawyers from "@/libs/pages/components/stepLawyers/StepsLawyers";
import Descrition from "@/libs/pages/services/components/description/Description";
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

export default async function PaidArmy() {
  const {
    data: {
      attributes: { Form: form, Info: info },
    },
  } = await getFamilyLwyer();
  return (
    <>
      <ContactPanel type={"army"} />
      <HeroLawyers type={"army"} />
      <QuestionsList type={"army"} />
      <AboutCards type={"army"} />
      <SuccessfulBusiness type={"army"} />
      <Specialists type={"army"} />
      <Descrition type={"army"} />
      <Response type={"army"} />
      <StepsLawyers type={"army"} />
      <Price type={"army"} />
      <FormSection type={"army"} formData={form} {...info} />
    </>
  );
}