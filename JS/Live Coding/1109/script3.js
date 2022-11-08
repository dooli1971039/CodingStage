class 할아버지 {
    constructor(name){
        this.성="Park";
        this.name=name;
    }

    sayHello(){ //할아버지의 프로토타입에 추가된다.
        console.log("!!");
    }
}

var 할아버지1=new 할아버지("만덕");

//이거랑 유사한 class를 하나 더 만들고 싶을 때 extends (class 상속)
//근데 extends해서 만든 class는 this를 함부로 쓰지 못함
//super()를 먼저 써야함
class 아버지 extends 할아버지 {
    constructor(name){
        super(name); // 부모의 constructor가 파라미터가 있었으면 그대로 넣어줘야함 
        this.나이=50;
    }
    sayHello(){
        console.log("lala");
        super.sayHello(); // == 부모 prototype.sayHello()
    }
}

var 아버지1=new 아버지("만수");
