import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import  PackingList  from "./PackingList";
import  Stats from "./Stats";

export default function App() {
  const [items, setItem] = useState([]);

  function handleAddItem(item) {
    setItem((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleDeleteAllItems() {
    const confirmd = window.confirm(
      "Are you sure you want to delete all the list"
    );
    if (confirmd) setItem([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList
        items={items}
        handleDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
        handleDeleteAllItems={handleDeleteAllItems}
      />
      <Stats item={items} />
    </div>
  );
}
