import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Database, FileText, Play, ShieldCheck, UserPlus } from 'lucide-react';
import { moduleCatalog } from '../smartlguData';

const starterModules = [
  'Resident Registration',
  'Admin Dashboard',
  'Assistance & Social Services',
  'Barangay Endorsement',
  'Requests & Complaints',
  'Announcements & Alerts',
  'Payments & Acknowledgments',
  'Analytics & Reports',
  'Household Management',
  'Directory'
];

const productModules = moduleCatalog
  .filter((module) => module.status === 'Demo flow')
  .slice(0, 6);

const foundationLinks = moduleCatalog.filter((module) => module.package === 'Basic LGU IDS Platform').slice(0, 5);

export function Home() {
  return (
    <div className="page-stack docs-home">
      <section className="docs-hero" aria-labelledby="docs-title">
        <div className="docs-hero__intro">
          <div className="docs-hero__mark" aria-hidden="true">
            <span><BookOpen size={28} /></span>
          </div>
          <p className="eyebrow">SmartLGU Prototype Foundation</p>
          <h1 id="docs-title">Digital governance command center for modern Local Government Units.</h1>
          <p className="hero-copy">
            A clickable, presentation-ready prototype showing how LGU administrators,
            staff, barangay partners, and citizens can navigate core municipal services
            from one integrated platform.
          </p>
        </div>

        <aside className="starter-panel" aria-label="Getting started shortcuts">
          <div className="starter-panel__heading">
            <span><Play size={20} /></span>
            <div>
              <h2>Getting Started</h2>
              <p>Open the core demo screens used in a municipal walkthrough.</p>
            </div>
          </div>
          <div className="starter-grid">
            {starterModules.map((title) => {
              const module = moduleCatalog.find((item) => item.title === title);
              const Icon = module?.icon ?? FileText;

              return (
                <Link to={module?.path ?? '/'} className="starter-tile" key={title} aria-label={title}>
                  <Icon size={26} />
                </Link>
              );
            })}
          </div>
        </aside>
      </section>

      <section className="docs-section" aria-labelledby="products-title">
        <div className="section-heading section-heading--compact">
          <p className="eyebrow">Platform packages</p>
          <h2 id="products-title">SmartLGU module roadmap</h2>
        </div>
        <div className="product-grid">
          {productModules.map((module) => {
            const Icon = module.icon;
            return (
              <Link className="product-card" to={module.path} key={module.id}>
                <span className="product-card__icon"><Icon size={20} /></span>
                <h3>{module.title}</h3>
                <p>{module.summary}</p>
                <small>{module.package}</small>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="docs-section docs-section--split" aria-label="Platform guide overview">
        <article className="guide-card guide-card--wide">
          <div className="product-card__icon"><UserPlus size={20} /></div>
          <h2>Resident-first service flow</h2>
          <p>
            Start with resident registration, then move through identity review, service requests,
            assistance routing, and completion tracking using mock data only.
          </p>
          <Link to="/resident-registration" className="text-link">Open resident registration <ArrowRight size={16} /></Link>
        </article>

        <article className="guide-card">
          <div className="product-card__icon"><ShieldCheck size={20} /></div>
          <h2>Foundation checklist</h2>
          <div className="docs-link-list">
            {foundationLinks.map((module) => (
              <Link to={module.path} key={module.id}>{module.title}</Link>
            ))}
          </div>
        </article>

        <article className="guide-card">
          <div className="product-card__icon"><Database size={20} /></div>
          <h2>Demo metrics</h2>
          <dl className="compact-stats">
            <div><dt>Residents</dt><dd>24,860</dd></div>
            <div><dt>Requests</dt><dd>318</dd></div>
            <div><dt>Barangays</dt><dd>27 / 27</dd></div>
          </dl>
        </article>
      </section>
    </div>
  );
}
