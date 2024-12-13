import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
//props for the component have the packageId
interface PackageDetailsProps {
  packageId: number; 
}
//package detail data.
interface PackageDetail {
  id: number; 
  name: string;
  description: string;
  cover: string;
  coach: string;
  tools: { name: string; cover: string; }[];
}

const PackageDetails: React.FC<PackageDetailsProps> = ({ packageId }) => {
  const [packageDetail, setPackageDetail] = useState<PackageDetail | null>(null); // State to store the package details.

  //fetch package details when the packageId changes.
  useEffect(() => {
    axios.get(`https://api.tanzibfit.com/api/packages/${packageId}`) // API request to fetch package details.
      .then(response => {
        setPackageDetail(response.data.data); // Setting the fetched data to the state.
      })
      .catch(error => {
        console.error('Error fetching package details:', error); // Handling errors in case the request fails.
      });
  }, [packageId]); //run only when packageId changes.

  if (!packageDetail) { //not  loaded, show a loading message
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{packageDetail.name}</h1> {/*package name */}
      <img src={packageDetail.cover} alt={packageDetail.name} className="w-full h-64 object-cover my-4" /> {/*package cover image */}
      <p>{packageDetail.description}</p> {/*  package description */}
      <h2 className="text-xl font-bold mt-4">Coach: {packageDetail.coach}</h2> {/*coach name */}
      <h3 className="text-lg font-bold mt-4">Tools</h3> {/*tools list */}
      <ul>
        {packageDetail.tools.map((tool, index) => (
          <li key={index} className="flex items-center my-2">
            <img src={tool.cover} alt={tool.name} className="w-12 h-12 object-cover mr-2" /> {/* tool image */}
            {tool.name} {/*tool name */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PackageDetails;
