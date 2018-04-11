import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from './../images/shelfie_logo.png';

class Shelf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bin1: false,
      bin2: false,
      bin3: false,
      bin4: false,
      bin5: false
    };
  }

  componentDidMount() {
    axios.get(`/api/shelf/${this.props.match.params.id}`).then(response => {
      // console.log(response);
      var newObj = {
        bin1: false,
        bin2: false,
        bin3: false,
        bin4: false,
        bin5: false
      };
      for(var i=0; i<response.data.length; i++) {
        if(response.data[i].bin_id === 1) {newObj.bin1 = true;};
        if(response.data[i].bin_id === 2) {newObj.bin2 = true;};
        if(response.data[i].bin_id === 3) {newObj.bin3 = true;};
        if(response.data[i].bin_id === 4) {newObj.bin4 = true;};
        if(response.data[i].bin_id === 5) {newObj.bin5 = true;};
      }
      this.setState(newObj);
    })
  }

  render() {
    // console.log(this.props.match.params.id);
    return (
      <div>

      <header className='shelf_header'>
          <Link to='/'>
          <div className='shelf_logo_container'>
            <img src={logo} alt="Shelfie Logo" />
          </div>
          </Link>

          <div className='header_shelf_name'>
            <p>Shelf {this.props.match.params.id}</p>
          </div>
      </header>

      <section className='bin_links'>
        {this.state.bin1 === true ? 
        <Link to={`/shelf/${this.props.match.params.id}/bin/1`}><div className='bin_links_background'><p className='link_text'>Bin 1</p></div></Link> : 
          <Link to={`/add/shelf/${this.props.match.params.id}/bin/1`}><div className='add_link_background'><p className='add_link_text'>+ Add inventory to bin </p></div></Link>}

        {this.state.bin2 === true ? 
        <Link to={`/shelf/${this.props.match.params.id}/bin/2`}><div className='bin_links_background'><p className='link_text'>Bin 2</p></div></Link> : 
          <Link to={`/add/shelf/${this.props.match.params.id}/bin/2`}><div className='add_link_background'><p className='add_link_text'>+ Add inventory to bin </p></div></Link>}

        {this.state.bin3 === true ? 
        <Link to={`/shelf/${this.props.match.params.id}/bin/3`}><div className='bin_links_background'><p className='link_text'>Bin 3</p></div></Link> : 
          <Link to={`/add/shelf/${this.props.match.params.id}/bin/3`}><div className='add_link_background'><p className='add_link_text'>+ Add inventory to bin </p></div></Link>}

        {this.state.bin4 === true ? 
        <Link to={`/shelf/${this.props.match.params.id}/bin/4`}><div className='bin_links_background'><p className='link_text'>Bin 4</p></div></Link> : 
          <Link to={`/add/shelf/${this.props.match.params.id}/bin/4`}><div className='add_link_background'><p className='add_link_text'>+ Add inventory to bin </p></div></Link>}

        {this.state.bin5 === true ? 
        <Link to={`/shelf/${this.props.match.params.id}/bin/5`}><div className='bin_links_background'><p className='link_text'>Bin 5</p></div></Link> : 
          <Link to={`/add/shelf/${this.props.match.params.id}/bin/5`}><div className='add_link_background'><p className='add_link_text'>+ Add inventory to bin </p></div></Link>}
      </section>

      </div>
    )
  }
}

export default Shelf;