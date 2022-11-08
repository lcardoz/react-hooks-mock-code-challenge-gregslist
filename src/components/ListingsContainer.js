import React, {useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleRemoveListing}) {


  const renderListings = listings.map((listingObj) => {
    return (
      <ListingCard
        key={listingObj.id}
        listingObj={listingObj}
        handleRemoveListing={handleRemoveListing}
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
