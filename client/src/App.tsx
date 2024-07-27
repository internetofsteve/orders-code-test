import { useEffect } from "react";
import { Page } from "./common/page";
import { OrdersTable } from "./orders-table";

export default function App() {
  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.text())
      .then(console.log);
  }, []);

  return (
    <Page>
      <OrdersTable />
    </Page>
  );
}
