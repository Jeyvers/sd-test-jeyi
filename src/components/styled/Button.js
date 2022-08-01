import styled from 'styled-components';
import { primaryColor } from '../../config';

const buttonComponent = ({ children, className }) => {
  return <button className={className}>{children}</button>;
};

const Button = styled(buttonComponent)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${primaryColor};
  color: ${primaryColor};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

export default Button;
