
// Merge 2 sorted arrays into 1 sorted array using a callback function. Use merge
// sort algorithm. and console log the merged array.

var ans=[];
let i=0;
let j=0;
function merge(arr1,arr2,callback){

    if(callback(arr1[i],arr2[j])<=0){
        ans.push(arr1[i])
        i++
        }else{
            ans.push(arr2[j]);
            j++;
        }
         while(i<arr1.length){
            ans.push(arr1[i]);
            i++;
         }
         while(j<arr2.length){
            ans.push(arr2[j]);
            j++;
         }
         return ans;

    }
    let arr1=[2,3,4,5]
    let arr2=[1,6,7]
    console.log(merge(arr1,arr2,(a,b)=>a-b))





    // callback 
//     function greeting(name,callback){
//         console.log("my name is :"+ name)
//         callback();
//     }
//     // callback function
//     function callMe(){
//         console.log("im from dhanbad")
//     }
//    //passing an argument as function
//    greeting("vishal",callMe);