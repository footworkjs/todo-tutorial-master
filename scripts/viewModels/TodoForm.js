var TodoForm = fw.viewModel({
  initialize: function() {
    this.thingToDo = fw.observable();
    this.submitForm = function() {
      console.info('TodoForm submit action triggered');
    };
  }
});