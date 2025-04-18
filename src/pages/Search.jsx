import { useSelector } from "react-redux";
import Home from "./Home";
import DinamicCard from "../components/DinamicCard";

const Search = () => {
  const musicData = useSelector((state) => state.songs.musicData);
  console.log("Music Data in Search:", musicData);

  return (
    <div className="container mt-5">
      <h2>Risultati della ricerca</h2>
      <div className="row">
        {musicData && musicData.length > 0 ? (
          musicData.map((music) => (
            <div className="col-6 col-md-3 mb-4" key={music.id}>
              <DinamicCard
                image={music.album.cover_big}
                title={music.title}
                subtitle={music.artist.name}
              />
            </div>
          ))
        ) : (
          <p>Nessun risultato trovato</p>
        )}
      </div>
    </div>
  );
};

export default Search;
