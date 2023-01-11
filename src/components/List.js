import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { IoTrashBin } from "react-icons/io5";
import { FaPen } from "react-icons/fa";

const List = (props) => {
  return (
        <div className="pic place " >
          <div className=' p-2 mt-5'>
            <span className='id card-header h2 text-red'>{props.album.id}</span>
            <div className='float-end shadow-sm me-2'>
              <Link to="/update"> <Button variant='me-3'><FaPen className='icon' onClick={() => props.setUpdateAlbum(props.album)} /></Button></Link>
              <Button variant='me-3' > <IoTrashBin className='icon' onClick={() => props.deleteAlbumFromList(props.album.id)} /></Button>
            </div>
            <h5 className="mt-4  mb-1 ">{props.album.title}</h5>
          </div>
        </div>

  )
}
export default List
