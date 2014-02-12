var TodoView = Backbone.View.extend({

  tagName: 'li',

  className: 'todo-item',

  template: _.template('<input type="checkbox"><%= task %></input>'),

  initialize: function(model) {
    this.model = model;
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  }

});
