import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";

function Home() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((res) => {
        const breeds = Object.keys(res.data.message);
        setBreeds(breeds);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const adoptRescueDog = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        const imageUrl = res.data.message;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="home" style={{ marginTop: "3em", marginBottom: "3em" }}>
      <h2 className="paragraph">
        Select a breed from our store or adopt our rescued pets:
      </h2>
      <p className="page">
        By choosing to adopt from Martha's Pet Store, you save an animal that
        that has been through a lot of trauma,<br></br>
        by making them part of your family, showing them love and support.{" "}
        <br></br>
        You also open up Martha's shelter space for another animal who might
        desperately need rescuing and medical care.{" "}
      </p>

      <div className="breeds">
        {breeds.map((breed) => (
          <Link key={breed} to={`/breed/${breed}`}>
            {breed}
          </Link>
        ))}
      </div>
      <button className="button" onClick={adoptRescueDog}>
        Adopt a Rescued Pet
      </button>
    </div>
  );
}

export default Home;
