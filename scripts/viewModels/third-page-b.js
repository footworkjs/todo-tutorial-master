define(['footwork'],
  function(ko) {
  return ko.viewModel({
    namespace: 'ThirdPageB',
    initialize: function() { },
    onDispose: function() {
      console.log('ThirdPageB dispose');
    }
  });
});