import { createContext, useState } from "react";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [CourseId, SetCourseId] = useState("");

  const contextValue = {
    CourseId,
    SetCourseId,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
