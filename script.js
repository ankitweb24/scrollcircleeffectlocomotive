const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });

let container = document.querySelector('.container');
let scroll_circle = document.getElementById('scroll_circle');
let intialScale = 1;
let maxScale = 25;
let maxInnerSize = Math.min(window.innerWidth, window.innerHeight);

locoScroll.on('scroll', function(e) { 
    let scrollPosition = e.scroll.y;
    
    if(scrollPosition > 1125){
        container.style.width = "97%"
        scroll_circle.style.borderRadius = "40px"
    }else{
        container.style.width = "100%";
        scroll_circle.style.borderRadius = "50%"
        let newScale = Math.min(maxScale, intialScale + scrollPosition / 40)
        scroll_circle.style.transform = "scale(" + newScale + ")";
    }
});
