import { createServerFn } from "@tanstack/react-start";
import { getWebRequest } from "@tanstack/react-start/server";

export type ReplitUser = {
  id: string;
  name: string;
  roles: string[];
  teams: string[];
  url: string;
  profileImage: string;
  bio: string;
};

export const getReplitUser = createServerFn({ method: "GET" }).handler(
  async () => {
    const request = getWebRequest();
    const id = request.headers.get("x-replit-user-id");
    if (!id) return { user: null };

    return {
      user: {
        id,
        name: request.headers.get("x-replit-user-name") ?? "",
        roles: (request.headers.get("x-replit-user-roles") ?? "").split(",").filter(Boolean),
        teams: (request.headers.get("x-replit-user-teams") ?? "").split(",").filter(Boolean),
        url: request.headers.get("x-replit-user-url") ?? "",
        profileImage: request.headers.get("x-replit-user-profile-image") ?? "",
        bio: request.headers.get("x-replit-user-bio") ?? "",
      } as ReplitUser,
    };
  }
);
