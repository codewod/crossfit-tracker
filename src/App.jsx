import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import WODForm from "./components/WODForm";
import HistoryList from "./components/HistoryList";
import wodsData from "./data/wods.json";

export default function App() {
  const [section, setSection] = useState("dashboard");
  const [filtroTipo, setFiltroTipo] = useState("");
  const [wods, setWods] = useState(wodsData);

  // ✅ Cargar desde localStorage
  // useEffect(() => {
  //   const stored = localStorage.getItem('wods')
  //   if (stored) setWods(JSON.parse(stored))
  // }, [])

  // // ✅ Guardar en localStorage cuando cambian
  // useEffect(() => {
  //   localStorage.setItem('wods', JSON.stringify(wods))
  // }, [wods])

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

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black dark:text-white">
      <Navbar onChangeSection={setSection} />
      {renderSection()}
    </div>
  );
}
