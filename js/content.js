// Copyright (C) 2023 Alan J. Yu

(function() {
    // inject main.css as soon as html is loaded
    window.onload = function() {
        var link = document.createElement('link');
        link.href = chrome.runtime.getURL('/css/main.css');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.media = 'all';
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    var quizzes = true;
    var file_preview = true;

    document.addEventListener('resize', (e) => {
        responsiveSidebar();
    });

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

    /* files preview page */
    if (file_preview && /\/courses\/[0-9]+\/files\/[^\/]+/.test (location.pathname)) {
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


    /* quizzes page */
    else if (quizzes && /\/courses\/[0-9]+\/quizzes\/[^\/]+/.test (location.pathname)) {
        let styleSheet = document.createElement('style')
        styleSheet.innerHTML =
            '#right-side{top: 56px; position: sticky;} \
             #question_list{max-height: 500px !important;} \
             .list_question.marked > .jump_to_question_link{color: red !important;} \
             .question.marked > .header{background: red; color: white;}';
        document.body.appendChild(styleSheet);
    }
})();