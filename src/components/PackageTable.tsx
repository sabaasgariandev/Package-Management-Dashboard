import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import './../index.css'; 
import Accordion from './AcordianProps'; // Importing the Accordion component.
import SearchIcon from '@mui/icons-material/Search';
import InventoryIcon from '@mui/icons-material/Inventory';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
// Defining the structure of the package data.
interface Package {
  id: number; 
  name: string;
  description: string;
  cover: string;
  field: string;
  status: string;
  coach: string;
}

const PackageTable: React.FC = () => {
  const [packages, setPackages] = useState<Package[]>([]); // State to store the list of packages.
  const [searchTerm, setSearchTerm] = useState(''); // State to store the search term for filtering packages.
  const [selectedPackage, setSelectedPackage] = useState<any | null>(null);

  // fetch data 
  useEffect(() => {
    axios.get('https://api.tanzibfit.com/api/packages') // API request to fetch package data.
      .then(response => {
        setPackages(response.data.data); // Setting the fetched data to the state.
      })
      .catch(error => {
        console.error('Error fetching packages:', error); // Handling errors in case the request fails.
      });
  }, []); //runs only once 

  const fetchPackageDetails = (packageId: number) => {
    axios.get(`https://api.tanzibfit.com/api/packages/${packageId}`)
      .then(response => {
        setSelectedPackage(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching package details:', error);
      });
  };

  // Filtering the packages based on the search term.
  const filteredPackages = packages.filter(pkg =>
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pkg.field.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pkg.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" max-w-[80%] mx-auto p-4 bg-[#a9dfd8] text-center border-2 border-[#252b3f] rounded-xl shadow-2xl shadow-[#a9dfd8] my-10 min-h-[100vh] max-h-auto">
     <div className='flex flex-row justify-center items-center'>
     <InventoryIcon />
     <h1 className='font-extrabold py-[5%] text-2xl'>Package Management Dashboard</h1>
     </div>
      {/* Input field for searching packages */}
      <SearchIcon/>
      <input
        type="text"
        placeholder="Search packages..."
        className="mb-4 p-2 border border-[#252b3f] rounded-full "
        onChange={(e) => setSearchTerm(e.target.value)} // Updating search term on input change.
      />
      <table className="min-w-full bg-[#252b3f] text-white  rounded-3xl  *:rounded-3xl">
        <thead>
          <tr >
            <th className="py-2  ">Name</th>
            <th className="py-2  ">Field</th>
            <th className="py-2  ">Status</th>
            <th className="py-2  ">Coach</th>
            <th className="py-2  ">Actions</th>
          </tr>
        </thead>
        <tbody className='border-2 border-white rounded-full'>
          {filteredPackages.map(pkg => (
            <tr key={pkg.id} className='border-2 border-white rounded-full'>
              <td className="py-2 border-2 border-white rounded-full">{pkg.name}</td>
              <td className="py-2 border-2 border-white rounded-full">{pkg.field}</td>
              <td className="py-2 border-2 border-white rounded-full">{pkg.status}</td>
              <td className="py-2 border-2 border-white rounded-full">{pkg.coach}</td>
              <td className="py-2 border-2 border-b-0 border-white rounded-full">
                {/* acordian to show more detail of api */}
                <Accordion title="More...">
                  <button onClick={() => fetchPackageDetails(pkg.id)} className='p-2 bg-[#a9dfd8] text-black w-fit rounded-lg border-white border-8'>
                    Click To Show More Details
                    <ExpandCircleDownOutlinedIcon/>
                  </button>
                  {selectedPackage && selectedPackage.id === pkg.id && (
                    <div className='text-center flex flex-col justify-center items-center'>
                      <h2>{selectedPackage.name}</h2>
                      <p>{selectedPackage.description}</p>
                      <img src={selectedPackage.cover} alt={selectedPackage.name} />
                      <h3>Tools</h3>
                      <ul>
                        {selectedPackage.tools.map((tool: any) => (
                          <li key={tool.name}>
                            <img src={tool.cover} alt={tool.name} />
                            {tool.name}
                          </li>
                        ))}
                      </ul>
                      <h3>Contents</h3>
                      <ul>
                        {selectedPackage.contents.map((content: any) => (
                          <li key={content.id}>
                            <img src={content.cover} alt={content.name} />
                            {content.name} - {content.duration}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Accordion>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PackageTable;
