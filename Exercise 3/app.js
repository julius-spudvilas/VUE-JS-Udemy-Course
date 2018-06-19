new Vue({
        el: '#exercise',
        data: {
            value: 0,            
        },
        watch: {
            value: function(value) {
                var vm = this;
                setTimeout(function(){
                    vm.value = 0;
                },vm.timeout);
            }
        },
        methods: {
            setTimeout: function(event) {
                this.timeout = event.target.value;
            }
        },
        computed: {
            result: function() {
                return this.value != 37 ? 'not there yet' : 'done' ;
            }
        }
    });