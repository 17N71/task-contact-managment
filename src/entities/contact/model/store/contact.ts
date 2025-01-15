import { create } from "zustand";
import { ContactEntity } from "../types";

type State = {
  contact: ContactEntity | null;
  isForEdit?: boolean;
  setEditMode: (isForEdit: boolean) => void;
  setContact: (contact: ContactEntity, isForEdit?: boolean) => void;
  removeContact: () => void;
};

export const useContactStore = create<State>((set) => ({
  contact: null,
  isForEdit: false,
  setEditMode: (isForEdit) => set({ isForEdit }),
  setContact: (newContact, isForEdit = false) =>
    set({ contact: newContact, isForEdit }),
  removeContact: () => set({ contact: null }),
}));
