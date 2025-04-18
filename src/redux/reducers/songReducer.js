import { FETCH_MUSIC_REQUEST,FETCH_MUSIC_SUCCESS,FETCH_MUSIC_FAILURE } from "../actions/action";

const initialState = {
    loading: false,
    musicData: [],
    error: '',
  };

const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MUSIC_REQUEST:
          return {
            ...state,
            loading: true,
          };
        case FETCH_MUSIC_SUCCESS:
          return {
            ...state,
            loading: false,
            musicData: action.payload,
            error: '',
          };
        case FETCH_MUSIC_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload,
            musicData: [],
          };
        default:
          return state;
      }
    };

    
  
  export default songReducer;