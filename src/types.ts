export type Book = {
  parentBookId: string | null;
  updatedAt: number;
  createdAt: number;
  count: number;
  name: string;
  _id: string;
};

export type Note = {
  doctype: string;
  bookId: string;
  status: "none" | "active" | "onHold" | "completed" | "dropped";
  share: string;
  title: string;
  body: string;
  tags: string[];
  _id: string;
};

export type Auth = {
  username: string;
  password: string;
};
