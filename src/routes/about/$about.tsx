import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/$about')({
  component: () => <div>Hello /about/$about!</div>
})