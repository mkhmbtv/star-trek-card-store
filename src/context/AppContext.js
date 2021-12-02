import { createContext, useCallback, useState } from 'react';
import { initialCards, initialInventory, initialDecks } from '../mockdata/CardData';

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [applicationState, setApplicationState] = useState({
    inventory: initialInventory,
    decks: initialDecks,
  });

  const buyCardForPlayer = useCallback((cardId) => {
    
  }, [applicationState]);

  return (
    <AppContext.Provider
      value={{
        ...applicationState,
        cards: initialCards,
        buyCard: buyCardForPlayer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};