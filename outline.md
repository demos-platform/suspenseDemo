# 演讲备忘录

(放 Code Spliting 页时, 此时说 Code Spliting 的优势:)

* 仅仅加载当前页面所需要的 JavaScript。体验会更好。

1. 为什么 lazy 要和 Suspense 一起用呢？

此时结合博客进行解答。

* React-loadable
* lazy 返回了什么, 动态加载的机制

2. (衔接话)此时调成慢速, 会发生什么呢? 可以看到获取的数据在不同时刻进行展现。我们想要同时刻进行展现的话引入下个话题 —— `Data Fetching`

3. (衔接话)演示完 `data fetching` 后，刷新页面看到一直有个刷新的 `<Spin />` 组件, 为了更好的交互, 我们可以做什么  —— `Concurrent Mode`

3. ConcurrentMode
	* Another question: Is the spinner always necessary?
	* Concurrent Rendering
