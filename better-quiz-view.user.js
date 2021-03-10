// ==UserScript==
// @name         Better Quiz View
// @namespace    https://alanjyu.com
// @homepageURL  https://github.com/alanjyu/better-quercus.js
// @version      0.0.1
// @description  A better quiz taking experience.
// @run-at       document-idle
// @author       Alan J. Yu
// @match        http*://q.utoronto.ca/courses/*/quizzes/*
// @updateURL    https://raw.githubusercontent.com/alanjyu/better-quercus/main/better-quiz-view.user.js
// @downloadURL  https://raw.githubusercontent.com/alanjyu/better-quercus/main/better-quiz-view.user.js
// @supportURL   https://github.com/alanjyu/better-quercus.js/issues
// ==/UserScript==

(function() {
  'use strict';

  var styleSheet = document.createElement('style')
  styleSheet.innerHTML =
      '#right-side{top: 56px; position: sticky;} \
       #question_list{max-height: 500px !important;} \
       .list_question.marked > .jump_to_question_link{color: red !important;} \
       .question.marked > .header{background: red; color: white;}';
  document.body.appendChild(styleSheet);
})();