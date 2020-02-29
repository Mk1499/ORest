import React, { Component } from 'react'

export default class GalleryItem extends Component {
    render() {
        return (
            <div class="col-md-4 col-sm-6">
            <div class="menu-thumb">
                 <a href={this.props.img} class="image-popup" title={this.props.title}>
                      <img src={this.props.img} class="img-responsive" alt="" />

                      <div class="menu-info">
                           <div class="menu-item">
                                <h3>{this.props.title}</h3>
                                <p>{this.props.consists}</p>
                           </div>
                           <div class="menu-price">
                                <span>{this.props.price}</span>
                           </div>
                      </div>
                 </a>
            </div>
       </div>
        )
    }
}

