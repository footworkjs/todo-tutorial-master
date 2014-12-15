define(['footwork'],
  function(fw) {
    return fw.viewModel({
      namespace: 'Login',
      initialize: function() {
        this.username = fw.observable();
        this.password = fw.observable();
        this.loginUser = function() {
          return false;
        };
      }
    });
  }
);