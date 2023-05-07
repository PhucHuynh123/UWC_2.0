import { collectorTasks } from "../data/collectorTasks";
import { janitorTasks } from "../data/janitorTasks";
import { collectorList } from "../data/collectorList";
import { janitorList } from "../data/janitorList";
import { routeList } from "../data/routeList";

let initState = {
  janitorList,
  collectorList,
  task: {
    time: "",
    vehicle: "",
    route: "",
    status: "",
  },
  collectorTasks,
  janitorTasks,
  routeList,
};

const rootReducer = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "set_task":
      return {
        ...state,
        task: action.payload,
      };
    case "set_time":
      return {
        ...state,
        task: {
          ...state.task,
          time: action.payload,
        },
      };
    case "set_vehicle":
      return {
        ...state,
        task: {
          ...state.task,
          vehicle: action.payload,
        },
      };
    case "set_route":
      return {
        ...state,
        task: {
          ...state.task,
          route: action.payload,
        },
      };
    case "create_route":
      return {
        ...state,
        routeList: [...state.routeList, action.payload],
      };
    case "update_route":
      const newListRoute = state.routeList.map((route) =>
        route.route_id === action.payload.route_id ? { ...route, ...action.payload } : route
      );
      return {
        ...state,
        routeList: newListRoute,
      };
    case "delete_route":
      const filterRoute = state.routeList.filter((route) => route.route_id !== action.payload);
      return {
        ...state,
        routeList: filterRoute,
      };
    case "create_task":
      if (action.payload.employee_id.includes("CO")) {
        return {
          ...state,
          collectorTasks: [...state.collectorTasks, action.payload],
        };
      } else {
        return {
          ...state,
          janitorTasks: [...state.janitorTasks, action.payload],
        };
      }
    case "update_task":
      if (action.payload.employee_id.includes("CO")) {
        const newColectorTask = state.collectorTasks.map((task) =>
          task.task_id === action.payload.task_id ? { ...task, ...action.payload } : task
        );
        return {
          ...state,
          collectorTasks: newColectorTask,
        };
      } else {
        const newJanitorTask = state.janitorTasks.map((task) =>
          task.task_id === action.payload.task_id ? { ...task, ...action.payload } : task
        );
        return {
          ...state,
          janitorTasks: newJanitorTask,
        };
      }
    case "delete_task":
      if (action.payload.employee_id.includes("CO")) {
        const filterCollectorTask = state.collectorTasks.filter((task) => task.task_id !== action.payload.task_id);
        return {
          ...state,
          collectorTasks: filterCollectorTask,
        };
      } else {
        const filterJanitorTask = state.janitorTasks.filter((task) => task.task_id !== action.payload.task_id);
        return {
          ...state,
          janitorTasks: filterJanitorTask,
        };
      }
    default:
      return state;
  }
};

export default rootReducer;
