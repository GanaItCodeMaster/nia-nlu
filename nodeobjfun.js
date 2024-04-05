var naveen = {
    name: function (){
        console.log("my name is cooper")
        console.log(this === naveen)
    }

}
naveen.name()
function worthless(){
    console.log("\n worthless")
    console.log(this === global)
}
worthless()