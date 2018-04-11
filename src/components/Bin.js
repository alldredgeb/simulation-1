import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from './../images/shelfie_logo.png';

class Bin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: "",
      editable: false
    };
    this.handleEditOnClick = this.handleEditOnClick.bind(this);
    this.handleNameOnChange = this.handleNameOnChange.bind(this);
    this.handlePriceOnChange = this.handlePriceOnChange.bind(this);
    this.handleSaveOnClick = this.handleSaveOnClick.bind(this);
    this.handleDeleteOnClick = this.handleDeleteOnClick.bind(this);
  }

  componentDidMount() {
    // console.log(this.props.match.params);
    axios.get(`/api/shelf/${this.props.match.params.shelfid}/bin/${this.props.match.params.binid}`).then( response => {
      // console.log(response.data);
      var newObj = {
        name: response.data.name,
        price: response.data.price
      }
      this.setState(newObj);
    })
  }

  handleEditOnClick() {
    this.setState({
      name: this.state.name,
      price: this.state.price,
      editable: !this.state.editable
    })
  }

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

  handleSaveOnClick(event) {
    axios.put(`/api/shelf/${this.props.match.params.shelfid}/bin/${this.props.match.params.binid}`, {
      name: this.state.name,
      price: this.state.price
    }).then(response => {
      console.log(response);
      this.setState({
        editable: false
      })
    })
    // this.setState({
    //   editable: !this.state.editable
    // })
  }

  handleDeleteOnClick(event) {
    axios.delete(`/api/shelf/${this.props.match.params.shelfid}/bin/${this.props.match.params.binid}`)
    .then( response => {
      console.log(response);
    })
  }

  render() {
    return (
      <div>

        <header className='bin_header'>
          <Link to='/'>
          <div className='bin_logo_container'>
            <img src={logo} alt="Shelfie Logo" />
          </div>
          </Link>

          <Link to={`/shelf/${this.props.match.params.shelfid}`}>
          <div className='bin_header_shelf_name'>
            <p>Shelf {this.props.match.params.shelfid}</p>
          </div>
          </Link>

          <div className='bin_header_bin_name'>
              <p>Bin {this.props.match.params.binid}</p>
          </div>
        </header>

        <section className='bin_edit_fields'>
          <p className='black_text'>Name</p>
          {this.state.editable === false ? 
          <input value={this.state.name} readOnly /> : 
          <input value={this.state.name} onChange={this.handleNameOnChange} />}
          
          <p className='black_text'>Price</p>
          {this.state.editable === false ? 
          <input value={this.state.price} readOnly/> : 
          <input value={this.state.price} onChange={this.handlePriceOnChange}/>}

          <div className='bin_buttons'>
            {this.state.editable === false ? 
            <button className='bin_edit_button' onClick={this.handleEditOnClick}>EDIT</button> : 
            // <Link to={`/shelf/${this.props.match.params.shelfid}`}>
            <button className='bin_save_button' onClick={this.handleSaveOnClick}>SAVE</button>
            // </Link>
            }
          
            <Link to={`/shelf/${this.props.match.params.shelfid}`}>
            <button className='bin_delete_button' onClick={this.handleDeleteOnClick}>DELETE</button>
            </Link>
          </div>
        </section>
      </div>
    )
  }
}

export default Bin;