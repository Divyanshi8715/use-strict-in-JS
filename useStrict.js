"use strict";

//without using "use strict" we r getting an output as 30.
//by using "use strict" er r getting an error add is not defined. After defining add by writing var keyword the output showin as 30. 
//Therefore, use "strict" is use for executing the code in strict mode.

function sum(a, b) {
   var add = a + b;
    console.log(add);
}
sum(10, 20);


