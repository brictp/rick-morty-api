import { Link } from "react-router-dom";

const CardItem = ({ name, gen, img, id }) => {
  return (
    <div className="card">
      <div className="card-border-top"></div>
      <div className="img">
        <img src={img} alt="" className="img" />
      </div>
      <span> {name}</span>
      <p className="job"> {gen}</p>
      <Link to={`/characters/${id}`}>
        <button>Click</button>
      </Link>
    </div>
  );
};

export default CardItem;
