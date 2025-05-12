import { useState } from "react";

export default function HistoryList({ wods, filtroTipo, setFiltroTipo }) {
  const tiposUnicos = ["Todos", ...new Set(wods.map((w) => w.tipo))];
  const [detalleActivo, setDetalleActivo] = useState(null);

  const wodsFiltrados =
    filtroTipo && filtroTipo !== "Todos"
      ? wods.filter((wod) => wod.tipo === filtroTipo)
      : wods;

  return (
    <div className="min-h-screen p-6 max-w-3xl mx-auto flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-center">Historial de WODs</h2>

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {tiposUnicos.map((tipo) => (
          <button
            key={tipo}
            onClick={() => setFiltroTipo(tipo)}
            className={`px-4 py-2 rounded text-sm font-medium border ${
              filtroTipo === tipo || (tipo === "Todos" && !filtroTipo)
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
            }`}
          >
            {tipo}
          </button>
        ))}
      </div>

      {/* Lista */}
      {wodsFiltrados.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No hay WODs de este tipo.
        </p>
      ) : (
        <ul className="space-y-4">
          {wodsFiltrados.map((wod, index) => (
            <li
              key={index}
              className="bg-white dark:bg-gray-800 p-4 rounded shadow relative"
            >
              <div className="flex justify-between items-start">
                <div>
                  <strong>{wod.tipo}</strong>
                  <p className="mt-2">{wod.descripcion}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500 dark:text-gray-400 block">
                    {wod.fecha}
                  </span>
                  <button
                    onClick={() =>
                      setDetalleActivo(detalleActivo === index ? null : index)
                    }
                    className="mt-2 text-xs bg-blue-600 hover:bg-blue-700 text-white py-1 px-2 rounded"
                  >
                    🖨️ Ver detalle
                  </button>
                </div>
              </div>

              {detalleActivo === index && (
                <div className="mt-4 bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm">
                  <p>
                    <strong>Tipo:</strong> {wod.tipo}
                  </p>
                  <p>
                    <strong>Fecha:</strong> {wod.fecha}
                  </p>
                  <p>
                    <strong>Descripción:</strong> {wod.descripcion}
                  </p>
                  {/* Aquí podrías sumar duración, calorías, notas, etc. */}
                </div>
              )}
            </li>
          ))}
          <p className="text-sm text-center text-gray-400 mt-auto pt-6">
            {wodsFiltrados.length} entrenamiento(s) encontrados
          </p>
        </ul>
      )}
    </div>
  );
}
