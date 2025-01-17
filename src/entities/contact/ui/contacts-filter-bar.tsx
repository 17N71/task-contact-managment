import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import type { ContactsFilterBarProps } from "../model/types";

export function ContactsFilterBar({
  onChange,
  searchTerm,
}: ContactsFilterBarProps) {
  return (
    <div className="max-w-md top-0 w-full sticky bg-secondary">
      <div className=" w-full bg-secondary flex justify-center items-center mx-auto h-[70px]">
        <div className="absolute left-6  text-muted-foreground">
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
          className="inline-flex font-semibold justify-center rounded-lg items-center ml-2 border border-solid border-gray-600/80 text-lg"
        >
          <Link
            viewTransition
            to="/new-contact"
            className="text-blue-500 text-sm py-1.5 px-3 w-full h-full block"
          >
            New
          </Link>
        </button>
      </div>
    </div>
  );
}
