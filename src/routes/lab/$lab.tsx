import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/lab/$lab')({
  component: () => <div>Hello /lab/$lab!</div>
})