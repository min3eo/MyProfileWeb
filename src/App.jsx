import routes from '@/utils/constants/routes';

import { Routes, Route } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage';
import StacksPage from '@/pages/StacksPage';
import ProjectsPage from './pages/ProjectsPage';
import InfoPage from './pages/InfoPageg';

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<LandingPage />}></Route>
      <Route path={routes.stacks} element={<StacksPage />}></Route>
      <Route path={routes.projects} element={<ProjectsPage />}></Route>
      <Route path={routes.Info} element={<InfoPage />}></Route>
    </Routes>
  );
}

export default App;
