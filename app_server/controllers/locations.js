/* 'homelist' page */
module.exports.homelist = function(req, res){
  res.render('locations-list', {title: 'Home'});
};

/* 'location Info' page */
module.exports.locationInfo = function(req, res){
  res.render('location-info', {title: 'Location Info'});
};

/* 'add Review' page */
module.exports.addReview = function(req, res){
  res.render('index', {title: 'Add review'});
};