export default function Tabs({ languages }) {
  return (
    <>
      <div className="TabContainer">
        <ul className="nav nav-tabs">
          {languages.map((lang, index) => (
            <li key={index} className={index === 0 ? "active" : ""}>
              <button data-toggle="tab" href="#home">
                {lang.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="TabContent">
          {languages.map((lang, index) => (
            <div
              key={index}
              id="home"
              className={`tab-pane fade ${index === 0 ? "in active" : ""}`}
            >
              <h3>{lang.name}</h3>
              <p>{lang.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
