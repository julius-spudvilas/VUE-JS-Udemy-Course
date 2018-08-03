new Vue({
    el: '#app',
    data: {
        playerHeath: 100,
        monsterHeath: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHeath = 100;
            this.monsterHeath = 100;
            this.turns = [];
        },
        attack: function() {
            var damage = this.calculateDamage(3, 10);
            this.monsterHeath -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'PLayer Hits monster for ' + damage
            })
            if(this.checkWin()){
                return;
            }

            this.monsterAttacks();

        },
        specialAttack: function() {
            var damage = this.calculateDamage(3, 10);
            this.monsterHeath -= damage;

            this.turns.unshift({
                isPlayer: true,
                text: 'PLayer SPECIAL Hits monster for ' + damage
            })

            if(this.checkWin()){
                return;
            }

            this.monsterAttacks();
        },
        heal: function() {
            if(this.playerHeath<= 90) {
                this.playerHeath+= 10;
            } else {
                this.playerHeath = 100;
            }

            this.turns.unshift({
                isPlayer: true,
                text: 'Player Heals monster for 10'
            })
            this.monsterAttacks();
        },
        giveUp: function() {
            this.gameIsRunning = false;

        },

        monsterAttacks: function() {
            var damage = this.calculateDamage(5, 12)
            this.playerHeath -= damage;

            this.turns.unshift({
                isPlayer: false,
                text: 'Monser Hits player for ' + damage
            })
            this.checkWin();
        },


        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },

        checkWin: function() {
            if(this.monsterHeath<= 0) {
                if(confirm('You Won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            else if(this.playerHeath<= 0) {
                if(confirm('You Lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }   
            return false;         
        }
    }
});