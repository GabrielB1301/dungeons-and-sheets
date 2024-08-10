import Header from "./components/Header";
import Builder from "./components/Builder";
function App() {
  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <Header />
      <Builder />
    </div>
  );
}

export default App;
