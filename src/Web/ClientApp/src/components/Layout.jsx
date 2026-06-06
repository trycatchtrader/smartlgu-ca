import { Bell, Search, Sparkles } from 'lucide-react';
import { NavMenu } from './NavMenu';
import { ThemeToggle } from './ThemeToggle';

export function Layout({ children }) {
  return (
    <div className="app-shell">
      <NavMenu />
      <main className="app-main">
        <div className="content-panel">
          <header className="topbar" aria-label="SmartLGU workspace header">
            <label className="topbar-search" aria-label="Search prototype">
              <Search size={18} />
              <input type="search" placeholder="Search residents, cases, modules..." />
              <kbd>Ctrl K</kbd>
            </label>
            <div className="topbar-actions">
              <span className="demo-badge"><Sparkles size={15} /> Presentation demo</span>
              <a className="topbar-link" href="/" aria-label="SmartLGU site">SmartLGU.gov</a>
              <button className="icon-only" type="button" aria-label="Notifications">
                <Bell size={17} />
              </button>
              <ThemeToggle />
            </div>
          </header>
          {children}
        </div>
      </main>
    </div>
  );
}
