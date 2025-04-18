

export const FETCH_MUSIC_REQUEST= "FETCH_MUSIC_REQUEST";
export const FETCH_MUSIC_SUCCESS= "FETCH_MUSIC_SUCCESS";
export const FETCH_MUSIC_FAILURE= "FETCH_MUSIC_FAILURE";

export const fetchMusicRequest =()=> ({
    type: FETCH_MUSIC_REQUEST
});

export const fetchMusicSuccess =(data)=> ({
    type: FETCH_MUSIC_SUCCESS,
    payload: data,
});

export const fetchMusicFailure =(error)=> ({
    type: FETCH_MUSIC_FAILURE,
    payload: error,
});

export const FetchMusicData = (query) => {
    return async (dispatch) => {
      dispatch(fetchMusicRequest()); // prima invio l'azione di richiesta
  
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
        if (response.ok) {
          const result = await response.json();
          dispatch(fetchMusicSuccess(result.data)); // attenzione: la risposta ha un oggetto con chiave 'data'
        } else {
          dispatch(fetchMusicFailure("Errore nella risposta del server"));
        }
      } catch (error) {
        dispatch(fetchMusicFailure(error.message));
      }
    };
  };
