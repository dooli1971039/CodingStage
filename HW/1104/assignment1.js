function Product(name,price){
    this.name=name;
    this.price=price;
    this.부가세=function(){
        console.log(this.price*0.1);
    }
}

var product1=new Product("shirts",50000);
var product2=new Product("pants",60000);


product1.부가세();
product2.부가세();
