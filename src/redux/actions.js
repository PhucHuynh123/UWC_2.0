export const setTask = (payload) => {
  return {
    type: "set_task",
    payload: payload,
  };
};

export const setTime = (payload) => {
  return {
    type: "set_time",
    payload: payload,
  };
};

export const setVehicle = (payload) => {
  return {
    type: "set_vehicle",
    payload: payload,
  };
};

export const setRoute = (payload) => {
  return {
    type: "set_route",
    payload: payload,
  };
};

export const createRoute = (payload) => {
  return {
    type: "create_route",
    payload: payload,
  };
};

export const updateRoute = (payload) => {
  return {
    type: "update_route",
    payload: payload,
  };
};

export const deleteRoute = (payload) => {
  return {
    type: "delete_route",
    payload: payload,
  };
};

export const createTask = (payload) => {
  return {
    type: "create_task",
    payload: payload,
  };
};

export const updateTask = (payload) => {
  return {
    type: "update_task",
    payload: payload,
  };
};

export const deleteTask = (payload) => {
  return {
    type: "delete_task",
    payload: payload,
  };
};
