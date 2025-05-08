import React, { useEffect, useRef, useState } from 'react';
import './card.css';

const MemberCard = ({ name, role, email, image, githubUrl }) => {
 
  return (
    <div class="wrapper">
    <div class="single-card">
      <div class="card">
        <div class="img-area">
          <img src={image} alt=""></img>
        </div>
       
        <div class="info">
          <h2>Melina James </h2>
          <center><span>Front-End Developer</span></center>
          <ul class="socials">
    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
    <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
  </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MemberCard;
