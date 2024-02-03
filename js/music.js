var a=[ 23 , -45 , 55 , -86]
a = a.filter(function(x) {
    return x>-1
});
console.log(a);

var a=[2,-3,4,-5]
a=a.filter(function(x){
    return x<-1
});
console.log(a);

var a=[5,78,-67,98,-90]
a=a.filter(function(x){
    return x<-1
})
console.log(a)


function mult(a,b=6){
    return a*b;

}
console.log(mult(3,5))