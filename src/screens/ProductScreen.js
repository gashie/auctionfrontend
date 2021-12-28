import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Countdown from "react-countdown";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";

import { Row, Col, Image, ListGroup, Card } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import Table from "react-bootstrap/Table";
import { Form, InputNumber, Button, Checkbox } from "antd";

import { singleProducts, setBid } from "../appRedux/actions/productActions";
const ProductScreen = () => {
  let params = useParams();
  const dispatch = useDispatch();
  const ProductState = useSelector((state) => state.singleProduct);
  const { loading, error, product } = ProductState;

  const BidState = useSelector((state) => state.createBid);
  const { loadingbid, errorbid, bid } = BidState;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const Completionist = () => <span>Time Up!</span>;

  useEffect(() => {
    dispatch(singleProducts(params.id));
  }, [dispatch, params]);
  const onFinish = (values) => {
    values.auctionID = params.id;
    values.bidderID = userInfo;
    dispatch(setBid(values));
  };

  if (errorbid) {
    alert(errorbid);
    <Toast className="d-inline-block m-1" bg="Warning">
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body className="Warning">
        Hello, world! This is a toast message.
      </Toast.Body>
    </Toast>;
  }
  if (bid && bid.Status == 0) {
    alert(bid.Message);
  }

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          {/* <Meta title={product.name} /> */}
          <Row>
            <Col md={6}>
              <Image src={product.photo} alt={product.title} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.title}</h3>
                </ListGroup.Item>
                <ListGroup.Item></ListGroup.Item>
                <ListGroup.Item>
                  Last Bid Amount: $
                  {product.lastBidAmount ? product.lastBidAmount : 0}
                </ListGroup.Item>
                <ListGroup.Item>
                  Total Bid Amount: ${product.totalBid ? product.totalBid : 0}
                </ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Countdown date={new Date(product.closeDate).getTime()}>
                      <Completionist />
                    </Countdown>

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
                      <Col>${product.highBidAmount}</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Form
                      name="basic"
                      labelCol={{
                        span: 8,
                      }}
                      wrapperCol={{
                        span: 16,
                      }}
                      initialValues={{
                        remember: false,
                      }}
                      onFinish={onFinish}
                      autoComplete="off"
                    >
                      <Form.Item
                        label="Amount"
                        name="bidAmount"
                        rules={[
                          {
                            required: true,
                            message: "Please input your amount!",
                          },
                        ]}
                      >
                        <InputNumber />
                      </Form.Item>

                      {product.autoBid ? (
                        <Message>
                          AutoBid Activated by: {product.autoBidUser}
                        </Message>
                      ) : (
                        <Form.Item
                          name="remember"
                          valuePropName="checked"
                          wrapperCol={{
                            offset: 8,
                            span: 16,
                          }}
                        >
                          <Checkbox>Set Auto Bid ?</Checkbox>
                        </Form.Item>
                      )}

                      <Form.Item
                        wrapperCol={{
                          offset: 8,
                          span: 16,
                        }}
                      >
                        {userInfo ? (
                          <Button type="primary" htmlType="submit">
                            Submit
                          </Button>
                        ) : (
                          <Message>
                            Please <Link to="/login">sign in</Link> to bid{" "}
                          </Message>
                        )}
                      </Form.Item>
                    </Form>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h2>Bids</h2>

              <ListGroup variant="flush">
                <ListGroup.Item>
                  {product && product.bids && (
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>User</th>
                          <th>Date</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.bids.map((bid) => (
                          <>
                            <tr key={bid.id}>
                              <td>{bid.bidderId}</td>
                              <td>{bid.dateTimeOfBid}</td>
                              <td>${bid.bidAmount}</td>
                            </tr>
                            <tr></tr>
                          </>
                        ))}

                        <tr>
                          <td colSpan="2">Total</td>
                          <td>${product.totalBid ? product.totalBid : 0}</td>
                        </tr>
                      </tbody>
                    </Table>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductScreen;
