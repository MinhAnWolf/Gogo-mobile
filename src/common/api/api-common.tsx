const BASE_URL: string = "http://192.168.0.95:8080/api";

export const API = {
  AUTHENTICATION: BASE_URL + "/auth/login",

  // Address.
  CITY_SEARCH: BASE_URL + "/city/search",
  LOCATION_SEARCH: BASE_URL + "/location/search",
  LOCATION_CAT_SEARCH: BASE_URL + "/location-cat/search",
  PROVINCE_SEARCH: BASE_URL + "/province/search",
  DISTRICT_SEARCH: BASE_URL + "/district/search",
  WARD_SEARCH: BASE_URL + "/ward/search",

  // Trip
  TRIP_CREATE: BASE_URL + "/trip/create",

  // Eateries
  EATERIES_SEARCH: BASE_URL + "/eateries/v2/search",

  // HISTORY
  SAVE_SEARCH_HISTORY: BASE_URL + "/history/create",

  // FETCH
  FETCH_SEARCH_HISTORY: BASE_URL + "/history/search",

  // COMMENT - RATING - REVIEW
  ADD_COMMENT: BASE_URL + "/comment/create",
};
