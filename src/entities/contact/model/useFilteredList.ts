import { type ChangeEvent, useDeferredValue, useState } from "react";
import type { ContactEntity } from "./types";

export const useFilteredList = (list: ContactEntity[] = []) => {
  const [searchTerm, setSearchTerm] = useState("");
  const deferredTerm = useDeferredValue(searchTerm);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const filteredList = searchTerm
    ? list.filter(({ name }) => new RegExp(deferredTerm, "gmi").test(name))
    : list;

  return {
    filteredList,
    onChange,
    searchTerm,
  };
};
