import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/visitors/$visitor')({
  component: () => <div>Hello /visitors/$visitor!</div>
})