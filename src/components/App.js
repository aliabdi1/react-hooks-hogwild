import React, { useState } from 'react';
import HogList from "./HogList";
import AddHogForm from './AddHogForm';
import hogs from '../porker_data';
import 'semantic-ui-css/semantic.min.css';
import './App.css';



function App() {

	const [isGreasedOnly, setIsGreasedOnly] = useState(false);
  	const [sortType, setSortType] = useState("");
  	const [hiddenHogs, setHiddenHogs] = useState([]);
  	const [hogList, setHogList] = useState(hogs); // Initial state for hogs data

  // Filter hogs by greased status if isGreasedOnly is true
  const filteredHogs = isGreasedOnly ? hogList.filter(hog => hog.greased) : hogList;

  // Sort hogs by name or weight based on sortType
  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortType === "name") return a.name.localeCompare(b.name);
    if (sortType === "weight") return a.weight - b.weight;
    return 0;
  });

  // Filter out hidden hogs
  const visibleHogs = sortedHogs.filter(hog => !hiddenHogs.includes(hog.name));

  // Function to hide a hog by name
  const hideHog = (name) => setHiddenHogs([...hiddenHogs, name]);

  // Function to add a new hog
  const addNewHog = (newHog) => setHogList([...hogList, newHog]);

  return (
    <div className="ui container">
      <h1 className='ui header center aligner'>Hog Wild</h1>

      {/* Filter and Sort Controls */}
      <button onClick={() => setIsGreasedOnly(!isGreasedOnly)}>
        {isGreasedOnly ? "Show All Hogs" : "Show Greased Only"}
      </button>

      <select onChange={(e) => setSortType(e.target.value)} value={sortType}>
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>

      {/* Display Hog List */}
      <HogList hogs={visibleHogs} hideHog={hideHog} />

      {/* Add New Hog Form */}
      <AddHogForm addNewHog={addNewHog} />
    </div>
  );
}
	


export default App;
