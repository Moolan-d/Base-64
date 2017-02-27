/**
 * [encodeBase64 实现浏览器中btoa()函数的功能]
 * @param  {[String]} str [传入任意拉丁字母组成的字符串]
 * @return {[string]}     [返回一个base64字符串，由大小写数字及+ - =构成]
 */
function encodeBase64(str){
return function encode(arguments) {
  var strThreAre = str.match(/\w{3}/g)
  var sentense = []
  strThreAre.forEach(function(value, i, arry) {
    var charTword = value.split('')
    var s = charTword.map(it => {
        var charBin = it.charCodeAt(0).toString(2)
        var binlengh = charBin.length
        var newBin=0
        while (binlengh < 8) {
          newBin = 0 + charBin
          var binlengh =newBin.length
        }
        return newBin
      }).join('')
    var srepart = s.match(/\d{6}/g)
    var baseNum = srepart.map(it => parseInt(it, 2))
    sentense.push.apply(sentense, baseNum) //类似于concat的用法
  })
 return sentense.map(it=>numtoWord(it)).join('')
}()
function numtoWord(num){
var base64Code={
'A' :0 ,  'Q' : 16,   'g': 32,   'w': 48,  
'B' :1 ,  'R' : 17,   'h': 33,   'x': 49,  
'C' :2 ,  'S' : 18,   'i': 34,   'y': 50,  
'D' :3 ,  'T' : 19,   'j': 35,   'z': 51,  
'E' :4 ,  'U' : 20,   'k': 36,   '0': 52,  
'F' :5 ,  'V' : 21,   'l': 37,   '1': 53,  
'G' :6 ,  'W' : 22,   'm': 38,   '2': 54,  
'H' :7 ,  'X' : 23,   'n': 39,   '3': 55,  
'I' :8 ,  'Y' : 24,   'o': 40,   '4': 56,  
'J' :9 ,  'Z' : 25,   'p': 41,   '5': 57,  
'K' :10,  'a' : 26,   'q': 42,   '6': 58,  
'L' :11,  'b' : 27,   'r': 43,   '7': 59,  
'M' :12,  'c' : 28,   's': 44,   '8': 60,  
'N' :13,  'd' : 29,   't': 45,   '9': 61,  
'O' :14,  'e' : 30,   'u': 46,   '+': 62,  
'P' :15,  'f' : 31,   'v': 47,   '/': 63, 
}
for(key in base64Code){
    if (base64Code[key]==num) {
      return key
    }
  }
}
}
 


