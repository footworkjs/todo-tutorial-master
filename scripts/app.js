/**
 * Configure RequireJS, telling it where the text plugin (used to load templates) and
 * footwork are located.
 */
requirejs.config({
  paths: {
    "text": "/bower_components/requirejs-text/text",
    "footwork": "/bower_components/footwork/dist/footwork-all"
  }
});

require(['footwork'],
  function(fw) {
    fw.components.registerLocation('todoform', {
      viewModel: '/scripts/viewModels/TodoForm.js',
      template: '/scripts/templates/TodoForm.html'
    });

    /**
     * Tell footwork it can find the 'Main', 'LoginForm', and 'TodoList' viewModels
     * inside of /scripts/viewModels.
     */
    fw.viewModels.registerLocation([
      'LoginForm',
      'TodoList'
    ], '/scripts/viewModels/');

    /**
     * Register the location of the 'MainRouter'
     * Loads from /scripts/MainRouter.js
     */
    fw.routers.registerLocation('MainRouter', '/scripts/');

    // Tell footwork it can find the login-page and todo-page inside of /scripts/views/
    fw.outlets.registerViewLocation([
      'login-page',
      'todo-page'
    ], '/scripts/views/');

    // tell footwork to startup and begin binding
    fw.start();
  }
);