import React from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddAlbum = (props) => {

  const handleSave = () => {
    const userId = document.getElementById('aaform-userid-inp').value;
    const title = document.getElementById('aaform-title-inp').value;
    props.addAlbumToList(Number(userId), title)
  }

  return (
    <div  
            className="modal show" style={{ display: 'block', position: 'initial' }}
        >
              <div className="App mt-3 mb-3" >
        <h1>Add Album</h1>
        <Link to="/"><button className='btn btn-primary' >Home Page</button></Link>
        
      </div>
            <Modal.Dialog >
                <Modal.Header >
                    <Modal.Title className='text-primary'>Add Album</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <div className="form-group">
            <label className='text-primary'>I'd</label>
            <input type="number" className="form-control mt-2 mb-3"  id='aaform-userid-inp'name="id" />
          </div>
          <div className="form-group">
            <label className='text-primary'>Title</label>
            <textarea rows="3" className="form-control mt-2 mb-3"id='aaform-title-inp' name="title"></textarea>
          </div>

                </Modal.Body>

                <Modal.Footer>
                <Link to="/">  <Button variant="primary" onClick={handleSave}>
                        Add Album
                    </Button></Link>  
                </Modal.Footer>
            </Modal.Dialog>
        </div>
        );
}

export default AddAlbum
