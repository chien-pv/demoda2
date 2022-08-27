function add(x, y){
    return x+y;
}

var arr = process.argv.slice(2)
var x = arr[0] ;
var y =  arr[1]
var sum = add(x,y); 

console.log(sum);