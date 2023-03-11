const initialState = {
  charm: 0,
};

export const TibiaActions = {
  setCharm: (payload) => ({
    type: ActionTypes.CHARM,
    payload: payload,
  }),
  zerarCharm: (payload) => ({
    type: ActionTypes.ZERAR_CHARM,
    payload: payload,
  }),
};

export const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.CHARM:
      return {
        charm: state.charm + payload,
      };
    case ActionTypes.ZERAR_CHARM:
      return {
        charm: payload,
      };
    default:
      return state;
  }
};

const ActionTypes = {
  CHARM: "CHARM",
  ZERAR_CHARM: "ZERAR_CHARM",
};

export default counterReducer;
