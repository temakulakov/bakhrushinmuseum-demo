import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/find/')({
  component: () => <div>Hello /find/!</div>
})