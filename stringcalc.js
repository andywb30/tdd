/**
 * Created by awedag on 29.06.17.
 */


module.exports = class StringCalc {
 constructor(str) {
     this.str = str;
     this.myArray = this.str.split(",");
 }

 setMyArray(str){
     this.myArray = this.str.split(",");
 }

 add (x){
     if (this.myArray.length >= 3){
        throw "AD";
     }
     else
     {
         this.myArray.push(x);
     }

 }
 sum(){
     let s=0;
      this.myArray.forEach(x => {
         s += parseInt(x);

     }
     );
     return s

 }
}