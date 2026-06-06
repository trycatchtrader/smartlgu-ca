import { NavLink } from 'react-router-dom';
import { Bell, Search } from 'lucide-react';
import { navSections } from '../smartlguData';
import { ThemeToggle } from './ThemeToggle';

export function NavMenu() {
  return (
    <>
      <aside className="sidebar" aria-label="SmartLGU module navigation">
        <NavLink className="brand" to="/" aria-label="SmartLGU home">
          <span className="brand-mark">S</span>
          <span>
            <strong>SmartLGU</strong>
            <small>DOCS</small>
          </span>
        </NavLink>

        <nav className="sidebar-nav">
          {navSections.map((section) => (
            <section key={section.label}>
              <p>{section.label}</p>
              {section.links.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
                    to={item.path}
                    key={item.path}
                  >
                    <Icon size={16} />
                    <span>{item.title}</span>
                  </NavLink>
                );
              })}
            </section>
          ))}
        </nav>
      </aside>

      <header className="topbar">
        <label className="topbar-search" aria-label="Search docs">
          <Search size={18} />
          <input type="search" placeholder="Search docs..." />
          <kbd>Ctrl K</kbd>
        </label>
        <div className="topbar-actions">
          <a className="topbar-link" href="/" aria-label="SmartLGU site">SmartLGU.gov</a>
          <button className="sign-up-button" type="button">Sign up</button>
          <button className="icon-only" type="button" aria-label="Repository">
            <span aria-hidden="true">GH</span>
          </button>
          <button className="icon-only" type="button" aria-label="Notifications">
            <Bell size={17} />
          </button>
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}
