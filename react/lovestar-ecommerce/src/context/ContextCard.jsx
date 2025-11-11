import { createContext, useState, useEffect } from "react";

const CardContext = createContext({
    cardData: {},
    setCardData: () => {},
});

function CardContextProvider({ children }) {
    const [cardData, setCardData] = useState({
        username: "",
        email: "",
        birthday: "",
        telefono: "",
    });

    const ctxValue = {cardData, setCardData};
    return (
        <CardContext.Provider value={ctxValue}>{children}</CardContext.Provider>
    );
}

export { CardContext, CardContextProvider};