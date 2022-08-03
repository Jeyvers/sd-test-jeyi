import { useState, Fragment } from 'react';
import { newDataList } from '../data';
import { Table } from '../layouts/table';
import { Card, IconWrapper, Main } from '../layouts/utils';
import Button from '../components/styled/Button';
import { FaPlus } from 'react-icons/fa';
import { useEffect } from 'react';

const MaintenanceTable = ({ setShowModal }) => {
  const [locationData, setLocationData] = useState(newDataList);
  const [availableEquips, setAvailableEquips] = useState(0);
  const [maintenanceEquips, setMaintenanceEquips] = useState(0);
  const [breakdownEquips, setBreakdownEquips] = useState(0);
  const colorMode = (color) => {
    switch (color) {
      case 'maintenance':
        return 'pending';
        break;
      case 'breakdown':
        return 'danger';
        break;
      default:
        return 'success';
    }
  };

  useEffect(() => {
    setAvailableEquips(
      locationData.filter((data) => data.status === 'available')
    );
    setMaintenanceEquips(
      locationData.filter((data) => data.status === 'maintenance')
    );
    setBreakdownEquips(
      locationData.filter((data) => data.status === 'breakdown')
    );
  }, []);

  return (
    <Main>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Card>
          <h3>
            <IconWrapper>
              <span
                style={{
                  background: 'brown',
                  padding: '.75em 1em',
                  borderRadius: '50%',
                }}
                onClick={() => setShowModal(true)}
              >
                <FaPlus />
              </span>
            </IconWrapper>
            {'Maintenance '}
          </h3>
        </Card>
        <Card>
          <p>Total Available Equipment</p>
          <h2>{availableEquips.length}</h2>
        </Card>
        <Card>
          <p>Total Maintenance Equipment</p>
          <h2>{maintenanceEquips.length}</h2>
        </Card>
        <Card>
          <p>Total Breakdown Equipment</p>
          <h2>{breakdownEquips.length}</h2>
        </Card>
      </div>

      <Card>
        <Table>
          <Table.Head>
            <Table.TR>
              <Table.TH>Date</Table.TH>
              <Table.TH>Equipment ID</Table.TH>
              <Table.TH>Location</Table.TH>
              <Table.TH>SBU</Table.TH>
              <Table.TH>Equipment</Table.TH>
              <Table.TH>Status</Table.TH>
            </Table.TR>
          </Table.Head>
          <Table.Body>
            {locationData.map((data) => {
              const date = new Date(data.date).toDateString();
              const newDate = date.slice(3, date.length);
              const statusColor = colorMode(data.status);

              return (
                <Fragment key={data.id}>
                  <Table.TR>
                    <Table.TD>{newDate}</Table.TD>
                    <Table.TD>{data.equipment}</Table.TD>
                    <Table.TD>{data.location?.name}</Table.TD>
                    <Table.TD> Sbu {data.sbu.substring(0, 3)}</Table.TD>
                    <Table.TD>{data.equipmentType?.name}</Table.TD>
                    <Table.TD>
                      <Button statusColor={statusColor}>{data.status}</Button>
                    </Table.TD>
                  </Table.TR>
                </Fragment>
              );
            })}
          </Table.Body>
        </Table>
      </Card>
    </Main>
  );
};

export default MaintenanceTable;
