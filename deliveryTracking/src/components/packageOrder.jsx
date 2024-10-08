const PackageOrder = ({naam, productId, status }) => {
    return 
    (
            <section>
                <h2>{naam}</h2>
                <h2>{productId}</h2>
                <h2>{status}</h2>
            </section>
    );
}
 
export default PackageOrder;