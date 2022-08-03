import styled from 'styled-components';

const Label = ({ className, name, children }) => (
  <label className={className} htmlFor={name}>
    {children}
  </label>
);

const StyledLabel = styled(Label)`
  font-size: 20px;
  margin: 0.5em;
  font-weight: 500;
`;

export default StyledLabel;
