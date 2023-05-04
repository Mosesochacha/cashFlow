import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Breed() {
  const { breed } = useParams();
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((res) => {
        const imageUrl = res.data.message;
        setImage(imageUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [breed]);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h2 className="card-title">Adopt a {breed}</h2>
        <img className="card-img-top" src={image} alt={breed} />
      </div>
    </div>
  );
}

export default Breed;
