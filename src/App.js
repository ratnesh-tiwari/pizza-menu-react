import React from "react";
import focaccia from "./pizzas/focaccia.jpg";
import margherita from "./pizzas/margherita.jpg";
import spinaci from "./pizzas/spinaci.jpg";
import funghi from "./pizzas/funghi.jpg";
import salamino from "./pizzas/salamino.jpg";
import prosciutto from "./pizzas/prosciutto.jpg";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: focaccia,
    soldOut: false
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: margherita,
    soldOut: false
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: spinaci,
    soldOut: false
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: funghi,
    soldOut: false
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: salamino,
    soldOut: true
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: prosciutto,
    soldOut: false
  }
];

function Header() {
  return (
    <header className="header">
      <h1 className="">Fast React Pizza Co.</h1>
    </header>
  );
}

function Pizza({ name, ingredients, photoName, price, isSold }) {
  return (
    <li className={`pizza ${isSold && "sold-out"}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{isSold ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaData.length > 0 && (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="pizzas">
            {pizzaData.map(el => (
              <Pizza
                name={el.name}
                ingredients={el.ingredients}
                photoName={el.photoName}
                price={el.price}
                key={el.name}
                isSold={el.soldOut}
              />
            ))}
          </ul>
        </>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const open = 12;
  const close = 22;
  const isOpen = hour < close && hour >= open;

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <p>We're open until {close}:00. Come visit us or order online.</p>
        ) : (
          <p>
            We're happy to welcome you between {open}:00 and {close}:00.
          </p>
        )}
        {isOpen && <button className="btn">Order</button>}
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
