<template>
<div id="container">
<div id="circle">
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve">
    <defs>
        <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
    </defs>
    <circle cx="150" cy="100" r="75" fill="none"/>
    <g>
        <use xlink:href="#circlePath" fill="none"/>
        <text >
            <textPath xlink:href="#circlePath">{{text}}</textPath>
        </text>
    </g>
</svg>
</div>
</div>
</template>
<script>
export default {

    props: {
        text: String
    },
}

</script>
<style scoped>
#container { margin: 0%;  }

#circle { 
    position: absolute;   
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);  overflow: hidden;
 }

#circle text { font-family: 'Helvetica Neue', Arial; font-size: 16px; font-weight: bold; stroke: white;  stroke-width: 0.4;  fill: rgba(0,0,0,0); }

#circle svg { width: 80vw; height: 100vh;

  -webkit-animation-name: rotate;
     -moz-animation-name: rotate;
      -ms-animation-name: rotate;
       -o-animation-name: rotate;
          animation-name: rotate;
  -webkit-animation-duration: 30s;
     -moz-animation-duration: 30s;
      -ms-animation-duration: 30s;
       -o-animation-duration: 30s;
          animation-duration: 30s;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
       -o-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
       -o-animation-timing-function: linear;
          animation-timing-function: linear;

}

@-webkit-keyframes rotate {
    from { -webkit-transform: rotate(360deg); }
    to { -webkit-transform: rotate(0); }
}
@-moz-keyframes rotate {
    from { -moz-transform: rotate(360deg); }
    to { -moz-transform: rotate(0); }
}
@-ms-keyframes rotate {
    from { -ms-transform: rotate(360deg); }
    to { -ms-transform: rotate(0); }
}
@-o-keyframes rotate {
    from { -o-transform: rotate(360deg); }
    to { -o-transform: rotate(0); }
}
@keyframes rotate {
    from { transform: rotate(360deg); }
    to { transform: rotate(0); }
}


</style>