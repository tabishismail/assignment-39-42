// Chapter # 39 to 42 

// Assignment # 1

// function pow(a,b){
//  var res=Math.pow(a,b);
//  console.log(res);
// }
// pow(5,2);


// Assignment # 2

// var year = +prompt("Enter a year:");

// function check(year) {

//     var leap = new Date(year, 1, 29).getDate() === 29;
//     if (leap) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }
// check(year);

// Assignment # 3

// var a = 5; 
// var b = 6; 
// var c = 7; 
// var s;
// function two(a,b,c,s){
//     function one(a,b,c){
//         var s=(a + b + c)/2;
//         return s;
//     }
//     s = one(a,b,c);
//     console.log(s);

//     var area= (s*((s-a)*(s-b)*(s-c)));
//     return area;
// }
// var area= two(a,b,c,s);
// console.log(area);

// Assignment # 4

// function main(){
//     var english=+prompt("Enter English marks");
//     var maths=+prompt("Enter Maths marks");
//     var computer=+prompt("Enter Computer marks");
//     var avg;
//     var per;
//     function average(a,b,c){
//         var aver =a+b+c;
//         return aver;
//     }
//     avg =average(english,maths,computer)
//     console.log(avg);
//     function percentage(a){
//      var  percent=(a/300)*100;
//      return percent;
//     }
//     per= percentage(avg);
//     console.log(per);
// }
// main();

// Assignment # 5

// function check(){
//         var char=prompt("Enter a character");
//         var name ="abcdefghijklmnopqrstuvwxyz";
//         console.log(name.length);
//         for(var i=0;i<name.length;i++){
//             var charCheck=name[i];
//             if(char==charCheck){
//                 console.log("Index is "+i);
//                 break;
//             }
//            else{
//             "invalid  input";
//             }
//         }
        
//     }
//     check();

// Assignment # 6

// function vowel(str) {             
//     let newString = " ";                            
//     for (let i = 0; i < str.length; i++)  
// {           
//       if (str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u")                                   
//        {           
//        newString += str[i];         
//       };   
//     };   
//     return newString;   
//   };  
//   console.log(vowel(prompt("Enter a string to remove vowels")));