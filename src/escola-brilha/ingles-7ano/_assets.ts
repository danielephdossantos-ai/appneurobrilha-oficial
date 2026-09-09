// Assets do 7º Ano — reusa o pack Academy do 6º Ano + adiciona lugares.
import { IMG as IMG6 } from "../ingles-6ano/_assets";
import bankAsset from "@/assets/ingles-4ano/u4-a05/bank.png.asset.json";
import schoolCityAsset from "@/assets/ingles-4ano/u4-a05/school-city.png.asset.json";

export const IMG = {
  ...IMG6,
  BANK: bankAsset.url,
  SCHOOL_CITY: schoolCityAsset.url,
};
