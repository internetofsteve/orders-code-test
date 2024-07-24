Create a simple order list app which:

* Lists current orders
* Allows creating a new orders.
* Shipping orders.
* Deleting orders.

The app is split between an Express server and a React/Vite client.

## Server

* Create a Prisma model and migration for an order table. This model should have, as a minimum, the following fields:
  * id
  * name
  * shipped_at
  * created_at
  * deleted_at
* Implement APIs to achieve the following:
  * List all orders.
  * Create a new order.
  * Ship an order.
  * Delete an order.

## Client

* Implement the functionality above using the APIs from the server.
* Ensure orders are listed and each one can be shipped or deleted.
* Indicate whether each order has been shipped somehow.
* Ensure a new order can be created.
* Make the app look clean and presentable, though don't stress too much over styling.

For creating an order, a single button which generates a new order with a random/sequential name is sufficient,
though using a form is also fine if you'd prefer.

For styling, feel free to use whatever method you're most comfortable with, be that styled-components, tailwind,
including CSS files directly, or otherwise.
