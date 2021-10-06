# Static, 싱글턴, 내포 클래스

- 사용언어: typescript

## Static

### static 사용 

- 함수 목적이 단순한 계산인 경우

- 개체 단위보다는 클래스 단위로 사용되는 경우 

  ```typescript
  class MathFunc {
    private constructor() {}
  
    public static abs(n: number) {
      return n < 0 ? -n : n
    }
  
    public static min(a: number, b: number) {
      return a < b ? a : b
    }
  
    public static max(a: number, b: number) {
      return a > b ? a : b
    }
  }
  ```

### Static

- static 멤버 변수와 멤버 함수는 클래스에 속한다 
- static 이 아닌 것은 개체에 속한다
- 비정적에서 정적으로 접근 가능하다
- 정적에서 비정적으로 접근 불가능하다 

### 정적 클래스와 생성자

- private 생성자는 개체 생성을 막음으로 정적 클래스로 만든다 

  ```typescript
  private constructor() {}
  ```

### 정적 변수

- 개체 단위보다는 클래스 단위로 사용되는 경우 

  ```typescript
  class Can {
    private static numCreated = 0
    public constructor() {
      Can.numCreated++
    }
  } 
  ```

### 정적 메서드와 멤버 변수

```typescript
  public static printStats(){
    console.log(`Can produced ${Can.numCreated}`)
  }
```

- 클래스에 속한 메서드가 개체에 속한 멤버 함수나 변수에 접근 불가하다
- 정적 메서드는 정적 변수만 사용 가능하다

### Static에 대한 비판

- 순수 OOP 지지자 - static 은 개채 소속이 아니고 전역 변수와 같다
- 비판에 대한 반론 - 프로그래머는 객체 지향 개념과 절차적 개념을 골고루 적절하게 사용해야 한다
