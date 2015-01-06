define(['footwork'],
  function(fw) {
    return fw.viewModel({
      namespace: 'Header',
      initialize: function() {
        // will receive its value from the MainRouter
        this.loggedInUser = fw.observable().receiveFrom('MainRouter', 'loggedInUser');
      }
    });
  }
);