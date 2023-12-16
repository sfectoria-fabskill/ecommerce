import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from "../assets/images/products/bootstrap.png";
import { FaEye } from "react-icons/fa";

function BasicCard({ product }) {
  const { title, description, price } = product;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <h6>{price}</h6>
        <div>
          <FaEye />
          <Button variant="warning">Add to cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;
