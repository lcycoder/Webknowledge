
function add(arr){
    var sum=0;
    for(var i =0;i<arr.length;i++)
    {
        if(Array.isArray(arr[i]))
            sum+=add(arr[i]);
        else
            sum+=arr[i];
    }
    return sum;
}

    line=read_line();
    var num = add(line);
	console.log(num);
