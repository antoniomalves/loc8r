/* 'homelist' page */
module.exports.homelist = function(req, res){
  res.render('locations-list', {
    title: 'loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'loc8r',
      strapline: 'Find places to work with near you!'
    },
    locations:[{
      name: 'Starcups',
      address: '125 High Street, Reading, RG6 1PS',
      ratting: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '100m'
    },{
      name: 'Cafe Hero',
      address: '125 High Street, Reading, RG6 1PS',
      ratting: 4,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '200m'
    },{
      name: 'Burger Queen',
      address: '125 High Street, Reading, RG6 1PS',
      ratting: 2,
      facilities: ['Food', 'Premium wifi'],
      distance: '250m'
    }]
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