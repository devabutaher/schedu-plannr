import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";

const App = () => {
  return (
    <div className="text-5xl flex justify-between max-w-screen-2xl mx-auto">
      <h1>Schedu Plannr</h1>
      <ThemeToggle />
    </div>
  );
};

export default App;
