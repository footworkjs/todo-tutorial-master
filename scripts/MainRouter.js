define(['footwork'],
  function(fw) {
    return fw.router({
      namespace: 'MainRouter',

      /**
       * Add the initialize method which is called when the MainRouter is instantiated.
       * We then setup the event handler for 'userLogin' messages received on this.$namespace
       */
      initialize: function() {
        // Create reference to the router we will use in the callback
        var router = this;

        /**
         * broadcast the username of the current user as 'loggedInUser'
         * (the default value is null indicating 'logged out')
         */
        this.loggedInUser = fw.observable(null).broadcastAs('loggedInUser');

        // Create the event handler which receives the 'userLogin' event (and corresponding userName)
        this.$namespace.event.handler('userLogin', function(userName) {
          // Tell the router to route to '/todo' if we have a userName
          if(userName) {
            router.setState('/todo/' + userName);
          }
        });
      },

      routes: [
        {
          route: '/',
          title: 'Todo Application Tutorial',
          controller: function() {
            // the user is logged out if at the default route, lets nullify the username
            this.loggedInUser(null);

            // show our login page here
            this.$outlet('mainView', 'login-page');
          }
        },
        {
          route: '/todo/:username',
          title: 'Todo List',
          controller: function(params) {
            // set the loggedInUser value to the username
            this.loggedInUser(params.username);

            // show our todo list page here
            this.$outlet('mainView', 'todo-page');
          }
        }
      ]
    });
  }
);