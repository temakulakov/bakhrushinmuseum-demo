import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/events/$event')({
  component: () => <div>Hello /events/$event!</div>
})