
const PackageOrder = ({naam, productId, status }) => {
    return (
       <section className ="orders">
                <h2>{naam}</h2>
                <h3>{productId}</h3>
                <h3>{status}</h3>
            </section>
            
     );
}
 
export default PackageOrder;