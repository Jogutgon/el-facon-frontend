import { Link } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap'
import '../../styles/AdminStyles.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../common/constants';

import { useNavigate } from 'react-router-dom';

function AdminScreen( {jwt}) {
const [totalUser, setTotalUser] = useState(0);
const [totalReserv, setTotalReserv] = useState(0);
const [inactiveUsers, setInactiveUsers] = useState(0);

const countDashboard = async () => {
    try {
      const response = await axios.get(API_URL + "/admin/dashboard", {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      });

      setTotalUser(response.data.totalUsers);
      setTotalReserv(response.data.totalReservations);
      setInactiveUsers(response.data.inactiveUsers);

    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();

useEffect(()=>{
    countDashboard();
}, [jwt]);

  return (
    <Container className='text-white text-center my-5 py-5 fira-sans-regular'>
      
          <h1 className='py-4'>¡Bienvenido a tu panel!</h1>
    
      <Row className='pt-5 justify-content-center g-4'>
        <Col xxl={3} lg={4} md={6} sm={10} xs={12} 
        className='d-flex justify-content-center'>
          <Card style={{ width: '16rem', cursor: 'pointer' }} className='bg-primary text-white text-center'
          onClick={() => navigate('/admin/users')}>
            <Card.Body>
              <Card.Title className='mb-3'><i className="bi bi-people-fill icon-fs"></i></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Total de usuarios</Card.Subtitle>
              <Card.Text className='fs-4 fw-bold mb-1'>
                {totalUser}
              </Card.Text>
              <div style={{ fontSize: '0.9rem', opacity: 0.8}}>
                Ver Usuarios →
              </div>
              
              
            </Card.Body>
          </Card>
        </Col>

        <Col xxl={3} lg={4} md={6} sm={10} xs={12} className='d-flex justify-content-center'>
          <Card style={{ width: '16rem', cursor: 'pointer' }} className='bg-success text-white text-center'
          onClick={() => navigate('/admin/reservations')}>
            <Card.Body>
              <Card.Title className='mb-3'><i className="bi bi-calendar3 icon-fs"></i></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Total de reservas</Card.Subtitle>
              <Card.Text className='fs-4 fw-bold mb-1'>
                {totalReserv}
              </Card.Text>
              <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                Ver Reservas →
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xxl={3} lg={4} md={6} sm={10} xs={12} className='d-flex justify-content-center'>
          <Card style={{ width: '16rem', cursor: 'pointer' }} className='bg-danger text-white text-center'
          onClick={() => navigate('/admin/users')}>
            <Card.Body>
              <Card.Title className='mb-3'><i className="bi bi-person-fill-slash icon-fs"></i></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Usuarios Inactivos</Card.Subtitle>
              <Card.Text className='fs-4 fw-bold mb-1'>
                {inactiveUsers}
              </Card.Text>
              <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Ver inactivos → </div>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default AdminScreen
