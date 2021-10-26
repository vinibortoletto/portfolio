import React, { useContext, useState, useEffect } from 'react';
import { data as websiteData } from '../helpers/data';

const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [language, setLanguage] = useState(
    JSON.parse(localStorage.getItem('language')),
  );
  const [data, setData] = useState(websiteData.en);
  const [width, setWidth] = useState(window.innerWidth);

  // Set language and saves it to localStorage
  useEffect(() => {
    const localLanguage = JSON.parse(localStorage.getItem('language'));

    if (!localLanguage) {
      localStorage.setItem('language', JSON.stringify('en'));
      setLanguage('en');
    }
  }, []);

  // Update website data
  useEffect(() => {
    if (language === 'en') setData(websiteData.en);
    else setData(websiteData.br);
  }, [language]);

  // Get page width
  useEffect(() => {
    const getWidth = () => setWidth(window.innerWidth);
    window.addEventListener('resize', getWidth);
    return () => window.removeEventListener('resize', getWidth);
  }, []);

  function changeLanguage() {
    let localLanguage = JSON.parse(localStorage.getItem('language'));

    if (localLanguage === 'en') localLanguage = 'br';
    else localLanguage = 'en';

    localStorage.setItem('language', JSON.stringify(localLanguage));
    setLanguage(localLanguage);
  }

  const value = {
    language,
    setLanguage,
    data,
    changeLanguage,
    width,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
