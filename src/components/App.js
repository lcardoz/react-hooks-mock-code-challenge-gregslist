import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([]);

  useEffect( () => {
    fetch('http://localhost:6001/listings')
    .then(response => response.json())
     .then(data => setListings(data))
  }, [])


  const handleRemoveListing = (doomedListingObj)=> {
    const filteredListings = listings.filter((listingObj) => {
      return (listingObj.id !== doomedListingObj.id)
    })
    setListings(filteredListings)
  }




  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} handleRemoveListing={handleRemoveListing}/>
    </div>
  );
}

export default App;
