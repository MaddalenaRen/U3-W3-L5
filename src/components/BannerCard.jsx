import Card from "react-bootstrap/Card";

function BannerCard({ image, title, text }) {
  return (
    <Card>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Card.Img variant="top" src={image} />
    </Card>
  );
}

export default BannerCard;
