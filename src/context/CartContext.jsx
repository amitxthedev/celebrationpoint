import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

/* ===============================
   CREATE CONTEXT
================================ */
const CartContext = createContext(null);

/* ===============================
   PROVIDER
================================ */
export function CartProvider({ children }) {
  /* 🛒 CART STATE (persisted) */
  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  /* 📦 LAST ORDER (for success page) */
  const [lastOrder, setLastOrder] = useState(() => {
    try {
      const stored = localStorage.getItem("lastOrder");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  /* 💾 SAVE CART TO STORAGE */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /* ===============================
     ADD TO CART
  ================================ */
  const addToCart = (product) => {
    if (!product || !product.id) return;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  /* ===============================
     REMOVE FROM CART
  ================================ */
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  /* ===============================
     UPDATE QUANTITY
  ================================ */
  const updateQty = (id, qty) => {
    if (qty < 1) return;

    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty } : item
      )
    );
  };

  /* ===============================
     CLEAR CART
  ================================ */
  const clearCart = () => {
    setCart([]);
  };

  /* ===============================
     TOTAL PRICE
  ================================ */
  const total = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
  }, [cart]);

  /* ===============================
     TOTAL ITEM COUNT (Navbar)
  ================================ */
  const itemCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.qty, 0);
  }, [cart]);

  /* ===============================
     PLACE ORDER
  ================================ */
  const placeOrder = ({ address, paymentMethod }) => {
    if (!cart.length) return;

    const order = {
      id: Date.now(),
      items: cart,
      total,
      address,
      paymentMethod,
      createdAt: new Date().toISOString(),
    };

    setLastOrder(order);
    localStorage.setItem("lastOrder", JSON.stringify(order));

    clearCart();
  };

  /* ===============================
     CONTEXT VALUE
  ================================ */
  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    total,
    itemCount,
    placeOrder,
    lastOrder,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

/* ===============================
   CUSTOM HOOK
================================ */
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return ctx;
};
