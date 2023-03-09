import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./index.css";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Header from "./Header";

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);
  const [isNoteAdded, setNoteAdded] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

const addNote = () => {
  const newNote = {
    id: uuid(),
    title: "Untitled Note",
    body: " ",
    lastModified: new Date().toLocaleString(),
  };
  setNotes((prevNotes) => [newNote, ...prevNotes]);
  setActiveNote(newNote.id);
  setNoteAdded(true);
  setLastTitle(newNote.title);
};

const [lastTitle, setLastTitle] = useState("");

const onUpdateNote = (updatedNote) => {
  const updatedNotesArray = notes.map((note) => {
    if (note.id === activeNote) {
      if (updatedNote.title !== lastTitle || updatedNote.body !== note.body) {
        updatedNote.lastModified = new Date().toLocaleString();
      } else {
        updatedNote.lastModified = note.lastModified;
      }
      setLastTitle(updatedNote.title);
      return updatedNote;
    }
    return note;
  });
  setNotes(updatedNotesArray);
  setNoteAdded(true);
};

  // const onDeleteNote = (idToDelete) => {
  //   setNotes((prevNotes) => prevNotes.filter((note) => note.id !== idToDelete));
  // };
  const onDeleteNote = (idToDelete) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this note?");
  if (confirmDelete) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== idToDelete));
  }
};

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div>
      <Header />
      <div className="App">
        <div className="sidebar-side">
          <Sidebar
            notes={notes}
            onAddNote={addNote}
            activeNote={activeNote}
            setActiveNote={setActiveNote}
          />
        </div>
        <div className="content-side">
          <Main
            activeNote={getActiveNote()}
            onUpdateNote={onUpdateNote}
            onDeleteNote={onDeleteNote}
            isNoteAdded={isNoteAdded}
          />
        </div>
      </div>
    </div>

  );
//   <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Main />}></Route>
//     <Route path="/skills" element={<Sidebar />}></Route>
//   </Routes>
// </BrowserRouter>
}

export default App;






