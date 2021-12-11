import "./App.css";
import Numbers from "./components/Numbers";
import Forms from "./components/Forms";
import Quotes from "./components/quotes/Quotes";
import Photo from "./components/Photo";

const App = () => {
  return (
    <div className="App">
      <Numbers />
      <Forms />
      <Quotes />
      <Photo />
    </div>
  );
};

export default App;
