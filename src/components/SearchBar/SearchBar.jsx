import { useState } from "react";
import styles from "./SearchBar.module.css";


export default function SearchBar(props) {
  const { onSearch } = props;

  const [id, setId] = useState();
  

  const handLeChange = (e) => {
   setId(e.target.value);
  };


  return (
    <div className={styles.navbar}>
      <div className={styles.inputBar}>
        <input 
        className={styles.input} 
        type="search" 
        onChange={handLeChange}
        value={id}
        />
        <button 
            className={styles.btnInput} 
            onClick={() => {
               onSearch(id);
            }}
        >
          Squinchear
        </button>
        
      </div>
    </div>
  );
};
