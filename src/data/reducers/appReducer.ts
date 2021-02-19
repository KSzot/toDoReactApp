import { Action, AppActionType, ActionTask } from '../actions/appAction';

export interface appState {
  isMode: boolean;
}

interface Tasks {
  id: number;
  name: string;
}

export interface appTaskState {
  taskReducer: Tasks[];
  taskCompletedReducer: Tasks[];
}

const initialStateTask = {
  taskReducer: [],
  taskCompletedReducer: [],
};

const initialState = {
  isMode: false,
};

export const appReducer = (state: appState = initialState, action: Action) => {
  switch (action.type) {
    case AppActionType.TOGGLE_MODE: {
      return { ...state, isMode: action.payload };
    }

    default:
      return state;
  }
};

export const appTaskReducer = (
  state: appTaskState = initialStateTask,
  action: ActionTask
) => {
  switch (action.type) {
    case AppActionType.ADD_TASK: {
      const newDate = new Date().getTime();
      const newName = action.payload.toString();
      const obj: Tasks = {
        id: newDate,
        name: newName,
      };
      return {
        ...state,
        taskReducer: state.taskReducer.concat(obj),
      };
    }
    // case AppActionType.DELETE_TASK: {
    //   return {
    //     ...state,
    //     taskReducer: state.taskReducer.filter(
    //       (item) => item.id !== action.payload.id
    //     ),
    //   };
    // }
    default:
      return state;
  }
};
