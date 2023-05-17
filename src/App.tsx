import { createRoot } from "react-dom/client";
import Titlebar from "./components/Titlebar";

const App = () => {
  return <Titlebar />;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
