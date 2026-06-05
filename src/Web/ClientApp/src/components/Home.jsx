import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock3, MapPin, RadioTower, ShieldCheck, Users } from 'lucide-react';
import { dashboardMetrics, packageGroups } from '../smartlguData';

const serviceQueues = [
  { label: 'Resident intake', count: '86', tone: 'blue', detail: '18 for verifier review' },
  { label: 'Assistance requests', count: '42', tone: 'green', detail: '₱1.2M proposed aid' },
  { label: 'Barangay endorsements', count: '27', tone: 'orange', detail: '9 ready for release' }
];

const weeklyActivity = [42, 58, 76, 64, 91, 73, 82];

export function Home() {
  return (
    <div className="page-stack dashboard-home">
      <section className="hero-panel hero-panel--dashboard">
        <div className="hero-panel__content">
          <p className="eyebrow">SmartLGU Prototype Foundation</p>
          <h1>One calm command center for every LGU service journey.</h1>
          <p className="hero-copy">
            A presentation-ready workspace inspired by modern product dashboards: soft cards,
            rounded controls, clear workflows, and mock governance data that lets decision-makers
            click through resident services, operations, and reporting.
          </p>
          <div className="hero-actions">
            <Link role="button" to="/admin-dashboard">View admin dashboard</Link>
            <Link role="button" className="secondary" to="/resident-registration">Start resident intake</Link>
          </div>
          <div className="hero-mini-stats" aria-label="SmartLGU launch highlights">
            <span><CheckCircle2 size={16} /> Demo-ready modules</span>
            <span><ShieldCheck size={16} /> Mock data only</span>
            <span><RadioTower size={16} /> Barangay connected</span>
          </div>
        </div>

        <aside className="hero-card hero-card--operations" aria-label="Prototype status summary">
          <div className="hero-card__header">
            <span>Today&apos;s service pulse</span>
            <strong>94%</strong>
          </div>
          <p>Frontline workflows are on track across intake, verification, assistance, and citizen communications.</p>
          <div className="activity-chart" aria-label="Weekly service activity visualization">
            {weeklyActivity.map((value, index) => (
              <span
                key={`activity-${index}`}
                style={{ '--activity-height': `${value}%` }}
                aria-hidden="true"
              />
            ))}
          </div>
          <div className="hero-card__footer">
            <span><MapPin size={15} /> 27 barangays</span>
            <span><Clock3 size={15} /> 4h avg SLA</span>
          </div>
        </aside>
      </section>

      <section className="metric-grid" aria-label="Demo metrics">
        {dashboardMetrics.map((metric, index) => (
          <article className="metric-card metric-card--elevated" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <small>{metric.trend}</small>
            <i aria-hidden="true">{String(index + 1).padStart(2, '0')}</i>
          </article>
        ))}
      </section>

      <section className="dashboard-grid" aria-label="SmartLGU operating overview">
        <article className="workflow-card queue-card">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">Live service queues</p>
            <h2>Work that needs attention</h2>
            <p>Mock intake queues show how staff can prioritize cases before a client demo.</p>
          </div>
          <div className="queue-list">
            {serviceQueues.map((queue) => (
              <div className={`queue-item queue-item--${queue.tone}`} key={queue.label}>
                <span>{queue.count}</span>
                <div>
                  <strong>{queue.label}</strong>
                  <small>{queue.detail}</small>
                </div>
                <Link to="/requests-complaints" aria-label={`Open ${queue.label}`}><ArrowRight size={18} /></Link>
              </div>
            ))}
          </div>
        </article>

        <article className="workflow-card citizen-card">
          <div>
            <p className="eyebrow">Citizen experience</p>
            <h2>Simple public service entry point</h2>
            <p>
              Showcase the citizen path from registration to requests, complaints, payments,
              alerts, and program participation using clickable demo screens.
            </p>
          </div>
          <div className="citizen-card__avatars" aria-hidden="true">
            <span>MS</span><span>JD</span><span>AR</span><span><Users size={18} /></span>
          </div>
        </article>
      </section>

      <section>
        <div className="section-heading">
          <div>
            <p className="eyebrow">Platform packages</p>
            <h2>SmartLGU module roadmap</h2>
          </div>
          <p>Each package groups mock workflows and demo screens for a polished client walkthrough.</p>
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
