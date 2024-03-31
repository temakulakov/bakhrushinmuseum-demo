import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/additional/')({
  component: () => <div>Hello /additional/!</div>
})