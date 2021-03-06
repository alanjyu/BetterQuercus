// ==UserScript==
// @name         Better Grade View
// @namespace    https://alanjyu.com
// @homepageURL  https://github.com/alanjyu/better-quercus.js
// @version      0.6.1
// @description  Display grade as percentages
// @author       Alan J. Yu
// @match        http*://q.utoronto.ca/courses/*/grades
// @updateURL    https://raw.githubusercontent.com/alanjyu/better-quercus/main/better-grade-view.user.js
// @downloadURL  https://raw.githubusercontent.com/alanjyu/better-quercus/main/better-grade-view.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var table_head = document.querySelector('#grades_summary > thead > tr');
    var table_body = document.querySelectorAll('tr.student_assignment');

    var styleSheet = document.createElement('style')
    styleSheet.innerHTML =
        '@media only screen and (min-width: 768px) { \
             #grades_summary{margin-top: 0;} \
             #assignments{padding: 0;} \
             #content{position: relative;} \
             #print-grades-container{position: absolute; top: 54px; right: 24px;} \
            .ic-Action-header__Primary{display: none;} \
            .percentage{text-align: center !important;} \
         }';
    document.body.appendChild(styleSheet);

    table_head.insertCell(5).outerHTML = '<th scope="col" class="percentage">%</th>'; // insert % column
    table_head.deleteCell(-1) // remove excess column

    table_body.forEach(el => {
        // obtain grade and grade possible from each row of graded assignments
        var points = parseFloat(el.querySelector('.what_if_score').innerHTML); // might be a bad implementation
        var points_possible = parseFloat(el.querySelector('.points_possible').innerHTML);
        var perc = Math.round(points/points_possible * 100);

        // change 'NaN' value to '-'
        if (isNaN(perc)){
            perc = '-';
        }
        el.insertCell(5).outerHTML = '<td class="percentage">' + perc + '</td>'; // insert percentage column
    });
})();
