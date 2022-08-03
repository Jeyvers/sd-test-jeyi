import './App.css';
import { useEffect } from 'react';
import MaintenanceTable from './components/MaintenanceTable';
import SelectData from './components/SelectData';
import MaintanceModal from './components/MaintanceModal';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const listWithNames = [
      { name: 'Janet', country: 'West', middle: 'Earlane' },
      {
        country: 'West',
        middle: 'Earlane',
      },
      { name: 'Eli', country: 'West', middle: 'Earlane' },
    ];

    const returnListWithNames = (listWithNames) => {
      const filteredList = listWithNames.filter((list) => list.name);
      const newList = filteredList.map((list) => {
        return list.name ? list.name : '';
      });
      console.log(newList);
    };

    returnListWithNames(listWithNames);
  }, []);

  return (
    <>
      {showModal && <MaintanceModal setShowModal={setShowModal} />}
      <SelectData />
      <MaintenanceTable setShowModal={setShowModal} />
    </>
  );
}

export default App;
