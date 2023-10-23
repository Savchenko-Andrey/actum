export const getContactsPage = async () => {
  // PROD
  // const res = await fetch(
  //   `${process.env.URL_CLOUD_STRAPI}/${process.env.API_CONTACT_PAGE}?${process.env.QUERY_CONTACT_PAGE}`,
  //   { cache: "reload" }
  // );

  // DEV
  const res = await fetch(
    `${process.env.API_LOCALE_BASE_URL}/${process.env.API_CONTACT_PAGE}?${process.env.QUERY_CONTACT_PAGE}`,
    { cache: "no-cache" }
  );

  const data = await res.json();

  return data;
};
