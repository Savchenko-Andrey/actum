import NestedHero from "@/shared/components/nestedPageHero/NestedHero";
import Path from "@/libs/pages/components/path/Path";
import ContactPanel from "@/libs/components/contactPanel/ContactPanel";
import CurrentPublication from "@/libs/pages/components/currentPublication/CurrentPublication";

import { META_DATA_DESCRIPTION, META_DATA_TITLE } from "@/shared/enums/enum";

export const metadata = {
  title: META_DATA_TITLE.BOOK,
  description: META_DATA_DESCRIPTION.BOOK,
};

import hero_public from "@/assets/svg/publications_hero.png";

import { getBlogPage } from "@/shared/services/api/api";

export default async function page() {
  const {
    data: {
      attributes: { Hero: hero },
    },
  } = await getBlogPage("ru");
  return (
    <>
      <NestedHero img={hero_public} {...hero} />
      <ContactPanel type={"home"} />
      <Path
        path="ЧОМУ ВІЙСЬКОВИМ НЕ ВИПЛАЧУЮТЬ КОМПЕНСАЦІЮ ЗА ПОРАНЕННЯ?"
        type="family_color"
        back="/blog-3-1"
        text="Публікації"
      />
      <CurrentPublication />
    </>
  );
}