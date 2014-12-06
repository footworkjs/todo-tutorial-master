define(['footwork'],
  function(ko) {
    return ko.viewModel({
      namespace: 'Unknown',
      initialize: function() { },
      onDispose: function() {
        console.log('Unknown dispose');
      }
    });
  }
);