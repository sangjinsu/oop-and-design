# 클래스

- 사용언어: typescript

## 클래스와 개체

- 생물학에서 클래스는 '강' 을 의미한다
- 어떤 개체든지 속하는 클래스가 존재하고 같은 클래스에 속하는 개체는 비슷한 속성과 동작을 가진다
- 프로그래밍에서 클래스 개념과 유사하다

### OOP 클래스

- 새로운 개체의 명세서 
- 개체는 반드시 클래스로부터 생성되어야 한다

```typescript
enum Sex {
  Male,
  Female,
}

class Human {
  constructor(public name: string, public sex: Sex, public age: number) {}

  public increaseAge() {
    this.age += 1
  }

  public decreaseAge() {
    this.age -= 1
  }

  public speak() {
    console.log('hello')
  }
}
```

#### 접근 제어자 public

- 멤버 변수와 멤버 함수 선언시 앞에 붙는 접근 제어자
- 외부에서 클래스 내부에 담긴 속성 및 동작에 접근을 허용한다

### 개체 만들기와 메모리

- [자바스크립트 힙, 스택 메모리 사용](https://felixgerschau.com/javascript-memory-management/)

- [golang 메모리 사용](https://deepu.tech/memory-management-in-golang/)

#### 인스턴스

- 개체를 부르는 또 다른 표현

- 어떤 클래스에 속하는 개체

- 인스턴스화는 클래스로부터 개체 하나를 만드는 행위이다

## GC, Garbage Collection

- [javascript 가비지 콜렉션 Mozilla](https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management#garbage_collection)
- [go vs java GC line engineering](https://engineering.linecorp.com/ko/blog/detail/342/)

- **<u>프로그래머가 메모리를 직접 해제하지 않는다</u>**

- **<u>단점</u>**
  - **_<u>가비지 콜렉터가 메모리를 수집하는 시간을 알 수 없다</u>_**
  - **<u>모든 개체의 사용 여부를 판단하는게 빠르지 않다</u>**
  - **<u>자원이 한정된 시스템에 적합하지 않다</u>**
  - **_<u>자동 메모리 관리임에도 메모리 누수가 존재한다</u>_**

## 생성자

- <u>**생성자를 사용하지 않는 경우 문제점**</u>

  1. 생성된 개체가 유효하지 않은 값을 가지고 있다
  2. 생성 후에 값을 따로 대입한다 

  ```typescript
  class Human {
    public name: string = ''
    public age: number = 0
    public sex: Sex = Sex.Male
  
    public increaseAge() {
      this.age += 1
    }
  
    public decreaseAge() {
      this.age -= 1
    }
  
    public speak() {
      console.log('hello')
    }
  }
  
  const human = new Human2()
  human.name = 'jinsu'
  human.age = 27
  human.sex = Sex.Male
  ```

- 생성자를 사용하면 값을 지정하여 초기화한다

- optional parameter 로 생성자 오버로딩을 표현할 수 있다

  ```typescript
  class Human {
    constructor(public name: string, public sex: Sex, public age?: number) {
      if (age === undefined) {
        this.age = 0
      }
    }
  }
  ```

### **<u>생성자로 초기화 해야하는 이유</u>**

1. 개념에서의 문제
   - 생성된 개체에 유효한 값이 없으며 값을 따로 대입한다

2. 후조건의 문제
   - 생성자도 함수이므로 선조건, 후조건이 적용된다
   - 생성자의 후조건은 '개체 상태는 개체 생성과 동시에 유효하다'이다

3. ***<u>사용자를 고려하지 않은 문제</u>***
   - 사용자는 클래스를 사용하는 사람이다
   - 사용자는 실수를 하게 된다
     1. 클래스에는 어떤 멤버 변수를 초기화 해야하는가?
        - 클래스가 저장된 파일을 확인해야 한다
        - 어떤 멤버 변수를 초기화해야 하는지 모른다 
        - 나중에 멤버 변수가 추가되는 것에 대응하기 힘들다
     2. 어떤 값으로 초기화해야 하는가?
        - 도메인 지식이 없는 경우 초기화가 힘들다
        - 초기화 과정에서 계산이 필요한 경우 코드가 중복된다

4. 생성자는 개체 생성에 대한 계약이다
   - ***<u>함수는 블랙박스이며 호출자와 함수는 분명하게 책임을 분리한다</u>***

5. ***<u>데이터 추상화, 외부에서 클래스 내부 데이터를 알 필요가 없다</u>***

## 접근 제어자

- 개체 외부에서 개체 상태를 직접 접근하는 것을 막는다
- 추상화, 캡슐화

typescript

| 종류             | 내용                      |
| ---------------- | ------------------------- |
| public (default) | 어디서나 접근 가능        |
| protected        | 서브 클래스에서 접근 가능 |
| private          | 외부 접근 금지            |

#### private 메서드의 사용

- 클래스 안에서 중복된 코드를 private 메서드로 만들면서 코드 중복을 막는다 
- private 생성자는 특정 상황에서 사용된다. (ex. singleton)
- 같은 클래스에 속한 개체끼리는 private 멤버에 접근이 가능하다 

## getter and setter

```typescript
class Human {
  constructor(private _name: string, private _age: number) {
    this._age = Math.max(_age, 0)
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
}
```

### 함수를 통한 데이터 접근의 객관적인 장점

1. 멤버 변수를 저장하지 않고 필요할 때마다 getter 에서 계산 가능
2. setter 에서 추가적인 로직을 실행할 수 있다
3. 상속을 통한 다형성이 구현 가능하다

### setter의 좋은 사용 예시

- ***<u>setter는 데이터를 직접 바꾸므로 뺄 수 있으면 빼는 것이 좋고 고민하고 추가한다</u>*** 
- 멤버 변수는 대부분 private 로 한다
- 개체는 살아있는 동안 유효한 상태여야 한다. 생성자를 통해 이를 강제한다.

- <u>***getter 는 자유롭게 추가하지만 참조형을 반환할 때는 주의한다***</u> 

## **<u>캡슐화와 추상화</u>**

- 캡슐화 = 클래스 + private 멤버 변수
- 추상화 = private 멤버 변수 + setter/getter (캡슐화는 추상화의 한 방법이다)

### 캡슐화

- 개체의 멤버 변수와 메서드 묶음
- 내부 데이터를 외부로부터 보호한다
- 사용자는 클래스 내부를 알 필요가 없다

### 추상화

- 추상 자료형 관점
  - 사용자는 클래스를 자료형으로 사용할 수 있다
  - 클래스 내부 멤버 변수를 몰라도 된다
  - 클래스로부터 개체를 생성할 수 있다

- 절차적 데이터 추상화 관점
  - 데이터를 직접 조작하는 대신 메서드를 호출한다

- 단점
  1. 동작이 없는 데이터만 있는 클래스가 생겨난다 (Data transfer object)
  2. 어떤 방법으로 추상화할지에 대한 정확한 기준이 없다
