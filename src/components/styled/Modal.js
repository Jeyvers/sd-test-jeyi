import styled from 'styled-components';

const Div = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export const Modal = styled(Div)`
  display: flex;
  position: absolute;
  margin: 3em 1em;
  top: 0;
`;

export const Overlay = styled.section`
  width: 100vw;
  position: fixed;
  background: rgba(0,0,0,0.3);
  min-height: 100vh;
  justify-center;
  align-center;
  top: 0;
  display:flex;
  align-items:center;
  overflow:scroll;
  justify-content:center;
  `;

export const ModalWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
