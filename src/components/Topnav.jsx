import React, { useState } from 'react'
import { Button, Col, Form, Navbar, Offcanvas, Row } from 'react-bootstrap';


const Topnav = () => {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


  return (
    
    <div className="topnav">
        <div className='bloc-left'>
    <Button variant="primary" onClick={handleShow}>
    <span class="material-symbols-outlined">menu</span>
    </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <div className='logo'><a href="https://www.youtube.com/">
            <img width={"200px"} src="https://www.creads.com/wp-content/uploads/2021/05/youtube.jpg" /></a>
        </div>
        <Offcanvas.Body>
          <ul>
            <li><span className="material-symbols-outlined">home</span>Accueil</li>
            <li><span class="material-symbols-outlined">sound_sampler</span>Shorts</li>
            <li><span class="material-symbols-outlined">subscriptions</span>Abonnements</li>
            </ul>
            <hr></hr>
            <ul>
            <li><strong>Vous</strong></li>
            <li><span class="material-symbols-outlined">spatial_audio</span>Votre chaîne</li>
            <li><span class="material-symbols-outlined">history</span>Historique</li>
            <li><span class="material-symbols-outlined">playlist_add</span>Playlists</li>
            <li><span class="material-symbols-outlined">slideshow</span>Vos vidéos</li>
            <li><span class="material-symbols-outlined">schedule</span>À regarder plus tard</li>
            <li><span class="material-symbols-outlined">thumb_up</span>Vidéos "J'aime"</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      <div className='logo'><a href="https://www.youtube.com/">
            <img width={"200px"} src="https://www.creads.com/wp-content/uploads/2021/05/youtube.jpg" /></a>
        </div>
        </div>
<div className='bloc-center'>
      <Navbar className="bg-body-tertiary justify-content-between">
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Rechercher"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit"><span class="material-symbols-outlined">search</span></Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
    <div className='mic'><span class="material-symbols-outlined">mic</span></div>
    </div>
    <div className='bloc-right'>
        <div className='cam'><span class="material-symbols-outlined">video_call</span></div>
        <div className='not'><span class="material-symbols-outlined">notifications</span></div>
        <div className='user'><span class="material-symbols-outlined">account_circle</span></div>
        
    </div>
    </div>
  )
}

export default Topnav