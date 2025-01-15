import { queryOptions } from "@tanstack/react-query";
import { BASE_URL } from "~/shared/constants";
import { ContactEntity } from "../model/types";

export const ContactAPI = {
  getContacts() {
    return queryOptions({
      queryKey: ["get-contacts", "contacts"],
      queryFn: async ({ signal }): Promise<ContactEntity[]> => {
        const data = await fetch(`${BASE_URL}/contacts`, {
          method: "GET",
          signal,
        });
        return await data.json();
      },
    });
  },
  getContactById(id: string) {
    return queryOptions({
      queryKey: ["get-contact-by-id", id],
      queryFn: async ({ signal }): Promise<ContactEntity[]> => {
        const response = await fetch(`${BASE_URL}/contacts?id=${id}`, {
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
  deleteContactById(id: string) {
    return {
      queryKey: ["delete-contact-by-id", "contacts", id],
      mutationFn: async () => {
        const response = await fetch(`${BASE_URL}/contacts/${id}`, {
          method: "DELETE",
        });
        return await response.json();
      },
    };
  },
  updateContact(id: string) {
    return {
      queryKey: ["edit-contact", "contacts", id],
      mutationFn: async (payload: Omit<ContactEntity, "avatar">) => {
        const response = await fetch(`${BASE_URL}/contacts/${payload.id}`, {
          method: "PATCH",
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
  createContact() {
    return {
      queryKey: ["create-contact", "contacts"],
      mutationFn: async (payload: Omit<ContactEntity, "id">) => {
        const response = await fetch(`${BASE_URL}/contacts`, {
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
