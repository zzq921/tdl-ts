type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

//遍历接口用 keyof ---lookup
//遍历属性用  in --- mapped