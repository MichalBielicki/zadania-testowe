import style from "./App.module.css";
import Numbers from "./components/numbers/Numbers";
import Forms from "./components/forms/Forms";
import Quotes from "./components/quotes/Quotes";
import Photo from "./components/photo/Photo";

const App = () => {
  return (
    <div className={style.App}>
      <Numbers />
      <Forms />
      <Quotes />
      <Photo />
    </div>
  );
};

export default App;
