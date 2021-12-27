import React from 'react'
import { Link } from 'react-router-dom'
import { Card ,Button} from 'react-bootstrap'
// import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded' >
      <Link to={`/product/${product.id}`}>
        <Card.Img src={product.photo} variant='top' fluid />
      </Link>

      <Card.Body>
        <Link to={`/product/${product.id}`}>
          <Card.Title as='div'>
            <strong>{product.title}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
        ${product.highBidAmount}
     
        </Card.Text>
     
      </Card.Body>
    </Card>
  )
}

export default Product