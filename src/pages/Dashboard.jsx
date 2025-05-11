export default function Dashboard() {
    return (
      <div className="relative h-screen w-full overflow-hidden">
        {/* Imagen de fondo */}
        <img
          src="https://media.revistagq.com/photos/6654545b152fcf6f6cbd89b1/16:9/w_1920,c_limit/1093941786"
          alt="CrossFit Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
  
        {/* Capa oscura encima de la imagen */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />
  
        {/* Contenido centrado */}
        <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-20 text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Potencia tu vida<br />dentro y fuera del box
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl drop-shadow">
            Lleva el control de tus entrenamientos y mejora cada semana con tu WOD Tracker personal.
          </p>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded shadow-lg transition">
            Comenzar ahora
          </button>
        </div>
      </div>
    )
  }
  