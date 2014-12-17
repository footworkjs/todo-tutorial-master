define(['footwork'],
  function(fw) {
    return fw.viewModel({
      namespace: 'Main',
      router: {
        routes: [
          {
            route: '/',
            title: 'Todo Application Tutorial',
            controller: function() {
              // show our login page here
              this.$outlet('mainView', 'login-page');
            }
          },
          {
            route: '/todo',
            title: 'Todo List',
            controller: function() {
              // show our todo list page here
              this.$outlet('mainView', 'todo-page');
            }
          }
        ]
      },
      initialize: function() {
        // Create reference to the viewModel we will use in the callback
        var self = this;

        // Create the event handler which receives the 'userLogin' event
        this.$namespace.event.handler('userLogin', function() {
          // Tell the router to route to '/todo'
          self.$router.setState('/todo');
        });
      }
    });
  }
);