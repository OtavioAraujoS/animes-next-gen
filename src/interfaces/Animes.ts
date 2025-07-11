import { filterType } from "@/app/(painel)/Dashboard";

export interface Anime {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  episodes: number;
  status: filterType;
  genres: string[];
  createdIn: string;
}
