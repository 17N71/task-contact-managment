import { Link } from "@tanstack/react-router";
import { ContactListitemProps } from "../model/types";
import { cn } from "~/shared/utils/cn";

export function ContactListitem({
  onSelect,
  isSelected,
  id,
  name,
}: ContactListitemProps) {
  return (
    <li
      className={cn("rounded-md cursor-pointer transition-colors", {
        ["bg-blue-600 text-white"]: isSelected,
        ["hover:bg-gray-100"]: !isSelected,
      })}
    >
      <Link
        className="w-full px-4 py-2 h-full block"
        onClick={onSelect}
        to="/$contactId"
        params={{ contactId: String(id) }}
      >
        {name}
      </Link>
    </li>
  );
}
