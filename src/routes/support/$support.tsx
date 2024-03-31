import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/support/$support')({
  component: () => <div>Hello /support/$support!</div>
})