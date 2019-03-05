# 演讲备忘录

* 此时调成慢速, 会发生什么呢? 可以看到获取的数据在不同时刻进行展现。我们想要同时刻进行展现的话引入下个话题 —— `Data Fetching`
* 演示完 `data fetching` 后，刷新页面看到一直有个刷新的 `<Spin />` 组件, 为了更好的交互, 我们可以做什么  —— `Concurrent Mode`

Let’s forget about the buzzword “Suspense” and solve some real world problems instead.

The problems are narrowed down to code splitting & async data fetching.

(Show the demo)

1. Code Splitting
	* What is code splitting?
		* To stay fast, only load JavaScript needed for the current page.
		* This gives you the best chance at loading and getting interactive fast.
		* Route-based & Component based
		* Encourage people to lazy load as much as they can
	* Demo React.lazy and `<Suspense>`

todo: 为什么 `lazy` 需放在 `Suspense` 内部? 去看 Suspense 源码

2. Async data fetching
	* What’s the problems behind the spinners?
		* as shown in slides
	* Show how to use `resource.read` in demo
	* How to understand the `<Suspense>`?
		* Similar to an ErrorBoundary
		* And is composable

3. ConcurrentMode
	* Another question: Is the spinner always necessary?
	* Concurrent Rendering
	* A git branching metaphor
	* Now, do you get the point why it’s called “Suspense”? :)

4. Road map
Tell people that a big part of Suspense is not ready yet.
