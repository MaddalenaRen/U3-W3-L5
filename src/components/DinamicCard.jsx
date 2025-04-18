import Card from "react-bootstrap/Card";

function DinamicCard({ image, title, subtitle }) {
  return (
    <Card
      className="mb-2 shadow-sm"
      style={{
        width: "100%",
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
          fontSize: "15px",
        }}
      >
        <Card.Title
          style={{
            height: "20px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            fontSize: "17px",
          }}
        >
          {title}
        </Card.Title>
        <Card.Subtitle
          style={{
            maxHeight: "150px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            fontSize: "15px",
          }}
        >
          {subtitle}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default DinamicCard;
