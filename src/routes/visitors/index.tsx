import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/visitors/')({
  component: () => <div>Hello /visitors/!</div>
})