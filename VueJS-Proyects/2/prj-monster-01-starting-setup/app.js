function getRndValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "It's a Draw!";
      } else if (value <= 0) {
        this.winner = "You lost!";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "It's a Draw!";
      } else if (value <= 0) {
        this.winner = "You won!";
      }
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRndValue(6, 15);
      this.monsterHealth -= attackValue;
      this.addLogMsg("player", "attack", attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      this.currentRound++;
      const attackValue = getRndValue(8, 18);
      this.playerHealth -= attackValue;
      this.addLogMsg("monster", "attack", attackValue);
    },
    specialAttack() {
      const attackValue = getRndValue(12, 22);
      this.addLogMsg("player", "attack", attackValue);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRndValue(10, 25);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
        this.addLogMsg("player", "heal", healValue);
      }
      this.attackPlayer();
    },
    surrender() {
      this.winner = "You lost!";
    },
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    addLogMsg(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
  computed: {
    monsterHbDecrease() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerHbDecrease() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },

    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
});

app.mount("#game");
