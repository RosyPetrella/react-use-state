import Header from "./Header";
import languages from "./ArrayList";
import Tabs from "./Tabs";

function App() {
  return (
    <>
      <Header />
      <Tabs languages={languages} />
    </>
  );
}

export default App;
