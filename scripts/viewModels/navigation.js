define(['footwork'],
  function(ko, navigationTemplate) {
  return ko.viewModel({
    namespace: 'navigationcombined',
    initialize: function() { },
    afterBinding: function() {
      console.info('navigationcombined', arguments);
    }
  });
});