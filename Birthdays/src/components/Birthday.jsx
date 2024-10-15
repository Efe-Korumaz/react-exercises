const Birthday = ({ name, age, image }) => {
  return (
    <section>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <img src={image} alt="" />
    </section>
  );
};

export default Birthday;
