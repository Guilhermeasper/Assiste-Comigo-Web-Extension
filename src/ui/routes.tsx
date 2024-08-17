import { createBrowserRouter } from 'react-router-dom';
import App from './app';
import NotFound from './not-found';
import CreateSession from './create-session';
import Error from './error';
import InsideSession from './in-session';

export const router = createBrowserRouter([
  {
    path: '/index.html',
    element: <App />,
  },
  {
    path: '/',
    element: <App />,
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
