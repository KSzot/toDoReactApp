import React, { FunctionComponent, useEffect } from 'react';
import { Container } from './DisplayTasks.css';
import DisplayTask from './DisplayTask/DisplayTask';
import { keys, storeValue } from '../../data/localStorage';
interface DisplayTaskProps {
  mode: boolean;
  completed: boolean;
  tasks?: Tasks[];
  taskCompleted: (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
    id: number
  ) => void;
  closeTask: (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
    id: number,
    mode: boolean
  ) => void;
}

interface Tasks {
  id: number;
  name: string;
}

const DisplayTasks: FunctionComponent<DisplayTaskProps> = ({
  mode,
  completed,
  tasks,
  taskCompleted,
  closeTask,
}) => {
  return (
    <Container mode={mode}>
      <h2>tekst</h2>
      <ul>
        {tasks?.map((item) => {
          return (
            <DisplayTask
              key={item.id}
              mode={mode}
              completed={completed}
              taskCompleted={taskCompleted}
              indexKey={item.id}
              closeTask={closeTask}
            >
              {item.name}
            </DisplayTask>
          );
        })}
        {/* <DisplayTask mode={mode} completed={completed}>
          Dziala
        </DisplayTask> */}
      </ul>
    </Container>
  );
};

export default DisplayTasks;
