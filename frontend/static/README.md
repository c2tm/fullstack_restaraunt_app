# Vic's Pizza

A "client" has approached you and asked you to help them build a web presence. They are a local pizza parlor called Vic's Pizza. They don't know anything about the Internet, but they know they need a web page. They want an interactive menu that displays all of their food choices with prices, descriptions, etc. They also want the customer to be able to select menu items and create an order with a total price. When the user saves the order, it should create a save the order to `localStorage` so that the kitchen can process the order.

## Objectives

### Learning Objectives

After completing this assignment, you should:

- Understand how to design and execute a front end application given ambiguous requirements by a client
- Understand how React works to create a dynamic frontend application

### Performance Objectives

After completing this assignment, you should be able to:

- Create wireframes and a outline of objects needed as part of the planning process when making a complex front end application
- Execute client requirements to make a complete application

## Details

### Deliverables

- A repo containing a frontend project built with create-react-app

## I'm a Full Stack Developer Mode

### Tasks

#### Getting Started (Thinking in React: Mock + Step 1)

- [ ] Setup the scaffolding using `create-react-app`
- [ ] Setup a mock of the page (include the different dynamic portions of the application)
- [ ] Produce static data for the menu items (sample JSON)
- [ ] Produce a functional static mockup

#### Menu (Thinking in React: Step 2, 3, & 4)

- [ ] `console.log` the static JSON for the menu items
- [ ] Render a component for each menu item according to category
- [ ] Define a MenuItem component
- [ ] Define a MenuList component that calls MenuItem
- [ ] `console.log` the food object when I click on its price button

#### Order view

- [ ] Define an Order component
- [ ] Render an instance of Order component
- [ ] Define an order object in your application state
- [ ] Pass the order to the Order component
- [ ] `console.log` the order when I click on the foods price
- [ ] Add the food object to the order
- [ ] In Order, `console.log` the order
- [ ] In Order, `console.log` a menu item every time it is added to the order
- [ ] Render the data from the order every time the order is updated
- [ ] In Order, define a `subtotal` function that calculates the total price.
- [ ] `console.log`, then render the subtotal, every time the order is updated

#### Order data

- [ ] Save the order data to `localStorage` when the order is submitted

## Hey Mikey, I Think He Likes It Mode

- [ ] Create another view that gives the owner the ability to view
      the orders and "complete" them.
