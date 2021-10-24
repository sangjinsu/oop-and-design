# 내포 클래스

- 사용언어: typescript

## 소개

클래스 안에 다른 클래스가 들어간 모습

```typescript
class Outer {
  public static Inner = class {}
}
```

### 용도

1. 서로 연관된 클래스들을 그룹 지음
2. 내포 클래스는 바깥 클래스의 private 멤버에 접근 가능

