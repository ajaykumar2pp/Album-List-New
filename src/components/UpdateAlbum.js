import React from 'react'
import { Link } from "react-router-dom";


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const UpdateAlbum = (props) => {

  const handleUpdate = () => {
    const id = props.album.id;
    let updateTitle = document.getElementById('title-inp').value;
    let updateUserid = document.getElementById('userid-inp').value;

    if (updateTitle === '') {
      updateTitle = props.album.title;
    }
    if (updateUserid === '') {
      updateUserid = props.album.userId;
    }
    props.updateAlbumInList(id, updateTitle, Number(updateUserid), props.album);
  }

  return (
    <div  
            className="modal show" style={{ display: 'block', position: 'initial' }}
        >
              <div className="App mt-3 mb-3" >
        <h1>Update Album</h1>
        <Link to="/"><button className='btn btn-primary' >Home Page</button></Link>
        
      </div>
            <Modal.Dialog >
                <Modal.Header >
                    <Modal.Title className='text-primary'>Update Album</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <div className="form-group">
            <label className='text-primary'>I'd</label>
            <input type="number" className="form-control mt-2 mb-3" id='userid-inp' name="id" />
          </div>
          <div className="form-group">
            <label className='text-primary'>Title</label>
            <textarea rows="3" className="form-control mt-2 mb-3" id='title-inp' name="title"></textarea>
          </div>

                </Modal.Body>

                <Modal.Footer>
                <Link to="/">  <Button variant="primary" onClick={handleUpdate}>
                        Update Album
                    </Button></Link>  
                </Modal.Footer>
            </Modal.Dialog>
        </div>
        );
}

export default UpdateAlbum
