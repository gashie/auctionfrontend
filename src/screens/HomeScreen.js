import React,{useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';

import Product from '../components/Product'
import { getProducts } from '../appRedux/actions/productActions';
import ProductCarousel from '../components/ProductCarousel';


const HomeScreen = () => {
    const dispatch = useDispatch()
    const ProductState = useSelector((state) => state.getAllProducts);
    const { loading, errors, products } = ProductState;
  
    useEffect(() => {
        dispatch(getProducts());
      }, [dispatch]);
    return  (
        <>
    <hr />
       <ProductCarousel/>
          <h1>Latest Products</h1>
          {loading ? (
            <Loader />
          ) : errors ? (
            <Message variant='danger'>{errors}</Message>
          ) : (
            <>
              <Row>
                {products.map((product) => (
                  <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
              
            </>
          )}
        </>
      )
}

export default HomeScreen
