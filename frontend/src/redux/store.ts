import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';


interface UserState {
  _id: string;
  name: string;
  email: string;
  token: string;
}


const loadState = (): UserState | undefined => {
  try {
    const serializedState = localStorage.getItem('userState');
    if (serializedState === null) {
      return undefined; 
    }
    return JSON.parse(serializedState) as UserState; 
  } catch (err) {
    return undefined;
  }
};


const saveState = (state: UserState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('userState', serializedState);
  } catch (err) {
    
  }
};


const persistedState = loadState();

export const store = configureStore({
  reducer: {
    user: userReducer as any,
  },
  preloadedState: {
    user: persistedState || undefined, 
  },
});


store.subscribe(() => {
  saveState(store.getState().user as UserState);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
