import { useState, createContext, ReactNode, useContext, useEffect } from "react";

type PopupContextType = {
  isConsentGiven: boolean;
  toggleIsConsentGiven: (value: boolean) => void;
}

type PopupProviderProps = {
  children: ReactNode;
}

export const GAContext = createContext<PopupContextType>({
  isConsentGiven: false,
  toggleIsConsentGiven: () => {},
});

export const GAProvider = ({ children }: PopupProviderProps) => {
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  useEffect(() => {
    if (localStorage) {
      setIsConsentGiven(() => {
        return localStorage.getItem("userConsentStatus") === "accept";
      })
    }
  }, [])

  const toggleIsConsentGiven = (isConsentGiven: boolean) => {
    setIsConsentGiven(isConsentGiven);
  }

  return (
    <GAContext.Provider value={{isConsentGiven, toggleIsConsentGiven}}>
      {children}
    </GAContext.Provider>
  );
}

export const useGAContext = () => {
  return useContext(GAContext);
};
