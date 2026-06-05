import { Link } from 'react-router-dom';
import { packageGroups } from '../smartlguData';

const demoRows = [
  { name: 'Maria Santos', barangay: 'Poblacion', status: 'For review', owner: 'MSWDO' },
  { name: 'Juan Dela Cruz', barangay: 'San Isidro', status: 'In progress', owner: 'Frontline Desk' },
  { name: 'Ana Reyes', barangay: 'Mabini', status: 'Completed', owner: 'Administrator' }
];

function getRelatedModules(module) {
  return packageGroups.find((group) => group.name === module.package)?.modules ?? [];
}

export function ModulePage({ module }) {
  const Icon = module.icon;
  const relatedModules = getRelatedModules(module);

  return (
    <div className="page-stack">
      <section className="module-hero">
        <div className="module-icon"><Icon size={30} /></div>
        <div>
          <p className="eyebrow">{module.package}</p>
          <h1>{module.title}</h1>
          <p>{module.summary}</p>
        </div>
      </section>

      <section className="module-layout">
        <article className="workflow-card">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">Demo workflow</p>
            <h2>Presentation-ready placeholder</h2>
            <p>
              This screen uses mock data to demonstrate how the future SmartLGU module can
              organize intake, review, action, and reporting without real persistence.
            </p>
          </div>
          <div className="workflow-steps">
            <div><span>01</span><strong>Capture</strong><small>Receive citizen or staff input.</small></div>
            <div><span>02</span><strong>Validate</strong><small>Check documents and assignment.</small></div>
            <div><span>03</span><strong>Resolve</strong><small>Complete service action and notify parties.</small></div>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Resident / Case</th>
                  <th>Barangay</th>
                  <th>Status</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                {demoRows.map((row) => (
                  <tr key={`${module.id}-${row.name}`}>
                    <td>{row.name}</td>
                    <td>{row.barangay}</td>
                    <td><span className="status-pill">{row.status}</span></td>
                    <td>{row.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <aside className="side-panel">
          <h2>Module snapshot</h2>
          <dl>
            <div><dt>Readiness</dt><dd>{module.status}</dd></div>
            <div><dt>Data mode</dt><dd>Mock/demo only</dd></div>
            <div><dt>Audience</dt><dd>LGU staff, administrators, and citizens</dd></div>
          </dl>
          <h3>Related package modules</h3>
          <div className="related-list">
            {relatedModules.map((related) => (
              <Link to={related.path} key={related.id} aria-current={related.id === module.id ? 'page' : undefined}>
                {related.title}
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}
