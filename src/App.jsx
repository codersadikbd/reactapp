const App = () => {
  const city = ["new york", "pakistan", "paris", "tokyo", "sydney"];
  return (
    <div>
      <ol>
        {city.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
