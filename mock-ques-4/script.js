// <!-- Print the letters A, B, C in that order, using callbacks, and then using async await Playground:
//  https://githubbox.com/acciojob/frontend_3_mock_ques_4 


function A(){
    console.log("A")
}
function B(){
    A();
    console.log("B");
    
}
function C(){
    B();
    console.log("C");
   
}
  async function ABC(){
        await C();
  }
  ABC()
