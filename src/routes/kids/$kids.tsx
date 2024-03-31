import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/kids/$kids')({
  component: () => <div>Hello /kids/$kids!</div>
})