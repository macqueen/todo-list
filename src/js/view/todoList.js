var TodoListView = Backbone.View.extend({

  events: {
    'submit .todo-form': 'addTodo'
  },

  initialize: function() {
    this.collection = new TodoList();
    this.collection.on('add', this.renderTodo, this);
    this.render();
  },

  render: function() {
    this.collection.each(function(model) {
      this.renderTodo(model);
    }, this);
  },

  addTodo: function(e) {
    e.preventDefault();
    var todo = _.escape(this.$el.find('.todo-text').val());
    if (todo.length) {
      this.$el.find('.todo-text').val('');
      this.collection.addTodo(todo);
    }
  },

  renderTodo: function(model) {
    var todoView = new TodoView(model);
    this.$el.find('ul').append(todoView.$el);
  }

});
