import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resObj } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
      resObj?.info;
  
    return (
      <div className="rest-card">
        <h3> {name} </h3>
        <img
          className="card-img"
          src={
            CDN_URL +
            cloudinaryImageId
          }
          alt="food"
        />
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{resObj.info.sla.deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;