import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/find/$find')({
  component: () => <div>Hello /find/$find!</div>
})