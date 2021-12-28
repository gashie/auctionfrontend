import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { getProducts } from '../appRedux/actions/productActions'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.getAllProducts)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark'>
      {products.map((product) => (
        <Carousel.Item key={product.id}>
          <Link to={`/product/${product.id}`}>
            <Image src={product.photo} alt={product.title} fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {product.title} (${product.highBidAmount})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel
