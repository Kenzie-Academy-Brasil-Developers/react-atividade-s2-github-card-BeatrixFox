import "./Cards.css";

export const Cards = ({ link }) => {
  return (
    <a href={link.html_url} className="cards-description">
      <img
        src={link.owner.avatar_url}
        alt={link.name}
        width="100px"
        heigth="100px"
      />
      <h3>{link.full_name}</h3>
      <p className="text">{link.description}</p>
    </a>
  );
};

export default Cards;
