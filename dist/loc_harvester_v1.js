function (a,b){let c,d,e,f,g,h,i,j,k=(a,d=!0)=>(c=b.t.call(a),d?c.split("\n").pop():c),l=/([a-zA-Z_]+)/gmi,m=/Aut/,n=/(\w+):"([^\s]+)"/,o=/egy\s([a-zA-Z_]+)/,p=1,q=[],r=[],s=["p","pass","password"],t=k();for([,f,e]=n.exec(k({}))||[],[[h],[i]]=[...t.matchAll(l)],[,g]=o.exec(k({[f]:i}))||[];!m.exec(t)&&p;)p=s.pop(),j={[f]:e,[p]:g},t=k(j);t=k({[f]:h},!1).join("\n"),q=t.matchAll(/([\w\.]+(?:_|\.)[\w+]+)/gmi);for([d]of q)t=k(Object.assign({},j,{project:d}),!1),t.shift&&(r=r.concat(t));return r}