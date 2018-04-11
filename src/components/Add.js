import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from './../images/shelfie_logo.png';

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: ""
    };
    this.handleNameOnChange = this.handleNameOnChange.bind(this);
    this.handlePriceOnChange = this.handlePriceOnChange.bind(this);
    this.handleAddOnClick = this.handleAddOnClick.bind(this);
  };

  handleNameOnChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handlePriceOnChange(event) {
    this.setState({
      price: event.target.value
    })
  }

  handleAddOnClick(event) {
    axios.post(`/api/add/shelf/${this.props.match.params.shelfid}/bin/${this.props.match.params.binid}`, {
      name: this.state.name,
      price: this.state.price
    }).then(response => {
      console.log(response);
    })
    // this.setState({
    //   editable: !this.state.editable
    // })
  }

  render() {
    return (
      <div>

      <header className='add_header'>

        <Link to='/'>
        <div className='add_logo_container'>
          <img src={logo} alt="Shelfie Logo" />
        </div>
        </Link>

        <Link to={`/shelf/${this.props.match.params.shelfid}`}>
        <div className='add_header_shelf_name'>
          <p>Shelf {this.props.match.params.shelfid}</p>
        </div>
        </Link>

        <div className='add_header_add_name'>
          <p>Add to Bin {this.props.match.params.binid}</p>
        </div>

      </header>
      
      <section className='bin_edit_fields'>
        <p className='black_text'>Name</p>
        <input onChange={this.handleNameOnChange} />

        <p className='black_text'>Price</p>
        <input onChange={this.handlePriceOnChange} />

        <div>
        <Link to={`/shelf/${this.props.match.params.shelfid}`}>
          <button className='add_button' onClick={this.handleAddOnClick}>+ Add to inventory</button>
        </Link>
        </div>
      </section>

      </div>
    )
  }
}

export default Add;