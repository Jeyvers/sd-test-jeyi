import { useEffect, useState } from 'react';
import MultipleSelect from '../components/styled/MultipleSelect';
import Button from '../components/styled/Button';
import { IconWrapper, Main } from '../layouts/utils';
import { primaryColor } from '../config';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const SelectData = () => {
  const [data, setData] = useState([]);
  const [chosenInputs, setChosenInputs] = useState([]);

  const handleInputChange = (e) => {
    setChosenInputs([...chosenInputs, e.target.value]);
  };

  const getJsonData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users').then(
      (res) => res.json()
    );
    setData(data);
  };

  useEffect(() => {
    getJsonData();
  }, []);

  return (
    <Main>
      <div>
        {chosenInputs.map((input, index) => (
          <Button pill key={index}>
            {input}
            <IconWrapper color={primaryColor}>
              <FaTimes />
            </IconWrapper>
          </Button>
        ))}
      </div>
      <MultipleSelect
        options={data}
        multiple
        handleChange={handleInputChange}
      />
    </Main>
  );
};

export default SelectData;
