class Person {
  protected _email: string
  constructor(private firstName: string, private lastName: string) {
    this._email = `${firstName
      .toLowerCase()
      .charAt(0)}${lastName.toLowerCase()}@abc.com`
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName
  }

  get email() {
    return this._email
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

  set email(email: string) {
    // this 가능
    super._email = email
  }
}

class FulltimeTeacher extends Teacher {
  private _officeNumber: number

  constructor(firstName: string, lastName: string, department: string) {
    super(firstName, lastName, department)
  }

  get officeNumber() {
    return this._officeNumber
  }

  set officeNumber(officeNumber) {
    this._officeNumber = officeNumber
  }
}

class ParttimeTeacher extends Teacher {
  private weeklyHours: number
  constructor(
    firstName: string,
    lastName: string,
    department: string,
    hours: number = 0
  ) {
    super(firstName, lastName, department)
    this.weeklyHours = hours
  }
}
