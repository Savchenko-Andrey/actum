import HeroLawyers from "@/libs/pages/components/hero/HeroLawyers";
import QuestionsList from "@/libs/pages/components/QuestionList/QuestionsList";
import Specialists from "@/libs/pages/components/specialists/Specialists";
import StepsLawyers from "@/shared/components/stepLawyers/StepsLawyers";
import Descrition from "@/libs/pages/services/components/description/Description";
import Response from "@/libs/components/response/Response";
import AboutCards from "@/libs/pages/components/aboutCards/AboutCards";
import SuccessfulBusiness from "@/libs/pages/components/successfulBusiness/SuccessfulBusiness";
import FormSection from "@/shared/components/formSection/FormSection";
import Price from "@/libs/pages/components/priceCards/Price";
import StructureData from "@/shared/components/structure_data_tamplate/StructureData";

import { getLawyerDynamicPage } from "@/shared/services/api/api";
import { makeDynamicSeoTemplate } from "@/shared/helpers/helpers";

const { API_ARMY_PAGE, API_ARMY_SERVICES } = process.env;

export async function generateMetadata({ params, searchParams }) {
  return makeDynamicSeoTemplate(params["name"], API_ARMY_SERVICES);
}

export default async function page({ params }) {
  const { data } = await getLawyerDynamicPage(
    params["name"],
    API_ARMY_SERVICES
  );

  const {
    attributes: {
      Hero: hero,
      about_block,
      Employeers_list: employeer_list,
      Form: form,
      Info: info,
      Responses: responses,
      questions_list,
      bread_crumbs,
      description_lawyer,
      statistics,
      Steps: steps,
      successful_deals,
      price_block,
      title_price_block,
      seo,
    },
  } = data[0];

  return (
    <>
      <StructureData data={seo["structuredData"]} />

      <HeroLawyers type={"army"} {...hero} bread_crumbs={bread_crumbs} />
      <QuestionsList
        type={"army"}
        about_block={about_block}
        questions={questions_list}
      />
      <AboutCards type={"army"} listCard={statistics} />
      <SuccessfulBusiness type={"army"} {...successful_deals} />
      <Specialists type={"army"} {...employeer_list} />
      <Descrition type={"army"} description={description_lawyer} />
      <Response type={"army"} {...responses} />
      <StepsLawyers type={"army"} {...steps} />
      <Price type={"army"} list={price_block} title={title_price_block} />
      <FormSection type={"army"} formData={form} {...info} />
    </>
  );
}