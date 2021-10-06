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

class Can {
  private static numCreated = 0
  private static num = 0
  public constructor() {
    Can.numCreated++
  }

  public static printStats() {
    console.log(`Can produced ${Can.numCreated}`)
  }
}

Can.printStats()
