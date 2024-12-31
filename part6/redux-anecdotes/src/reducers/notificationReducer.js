import { createSlice } from '@reduxjs/toolkit';

const initialState = 'test noti';

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers:{
        setNotification(state,action){
            return action.payload
        },
        clearNotification(){
            return ''
        }
    }
})

export const { setNotification, clearNotification } = notificationSlice.actions;

export const setTimedNotification = (message, timeInSeconds) => {
    return (dispatch) => {
      dispatch(setNotification(message));
  
      // Limpia la notificación después del tiempo especificado
      setTimeout(() => {
        dispatch(clearNotification());
      }, timeInSeconds * 1000);
    };
  };
  

export default notificationSlice.reducer;
