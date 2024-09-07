import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axChart, setCount } from "../redux/charSlice";
import axios from "axios";
import CardItem from "../components/CardItem";
import { Outlet } from "react-router-dom";

const CharactersList = () => {
  const char = useSelector((state) => state.char.data);
  const character = useSelector((state) => state.char.character);
  const count = useSelector((state) => state.char.count);
  const dispatch = useDispatch();

  const getData = async (count) => {
    await axios
      .get(`https://rickandmortyapi.com/api/character?page=${count}`)
      .then((res) => {
        //console.log(res.data);
        dispatch(axChart(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData(count);
  }, [count]);

  const nextPage = () => {
    dispatch(setCount(count + 1));
  };

  const beforPage = () => {
    dispatch(setCount(count - 1));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let { search } = e.target;
    let name = search.value;
    
    axios
      .get(`https://rickandmortyapi.com/api/character?name=${name}`)
      .then((res) => {
        dispatch(axChart(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
      e.target.search.value = '';
  };

  return (
    <div>
      <div className="nav-link">
        <form onSubmit={handleSearch}>
        <input
          name="search"
          className="input-s"
          type="text"
          placeholder="Character Name"
          />
          <button type="submit">buscar</button>
          </form>
      </div>

      <div className="box grid-responsive">
        {character.map((el) => (
          <CardItem
            key={el.id}
            name={el.name}
            gen={el.gender}
            img={el.image}
            id={el.id}
          />
        ))}
      </div>

      <h3>Pagina {count}</h3>
      <div className="btn-c">
        {count <= 1 ? null : (
          <button onClick={() => beforPage()} className="btnn">
            ⏮️
          </button>
        )}
        {char.next ? (
          <button className="btnn" onClick={() => nextPage()}>
            ⏭️
          </button>
        ) : null}
      </div>
      <Outlet></Outlet>
    </div>
  );
};
export default CharactersList;
