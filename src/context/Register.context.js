import React, { useContext, createContext, useReducer } from 'react';

const initialState = {
  user: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.data,
      };
    case 'SET_USERS':
      return {
        ...state,
        user: [...state.user, action.data],
      };
    default:
      return state;
  }
};

// Create Context Object
const RegisterStateContext = createContext();
const RegisterDispatchContext = createContext();
// Create a provider for components to consume and subscribe to changes
export const RegisterProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <RegisterStateContext.Provider value={state}>
      <RegisterDispatchContext value={dispatch}>
        {children}
      </RegisterDispatchContext>
    </RegisterStateContext.Provider>
  );
};

export const useRegisterState = () => {
    const state = useContext(RegisterStateContext);
  
    if (state === undefined) {
      throw new Error('useRegisterState must be used inside a RegisterProvider')
    }
  
    return state;
  }
  
  export const useRegisterDispatch = () => {
    const dispatch = useContext(RegisterDispatchContext);
  
    if (dispatch === undefined) {
      throw new Error('useRegisterDispatch must be used inside a RegisterProvider')
    }
  
    return dispatch;
  }