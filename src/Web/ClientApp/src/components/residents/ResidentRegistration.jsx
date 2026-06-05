import { Link, useSearchParams } from 'react-router-dom';
import { CalendarCheck2, ClipboardList, FileSearch, Search, ShieldCheck, UserPlus, UsersRound } from 'lucide-react';
import { ResidentStatusBadge } from './ResidentStatusBadge';
import { barangays, getResidentFullName, residents, residentStatuses } from './residentDemoData';

const demographicCards = [
  { label: 'Registered residents', value: '12,486', trend: '+342 this quarter', icon: UsersRound },
  { label: 'For verification', value: '186', trend: 'Barangay review queue', icon: FileSearch },
  { label: 'Senior citizens', value: '1,428', trend: 'Ready for services tagging', icon: ShieldCheck },
  { label: 'New voter profiles', value: '624', trend: 'Comelec reference only', icon: ClipboardList }
];

function getAge(birthDate) {
  const birthYear = new Date(birthDate).getFullYear();
  return new Date().getFullYear() - birthYear;
}

export function ResidentRegistration() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const barangay = searchParams.get('barangay') ?? 'All barangays';
  const status = searchParams.get('status') ?? 'All statuses';

  const filteredResidents = residents.filter((resident) => {
    const haystack = `${getResidentFullName(resident)} ${resident.residentNumber} ${resident.address} ${resident.occupation}`.toLowerCase();
    const matchesSearch = haystack.includes(search.toLowerCase());
    const matchesBarangay = barangay === 'All barangays' || resident.barangay === barangay;
    const matchesStatus = status === 'All statuses' || resident.status === status;

    return matchesSearch && matchesBarangay && matchesStatus;
  });

  function updateFilter(key, value) {
    const next = new URLSearchParams(searchParams);

    if (!value || value.startsWith('All ')) {
      next.delete(key);
    } else {
      next.set(key, value);
    }

    setSearchParams(next);
  }

  return (
    <div className="page-stack resident-module">
      <section className="module-hero resident-hero">
        <div className="module-icon"><UserPlus size={30} /></div>
        <div>
          <p className="eyebrow">Basic LGU IDS Platform</p>
          <h1>Resident Registration</h1>
          <p>
            A demo intake workspace for LGU staff to search residents, review verification status,
            inspect profile details, and start a guided registration without real persistence.
          </p>
          <div className="resident-hero__actions">
            <Link role="button" to="/resident-registration/new">Register resident</Link>
            <a role="button" className="secondary" href="#resident-list">View resident list</a>
          </div>
        </div>
      </section>

      <section className="resident-demographics" aria-label="Resident demographic snapshot">
        {demographicCards.map((card) => {
          const Icon = card.icon;
          return (
            <article className="metric-card resident-metric" key={card.label}>
              <div className="resident-metric__icon"><Icon size={20} /></div>
              <span>{card.label}</span>
              <strong>{card.value}</strong>
              <small>{card.trend}</small>
            </article>
          );
        })}
      </section>

      <section className="resident-grid">
        <article className="workflow-card" id="resident-list">
          <div className="section-heading resident-list-heading">
            <div>
              <p className="eyebrow">Resident registry</p>
              <h2>Search and filter residents</h2>
            </div>
            <Link role="button" className="outline" to="/resident-registration/new">New registration</Link>
          </div>

          <div className="resident-filters" aria-label="Resident search filters">
            <label>
              <span>Search</span>
              <div className="resident-searchbox">
                <Search size={18} />
                <input
                  type="search"
                  value={search}
                  placeholder="Name, resident no., address, occupation"
                  onChange={(event) => updateFilter('search', event.target.value)}
                />
              </div>
            </label>
            <label>
              <span>Barangay</span>
              <select value={barangay} onChange={(event) => updateFilter('barangay', event.target.value)}>
                {barangays.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label>
              <span>Status</span>
              <select value={status} onChange={(event) => updateFilter('status', event.target.value)}>
                {residentStatuses.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
          </div>

          <div className="table-wrap resident-table">
            <table>
              <thead>
                <tr>
                  <th>Resident</th>
                  <th>Barangay</th>
                  <th>Demographics</th>
                  <th>Status</th>
                  <th>Registered</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredResidents.map((resident) => (
                  <tr key={resident.id}>
                    <td>
                      <strong>{getResidentFullName(resident)}</strong>
                      <small>{resident.residentNumber}</small>
                    </td>
                    <td>{resident.barangay}</td>
                    <td>{getAge(resident.birthDate)} yrs · {resident.gender} · {resident.civilStatus}</td>
                    <td><ResidentStatusBadge status={resident.status} /></td>
                    <td>{new Date(resident.registeredAt).toLocaleDateString()}</td>
                    <td><Link to={`/resident-registration/${resident.id}`}>View</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <aside className="side-panel resident-review-panel">
          <h2>Today&apos;s intake board</h2>
          <dl>
            <div><dt>Walk-in queue</dt><dd>24</dd></div>
            <div><dt>Online drafts</dt><dd>18</dd></div>
            <div><dt>Barangay checks</dt><dd>32</dd></div>
            <div><dt>Avg. intake time</dt><dd>11 min</dd></div>
          </dl>
          <h3>Demo workflow</h3>
          <ol className="resident-checklist">
            <li><CalendarCheck2 size={16} /> Capture personal and household details.</li>
            <li><FileSearch size={16} /> Review supporting documents.</li>
            <li><ShieldCheck size={16} /> Mark profile for verification.</li>
          </ol>
        </aside>
      </section>
    </div>
  );
}
