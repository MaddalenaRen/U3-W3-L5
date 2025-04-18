import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import StaticCard from "../components/StaticCards";
import DinamicCard from "../components/DinamicCard";
import { FetchMusicData } from "../redux/actions/action";
import img1 from "../assets/images/2a.png";
import img2 from "../assets/images/2b.png";
import img3 from "../assets/images/2c.png";
import img4 from "../assets/images/2d.png";
import img5 from "../assets/images/2e.png";
import BannerCard from "../components/BannerCard";
import img6 from "../assets/images/1a.png";
import img7 from "../assets/images/1b.png";

const Home = () => {
  const username = useSelector((s) => s.user.username);
  const musicData = useSelector((s) => s.songs.musicData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchMusicData("queen"));
  }, [dispatch]);

  return (
    <Container className="mt-4">
      <h1>Benvenuto {username}</h1>
      <h2 className="mt-4">Novità</h2>
      <Row className="gx-2 gy-3">
        {" "}
        {/* puoi regolare gx e gy come preferisci */}
        <Col xs={12} md={6}>
          <BannerCard
            image={img6}
            title="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill"
            text="Nuova Stazione Radio"
          />
        </Col>
        <Col xs={12} md={6}>
          <BannerCard
            image={img7}
            title="Ecco la nuova casa della musica italiana"
            text="Nuova Stazione Radio"
          />
        </Col>
      </Row>

      {/* --- Sezione StaticCard --- */}
      <h2 className="mt-4">Le mie playlist</h2>
      <Row xs={2} sm={2} md={3} lg={4} xl={5} className="gx-1 gy-2 mb-5">
        <Col>
          <StaticCard image={img1} title="Prologo con Abuelo" />
        </Col>
        <Col>
          <StaticCard image={img2} title="The Wandarer" />
        </Col>
        <Col>
          <StaticCard image={img3} title="Michael Bublè e Carly Pearce" />
        </Col>
        <Col>
          <StaticCard
            image={img4}
            title="Stephan Moccio: The Zane Lowe Interview"
          />
        </Col>
        <Col>
          <StaticCard image={img5} title="Chart Spotlight: Julia Michaels" />
        </Col>
      </Row>

      {/* --- Sezione DinamicCard --- */}
      <h2>Nuove Uscite</h2>
      <Row xs={2} sm={2} md={3} lg={4} xl={5} className="gx-1 gy-2">
        {musicData.length > 0 ? (
          musicData.map((m) => (
            <Col key={m.id}>
              <DinamicCard
                image={m.album.cover_big}
                title={m.title}
                subtitle={m.artist.name}
              />
            </Col>
          ))
        ) : (
          <Col>
            <p>
              Nessun risultato: prova a cercare qualcosa nella barra in alto.
            </p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Home;
