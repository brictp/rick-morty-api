import { Outlet, useNavigate, useParams } from "react-router-dom";
import "./cardDetails.css";
import axios from "axios";
import { useEffect, useState } from "react";

const initialState = {};

const CardDetails = () => {
  const [item, setItem] = useState(initialState);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => {
          setItem(res.data);
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

  return (
    <div onClick={handleBack} className="modal">
      <div className="btn-detail-container">
        <button id="close-modal-btn" onClick={handleBack}>
          X
        </button>
      </div>
      <div className="card-details" onClick={handleModalContainerClick}>
        <div className="card-image-details">
          <img src={item.image} alt={item.name} />
        </div>
        <p className="card-title-details">{item.name}</p>
        <p className="card-body-details">
          Gender: {item.gender} <br />
          Specie: {item.species}
          <br />
          Stats: {item.status}
          <br />
        </p>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default CardDetails;
