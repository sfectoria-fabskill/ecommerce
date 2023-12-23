import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

function BasicCard({ product }) {
  const { id,title, description, price, image } = product;
  const navigate=useNavigate()
  const { addItem } = useCart()
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <h6>{price}</h6>
        <div>
          <Button variant="light" onClick={()=>{navigate('product/'+id)}}>
            <FaEye />
          </Button>
          <Button variant="warning" onClick={()=>addItem(product)}>Add to cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;
