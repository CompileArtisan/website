
# Table of Contents

1.  [Prelude](#org7e5ca88)
2.  [Algorithm](#org7c49400)
    1.  [What an Algorithm is](#orgb34fc29)
    2.  [Specification of an Algorithm](#org009c0e1)
    3.  [Correctness of an algorithm](#orgbbf255b)
3.  [What a pseudocode is](#orgdf64742)
4.  [Measure of efficiency](#org87c551a)
    1.  [Growth Rate](#orge44810c)
    2.  [RAM Model of finding Growth rate](#org5a1ff84)
        1.  [Definition](#org1f72cc2)
        2.  [Examples](#orgd96252d)
    3.  [Runtime Complexity](#org216f1f0)
        1.  [The worst case, denoted by O (Big-Oh)](#org3995f79)
        2.  [The best case, denoted by &omega; (Big-Omega)](#org582840d)
        3.  [The average case, denoted by &Theta; (Big-theta)](#org6d7fd07)
    4.  [Asymptotic Efficiency](#org2559a69)
        1.  [Asymptote](#org058a2e2)
        2.  [Asymptotic efficiency and runtime complexity](#org5aaa009)
        3.  [Asymptotically tight or loose](#org6a3717d)
        4.  [Some complexities to keep in mind](#org1bf575c)
5.  [How to find/prove a function&rsquo;s runtime complexity](#orge7346e0)
    1.  [Prove it&rsquo;s relation with any multiple of the growth rate](#orgd413406)
    2.  [Contradiction](#org398a94b)
    3.  [Comparing Orders of Growth using Limits](#orgf74f464)
        1.  [3 Principal Cases](#org769b17a)
        2.  [How to use this](#orgf890db1)
6.  [Recurrence Relations](#org6278d97)
7.  [Some basic functions before we get started](#orgbfddf63)
    1.  [Finding the sum of the digits of a number](#orgce132bc)
    2.  [Finding the sum of the digits of a number (recursive version)](#org72f76a6)
8.  [Understanding Arrays](#orgadc76de)
    1.  [1D](#org17917cb)
    2.  [2D](#orga7a65b5)
9.  [Basic Array Operations](#orgd18c6c7)
    1.  [Finding the largest Element](#orgbd7b3b0)
    2.  [Inserting an Element](#org03b5170)
    3.  [Deleting an Element](#orgc03cd0b)
10. [Searching for an element in an Array](#org0158a95)
    1.  [Linear Search](#org4d56a21)
    2.  [Binary Search](#org9a4f1de)
11. [Characteristics of Sorting Algorithms](#org8ef98e9)
    1.  [Stable](#org86a8804)
    2.  [In-place](#orge0e73d7)
12. [Sorting Algorithms](#org07fe521)
    1.  [Basic Sorting Algorithms](#org9303b2b)
        1.  [Bubble Sort](#org7dc48e5)
        2.  [Selection Sort](#orgdd7cf55)
        3.  [Insertion Sort](#org6e79745)
    2.  [Dynamic Sorting Algorithms](#org3e5a29a)
        1.  [Merge Sort](#org1241040)
        2.  [Quick Sort](#orgd18734f)
        3.  [Heap Sort](#orgc574ce4)



<a id="org7e5ca88"></a>

# Prelude

This page is my own explanation and interpretation of algorithms, what they are and how they work in general. The source of the main conceptualization is the book &ldquo;Introduction to The Design and Analysis of Algorithms&rdquo;, by Anany Levitin. The order of concepts presented is mildly influenced by my professor&rsquo;s classes at college. All the code has been written by me in Java.


<a id="org7c49400"></a>

# Algorithm


<a id="orgb34fc29"></a>

## What an Algorithm is

Simply put, an algorithm is a series of steps to solve a problem. But a much more formal definition of the term, would have these key points checked: hrr

-   0 or more inputs
-   1 or more outputs
-   The number of steps must be finite
-   The steps must be unambigous

In turn, an algorithm must definitely solve a problem.


<a id="org009c0e1"></a>

## Specification of an Algorithm

1.  Name of the Algorithm
2.  List of inputs/ arguments
3.  Initial Condition
4.  Final Condition


<a id="orgbbf255b"></a>

## Correctness of an algorithm

For a given specification, an algorithm is correct if it

1.  Stops
2.  Returns correct output
3.  Can prove a relation between the input and output


<a id="orgdf64742"></a>

# What a pseudocode is

Algorithms are generally written in plain English, while pseudocodes convey the same sequence of steps using common programming syntax.
Here are some constructs in pseudocode:

-   Words like `for`, `if`, `while`, `return`, etc. are common to most programming languages. Hence these are adopted here too.
-   For assignment, we use $\Leftarrow $ instead of =.
-   For checking equality, we use `=` instead of `==`.
-   In loops, we use the word `do` at the end.
-   In conditions, we use the word `then`.

Example 1.

    for(i <- 1 to 10), do:
        A[i] <- A[i] + 5

Example 2.

    if(x = 1), then:
        function_name(parameter1, parameter2)

Example 3.

    return value


<a id="org87c551a"></a>

# Measure of efficiency


<a id="orge44810c"></a>

## Growth Rate

-   **Runtime-complexity** is an abstract measure of power/time required to execute an algorithm. We will revisit this shortly.
-   Any sort of real-life parameters would vary across different systems and environments. For example, if a system &rsquo;A&rsquo; sorts 10,000 numbers in 2 seconds, and system &rsquo;B&rsquo; sorts the same 10,000 numbers in 1.5 seconds, you can&rsquo;t conclude that system &rsquo;B&rsquo; is more efficient than system &rsquo;A&rsquo;.
-   The reason for this is that we know nothing about their system specifications, and whether they&rsquo;re doing this in the same system, under the same environment.
-   This is why an abstract measure of power/time required,
-   The **growth rate** of an algorithm, denoted by $ g(n)$, is a function of the size of the input given to the algorithm, which tells us how the space requirements or the running time increases as the size of the input increases.
-   Here are some examples:
    1.  Statements like `print()` has $ g(n) = 1 $ because they don&rsquo;t depend on input data.
    2.  Loops have $ g(n) = n $, because the input to the loops are the number of iterations it should perform.
        eg. `for(int i=0 ; i< *n* ; i++)`
    3.  Nested loops generally have non-linear complexity. If the outer loop runs $n$ times and the inner loop runs $m$ times, then $ g(m,n) = mn $.
-   To compare different algorithms, we use a set of growth rates for each algorithm.


<a id="org5a1ff84"></a>

## RAM Model of finding Growth rate


<a id="org1f72cc2"></a>

### Definition

-   The **Random Access Machine** Model defines the growth rate to be the number of &ldquo;primitive operations/computations&rdquo; needed to solve the algorithm.
-   Here are the things which count as a primitive operation:
    1.  One Assignment `<-`
    2.  Indexing an element in an array `A[i]`
    3.  One arithmetic/logical operation `+`, `-` , `/`, `*`, `<`, `>`, `=`
    4.  One `return` statement.
-   One primitive operation is considered one unit time i.e. $ g(n) = 1 $


<a id="orgd96252d"></a>

### Examples

1.  Example 1

        S1: curMax ← A[0]
        S2: i← 1
        S3: while i <= (n-1) do
        S4:     if curMax < A[i] then
        S5:         curMax ← A[i]
        S6:     i ← i+1;
        S7: return curmax
    
    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
    
    
    <colgroup>
    <col  class="org-left" />
    
    <col  class="org-left" />
    
    <col  class="org-left" />
    
    <col  class="org-left" />
    </colgroup>
    <thead>
    <tr>
    <th scope="col" class="org-left">Statement</th>
    <th scope="col" class="org-left">Primitive Operation(s)</th>
    <th scope="col" class="org-left">Time</th>
    <th scope="col" class="org-left">Explanation</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td class="org-left">S1</td>
    <td class="org-left"><code>&lt;-</code> , <code>A[0]</code></td>
    <td class="org-left">2</td>
    <td class="org-left">Assignment, Indexing</td>
    </tr>
    
    <tr>
    <td class="org-left">S2</td>
    <td class="org-left"><code>&lt;-</code></td>
    <td class="org-left">1</td>
    <td class="org-left">Assignment</td>
    </tr>
    
    <tr>
    <td class="org-left">S3</td>
    <td class="org-left"><code>&lt;=</code> , <code>n-1</code></td>
    <td class="org-left">2n</td>
    <td class="org-left">Logical, Arithmetic done n times</td>
    </tr>
    
    <tr>
    <td class="org-left">S4</td>
    <td class="org-left"><code>&lt;</code> ,  <code>A[i]</code></td>
    <td class="org-left">2(n-1)</td>
    <td class="org-left">Logical, Indexing done (n-1) times</td>
    </tr>
    
    <tr>
    <td class="org-left">S5</td>
    <td class="org-left"><code>&lt;-</code> , <code>A[i]</code></td>
    <td class="org-left">0 to 2(n-1)</td>
    <td class="org-left">Assigment, Indexing: Best Case to Worst Case</td>
    </tr>
    
    <tr>
    <td class="org-left">S6</td>
    <td class="org-left"><code>&lt;-</code> , <code>i+1</code></td>
    <td class="org-left">2(n-1)</td>
    <td class="org-left">Assignment, Arithmetic done (n-1) times</td>
    </tr>
    
    <tr>
    <td class="org-left">S7</td>
    <td class="org-left"><code>return</code></td>
    <td class="org-left">1</td>
    <td class="org-left">Return</td>
    </tr>
    </tbody>
    </table>
    
    -   Time taken for Best Case: $g(n) = 6n$
    -   Time taken for Worst Case: $g(n) = 8n-2$

2.  Example 2

        def main():
            a=5
            b=6
            c=10
            for i in range(n):
                for j in range(n):
                    x = i*i
                    y = j*j
                    z = i*j
                for k in range(n):
                    w = a*k + 45
                    v = b*b
                d = 33
        main()
    
    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
    
    
    <colgroup>
    <col  class="org-left" />
    
    <col  class="org-left" />
    
    <col  class="org-left" />
    
    <col  class="org-left" />
    </colgroup>
    <thead>
    <tr>
    <th scope="col" class="org-left">Statement</th>
    <th scope="col" class="org-left">Primitive Operation(s)</th>
    <th scope="col" class="org-left">Time</th>
    <th scope="col" class="org-left">Explanation</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td class="org-left">S1</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left"><code>def main</code> is just a function definition</td>
    </tr>
    
    <tr>
    <td class="org-left">S2</td>
    <td class="org-left"><code>=</code></td>
    <td class="org-left">1</td>
    <td class="org-left">Assignment</td>
    </tr>
    
    <tr>
    <td class="org-left">S3</td>
    <td class="org-left"><code>=</code></td>
    <td class="org-left">1</td>
    <td class="org-left">Assignment</td>
    </tr>
    
    <tr>
    <td class="org-left">S4</td>
    <td class="org-left"><code>=</code></td>
    <td class="org-left">1</td>
    <td class="org-left">Assignment</td>
    </tr>
    
    <tr>
    <td class="org-left">S5</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left"><code>for i in range(n)</code> is just a loop definition</td>
    </tr>
    
    <tr>
    <td class="org-left">S6</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left"><code>for j in range(n)</code> is just a loop definition</td>
    </tr>
    
    <tr>
    <td class="org-left">S7</td>
    <td class="org-left"><code>=</code>, <code>*</code></td>
    <td class="org-left">2n<sup>2</sup></td>
    <td class="org-left">Assignment, Arithmetic happening n<sup>2</sup> times</td>
    </tr>
    
    <tr>
    <td class="org-left">S8</td>
    <td class="org-left"><code>=</code>, <code>*</code></td>
    <td class="org-left">2n<sup>2</sup></td>
    <td class="org-left">Assignment, Arithmetic happening n<sup>2</sup> times</td>
    </tr>
    
    <tr>
    <td class="org-left">S9</td>
    <td class="org-left"><code>=</code>, <code>*</code></td>
    <td class="org-left">2n<sup>2</sup></td>
    <td class="org-left">Assignment, Arithmetic happening n<sup>2</sup> times</td>
    </tr>
    
    <tr>
    <td class="org-left">S10</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left"><code>for k in range(n)</code> is just a loop definition</td>
    </tr>
    
    <tr>
    <td class="org-left">S11</td>
    <td class="org-left"><code>=</code>, <code>*</code>, <code>+</code></td>
    <td class="org-left">3n<sup>2</sup></td>
    <td class="org-left">Assignment, Arithmetic, Arithmetic happening n<sup>2</sup> times</td>
    </tr>
    
    <tr>
    <td class="org-left">S12</td>
    <td class="org-left"><code>=</code>, <code>*</code></td>
    <td class="org-left">2n<sup>2</sup></td>
    <td class="org-left">Assignment, Arithmetic happening n<sup>2</sup> times</td>
    </tr>
    
    <tr>
    <td class="org-left">S13</td>
    <td class="org-left"><code>=</code></td>
    <td class="org-left">n</td>
    <td class="org-left">Assignment happening n<sup>2</sup> times</td>
    </tr>
    
    <tr>
    <td class="org-left">S14</td>
    <td class="org-left"><code>main()</code></td>
    <td class="org-left">1</td>
    <td class="org-left">Function Call</td>
    </tr>
    </tbody>
    </table>
    
    Time taken: $g(n) = 11n^{2} + 4$

3.  Example 3

        void g(int n){
            for(int i=0; i<n; ++i)
                for(int j=0; j<=i; ++j)
                    f();
        }
    
    We&rsquo;ll drop the constants because we&rsquo;re only concered about how the runtime is related to `n`.
    
    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
    
    
    <colgroup>
    <col  class="org-left" />
    
    <col  class="org-left" />
    
    <col  class="org-left" />
    
    <col  class="org-left" />
    </colgroup>
    <thead>
    <tr>
    <th scope="col" class="org-left">Statement</th>
    <th scope="col" class="org-left">Primitive Operation(s)</th>
    <th scope="col" class="org-left">Time</th>
    <th scope="col" class="org-left">Explanation</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td class="org-left">S1</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">Function definition</td>
    </tr>
    
    <tr>
    <td class="org-left">S2</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">Loop definition</td>
    </tr>
    
    <tr>
    <td class="org-left">S3</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">Loop definition</td>
    </tr>
    
    <tr>
    <td class="org-left">S4</td>
    <td class="org-left"><code>f()</code></td>
    <td class="org-left"><code>(1+2+3+4+...+n)</code> * runtime of <code>f()</code></td>
    <td class="org-left">Loop&rsquo;s counter variable is dependent on <code>n</code></td>
    </tr>
    </tbody>
    </table>
    
    -   On working through the program&rsquo;s flow:
        -   **Iteration 1** of the outerloop:
            `f()` runs once, because `(j<=i)` is satisfied (`j=0`)
        -   **Iteration 2** of the outerloop:
            `f()` runs twice (`j=0`, `j=1`)
        -   **Iteration 3** of the outerloop:
            `f()` runs thrice (`j=0`, `j=1`, `j=2`)
        -   &#x2026;
        -   **Iteration n** of the outerloop:
            `f()` runs n times
    
    -   So, the runtime is (`1+2+3+...+n`)  = $ \frac{n(n+1)}{2}$ \* runtime of $f()$

4.  Example 4

        
        function isPrime(n) {
            for (i = 2; i <= sqrt(n); ++i){
                if (n % i == 0){
                    return false;
                }
            }
            return true;
        }
    
    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
    
    
    <colgroup>
    <col  class="org-left" />
    
    <col  class="org-left" />
    
    <col  class="org-left" />
    
    <col  class="org-left" />
    </colgroup>
    <thead>
    <tr>
    <th scope="col" class="org-left">Statement</th>
    <th scope="col" class="org-left">Primitive Operation(s)</th>
    <th scope="col" class="org-left">Time</th>
    <th scope="col" class="org-left">Explanation</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td class="org-left">S1</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">function definition</td>
    </tr>
    
    <tr>
    <td class="org-left">S2</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">loop definition</td>
    </tr>
    
    <tr>
    <td class="org-left">S3</td>
    <td class="org-left"><code>%</code>, <code>==</code></td>
    <td class="org-left">2√(n-2)</td>
    <td class="org-left">Whatever is inside the <code>if</code> block may/may not be executed 2√(n-2) times, but the condition is definitely being checked that many times</td>
    </tr>
    </tbody>
    </table>
    
    -   So the runtime is $\sqrt{n}$

5.  Example 5

        
        int a = 0, i = N;
        while (i > 0){
            a += i;
            i /= 2;
        }
    
    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
    
    
    <colgroup>
    <col  class="org-left" />
    
    <col  class="org-left" />
    
    <col  class="org-right" />
    
    <col  class="org-left" />
    </colgroup>
    <thead>
    <tr>
    <th scope="col" class="org-left">Statement</th>
    <th scope="col" class="org-left">Primitive Operation(s)</th>
    <th scope="col" class="org-right">Time</th>
    <th scope="col" class="org-left">Explanation</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td class="org-left">S1</td>
    <td class="org-left"><code>=</code>, <code>=</code></td>
    <td class="org-right">2</td>
    <td class="org-left">Assignment, Assignment</td>
    </tr>
    
    <tr>
    <td class="org-left">S2</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-right">&#xa0;</td>
    <td class="org-left">loop initialization</td>
    </tr>
    
    <tr>
    <td class="org-left">S3</td>
    <td class="org-left"><code>=</code>, <code>+</code></td>
    <td class="org-right">2(log<sub>2</sub>(n))</td>
    <td class="org-left">Assignment, Arithmetic running \(log_{2}(n)\) times</td>
    </tr>
    </tbody>
    </table>
    
    -   On looking at `S4`, we find that the loop counter variable keeps halving.
    -   let&rsquo;s work through the program flow, assuming $n=16$. Hence `i=16` too
        -   **Iteration 1**:
            `a+=16` happens, and now `i = 8`
        -   **Iteration 2**:
            `a+=8` happens, and now `i = 4`
        -   **Iteration 3**:
            `a+=4` happens, and now `i = 2`
        -   **Iteration 4**:
            `a+=2` happens, and now `i = 1`
        -   **Iteration 5**:
            `a+=1` happens, and now `i = 0` (`i` is an integer, so 0.5 is basically 0)
    
    -   $n = 16$ meant 5 iterations
        $5 = log_{2}(16) + 1$
    
    -   Hence, if a loop as a counter variable dividing itself by $k$, then the number of iterations is $log_{k}(n)$.

6.  Example 6

        
        //Determines the value of the largest element in a given array
        //Input: An array A[0..n − 1]of real numbers
        //Output: The value of the largest element in A
        
        maxval <- A[0]
        for i <- 1 to (n−1) do
                if A[i]>maxval then
                        maxval <- A[i]
        return maxval
    
    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
    
    
    <colgroup>
    <col  class="org-left" />
    
    <col  class="org-left" />
    
    <col  class="org-right" />
    
    <col  class="org-left" />
    </colgroup>
    <thead>
    <tr>
    <th scope="col" class="org-left">Statement</th>
    <th scope="col" class="org-left">Primitive Operation(s)</th>
    <th scope="col" class="org-right">Time</th>
    <th scope="col" class="org-left">Explanation</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td class="org-left">S1</td>
    <td class="org-left"><code>&lt;-</code>  , <code>A[0]</code></td>
    <td class="org-right">2</td>
    <td class="org-left">Assignment, Indexing</td>
    </tr>
    
    <tr>
    <td class="org-left">S2</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-right">&#xa0;</td>
    <td class="org-left">Loop Definition</td>
    </tr>
    
    <tr>
    <td class="org-left">S3</td>
    <td class="org-left"><code>A[i]</code>, <code>&gt;</code></td>
    <td class="org-right">2(n-2)</td>
    <td class="org-left">Indexing, Logical happening n times</td>
    </tr>
    
    <tr>
    <td class="org-left">S4</td>
    <td class="org-left"><code>&lt;-</code>, <code>A[i]</code></td>
    <td class="org-right">0 to 2(n-2)</td>
    <td class="org-left">Assignment, Indexing, depends on the condition</td>
    </tr>
    
    <tr>
    <td class="org-left">S5</td>
    <td class="org-left"><code>return</code></td>
    <td class="org-right">1</td>
    <td class="org-left">return statement</td>
    </tr>
    </tbody>
    </table>
    
    -   Best Case = $ 2n-1 $
    -   Worst Case = $ 4n-5 $
    -   Overall time complexity = $ O(n) $


<a id="org216f1f0"></a>

## Runtime Complexity

-   Runtime-complexity is where we find the set of growth rates for 3 different scenarios:


<a id="org3995f79"></a>

### The worst case, denoted by O (Big-Oh)

-   Denoted by $ O(g(n)) $
-   It&rsquo;s a set that contains any multiple of the growth rate of the worst scenario possible, and the growth rates of all the cases better than this.
-   So when we say an algorithm has a complexity of $ O(g(n)) $ , it means that it&rsquo;s order of growth is definitely less than any multiple of $g(n)$.
-   Some examples:
    1.  $ n \subseteq O(n^{2}) $.
    2.  $ \frac{1}{2} n (n-1) \subseteq O(n^{2}) $
    3.  $ an^{2} \subseteq O(n^{2}) $
    4.  $ an^{3} + bn^{2} + cn + d \subseteq O(n^{3})$
-   The last example might seem a little strange because $an^{3} + bn^{2} + cn + d$  seems like a superset to $n^{3}$, not a subset.

The reason for this is because $n$ is a very large value. At such large values, the contribution of $ n^{3} $ is way more significant than the other terms, and at that point, it&rsquo;s pretty much equal to $n^{2}$.

-   Say we have $ 5n^{3} + 2n^{2} $. Let $ f1(n) = 5n^{3}$ (the picture on the left) and $ f2(n) = 2n^2 $ (the picture on the right).
    
    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
    
    
    <colgroup>
    <col  class="org-left" />
    
    <col  class="org-left" />
    </colgroup>
    <tbody>
    <tr>
    <td class="org-left"><img src="file:///img1.png" alt="img1.png" /></td>
    <td class="org-left"><img src="file:///img2.png" alt="img2.png" /></td>
    </tr>
    </tbody>
    </table>

-   $g(n) = f1(n) + f2(n)$
    
    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
    
    
    <colgroup>
    <col  class="org-left" />
    </colgroup>
    <tbody>
    <tr>
    <td class="org-left"><img src="file:///img3.png" alt="img3.png" /></td>
    </tr>
    </tbody>
    </table>
    
    At very large values of $n$ , $g(n)$ pretty much converges with $f1(n)$.
    
    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
    
    
    <colgroup>
    <col  class="org-left" />
    </colgroup>
    <tbody>
    <tr>
    <td class="org-left"><img src="file:///img4.png" alt="img4.png" /></td>
    </tr>
    </tbody>
    </table>
-   Here&rsquo;s some more examples, involving a little bit of calculation:
    1.  $  (n^{2} + 1 )^{10} \subseteq O(n^{20}) $
    2.  $ 2^{nlog_{2} (n+2)} + (n+2)^{2}log(n) $   
        = $ (n+2)^{n} + (n+2)log(n) $   
        = $ \subseteq O(n^{n}) $


<a id="org582840d"></a>

### The best case, denoted by &omega; (Big-Omega)

-   Denoted by $ \omega(g(n)) $
-   It&rsquo;s a set that contains any multiple of the growth rate of the best scenario possible, and the growth rates of all the cases worse than this
-   So when we say an algorithm has a complexity $ \omega(g(n)) $, it means that the order of growth is definitely more than any multiple of $g(n)$.
-   Some examples:
    1.  $ n^{3} \subseteq \omega(n^{2}) $
    2.  $ \frac{1}{2} n (n-1) \subseteq O(n^{}) $


<a id="org6d7fd07"></a>

### The average case, denoted by &Theta; (Big-theta)


<a id="org2559a69"></a>

## Asymptotic Efficiency


<a id="org058a2e2"></a>

### Asymptote

-   An asymptote is the tangent of a curve as it approaches $\infty$ . A curve will generally have a fixed behaviour at such large inputs.
-   So when we say one growth function is **asymptotically more efficient** than another, it simply means that **its asymptote has a smaller slope.**


<a id="org5aaa009"></a>

### Asymptotic efficiency and runtime complexity

-   As we&rsquo;ve seen, runtime complexites are sets of growth rates, which consist of one benchmark growth rate (the worst one, the best one, or the average one).
-   In case of runtime complexity, the whole point of taking the set of growth rates, was to compare growth rates. Given a growth rate, you try to fit them in a set. This set can be compared with other sets, and hence come to a conclusion on order of growth.
-   In case of asymptotic efficiency, we compare slopes of asymptotes (tangent of a curve near infinity) of growth rates. All in all, we&rsquo;re doing the same comparison in both asymptotic efficiency and runtime complexity.
-   Runtime complexity uses the set theory, and gives us a more analytical method to get to conclusions, while asymptotic efficiency helps us visualize it on a graph ( $n$ vs $O(n)$ ).


<a id="org6a3717d"></a>

### Asymptotically tight or loose

-   When we say some growth rate is in $ O(g(n)) $, it means that the given growth rate is no more than $g(n)$. So $ O(g(n)) $ is an upper bound.
-   Similarly, when we say some growth rate is in $ \omega(g(n)) $, it means that the given growth rate is definitely more than $ g(n) $. So $ \omega(g(n)) $ is a lower bound.
-   Both of these bounds are at two far-apart ends of the spectrum. Hence we call them **asymptotically loose bounds**.
-   If a given growth rate is in both $ O(g(n)) $ and $ \omega(g(n)) $ , then it means the upper bound and lower bound are the same thing. Here, the growth rate is simply said to be in $ \theta(g(n)) $.


<a id="org1bf575c"></a>

### Some complexities to keep in mind

1.  Common growth rates, arranged in order

    -   $ O(1) < O( log(n) ) < O( n^{x} ) < O( x^{n} ) < O( n!) $ for any value of $x$.
    
    1.  Example 1
    
        -   Find the overall growth rate of $ log(n^{10}) + \sqrt{n}$
        -   Answer: $  g(n) = \sqrt{n}  $
        -   This is because $ \sqrt{n} = n^{0.5} $. This has a higher growth rate than $ log(n) $.
    
    2.  Example 2
    
        -   Compare growth rates of $nlog(n)$ and $ \sqrt{n} $
        -   Answer: $ nlog(n) \subseteq \omega(\sqrt{n}) $
        -   Explanation: $n$ is definitely higher than $\sqrt{n}$, but the answer becomes uncertain because of $log(n)$ being multiplied to it.
            $log(n)$ is definitely greater than $1$ at high values of $n$, and hence $log(n)$ won&rsquo;t scale down $n$. Hence $nlog(n)$ is higher than $\sqrt{n}$.

2.  Stirling&rsquo;s approximation of n!

    -   $ n! \approx \sqrt{2 \pi n} * (\frac{n}{e})^{n} $, at very large values of n.
    -   On taking log on both sides, $ log(n!) \approx log(\sqrt{2 \pi n} * (\frac{n}{e})^{n} ) $
    -   This simplifies to $ log(n!) \approx nlog(n) $

3.  Growth rates of Logarithmic functions don&rsquo;t depend on base

    -   For instance, $ log_{2}(n) $ and $ log_{8}(n) $, are pretty much the same in terms of complexity.


<a id="orge7346e0"></a>

# How to find/prove a function&rsquo;s runtime complexity


<a id="orgd413406"></a>

## Prove it&rsquo;s relation with any multiple of the growth rate

A function $t(n)$ is said to be in $O(g(n))$ , if $ t(n) \leq c*g(n)$ for all $n \geq n_{0}$.
   So if you can somehow find a value for $c$ and $n_{0}$ satisfying this condition, you can prove a function&rsquo;s runtime complexity.
   Example:

-   $3n^{3} + 20n^{2} + 5 \leq cn^{3}$
-   The easiest way to find $c$ would be to assume every single term in the left hand side of the inequality, to be an $n^{3}$ term.
-   $ 3n^{3} + 20n^{3} + 5n^{3} \leq cn^{3} $
-   $28n^{3} \leq cn^{3}$
-   Let $n_{0} = 1$ be a value satisfying this inequality (hit and trial). On plugging the value of $n_{0}$ in $n$:
-   $c = 28$


<a id="org398a94b"></a>

## Contradiction

Example: Prove that $ n^{2} $ is not in $ O(n) $.

-   Let&rsquo;s assume $n^{2}$ **is** in $ O(n) $.
-   $ n^{2} \leq c*n $
-   Dividing both sides by $n$, we get $ n \leq c $
-   This can never be true as $c$ is some finite constant and $n$ is a boundlessly large value.
-   $ \therefore n^{2} $ is not in $ O(n) $.


<a id="orgf74f464"></a>

## Comparing Orders of Growth using Limits


<a id="org769b17a"></a>

### 3 Principal Cases

-   $ \lim_{n\to\infty} \frac{t(n)}{g(n)}  =  0$ &rArr; $t(n)$ has a smaller growth rate than $g(n)$

-   $ \lim_{n\to\infty} \frac{t(n)}{g(n)}  =  c$ &rArr; $t(n)$ has a growth rate equal to $g(n)$

-   $ \lim_{n\to\infty} \frac{t(n)}{g(n)}  =  \infty$ &rArr; $t(n)$ has a larger growth rate than $g(n)$


<a id="orgf890db1"></a>

### How to use this

-   Firstly, this means you can use L&rsquo;Hopital&rsquo;s Rule:
    $ \lim_{x\to\infty } \frac{t(n)}{g(n)} =   \lim_{x\to\infty } \frac{t'(n)}{g'(n)}  $
    You do use this if $ \lim_{x\to\infty}   \frac{t(n)}{g(n)} = \frac{\infty}{\infty} $ or  $ \lim_{x\to\infty }\frac{t(n)}{g(n)} = \frac{0}{0} $


<a id="org6278d97"></a>

# Recurrence Relations


<a id="orgbfddf63"></a>

# Some basic functions before we get started


<a id="orgce132bc"></a>

## Finding the sum of the digits of a number

    public class Main {
        public static int sum(int n){
            int sum = 0 , i=n;
            for( ; i>0 ; sum+=i%10, i/=10);
            return sum;
        }
    
        public static void main(String[] args){
            System.out.println("Sum of the digits of 729 = " + sum(729));
        }
    }


<a id="org72f76a6"></a>

## Finding the sum of the digits of a number (recursive version)

    public class Main {
        public static int sum(int n){
            if(n<10)
                return n;
            else
                return n%10 + sum(n/10);
        }
    
        public static void main(String[] args){
            System.out.println("Sum of the digits of 729 = " + sum(729));
        }
    }


<a id="orgadc76de"></a>

# Understanding Arrays


<a id="org17917cb"></a>

## 1D

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-right" />

<col  class="org-right" />

<col  class="org-right" />

<col  class="org-right" />

<col  class="org-right" />

<col  class="org-right" />

<col  class="org-right" />

<col  class="org-right" />

<col  class="org-right" />

<col  class="org-right" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-right">0</th>
<th scope="col" class="org-right">1</th>
<th scope="col" class="org-right">2</th>
<th scope="col" class="org-right">3</th>
<th scope="col" class="org-right">4</th>
<th scope="col" class="org-right">5</th>
<th scope="col" class="org-right">6</th>
<th scope="col" class="org-right">7</th>
<th scope="col" class="org-right">8</th>
<th scope="col" class="org-right">9</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-right">&#xa0;</td>
<td class="org-right">&#xa0;</td>
<td class="org-right">&#xa0;</td>
<td class="org-right">&#xa0;</td>
<td class="org-right">&#xa0;</td>
<td class="org-right">&#xa0;</td>
<td class="org-right">&#xa0;</td>
<td class="org-right">&#xa0;</td>
<td class="org-right">&#xa0;</td>
<td class="org-right">&#xa0;</td>
</tr>

<tr>
<td class="org-right">&lt;&#x2013;&gt;</td>
<td class="org-right">&lt;&#x2013;&gt;</td>
<td class="org-right">&lt;&#x2013;&gt;</td>
<td class="org-right">&lt;&#x2013;&gt;</td>
<td class="org-right">&lt;&#x2013;&gt;</td>
<td class="org-right">&lt;&#x2013;&gt;</td>
<td class="org-right">&lt;&#x2013;&gt;</td>
<td class="org-right">&lt;&#x2013;&gt;</td>
<td class="org-right">&lt;&#x2013;&gt;</td>
<td class="org-right">&lt;&#x2013;&gt;</td>
</tr>

<tr>
<td class="org-right">size</td>
<td class="org-right">size</td>
<td class="org-right">size</td>
<td class="org-right">size</td>
<td class="org-right">size</td>
<td class="org-right">size</td>
<td class="org-right">size</td>
<td class="org-right">size</td>
<td class="org-right">size</td>
<td class="org-right">size</td>
</tr>
</tbody>
</table>

Address of A[i] = (Base Address of A) + i \* size


<a id="orga7a65b5"></a>

## 2D

This is how an array A[m][n] looks:
(numbering has been done differently because we need the count of numbers, and not the indices this time)

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<thead>
<tr>
<th scope="col" class="org-left">1</th>
<th scope="col" class="org-left">2</th>
<th scope="col" class="org-left">3</th>
<th scope="col" class="org-left">&#x2026;</th>
<th scope="col" class="org-left">n</th>
</tr>
</thead>
<tbody>
<tr>
<td class="org-left">n+1</td>
<td class="org-left">n+2</td>
<td class="org-left">n+3</td>
<td class="org-left">&#x2026;</td>
<td class="org-left">2n</td>
</tr>
</tbody>
<tbody>
<tr>
<td class="org-left">2n+1</td>
<td class="org-left">2n+2</td>
<td class="org-left">2n+3</td>
<td class="org-left">&#x2026;</td>
<td class="org-left">:</td>
</tr>
</tbody>
<tbody>
<tr>
<td class="org-left">:</td>
<td class="org-left">:</td>
<td class="org-left">:</td>
<td class="org-left">:</td>
<td class="org-left">:</td>
</tr>
</tbody>
<tbody>
<tr>
<td class="org-left">:</td>
<td class="org-left">:</td>
<td class="org-left">:</td>
<td class="org-left">:</td>
<td class="org-left">:</td>
</tr>
</tbody>
<tbody>
<tr>
<td class="org-left">1</td>
<td class="org-left">2</td>
<td class="org-left">3</td>
<td class="org-left">&#x2026;</td>
<td class="org-left">mn</td>
</tr>
</tbody>
</table>

And this is how it&rsquo;s stored in memory: (row-major form)

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="org-right" />

<col  class="org-right" />

<col  class="org-right" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />

<col  class="org-left" />
</colgroup>
<tbody>
<tr>
<td class="org-right">1</td>
<td class="org-right">2</td>
<td class="org-right">3</td>
<td class="org-left">&#x2026;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left"><b>n</b></td>
<td class="org-left">&#xa0;</td>
<td class="org-left">n+1</td>
<td class="org-left">n+2</td>
<td class="org-left">n+3</td>
<td class="org-left">&#x2026;</td>
<td class="org-left">&#xa0;</td>
<td class="org-left"><b>2n</b></td>
<td class="org-left">&#xa0;</td>
<td class="org-left">2n+1</td>
<td class="org-left">2n+2</td>
<td class="org-left">2n+3</td>
<td class="org-left">&#x2026;..</td>
<td class="org-left">&#xa0;</td>
<td class="org-left"><b>mn</b></td>
<td class="org-left">&#xa0;</td>
</tr>
</tbody>
</table>

Address of A[r][c]
= (Base Address) + r\*n\*size + c\*size

&ldquo;r\*n\*size&rdquo; is the number of rows to skip


<a id="orgd18c6c7"></a>

# Basic Array Operations


<a id="orgbd7b3b0"></a>

## Finding the largest Element

    public class Main {
        public static int largest(int[] x){
            int largest = x[0];
            for(int i=1 ; i<x.length ; i++)
                if(largest < x[i])
                    largest = x[i];
            return largest;
        }
    
        public static void main(String[] args){
            int[] x = new int[10];
            x[0] = 4; x[1] = 43 ; x[2] = 23;
            System.out.println("Largest Element: " + largest(x));
    
        }
    }


<a id="org03b5170"></a>

## Inserting an Element

    public class Main {
        public static void insert(int[] x, int pos, int key){
            for(int i= x.length-1 ; i>pos ; i--)
                x[i] = x[i-1];
            x[pos] = key;
        }
    
        public static void main(String[] args){
            int[] x = new int[10];
            x[0] = 4; x[1] = 43 ; x[2] = 23;
            insert(x, 1, 999);
            for(int i=0 ; i<x.length ; i++)
                System.out.print(x[i] + " ");
        }
    }


<a id="orgc03cd0b"></a>

## Deleting an Element

    public class Main {
        public static void delete(int[] x, int pos){
            for(int i=pos ; i<x.length-1 ; i++)
                x[i] = x[i+1];
        }
    
        public static void main(String[] args){
            int[] x = new int[10];
            x[0] = 4; x[1] = 43 ; x[2] = 23;
            delete(x, 1);
            for(int i=0 ; i<x.length ; i++)
                System.out.print(x[i] + " ");
        }
    }


<a id="org0158a95"></a>

# Searching for an element in an Array


<a id="org4d56a21"></a>

## Linear Search

    public class Main {
        public static int linearSearch(int[] x, int key){
            for(int i=0 ; i<x.length ; i++)
                if(key==x[i])
                    return i;
            return -1;
        }
    
        public static void main(String[] args){
            int[] x = {12, 24, 35, 343, 99};
            int key = 35, index = linearSearch(x, key);
            if(index>-1)
                System.out.println("Key found at index " + index);
            else
                System.out.println("Element not found in array.");
        }
    
    }


<a id="org9a4f1de"></a>

## Binary Search

    public class Main {
        public static int binarySearch(int[] x, int key){
            int start = 0, end = x.length-1;
            int mid = (start + end)/2;
            while(start<end){
                if(key>x[mid])
                    start = ++mid;
                else if(key<x[mid])
                    end = --mid;
                else
                    return mid;
            }
            return -1;
    
        }
    
        public static void main(String[] args){
            int[] x = {12, 24, 35, 343, 99};
            int key = 35, index = binarySearch(x, key);
            if(index>-1)
                System.out.println("Key found at index " + index);
            else
                System.out.println("Element not found in array.");
        }
    }


<a id="org8ef98e9"></a>

# Characteristics of Sorting Algorithms


<a id="org86a8804"></a>

## Stable

-   Preserves the relative ordering of elements with equal values
-   For example
    -   Consider $ [50_{t=1}, 40, 30, 50_{t=2}, 10] $ to be the array before sorting.
    -   $ [10, 20, 30, 40, 50_{t=1}, 50_{t=2}] $ is the array after sorting.
    -   Initially, $50_{t=1}$ was before $50_{t=2}$, and even after sorting, $50_{t=1}$ is before $50_{t=2}$. This means that the relative order is preserved


<a id="orge0e73d7"></a>

## In-place

-   All the operations are done in the space allocated to the original array
-   In other words, no additional arrays are used for sorting


<a id="org07fe521"></a>

# Sorting Algorithms


<a id="org9303b2b"></a>

## Basic Sorting Algorithms


<a id="org7dc48e5"></a>

### Bubble Sort

1.  Code

        public class Main {
            public static void bubbleSort(int[] x){
                int i, j, temp;
                for(i=0 ; i<x.length-1 ; i++)
                    for(j=0 ; j<x.length-1-i ; j++)
                        if(x[j]>x[j+1]){
                            temp = x[j];
                            x[j] = x[j+1];
                            x[j+1] = temp;
                        }
            }
        
            public static void main(String[] args){
                int[] x = {12, 25, 2, 343, 99};
                bubbleSort(x);
                for(int i=0 ; i<x.length ; i++)
                    System.out.print(x[i] + " ");
            }
        }

2.  Worst Case Complexity

    Take the worst case scenario: x = [50, 40, 30 , 20, 10]
    
    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
    
    
    <colgroup>
    <col  class="org-left" />
    
    <col  class="org-right" />
    
    <col  class="org-right" />
    
    <col  class="org-right" />
    
    <col  class="org-right" />
    
    <col  class="org-right" />
    </colgroup>
    <tbody>
    <tr>
    <td class="org-left"><b>Pass1</b></td>
    <td class="org-right"><b>50</b></td>
    <td class="org-right"><b>40</b></td>
    <td class="org-right"><b>30</b></td>
    <td class="org-right"><b>20</b></td>
    <td class="org-right"><b>10</b></td>
    </tr>
    
    <tr>
    <td class="org-left">50&lt;-&gt;40</td>
    <td class="org-right">40</td>
    <td class="org-right">50</td>
    <td class="org-right">30</td>
    <td class="org-right">20</td>
    <td class="org-right">10</td>
    </tr>
    
    <tr>
    <td class="org-left">50&lt;-&gt;30</td>
    <td class="org-right">40</td>
    <td class="org-right">30</td>
    <td class="org-right">50</td>
    <td class="org-right">20</td>
    <td class="org-right">10</td>
    </tr>
    
    <tr>
    <td class="org-left">50&lt;-&gt;20</td>
    <td class="org-right">40</td>
    <td class="org-right">30</td>
    <td class="org-right">20</td>
    <td class="org-right">50</td>
    <td class="org-right">10</td>
    </tr>
    
    <tr>
    <td class="org-left">50&lt;-&gt;10</td>
    <td class="org-right">40</td>
    <td class="org-right">30</td>
    <td class="org-right">20</td>
    <td class="org-right">10</td>
    <td class="org-right">50</td>
    </tr>
    
    <tr>
    <td class="org-left"><b>Pass2</b></td>
    <td class="org-right"><b>40</b></td>
    <td class="org-right"><b>30</b></td>
    <td class="org-right"><b>20</b></td>
    <td class="org-right"><b>10</b></td>
    <td class="org-right"><b>50</b></td>
    </tr>
    
    <tr>
    <td class="org-left">40&lt;-&gt;30</td>
    <td class="org-right">30</td>
    <td class="org-right">40</td>
    <td class="org-right">20</td>
    <td class="org-right">10</td>
    <td class="org-right">50</td>
    </tr>
    
    <tr>
    <td class="org-left">40&lt;-&gt;20</td>
    <td class="org-right">30</td>
    <td class="org-right">20</td>
    <td class="org-right">40</td>
    <td class="org-right">10</td>
    <td class="org-right">50</td>
    </tr>
    
    <tr>
    <td class="org-left">40&lt;-&gt;10</td>
    <td class="org-right">30</td>
    <td class="org-right">20</td>
    <td class="org-right">10</td>
    <td class="org-right">40</td>
    <td class="org-right">50</td>
    </tr>
    
    <tr>
    <td class="org-left"><b>Pass3</b></td>
    <td class="org-right"><b>30</b></td>
    <td class="org-right"><b>20</b></td>
    <td class="org-right"><b>10</b></td>
    <td class="org-right"><b>40</b></td>
    <td class="org-right"><b>50</b></td>
    </tr>
    
    <tr>
    <td class="org-left">30&lt;-&gt;20</td>
    <td class="org-right">20</td>
    <td class="org-right">30</td>
    <td class="org-right">10</td>
    <td class="org-right">40</td>
    <td class="org-right">50</td>
    </tr>
    
    <tr>
    <td class="org-left">30&lt;-&gt;10</td>
    <td class="org-right">20</td>
    <td class="org-right">10</td>
    <td class="org-right">30</td>
    <td class="org-right">40</td>
    <td class="org-right">50</td>
    </tr>
    
    <tr>
    <td class="org-left"><b>Pass4</b></td>
    <td class="org-right"><b>20</b></td>
    <td class="org-right"><b>10</b></td>
    <td class="org-right"><b>30</b></td>
    <td class="org-right"><b>40</b></td>
    <td class="org-right"><b>50</b></td>
    </tr>
    
    <tr>
    <td class="org-left">20&lt;-&gt;10</td>
    <td class="org-right">10</td>
    <td class="org-right">20</td>
    <td class="org-right">30</td>
    <td class="org-right">40</td>
    <td class="org-right">50</td>
    </tr>
    </tbody>
    </table>
    
    -   Let the number of elements by $n$ (Here, $n=4$)
    -   Primitive Operation =
        
            
            
            temp = x[j];
            x[j] = x[j+1];
            x[j+1] = temp;
    
    -   Primitive Operation (swapping) happens for $ \textnormal{n-1} + \textnormal{n-2} + \textnormal{n-3} + ... + 1 $ times   
        = $ \frac{(n-1)(n)}{2} $ times ( $\because$ sum of first $n-1$ natural numbers)
    -   So overall complexity = $O(n^{2}) $

3.  Best Case Complexity

    The best case should occur when you already have a sorted array x = [10, 20, 30, 40, 50]
    
    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
    
    
    <colgroup>
    <col  class="org-left" />
    
    <col  class="org-left" />
    
    <col  class="org-left" />
    
    <col  class="org-left" />
    
    <col  class="org-left" />
    
    <col  class="org-left" />
    </colgroup>
    <tbody>
    <tr>
    <td class="org-left"><b>Pass1</b></td>
    <td class="org-left"><b>10</b></td>
    <td class="org-left"><b>20</b></td>
    <td class="org-left"><b>30</b></td>
    <td class="org-left"><b>40</b></td>
    <td class="org-left"><b>50</b></td>
    </tr>
    
    <tr>
    <td class="org-left"><b>Pass2</b></td>
    <td class="org-left"><b>10</b></td>
    <td class="org-left"><b>20</b></td>
    <td class="org-left"><b>30</b></td>
    <td class="org-left"><b>40</b></td>
    <td class="org-left"><b>50</b></td>
    </tr>
    
    <tr>
    <td class="org-left"><b>Pass3</b></td>
    <td class="org-left"><b>10</b></td>
    <td class="org-left"><b>20</b></td>
    <td class="org-left"><b>30</b></td>
    <td class="org-left"><b>40</b></td>
    <td class="org-left"><b>50</b></td>
    </tr>
    
    <tr>
    <td class="org-left"><b>Pass4</b></td>
    <td class="org-left"><b>10</b></td>
    <td class="org-left"><b>20</b></td>
    <td class="org-left"><b>30</b></td>
    <td class="org-left"><b>40</b></td>
    <td class="org-left"><b>50</b></td>
    </tr>
    </tbody>
    </table>
    
    -   Primitive Operation happens for $1+1+1+...$ times   
        = $n$ times
    -   Overall complexity = $ \omega(n) $


<a id="orgdd7cf55"></a>

### Selection Sort

1.  Worst Case Complexity

    <table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">
    
    
    <colgroup>
    <col  class="org-left" />
    
    <col  class="org-right" />
    
    <col  class="org-left" />
    
    <col  class="org-left" />
    
    <col  class="org-left" />
    
    <col  class="org-left" />
    </colgroup>
    <tbody>
    <tr>
    <td class="org-left"><b>Pass1</b></td>
    <td class="org-right"><b>50</b></td>
    <td class="org-left"><b>40</b></td>
    <td class="org-left"><b>30</b></td>
    <td class="org-left"><b>20</b></td>
    <td class="org-left"><b>10</b></td>
    </tr>
    
    <tr>
    <td class="org-left">min: <del>50</del> 40</td>
    <td class="org-right">50</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">&#xa0;</td>
    <td class="org-left">&#xa0;</td>
    </tr>
    </tbody>
    </table>


<a id="org6e79745"></a>

### Insertion Sort

    public class Main {
        public static void insertionSort(int[] x){
            int temp, i, j;
            for(i=0 ; i<x.length ; i++)
                for(j=0 ; j<i ; j++)
                    if(x[j]>x[i]){
                       temp = x[i];
                       x[i] = x[j];
                       x[j] = temp;
                    }
        }
    
        public static void main(String[] args){
            int[] x = {12, 25, 2, 343, 99};
            insertionSort(x);
            for(int i=0 ; i<x.length ; i++)
                System.out.print(x[i] + " ");
        }
    }


<a id="org3e5a29a"></a>

## Dynamic Sorting Algorithms


<a id="org1241040"></a>

### Merge Sort


<a id="orgd18734f"></a>

### Quick Sort

    public class Main {
        public static void quickSort(int[] x){
    
        }
    
        public static void main(String[] args){
            int[] x = {12, 25, 2, 343, 99};
            quickSort(x);
            for(int i=0 ; i<x.length ; i++)
                System.out.print(x[i] + " ");
        }
    }


<a id="orgc574ce4"></a>

### Heap Sort

1.  Array as a binary tree

    An array is converted to a binary tree as follows:
    
    -   Root node of the tree, is the element with index 0
    -   From there, if the node the element of index $i$:
        -   **Left child** = Element of index $2i+1$
        -   **Right child** = Element of index $2i+2$
        -   **Parent of that node** = Element of index $ \lfloor \frac{i}{2} \rfloor $
            
            ![img](https://media.geeksforgeeks.org/wp-content/cdn-uploads/binaryheap.png)
            Source: geeksforgeeks

2.  Some terminologies of Binary Trees

    1.  **Full Binary Tree**: A binary tree with the maximum number of nodes possible for a given height.
        -   If the height is $h$, then the number of nodes present in the full binary tree is $2^{h}-1$
        -   Eg. In the below example, $h=4$. Number of nodes = $2^{4}-1$ = $15$ nodes (Last node will have index $14$)
            
                
                              0
                           /    \
                        1          2
                      /  \       /   \
                    3     4     5     6
                  /  \  /  \   / \    / \
                7    8 9   10  11 12  13 14
    2.  **Complete Binary Tree**: Except the lowest level, all other levels are completely filled, and the nodes at the lowest level are as left aligned as possible.
        
        -   Eg.
            
                
                
                          0
                        /   \
                      1       2
                    /  \     /  \
                   3    4   5    6
                 /  \
                7    8
        
        In the lowest level, if there is no node to the left of any node, then it&rsquo;s not complete, because it&rsquo;s not left-aligned. Here&rsquo;s an example of a binary tree that&rsquo;s **not** a complete binary tree:
        
            
            
                   0
                 /   \
               1       2
             /  \     /  \
            3    4   5    6
               /  \
               7    8
    
    Here, there could have been a node to the left of node `7`, but it&rsquo;s vacant. Hence this is not a complete binary tree.

3.  Property of a Complete Binary Tree

    If the number of nodes in a complete binary tree is $n$, then the height of the tree is $log_{2}(n+1)$.

4.  Introduction to Heap

    1.  **Max Heap**: A complete binary tree where any node is larger than its descendents.
    
        
        
        
        
              30
             /  \
           25    20
          /  \   /  \
        15   10 5    8
    
    1.  **Min Heap**: A complete binary tree where any node is smaller than its descendents
    
             7
            / \
          12   15
         /  \  /  \
        18  30 25  40

