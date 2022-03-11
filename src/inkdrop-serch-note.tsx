import { ActionPanel, List, Action } from "@raycast/api";
import { useEffect, useState, VFC } from "react";
import { Note } from "./types";
import { getNotes } from "./utils/apis";

const NoteList: VFC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (!keyword) return;
    const fetchNotes = async () => {
      const data = await getNotes(keyword);
      setNotes(data);
    };

    fetchNotes();
  }, [keyword]);

  return (
    <List onSearchTextChange={setKeyword}>
      {notes.map((note) => (
        <List.Item
          title={note.title + " - " + note.body}
          keywords={[note.body]}
          actions={
            <ActionPanel>
              <Action.OpenInBrowser url={`inkdrop://note/${note._id.split(":")[1]}`} />
            </ActionPanel>
          }
          key={note._id}
        />
      ))}
    </List>
  );
};

export default NoteList;
