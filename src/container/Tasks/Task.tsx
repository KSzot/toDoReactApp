import React, { FunctionComponent, useState } from 'react';
import { Container } from './Task.css';
import { Button, DisplayTasks } from '../../components';
import { theme } from '../../utils/theme';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../data/store';
import { appAction, ActionTask } from '../../data/actions/appAction';

interface Tasks {
  id: number;
  name: string;
}

const Task: FunctionComponent<any> = (props) => {
  const [insertValue, setInsertValue] = useState<string>('');
  const [taskToDo, setTaskToDo] = useState<Tasks[]>([]);
  const [taskCompleted, setTaskCompleted] = useState<Tasks[]>([]);
  const isMode = useSelector((state: AppState) => state.mode.isMode);
  const dispatch = useDispatch();

  const _getInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInsertValue(event.target.value);
  };

  const _clearInput = () => {
    setInsertValue('');
  };

  const _clearArray = (tab: React.Dispatch<React.SetStateAction<Tasks[]>>) => {
    tab([]);
  };

  const _insertTaskToArray = (
    setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>,
    value: string
  ) => {
    setTasks((prevState) => [
      ...prevState,
      { id: new Date().getTime(), name: value },
    ]);
  };

  // const _insertTaskToArrayDispatch = (value: string): Tasks => {
  //   console.log(value);
  //   return { id: new Date().getTime(), name: value };
  // };

  const _deleteTaskOnArray = (
    id: number,
    arrayTasks: Tasks[],
    setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>
  ): Tasks => {
    const obj: Tasks = arrayTasks.find((task) => task.id === id)!;
    const newArray = arrayTasks.filter((task) => task.id !== id);
    setTasks(newArray);
    return obj;
  };
  const onAddTask = () => {
    if (insertValue.length !== 0) {
      // setTaskToDo((PrevArray) => [...PrevArray, insertValue]);
      _insertTaskToArray(setTaskToDo, insertValue);
      dispatch(appAction.addTask(insertValue));
      _clearInput();
    }
  };

  const onTaskCompleted = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
    id: number
  ) => {
    if (id !== undefined) {
      const task: Tasks = _deleteTaskOnArray(id, taskToDo, setTaskToDo);
      _insertTaskToArray(setTaskCompleted, task.name);
    }
  };

  const onCloseTask = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
    id: number,
    mode: boolean
  ) => {
    mode
      ? _deleteTaskOnArray(id, taskCompleted, setTaskCompleted)
      : _deleteTaskOnArray(id, taskToDo, setTaskToDo);
  };

  const onDeleteAllTask = () => {
    _clearArray(setTaskCompleted);
    _clearArray(setTaskToDo);
  };
  return (
    <Container mode={isMode}>
      <div className='task-header'>
        <div className='task-header--inputDiv'>
          <input
            type='text'
            placeholder='What is on your list today?'
            onChange={_getInputValue}
            value={insertValue}
          />
          <Button
            bcColor={theme.colors.primary.normal}
            bcColorHover={theme.colors.primary.dark}
            clicked={onAddTask}
          >
            Add
          </Button>
        </div>
        <p className='task-header--text'>
          <span>{taskToDo.length}</span>Task Left
        </p>
      </div>
      <div className='task-main'>
        <div className='task-main--content'>
          <DisplayTasks
            mode={isMode}
            completed={false}
            tasks={taskToDo}
            taskCompleted={onTaskCompleted}
            closeTask={onCloseTask}
          />
          <DisplayTasks
            mode={isMode}
            completed={true}
            tasks={taskCompleted}
            taskCompleted={onTaskCompleted}
            closeTask={onCloseTask}
          />
        </div>
        <Button clicked={onDeleteAllTask}>Clear all</Button>
      </div>
    </Container>
  );
};
// type Combine = appState & appTaskState;
// const mapStateToProps = (state: any) => ({
//   isMode: state.mode.isMode,
//   taskRedux: state.tasks.taskReducer,
// });

// interface LinkDispatchProps {
//   addTask: (task: Tasks) => void;
// }

// const mapDispatchToProps = (
//   dispatch: ThunkDispatch<any, any, ActionTask>
// ): LinkDispatchProps => ({
//   addTask: bindActionCreators(appAction.addTask, dispatch),
// });

export default Task;
