// ==UserScript==
// @name         Better Quercus
// @namespace    https://alanjyu.com
// @homepageURL  https://github.com/alanjyu/better-quercus.js
// @version      1.1
// @description  Providing a better Quercus experience
// @author       Alan J. Yu
// @include        http*://q.utoronto.ca/courses/*/files/*
// @updateURL    https://raw.githubusercontent.com/alanjyu/better-quercus/main/better-quercus.user.js
// @downloadURL  https://raw.githubusercontent.com/alanjyu/better-quercus/main/better-quercus.user.js
// @supportURL   https://github.com/alanjyu/better-quercus.js/issues
// ==/UserScript==

(function() {
    'use strict';

    const docPreview = document.getElementById('doc_preview');
    const h2 = document.querySelector('#content > h2');
    const downloadText = document.getElementById('content').getElementsByTagName('div')[0];
    const footer = document.getElementById('sequence_footer');

    // maximize doc preview
    document.body.classList.remove('course-menu-expanded');
    h2.style.display = 'none';

    // turn download text into a button
    downloadText.classList.add('Button');
    downloadText.style.cssText = 'position: absolute; width: 150px; top: -54px; right: 211.26px;';
    downloadText.querySelector('span > a').innerHTML = 'Download';
    downloadText.querySelector('span').style.cssText = 'font-size: 1rem;';

    // wrap header text at 50% width
    document.getElementById('breadcrumbs').style.cssText = 'overflow: hidden; max-width: 50%; text-overflow: ellipsis;';

    // move footer to top
    footer.style.cssText = 'position: absolute; top: -54px; right: 25px; padding: 0;';

    // for delayed script events
    window.addEventListener('load', function(){
        // reshape footer
        footer.querySelector('.module-sequence-footer').style.cssText = 'height: 38px;'
        footer.querySelector('.module-sequence-footer > .module-sequence-footer-content').style.cssText = 'border: none; background: none; animation: none; padding: 0;';

        // maximize doc preview
        docPreview.getElementsByTagName('div')[0].style.overflow = 'hidden';
        docPreview.getElementsByTagName('div')[0].getElementsByTagName('iframe')[0].style.minHeight = '0';
    });
})();
