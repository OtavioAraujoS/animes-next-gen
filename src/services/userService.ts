import { ApiResponse } from "@/interfaces/ApiResponse";
import { api as apiService, ApiService, defaultUrl } from "./api";
import { User, UserLogin } from "@/interfaces/User";

class UserService {
  constructor(private readonly api: ApiService) {}

  public async login(data: UserLogin): Promise<ApiResponse<User>> {
    try {
      const response = await this.api.post(`${defaultUrl}/users`, data);
      return {
        data: response as User,
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        message: String(error),
      } as ApiResponse<User>;
    }
  }

  public async getUsers(): Promise<ApiResponse<User[]>> {
    try {
      const response = await this.api.get(`${defaultUrl}/users`);
      return {
        data: response as User[],
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        message: String(error),
      } as ApiResponse<User[]>;
    }
  }
}

export const userService = new UserService(apiService);
