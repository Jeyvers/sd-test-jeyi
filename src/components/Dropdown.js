import React from 'react';
import styled from 'styled-components';

const DropDownContainer = styled('div')`
  width: max-content;
  max-height: 600px;
`;

const DropDownHeader = styled('select')`
  display: flex;
  justify-content: space-between;
  width: 350px;
  margin: 0.6em;
  padding: 0.8em;
  //   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.3);
  color: #222;
  border-radius: 10px;
  font-weight: 500;
  font-size: 1.1rem;
  background: #ffffff;
  cursor: pointer;
  text-transform: capitalize;
`;

const ListItem = styled('option')`
  text-transform: capitalize;
`;

const Dropdown = ({
  id,
  name,
  options,
  title,
  handleChange,
  selectedValue,
  key,
  value = 'id',
}) => {
  return (
    <DropDownContainer>
      <DropDownHeader
        defaultValue={selectedValue}
        onChange={(e) => {
          handleChange(e);
        }}
        name={selectedValue}
      >
        (
        <>
          {options.map((option, index) => {
            return (
              <ListItem key={option[value] || index}>
                {name ? option[name] : option}
              </ListItem>
            );
          })}
        </>
        )
      </DropDownHeader>
    </DropDownContainer>
  );
};

export default Dropdown;
