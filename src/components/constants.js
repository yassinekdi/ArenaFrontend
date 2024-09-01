export const assetsPath = "../assets/"
export const cardsPath = assetsPath + "cards/"
export const cardNames = {
    "5 of diamonds": "5p.svg",
    "8 of diamonds": "8p.svg",
    "8 of hearts": "8co.svg",
    "4 of hearts": "4co.svg",
    "9 of tre": "9t.svg",
    "hidden card": "hidden.svg",
};

export const getCardImage = (cardName) => {
    return require(`../assets/cards/${cardNames[cardName]}`); // Adjust path if necessary
};
