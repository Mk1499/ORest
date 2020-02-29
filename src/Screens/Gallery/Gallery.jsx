import React, { Component } from "react";
import GalleryItem from "../../Components/GalleryItem";

export default class Gallery extends Component {
  render() {
    return (
      <section id="menu" data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="section-title wow fadeInUp" data-wow-delay="0.1s">
                <h2>Our Menus</h2>
                <h4>Tea Time &amp; Dining</h4>
              </div>
            </div>

            <GalleryItem
              title="Amercan Breakfast"
              img="images/menu-image1.jpg"
              consists="Tomato / Eggs / Sausage"
              price="$25"
            />
            <GalleryItem
              title="Chinese Noodle"
              img="images/menu-image2.jpg"
              consists="Tomato / Eggs / Sausage"
              price="$25"
            />
            <GalleryItem
              title="Amercan Breakfast"
              img="images/menu-image3.jpg"
              consists="Tomato / Eggs / Sausage"
              price="$25"
            />
            <GalleryItem
              title="Amercan Breakfast"
              img="images/menu-image4.jpg"
              consists="Tomato / Eggs / Sausage"
              price="$25"
            />
            <GalleryItem
              title="Self-made Salad"
              img="images/menu-image5.jpg"
              consists="Tomato / Eggs / Sausage"
              price="$25"
            />
            <GalleryItem
              title="Amercan Breakfast"
              img="images/menu-image6.jpg"
              consists="Tomato / Eggs / Sausage"
              price="$25"
            />
          </div>
        </div>
      </section>
    );
  }
}
