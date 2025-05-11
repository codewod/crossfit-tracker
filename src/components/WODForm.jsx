import { useState } from "react";

export default function WODForm({ onAddWOD }) {
  const [tipo, setTipo] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [errores, setErrores] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevosErrores = {};
    if (!tipo.trim()) nuevosErrores.tipo = "Ingresa el tipo de entrenamiento";
    if (!fecha.trim()) nuevosErrores.fecha = "Selecciona una fecha";
    if (!descripcion.trim())
      nuevosErrores.descripcion = "Agrega una descripción";

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    const nuevoWOD = { tipo, fecha, descripcion };
    onAddWOD(nuevoWOD);

    setTipo("");
    setFecha("");
    setDescripcion("");
    setErrores({});
  };

  const baseInput =
    "p-3 rounded border bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2";
  const errorStyle = "border-red-500 focus:ring-red-500";

  return (
    <div className="p-6 flex justify-center">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Registrar nuevo WOD
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className={`w-full ${baseInput} ${
                errores.tipo
                  ? errorStyle
                  : "border-gray-300 dark:border-gray-700"
              }`}
            >
              <option value="">Selecciona un tipo</option>
              <option value="AMRAP">AMRAP</option>
              <option value="EMOM">EMOM</option>
              <option value="FOR TIME">For Time</option>
              <option value="HERO WOD">Hero WOD</option>
              <option value="GIRLS WOD">Girls WOD</option>
              <option value="DEATH BY">Death By</option>
              <option value="TABATA">Tabata</option>
              <option value="CHIPPER">Chipper</option>
              <option value="LADDER">Ladder</option>
              <option value="INTERVALS">Intervals</option>
              <option value="COMPLEX">Complex</option>
              <option value="SKILL WORK">Skill Work</option>
              <option value="METCON">Metcon</option>
              <option value="OPEN WOD">Open WOD</option>
              <option value="CUSTOM">Custom</option>
            </select>

            {errores.tipo && (
              <p className="text-red-500 text-sm mt-1">{errores.tipo}</p>
            )}
          </div>

          <div>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className={`w-full ${baseInput} ${
                errores.fecha
                  ? errorStyle
                  : "border-gray-300 dark:border-gray-700"
              }`}
            />
            {errores.fecha && (
              <p className="text-red-500 text-sm mt-1">{errores.fecha}</p>
            )}
          </div>

          <div>
            <textarea
              placeholder="Descripción"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className={`w-full ${baseInput} resize-none ${
                errores.descripcion
                  ? errorStyle
                  : "border-gray-300 dark:border-gray-700"
              }`}
              rows="4"
            />
            {errores.descripcion && (
              <p className="text-red-500 text-sm mt-1">{errores.descripcion}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}
