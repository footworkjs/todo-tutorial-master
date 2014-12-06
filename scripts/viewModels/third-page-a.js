define(['footwork'],
  function(ko) {
  return ko.viewModel({
    namespace: 'ThirdPageA',
    initialize: function() {
      console.info('initialize ThirdPageA');
    },
    onDispose: function() {
      console.log('ThirdPageA dispose');
    },
    afterBinding: function(containingElement) {
      console.info('ThirdPageA afterBinding');
    }
  });
});