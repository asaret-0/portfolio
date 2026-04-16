import esData from "./es.json";
import enData from "./en.json";

const translations = { es: esData, en: enData } as const;

export type Lang = "es" | "en";

export function getLangFromURL(url: URL): Lang {
  return url.searchParams.get("lang") === "en" ? "en" : "es";
}

export function getData(lang: Lang) {
  return translations[lang];
}