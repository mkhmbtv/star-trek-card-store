import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { initialCards, initialInventory, initialDecks } from '../mockdata/CardData';

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
}

export default function AppContextProvider({ children }) {
  const [applicationState, setApplicationState] = useState({
    inventory: initialInventory,
    decks: initialDecks,
  });

  const buyCardForPlayer = useCallback((cardId) => {
    if (applicationState.inventory[cardId] > 0) {
      const newInventory = {
        ...applicationState.inventory,
      };
      newInventory[cardId] = applicationState.inventory[cardId] - 1;
  
      setApplicationState({
        inventory: newInventory,
        decks: applicationState.decks,
      });
    }
  }, [applicationState]);

  useEffect(() => {
    console.log('INVENTORY UPDATED', applicationState.inventory);
  }, [applicationState.inventory]);

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