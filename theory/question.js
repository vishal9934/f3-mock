// 1-what are async and await function in javascript?

//   async and await is keyword in js which allow us to write asynchronous code in a more readable and concise way.
//   it is used with promise that makes easier to work with asynchronous js.
//   and also it handle promise chaining in js.

//   async function -it is function which declare with async keyword and it always returns promise.

//   await function- await function is used to pause the execution of function until a promise or result is resolved.


// 2- what is promise and promise chaining?
   
//    promise is an object which is used to keep track about whether a certian task or event are already happened or not.

//    why we use promise?

//    we use it to perform asynchronous operation in js  and it is easy way deal with multiple asynchronous operation like 
//    callback hell.function inside function which lead unreadable and unmanagable.

//    example
     function promise(){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve("success");
        },2000)
      })
      .then((data)=>{
  console.log(data)
      })
      .catch((errror)=>{
        console.log(errror);
      })
     }
   promise();

  //  -promise chaining
    //  used to perform asynchronous operation in js but it chained together.Promise

    //  example

     fetch(api)
     .then((res)=>res.json())
     .then((data)=> console.log(data))
     .catch((error)=>console.log("error"))

// 3- what is callback and callback hell?


// example-

//function
function greet(name,callback){
  console.log(name)
  callback();
}
//callback function
function callme(){
  console.log("callback")
}
greet("vishal",callme);

  // callback hell?
  
  // multiple function within  a function is called callback hell 
  // it is also called pyramid of doom .
  // it makes the code unreadable and umanagable

  // example

  operation1(function(result1){
    operation2(result1,function(result2){
         operation3(result2,function(result3){
          console.log(result3);
         })
    })
  })

// 4-constructor on js?

  // it is a method used to create and initialize the object,constructor keyword are used inside the class defination.

  // example
  class Person{
    constructor(name,age){
      this.name=name;
      this.age=age;
    }
  }
  const person1=new Person("vishal",30);
  console.log(person1.age);
  console.log(person1.name);

// 5-Heap & Stack memory
// --The heap is used for dynamic memory allocation and can grow and shrink at runtime, 
// --while the stack is used for storing temporary data and has a fixed size.


// 6-class inheritance in javascript?

// --In JavaScript, class inheritance is a way for one class to inherit the properties and methods of another class. 
// This allows you to create a new class based on an existing class, and to reuse and extend its functionality.

// Inheritance is achieved using the extends keyword. Here’s an example:

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log(`${this.name} barks.`);
//  }
// }

// const dog = new Dog('Rex');
// dog.speak(); // 'Rex barks.'
// The Dog class inherits the properties and methods of the Animal class, including the constructor and speak methods.
//  However, we also define a new speak method inside the Dog class that overrides the one inherited from the Animal class.

// 7-Event loop?

// Eventloop pushes the task from callback queue or task queue to callstack.
  
  