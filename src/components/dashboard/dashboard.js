import React, { useState, useEffect } from 'react';
import './dashboard.css';
import { Card, Button } from 'react-bootstrap';

const Dashboard = (props) => {
    const [categories, setcategories] = useState([]);

    const [selectedCat, setselectedCat] = useState(1);
    const [products, setproducts] = useState([]);

    useEffect(() => {
        // Bind categories dropdown
        const getCategories = async () => {
            const response = await fetch(`http://localhost:3000/categories`);
            const data = await response.json();
            setcategories(data);
        };
        getCategories();
        getProductList(selectedCat);
    }, []);

    const getProductList = async (id) => {
        // Get product list
        const response = await fetch(`http://localhost:3000/products/` + id);
        const data = await response.json();
        setproducts(data.list);
    };

    const changeCategory = (e) => {
        setselectedCat(e.target.value);
        getProductList(e.target.value)
        e.preventDefault();
    }

    const navigateTo = (path) => {
        props.history.push(path);
    }

    const displayProductList = () => {
        if (products) {
            return products.map((item, index) => (
                <div className="col-lg-3">
                    <Card className="cardStyle">
                        <img variant="top" className="prodImg" />
                        <Card.Body>
                            <Card.Title className="card-title">{item.name}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button onClick={()=> navigateTo('/productDetail/'+ item.id)}>Detail</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))
        }
    }

    return (
        <div>
            <div className="col-lg-12 whitebg text-center">
                <h3>Product Listing Page</h3>
            </div>
            <div className="col-lg-12 whitebg MB10">
                <div className="col-lg-4">
                    <label className="floatR" for="">Category : </label>
                </div>
                <div className="col-lg-4">
                    <select class="form-control" value={selectedCat} onChange={changeCategory}>
                        {categories.map((team) => <option key={team.id} value={team.id}>{team.name}</option>)}
                    </select>
                </div>
            </div>
            {displayProductList()}
            {/* </div> */}

        </div>
    )
}

export default Dashboard;