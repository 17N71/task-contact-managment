export interface ContactEntity {
  name: string;
  id: number | string;
  email: string;
  avatar: string;
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
