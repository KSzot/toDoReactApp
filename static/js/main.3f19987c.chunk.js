(this["webpackJsonptodo-appreact"]=this["webpackJsonptodo-appreact"]||[]).push([[0],{46:function(n,e,t){},56:function(n,e,t){"use strict";t.r(e);var r,o,a,i,c,l,s,d,m,u,b,g,h,f,j,p,x,A,O,v,k=t(0),w=t.n(k),y=t(24),C=t.n(y),S=(t(46),t(3)),B=t(2),J=t(35),N="375px",L="425px",z="600px",E="768px",T="900px",D="1024px",U="1200px",R="2560px",M={mobileS:"(max-width: ".concat("320px",")"),mobileM:"(max-width: ".concat(N,")"),mobileL:"(max-width: ".concat(L,")"),mobileXL:"(max-width: ".concat(z,")"),tablet:"(max-width: ".concat(E,")"),tabletL:"(max-width: ".concat(T,")"),laptop:"(max-width: ".concat(D,")"),laptopL:"(max-width: ".concat(U,")"),desktop:"(max-width: ".concat(R,")"),desktopL:"(max-width: ".concat(R,")")},I=Object(B.createGlobalStyle)(r||(r=Object(S.a)(["\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  // This defines what 1rem is\n  font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%\n\n  @media "," {\n    font-size: 50%;\n  }\n\n}\n\nbody {\n  box-sizing: border-box;\n  font-weight: 400;\n  line-height: 1.7;\n\n  background-color: ",";\n    margin: 10rem 15rem 0 15rem;\n\n    @media "," {\n      margin: 5rem 5rem 0 5rem;\n    }\n\n    @media "," {\n      margin: 1% 1% 0 1%;\n    }\n}\n\n\n\n/* ","\n\nhtml {\n  font-size: 62.5%;\n}\nbody{\n    background-color: ",";\n    margin: 10rem 15rem 0 15rem;\n\n    @media "," {\n      margin: 5rem 5rem 0 5rem;\n    }\n} */\n\n"])),M.tablet,(function(n){return n.mode?n.theme.colors.blue.normal:n.theme.colors.primary.normal}),M.laptopL,M.mobileXL,J.normalize,(function(n){return n.mode?n.theme.colors.blue.normal:n.theme.colors.primary.normal}),M.laptopL),X=B.default.div(o||(o=Object(S.a)(["\n  display: flex;\n  flex-direction: row;\n  //background-color: ",";\n  background-color: ",";\n\n  @media "," {\n    flex-direction: column;\n  }\n\n  .container-right {\n    display: flex;\n    background-color: ",";\n    flex-direction: column;\n    flex-basis: 30%;\n    margin: 1rem;\n    border-radius: 1rem;\n    align-items: center;\n\n    &__topButton {\n      display: flex;\n      justify-content: space-between;\n      width: 50%;\n    }\n  }\n"])),(function(n){return n.theme.colors.gray.normal}),(function(n){var e=n.mode,t=n.theme;return e?t.colors.blue.normal:t.colors.gray.normal}),M.laptopL,(function(n){var e=n.mode,t=n.theme;return e?t.colors.blue.light:"white"})),F={spacing:{xs:5,sm:10,xl:20},colors:{gray:{light:"rgb(238, 238, 238)",normal:"rgb(222, 220, 220)",normal2:"rgba(107,114,128,1)",dark:"rgb(48,48,48)"},green:{normal:"rgb(85, 150, 0)"},primary:{normal:"rgba(167,139,250,1)",dark:"rgba(124,58,237,1)"},blue:{normal:"rgb(31,41,55)",light:"rgb(75,85,99)"},taskIcon:{normal:"rgba(110, 231, 183,1)",light:"rgba(110, 231, 183,.5)"},notesIcon:{normal:"rgba(249,168,212, 1)",light:"rgba(249,168,212,.5)"},boredIcon:{normal:"rgba(59,130,246, 1)",light:"rgba(59,130,246, .5)"},orange:{normal:"rgba(252,165,165,1)",light:"rgba(252,165,165,.5)"}}},Y=t(7),H=B.default.div(a||(a=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: transparent;\n  flex-basis: 70%;\n\n  .layout-main {\n    display: flex;\n    flex-direction: row;\n    background-color: transparent;\n    flex-basis: 70%;\n  }\n\n  .layout-navigation {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-basis: 20%;\n    background-color: ",";\n    margin: 1rem;\n    border-radius: 1rem;\n    padding: 3rem 0;\n\n    @media "," {\n      position: fixed;\n      padding: 1rem 2rem;\n      bottom: 0;\n      width: 70%;\n    }\n  }\n\n  .layout-content {\n    display: flex;\n    background-color: ",";\n    flex-basis: 100%;\n    margin: 1rem;\n    border-radius: 1rem;\n  }\n"])),(function(n){var e=n.mode,t=n.theme;return e?t.colors.blue.light:"white"}),M.tablet,(function(n){var e=n.mode,t=n.theme;return e?t.colors.blue.light:"white"})),P=B.default.div(i||(i=Object(S.a)(["\n  display: flex;\n  /* background-color: white; */\n  background-color: ",";\n\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 1rem;\n  border-left: 1rem solid ",";\n  padding: ",";\n  margin: ",";\n"])),(function(n){var e=n.mode,t=n.theme;return e?t.colors.blue.light:"white"}),(function(n){return n.theme.colors.primary.normal}),(function(n){return n.padding?"1rem 2rem":"0 2rem"}),(function(n){return n.margin?"1rem":"0"})),G="ADD_TASK",K="TOGGLE_MODE",Q=function(n){return{type:K,payload:n}},W=function(n){return{type:G,payload:n}},V="is_mode",Z=function(n){return localStorage.getItem(n)},_=t(1),q=function(n){var e=Object(Y.b)(),t=Object(Y.c)((function(n){return n.mode.isMode})),r=(new Date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return console.log(t),Object(_.jsxs)(P,{margin:!0,padding:!0,mode:t,children:[Object(_.jsx)(rn,{mode:t}),Object(_.jsxs)(P,{margin:!1,padding:!1,mode:t,children:[Object(_.jsx)(an,{mode:t,children:r}),Object(_.jsx)(ln,{img:t?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAB+0lEQVRIic2VvW9NYRzHv0/dtq5NX9gMikTUQGoz6iahNRj4BwyNDo0JiUTC0AFDU1MXxNJEJ5MFYSAGtXmJW7E0bhOGy9XbfgznKzk9zjn3PJtf8uSc8/t9X57zku+RIgqYBeZiOFEFbACbMZxapEdPJH4rATgJXAP6CvArkhp5A6APuAKcKHQDnpDUUp4JMAAMFIgvmfu4zGAUWDXwhnvbgElgAXjmtQBMAD3G3DRnFRgtNEiZvADOAYeBZYrrrfHnzSkXzxgdBX5Y6D0wDRz3mnYP4DtwpLKwxevAZwvcA/pzMP3AA2M+AdtjDC6a+AroLcH1Aq+NnYoxeG7SRAXspLFP8+YBeChpn69fhhCmgDVJOyUNhhDWuhgMSvomqSlpt6T7aT35Jf2thkktX9cr3EHd2BawI6tXs9se4z/6+EXSAUkHJb3p4nHIx0YIoQXk6f2zqzvewXyFO7hr7O1u2DRpP/Ab6ACnSnCnSRK2DYxUNjD5kne2DlwHhlOzYffWjZmJEa4BZ4Ah4CqwaZEO8MGr494GcBnYBZwFyuOfJBUXTZ517xhJUv5MfR0t4BEwZswt9xcpjvotL6xJJrhIomEE2EsmOkhCsZn3YWT/UG1JXyWNhxDepQchhLakC5JmfJ6eLUsaN/dX6WMqK/7Hf3KswYokYgh/AKTTk7ccRA3mAAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABRElEQVRIie3WTStFQRzH8Y+nrO4LcD0UygvwApQdKUqyscNKUl6HlbWFFXsb1l6CpYVCWCmxkISxOOdsDvfeM9edu/Kt6TQ1M99/v+bMDP90ib6IsXX04y1RLT8YxhGucnFXWMULAva6Jd3FVy4NmOuGdLUkDbLIkzKEp5I0YDC1+PgXaUAtpbSO9wbiqU6Kekv9NQw0GDuRUjzbZOxCJ8Vlbvwec8CtuJMuitcm4oCNVOLilGrU7iTa3ZctxAGnEkR+VkEcsO/nxvwT2xXFASc6GPsoPiLk99jURvTlCS8Yw3TF+TUsYh2TeTHFY6FfdhLO5N/rVosNa727Y9qz7OKpxLy4yBu1L6xUlRbs4PMP0k9sxUoLFrUX+xOW25UW1HGgWvQfOJT9HU3piShgBEuyW2o87/fhERc4lz0iHiLW/Cc938MOv39AHNkAAAAAAElFTkSuQmCC",onClick:function(){var n,r,o=t;console.log(!o),n=V,r=!o,localStorage.setItem(n,JSON.stringify(r)),e(Q(!o))}})]})]})},$=t.p+"static/media/Logoicon.edf64844.svg",nn=B.default.div(c||(c=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),en=B.default.img(l||(l=Object(S.a)(["\n  width: 5rem;\n  height: 5rem;\n  border-radius: 50%;\n  border: 1px solid ",";\n"])),(function(n){return n.theme.colors.blue.normal})),tn=B.default.h1(s||(s=Object(S.a)(["\n  font-size: 2.5rem;\n  color: ",";\n  margin-left: 2rem;\n"])),(function(n){var e=n.theme;return n.mode?"white":e.colors.primary.normal})),rn=function(n){var e=n.mode;return Object(_.jsxs)(nn,{children:[Object(_.jsx)(en,{src:$}),Object(_.jsx)(tn,{mode:e,children:"Apptodo"})]})},on=B.default.div(d||(d=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  padding: 0;\n  margin: 0;\n\n  .headerText {\n    font-size: 2rem;\n    color: ",";\n    padding: 1rem 2rem;\n    background-color: ",";\n  }\n"])),(function(n){var e=n.theme;return n.mode?"white":e.colors.blue.normal}),(function(n){var e=n.theme;return n.mode?e.colors.blue.normal:e.colors.gray.light})),an=function(n){return Object(_.jsx)(on,{mode:n.mode,children:Object(_.jsx)("p",{className:"headerText",children:n.children})})},cn=B.default.div(m||(m=Object(S.a)(["\n  width: 4rem;\n  height: 4rem;\n  margin-left: 2rem;\n  border-radius: 50%;\n  border: 2px solid ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n\n  .dm-img {\n    height: 100%;\n  }\n"])),(function(n){return n.theme.colors.gray.light})),ln=function(n){return Object(_.jsx)(cn,{onClick:n.onClick,children:Object(_.jsx)("img",{src:n.img,alt:"Logo"})})},sn=B.default.ul(u||(u=Object(S.a)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n\n  @media "," {\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n  }\n"])),M.tablet),dn=t(20),mn=B.default.li(b||(b=Object(S.a)(["\n  & a {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n\n    border-radius: 1rem;\n    width: 9rem;\n    height: 10rem;\n    background-color: ",";\n    margin: 1rem 0;\n    text-decoration: none;\n  }\n\n  & a:hover {\n    transform: scale(1.05);\n    background-color: ",";\n  }\n  .image {\n    width: 4rem;\n    height: 4rem;\n  }\n  .title {\n    font-size: 1.6rem;\n    font-weight: 700;\n    color: white;\n  }\n"])),(function(n){return n.bgColor}),(function(n){return n.bgColorHover})),un=function(n){return Object(_.jsx)(mn,{bgColor:n.bgColor,bgColorHover:n.bgColorHover,children:Object(_.jsxs)(dn.b,{to:n.link,exact:n.exact,children:[Object(_.jsx)("img",{className:"image",src:n.imageSrc,alt:"Nav"}),Object(_.jsx)("p",{className:"title",children:n.children})]})})},bn=function(){return Object(_.jsxs)(sn,{children:[Object(_.jsx)(un,{imageSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA3klEQVRIie2UO47CMBRF70OwhakQNQVUQwVDRYXYB3vhsx02QM8qHAmR2QDdocCgYBInGVIgDVeKFNnP5zwrdqR3CNABtsCvfzZAu0nBmues/gJaAEkO7JYx8BOZd8A8y7RA4CR1Iz1M/Zp9pMaZWa9IQOXtRmJmd26rCWAs/1uQShrp+uEbF6SSZmZ2kHSuvCrnXE+AEXDKjJ2Aga8fBHNET2KO4DsAlcLrCkJgKbyuACAFhpmaPnAsgoeCqjc5lbTw7ztJX4Vd6vEmf34VtQVJA0wXEyxflDjP+KR6LteLg/BnlYo9AAAAAElFTkSuQmCC",bgColor:F.colors.taskIcon.light,bgColorHover:F.colors.taskIcon.normal,link:"/",exact:!0,children:"Tasks"}),Object(_.jsx)(un,{imageSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAcElEQVRIie2SwQrAMAhD4+h/uz9PL+tgtGLZlF18p0JDghohSSRyZJoDQBsPEZFI47GZ9AkqwKVZH7v19cphBkS1qm5wY620bvB/gHmDXbwyZE9wghdvHWijD0FwgE6CwABdCoIC1BN8YTYPDFibA+j8KhyzgiWM8QAAAABJRU5ErkJggg==",bgColor:F.colors.notesIcon.light,bgColorHover:F.colors.notesIcon.normal,link:"/notes",children:"Nodes"}),Object(_.jsx)(un,{imageSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAENklEQVRoge2azW8VVRjGnyPqbdUStJ+6EaUmWioaSawJYEOCJd1oNyaixq26IIDxH9B0RdgQjYkbSAj+AUaJ8rGwEUNTSVhgSinERa0L7K0SwOBtS38szhmZ3s7MnTl3prdNeJKbzL3zfjzPnDPn4z1Xuo/VBZNXIOBxSf2StknqkbRJUoekR53Jv5KuSfpd0riks5JGjDHX8+LgDaAEvAecBBbIjgXgB+BdoNQIAc3AJ8CfHuTjMA3sB5pWSsQgcDVHAdW4AuwuUkAJOFyggGocA5rzFtEJnF9BEQHGgI68RGzENnejMAlszKMlkkTcAU4AHwEvARuc3+sJPtudTQuwxfmecLGSxPi1DNBEfHdaBI4D3TG+2xJI7Yzx6Qa+cbGjMIbPEA18FROwTGhUATYBw8AoMJsgoBr/OJ9h4NlQvMGEOF9kFTEYE+girr8C7cBRkrtEWiwAR4B2F/sZ4LcY24G0IpqJnicuA53O5jXgjxwEVGMK6HM5uoh+PydJ08WwM3YUtrj7A8B/BYgIcBt4w+V6OcZmXzVvUyWiJLuoeypCY7+keUmndW8hWBRuSRqQ9LCknyLuT0vqNsZUIr2xC8C1gj1h7g9Uafkgh6e5Ung//OX/roXdT8xIWrfSjDyxIKnVGHNDWtoi/comYkbSZ5L6JLUYY4ykLklvSjoqaS7Gb07SEWfX6fzWuzifSyqnzP+g47wUwKEM/fNHoDUpC3aIjkJfDb824FRKHgcDv3CLPJ/ySfwqacgYMws8GUHkLaBX0kMx/iXgRWAowrfLGFOWba3zKbi8sOwX7ESTBj3O/mPsmH8AeMI9yU+BSso4FWffBrS6OLeBD138zSliTAT8wy97WVJid3HYIduSp2XH+bwxJ2mX4zZSw7ZsjGmXlgqpFESsSFSMMU3S8nlkzSIs5FbDWPjjRnARFpJ2/F5NmA0uwkKuNoBIvbgSXISFjDeASL24FFyEhfzSACL14ufgIjz8bpB9T9bKonFeUtuyRaOrip9pFCsPnApESMvnkWM5JbkuaVhSr6RH3KfX/ZbXMcLx2DvY+u50yrVSHM7hqiExOTqwZaB6MAUkr0KwpX1fjAM19/PAY87WF3tr5QgqjD613kXg1ZoJ7uXZSnxVMQkTpK04Ars9EnyXVkQoz7cZcywCu7Im+TJjkrc9hAxlzHE4a47gxR/LkKTHI0dvhvijJLzgiae62FL+WUnPpeC1KOmc7GbogqQJSX+7j2Q3bW2y29NXJO2UtLUWB4dJSduNMTMpbKOBPehJuw0uApeBp70FVInpIFs3ywujJMxJvmKCw1CfIdMHX1Pk2Tu2Gl9kV5sg6xBbh5gSsI98z0imgL006B8QJWAP9jBz3oP8PPA98A611k41kOefatbL1mJ3yA6x3ZLaJbU4k5uS/pLdUl+S3RSNGGNu5sXhPlYT7gKh/UhZ7IXnOgAAAABJRU5ErkJggg==",bgColor:F.colors.boredIcon.light,bgColorHover:F.colors.boredIcon.normal,link:"/bored",children:"Bored ?"})]})},gn=B.default.button(g||(g=Object(S.a)(["\n  display: flex;\n  padding: 1.5rem 2rem;\n  background: ",";\n  border: none;\n  cursor: pointer;\n  color: white;\n  font-size: 1.6rem;\n  transition: background 0.4s ease;\n  font-weight: 600;\n  align-self: flex-start;\n  &:hover {\n    background: ",";\n  }\n\n  &:focus {\n    outline: none;\n  }\n"])),(function(n){var e=n.theme,t=n.bcColor;return t||e.colors.primary.normal}),(function(n){var e=n.theme,t=n.bcColorHover;return t||e.colors.primary.dark})),hn=Object(B.default)(gn)(h||(h=Object(S.a)(["\n  border-radius: 4px;\n"]))),fn=Object(B.default)(gn)(f||(f=Object(S.a)(["\n  border-radius: 50%;\n"]))),jn="Square",pn="Circle",xn=function(n){var e=n.variant,t=n.bcColor,r=n.bcColorHover,o=n.clicked,a=n.children,i=Object(k.useMemo)((function(){switch(e){case jn:return hn;case pn:return fn;default:return hn}}),[e]),c=Object(k.useMemo)((function(){return Object(_.jsx)(i,{bcColor:t,bcColorHover:r,onClick:o,children:a})}),[e,t,r,o,a]);return Object(_.jsx)(k.Fragment,{children:c})},An=B.default.div(j||(j=Object(S.a)(["\n  display: block;\n  width: 35%;\n  margin: 1rem;\n\n  @media "," {\n    width: 48%;\n  }\n\n  & h2 {\n    font-size: 2.4rem;\n    color: ",";\n    text-align: center;\n  }\n\n  & ul {\n    list-style: none;\n    width: 100%;\n    margin: 0 auto;\n    padding: 0.1rem 0 1rem 0;\n    border-radius: 1rem;\n    background-color: ",";\n    min-height: 85%;\n  }\n"])),M.mobileXL,(function(n){n.theme;return n.mode?"white":"black"}),(function(n){var e=n.theme;return n.mode?e.colors.gray.normal2:e.colors.gray.light})),On=B.default.li(p||(p=Object(S.a)(["\n  //text-align: center;\n  display: flex;\n  align-items: center;\n  font-size: 1.6rem;\n  border: 2px solid\n    ",";\n  background-color: ",";\n  padding: 0.8rem 1rem;\n  margin: 1rem 0.8rem 0 0.8rem;\n  border-radius: 4px;\n  color: ",";\n  text-decoration: ",";\n\n  .dl-square {\n    color: white;\n    border: 1px solid black;\n    cursor: pointer;\n    font-size: 1.8rem;\n    margin-right: 0.4rem;\n  }\n\n  .dl-close {\n    margin-left: auto;\n    cursor: pointer;\n  }\n"])),(function(n){var e=n.theme;return n.completed?e.colors.orange.normal:e.colors.taskIcon.normal}),(function(n){var e=n.theme,t=n.mode,r=n.completed;return t?e.colors.blue.normal:r?e.colors.orange.light:e.colors.taskIcon.light}),(function(n){n.theme;return n.mode?"white":"black"}),(function(n){return n.completed?"line-through":"none"})),vn=t(15),kn=t(16),wn=function(n){var e=n.mode,t=n.children,r=n.completed,o=n.taskCompleted,a=n.indexKey,i=n.closeTask;return Object(_.jsxs)(On,{mode:e,completed:r,children:[r?null:Object(_.jsx)(vn.a,{icon:kn.b,className:"dl-square",onClick:function(n){return o(n,a)}}),t,Object(_.jsx)(vn.a,{icon:kn.c,className:"dl-close",onClick:function(n){return i(n,a,r)}})]})},yn=function(n){var e=n.mode,t=n.completed,r=n.tasks,o=n.taskCompleted,a=n.closeTask;return Object(_.jsxs)(An,{mode:e,children:[Object(_.jsx)("h2",{children:"tekst"}),Object(_.jsx)("ul",{children:null===r||void 0===r?void 0:r.map((function(n){return Object(_.jsx)(wn,{mode:e,completed:t,taskCompleted:o,indexKey:n.id,closeTask:a,children:n.name},n.id)}))})]})},Cn=B.default.div(x||(x=Object(S.a)(["\n  height: 20rem;\n  width: 28rem;\n  background-color: ",";\n  border-radius: 0.8rem;\n  overflow-y: ",";\n  font-size: 1.6rem;\n  border-top: 0.6rem solid\n    ",";\n  color: ",";\n  .wrapper {\n    position: relative;\n    padding: 1rem;\n    height: ",";\n  }\n  .trash {\n    position: absolute;\n    bottom: 1rem;\n    right: 1.5rem;\n    font-size: 2.4rem;\n    color: ",";\n  }\n"])),(function(n){var e=n.mode,t=n.theme,r=n.bgColor;return e?t.colors.blue.normal:r}),(function(n){return n.lengthText>25?"scroll":"none"}),(function(n){var e=n.theme;return n.mode?e.colors.primary.normal:e.colors.gray.normal2}),(function(n){n.theme;return n.mode?"white":"black"}),(function(n){return n.lengthText>25?"inhert":"100%"}),(function(n){var e=n.mode,t=n.theme;return e?"white":t.colors.gray.dark})),Sn=function(n){var e=n.isMode,t=n.arrayNotes,r=n.clicked;return Object(_.jsx)(k.Fragment,{children:t.map((function(n){return Object(_.jsx)(Cn,{mode:e,lengthText:n.name.length,bgColor:n.bgColor,children:Object(_.jsxs)("div",{className:"wrapper",children:[n.name,Object(_.jsx)(vn.a,{icon:kn.d,className:"trash",onClick:function(e){return r(e,n.id)}})]})},n.id)}))})},Bn=function(n){return Object(_.jsx)(k.Fragment,{children:Object(_.jsxs)(H,{mode:n.mode,children:[Object(_.jsx)(q,{}),Object(_.jsxs)("div",{className:"layout-main",children:[Object(_.jsx)("div",{className:"layout-navigation",children:Object(_.jsx)(bn,{})}),Object(_.jsx)("div",{className:"layout-content",children:n.children})]})]})})},Jn=t(26),Nn=t(12),Ln=B.default.div(A||(A=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-basis: 100%;\n  padding: 2rem 1rem;\n\n  .task-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 0 1rem;\n\n    @media "," {\n      flex-wrap: wrap;\n    }\n    &--inputDiv {\n      display: flex;\n\n      & input {\n        display: block;\n        padding: 1rem 2rem;\n        border-radius: 4px;\n        text-decoration: none;\n        border: none;\n        background-color: ",";\n        margin: 0 1rem;\n        width: 35rem;\n        font-size: 1.6rem;\n        color: ",";\n\n        @media "," {\n          width: 100%;\n        }\n      }\n      & input:focus {\n        outline: none;\n      }\n    }\n\n    &--text {\n      font-size: 2rem;\n      margin-right: 2rem;\n\n      & span {\n        margin-right: 1rem;\n        background-color: ",";\n        font-weight: 700;\n        color: ",";\n        border-radius: 4px;\n        font-size: 2.4rem;\n        padding: 0.3rem 0.6rem;\n      }\n    }\n  }\n  .task-main {\n    display: flex;\n    flex-direction: column;\n    margin-top: 2rem;\n\n    &--content {\n      display: flex;\n      justify-content: center;\n      overflow-y: scroll;\n      height: 30rem;\n\n      @media "," {\n        justify-content: space-evenly;\n      }\n      @media "," {\n        justify-content: space-between;\n      }\n      @media "," {\n        justify-content: center;\n      }\n    }\n  }\n"])),M.mobileXL,(function(n){var e=n.theme;return n.mode?e.colors.blue.normal:e.colors.gray.light}),(function(n){var e=n.theme;return n.mode?"white":e.colors.gray.dark}),M.tabletL,(function(n){var e=n.theme;return n.mode?e.colors.blue.normal:e.colors.gray.light}),(function(n){return n.theme.colors.taskIcon.normal}),M.tabletL,M.mobileXL,M.mobileL),zn=function(n){var e=Object(k.useState)(""),t=Object(Nn.a)(e,2),r=t[0],o=t[1],a=Object(k.useState)([]),i=Object(Nn.a)(a,2),c=i[0],l=i[1],s=Object(k.useState)([]),d=Object(Nn.a)(s,2),m=d[0],u=d[1],b=Object(Y.c)((function(n){return n.mode.isMode})),g=Object(Y.b)(),h=function(n){n([])},f=function(n,e){n((function(n){return[].concat(Object(Jn.a)(n),[{id:(new Date).getTime(),name:e}])}))},j=function(n,e,t){var r=e.find((function(e){return e.id===n}));return t(e.filter((function(e){return e.id!==n}))),r},p=function(n,e){if(void 0!==e){var t=j(e,c,l);f(u,t.name)}},x=function(n,e,t){t?j(e,m,u):j(e,c,l)};return Object(_.jsxs)(Ln,{mode:b,children:[Object(_.jsxs)("div",{className:"task-header",children:[Object(_.jsxs)("div",{className:"task-header--inputDiv",children:[Object(_.jsx)("input",{type:"text",placeholder:"What is on your list today?",onChange:function(n){o(n.target.value)},value:r}),Object(_.jsx)(xn,{variant:jn,bcColor:F.colors.primary.normal,bcColorHover:F.colors.primary.dark,clicked:function(){0!==r.length&&(f(l,r),g(W(r)),o(""))},children:"Add"})]}),Object(_.jsxs)("p",{className:"task-header--text",children:[Object(_.jsx)("span",{children:c.length}),"Task Left"]})]}),Object(_.jsxs)("div",{className:"task-main",children:[Object(_.jsxs)("div",{className:"task-main--content",children:[Object(_.jsx)(yn,{mode:b,completed:!1,tasks:c,taskCompleted:p,closeTask:x}),Object(_.jsx)(yn,{mode:b,completed:!0,tasks:m,taskCompleted:p,closeTask:x})]}),Object(_.jsx)(xn,{variant:jn,clicked:function(){h(u),h(l)},children:"Clear all"})]})]})},En=t(17),Tn=t.n(En),Dn=t(27),Un=B.default.div(O||(O=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-basis: 100%;\n  padding: 2rem 1rem;\n  .bored {\n    &__header {\n      color: ",";\n      text-align: center;\n      &--primary {\n        font-size: 3rem;\n        font-weight: 700;\n      }\n      &--secondary {\n        font-size: 2rem;\n        color: ",";\n      }\n    }\n\n    &__main {\n      margin: 5%;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n\n      @media "," {\n        margin: 5% 0;\n      }\n      @media "," {\n        flex-wrap: wrap;\n        justify-content: center;\n      }\n    }\n\n    &__img {\n      width: 20rem;\n      height: 20rem;\n    }\n    &__randomActiv {\n      width: 29rem;\n      min-height: 20rem;\n      border: 2px solid\n        ",";\n      border-radius: 1rem;\n      background-color: ",";\n      display: flex;\n      flex-direction: column;\n      padding: 2rem 1rem;\n      align-items: center;\n      margin-right: 20%;\n      position: relative;\n      @media "," {\n        margin: 0;\n      }\n      &--text {\n        margin-top: 5%;\n        font-size: 2.6rem;\n        color: ",";\n        text-align: center;\n      }\n    }\n  }\n\n  .customSpinner {\n    font-size: 5rem;\n    position: absolute;\n    top: 50%;\n    left: 45%;\n    transform: translate(-50%, -50%);\n  }\n  .itemCenter {\n    text-align: center;\n  }\n"])),(function(n){n.theme;return n.mode?"white":"black"}),(function(n){var e=n.theme;return n.mode?"white":e.colors.gray.normal2}),M.tabletL,M.mobileL,(function(n){var e=n.mode,t=n.theme;return e?"white":t.colors.gray.normal}),(function(n){var e=n.theme;return n.mode?e.colors.blue.normal:"white"}),M.tabletL,(function(n){var e=n.theme;return n.mode?"white":e.colors.gray.normal2})),Rn=t.p+"static/media/boredCat.72c38e69.svg",Mn=function(n){var e=Object(Y.c)((function(n){return n.mode.isMode})),t=Object(k.useState)(""),r=Object(Nn.a)(t,2),o=r[0],a=r[1],i=Object(k.useState)(!1),c=Object(Nn.a)(i,2),l=c[0],s=c[1];Object(k.useEffect)((function(){function n(){return(n=Object(Dn.a)(Tn.a.mark((function n(){var e;return Tn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d();case 2:e=n.sent,a(e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}s(!0),function(){n.apply(this,arguments)}(),s(!1)}),[]);var d=function(){var n=Object(Dn.a)(Tn.a.mark((function n(){return Tn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("http://www.boredapi.com/api/activity/").then((function(n){return n.json()})).then((function(n){return console.log("Work"),n.activity})).catch((function(n){return console.log(n)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),m=function(){var n=Object(Dn.a)(Tn.a.mark((function n(){var e;return Tn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(!0),n.next=3,d();case 3:e=n.sent,console.log(e),a(e),s(!1);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(_.jsxs)(Un,{mode:e,children:[Object(_.jsxs)("div",{className:"bored__header",children:[Object(_.jsx)("h2",{className:"bored__header--primary",children:"Feeling Bored ?"}),Object(_.jsx)("p",{className:"bored__header--secondary",children:"Don't worry. I can help you find something to do."})]}),Object(_.jsxs)("div",{className:"bored__main",children:[Object(_.jsx)("img",{src:Rn,alt:"Zdjecie",className:"bored__img"}),Object(_.jsxs)("div",{className:"bored__randomActiv",children:[Object(_.jsxs)("div",{className:"itemCenter",children:[" ",Object(_.jsx)(xn,{variant:jn,clicked:m,children:"Random activity"})]}),l?null:Object(_.jsx)("p",{className:"bored__randomActiv--text",children:o}),l?Object(_.jsx)(vn.a,{icon:kn.a,className:"fa-spin customSpinner"}):null]})]})]})},In=B.default.div(v||(v=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-basis: 100%;\n  padding: 2rem 1rem;\n  .notes-header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 0 1rem;\n\n    &--title {\n      color: ",";\n      font-size: 3rem;\n      font-weight: 700;\n    }\n\n    &__div {\n      display: flex;\n\n      & input {\n        padding: 1rem 2rem;\n        border-radius: 4px;\n        text-decoration: none;\n        border: none;\n        background-color: ",";\n        margin: 0 1rem;\n        max-width: 35rem;\n        font-size: 1.6rem;\n        color: ",";\n      }\n      & input:focus {\n        outline: none;\n      }\n    }\n  }\n  .notes-main {\n    padding: 2rem 0;\n    display: flex;\n    justify-content: center;\n    overflow-y: scroll;\n    gap: 5rem;\n    height: 30rem;\n    flex-wrap: wrap;\n  }\n"])),(function(n){n.theme;return n.mode?"white":"black"}),(function(n){var e=n.theme;return n.mode?e.colors.blue.normal:e.colors.gray.light}),(function(n){var e=n.theme;return n.mode?"white":e.colors.gray.dark})),Xn=function(n){var e=Object(Y.c)((function(n){return n.mode.isMode})),t=Object(k.useState)(""),r=Object(Nn.a)(t,2),o=r[0],a=r[1],i=Object(k.useState)([]),c=Object(Nn.a)(i,2),l=c[0],s=c[1];return console.log(l),Object(_.jsxs)(In,{mode:e,lengthText:50,children:[Object(_.jsxs)("div",{className:"notes-header",children:[Object(_.jsx)("h2",{className:"notes-header--title",children:"Brainstrom your ideas"}),Object(_.jsxs)("div",{className:"notes-header__div",children:[Object(_.jsx)("input",{type:"text",placeholder:"// Write a short note here..",onChange:function(n){a(n.target.value)},value:o}),Object(_.jsx)(xn,{clicked:function(){if(0!=o.length){var n=function(){var n=Math.round,e=Math.random;return"rgba("+n(255*e())+","+n(255*e())+","+n(255*e())+",0.7)"}();e=o,t=n,s((function(n){return[].concat(Object(Jn.a)(n),[{id:(new Date).getTime(),name:e,bgColor:t}])})),a("")}var e,t},variant:pn,children:"+"})]})]}),Object(_.jsx)("div",{className:"notes-main",children:Object(_.jsx)(Sn,{isMode:e,arrayNotes:l,clicked:function(n,e){var t=l.filter((function(n){return n.id!==e}));s(t)}})})]})},Fn=t(6),Yn=function(n){var e=Object(Y.c)((function(n){return n.mode.isMode})),t=Object(Y.b)();return Object(k.useEffect)((function(){Z(V)&&(console.log(Z(V)),t(Q(Z(V))))}),[]),Object(_.jsx)(B.ThemeProvider,{theme:F,children:Object(_.jsxs)(k.Fragment,{children:[Object(_.jsx)(I,{mode:e}),Object(_.jsxs)(X,{mode:e,children:[Object(_.jsx)(Bn,{mode:e,children:Object(_.jsxs)(Fn.c,{children:[Object(_.jsx)(Fn.a,{path:"/bored",exact:!0,component:Mn}),Object(_.jsx)(Fn.a,{path:"/notes",exact:!0,component:Xn}),Object(_.jsx)(Fn.a,{path:"/",exact:!0,component:zn})]})}),Object(_.jsxs)("div",{className:"container-right",children:[Object(_.jsxs)("div",{className:"container-right__topButton",children:[Object(_.jsx)(xn,{variant:jn,children:"Focus"}),Object(_.jsx)(xn,{variant:jn,children:"Relax"})]}),"Tekst raz dwa"]})]})]})})},Hn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,57)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;t(n),r(n),o(n),a(n),i(n)}))},Pn=t(19),Gn=t(40),Kn=t(23),Qn={taskReducer:[],taskCompletedReducer:[]},Wn={isMode:!1},Vn=t(41),Zn=(Object(Vn.createLogger)(),[Gn.a]);var _n=Object(Pn.c)({mode:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Wn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case K:return Object(Kn.a)(Object(Kn.a)({},n),{},{isMode:e.payload});default:return n}},tasks:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case G:var t=(new Date).getTime(),r=e.payload.toString(),o={id:t,name:r};return Object(Kn.a)(Object(Kn.a)({},n),{},{taskReducer:n.taskReducer.concat(o)});default:return n}}}),qn=Object(Pn.d)(_n,Pn.a.apply(void 0,Zn));C.a.render(Object(_.jsx)(w.a.StrictMode,{children:Object(_.jsx)(Y.a,{store:qn,children:Object(_.jsx)(dn.a,{children:Object(_.jsx)(Yn,{})})})}),document.getElementById("root")),Hn()}},[[56,1,2]]]);
//# sourceMappingURL=main.3f19987c.chunk.js.map