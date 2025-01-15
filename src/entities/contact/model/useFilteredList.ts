import { type ChangeEvent, useDeferredValue, useState } from "react";
import type { ContactEntity } from "./types";

export const useFilteredList = (
  list: ContactEntity[] = []
  // selectedId: string
) => {
  const [searchTerm, setSearchTerm] = useState("");
  const deferredTerm = useDeferredValue(searchTerm);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  // const selectedContact = list.find(({ id }) => id === selectedId);
  // find and show contact if we need to show the selected contact independent search term filtered contacts list

  // const filteredList = (
  //   searchTerm
  //     ? [
  //         ...new Set([
  //           selectedContact,
  //           ...list.filter(
  //             (contact) =>
  //               contact && new RegExp(deferredTerm, "gmi").test(contact.name)
  //           ),
  //         ]),
  //       ]
  //     : list
  // ) as ContactEntity[];

  // if we do not need to show the selected contact
  const filteredList = searchTerm
    ? list.filter(({ name }) => new RegExp(deferredTerm, "gmi").test(name))
    : list;

  return {
    filteredList,
    onChange,
    searchTerm,
  };
};
