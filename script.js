/*let shareContainer = document.createElement('div', {classname: 'share-container'});
let facebookIcon = document.createElement('img', {src: './images/icon-facebook.svg', alt: 'Facebook icon'});
let twitterIcon = document.createElement('img', {src: './images/icon-twitter.svg', alt: 'Twitter icon'});
let pinterestIcon = document.createElement('img', {src: './images/icon-pinterest.svg', alt: 'Pinterest icon'});
let shareText = document. createElement('p', {textContent: 'Share'});
*/

let shareBtn = document.querySelector('.btn-container')
let shareBubble = document.querySelector('.share-bubble')

shareBtn.addEventListener('click', function(){
    shareBubble.classList.toggle('show')
})