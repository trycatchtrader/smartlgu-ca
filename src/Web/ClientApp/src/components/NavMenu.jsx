import { NavLink } from 'react-router-dom';
import { ChevronRight, Landmark, ShieldCheck } from 'lucide-react';
import { navSections } from '../smartlguData';

const sectionToneClass = (index) => ['nav-section--cyan', 'nav-section--lime', 'nav-section--violet', 'nav-section--amber'][index % 4];

export function NavMenu() {
  const moduleCount = navSections.slice(1).reduce((total, section) => total + section.links.length, 0);

  return (
    <aside className="sidebar" aria-label="SmartLGU module navigation">
      <NavLink className="brand" to="/" aria-label="SmartLGU home">
        <span className="brand-mark"><Landmark size={20} /></span>
        <span>
          <strong>SmartLGU</strong>
          <small>LGU IDS Prototype</small>
        </span>
      </NavLink>

      <div className="sidebar-overview" aria-label="Prototype status">
        <span><ShieldCheck size={16} /> Demo workspace</span>
        <strong>{moduleCount} modules</strong>
        <small>Mock data only • presentation ready</small>
      </div>

      <nav className="sidebar-nav">
        {navSections.map((section, index) => (
          <section className={sectionToneClass(index)} key={section.label}>
            <p>{section.label}</p>
            {section.links.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
                  to={item.path}
                  key={item.path}
                >
                  <span className="nav-item__icon"><Icon size={16} /></span>
                  <span>{item.title}</span>
                  <ChevronRight className="nav-item__chevron" size={14} />
                </NavLink>
              );
            })}
          </section>
        ))}
      </nav>
    </aside>
  );
}
