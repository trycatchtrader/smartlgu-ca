import {
  BarChart3,
  BellRing,
  Building2,
  CalendarDays,
  ClipboardCheck,
  CloudCog,
  Database,
  FileCheck2,
  HandCoins,
  HeartHandshake,
  Home,
  House,
  LayoutDashboard,
  Megaphone,
  Network,
  ReceiptText,
  ShieldCheck,
  Siren,
  TestTube2,
  UserCircle,
  UserPlus
} from 'lucide-react';

export const moduleCatalog = [
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure Setup',
    path: '/cloud-infrastructure',
    icon: CloudCog,
    package: 'Basic LGU IDS Platform',
    summary: 'Hosting, environments, and deployment readiness for the municipal platform.',
    status: 'Foundation'
  },
  {
    id: 'database-setup',
    title: 'Database Setup',
    path: '/database-setup',
    icon: Database,
    package: 'Basic LGU IDS Platform',
    summary: 'Prototype-ready data model planning and LGU record organization.',
    status: 'Foundation'
  },
  {
    id: 'kyc-verification',
    title: 'KYC & Verification',
    path: '/kyc-verification',
    icon: ShieldCheck,
    package: 'Basic LGU IDS Platform',
    summary: 'Resident identity checks, document review queues, and verification status tracking.',
    status: 'Demo flow'
  },
  {
    id: 'security-compliance',
    title: 'Security & Compliance',
    path: '/security-compliance',
    icon: FileCheck2,
    package: 'Basic LGU IDS Platform',
    summary: 'Privacy controls, audit readiness, and compliance checkpoints for LGU operations.',
    status: 'Foundation'
  },
  {
    id: 'resident-registration',
    title: 'Resident Registration',
    path: '/resident-registration',
    icon: UserPlus,
    package: 'Basic LGU IDS Platform',
    summary: 'Citizen onboarding, demographic capture, and resident profile creation.',
    status: 'Demo flow'
  },
  {
    id: 'module-activation',
    title: 'Module Activation',
    path: '/module-activation',
    icon: Network,
    package: 'Basic LGU IDS Platform',
    summary: 'LGU service modules, rollout toggles, and implementation milestones.',
    status: 'Foundation'
  },
  {
    id: 'admin-dashboard',
    title: 'Admin Dashboard',
    path: '/admin-dashboard',
    icon: LayoutDashboard,
    package: 'Basic LGU IDS Platform',
    summary: 'Executive overview of service volume, priority tasks, and operational health.',
    status: 'Demo flow'
  },
  {
    id: 'testing-go-live',
    title: 'Testing & Go-Live',
    path: '/testing-go-live',
    icon: TestTube2,
    package: 'Basic LGU IDS Platform',
    summary: 'Pilot validation, staff acceptance, and launch readiness activities.',
    status: 'Foundation'
  },
  {
    id: 'profile',
    title: 'Profile',
    path: '/profile',
    icon: UserCircle,
    package: 'Basic LGU IDS Platform',
    summary: 'Resident and staff profile snapshot with service history highlights.',
    status: 'Demo flow'
  },
  {
    id: 'assistance-social-services',
    title: 'Assistance & Social Services',
    path: '/assistance-social-services',
    icon: HeartHandshake,
    package: 'Expanded LGU IDS Platform',
    summary: 'Intake, assessment, and fulfillment tracking for social service requests.',
    status: 'Demo flow'
  },
  {
    id: 'beneficiary-fund-tracking',
    title: 'Beneficiary & Fund Tracking',
    path: '/beneficiary-fund-tracking',
    icon: HandCoins,
    package: 'Expanded LGU IDS Platform',
    summary: 'Beneficiary lists, allocation visibility, and disbursement monitoring.',
    status: 'Demo flow'
  },
  {
    id: 'barangay-endorsement',
    title: 'Barangay Endorsement',
    path: '/barangay-endorsement',
    icon: ClipboardCheck,
    package: 'Expanded LGU IDS Platform',
    summary: 'Barangay certificate requests, endorsements, and inter-office routing.',
    status: 'Demo flow'
  },
  {
    id: 'requests-complaints',
    title: 'Requests & Complaints',
    path: '/requests-complaints',
    icon: Megaphone,
    package: 'Expanded LGU IDS Platform',
    summary: 'Citizen concerns, ticket assignment, SLA status, and resolution notes.',
    status: 'Demo flow'
  },
  {
    id: 'disaster-calamity',
    title: 'Disaster & Calamity',
    path: '/disaster-calamity',
    icon: Siren,
    package: 'Full LGU IDS Platform',
    summary: 'Incident monitoring, evacuation support, and relief coordination.',
    status: 'Demo flow'
  },
  {
    id: 'announcements-alerts',
    title: 'Announcements & Alerts',
    path: '/announcements-alerts',
    icon: BellRing,
    package: 'Full LGU IDS Platform',
    summary: 'Public advisories, targeted alerts, and announcement scheduling.',
    status: 'Demo flow'
  },
  {
    id: 'payments-acknowledgments',
    title: 'Payments & Acknowledgments',
    path: '/payments-acknowledgments',
    icon: ReceiptText,
    package: 'Full LGU IDS Platform',
    summary: 'Payment references, acknowledgments, and fee transaction visibility.',
    status: 'Demo flow'
  },
  {
    id: 'analytics-reports',
    title: 'Analytics & Reports',
    path: '/analytics-reports',
    icon: BarChart3,
    package: 'Full LGU IDS Platform',
    summary: 'Performance dashboards, reports, and data-driven governance insights.',
    status: 'Demo flow'
  },
  {
    id: 'household-management',
    title: 'Household Management',
    path: '/household-management',
    icon: House,
    package: 'Full LGU IDS Platform',
    summary: 'Household composition, family relationships, and address-level records.',
    status: 'Demo flow'
  },
  {
    id: 'events',
    title: 'Events',
    path: '/events',
    icon: CalendarDays,
    package: 'Full LGU IDS Platform',
    summary: 'Community programs, calendars, attendance, and event communications.',
    status: 'Demo flow'
  },
  {
    id: 'directory',
    title: 'Directory',
    path: '/directory',
    icon: Building2,
    package: 'Full LGU IDS Platform',
    summary: 'LGU offices, service desks, contacts, and public-facing service information.',
    status: 'Demo flow'
  }
];

