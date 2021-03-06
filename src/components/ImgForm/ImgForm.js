import React from 'react';
import './imgL.css';


const ImageLinkForm = ({ onInputChange,onButtSubmit }) =>{
	return(
		<div className='ma4 mt0'>
			<p className="f3">{'This magic brain will detect faces in your photos! Give it a go! :D'} </p>
			<div className="center">
				<div className="pa2 br3 shadow-5 form center">	
					<input className="f4 pa2 w-70 center" type='text' onChange={onInputChange} />
					<button className="w-30 grow f4 link pv2 dib white bg-light-blue" onClick={onButtSubmit}>Detect</button>
				</div>
			</div>
		</div>

)}

export default ImageLinkForm;