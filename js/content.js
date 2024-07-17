document.addEventListener('DOMContentLoaded', () => {
    let extEnabled = false;
    let modeSelected = 'light';

    let filePreviewURL = new RegExp('^/courses/\\d+/files/\\d+(\\S*)$');
    let modulesURL = new RegExp('^/courses/\\d+/modules$');

    if (filePreviewURL.test(location.pathname)) {
        // turn download text into a button
        document.body.style.overflow = 'hidden';

        const fileTitle = document.querySelector('#content h2');
        fileTitle.style.display = 'none';

        const mainFrame = document.querySelector('.ic-Layout-contentMain');
        mainFrame.style.padding = '0 24px';

        const downloadText = document.querySelector('#content > div');
        downloadText.classList.add('Button', 'download-button');
        downloadText.querySelector('span > a').innerHTML = 'Download';

        // trigger the inner 'a' (download) event once the button is clicked anywhere
        downloadText.addEventListener('click', evt => {
            downloadText.querySelector('span > a').click();
        });
        downloadText.querySelector('span').addEventListener('click', evt => {
            downloadText.querySelector('span > a').click();
        });

    }

    else if (/\/courses\/[0-9]+\/quizzes\/[^\/]+/.test(location.pathname)) {
        let styleSheet = document.createElement('style')
        styleSheet.innerHTML =
            '#right-side{top: 56px; position: sticky;} \
             #question_list{max-height: 500px !important;} \
             .list_question.marked > .jump_to_question_link{color: red !important;} \
             .question.marked > .header{background: red; color: white;}';
        document.body.appendChild(styleSheet);
    }
    
    else if (modulesURL.test(location.pathname)) {
        let headerBar = document.querySelector('.header-bar');
        headerBar.classList.add('top-right');
    }
});