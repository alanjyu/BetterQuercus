// ==UserScript==
// @name         Better Grade View
// @namespace    https://alanjyu.com
// @homepageURL  https://github.com/alanjyu/better-quercus.js
// @version      0.5
// @description  Display grade as percentages
// @author       Alan J. Yu
// @match        http*://q.utoronto.ca/courses/*/grades
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var table_head = document.querySelector('#grades_summary > thead > tr');
    var table_body = document.querySelectorAll('tr.student_assignment');

    var styleSheet = document.createElement('style')
    styleSheet.innerHTML =
        '#grades_summary{margin-top: 0;} \
         #assignments{padding: 0;} \
        .percentage{text-align: center !important;}';
    document.body.appendChild(styleSheet);

    table_head.insertCell(5).outerHTML = '<th scope="col" class="percentage">%</th>'; // insert % column for table head
    table_head.deleteCell(-1) // remove excess column

    table_body.forEach(el => {
        // obtain grade and grade possible from each row of graded assignments
        var points = parseFloat(el.querySelector('.what_if_score').innerHTML); // might be a bad implementation
        var points_possible = parseFloat(el.querySelector('.points_possible').innerHTML);
        var perc = Math.round(points/points_possible * 100);
        el.insertCell(5).outerHTML = '<td class="percentage">' + perc + '</td>'; // insert percentage column
    });
})();
