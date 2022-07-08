import { useState } from "react";
import { setInfo } from "../redux/actions/main";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
const Home = () => {
  const [newName, setName] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.main.name);

  return (
    <div className={styles.container}>
      <p>Enter a Name : {data}</p>
      <input
        type="text"
        value={newName}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button
        onClick={() => {
          dispatch(setInfo(newName));
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Home;
