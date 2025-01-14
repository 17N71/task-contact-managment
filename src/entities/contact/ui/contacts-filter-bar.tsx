import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import type { ContactsFilterBarProps } from "../model/types";

export function ContactsFilterBar({
  onChange,
  searchTerm,
}: ContactsFilterBarProps) {
  return (
    <div className="relative max-w-md w-full">
      <div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground">
        <Search className="h-4 w-4" color="#424b57fb" />
      </div>
      <input
        aria-label="Search"
        onChange={onChange}
        value={searchTerm}
        type="search"
        className="border border-gray-600/80 border-solid placeholder:font-semibold outline-none rounded-lg p-1 pl-8 text-black"
        placeholder="Search"
      />
      <button
        type="button"
        className="p-1 px-3 inline-flex font-semibold justify-center rounded-lg items-center ml-2 border border-solid border-gray-600/80 text-lg"
      >
        <Link
          to="."
          state={true}
          from="/contacts"
          className="text-blue-500 text-sm py-0.5"
        >
          New
        </Link>
      </button>
    </div>
  );
}
