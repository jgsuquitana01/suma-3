function addNumber (x?: number, y?: number, z?:number): number {
    if(x && y && z)
      return x + y + z;
    if(x && y )
    return x + y ;
    if(x)
      return x;
    if(y)
      return y;
    if(z)
      return z;  
    throw new Error("Input Invalid")

}
console.log(addNumber(1,2,3));
