const BASE_URL = "https://covid19.mathdro.id/api"

const ENDPOINTS = {
    GLOBAL : `${BASE_URL}`,
    SUMMARY_GLOBAL : `${BASE_URL}/og`,
    IDN : `${BASE_URL}/countries/indonesia`,
    SUMMARY_IDN : `${BASE_URL}/countries/indonesia/og`
}

export default ENDPOINTS;