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
    // Tell footwork where it can find the TodoList viewModel.
    fw.viewModels.registerLocation('TodoList', '/scripts/viewModels/');

    // Tell footwork where it can find the TodoForm component assets.
    fw.components.registerLocation('todoform', {
      viewModel: '/scripts/viewModels/TodoForm.js',
      template: '/scripts/templates/TodoForm.html'
    });

    /**
     * Register the location of the 'MainRouter'
     * Loads from /scripts/MainRouter.js
     */
    fw.routers.registerLocation('MainRouter', '/scripts/');

    // tell footwork to startup and begin binding
    fw.start();
  }
);