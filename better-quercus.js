// ==UserScript==
// @name         Better Quercus
// @namespace    https://alanjyu.com
// @homepageURL  https://github.com/alanjyu/better-quercus
// @version      0.1
// @description  Better Quercus; still experimental.
// @author       Alan J. Yu
// @match        http*://q.utoronto.ca/courses/*/files/*
// @updateURL    https://raw.githubusercontent.com/alanjyu/better-quercus/main/better-quercus.js
// ==/UserScript==

(function() {
    'use strict';

    var docPreview = document.querySelector('#doc_preview');
    var h2 = document.querySelector('#content > h2');

    document.body.classList.remove('course-menu-expanded');
    h2.style.display = 'none';
})();
