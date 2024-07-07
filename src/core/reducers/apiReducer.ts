type Statuses = "idle" | "pending" | "resolved" | "rejected";
type ErrorT = Error | null;
type Data = object | null;

type State = {
  status: Statuses;
  error: ErrorT;
  data: Data;
};

type Action =
  | { type: "error"; error: ErrorT }
  | { type: "success"; data: Data }
  | { type: "start" };

export const apiReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "error": {
      return {
        ...state,
        status: "rejected",
        error: action.error,
      };
    }
    case "success": {
      return {
        ...state,
        status: "resolved",
        data: action.data,
      };
    }
    case "start": {
      return {
        ...state,
        status: "pending",
      };
    }
    default: {
      throw new Error("Unhandled action type");
    }
  }
};
