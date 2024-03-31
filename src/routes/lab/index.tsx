import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/lab/')({
  component: () => <div>Hello /lab/!</div>
})