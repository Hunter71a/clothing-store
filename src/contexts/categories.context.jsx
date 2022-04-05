import { useState, createContext, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

// old methods from development for educational reference
//import PRODUCTS from '../shop-data.json';
//import SHOP_DATA from '../assets/shop_data/shop-data';

export const CategoriesContext = createContext({
  categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCataegoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCataegoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  // one off function to upload shop database
  /*   useEffect(() => {
    addCollectionAndDocuments('categories', SHOP_DATA);
  }, []); */

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
