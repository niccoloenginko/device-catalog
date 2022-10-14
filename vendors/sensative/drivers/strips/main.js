var driver;(()=>{var e={582:(e,n,t)=>{const o=e=>e.toString(10),i=e=>"Ox"+e.toString(16);function r(e,n){const t=2*n;var o=Number(e).toString(16);for(o.length>t&&(o=o.substring(o.length-t));o.length<t;)o="0"+o;return o}const d=e=>r(parseInt(e.substring(2),16),4),s=e=>r(e,4),a={getsize:(e,n)=>1,decode:(e,n)=>e[n]},c={getsize:(e,n)=>a.getsize(e,n),decode:(e,n)=>a.decode(e,n)/2},l={getsize:(e,n)=>2,decode:(e,n)=>(e[n++]<<8)+e[n]},m={getsize:(e,n)=>2,decode:(e,n)=>((e,n)=>(128&e[n]?-65536:0)|e[n++]<<8|e[n++])(e,n)/10},u={getsize:(e,n)=>1,decode:(e,n)=>({high:!!(1&e[n]),low:!!(2&e[n])})},p={getsize:(e,n)=>1,decode:(e,n)=>!!e[n]},g={getsize:(e,n)=>c.getsize(e,n)+m.getsize(e,n+1),decode:(e,n)=>({humidity:{value:c.decode(e,n),unit:"%"},temp:{value:m.decode(e,n+1),unit:"C"}})},h={getsize:(e,n)=>3,decode:(e,n)=>({door:{value:p.decode(e,n),unit:"bool"},temp:{value:m.decode(e,n+1),unit:"C"}})},E=2,T=8,f=16,_=32,R=64,L=128,O=256,A=512,I={CheckInConfirmed:{reportbit:0,sensors:E,coding:{getsize:(e,n)=>8,decode:(e,n)=>({version:r((e[n++]<<24)+(e[n++]<<16)+(e[n++]<<8)+e[n++],4),idddata:r((e[n++]<<24)+(e[n++]<<16)+(e[n++]<<8)+e[n++],4)})},channel:110,unit:""},EmptyReport:{reportbit:-1,sensors:E,coding:{getsize:(e,n)=>0,decode:(e,n)=>0},channel:0,unit:""},BatteryReport:{reportbit:1,sensors:4,coding:a,channel:1,unit:"%"},TempReport:{reportbit:2,sensors:T,coding:m,channel:2,unit:"C"},TempAlarm:{reportbit:3,sensors:T,coding:u,channel:3,unit:""},AverageTempReport:{reportbit:4,sensors:T,coding:m,channel:4,unit:"C"},AverageTempAlarm:{reportbit:5,sensors:T,coding:u,channel:5,unit:""},HumidityReport:{reportbit:6,sensors:f,coding:c,channel:6,unit:"%"},LuxReport:{reportbit:7,sensors:_,coding:l,channel:7,unit:"Lux"},LuxReport2:{reportbit:8,sensors:_,coding:l,channel:8,unit:"Lux"},DoorReport:{reportbit:9,sensors:R,coding:p,channel:9,unit:""},DoorAlarm:{reportbit:10,sensors:R,coding:p,channel:10,unit:""},TamperReport:{reportbit:11,sensors:L,coding:p,channel:11,unit:""},TamperAlarm:{reportbit:12,sensors:L,coding:p,channel:12,unit:""},FloodReport:{reportbit:13,sensors:O,coding:a,channel:13,unit:""},FloodAlarm:{reportbit:14,sensors:O,coding:p,channel:14,unit:""},FoilAlarm:{reportbit:15,sensors:O,coding:p,channel:15,unit:""},TempHumReport:{reportbit:16,sensors:T|f,coding:g,channel:80,unit:""},AvgTempHumReport:{reportbit:17,sensors:T|f,coding:g,channel:81,unit:""},TempDoorReport:{reportbit:18,sensors:T|R,coding:h,channel:82,unit:""},CapacitanceFloodReport:{reportbit:19,sensors:O,coding:l,channel:112,unit:""},CapacitancePadReport:{reportbit:20,sensors:O,coding:l,channel:113,unit:""},CapacitanceEndReport:{reportbit:21,sensors:O,coding:l,channel:114,unit:""},UserSwitch1Alarm:{reportbit:22,sensors:L,coding:p,channel:16,unit:""},DoorCountReport:{reportbit:23,sensors:R,coding:l,channel:17,unit:""},PresenceReport:{reportbit:24,sensors:A,coding:p,channel:18,unit:""},IRProximityReport:{reportbit:25,sensors:A,coding:l,channel:19,unit:""},IRCloseProximityReport:{reportbit:26,sensors:A,coding:l,channel:20,unit:""},CloseProximityAlarm:{reportbit:27,sensors:A,coding:p,channel:21,unit:""},DisinfectAlarm:{reportbit:28,sensors:A,coding:a,channel:22,unit:""}},P=e=>{let n="";for(var t in I)e&1<<I[t].reportbit&&(""!=n&&(n+="|"),n+=t);return n},w=e=>{const n=e.split("|");let t=0;return n.map((e=>{if(e.length>0){if(!I.hasOwnProperty(e))throw{message:"Invalid report id: "+e};t|=1<<I[e].reportbit}})),r(t,4)},S={INVERT_DOOR:1,HIGH_POWER_PROXIMITY:2},C={NONE:{id:0,unit:"none",decode:i,encode:d,name:"None"},VERSION:{id:1,unit:"version",decode:i,encode:d,name:"Version"},BASE_POLL_INTERVAL:{id:2,unit:"ms",decode:o,encode:s,name:"Base poll interval"},REPORTS_ENABLED:{id:3,unit:"reports",decode:P,encode:w,name:"Reports enabled"},TEMP_POLL_INTERVAL:{id:4,unit:"s",decode:o,encode:s,name:"Temp poll interval"},TEMP_SEND_IMMEDIATELY_TRESHOLD:{id:5,unit:"mC",decode:o,encode:s,name:"Temp send immediately treshold"},TEMP_SEND_THROTTLED_TRESHOLD:{id:6,unit:"mC",decode:o,encode:s,name:"Temp send throttled treshold"},TEMP_SEND_THROTTLED_TIME:{id:7,unit:"s",decode:o,encode:s,name:"Temp send throttled time"},TEMP_LOW_ALARM:{id:8,unit:"mC",decode:o,encode:s,name:"Temp low alarm"},TEMP_HIGH_ALARM:{id:9,unit:"mC",decode:o,encode:s,name:"Temp high alarm"},TEMP_ALARM_HYSTERESIS:{id:10,unit:"mC",decode:o,encode:s,name:"Temp alarm hysteresis"},AVGTEMP_AVERAGE_TIME:{id:11,unit:"s",decode:o,encode:s,name:"Average temp average time"},AVGTEMP_MIN_TEMP:{id:12,unit:"mC",decode:o,encode:s,name:"Average temp min temp"},AVGTEMP_SEND_IMMEDIATELY_TRESHOLD:{id:13,unit:"mC",decode:o,encode:s,name:"Averate temp send immediately treshold"},AVGTEMP_LOW_ALARM:{id:14,unit:"mC",decode:o,encode:s,name:"Average temp low alarm"},AVGTEMP_HIGH_ALARM:{id:15,unit:"mC",decode:o,encode:s,name:"Average temp high alarm"},AVGTEMP_ALARM_HYSTERESIS:{id:16,unit:"mC",decode:o,encode:s,name:"Average temp hysteresis"},HUMIDITY_POLL_INTERVAL:{id:17,unit:"s",decode:o,encode:s,name:"Humidity poll interval"},HUMIDITY_TRESHOLD:{id:18,unit:"%",decode:o,encode:s,name:"Humidity treshold"},LUX_POLL_INTERVAL:{id:19,unit:"s",decode:o,encode:s,name:"Lux poll interval"},LUX_HIGH_LEVEL_1:{id:20,unit:"Lux",decode:o,encode:s,name:"Lux high level 1"},LUX_LOW_LEVEL_1:{id:21,unit:"Lux",decode:o,encode:s,name:"Lux low level 1"},LUX_HIGH_LEVEL_2:{id:22,unit:"Lux",decode:o,encode:s,name:"Lux high level 2"},LUX_LOW_LEVEL_2:{id:23,unit:"Lux",decode:o,encode:s,name:"Lux low level 2"},FLOOD_POLL_INTERVAL:{id:24,unit:"s",decode:o,encode:s,name:"Flood poll interval"},FLOOD_CAPACITANCE_MIN:{id:25,unit:"capacitance",decode:o,encode:s,name:"Flood capacitance min"},FLOOD_CAPACITANCE_MAX:{id:26,unit:"capacitance",decode:o,encode:s,name:"Flood capacitance max"},FLOOD_REPORT_INTERVAL:{id:27,unit:"s",decode:o,encode:s,name:"Flood report interval"},FLOOD_ALARM_TRESHOLD:{id:28,unit:"%",decode:o,encode:s,name:"Flood alarm treshold"},FLOOD_ALARM_HYSTERESIS:{id:29,unit:"%",decode:o,encode:s,name:"Flood alarm hysteresis"},SETTINGS_FOIL_TRESHOLD:{id:30,unit:"capacitance",decode:o,encode:s,name:"Foil treshold"},CAPACITANCE_FLOOD_REPORT_INTERVAL:{id:31,unit:"s",decode:o,encode:s,name:"Cap flood report interval"},CAPACITANCE_PAD_REPORT_INTERVAL:{id:32,unit:"s",decode:o,encode:s,name:"Cap pad report interval"},CAPACITANCE_END_REPORT_INTERVAL:{id:33,unit:"s",decode:o,encode:s,name:"Cap end report interval"},SENSORS_COMBINED_1:{id:34,unit:"reports",decode:P,encode:w,name:"Combined sensors 1"},SENSORS_COMBINED_2:{id:35,unit:"reports",decode:P,encode:w,name:"Combined sensors 2"},SENSORS_COMBINED_3:{id:36,unit:"reports",decode:P,encode:w,name:"Combined sensors 3"},HISTORY_REPORTS:{id:37,unit:"reports",decode:P,encode:w,name:"History reports"},DEMO_TRYJOIN_INTERVAL:{id:38,unit:"min",decode:o,encode:s,name:"Try join interval"},LUX_PLASTIC_COMP:{id:39,unit:"%",decode:o,encode:s,name:"Lux plastic comp"},LORA_DATA_RATE:{id:40,unit:"datarate",decode:o,encode:s,name:"Lora data rate"},LED_LEVEL:{id:41,unit:"ledlevel",decode:o,encode:s,name:"Led level"},LINK_CHECK_INTERVAL:{id:42,unit:"unknown",decode:o,encode:s,name:"Link check interval"},RESEND_RESET_TIME:{id:43,unit:"unknown",decode:o,encode:s,name:"Resend reset time"},LUX_LOW_CUTOFF:{id:44,unit:"lux",decode:o,encode:s,name:"Lux low cutoff"},DOOR_COUNT_REPORT_INTERVAL:{id:45,unit:"s",decode:o,encode:s,name:"Door count interval"},IR_PROXIMITY_REPORT_INTERVAL:{id:46,unit:"s",decode:o,encode:s,name:"IR Proximity report interval"},PRESENCE_POLL_INTERVAL:{id:47,unit:"s",decode:o,encode:s,name:"Presence poll interval"},PRESENCE_TRESHOLD:{id:48,unit:"reflection",decode:o,encode:s,name:"Presence treshold"},PRESENCE_TIMEOUT:{id:49,unit:"s",decode:o,encode:s,name:"Presence timeout"},SENSOR_CONFIGURATION:{id:50,unit:"config",decode:e=>{let n="";for(let t in S)e&S[t]&&(""!=n&&(n+="|"),n+=t);return n},encode:e=>{const n=e.split("|");let t=0;return n.map((e=>{for(let n in S)e==n&&(t|=S[n])})),r(t,4)},name:"Sensor configuration"}},v={DEFAULT:{id:0,name:"Default"},COMFORT_TEMP:{id:1,name:"Comfort Temp"},COMFORT_TEMP_LUX:{id:2,name:"Comfort Temp and Lux"},COMFORT_AVGTEMP:{id:3,name:"Comfort Average Temp"},GUARD_STD:{id:4,name:"Guard Standard"},DRIP_STD:{id:5,name:"Drip Standard"},PRESENCE_OFFICE:{id:6,name:"Presence Office"},PRESENCE_PUBLIC:{id:7,name:"Presence Public"},DISINFECT_OFFICE:{id:8,name:"Disinfect Office"},CLOSE_PROXIMITY_SLOW:{id:9,name:"Close Proximity Slow"},ALL_CAP_SENSORS_RAW:{id:240,name:"All cap sensors raw"}};function N(e){for(var n in C)if(C[n].id==e)return n;return null}const D={SET_SETTING:{port:11,cmd:1,decode:function(e,n){var t=new Object;if(n==e.end)throw{message:"No settings to set"};for(;n<e.length;){if(e.length<n+5)throw{message:"Set settings: Bad data size"};const i=e[n++],r=(e[n++]<<24)+(e[n++]<<16)+(e[n++]<<8)+e[n++];let d=!1;for(var o in C)C[o].id==i&&(d=!0,t[o]={id:i,name:C[o].name,unit:C[o].unit,value:C[o].decode(r)});if(0==d)throw{message:"Unknown setting: "+i}}return t},encode:function(e){var n="";for(var t in e)C.hasOwnProperty(t)&&(n+=r(C[t].id,1)+C[t].encode(e[t].value));return n},name:"Set setting"},GET_SETTING:{port:11,cmd:2,decode:function(e,n){let t=new Object;const o=e[n++],i=N(o);if(null==i)throw{message:"Get settings: Unknown setting "+o};return t[i]={id:o,name:i,unit:C[i].unit},t},encode:function(e){let n="";for(var t in e)for(var o in C)if(t==o){n+=r(C[o].id,1);continue}return n},name:"Get setting"},GET_HISTORY:{port:2,cmd:1,decode:function(e,n){if(5!=e.length)throw{message:"Get history command: Bad package size"};return{first:(e[n++]<<8)+e[n++],last:(e[n++]<<8)+e[n++],unit:"History sequence number"}},encode:function(e){if(0==e.hasOwnProperty("first")||0==e.hasOwnProperty("last"))throw{message:"Expected properties first and last missing"};return r(e.first,2)+r(e.last,2)},name:"Get history"},SET_PROFILE:{port:10,cmd:1,decode:function(e,n){if(2!=e.length)throw{message:"Set profile command: Bad package size"};const t=e[n++];for(var o in v)if(v[o].id==t)return{profile:v[o].name,id:o};throw{message:"Unknown profile "+t}},encode:function(e){if(0==e.hasOwnProperty("id"))throw{message:"Profile id is missing"};const n=e.id;if(0==v.hasOwnProperty(n))throw{message:"Unknown profile "+n};return r(v[n].id,1)},name:"Set profile"},CMD_UNJOIN:{port:10,cmd:8,decode:function(e,n){if(3!=e.length)throw{message:"Unjoin command: Bad package size"};return{minutes:(e[n++]<<8)+e[n++]}},encode:function(e){if(0==e.hasOwnProperty("minutes"))throw{message:"Unjoin requires minutes field"};return r(e.minutes,2)},name:"Unjoin"},CMD_ENDCOMP:{port:224,cmd:6,decode:function(e,n){if(1!=e.length)throw{message:"End compliance test: Bad package size"};return{}},encode:function(e){return""},name:"End compliance test"}},b=e=>{for(let n in I)if(I[n].channel==e)return n;throw{message:"Unknown channel: "+e}},M=(e,n,t,o)=>{const i=e.coding.decode(n,t);let r;return r="object"==typeof i?i:{value:i,unit:e.unit},null!=o&&(r.historyPosition=o),r},y=["OK","Bad setting","Bad payload length","Value not accepted","Unknown command"],k={DIRECT_PORT:{port:1,decode:e=>{if(e.length<2)throw"message: Too few bytes";let n=0;const t=e[n++]<<8|e[n++];let o={};o.historyStart=t;let i=t;for(;n<e.length;){let t=null;128&e[n]&&(t=i--);const r=b(127&e[n++]),d=I[r],s=n+d.coding.getsize(e,n);if(s>e.length)throw{message:"Incomplete data"};o[r]=M(d,e,n,t),n=s}return[o]}},HISTORY_PORT:{port:2,decode:e=>{let n=0,t=[],o=(new Date).getTime();if(e.length<2)throw{message:"Too small history package"};let i=e[n++]<<8|e[n++];for(;n<e.length-5;){let r=1e3*(e[n++]<<24|e[n++]<<16|e[n++]<<8|e[n++]);const d=b(127&e[n++]),s=I[d],a=n+s.coding.getsize(e,n);if(a>e.length)throw{message:"Incomplete data"};let c={};c.timestamp=o-r,c[s]=M(s,e,n,i++),t.push(c),n=a}if(n!=e.length)throw{message:"Invalid history package size"};return t}},SETTINGS_PORT:{port:11,decode:e=>{let n=0,t=[];if((new Date).getTime(),e.length<1)throw{message:"To small settings package"};for(;n<e.length;){let o=e[n++];if(2==o){if(n+5<e.length)throw{message:"Incomplete settings data"};const o=e[n++],i=N(o);if(null==i)throw{message:"Unknown setting id "+o};let r={};r[i]={id:o,value:e[n++]<<24|e[n++]<<16|e[n++]<<8|e[n++],unit:C[i].unit},t.push(r)}else{if(3!=o)throw{message:"Unknown settings uplink format: "+o};{if(n+1!=e.length)throw{message:"Bad status code message length"};const o=e[n++];if(o>=y.length)throw{message:"Unknown status code: "+o};decoded={},decoded.statusCode={value:o,status:y[o]},t.push(decoded)}}}return t}}},U=(e,n)=>{for(let t in k)if(k[t].port==e)return k[t].decode(n);throw"No function for decoding uplinks on port "+e},H=(e,n)=>{if(null==n||n.length<1)throw{message:"Not enough data"};const t=n[0];for(var o in D)if(D[o].port==e&&D[o].cmd==t){let e=D[o].decode(n,1);return e.cmd=D[o],e}throw{message:"Unrecognized downlink"}},x={d:{name:"downlink",func:(e,n)=>H(e,n)},u:{name:"uplink",func:(e,n)=>U(e,n)}};function F(e){e.question("Select mode ("+Object.keys(x).map((e=>e+"="+x[e].name))+"): ",(n=>{if(!x[n])return console.log("** Unknown mode: "+n),void F(e);const t=x[n].func,o=x[n].name;e.question("Enter "+o+" port (decimal): ",(n=>{n=Number(n),e.question("Enter "+o+" (hex format): ",(o=>{try{let e=o.replace(/\s/g,""),i=Buffer.from(e,"hex"),r=t(n,i);console.log(JSON.stringify(r))}catch(e){console.log(e)}F(e)}))}))}))}n.decodeLoraStripsDownlink=H,n.decodeLoraStripsUplink=U,n.encodeLoraStripsDownlink=e=>{if(null==e||0==e.hasOwnProperty("cmd"))throw{message:"Bad object for encode, null or missing cmd."};const n=e.cmd.name;for(var t in D)if(n==D[t].name)return{data:r(D[t].cmd,1)+D[t].encode(e),port:D[t].port};throw{message:"Unknown command: "+n}},n.commandLine=function(){let e=null;try{e=t(521)}catch(e){console.log(e)}F(e.createInterface({input:process.stdin,output:process.stdout}))}},521:e=>{"use strict";e.exports=require("readline")}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={exports:{}};return e[o](r,r.exports,t),r.exports}var o={};(()=>{var e=o;const n=t(582);e.decodeUplink=function(e){const t=e.bytes,o=parseInt(e.fPort);let i=null;switch(o){case 1:case 11:i=n.decodeLoraStripsUplink(o,t);break;case 2:throw new Error("This decoder does not support history data.");default:throw new Error("This decoder will only decode data points and status codes, not metadata or mac commands.")}return i[0]},e.decodeDownlink=function(e){const t=e.bytes,o=parseInt(e.fPort);return function(e){let n={};for(const t in e)e[t],e[t].hasOwnProperty("value")&&(n[t]=e[t].value);return e.hasOwnProperty("cmd")&&e.cmd.hasOwnProperty("name")&&(n.cmd=e.cmd.name),n}(n.decodeLoraStripsDownlink(o,t))},e.encodeDownlink=function(e){return function(e){let t={};for(const n in e)"cmd"==n?t.cmd={name:e.cmd}:t[n]={value:e[n]};const o=n.encodeLoraStripsDownlink(t),i=Buffer.from(o.data,"hex");var r=[];for(let e=0;e<i.length;++e)r.push(i.readUInt8(e));return{fPort:o.port,bytes:r}}(e)}})(),driver=o})();