!function(n){var t={};function i(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=n,i.c=t,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)i.d(e,o,function(t){return n[t]}.bind(null,o));return e},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="",i(i.s=7)}([function(n,t,i){n.exports=i.p+"img/bg_main.jpg"},function(n,t,i){n.exports=i.p+"img/selfie.jpg"},function(n,t,i){n.exports=i.p+"img/cable-car.jpg"},function(n,t,i){n.exports=i.p+"img/skier.jpg"},function(n,t,i){n.exports=i.p+"img/ski-boot.jpg"},function(n,t,i){n.exports=i.p+"img/mountains.jpg"},function(n,t,i){n.exports=i.p+"img/mountain-skis.jpg"},function(n,t,i){i(8),i(10),n.exports=i(11)},function(n,t,i){"use strict";i.r(t);i(0),i(1),i(2),i(3),i(4),i(5),i(6),i(9);let e=document.querySelector(".wrapper"),o=document.querySelector(".icon-menu"),s=document.querySelector(".icon-menu__dropdown");var c;c=()=>{e.classList.add("loaded"),document.body.classList.add("touch"),o.addEventListener("click",n=>{o.classList.toggle("active"),s.classList.toggle("show")})},"loading"!==document.readyState?c():document.addEventListener("DOMContentLoaded",c),function(){let n=document.querySelectorAll(".ibg");for(var t=0;t<n.length;t++)n[t].querySelector("img")&&(n[t].style.backgroundImage="url("+n[t].querySelector("img").getAttribute("src")+")")}()},function(n,t,i){n.exports=i.p+"img/musician.jpg"},function(n,t,i){},function(n,t,i){n.exports='<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <title>Amazing</title>\n    \x3c!--link(rel=\'stylesheet\', href=\'https://fonts.googleapis.com/css?family=Fira+Sans:100,300,400,700,800|Lato:700&display=swap\')--\x3e\n    <script src="https://kit.fontawesome.com/1f1b3cd99f.js" crossorigin="anonymous"><\/script>\n    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"><\/script>\n  </head>\n  <body>\n    <div class="wrapper">\n      <main class="page">\n        <header class="header">\n          <div class="container">\n            <div class="header__row">\n              <nav class="header__menu menu">\n                <div class="menu__body"><a class="menu__link" href="">/.</a></div>\n                <div class="menu__icon icon-menu">\n                  <div class="icon-menu__bars"><i class="fa fa-bars"></i></div>\n                  <div class="icon-menu__text">Menu\n                    <ul class="main-menu icon-menu__dropdown">\n                      <li><a href="">SED FAUCIBUS QUIS</a></li>\n                      <li><a href="">INSTAGRAM</a></li>\n                      <li><a href="">SPOTIFY</a></li>\n                      <li><a href="">ITUNES</a></li>\n                    </ul>\n                  </div>\n                </div>\n              </nav>\n            </div>\n            <div class="header__content">\n              <h1 class="header__title">Amazing Dude. Amazing Life.</h1>\n              <p class="header__text">Welcome to the personal site of <b>John Doe</b>. A professional skier and a musician.</p>\n            </div>\n          </div>\n        </header>\n        <div class="main-screen">\n          <div class="main-screen__bg ibg">\n            <div class="main-screen__triangle"></div><img src="'+i(0)+'" alt="">\n          </div>\n        </div>\n        <section class="content">\n          <div class="content__row">\n            <div class="content__column content__column_b"><span class="content__image"><img src="'+i(1)+'" alt=""></span></div>\n            <div class="content__column content__column_b">\n              <div class="content__block content__block_white block">\n                <h2 class="block__title">Sed faucibus quis</h2>\n                <div class="block__text">Fusce bibendum luctus massa,<br>ut tincidunt lectus tincidunt in.<br>Nulla tristique ipsum vitae lacus<br>ullamcorper, at dictum nunc scelerisque.</div>\n              </div>\n            </div>\n          </div>\n          <div class="content__row">\n            <div class="content__column"><span class="content__image"><img src="'+i(2)+'" alt=""></span></div>\n            <div class="content__column"><span class="content__image"><img src="'+i(3)+'" alt=""></span></div>\n            <div class="content__column"><span class="content__image"><img src="'+i(4)+'" alt=""></span></div>\n            <div class="content__column"><span class="content__image"><img src="'+i(5)+'" alt=""></span></div>\n          </div>\n          <div class="content__row">\n            <div class="content__column content__column_b">\n              <div class="content__block content__block_blue block">\n                <h2 class="block__title">Instagram</h2>\n                <div class="block__text">Etiam lacus dolor, tincidunt vitae nisi in, vulputate placerat odio. Pellentesque iaculis.</div><a class="block__button button" href="">View on Instagram</a>\n              </div>\n            </div>\n            <div class="content__column"><span class="content__image"><img src="'+i(6)+'" alt=""></span></div>\n            <div class="content__column">\n              <div class="content__block content__block_blue block block_empty"></div>\n            </div>\n          </div>\n          <div class="content__row content__row_b">\n            <div class="content__column content__column_l">\n              <div class="content__block content__block_dark block block_fade"></div>\n            </div>\n            <div class="content__column content__column_s">\n              <div class="content__block block block_small">\n                <h2 class="block__title">Self-Effacing Rage</h2>\n                <div class="block__subtitle">FT. Fascinating Collision</div>\n                <div class="block__text">\n                  Director: James G. Rohrer<br>Production Company: Sycamore<br>\n                  Producer: Laura S. Carlton<br>\n                  Executive Producer: Jack M. Heckart\n                </div><a class="block__button button_green" href="">Click to play &#9658;</a>\n              </div>\n            </div>\n          </div>\n          <div class="content__row">\n            <div class="content__column content__column_b">\n              <div class="content__block content__block_green block">\n                <h2 class="block__title">Spotify</h2>\n                <div class="block__text">Follow me, stream and add <br>my songs to your Spotify playlist.</div><a class="block__button button" href="">Follow on Spotify</a>\n              </div>\n            </div>\n            <div class="content__column content__column_b">\n              <div class="content__block content__block_dark block">\n                <h2 class="block__title">iTunes</h2>\n                <div class="block__text">Buy and download my songs from iTunes.</div><a class="block__button button" href="">Buy from Itunes</a>\n              </div>\n            </div>\n          </div>\n        </section>\n        <footer class="footer">\n          <div class="container">\n            <div class="footer__row">\n              <div class="footer__about">\n                <div class="footer__title footer__title_first title-footer">Amazing dude. Amazing life.</div>\n                <p class="footer__text">Mauris ornare lobortis arcu, at sodales dolor finibus nec. In convallis risus ligula, biben-dum sagittis ante cursus vitae. Donec ornare, dui nec sagittis imperdiet, nunc eros dignissim augue, ut aliquam nibh felis sit amet leo. Vivamus eu tincidunt tellus. Ves-tibulum quis condimentum lectus, nec aliquet lectus. Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Inte-ger consequat vel arcu quis dictum. Vestibu-lum viverra commodo nunc eu pellentesque. Phasellus in scelerisque elit, eu ultricies mauris.</p>\n                <p class="footer__copyright">&#9400;2015. All rights reserved.</p>\n              </div>\n              <div class="footer__contact">\n                <div class="footer__block">\n                  <div class="footer__title title-footer">Contact me</div>\n                  <p class="footer__text">1242 Crestview Terrace Artesia Wells, TX 78001</p>\n                  <p class="footer__text">Phone: 830-676-7974 <br>Email: halo@sitename.com</p>\n                </div>\n                <div class="footer__block">\n                  <div class="footer__title footer__title title-footer">Follow me on</div><a class="footer__social social" href="">\n                    <div class="social__icon"><i class="fab fa-facebook-f"></i></div>\n                    <div class="social__link">Facebook</div></a><a class="footer__social social" href="">\n                    <div class="social__icon"><i class="fab fa-twitter"></i></div>\n                    <div class="social__link">Twitter</div></a><a class="footer__social social" href="">\n                    <div class="social__icon"><i class="fab fa-instagram"></i></div>\n                    <div class="social__link">Instagram</div></a><a class="footer__social social" href="">\n                    <div class="social__icon"><i class="fab fa-spotify"></i></div>\n                    <div class="social__link">Spotify</div></a>\n                </div>\n              </div>\n              <div class="footer__subscribe">\n                <div class="footer__block">\n                  <div class="footer__title title-footer">Subscribe</div>\n                  <p>Duis sollicitudin facilisis dui ac aliquet. Phasellus tempor sollicitudin augue, id hendrerit enim gravida non. Integer consequat vel arcu quis dictum. Ves-tibulum viverra commodo nunc eu pellentesque.</p>\n                  <form class="footer__form">\n                    <input type="text" placeholder="Enter your email address" required="required">\n                    <button class="success" type="submit"><i class="fa fa-arrow-right"></i></button>\n                  </form>\n                </div>\n                <div class="footer__block">\n                  <div class="footer__title title-footer">Sponsor</div>\n                  <div class="block-sponsor">\n                    <div class="block-sponsor__logo">\n                      <p>Logo</p>\n                    </div>\n                    <div class="block-sponsor__logo">\n                      <p>Logo</p>\n                    </div>\n                    <div class="block-sponsor__logo">\n                      <p>Logo</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </footer>\n      </main>\n    </div>\n  </body>\n</html>'}]);
//# sourceMappingURL=main.js.map