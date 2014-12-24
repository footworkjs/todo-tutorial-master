define(['footwork'],
  function(fw) {
    return fw.viewModel({
      namespace: 'TodoForm',
      autoRegister: true,
      initialize: function() {
        this.thingToDo = fw.observable();
        this.todoListNamespace = fw.namespace('TodoList');
        
        this.submitForm = function() {
          this.todoListNamespace.publish('newItem', this.thingToDo());
          this.thingToDo('');
        };
      }
    });    
  }
);
