import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";

function Card(props) {
  const {
    name,
    id,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props);
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, props.id]);

  return (
    <div className={styles.wrapperCard}>
      <button
        className={styles.btn}
        onClick={() => {
          onClose(id);
        }}
      >
        X
      </button>
      <img className={styles.imgCard} src={image} alt="Imagen personaje" />
      <h2 className={styles.tagCard}>{status} - {species}</h2>
      <div className={styles.contentCard}>
        <Link to={`/detail/${id}`}>
          <h2 className={styles.nameCard}>{name}</h2>
        </Link>

        <p>{gender}</p>
        {/* <p>{origin?.name}</p> */}
      </div>

      <div className={styles.contentButton}>
     
       
      </div>
      {isFav ? (
        <button className={styles.button} onClick={handleFavorite}>
          ❤️
        </button>
      ) : (
        <button className={styles.button} onClick={handleFavorite}>
          🤍
        </button>
      )}




    
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
