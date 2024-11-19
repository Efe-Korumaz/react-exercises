import '../App.css';

import React, { useState } from "react";
import Book from "../component/Book";
import Layout from "../component/Layout";

const Home = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "Book1", author: "LOTM", image: "./images/images.jpg" },
    { id: 2, title: "Book2", author: "ORV", image: "./images/orv.jpg" },
    { id: 3, title: "Book3", author: "Jojo", image: "./images/jojo.jpg" },
  ]);

  return (
    <Layout>
      {/* Map door de boekenlijst en render de Book-componenten */}
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          image={book.image}
        />
      ))}
    </Layout>
  );
};

export default Home;


