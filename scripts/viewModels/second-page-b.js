define(['footwork'],
  function(ko) {
  return ko.viewModel({
    namespace: 'SecondPageB',
    initialize: function() { },
    onDispose: function() {
      console.log('SecondPageB dispose');
    }
  });
});