import { Pages } from '@/models/enum/pages';
import { Home } from '@/pages/Home';
import { Order } from '@/pages/Order';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: Pages.HOME,
    element: <Home />,
  },
  {
    path: Pages.ORDER,
    element: <Order />,
  },
  {
    path: '*',
    element: <Navigate to={Pages.HOME} />,
  },
]);

export const Routes = () => <RouterProvider router={router} />;
