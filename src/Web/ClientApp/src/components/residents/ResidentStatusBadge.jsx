const statusClassMap = {
  Verified: 'resident-status--verified',
  'Pending Verification': 'resident-status--pending',
  'Needs Review': 'resident-status--review',
  Draft: 'resident-status--draft',
  Inactive: 'resident-status--inactive'
};

export function ResidentStatusBadge({ status }) {
  return <span className={`resident-status ${statusClassMap[status] ?? ''}`}>{status}</span>;
}
