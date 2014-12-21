define(['footwork'],
  function(fw) {
    return fw.viewModel({
      namespace: 'LoginForm',
      initialize: function() {
        /**
         * Create a new namespace instance we will use to
         * communicate with the Main viewModel.
         */
        this.mainRouterNamespace = fw.namespace('MainRouter');

        this.username = fw.observable();
        this.password = fw.observable();
        this.loginUser = function() {
          // Tell the Main viewModel what user has logged in
          this.mainRouterNamespace.trigger('userLogin');
        };
      }
    });
  }
);