// ==UserScript==
// @name         Better Quercus
// @namespace    https://alanjyu.com
// @homepageURL  https://github.com/alanjyu/better-quercus.js
// @version      1.0.1
// @description  Provide you with a better Quercus experience.
// @author       Alan J. Yu
// @match        http*://q.utoronto.ca/*
// @copyright    2021+, Alan J. Yu
// @updateURL    https://raw.githubusercontent.com/alanjyu/better-quercus/main/better-quercus.user.js
// @downloadURL  https://raw.githubusercontent.com/alanjyu/better-quercus/main/better-quercus.user.js
// @supportURL   https://github.com/alanjyu/better-quercus.js/issues
// ==/UserScript==

(function() {
    'use strict';

    // check if element is loaded
    const checkElement = async selector => {
        while ( document.querySelector(selector) === null) {
            await new Promise( resolve => requestAnimationFrame(resolve) )
        }
        return document.querySelector(selector);
    };

    // code for all pages
    let styleSheet = document.createElement('style')
    styleSheet.innerHTML =
        '@media only screen and (min-width: 768px) { \
             #left-side{height: 100%;} \
             nav[role="navigation"]{position: sticky; top: 40px;} \
         }';
    document.body.appendChild(styleSheet);

    // responsive sidebar
    function responsiveSidebar() {
        // check if left menu exists
        if (document.querySelector('#left-side') != null) {
            if (window.innerWidth < 1150) {
                if (document.body.classList.contains('course-menu-expanded')) {
                    document.body.classList.remove('course-menu-expanded');
                }
            } else {
                if (!document.body.classList.contains('course-menu-expanded')) {
                    document.body.classList.add('course-menu-expanded');
                }
            }
        }
    }

    responsiveSidebar();
    window.addEventListener('resize', (e) => {
        responsiveSidebar();
    });

    /* code for grades page */
    if (/\/courses\/[0-9]+\/grades/.test (location.pathname)) {

        let th = document.querySelector('#grades_summary > thead > tr'); // table head
        let tb = document.querySelectorAll('tr.student_assignment'); // table body

        // clear the repeating text on top on larger screens
        let styleSheet = document.createElement('style')
        styleSheet.innerHTML =
            '@media only screen and (min-width: 768px) { \
                 #grades_summary{margin-top: 0;} \
                 #assignments{padding: 0;} \
                 #print-grades-button{align-self: end;} \
                 .ic-Action-header{display: block; flex-direction: none; margin: 0;} \
                 .ic-Action-header__Primary{display: none;} \
                 .ic-app-course-menu{height: 100%;} \
                 nav[role="navigation"]{position: sticky; top: 40px;} \
                 .percentage{text-align: center !important;} \
             }';
        document.body.appendChild(styleSheet);

        // creates a column showing percetages
        th.insertCell(5).outerHTML = '<th scope="col" class="percentage">%</th>'; // insert % column
        th.deleteCell(-1) // remove excess column

        tb.forEach(el => {
            // obtain grade and grade possible from each row of graded assignments
            let points = parseFloat(el.querySelector('.what_if_score').innerHTML); // might be a bad implementation
            let points_possible = parseFloat(el.querySelector('.points_possible').innerHTML);
            let perc = Math.round(points/points_possible * 100);

            // change 'NaN' value to ' '
            if (isNaN(perc)){
                perc = ' ';
            }

            el.insertCell(5).outerHTML = '<td class="percentage">' + perc + '</td>'; // insert percentage column
        });
    }

    /* code for files preview page */
    else if (/\/courses\/[0-9]+\/files\/[^\/]+/.test (location.pathname)) {

        // maximize doc preview by moving the footer to the top
        let styleSheet = document.createElement('style')
        styleSheet.innerHTML =
            '#content{padding: 4px 12px;} \
             #sequence_footer{position: absolute; top: -54px; right: 25px; padding: 0;} \
             #breadcrumbs{overflow: hidden; max-width: 50%;} \
             .module-sequence-footer{height: 38px;} \
             .module-sequence-footer-content{border: none !important; animation: none !important; background: none !important; padding: 0 !important;}';
        document.body.appendChild(styleSheet);

        // remove header text
        document.getElementById('content').getElementsByTagName('h2')[0].style.display = 'none';

        // turn download text into a button
        let downloadText = document.getElementById('content').getElementsByTagName('div')[0];
        downloadText.classList.add('Button');
        downloadText.style.cssText = 'position: absolute; width: 150px; top: -54px; right: 211.26px;';
        downloadText.querySelector('span').style.cssText = 'font-size: 1rem;';
        downloadText.querySelector('span > a').innerHTML = 'Download';
        downloadText.querySelector('span > a').style.cssText = 'color: #000; text-decoration: none;';

        // trigger the inner 'a' (download) event once the button is clicked anywhere
        downloadText.addEventListener('click', evt => {
            downloadText.querySelector('span > a').click();
        });
        downloadText.querySelector('span').addEventListener('click', evt => {
            downloadText.querySelector('span > a').click();
        });

        // restyle doc preview window once loaded
        checkElement('#doc_preview > div').then(el => {
            el.style.overflow = 'hidden';
            el.getElementsByTagName('iframe')[0].style.minHeight = '0';
        });
    }

    /* code for file navigation page */
    else if (/\/courses\/[0-9]+\/files/.test (location.pathname)) {
        // plan to add: full size file navigation
    }


    /* code for quizzes page */
    else if (/\/courses\/[0-9]+\/quizzes\/[^\/]+/.test (location.pathname)) {
        let styleSheet = document.createElement('style')
        styleSheet.innerHTML =
            '#right-side{top: 56px; position: sticky;} \
             #question_list{max-height: 500px !important;} \
             .list_question.marked > .jump_to_question_link{color: red !important;} \
             .question.marked > .header{background: red; color: white;}';
        document.body.appendChild(styleSheet);
    }

    else {
        // fall-back code
    }
})();