/*
* @Author: Sushil Jain
* @Date:   2017-02-28 10:58:22
* @Last Modified by:   sushiljainam
* @Last Modified time: 2017-02-28 12:26:10
*/

'use strict';

var api = require('./pc');

var testData = [
	['rank','noorul', 821],
	['rank','sushil', 295],
	['count','sushil', 360],
	['list','sushil', [ 'hilssu', 'hilsus', 'hiluss', 'hislsu', 'hislus', 'hisslu', 'hissul', 'hisuls', 'hisusl', 'hiulss', 'hiusls', 'hiussl', 'hlissu', 'hlisus', 'hliuss', 'hlsisu', 'hlsius', 'hlssiu', 'hlssui', 'hlsuis', 'hlsusi', 'hluiss', 'hlusis', 'hlussi', 'hsilsu', 'hsilus', 'hsislu', 'hsisul', 'hsiuls', 'hsiusl', 'hslisu', 'hslius', 'hslsiu', 'hslsui', 'hsluis', 'hslusi', 'hssilu', 'hssiul', 'hssliu', 'hsslui', 'hssuil', 'hssuli', 'hsuils', 'hsuisl', 'hsulis', 'hsulsi', 'hsusil', 'hsusli', 'huilss', 'huisls', 'huissl', 'huliss', 'hulsis', 'hulssi', 'husils', 'husisl', 'huslis', 'huslsi', 'hussil', 'hussli', 'ihlssu', 'ihlsus', 'ihluss', 'ihslsu', 'ihslus', 'ihsslu', 'ihssul', 'ihsuls', 'ihsusl', 'ihulss', 'ihusls', 'ihussl', 'ilhssu', 'ilhsus', 'ilhuss', 'ilshsu', 'ilshus', 'ilsshu', 'ilssuh', 'ilsuhs', 'ilsush', 'iluhss', 'ilushs', 'ilussh', 'ishlsu', 'ishlus', 'ishslu', 'ishsul', 'ishuls', 'ishusl', 'islhsu', 'islhus', 'islshu', 'islsuh', 'isluhs', 'islush', 'isshlu', 'isshul', 'isslhu', 'issluh', 'issuhl', 'issulh', 'isuhls', 'isuhsl', 'isulhs', 'isulsh', 'isushl', 'isuslh', 'iuhlss', 'iuhsls', 'iuhssl', 'iulhss', 'iulshs', 'iulssh', 'iushls', 'iushsl', 'iuslhs', 'iuslsh', 'iusshl', 'iusslh', 'lhissu', 'lhisus', 'lhiuss', 'lhsisu', 'lhsius', 'lhssiu', 'lhssui', 'lhsuis', 'lhsusi', 'lhuiss', 'lhusis', 'lhussi', 'lihssu', 'lihsus', 'lihuss', 'lishsu', 'lishus', 'lisshu', 'lissuh', 'lisuhs', 'lisush', 'liuhss', 'liushs', 'liussh', 'lshisu', 'lshius', 'lshsiu', 'lshsui', 'lshuis', 'lshusi', 'lsihsu', 'lsihus', 'lsishu', 'lsisuh', 'lsiuhs', 'lsiush', 'lsshiu', 'lsshui', 'lssihu', 'lssiuh', 'lssuhi', 'lssuih', 'lsuhis', 'lsuhsi', 'lsuihs', 'lsuish', 'lsushi', 'lsusih', 'luhiss', 'luhsis', 'luhssi', 'luihss', 'luishs', 'luissh', 'lushis', 'lushsi', 'lusihs', 'lusish', 'lusshi', 'lussih', 'shilsu', 'shilus', 'shislu', 'shisul', 'shiuls', 'shiusl', 'shlisu', 'shlius', 'shlsiu', 'shlsui', 'shluis', 'shlusi', 'shsilu', 'shsiul', 'shsliu', 'shslui', 'shsuil', 'shsuli', 'shuils', 'shuisl', 'shulis', 'shulsi', 'shusil', 'shusli', 'sihlsu', 'sihlus', 'sihslu', 'sihsul', 'sihuls', 'sihusl', 'silhsu', 'silhus', 'silshu', 'silsuh', 'siluhs', 'silush', 'sishlu', 'sishul', 'sislhu', 'sisluh', 'sisuhl', 'sisulh', 'siuhls', 'siuhsl', 'siulhs', 'siulsh', 'siushl', 'siuslh', 'slhisu', 'slhius', 'slhsiu', 'slhsui', 'slhuis', 'slhusi', 'slihsu', 'slihus', 'slishu', 'slisuh', 'sliuhs', 'sliush', 'slshiu', 'slshui', 'slsihu', 'slsiuh', 'slsuhi', 'slsuih', 'sluhis', 'sluhsi', 'sluihs', 'sluish', 'slushi', 'slusih', 'sshilu', 'sshiul', 'sshliu', 'sshlui', 'sshuil', 'sshuli', 'ssihlu', 'ssihul', 'ssilhu', 'ssiluh', 'ssiuhl', 'ssiulh', 'sslhiu', 'sslhui', 'sslihu', 'ssliuh', 'ssluhi', 'ssluih', 'ssuhil', 'ssuhli', 'ssuihl', 'ssuilh', 'ssulhi', 'ssulih', 'suhils', 'suhisl', 'suhlis', 'suhlsi', 'suhsil', 'suhsli', 'suihls', 'suihsl', 'suilhs', 'suilsh', 'suishl', 'suislh', 'sulhis', 'sulhsi', 'sulihs', 'sulish', 'sulshi', 'sulsih', 'sushil', 'sushli', 'susihl', 'susilh', 'suslhi', 'suslih', 'uhilss', 'uhisls', 'uhissl', 'uhliss', 'uhlsis', 'uhlssi', 'uhsils', 'uhsisl', 'uhslis', 'uhslsi', 'uhssil', 'uhssli', 'uihlss', 'uihsls', 'uihssl', 'uilhss', 'uilshs', 'uilssh', 'uishls', 'uishsl', 'uislhs', 'uislsh', 'uisshl', 'uisslh', 'ulhiss', 'ulhsis', 'ulhssi', 'ulihss', 'ulishs', 'ulissh', 'ulshis', 'ulshsi', 'ulsihs', 'ulsish', 'ulsshi', 'ulssih', 'ushils', 'ushisl', 'ushlis', 'ushlsi', 'ushsil', 'ushsli', 'usihls', 'usihsl', 'usilhs', 'usilsh', 'usishl', 'usislh', 'uslhis', 'uslhsi', 'uslihs', 'uslish', 'uslshi', 'uslsih', 'usshil', 'usshli', 'ussihl', 'ussilh', 'usslhi', 'usslih' ]],
];

testData.map(function(e){
	testOne.apply({opts:{silent:true}},e)
});

function testOne (method, input, expected, timer, msg1, msg2) {
	var that = this;//console.log(that);
	console.time('s');
	var r = api(input)[method]();
	var t = console.timeEnd('s');
	var testCond = JSON.stringify(r) == JSON.stringify(expected);
	if(testCond){
		that.opts.silent ? console.log('\x1b[32m', method, 'of', input, ': test passed',"\x1b[0m") : console.log('\x1b[32m', method, 'of', input, JSON.stringify(expected), JSON.stringify(r), ': test passed',"\x1b[0m");
	} else {
		that.opts.silent ? console.log('\x1b[31m', method, 'of', input, ': test failed',"\x1b[0m") : console.log('\x1b[31m', method, 'of', input, JSON.stringify(expected), JSON.stringify(r), ': test failed',"\x1b[0m");
	}
	return testCond;
}
