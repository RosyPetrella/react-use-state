import { useState } from "react";
export default function Tabs({ languages }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="TabContainer">
        <ul className="nav nav-tabs">
          {languages.map((lang, index) => (
            <li key={index} className={activeTab === index ? "active" : ""}>
              <button onClick={() => setActiveTab(index)}>{lang.name}</button>
            </li>
          ))}
        </ul>

        <div className="TabContent">
          <div>
            <h3>{languages[activeTab].name}</h3>
            <p>{languages[activeTab].description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
