'use strict';const a24_0x2e5b0a=a24_0x433c;(function(_0x5925b8,_0x2e84fb){const _0xb45026=a24_0x433c,_0x473bf8=_0x5925b8();while(!![]){try{const _0x379290=parseInt(_0xb45026(0xb1))/0x1*(parseInt(_0xb45026(0xa1))/0x2)+-parseInt(_0xb45026(0xa0))/0x3*(-parseInt(_0xb45026(0xa2))/0x4)+parseInt(_0xb45026(0xaa))/0x5*(-parseInt(_0xb45026(0x9e))/0x6)+-parseInt(_0xb45026(0x9d))/0x7*(parseInt(_0xb45026(0xa4))/0x8)+-parseInt(_0xb45026(0xa3))/0x9*(-parseInt(_0xb45026(0xac))/0xa)+parseInt(_0xb45026(0x9b))/0xb+parseInt(_0xb45026(0xb4))/0xc;if(_0x379290===_0x2e84fb)break;else _0x473bf8['push'](_0x473bf8['shift']());}catch(_0x29f057){_0x473bf8['push'](_0x473bf8['shift']());}}}(a24_0x4d5d,0xc8659));Object[a24_0x2e5b0a(0xa7)](exports,a24_0x2e5b0a(0xa5),{'value':!![]}),exports[a24_0x2e5b0a(0xb2)]=exports[a24_0x2e5b0a(0xae)]=void 0x0;const mongoose_1=require(a24_0x2e5b0a(0xa9)),nodemailer=require('nodemailer');class MailInterface{constructor(_0x3f1a41){const _0x5ac411=a24_0x2e5b0a;this['from']=_0x3f1a41[_0x5ac411(0xb3)],this[_0x5ac411(0xa8)]=_0x3f1a41[_0x5ac411(0xa8)],this['port']=_0x3f1a41[_0x5ac411(0xad)],this['to']=_0x3f1a41['to'];}[a24_0x2e5b0a(0xa6)](_0x1c448e,_0x5fe8bc){return new Promise((_0x4b098f,_0x31c26f)=>{const _0x19efb7=a24_0x433c,_0x34dad0=this[_0x19efb7(0xaf)]?nodemailer[_0x19efb7(0x9c)]({'host':this['host'],'port':this[_0x19efb7(0xad)],'secure':![],'connectionTimeout':0x2710,'auth':{'user':this[_0x19efb7(0xaf)],'pass':this[_0x19efb7(0xb7)]},'tls':{'rejectUnauthorized':![]}}):nodemailer[_0x19efb7(0x9c)]({'host':this['host'],'port':this[_0x19efb7(0xad)],'secure':![],'connectionTimeout':0x2710,'tls':{'rejectUnauthorized':![]}}),_0x2410f5={'from':this[_0x19efb7(0xb3)],'to':this['to'],'subject':_0x1c448e,'html':_0x5fe8bc};_0x34dad0[_0x19efb7(0xa6)](_0x2410f5,function(_0x4f2077,_0x22ce81){const _0x4541cd=_0x19efb7;_0x4f2077?_0x4b098f(_0x4f2077[_0x4541cd(0xab)]):_0x4b098f('sent');});});}}exports[a24_0x2e5b0a(0xae)]=MailInterface;function a24_0x433c(_0x52cc6a,_0x45397d){const _0x4d5d83=a24_0x4d5d();return a24_0x433c=function(_0x433c25,_0x59a9e4){_0x433c25=_0x433c25-0x9b;let _0x14cb81=_0x4d5d83[_0x433c25];return _0x14cb81;},a24_0x433c(_0x52cc6a,_0x45397d);}const schema=new mongoose_1[(a24_0x2e5b0a(0xb5))]({'from':{'type':String,'required':!![]},'host':{'type':String,'required':!![]},'port':{'type':Number,'required':!![]},'username':{'type':String},'password':{'type':String},'to':[{'type':String}]},{'versionKey':![],'timestamps':!![]});schema[a24_0x2e5b0a(0xb0)]('sendMail',MailInterface[a24_0x2e5b0a(0x9f)][a24_0x2e5b0a(0xa6)]),exports[a24_0x2e5b0a(0xb2)]=mongoose_1[a24_0x2e5b0a(0xb6)]('Mail',schema);function a24_0x4d5d(){const _0x4ed5c8=['64744fwjxBK','36927IyEcfg','24CYSADQ','__esModule','sendMail','defineProperty','host','mongoose','400gEUfoY','message','1820qSTZOg','port','MailInterface','username','method','94PhCSiw','Mail','from','4564836goYmwl','Schema','model','password','2077075GwdQvk','createTransport','3238809gNznQg','3750WTUxtJ','prototype','78vHqoxS','11108rQhboK'];a24_0x4d5d=function(){return _0x4ed5c8;};return a24_0x4d5d();}