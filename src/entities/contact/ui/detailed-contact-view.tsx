import { Navigate } from "@tanstack/react-router";
import type { DetailedContactProps } from "../model/types";

export function DetailedContactView({ contact }: DetailedContactProps) {
  if (!contact) {
    return <Navigate to="/contacts" />;
  }

  return <div>{contact.name}</div>;
}
