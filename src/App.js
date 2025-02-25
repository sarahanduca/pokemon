import Main from "./pages/main/Main";
import { PokemonsProvider } from "./contexts/PokemonsContext.jsx";

function App() {
  return (
    <PokemonsProvider className="App">
      <Main />
    </PokemonsProvider>
  );
}

export default App;
