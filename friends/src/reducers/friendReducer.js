import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILED
} from "../actions";
const initialState = {
  friends: [],
  error: "",
  fetching: false
};

export const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_START:
      return {
        ...state,
        fetching: true,
        errors: ""
      };
      case FETCH_FRIENDS_SUCCESS:
          return{
              ...state,
              fetching: false,
              erros: '',
              friends: action.payload
          };
          case FETCH_FRIENDS_FAILED:
              return {
                  ...state,
                  fetching: false,
                  errors: `You don't have friends - ${action.payload}`
              }
    default:
      return state;
  }
};
