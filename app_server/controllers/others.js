/* 'about' page */
module.exports.about = function(req, res){
  res.render('generic-text', {
    title: 'About Loc8r',
    content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nLorem ipsum dolor sit amet, consecteturaccumsan vitae mauris eu, venenatis cursus ex. Integer at mauris non mi congue congue. Maecenas mi nulla, suscipit non nunc quis, facilisis viverra sapien. Etiam rutrum pretium mi, ut vehicula lorem tincidunt non. Nunc consectetur ipsum blandit odio sollicitudin, eget aliquam turpis interdum. Vivamus et mattis dolor. Curabitur imperdiet vestibulum tortor vitae dignissim. Aliquam ut placerat nulla. Vestibulum quis tempus quam. Donec interdum, nulla a laoreet finibus, arcu est cursus turpis, sit amet pulvinar metus neque sed massa. Maecenas ut enim sit amet augue rutrum viverra. Praesent in est mollis, maximus dui eget, lacinia lacus. Nullam vitae ex tincidunt, pellentesque tortor sit amet, rhoncus orci.'
  });
};