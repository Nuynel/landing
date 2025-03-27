import { useState, createContext, ReactNode, useContext } from "react";

type PopupContextType = {
  isPopupVisible: boolean;
  togglePopup: () => void;
}

type PopupProviderProps = {
  children: ReactNode;
}

export const PopupContext = createContext<PopupContextType>({
  isPopupVisible: false,
  togglePopup: () => {},
});

export const PopupProvider = ({ children }: PopupProviderProps) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible((prev) => !prev);
  };

  return (
    <PopupContext.Provider value={{isPopupVisible, togglePopup}}>
      {children}
    </PopupContext.Provider>
  );
}

export const usePopup = () => {
  return useContext(PopupContext);
};
