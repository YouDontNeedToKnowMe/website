const this_class = document.getElementById('go-to-class')
const link_class = document.getElementById('link-classroom')
const link_meet = document.getElementById('link-meet')
// GG classroom link
const ClassMath='https://classroom.google.com/u/0/c/MzQwODM0MTQxNDk5';
const ClassMath_sci='https://classroom.google.com/u/0/c/MzQ0MDAxMzI4OTgx';
const ClassMath_dpst='https://classroom.google.com/u/0/c/MzQ0NDAzNTQ0ODY3';
const ClassSci='https://classroom.google.com/u/0/c/MzQwNTMwMTE2MDEw';
const ClassPhysic='https://classroom.google.com/u/0/c/MzQzMzIwNTM1NjM0';
const ClassBio='https://classroom.google.com/u/0/c/MzQ0NDAzMDgzNDgx';
const ClassChem='https://classroom.google.com/u/0/c/MzQzNDc4OTkzNjg2';    
const ClassSoci='https://classroom.google.com/u/0/c/MzQ0NDg3MzcwMzU3';   
const ClassThai='https://classroom.google.com/u/0/c/MzQzNTQzMzY3MTI4';
const ClassTechno='https://classroom.google.com/u/0/c/MzQzNzI2MjU1Njc0';
const ClassEng='https://classroom.google.com/u/0/c/MzQzNTE4OTg5NTIy';
const ClassEng_sci='https://classroom.google.com/u/0/c/MzM5NDA3NTU3NDM0';
const ClassEng_speak='https://classroom.google.com/u/0/c/MzQzNTE5MTMyMjQ4';
const ClassEng_dev='https://classroom.google.com/u/0/c/MzQyOTg3MDA0NjU2'; 
const ClassGuide='https://classroom.google.com/u/0/c/MzQzNTI3MTY3NDMz';   
const ClassIs='https://classroom.google.com/u/0/c/MzQ0MjEyMDQ0MDc3';     
const ClassArt='https://classroom.google.com/u/0/c/MzM1NTYxNDgyMjI4';
const ClassPe='https://classroom.google.com/u/0/c/MzM5Mzk1NjQ4NTc0';      
const ClassMech='https://classroom.google.com/u/0/c/MzQ0MTM2MzI0ODU1';    
const ClassWork='https://classroom.google.com/u/0/c/MzQ0NTA5MTY3MDcz';
const ClassComLab='https://classroom.google.com/u/0/c/MzQwNTM0MDEwNzMw';
const ClassBioLab='https://classroom.google.com/u/0/c/MzQzNTMyMTcxNjc1';
const ClassCom='https://classroom.google.com/u/0/c/MzQ0NDY4OTE3NjQ0';
const ClassMeeting='https://classroom.google.com/u/1/c/MzYwMzMyODE1ODM1';
// GG meet link
const MeetMath='https://meet.google.com/lookup/cz5khntyho';
const MeetMath_sci='https://meet.google.com/lookup/hmy7fbrox6';
const MeetMath_dpst='https://meet.google.com/lookup/dmra5qwe6y';
const MeetSci='https://meet.google.com/lookup/bajpvzpn3w';
const MeetPhysic='https://meet.google.com/lookup/g2k2qiqusq';
const MeetBio='https://meet.google.com/lookup/ayxds46i54';
const MeetChem='https://meet.google.com/lookup/cdnhzudztw';    
const MeetSoci='https://meet.google.com/lookup/ffwnrogidt';   
const MeetThai='https://meet.google.com/lookup/d4k6qqd2vi';
const MeetTechno='https://meet.google.com/lookup/d3jtyz2s4v';
const MeetEng='https://meet.google.com/lookup/fb2qadftfq';
const MeetEng_sci='https://meet.google.com/lookup/chf4ayprrc';
const MeetEng_speak='https://meet.google.com/lookup/g67uqutftn';
const MeetEng_dev='https://meet.google.com/lookup/hqsymhdhfu'; 
const MeetGuide='https://meet.google.com/lookup/huedp23jgs';   
const MeetIs='https://meet.google.com/lookup/hawtz4didp';     
const MeetArt='https://meet.google.com/lookup/dvv23sx3ox';
const MeetPe='https://meet.google.com/ock-drgf-etq';      
const MeetMech='https://meet.google.com/lookup/fsi4wg35i6';    
const MeetWork='';
const MeetComLab='https://meet.google.com/lookup/buqlajyfjg';
const MeetBioLab='https://meet.google.com/lookup/bzqxaaciz3';
const MeetCom='https://meet.google.com/lookup/eyjfmzjk3q';
const MeetMeeting='https://meet.google.com/lookup/cwjqwtnhck';


