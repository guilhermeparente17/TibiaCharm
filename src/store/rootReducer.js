const initialState = {
  charm: 0,
};

export const TibiaActions = {
  setCharm: (payload) => ({
    type: ActionTypes.CHARM,
    payload: payload,
  }),
};

export const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.CHARM:
      return {
        charm: state.charm + payload,
      };
    default:
      return state;
  }
};

const ActionTypes = {
  CHARM: "CHARM",
};

export default counterReducer;
