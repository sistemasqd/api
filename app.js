'use strict';const a1_0x4bb910=a1_0x2f98;(function(_0x1ae760,_0x2a0961){const _0x4976d3=a1_0x2f98,_0x38a51c=_0x1ae760();while(!![]){try{const _0x1b5ecf=-parseInt(_0x4976d3(0x13f))/0x1*(-parseInt(_0x4976d3(0x146))/0x2)+-parseInt(_0x4976d3(0x137))/0x3+-parseInt(_0x4976d3(0x14e))/0x4*(-parseInt(_0x4976d3(0x139))/0x5)+-parseInt(_0x4976d3(0x142))/0x6+parseInt(_0x4976d3(0x14d))/0x7+-parseInt(_0x4976d3(0x129))/0x8+-parseInt(_0x4976d3(0x13b))/0x9*(-parseInt(_0x4976d3(0x14a))/0xa);if(_0x1b5ecf===_0x2a0961)break;else _0x38a51c['push'](_0x38a51c['shift']());}catch(_0x4b14f2){_0x38a51c['push'](_0x38a51c['shift']());}}}(a1_0x206a,0x9065d));var __importDefault=this&&this[a1_0x4bb910(0x12d)]||function(_0x55adb7){return _0x55adb7&&_0x55adb7['__esModule']?_0x55adb7:{'default':_0x55adb7};};function a1_0x206a(){const _0x4b3dd1=['homedir','3216258bWcHLh','MONGO_USER','express','MONGO_PORT','24788VlrpVe','ADMIN_PASSWORD','urlencoded','3398508IJKwLB','mkdirSync','./routes','default','8giLaGj','cors','/.SQD','admin_username','20DKNEfj','json','defineProperty','6681185SytjKV','56MwloxF','mongo_user','mongo_host','port','admin_password','MONGO_DATABASE','3617464EgCOxU','ADMIN_USERNAME','set','./config','__importDefault','MONGO_PASSWORD','morgan','REFRESH_SECONDS','PORT','mongo_database','dev','existsSync','MONGO_HOST','__esModule','1656627RdzWGj','use','140690IUVydR'];a1_0x206a=function(){return _0x4b3dd1;};return a1_0x206a();}Object[a1_0x4bb910(0x14c)](exports,a1_0x4bb910(0x136),{'value':!![]});function a1_0x2f98(_0x39fbc7,_0x228716){const _0x206a72=a1_0x206a();return a1_0x2f98=function(_0x2f9898,_0x1ea38e){_0x2f9898=_0x2f9898-0x129;let _0x2d824c=_0x206a72[_0x2f9898];return _0x2d824c;},a1_0x2f98(_0x39fbc7,_0x228716);}const express_1=__importDefault(require(a1_0x4bb910(0x13d))),morgan_1=__importDefault(require(a1_0x4bb910(0x12f))),cors_1=__importDefault(require(a1_0x4bb910(0x147))),config_1=__importDefault(require(a1_0x4bb910(0x12c))),routes_1=__importDefault(require(a1_0x4bb910(0x144))),os=require('os'),fs=require('fs'),app=express_1['default']();app[a1_0x4bb910(0x12b)](a1_0x4bb910(0x151),config_1[a1_0x4bb910(0x145)][a1_0x4bb910(0x131)]),app[a1_0x4bb910(0x12b)](a1_0x4bb910(0x150),config_1['default'][a1_0x4bb910(0x135)]),app['set']('mongo_port',config_1['default'][a1_0x4bb910(0x13e)]),app[a1_0x4bb910(0x12b)](a1_0x4bb910(0x132),config_1[a1_0x4bb910(0x145)][a1_0x4bb910(0x153)]),app[a1_0x4bb910(0x12b)](a1_0x4bb910(0x14f),config_1[a1_0x4bb910(0x145)][a1_0x4bb910(0x13c)]),app[a1_0x4bb910(0x12b)]('mongo_password',config_1[a1_0x4bb910(0x145)][a1_0x4bb910(0x12e)]),app[a1_0x4bb910(0x12b)]('refresh_seconds',config_1['default'][a1_0x4bb910(0x130)]),app[a1_0x4bb910(0x12b)]('root_dir',__dirname),app[a1_0x4bb910(0x12b)](a1_0x4bb910(0x149),config_1[a1_0x4bb910(0x145)][a1_0x4bb910(0x12a)]),app[a1_0x4bb910(0x12b)](a1_0x4bb910(0x152),config_1[a1_0x4bb910(0x145)][a1_0x4bb910(0x140)]),app[a1_0x4bb910(0x138)](morgan_1[a1_0x4bb910(0x145)](a1_0x4bb910(0x133))),app[a1_0x4bb910(0x138)](cors_1[a1_0x4bb910(0x145)]()),app[a1_0x4bb910(0x138)](express_1[a1_0x4bb910(0x145)][a1_0x4bb910(0x14b)]()),app[a1_0x4bb910(0x138)](express_1[a1_0x4bb910(0x145)][a1_0x4bb910(0x141)]({'extended':![]})),app[a1_0x4bb910(0x138)](routes_1[a1_0x4bb910(0x145)]);if(!fs[a1_0x4bb910(0x134)](os[a1_0x4bb910(0x13a)]()+a1_0x4bb910(0x148)))fs[a1_0x4bb910(0x143)](os[a1_0x4bb910(0x13a)]()+a1_0x4bb910(0x148));exports[a1_0x4bb910(0x145)]=app;