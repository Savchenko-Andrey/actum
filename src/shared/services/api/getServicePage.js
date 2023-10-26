export const getServicePage = async (locale = "ua") => {
  // PROD
  const res = await fetch(
    `${process.env.URL_CLOUD_STRAPI}/${process.env.API_SERVICE_PAGE}?${process.env.QUERY_SERVICE_PAGE}`,
    { cache: "no-cache" }
  );

  console.log(
    `${process.env.URL_CLOUD_STRAPI}/${process.env.API_SERVICE_PAGE}?${process.env.QUERY_SERVICE_PAGE}`
  );
  // DEV
  // const res = await fetch(
  //   `${process.env.API_LOCALE_BASE_URL}/${process.env.API_SERVICE_PAGE}?${process.env.QUERY_SERVICE_PAGE}`,
  //   { cache: "no-cache" }
  // );

  const data = await res.json();

  return data;
};
