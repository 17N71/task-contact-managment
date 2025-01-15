import type { ChangeEvent, Dispatch } from "react";

export interface ContactEntity {
  name: string;
  id: number | string;
  email: string;
  avatar: string;
  username: string;
  external_url: string;
  about: string;
}

export type ContactLinkParams = {
  contactId?: string;
};

export type ContactListitemProps = {
  onSelect: () => void;
  isSelected: boolean;
} & ContactEntity;

export type DetailedContactProps = {
  contact: ContactEntity | undefined;
};

export type ContactsFilterBarProps = {
  searchTerm: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type ContactListProps = {
  setSelectedId: Dispatch<React.SetStateAction<string | null>>;
  filteredList: ContactEntity[];
  selectedId: string | null;
  contactId: string | null;
};

export type ContactProps = {
  initialContactId: string | null;
};

export type EditDialogProps = {
  dialogProps: {
    id: string;
    editableContact: Omit<ContactEntity, "avatar">;
  };
};
