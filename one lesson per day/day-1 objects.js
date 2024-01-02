class PokeMoon //to avoid repeating classes
{
    constructor (name, type_1, type_2, moveSet)
    {
        this.name = name;
        this.type_1 = type_1;
        this.type_2 = type_2;
        this.moveSet = moveSet;

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
};

const PokeMoon1 = new PokeMoon ("Pikachu", "electric", null, ["Thunderbolt", "Wild Charge", "Focus Blast", "Slam"]);

const PokeMoon2 = new PokeMoon ("Landorus-Therian", "ground", "flying", ["Stomping Tantrum", "Stone Edge", "U-turn", "Tera Blast"]);

//PokeMoon2.attack(1);
//PokeMoon1.run();

//PokeMoon2.run();
//PokeMoon1.attack(2);

//PokeMoon1.attack(4);
//PokeMoon2.attack(2);

//PokeMoon1.run();


//*unnecessary code (took like half an hour)
/*
const firstPokeMoon = {
    name: "Pikachu",
    type_1: "electric",
    type_2: null,

    moveSet: ["Thunderbolt", "Wild Charge", "Focus Blast", "Slam"],

    fight(slot)
    {
        move = this.moveSet[slot-1];
        console.log(`You attacked using ${move}`);
    }
    run()
    {
        console.log(`You ran away. \nCoward`);
    }
    heal()
    {
        console.log(`You healed your HP back`);
    }
};
*/

/*
doSomethingRandom ()
{
    let n = Math.floor(Math.random() * 2);
    console.log(n);
    if (n == 1) {
        return attack(4);
    }
    else {
        return run();
    };
};
*/
