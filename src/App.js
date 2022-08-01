import './App.css';
import styled from 'styled-components';
import MultipleSelect from './components/styled/MultipleSelect';
import VariantButton from './components/styled/VariantButton';
import { FaTimes } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { IconWrapper } from './layouts/utils';
import { primaryColor } from './config';

function App() {
  const [data, setData] = useState([]);
  const [chosenInputs, setChosenInputs] = useState([]);

  const getJsonData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users').then(
      (res) => res.json()
    );
    setData(data);
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setChosenInputs([...chosenInputs, e.target.value]);
    console.log(chosenInputs);
  };

  useEffect(() => {
    getJsonData();
  }, []);

  return (
    <>
      <div>
        {chosenInputs.map((input, index) => (
          <VariantButton pill key={index}>
            {input}
            <IconWrapper color={primaryColor}>
              <FaTimes />
            </IconWrapper>
          </VariantButton>
        ))}
      </div>
      <MultipleSelect
        options={data}
        multiple
        handleChange={handleInputChange}
      />
    </>
  );
}

export default App;
