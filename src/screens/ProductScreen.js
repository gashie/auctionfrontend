import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader';
import Message from '../components/Message';

import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import { singleProducts } from '../appRedux/actions/productActions';
const ProductScreen = () => {
    let params = useParams();
    const dispatch = useDispatch()
    const ProductState = useSelector((state) => state.singleProduct);
    const { loading, error, product } = ProductState;

    
  
    useEffect(() => {
        dispatch(singleProducts(params.id));
      }, [dispatch,params]);
  return (
    <>
    <Link className='btn btn-light my-3' to='/'>
      Go Back
    </Link>
    {loading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>{error}</Message>
    ) : (
      <>
        {/* <Meta title={product.name} /> */}
        <Row>
          <Col md={6}>
            <Image src={product.photo} alt={product.title} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.title}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
              
              </ListGroup.Item>
              <ListGroup.Item>Last Bid Amount: ${product.lastBidAmount}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Min Bid:</Col>
                    <Col>
                      <strong>${product.minBid}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Highest Bid:</Col>
                    <Col>
                      ${product.highBidAmount}
                    </Col>
                  </Row>
                </ListGroup.Item>

         

                <ListGroup.Item>
                  <Button
                  
                    className='btn-block'
                    type='button'
                    disabled={product.countInStock === 0}
                  >
                   Bid Now
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h2>Reviews</h2>
           
            <ListGroup variant='flush'>
            
              <ListGroup.Item>
                <h2>Write a Customer Review</h2>
            review
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </>
    )}
  </>


  )
}


export default ProductScreen;
