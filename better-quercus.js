// ==UserScript==
// @name         Better Quercus
// @namespace    https://github.com/alanjyu
// @version      0.1
// @description  Better Quercus; still experimental.
// @author       Alan J. Yu
// @match        http*://q.utoronto.ca/courses/*/files/*
// ==/UserScript==

(function() {
    'use strict';

    var body = document.body
    var doc_preview = document.querySelector('#doc_preview');
    var footer = document.querySelector('.module-sequence-footer-content');
    var menu = document.querySelector('#left-side');
    var h2 = document.querySelector('#content > h2');

    body.classList.remove('course-menu-expanded');
    menu.style.display = 'none';
    h2.style.display = 'none';
})();
