window.addEventListener('load', onVrViewLoad);
  
function onVrViewLoad() {
    // Selector '#vrview' finds element with id 'vrview'.
    var vrView = new VRView.Player('#teste', {
        image: 'img/gallery/machu-picchu-preview.jpg',
        is_stereo: true
      });    
  }  

function onVrViewLoad() {
    // Selector '#vrview' finds element with id 'vrview'.
    var vrView = new VRView.Player('#sala', {
        image: 'img/gallery/sala.jpg',
        is_stereo: true
      });    
  }  