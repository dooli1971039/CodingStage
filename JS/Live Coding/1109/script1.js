 
var 부모 = {name:"kim", age:50, func:function(){console.log("##")}}; //이거의 부모는 Object

//부모가 가진 name, age를 그대로 물려받은 자식을 만들고 싶다면
var 자식 = Object.create(부모); // <-- 여기까지만 하면 자식의 __proto__을 "정의"한 것뿐

자식; //아무것도 안나옴
자식.name; // kim이 나온다.
//자식의 prototype이 부모라서.
// 내가(자식에) name이 없으니, 자식의 prototype인 부모에게 가서 name이 있는지 찾아보고 알려줌

자식.age=30; //을 하게되면,
자식; //을 했을 때 {age:30} 이 뜨게 된다. 여전히 name은 없음

var 손자=Object.create(자식);
손자; // {}
손자.age; // 30  <--자식에 있음
손자.name; // kim  <--부모에 있음

//이건 constructor는 아님