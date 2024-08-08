import React, { Children, createContext, useState } from "react";

export const GeneralContext = createContext();
const GeneralProvider = ({ children }) => {
  const [aboutMe, setAboutMe] = useState(false);
  const handleAboutMe = () => {
    setResume(false);
    setPortfolio(false);
    setContrast(false);
    setProfile(false);
    if(aboutMe){
        setAboutMe(true);
    }else{
        setAboutMe(true);
    }
    console.log('uClickedAboutMe');
  };

  const [resume, setResume] = useState(false);
  const handleResume = () => {
    setAboutMe(false);
    setPortfolio(false);
    setContrast(false);
    setProfile(false);
    if(aboutMe){
        setResume(true);
    }else{
        setResume(true);
    }
    console.log('uClickedResume');
  };

  const [portfolio, setPortfolio] = useState(false);
  const handlePortfolio = () => {
    setResume(false);
    setAboutMe(false);
    setContrast(false);
    setProfile(false);
    if(aboutMe){
        setPortfolio(true);
    }else{
        setPortfolio(true);
    }
    console.log('uClickedPortfolio');
  };

  const [contrast, setContrast] = useState(false);
  const handleContrast = () => {
    setResume(false);
    setPortfolio(false);
    setAboutMe(false);
    setProfile(false);
    if(aboutMe){
        setContrast(true);
    }else{
        setContrast(true);
    }
    console.log('uClickedContrast');
  };

  const [profile, setProfile] = useState(true);
  const handleProfile = () => {
    setResume(false);
    setPortfolio(false);
    setContrast(false);
    setAboutMe(false);
    if(aboutMe){
        setProfile(true);
    }else{
        setProfile(true);
    }
    console.log('uClickedProfile');
  };

  const [sideBar , setSideBar] = useState(false);
  const handleSideBar = () => {
    setSideBar(!sideBar);
  }
  return (
    <GeneralContext.Provider
      value={{
        aboutMe,
        handleAboutMe,
        resume,
        handleResume,
        portfolio,
        handlePortfolio,
        contrast,
        handleContrast,
        profile,
        handleProfile,
        sideBar,
        handleSideBar
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
