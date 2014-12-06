define(['footwork'],
  function(ko) {
  return ko.viewModel({
    namespace: 'SecondPageA',
    initialize: function() { },
    onDispose: function() {
      console.log('SecondPageA dispose');
    },
    router: {
      relativeToParent: true,
      routes: [
        {
          route: '/thirdPageA',
          title: 'Third Page A',
          nav: true,
          controller: function($routeParams) {
            console.info('Third Page A');
            this.$outlet('thirdPageOutlet', 'third-page-a');
          }
        }, {
          route: '/thirdPageB',
          title: 'Third Page B',
          nav: true,
          controller: function($routeParams) {
            console.info('Third Page B');
            this.$outlet('thirdPageOutlet', 'third-page-b');
          }
        }
      ],
      unknownRoute: function($routeParams) {
        this.$outlet('thirdPageOutlet', 'unknown');
      }
    }
  });
});