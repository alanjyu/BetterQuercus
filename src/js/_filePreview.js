export default class FilePreview {
  constructor() {
    document.body.style.overflow = 'hidden';

    this.fileTitle = document.querySelector('#content h2');
    this.mainFrame = document.querySelector('.ic-Layout-contentMain');
    this.downloadText = document.querySelector('#content > div');

    this.fileTitle.style.display = 'none';
    this.mainFrame.style.padding = '0 24px';
    this.downloadText.classList.add('Button', 'download-button');
    this.downloadText.querySelector('span > a').innerHTML = 'Download';

    // trigger the inner 'a' (download) event once the button is clicked anywhere
    this.downloadText.addEventListener('click', (e) => {
      this.downloadText.querySelector('span > a').click();
    });

    this.downloadText.querySelector('span').addEventListener('click', (e) => {
      this.downloadText.querySelector('span > a').click();
    });
  }
}