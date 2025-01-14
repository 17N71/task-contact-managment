import { queryOptions } from "@tanstack/react-query";
import { BASE_URL } from "~/shared/constants";
import { ContactEntity } from "../model/types";

export const UserAPI = {
  getUsers() {
    return queryOptions({
      queryKey: ["get-users"],
      queryFn: async (): Promise<ContactEntity[]> => {
        const data = await fetch(`${BASE_URL}/users`, { method: "GET" });
        return await data.json();
      },
    });
  },
  getUserById(id: string) {
    return queryOptions({
      queryKey: ["get-user-by-id", id],
      queryFn: async (): Promise<ContactEntity[]> => {
        const data = await fetch(`${BASE_URL}/users?id=${id}`, {
          method: "GET",
        });
        return await data.json();
      },
    });
  },
};
