# 디자인 패턴과 싱글톤

- 사용언어: typescript

## 디자인 패턴

- 소프트웨어 설계시 흔하게 발생하는 문제에 대한 해결책
- 완성된 설계 방법은 아니고 예시 사항일 뿐이다.

#### 장점

- 이미 검증된 개발 방법을 사용해 개발 속도를 향상시킨다.
  - 예측하지 못한 문제를 대비한다

- 공통 용어를 사용하면서 개발자간 의사소통 효율을 높인다.
  - 설계에 대한 장황한 설명이나 도표를 작성하지 않는다.
  - 하지만 모든 개발자가 해당 패턴과 용어를 이해해야 한다

#### 단점

- 해결 대상이 잘못 설정되었다
  - GoF 책 패턴들 중 대부분은 C++ 미지원 기능에 대한 해결책이다
- 바로 적용하기 힘든 참고 사항을 패턴이라고 부르기 힘들다
- **<u>잘못 적용하기 쉽고 프로그램을 더 복잡하게 만든다</u>**  

- <u>**비효율적인 해법이 되기도 한다**</u>
  - <u>**디자인 패턴은 범용적이고 추상적이다**</u>
  - <u>**코드 중복이 많아지고 성능이 떨어진다**</u>

- 추상화 기법과 크게 다르지 않다
  - 프로그래밍 분야에 존재하던 현상에 건축 용어를 사용한다 

### 디자인 패턴 보다는 기본기

- 프로그래밍을 잘 못하는 사람이 디자인 패턴을 공부한다고 더 잘하지 않는다 
- 충분한 문제를 접하지 않고 다양한 문제 해결 방법을 알지 못한다
- 어디에 패턴을 적용할지 잘못 판단하게 된다
- **<u>모자란 실력을 디자인 패턴이라는 요행으로 숨기지 않는다</u>** 

## 싱글턴

- 어떤 클래스로부터 만들 수 있는 인스턴스를 하나로 제한한다 
- 프로그램 실행 중에 하나만 존재해야 한다
- 전역적으로 접근 가능해야 한다 

```typescript
class Singleton {
  private static instance: Singleton

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }
}
```

### 응용

- 싱글턴 생성시 인자가 필요한 경우 

  ```typescript
  class SingletonTrans {
    private static instance: SingletonTrans | null = null
  
    private constructor(private param1: number, private param2: object) {}
  
    public static createInstance(param1: number, param2: object) {
      if (SingletonTrans.instance) {
        throw new Error('instance already created')
      }
      SingletonTrans.instance = new SingletonTrans(param1, param2)
    }
  
    public static deleteInstance() {
      if (!SingletonTrans.instance) {
        throw new Error('instance is not existed')
      }
      SingletonTrans.instance = null
    }
  
    public static getInstance(): SingletonTrans {
      if (!SingletonTrans.instance) {
        throw new Error('instance creation is needed')
      }
      return SingletonTrans.instance
    }
  }
  ```

## 안티패턴

- 올바르지 않은 방법 - 배드 프랙티스
- 싱글턴은 안티패턴인가?
  - static 과 같고 싱글턴을 사용하지 않고 같은 일을 수행할 수 있다
  - **<u>싱글턴은 한가지 도구일뿐 상황에 적절히 사용하면 된다</u>**

