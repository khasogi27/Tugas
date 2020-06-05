// function yang pake class

class orang {
    constructor(name, _height, age, rip) {
        this.panggilan = name
        // this.tinggi = height
        this.age = age
        this.rip = rip
        this.mobil = []
        this.tinggi = []
    }
    // beliMobil(mobil) {
    //     this.mobil.push(mobil)

    //     return this
    // }
    beliTinggi(tinggi) {
        this.tinggi.push(tinggi)

        return this
    }
}

const udin = new orang('udin sedunia', 170, 40, 80)



console.log(udin.beliMobil('kia').beliMobil('bmw').beliMobil('bemo'))