const initialState = {
  charm: 0,
};

export const TibiaActions = {
  add_Charm: (payload) => ({
    type: ActionTypes.ADD_CHARM,
    payload: payload,
  }),
  remove_Charm: (payload) => ({
    type: ActionTypes.REMOVE_CHARM,
    payload: payload,
  }),
  zerarCharm: (payload) => ({
    type: ActionTypes.ZERAR_CHARM,
    payload: payload,
  }),
};

export const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_CHARM:
      return {
        charm: state.charm + payload,
      };
    case ActionTypes.REMOVE_CHARM:
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
  ADD_CHARM: "ADD_CHARM",
  REMOVE_CHARM: "REMOVE_CHARM",
  ZERAR_CHARM: "ZERAR_CHARM",
};

export default counterReducer;
