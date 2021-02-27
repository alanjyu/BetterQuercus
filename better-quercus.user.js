// ==UserScript==
// @name         Better Quercus
// @namespace    https://alanjyu.com
// @homepageURL  https://github.com/alanjyu/better-quercus.js
// @version      1.2
// @description  Providing a better Quercus experience
// @author       Alan J. Yu
// @match        http*://q.utoronto.ca/courses/*/files/*
// @updateURL    https://raw.githubusercontent.com/alanjyu/better-quercus/main/better-quercus.user.js
// @downloadURL  https://raw.githubusercontent.com/alanjyu/better-quercus/main/better-quercus.user.js
// @supportURL   https://github.com/alanjyu/better-quercus.js/issues
// ==/UserScript==

(function() {
    'use strict';

    const docPreview = document.getElementById('doc_preview');
    const downloadText = document.getElementById('content').getElementsByTagName('div')[0];
    const footer = document.getElementById('sequence_footer');

    // maximize doc preview
    var styleSheet = document.createElement('style')
    styleSheet.innerHTML =
        '#sequence_footer{position: absolute; top: -54px; right: 25px; padding: 0;} \
         #breadcrumbs{overflow: hidden; max-width: 50%;} \
         #dov_preview > div{overflow-x: hidden;} \
         .module-sequence-footer{height: 38px;} \
         .module-sequence-footer-content{border: none !important; animation: none !important; background: none !important; padding: 0!important;}';
    document.body.appendChild(styleSheet);
    document.body.classList.remove('course-menu-expanded');
    document.getElementById('content').getElementsByTagName('h2')[0].style.display = 'none';

    // turn download text into a button
    downloadText.classList.add('Button');
    downloadText.style.cssText = 'position: absolute; width: 150px; top: -54px; right: 211.26px;';
    downloadText.querySelector('span > a').innerHTML = 'Download';
    downloadText.querySelector('span').style.cssText = 'font-size: 1rem;';

    // for delayed script events
    window.addEventListener('load', function(){
        // maximize doc preview
        docPreview.getElementsByTagName('div')[0].style.overflow = 'hidden';
        docPreview.getElementsByTagName('div')[0].getElementsByTagName('iframe')[0].style.minHeight = '0';
    });
})();
