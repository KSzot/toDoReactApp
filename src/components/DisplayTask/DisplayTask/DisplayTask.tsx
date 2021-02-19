import React, { FunctionComponent } from 'react';
import { DisplayLi } from './DisplayTask.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSquare } from '@fortawesome/free-solid-svg-icons';

interface Props {
  mode: boolean;
  completed: boolean;
  taskCompleted: (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
    id: number
  ) => void;
  indexKey: number;
  closeTask: (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
    id: number,
    mode: boolean
  ) => void;
}
const DisplayTask: FunctionComponent<Props> = ({
  mode,
  children,
  completed,
  taskCompleted,
  indexKey,
  closeTask,
}) => {
  return (
    <DisplayLi mode={mode} completed={completed}>
      {completed ? null : (
        <FontAwesomeIcon
          icon={faSquare}
          className='dl-square'
          onClick={(event) => taskCompleted(event, indexKey)}
        />
      )}
      {children}
      <FontAwesomeIcon
        icon={faTimes}
        className='dl-close'
        onClick={(event) => closeTask(event, indexKey, completed)}
      />
    </DisplayLi>
  );
};

export default DisplayTask;
