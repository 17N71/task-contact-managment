import type { DetailedContactProps } from "../model/types";
import { Star } from "lucide-react";
import { useState } from "react";
import { useDialogAction } from "~/shared/ui/dialog/model/dialog-contexts";
import { DELETE_CONTACT, EDIT_CONTACT } from "~/shared/ui/dialog/model";
import { Navigate } from "@tanstack/react-router";

export function DetailedContactView({ contact }: DetailedContactProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { dispatchDialog } = useDialogAction();

  if (!contact) {
    return <Navigate to="/contacts" />;
  }

  const isBase64 = contact.avatar.startsWith("data:image");

  return (
    <div>
      <div className="flex items-start gap-10">
        <img
          src={
            isBase64
              ? contact.avatar
              : `${window.location.origin}${contact.avatar}`
          }
          loading="eager"
          width={180}
          height={180}
          alt={contact.name}
          title={contact.name}
          className="rounded-2xl object-cover object-center overflow-hidden
                     w-[180px] h-[180px]"
        />
        <div>
          <div className="flex items-center gap-3">
            <h2 className="font-bold text-3xl">{contact.name}</h2>
            <Star
              size={22}
              onClick={() => setIsFavorite((prev) => !prev)}
              fill={isFavorite ? "#f9dc02" : "transparent"}
              color="#b0b0b0"
              className="mt-1 transition-all duration-200 cursor-pointer"
            />
          </div>
          <div className="mt-3">
            <a
              target="_blank"
              className="text-xl text-blue-500 font-semibold hover:underline"
              href={contact.external_url}
            >
              {contact.username}
            </a>
          </div>
          <div className="mt-3">
            <a
              className="text-blue-500 hover:underline"
              target="_blank"
              href={`mailto:${contact.email}`}
            >
              {contact.email}
            </a>
          </div>
          <div className="mt-3">
            <p>{contact.about}</p>
          </div>
          <div className="flex gap-3 mt-3">
            <button
              onClick={() =>
                dispatchDialog(EDIT_CONTACT, {
                  id: String(contact.id),
                  editableContact: contact,
                })
              }
              type="button"
              className="py-2 px-4 text-center flex justify-center items-center font-semibold border border-gray-400/80 rounded-xl text-sm hover:bg-blue-500 hover:text-white transition-colors duration-150 text-blue-500 ease-out"
            >
              Edit
            </button>
            <button
              onClick={() =>
                dispatchDialog(DELETE_CONTACT, { id: String(contact.id) })
              }
              type="button"
              className="py-2 px-4 text-center flex justify-center items-center font-semibold border border-gray-400/80 rounded-xl text-sm hover:bg-red-500 hover:text-white transition-colors duration-150 text-red-500 ease-out"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
