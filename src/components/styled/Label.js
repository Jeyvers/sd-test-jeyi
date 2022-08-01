import styled from 'styled-components';

const Label = ({ name, children }) => <label htmlFor={name}>{children}</label>;

export const StyledLabel = styled(Label)`
  font-size: 18px;
`;
