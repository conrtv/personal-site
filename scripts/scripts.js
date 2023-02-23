// // Wrap every letter in a span
// var textWrapper = document.querySelector('.hello .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(
//   /\S/g,
//   "<span class='letter'>$&</span>"
// );

// anime
//   .timeline()
//   .add({
//     targets: '.hello .letter',
//     translateY: ['1.1em', 0],
//     translateX: ['0.55em', 0],
//     translateZ: 0,
//     rotateZ: [180, 0],
//     duration: 750,
//     easing: 'easeOutExpo',
//     delay: (el, i) => 50 * i,
//   })
//   .add({
//     targets: '.hello',
//     opacity: 0,
//     duration: 1000,
//     easing: 'easeOutExpo',
//     delay: 1000,
//   });

var animation = anime.timeline({});

animation
.add ({
  targets: '.hello .letter',
      translateY: ['1.1em', 0],
      translateX: ['0.55em', 0],
      translateZ: 0,
      rotateZ: [180, 0],
      duration: 750,
      easing: 'easeOutExpo',
      delay: (el, i) => 50 * i,
})   .add({
       targets: '.hello',
       opacity: 0,
       duration: 500,
       easing: 'easeOutExpo',
       delay: 500,
     }).add ({
      targets: '.hello .letter2',
          translateY: ['1.1em', 0],
          translateX: ['0.55em', 0],
          translateZ: 0,
          rotateZ: [180, 0],
          duration: 750,
          easing: 'easeOutExpo',
          // delay: (el, i) => 50 * i,
    }).add({
           targets: '.hello',
           opacity: 0,
           duration: 500,
           easing: 'easeOutExpo',
           delay: 500,
         });


