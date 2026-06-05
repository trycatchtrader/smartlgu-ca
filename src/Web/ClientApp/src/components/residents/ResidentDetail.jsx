import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, FileText, Home, Mail, MapPin, Phone, ShieldCheck, UserRound } from 'lucide-react';
import { ResidentStatusBadge } from './ResidentStatusBadge';
import { getResidentById, getResidentFullName } from './residentDemoData';

function DetailItem({ label, value }) {
  return (
    <div className="resident-detail-item">
      <span>{label}</span>
      <strong>{value || 'Not provided'}</strong>
    </div>
  );
}

export function ResidentDetail() {
  const { id } = useParams();
  const resident = getResidentById(id);

  if (!resident) {
    return <Navigate to="/resident-registration" replace />;
  }

  return (
    <div className="page-stack resident-module">
      <Link className="back-link" to="/resident-registration"><ArrowLeft size={16} /> Back to resident list</Link>

      <section className="resident-profile-hero">
        <div className="resident-avatar"><UserRound size={42} /></div>
        <div>
          <p className="eyebrow">Resident profile</p>
          <h1>{getResidentFullName(resident)}</h1>
          <p>{resident.residentNumber} · {resident.barangay}</p>
          <ResidentStatusBadge status={resident.status} />
        </div>
      </section>

      <section className="resident-detail-layout">
        <article className="workflow-card">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">Profile details</p>
            <h2>Identity and demographic information</h2>
          </div>
          <div className="resident-detail-grid">
            <DetailItem label="Birth date" value={new Date(resident.birthDate).toLocaleDateString()} />
            <DetailItem label="Gender" value={resident.gender} />
            <DetailItem label="Civil status" value={resident.civilStatus} />
            <DetailItem label="Occupation" value={resident.occupation} />
            <DetailItem label="Voter classification" value={resident.voterClassification} />
            <DetailItem label="Registered date" value={new Date(resident.registeredAt).toLocaleDateString()} />
          </div>

          <div className="resident-contact-card">
            <h3>Contact and address</h3>
            <p><MapPin size={17} /> {resident.address}</p>
            <p><Phone size={17} /> {resident.contactNumber}</p>
            <p><Mail size={17} /> {resident.email || 'No email on file'}</p>
            <p><Home size={17} /> {resident.household}</p>
          </div>
        </article>

        <aside className="side-panel">
          <h2>Verification summary</h2>
          <p>{resident.verificationNotes}</p>
          <h3>Documents on file</h3>
          <ul className="resident-doc-list">
            {resident.documents.map((document) => (
              <li key={document}><FileText size={16} /> {document}</li>
            ))}
          </ul>
          <h3>Service history</h3>
          <ul className="resident-doc-list resident-doc-list--muted">
            {resident.serviceHistory.map((item) => (
              <li key={item}><ShieldCheck size={16} /> {item}</li>
            ))}
          </ul>
        </aside>
      </section>
    </div>
  );
}
