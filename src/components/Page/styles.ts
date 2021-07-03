import styled from "styled-components";
import FerrariSport from '../../assets/img/ferrarri-sport.jpeg';
import Ferrari from '../../assets/img/ferrari.jpeg';
import SevenAudi from "../../assets/img/audieven.jpeg";
import Camaro from '../../assets/img/camaro.jpeg';
import AudiYellow from '../../assets/img/audiyellow.jpeg';
import RedCard from "../../assets/img/redcar.jpeg";
import BMW from '../../assets/img/bmw.jpeg';
export const Container = styled.div`
  .colored:nth-child(1) {
    background-image: url(${BMW});
    background-position: center;
    background-size: cover;
  }
  .colored:nth-child(2) {
    background-image: url(${RedCard});
    background-position: center;
    background-size: cover;
  }
  .colored:nth-child(3) {
    background-image: url(${Camaro});
    background-position: center;
    background-size: cover;
  }
  }
  .colored:nth-child(4) {
    background-image: url(${FerrariSport});
    background-position: center;
    background-size: cover;
  }
  .colored:nth-child(5) {
    background-image: url(${Ferrari});
    background-position: center;
    background-size: cover;
  }
  .colored:nth-child(6) {
    background-image: url(${AudiYellow});
    background-position: center;
    background-size: cover;
  }
  .colored:nth-child(7) {
    background-image: url(${SevenAudi});
    background-position: center;
    background-size: cover;
  }
`;

export const Spacer = styled.div`
  height: 15vh;
  background: #77e68c;
`;
