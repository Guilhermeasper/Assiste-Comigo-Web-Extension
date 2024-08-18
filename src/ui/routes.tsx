import { createBrowserRouter } from 'react-router-dom';
import Start from './start';
import NotFound from './not-found';
import CreateSession from './create-session';
import Error from './error';
import InsideSession from './in-session';

export const router = createBrowserRouter([
  {
    path: '/index.html',
    element: <Start />,
  },
  {
    path: '/',
    element: <Start />,
  },
  {
    path: '/create',
    element: <CreateSession />,
  },
  {
    path: '/in-session',
    element: <InsideSession />,
  },
  {
    path: '/error',
    element: <Error />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
