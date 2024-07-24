import { Platform } from "./Platform";

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; //is not platform array!! Its an array of objects where wich object as a property called platform of type Platform
  metacritic: number;
  rating_top: number;
  description_raw: string;
}
