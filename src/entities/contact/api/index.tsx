import { queryOptions } from "@tanstack/react-query";
import { BASE_URL } from "~/shared/constants";
import { ContactEntity } from "../model/types";

export const UserAPI = {
  getUsers() {
    return queryOptions({
      queryKey: ["get-users", "users"],
      queryFn: async ({ signal }): Promise<ContactEntity[]> => {
        const data = await fetch(`${BASE_URL}/users`, {
          method: "GET",
          signal,
        });
        return await data.json();
      },
    });
  },
  getUserById(id: string) {
    return queryOptions({
      queryKey: ["get-user-by-id", id],
      queryFn: async ({ signal }): Promise<ContactEntity[]> => {
        const response = await fetch(`${BASE_URL}/users?id=${id}`, {
          method: "GET",
          signal,
        });
        return await response.json();
      },
      select: (data) => {
        return data[0];
      },
    });
  },
  deleteUserById(id: string) {
    return queryOptions({
      queryKey: ["delete-user-by-ud", "users", id],
      queryFn: async ({ signal }) => {
        const response = await fetch(`${BASE_URL}/users?id=${id}`, {
          method: "DELETE",
          signal,
        });
        return await response.json();
      },
    });
  },
};
