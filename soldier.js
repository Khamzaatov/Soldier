const soldier = {
  name: 'Adam',
  health: 0,
  gun: {
    nameGun: 'Стечкин',
    numberBullets: 0,
  },
  provisions: 3,

  fire: function() {
    if (this.gun.numberBullets <= 0) {
      console.log('обойма пуста. Перезаредитесь');
    } else {
      console.log('бах-бах');
      this.gun.numberBullets--;
    }
  },
  recharge: function() {
    if (this.provisions <= 0) {
      console.log(`Не осталось припасов`);
    } else {
      this.gun.numberBullets = 30;
      this.provisions--;
      console.log(`Перезарядка...`);
    }
  },
  hurt: function() {
    if (this.health <= 0) {
      console.log('Ты проиграл');
    } else {
      this.health--;
    }
  },
}