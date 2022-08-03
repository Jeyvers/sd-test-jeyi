import { ImSpinner9 } from 'react-icons/im';
import styled, { css, keyframes } from 'styled-components';
import { primaryColor } from '../../config';

// Rotation animation for loaders
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Styled component to encapsulate loader icons
export const Span = styled.span`
  margin-right: 0.3em;
  padding-inline: 0.3em;
  background: transparent;
  outline: none;
  display: inline-block;
  border: none;
  animation: ${rotate} 1s linear infinite;
`;

const Button = ({ className, disabled, loader, solid, icon, children }) => {
  if (loader) {
    return (
      <button className={className}>
        <Span>
          {icon || <ImSpinner9 color={solid ? 'white' : primaryColor} />}
        </Span>
        {children}
      </button>
    );
  }

  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
};

const VariantButton = styled(Button)`
  background: ${(props) => (props.solid ? primaryColor : 'transparent')};
  border-radius: ${(props) => (props.pill ? '16px' : '3px')};
  border: 2px solid ${primaryColor};
  color: ${(props) => (props.solid ? 'white' : primaryColor)};
  margin: 0.5em;
  padding: 0.5em 1em;
  width: ${(props) => (props.width ? props.width : 'auto')};
  cursor: pointer;

  ${(props) =>
    props.disabled &&
    css`
      background: rgb(181, 181, 181);
      color: white;
      border: 2px solid rgb(181, 181, 181);
    `}
`;

export default VariantButton;
