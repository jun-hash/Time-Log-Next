// src/pages/task.tsx
import React from 'react'
import { Button, Card, Text } from '@shadcn/ui'
import Tasks from '../components/Tasks'

export default function TaskPage() {
  return (
    <Card>
      <Text as="h1">Task Page</Text>
      <Tasks />
      <Button>Click Me</Button>
    </Card>
  )
}