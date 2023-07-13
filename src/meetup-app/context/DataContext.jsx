import React, { createContext, useContext, useReducer } from "react";
import { meetups } from "../db/Data";

const MainDataContext = createContext();

const DataContext = ({ children }) => {
  const TaskHandler = (acc, { type, payload }) => {
    switch (type) {
      case "type": {
        return {
          ...acc,
          type: payload,
          meetupsToShow: acc.meetups.filter(({ eventType: e }) =>
            payload === "Both" ? true : e === payload
          ),
        };
      }
      case "search": {
        return {
          ...acc,
          search: payload,
          meetupsToShow: acc.meetups.filter(({ title, eventTags: tags }) => {
            let flag =
              tags.find((item) =>
                item.toLowerCase().includes(payload.toLowerCase())
              ) ?? false;
            if (flag !== false) flag = true;
            return title.toLowerCase().includes(payload.toLowerCase()) || flag;
          }),
        };
      }
    }
  };

  const [MeetupObj, dispatch] = useReducer(TaskHandler, {
    meetups: [...meetups],
    meetupsToShow: [...meetups],
    type: "Both",
    search: "",
  });

  const elements = { MeetupObj, dispatch };
  return (
    <MainDataContext.Provider value={elements}>
      {children}
    </MainDataContext.Provider>
  );
};

export const UseData = () => {
  return useContext(MainDataContext);
};

export default DataContext;
