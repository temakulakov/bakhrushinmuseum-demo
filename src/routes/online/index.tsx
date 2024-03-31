import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/online/')({
  component: () => <div>Hello /online/!</div>
})