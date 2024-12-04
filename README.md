# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$$ e = \sum^{\infty}_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots$$

I've provided an implementation of a function to approximate $e$ up to a number
of $n$ terms in `code.js` for you. However, it does repeated work -- identify
where the repeated work occurs and avoid it through bottom-up dynamic
programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js`
but you need to go beyond that.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?

The factorial function has a time complexity of $\Theta(n)$ because it just does $n$ recusrsive calls with equal amount of work for each call. The e(n) function does recursion with $n-1$ until it reaches $n=0$ but then it calls factorial e(n) each call and that was $\Theta(n)$. So, the e(n) recursion and calling the factorial function for each $n$ equals $\Theta(n^2)$. Then the bottom up function is iterative so the loop runs $n$ times and inside the loop, fact is getting updated incrementally by being multiplied by $i$ and this is just constant time becasue it is just multiplication. Then the $1/fact$ is also just constant time for each iteration. 
This means the worst time is $\Theta(n^2)$ because of the $e(n)$ function calls the factorial function.

https://www.geeksforgeeks.org/factorial-of-a-number-using-javascript/
