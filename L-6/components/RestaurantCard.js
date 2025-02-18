
const RestaurantCard = ({ resData }) => {
    return (
      <div className="res-card">
        <img src={resData.img} alt={resData.name} className="res-img" />
        <h3>{resData.name}</h3>
        <p>Cuisines: {resData.cuisines.join(", ")}</p>
        <p>Rating: {resData.avgRating}</p>
        <p>Cost for Two: ${resData.costForTwo}</p>
      </div>
    );
  };

  export default RestaurantCard;