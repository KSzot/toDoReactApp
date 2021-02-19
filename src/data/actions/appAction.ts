export type Action = ChangeModeAction;

export type ActionTask = AddTaskAction | DeleteTaskAction;
export const AppActionType = {
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
  TOGGLE_MODE: 'TOGGLE_MODE',
};

interface ChangeModeAction {
  type: typeof AppActionType.TOGGLE_MODE;
  payload: boolean;
}

interface AddTaskAction {
  type: typeof AppActionType.ADD_TASK;
  payload: string;
}

interface DeleteTaskAction {
  type: typeof AppActionType.DELETE_TASK;
  payload: Tasks;
}

interface Tasks {
  id: number;
  name: string;
}

export const toggleMode = (appState: boolean): Action => ({
  type: AppActionType.TOGGLE_MODE,
  payload: appState,
});

export const addTask = (newTask: string): AddTaskAction => ({
  type: AppActionType.ADD_TASK,
  payload: newTask,
});

export const appAction = {
  addTask,
};
