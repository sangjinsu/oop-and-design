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
