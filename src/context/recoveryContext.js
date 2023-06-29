import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  page: null,
  otp: null,
  email: null,
};
export const RecoveryContext = createContext(INITIAL_STATE);

const RecoveryReducer = (state, action) => {
  switch (action.type) {
    case "OTP_START":
      return {
        user: null,
        loading: true,
        error: null,
      };

    default:
      return state;
  }
};

export const RecoveryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RecoveryReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <RecoveryContext.Provider
      value={{
        page: state.page,
        email: state.email,
        otp: state.otp,
        dispatch,
      }}
    >
      {children}
    </RecoveryContext.Provider>
  );
};
