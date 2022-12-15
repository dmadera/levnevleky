$(function(){
  $("#gallery").donkeyGallery({
  
      webservice : "assets/dnk-gallery/php/gallery.webservice.php", // link to php gallery file
      galleryPath : "img/gallery/", // gallery dir path. This option must end with a slash
      subdomain: "", // this option is needed in case of a sub-dir installation (see below more information about this)
      style: "default", // this option define a gallery style
      color: "default", // this option define a style color
      
      // fluid style (included from v1.1.0)
      fluidStyle: {
          active : false, // fluid style activation
          columns: 3, // columns number for fluid grid (accepted 1,2,3,4,5,10)
          responsive: true,
          imgReplacement: false
      },  
      // thumbnails settings
      thumbs: {
          thumbW: 150, // thumb width
          thumbH: 150, // thumb height
          thumbsGen: false // force to generate thumb each time and not only if is nedeed
      },
      // fancybox settings
      fancybox : {
          active: true, // fancybox activation
          galleryGroup: "donkeyGallery", // this option define a group for fancybox gallery view
          linkClass: "dnk-gallery-link" // this option define a class for the fancybox toggle click
      },
      // pagination settings
      pagination: {
          active: true, // easy paginate activation
          pageItems: 6 // this option define the items showed on each gallery page
      }
  
  });
});
