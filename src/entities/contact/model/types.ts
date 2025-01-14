export interface ContactEntity {
  name: string;
  id: number | string;
  email: string;
  avatar: string;
}
export type ContactLinkParams = {
  contactId?: string;
};
