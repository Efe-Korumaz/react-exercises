
    const Book = ({image, title, author}) => {
        return ( 
            <section>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <h3>{author}</h3>
        </section>
         );
    }
     
    export default Book;
