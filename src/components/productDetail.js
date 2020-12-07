import React, { useState, useEffect } from 'react';

const ProductDetails = (props) => {
    const [prodDetails, setProdDetails] = useState([]);

    useEffect(() => {
        // Get Product details
        const getProdDetails = async () => {
            const response = await fetch(`http://localhost:3000/productDetails/` + props.match.params.prodId);
            const data = await response.json();
            setProdDetails(data);
        };
        getProdDetails();
    }, []);

    const productDetails = () => {
        return (
            <div>
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <td>Product Id : </td>
                            <td>{prodDetails.id}</td>
                        </tr>
                        <tr>
                            <td>Product Name : </td>
                            <td>{prodDetails.name}</td>
                        </tr>
                        <tr>
                            <td>Product Description : </td>
                            <td>{prodDetails.description}</td>
                        </tr>
                        <tr>
                            <td>Product Category Id : </td>
                            <td>{prodDetails.categoryId}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div>
            {productDetails()}
        </div>
    )
}

export default ProductDetails;