import { NavLink } from 'react-router-dom';
import { Bell, Command, Plus, Search } from 'lucide-react';
import { navSections } from '../smartlguData';
import { ThemeToggle } from './ThemeToggle';

export function NavMenu() {
  return (
    <>
      <aside className="sidebar" aria-label="SmartLGU module navigation">
        <NavLink className="brand" to="/" aria-label="SmartLGU home">
          <span className="brand-mark">SL</span>
          <span>
            <strong>SmartLGU</strong>
            <small>Digital Governance</small>
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
                    <Icon size={18} />
                    <span>{item.title}</span>
                  </NavLink>
                );
              })}
            </section>
          ))}
        </nav>
      </aside>

      <header className="topbar">
        <div>
          <p className="eyebrow">Presentation Prototype</p>
          <strong>LGU Digital Governance Workspace</strong>
        </div>
        <div className="topbar-actions">
          <label className="topbar-search" aria-label="Search prototype">
            <Search size={18} />
            <input type="search" placeholder="Search residents, cases, modules..." />
            <kbd><Command size={13} />K</kbd>
          </label>
          <button className="ghost-button ghost-button--primary" type="button">
            <Plus size={18} />
            <span>New request</span>
          </button>
          <button className="icon-only" type="button" aria-label="Notifications">
            <Bell size={18} />
          </button>
          <ThemeToggle />
          <div className="user-badge" aria-label="Signed in demo user">
            <span>MA</span>
            <small>Municipal Admin</small>
          </div>
        </div>
      </header>
    </>
  );
}
