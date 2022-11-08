import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {

  const renderListings = listings.map((listingObj) => {
    return (
      <ListingCard
        key={listingObj.id}
        {...listingObj}
      />
    )
  })
  return (
    <main>
      <ul className="cards">
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
