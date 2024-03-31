import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/kids/')({
  component: () => <div>Hello /kids/!</div>
})