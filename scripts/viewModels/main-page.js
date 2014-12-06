define(['footwork'],
  function(ko) {
    return ko.viewModel({
      namespace: 'MainPage',
      initialize: function() { },
      onDispose: function() {
        console.log('MainPage dispose');
      }
    });
  }
);