import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/theatre/$theatre')({
  component: () => <div>Hello /theatre/$theatre!</div>
})