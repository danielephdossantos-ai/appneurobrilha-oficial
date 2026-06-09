import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/anamnese')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/anamnese"!</div>
}
