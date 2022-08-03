import { Card } from '../layouts/utils';
import { Modal, Overlay, ModalWrapper } from './styled/Modal';
import StyledLabel from './styled/Label';
import Dropdown from './Dropdown';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';
import {
  Equipment,
  equipmentType,
  Location,
  statuses,
  systemTypes,
} from '../data';
import { useState } from 'react';
import VariantButton from './styled/VariantButton';
import { useRef } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 5px;
  margin: 10px 0;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  border-radius: 16px;
  background: rgba(181, 181, 181, 0.3);
  justify-content: space-around;
  font-size: 16px;

  & * {
    padding: 0.75em 3em;
    border-radius: 10px;
    cursor: pointer;
    margin: 10px 0;
  }
`;

const MaintenanceModal = ({ setShowModal }) => {
  const [systemType, setSystemType] = useState(true);
  const [loading, setLoading] = useState(false);
  const [structures, setStructures] = useState([]);
  const [maintenanceStructure, setMaintenanceStructure] = useState({
    Location: '',
    'System Type': '',
    Equipment: '',
    'Equipment Type': '',
    Status: '',
  });
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Map through the form elements and disable each one when submitting.
    const elements = formRef.current.elements;
    for (let i = 0, len = elements.length; i < len; ++i) {
      elements[i].disabled = true;
    }

    const newStructure = {
      ...maintenanceStructure,
      id: new Date().getTime().toString(),
    };

    setStructures([...structures, newStructure]);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowModal(false);
    }, 2000);

    setMaintenanceStructure({
      Location: '',
      'System Type': '',
      Equipment: '',
      'Equipment Type': '',
      Status: '',
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMaintenanceStructure({ ...maintenanceStructure, [name]: value });
  };
  const verify =
    (maintenanceStructure.Location || maintenanceStructure['System Type']) &&
    maintenanceStructure.Equipment &&
    maintenanceStructure['Equipment Type'] &&
    maintenanceStructure.Status;

  return (
    <Overlay>
      <ModalWrapper>
        <OutsideClickHandler onOutsideClick={() => setShowModal(false)}>
          <Modal>
            <Card>
              <h1>Maintenance Input</h1>

              <Header>
                <p
                  onClick={() => setSystemType(false)}
                  style={{
                    background: `${!systemType ? 'white' : ''}`,
                    color: `${!systemType ? 'red' : ''}`,
                  }}
                >
                  Location
                </p>

                <p
                  onClick={() => setSystemType(true)}
                  style={{
                    color: `${systemType ? 'red' : ''}`,
                    background: `${systemType ? 'white' : ''}`,
                  }}
                >
                  System Type
                </p>
              </Header>

              <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
                {systemType ? (
                  <Wrapper>
                    <StyledLabel>System Type</StyledLabel>
                    <Dropdown
                      selectedValue={'System Type'}
                      options={systemTypes}
                      name={'name'}
                      handleChange={handleChange}
                    ></Dropdown>
                  </Wrapper>
                ) : (
                  <Wrapper>
                    <StyledLabel>Location</StyledLabel>
                    <Dropdown
                      selectedValue={'Location'}
                      handleChange={handleChange}
                      options={Location}
                      name={'name'}
                    ></Dropdown>
                  </Wrapper>
                )}

                <Wrapper>
                  <StyledLabel>Equipment</StyledLabel>
                  <Dropdown
                    selectedValue={'Equipment'}
                    options={Equipment}
                    handleChange={handleChange}
                    name={'equipment'}
                  ></Dropdown>
                </Wrapper>

                <Wrapper>
                  <StyledLabel>Equipment Type</StyledLabel>
                  <Dropdown
                    selectedValue={'Equipment Type'}
                    name={'name'}
                    handleChange={handleChange}
                    options={equipmentType}
                  ></Dropdown>
                </Wrapper>

                <Wrapper>
                  <StyledLabel>Status</StyledLabel>
                  <Dropdown
                    selectedValue={'Status'}
                    handleChange={handleChange}
                    options={statuses}
                  ></Dropdown>
                </Wrapper>

                {!loading ? (
                  <VariantButton
                    type={'submit'}
                    height={'3.5em'}
                    width={'97%'}
                    disabled={!verify}
                  >
                    Submit
                  </VariantButton>
                ) : (
                  <VariantButton
                    type={'submit'}
                    height={'3.5em'}
                    width={'97%'}
                    loader
                  >
                    Submiting ...
                  </VariantButton>
                )}
              </form>
            </Card>
          </Modal>
        </OutsideClickHandler>
      </ModalWrapper>
    </Overlay>
  );
};

export default MaintenanceModal;
