'use strict';const a23_0x595b8d=a23_0x49e0;(function(_0x195b5c,_0x417d1a){const _0x35ea84=a23_0x49e0,_0x4e74bb=_0x195b5c();while(!![]){try{const _0xfde8ed=-parseInt(_0x35ea84(0x12f))/0x1+-parseInt(_0x35ea84(0x14d))/0x2*(-parseInt(_0x35ea84(0x134))/0x3)+-parseInt(_0x35ea84(0x148))/0x4+-parseInt(_0x35ea84(0x155))/0x5+-parseInt(_0x35ea84(0x149))/0x6+-parseInt(_0x35ea84(0x135))/0x7*(-parseInt(_0x35ea84(0x14e))/0x8)+-parseInt(_0x35ea84(0x12c))/0x9*(-parseInt(_0x35ea84(0x12b))/0xa);if(_0xfde8ed===_0x417d1a)break;else _0x4e74bb['push'](_0x4e74bb['shift']());}catch(_0x4fb55b){_0x4e74bb['push'](_0x4e74bb['shift']());}}}(a23_0x3cfe,0x7fabc));var __importDefault=this&&this[a23_0x595b8d(0x13e)]||function(_0x46742a){return _0x46742a&&_0x46742a['__esModule']?_0x46742a:{'default':_0x46742a};};Object['defineProperty'](exports,a23_0x595b8d(0x14f),{'value':!![]}),exports['License']=exports['LicenseInterface']=void 0x0;function a23_0x49e0(_0x21bb62,_0x41db90){const _0x3cfe48=a23_0x3cfe();return a23_0x49e0=function(_0x49e02f,_0x5e48c3){_0x49e02f=_0x49e02f-0x125;let _0x27252e=_0x3cfe48[_0x49e02f];return _0x27252e;},a23_0x49e0(_0x21bb62,_0x41db90);}function a23_0x3cfe(){const _0x53d062=['__esModule','encrypt','root_dir','AES','../app','toString','844625ZFcSuG','getLicenceData','release','SQDKEY2','SQDKEY1','License','path','50vtMntp','1837899gmHDgz','data','entries','778003YtCKAW','forEach','version','Schema','utf8','93XEcKlu','21aiOpHU','getSystemData','LicenseInterface','map','platform','method','type','existsSync','default','__importDefault','/storage/key/public_key.pub','getEncryptSystemData','homedir','netmask','address','model','prototype','/.SQD/license.sqdlic','mac','2225344NGETHi','2421246TOfjKD','readFileSync','hostname','cpus','25658mWkchv','2695976GETemY'];a23_0x3cfe=function(){return _0x53d062;};return a23_0x3cfe();}const mongoose_1=require('mongoose'),app_1=__importDefault(require(a23_0x595b8d(0x153))),os=require('os'),fs=require('fs'),path=require(a23_0x595b8d(0x12a)),SoftwareLicenseKey=require('software-license-key'),CryptoJS=require('crypto-js');class LicenseInterface{constructor(){const _0x5ad9a8=a23_0x595b8d;this[_0x5ad9a8(0x12d)]='';}['getSystemData'](){const _0x399a08=a23_0x595b8d;let _0x561f71=os[_0x399a08(0x14b)]()+'\x20'+os[_0x399a08(0x139)]()+'\x20'+os[_0x399a08(0x13b)]()+'\x20'+os['arch']()+'\x20'+os[_0x399a08(0x126)]()+'\x20'+os[_0x399a08(0x131)]();return Object[_0x399a08(0x12e)](os['networkInterfaces']())[_0x399a08(0x130)](([_0x4b2527,_0x95bd5a])=>{const _0x576f52=_0x399a08;_0x561f71+='\x20'+_0x4b2527,_0x95bd5a[_0x576f52(0x138)](_0x11a1e6=>{const _0x225c99=_0x576f52;_0x561f71+='\x20'+_0x11a1e6[_0x225c99(0x143)]+'\x20'+_0x11a1e6[_0x225c99(0x142)]+'\x20'+_0x11a1e6[_0x225c99(0x147)];});}),os[_0x399a08(0x14c)]()[_0x399a08(0x138)](_0x5dcb8e=>{const _0x464456=_0x399a08;_0x561f71+='\x20'+_0x5dcb8e[_0x464456(0x144)];}),_0x561f71;}[a23_0x595b8d(0x140)](){const _0x2e4ae=a23_0x595b8d;return CryptoJS[_0x2e4ae(0x152)]['encrypt'](CryptoJS[_0x2e4ae(0x152)][_0x2e4ae(0x150)](CryptoJS[_0x2e4ae(0x152)][_0x2e4ae(0x150)](JSON['stringify'](this[_0x2e4ae(0x136)]()),_0x2e4ae(0x128))[_0x2e4ae(0x154)](),_0x2e4ae(0x127))[_0x2e4ae(0x154)](),'SQDKEY3')['toString']();}[a23_0x595b8d(0x125)](){const _0x58fc9a=a23_0x595b8d;let _0x1fa0cf=null;try{if(fs[_0x58fc9a(0x13c)](os[_0x58fc9a(0x141)]()+_0x58fc9a(0x146))){var _0x5b4c0a=fs[_0x58fc9a(0x14a)](app_1[_0x58fc9a(0x13d)]['get'](_0x58fc9a(0x151))+_0x58fc9a(0x13f),_0x58fc9a(0x133)),_0x3a9371=new SoftwareLicenseKey(_0x5b4c0a),_0xd6b693=fs[_0x58fc9a(0x14a)](os['homedir']()+_0x58fc9a(0x146),'utf8');_0x1fa0cf=_0x3a9371['validateLicense'](_0xd6b693);}}catch(_0x1c04ef){return null;}return _0x1fa0cf;}}exports[a23_0x595b8d(0x137)]=LicenseInterface;const schema=new mongoose_1[(a23_0x595b8d(0x132))]({'data':{'type':String,'required':!![]}},{'versionKey':![],'timestamps':!![]});schema[a23_0x595b8d(0x13a)](a23_0x595b8d(0x136),LicenseInterface[a23_0x595b8d(0x145)][a23_0x595b8d(0x136)]),schema[a23_0x595b8d(0x13a)](a23_0x595b8d(0x140),LicenseInterface[a23_0x595b8d(0x145)][a23_0x595b8d(0x140)]),schema[a23_0x595b8d(0x13a)]('getLicenceData',LicenseInterface[a23_0x595b8d(0x145)][a23_0x595b8d(0x125)]),exports[a23_0x595b8d(0x129)]=mongoose_1[a23_0x595b8d(0x144)](a23_0x595b8d(0x129),schema);