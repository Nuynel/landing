import React, { lazy, useState, useEffect } from "react";
import {Footer} from "../footer/Footer";
import {Header} from "../header/Header";
import {PopupProvider} from "./usePopupContext";
import {useGAContext} from "./useGA";
// import {SoonPopup} from "../../shared/ui/SoonPopup";
// import {addGoogleAnalytics} from "../../features/ga/addGoogleAnalytics";

const CookieBanner = lazy(() => import("../CookieBanner"));

type Props = {hideFooter?: boolean, children: React.ReactNode}

export const PageTemplate = ({hideFooter, children}: Props) => {
  // const {isConsentGiven} = useGAContext()
  const [isHydrated, setIsHydrated] = useState(false)

  // useEffect(() => {
  //   addGoogleAnalytics(isConsentGiven)
  // }, [isConsentGiven]);

  useEffect(() => {
    setIsHydrated(true)
  }, []);

  return (
    <PopupProvider>
        <div className="flex flex-col w-full min-h-screen">
          <div className="flex flex-1 flex-col">
            <Header/>
            <main className="flex flex-1 self-center max-w-full text-textPrimary">
              {children}
            </main>
          </div>
          {!hideFooter && <Footer/>}
          {isHydrated && <CookieBanner/>}
        </div>
        {/*<SoonPopup/>*/}
    </PopupProvider>
  )
}
