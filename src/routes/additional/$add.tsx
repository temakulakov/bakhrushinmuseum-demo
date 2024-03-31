import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/additional/$add')({
  component: () => <div>Hello /additional/$add!</div>
})