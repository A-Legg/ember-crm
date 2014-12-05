App.LeadsController = Ember.ArrayController.extend({
  sortProperties: ['firstName', 'lastName']
})

App.LeadController = Ember.ObjectController.extend({

  

  actions: {
    saveChanges: function() {
      this.get('model').save();
    }
  }

});
