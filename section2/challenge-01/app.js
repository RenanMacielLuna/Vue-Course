new Vue({
  el: '#challenge',
  data: {
    name: '',
    age: '',
    ageMult3: '',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/280px-FullMoon2010.jpg'
  },
  methods: {
    changeName(event){
      this.name = event.target.value;
    },
    changeAge(event){
      this.age = event.target.value;
      if (this.age !== '') {
        this.ageMult3 = parseInt(this.age) * 3;
      } else{
        this.ageMult3 = '';
      }
    },
    showRandomNumber: function(){
      return Math.random();
    }
  },
})
