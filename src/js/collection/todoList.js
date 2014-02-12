var TodoList = Backbone.Collection.extend({

  model: Todo,

  addTodo: function(todo) {
    this.add({task: todo});
  }

});
