App.LeadsRoute = Ember.Route.extend({
  model: function() { return this.store.find('lead') }

 })

App.LeadRoute = Ember.Route.extend({

  model: function(params) { return this.store.find('lead', params.id) }

})

