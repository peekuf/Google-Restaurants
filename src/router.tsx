import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Register Assignment
const AssignmnetTwo = Loader(lazy(() => import('src/content/assignment/Assignment_2')))
const AssignmnetThree = Loader(lazy(() => import('src/content/assignment/Assignment_3')))


const routes: RouteObject[] = [
  {
    path: 'Assignment',
    element: <SidebarLayout />,
    children: [
      { path: 'AssignmentTwo', element: <AssignmnetTwo /> },
      { path: 'AssignmentThree', element: <AssignmnetThree /> }
    ]
  },
];

export default routes;
