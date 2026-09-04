import { NavLink } from 'react-router-dom'

export default function Nav() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="sticky top-6 z-50 flex justify-center px-4 pt-4 pb-2">
      <nav className="inline-flex items-center gap-2 sm:gap-4 rounded-full bg-white px-6 py-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-gray-100/80">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end={link.path === '/'}
            className={({ isActive }) =>
              `relative px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? 'text-red-500 font-semibold'
                  : 'text-gray-500 hover:text-gray-900'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute -bottom-2.5 left-1/2 h-[3.5px] w-6 -translate-x-1/2 rounded-full bg-red-500" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
