import { Home } from './components/Home';
import { ModulePage } from './components/ModulePage';
import { moduleCatalog } from './smartlguData';

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  ...moduleCatalog.map((module) => ({
    path: module.path,
    element: <ModulePage module={module} />
  }))
];

export default AppRoutes;
