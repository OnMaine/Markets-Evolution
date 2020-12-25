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

// popUp
$(document).ready(function() {
    // Open Popup Js
    $("#form").on('submit',function(){
       event.preventDefault();
      // update data in obj
      function updateData(data) {
        data.name = $("#name").val();
        data.sureName = $("#sureName").val();
        data.email = $("#email").val();
      };
      updateData(data);

      let dataBoxes = $('.dataBox');
      // refresh boxes
      dataBoxes.empty();
      // update text in popUp
      dataBoxes.each(function (index, value) {
        let id = $(this).attr('id');
        for (key in data) {
          if (id === key) {
            let newBoxData = data[key];
            value.append(newBoxData);
          }
        }
      });
    // open popUp
      $(".popUp__body, .overlay").fadeIn("200");
    });

    // Close Popup Js
    $(".close").on('click',function(){
      $(".popUp__body, .overlay").fadeOut("200");
    });

});

//  random function
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//  change text at Ask & Bid  with a pure JS (according to the requirements of the assignment)
window.onload = function() {
    bidContainer = document.getElementById("bid");
    askContainer = document.getElementById("ask");

    let newBid = getRandomInRange(1200, 4599);
    let newAsk = getRandomInRange(1200, 4599);

    bidContainer.innerText = newBid;
    askContainer.innerText = newAsk;
};