let pr=0;
let time=0;
let sj='0'
var d = new Date();
var wd = d.getDay();
var time1 = d.getHours() + "." + d.getMinutes();
time =parseFloat(time1)
time = 9.30
if (time>=8.25 && time<=9.10){pr=1}
else if (time>=9.11 && time<=10.00){pr=2}
else if (time>=10.01 && time<=10.50){pr=3}
else if (time>=10.51 && time<=11.40){pr=4}
else if (time>=11.41 && time<=12.30){pr=5}
else if (time>=12.31 && time<=13.20){pr=6}
else if (time>=13.21 && time<=14.10){pr=7}
else if (time>=14.11 && time<=15.00){pr=8}
else if (time>=15.01 && time<=16.30){pr=9}
else {pr=10}


const arrTimetable=[
    ['eng_sci','pe','physic','physic','lunch_time','eng_speak','eng','chem','math_dpst','free'],
    ['math_sci','math','bio','bio','lunch_time','sci','chem','chem','comLab','free'],
    ['math','guide','com','com','lunch_time','soci','thai','math_sci','eng_dev','free'],
    ['math_sci','thai','art','soci','lunch_time','eng','is','free','bioLab','free'],
    ['physic','math','bio','unifrom','lunch_time','meeting','techno','techno','free','free'],
]
sj= arrTimetable[wd-1][pr-1]

function output(subject, classroom, meet){
    if (subject!='free' && subject != 'lunch'){
        this_class.innerText='คาบนี้เรียน'+' '+subject
        link_class.innerHTML='<a Href="'+ classroom+'" target="_blank" style="color: white;">ไป Classroom ของวิชานี้</a>'
        link_meet.innerHTML='<a Href="'+ meet+'" target="_blank" style="color: white;">ไป Meet ของวิชานี้</a>'
        if (meet==''){ 
            link_meet.innerHTML='<a></a>'
        }
    }
    else if(subject=='lunch'){
       this_class.innerHTML='ตอนนี้คาบพักจ้าาา'
    }
    else {this_class.innerHTML='ไม่มีคาบไปทำงานที่ดองไว้ซะ'}
};
if (sj=='math'){output('คณิตพื้นฐาน',ClassMath,MeetMath)}
else if (sj=='eng'){output('อังกฤพื้นฐาน',ClassEng,MeetEng)}
else if (sj=='math_sci'){output('คณิตเพื่อวิทย์',ClassMath_sci,MeetMath_sci)}
else if (sj=='math_dpst'){output('คณิตวิยะดา',ClassMath_dpst,MeetMath_dpst)}
else if (sj=='sci'){output('วิทย์กายภาพ',ClassSci,MeetSci)}
else if (sj=='bio'){output('ชีวะ',ClassBio,MeetBio)}
else if (sj=='chem'){output('เคมี',ClassChem,MeetChem)}
else if (sj=='physic'){output('ฟิสิกส์',ClassPhysic,MeetPhysic)}
else if (sj=='is'){output('IS',ClassIs,MeetIs)}
else if (sj=='soci'){output('สังคม',ClassSoci,MeetSoci)}
else if (sj=='thai'){output('ไทย',ClassThai,MeetThai)}
else if (sj=='techno'){output('เทคโนโลยี',ClassTechno,MeetTechno)}
else if (sj=='eng_dev'){output('IELTS',ClassEng_dev,MeetEng_dev)}
else if (sj=='eng_speak'){output('อังกฤษเพื่อการสื่อสาร',ClassEng_speak,MeetEng_speak)}
else if (sj=='eng_sci'){output('อังกฤษเพื่อวิทย์-คณิต',ClassEng_sci,MeetEng_sci)}
else if (sj=='guide'){output('แนะแนว',ClassGuide,MeetGuide)}
else if (sj=='comLab'){output('ปฏิบัติการฟิสิกส์/คอม',ClassComLab,MeetComLab)}
else if (sj=='bioLab'){output('ปฏิบัติการเคมี/ชีวะ',ClassBioLab,MeetBioLab)}
else if (sj=='art'){output('ศิลปะ',ClassArt,MeetArt)}
else if (sj=='pe'){output('สุขขะ/พละ',ClassPe,MeetPe)}
else if (sj=='mech'){output('งานช่าง',ClassMech,MeetMech)}
else if (sj=='work'){output('การงานอาชีพ',ClassWork,'')}
else if (sj=='com'){output('คอมพิวเตอร์',ClassCom,MeetCom)}
else if (sj=='com'){output('ประชุมระดับ',ClassMeeting,MeetMeeting)}
else if (sj == 'lunch_time'){output('lunch','')}
else if (sj == 'unifrom'){output('เครื่องแบบ','')}
else {output('free')}
console.log(link_class)
console.log(link_meet)
console.log('Priod=',pr)
console.log('Weekday=',wd)
console.log(sj)
console.log(this_class.innerText)
console.log(fetch('./DataForEzclassroom.json'))