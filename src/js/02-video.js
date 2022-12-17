import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
var throttle = require('lodash.throttle');

player.on('play', function () {
   console.log('played the video!');
});

player.on(
   'timeupdate',
   throttle(player => {
      localStorage.setItem('videoplayer-current-time', player.seconds);
      console.log(localStorage.getItem('videoplayer-current-time'));
   }, 1000)
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
//    .then(function (seconds) {
//       // seconds = the actual time that the player seeked to
//    })
//    .catch(function (error) {
//       switch (error.name) {
//          case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//          default:
//             // some other error occurred
//             break;
//       }
//    });