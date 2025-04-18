import Card from "react-bootstrap/Card";

function DinamicCard({ image, title, subtitle }) {
  return (
    <Card
      className="mb-2 shadow-sm"
      style={{
        width: "100%",
        maxWidth: "160px",
      }}
    >
      <Card.Img variant="top" src={image} />
      <Card.Body
        style={{
          maxHeight: "150px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: "2",
          WebkitBoxOrient: "vertical",
        }}
      >
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{subtitle}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default DinamicCard;
