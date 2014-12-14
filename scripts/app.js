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
     * Tell footwork it can find both the 'Main' and 'TodoList' viewModels
     * inside of /scripts/viewModels.
     */
    fw.viewModels.registerLocation([
      'Main',
      'TodoList'
    ], '/scripts/viewModels/');

    // tell footwork to startup and begin binding
    fw.start();
  }
);