import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 7px;
  padding: 0;
  margin: 0.3em;
  background: ${(props) => (props.solid ? 'hsl(0, 0%, 91%)' : 'transparent')};
`;

export const IconWrapper = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.2em 0.7em;
  color: ${(props) => props.color || '#ccc'};
  font-size: 14px;
`;
