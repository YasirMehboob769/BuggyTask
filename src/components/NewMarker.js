import React, { Component } from "react";
import Icon from '../components/asset/photos/placeholderyellow.png'
export default class NewMarker extends Component {
  render() {
    return (
      <div>
       <img src={Icon} alt="description" style={{height:25,width:25}}/>
      </div>
    );
  }
}