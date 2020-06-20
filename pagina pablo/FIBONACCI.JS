
//0,1,1,2,3,5,8,13,21, ....
var a,b,result;
a=0;
b=1;
result=b;
for(var i=0; i<20; i++){
   document.write(result+"");
   result =a+b;
   a=b;
   b=result;
}
