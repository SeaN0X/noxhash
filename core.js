function hash(arg) {
    const input = (byteArr = new TextEncoder().encode(arg)).toString().split(',')

    var outcompiled = 0

    var num = false;
    var part = ".";
for (i=0; i<input.length; i+=1) {
    part += input[i]
    if(num){
        input[i] += ((input[i] * 7) / 15)**3
        num = false
    } else {if(num == false){num = true; input[i] -= input[i]*Math.sqrt(input[i])}}
            outcompiled += (Number(input[i]) * 9) * Math.sqrt(Number(part))
    }        outcompiled = outcompiled.toString() + '.'+Math.sqrt(outcompiled).toString()
    return outcompiled
}
