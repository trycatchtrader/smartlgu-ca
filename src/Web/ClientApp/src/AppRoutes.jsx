import { Home } from './components/Home';
import { ModulePage } from './components/ModulePage';
import { ResidentDetail } from './components/residents/ResidentDetail';
import { ResidentRegistration } from './components/residents/ResidentRegistration';
import { ResidentRegistrationForm } from './components/residents/ResidentRegistrationForm';
import { moduleCatalog } from './smartlguData';

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/resident-registration',
    element: <ResidentRegistration />
  },
  {
    path: '/resident-registration/new',
    element: <ResidentRegistrationForm />
  },
  {
    path: '/resident-registration/:id',
    element: <ResidentDetail />
  },
  ...moduleCatalog
    .filter((module) => module.id !== 'resident-registration')
    .map((module) => ({
      path: module.path,
      element: <ModulePage module={module} />
    }))
];

export default AppRoutes;
