export const residentStatuses = ['All statuses', 'Verified', 'Pending Verification', 'Needs Review', 'Draft', 'Inactive'];

export const barangays = ['All barangays', 'Poblacion', 'San Isidro', 'Mabini', 'Bagong Silang'];

export const residents = [
  {
    id: 1,
    residentNumber: 'RSD-2026-0001',
    firstName: 'Maria',
    middleName: 'Lim',
    lastName: 'Santos',
    birthDate: '1988-04-12',
    gender: 'Female',
    civilStatus: 'Married',
    barangay: 'Poblacion',
    address: 'Blk 4 Lot 12, Rizal Street, Poblacion',
    contactNumber: '+63 917 555 0142',
    email: 'maria.santos@example.com',
    occupation: 'Public school teacher',
    voterClassification: 'Registered voter',
    status: 'Verified',
    registeredAt: '2026-05-24T09:30:00Z',
    household: 'Santos Household - 5 members',
    documents: ['National ID', 'Barangay Certificate', 'Proof of Address'],
    verificationNotes: 'Validated by front desk using barangay certificate and national ID.',
    serviceHistory: ['Barangay clearance request', 'Scholarship inquiry', 'Community health profiling']
  },
  {
    id: 2,
    residentNumber: 'RSD-2026-0002',
    firstName: 'Juan',
    middleName: 'Reyes',
    lastName: 'Dela Cruz',
    birthDate: '1979-09-03',
    gender: 'Male',
    civilStatus: 'Married',
    barangay: 'San Isidro',
    address: '76 Mabini Avenue, San Isidro',
    contactNumber: '+63 918 555 2104',
    email: 'juan.delacruz@example.com',
    occupation: 'Tricycle operator',
    voterClassification: 'Registered voter',
    status: 'Pending Verification',
    registeredAt: '2026-05-28T13:15:00Z',
    household: 'Dela Cruz Household - 4 members',
    documents: ['Driver ID', 'Barangay Endorsement'],
    verificationNotes: 'Awaiting household confirmation from barangay secretary.',
    serviceHistory: ['Transport permit renewal', 'Livelihood desk referral']
  },
  {
    id: 3,
    residentNumber: 'RSD-2026-0003',
    firstName: 'Ana',
    middleName: 'Garcia',
    lastName: 'Reyes',
    birthDate: '1995-01-21',
    gender: 'Female',
    civilStatus: 'Single',
    barangay: 'Mabini',
    address: '18 Bonifacio Road, Mabini',
    contactNumber: '+63 919 555 3301',
    email: 'ana.reyes@example.com',
    occupation: 'Microbusiness owner',
    voterClassification: 'Registered voter',
    status: 'Needs Review',
    registeredAt: '2026-05-29T10:05:00Z',
    household: 'Reyes Household - 3 members',
    documents: ['UMID', 'Business permit reference'],
    verificationNotes: 'Duplicate address flag needs reviewer confirmation.',
    serviceHistory: ['Microenterprise assistance screening', 'Market stall inquiry']
  },
  {
    id: 4,
    residentNumber: 'RSD-2026-0004',
    firstName: 'Benjie',
    middleName: 'Torres',
    lastName: 'Aquino',
    birthDate: '1964-11-06',
    gender: 'Male',
    civilStatus: 'Widowed',
    barangay: 'Bagong Silang',
    address: 'Sitio Maligaya, Bagong Silang',
    contactNumber: '+63 920 555 7810',
    email: '',
    occupation: 'Farmer',
    voterClassification: 'Senior citizen voter',
    status: 'Verified',
    registeredAt: '2026-05-21T08:45:00Z',
    household: 'Aquino Household - 2 members',
    documents: ['Senior Citizen ID', 'Barangay Certificate'],
    verificationNotes: 'Senior citizen profile ready for assistance program cross-reference.',
    serviceHistory: ['Senior citizen assistance', 'Agriculture input registration']
  },
  {
    id: 5,
    residentNumber: 'RSD-2026-0005',
    firstName: 'Liza',
    middleName: 'Morales',
    lastName: 'Cruz',
    birthDate: '2001-07-18',
    gender: 'Female',
    civilStatus: 'Single',
    barangay: 'Poblacion',
    address: 'Unit 3, Municipal Market Compound, Poblacion',
    contactNumber: '+63 921 555 9008',
    email: 'liza.cruz@example.com',
    occupation: 'Student',
    voterClassification: 'New voter',
    status: 'Draft',
    registeredAt: '2026-05-30T15:40:00Z',
    household: 'Cruz Household - pending validation',
    documents: ['School ID'],
    verificationNotes: 'Draft intake started by kiosk assistant; missing supporting document upload.',
    serviceHistory: ['Youth program pre-registration']
  }
];

export function getResidentFullName(resident) {
  return [resident.firstName, resident.middleName, resident.lastName].filter(Boolean).join(' ');
}

export function getResidentById(id) {
  return residents.find((resident) => resident.id === Number(id));
}
