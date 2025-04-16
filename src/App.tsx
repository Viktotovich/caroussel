import "./App.css";
import C1 from "./caroussels/C1";
import C2 from "./caroussels/C2";

const App = () => {
  return (
    <>
      <p className="my-10 text-3xl text-center font-bold underline">
        Carrousel type 1:
      </p>
      <p className="text-center">DONT FORGET YOUR ARIA LABELS</p>
      <C1 />
      <p className="my-10 text-3xl text-center font-bold underline">
        Carrousel type 2:
      </p>
      <C2 />
    </>
  );
};

export default App;