export const packageGroups = [
  {
    name: 'Basic LGU IDS Platform',
    tagline: 'Core digital governance foundation',
    description: 'Establishes the cloud, data, verification, resident, administration, and launch-readiness baseline for SmartLGU.',
    accent: 'blue',
    modules: moduleCatalog.filter((module) => module.package === 'Basic LGU IDS Platform')
  },
  {
    name: 'Expanded LGU IDS Platform',
    tagline: 'Municipal services and frontline workflows',
    description: 'Adds citizen assistance, fund tracking, barangay coordination, and case management workflows for daily LGU operations.',
    accent: 'green',
    modules: moduleCatalog.filter((module) => module.package === 'Expanded LGU IDS Platform')
  },
  {
    name: 'Full LGU IDS Platform',
    tagline: 'Complete digital governance ecosystem',
    description: 'Completes the prototype with resilience, communications, payment, analytics, household, events, and directory capabilities.',
    accent: 'violet',
    modules: moduleCatalog.filter((module) => module.package === 'Full LGU IDS Platform')
  }
];

export const dashboardMetrics = [
  { label: 'Registered residents', value: '24,860', trend: '+8.2% this quarter' },
  { label: 'Open service requests', value: '318', trend: '42 urgent' },
  { label: 'Barangays connected', value: '27 / 27', trend: '100% rollout ready' },
  { label: 'Active modules', value: '15', trend: 'Prototype coverage' }
];

export const navSections = [
  {
    label: 'Overview',
    links: [{ title: 'Command Center', path: '/', icon: Home }]
  },
  ...packageGroups.map((group) => ({
    label: group.name.replace(' LGU IDS Platform', ''),
    links: group.modules
  }))
];

export function findModuleByPath(path) {
  return moduleCatalog.find((module) => module.path === path);
}
