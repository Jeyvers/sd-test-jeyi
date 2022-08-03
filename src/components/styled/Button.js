import styled, { css } from 'styled-components';
import { primaryColor } from '../../config';

const buttonComponent = ({ children, className }) => {
  return <button className={className}>{children}</button>;
};

const Button = styled(buttonComponent)`
  display: inline-flex;
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${primaryColor};
  color: ${primaryColor};
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) => {
    if (props.statusColor === 'danger') {
      return css`
        background: rgba(216, 112, 147, 0.4);
        border: 2px solid rgba(216, 112, 147, 0.4);

        color: red;
      `;
    }
    if (props.statusColor === 'success') {
      return css`
        background: rgb(151, 236, 151);
        color: green;
        border: 2px solid rgb(151, 236, 151);
      `;
    }
    if (props.statusColor === 'pending') {
      return css`
        background: #e8cca8;
        color: brown;
        border: 2px solid #e8cca8;
      `;
    }
  }}
`;

export default Button;
