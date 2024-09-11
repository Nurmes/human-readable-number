module.exports = function toReadable (number) {
    let readableNumber = number.toString();
  let out = '';
  const 
    h = ['one hundred', 'two hundred','three hundred', 'four hundred','five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred' ],
    t = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ],
    o = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    p = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if (readableNumber.length === 1) (readableNumber[0] == 0)?(out = 'zero'):(out = o[number - 1]);

    else if(readableNumber.length === 2){
      if (readableNumber[0] == 1) {
        out = (readableNumber[1] == '0')?('ten'): p[parseInt(readableNumber[1])-1];
      }
      else out = (t[parseInt(readableNumber[0])-2] + ((readableNumber[1]!= '0')? (' ' + o[parseInt(readableNumber[1])-1]):''));
    }

    else if (readableNumber.length === 3) {
      if (readableNumber[1] == 1) {
        out = (h[parseInt(readableNumber[0])-1]) + ((readableNumber[2] == '0')?(' ten'): (' ' + p[parseInt(readableNumber[2])-1]));
      }
     else out = (h[parseInt(readableNumber[0])-1]) + ((readableNumber[1]!= '0')?(' ' + t[parseInt(readableNumber[1])-2]):'') + ((readableNumber[2]!='0')?(' '+ o[parseInt(readableNumber[2])-1]):'');
    }
    return out;
}
