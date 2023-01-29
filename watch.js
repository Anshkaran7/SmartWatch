function black(){
    document.getElementById("blackWatch").src="Colors/blackWatch.jpg"
}
function red(){
    document.getElementById("blackWatch").src="Colors/redWatch.jpg"
}
function blue(){
    document.getElementById("blackWatch").src="Colors/blueWatch.jpg"
}
function purple(){
    document.getElementById("blackWatch").src="Colors/purpleWatch.jpg"
}
function pink(){
    document.getElementById("blackWatch").src="Colors/pinkWatch.jpg"
}
function timer(){
    document.getElementById("heart").style.visibility="hidden"
    document.getElementById("heart-rate").style.visibility="hidden"
    document.getElementById("time").style.visibility="visible"

    setInterval(function(){
        function addZero(i){
            if(i<10){
                i = "0"+ i
            }
            return i;
        }
        var d = new Date()
        var x = document.getElementById("demo")
        var h = addZero(d.getHours())
        var m = addZero(d.getMinutes())
        var s = addZero(d.getSeconds())
        document.getElementById("time").innerHTML= "  " + h +":" + m +":"+ s 
    },0)
}
function heartbeat(){
    document.getElementById("time").style.visibility ="hidden"
    document.getElementById("heart-rate").style.visibility="visible"
    document.getElementById("heart").style.visibility="visible"
}