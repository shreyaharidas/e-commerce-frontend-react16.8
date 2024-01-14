  import React from 'react';
  import { Container, Row, Col, Button, Image } from 'react-bootstrap';
  import styles from './profile.module.css';
import { ProfileProps } from './types';
  

  
  const Profile = ({ profileData, resetPassword }:ProfileProps) => {
    const {
      full_name,
      e_mail,
      registration_id,
      registration_time_stamp,
      profile_pic,
    } = profileData;
  

  
    return (
      <Container className={styles.container}>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <Image src={profile_pic ?? undefined} alt="Profile" className={styles.profilePic} />
          </Col>
        </Row>
        <Row className={`justify-content-center ${styles.profileDetails}`}>
          <Col xs={12} md={6} className="text-center">
            <h2>{full_name}</h2>
            <p>Email: {e_mail}</p>
            <p>Registration ID: {registration_id}</p>
            <p>Registration Time: {registration_time_stamp && new Date(registration_time_stamp).toLocaleString()}</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <Button variant="primary" className={styles.resetPasswordBtn} onClick={resetPassword}>
              Reset Password
            </Button>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default Profile;
  