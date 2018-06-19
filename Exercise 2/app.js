new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert: function(){
            window.alert('Button Clicked');
        },
        storeInputValue: function(event) {
            this.value = event.target.value;
        }
    }
});