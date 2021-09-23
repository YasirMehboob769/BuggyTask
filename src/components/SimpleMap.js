import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import Marker from '../components/Marker'
import NewMarker from '../components/NewMarker'
const AnyReactComponent = ({ text }) => <div><Marker /></div>;
// const

export default class SimpleMap extends Component {
  constructor(props) {
    super()
    this.state= {
      markers : [
        {
          lat:31.513293620959658,
          lng: 74.32780844853117
        },
        {
          lat:31.48763819385374, 
          lng:74.30066295662905
        },
        {
          lat:31.466084466292966,
          lng: 74.2336159169614
        },
      ],
      MarkerSpinner:true

    }
  }
  static defaultProps = {
    center: {
      lat: 31.51,
      lng: 74.32
    },
    zoom: 11
  };
addMarker =(e) => {
  // console.log("fdfd",e)
  // markers.push({
  //   lat:e.lat,
  //   lng:e.lng
  // })
  this.setState({
    markers: [...this.state.markers,{
      lat:e.lat,
      lng:e.lng
    }]
},() => {localStorage.setItem("MarkersData",JSON.stringify(this.state.markers))});
}
componentDidMount() {
 let getData = JSON.parse (localStorage.getItem("MarkersData"))
 if(getData) {
  this.setState({
    markers:getData
  })
 }
}

selectedMarker = (e) => {
  console.log("get marker color =>",e.target.value);
  // this.setState({
  //   MarkerSpinner:false
  // })
}
  // _onChildClick = (key, childProps) => {
  //   console.log("get key and value=>",key,childProps)
  // }

  render() {
    
    return (
    
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          
          // onChildClick={this._onChildClick}
          onClick={(e) => this.addMarker(e)}
          
        >
         
          {this.state.markers.map((marker) => (
           
           <AnyReactComponent
           
           onClick={this.selectedMarker}
            lat={marker.lat}
            lng={marker.lng}
            // text="My Marker"
          />
          ))}
          
        </GoogleMapReact>
      </div>
      
    )
  }
}
