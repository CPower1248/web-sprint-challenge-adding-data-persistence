module.exports = {
  intToBool,
  boolToInt,
  projectToBody,
  taskToBody,
  project_resourceToBody,
  bodyToProject
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

function project_resourceToBody(project_resource) {
  const result = {
    ...project_resource,
    project_completed: intToBool(project_resource.project_completed),
  };

  return result;
}

function bodyToProject(project) {
  const result = {
    ...project,
    project_completed: boolToInt(project.project_completed)
  }
  
  return result
}
