// src/components/Tasks.tsx
import React from 'react';
import { List, ListItem } from '@shadcn/ui';

export default function Tasks() {
  return (
    <List>
      <ListItem>Task 1</ListItem>
      <ListItem>Task 2</ListItem>
      <ListItem>Task 3</ListItem>
    </List>
  );
}