import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addTask = createAction('contacts/add', (nameResult, numberResult) => ({
  payload: {
    task: {
      id: uuidv4(),
      name: nameResult,
      number: numberResult,
    },
  },
}));
const removeTask = createAction('contacts/remove');

const nameCheck = createAction('contacts/check');

export default {
  removeTask,
  addTask,
  nameCheck,
};
