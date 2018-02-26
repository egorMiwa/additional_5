module.exports = function check(str, bracketsConfig) {

  var brackets = String(bracketsConfig).split(',');
  var order = [];
  var last;

  if( str.length % 2)
  {
    return(false);
        }

  for(var i = 0; i<str.length; i++)
  {
    for(var k = 0; k<brackets.length; k = k+2)
    {
        if(str[i] == brackets[k+1] && last == brackets[k])
        {
            order.pop();
            last = order[order.length-1];
        }
        else if(str[i] == brackets[k])
        {
            order.push(brackets[k])
            last = order[order.length-1];
            break;
        }
    }
  }
return(order.length==0);
}
