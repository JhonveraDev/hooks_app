export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '':
      throw new Error("Action.type");
    default:
      return initialState;
  }
}