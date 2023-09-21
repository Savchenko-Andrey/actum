"use client";

import dynamic from "next/dynamic";

import { useEffect, useState, useIsBig } from "@/libs/hooks/hooks";

import ModalForm from "@/libs/modal/modalForm/modalForm";
// import Animations from "./Animations";

const Animations = dynamic(() => import("./Animations"), { ssr: false });

import styles from "./Hero.module.scss";

export default function Hero({ type }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isScroll, setIsScroll] = useState(null);

  const isDesktop = useIsBig();

  let isSessionStorageSave = true;

  if (typeof window !== "undefined") {
    isSessionStorageSave = JSON.parse(
      sessionStorage.getItem("hero_page") || true
    );
  }

  useEffect(() => {
    const scrollY = document.body.style.top;
    const hero = document.getElementById("hero_section");

    if (isSessionStorageSave) {
      hero.style.overflowY = "hidden";
      document.body.style.position = "fixed";

      document.body.style.left = "50%";
      document.body.style.transform = "translateX(-50%)";

      document.body.style.overflow = "hidden";

      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    setTimeout(
      () => {
        hero.style.overflowY = "";
        document.body.style.overflow = "";
        document.body.style.height = "auto";
        document.body.style.left = "0%";
        document.body.style.transform = "";

        document.body.style.position = "initial";
        document.body.style.top = "";
      },
      isDesktop ? 4000 : 3500
    );
  }, []);

  useEffect(() => {
    if (isOpenModal) {
      setIsScroll(window.scrollY);

      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    }
    window.scrollTo(0, isScroll);

    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.maxHeight = "";
    };
  }, [isOpenModal]);

  return (
    <>
      <section className={styles.hero_section}>
        <div id="hero_section" className={styles.hero_conteiner}>
          <Animations isSessionStorageSave={isSessionStorageSave} />
        </div>
      </section>
      {isOpenModal && (
        <ModalForm
          type={type}
          setIsOpenModal={setIsOpenModal}
          isOpenModal={isOpenModal}
        />
      )}
    </>
  );
}
