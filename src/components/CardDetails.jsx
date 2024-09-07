import { Outlet, useNavigate, useParams } from "react-router-dom";
import "./cardDetails.css";
import axios from "axios";
import { useEffect, useState } from "react";

const initialState = {};

const CardDetails = () => {
  const [product, setProduct] = useState(initialState);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => {
          setProduct(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [useParams]);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/characters");
  };

  const handleModalContainerClick = (e) => e.stopPropagation();

  console.log(product);

  return (
    <div onClick={handleBack} className="modal">
      <div className="card-details" onClick={handleModalContainerClick}>
        <div className="card-image-details">
          <img src={product.image} alt={product.name} />
        </div>
        <p className="card-title-details">{product.name}</p>
        <p className="card-body-details">
          Gender: {product.gender} <br />
          Specie: {product.species}
          <br />
          Stats: {product.status}
          <br />
        </p>
      </div>
      <button onClick={handleBack}>X</button>
      <Outlet></Outlet>
    </div>
  );
};

export default CardDetails;
