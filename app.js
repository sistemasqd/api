'use strict';const a37_0x44e196=a37_0x5ef8;(function(_0x559e79,_0x5a0dd7){const _0x185a3e=a37_0x5ef8,_0x199d6f=_0x559e79();while(!![]){try{const _0x29f9f1=parseInt(_0x185a3e(0x182))/0x1+-parseInt(_0x185a3e(0x1a3))/0x2*(-parseInt(_0x185a3e(0x19b))/0x3)+parseInt(_0x185a3e(0x192))/0x4*(parseInt(_0x185a3e(0x1a9))/0x5)+parseInt(_0x185a3e(0x184))/0x6+-parseInt(_0x185a3e(0x18e))/0x7*(parseInt(_0x185a3e(0x197))/0x8)+-parseInt(_0x185a3e(0x190))/0x9+-parseInt(_0x185a3e(0x1b2))/0xa;if(_0x29f9f1===_0x5a0dd7)break;else _0x199d6f['push'](_0x199d6f['shift']());}catch(_0x1572ef){_0x199d6f['push'](_0x199d6f['shift']());}}}(a37_0x26c1,0x2c575));function a37_0x5ef8(_0x3c7a50,_0x7bbcc0){const _0x26c1ad=a37_0x26c1();return a37_0x5ef8=function(_0x5ef805,_0x10be3d){_0x5ef805=_0x5ef805-0x182;let _0x1ea5b1=_0x26c1ad[_0x5ef805];return _0x1ea5b1;},a37_0x5ef8(_0x3c7a50,_0x7bbcc0);}var __importDefault=this&&this[a37_0x44e196(0x1a4)]||function(_0x5da7fe){const _0x132916=a37_0x44e196;return _0x5da7fe&&_0x5da7fe[_0x132916(0x195)]?_0x5da7fe:{'default':_0x5da7fe};};Object['defineProperty'](exports,a37_0x44e196(0x195),{'value':!![]});const express_1=__importDefault(require('express')),morgan_1=__importDefault(require(a37_0x44e196(0x1a5))),cors_1=__importDefault(require(a37_0x44e196(0x1ac))),config_1=__importDefault(require(a37_0x44e196(0x18a))),routes_1=__importDefault(require(a37_0x44e196(0x1a8))),os=require('os'),fs=require('fs'),app=express_1[a37_0x44e196(0x189)]();function a37_0x26c1(){const _0x35e7be=['mail_host','mongo_host','proxy','6uZONym','MAIL_PORT','admin_password','urlencoded','existsSync','PROXY','MAIL_USER','root_dir','147326mUaeEI','__importDefault','morgan','ADMIN_USERNAME','use','./routes','100765DVXhtz','dev','set','cors','MAIL_HOST','port','json','/.SQD','mkdirSync','7645450GWZMTs','337999KbZYZc','ADMIN_PASSWORD','1435728hRaKDu','mongo_database','mail_port','mail_user','MONGO_DATABASE','default','./config','REFRESH_SECONDS','PORT','MAIL_PASSWORD','91lpoAhE','MONGO_USER','326502DDzfgo','mongo_user','72IaAKgF','BOT_TOKEN','homedir','__esModule','mongo_port','64568uybBYz'];a37_0x26c1=function(){return _0x35e7be;};return a37_0x26c1();}app[a37_0x44e196(0x1ab)](a37_0x44e196(0x1ae),config_1[a37_0x44e196(0x189)][a37_0x44e196(0x18c)]),app['set']('bot_token',config_1[a37_0x44e196(0x189)][a37_0x44e196(0x193)]),app[a37_0x44e196(0x1ab)](a37_0x44e196(0x19a),config_1[a37_0x44e196(0x189)][a37_0x44e196(0x1a0)]),app[a37_0x44e196(0x1ab)](a37_0x44e196(0x199),config_1['default']['MONGO_HOST']),app['set'](a37_0x44e196(0x196),config_1[a37_0x44e196(0x189)]['MONGO_PORT']),app['set'](a37_0x44e196(0x185),config_1['default'][a37_0x44e196(0x188)]),app[a37_0x44e196(0x1ab)](a37_0x44e196(0x191),config_1[a37_0x44e196(0x189)][a37_0x44e196(0x18f)]),app[a37_0x44e196(0x1ab)]('mongo_password',config_1[a37_0x44e196(0x189)]['MONGO_PASSWORD']),app[a37_0x44e196(0x1ab)](a37_0x44e196(0x198),config_1['default'][a37_0x44e196(0x1ad)]),app[a37_0x44e196(0x1ab)](a37_0x44e196(0x186),config_1[a37_0x44e196(0x189)][a37_0x44e196(0x19c)]),app[a37_0x44e196(0x1ab)](a37_0x44e196(0x187),config_1[a37_0x44e196(0x189)][a37_0x44e196(0x1a1)]),app['set']('mail_password',config_1[a37_0x44e196(0x189)][a37_0x44e196(0x18d)]),app['set']('refresh_seconds',config_1[a37_0x44e196(0x189)][a37_0x44e196(0x18b)]),app[a37_0x44e196(0x1ab)](a37_0x44e196(0x1a2),__dirname),app[a37_0x44e196(0x1ab)]('admin_username',config_1[a37_0x44e196(0x189)][a37_0x44e196(0x1a6)]),app['set'](a37_0x44e196(0x19d),config_1['default'][a37_0x44e196(0x183)]),app[a37_0x44e196(0x1a7)](morgan_1[a37_0x44e196(0x189)](a37_0x44e196(0x1aa))),app[a37_0x44e196(0x1a7)](cors_1[a37_0x44e196(0x189)]()),app[a37_0x44e196(0x1a7)](express_1[a37_0x44e196(0x189)][a37_0x44e196(0x1af)]()),app['use'](express_1[a37_0x44e196(0x189)][a37_0x44e196(0x19e)]({'extended':![]})),app[a37_0x44e196(0x1a7)](routes_1[a37_0x44e196(0x189)]);if(!fs[a37_0x44e196(0x19f)](os[a37_0x44e196(0x194)]()+a37_0x44e196(0x1b0)))fs[a37_0x44e196(0x1b1)](os[a37_0x44e196(0x194)]()+a37_0x44e196(0x1b0));exports[a37_0x44e196(0x189)]=app;