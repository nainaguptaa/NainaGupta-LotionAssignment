import React, { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';



const Main = ({
  activeNote,
  onUpdateNote,
  onDeleteNote,
}) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  const reference = useRef();


  const saveNote = () => {
    const updatedNote = {
      ...activeNote,
      body: reference.current.getEditor().getText(),
      lastModified: new Date().toLocaleString(),
    };
    onUpdateNote(updatedNote);
  };

  

  if (!activeNote)
    return (
      <div className="no-active-note">Select a note, or create a new one.</div>
    );

  return (
    <>
      <div id="editor">
        <input
          className="title-edit"
          type="text"
          placeholder="Untitled"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus
        />

        <div className="main-notes-button">
          <button onClick={() => saveNote()} className="Save">
            Save
          </button>
          <button onClick={() => onDeleteNote(activeNote.id)}>Delete</button>
        </div>
        <p id = "date-updated"><FontAwesomeIcon icon={faCalendarAlt} /> {activeNote.lastModified}</p>
        
      </div>

      <ReactQuill
        id="body"
        placeholder="Your note here"
        value={activeNote.body}
        ref={reference}
      />
    </>
  );
};

export default Main;
