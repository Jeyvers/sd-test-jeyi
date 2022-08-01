import styled from 'styled-components';

const MultiSelect = ({
  id,
  name,
  options,
  title,
  handleChange,
  selectedValue,
  multiple,
  className,
}) =>
  options && (
    <select
      id={id}
      name={name}
      onChange={handleChange}
      value={selectedValue}
      multiple={multiple}
      className={className}
    >
      {options.map((option) => (
        <option
          style={{ padding: '0.7em 1.5em' }}
          key={option.id}
          value={option.name}
        >
          {option.name}
        </option>
      ))}
    </select>
  );

const MultipleSelect = styled(MultiSelect)`
  padding: 2em;
  width: 350px;
  margin: 2em;
`;

export default MultipleSelect;
