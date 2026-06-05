import { Link } from 'react-router-dom';
import { dashboardMetrics, packageGroups } from '../smartlguData';

export function Home() {
  return (
    <div className="page-stack">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">SmartLGU Prototype Foundation</p>
          <h1>Digital governance command center for modern Local Government Units.</h1>
          <p className="hero-copy">
            A clickable, presentation-ready prototype showing how LGU administrators,
            staff, barangay partners, and citizens can navigate core municipal services
            from one integrated platform.
          </p>
          <div className="hero-actions">
            <Link role="button" to="/admin-dashboard">View admin dashboard</Link>
            <Link role="button" className="secondary" to="/resident-registration">Start resident intake</Link>
          </div>
        </div>
        <aside className="hero-card" aria-label="Prototype status summary">
          <span>Prototype scope</span>
          <strong>3 packages</strong>
          <p>15 primary demo modules plus foundation setup areas for rollout planning.</p>
        </aside>
      </section>

      <section className="metric-grid" aria-label="Demo metrics">
        {dashboardMetrics.map((metric) => (
          <article className="metric-card" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <small>{metric.trend}</small>
          </article>
        ))}
      </section>

      <section>
        <div className="section-heading">
          <p className="eyebrow">Platform packages</p>
          <h2>SmartLGU module roadmap</h2>
          <p>Each package groups mock workflows and demo screens for a client-ready walkthrough.</p>
        </div>
        <div className="package-grid">
          {packageGroups.map((group) => (
            <article className={`package-card package-card--${group.accent}`} key={group.name}>
              <div className="package-card__header">
                <span>{group.tagline}</span>
                <strong>{group.modules.length} modules</strong>
              </div>
              <h3>{group.name}</h3>
              <p>{group.description}</p>
              <div className="module-chip-list">
                {group.modules.map((module) => (
                  <Link className="module-chip" to={module.path} key={module.id}>
                    {module.title}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
