function result(n){
    if(n==1||n==2){
        return 1
    };
    return result(n-2)+result(n-1);
}
var fib=function(n){
    return n<2?n:fib(n-1)+fib(n-2);
};
for(var i=0;i<=10;i+=1){
    console.log(fib(i));
}
