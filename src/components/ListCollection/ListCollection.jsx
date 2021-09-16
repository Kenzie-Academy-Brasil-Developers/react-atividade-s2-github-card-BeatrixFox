import { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import "./ListCollection.css";

export const ListCollection = ({ owner, repo }) => {
  const [listLink, setListLink] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repo}`)
      .then((response) => response.json())
      .then((response) => setListLink([...listLink, response]))
      .catch((err) => console.log(err));
  }, [owner, repo]);

  return (
    <div className="cards-collection">
      {listLink.map((link, index) => (
        <div className="cards" key={index}>
          {link &&
            (link.message === "Not Found" ? (
              <>
                <p className="alert">Repositório não encontrado</p>
              </>
            ) : (
              <>
                <Cards link={link} />
              </>
            ))}
        </div>
      ))}
    </div>
  );
};

export default ListCollection;
