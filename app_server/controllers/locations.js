/* 'homelist' page */
module.exports.homelist = function(req, res){
  res.render('locations-list', {
    title: 'loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'loc8r',
      strapline: 'Find places to work with near you!'
    }
  });
};

/* 'location Info' page */
module.exports.locationInfo = function(req, res){
  res.render('location-info', {title: 'Location Info'});
};

/* 'add Review' page */
module.exports.addReview = function(req, res){
  res.render('location-review-form', {title: 'Add review'});
};