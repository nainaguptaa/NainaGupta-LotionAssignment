function Header() {

  const hide = () => {
    const notebar = document.querySelector('.app-sidebar');
    notebar.classList.toggle('hidden');
    const body = document.getElementById('editor');
    body.classList.toggle('new_editor');
    const red = document.querySelector('Date');
    red.classList.toggle('new-date');
  }


  return (
    <div className="Header">
      <div className = "titles">
      <h1>Lotion</h1>
      <h2>Like notion, but worse.</h2>
      </div>
      <div id = "toggle" className = "toggle">
        <button onClick={hide}>&#9776;</button>
      </div>

      </div>
  );
} 

export default Header;