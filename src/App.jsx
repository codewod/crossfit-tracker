import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import WODForm from "./components/WODForm";
import HistoryList from "./components/HistoryList";
import wodsData from "./data/wods.json";

export default function App() {
  const [section, setSection] = useState("dashboard");
  const [filtroTipo, setFiltroTipo] = useState("");
  const [wods, setWods] = useState(wodsData);

  const handleAddWOD = (nuevoWOD) => {
    setWods([...wods, nuevoWOD]);
    setSection("historial"); // ir a historial después de guardar
  };

  const renderSection = () => {
    switch (section) {
      case "dashboard":
        return <Dashboard />;
      case "registrar":
        return <WODForm onAddWOD={handleAddWOD} />;
      case "historial":
        return (
          <HistoryList
            wods={wods}
            filtroTipo={filtroTipo}
            setFiltroTipo={setFiltroTipo}
          />
        );
      default:
        return <Dashboard />;
    }
  };

  const [temaOscuro, setTemaOscuro] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (temaOscuro) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [temaOscuro]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-black text-gray-900 dark:text-white transition-bg duration-500">
      <Navbar
        onChangeSection={setSection}
        temaOscuro={temaOscuro}
        setTemaOscuro={setTemaOscuro}
      />
      <main className="flex-grow">{renderSection()}</main>
      <Footer />
    </div>
  );
}
