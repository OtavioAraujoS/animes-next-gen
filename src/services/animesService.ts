import { ApiResponse } from "@/interfaces/ApiResponse";
import { api as apiService, ApiService, defaultUrl } from "./api";
import { Anime } from "@/interfaces/Animes";

class AnimesService {
  constructor(private readonly api: ApiService) {}

  public async getAnimes(): Promise<ApiResponse<Anime[]>> {
    try {
      const response = await this.api.get(`${defaultUrl}/animes`);
      return {
        data: response as Anime[],
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        message: String(error),
      } as ApiResponse<Anime[]>;
    }
  }
}

export const animesService = new AnimesService(apiService);
