import data from "../data-1";
import { useState } from "react";
import Menu from "./menu";

const Items = () => {
  const [items, setItems] = useState(data);

  return (
    <section>
      {items.map((item) => (
        <Menu
          key={item.id}
          id={item.id}
          title={item.title}
          category={item.category}
          price={item.price}
          img={item.img}
          desc={item.desc}
        />
      ))}
    </section>
  );
};

export default Items;
