//constructor를 만드는 신문법. class라는 키워드를 사용한다
class 부모2{
    constructor(age){
        this.name="lee";
        this.age=age;
        this.sayHi = function() {console.log("@@")} //함수 추가는 이렇게 하거나
    }

    //이렇게 하거나- 근데 여기쓰면 자식에게 추가가 안 된다.
    //부모2.prototype에 존재한다.
    sayHello(){
        console.log("!!");
    }
}

var 자식 =  new 부모2(13); //이건 똑같다.

// //부모.prototype == 자식.__proto__
// Object.getPrototypeOf(자식); // ==  부모.prototype 출력해줘

// 부모2.prototype.sayHello=function(){} // 함수 추가 or 수정

