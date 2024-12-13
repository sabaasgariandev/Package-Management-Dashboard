import React, { useState } from 'react'; 
import PackageTable from './components/PackageTable';
import PackageDetails from './components/PackageDetails'; 

const App: React.FC = () => {
  const [selectedPackageId, setSelectedPackageId] = useState<number | null>(null); // State to store the currently selected package ID.

  return (
    <div className="App">
      {selectedPackageId ? (
        <PackageDetails packageId={selectedPackageId} /> // If a package is selected, show the PackageDetails component.
      ) : (
        <PackageTable /> // If no package is selected, show the PackageTable component.
      )}
    </div>
  );
};

export default App;
