const App = () => {
  const status = true;
  if (status === true) {
    return (
      <div>
        <h1>logout</h1>
        <button>logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>login</h1>
        <button>login</button>
      </div>
    );
  }
};

export default App;
