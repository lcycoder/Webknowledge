# 虚拟dom
(链接)[https://www.jianshu.com/p/af0b398602bc
]

# 注入
1. $ 实用方法和属性
2. _ 内部实用的成员

# 虚拟dom

数据发生变化后,会生成一个新的虚拟dom树,vue会比较两棵虚拟dom树,找出差异,仅把差异部分应用到真实domtree里
dom是从哪来的??  是render()函数返回的结果
## dom树的生成
先看有没有 render  有: 直接渲染dom树
                 无: 再看有没有template :  有 : 编译成为render()
                                        无: 将el绑定的outerhtml作为模板
## 挂载 

