const Sidebar = ({
  notes,
  onAddNote,
  activeNote,
  setActiveNote,
}) => {
  
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  if(!activeNote && notes.length === 0){
    return(
     
      <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>Notes</h1>
            <button onClick={onAddNote}>&#43;</button>
        </div>
        <div id="noNotes">No Note Yet</div>
      </div>
    
    )
  }

  if (notes.length === 0) {
    return (
      <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>Notes</h1>
            <button onClick={onAddNote}>&#43;</button>
        </div>
        <div id="noNotes">No Note Yet</div>
      </div>
    );
  }
 
 
  return (
    <div id = "app-sidebar"className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}>	&#43;</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map(({ id, title, body, lastModified }, i) => (
          <div
            className={`app-sidebar-note ${id === activeNote && "active"}`}
            onClick={() => setActiveNote(id)}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong>
            </div>

            <p>{body && body.substr(0, 100) + "..."}</p>
            <small className="note-meta">
              Last Modified{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
            
  );
};

export default Sidebar;

