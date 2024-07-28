import { Page } from "./common/page";
import { Orders } from "./orders";
import { OrderProvider } from "./orders/order-provider";

export default function App() {
  return (
    <Page>
      <OrderProvider>
        <Orders />
      </OrderProvider>
    </Page>
  );
}
