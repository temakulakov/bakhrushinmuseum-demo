import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/theatre/')({
  component: () => <div>Hello /theatre/!</div>
})