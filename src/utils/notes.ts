import { Note } from "../types";

export const getTemplate = (notes: Note[]): string | undefined => {
  const templateNote = notes.find((note) => note.title === "template");
  return templateNote?.body;
};
