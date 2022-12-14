// var studentdetail = {
//     name:"Syed kariz ali",
//     Age:20,
//     Address:"Karachi",
//     Height:"5'7"
// };
// studentdetail.weight="60kg"
// delete studentdetail.Age;


// // To check the property is present or not
// var a="Address" in studentdetail; 
// console.log(a);


// console.log(studentdetail);

var std1 ={
    name:"Ali",
    Age:12,
    Class:6,
    Address:"House # 10,Islamabad",
    Rollno:"ab1001"
}
var std2 ={
    name:"Hamza",
    Age:13,
    Class:7,
    Address:"House # 20,karachi",
    Rollno:"ab1002"
}
var std3 ={
    name:"Huzaifa",
    Age:11,
    Class:6,
    Address:"House # 30,Hyderabad",
    Rollno:"ab1003"
}
var std4 ={
    name:"Ahad",
    Age:14,
    Class:8,
    Address:"House # 40,karachi",
    Rollno:"ab1004"
}
var std5 ={
    name:"Abdullah",
    Age:16,
    Class:10,
    Address:"House # 50,Lahore",
    Rollno:"ab1005"
}
var std6 ={
    name:"Haris",
    Age:9,
    Class:4,
    Address:"House # 60,karachi",
    Rollno:"ab1006"
}
var std7 ={
    name:"Hoorain",
    Age:17,
    Class:11,
    Address:"House # e-129,Lahore",
    Rollno:"ab1007"
}
var std8 ={
    name:"Meraj",
    Age:19,
    Class:13,
    Address:"House # 80,karachi",
    Rollno:"ab1008"
}
var std9 ={
    name:"Asharib",
    Age:19,
    Class:13,
    Address:"House # 90,karachi",
    Rollno:"ab1009"
}
var std10 ={
    name:"Maaz Khan",
    Age:18,
    Class:12,
    Address:"House # 100,karachi",
    Rollno:"ab10010"
}
var arr=[std1,std2,std3,std4,std5,std6,std7,std8,std9,std10];
// console.log(arr);

// for (i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }


function srch(){
    var a=document.getElementById('sea'); 
    var b = a.value;
    var g=false;
    if (b==""){
        var div=document.getElementById("app");
        var Enter_name=document.createTextNode("   Please enter Roll no.");
        div.appendChild(Enter_name);
    }else{
        for (i=0; i<arr.length; i++){
            if (b==arr[i].Rollno){
                console.log(arr[i].Rollno);
                var div=document.getElementById("app");
                var s=arr[i].name;
                var t=arr[i].Age;
                var u=arr[i].Class;
                var v=arr[i].Address;
                var w=arr[i].Rollno;

                var info=document.createTextNode("Name : "+s);
                var info2=document.createTextNode("Age : "+t);
                var info3=document.createTextNode("Class : "+u);
                var info4=document.createTextNode("Address : "+v);
                var info5=document.createTextNode("Roll no. "+w);

                var p1=document.createElement('p');
                var p2=document.createElement('p');
                var p3=document.createElement('p');
                var p4=document.createElement('p');
                var p5=document.createElement('p');

                p1.appendChild(info);
                p2.appendChild(info2);
                p3.appendChild(info3);
                p4.appendChild(info4);
                p5.appendChild(info5);

                div.appendChild(p1);
                div.appendChild(p2);
                div.appendChild(p3);
                div.appendChild(p4);
                div.appendChild(p5);

                g=true;

            }
        }
        if(g==true){
        }
        else{
            var div=document.getElementById("app");
            var Notpre=document.createTextNode("   No Student Found");
            div.appendChild(Notpre);
            // console.log("Not Found");
        }
    }
    
    var b = a.value="";
}


    