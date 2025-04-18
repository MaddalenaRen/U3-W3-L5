import Card from "react-bootstrap/Card";

function StaticCard({ image, title }) {
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
      </Card.Body>
    </Card>
  );
}

export default StaticCard;
