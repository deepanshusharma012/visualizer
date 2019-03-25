//Data

var e_l='<div class="explained"><p class="explained_line %hid%">%el%</p><p class="bubble tri-right left-in %hide%">%bd%</p></div>';

//Main page

var edr = ace.edit("editor");
edr.setTheme("ace/theme/ambiance");
edr.session.setMode("ace/mode/c_cpp");
edr.setValue("//TYPE YOUR C CODE HERE AND CLICK VISUALISER BUTTON BELOW");
var ar=[]
function bfiy(){
var v="",sc="",sf="",int=[],func=[],br=[];
$("#visual").html("");
for(elem in ar){
var asd=[" to "],asv=0,as='';
var line=e_l.replace("%el%",ar[elem]);
if(ar[elem].match(/(void)/)){rt = "void which means it returns nothing";ar[elem]=ar[elem].replace("void","int");}
else if(ar[elem].match(/(float)/)){rt="float";vr="float";ar[elem]=ar[elem].replace("float","int");}
else if(ar[elem].match(/(double)/)){rt="double";vr="double";ar[elem]=ar[elem].replace("double","int");}
else if(ar[elem].match(/(long int)/)){rt="long int";vr="long integers";ar[elem]=ar[elem].replace("long int","int");}
else if(ar[elem].match(/(char)/)){rt="char";vr="characters";ar[elem]=ar[elem].replace("char","int");}
else{vr="int",rt="int"}

        if(ar[elem]==""){line=line.replace("%bd%","");line=line.replace("%hide%","hide");line=line.replace("%hid%","hide");}
else if(ar[elem].match(/[\n]/gi)){line=line.replace("%bd%","");line=line.replace("%hide%","hide");line=line.replace("%hid%","hide");}
else if(ar[elem].match(/(include)/gi)){var lib=/\<([^<>]+)\>/gmi,f=lib.exec(ar[elem]);console.log(f[1]);f[1]=f[1].replace(/(\.h)/gmi,"");line=line.replace("%bd%","This line is importing "+ f[1].toUpperCase()+"header file which is used for easy coding")}
else if(ar[elem].match(/(int )/gi)) {if (ar[elem].match(/\(\)/gi)) {if (ar[elem].match(/\{/gi)) {s = ar[elem].indexOf("int") + 3;e = ar[elem].indexOf("\(") - 3;line = line.replace("%bd%", "Starting function named" + ar[elem].substr(s, e).toUpperCase() + " of return type " + rt); func.push(ar[elem].substr(s, e).toUpperCase());br.push('Function'+ar[elem].substr(s, e).toUpperCase());} else {s = ar[elem].indexOf("int") + 3;e = ar[elem].indexOf("\(") - 5;func.push(ar[elem].substr(s, e).toUpperCase());line = line.replace("%bd%", "Declraration of funciton named" + ar[elem].substr(s, e).toUpperCase() + " of return type" + rt);}} else {ar[elem] = ar[elem].replace(";", "");ar[elem]+=',';s=ar[elem].match(/[,]/g).length;var c=[];console.log(ar[elem].match(/[,]/g).length);ar[elem]=ar[elem].substring(ar[elem].indexOf('int')+3,ar[elem].length);console.log(ar[elem]);for(i=1;i<=s;i++){c.push(ar[elem].substring(0,ar[elem].indexOf(',')));cp=ar[elem].indexOf(',');ar[elem]=ar[elem].substring(cp+1,ar[elem].length);}console.log(c);v = " ";for (el in c) {if (!c[el].match(/(int)/gi) && c[el].match(/[a-z,_1-9]{1,}/gi)) {c[el] = c[el].replace(",", "");if(c[el].match('=')){asv=1;asd.push(c[el]);z=c[el].substring(0,c[el].indexOf('='));int.push(z);console.log(c[el].substring(c[el].indexOf('=')+1,c[el].length));c[el]=z;}else{int.push(c[el]);}if(el==0) v=v+c[el]; else if (el == c.length-1) v = v + " and " + c[el]; else v = v  + ',' + c[el];}}for(a in asd){if(a==0||a==1) as=as+asd[a]; else if (a == asd.length-1) as=as+' and '+asd[a];else as = as  + ',' + asd[a];}if (asv==1) line = line.replace("%bd%", "Declraration of" + v + " and assigning of values"+as); else line = line.replace("%bd%", "Declraration of " + v);}}
else if(ar[elem].match(/(scanf\()/gmi)){i=0;v="";z=ar[elem].indexOf("\"");sf=ar[elem].substr(z,ar[elem].indexOf(")"));sf=sf.replace(")"," ");sc=sf.split(" ");for(s in sc){if(sc[s].match(/[a-z_1-9]{1,}/gmi)){sc[s]=sc[s].replace(",","");for(en in int){if(int[en]==sc[s]){if(i==0)v=v+sc[s]; else v=v+", "+sc[s]; i++;}}}}line=line.replace("%bd%","Scaning of '"+v.toUpperCase()+"' Using scanf ")}
else if(ar[elem].match(/(printf\()/gmi)){i=0,h=ar[elem].lastIndexOf("\""),v="";z=ar[elem].indexOf("\"")+1;sf=ar[elem].substring(z,h);x=sf.length;for(w=0;w<x;w++){sf=sf.replace("\\n"," \'New Line using (\\ n)\' ")};line=line.replace("%bd%","Printing `"+sf+"` using printf");}
else if(ar[elem].match(/(if)/gmi)){if(ar[elem].substring(ar[elem].length-1,ar[elem].length)=='{'){br.push('if');}i=0,h=ar[elem].lastIndexOf("\)");f=ar[elem].indexOf("\(")+1;sf=ar[elem].substring(f,h);line=line.replace("%bd%","If statement acts as a switch if "+sf+" then it will allow to use code enclosed in paranthesis")}
else if(ar[elem].match(/(for)/gmi)){if(ar[elem].match(/{/gmi)){br.push('for')}ar[elem]=ar[elem].substring(ar[elem].indexOf('(')+1,ar[elem].length-1);line=line.replace("%bd%","For loop has started here this loop will perform task in its parenthisis until ")}
else if(ar[elem].match(/( = )/gmi)){l=ar[elem].indexOf('=');x=ar[elem].substring(0,l);xchk=0;for(var su in int){if(x.trim()==int[su].trim()){if(ar[elem].match(/(;)/gmi)) end=ar[elem].length-1; else end=ar[elem].length;y=ar[elem].substring(l+1,end);if(y.match(/(\+)/gmi)){y=y.replace("+"," and ");line=line.replace("%bd%","Here we are assigning sum of "+y+" to "+ x);}else if(y.match(/(\*)/gmi)){y=y.replace("*"," and ");line=line.replace("%bd%","Here we are assigning product of "+y+" to "+ x);}else if(y.match(/(\/)/gmi)){y=y.replace("/"," and ");line=line.replace("%bd%","Here we are assigning division of "+y+" to "+ x);}else if(y.match(/(\-)/gmi)){y=y.replace("-"," and ");line=line.replace("%bd%","Here we are assigning substraction of "+y+" to "+ x);}else{line=line.replace("%bd%","Here we are assigning "+y+" to "+ x);}xchk=1;}}if(xchk==0) line=line.replace("%bd%",x + " is not Declared");}
else if(ar[elem].match(/(})/gmi)){line=line.replace('%bd%','Ending paranthesis for '+br[br.length-1]);br.pop();}
else if(ar[elem].match(/([a-z_0-9])+([(])+([a-z_ 0-9])+([)])/gmi)){var funct=0;fu=ar[elem].substring(0,ar[elem].indexOf('('));for(var fun in func){if(fu.trim().toUpperCase()==func[fun].trim()){line=line.replace("%bd%","Function named"+fu.toUpperCase() +" is Called");funct=1}}if(funct==0){line=line.replace("%bd%","Function "+fu.trim().toUpperCase() +" is not Declared")}}
else{line=line.replace("%bd%","Work in Progress or Error in the code");}
$("#visual").append(line);}
}
function Convert() {
    var e = edr.getValue()
    var t = "";
    null != e && 0 != e.length && (indent_size = 2,(
    console.log("Formating C"),
    t = js_beautify(e, {
        indent_size: indent_size,
        indent_char: " ",
        other: " ",
        indent_level: 0,
        indent_with_tabs: !1,
        preserve_newlines: !0,
        max_preserve_newlines: 2,
        jslint_happy: !0,
        indent_handlebars: !0
    })),
    t=t.replace(/(\/\/)([a-z 0-9.\/\;\'\"\:\[\]\)\(\-\=\+\*\!\`\~\!\@\#\$\%\^\&\{\<\>\,\?])+/gmi,""),
    t=t.replace(/(#)/gmi,"\n#"),
    t=t.replace(/(#\n)/gmi,"#"),
    t=t.replace(/(\ninclude)/gmi,"include"),
    t=t.replace(/(\n\n)/gmi,"\n"),
    ar = t.split("\n"),
    console.log(t),
    document.getElementById("converted").value=t)
    t=t.replace(/(\n\n)/gmi,"\n"),
    t=t.replace(/(#\n)/gmi,"#"),
    ar = t.split("\n"),
    console.log(ar),
    document.getElementById("converted").value=t,
    bfiy()
}