function (a,b){let c=a=>b.t.call(a),d=c({CON_SPEC:""}),e=d.split("\n")[0],f=["ABCDEFGHIJKLMNOPQRSTUVWXYZ","ZYXWVUTSRQPONMLKJIHGFEDCBA","ACEGIKMOQSUWY","BDFHJLNPRTVXZ","ZXVTRPNLJHFDB","YWUSQOMKIGECA","ABEFIJMNQRUVYZ","BCFGJKNORSVWZ","CDGHKLOPSTWX","ADEHILMPQTUXY","ZYVURQNMJIFEBA","YXUTQPMLIHEDA","XWTSPOLKHGDC","ZWVSRONKJGFCB"].find(a=>-1<a.indexOf(e)),g=f.indexOf(e),h=f.substring(g+e.length,g+e.length+3);return c({CON_SPEC:h})}