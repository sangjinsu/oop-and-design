# 상속

- 다형성의 기반
- 이미 존재하는 클래스에서 새로운 클래스를 생성하는 방법
  - 새 클래스는 기존 클래스의 동작과 상태를 가진다
  - 새로운 동작과 상태를 추가할 수 있다 

- 서브 클래스 extends 슈퍼 클래스

```typescript
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
  private _department: string | null = null

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

```



### 생성자 호출 순서

1. 메모리에 개체 생성

2. 부모 생성자 호출

3. 자식 생성자 호출

   

### super 키워드

- 현 개체의 부모 부분을 가리킴
- super() 라고 코드를 작성하면 부모 생성자를 호출한다 
- 멤버 변수나 메서드를 호출할 때도 사용 가능하다.



### protected

- 외부자들은 접근할 수 없음
- 클래스 내부, 같은 패키지에 속한 클래스, 자식 클래스만 접근 가능
- 클래스의 경우 내포된 클래스에 한 해 붙일 수 있음 



### 부모 클래스와 자식 클래스

부모 클래스로 올라갈수록 보편적이고 일반적이고 자식 클래스로 내려갈수록 특정적이고 세분화된다



### is-a, has-a 관계

- is-a

  상속 관계

  수학에서 부분 집합 관계

  A student is kind of a Person 

  A teacher is kind of a Person 

- has-a

  컴포지션 관계

  

#### 상속 vs 컴포지션

- 재사용을 위한 방법
- 상속과 컴포지션은 상황에 따라 효율적으로 다르게 사용됨  



###  