class Person {
  constructor(private firstName: string, private lastName: string) {}

  get fullName() {
    return this.firstName + ' ' + this.lastName
  }

  changeName(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

class Student extends Person {
  private _major: string | null = null

  constructor(firstName: string, lastName: string) {
    super(firstName, lastName)
  }

  get major() {
    return this._major
  }

  set major(major: string) {
    this._major = major
  }
}

class Teacher extends Person {
  private _department: string

  constructor(firstName: string, lastName: string, department: string) {
    super(firstName, lastName)
    this._department = department
  }

  get department() {
    return this._department
  }

  set department(department: string) {
    this._department = department
  }
}
