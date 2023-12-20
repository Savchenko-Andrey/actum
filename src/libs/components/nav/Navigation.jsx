import Link from "next/link";

import Select from "./SelectNav/Select";
import ArrowOpen from "./Animated/ArrowOpen";

import styles from "./Navigation.module.scss";

export default function Navigation({
  route,
  onClick,
  onHover,
  setOnHover,
  isMobile,
  setIsOpenMenu,
  nav,
  servicesRoute,
  isOpenMenu,
  isLocal = false,
}) {
  const SERVICES = isLocal ? "услуги" : "послуги";

  return (
    <div style={{ position: "relative" }}>
      <ul className={styles.nav_list}>
        {nav.map(({ title, path, id }) => (
          <li
            key={id}
            className={styles.link}
            onMouseOver={() =>
              title.toLowerCase() === SERVICES
                ? setOnHover(true)
                : setOnHover(false)
            }
          >
            <Link
              prefetch={false}
              className={
                route === `/${path}`
                  ? styles.active_link
                  : styles.not_active_link
              }
              rel="alternate"
              hrefLang={isLocal ? "ru" : "uk"}
              href={`/${path}`}
              onClick={onClick}
            >
              <p>{title.toUpperCase()}</p>
            </Link>

            {isMobile && title.toLowerCase() === SERVICES && (
              <ArrowOpen
                isOpenMenu={isOpenMenu}
                setIsOpenMenu={setIsOpenMenu}
              />
            )}

            {isMobile && isOpenMenu && title.toLowerCase() === SERVICES && (
              <Select
                locale={isLocal}
                routes={servicesRoute}
                onClick={onClick}
                isOpen={isOpenMenu}
                isMobile={isMobile}
              />
            )}
          </li>
        ))}
      </ul>
      {/* SEO */}
      <ul style={{ visibility: "hidden", position: "absolute" }}>
        {servicesRoute.map(({ List, Title, id, path, directions }) => {
          var dir = directions === "root" ? "" : directions;
          var shortDir = isLocal ? `/ru/${dir}` : `/${dir}`;

          return (
            <li key={id}>
              <p itemProp="title">{Title}</p>
              <Link
                prefetch={false}
                href={
                  isLocal
                    ? dir
                      ? `ru/${dir}/${path}`
                      : `${path}`
                    : `${dir}/${path}`
                }
                itemProp="url"
                hrefLang={isLocal ? "ru" : "uk"}
              ></Link>
              <ul>
                {List.map(({ text, path: pathService }, id) => {
                  return (
                    <li key={id}>
                      <p itemProp="title">{text}</p>
                      <Link
                        prefetch={false}
                        rel="alternate"
                        hrefLang={isLocal ? "ru" : "uk"}
                        href={
                          dir
                            ? `${shortDir}/${path}/${pathService}`
                            : `/${path}/${pathService}`
                        }
                      ></Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
      {!isMobile && onHover && (
        <Select
          isOpen={onHover}
          locale={isLocal}
          onClick={onClick}
          routes={servicesRoute}
          isMobile={isMobile}
        />
      )}
    </div>
  );
}
