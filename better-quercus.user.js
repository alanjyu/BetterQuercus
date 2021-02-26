// ==UserScript==
// @name         Better Quercus
// @namespace    https://alanjyu.com
// @homepageURL  https://github.com/alanjyu/better-quercus.js
// @version      1.0
// @description  Better Quercus; still experimental.
// @author       Alan J. Yu
// @match        http*://q.utoronto.ca/courses/*/files/*
// @updateURL    https://raw.githubusercontent.com/alanjyu/better-quercus/main/better-quercus.js
// @downloadURL  https://raw.githubusercontent.com/alanjyu/better-quercus/main/better-quercus.js
// @supportURL   https://github.com/alanjyu/better-quercus.js/issues
// ==/UserScript==

(function() {
    'use strict';

    const h2 = document.querySelector('#content > h2');
    const downloadText = document.getElementById('content').getElementsByTagName('div')[0];
    const footer = document.getElementById('sequence_footer');

    // maximizing doc preview
    document.body.classList.remove('course-menu-expanded');
    h2.style.display = 'none';
    downloadText.classList.add('Button');
    downloadText.style.cssText = 'position: absolute; width: 150px; top: -54px; right: 211.26px;';
    downloadText.querySelector('span > a').innerHTML = 'Download';
    downloadText.querySelector('span').style.cssText = 'font-size: 1rem;';
    footer.style.cssText = 'position: absolute; top: -54px; right: 25px; padding: 0;';

    // for delayed script events
    window.addEventListener('load', function(){
        footer.querySelector('.module-sequence-footer').style.cssText = 'height: 38px;'
        footer.querySelector('.module-sequence-footer > .module-sequence-footer-content').style.cssText = 'border: none; background: none; animation: none; padding: 0;';
    });
})();
