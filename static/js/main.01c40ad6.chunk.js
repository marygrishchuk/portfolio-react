(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],[,,,,function(e,t,i){e.exports={contactMe:"ContactMe_contactMe__1igrb",form:"ContactMe_form__2OgnK",formGroup:"ContactMe_formGroup__1wum8",field:"ContactMe_field__3N0u5",textarea:"ContactMe_textarea__1EVae",formLabel:"ContactMe_formLabel__3rxDd",error:"ContactMe_error__dZ13v"}},,,,function(e,t,i){e.exports={container:"Project_container__1IsU1",screenshot:"Project_screenshot__2f37_",btn:"Project_btn__28ULL",infoBlock:"Project_infoBlock__25-uk",projectTitle:"Project_projectTitle__asyKq",description:"Project_description__3wGeD"}},function(e,t,i){e.exports={btn:"Button_btn__3Wf15"}},,,,function(e,t,i){e.exports={skill:"Skill_skill__3e0N3",logo:"Skill_logo__OFl81",skillInfo:"Skill_skillInfo__CFKcR",skillTitle:"Skill_skillTitle__1eZ4W",description:"Skill_description__3j0-c"}},,function(e,t,i){e.exports={footer:"Footer_footer__nJIo_",icons:"Footer_icons__2HI06",icon:"Footer_icon__mLcYd",title:"Footer_title__3kOgP"}},,function(e,t,i){},,,function(e,t,i){e.exports={container:"Container_container__2ywgN"}},,,,function(e,t,i){e.exports={homePage:"HomePage_homePage__1I5cY",text:"HomePage_text__Ku6xT",photo:"HomePage_photo__3K6Hx"}},,,,,function(e,t,i){e.exports={hireMe:"HireMe_hireMe__ixG9p",title:"HireMe_title__3PTDE"}},function(e,t,i){e.exports={header:"Header_header__22IHb"}},function(e,t,i){e.exports={navbar:"Navbar_navbar__2O9qh"}},function(e,t,i){e.exports={skills:"Skills_skills__w6dmQ"}},function(e,t,i){e.exports={title:"Title_title__NNkDU"}},function(e,t,i){e.exports={projects:"Projects_projects__1NN7G"}},,,,,,,,,,,function(e,t,i){},,,,,,,,function(e,t,i){"use strict";i.r(t);i(0);var c=i(19),a=i.n(c),s=(i(45),i(17),i(30)),r=i.n(s),o=i(31),n=i.n(o),l=i(1);var d=function(){return Object(l.jsxs)("div",{className:n.a.navbar,children:[Object(l.jsx)("a",{href:"#home",children:"Home"}),Object(l.jsx)("a",{href:"#skills",children:"Skills"}),Object(l.jsx)("a",{href:"#projects",children:"Projects"}),Object(l.jsx)("a",{href:"#contact-me",children:"Contact Me"})]})};var h=function(){return Object(l.jsx)("div",{className:r.a.header,children:Object(l.jsx)(d,{})})},j=i(24),b=i.n(j),m=i.p+"static/media/photo.d6b09514.jpg";var u=function(){return Object(l.jsxs)("div",{className:"chapter ".concat(b.a.homePage),id:"home",children:[Object(l.jsxs)("div",{className:b.a.text,children:[Object(l.jsx)("h6",{children:"Hi There! I'm"}),Object(l.jsx)("h1",{children:"Mary Grishchuk"}),Object(l.jsx)("h2",{children:"A Front-end Developer."})]}),Object(l.jsx)("div",{className:b.a.photo,children:Object(l.jsx)("img",{src:m,alt:"avatar"})})]})},p=i(32),g=i.n(p),A=i(20),x=i.n(A),O=i(13),f=i.n(O),v=function(e){var t=e.skill;return Object(l.jsxs)("div",{className:f.a.skill,children:[Object(l.jsx)("div",{className:f.a.logo,children:Object(l.jsx)("div",{style:{backgroundImage:"url(".concat(t.logo,")")}})}),Object(l.jsxs)("div",{className:f.a.skillInfo,children:[Object(l.jsx)("h5",{className:f.a.skillTitle,children:t.skillTitle}),Object(l.jsx)("p",{className:f.a.description,children:t.description})]})]})},w=i(33),T=i.n(w),C=function(e){var t=e.text;return Object(l.jsx)("h3",{className:T.a.title,children:t})},E=function(e){var t=e.skills;return Object(l.jsxs)("div",{className:"".concat(g.a.skills," chapter"),id:"skills",children:[Object(l.jsx)(C,{text:"My Skills"}),Object(l.jsx)("div",{className:x.a.container,children:t.map((function(e){return Object(l.jsx)(v,{skill:e},e.id)}))})]})},D=i(34),N=i.n(D),F=i(8),y=i.n(F),R=i(9),I=i.n(R),P=function(e){var t=e.project,i={backgroundImage:"url(".concat(t.screenshot,")")};return Object(l.jsxs)("div",{className:y.a.container,children:[Object(l.jsx)("div",{className:y.a.screenshot,style:i,children:Object(l.jsx)("a",{className:"".concat(I.a.btn," ").concat(y.a.btn),href:t.url,target:"_blank",rel:"noreferrer",children:"View"})}),Object(l.jsxs)("div",{className:y.a.infoBlock,children:[Object(l.jsx)("h6",{className:y.a.projectTitle,children:Object(l.jsx)("a",{href:t.url,children:t.projectTitle})}),Object(l.jsx)("p",{className:y.a.description,children:t.description})]})]})},k=function(e){var t=e.projects;return Object(l.jsxs)("div",{className:"".concat(N.a.projects," chapter"),id:"projects",children:[Object(l.jsx)(C,{text:"My Projects"}),Object(l.jsx)("div",{className:x.a.container,children:t.map((function(e){return Object(l.jsx)(P,{project:e},e.id)}))})]})},M=i(7),Q=i(4),G=i.n(Q),z=i(10),B="SET_FORM_DATA",L={name:"",email:"",messageText:""},Z=function(e){return function(t){var i,c,a;t((i=e.name,c=e.email,a=e.messageText,{type:B,name:i,email:c,messageText:a})),console.log("The following data have been sent to the server: ",e.name,e.email,e.messageText),alert("Your message has been successfully sent. Please wait for a reply to your email.")}},H=i(40),q=function(){var e=Object(z.b)(),t=Object(H.a)({initialValues:{name:"",email:"",messageText:""},validate:function(e){var t={};return e.name||(t.name="Name is required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Email is required",e.messageText||(t.messageText="Message is required"),t},onSubmit:function(i){e(Z(i)),t.resetForm()}});return Object(l.jsxs)("div",{className:"".concat(G.a.contactMe," chapter"),id:"contact-me",children:[Object(l.jsx)(C,{text:"Contact Me"}),Object(l.jsxs)("form",{onSubmit:t.handleSubmit,className:G.a.form,children:[Object(l.jsxs)("div",{className:G.a.formGroup,children:[Object(l.jsx)("input",Object(M.a)({className:G.a.field,type:"text"},t.getFieldProps("name"))),Object(l.jsx)("label",{className:G.a.formLabel,children:"*Name"}),t.touched.name&&t.errors.name?Object(l.jsx)("div",{className:G.a.error,children:t.errors.name}):null]}),Object(l.jsxs)("div",{className:G.a.formGroup,children:[Object(l.jsx)("input",Object(M.a)({className:G.a.field,type:"email"},t.getFieldProps("email"))),Object(l.jsx)("label",{className:G.a.formLabel,children:"*E-mail"}),t.touched.email&&t.errors.email?Object(l.jsx)("div",{className:G.a.error,children:t.errors.email}):null]}),Object(l.jsxs)("div",{className:G.a.formGroup,children:[Object(l.jsx)("textarea",Object(M.a)({className:"".concat(G.a.field," ").concat(G.a.textarea)},t.getFieldProps("messageText"))),Object(l.jsx)("label",{className:G.a.formLabel,children:"*Message"}),t.touched.messageText&&t.errors.messageText?Object(l.jsx)("div",{className:G.a.error,children:t.errors.messageText}):null]}),Object(l.jsx)("button",{className:I.a.btn,type:"submit",children:"Send"})]})]})},Y=i(29),X=i.n(Y),U=function(){return Object(l.jsxs)("div",{className:"".concat(X.a.hireMe," chapter"),children:[Object(l.jsx)("h4",{className:X.a.title,children:"I'd love to take part in your project"}),Object(l.jsx)("a",{className:I.a.btn,href:"https://www.linkedin.com/in/marygrishchuk/",target:"_blank",rel:"noreferrer",children:"Hire Me"})]})},K=i(15),J=i.n(K),V=i.p+"static/media/codewars.55089a8d.svg",S=i(25),W=i(23),_=i(38),$=function(){return Object(l.jsxs)("div",{className:J.a.footer,children:[Object(l.jsxs)("div",{className:J.a.icons,children:[Object(l.jsx)("a",{href:"https://github.com/marygrishchuk",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(S.a,{icon:W.a,inverse:!0,size:"lg"})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/marygrishchuk/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(S.a,{icon:W.b,inverse:!0,size:"lg"})}),Object(l.jsx)("a",{href:"mailto: mary.grishchuk1@gmail.com",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(S.a,{icon:_.a,inverse:!0,size:"lg"})}),Object(l.jsx)("a",{href:"https://www.codewars.com/users/marygrishchuk/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:V,alt:"codewars",className:J.a.icon})})]}),Object(l.jsx)("h5",{className:J.a.title,children:"Mary Grishchuk"}),Object(l.jsx)("p",{children:"\xa9 2021 marygrishchuk, All Rights Reserved."})]})},ee=function(){var e=Object(z.c)((function(e){return e}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(h,{}),Object(l.jsx)(u,{}),Object(l.jsx)(E,{skills:e.skills.skills}),Object(l.jsx)(k,{projects:e.projects.projects}),Object(l.jsx)(U,{}),Object(l.jsx)(q,{}),Object(l.jsx)($,{})]})},te=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,54)).then((function(t){var i=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;i(e),c(e),a(e),s(e),r(e)}))},ie=i(12),ce={skills:[{id:"005",skillTitle:"JavaScript",description:"Proud to have this essential knowledge.",logo:i.p+"static/media/js.57f1722a.png"},{id:"006",skillTitle:"TypeScript",description:"Enjoying app development with TypeScript because it helps you avoid bugs so easily.",logo:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAIAAADdvvtQAAAawElEQVR42u2dr3sbO/P2nz/iBV8QsEBARMAgICAgoOCAgoKCAwoKAhYICAgImAQUFAQEBBgUGAQYGCxYICAgICCwwMTAwMDAYMGCBQIC8wLtLztu4yTNaZLque7rOT09Sbq1Px6NpJl7/oe5jop6sv4XX4KoCFBUBCgqAhQVAYqKigBFRYCiIkBREaCoqAhQVAQoKgIUFQGKiooARUWAoiJAURGgqKgIUFQEKCoCFBUBiooARUVFgKIiQFERoKgIUFRUBCgqAhQVAYqKAEVFRYCiIkBREaCoCFBUVAQoKgIUFQGKigBFRYCioiJAURGgqAhQVAQoKioCFBUBiooARUWAoqIiQFERoKgIUFQEKCoqAhQVAYqKAEVFgKKiIkBREaCoCFBUBCgqAhQVFQGKigBFRYCiIkBRURGgqAhQVAQoKgIUFRUBiooARUWAoiJAUVERoKgIUFQEKCoCFPUCMkGIG/S7f2YE6G0QgJq3SmGuEdeIG8wN4ZqwB76XMN3Rk3CDhEbNz1H7XznQMc+DfjdD/3u1n7x3IY25Iu0bf/SbpzCXARd04DXpfwcdocE3KtI/zJBFFSPQa1QbGLq3bS8M/PQbEVdIyO5tDhGLMNNoQECIaokwibAnwiJuH+JSDcPhLmcRoNebx+wsMUcAZBC3g2/s+OtTosFPUF1oITuxZD8WokPcvFeA3s8qhrgd0nAcQBbxAu9/l0ZcJ9wkwiJhux9CuCZcEi5HXJL9xWjvSfR+Ms7aCPeeljD0PsQ0YQozhbhJeIFE0aTPRyUc+6lSSKUTbpCw3VtO+rjS/NekpWRXfTJEup/JFGFqxDVhijBJnpEGvTqAToU8E/k70Acxu+CzU6G6JeneKvOLZCVv8+iGJyIs4RYzQ5jENEOXc5RmmOaE5SOhRlyOhGxeunF+KuSpyE+FJDwPQjRL0jyhElG5w6iwWNh3soQhps+EXNd15X3pfPXGtXVuA/5HscVM4W4D3zPx8C4MCY2FxlxhJnGajdLZKZ2dj9Xn24LOFt/y5URv5otSrerF1q0rv3W+dL50flv7deVXpSs2tV5uMrOc5uZqZtMfi8/X5lzkhM4RzRFTCdNJwOipDL06gCrn4X38zzsAyBebEZ2HWNJmGw8mrSYkQIibEyoRyy+uZPpDT/Rab6pV5SoP914j32r/t/Z+Z+tgUdZqVd7IVTrRH7+pM5En6TyhErF3AVDpHAD4/hV5iwIA730NAPmyJCzDh/dH3R5KY6Yxt4jbRFjMDUrliOb/jLOrWZEvtmvnHYAbkuCHct0ffeBpPDgPLvzK+yFMDmDrwazLqV6mE3sh5iM6xUwm3Ib8ibDDp5cxAv0nAchDAAgdfgPCmY3EPCQlBWIFFjah+YjNv9yoqdmsXfeGN6x47/3zXp4OJO934lgFsKzdRBVnY5XwAgmDuBkxM0jF3gxA7r0A5H8OUEirww5cIW7QuEioOqUzeiPlcrv1UAPUARzfh2PvXwT0EKXCn5hOlyepwkIjbgizBzb/EaA/DZDB/Ulgs5YldP7pWmaLbYi/bbRxw0zG309qfidELiy6lxODqMRCIW4wKx68yo0A/RGAQmJhMC8w0yM6v8qKTUDHee98v9IcTrBeAqDae+cA0olBVBKhEDckAvRKlzChEVeEG0zVhZDzReWaqOP2aBn8M6TR9csw1IQ8B5BObNIDFJewVxmBEFNYGELzz1d5sXUewHnvAyJ94LkXdvzLJEGDTVkFcDkpEiqxCLswGy53I0CvKwIRbjCTn67yVekAICxag4jjAJwfogQvu4INAfo6KRLaJ9FvESD/7iMQZvKDyO3WOQDvm4Vpf9U6iIx/wccNzzGIQB1Ab3IJe8LZ3TM/gb86OnnC8wzOgYZHKQZxfUrnstg6gNJ7169cTRjoVy/Yz6OH//6T54SH/iKHvrTdhYUcaJBEv1WAfrYB+ZV2P8HD9PPI+H0o7XjGeXQAKFuWmGeE54hLJHQibELz63nRvGv9E3o4/I/BiTM4D85BcyrtYW+Fc638QfYHVA6/zgO45izbewdw+aNIaD7iqr3AV2/uKsND9wI9OgR5gBrADd6ZYyj62Wf3J5cDjyEoX5aY54RLLDQSJmHq4ze1qf2vol7/hvv+L9H/q9t9eXYo26fF7xyMu53/tncB0gI0GQKk3yJADp4UgsAD+Bqggm4z3L1M/mh8hmuFd9Cnt4+V974CcM0SJnTCLeJmRLO53XQL3K/Ohvfe5D5IdgGpbuXag8cG3J2Lsnbd2/mY+T5cDXF1TRKdE64QP6rM47UuYX1AflAdJV2c9/tvwREA+b1Lyv4T/6iH6R/J+xrAZcsyCamPWCCmvnyXlYcHduPtA7h70Wb3sdqd/8PLdPNhAO+GMO0H7wDQrd0FyLwxgLbOP+EdCzuICqAEKAGq/sTtURHId8ls99PqJz2MAygBHMBsWSdNKaDFNJuZdbvjefDGc4+OPjYOPzcbB4uy1usyW5R3ZvNDraZqNVWrudnoZVlsqtW23rr9P8/7+wlAA9CXW5tQSZrK2jcFUFhxv94W6cRe3tr0KTKXE3M5sZc3+jZb1O3SftwuLXxMvQfYOi8mOQ0/avKkJ5kU6cTSif10vcDcjJhCVH28ytd1e+L80JawX7+8974GX4OvvatDaUblIS82/If5/F2fsgzTOaIZollC84TmiOaI5phmhGanPP/43X6dLq7mRbaoVs7Xu2cN4YI//F/l4cuNQWwI0FsraU2ofJpwmiOaJXSOWIa+TtMbVYV0+pEAOYC1cxd0gtM7RPMnPw+iOUozRBVh+pQrRPPx1HiAujl0PnJVBfAOfAW+Bu88QAmQLTdfvs/O0jtymWGqQiEREqYTFqargcRcYZYjmqE0GzF5IbLLWzPVq2XpugNu71yoHKk8fLnpIxB+iwCFKt0niHCLhUFjg8cW05xObNntx+CxAPl/xjPMJXrqw4QiUSQKxO2IScIlYjJfltA8knvgXmqn9KsGXzvvHcDGA5+vML0jPCdcEWGb5g023C4N2jDYTvdqyBMC3OciZz+0WpbhUcIFbunh83WIQKotOFFvDaAnL39MY66T8BFMG4D8Edv4QRLQ7ErWzl/wKeEqeaBV75diKhELxM0pyzBX5KpYVr45oX5oCRscQXjwLiTka+fTW43SfNAw1HfO/6wvrP0C0zZy2IRbJArENaIZobOvtyZbVeGBts5/vjFJs4R123j1dwDUdgVhYRDN04mtHgtQ+8uNcx/ELDTlPCefQ8Im3BAuE5r/OymqYSr8ywi0e6vhHfiNh/SHIWk24ratmO57dwaF+or8pEOoLZztu2PDYpcwRVhGb6XZ1AsHH743OdCwK+0v6UztDk91QvPLia0HZ3DHlXo2X7p17lzMn+2J0fTDJ6JI0vxqpttb9wcB6m412nMJgKldo3RGePF7vTW6+iREM8Llp8nydKzvVXBHgB4HkP/dAFlM8x9q0aYaD6Rl3Q1Dd/DjAOhEIpphbl8AII25HgmFeegaUxGg1xKBmiYeYQnL58V6507ieIAASuc/jTPEFBLm5V69QY/zIxpVI0AvClAThEZMqlXZrl3H1YU1ybYPAH3gecJ0MtboZfPIRwMaAfoPANKnXJpN3SfID0egDiAH4EvnP7AccXMi1IsB1B06mwjQK0qiW4By+ySAwteXzn8aS8RUIhR+WYBMBOj1AKQPAdTerjxc29aVRvvaw+W1xCzHIpps/jUAoYEl2SnLdciBYL8l9IFtfJs3Tc0KXd6R322RGQF65QA1Z8EjmufFprsxOOIirL3uaG9TNwDpdIEv5QsBhPaNEyNAfxqgEC2a202a/VCr5lT52N4cP7wxrwE2DtiNPqESCYu4bO8uDGLB6adrVgzmHp0z2lEHyjECvT6AmCFcI6GRMCjNr2bWh3zGH993Miis9MGcxbNpgdO7ttwiVFwowhVmmnDTGgjvGyRGgN5iEm2bvZjQiMr01lYAoc71kQA1JTuubRibquW5yE+oRqLAwgSPRMwt2vVwfdqSFAF6PTlQEfw3QhHFhchXZQ3gvHcPrmH373fbsq/mMe22plM7onNM8xE3iGkkzMCMPJi2yv+AoQjQSwOUY64wt4Rmclm2fajHAuTv9w14cG3FdGbX/15lo3SOmcLCJCL4bHZ2CDECvR+ACkzl+M64cCF/bAQ60Ji223kIWwe3cnkhMkRz1JoAJ8+zfo4AvRKAOg8yjbnFTH24ypZ1d7zzOFexQy2UfUVzUTpxtzjleZJmhAdrzphEv/kk2mCukeh2ZAbT7NZuHMCjTDb22wPb9avePZasAfSm5lN7zu4InY243LPKjwC9uW28QlyfCIO4IUyPuD1h8p9rtR0sRMe06h/qe9zvM/RtZl4DmHWV3qpTNktohrhuK0BUBOjNHSQqzHUiLOqOZ4RJ6OyuaQ2775Lgd9qUf237MMyqQ6NY6EnyPjT9ZKvq68SM2BzRbM/a4fdOfIoAvehl6s5bRbgiLLsYy6L2bXuhG8DiOw6e61cHzTInl9vLW0XoHDHZ3Kv0KbYhTJNQVS0iQK/3Nn7HFXrEJaYZvysCO00bdtc+659lVON3DDean7sBuCu2n74rRPOEScIVYYqwptLt+Zu1CNDLLWE9QKhPZtWIyxG9u7OrGqAO+VB7QXZkp/tRTf4hCHmofTAU9zdqdTHOSJqNWLin68baPWs5iwD9RwChbmyg0JjJc5GrTQ0A4OqhlcLzI9D9A6Q234Jl6dh0QZhKmMZCkeA7w004sooAvdKCMrw/gFIjYRKu/rnKQl+ob1cy7/1vddLsnBdd6IwGgArgblF9uFKIzrvJL3Fi4WsHqNv+oPZwCAmNmfx0FazuwLvWn9XXz1/EDoUi1+z3wXmAde35XUHSDLNAc8yBXjVAB2rXSdNBKz+MpWwaNnywT/C/YxHbH/3S/w2DcY1zAFO1PudZwmQythGgtwJQZ9QaToY05uqM5bdyXfq+7uc3uoXuWe41QchXYUXTq+rDOE9ojoWJAL1mgLoSiz4rGg7UTWj+ZWLDctYZdD4viYY9e9fWTLP1xG89G5al+/Lt6QxFgP5IBNKo8WTRzfRuYRIqz3h+ozalb/xWnN892gG/dwfiD9lSPXAXe8/PHAC2tf96nWOaYV5gXmC2P6A+AvTqANrf8zeffnOSys/fVVZsy/6+3XU+zv7AyJ7nbtlCuFtX7tM3iajGrCBDUxsWAXoLAA0xQkwRll1OtF4HF7Fmybnn7+z3/KKfs3mrAezWXYisnc6pMD+qjToC9BoAMju/EBpxhWh+yjL+w5qNq/fdfw+4rD7zBDI4V8/sCrMZFi1AwuC/x2DqHUSgztqs2eQLfULzEc/ZdGEac/JQCuL8/cOe582j8x68rx0Au7OIZcGpA3GNhEIRoDcGUHv7kXQxIM3O2VxMrdnUvTG2H8Ql/1yAWpt2v6jc+ThHzBBmMFPNmWcE6E0B1GPUbPWFxDxPaE64ZFOrN3XVxQ0X7ih8M5r5WQA15o3fslVCFeF21Ny6xCT6jQGk8I5jpkFMIW6QsIibhGZnPBNTu9jW3YDxMDLXPWsv1q2Pfln687FETJG++iwC9KYiUOgPREIhETpQi1CWT7jCwhCuMZ2fs9m3+WJRub3xDk+LPq69yg2eVvSHTliOhG0PqyJAbyoCdTevgwCgCNeEtS33QTS/GGc3clGGOzRf+z2bPA8Pu8K22/j2wAkAYFZsEjo7EZZwHarPIkBvLgc6bBZGWPh9i7jFwmAuMb37/D2fL6sawHlX+9p3buZN2b37dZ3swCm7+brFpjxld0gY8tDIsAjQawbop3Vqg/ikR0LjdHbK5uPZYuOgBu+6wTy786GOyYPCl21q/+m7TNjDvRwRoDcGUHey1zVXEKZH3IyYIpfZl2tdbOtgAwJQ++E4sOOciZq1EOByYk+oJCHligC9G4DQfpOXwcxiZgkvCLc4lR9FZtalB3C+GpxdHwVQO6LOAwC/awCKEei9AdR5J5DOippbxAvELRIWU/lxPLfb2nV7qqMAGtypeQcA37NFQvO4hL0/gLoSZtW5ATW7NqETrrAoUCovb005KLL28AiAwnHiRK8Re7hIKAL0tgAyuyd7LUAiSCIhE1EgsSA0zxfbdtyYOyKJ3gdoajaYyQjQ+0uiDzYmB5IkESoJ81lTOZ4uHHR9Z0dtwdwAoHmxJW0/awTolQBkfm8oQr2Tpia7FhyEyn+/yU1IZ46Z2XgPoGxREibjVcaftXcxAz8DjVk3Ddn2ZRtN8Bg6iw0z5fvXq90EBdtpGCfCN45Y/g+/2zjf3FG4o240dgHa4hiB/jBALAy+1Akz59/sh2+SpDPEbSKKcEUwMFXd32ehn1+TdTNcELfJ4EQRc4UCoKIgTH4U063rZiQeCZDvTqNnxQZTFcc9/cklLDj9YqESKr9Ol6aG9FaTdEZ4MxIw4UUiim64ZNcqGsjbT5aFbP3O7te6hwv8MOvUJNxipv4Zz5ol7MjJw92I68Ybf42pjAD94XlhhCsiFKL55aTYApQebuXylM1OmEHhqpIPjTIM4YowTZghrDN9bv92Yau1f8O6L9Q46sl/r9Wmu2Y/5iR6F6AbuUARoFcwrUcRoTDN6W1RAtTeOwC5Lj9dG5zOwvDldnNucZ8RDyuRh26HdjjOnfRHQb1/VONPnd5dy1Xdz60+whPND80Y4GpukzQnEaA/Z7KpmlRGaJTm6a2tG5Nf7wG2tb/JFxdintA84QaJMJygc19QaFDUgblFzGLWEbb/piJhEmFPeJGIAnND6PzL93xVhyKP420/3NDXnE1NQiXmsR7ozw1b6YYjJ1Sm4XnakvjQ3VdsnbgrzkSe0Bwx3RSL7dQDdSHHEK7xvevx9o+wSNhEFGE+66fW9wOghuNrFX1vIFs6+Pfahtv4CNAfBMh2ADXP4/va4+7PW27r62zx8SondJ6kWdidkZ1TgGAGlbdL3gGrBsIVpjmh88tbvaxce6VVtXaucGQECk+1LOtznidcx5PoP++RiETzPFV7prfTs97eMZTOz4sNvVv8M87P6JxcznA6xyxHTGKhsdBYKCwU6bgRtnGsojm5vDujsy/fsrltTBqa5atZv45JoAGgbvMfUMuKpFkiHrYOigC9nM2vJiw0CqqE5pc/eoDaPY9rHXrBtUd9HmDjfL6qrvOCTs2na3M2VpjlCZUJVQlViMqghEpE8zMh/7024zubL6vSd9OhvN9rFXt4xB2EhDu8Ct+mGtM8GVvUGYlEgP6Eza/BXJMQgX4Mnme3FXDPgWW4omwdLMu62FZqVc3tdqbXU7W606uZ2eSL0m6qZenKYSF03766v3cfwLRnt9CFwSb+bGr/8SpLmE5E0VTyR4D+yDb+qc/j4bFed0c0Ft7zLNs1wB/svyZqidI7JGzCLYldGW8SoD2jMd+4vQzVt6Q+3qZjx5mhp9Z5gGXtP4wzwvP2qs6gCNDbBehnA1fg0JJ3pI90P7tuZ11z3jkHIGaLhGZYaMIkYQo12XoE6I0DBPf9e71/AkB+B51B9uWcB5gVW8LmSGjU+OqrB83II0CvGSD/K/PeR1sCeRheajTevzX42jsHAMW2Phfh1MAcX8AUAXrlAPlH4vVAzZjr5ir4GnwFvg5hbFu7z99y1DglPmIQQgToFQJ0ECP/bDc7v9uEWgd6HMDa+a83itA5Fs3lXQToOQD533US/dPnebTv6k8NoB9rwDEEyHvnAFbOf7k1SZqPRFNB8KiJme8JoL5Zc/CGHXkRvdM6NQDIPA9oHQBCNE9/2KovudlD4cBQy0P0OHgg/flluBoeSw9mZX7+LhHNkCjwbnFSWyvyFyXRpmmxEzahOZ2Yfg7F0RMCoAcoe24EEhIJhbkh3OJ0nk70FqAOF6nOwf58uaDuiGePKjfQYyJW95ffuX5zYeXKluWHcYZohsTTB/a8qwjUfHpEkVCV3hZ1u2Vxv8oqdj+y3gP40rkLMXvwFP+4sugF4Quc5pc/7DaUVjTOB3UzAKVvHh2cJ//yGR+RNPmhl2/tfR1+ta7h+3xxxuaY5UiYRMRhK8Nqc2ETmqcTUwEA1B4q90v3N39v0lYA6Hd0ZVjMFpgvMFMfrtSt2diqLnd8nbx3/hdjmWFvAQO4F5CG2l/ghqfV4ch66/3UbD9+0ziVXcCO03p2AMLCDMonaoDK94euD6alDUDnYp48OwcKeX3TdsMkoXcXfE5vzVSvl5WrWiZcXybkfzby8sD95wEdmG/Qffuy8rdq/flaEjZDLEdcY2Ext6H+OgLUXYAHgGQ6Kar+MwhHrArtxK5mF5Ylz50ImWOeo52CeUOYIpeSpNm5mH2d6Bu1kutq7e4VffVhZz872s+Mdm7HgjGL635GCWBLP7MbNtHnQqJUIiZDXREWCnFFmB4xPWI6AqS73ig8KODyT9rwbp075zPUz0Z5rpHPwA/KEm4Jt5gZRBVKs1Oef/yWpxN5o5b5qizKel0fnBl21ObdedhWbrmtsmJ7NS/+vdGnY5nQ/ISphFkcvBabdg55ryb/bwcorOWKcIVo9mVSLD1snNs4v3Wucv4Xqp2rnN86XzpfObes3DmfE65GLH/G69s3WqCd9r8gixuSNKYKU4lohtLslKuP3+TlRIuZ/ZYVt3o1K7b5stTr2pZ+UfpV5VeVX5a+2Hq7cXpZZXZzpxaTzIzvzJfJ4sN3M+IZpnNMM8xyzGQzZ7OZYRBCTli2DOI6ETqJU5sx14kwSOjGMoeZEdcXXP7D5x9Efs7lmfiF8nORnYl8NFanY3kh5mdCnoji//ElEsXT06Cmj8Icbvfp4kHTa2FDlSriBjGdUHWSypNUIqowU4SpEVenXI24POXyTMhTIU+5HHE54hKzHLMcpdlJmv8f0//HwkthsTCDW60QcmTXdxb+XMRNEndhPUBct92ZoRZTYSYTrhNuETOI6UMyiGnEVcL1CbcJVyOWEZYnTYOwevaDhXp4ec9YIzSbDoHTrQ+rJiFh6o9nhpN773V9DJs3hMGiq+AZDow2u33TBnXN9jGJ3s+Beh+d0NBpjjwoa1uMJWk7iJ8NkBpoByDEFRbD/xraWDuTDYWPzU7MfS7Jz78G3eu9f7Dm8O86SIz6jxUBiooARUWAoiJAURGgqKgIUFQEKCoCFPV36P8DDgDWhVKdH/oAAAAASUVORK5CYII="},{id:"007",skillTitle:"React",description:"Creating React apps.",logo:i.p+"static/media/react.abb23383.svg"},{id:"008",skillTitle:"Redux",description:"Experienced in using Redux in my projects as well as redux-thunk, react-redux, Redux Toolkit & redux-form.",logo:i.p+"static/media/redux.b3b939c6.png"},{id:"009",skillTitle:"HTML/CSS/SaSS",description:"Capable of creating a nicely designed webpages.",logo:i.p+"static/media/html.b757b110.jpg"},{id:"010",skillTitle:"REST API",description:"Making REST API calls with axios.",logo:i.p+"static/media/css.dd56be10.svg"}]},ae=i.p+"static/media/storybook.2dcd086c.png",se=i.p+"static/media/social-network.7952e9c6.png",re=i.p+"static/media/to-do_lists.40d8fd8d.png",oe={projects:[{id:"001",projectTitle:"Cards",description:"A collaboration project designed using React, TypeScript, Redux, redux-thunk & Ant Design as an app for creating packs of cards to learn by, and also for viewing, sending, downloading and playing various types of files. Proud to be a team lead of our amazing Dream Team!",screenshot:i.p+"static/media/cards.94cbe4a2.png",url:"https://marygrishchuk.github.io/cards-by-dream-team/"},{id:"002",projectTitle:"Social Network",description:"Designed using React, TypeScript, Redux & redux-thunk as an independent social network.",screenshot:se,url:"https://marygrishchuk.github.io/social-network-ts/#/login"},{id:"003",projectTitle:"To-do List App",description:"React, Redux, TypeScript and Material-UI have been used in this project to help a user create lists of tasks.",screenshot:re,url:"https://marygrishchuk.github.io/it-incubator-todolist-ts/"},{id:"004",projectTitle:"The Storybook of React components",description:"Created with React, TypeScript & StoryBook to display and test each component easily.",screenshot:ae,url:"https://marygrishchuk.github.io/it-kamasutra-react-with-storybook/?path=/story/example-introduction--page"}]},ne=i(39),le=Object(ie.c)({skills:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;return t.type,e},projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;return t.type,e},contactForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(M.a)(Object(M.a)({},e),{},{name:t.name,email:t.email,messageText:t.messageText});default:return e}}}),de=Object(ie.d)(le,Object(ie.a)(ne.a));window.store=de,a.a.render(Object(l.jsx)(z.a,{store:de,children:Object(l.jsx)(ee,{})}),document.getElementById("root")),te()}],[[53,1,2]]]);
//# sourceMappingURL=main.01c40ad6.chunk.js.map