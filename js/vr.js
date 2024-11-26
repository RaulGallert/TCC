window.addEventListener('load', onVrViewLoad);
  
function onVrViewLoad() {
    // Selector '#vrview' finds element with id 'vrview'.
    var vrView = new VRView.Player('#teste', {
        image: 'img/gallery/panorama.jpg',
        is_stereo: true
      });    
  }  