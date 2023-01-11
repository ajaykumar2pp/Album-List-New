import React from 'react'
import List from './List'
import { Link } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs";

const AlbumsList = (props) => {
  return (
    <>
   
   <div className="App mt-3 mb-3" >
        <h1>Albums List</h1>
        <Link to="/add"><button className="btn btn-primary mx-auto" > <BsPlusCircleFill className='me-2' /> Add Album</button></Link>
      </div>
      <div className="container mt-4">
      <div className="photo-gallery">
        {props.albums.map((album) => <List album={album} key={album.id} setUpdateAlbum={props.setUpdateAlbum} deleteAlbumFromList={props.deleteAlbumFromList} />).reverse()}
              
        </div>
    </div>
      
    </>
  )
}

export default AlbumsList
