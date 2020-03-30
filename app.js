new Vue({
    el: '#app',
    data: {
        startGame: true,
        playerHealth: 80,
        monsterHealth: 80,
        scores: '',
    },
    computed: {
        monsterHealthStyle: function() {
            return {
                width: this.monsterHealth + '%'
            }
        },
        playerHealthStyle: function() {
            return {
                width: this.playerHealth + '%'
            }
        }
    },
    methods: {
        startNewGame: function() {
            this.startGame = false
            this.playerHealth = 80
            this.monsterHealth = 80
            this.scores = ''
            console.log(this.startGame)
        },
        attack: function() {
            let monsterDamage = Math.floor(Math.random() * 8)
            this.playerHealth = this.playerHealth - monsterDamage

            let playerDamage = Math.floor(Math.random() * 11)
            this.monsterHealth = this.monsterHealth - playerDamage

            this.scores += `<li>
                    <p class="monster-score">Monster hits you for ${monsterDamage} </p>
                    <p class="player-score">You hit monster for ${playerDamage}</p>
                </li>`
        },
        specialAttack: function() {
            let monsterDamage = Math.floor(Math.random() * 8)
            this.playerHealth = this.playerHealth - monsterDamage

            let playerDamage = Math.floor(Math.random() * 21)
            this.monsterHealth = this.monsterHealth - playerDamage

            this.scores += `<li>
                    <p class="monster-score">Monster hits you for ${monsterDamage} </p>
                    <p class="player-score">You hit monster for ${playerDamage}</p>
                </li>`
        },
        heal: function() {
            let monsterDamage = Math.floor(Math.random() * 8)
            let playerHealing = Math.floor(Math.random() * 11)

            this.playerHealth = this.playerHealth + (playerHealing - monsterDamage)

            this.scores += `<li>
                    <p class="monster-score">Monster hits you for ${monsterDamage} </p>
                    <p class="player-score">You heal for ${playerHealing}</p>
                </li>`
        },
        giveUp: function() {
            this.startGame = true
        }
    },
    watch: {
        playerHealth: function(val) {
            if (val < 1) {
                console.log('Monster has won')
                this.playerHealth = 0
                if (confirm('Game over! Monster won. Start new game?')) {
                    this.startNewGame()
                } else {
                    this.startGame = true
                }
            } else if (val > 100) {
                this.playerHealth = 100
            }
        },
        monsterHealth: function(val) {
            if (val < 1) {
                console.log('You have won')
                this.monsterHealth = 0
                if (confirm('Game over! You won. Start new game?')) {
                    this.startNewGame()
                } else {
                    this.startGame = true
                }
            }
        }
    }
})