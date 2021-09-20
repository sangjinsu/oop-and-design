enum Sex {
  Male,
  Female,
}

class Human {
  constructor(public name: string, public sex: Sex, public age?: number) {
    if (age === undefined) {
      this.age = 0
    }
  }

  public increaseAge() {
    if (this.age !== undefined) {
      this.age += 1
    }
  }

  public decreaseAge() {
    if (this.age !== undefined) {
      this.age -= 1
    }
  }

  public speak() {
    console.log('hello')
  }
}

const human1 = new Human('jinsu', Sex.Male, 27)
const human2 = new Human('jinsu', Sex.Female)

class Human2 {
  public name: string = ''
  public age: number = 0
  public sex: Sex = Sex.Male
  private count: number = 0

  public increaseAge() {
    this.age += 1
  }

  public decreaseAge() {
    this.age -= 1
  }

  public speak() {
    console.log('hello')
  }

  public punch(enemy: Human2) {
    enemy.age -= 1
    this.age += 1
  }
}

const human02 = new Human2()
human02.name = 'jinsu'
human02.age = 27
human02.sex = Sex.Male

class Human3 {
  private _test: { count: number }
  constructor(private _name: string, private _age: number) {
    this._age = Math.max(_age, 0)
    this._test = { count: 0 }
  }

  public get name(): string {
    return this._name
  }

  public get age(): number {
    return this._age
  }

  public set name(name: string) {
    this._name = name
  }

  public get test() {
    return this._test
  }
}

const h3 = new Human3('wanhee', -54)
console.log(h3.age, h3.name)
let a = h3.test
a.count = 5
console.log(h3.test)
