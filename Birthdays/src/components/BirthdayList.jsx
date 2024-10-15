import data from "../data.js";
import { useState } from "react";
import Birthday from './Birthday'
const BirthdayList = () => {
  const [people, setPeople] = useState(data);
  console.log(people);

  return (
    <section>
      {people.map((p) => (
        <Birthday key={p.id} name={p.name} age={p.age} image={p.image} />
      ))}
    </section>
  );
};

export default BirthdayList;
