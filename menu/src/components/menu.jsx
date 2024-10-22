const Menu = ({ id, title, category, price, img, desc }) => {
  return (
    <section>
      <h2>{id}</h2>
      <h3>{title}</h3>
      <h3>{category}</h3>
      <h3>{price}</h3>
      <img src={img} alt={title} />
      <h3>{desc}</h3>
    </section>
  );
};

export default Menu;
