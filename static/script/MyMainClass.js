/**
 * Created by akenoq on 03.07.17.
 */

"use strict";

class MyMainClass{

    constructor(){
        this.a = 0;
        this.b = 1;
    }

    printFields(){
        console.log("a = " + this.a);
        console.log("b = " + this.b);
        console.log("\n");
    }

    setFields(a,b){
        this.a = a;
        this.b = b;
    }

    getSumma(){
        let ans = this.a + this.b;
        return ans;
    }

    printTenOnce(){
        for(let i=0; i<10; i++){
            this.printFields();
        }
    }

}

window.onload = function(){
    let mainObj = new MyMainClass();
    mainObj.printFields();
    mainObj.setFields(2,3);
    let summa = 0;
    summa = mainObj.getSumma();
    console.log("summa = "  + summa);
    mainObj.printTenOnce();
};
