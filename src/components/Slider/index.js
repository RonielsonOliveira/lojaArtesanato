import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import {Container, Image, Modal, ModalImage} from './styled'
export default function ImageSlider({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <Container>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <Image
              src={img}
              alt={`Imagem ${index}`}
              onClick={() => setSelectedImage(img)}
            />
          </div>
        ))}
      </Slider>

      <Modal show={selectedImage} onClick={() => setSelectedImage(null)}>
        {selectedImage && <ModalImage src={selectedImage} alt="Imagem ampliada" />}
      </Modal>
    </Container>
  );
}