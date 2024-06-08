import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap';

const Contenu = () => {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    
  return (
    <div className='contenu'>
       
        <div className="cadre-video">
            
            <div className='video'><iframe width="560" height="315" src="https://www.youtube.com/embed/IXqySuJ7nN4?si=x2qymhMHhTIvf6Ho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            <h6>"Fama Menou Podcast with Yahya Bouhlel #26 | GoMyCode من تونس إلى شركة عالمية القصة كاملة"</h6>
        </div>
        <div className='info-video'>
            <h6>Fama Menou Podcast</h6>
            <Button variant="dark">S'abonner</Button>
            <div className='note'>
                <div className='dislike'><span class="material-symbols-outlined">thumb_down</span></div>
                <div className='like'><span class="material-symbols-outlined">thumb_up</span></div>
            </div>
            <div className='partager'><span class="material-symbols-outlined">share</span>
            <Button variant="primary">Partager</Button>
            </div>
            <div className='plus'>
            <Button variant="primary" onClick={handleShow}>
            <span class="material-symbols-outlined">more_horiz</span>
            </Button>
            
            <Offcanvas className="contenu" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li><span class="material-symbols-outlined">arrow_downward</span>Télécharger</li>
            <li><span class="material-symbols-outlined">content_cut</span>Clip</li>
            <li><span class="material-symbols-outlined">library_add</span>Enregistrer</li>
            <li><span class="material-symbols-outlined">flag</span>Signaler</li>
            </ul>
        </Offcanvas.Body>
      </Offcanvas>
      </div>
        </div>
    </div>
  );
}

export default Contenu