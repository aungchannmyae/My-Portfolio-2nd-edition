import React, { Children, createContext, useState } from "react";

export const GeneralContext = createContext();
const GeneralProvider = ({ children }) => {
  const [aboutMe, setAboutMe] = useState(false);
  const handleAboutMe = () => {
    setResume(false);
    setPortfolio(false);
    setContact(false);
    setProfile(false);
    if(aboutMe){
        setAboutMe(true);
    }else{
        setAboutMe(true);
    }
    setSideBar(!sideBar);
  };

  const [resume, setResume] = useState(false);
  const handleResume = () => {
    setAboutMe(false); 
    setPortfolio(false);
    setContact(false);
    setProfile(false);
    if(aboutMe){
        setResume(true);
    }else{
        setResume(true);
    }
    setSideBar(!sideBar);
  };

  const [portfolio, setPortfolio] = useState(false);
  const handlePortfolio = () => {
    setResume(false);
    setAboutMe(false);
    setContact(false);
    setProfile(false);
    if(aboutMe){
        setPortfolio(true);
    }else{
        setPortfolio(true);
    }
    setSideBar(!sideBar);
  };

  const [contact, setContact] = useState(false);
  const handleContact = () => {
    setResume(false);
    setPortfolio(false);
    setAboutMe(false);
    setProfile(false);
    if(aboutMe){
        setContact(true);
    }else{
        setContact(true);
    }
    setSideBar(!sideBar);
  };

  const [profile, setProfile] = useState(true);
  const handleProfile = () => {
    setResume(false);
    setPortfolio(false);
    setContact(false);
    setAboutMe(false);
    if(aboutMe){
        setProfile(true);
    }else{
        setProfile(true);
    }
    setSideBar(!sideBar);
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
        contact,
        handleContact,
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
