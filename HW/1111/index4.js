var products = [
    {
      name1 : 'chair',
      price1 : 7000,
    },
    {
      name2 : 'sofa',
      price : 5000,
    },
    {
      name1 : 'desk',
      price3 : 9000,
    },
  ]; 

let value;
let newKey;

for (let item of products) {
  for (let key in item) {
     if (isNaN(parseInt(key.slice(-1))) == false ) {
       value = item[key];3
       newKey = key.slice(0, -1); 
       item[newKey] = value; //새거 넣고
       delete item[key];  //예전거 삭제
     }
  }
}


console.log(products)