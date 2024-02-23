class Human {

  constructor(firstName, lastName, age, gender, race, isEmployed, favFood) {
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.race = race;
    this.isEmployed = isEmployed;
    this.favoriteFood = favFood;

    if (age >= 18) {
      this.isAnAdult = true;
    } else {
      this.isAnAdult = false;
    };

    if (isEmployed) {
      this.makeMoney = () => {
        console.log(`${this.firstName} made some money`);
      };
    };

  };

  eatFavoriteFood() {
    console.log(`${this.firstName} ate some ${this.favoriteFood}`);
  };

  sleep() {
    console.log(`${this.lastName} went to sleep`);
  };

  fallInLove(person) {
    console.log(`${this.firstName} ${this.lastName} fell in love with ${person.firstName} ${person.lastName}`);
  };

  isHappy = true;

};

class Child extends Human {

  constructor(firstName, lastName, age, gender, race, isEmployed, favFood) {
    super(firstName, lastName, age, gender, race, isEmployed, favFood);
    
  }
  
  finishEating() {
    console.log(`${this.firstName} finished eating`);
    // this.sleep(); //?I think this is better
    super.sleep();
  }

};

const mike = new Human("Mike", "Tyson", 19, "male", "asian", true, "dumplings");
const jan = new Human("Jan", "Alfred", 17, "female", "white", false, "soup");
const lua = new Child("Lua", "Chin", 3, "female", "Japanese", false, "milk");



console.log(mike.isAnAdult);
mike.makeMoney();
mike.sleep();
jan.sleep();
console.log(jan.isHappy);

jan.fallInLove(mike);

lua.finishEating();