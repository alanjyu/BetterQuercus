// ==UserScript==
// @name         Better Document Preview
// @namespace    https://alanjyu.com
// @homepageURL  https://github.com/alanjyu/better-quercus.js
// @version      1.3.1
// @description  A better document preview experience
// @run-at       document-idle
// @author       Alan J. Yu
// @match        http*://q.utoronto.ca/courses/*/files/*
// @updateURL    https://raw.githubusercontent.com/alanjyu/better-quercus/main/better-doc-preview.user.js
// @downloadURL  https://raw.githubusercontent.com/alanjyu/better-quercus/main/better-doc-preview.user.js
// @supportURL   https://github.com/alanjyu/better-quercus.js/issues
// ==/UserScript==

(function() {
    'use strict';

    // maximize doc preview
    var styleSheet = document.createElement('style')
    styleSheet.innerHTML =
        '#content{padding: 4px 12px;} \
         #sequence_footer{position: absolute; top: -54px; right: 25px; padding: 0;} \
         #breadcrumbs{overflow: hidden; max-width: 50%;} \
         .module-sequence-footer{height: 38px;} \
         .module-sequence-footer-content{border: none!important; animation: none!important; background: none!important; padding: 0!important;}';
    document.body.appendChild(styleSheet);
    document.getElementById('content').getElementsByTagName('h2')[0].style.display = 'none';

    // responsive sidebar
    function responsiveSidebar() {
        if (window.innerWidth < 1150 && document.body.classList.contains('course-menu-expanded')) {
            document.body.classList.remove('course-menu-expanded');
        } else if (window.innerWidth >= 1150 && !document.body.classList.contains('course-menu-expanded')){
            document.body.classList.add('course-menu-expanded');
        }
    }
    responsiveSidebar();
    window.addEventListener('resize', evt => {
        responsiveSidebar();
    });

    // turn download text into a button
    var downloadText = document.getElementById('content').getElementsByTagName('div')[0];
    downloadText.classList.add('Button');
    downloadText.style.cssText = 'position: absolute; width: 150px; top: -54px; right: 211.26px;';
    downloadText.querySelector('span').style.cssText = 'font-size: 1rem;';
    downloadText.querySelector('span > a').innerHTML = 'Download';

    // check if element is loaded
    const checkElement = async selector => {
        while ( document.querySelector(selector) === null) {
            await new Promise( resolve => requestAnimationFrame(resolve) )
        }
        return document.querySelector(selector);
    };

    // restyle doc preview window once loaded
    checkElement('#doc_preview > div').then(el => {
        el.style.overflow = 'hidden';
        el.getElementsByTagName('iframe')[0].style.minHeight = '0';
    });
})();
