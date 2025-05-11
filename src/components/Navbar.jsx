export default function Navbar({ onChangeSection }) {
  const navItems = [
    { key: 'dashboard', label: '🏠 Dashboard' },
    { key: 'registrar', label: '📝 Registrar WOD' },
    { key: 'historial', label: '📋 Historial' }
  ]

  return (
    <nav className="bg-gray-900 text-white p-4 flex flex-wrap justify-center md:justify-start gap-4 shadow-md">
      {navItems.map(item => (
        <button
          key={item.key}
          onClick={() => onChangeSection(item.key)}
          className="hover:bg-gray-700 px-4 py-2 rounded transition"
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}
