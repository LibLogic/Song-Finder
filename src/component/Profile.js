import React, { Component } from 'react';
import axios from 'axios';


class Profile extends Component {
	
	state = {
		artistName: "",
		songName: ""
	}

   setArtistName = e => {
    this.setState({
      artistName: e.target.value
    });
  }
  
   setSongName = e => {
    this.setState({
      songName: e.target.value
    });
  }
  
  handleClick = (e) => {
		e.preventDefault();		
		e.target.reset();
		document.getElementById('artist').innerText = "";
		document.getElementById('song').innerText = "";
		document.getElementById('lyrics').innerText = "";
		const url = "https://api.lyrics.ovh/v1/" + this.state.artistName + "/" + this.state.songName;
		axios.get(url)
	  .then(response => {
			document.getElementById('artist').innerText = this.state.artistName.toUpperCase();
			document.getElementById('song').innerText = '"' + this.state.songName.toUpperCase() + '"';	  	
			document.getElementById('lyrics').innerText = response.data.lyrics;
	  });
  }	
	
	render(){
		return (
			<div>
				<h2>Find Song Lyrics</h2>
				<form onSubmit={ this.handleClick }>
				<input onChange={ this.setArtistName } type="text" placeholder="Artist Name" /> <br />  
				<input onChange={ this.setSongName} type="text" placeholder="Song Name" />
				<input type="submit" value="Submit" />
				</form>
				<h3 id="artist"> </h3>
				<p id= "song"> </p>
				<p id="lyrics"> </p>
			</div>
			);
	}
}

export default Profile;