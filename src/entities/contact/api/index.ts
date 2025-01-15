import { queryOptions } from "@tanstack/react-query";
import { BASE_URL } from "~/shared/constants";
import { ContactEntity } from "../model/types";

export const ContactAPI = {
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
    return {
      queryKey: ["delete-user-by-ud", "users", id],
      mutationFn: async () => {
        const response = await fetch(`${BASE_URL}/users/${id}`, {
          method: "DELETE",
        });
        return await response.json();
      },
    };
  },
  createUser() {
    return {
      queryKey: ["create-user", "users"],
      mutationFn: async (payload: Omit<ContactEntity, "id">) => {
        const response = await fetch(`${BASE_URL}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        const data = await response.json();
        return data;
      },
    };
  },
};
