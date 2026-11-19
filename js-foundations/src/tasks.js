// Week 10 - Task Data Toolkit

export function addTask(taskList, newTask) {
  return [...taskList, { ...newTask }];
}

export function findTask(taskList, id) {
  return taskList.find(task => task.id === id);
}

export function removeTask(taskList, id) {
  return taskList.filter(task => task.id !== id);
}

export function completeTask(taskList, id) {
  return taskList.map(task =>
    task.id === id
      ? { ...task, complete: true }
      : task
  );
}
export function summarizeTasks(taskList) {
  let completed = 0;
  let incomplete = 0;

  for (const task of taskList) {
    if (task.complete) {
      completed += 1;
    } else {
      incomplete += 1;
    }
  }

  return { completed, incomplete };
}
export function filterTasks(taskList) {
  return taskList.filter(task => !task.complete);
}