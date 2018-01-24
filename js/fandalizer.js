Dropzone.options.myAwesomeDropzone = {
  drop: function(file, done) {
    console.log(file);
  }
};

if (document.getElementById('DropzoneElementId')) {
  Dropzone.autoDiscover = false;
  var dropzone = new Dropzone("#dropzone", { url: "/file/post"});
}
