const chooseFile = document.getElementById('choose-file');
const imgPreview = document.getElementById('preview');
const uploadButton = document.getElementById('UploadImage');
function validateFilePayload() {
  if (chooseFile.value == '') {
    document.getElementById('errorText').innerHTML =
      '* Please choose file first';
  } else {
    document.getElementById('errorText').innerHTML = null;
  }
}
chooseFile.addEventListener('change', function () {
  validateFile();
});

function validateFile() {
  const files = chooseFile.files[0];
  const maxSizeKB = 1000;
  const maxSize = maxSizeKB * 1024;
  if (files.size > maxSize) {
    alert('The image exceeded the maximum size of 1 MB');
    chooseFile.value = '';
  } else {
    getImage();
  }
}

function getImage() {
  const files = chooseFile.files[0];
  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener('load', function () {
      imgPreview.style.display = 'block';
      imgPreview.innerHTML =
        '<center><img src="' + this.result + '" /><center/>';
    });
  }
}

uploadButton.addEventListener('click', function () {
  uploadImage();
});
async function uploadImage() { }
