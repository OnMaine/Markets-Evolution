$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin: 30,
      nav:false,
      dots:false,
      autoplay:true,
      autoplayTimeout:0,
      autoplaySpeed: 50000,
      autoplayHoverPause:false,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:5,
              nav:true,
              loop:false
          }
      }
  });
});


let data = {
  name: "",
  sureName: "",
  email: ""
};

// // popUp
// $(document).ready(function() {
//     // Open Popup Js
//     $("#form").on('submit',function(){
//       // update data in obj
//       function updateData(data) {
//         data.name = $("#name").val();
//         data.sureName = $("#sureName").val();
//         data.email = $("#email").val();
//       };
//       updateData(data);
//
//       let dataBoxes = $('.dataBox');
//       // update text in popUp
//       dataBoxes.each(function (index, value) {
//         let id = $(this).attr('id');
//         for (key in data) {
//           if (id === key) {
//             let newBoxData = data[key];
//             value.append(newBoxData);
//           }
//         }
//       });
//     // open popUp
//       $(".popUp__body").fadeIn("200");
//     });
//
//     // Close Popup Js
//     $(".close").on('click',function(){
//       $(".popUp__body").fadeOut("200");
//     });
//
// });

$(document).ready(function() {
  $("#form__btn").on('click', function() {
    // update data in obj
    function updateData(data) {
      data.name = $("#name").val();
      data.sureName = $("#sureName").val();
      data.email = $("#email").val();
    };
    updateData(data);

    let dataBoxes = $('.dataBox');
    // update text in popUp
    dataBoxes.each(function(index, value) {
      let id = $(this).attr('id');
      for (key in data) {
        if (id === key) {
          let newBoxData = data[key];
          value.append(newBoxData);
        }
      }
    });
    // open popUp
    $(".popUp__body").fadeIn("200");
  })

  // Close Popup Js
  $(".close").on('click', function() {
    $(".popUp__body").fadeOut("200");
  })

});
