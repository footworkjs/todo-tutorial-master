define(['footwork'], function(ko) {
  return ko.viewModel({
    namespace: 'Body',
    router: {
      relativeToParent: false,
      routes: [
        {
          route: '/',
          title: 'Main Page',
          controller: function($routeParams) {
            console.info('Main Page');
            this.$outlet('mainArea', 'main-page');
          }
        }, {
          route: '/second',
          title: 'Second Page',
          controller: function($routeParams) {
            console.info('Second Page');
            this.$outlet('mainArea', 'second-page', { hello: 'world' });
          }
        } , {
          route: '/book(/:num)',
          title: 'Book Page',
          controller: function($routeParams) {
            console.info('$routeParams', $routeParams);
            this.$outlet('mainArea', 'second-page', { hello: 'world' });
          }
        } 
      ],
      unknownRoute: function($routeParams) {
        this.$outlet('mainArea', 'unknown');
      }
    },
    initialize: function() { },
    onDispose: function() {
      console.log('Body dispose');
    }
  });
});