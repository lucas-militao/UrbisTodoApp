import React, { useRef } from 'react';
import { AddTaskButton } from '../AddTaskButton';
import { CheckBox } from '../CheckBox';
import { Container } from './style';

export const CheckBoxList: React.FC = () => {
  const tasks = [];
  const containerRef = useRef<HTMLInputElement>(null);

  function handleAddTask() {
    return 'Adicionar task';
  }

  return (
    <Container ref={containerRef}>
      <AddTaskButton addTask={handleAddTask} />
    </Container>
  );
};
