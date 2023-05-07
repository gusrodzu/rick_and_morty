import styles from "./Card.module.css";

export default function Card(props) {
  const { name,  id, status, species, gender, origin, image, onClose } = props;

  return (
    <div className={styles.wrapperCard}>
      <button className={styles.btn} onClick={()=> {onClose(id)}}>
        X
      </button>
      <img className={styles.imgCard} src={image} alt="Imagen personaje" />

      <h2 className={styles.tagCard}>{status}</h2>


     
      <div className={styles.contentCard}>
      <h2 className={styles.nameCard}>{name}</h2>
        
        <p>{species}</p>
        <p>{gender}</p>
        <p>{origin.name}</p>
      </div>


    </div>
  );
}
