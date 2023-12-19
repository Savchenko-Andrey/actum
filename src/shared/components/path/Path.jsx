"use client";
import Link from "next/link";

import styles from "./Path.module.scss";

import { useEffect } from "@/shared/hooks/hooks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function Path({
  type,
  parent_page,
  children_link,
  children_page,
  parent_link,
  isNestedPage,
  nested_page_title,
}) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className={styles.breadcrumbs}>
      <div
        className={styles.wrapper_path}
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <Link href={`/${parent_link}`} scroll={true} itemProp="url">
          <p className={styles.service_text} itemProp="title">
            {parent_page}
          </p>
        </Link>

        <FontAwesomeIcon
          icon={faAnglesRight}
          className={`${styles.arrow_icon} ${styles[type]}`}
        />
        {isNestedPage ? (
          <Link href={`/${children_link}`} itemProp="url">
            <p
              className={`${styles.path_text} ${styles[type]} ${styles.link}`}
              itemProp="title"
            >
              {children_page}
            </p>
          </Link>
        ) : (
          <p
            className={`${styles.path_text} ${styles[type]} ${styles.link}`}
            itemProp="title"
          >
            {children_page}
          </p>
        )}
        {isNestedPage && (
          <>
            <FontAwesomeIcon
              icon={faAnglesRight}
              className={`${styles.arrow_icon} ${styles[type]}`}
            />
            <p
              className={`${styles.path_text} ${styles[type]}`}
              itemProp="title"
            >
              {nested_page_title}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
