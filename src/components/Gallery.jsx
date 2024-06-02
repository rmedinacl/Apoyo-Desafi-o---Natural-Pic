import { useContext } from "react";
import { FavoritosContext } from "../context/PhotoContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import IconHeart from "./IconHeart";

const Gallery = () => {
  const { fotos, setLikedFotos, view, likedFotos } =
    useContext(FavoritosContext);

  const handleLike = (fotoId) => {
    const fotoIndex = fotos.findIndex((foto) => foto.id === fotoId);

    fotos[fotoIndex].liked = !fotos[fotoIndex].liked;
    const filteredLikedFotos = fotos.filter((foto) => foto.liked);

    setLikedFotos(filteredLikedFotos);
  };

  return (
    <div
      className={`gallery p-3 ${
        view === "Home" ? "grid-columns-4" : "grid-columns-4"
      }`}
    >
      {view === "Home" ? (
        fotos.map((foto) => (
          <Card
            className="photo"
            key={foto.id}
            style={{
              width: "22rem",
              backgroundImage: `url(${foto.src.original})`,
            }}
          >
            <Button
              style={{
                alignSelf: `flex-end`,
                background: `transparent`,
                border: `none`,
              }}
              onClick={() => handleLike(foto.id)}
            >
              <IconHeart key={foto.id} filled={foto.liked} />
            </Button>
            <Card.Title>{foto.alt}</Card.Title>
          </Card>
        ))
      ) : likedFotos.length ? (
        likedFotos.map((foto, index) => (
          <Card
            className="photo"
            key={index}
            style={{
              backgroundImage: `url(${foto.src.original})`,
            }}
          ></Card>
        ))
      ) : (
        <p>Aun no seleccionas fotos como favoritas 💔</p>
      )}
    </div>
  );
};
export default Gallery;
