import MaintenanceTable from './components/MaintenanceTable';
import SelectData from './components/SelectData';
import MaintanceModal from './components/MaintanceModal';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <MaintanceModal setShowModal={setShowModal} />}
      <SelectData />
      <MaintenanceTable setShowModal={setShowModal} />
    </>
  );
}

export default App;
