////////////////////////////////////////
// reload page after Forward and back
///////////////////////////////////////

const TYPE_BACK_FORWARD = 2;

function isReloadedPage() {
  return performance.navigation.type === TYPE_BACK_FORWARD;
}

function main() {
  if (isReloadedPage()) {
    window.location.reload();
  }
}
main();

////////////////////////////////////////////////////////////
///// TEAM  API REQUEST ` `
////////////////////////////////////////////////////////////


Vue.use(VueMeta);

new Vue({
    
  el: '#home-page',
    
  data () {
  
    return {
      articleData: [],
      apiURL: 'https://directus.thegovlab.com/ogrx',
    }
  },

  created: function created() {
    this.fetchArticles();
  },
  methods: {

    fetchArticles() {
      self = this;
      const client = new DirectusSDK({
        url: "https://directus.thegovlab.com/",
        project: "ogrx",
        storage: window.localStorage
      });

      client.getItems(
  'articles',
  {
    fields: ['*.*']
  }
).then(data => {
  console.log(data)
  self.articleData = data.data;
  
})
.catch(error => console.error(error));
    }

}
});


