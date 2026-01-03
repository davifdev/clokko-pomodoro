import type { TaskStateModel } from '../../models/taskStateModel';

export const initialTaskStateValue: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    working: 25,
    shortResting: 5,
    longResting: 15,
  },
};
