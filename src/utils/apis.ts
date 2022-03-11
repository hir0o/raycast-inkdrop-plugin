import { Book, Note } from "../types";
import { axiosGet, axiosPost } from "./axios";

export const getBooks = async () => {
  return axiosGet<Book[]>("books");
};

export const getNotes = async (keyword: string) => {
  return axiosGet<Note[]>(`notes?keyword=${keyword}`);
};

export const createNote = async ({ bookId, title, body }: Record<"bookId" | "title" | "body", string>) => {
  return axiosPost<{
    id: string;
    ok: boolean;
    rev: string;
  }>("notes", {
    doctype: "markdown",
    bookId: bookId,
    status: "active",
    share: "private",
    title,
    body,
    tags: [],
  });
};
