import { useDarkMode } from "./useDarkMode";
import { createContext, useContext, useState } from "react";

const PopupContext = createContext();
const PopupToggleContext = createContext();

const PopupSourceContext = createContext();
const SetPopupSourceContext = createContext();

export const usePopupStatus = () => {
  return useContext(PopupContext);
};
export const usePopupToggle = () => {
  return useContext(PopupToggleContext);
};

export const usePopupSource = () => {
  return useContext(PopupSourceContext);
};
export const useSetPopupSource = () => {
  return useContext(SetPopupSourceContext);
};

export const PopupProvider = ({ children }) => {
  const [popupStatus, popupStatusToggle] = useState(false);
  const [popupSrc, setPopupSrc] = useState(null);

  return (
    <PopupContext.Provider value={popupStatus}>
      <PopupToggleContext.Provider value={popupStatusToggle}>
        <PopupSourceContext.Provider value={popupSrc}>
          <SetPopupSourceContext.Provider value={setPopupSrc}>{children}</SetPopupSourceContext.Provider>
        </PopupSourceContext.Provider>
      </PopupToggleContext.Provider>
    </PopupContext.Provider>
  );
};
