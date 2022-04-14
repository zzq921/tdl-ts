//解法一
//type First<T extends any[]> = T extends [] ? never : T[0]

//解法二
//type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

//解法三
//type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
//type age = [1,2,3]
//type ta1 = age[number] // 3 | 1 |2
//type ta2 = 1 extends age[number] ? true : false // true

//解法四

type  First<T extends any[]> = T extends [infer First , ...infer rest] ? First : never



//解法一：extends 类型条件哦判断
//解法二：获取 length属性 ，进行数组判断
//解法三：extends union 判断规则
//解法四：inter使用 (推断)