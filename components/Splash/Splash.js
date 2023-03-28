const styles = `
body{
display: block;
overflow-x:hidden;
}
#globalLoader{
    position: fixed;
    z-index: 1700;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #07001d;
    display: flex;
    left: 0,
    right: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.pl {
    display: block;
    width: 9.375em;
    height: 9.375em;
  }
  
  .pl__arrows,
  .pl__ring-rotate,
  .pl__ring-stroke,
  .pl__tick {
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  
  .pl__arrows {
    animation-name: arrows42;
    transform: rotate(45deg);
    transform-origin: 16px 52px;
  }
  
  .pl__ring-rotate,
  .pl__ring-stroke {
    transform-origin: 80px 80px;
  }
  
  .pl__ring-rotate {
    animation-name: ringRotate42;
  }
  
  .pl__ring-stroke {
    animation-name: ringStroke42;
    transform: rotate(-45deg);
  }
  
  .pl__tick {
    animation-name: tick42;
  }
  
  .pl__tick:nth-child(2) {
    animation-delay: -1.75s;
  }
  
  .pl__tick:nth-child(3) {
    animation-delay: -1.5s;
  }
  
  .pl__tick:nth-child(4) {
    animation-delay: -1.25s;
  }
  
  .pl__tick:nth-child(5) {
    animation-delay: -1s;
  }
  
  .pl__tick:nth-child(6) {
    animation-delay: -0.75s;
  }
  
  .pl__tick:nth-child(7) {
    animation-delay: -0.5s;
  }
  
  .pl__tick:nth-child(8) {
    animation-delay: -0.25s;
  }
  
  /* Animations */
  @keyframes arrows42 {
    from {
      transform: rotate(45deg);
    }
  
    to {
      transform: rotate(405deg);
    }
  }
  
  @keyframes ringRotate42 {
    from {
      transform: rotate(0);
    }
  
    to {
      transform: rotate(720deg);
    }
  }
  
  @keyframes ringStroke42 {
    from,
      to {
      strokeDashoffset: 452;
      transform: rotate(-45deg);
    }
  
    50% {
      strokeDashoffset: 169.5;
      transform: rotate(-180deg);
    }
  }
  
  @keyframes tick42 {
    from,
      3%,
      47%,
      to {
      strokeDashoffset: -12;
    }
  
    14%,
      36% {
      strokeDashoffset: 0;
    }
  }
`;

export default styles;
