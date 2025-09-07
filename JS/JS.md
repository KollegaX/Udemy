# Compilation vs Interpretation vs JIT

## Compilation

-   Entire code is converted into machine code at once
-   Written to a binary file that can be executed by a computer

## Interpretation

-   Interpreter runs through the source code
-   Executes it line by line

## Just-In-Time (JIT) Compilation

-   Hybrid approach
-   Your code starts running right away (like interpreted code)
-   While running, the engine watches which parts of the code are used
    the most
-   It compiles those "hot" parts into fast machine code on the fly
-   So, JIT = "compile just in time when needed."

------------------------------------------------------------------------

## Key Differences

-   **Interpreted languages** (like classic JavaScript, Python) normally
    run line by line → quick startup, slower execution\
-   **Compiled languages** (like C, C++) are turned into machine code
    ahead of time → slower startup (compilation needed), but much faster
    execution\
-   **JIT compilation** is a hybrid: starts fast, and optimizes
    frequently used code into machine code during execution


## Javascript RUNTIME in Browsers
- JavaScript Engine - Without a Engine, there is no runtime
- Even with the Engine, its not enough because we need the WEB APIs (DOM, TIMERS, FETCH API, ...)
- WEB APIs = Functionalities provided to the engine, accessible on window object
- CALLBACK QUEUE (CLICK, TIMER, DATA) : EXAMPLE of 'click', which is callback function from DOM Event Listener

## CALL STACK :
- The 'Call Stack' is a data structure (a stack: last in, first out) that keeps track of which functions are running and where to return after each function finishes.


## JavaScript RUNTIME outside Browsers (node.js)
- pretty similar but without the WEB APIs, because it's the browser who is providing these APIs
- we have multiple C++ Bindings & Thread Pool
