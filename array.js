/*let arr:number[]=[1,2,3,4];

console.log("Array[0] "+arr[0]);
console.log("Array[1] "+arr[1]);
console.log("Array[2] "+arr[2]);
console.log("Array[3] "+arr[3]);

output of 1D Array
Array[0] 1
Array[1] 2
Array[2] 3
Array[3] 4  */
//Tuple program
var person = {
    name: 'Divya',
    age: 21,
    hobbies: ['Badminton', 'Cricket'],
    role: [2, 'author']
};
person.role = [21, 'Divya'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
