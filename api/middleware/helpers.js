module.exports = {
  intToBool,
  boolToInt,
  projectToBody,
  taskToBody
}

function intToBool(int) {
  return int === 1 ? true : false
}

function boolToInt(bool) {
  return bool === true ? 1 : 0
}

function projectToBody(project) {
  const result = {
    ...project,
    project_completed: intToBool(project.project_completed),
  };

  return result;
}

function taskToBody(task) {
  const result = {
    ...task,
    task_completed: intToBool(task.task_completed),
  };

  return result;
}
