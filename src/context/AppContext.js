import { createContext } from 'react';
import { initialCards } from '../mockdata/CardData';

export const AppContext = createContext();

export default function AppContextProvider({ children }) {

  return (
    <AppContext.Provider
      value={{
        cards: initialCards
      }}
    >
      {children}
    </AppContext.Provider>
  );
};