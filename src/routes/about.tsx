import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About
});

function About() {
  return <div>
    <h1>Hello /about</h1>
  </div>
}