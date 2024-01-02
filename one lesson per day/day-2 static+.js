class pokemon
{
    constructor (name, type_1, type_2, moveSet)
    {
        this.name = name;
        this.type_1 = type_1;
        this.type_2 = type_2;
        this.moveSet = moveSet;
        pokemon.numberOfPokemons++;
    }
    attack (slot)
    {
        let move = this.moveSet [slot-1];
        console.log(`${this.name} attacked using ${move}`);
    }
    run()
    {
        console.log(`${this.name} ran away. \nCoward`);
    }

    static numberOfPokemons = 0;

    static startBattle (pokemon1, pokemon2)
    {
        console.log(`battle started between ${pokemon1.name} and ${pokemon2.name}`);
    }
};

const pokemon1 = new pokemon("Gliscor", "ground", "flying", ["Earthquake", "Knock Off", "Protect", "Spikes"]);

const pokemon2 = new pokemon("Iron Valiant", "fairy", "fighting", ["Moonblast", "Close Combat", "Thunderbolt", "Psyshock"]);

const pokemon3 = new pokemon ("Pikachu", "electric", null, ["Thunderbolt", "Wild Charge", "Focus Blast", "Slam"]);

//console.log("total pokemons:", pokemon.numberOfPokemons);

/*pokemon.startBattle(pokemon3, pokemon1);
pokemon3.attack(3);
pokemon1.attack(2);
pokemon3.run();*/

class vehicle {

    constructor (brand, price, functioning)
    {
        this.brand          = brand;
        this.price          = price;
        this.functioning    = functioning;
        vehicle.numberOfVehicles++;
    };

    isMoving = false;

    start ()
    {
        if (this.functioning === false) {
            console.log(`this ${this.brand} is not functioning`);
        }
        else {
            console.log(`the ${this.brand} started moving`);
        };

        this.isMoving = true;
    };

    stop ()
    {
        if (this.isMoving === false) {
            console.log(`the ${this.brand}, is not moving in the first place`);
        }
        else {
            console.log(`the ${this.brand} stopped`);
        };

        this.isMoving = false;
    };

    static numberOfVehicles = 0;
};

class car extends vehicle {

    constructor (brand, price, functioning, engine)
    {
        super (brand, price, functioning);
        this.engine = engine;
        car.numberOfCars++;
    }

    refuel ()
    {
        console.log(`this ${this.brand} is refueling`);
    }

    static numberOfCars = 0;
};

class motorCycle extends vehicle {

    constructor (brand, price, functioning, engine)
    {
        super (brand, price, functioning);
        this.engine = engine;
        motorCycle.numberOfMotorCycles++;
    }

    refuel ()
    {
        console.log(`this ${this.brand} is refueling`);
    }

    static numberOfMotorCycles = 0;
};

class bicycle extends vehicle {

    constructor (brand, price, functioning, chain)
    {
        super (brand, price, functioning);
        this.chain = chain;
        bicycle.numberOfBicycles++;
    }

    //I've ran out of ideas. help
    changeChin ()
    {
        console.log(`this ${this.brand} is changing the chain`);
    }

    static numberOfBicycles = 0;
};

const car1 = new car("BMW", "$70,000", true, "some engine name");
const car2 = new car("Alfa Romeo", "$42,995", false, "now it's defined");

const motorCycle1 = new motorCycle("Kawasaki", "$10,000", true, "another engine name");

const bicycle1 = new bicycle("Trek", "$500", true, "I don't even know if chains have names");

/*
console.log(vehicle.numberOfVehicles);
console.log(car.numberOfCars);
console.log(motorCycle.numberOfMotorCycles);
console.log(bicycle.numberOfBicycles);

car2.start();
car1.start();
car1.stop();
bicycle1.stop();
motorCycle1.refuel();
bicycle1.changeChin();

console.log(car2.engine);
console.log(motorCycle1.engine);
*/

//only debugging no new code today
//I'll stop here I don't wanna be debugging for the whole night
