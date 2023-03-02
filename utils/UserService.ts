import IUser from "types/user";

export default class UserService {
  static getUser(): IUser | null {
    const user =
      typeof window !== "undefined" && localStorage.getItem("Caly_user");
    if (!user) {
      return null;
    }
    return JSON.parse(user);
  }

  static getToken(): string | null {
    const token =
      typeof window !== "undefined" && localStorage.getItem("Caly_token");
    if (!token) {
      return null;
    }
    return token;
  }

  static setUser(user: IUser | string): void {
    if (typeof user !== "string") {
      user = JSON.stringify(user);
    }
    typeof window !== "undefined" && localStorage.setItem("Caly_user", user);
  }

  static setToken(token: string): void {
    typeof window !== "undefined" && localStorage.setItem("Caly_token", token);
  }

  static clearCredentials(): void {
    typeof window !== "undefined" && localStorage.removeItem("Caly_user");
    typeof window !== "undefined" && localStorage.removeItem("Caly_token");
  }
}
