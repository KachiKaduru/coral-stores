import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

function StoreProvider({ children }) {
  const categoryItems = [
    {
      _id: 1,
      text: "Hoodies",
      image: "/hoodies_images/IMG_1622.JPG",
      route: "hoodies",
    },
    {
      _id: 2,
      text: "Tees",
      image: "/tee_images/IMG_0898.JPG",
      route: "tees",
    },
    {
      _id: 3,
      text: "Knitwears",
      image: "/knitwear_images/IMG_1964.JPG",
      route: "knitwears",
    },
    {
      _id: 4,
      text: "Tshirts",
      image: "/tshirt_images/IMG_1628.JPG",
      route: "tshirts",
    },
    {
      _id: 5,
      text: "Caps",
      image: "/cap_images/IMG_1621.JPG",
      route: "caps",
    },
    {
      _id: 6,
      text: "Footwears",
      image: "/footwear_images/IMG_1623.JPG",
      route: "footwears",
    },
    {
      _id: 7,
      text: "Sets",
      image: "/sets_images/IMG_2093.JPG",
      route: "sets",
    },
    {
      _id: 8,
      text: "Pants",
      image: "/pant_images/IMG_1627.JPG",
      route: "pants",
    },
    {
      _id: 9,
      text: "Shorts",
      image: "/shorts_images/IMG_1619.JPG",
      route: "shorts",
    },
  ];

  const [currentCategory, setCurrentCategory] = useState("");
  const [categoryProducts, setCategoryProducts] = useState([]);

  return (
    <StoreContext.Provider
      value={{
        categoryItems,
        currentCategory,
        setCurrentCategory,
        categoryProducts,
        setCategoryProducts,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

function useStores() {
  const context = useContext(StoreContext);

  if (context === undefined) throw new Error("StoreContext was used outside of StoreProvider");
  return context;
}

export { StoreProvider, useStores };
