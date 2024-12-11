import FilePreview from './_filePreview';
import ModuleList from './_moduleList';
import '../css/static.scss';


document.addEventListener('DOMContentLoaded', ()=> {
  const filePreviewURL = new RegExp('^/courses/\\d+/files/\\d+(\\S*)$');
  const modulesURL = new RegExp('^/courses/\\d+/modules$');

  const CSStoInject = document.createElement('style');
  document.head.appendChild(CSStoInject);
  
  if (filePreviewURL.test(location.pathname)) {
    console.log('works!');
    new FilePreview();
  }
  
  else if (/\/courses\/[0-9]+\/quizzes\/[^\/]+/.test(location.pathname)) {
    let styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
      #right-side{top: 56px; position: sticky;}
      #question_list{max-height: 500px !important;}
      .list_question.marked > .jump_to_question_link{color: red !important;}
      .question.marked > .header{background: red; color: white;}
    `;
    document.body.appendChild(styleSheet);
  }
  
  else if (modulesURL.test(location.pathname)) {
    new ModuleList();
  }
});