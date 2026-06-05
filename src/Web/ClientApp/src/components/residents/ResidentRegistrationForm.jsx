import { Link } from 'react-router-dom';
import { ArrowLeft, ClipboardCheck, Save, ShieldCheck, UserPlus } from 'lucide-react';

export function ResidentRegistrationForm() {
  return (
    <div className="page-stack resident-module">
      <Link className="back-link" to="/resident-registration"><ArrowLeft size={16} /> Back to resident list</Link>

      <section className="module-hero resident-hero">
        <div className="module-icon"><UserPlus size={30} /></div>
        <div>
          <p className="eyebrow">New resident intake</p>
          <h1>Register resident</h1>
          <p>
            Presentation form showing the future intake flow. Submissions are mock only and do not
            create database records in this prototype.
          </p>
        </div>
      </section>

      <section className="resident-detail-layout">
        <form className="workflow-card resident-form">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">Step 1</p>
            <h2>Personal information</h2>
          </div>
          <div className="resident-form-grid">
            <label>First name<input name="firstName" placeholder="e.g., Elena" /></label>
            <label>Middle name<input name="middleName" placeholder="e.g., Cruz" /></label>
            <label>Last name<input name="lastName" placeholder="e.g., Villanueva" /></label>
            <label>Birth date<input name="birthDate" type="date" /></label>
            <label>Gender<select name="gender"><option>Female</option><option>Male</option><option>Prefer not to say</option></select></label>
            <label>Civil status<select name="civilStatus"><option>Single</option><option>Married</option><option>Widowed</option><option>Separated</option></select></label>
          </div>

          <div className="section-heading section-heading--compact resident-form-section">
            <p className="eyebrow">Step 2</p>
            <h2>Residency and contact</h2>
          </div>
          <div className="resident-form-grid">
            <label>Barangay<select name="barangay"><option>Poblacion</option><option>San Isidro</option><option>Mabini</option><option>Bagong Silang</option></select></label>
            <label>Contact number<input name="contactNumber" placeholder="+63 9XX XXX XXXX" /></label>
            <label>Email<input name="email" type="email" placeholder="resident@example.com" /></label>
            <label>Occupation<input name="occupation" placeholder="Occupation or livelihood" /></label>
            <label className="resident-form-grid__wide">Complete address<textarea name="address" rows="3" placeholder="House no., street, sitio/purok, barangay" /></label>
            <label>Voter classification<select name="voterClassification"><option>Registered voter</option><option>New voter</option><option>Non-voter</option><option>Senior citizen voter</option></select></label>
            <label>Initial status<select name="status"><option>Pending Verification</option><option>Draft</option><option>Needs Review</option><option>Verified</option></select></label>
          </div>

          <div className="resident-form-actions">
            <button type="button" className="secondary"><Save size={17} /> Save draft</button>
            <button type="button"><ClipboardCheck size={17} /> Submit for verification</button>
          </div>
        </form>

        <aside className="side-panel resident-review-panel">
          <h2>Registration checklist</h2>
          <ol className="resident-checklist">
            <li><UserPlus size={16} /> Capture identity and demographic details.</li>
            <li><ShieldCheck size={16} /> Attach documents in the future implementation.</li>
            <li><ClipboardCheck size={16} /> Route to barangay or LGU verifier.</li>
          </ol>
          <p className="resident-demo-note">Demo mode: buttons are intentionally non-persistent for client walkthroughs.</p>
        </aside>
      </section>
    </div>
  );
}
