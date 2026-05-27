import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import { ModuleContainer } from '@/components/ui/ModuleContainer';
import React from 'react';

// Lazy loading example for modules
const Dashboard = React.lazy(() => import('@/components/early-childhood/EarlyChildhoodDashboard').then(m => ({ default: m.EarlyChildhoodDashboard })));

const rootRoute = createRootRoute({
  component: () => (
    <ModuleContainer>
      {/* Shell component could go here */}
      <div className="min-h-screen bg-background">
        <main>
          <Dashboard />
        </main>
      </div>
    </ModuleContainer>
  ),
});

export const routeTree = rootRoute;

export const modularRouter = createRouter({
  routeTree,
});
