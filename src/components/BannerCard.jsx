import Card from "react-bootstrap/Card";

function BannerCard({ image, title, text }) {
  return (
    <Card>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
        <Card.Title
          style={{
            maxHeight: "20px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Card.Title>
      </Card.Body>
      <Card.Img variant="top" src={image} />
    </Card>
  );
}

export default BannerCard;
