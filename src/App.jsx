import Hero from "./componenet/Hero";

const App = () => {
  const BtnClick = () => {
    alert("HELLO WORLD");
  };
  return (
    <div>
      <Hero ChildBtnClick={BtnClick} />
    </div>
  );
};

export default App;
