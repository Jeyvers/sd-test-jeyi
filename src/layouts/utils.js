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

export const Card = styled.div`
  background: white;
  padding: 1em 2em;
  margin: 1em 2em;
  width: max-content;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`;

export const Main = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2em 1em;
  width: 100%;
  heigth: 100%;
  align-items: center;
  justify-content: center;
`;
