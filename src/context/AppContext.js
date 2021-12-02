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

  const cards = initialCards;

  const buyCardForPlayer = useCallback((cardId) => {
    if (applicationState.inventory[cardId] > 0) {
      const newInventory = { ...applicationState.inventory };
      newInventory[cardId] = applicationState.inventory[cardId] - 1;

      const newDecks = [...applicationState.decks];
      const myDeck = newDecks[0].cards;
      const card = cards.find(c => c.id === cardId);
      myDeck.push(card);

      setApplicationState({
        inventory: newInventory,
        decks: newDecks,
      });
    }
  }, [applicationState, cards]);

  useEffect(() => {
    console.log('INVENTORY UPDATED', applicationState.inventory);
  }, [applicationState.inventory]);

  useEffect(() => {
    console.log('DECKS UPDATED', applicationState.decks); 
  }, [applicationState.decks]);

  return (
    <AppContext.Provider
      value={{
        ...applicationState,
        cards,
        buyCard: buyCardForPlayer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};