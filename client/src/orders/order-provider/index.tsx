import {
  createContext,
  useCallback,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";
import { Order } from "../../common/types";
import { BASE_URL, HEADERS } from "../../api";
import { getTimestamp } from "../../common/utils/date-utils";
import { v4 as uuidv4 } from "uuid";

const noop = () => {};

type OrdersContext = {
  orders: Order[];
  isLoading: boolean;
  isError: boolean;
  fetchOrders: () => void;
  newOrder: () => void;
  shipOrder: (id: number) => void;
  unshipOrder: (id: number) => void;
  deleteOrder: (id: number) => void;
  restoreOrder: (id: number) => void;
  clearOrders: () => void;
};

const defaultContext: OrdersContext = {
  orders: [],
  isLoading: false,
  isError: false,
  newOrder: noop,
  fetchOrders: noop,
  shipOrder: noop,
  unshipOrder: noop,
  deleteOrder: noop,
  restoreOrder: noop,
  clearOrders: noop,
};

const OrderContext = createContext<OrdersContext>(defaultContext);

export const OrderProvider = ({ children }: PropsWithChildren) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchOrders = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const res = await fetch(`${BASE_URL}/orders`);
      if (!res.ok) {
        setIsError(true);
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setOrders(data as Order[]);
    } catch (e) {
      console.error("Error fetching orders", e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const newOrder = useCallback(async () => {
    try {
      setIsError(false);
      await fetch(`${BASE_URL}/orders/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: uuidv4() }),
      });
    } catch (error) {
      console.error("Error creating order ", error);
      setIsError(true);
    } finally {
      fetchOrders();
    }
  }, [fetchOrders]);

  const shipOrder = useCallback(
    async (id: number) => {
      try {
        setIsError(false);
        await fetch(`${BASE_URL}/orders/order/${id}`, {
          method: "PUT",
          headers: HEADERS,
          body: JSON.stringify({
            shipped_at: getTimestamp(),
            deleted_at: null,
          }),
        });
      } catch (error) {
        console.error("Error shipping order ", error);
        setIsError(true);
      } finally {
        fetchOrders();
      }
    },
    [fetchOrders]
  );

  const unshipOrder = useCallback(
    async (id: number) => {
      try {
        setIsError(false);
        await fetch(`${BASE_URL}/orders/order/${id}`, {
          method: "PUT",
          headers: HEADERS,
          body: JSON.stringify({
            shipped_at: null,
            deleted_at: null,
          }),
        });
      } catch (error) {
        console.error("Error unshipping order ", error);
        setIsError(true);
      } finally {
        fetchOrders();
      }
    },
    [fetchOrders]
  );

  const deleteOrder = useCallback(
    async (id: number) => {
      try {
        setIsError(false);
        await fetch(`${BASE_URL}/orders/order/${id}`, {
          method: "PUT",
          headers: HEADERS,
          body: JSON.stringify({
            shipped_at: null,
            deleted_at: getTimestamp(),
          }),
        });
      } catch (error) {
        console.error("Error deleting order ", error);
        setIsError(true);
      } finally {
        fetchOrders();
      }
    },
    [fetchOrders]
  );

  const restoreOrder = useCallback(
    async (id: number) => {
      try {
        setIsError(false);
        await fetch(`${BASE_URL}/orders/order/${id}`, {
          method: "PUT",
          headers: HEADERS,
          body: JSON.stringify({
            shipped_at: null,
            deleted_at: null,
          }),
        });
      } catch (error) {
        console.error("Error restoring order ", error);
        setIsError(true);
      } finally {
        fetchOrders();
      }
    },
    [fetchOrders]
  );

  const clearOrders = useCallback(async () => {
    try {
      setIsError(false);
      await fetch(`${BASE_URL}/orders`, {
        method: "DELETE",
        headers: HEADERS,
      });
    } catch (error) {
      console.error("Error clearing orders ", error);
      setIsError(true);
    } finally {
      fetchOrders();
    }
  }, [fetchOrders]);

  const contextValue = {
    orders,
    isLoading,
    isError,
    fetchOrders,
    newOrder,
    shipOrder,
    unshipOrder,
    deleteOrder,
    restoreOrder,
    clearOrders,
  };

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderProvider = () => useContext(OrderContext);
