export const SET_USERNAME = "SET_USERNAME";
export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username,
});



const initialState = {

    user: {username:  ""}
   
  }

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return {
        ...state,
        user: { ...state.user, username: action.payload },
      };
    default:
      return state;
  }
};
  
  export default userReducer;