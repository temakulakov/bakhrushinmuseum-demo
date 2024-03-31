import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/online/$online')({
  component: () => <div>Hello /online/$online!</div>
})