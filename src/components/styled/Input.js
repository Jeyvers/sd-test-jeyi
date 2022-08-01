import styled from 'styled-components';
import { primaryColor } from '../../config';

const Input = styled.input.attrs((props) => ({
  type: props.type || 'text',
  size: props.size || '.7em',
}))`
  margin: 0.5em;
  padding: 0.5em;
  width: ${(props) => props.width || '22em'};
  height: ${(props) => props.height || '1.5em'};
  border: none;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

export default Input;
