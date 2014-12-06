define(['footwork'],
  function(ko) {
    return ko.viewModel({
      namespace: 'SecondPage',
      router: {
        relativeToParent: true,
        routes: [
          {
            route: '/secondPageA',
            title: 'Second Page A',
            controller: function($routeParams) {
              console.info('Second Page A');
              this.$outlet('secondPageOutlet', 'second-page-a');
            }
          }, {
            route: '/secondPageB',
            title: 'Second Page B',
            controller: function($routeParams) {
              console.info('Second Page B');
              this.$outlet('secondPageOutlet', 'second-page-b');
            }
          }
        ],
        unknownRoute: function($routeParams) {
          this.$outlet('secondPageOutlet', 'unknown');
        }
      },
      initialize: function(params) {
        console.info('SecondPage params', params);
      },
      onDispose: function() {
        console.log('SecondPage dispose');
      }
    });
  }
);