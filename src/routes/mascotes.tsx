import { createFileRoute } from '@tanstack/react-router';
import { PipVirtualPet } from '@/components/mascot/PipVirtualPet';
import { Shell } from '@/components/Layout';

export const Route = createFileRoute('/mascotes')({
  component: () => (
    <Shell>
      <div className="container mx-auto py-8">
        <PipVirtualPet />
      </div>
    </Shell>
  ),
});
