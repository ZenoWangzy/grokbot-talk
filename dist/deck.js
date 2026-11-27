(()=>{var ee=(t,e=0,n=1)=>Math.min(n,Math.max(e,t)),Ce=(t,e,n)=>t+(e-t)*n;var $={lin:t=>t,in2:t=>t*t,out2:t=>1-(1-t)*(1-t),in3:t=>t*t*t,out3:t=>1-Math.pow(1-t,3),out4:t=>1-Math.pow(1-t,4),io2:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,io3:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,expo:t=>t>=1?1:1-Math.pow(2,-10*t),back:t=>1+2.70158*Math.pow(t-1,3)+1.70158*Math.pow(t-1,2),elastic:t=>t<=0?0:t>=1?1:Math.pow(2,-9*t)*Math.sin((t*9-.75)*(2*Math.PI/3))+1,bounce:t=>t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375};function Et(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}var pe={ink:"#f4f1ea",dim:"rgba(244,241,234,.5)",faint:"rgba(244,241,234,.14)",amber:"#ffb340",orange:"#ff8a3d",indigo:"#6f6bff",lime:"#b6f35a",cyan:"#38e8ff",magenta:"#ff3df0",rose:"#ff7a90",green:"#3ddc84",red:"#ff4a3d",gold:"#ffd25a",paper:"#e9e2d3"};function me(t,e,n,i,s,r){r=Math.min(r,i/2,s/2),t.beginPath(),t.moveTo(e+r,n),t.arcTo(e+i,n,e+i,n+s,r),t.arcTo(e+i,n+s,e,n+s,r),t.arcTo(e,n+s,e,n,r),t.arcTo(e,n,e+i,n,r),t.closePath()}var xf=t=>/[0-9,.%$+×]/.test(t),Ic='DeckSans, "Noto Sans CJK SC", sans-serif',Lc='DeckMono, "DejaVu Sans Mono", monospace';function Me(t,e,n,i,s){s=s||{};let r=s.size||48;if(t.save(),t.globalAlpha*=s.alpha==null?1:s.alpha,t.font=(s.mono?"700 ":(s.wt||700)+" ")+r+"px "+(s.mono?Lc:Ic),t.textAlign=s.align||"left",t.textBaseline=s.base||"alphabetic",t.letterSpacing=(s.track||0)+"px",s.maxW){let a=t.measureText(e).width;a>s.maxW&&(r*=s.maxW/a,t.font=t.font.replace(/[\d.]+px/,r+"px"))}t.fillStyle=s.fill&&typeof s.fill!="string"&&s.fill.call?s.fill(t,n,i,r):s.fill||pe.ink,s.glow&&(t.shadowColor=s.glow,t.shadowBlur=s.gb||30),s.stroke&&(t.lineWidth=s.sw||4,t.strokeStyle=s.stroke,t.lineJoin="round",t.strokeText(e,n,i)),t.fillText(e,n,i),s.fat&&(t.lineWidth=r*s.fat,t.strokeStyle=t.fillStyle,t.lineJoin="round",t.shadowBlur=0,t.strokeText(e,n,i)),t.restore()}function at(t,e,n){n=n||{},t.save(),t.font=(n.mono?"700 ":(n.wt||700)+" ")+(n.size||48)+"px "+(n.mono?Lc:Ic),t.letterSpacing=(n.track||0)+"px";let i=t.measureText(e).width;return t.restore(),i}function Kt(t,e,n,i,s){s=s||{};let r=[],a="",o=null;for(let f of e){let h=xf(f);o===null||h===o?(a+=f,o=h):(r.push([a,o]),a=f,o=h)}a&&r.push([a,o]);let l=r.map(f=>at(t,f[0],Object.assign({},s,{mono:f[1]}))),c=l.reduce((f,h)=>f+h,0),u=n-(s.align==="center"?c/2:s.align==="right"?c:0);return r.forEach((f,h)=>{Me(t,f[0],u,i,Object.assign({},s,{mono:f[1],align:"left",mono2:0})),u+=l[h]}),c}var Rs=t=>String(Math.round(t)).replace(/\B(?=(\d{3})+(?!\d))/g,",");function Ei(t,e){return t.replace(/\d[\d,]*/g,n=>{let i=parseInt(n.replace(/,/g,""),10);return(/,/.test(n)?Rs(i*e):String(Math.round(i*e))).padStart(n.length," ")})}function Ar(t,e,n,i){let s=[],r="";for(let a of e)at(t,r+a,i)>n&&r?(s.push(r),r=a):r+=a;return r&&s.push(r),s}function $t(t,e,n,i,s,r){let a=t.createLinearGradient(e,n,i,s);return r.forEach((o,l)=>a.addColorStop(o[0],o[1])),a}function Dn(t,e,n,i,s,r){let a=t.createRadialGradient(e,n,i,e,n,s);return r.forEach(o=>a.addColorStop(o[0],o[1])),a}function Oe(t,e,n,i){t.beginPath(),t.arc(e,n,i,0,Math.PI*2)}function xt(t,e,n,i,s,r,a,o){i<=0||i>=1||(t.save(),t.globalAlpha*=1-i,t.strokeStyle=a,t.lineWidth=(o||6)*(1-i*.7),Oe(t,e,n,Ce(s,r,$.out3(i))),t.stroke(),t.restore())}function en(t,e,n,i,s,r){r=r||{},t.save(),t.translate(e,n),t.fillStyle=s,t.globalAlpha*=r.alpha==null?1:r.alpha;let a=r.t||0,o=r.arms?Math.sin(a*14+(r.ph||0))*.25:0;Oe(t,0,-i*.8,i*.17),t.fill(),t.beginPath(),t.moveTo(-i*.3,0),t.lineTo(-i*.3,-i*.3),t.quadraticCurveTo(-i*.3,-i*.58,0,-i*.58),t.quadraticCurveTo(i*.3,-i*.58,i*.3,-i*.3),t.lineTo(i*.3,0),t.closePath(),t.fill(),r.arms&&(t.strokeStyle=s,t.lineWidth=i*.09,t.lineCap="round",t.beginPath(),t.moveTo(-i*.3,-i*.34),t.lineTo(-i*.46,-i*.08+o*i*.2),t.moveTo(i*.3,-i*.34),t.lineTo(i*.46,-i*.08-o*i*.2),t.stroke()),t.restore()}function Nn(t,e,n,i,s){s=s||{};let r=s.color||pe.cyan,a=s.t||0;t.save(),t.translate(e,n),t.globalAlpha*=s.alpha==null?1:s.alpha;let o=i*.78;s.glow&&(t.shadowColor=r,t.shadowBlur=s.glow),t.fillStyle=s.body||"rgba(8,14,24,.95)",t.strokeStyle=r,t.lineWidth=Math.max(2,i*.055),me(t,-i/2,-o/2,i,o,i*.26),t.fill(),t.stroke(),t.shadowBlur=0,t.beginPath(),t.moveTo(0,-o/2),t.lineTo(0,-o/2-i*.2),t.stroke(),Oe(t,0,-o/2-i*.24,i*.06),t.fillStyle=r,t.fill();let l=Math.sin(a*1.3+(s.ph||0))>.96?.15:1,c=(s.mood==="sad"?.08:0)*i;t.fillStyle=r,s.glow&&(t.shadowColor=r,t.shadowBlur=s.glow*.6),me(t,-i*.27,-i*.1+c,i*.15,i*.2*l,i*.06),t.fill(),me(t,i*.12,-i*.1+c,i*.15,i*.2*l,i*.06),t.fill(),t.shadowBlur=0,t.lineWidth=Math.max(2,i*.05),t.lineCap="round",t.strokeStyle=r,t.beginPath(),s.mood==="sad"?t.arc(0,i*.3,i*.1,Math.PI*1.15,Math.PI*1.85):(t.moveTo(-i*.1,i*.2),t.quadraticCurveTo(0,i*.27,i*.1,i*.2)),t.stroke(),t.restore()}function Cs(t,e,n,i,s){s=s||{},t.save(),t.translate(e,n),t.globalAlpha*=s.alpha==null?1:s.alpha,s.glow&&(t.shadowColor=pe.green,t.shadowBlur=s.glow),t.fillStyle=pe.green,me(t,-i/2,-i/2,i,i,i*.24),t.fill(),t.shadowBlur=0,t.fillStyle="#fff",t.beginPath(),t.ellipse(-i*.1,-i*.06,i*.27,i*.22,0,0,7),t.fill(),t.beginPath(),t.moveTo(-i*.24,i*.1),t.lineTo(-i*.3,i*.26),t.lineTo(-i*.1,i*.14),t.fill(),t.fillStyle=pe.green,Oe(t,-i*.19,-i*.08,i*.033),t.fill(),Oe(t,-i*.01,-i*.08,i*.033),t.fill(),t.fillStyle="rgba(255,255,255,.92)",t.beginPath(),t.ellipse(i*.13,i*.1,i*.22,i*.17,0,0,7),t.fill(),t.beginPath(),t.moveTo(i*.2,i*.22),t.lineTo(i*.3,i*.32),t.lineTo(i*.1,i*.26),t.fill(),t.fillStyle=pe.green,Oe(t,i*.06,i*.08,i*.027),t.fill(),Oe(t,i*.2,i*.08,i*.027),t.fill(),t.restore()}function Vi(t,e,n,i,s,r,a){Math.floor(r*2.2)%2===0&&(t.save(),t.fillStyle=a||pe.amber,t.shadowColor=a||pe.amber,t.shadowBlur=24,t.fillRect(e,n,i,s),t.restore())}var nh=0,ul=1,ih=2;var Qs=1,sh=2,us=3,_i=0,Zt=1,kn=2,Fi=0,fs=1,js=2,fl=3,dl=4,rh=5;var Oi=100,ah=101,oh=102,lh=103,ch=104,hh=200,uh=201,fh=202,dh=203,pl=204,ml=205,ph=206,mh=207,gh=208,_h=209,xh=210,vh=211,yh=212,Mh=213,bh=214,$r=0,Qr=1,jr=2,is=3,ea=4,ta=5,na=6,ia=7,gl=0,Sh=1,Th=2,zn=0,_l=1,xl=2,vl=3,yl=4,Ml=5,bl=6,Sl=7;var Tl=300,Bi=301,ds=302,Ca=303,Pa=304,sa=1e3,Fn=1001,ra=1002,Ut=1003,wh=1004;var er=1005;var Rt=1006,Ia=1007;var An=1008;var cn=1009,wl=1010,Al=1011,ps=1012,La=1013,En=1014,Rn=1015,Cn=1016,Da=1017,Na=1018,ki=1020,El=35902,Rl=35899,Cl=1021,Pl=1022,Pn=1023,$n=1026,jn=1027,Il=1028,Ua=1029,xi=1030,Fa=1031;var Oa=1033,tr=33776,nr=33777,ir=33778,sr=33779,Ba=35840,ka=35841,za=35842,Ga=35843,Va=36196,Ha=37492,Wa=37496,Xa=37488,qa=37489,rr=37490,Ya=37491,Za=37808,Ja=37809,Ka=37810,$a=37811,Qa=37812,ja=37813,eo=37814,to=37815,no=37816,io=37817,so=37818,ro=37819,ao=37820,oo=37821,lo=36492,co=36494,ho=36495,uo=36283,fo=36284,ar=36285,po=36286;var Us=2300,aa=2301,Jr=2302,sl=2303,rl=2400,al=2401,ol=2402;var Ah=3200;var Ll=0,Eh=1,ei="",sn="srgb",Fs="srgb-linear",Os="linear",it="srgb";var Kr=7680;var Rh=519,Ch=512,Ph=513,Ih=514,Dl=515,Lh=516,Dh=517,Nl=518,Ul=519,Nh=35044;var Fl="300 es",_n=2e3,Bs=2001;function vf(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function yf(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function ks(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Uh(){let t=ks("canvas");return t.style.display="block",t}var Dc={},ss=null;function Ol(...t){let e="THREE."+t.shift();ss?ss("log",e,...t):console.log(e,...t)}function Fh(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ue(...t){t=Fh(t);let e="THREE."+t.shift();if(ss)ss("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Fe(...t){t=Fh(t);let e="THREE."+t.shift();if(ss)ss("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ns(...t){let e=t.join(" ");e in Dc||(Dc[e]=!0,Ue(...t))}function Oh(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var Bh={[$r]:$r,[jr]:na,[ea]:ea,[is]:ta,[Qr]:Qr,[na]:jr,[ia]:ia,[ta]:is},On=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Oo=Math.PI/180,oa=180/Math.PI;function or(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function Mf(t,e){return(t%e+e)%e}function Bo(t,e,n){return(1-n)*t+n*e}function kh(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Bl(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function bf(t,e){if(e.constructor===Float32Array)return t;let n=Bl(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function Sf(t,e){if(e.constructor===Float32Array)return t;let n=Bl(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}var je=class{static{this.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bn=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[a+0],d=r[a+1],p=r[a+2],_=r[a+3];if(f!==_||l!==h||c!==d||u!==p){let m=l*h+c*d+u*p+f*_;m<0&&(h=-h,d=-d,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){let y=Math.acos(m),w=Math.sin(y);g=Math.sin(g*y)/w,o=Math.sin(o*y)/w,l=l*g+h*o,c=c*g+d*o,u=u*g+p*o,f=f*g+_*o}else{l=l*g+h*o,c=c*g+d*o,u=u*g+p*o,f=f*g+_*o;let y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],h=r[a+1],d=r[a+2],p=r[a+3];return e[n]=o*p+u*f+l*d-c*h,e[n+1]=l*p+u*h+c*f-o*d,e[n+2]=c*p+u*d+o*h-l*f,e[n+3]=u*p-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),h=l(i/2),d=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"YZX":this._x=h*u*f+c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f-h*d*p;break;case"XZY":this._x=h*u*f-c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f+h*d*p;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+o+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,r=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class{static{this.prototype.isVector3=!0}constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Nc.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Nc.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*n-r*s),f=2*(r*i-a*n);return this.x=n+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,r=e.z,a=n.x,o=n.y,l=n.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ko.copy(this).projectOnVector(e),this.sub(ko)}reflect(e){return this.sub(ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ko=new G,Nc=new Bn,Be=class{static{this.prototype.isMatrix3=!0}constructor(e,n,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c)}set(e,n,i,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],p=i[8],_=s[0],m=s[3],g=s[6],y=s[1],w=s[4],b=s[7],S=s[2],E=s[5],x=s[8];return r[0]=a*_+o*y+l*S,r[3]=a*m+o*w+l*E,r[6]=a*g+o*b+l*x,r[1]=c*_+u*y+f*S,r[4]=c*m+u*w+f*E,r[7]=c*g+u*b+f*x,r[2]=h*_+d*y+p*S,r[5]=h*m+d*w+p*E,r[8]=h*g+d*b+p*x,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,p=n*f+i*h+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=f*_,e[1]=(s*c-u*i)*_,e[2]=(o*i-s*a)*_,e[3]=h*_,e[4]=(u*n-s*l)*_,e[5]=(s*r-o*n)*_,e[6]=d*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*r)*_,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return Ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zo.makeScale(e,n)),this}rotate(e){return Ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zo.makeRotation(-e)),this}translate(e,n){return Ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zo.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},zo=new Be,Uc=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fc=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tf(){let t={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(s.r=Kn(s.r),s.g=Kn(s.g),s.b=Kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?Os:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Fs]:{primaries:e,whitePoint:i,transfer:Os,toXYZ:Uc,fromXYZ:Fc,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:i,transfer:it,toXYZ:Uc,fromXYZ:Fc,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),t}var Ye=Tf();function Kn(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ns(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var Hi,la=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hi===void 0&&(Hi=ks("canvas")),Hi.width=e.width,Hi.height=e.height;let s=Hi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Hi}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=ks("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Kn(n[i]/255)*255):n[i]=Kn(n[i]);return{data:n,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wf=0,rs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=or(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Go(s[a].image)):r.push(Go(s[a]))}else r=Go(s);i.url=r}return n||(e.images[this.uuid]=i),i}};function Go(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?la.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}var Af=0,Vo=new G,Xt=class t extends On{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Fn,s=Fn,r=Rt,a=An,o=Pn,l=cn,c=t.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=or(),this.name="",this.source=new rs(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Vo).x}get height(){return this.source.getSize(Vo).y}get depth(){return this.source.getSize(Vo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){Ue(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ue(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sa:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sa:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Tl;Xt.DEFAULT_ANISOTROPY=1;var _t=class{static{this.prototype.isVector4=!0}constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let w=(c+1)/2,b=(d+1)/2,S=(g+1)/2,E=(u+h)/4,x=(f+_)/4,T=(p+m)/4;return w>b&&w>S?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=E/i,r=x/i):b>S?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=E/s,r=T/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=x/r,s=T/r),this.set(i,s,r,n),this}let y=Math.sqrt((m-p)*(m-p)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ca=class extends On{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new _t(0,0,e,n),this.scissorTest=!1,this.viewport=new _t(0,0,e,n),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Xt({width:e,height:n,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let n={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},e.textures[n].image);this.textures[n].source=new rs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends ca{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},zs=class extends Xt{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ha=class extends Xt{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var gt=class t{static{this.prototype.isMatrix4=!0}constructor(e,n,i,s,r,a,o,l,c,u,f,h,d,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c,u,f,h,d,p,_,m)}set(e,n,i,s,r,a,o,l,c,u,f,h,d,p,_,m){let g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let n=this.elements,i=e.elements,s=1/Wi.setFromMatrixColumn(e,0).length(),r=1/Wi.setFromMatrixColumn(e,1).length(),a=1/Wi.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=a*u,d=a*f,p=o*u,_=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=d+p*c,n[5]=h-_*c,n[9]=-o*l,n[2]=_-h*c,n[6]=p+d*c,n[10]=a*l}else if(e.order==="YXZ"){let h=l*u,d=l*f,p=c*u,_=c*f;n[0]=h+_*o,n[4]=p*o-d,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=d*o-p,n[6]=_+h*o,n[10]=a*l}else if(e.order==="ZXY"){let h=l*u,d=l*f,p=c*u,_=c*f;n[0]=h-_*o,n[4]=-a*f,n[8]=p+d*o,n[1]=d+p*o,n[5]=a*u,n[9]=_-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){let h=a*u,d=a*f,p=o*u,_=o*f;n[0]=l*u,n[4]=p*c-d,n[8]=h*c+_,n[1]=l*f,n[5]=_*c+h,n[9]=d*c-p,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){let h=a*l,d=a*c,p=o*l,_=o*c;n[0]=l*u,n[4]=_-h*f,n[8]=p*f+d,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=d*f+p,n[10]=h-_*f}else if(e.order==="XZY"){let h=a*l,d=a*c,p=o*l,_=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+_,n[5]=a*u,n[9]=d*f-p,n[2]=p*f-d,n[6]=o*u,n[10]=_*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ef,e,Rf)}lookAt(e,n,i){let s=this.elements;return tn.subVectors(e,n),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ri.crossVectors(i,tn),ri.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ri.crossVectors(i,tn)),ri.normalize(),Er.crossVectors(tn,ri),s[0]=ri.x,s[4]=Er.x,s[8]=tn.x,s[1]=ri.y,s[5]=Er.y,s[9]=tn.y,s[2]=ri.z,s[6]=Er.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],p=i[2],_=i[6],m=i[10],g=i[14],y=i[3],w=i[7],b=i[11],S=i[15],E=s[0],x=s[4],T=s[8],U=s[12],C=s[1],I=s[5],N=s[9],V=s[13],P=s[2],k=s[6],Y=s[10],H=s[14],ie=s[3],X=s[7],j=s[11],te=s[15];return r[0]=a*E+o*C+l*P+c*ie,r[4]=a*x+o*I+l*k+c*X,r[8]=a*T+o*N+l*Y+c*j,r[12]=a*U+o*V+l*H+c*te,r[1]=u*E+f*C+h*P+d*ie,r[5]=u*x+f*I+h*k+d*X,r[9]=u*T+f*N+h*Y+d*j,r[13]=u*U+f*V+h*H+d*te,r[2]=p*E+_*C+m*P+g*ie,r[6]=p*x+_*I+m*k+g*X,r[10]=p*T+_*N+m*Y+g*j,r[14]=p*U+_*V+m*H+g*te,r[3]=y*E+w*C+b*P+S*ie,r[7]=y*x+w*I+b*k+S*X,r[11]=y*T+w*N+b*Y+S*j,r[15]=y*U+w*V+b*H+S*te,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],p=e[3],_=e[7],m=e[11],g=e[15],y=l*d-c*h,w=o*d-c*f,b=o*h-l*f,S=a*d-c*u,E=a*h-l*u,x=a*f-o*u;return n*(_*y-m*w+g*b)-i*(p*y-m*S+g*E)+s*(p*w-_*S+g*x)-r*(p*b-_*E+m*x)}determinantAffine(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return n*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],p=e[12],_=e[13],m=e[14],g=e[15],y=n*o-i*a,w=n*l-s*a,b=n*c-r*a,S=i*l-s*o,E=i*c-r*o,x=s*c-r*l,T=u*_-f*p,U=u*m-h*p,C=u*g-d*p,I=f*m-h*_,N=f*g-d*_,V=h*g-d*m,P=y*V-w*N+b*I+S*C-E*U+x*T;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/P;return e[0]=(o*V-l*N+c*I)*k,e[1]=(s*N-i*V-r*I)*k,e[2]=(_*x-m*E+g*S)*k,e[3]=(h*E-f*x-d*S)*k,e[4]=(l*C-a*V-c*U)*k,e[5]=(n*V-s*C+r*U)*k,e[6]=(m*b-p*x-g*w)*k,e[7]=(u*x-h*b+d*w)*k,e[8]=(a*N-o*C+c*T)*k,e[9]=(i*C-n*N-r*T)*k,e[10]=(p*E-_*b+g*y)*k,e[11]=(f*b-u*E-d*y)*k,e[12]=(o*U-a*I-l*T)*k,e[13]=(n*I-i*U+s*T)*k,e[14]=(_*w-p*S-m*y)*k,e[15]=(u*S-f*w+h*y)*k,this}scale(e){let n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,r=n._x,a=n._y,o=n._z,l=n._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,p=r*f,_=a*u,m=a*f,g=o*f,y=l*c,w=l*u,b=l*f,S=i.x,E=i.y,x=i.z;return s[0]=(1-(_+g))*S,s[1]=(d+b)*S,s[2]=(p-w)*S,s[3]=0,s[4]=(d-b)*E,s[5]=(1-(h+g))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(p+w)*x,s[9]=(m-y)*x,s[10]=(1-(h+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let a=Wi.set(s[0],s[1],s[2]).length(),o=Wi.set(s[4],s[5],s[6]).length(),l=Wi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Mn.copy(this);let c=1/a,u=1/o,f=1/l;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,n.setFromRotationMatrix(Mn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,s,r,a,o=_n,l=!1){let c=this.elements,u=2*r/(n-e),f=2*r/(i-s),h=(n+e)/(n-e),d=(i+s)/(i-s),p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===_n)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Bs)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,a,o=_n,l=!1){let c=this.elements,u=2/(n-e),f=2/(i-s),h=-(n+e)/(n-e),d=-(i+s)/(i-s),p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===_n)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===Bs)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Wi=new G,Mn=new gt,Ef=new G(0,0,0),Rf=new G(1,1,1),ri=new G,Er=new G,tn=new G,Oc=new gt,Bc=new Bn,ui=class t{constructor(e=0,n=0,i=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oc,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bc.setFromEuler(this),this.setFromQuaternion(Bc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ui.DEFAULT_ORDER="XYZ";var Gs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cf=0,kc=new G,Xi=new Bn,Xn=new gt,Rr=new G,Ps=new G,Pf=new G,If=new Bn,zc=new G(1,0,0),Gc=new G(0,1,0),Vc=new G(0,0,1),Hc={type:"added"},Lf={type:"removed"},qi={type:"childadded",child:null},Ho={type:"childremoved",child:null},on=class t extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new G,n=new ui,i=new Bn,s=new G(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new Be}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Xi.setFromAxisAngle(e,n),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,n){return Xi.setFromAxisAngle(e,n),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(zc,e)}rotateY(e){return this.rotateOnAxis(Gc,e)}rotateZ(e){return this.rotateOnAxis(Vc,e)}translateOnAxis(e,n){return kc.copy(e).applyQuaternion(this.quaternion),this.position.add(kc.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(zc,e)}translateY(e){return this.translateOnAxis(Gc,e)}translateZ(e){return this.translateOnAxis(Vc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Rr.copy(e):Rr.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Ps,Rr,this.up):Xn.lookAt(Rr,Ps,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Xn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hc),qi.child=e,this.dispatchEvent(qi),qi.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Lf),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hc),qi.child=e,this.dispatchEvent(qi),qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,Pf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,If,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(n){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};on.DEFAULT_UP=new G(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Li=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},Df={type:"move"},as=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=n.getJointPose(_,i),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Df)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Li;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Wo(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Ze=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=Ye.workingColorSpace){if(e=Mf(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=Wo(a,r,e+1/3),this.g=Wo(a,r,e),this.b=Wo(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(e,n=sn){function i(r){r!==void 0&&parseFloat(r)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,n);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ue("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=sn){let i=zh[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return Ye.workingToColorSpace(Vt.copy(this),e),Math.round(Qe(Vt.r*255,0,255))*65536+Math.round(Qe(Vt.g*255,0,255))*256+Math.round(Qe(Vt.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.workingToColorSpace(Vt.copy(this),n);let i=Vt.r,s=Vt.g,r=Vt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ye.workingColorSpace){return Ye.workingToColorSpace(Vt.copy(this),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=sn){Ye.workingToColorSpace(Vt.copy(this),e);let n=Vt.r,i=Vt.g,s=Vt.b;return e!==sn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+n,ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ai),e.getHSL(Cr);let i=Bo(ai.h,Cr.h,n),s=Bo(ai.s,Cr.s,n),r=Bo(ai.l,Cr.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new Ze;Ze.NAMES=zh;var os=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},bn=new G,qn=new G,Xo=new G,Yn=new G,Yi=new G,Zi=new G,Wc=new G,qo=new G,Yo=new G,Zo=new G,Jo=new _t,Ko=new _t,$o=new _t,hi=class t{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),bn.subVectors(e,n),s.cross(bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){bn.subVectors(s,n),qn.subVectors(i,n),Xo.subVectors(e,n);let a=bn.dot(bn),o=bn.dot(qn),l=bn.dot(Xo),c=qn.dot(qn),u=qn.dot(Xo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(c*l-o*u)*h,p=(a*u-o*l)*h;return r.set(1-d-p,p,d)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,n,i,s,r,a,o,l){return this.getBarycoord(e,n,i,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(e,n,i,s,r,a){return Jo.setScalar(0),Ko.setScalar(0),$o.setScalar(0),Jo.fromBufferAttribute(e,n),Ko.fromBufferAttribute(e,i),$o.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Jo,r.x),a.addScaledVector(Ko,r.y),a.addScaledVector($o,r.z),a}static isFrontFacing(e,n,i,s){return bn.subVectors(i,n),qn.subVectors(e,n),bn.cross(qn).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),bn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,r=this.c,a,o;Yi.subVectors(s,i),Zi.subVectors(r,i),qo.subVectors(e,i);let l=Yi.dot(qo),c=Zi.dot(qo);if(l<=0&&c<=0)return n.copy(i);Yo.subVectors(e,s);let u=Yi.dot(Yo),f=Zi.dot(Yo);if(u>=0&&f<=u)return n.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),n.copy(i).addScaledVector(Yi,a);Zo.subVectors(e,r);let d=Yi.dot(Zo),p=Zi.dot(Zo);if(p>=0&&d<=p)return n.copy(r);let _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),n.copy(i).addScaledVector(Zi,o);let m=u*p-d*f;if(m<=0&&f-u>=0&&d-p>=0)return Wc.subVectors(r,s),o=(f-u)/(f-u+(d-p)),n.copy(s).addScaledVector(Wc,o);let g=1/(m+_+h);return a=_*g,o=h*g,n.copy(i).addScaledVector(Yi,a).addScaledVector(Zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},fi=class{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Sn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Sn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Sn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pr.copy(i.boundingBox)),Pr.applyMatrix4(e.matrixWorld),this.union(Pr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),Ir.subVectors(this.max,Is),Ji.subVectors(e.a,Is),Ki.subVectors(e.b,Is),$i.subVectors(e.c,Is),oi.subVectors(Ki,Ji),li.subVectors($i,Ki),Ri.subVectors(Ji,$i);let n=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Ri.z,Ri.y,oi.z,0,-oi.x,li.z,0,-li.x,Ri.z,0,-Ri.x,-oi.y,oi.x,0,-li.y,li.x,0,-Ri.y,Ri.x,0];return!Qo(n,Ji,Ki,$i,Ir)||(n=[1,0,0,0,1,0,0,0,1],!Qo(n,Ji,Ki,$i,Ir))?!1:(Lr.crossVectors(oi,li),n=[Lr.x,Lr.y,Lr.z],Qo(n,Ji,Ki,$i,Ir))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zn=[new G,new G,new G,new G,new G,new G,new G,new G],Sn=new G,Pr=new fi,Ji=new G,Ki=new G,$i=new G,oi=new G,li=new G,Ri=new G,Is=new G,Ir=new G,Lr=new G,Ci=new G;function Qo(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){Ci.fromArray(t,r);let o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=e.dot(Ci),c=n.dot(Ci),u=i.dot(Ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var bt=new G,Dr=new je,Nf=0,an=class extends On{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nf++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Nh,this.updateRanges=[],this.gpuType=Rn,this.version=0,this._normalizationScale=e!==void 0?Bl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Dr.fromBufferAttribute(this,n),Dr.applyMatrix3(e),this.setXY(n,Dr.x,Dr.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):bf(e,this.array)}_normalize(e){let n=this._normalizationScale;return n!==void 0?Math.round(e*n):Sf(e,this.array)}};var Vs=class extends an{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var Hs=class extends an{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var xn=class extends an{constructor(e,n,i){super(new Float32Array(e),n,i)}},Uf=new fi,Ls=new G,jo=new G,Di=class{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):Uf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);let n=Ls.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Ls,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(jo)),this.expandByPoint(Ls.copy(e.center).sub(jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ff=0,gn=new gt,el=new on,Qi=new G,nn=new fi,Ds=new fi,Nt=new G,wn=class t extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vf(e)?Hs:Vs)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Be().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return el.lookAt(e),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xn(i,3))}else{let i=Math.min(e.length,n.count);for(let s=0;s<i;s++){let r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){let o=n[r];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(nn.min,Ds.min),nn.expandByPoint(Nt),Nt.addVectors(nn.max,Ds.max),nn.expandByPoint(Nt)):(nn.expandByPoint(Ds.min),nn.expandByPoint(Ds.max))}nn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Nt));if(n)for(let r=0,a=n.length;r<a;r++){let o=n[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Nt.fromBufferAttribute(o,c),l&&(Qi.fromBufferAttribute(e,c),Nt.add(Qi)),s=Math.max(s,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new an(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let U=0;U<i.count;U++)o[U]=new G,l[U]=new G;let u=new G,f=new G,h=new G,d=new je,p=new je,_=new je,m=new G,g=new G;function y(U,C,I){c[U]=c[C]=c[I]=1,u.fromBufferAttribute(i,U),f.fromBufferAttribute(i,C),h.fromBufferAttribute(i,I),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,C),_.fromBufferAttribute(r,I),f.sub(u),h.sub(u),p.sub(d),_.sub(d);let N=1/(p.x*_.y-_.x*p.y);isFinite(N)&&(m.copy(f).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(N),g.copy(h).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(N),o[U].add(m),o[C].add(m),o[I].add(m),l[U].add(g),l[C].add(g),l[I].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let U=0,C=w.length;U<C;++U){let I=w[U],N=I.start,V=I.count;for(let P=N,k=N+V;P<k;P+=3)y(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let b=new G,S=new G,E=new G,x=new G;function T(U){E.fromBufferAttribute(s,U),x.copy(E);let C=o[U];b.copy(C),b.sub(E.multiplyScalar(E.dot(C))).normalize(),S.crossVectors(x,C);let N=S.dot(l[U])<0?-1:1;a.setXYZW(U,b.x,b.y,b.z,N)}for(let U=0,C=i.count;U<C;++U)c[U]&&T(U);this._transformed=!0}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new an(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);let s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let h=0,d=e.count;h<d;h+=3){let p=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(n,p),r.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=n.count;h<d;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),d=0,p=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let g=0;g<u;g++)h[p++]=c[d++]}return new an(h,u,f)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);n.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=e(h,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(n))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var tl=new G,Of=new G,Bf=new Be,Tn=class{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=tl.subVectors(i,n).cross(Of.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let s=e.delta(tl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||Bf.getNormalMatrix(e),s=this.coplanarPoint(tl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},kf=0,di=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=or(),this.name="",this.type="Material",this.blending=fs,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pl,this.blendDst=ml,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){Ue(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ue(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(n){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Tn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new je().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new je().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Jn=new G,nl=new G,Nr=new G,Ur=new G,Ws=class{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=Jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,n),Jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){nl.copy(e).add(n).multiplyScalar(.5),Nr.copy(n).sub(e).normalize(),Ur.copy(this.origin).sub(nl);let r=e.distanceTo(n)*.5,a=-this.direction.dot(Nr),o=Ur.dot(this.direction),l=-Ur.dot(Nr),c=Ur.lengthSq(),u=Math.abs(1-a*a),f,h,d,p;if(u>0)if(f=a*l-o,h=a*o-l,p=r*u,f>=0)if(h>=-p)if(h<=p){let _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-p?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=p?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(nl).addScaledVector(Nr,h),d}intersectSphere(e,n){if(e.radius<0)return null;Jn.subVectors(e.center,this.origin);let i=Jn.dot(this.direction),s=Jn.dot(Jn)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,n,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,d=e.z-a.z,p=n.x-a.x,_=n.y-a.y,m=n.z-a.z,g=i.x-a.x,y=i.y-a.y,w=i.z-a.z,b=Math.abs(l),S=Math.abs(c),E=Math.abs(u),x,T,U,C,I,N,V,P,k,Y,H,ie;if(b>=S&&b>=E?(U=l,N=f,k=p,ie=g,l>=0?(x=c,T=u,C=h,I=d,V=_,P=m,Y=y,H=w):(x=u,T=c,C=d,I=h,V=m,P=_,Y=w,H=y)):S>=E?(U=c,N=h,k=_,ie=y,c>=0?(x=u,T=l,C=d,I=f,V=m,P=p,Y=w,H=g):(x=l,T=u,C=f,I=d,V=p,P=m,Y=g,H=w)):(U=u,N=d,k=m,ie=w,u>=0?(x=l,T=c,C=f,I=h,V=p,P=_,Y=g,H=y):(x=c,T=l,C=h,I=f,V=_,P=p,Y=y,H=g)),U===0)return null;let X=x/U,j=T/U,te=1/U,Ee=C-X*N,Ge=I-j*N,J=V-X*k,xe=P-j*k,Te=Y-X*ie,Le=H-j*ie,ve=Te*xe-Le*J,He=Ee*Le-Ge*Te,yt=J*Ge-xe*Ee;if(s){if(ve<0||He<0||yt<0)return null}else if((ve<0||He<0||yt<0)&&(ve>0||He>0||yt>0))return null;let Ne=ve+He+yt;if(Ne===0)return null;let st=te*(ve*N+He*k+yt*ie);return(Ne>0?st<0:st>0)?null:this.at(st/Ne,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ua=class extends di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xc=new gt,Pi=new Ws,Fr=new Di,qc=new G,Or=new G,Br=new G,kr=new G,il=new G,zr=new G,Yc=new G,Gr=new G,Qt=class extends on{constructor(e=new wn,n=new ua){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){zr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(il.fromBufferAttribute(f,e),a?zr.addScaledVector(il,u):zr.addScaledVector(il.sub(n),u))}n.add(zr)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(r),Pi.copy(e.ray).recast(e.near),!(Fr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Fr,qc)===null||Pi.origin.distanceToSquared(qc)>(e.far-e.near)**2))&&(Xc.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(Xc),!(i.boundingBox!==null&&Pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Pi)))}_computeIntersections(e,n,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){let m=h[p],g=a[m.materialIndex],y=Math.max(m.start,d.start),w=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let b=y,S=w;b<S;b+=3){let E=o.getX(b),x=o.getX(b+1),T=o.getX(b+2);s=Vr(this,g,e,i,c,u,f,E,x,T),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let y=o.getX(m),w=o.getX(m+1),b=o.getX(m+2);s=Vr(this,a,e,i,c,u,f,y,w,b),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=h.length;p<_;p++){let m=h[p],g=a[m.materialIndex],y=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let b=y,S=w;b<S;b+=3){let E=b,x=b+1,T=b+2;s=Vr(this,g,e,i,c,u,f,E,x,T),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let y=m,w=m+1,b=m+2;s=Vr(this,a,e,i,c,u,f,y,w,b),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function zf(t,e,n,i,s,r,a,o){let l;if(e.side===Zt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===_i,o),l===null)return null;Gr.copy(o),Gr.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Gr);return c<n.near||c>n.far?null:{distance:c,point:Gr.clone(),object:t}}function Vr(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,Or),t.getVertexPosition(l,Br),t.getVertexPosition(c,kr);let u=zf(t,e,n,i,Or,Br,kr,Yc);if(u){let f=new G;hi.getBarycoord(Yc,Or,Br,kr,f),s&&(u.uv=hi.getInterpolatedAttribute(s,o,l,c,f,new je)),r&&(u.uv1=hi.getInterpolatedAttribute(r,o,l,c,f,new je)),a&&(u.normal=hi.getInterpolatedAttribute(a,o,l,c,f,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new G,materialIndex:0};hi.getNormal(Or,Br,kr,h.normal),u.face=h,u.barycoord=f}return u}var fa=class extends Xt{constructor(e=null,n=1,i=1,s,r,a,o,l,c=Ut,u=Ut,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ii=new Di,Gf=new je(.5,.5),Hr=new G,Ni=class{constructor(e=new Tn,n=new Tn,i=new Tn,s=new Tn,r=new Tn,a=new Tn){this.planes=[e,n,i,s,r,a]}set(e,n,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_n,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],p=r[8],_=r[9],m=r[10],g=r[11],y=r[12],w=r[13],b=r[14],S=r[15];if(s[0].setComponents(c-a,d-u,g-p,S-y).normalize(),s[1].setComponents(c+a,d+u,g+p,S+y).normalize(),s[2].setComponents(c+o,d+f,g+_,S+w).normalize(),s[3].setComponents(c-o,d-f,g-_,S-w).normalize(),i)s[4].setComponents(l,h,m,b).normalize(),s[5].setComponents(c-l,d-h,g-m,S-b).normalize();else if(s[4].setComponents(c-l,d-h,g-m,S-b).normalize(),n===_n)s[5].setComponents(c+l,d+h,g+m,S+b).normalize();else if(n===Bs)s[5].setComponents(l,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ii.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){Ii.center.set(0,0,0);let n=Gf.distanceTo(e.center);return Ii.radius=.7071067811865476+n,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Hr.x=s.normal.x>0?e.max.x:e.min.x,Hr.y=s.normal.y>0?e.max.y:e.min.y,Hr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Zc=new gt,da=class t{constructor(){this.coordinateSystem=_n,this._frustums=[],this._count=0}setFromArrayCamera(e){let n=e.cameras,i=this._frustums;for(let s=0;s<n.length;s++){let r=n[s];Zc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ni),i[s].setFromProjectionMatrix(Zc,r.coordinateSystem,r.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let n=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)n[s]===void 0&&(n[s]=new Ni),n[s].copy(i[s]);return this._count=e._count,this}clone(){return new t().copy(this)}};var pa=class extends di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Jc=new gt,ll=new Ws,Wr=new Di,Xr=new G,Xs=class extends on{constructor(e=new wn,n=new pa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere),Wr.applyMatrix4(s),Wr.radius+=r,e.ray.intersectsSphere(Wr)===!1)return;Jc.copy(s).invert(),ll.copy(e.ray).applyMatrix4(Jc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){let h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=h,_=d;p<_;p++){let m=c.getX(p);Xr.fromBufferAttribute(f,m),Kc(Xr,m,l,s,e,n,this)}}else{let h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let p=h,_=d;p<_;p++)Xr.fromBufferAttribute(f,p),Kc(Xr,p,l,s,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Kc(t,e,n,i,s,r,a){let o=ll.distanceSqToPoint(t);if(o<n){let l=new G;ll.closestPointToPoint(t,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var qs=class extends Xt{constructor(e=[],n=Bi,i,s,r,a,o,l,c,u){super(e,n,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ys=class extends Xt{constructor(e,n,i,s,r,a,o,l,c){super(e,n,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qn=class extends Xt{constructor(e,n,i=En,s,r,a,o=Ut,l=Ut,c,u=$n,f=1){if(u!==$n&&u!==jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:n,depth:f};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}},Zs=class extends Qn{constructor(e,n=En,i=Bi,s,r,a=Ut,o=Ut,l,c=$n){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Js=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ls=class t extends wn{constructor(e=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,d=0;p("z","y","x",-1,-1,i,n,e,a,r,0),p("z","y","x",1,-1,i,n,-e,a,r,1),p("x","z","y",1,1,e,i,n,s,a,2),p("x","z","y",1,-1,e,i,-n,s,a,3),p("x","y","z",1,-1,e,n,i,s,r,4),p("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(u,3)),this.setAttribute("uv",new xn(f,2));function p(_,m,g,y,w,b,S,E,x,T,U){let C=b/x,I=S/T,N=b/2,V=S/2,P=E/2,k=x+1,Y=T+1,H=0,ie=0,X=new G;for(let j=0;j<Y;j++){let te=j*I-V;for(let Ee=0;Ee<k;Ee++){let Ge=Ee*C-N;X[_]=Ge*y,X[m]=te*w,X[g]=P,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[g]=E>0?1:-1,u.push(X.x,X.y,X.z),f.push(Ee/x),f.push(1-j/T),H+=1}}for(let j=0;j<T;j++)for(let te=0;te<x;te++){let Ee=h+te+k*j,Ge=h+te+k*(j+1),J=h+(te+1)+k*(j+1),xe=h+(te+1)+k*j;l.push(Ee,Ge,xe),l.push(Ge,J,xe),ie+=6}o.addGroup(d,ie,U),d+=ie,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ui=class t extends wn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let r=e/2,a=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=n/l,d=[],p=[],_=[],m=[];for(let g=0;g<u;g++){let y=g*h-a;for(let w=0;w<c;w++){let b=w*f-r;p.push(b,-y,0),_.push(0,0,1),m.push(w/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){let w=y+c*g,b=y+c*(g+1),S=y+1+c*(g+1),E=y+1+c*g;d.push(w,b,E),d.push(b,S,E)}this.setIndex(d),this.setAttribute("position",new xn(p,3)),this.setAttribute("normal",new xn(_,3)),this.setAttribute("uv",new xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};function zi(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if($c(s))s.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if($c(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Ht(t){let e={};for(let n=0;n<t.length;n++){let i=zi(t[n]);for(let s in i)e[s]=i[s]}return e}function $c(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Vf(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function kl(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}var Gh={clone:zi,merge:Ht},Hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yt=class extends di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hf,this.fragmentShader=Wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=Vf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Ze().setHex(s.value);break;case"v2":this.uniforms[i].value=new je().fromArray(s.value);break;case"v3":this.uniforms[i].value=new G().fromArray(s.value);break;case"v4":this.uniforms[i].value=new _t().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(s.value);break;case"m4":this.uniforms[i].value=new gt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ma=class extends Yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ga=class extends di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_a=class extends di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ji(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function qr(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var pi=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=n[++i],e<s)break e}a=n.length;break t}if(!(e>=r)){let o=n[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<n[o]?a=o:i=o+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)n[a]=i[r+a];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xa=class extends pi{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rl,endingEnd:rl}}intervalChanged_(e,n,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case al:r=e,o=2*n-i;break;case ol:r=s.length-2,o=n+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case al:a=e,l=2*i-n;break;case ol:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(i-n)/(s-n),_=p*p,m=_*p,g=-h*m+2*h*_-h*p,y=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*p+1,w=(-1-d)*m+(1.5+d)*_+.5*p,b=d*m-d*_;for(let S=0;S!==o;++S)r[S]=g*a[u+S]+y*a[c+S]+w*a[l+S]+b*a[f+S];return r}},va=class extends pi{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-n)/(s-n),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},ya=class extends pi{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ma=class extends pi{interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let p=(i-n)/(s-n),_=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*p;return r}let h=o*2,d=e-1;for(let p=0;p!==o;++p){let _=a[c+p],m=a[l+p],g=d*h+p*2,y=f[g],w=f[g+1],b=e*h+p*2,S=u[b],E=u[b+1],x=qf(i,n,y,S,s);r[p]=Vh(x,_,w,E,m)}return r}};function Vh(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function Xf(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function qf(t,e,n,i,s){let r=(t-e)/(s-e);for(let a=0;a<8;a++){let o=Vh(r,e,n,i,s)-t;if(Math.abs(o)<1e-10)break;let l=Xf(r,e,n,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var ln=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ji(n,this.TimeBufferType),this.values=ji(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:ji(e.times,Array),values:ji(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),qr(e.settings)&&(i.settings={inTangents:ji(e.settings.inTangents,Array),outTangents:ji(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new Ma(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case Us:n=this.InterpolantFactoryMethodDiscrete;break;case aa:n=this.InterpolantFactoryMethodLinear;break;case Jr:n=this.InterpolantFactoryMethodSmooth;break;case sl:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ue("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return aa;case this.InterpolantFactoryMethodSmooth:return Jr;case this.InterpolantFactoryMethodBezier:return sl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e;qr(this.settings)&&(Qc(this.settings.inTangents,e),Qc(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e;qr(this.settings)&&(jc(this.settings.inTangents,e),jc(this.settings.outTangents,e))}return this}trim(e,n){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>n;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Fe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Fe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&yf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Fe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Jr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*i,h=f-i,d=f+i;for(let p=0;p!==i;++p){let _=n[f+p];if(_!==n[h+p]||_!==n[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*i,h=a*i;for(let d=0;d!==i;++d)n[h+d]=n[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)n[l+c]=n[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=n.slice(0,a*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,qr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Qc(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]+=e}function jc(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}ln.prototype.ValueTypeName="";ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=aa;var mi=class extends ln{constructor(e,n,i){super(e,n,i)}};mi.prototype.ValueTypeName="bool";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Us;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends ln{constructor(e,n,i,s){super(e,n,i,s)}};ba.prototype.ValueTypeName="color";var Sa=class extends ln{constructor(e,n,i,s){super(e,n,i,s)}};Sa.prototype.ValueTypeName="number";var Ta=class extends pi{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=e*o;for(let u=c+o;c!==u;c+=4)Bn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ks=class extends ln{constructor(e,n,i,s){super(e,n,i,s)}InterpolantFactoryMethodLinear(e){return new Ta(this.times,this.values,this.getValueSize(),e)}};Ks.prototype.ValueTypeName="quaternion";Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends ln{constructor(e,n,i){super(e,n,i)}};gi.prototype.ValueTypeName="string";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=Us;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends ln{constructor(e,n,i,s){super(e,n,i,s)}};wa.prototype.ValueTypeName="vector";var Aa=class{constructor(e,n,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Hh=new Aa,Ea=class{constructor(e){this.manager=e!==void 0?e:Hh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ea.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yr=new G,Zr=new Bn,Un=new G,$s=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yr,Zr,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Zr,Un.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Yr,Zr,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,Zr,Un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ci=new G,eh=new je,th=new je,rn=class extends $s{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,n){return this.getViewBounds(e,eh,th),n.subVectors(th,eh)}setViewOffset(e,n,i,s,r,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Oo*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var cs=class extends $s{constructor(e=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var es=-90,ts=1,hs=class extends on{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(es,ts,e,n);s.layers=this.layers,this.add(s);let r=new rn(es,ts,e,n);r.layers=this.layers,this.add(r);let a=new rn(es,ts,e,n);a.layers=this.layers,this.add(a);let o=new rn(es,ts,e,n);o.layers=this.layers,this.add(o);let l=new rn(es,ts,e,n);l.layers=this.layers,this.add(l);let c=new rn(es,ts,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,l]=n;for(let c of n)this.remove(c);if(e===_n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,h,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Ra=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var zl="\\[\\]\\.:\\/",Yf=new RegExp("["+zl+"]","g"),Gl="[^"+zl+"]",Zf="[^"+zl.replace("\\.","")+"]",Jf=/((?:WC+[\/:])*)/.source.replace("WC",Gl),Kf=/(WCOD+)?/.source.replace("WCOD",Zf),$f=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),Qf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),jf=new RegExp("^"+Jf+Kf+$f+Qf+"$"),ed=["material","materials","bones","map"],cl=class{constructor(e,n,i){let s=i||ht.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},ht=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yf,"")}static parseTrackName(e){let n=jf.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ed.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=n.nodeName;Fe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=cl;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var O_=new Float32Array(1);var hl=class{static{this.prototype.isMatrix2=!0}constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){let r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};function Vl(t,e,n,i){let s=td(i);switch(n){case Cl:return t*e;case Il:return t*e/s.components*s.byteLength;case Ua:return t*e/s.components*s.byteLength;case xi:return t*e*2/s.components*s.byteLength;case Fa:return t*e*2/s.components*s.byteLength;case Pl:return t*e*3/s.components*s.byteLength;case Pn:return t*e*4/s.components*s.byteLength;case Oa:return t*e*4/s.components*s.byteLength;case tr:case nr:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ir:case sr:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ka:case Ga:return Math.max(t,16)*Math.max(e,8)/4;case Ba:case za:return Math.max(t,8)*Math.max(e,8)/2;case Va:case Ha:case Xa:case qa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wa:case rr:case Ya:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Za:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case $a:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ja:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case eo:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case to:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case no:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case io:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case so:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ro:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ao:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case oo:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case lo:case co:case ho:return Math.ceil(t/4)*Math.ceil(e/4)*16;case uo:case fo:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ar:case po:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function td(t){switch(t){case cn:case wl:return{byteLength:1,components:1};case ps:case Al:case Cn:return{byteLength:2,components:1};case Da:case Na:return{byteLength:2,components:4};case En:case La:case Rn:return{byteLength:4,components:1};case El:case Rl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function uu(){let t=null,e=!1,n=null,i=null;function s(r,a){i=t.requestAnimationFrame(s),n(r,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function id(t){let e=new WeakMap;function n(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let u=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){let p=f[h],_=f[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){let _=f[d];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ld=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ud=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_d=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Td=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ad=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ed=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ld=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Fd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Jd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Kd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$d=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ep=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,np=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ip=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ap=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,op=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_p=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ap=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$p=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,um=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_m=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ym=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Um=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:sd,alphahash_pars_fragment:rd,alphamap_fragment:ad,alphamap_pars_fragment:od,alphatest_fragment:ld,alphatest_pars_fragment:cd,aomap_fragment:hd,aomap_pars_fragment:ud,batching_pars_vertex:fd,batching_vertex:dd,begin_vertex:pd,beginnormal_vertex:md,bsdfs:gd,iridescence_fragment:_d,bumpmap_pars_fragment:xd,clipping_planes_fragment:vd,clipping_planes_pars_fragment:yd,clipping_planes_pars_vertex:Md,clipping_planes_vertex:bd,color_fragment:Sd,color_pars_fragment:Td,color_pars_vertex:wd,color_vertex:Ad,common:Ed,defaultnormal_vertex:Rd,displacementmap_pars_vertex:Cd,displacementmap_vertex:Pd,emissivemap_fragment:Id,emissivemap_pars_fragment:Ld,colorspace_fragment:Dd,colorspace_pars_fragment:Nd,envmap_fragment:Ud,envmap_common_pars_fragment:Fd,envmap_pars_fragment:Od,envmap_pars_vertex:Bd,envmap_physical_pars_fragment:Jd,envmap_vertex:kd,fog_vertex:zd,fog_pars_vertex:Gd,fog_fragment:Vd,fog_pars_fragment:Hd,gradientmap_pars_fragment:Wd,lightmap_pars_fragment:Xd,lights_lambert_fragment:qd,lights_lambert_pars_fragment:Yd,lights_pars_begin:Zd,lights_toon_fragment:Kd,lights_toon_pars_fragment:$d,lights_phong_fragment:Qd,lights_phong_pars_fragment:jd,lights_physical_fragment:ep,lights_physical_pars_fragment:tp,lights_fragment_begin:np,lights_fragment_maps:ip,lights_fragment_end:sp,lightprobes_pars_fragment:rp,logdepthbuf_fragment:ap,logdepthbuf_pars_fragment:op,logdepthbuf_pars_vertex:lp,logdepthbuf_vertex:cp,map_fragment:hp,map_pars_fragment:up,map_particle_fragment:fp,map_particle_pars_fragment:dp,metalnessmap_fragment:pp,metalnessmap_pars_fragment:mp,morphinstance_vertex:gp,morphcolor_vertex:_p,morphnormal_vertex:xp,morphtarget_pars_vertex:vp,morphtarget_vertex:yp,normal_fragment_begin:Mp,normal_fragment_maps:bp,normal_pars_fragment:Sp,normal_pars_vertex:Tp,normal_vertex:wp,normalmap_pars_fragment:Ap,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:Rp,clearcoat_pars_fragment:Cp,iridescence_pars_fragment:Pp,opaque_fragment:Ip,packing:Lp,premultiplied_alpha_fragment:Dp,project_vertex:Np,dithering_fragment:Up,dithering_pars_fragment:Fp,roughnessmap_fragment:Op,roughnessmap_pars_fragment:Bp,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:zp,shadowmap_vertex:Gp,shadowmask_pars_fragment:Vp,skinbase_vertex:Hp,skinning_pars_vertex:Wp,skinning_vertex:Xp,skinnormal_vertex:qp,specularmap_fragment:Yp,specularmap_pars_fragment:Zp,tonemapping_fragment:Jp,tonemapping_pars_fragment:Kp,transmission_fragment:$p,transmission_pars_fragment:Qp,uv_pars_fragment:jp,uv_pars_vertex:em,uv_vertex:tm,worldpos_vertex:nm,background_vert:im,background_frag:sm,backgroundCube_vert:rm,backgroundCube_frag:am,cube_vert:om,cube_frag:lm,depth_vert:cm,depth_frag:hm,distance_vert:um,distance_frag:fm,equirect_vert:dm,equirect_frag:pm,linedashed_vert:mm,linedashed_frag:gm,meshbasic_vert:_m,meshbasic_frag:xm,meshlambert_vert:vm,meshlambert_frag:ym,meshmatcap_vert:Mm,meshmatcap_frag:bm,meshnormal_vert:Sm,meshnormal_frag:Tm,meshphong_vert:wm,meshphong_frag:Am,meshphysical_vert:Em,meshphysical_frag:Rm,meshtoon_vert:Cm,meshtoon_frag:Pm,points_vert:Im,points_frag:Lm,shadow_vert:Dm,shadow_frag:Nm,sprite_vert:Um,sprite_frag:Fm},_e={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Vn={basic:{uniforms:Ht([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Ht([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Ht([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Ht([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Ht([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ze(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Ht([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Ht([_e.points,_e.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Ht([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Ht([_e.common,_e.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Ht([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Ht([_e.sprite,_e.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Ht([_e.common,_e.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Ht([_e.lights,_e.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Vn.physical={uniforms:Ht([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var mo={r:0,b:0,g:0},Om=new gt,fu=new Be;fu.set(-1,0,0,0,1,0,0,0,1);function Bm(t,e,n,i,s,r){let a=new Ze(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let b=y.backgroundBlurriness>0;w=e.get(w,b)}return w}function p(y){let w=!1,b=d(y);b===null?m(a,o):b&&b.isColor&&(m(b,1),w=!0);let S=t.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(y,w){let b=d(w);b&&b.isCubeTexture?(c===void 0&&(c=new Qt(new ls(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:zi(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Om.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(fu),c.material.toneMapped=Ye.getTransfer(b.colorSpace)!==it,(u!==b||f!==b.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,h=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Qt(new Ui(2,2),new Yt({name:"BackgroundMaterial",uniforms:zi(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(b.colorSpace)!==it,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||h!==t.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,h=t.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,w){y.getRGB(mo,kl(t)),n.buffers.color.setClear(mo.r,mo.g,mo.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:p,addToRenderList:_,dispose:g}}function km(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(I,N,V,P,k){let Y=!1,H=f(I,P,V,N);r!==H&&(r=H,c(r.object)),Y=d(I,P,V,k),Y&&p(I,P,V,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,b(I,N,V,P),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function u(I){return t.deleteVertexArray(I)}function f(I,N,V,P){let k=P.wireframe===!0,Y=i[N.id];Y===void 0&&(Y={},i[N.id]=Y);let H=I.isInstancedMesh===!0?I.id:0,ie=Y[H];ie===void 0&&(ie={},Y[H]=ie);let X=ie[V.id];X===void 0&&(X={},ie[V.id]=X);let j=X[k];return j===void 0&&(j=h(l()),X[k]=j),j}function h(I){let N=[],V=[],P=[];for(let k=0;k<n;k++)N[k]=0,V[k]=0,P[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:P,object:I,attributes:{},index:null}}function d(I,N,V,P){let k=r.attributes,Y=N.attributes,H=0,ie=V.getAttributes();for(let X in ie)if(ie[X].location>=0){let te=k[X],Ee=Y[X];if(Ee===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(Ee=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(Ee=I.instanceColor)),te===void 0||te.attribute!==Ee||Ee&&te.data!==Ee.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function p(I,N,V,P){let k={},Y=N.attributes,H=0,ie=V.getAttributes();for(let X in ie)if(ie[X].location>=0){let te=Y[X];te===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(te=I.instanceColor));let Ee={};Ee.attribute=te,te&&te.data&&(Ee.data=te.data),k[X]=Ee,H++}r.attributes=k,r.attributesNum=H,r.index=P}function _(){let I=r.newAttributes;for(let N=0,V=I.length;N<V;N++)I[N]=0}function m(I){g(I,0)}function g(I,N){let V=r.newAttributes,P=r.enabledAttributes,k=r.attributeDivisors;V[I]=1,P[I]===0&&(t.enableVertexAttribArray(I),P[I]=1),k[I]!==N&&(t.vertexAttribDivisor(I,N),k[I]=N)}function y(){let I=r.newAttributes,N=r.enabledAttributes;for(let V=0,P=N.length;V<P;V++)N[V]!==I[V]&&(t.disableVertexAttribArray(V),N[V]=0)}function w(I,N,V,P,k,Y,H){H===!0?t.vertexAttribIPointer(I,N,V,k,Y):t.vertexAttribPointer(I,N,V,P,k,Y)}function b(I,N,V,P){_();let k=P.attributes,Y=V.getAttributes(),H=N.defaultAttributeValues;for(let ie in Y){let X=Y[ie];if(X.location>=0){let j=k[ie];if(j===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){let te=j.normalized,Ee=j.itemSize,Ge=e.get(j);if(Ge===void 0)continue;let J=Ge.buffer,xe=Ge.type,Te=Ge.bytesPerElement,Le=xe===t.INT||xe===t.UNSIGNED_INT||j.gpuType===La;if(j.isInterleavedBufferAttribute){let ve=j.data,He=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,yt=j.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Ne=0;Ne<X.locationSize;Ne++)g(X.location+Ne,ve.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ne=0;Ne<X.locationSize;Ne++)m(X.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,J);for(let Ne=0;Ne<X.locationSize;Ne++)w(X.location+Ne,Ee/X.locationSize,xe,te,He*Te,(yt+Ee/X.locationSize*Ne)*Te,Le)}else{if(j.isInstancedBufferAttribute){for(let ve=0;ve<X.locationSize;ve++)g(X.location+ve,j.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ve=0;ve<X.locationSize;ve++)m(X.location+ve);t.bindBuffer(t.ARRAY_BUFFER,J);for(let ve=0;ve<X.locationSize;ve++)w(X.location+ve,Ee/X.locationSize,xe,te,Ee*Te,Ee/X.locationSize*ve*Te,Le)}}else if(H!==void 0){let te=H[ie];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(X.location,te);break;case 3:t.vertexAttrib3fv(X.location,te);break;case 4:t.vertexAttrib4fv(X.location,te);break;default:t.vertexAttrib1fv(X.location,te)}}}}y()}function S(){U();for(let I in i){let N=i[I];for(let V in N){let P=N[V];for(let k in P){let Y=P[k];for(let H in Y)u(Y[H].object),delete Y[H];delete P[k]}}delete i[I]}}function E(I){if(i[I.id]===void 0)return;let N=i[I.id];for(let V in N){let P=N[V];for(let k in P){let Y=P[k];for(let H in Y)u(Y[H].object),delete Y[H];delete P[k]}}delete i[I.id]}function x(I){for(let N in i){let V=i[N];for(let P in V){let k=V[P];if(k[I.id]===void 0)continue;let Y=k[I.id];for(let H in Y)u(Y[H].object),delete Y[H];delete k[I.id]}}}function T(I){for(let N in i){let V=i[N],P=I.isInstancedMesh===!0?I.id:0,k=V[P];if(k!==void 0){for(let Y in k){let H=k[Y];for(let ie in H)u(H[ie].object),delete H[ie];delete k[Y]}delete V[P],Object.keys(V).length===0&&delete i[N]}}}function U(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:T,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function zm(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Gm(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Pn&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let T=x===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==cn&&x!==Rn&&!T&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(Ue("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.logarithmicDepthBuffer===!0&&f===!1;n.reversedDepthBuffer===!0&&f===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&f===!0&&Ue("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:b,maxSamples:S,samples:E}}function Vm(t){let e=this,n=null,i=0,s=!1,r=!1,a=new Tn,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,d){let p=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,g=t.get(f);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{let y=r?0:i,w=y*4,b=g.clippingState||null;l.value=b,b=u(p,h,w,d);for(let S=0;S!==w;++S)b[S]=n[S];g.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,p){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=d+_*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,b=d;w!==_;++w,b+=4)a.copy(f[w]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var hr=class extends qt{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new qs(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ls(5,5,5),r=new Yt({name:"CubemapFromEquirect",uniforms:zi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:Fi});r.uniforms.tEquirect.value=n;let a=new Qt(s,r),o=n.minFilter;return n.minFilter===An&&(n.minFilter=Rt),new hs(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,s);e.setRenderTarget(r)}},Wh=256,Hm=3,Wm=20,du=256,pu=16,Xm=3,qm=new G,Ym=new Ze,_o=class t{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new hs(1,10,null),this._boxMesh=new Qt(new ls(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){let{size:a=256,position:o=qm}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);n>0&&(u.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,h=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(Ym));let m=new hs(i,s,u);return m.position.copy(o),m.update(l,e),l.autoClear=f,l.autoClearColor=h,l.autoClearDepth=d,l.autoClearStencil=p,e.background=_,n>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(Wh,kh(e))}_fromTexture(e,n){e.mapping===Bi||e.mapping===ds?this._setSize(e.image.length===0?Wh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,n=Xh(e,!1,!1),i=Math.log2(e)-Hm;for(let s=0;s<=i;s++)n.texture.mipmaps.push({width:e>>s,height:e>>s});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){let n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Xh(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=n;let a=e.width>>n;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===Bi||e.mapping===ds?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yh()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=qh()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Zm(),this._integrationMaterial=Jm());let n=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(n/pu);for(let a=0;a<=i;a++){let o=t.lodToRoughness(a,i);if(a>i-Xm)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(n)+.5*Math.log2(6/(du*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=Km());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Xh(t,e,n){return new hr(t,{minFilter:An,generateMipmaps:e,type:Cn,colorSpace:Fs,depthBuffer:n})}function ur(t,e,n){return new Yt({name:t,uniforms:e,vertexShader:qe.cube_vert,fragmentShader:n,side:Zt,blending:Fi,depthTest:!1,depthWrite:!1})}function Zm(){return ur("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${du}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Jm(){return ur("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:pu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Km(){return ur("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Wm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function qh(){return ur("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Yh(){return ur("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function $m(t){let e=new WeakMap,n=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Ca||d===Pa)if(e.has(h)){let p=e.get(h).texture;return o(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let _=new hr(p.height);return _.fromEquirectangularTexture(t,h),e.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let d=h.mapping,p=d===Ca||d===Pa,_=d===Bi||d===ds;if(p||_){let m=n.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return i===null&&(i=new _o(t)),m=p?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),m.texture;if(m!==void 0)return m.texture;{let y=h.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new _o(t)),m=p?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===Ca?h.mapping=Bi:d===Pa&&(h.mapping=ds),h}function l(h){let d=0,p=6;for(let _=0;_<p;_++)h[_]!==void 0&&d++;return d===p}function c(h){let d=h.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let p=n.get(d);p!==void 0&&(n.delete(d),p.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Qm(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Ns("WebGLRenderer: "+i+" extension not supported."),s}}}function jm(t,e,n,i){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let _=r.get(p);_&&(e.remove(_),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function c(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),n.memory.geometries++),_}function u(p){let _=p.attributes;for(let m in _)e.update(_[m],t.ARRAY_BUFFER)}function f(p){let _=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=_!==null?_.array.length:m.array.length/3-1,w=m.count>=65535?Hs:Vs,b=new w(Math.ceil(y/3)*6,1),S=b.array;if(_!==null){let x=_.array;g=_.version;for(let T=0,U=0;T<y;T+=3){let C=x[T+0],I=x[T+1],N=x[T+2];S[U++]=C,S[U++]=I,S[U++]=I,S[U++]=N,S[U++]=N,S[U++]=C}}else{g=m.version;for(let x=0,T=0;x<y;x+=3){let U=x+0,C=x+1,I=x+2;S[T++]=U,S[T++]=C,S[T++]=C,S[T++]=I,S[T++]=I,S[T++]=U}}b.version=g;let E=r.get(p);E&&e.remove(E),r.set(p,b)}function h(p){let _=r.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&f(p)}else f(p);return r.get(p)}function d(){for(let p in s){let _=s[p].deref();_!==void 0&&l(_)}}return{get:c,update:u,getWireframeAttribute:h,dispose:d}}function e0(t,e,n){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){t.drawElements(i,h,r,f*a),n.update(h,i,1)}function c(f,h,d){d!==0&&(t.drawElementsInstanced(i,h,r,f*a,d),n.update(h,i,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,d);let _=0;for(let m=0;m<d;m++)_+=h[m];n.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function t0(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Fe("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function n0(t,e,n){let i=new WeakMap,s=new _t;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==f){let U=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",U)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],w=0;d===!0&&(w=1),p===!0&&(w=2),_===!0&&(w=3);let b=o.attributes.position.count*w,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let E=new Float32Array(b*S*4*f),x=new zs(E,b,S,f);x.type=Rn,x.needsUpdate=!0;let T=w*4;for(let C=0;C<f;C++){let I=m[C],N=g[C],V=y[C],P=b*S*4*C;for(let k=0;k<I.count;k++){let Y=k*T;d===!0&&(s.fromBufferAttribute(I,k),E[P+Y+0]=s.x,E[P+Y+1]=s.y,E[P+Y+2]=s.z,E[P+Y+3]=0),p===!0&&(s.fromBufferAttribute(N,k),E[P+Y+4]=s.x,E[P+Y+5]=s.y,E[P+Y+6]=s.z,E[P+Y+7]=0),_===!0&&(s.fromBufferAttribute(V,k),E[P+Y+8]=s.x,E[P+Y+9]=s.y,E[P+Y+10]=s.z,E[P+Y+11]=V.itemSize===4?s.w:1)}}h={count:f,texture:x,size:new je(b,S)},i.set(o,h),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(t,"morphTargetBaseInfluence",p),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function i0(t,e,n,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}var s0={[_l]:"LINEAR_TONE_MAPPING",[xl]:"REINHARD_TONE_MAPPING",[vl]:"CINEON_TONE_MAPPING",[yl]:"ACES_FILMIC_TONE_MAPPING",[bl]:"AGX_TONE_MAPPING",[Sl]:"NEUTRAL_TONE_MAPPING",[Ml]:"CUSTOM_TONE_MAPPING"};function r0(t,e,n,i,s,r){let a=new qt(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new wn;u.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new xn([0,2,0,0,2,0],2));let f=new ma({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Qt(u,f),d=new cs(-1,1,1,-1,0,1),p=null,_=null,m=!1,g,y=null,w=[],b=!1;this.setSize=function(S,E){a.setSize(S,E),o!==null&&o.setSize(S,E),l!==null&&l.setSize(S,E);for(let x=0;x<w.length;x++){let T=w[x];T.setSize&&T.setSize(S,E)}},this.setEffects=function(S){w=S,b=w.length>0&&w[0].isRenderPass===!0;let E=a.width,x=a.height;w.length>0&&o===null&&(o=new qt(E,x,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),l=new qt(E,x,{type:Cn,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&w.some(U=>U.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&c===null&&(c=new Qn(E,x),r===!0&&(c.format=jn,c.type=ki)),a.dispose(),a.depthTexture=T?c:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let U=0;U<w.length;U++){let C=w[U];C.setSize&&C.setSize(E,x),T&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(S,E){if(m||S.toneMapping===zn&&w.length===0)return!1;if(y=E,E!==null){let x=E.width,T=E.height;(a.width!==x||a.height!==T)&&this.setSize(x,T)}return b===!1&&S.setRenderTarget(a),g=S.toneMapping,S.toneMapping=zn,!0},this.hasRenderPass=function(){return b},this.end=function(S,E){S.toneMapping=g,m=!0;let x=a,T=o;for(let U=0;U<w.length;U++){let C=w[U];C.enabled!==!1&&(C.render(S,T,x,E),C.needsSwap!==!1&&(x=T,T=T===o?l:o))}if(p!==S.outputColorSpace||_!==S.toneMapping){p=S.outputColorSpace,_=S.toneMapping,f.defines={},Ye.getTransfer(p)===it&&(f.defines.SRGB_TRANSFER="");let U=s0[_];U&&(f.defines[U]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,S.setRenderTarget(y),S.render(h,d),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}var mu=new Xt,gu=new Qn(1,1),_u=new Zs(1),xu=new zs,vu=new ha,yu=new qs,Zh=[],Jh=[],Kh=new Float32Array(16),$h=new Float32Array(9),Qh=new Float32Array(4);function gs(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=Zh[s];if(r===void 0&&(r=new Float32Array(s),Zh[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function vo(t,e){let n=Jh[e];n===void 0&&(n=new Int32Array(e),Jh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function a0(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function o0(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function l0(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function c0(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function h0(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;Qh.set(i),t.uniformMatrix2fv(this.addr,!1,Qh),Pt(n,i)}}function u0(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;$h.set(i),t.uniformMatrix3fv(this.addr,!1,$h),Pt(n,i)}}function f0(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;Kh.set(i),t.uniformMatrix4fv(this.addr,!1,Kh),Pt(n,i)}}function d0(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function p0(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function m0(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function g0(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function _0(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function x0(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function v0(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function y0(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function yo(t){return t.version===0&&(t.compareFunction=Ul,t.needsUpdate=!0),t}function M0(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?r=yo(gu):r=mu,n.setTexture2D(e||r,s)}function b0(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||vu,s)}function S0(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_CUBE_SHADOW?r=yo(_u):r=yu,n.setTextureCube(e||r,s)}function T0(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||xu,s)}function w0(t){switch(t){case 5126:return a0;case 35664:return o0;case 35665:return l0;case 35666:return c0;case 35674:return h0;case 35675:return u0;case 35676:return f0;case 5124:case 35670:return d0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return _0;case 36294:return x0;case 36295:return v0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return T0}}function A0(t,e){t.uniform1fv(this.addr,e)}function E0(t,e){let n=gs(e,this.size,2);t.uniform2fv(this.addr,n)}function R0(t,e){let n=gs(e,this.size,3);t.uniform3fv(this.addr,n)}function C0(t,e){let n=gs(e,this.size,4);t.uniform4fv(this.addr,n)}function P0(t,e){let n=gs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function I0(t,e){let n=gs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function L0(t,e){let n=gs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function D0(t,e){t.uniform1iv(this.addr,e)}function N0(t,e){t.uniform2iv(this.addr,e)}function U0(t,e){t.uniform3iv(this.addr,e)}function F0(t,e){t.uniform4iv(this.addr,e)}function O0(t,e){t.uniform1uiv(this.addr,e)}function B0(t,e){t.uniform2uiv(this.addr,e)}function k0(t,e){t.uniform3uiv(this.addr,e)}function z0(t,e){t.uniform4uiv(this.addr,e)}function G0(t,e,n){let i=this.cache,s=e.length,r=vo(n,s);Ct(i,r)||(t.uniform1iv(this.addr,r),Pt(i,r));let a;this.type===t.SAMPLER_2D_SHADOW?a=yo(gu):a=mu;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function V0(t,e,n){let i=this.cache,s=e.length,r=vo(n,s);Ct(i,r)||(t.uniform1iv(this.addr,r),Pt(i,r));for(let a=0;a!==s;++a)n.setTexture3D(e[a]||vu,r[a])}function H0(t,e,n){let i=this.cache,s=e.length,r=vo(n,s);Ct(i,r)||(t.uniform1iv(this.addr,r),Pt(i,r));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=yo(_u):a=yu;for(let o=0;o!==s;++o)n.setTextureCube(e[o]||a,r[o])}function W0(t,e,n){let i=this.cache,s=e.length,r=vo(n,s);Ct(i,r)||(t.uniform1iv(this.addr,r),Pt(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||xu,r[a])}function X0(t){switch(t){case 5126:return A0;case 35664:return E0;case 35665:return R0;case 35666:return C0;case 35674:return P0;case 35675:return I0;case 35676:return L0;case 5124:case 35670:return D0;case 35667:case 35671:return N0;case 35668:case 35672:return U0;case 35669:case 35673:return F0;case 5125:return O0;case 36294:return B0;case 36295:return k0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return W0}}var Xl=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=w0(n.type)}},ql=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=X0(n.type)}},Yl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,n[o.id],i)}}},Hl=/(\w+)(\])?(\[|\.)?/g;function jh(t,e){t.seq.push(e),t.map[e.id]=e}function q0(t,e,n){let i=t.name,s=i.length;for(Hl.lastIndex=0;;){let r=Hl.exec(i),a=Hl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){jh(n,c===void 0?new Xl(o,t,e):new ql(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new Yl(o),jh(n,f)),n=f}}}var ms=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);q0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,a=n.length;r!==a;++r){let o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in n&&i.push(a)}return i}};function eu(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var Y0=37297,Z0=0;function J0(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var tu=new Be;function K0(t){Ye._getMatrix(tu,Ye.workingColorSpace,t);let e=`mat3( ${tu.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case Os:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function nu(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+J0(t.getShaderSource(e),o)}else return r}function $0(t,e){let n=K0(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Q0={[_l]:"Linear",[xl]:"Reinhard",[vl]:"Cineon",[yl]:"ACESFilmic",[bl]:"AgX",[Sl]:"Neutral",[Ml]:"Custom"};function j0(t,e){let n=Q0[e];return n===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var go=new G;function eg(){Ye.getLuminanceCoefficients(go);let t=go.x.toFixed(4),e=go.y.toFixed(4),n=go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tg(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function ng(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ig(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function cr(t){return t!==""}function iu(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function su(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(t){return t.replace(sg,rg)}function rg(t,e){let n=qe[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Zl(n)}var ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ru(t){return t.replace(ag,og)}function og(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function au(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var lg={[Qs]:"SHADOWMAP_TYPE_PCF",[us]:"SHADOWMAP_TYPE_VSM"};function cg(t){return lg[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var hg={[ds]:"ENVMAP_MODE_REFRACTION"};function ug(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":hg[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var fg={[gl]:"ENVMAP_BLENDING_MULTIPLY",[Sh]:"ENVMAP_BLENDING_MIX",[Th]:"ENVMAP_BLENDING_ADD"};function dg(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":fg[t.combine]||"ENVMAP_BLENDING_NONE"}function pg(t,e,n,i){let s=t.getContext(),r=n.defines,a=n.vertexShader,o=n.fragmentShader,l=cg(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=ug(n),f=dg(n),h=tg(n),d=ng(r),p=s.createProgram(),_,m,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d].filter(cr).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d].filter(cr).join(`
`),m.length>0&&(m+=`
`)):(_=[au(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),m=[au(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==zn?"#define TONE_MAPPING":"",n.toneMapping!==zn?qe.tonemapping_pars_fragment:"",n.toneMapping!==zn?j0("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,$0("linearToOutputTexel",n.outputColorSpace),eg(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(cr).join(`
`)),a=Zl(a),a=iu(a,n),a=su(a,n),o=Zl(o),o=iu(o,n),o=su(o,n),a=ru(a),o=ru(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",n.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+_+a,w=g+m+o,b=eu(s,s.VERTEX_SHADER,y),S=eu(s,s.FRAGMENT_SHADER,w);s.attachShader(p,b),s.attachShader(p,S),n.index0AttributeName!==void 0?s.bindAttribLocation(p,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function E(C){if(t.debug.checkShaderErrors){let I=s.getProgramInfoLog(p)||"",N=s.getShaderInfoLog(b)||"",V=s.getShaderInfoLog(S)||"",P=I.trim(),k=N.trim(),Y=V.trim(),H=!0,ie=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,p,b,S);else{let X=nu(s,b,"vertex"),j=nu(s,S,"fragment");Fe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+X+`
`+j)}else P!==""?Ue("WebGLProgram: Program Info Log:",P):(k===""||Y==="")&&(ie=!1);ie&&(C.diagnostics={runnable:H,programLog:P,vertexShader:{log:k,prefix:_},fragmentShader:{log:Y,prefix:m}})}s.deleteShader(b),s.deleteShader(S),x=new ms(s,p),T=ig(s,p)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(p,Y0)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Z0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=S,this}var mg=0,Jl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){let s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new Kl(e),n.set(e,i)),i}},Kl=class{constructor(e){this.id=mg++,this.code=e,this.usedTimes=0}};function gg(t){return t===xi||t===rr||t===ar}function _g(t,e,n,i,s,r){let a=new Gs,o=new Jl,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,T,U,C,I,N){let V=C.fog,P=I.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=e.get(x.envMap||k,Y),ie=h[x.type],X=i.precision;x.precision!==null&&(X=i.getMaxPrecision(x.precision),X!==x.precision&&Ue("WebGLProgram.getParameters:",x.precision,"not supported, using",X,"instead."));let j=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,te=j!==void 0?j.length:0,Ee=0;P.morphAttributes.position!==void 0&&(Ee=1),P.morphAttributes.normal!==void 0&&(Ee=2),P.morphAttributes.color!==void 0&&(Ee=3);let Ge,J,xe,Te;if(ie){let ge=Vn[ie];Ge=ge.vertexShader,J=ge.fragmentShader}else{Ge=x.vertexShader,J=x.fragmentShader;let ge=o.getVertexShaderStage(x),rt=o.getFragmentShaderStage(x);o.update(x,ge,rt),xe=ge.id,Te=rt.id}let Le=t.getRenderTarget(),ve=t.state.buffers.depth.getReversed(),He=I.isInstancedMesh===!0,yt=I.isBatchedMesh===!0,Ne=!!x.map,st=!!x.matcap,ot=!!H,Je=ot&&H.isPMREMTexture===!0,Ft=!!x.aoMap,wt=!!x.lightMap,Jt=!!x.bumpMap&&x.wireframe===!1,pt=!!x.normalMap,Ln=!!x.displacementMap,It=!!x.emissiveMap,fn=!!x.metalnessMap,dn=!!x.roughnessMap,pn=x.anisotropy>0,D=x.clearcoat>0,mn=x.diffuseRoughness>0,ut=x.dispersion>0,ft=x.retroreflectivity>0,de=x.iridescence>0,At=x.sheen>0,De=x.transmission>0,ke=pn&&!!x.anisotropyMap,A=D&&!!x.clearcoatMap,v=D&&!!x.clearcoatNormalMap,O=D&&!!x.clearcoatRoughnessMap,ne=mn&&!!x.diffuseRoughnessMap,Q=de&&!!x.iridescenceMap,ae=de&&!!x.iridescenceThicknessMap,ue=At&&!!x.sheenColorMap,q=At&&!!x.sheenRoughnessMap,Z=!!x.specularMap,le=!!x.specularColorMap,R=!!x.specularIntensityMap,K=De&&!!x.transmissionMap,W=De&&!!x.thicknessMap,ce=!!x.gradientMap,re=!!x.alphaMap,oe=x.alphaTest>0,Pe=!!x.alphaHash,Xe=!!x.extensions,se=zn;x.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(se=t.toneMapping);let Ie=Je?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,We={shaderID:ie,shaderType:x.type,shaderName:x.name,vertexShader:Ge,fragmentShader:J,defines:x.defines,customVertexShaderID:xe,customFragmentShaderID:Te,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:X,batching:yt,batchingColor:yt&&I._colorsTexture!==null,instancing:He,instancingColor:He&&I.instanceColor!==null,instancingMorph:He&&I.morphTexture!==null,outputColorSpace:Le===null?t.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ne,matcap:st,envMap:ot,envMapMode:ot&&H.mapping,envMapPMREM:Je,envMapMaxLod:Je?Ie.length-1:null,envMapSize:Je?Ie[0].width:null,aoMap:Ft,lightMap:wt,bumpMap:Jt,normalMap:pt,displacementMap:Ln,emissiveMap:It,normalMapObjectSpace:pt&&x.normalMapType===Eh,normalMapTangentSpace:pt&&x.normalMapType===Ll,packedNormalMap:pt&&x.normalMapType===Ll&&gg(x.normalMap.format),metalnessMap:fn,roughnessMap:dn,anisotropy:pn,anisotropyMap:ke,clearcoat:D,clearcoatMap:A,clearcoatNormalMap:v,clearcoatRoughnessMap:O,diffuseRoughness:mn,diffuseRoughnessMap:ne,dispersion:ut,retroreflection:ft,iridescence:de,iridescenceMap:Q,iridescenceThicknessMap:ae,sheen:At,sheenColorMap:ue,sheenRoughnessMap:q,specularMap:Z,specularColorMap:le,specularIntensityMap:R,transmission:De,transmissionMap:K,thicknessMap:W,gradientMap:ce,opaque:x.transparent===!1&&x.blending===fs&&x.alphaToCoverage===!1,alphaMap:re,alphaTest:oe,alphaHash:Pe,combine:x.combine,mapUv:Ne&&d(x.map.channel),aoMapUv:Ft&&d(x.aoMap.channel),lightMapUv:wt&&d(x.lightMap.channel),bumpMapUv:Jt&&d(x.bumpMap.channel),normalMapUv:pt&&d(x.normalMap.channel),displacementMapUv:Ln&&d(x.displacementMap.channel),emissiveMapUv:It&&d(x.emissiveMap.channel),metalnessMapUv:fn&&d(x.metalnessMap.channel),roughnessMapUv:dn&&d(x.roughnessMap.channel),anisotropyMapUv:ke&&d(x.anisotropyMap.channel),clearcoatMapUv:A&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:v&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:q&&d(x.sheenRoughnessMap.channel),specularMapUv:Z&&d(x.specularMap.channel),specularColorMapUv:le&&d(x.specularColorMap.channel),specularIntensityMapUv:R&&d(x.specularIntensityMap.channel),transmissionMapUv:K&&d(x.transmissionMap.channel),thicknessMapUv:W&&d(x.thicknessMap.channel),alphaMapUv:re&&d(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(pt||pn),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!P.attributes.uv&&(Ne||re),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&pt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ve,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Ee,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:N.filter(ge=>ge.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:se,decodeVideoTexture:Ne&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===it,decodeVideoTextureEmissive:It&&x.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(x.emissiveMap.colorSpace)===it,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===kn,flipSided:x.side===Zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Xe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&x.extensions.multiDraw===!0||yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function _(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let U in x.defines)T.push(U),T.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(m(T,x),g(T,x),T.push(t.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function m(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapPMREM),x.push(T.envMapMaxLod),x.push(T.envMapSize),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.diffuseRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.numLightProbeGrids),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function g(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function y(x){let T=h[x.type],U;if(T){let C=Vn[T];U=Gh.clone(C.uniforms)}else U=x.uniforms;return U}function w(x,T){let U=u.get(T);return U!==void 0?++U.usedTimes:(U=new pg(t,T,x,s),c.push(U),u.set(T,U)),U}function b(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function S(x){o.remove(x)}function E(){o.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:y,acquireProgram:w,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:E}}function xg(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function vg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function ou(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function lu(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,p,_,m,g){let y=t[e];return y===void 0?(y={id:h.id,object:h,geometry:d,material:p,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:g},t[e]=y):(y.id=h.id,y.object=h,y.geometry=d,y.material=p,y.materialVariant=a(h),y.groupOrder=_,y.renderOrder=h.renderOrder,y.z=m,y.group=g),e++,y}function l(h,d,p,_,m,g,y){y.reversedDepth===!0&&(m=-m);let w=o(h,d,p,_,m,g);p.transmission>0?i.push(w):p.transparent===!0?s.push(w):n.push(w)}function c(h,d,p,_,m,g){let y=o(h,d,p,_,m,g);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):n.unshift(y)}function u(h,d){n.length>1&&n.sort(h||vg),i.length>1&&i.sort(d||ou),s.length>1&&s.sort(d||ou)}function f(){for(let h=e,d=t.length;h<d;h++){let p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function yg(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;return r===void 0?(a=new lu,t.set(i,[a])):s>=r.length?(a=new lu,r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Mg(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new G,color:new Ze};break;case"SpotLight":n={position:new G,direction:new G,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function bg(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var Sg=0;function Tg(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function wg(t){let e=new Mg,n=bg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);let s=new G,r=new gt,a=new gt;function o(c){let u=0,f=0,h=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,y=0,w=0,b=0,S=0,E=0,x=0,T=0,U=0,C=0;c.sort(Tg);for(let N=0,V=c.length;N<V;N++){let P=c[N],k=P.color,Y=P.intensity,H=P.distance,ie=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===xi?ie=P.shadow.map.texture:ie=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=k.r*Y,f+=k.g*Y,h+=k.b*Y;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],Y);C++}else if(P.isSunLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,te=n.get(P);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[p]=te,i.sunShadowMap[p]=ie;let Ee=j.getViewportCount();for(let Ge=0;Ge<Ee;Ge++)i.sunShadowMatrix[_+Ge]=j.getMatrix(Ge),i.sunShadowCascade[_+Ge]=j._cascadeData[Ge];_+=Ee,p++}i.sun[d]=X,d++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,te=n.get(P);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,i.directionalShadow[m]=te,i.directionalShadowMap[m]=ie,i.directionalShadowMatrix[m]=P.shadow.matrix,S++}i.directional[m]=X,m++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(k).multiplyScalar(Y),X.distance=H,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[y]=X;let j=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,j.updateMatrices(P),P.castShadow&&U++),i.spotLightMatrix[y]=j.matrix,P.castShadow){let te=n.get(P);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,i.spotShadow[y]=te,i.spotShadowMap[y]=ie,x++}y++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(k).multiplyScalar(Y),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[w]=X,w++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let j=P.shadow,te=n.get(P);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,te.shadowCameraNear=j.camera.near,te.shadowCameraFar=j.camera.far,i.pointShadow[g]=te,i.pointShadowMap[g]=ie,i.pointShadowMatrix[g]=P.shadow.matrix,E++}i.point[g]=X,g++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(Y),X.groundColor.copy(P.groundColor).multiplyScalar(Y),i.hemi[b]=X,b++}}w>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let I=i.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==y||I.rectAreaLength!==w||I.hemiLength!==b||I.numSunShadows!==p||I.numDirectionalShadows!==S||I.numPointShadows!==E||I.numSpotShadows!==x||I.numSpotMaps!==T||I.numLightProbes!==C)&&(i.sun.length=d,i.directional.length=m,i.spot.length=y,i.rectArea.length=w,i.point.length=g,i.hemi.length=b,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+T-U,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=C,I.sunLength=d,I.directionalLength=m,I.pointLength=g,I.spotLength=y,I.rectAreaLength=w,I.hemiLength=b,I.numSunShadows=p,I.numDirectionalShadows=S,I.numPointShadows=E,I.numSpotShadows=x,I.numSpotMaps=T,I.numLightProbes=C,i.version=Sg++)}function l(c,u){let f=0,h=0,d=0,p=0,_=0,m=0,g=u.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){let b=c[y];if(b.isSunLight){let S=i.sun[f];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(g),f++}else if(b.isDirectionalLight){let S=i.directional[h];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),h++}else if(b.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),p++}else if(b.isRectAreaLight){let S=i.rectArea[_];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function cu(t){let e=new wg(t),n=[],i=[],s=[];function r(f){u.camera=f,n.length=0,i.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):n.push(f)}function o(f){i.push(f)}function l(){e.setup(n),s.sort((f,h)=>f.priority-h.priority||f.id-h.id)}function c(f){e.setupView(n,f)}let u={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ag(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;return a===void 0?(o=new cu(t),e.set(s,[o])):r>=a.length?(o=new cu(t),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}var Eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Cg=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Pg=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],hu=new gt,lr=new G,Wl=new G;function Ig(t,e,n){let i=new Ni,s=new je,r=new je,a=new _t,o=new ga,l=new _a,c={},u=n.maxTextureSize,f={[_i]:Zt,[Zt]:_i,[kn]:kn},h=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:Eg,fragmentShader:Rg}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let p=new wn;p.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Qt(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qs;let g=this.type;this.render=function(E,x,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===sh&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qs);let U=t.getRenderTarget(),C=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),N=t.state;N.setBlending(Fi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let V=g!==this.type;V&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(k=>k.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,k=E.length;P<k;P++){let Y=E[P],H=Y.shadow;if(H===void 0){Ue("WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ie=H.getFrameExtents();s.multiply(ie),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,H.mapSize.y=r.y));let X=t.state.buffers.depth.getReversed();if(H.camera._reversedDepth=X,H.map===null||V===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===us){if(Y.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new qt(s.x,s.y,{format:xi,type:Cn,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),H.map.texture.name=Y.name+".shadowMap",H.map.depthTexture=new Qn(s.x,s.y,Rn),H.map.depthTexture.name=Y.name+".shadowMapDepth",H.map.depthTexture.format=$n,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ut,H.map.depthTexture.magFilter=Ut}else Y.isPointLight?(H.map=new hr(s.x),H.map.depthTexture=new Zs(s.x,En)):(H.map=new qt(s.x,s.y),H.map.depthTexture=new Qn(s.x,s.y,En)),H.map.depthTexture.name=Y.name+".shadowMap",H.map.depthTexture.format=$n,this.type===Qs?(H.map.depthTexture.compareFunction=X?Nl:Dl,H.map.depthTexture.minFilter=Rt,H.map.depthTexture.magFilter=Rt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ut,H.map.depthTexture.magFilter=Ut);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let j=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();Y.isPointLight!==!0&&H.updateMatrices(Y,T);let te=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:T.layers;for(let Ee=0;Ee<j;Ee++){let Ge=H.getCamera(Ee);if(Y.isPointLight){let J=H.camera,xe=H.matrix,Te=Y.distance||J.far;Te!==J.far&&(J.far=Te,J.updateProjectionMatrix()),lr.setFromMatrixPosition(Y.matrixWorld),J.position.copy(lr),Wl.copy(J.position),Wl.add(Cg[Ee]),J.up.copy(Pg[Ee]),J.lookAt(Wl),J.updateMatrixWorld(),xe.makeTranslation(-lr.x,-lr.y,-lr.z),hu.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),H._frustum.setFromProjectionMatrix(hu,J.coordinateSystem,J.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,Ee),t.clear();else{Ee===0&&(t.setRenderTarget(H.map),t.clear());let J=H.getViewport(Ee);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),N.viewport(a)}i=H.getFrustum(Ee),b(x,T,Ge,Y,te,this.type)}H.isPointLightShadow!==!0&&this.type===us&&y(H,T),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,t.setRenderTarget(U,C,I)};function y(E,x){let T=e.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new qt(s.x,s.y,{format:xi,type:Cn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(x,null,T,h,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(x,null,T,d,_,null)}function w(E,x,T,U){let C=null,I=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)C=I;else if(C=T.isPointLight===!0?l:o,t.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let N=C.uuid,V=x.uuid,P=c[N];P===void 0&&(P={},c[N]=P);let k=P[V];k===void 0&&(k=C.clone(),P[V]=k,x.addEventListener("dispose",S)),C=k}if(C.visible=x.visible,C.wireframe=x.wireframe,U===us?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:f[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,T.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let N=t.properties.get(C);N.light=T}return C}function b(E,x,T,U,C,I){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===us)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);let P=e.update(E),k=E.material;if(Array.isArray(k)){let Y=P.groups;for(let H=0,ie=Y.length;H<ie;H++){let X=Y[H],j=k[X.materialIndex];if(j&&j.visible){let te=w(E,j,U,I);E.onBeforeShadow(t,E,x,T,P,te,X),t.renderBufferDirect(T,null,P,te,E,X),E.onAfterShadow(t,E,x,T,P,te,X)}}}else if(k.visible){let Y=w(E,k,U,I);E.onBeforeShadow(t,E,x,T,P,Y,null),t.renderBufferDirect(T,null,P,Y,E,null),E.onAfterShadow(t,E,x,T,P,Y,null)}}let V=E.children;for(let P=0,k=V.length;P<k;P++)b(V[P],x,T,U,C,I)}function S(E){E.target.removeEventListener("dispose",S);for(let T in c){let U=c[T],C=E.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}function Lg(t,e){function n(){let R=!1,K=new _t,W=null,ce=new _t(0,0,0,0);return{setMask:function(re){W!==re&&!R&&(t.colorMask(re,re,re,re),W=re)},setLocked:function(re){R=re},setClear:function(re,oe,Pe,Xe,se){se===!0&&(re*=Xe,oe*=Xe,Pe*=Xe),K.set(re,oe,Pe,Xe),ce.equals(K)===!1&&(t.clearColor(re,oe,Pe,Xe),ce.copy(K))},reset:function(){R=!1,W=null,ce.set(-1,0,0,0)}}}function i(){let R=!1,K=!1,W=null,ce=null,re=null;return{setReversed:function(oe){if(K!==oe){let Pe=e.get("EXT_clip_control");oe?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),K=oe;let Xe=re;re=null,this.setClear(Xe)}},getReversed:function(){return K},setTest:function(oe){oe?ve(t.DEPTH_TEST):He(t.DEPTH_TEST)},setMask:function(oe){W!==oe&&!R&&(t.depthMask(oe),W=oe)},setFunc:function(oe){if(K&&(oe=Bh[oe]),ce!==oe){switch(oe){case $r:t.depthFunc(t.NEVER);break;case Qr:t.depthFunc(t.ALWAYS);break;case jr:t.depthFunc(t.LESS);break;case is:t.depthFunc(t.LEQUAL);break;case ea:t.depthFunc(t.EQUAL);break;case ta:t.depthFunc(t.GEQUAL);break;case na:t.depthFunc(t.GREATER);break;case ia:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ce=oe}},setLocked:function(oe){R=oe},setClear:function(oe){re!==oe&&(re=oe,K&&(oe=1-oe),t.clearDepth(oe))},reset:function(){R=!1,W=null,ce=null,re=null,K=!1}}}function s(){let R=!1,K=null,W=null,ce=null,re=null,oe=null,Pe=null,Xe=null,se=null;return{setTest:function(Ie){R||(Ie?ve(t.STENCIL_TEST):He(t.STENCIL_TEST))},setMask:function(Ie){K!==Ie&&!R&&(t.stencilMask(Ie),K=Ie)},setFunc:function(Ie,We,ge){(W!==Ie||ce!==We||re!==ge)&&(t.stencilFunc(Ie,We,ge),W=Ie,ce=We,re=ge)},setOp:function(Ie,We,ge){(oe!==Ie||Pe!==We||Xe!==ge)&&(t.stencilOp(Ie,We,ge),oe=Ie,Pe=We,Xe=ge)},setLocked:function(Ie){R=Ie},setClear:function(Ie){se!==Ie&&(t.clearStencil(Ie),se=Ie)},reset:function(){R=!1,K=null,W=null,ce=null,re=null,oe=null,Pe=null,Xe=null,se=null}}}let r=new n,a=new i,o=new s,l={},c=new WeakMap,u={},f={},h={},d=new WeakMap,p=[],_=null,m=!1,g=null,y=null,w=null,b=null,S=null,E=null,x=null,T=new Ze(0,0,0),U=0,C=!1,I=null,N=null,V=null,P=null,k=null,Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,ie=0,X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=ie>=1):X.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=ie>=2);let j=null,te={},Ee=t.getParameter(t.SCISSOR_BOX),Ge=t.getParameter(t.VIEWPORT),J=new _t().fromArray(Ee),xe=new _t().fromArray(Ge);function Te(R,K,W,ce){let re=new Uint8Array(4),oe=t.createTexture();t.bindTexture(R,oe),t.texParameteri(R,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(R,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Pe=0;Pe<W;Pe++)R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY?t.texImage3D(K,0,t.RGBA,1,1,ce,0,t.RGBA,t.UNSIGNED_BYTE,re):t.texImage2D(K+Pe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,re);return oe}let Le={};Le[t.TEXTURE_2D]=Te(t.TEXTURE_2D,t.TEXTURE_2D,1),Le[t.TEXTURE_CUBE_MAP]=Te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[t.TEXTURE_2D_ARRAY]=Te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Le[t.TEXTURE_3D]=Te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ve(t.DEPTH_TEST),a.setFunc(is),Jt(!1),pt(ul),ve(t.CULL_FACE),Ft(Fi);function ve(R){u[R]!==!0&&(t.enable(R),u[R]=!0)}function He(R){u[R]!==!1&&(t.disable(R),u[R]=!1)}function yt(R,K){return h[R]!==K?(t.bindFramebuffer(R,K),h[R]=K,R===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=K),R===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=K),!0):!1}function Ne(R,K){let W=p,ce=!1;if(R){W=d.get(K),W===void 0&&(W=[],d.set(K,W));let re=R.textures;if(W.length!==re.length||W[0]!==t.COLOR_ATTACHMENT0){for(let oe=0,Pe=re.length;oe<Pe;oe++)W[oe]=t.COLOR_ATTACHMENT0+oe;W.length=re.length,ce=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,ce=!0);ce&&t.drawBuffers(W)}function st(R){return _!==R?(t.useProgram(R),_=R,!0):!1}let ot={[Oi]:t.FUNC_ADD,[ah]:t.FUNC_SUBTRACT,[oh]:t.FUNC_REVERSE_SUBTRACT};ot[lh]=t.MIN,ot[ch]=t.MAX;let Je={[hh]:t.ZERO,[uh]:t.ONE,[fh]:t.SRC_COLOR,[pl]:t.SRC_ALPHA,[xh]:t.SRC_ALPHA_SATURATE,[gh]:t.DST_COLOR,[ph]:t.DST_ALPHA,[dh]:t.ONE_MINUS_SRC_COLOR,[ml]:t.ONE_MINUS_SRC_ALPHA,[_h]:t.ONE_MINUS_DST_COLOR,[mh]:t.ONE_MINUS_DST_ALPHA,[vh]:t.CONSTANT_COLOR,[yh]:t.ONE_MINUS_CONSTANT_COLOR,[Mh]:t.CONSTANT_ALPHA,[bh]:t.ONE_MINUS_CONSTANT_ALPHA};function Ft(R,K,W,ce,re,oe,Pe,Xe,se,Ie){if(R===Fi){m===!0&&(He(t.BLEND),m=!1);return}if(m===!1&&(ve(t.BLEND),m=!0),R!==rh){if(R!==g||Ie!==C){if((y!==Oi||S!==Oi)&&(t.blendEquation(t.FUNC_ADD),y=Oi,S=Oi),Ie)switch(R){case fs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case js:t.blendFunc(t.ONE,t.ONE);break;case fl:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dl:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Fe("WebGLState: Invalid blending: ",R);break}else switch(R){case fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case js:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case fl:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dl:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",R);break}w=null,b=null,E=null,x=null,T.set(0,0,0),U=0,g=R,C=Ie}return}re=re||K,oe=oe||W,Pe=Pe||ce,(K!==y||re!==S)&&(t.blendEquationSeparate(ot[K],ot[re]),y=K,S=re),(W!==w||ce!==b||oe!==E||Pe!==x)&&(t.blendFuncSeparate(Je[W],Je[ce],Je[oe],Je[Pe]),w=W,b=ce,E=oe,x=Pe),(Xe.equals(T)===!1||se!==U)&&(t.blendColor(Xe.r,Xe.g,Xe.b,se),T.copy(Xe),U=se),g=R,C=!1}function wt(R,K){R.side===kn?He(t.CULL_FACE):ve(t.CULL_FACE);let W=R.side===Zt;K&&(W=!W),Jt(W),R.blending===fs&&R.transparent===!1?Ft(Fi):Ft(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let ce=R.stencilWrite;o.setTest(ce),ce&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),It(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ve(t.SAMPLE_ALPHA_TO_COVERAGE):He(t.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(R){I!==R&&(R?t.frontFace(t.CW):t.frontFace(t.CCW),I=R)}function pt(R){R!==nh?(ve(t.CULL_FACE),R!==N&&(R===ul?t.cullFace(t.BACK):R===ih?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):He(t.CULL_FACE),N=R}function Ln(R){R!==V&&(H&&t.lineWidth(R),V=R)}function It(R,K,W){R?(ve(t.POLYGON_OFFSET_FILL),(P!==K||k!==W)&&(P=K,k=W,a.getReversed()&&(K=-K,W=-W),t.polygonOffset(K,W))):He(t.POLYGON_OFFSET_FILL)}function fn(R){R?ve(t.SCISSOR_TEST):He(t.SCISSOR_TEST)}function dn(R){R===void 0&&(R=t.TEXTURE0+Y-1),j!==R&&(t.activeTexture(R),j=R)}function pn(R,K,W){W===void 0&&(j===null?W=t.TEXTURE0+Y-1:W=j);let ce=te[W];ce===void 0&&(ce={type:void 0,texture:void 0},te[W]=ce),(ce.type!==R||ce.texture!==K)&&(j!==W&&(t.activeTexture(W),j=W),t.bindTexture(R,K||Le[R]),ce.type=R,ce.texture=K)}function D(){let R=te[j];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function mn(){try{t.compressedTexImage2D(...arguments)}catch(R){Fe("WebGLState:",R)}}function ut(){try{t.compressedTexImage3D(...arguments)}catch(R){Fe("WebGLState:",R)}}function ft(){try{t.texSubImage2D(...arguments)}catch(R){Fe("WebGLState:",R)}}function de(){try{t.texSubImage3D(...arguments)}catch(R){Fe("WebGLState:",R)}}function At(){try{t.compressedTexSubImage2D(...arguments)}catch(R){Fe("WebGLState:",R)}}function De(){try{t.compressedTexSubImage3D(...arguments)}catch(R){Fe("WebGLState:",R)}}function ke(){try{t.texStorage2D(...arguments)}catch(R){Fe("WebGLState:",R)}}function A(){try{t.texStorage3D(...arguments)}catch(R){Fe("WebGLState:",R)}}function v(){try{t.texImage2D(...arguments)}catch(R){Fe("WebGLState:",R)}}function O(){try{t.texImage3D(...arguments)}catch(R){Fe("WebGLState:",R)}}function ne(R){return f[R]!==void 0?f[R]:t.getParameter(R)}function Q(R,K){f[R]!==K&&(t.pixelStorei(R,K),f[R]=K)}function ae(R){J.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),J.copy(R))}function ue(R){xe.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),xe.copy(R))}function q(R,K){let W=c.get(K);W===void 0&&(W=new WeakMap,c.set(K,W));let ce=W.get(R);ce===void 0&&(ce=t.getUniformBlockIndex(K,R.name),t.uniformBlockBinding(K,ce,ce),W.set(R,ce))}function Z(R,K,W){let re=c.get(K).get(R);l[re]!==W&&(t.bindBufferBase(t.UNIFORM_BUFFER,re,W),l[re]=W)}function le(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},j=null,te={},h={},l={},d=new WeakMap,p=[],_=null,m=!1,g=null,y=null,w=null,b=null,S=null,E=null,x=null,T=new Ze(0,0,0),U=0,C=!1,I=null,N=null,V=null,P=null,k=null,J.set(0,0,t.canvas.width,t.canvas.height),xe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ve,disable:He,bindFramebuffer:yt,drawBuffers:Ne,useProgram:st,setBlending:Ft,setMaterial:wt,setFlipSided:Jt,setCullFace:pt,setLineWidth:Ln,setPolygonOffset:It,setScissorTest:fn,activeTexture:dn,bindTexture:pn,unbindTexture:D,compressedTexImage2D:mn,compressedTexImage3D:ut,texImage2D:v,texImage3D:O,pixelStorei:Q,getParameter:ne,updateUBOMapping:q,uniformBlockBinding:Z,texStorage2D:ke,texStorage3D:A,texSubImage2D:ft,texSubImage3D:de,compressedTexSubImage2D:At,compressedTexSubImage3D:De,scissor:ae,viewport:ue,reset:le}}function Dg(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap,f=new Set,h,d=new WeakMap,p=new Set,_=new FinalizationRegistry(A=>p.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return m?new OffscreenCanvas(A,v):ks("canvas")}function y(A,v,O){let ne=1,Q=ke(A);if((Q.width>O||Q.height>O)&&(ne=O/Math.max(Q.width,Q.height)),ne<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ae=Math.floor(ne*Q.width),ue=Math.floor(ne*Q.height);h===void 0&&(h=g(ae,ue));let q=v?g(ae,ue):h;return q.width=ae,q.height=ue,q.getContext("2d").drawImage(A,0,0,ae,ue),Ue("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ae+"x"+ue+")."),q}else return"data"in A&&Ue("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function w(A){return A.generateMipmaps}function b(A){t.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(A,v,O,ne,Q,ae=!1){if(A!==null){if(t[A]!==void 0)return t[A];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ue;ne&&(ue=e.get("EXT_texture_norm16"),ue||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=v;if(v===t.RED&&(O===t.FLOAT&&(q=t.R32F),O===t.HALF_FLOAT&&(q=t.R16F),O===t.UNSIGNED_BYTE&&(q=t.R8),O===t.UNSIGNED_SHORT&&ue&&(q=ue.R16_EXT),O===t.SHORT&&ue&&(q=ue.R16_SNORM_EXT)),v===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.R8UI),O===t.UNSIGNED_SHORT&&(q=t.R16UI),O===t.UNSIGNED_INT&&(q=t.R32UI),O===t.BYTE&&(q=t.R8I),O===t.SHORT&&(q=t.R16I),O===t.INT&&(q=t.R32I)),v===t.RG&&(O===t.FLOAT&&(q=t.RG32F),O===t.HALF_FLOAT&&(q=t.RG16F),O===t.UNSIGNED_BYTE&&(q=t.RG8),O===t.UNSIGNED_SHORT&&ue&&(q=ue.RG16_EXT),O===t.SHORT&&ue&&(q=ue.RG16_SNORM_EXT)),v===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RG8UI),O===t.UNSIGNED_SHORT&&(q=t.RG16UI),O===t.UNSIGNED_INT&&(q=t.RG32UI),O===t.BYTE&&(q=t.RG8I),O===t.SHORT&&(q=t.RG16I),O===t.INT&&(q=t.RG32I)),v===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RGB8UI),O===t.UNSIGNED_SHORT&&(q=t.RGB16UI),O===t.UNSIGNED_INT&&(q=t.RGB32UI),O===t.BYTE&&(q=t.RGB8I),O===t.SHORT&&(q=t.RGB16I),O===t.INT&&(q=t.RGB32I)),v===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),O===t.UNSIGNED_INT&&(q=t.RGBA32UI),O===t.BYTE&&(q=t.RGBA8I),O===t.SHORT&&(q=t.RGBA16I),O===t.INT&&(q=t.RGBA32I)),v===t.RGB&&(O===t.UNSIGNED_SHORT&&ue&&(q=ue.RGB16_EXT),O===t.SHORT&&ue&&(q=ue.RGB16_SNORM_EXT),O===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),O===t.UNSIGNED_INT_10F_11F_11F_REV&&(q=t.R11F_G11F_B10F)),v===t.RGBA){let Z=ae?Os:Ye.getTransfer(Q);O===t.FLOAT&&(q=t.RGBA32F),O===t.HALF_FLOAT&&(q=t.RGBA16F),O===t.UNSIGNED_BYTE&&(q=Z===it?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT&&ue&&(q=ue.RGBA16_EXT),O===t.SHORT&&ue&&(q=ue.RGBA16_SNORM_EXT),O===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(A,v){let O;return A?v===null||v===En||v===ki?O=t.DEPTH24_STENCIL8:v===Rn?O=t.DEPTH32F_STENCIL8:v===ps&&(O=t.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===En||v===ki?O=t.DEPTH_COMPONENT24:v===Rn?O=t.DEPTH_COMPONENT32F:v===ps&&(O=t.DEPTH_COMPONENT16),O}function T(A,v){return w(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ut&&A.minFilter!==Rt?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function U(A){let v=new WeakRef(A);i.get(A).__ref=v,p.add(v),_.register(A,v,v)}function C(A){let v=i.get(A).__ref;v!==void 0&&(p.delete(v),_.unregister(v))}function I(A){V(A.target)}function N(A){P(A.target)}function V(A){A.removeEventListener("dispose",I),C(A),Y(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&f.delete(A)}function P(A){A.removeEventListener("dispose",N),C(A),ie(A)}function k(){for(let A of p){let v=A.deref();v!==void 0&&(v.isRenderTarget===!0?P(v):V(v))}p.clear(),f.clear()}function Y(A){let v=i.get(A);if(v.__webglInit===void 0)return;let O=A.source,ne=d.get(O);if(ne){let Q=ne[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&H(A),Object.keys(ne).length===0&&d.delete(O)}i.remove(A)}function H(A){let v=i.get(A);t.deleteTexture(v.__webglTexture);let O=A.source,ne=d.get(O);delete ne[v.__cacheKey],a.memory.textures--}function ie(A){let v=i.get(A);v.__depthDisposeCallback&&v.__depthDisposeCallback();let O=A.depthTexture;if(O&&O.renderTarget===A&&V(O),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(v.__webglFramebuffer[Q]))for(let ae=0;ae<v.__webglFramebuffer[Q].length;ae++)t.deleteFramebuffer(v.__webglFramebuffer[Q][ae]);else t.deleteFramebuffer(v.__webglFramebuffer[Q]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[Q])}else{if(Array.isArray(v.__webglFramebuffer))for(let Q=0;Q<v.__webglFramebuffer.length;Q++)t.deleteFramebuffer(v.__webglFramebuffer[Q]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Q=0;Q<v.__webglColorRenderbuffer.length;Q++)v.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[Q]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let ne=A.textures;for(let Q=0,ae=ne.length;Q<ae;Q++){let ue=i.get(ne[Q]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(ne[Q])}i.remove(A)}let X=0;function j(){X=0}function te(){return X}function Ee(A){X=A}function Ge(){let A=X;return A>=s.maxTextures&&Ue("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,A}function J(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.mipmapsAutoUpdate),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function xe(A,v){let O=i.get(A);if(A.isVideoTexture&&At(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){let ne=A.image;if(ne===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(O,A,v);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+v)}function Te(A,v){let O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){wt(O,A,v);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+v)}function Le(A,v){let O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){wt(O,A,v);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+v)}function ve(A,v){let O=i.get(A);if(A.version>0&&O.__version!==A.version){Jt(O,A,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+v)}let He={[sa]:t.REPEAT,[Fn]:t.CLAMP_TO_EDGE,[ra]:t.MIRRORED_REPEAT},yt={[Ut]:t.NEAREST,[wh]:t.NEAREST_MIPMAP_NEAREST,[er]:t.NEAREST_MIPMAP_LINEAR,[Rt]:t.LINEAR,[Ia]:t.LINEAR_MIPMAP_NEAREST,[An]:t.LINEAR_MIPMAP_LINEAR},Ne={[Ch]:t.NEVER,[Ul]:t.ALWAYS,[Ph]:t.LESS,[Dl]:t.LEQUAL,[Ih]:t.EQUAL,[Nl]:t.GEQUAL,[Lh]:t.GREATER,[Dh]:t.NOTEQUAL};function st(A,v){if(v.type===Rn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Rt||v.magFilter===Ia||v.magFilter===er||v.magFilter===An||v.minFilter===Rt||v.minFilter===Ia||v.minFilter===er||v.minFilter===An)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,He[v.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,He[v.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,He[v.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,yt[v.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,yt[v.minFilter]),v.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Ne[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ut||v.minFilter!==er&&v.minFilter!==An||v.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ot(A,v){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",I),U(v));let ne=v.source,Q=d.get(ne);Q===void 0&&(Q={},d.set(ne,Q));let ae=J(v);if(ae!==A.__cacheKey){Q[ae]===void 0&&(Q[ae]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[ae].usedTimes++;let ue=Q[A.__cacheKey];ue!==void 0&&(Q[A.__cacheKey].usedTimes--,ue.usedTimes===0&&H(v)),A.__cacheKey=ae,A.__webglTexture=Q[ae].texture}return O}function Je(A,v,O){return Math.floor(Math.floor(A/O)/v)}function Ft(A,v,O,ne){let ae=A.updateRanges;if(ae.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,O,ne,v.data);else{ae.sort((R,K)=>R.start-K.start);let ue=0;for(let R=1;R<ae.length;R++){let K=ae[ue],W=ae[R],ce=K.start+K.count,re=Je(W.start,v.width,4),oe=Je(K.start,v.width,4);W.start<=ce+1&&re===oe&&Je(W.start+W.count-1,v.width,4)===re?K.count=Math.max(K.count,W.start+W.count-K.start):(++ue,ae[ue]=W)}ae.length=ue+1;let q=n.getParameter(t.UNPACK_ROW_LENGTH),Z=n.getParameter(t.UNPACK_SKIP_PIXELS),le=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let R=0,K=ae.length;R<K;R++){let W=ae[R],ce=Math.floor(W.start/4),re=Math.ceil(W.count/4),oe=ce%v.width,Pe=Math.floor(ce/v.width),Xe=re,se=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,oe),n.pixelStorei(t.UNPACK_SKIP_ROWS,Pe),n.texSubImage2D(t.TEXTURE_2D,0,oe,Pe,Xe,se,O,ne,v.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Z),n.pixelStorei(t.UNPACK_SKIP_ROWS,le)}}function wt(A,v,O){let ne=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ne=t.TEXTURE_3D);let Q=ot(A,v),ae=v.source;n.bindTexture(ne,A.__webglTexture,t.TEXTURE0+O);let ue=i.get(ae);if(ae.version!==ue.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+O),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let se=Ye.getPrimaries(Ye.workingColorSpace),Ie=v.colorSpace===ei?null:Ye.getPrimaries(v.colorSpace),We=v.colorSpace===ei||se===Ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment);let Z=y(v.image,!1,s.maxTextureSize);Z=De(v,Z);let le=r.convert(v.format,v.colorSpace),R=r.convert(v.type),K=E(v.internalFormat,le,R,v.normalized,v.colorSpace,v.isVideoTexture);st(ne,v);let W,ce=v.mipmaps,re=v.isVideoTexture!==!0,oe=ue.__version===void 0||Q===!0,Pe=ae.dataReady,Xe=T(v,Z);if(v.isDepthTexture)K=x(v.format===jn,v.type),oe&&(re?n.texStorage2D(t.TEXTURE_2D,1,K,Z.width,Z.height):n.texImage2D(t.TEXTURE_2D,0,K,Z.width,Z.height,0,le,R,null));else if(v.isDataTexture)if(ce.length>0){re&&oe&&n.texStorage2D(t.TEXTURE_2D,Xe,K,ce[0].width,ce[0].height);for(let se=0,Ie=ce.length;se<Ie;se++)W=ce[se],re?Pe&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,W.width,W.height,le,R,W.data):n.texImage2D(t.TEXTURE_2D,se,K,W.width,W.height,0,le,R,W.data);v.generateMipmaps=!1}else re?(oe&&n.texStorage2D(t.TEXTURE_2D,Xe,K,Z.width,Z.height),Pe&&Ft(v,Z,le,R)):n.texImage2D(t.TEXTURE_2D,0,K,Z.width,Z.height,0,le,R,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){re&&oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,K,ce[0].width,ce[0].height,Z.depth);for(let se=0,Ie=ce.length;se<Ie;se++)if(W=ce[se],v.format!==Pn)if(le!==null)if(re){if(Pe)if(v.layerUpdates.size>0){let We=Vl(W.width,W.height,v.format,v.type);for(let ge of v.layerUpdates){let rt=W.data.subarray(ge*We/W.data.BYTES_PER_ELEMENT,(ge+1)*We/W.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,ge,W.width,W.height,1,le,rt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,W.width,W.height,Z.depth,le,W.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,K,W.width,W.height,Z.depth,0,W.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?Pe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,W.width,W.height,Z.depth,le,R,W.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,K,W.width,W.height,Z.depth,0,le,R,W.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{re&&oe&&n.texStorage2D(t.TEXTURE_2D,Xe,K,ce[0].width,ce[0].height);for(let se=0,Ie=ce.length;se<Ie;se++)W=ce[se],v.format!==Pn?le!==null?re?Pe&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,W.width,W.height,le,W.data):n.compressedTexImage2D(t.TEXTURE_2D,se,K,W.width,W.height,0,W.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?Pe&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,W.width,W.height,le,R,W.data):n.texImage2D(t.TEXTURE_2D,se,K,W.width,W.height,0,le,R,W.data)}else if(v.isDataArrayTexture)if(re){if(oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,K,Z.width,Z.height,Z.depth),Pe)if(v.layerUpdates.size>0){let se=Vl(Z.width,Z.height,v.format,v.type);for(let Ie of v.layerUpdates){let We=Z.data.subarray(Ie*se/Z.data.BYTES_PER_ELEMENT,(Ie+1)*se/Z.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ie,Z.width,Z.height,1,le,R,We)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,le,R,Z.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,K,Z.width,Z.height,Z.depth,0,le,R,Z.data);else if(v.isData3DTexture)re?(oe&&n.texStorage3D(t.TEXTURE_3D,Xe,K,Z.width,Z.height,Z.depth),Pe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,le,R,Z.data)):n.texImage3D(t.TEXTURE_3D,0,K,Z.width,Z.height,Z.depth,0,le,R,Z.data);else if(v.isFramebufferTexture){if(oe)if(re)n.texStorage2D(t.TEXTURE_2D,Xe,K,Z.width,Z.height);else{let se=Z.width,Ie=Z.height;for(let We=0;We<Xe;We++)n.texImage2D(t.TEXTURE_2D,We,K,se,Ie,0,le,R,null),se>>=1,Ie>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in t){let se=t.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),Z.parentNode!==se){se.appendChild(Z),f.add(v),se.onpaint=Ie=>{let We=Ie.changedElements;for(let ge of f)We.includes(ge.image)&&(ge.needsUpdate=!0)},se.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Z);else{let We=t.RGBA,ge=t.RGBA,rt=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,We,ge,rt,Z)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ce.length>0){if(re&&oe){let se=ke(ce[0]);n.texStorage2D(t.TEXTURE_2D,Xe,K,se.width,se.height)}for(let se=0,Ie=ce.length;se<Ie;se++)W=ce[se],re?Pe&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,le,R,W):n.texImage2D(t.TEXTURE_2D,se,K,le,R,W);v.generateMipmaps=!1}else if(re){if(oe){let se=ke(Z);n.texStorage2D(t.TEXTURE_2D,Xe,K,se.width,se.height)}Pe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le,R,Z)}else n.texImage2D(t.TEXTURE_2D,0,K,le,R,Z);w(v)&&v.mipmapsAutoUpdate===!0&&b(ne),ue.__version=ae.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Jt(A,v,O){if(v.image.length!==6)return;let ne=ot(A,v),Q=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+O);let ae=i.get(Q);if(Q.version!==ae.__version||ne===!0){n.activeTexture(t.TEXTURE0+O);let ue=Ye.getPrimaries(Ye.workingColorSpace),q=v.colorSpace===ei?null:Ye.getPrimaries(v.colorSpace),Z=v.colorSpace===ei||ue===q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let le=v.isCompressedTexture||v.image[0].isCompressedTexture,R=v.image[0]&&v.image[0].isDataTexture,K=[];for(let ge=0;ge<6;ge++)!le&&!R?K[ge]=y(v.image[ge],!0,s.maxCubemapSize):K[ge]=R?v.image[ge].image:v.image[ge],K[ge]=De(v,K[ge]);let W=K[0],ce=r.convert(v.format,v.colorSpace),re=r.convert(v.type),oe=E(v.internalFormat,ce,re,v.normalized,v.colorSpace),Pe=v.isVideoTexture!==!0,Xe=ae.__version===void 0||ne===!0,se=Q.dataReady,Ie=T(v,W);st(t.TEXTURE_CUBE_MAP,v);let We;if(v.isDepthTexture){if(oe=x(v.format===jn,v.type),Xe)if(Pe)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,oe,W.width,W.height);else for(let ge=0;ge<6;ge++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,oe,W.width,W.height,0,ce,re,null)}else if(le){Pe&&Xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,oe,W.width,W.height);for(let ge=0;ge<6;ge++){We=K[ge].mipmaps;for(let rt=0;rt<We.length;rt++){let Lt=We[rt];v.format!==Pn?ce!==null?Pe?se&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,rt,0,0,Lt.width,Lt.height,ce,Lt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,rt,oe,Lt.width,Lt.height,0,Lt.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,rt,0,0,Lt.width,Lt.height,ce,re,Lt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,rt,oe,Lt.width,Lt.height,0,ce,re,Lt.data)}}}else{if(We=v.mipmaps,Pe&&Xe){We.length>0&&Ie++;let ge=ke(K[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,oe,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(R){Pe?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,K[ge].width,K[ge].height,ce,re,K[ge].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,oe,K[ge].width,K[ge].height,0,ce,re,K[ge].data);for(let rt=0;rt<We.length;rt++){let ii=We[rt].image[ge].image;Pe?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,rt+1,0,0,ii.width,ii.height,ce,re,ii.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,rt+1,oe,ii.width,ii.height,0,ce,re,ii.data)}}else{Pe?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ce,re,K[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,oe,ce,re,K[ge]);for(let rt=0;rt<We.length;rt++){let Lt=We[rt];Pe?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,rt+1,0,0,ce,re,Lt.image[ge]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,rt+1,oe,ce,re,Lt.image[ge])}}}w(v)&&v.mipmapsAutoUpdate===!0&&b(t.TEXTURE_CUBE_MAP),ae.__version=Q.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function pt(A,v,O,ne,Q,ae){let ue=r.convert(O.format,O.colorSpace),q=r.convert(O.type),Z=E(O.internalFormat,ue,q,O.normalized,O.colorSpace),le=i.get(v),R=i.get(O);if(R.__renderTarget=v,!le.__hasExternalTextures){let K=Math.max(1,v.width>>ae),W=Math.max(1,v.height>>ae);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,ae,Z,K,W,v.depth,0,ue,q,null):n.texImage2D(Q,ae,Z,K,W,0,ue,q,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),de(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,Q,R.__webglTexture,0,ft(v)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,Q,R.__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ln(A,v,O){if(t.bindRenderbuffer(t.RENDERBUFFER,A),v.depthBuffer){let ne=v.depthTexture,Q=ne&&ne.isDepthTexture?ne.type:null,ae=x(v.stencilBuffer,Q),ue=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;de(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ft(v),ae,v.width,v.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,ft(v),ae,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,ae,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,A)}else{let ne=v.textures;for(let Q=0;Q<ne.length;Q++){let ae=ne[Q],ue=r.convert(ae.format,ae.colorSpace),q=r.convert(ae.type),Z=E(ae.internalFormat,ue,q,ae.normalized,ae.colorSpace);de(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ft(v),Z,v.width,v.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,ft(v),Z,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,Z,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function It(A,v,O){let ne=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(v.depthTexture);Q.__renderTarget=v;let ae=ne?v.depthTexture.image[0]:v.depthTexture.image;(!Q.__webglTexture||ae.width!==v.width||ae.height!==v.height)&&(ae.width=v.width,ae.height=v.height,v.depthTexture.needsUpdate=!0),ne?ve(v.depthTexture,0):xe(v.depthTexture,0);let ue=Q.__webglTexture,q=ft(v),Z=ne?t.TEXTURE_CUBE_MAP_POSITIVE_X+O:t.TEXTURE_2D,le=v.depthTexture.format===jn?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===$n)de(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,Z,ue,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,le,Z,ue,0);else if(v.depthTexture.format===jn)de(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,Z,ue,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,le,Z,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fn(A){let v=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let ne=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ne){let Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ne.removeEventListener("dispose",Q)};ne.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=ne}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let ne=0;ne<6;ne++)It(v.__webglFramebuffer[ne],A,ne);else A.texture.mipmaps.length>0?It(v.__webglFramebuffer[0],A,0):It(v.__webglFramebuffer,A,0);else if(O){v.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[ne]),v.__webglDepthbuffer[ne]===void 0)v.__webglDepthbuffer[ne]=t.createRenderbuffer(),Ln(v.__webglDepthbuffer[ne],A,!1);else{let Q=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer[ne];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ae)}}else if(A.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),Ln(v.__webglDepthbuffer,A,!1);else{let Q=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ae)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function dn(A,v,O){let ne=i.get(A);v!==void 0&&pt(ne.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&fn(A)}function pn(A){let v=A.texture,O=i.get(A),ne=i.get(v);A.addEventListener("dispose",N),U(A);let Q=A.textures,ae=A.isWebGLCubeRenderTarget===!0,ue=Q.length>1;if(ue||(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=v.version,a.memory.textures++),ae){O.__webglFramebuffer=[];for(let q=0;q<6;q++)if(v.mipmaps.length>0){O.__webglFramebuffer[q]=[];for(let Z=0;Z<v.mipmaps.length;Z++)O.__webglFramebuffer[q][Z]=t.createFramebuffer()}else O.__webglFramebuffer[q]=t.createFramebuffer()}else{if(v.mipmaps.length>0){O.__webglFramebuffer=[];for(let q=0;q<v.mipmaps.length;q++)O.__webglFramebuffer[q]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(ue)for(let q=0,Z=Q.length;q<Z;q++){let le=i.get(Q[q]);le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&de(A)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let q=0;q<Q.length;q++){let Z=Q[q];O.__webglColorRenderbuffer[q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[q]);let le=r.convert(Z.format,Z.colorSpace),R=r.convert(Z.type),K=E(Z.internalFormat,le,R,Z.normalized,Z.colorSpace,A.isXRRenderTarget===!0),W=ft(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,W,K,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+q,t.RENDERBUFFER,O.__webglColorRenderbuffer[q])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),Ln(O.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),st(t.TEXTURE_CUBE_MAP,v);for(let q=0;q<6;q++)if(v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)pt(O.__webglFramebuffer[q][Z],A,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,Z);else pt(O.__webglFramebuffer[q],A,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);w(v)?b(t.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),n.unbindTexture()}else if(ue){for(let q=0,Z=Q.length;q<Z;q++){let le=Q[q],R=i.get(le),K=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(K,R.__webglTexture),st(K,le),pt(O.__webglFramebuffer,A,le,t.COLOR_ATTACHMENT0+q,K,0),w(le)&&b(K)}n.unbindTexture()}else{let q=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(q=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(q,ne.__webglTexture),st(q,v),v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)pt(O.__webglFramebuffer[Z],A,v,t.COLOR_ATTACHMENT0,q,Z);else pt(O.__webglFramebuffer,A,v,t.COLOR_ATTACHMENT0,q,0);w(v)?b(q):v.mipmaps.length>0&&t.texParameteri(q,t.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),n.unbindTexture()}A.depthBuffer&&fn(A)}function D(A){let v=A.textures;for(let O=0,ne=v.length;O<ne;O++){let Q=v[O];if(w(Q)&&Q.mipmapsAutoUpdate===!0){let ae=S(A),ue=i.get(Q).__webglTexture;n.bindTexture(ae,ue),b(ae),n.unbindTexture()}}}let mn=[];function ut(A){if(A.samples>0){if(de(A)===!1){let v=A.textures,O=A.width,ne=A.height,Q=t.COLOR_BUFFER_BIT,ae=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(A),q=v.length>1;if(q)for(let le=0;le<v.length;le++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let le=0;le<v.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);let R=i.get(v[le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,R,0)}t.blitFramebuffer(0,0,O,ne,0,0,O,ne,Q,t.NEAREST),l===!0&&(mn.length=0,mn.push(t.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&mn.push(ae),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,mn))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),q)for(let le=0;le<v.length;le++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);let R=i.get(v[le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,R,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let v=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function ft(A){return Math.min(s.maxSamples,A.samples)}function de(A){let v=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function At(A){let v=a.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function De(A,v){let O=A.colorSpace,ne=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Fs&&O!==ei&&(Ye.getTransfer(O)===it?(ne!==Pn||Q!==cn)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",O)),v}function ke(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Ge,this.resetTextureUnits=j,this.getTextureUnits=te,this.setTextureUnits=Ee,this.setTexture2D=xe,this.setTexture2DArray=Te,this.setTexture3D=Le,this.setTextureCube=ve,this.rebindTextures=dn,this.setupRenderTarget=pn,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=fn,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=de,this.dispose=k}function Ng(t,e){function n(i,s=ei){let r,a=Ye.getTransfer(s);if(i===cn)return t.UNSIGNED_BYTE;if(i===Da)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Na)return t.UNSIGNED_SHORT_5_5_5_1;if(i===El)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Rl)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===wl)return t.BYTE;if(i===Al)return t.SHORT;if(i===ps)return t.UNSIGNED_SHORT;if(i===La)return t.INT;if(i===En)return t.UNSIGNED_INT;if(i===Rn)return t.FLOAT;if(i===Cn)return t.HALF_FLOAT;if(i===Cl)return t.ALPHA;if(i===Pl)return t.RGB;if(i===Pn)return t.RGBA;if(i===$n)return t.DEPTH_COMPONENT;if(i===jn)return t.DEPTH_STENCIL;if(i===Il)return t.RED;if(i===Ua)return t.RED_INTEGER;if(i===xi)return t.RG;if(i===Fa)return t.RG_INTEGER;if(i===Oa)return t.RGBA_INTEGER;if(i===tr||i===nr||i===ir||i===sr)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ba||i===ka||i===za||i===Ga)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Va||i===Ha||i===Wa||i===Xa||i===qa||i===rr||i===Ya)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Va||i===Ha)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wa)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xa)return r.COMPRESSED_R11_EAC;if(i===qa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===rr)return r.COMPRESSED_RG11_EAC;if(i===Ya)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Za||i===Ja||i===Ka||i===$a||i===Qa||i===ja||i===eo||i===to||i===no||i===io||i===so||i===ro||i===ao||i===oo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Za)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ja)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ka)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$a)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qa)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ja)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===eo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===to)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===no)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===io)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===so)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ro)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ao)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lo||i===co||i===ho)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===lo)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===co)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uo||i===fo||i===ar||i===po)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===uo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ar)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ki?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var Ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,$l=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new Js(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new Yt({vertexShader:Ug,fragmentShader:Fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qt(new Ui(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ql=class extends On{constructor(e,n){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,p=null,_=typeof XRWebGLBinding<"u",m=new $l,g={},y=n.getContextAttributes(),w=null,b=null,S=[],E=[],x=new je,T=null,U=null,C=new rn;C.viewport=new _t;let I=new rn;I.viewport=new _t;let N=[C,I],V=new Ra,P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let xe=S[J];return xe===void 0&&(xe=new as,S[J]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(J){let xe=S[J];return xe===void 0&&(xe=new as,S[J]=xe),xe.getGripSpace()},this.getHand=function(J){let xe=S[J];return xe===void 0&&(xe=new as,S[J]=xe),xe.getHandSpace()};function Y(J){let xe=E.indexOf(J.inputSource);if(xe===-1)return;let Te=S[xe];Te!==void 0&&(Te.update(J.inputSource,J.frame,c||a),Te.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",ie);for(let J=0;J<S.length;J++){let xe=E[J];xe!==null&&(E[J]=null,S[J].disconnect(xe))}P=null,k=null,m.reset();for(let J in g)delete g[J];if(e.setRenderTarget(w),d=null,h=null,f=null,s=null,b=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(x.width,x.height,!1),U!==null){let J=U.camera;J.fov=U.fov,J.zoom=U.zoom,J.updateProjectionMatrix(),U=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",H),s.addEventListener("inputsourceschange",ie),y.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Le=null,ve=null;y.depth&&(ve=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Te=y.stencil?jn:$n,Le=y.stencil?ki:En);let He={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(He),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new qt(h.textureWidth,h.textureHeight,{format:Pn,type:cn,depthTexture:new Qn(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Te={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,n,Te),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new qt(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ge.setContext(s),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(J){for(let xe=0;xe<J.removed.length;xe++){let Te=J.removed[xe],Le=E.indexOf(Te);Le>=0&&(E[Le]=null,S[Le].disconnect(Te))}for(let xe=0;xe<J.added.length;xe++){let Te=J.added[xe],Le=E.indexOf(Te);if(Le===-1){for(let He=0;He<S.length;He++)if(He>=E.length){E.push(Te),Le=He;break}else if(E[He]===null){E[He]=Te,Le=He;break}if(Le===-1)break}let ve=S[Le];ve&&ve.connect(Te)}}function X(J,xe){xe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(xe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let xe=J.near,Te=J.far;m.texture!==null&&(m.depthNear>0&&(xe=m.depthNear),m.depthFar>0&&(Te=m.depthFar)),V.near=I.near=C.near=xe,V.far=I.far=C.far=Te,(P!==V.near||k!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),P=V.near,k=V.far),V.layers.mask=J.layers.mask|6,C.layers.mask=V.layers.mask&-5,I.layers.mask=V.layers.mask&-3;let Le=J.parent,ve=V.cameras;X(V,Le);for(let He=0;He<ve.length;He++)X(ve[He],Le);V.projectionMatrix.copy(C.projectionMatrix),V.projectionMatrixInverse.copy(C.projectionMatrixInverse),U===null&&J.isPerspectiveCamera&&(U={camera:J,fov:J.fov,zoom:J.zoom}),j(J,V,Le)};function j(J,xe,Te){Te===null?J.matrix.copy(xe.matrixWorld):(J.matrix.copy(Te.matrixWorld),J.matrix.invert(),J.matrix.multiply(xe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(xe.projectionMatrix),J.projectionMatrixInverse.copy(xe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=oa*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(J){return g[J]};let te=null;function Ee(J,xe){if(u=xe.getViewerPose(c||a),p=xe,u!==null){let Te=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let Le=!1;Te.length!==V.cameras.length&&(V.cameras.length=0,Le=!0);for(let Ne=0;Ne<Te.length;Ne++){let st=Te[Ne],ot=null;if(d!==null)ot=d.getViewport(st);else{let Ft=f.getViewSubImage(h,st);ot=Ft.viewport,Ne===0&&(e.setRenderTargetTextures(b,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(b))}let Je=N[Ne];Je===void 0&&(Je=new rn,Je.layers.enable(Ne),Je.viewport=new _t,N[Ne]=Je),Je.matrix.fromArray(st.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(st.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(ot.x,ot.y,ot.width,ot.height),Ne===0&&(V.matrix.copy(Je.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Le===!0&&V.cameras.push(Je)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=i.getBinding();let Ne=f.getDepthInformation(Te[0]);Ne&&Ne.isValid&&Ne.texture&&m.init(Ne,s.renderState)}if(ve&&ve.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let Ne=0;Ne<Te.length;Ne++){let st=Te[Ne].camera;if(st){let ot=g[st];ot||(ot=new Js,g[st]=ot);let Je=f.getCameraImage(st);ot.sourceTexture=Je}}}}for(let Te=0;Te<S.length;Te++){let Le=E[Te],ve=S[Te];Le!==null&&ve!==void 0&&ve.update(Le,xe,c||a)}te&&te(J,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),p=null}let Ge=new uu;Ge.setAnimationLoop(Ee),this.setAnimationLoop=function(J){te=J},this.dispose=function(){}}},Og=new gt,Mu=new Be;Mu.set(-1,0,0,0,1,0,0,0,1);function Bg(t,e){function n(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,kl(t)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,w,b){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&d(m,g,b)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,y,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,n(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,n(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,n(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Zt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,n(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Zt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,n(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,n(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),w=y.envMap,b=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Mu),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,n(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=w*.5,g.map&&(m.map.value=g.map,n(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,n(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,n(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,n(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,n(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Zt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function kg(t,e,n,i){let s={},r={};function a(y,w){let b=w.program;i.uniformBlockBinding(y,b,s[y.id])}function o(y,w){let b=s[y.id];b===void 0&&(p(y),b=l(y),s[y.id]=b,y.addEventListener("dispose",m));let S=w.program;i.updateUBOMapping(y,S);let E=e.render.frame;r[y.id]!==E&&(c(y),r[y.id]=E)}function l(y){let w=t.createBuffer(),b=y.__size,S=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,b,S),t.bindBuffer(t.UNIFORM_BUFFER,null),w}function c(y){let w=s[y.id],b=y.uniforms,S=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let E=0,x=b.length;E<x;E++){let T=b[E];if(Array.isArray(T))for(let U=0,C=T.length;U<C;U++)u(T[U],E,U,S);else u(T,E,0,S)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function u(y,w,b,S){if(h(y,w,b,S)===!0){let E=y.__offset,x=y.value;if(Array.isArray(x)){let T=0;for(let U=0;U<x.length;U++){let C=x[U],I=_(C,!0);f(C,y.__data,T),T+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,E,y.__data)}}function f(y,w,b){typeof y=="number"||typeof y=="boolean"?w[b]=y:y.isMatrix3?(w[b]=y.elements[0],w[b+1]=y.elements[1],w[b+2]=y.elements[2],w[b+3]=0,w[b+4]=y.elements[3],w[b+5]=y.elements[4],w[b+6]=y.elements[5],w[b+7]=0,w[b+8]=y.elements[6],w[b+9]=y.elements[7],w[b+10]=y.elements[8],w[b+11]=0):ArrayBuffer.isView(y)?w.set(y.subarray(0,w.length-b),b):y.toArray(w,b)}function h(y,w,b,S){let E=y.value,x=w+"_"+b;if(Array.isArray(E)){S[x]===void 0&&(S[x]=[]);let T=S[x],U=!1;for(let C=0;C<E.length;C++)d(E[C],T,C)===!0&&(U=!0);return U}return d(E,S,x)}function d(y,w,b){if(w[b]===void 0)return typeof y=="number"||typeof y=="boolean"?w[b]=y:ArrayBuffer.isView(y)?w[b]=y.slice():w[b]=y.clone(),!0;{let S=w[b];if(typeof y=="number"||typeof y=="boolean"){if(S!==y)return w[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(S.equals(y)===!1)return S.copy(y),!0}}return!1}function p(y){let w=y.uniforms,b=0,S=16;for(let x=0,T=w.length;x<T;x++){let U=Array.isArray(w[x])?w[x]:[w[x]];for(let C=0,I=U.length;C<I;C++){let N=U[C],V=Array.isArray(N.value)?N.value:[N.value],P=Array.isArray(w[x])||Array.isArray(N.value),k=b;for(let H=0,ie=V.length;H<ie;H++){let X=V[H],j=_(X,P),te=b%S,Ee=te%j.boundary,Ge=te+Ee;b+=Ee,Ge!==0&&S-Ge<j.storage&&(b+=S-Ge),H===0&&(k=b),b+=j.storage}let Y=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new Y((b-k)/Float32Array.BYTES_PER_ELEMENT),N.__offset=k}}let E=b%S;return E>0&&(b+=S-E),y.__size=b,y.__cache={},this}function _(y,w){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=16,b.storage=48):y.isMatrix4?(b.boundary=16,b.storage=64):y.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",y),w===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(y){let w=y.target;w.removeEventListener("dispose",m),t.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(let y in s)t.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:g}}var zg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gn=null;function Gg(){return Gn===null&&(Gn=new fa(zg,16,16,xi,Cn),Gn.name="DFG_LUT",Gn.minFilter=Rt,Gn.magFilter=Rt,Gn.wrapS=Fn,Gn.wrapT=Fn,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}var xo=class{constructor(e={}){let{canvas:n=Uh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=cn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let _=d,m=new Set([Oa,Fa,Ua]),g=new Set([cn,En,ps,ki,Da,Na]),y=new Uint32Array(4),w=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},S=null,E=null,x=[],T=[],U=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,N=null,V=null,P=null,k=null;this._outputColorSpace=sn;let Y=0,H=0,ie=null,X=-1,j=null,te=new _t,Ee=new _t,Ge=null,J=new Ze(0),xe=0,Te=n.width,Le=n.height,ve=1,He=null,yt=null,Ne=new _t(0,0,Te,Le),st=new _t(0,0,Te,Le),ot=!1,Je=new Ni,Ft=new da,wt=!1,Jt=!1,pt=new gt,Ln=new G,It=new _t,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},dn=!1;function pn(){return ie===null?ve:1}let D=i;function mn(M,L){return n.getContext(M,L)}let ut,ft,de,At,De,ke,A,v,O,ne,Q,ae,ue,q,Z,le,R,K,W,ce,re,oe,Pe;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"187"}`),n.addEventListener("webglcontextlost",Ie,!1),n.addEventListener("webglcontextrestored",We,!1),n.addEventListener("webglcontextcreationerror",ge,!1),D===null){let L="webgl2";if(D=mn(L,M),D===null)throw mn(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(M){throw n.removeEventListener("webglcontextlost",Ie,!1),n.removeEventListener("webglcontextrestored",We,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),Fe("WebGLRenderer: "+M.message),M}function Xe(){ut=new Qm(D),ut.init(),re=new Ng(D,ut),ft=new Gm(D,ut,e,re),de=new Lg(D,ut),ft.reversedDepthBuffer&&h&&de.buffers.depth.setReversed(!0),V=D.createFramebuffer(),P=D.createFramebuffer(),k=D.createFramebuffer(),At=new t0(D),De=new xg,ke=new Dg(D,ut,de,De,ft,re,At),A=new $m(C),v=new id(D),oe=new km(D,v),O=new jm(D,v,At,oe),ne=new i0(D,O,v,oe,At),K=new n0(D,ft,ke),Z=new Vm(De),Q=new _g(C,A,ut,ft,oe,Z),ae=new Bg(C,De),ue=new yg,q=new Ag(ut),R=new Bm(C,A,de,ne,p,l),le=new Ig(C,ne,ft),Pe=new kg(D,At,ft,de),W=new zm(D,ut,At),ce=new e0(D,ut,At),At.programs=Q.programs,C.capabilities=ft,C.extensions=ut,C.properties=De,C.renderLists=ue,C.shadowMap=le,C.state=de,C.info=At}_!==cn&&(U=new r0(_,n.width,n.height,o,s,r));let se=new Ql(C,D);this.xr=se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let M=ut.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ut.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(M){M!==void 0&&(ve=M,this.setSize(Te,Le,!1))},this.getSize=function(M){return M.set(Te,Le)},this.setSize=function(M,L,z=!0){if(se.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=M,Le=L,n.width=Math.floor(M*ve),n.height=Math.floor(L*ve),z===!0&&(n.style.width=M+"px",n.style.height=L+"px"),U!==null&&U.setSize(n.width,n.height),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(Te*ve,Le*ve).floor()},this.setDrawingBufferSize=function(M,L,z){Te=M,Le=L,ve=z,n.width=Math.floor(M*z),n.height=Math.floor(L*z),this.setViewport(0,0,M,L)},this.setEffects=function(M){if(_===cn){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let L=0;L<M.length;L++)if(M[L].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(te)},this.getViewport=function(M){return M.copy(Ne)},this.setViewport=function(M,L,z,F){M.isVector4?Ne.set(M.x,M.y,M.z,M.w):Ne.set(M,L,z,F),de.viewport(te.copy(Ne).multiplyScalar(pn()).round())},this.getScissor=function(M){return M.copy(st)},this.setScissor=function(M,L,z,F){M.isVector4?st.set(M.x,M.y,M.z,M.w):st.set(M,L,z,F),de.scissor(Ee.copy(st).multiplyScalar(pn()).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(M){de.setScissorTest(ot=M)},this.setOpaqueSort=function(M){He=M},this.setTransparentSort=function(M){yt=M},this.getClearColor=function(M){return M.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,z=!0){let F=0;if(M){let B=!1;if(ie!==null){let fe=ie.texture.format;B=m.has(fe)}if(B){let fe=ie.texture.type,Se=g.has(fe),he=R.getClearColor(),ye=R.getClearAlpha(),Re=he.r,Ve=he.g,Ke=he.b;Se?(y[0]=Re,y[1]=Ve,y[2]=Ke,y[3]=ye,D.clearBufferuiv(D.COLOR,0,y)):(w[0]=Re,w[1]=Ve,w[2]=Ke,w[3]=ye,D.clearBufferiv(D.COLOR,0,w))}else F|=D.COLOR_BUFFER_BIT}L&&(F|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(F|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&D.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),N=M},this.dispose=function(){n.removeEventListener("webglcontextlost",Ie,!1),n.removeEventListener("webglcontextrestored",We,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),R.dispose(),ue.dispose(),q.dispose(),ke.dispose(),De.dispose(),A.dispose(),ne.dispose(),O.dispose(),oe.dispose(),Pe.dispose(),Q.dispose(),se.dispose(),se.removeEventListener("sessionstart",Mc),se.removeEventListener("sessionend",bc),Ti.stop()};function Ie(M){M.preventDefault(),Ol("WebGLRenderer: Context Lost."),I=!0}function We(){Ol("WebGLRenderer: Context Restored."),I=!1;let M=At.autoReset,L=le.enabled,z=le.autoUpdate,F=le.needsUpdate,B=le.type;Xe(),At.autoReset=M,le.enabled=L,le.autoUpdate=z,le.needsUpdate=F,le.type=B}function ge(M){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function rt(M){let L=M.target;L.removeEventListener("dispose",rt),Lt(L)}function Lt(M){ii(M),De.remove(M)}function ii(M){let L=De.get(M).programs;L!==void 0&&(L.forEach(function(z){Q.releaseProgram(z)}),M.isShaderMaterial&&Q.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,z,F,B,fe){L===null&&(L=fn);let Se=B.isMesh&&B.matrixWorld.determinantAffine()<0,he=mf(M,L,z,F,B);de.setMaterial(F,Se);let ye=z.index,Re=1;if(F.wireframe===!0){if(ye=O.getWireframeAttribute(z),ye===void 0)return;Re=2}let Ve=z.drawRange,Ke=z.attributes.position,we=Ve.start*Re,$e=(Ve.start+Ve.count)*Re;fe!==null&&(we=Math.max(we,fe.start*Re),$e=Math.min($e,(fe.start+fe.count)*Re)),ye!==null?(we=Math.max(we,0),$e=Math.min($e,ye.count)):Ke!=null&&(we=Math.max(we,0),$e=Math.min($e,Ke.count));let Mt=$e-we;if(Mt<0||Mt===1/0)return;oe.setup(B,F,he,z,ye);let ct,lt=W;if(ye!==null&&(ct=v.get(ye),lt=ce,lt.setIndex(ct)),B.isMesh)F.wireframe===!0?(de.setLineWidth(F.wireframeLinewidth*pn()),lt.setMode(D.LINES)):lt.setMode(D.TRIANGLES);else if(B.isLine){let kt=F.linewidth;kt===void 0&&(kt=1),de.setLineWidth(kt*pn()),B.isLineSegments?lt.setMode(D.LINES):B.isLineLoop?lt.setMode(D.LINE_LOOP):lt.setMode(D.LINE_STRIP)}else B.isPoints?lt.setMode(D.POINTS):B.isSprite&&lt.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))lt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let kt=B._multiDrawStarts,Ae=B._multiDrawCounts,Wt=B._multiDrawCount,nt=ye?v.get(ye).bytesPerElement:1,wi=De.get(F).currentProgram.getUniforms();for(let zt=0;zt<Wt;zt++)wi.setValue(D,"_gl_DrawID",zt),lt.render(kt[zt]/nt,Ae[zt])}else if(B.isInstancedMesh)lt.renderInstances(we,Mt,B.count);else if(z.isInstancedBufferGeometry){let kt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ae=Math.min(z.instanceCount,kt);lt.renderInstances(we,Mt,Ae)}else lt.render(we,Mt)};function yc(M,L,z,F){N!==null&&M.isNodeMaterial&&N.setObject(F,M),wt===!0&&Z.setState(M,z,!1),M.transparent===!0&&M.side===kn&&M.forceSinglePass===!1?(M.side=Zt,M.needsUpdate=!0,Es(M,L,F),M.side=_i,M.needsUpdate=!0,Es(M,L,F),M.side=kn):Es(M,L,F)}this.compile=function(M,L,z=null){z===null&&(z=M),N!==null&&N.renderStart(M,L,z),E=q.get(z),E.init(L),T.push(E),z.traverseVisible(function(B){B.isLight&&B.layers.test(L.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),M!==z&&M.traverseVisible(function(B){B.isLight&&B.layers.test(L.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),Jt=this.localClippingEnabled,wt=Z.init(this.clippingPlanes,Jt),wt===!0&&Z.setGlobalState(this.clippingPlanes,L),N!==null&&le.render(E.state.shadowsArray,z,L);let F=new Set;return M.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let fe=B.material;if(fe)if(Array.isArray(fe))for(let Se=0;Se<fe.length;Se++){let he=fe[Se];yc(he,z,L,B),F.add(he)}else yc(fe,z,L,B),F.add(fe)}),E=T.pop(),N!==null&&N.renderEnd(),F},this.compileAsync=function(M,L,z=null){let F=this.compile(M,L,z);return new Promise(B=>{function fe(){if(F.forEach(function(Se){let ye=De.get(Se).currentProgram;(ye===void 0||ye.isReady())&&F.delete(Se)}),F.size===0){B(M);return}setTimeout(fe,10)}ut.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Uo=null;function df(M){Uo&&Uo(M)}function Mc(){Ti.stop()}function bc(){Ti.start()}let Ti=new uu;Ti.setAnimationLoop(df),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(M){Uo=M,se.setAnimationLoop(M),M===null?Ti.stop():Ti.start()},se.addEventListener("sessionstart",Mc),se.addEventListener("sessionend",bc),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(M,L);let z=se.enabled===!0&&se.isPresenting===!0,F=U!==null&&(ie===null||z)&&U.begin(C,ie);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(L),L=se.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,L,ie),E=q.get(M,T.length),E.init(L),E.state.textureUnits=ke.getTextureUnits(),T.push(E),pt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?Ft.setFromArrayCamera(L):Je.setFromProjectionMatrix(pt,_n,L.reversedDepth),Jt=this.localClippingEnabled,wt=Z.init(this.clippingPlanes,Jt),S=ue.get(M,x.length),S.init(),x.push(S),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){let Se=C.xr.getDepthSensingMesh();Se!==null&&Fo(Se,L,-1/0,C.sortObjects)}Fo(M,L,0,C.sortObjects),S.finish(),N!==null&&N.updateLights(E.state.lightsArray),C.sortObjects===!0&&S.sort(He,yt),dn=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,dn&&R.addToRenderList(S,M),this.info.autoReset===!0&&this.info.reset(),wt===!0&&Z.beginShadows();let B=E.state.shadowsArray;if(le.render(B,M,L),wt===!0&&Z.endShadows(),(F&&U.hasRenderPass())===!1){let Se=S.opaque,he=S.transmissive;if(E.setupLights(),L.isArrayCamera){let ye=L.cameras;if(he.length>0)for(let Re=0,Ve=ye.length;Re<Ve;Re++){let Ke=ye[Re];Tc(Se,he,M,Ke)}dn&&R.render(M);for(let Re=0,Ve=ye.length;Re<Ve;Re++){let Ke=ye[Re];Sc(S,M,Ke,Ke.viewport)}}else he.length>0&&Tc(Se,he,M,L),dn&&R.render(M),Sc(S,M,L)}ie!==null&&H===0&&(ke.updateMultisampleRenderTarget(ie),ke.updateRenderTargetMipmap(ie)),F&&U.end(C),M.isScene===!0&&M.onAfterRender(C,M,L),oe.resetDefaultState(),X=-1,j=null,T.pop(),T.length>0?(E=T[T.length-1],ke.setTextureUnits(E.state.textureUnits),wt===!0&&Z.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?S=x[x.length-1]:S=null,N!==null&&N.renderEnd()};function Fo(M,L,z,F){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){let Se=L.isArrayCamera?Ft:Je;if(!M.frustumCulled||M.intersectsFrustum(Se)){F&&It.setFromMatrixPosition(M.matrixWorld).applyMatrix4(pt);let he=ne.update(M),ye=M.material;ye.visible&&S.push(M,he,ye,z,It.z,null,L)}}else if(M.isMesh||M.isLine||M.isPoints){let Se=L.isArrayCamera?Ft:Je;if(!M.frustumCulled||M.intersectsFrustum(Se)){let he=ne.update(M),ye=M.material;if(F&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),It.copy(M.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),It.copy(he.boundingSphere.center)),It.applyMatrix4(M.matrixWorld).applyMatrix4(pt)),Array.isArray(ye)){let Re=he.groups;for(let Ve=0,Ke=Re.length;Ve<Ke;Ve++){let we=Re[Ve],$e=ye[we.materialIndex];$e&&$e.visible&&S.push(M,he,$e,z,It.z,we,L)}}else ye.visible&&S.push(M,he,ye,z,It.z,null,L)}}}let fe=M.children;for(let Se=0,he=fe.length;Se<he;Se++)Fo(fe[Se],L,z,F)}function Sc(M,L,z,F){let{opaque:B,transmissive:fe,transparent:Se}=M;E.setupLightsView(z),wt===!0&&Z.setGlobalState(C.clippingPlanes,z),F&&de.viewport(te.copy(F)),B.length>0&&Tr(B,L,z),fe.length>0&&Tr(fe,L,z),Se.length>0&&Tr(Se,L,z),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Tc(M,L,z,F){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[F.id]===void 0){let we=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[F.id]=new qt(1,1,{generateMipmaps:!0,type:we?Cn:cn,minFilter:An,samples:Math.max(4,ft.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}let fe=E.state.transmissionRenderTarget[F.id],Se=F.viewport||te;fe.setSize(Se.z*C.transmissionResolutionScale,Se.w*C.transmissionResolutionScale);let he=C.getRenderTarget(),ye=C.getActiveCubeFace(),Re=C.getActiveMipmapLevel();C.setRenderTarget(fe),C.getClearColor(J),xe=C.getClearAlpha(),xe<1&&C.setClearColor(16777215,.5),C.clear(),dn&&R.render(z);let Ve=C.toneMapping;C.toneMapping=zn;let Ke=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),E.setupLightsView(F),wt===!0&&Z.setGlobalState(C.clippingPlanes,F),Tr(M,z,F),ke.updateMultisampleRenderTarget(fe),ke.updateRenderTargetMipmap(fe),ut.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let $e=0,Mt=L.length;$e<Mt;$e++){let ct=L[$e],{object:lt,geometry:kt,material:Ae,group:Wt}=ct;if(Ae.side===kn&&lt.layers.test(F.layers)){let nt=Ae.side;Ae.side=Zt,Ae.needsUpdate=!0,wc(lt,z,F,kt,Ae,Wt),Ae.side=nt,Ae.needsUpdate=!0,we=!0}}we===!0&&(ke.updateMultisampleRenderTarget(fe),ke.updateRenderTargetMipmap(fe))}C.setRenderTarget(he,ye,Re),C.setClearColor(J,xe),Ke!==void 0&&(F.viewport=Ke),C.toneMapping=Ve}function Tr(M,L,z){let F=L.isScene===!0?L.overrideMaterial:null;for(let B=0,fe=M.length;B<fe;B++){let Se=M[B],{object:he,geometry:ye,group:Re}=Se,Ve=Se.material;Ve.allowOverride===!0&&F!==null&&(Ve=F),he.layers.test(z.layers)&&wc(he,L,z,ye,Ve,Re)}}function wc(M,L,z,F,B,fe){N!==null&&B.isNodeMaterial&&N.setObject(M,B),M.onBeforeRender(C,L,z,F,B,fe),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(C,L,z,F,M,fe),B.transparent===!0&&B.side===kn&&B.forceSinglePass===!1?(B.side=Zt,B.needsUpdate=!0,C.renderBufferDirect(z,L,F,B,M,fe),B.side=_i,B.needsUpdate=!0,C.renderBufferDirect(z,L,F,B,M,fe),B.side=kn):C.renderBufferDirect(z,L,F,B,M,fe),M.onAfterRender(C,L,z,F,B,fe)}function Ac(M){let L=0;for(let z of M)z.texture!==null&&L++;return L}function Es(M,L,z){L.isScene!==!0&&(L=fn);let F=De.get(M),B=E.state.lights,fe=E.state.shadowsArray,Se=B.state.version,he=Q.getParameters(M,B.state,fe,L,z,E.state.lightProbeGridArray),ye=Q.getProgramCacheKey(he),Re=F.programs;F.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?L.environment:null,F.fog=L.fog;let Ve=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;F.envMap=A.get(M.envMap||F.environment,Ve),F.envMapRotation=F.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Re===void 0&&(M.addEventListener("dispose",rt),Re=new Map,F.programs=Re,F.programVariants=new Map);let Ke=Re.get(ye);if(Ke!==void 0){if(F.currentProgram===Ke&&F.lightsStateVersion===Se)return Rc(M,he),Ke}else he.uniforms=Q.getUniforms(M),N!==null&&M.isNodeMaterial&&N.build(M,z,he),M.onBeforeCompile(he,C),Ke=Q.acquireProgram(he,ye),Re.set(ye,Ke),F.uniforms=he.uniforms;let we=F.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(we.clippingPlanes=Z.uniform),Rc(M,he),F.needsLights=_f(M),F.lightsStateVersion=Se,F.needsLights&&(we.ambientLightColor.value=B.state.ambient,we.lightProbe.value=B.state.probe,we.sunLights.value=B.state.sun,we.sunLightShadows.value=B.state.sunShadow,we.directionalLights.value=B.state.directional,we.directionalLightShadows.value=B.state.directionalShadow,we.spotLights.value=B.state.spot,we.spotLightShadows.value=B.state.spotShadow,we.rectAreaLights.value=B.state.rectArea,we.ltc_1.value=B.state.rectAreaLTC1,we.ltc_2.value=B.state.rectAreaLTC2,we.pointLights.value=B.state.point,we.pointLightShadows.value=B.state.pointShadow,we.hemisphereLights.value=B.state.hemi,we.sunShadowMatrix.value=B.state.sunShadowMatrix,we.sunShadowCascade.value=B.state.sunShadowCascade,we.directionalShadowMatrix.value=B.state.directionalShadowMatrix,we.spotLightMatrix.value=B.state.spotLightMatrix,we.spotLightMap.value=B.state.spotLightMap,we.pointShadowMatrix.value=B.state.pointShadowMatrix),F.numLightProbeGrids=Ac(E.state.lightProbeGridArray),F.currentProgram=Ke,F.uniformsList=null,Ke}function pf(M,L,z,F,B){let fe=De.get(M),Se=fe.currentProgram.id+","+F+","+B,he=fe.programVariants.get(Se);return he===void 0?(he=Es(M,L,z),fe.programVariants.set(Se,he)):(fe.currentProgram=he,fe.uniformsList=null,fe.outputColorSpace=F,fe.toneMapping=B),he}function Ec(M){if(M.uniformsList===null){let L=M.currentProgram.getUniforms();M.uniformsList=ms.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Rc(M,L){let z=De.get(M);z.outputColorSpace=L.outputColorSpace,z.batching=L.batching,z.batchingColor=L.batchingColor,z.instancing=L.instancing,z.instancingColor=L.instancingColor,z.instancingMorph=L.instancingMorph,z.skinning=L.skinning,z.morphTargets=L.morphTargets,z.morphNormals=L.morphNormals,z.morphColors=L.morphColors,z.morphTargetsCount=L.morphTargetsCount,z.numClippingPlanes=L.numClippingPlanes,z.numIntersection=L.numClipIntersection,z.vertexAlphas=L.vertexAlphas,z.vertexTangents=L.vertexTangents,z.toneMapping=L.toneMapping}function mf(M,L,z,F,B){L.isScene!==!0&&(L=fn),ke.resetTextureUnits();let fe=L.fog,Se=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?L.environment:null,he=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ye.workingColorSpace,ye=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Re=A.get(F.envMap||Se,ye),Ve=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ke=!!z.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),we=!!z.morphAttributes.position,$e=!!z.morphAttributes.normal,Mt=!!z.morphAttributes.color,ct=zn;F.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ct=C.toneMapping);let lt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,kt=lt!==void 0?lt.length:0,Ae=De.get(F),Wt=E.state.lights;if(wt===!0&&(Jt===!0||M!==j)){let mt=M===j&&F.id===X;Z.setState(F,M,mt)}let nt=!1,wi=!1;F.version===Ae.__version?Ae.needsLights&&Ae.lightsStateVersion!==Wt.state.version||B.isBatchedMesh&&Ae.batching===!1||!B.isBatchedMesh&&Ae.batching===!0||B.isBatchedMesh&&Ae.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&Ae.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&Ae.instancing===!1||!B.isInstancedMesh&&Ae.instancing===!0||B.isSkinnedMesh&&Ae.skinning===!1||!B.isSkinnedMesh&&Ae.skinning===!0||B.isInstancedMesh&&Ae.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ae.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ae.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ae.instancingMorph===!1&&B.morphTexture!==null||Ae.envMap!==Re||F.fog===!0&&Ae.fog!==fe||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Z.numPlanes||Ae.numIntersection!==Z.numIntersection)||Ae.vertexAlphas!==Ve||Ae.vertexTangents!==Ke||Ae.morphTargets!==we||Ae.morphNormals!==$e||Ae.morphColors!==Mt||Ae.morphTargetsCount!==kt||Ae.numLightProbeGrids!==Ac(E.state.lightProbeGridArray)?nt=!0:(Ae.outputColorSpace!==he||Ae.toneMapping!==ct)&&(wi=!0):(nt=!0,Ae.__version=F.version);let zt=Ae.currentProgram;(nt===!0||wi===!0)&&(zt=wi===!0?pf(F,L,B,he,ct):Es(F,L,B),N&&F.isNodeMaterial&&N.onUpdateProgram(F,zt,Ae));let wr=!1,si=!1,Ai=!1,et=zt.getUniforms(),Ot=Ae.uniforms;if(de.useProgram(zt.program)&&(wr=!0,si=!0,Ai=!0),F.id!==X&&(X=F.id,si=!0),wr||j!==M){de.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),et.setValue(D,"projectionMatrix",M.projectionMatrix),et.setValue(D,"viewMatrix",M.matrixWorldInverse);let Dt=et.map.cameraPosition;Dt!==void 0&&Dt.setValue(D,Ln.setFromMatrixPosition(M.matrixWorld)),ft.logarithmicDepthBuffer&&et.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&et.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,si=!0,Ai=!0)}if(Ae.needsLights&&(Wt.state.sunShadowMap.length>0&&et.setValue(D,"sunShadowMap",Wt.state.sunShadowMap,ke),Wt.state.directionalShadowMap.length>0&&et.setValue(D,"directionalShadowMap",Wt.state.directionalShadowMap,ke),Wt.state.spotShadowMap.length>0&&et.setValue(D,"spotShadowMap",Wt.state.spotShadowMap,ke),Wt.state.pointShadowMap.length>0&&et.setValue(D,"pointShadowMap",Wt.state.pointShadowMap,ke)),B.isSkinnedMesh){et.setOptional(D,B,"bindMatrix"),et.setOptional(D,B,"bindMatrixInverse");let mt=B.skeleton;mt&&(mt.boneTexture===null&&mt.computeBoneTexture(),et.setValue(D,"boneTexture",mt.boneTexture,ke))}B.isBatchedMesh&&(et.setOptional(D,B,"batchingTexture"),et.setValue(D,"batchingTexture",B._matricesTexture,ke),et.setOptional(D,B,"batchingIdTexture"),et.setValue(D,"batchingIdTexture",B._indirectTexture,ke),et.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&et.setValue(D,"batchingColorTexture",B._colorsTexture,ke));let yn=z.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&K.update(B,z,zt),(si||Ae.receiveShadow!==B.receiveShadow)&&(Ae.receiveShadow=B.receiveShadow,et.setValue(D,"receiveShadow",B.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&L.environment!==null&&(Ot.envMapIntensity.value=L.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=Gg()),si){if(et.setValue(D,"toneMappingExposure",C.toneMappingExposure),Ae.needsLights&&gf(Ot,Ai),fe&&F.fog===!0&&ae.refreshFogUniforms(Ot,fe),ae.refreshMaterialUniforms(Ot,F,ve,Le,E.state.transmissionRenderTarget[M.id]),Ae.needsLights&&Ae.numLightProbeGrids>0){let mt=b,Dt=0;for(let Wn of E.state.lightProbeGridArray)Wn.texture!==null&&(mt.textures[Dt]=Wn.texture,mt.min[Dt]=Wn.boundingBox.min,mt.max[Dt]=Wn.boundingBox.max,mt.resolution[Dt]=Wn.resolution,Dt++);for(let Wn in mt)mt[Wn].length=Dt;Ot.probesSH.value=mt.textures,Ot.probesMin.value=mt.min,Ot.probesMax.value=mt.max,Ot.probesResolution.value=mt.resolution}ms.upload(D,Ec(Ae),Ot,ke)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ms.upload(D,Ec(Ae),Ot,ke),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&et.setValue(D,"center",B.center),et.setValue(D,"modelViewMatrix",B.modelViewMatrix),et.setValue(D,"normalMatrix",B.normalMatrix),et.setValue(D,"modelMatrix",B.matrixWorld),F.uniformsGroups!==void 0){let mt=F.uniformsGroups;for(let Dt=0,Wn=mt.length;Dt<Wn;Dt++){let Pc=mt[Dt];Pe.update(Pc,zt),Pe.bind(Pc,zt)}}return zt}function gf(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.sunLights.needsUpdate=L,M.sunLightShadows.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function _f(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(M,L,z){let F=De.get(M);F.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),De.get(M.texture).__webglTexture=L,De.get(M.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:z,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){let z=De.get(M);z.__webglFramebuffer=L,z.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,z=0){ie=M,Y=L,H=z;let F=null,B=!1,fe=!1;if(M){let he=De.get(M);if(he.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(D.FRAMEBUFFER,he.__webglFramebuffer),te.copy(M.viewport),Ee.copy(M.scissor),Ge=M.scissorTest,de.viewport(te),de.scissor(Ee),de.setScissorTest(Ge),X=-1;return}else if(he.__webglFramebuffer===void 0)ke.setupRenderTarget(M);else if(he.__hasExternalTextures)ke.rebindTextures(M,De.get(M.texture).__webglTexture,De.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ve=M.depthTexture;if(he.__boundDepthTexture!==Ve){if(Ve!==null&&De.has(Ve)&&(M.width!==Ve.image.width||M.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(M)}}let ye=M.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(fe=!0);let Re=De.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Re[L])?F=Re[L][z]:F=Re[L],B=!0):M.samples>0&&ke.useMultisampledRTT(M)===!1?F=De.get(M).__webglMultisampledFramebuffer:Array.isArray(Re)?F=Re[z]:F=Re,te.copy(M.viewport),Ee.copy(M.scissor),Ge=M.scissorTest}else te.copy(Ne).multiplyScalar(ve).floor(),Ee.copy(st).multiplyScalar(ve).floor(),Ge=ot;if(z!==0&&(F=V),de.bindFramebuffer(D.FRAMEBUFFER,F)&&de.drawBuffers(M,F),de.viewport(te),de.scissor(Ee),de.setScissorTest(Ge),B){let he=De.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,he.__webglTexture,z)}else if(fe){let he=L;for(let ye=0;ye<M.textures.length;ye++){let Re=De.get(M.textures[ye]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ye,Re.__webglTexture,z,he)}}else if(M!==null&&z!==0){let he=De.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,he.__webglTexture,z)}X=-1};function Cc(M){let L=De.get(M);return(L.__readFormat!==M.format||L.__readType!==M.type)&&(L.__readFormat=M.format,L.__readType=M.type,L.__formatReadable=ft.textureFormatReadable(M.format),L.__typeReadable=ft.textureTypeReadable(M.type)),L}this.readRenderTargetPixels=function(M,L,z,F,B,fe,Se,he=0){if(!(M&&M.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=De.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(ye=ye[Se],Array.isArray(ye)&&(ye=ye[0])),ye){de.bindFramebuffer(D.FRAMEBUFFER,ye);try{let Re=M.textures[he],Ve=Re.format,Ke=Re.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he);let we=Cc(Re);if(we.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-F&&z>=0&&z<=M.height-B&&D.readPixels(L,z,F,B,re.convert(Ve),re.convert(Ke),fe)}finally{let Re=ie!==null?De.get(ie).__webglFramebuffer:null;de.bindFramebuffer(D.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(M,L,z,F,B,fe,Se,he=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=De.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(ye=ye[Se],Array.isArray(ye)&&(ye=ye[0])),ye)if(L>=0&&L<=M.width-F&&z>=0&&z<=M.height-B){de.bindFramebuffer(D.FRAMEBUFFER,ye);let Re=M.textures[he],Ve=Re.format,Ke=Re.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he);let we=Cc(Re);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,$e),D.bufferData(D.PIXEL_PACK_BUFFER,fe.byteLength,D.STREAM_READ),D.readPixels(L,z,F,B,re.convert(Ve),re.convert(Ke),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Mt=ie!==null?De.get(ie).__webglFramebuffer:null;de.bindFramebuffer(D.FRAMEBUFFER,Mt);let ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Oh(D,ct,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,$e),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,fe),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer($e),D.deleteSync(ct),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,z=0){let F=Math.pow(2,-z),B=Math.floor(M.image.width*F),fe=Math.floor(M.image.height*F),Se=L!==null?L.x:0,he=L!==null?L.y:0;ke.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,Se,he,B,fe),de.unbindTexture()},this.copyTextureToTexture=function(M,L,z=null,F=null,B=0,fe=0){let Se,he,ye,Re,Ve,Ke,we,$e,Mt,ct=M.isCompressedTexture?M.mipmaps[fe]:M.image;if(z!==null)Se=z.max.x-z.min.x,he=z.max.y-z.min.y,ye=z.isBox3?z.max.z-z.min.z:1,Re=z.min.x,Ve=z.min.y,Ke=z.isBox3?z.min.z:0;else{let et=Math.pow(2,-B);Se=Math.floor(ct.width*et),he=Math.floor(ct.height*et),M.isDataArrayTexture?ye=ct.depth:M.isData3DTexture?ye=Math.floor(ct.depth*et):ye=1,Re=0,Ve=0,Ke=0}F!==null?(we=F.x,$e=F.y,Mt=F.z):(we=0,$e=0,Mt=0);let lt=re.convert(L.format),kt=re.convert(L.type),Ae;L.isData3DTexture?(ke.setTexture3D(L,0),Ae=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(ke.setTexture2DArray(L,0),Ae=D.TEXTURE_2D_ARRAY):(ke.setTexture2D(L,0),Ae=D.TEXTURE_2D),de.activeTexture(D.TEXTURE0),de.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),de.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),de.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);let Wt=de.getParameter(D.UNPACK_ROW_LENGTH),nt=de.getParameter(D.UNPACK_IMAGE_HEIGHT),wi=de.getParameter(D.UNPACK_SKIP_PIXELS),zt=de.getParameter(D.UNPACK_SKIP_ROWS),wr=de.getParameter(D.UNPACK_SKIP_IMAGES);de.pixelStorei(D.UNPACK_ROW_LENGTH,ct.width),de.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ct.height),de.pixelStorei(D.UNPACK_SKIP_PIXELS,Re),de.pixelStorei(D.UNPACK_SKIP_ROWS,Ve),de.pixelStorei(D.UNPACK_SKIP_IMAGES,Ke);let si=M.isDataArrayTexture||M.isData3DTexture,Ai=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){let et=De.get(M),Ot=De.get(L),yn=De.get(et.__renderTarget),mt=De.get(Ot.__renderTarget);de.bindFramebuffer(D.READ_FRAMEBUFFER,yn.__webglFramebuffer),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let Dt=0;Dt<ye;Dt++)si&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,De.get(M).__webglTexture,B,Ke+Dt),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,De.get(L).__webglTexture,fe,Mt+Dt)),D.blitFramebuffer(Re,Ve,Re+Se,Ve+he,we,$e,we+Se,$e+he,D.DEPTH_BUFFER_BIT,D.NEAREST);de.bindFramebuffer(D.READ_FRAMEBUFFER,null),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||M.isRenderTargetTexture||De.has(M)){let et=De.get(M),Ot=De.get(L);de.bindFramebuffer(D.READ_FRAMEBUFFER,P),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,k);for(let yn=0;yn<ye;yn++)si?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,et.__webglTexture,B,Ke+yn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,et.__webglTexture,B),Ai?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ot.__webglTexture,fe,Mt+yn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ot.__webglTexture,fe),B!==0?D.blitFramebuffer(Re,Ve,Re+Se,Ve+he,we,$e,we+Se,$e+he,D.COLOR_BUFFER_BIT,D.NEAREST):Ai?D.copyTexSubImage3D(Ae,fe,we,$e,Mt+yn,Re,Ve,Se,he):D.copyTexSubImage2D(Ae,fe,we,$e,Re,Ve,Se,he);de.bindFramebuffer(D.READ_FRAMEBUFFER,null),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ai?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Ae,fe,we,$e,Mt,Se,he,ye,lt,kt,ct.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(Ae,fe,we,$e,Mt,Se,he,ye,lt,ct.data):D.texSubImage3D(Ae,fe,we,$e,Mt,Se,he,ye,lt,kt,ct):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,fe,we,$e,Se,he,lt,kt,ct.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,fe,we,$e,ct.width,ct.height,lt,ct.data):D.texSubImage2D(D.TEXTURE_2D,fe,we,$e,Se,he,lt,kt,ct);de.pixelStorei(D.UNPACK_ROW_LENGTH,Wt),de.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),de.pixelStorei(D.UNPACK_SKIP_PIXELS,wi),de.pixelStorei(D.UNPACK_SKIP_ROWS,zt),de.pixelStorei(D.UNPACK_SKIP_IMAGES,wr),fe===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&D.generateMipmap(Ae),de.unbindTexture()},this.initRenderTarget=function(M){De.get(M).__webglFramebuffer===void 0&&ke.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ke.setTextureCube(M,0):M.isData3DTexture?ke.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ke.setTexture2DArray(M,0):ke.setTexture2D(M,0),de.unbindTexture()},this.resetState=function(){Y=0,H=0,ie=null,de.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ye._getUnpackColorSpace()}};var Mo=`varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }
`;var bu=`uniform float uTime, uEnergy, uDim, uAspect, uKick;
uniform vec3 uTint, uTint2;
uniform vec2 uShift;
varying vec2 vUv;
float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
float fbm(vec2 p){ float a = .5, s = 0.; for (int i = 0; i < 5; i++){ s += a * noise(p); p = p * 2.03 + 11.7; a *= .5; } return s; }
void main(){
  vec2 p = (vUv - .5) * vec2(uAspect, 1.);
  float t = uTime * .035;
  float n = fbm(p * 1.4 + vec2(t, -t * .6) + uShift * .15);
  float n2 = fbm(p * 2.8 + vec2(-t * 1.3, t) + n * 1.5);
  vec3 col = mix(uTint, uTint2, smoothstep(.3, .8, n)) * (.06 + .6 * n2 * n2) * uEnergy;
  float d = length(p - vec2(0., -.2));
  col += uTint * .16 * exp(-d * d * 2.2) * uEnergy * (1. + uKick);
  // faint dot grid for depth
  vec2 gp = fract(p * 24. + uShift * .5) - .5;
  col += uTint * .035 * smoothstep(.06, .0, length(gp)) * uEnergy;
  col *= 1. - uDim;
  gl_FragColor = vec4(col, 1.);
}
`;var Su=`attribute vec4 aSeed;
uniform float uTime, uKick, uPx, uEnergy;
uniform vec2 uShift;
varying float vA;
void main(){
  float z = aSeed.z;
  float sp = .012 + .04 * z;
  vec2 p;
  p.x = fract(aSeed.x + uShift.x * (.03 + .09 * z) + sin(uTime * .15 + aSeed.w * 6.28) * .01) * 2. - 1.;
  p.y = fract(aSeed.y + uTime * sp * (1. + uKick * 3.) + uShift.y * (.03 + .09 * z)) * 2. - 1.;
  gl_Position = vec4(p, 0., 1.);
  gl_PointSize = (1.2 + 3.4 * z) * uPx * (1. + uKick * .8);
  vA = (.18 + .8 * z) * (.45 + .55 * sin(uTime * (.6 + aSeed.w * 2.) + aSeed.w * 40.)) * uEnergy;
}
`;var Tu=`uniform vec3 uTint;
varying float vA;
void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .0, d) * vA; gl_FragColor = vec4(uTint * 1.4, a); }
`;var wu=`uniform sampler2D tA, tB;
uniform float uP, uTime, uAspect;
uniform int uType;
uniform vec3 uAccent;
varying vec2 vUv;
float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
float fbm(vec2 p){ float a = .5, s = 0.; for (int i = 0; i < 4; i++){ s += a * noise(p); p = p * 2.03 + 7.3; a *= .5; } return s; }
vec4 S(sampler2D t, vec2 uv){
  if (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) return vec4(0.);
  vec4 c = texture2D(t, uv); c.rgb *= c.a; return c;
}
vec4 over(vec4 a, vec4 b){ return b + a * (1. - b.a); }
void main(){
  vec2 uv = vUv; vec4 col = vec4(0.); float glow = 0.;
  if (uType == 0) { col = S(tB, uv); }
  else if (uType == 1) { // iris: new scene opens as a glowing circle, old one is pushed outward
    vec2 q = (uv - .5) * vec2(uAspect, 1.);
    float r = length(q), R = pow(uP, .85) * 1.4;
    float edge = r - R; vec2 dir = q / (r + 1e-4);
    float ring = exp(-abs(edge) * 16.);
    vec2 uvA = uv - dir * ring * .035 * vec2(1. / uAspect, 1.);
    uvA = .5 + (uvA - .5) * (1. - .12 * uP);
    vec2 uvB = .5 + (uv - .5) * (1.12 - .12 * uP);
    float m = smoothstep(.012, -.012, edge);
    col = mix(S(tA, uvA), S(tB, uvB), m); glow = ring * (1. - uP * .5);
  }
  else if (uType == 2) { // tear: jagged seam sweeps across, old scene slides off, new one settles in
    float n = noise(vec2(uv.y * 26., 3.)) * .05 + noise(vec2(uv.y * 5., 9.)) * .1;
    float bx = uP * 1.5 - .25 + n + (uv.y - .5) * .28 * (1. - uP);
    float d = uv.x - bx;
    vec4 b = S(tB, .5 + (uv - .5) * (1.06 - .06 * uP) - vec2(.0, 0.));
    vec4 a = S(tA, uv - vec2(uP * .16, 0.));
    float shade = smoothstep(.0, .1, d);
    col = d < 0. ? b : a * (.35 + .65 * shade);
    glow = exp(-abs(d) * 60.) * (1. - abs(uP - .5) * 1.2);
  }
  else if (uType == 3) { // flaps: horizontal slats flip over, staggered
    float N = 8., row = floor(uv.y * N), fy = fract(uv.y * N);
    float loc = clamp((uP - row / N * .45) / .55, 0., 1.); loc = loc * loc * (3. - 2. * loc);
    float ang = loc * 3.14159265, cc = max(abs(cos(ang)), .001);
    float ny = (fy - .5) / cc + .5;
    vec2 suv = vec2(uv.x, (row + ny) / N);
    vec4 s = ang > 1.5708 ? S(tB, suv) : S(tA, suv);
    float inside = step(abs(ny - .5), .5);
    s *= inside * mix(.3, 1., cc);
    col = s; glow = inside * pow(1. - cc, 4.) * .35 * step(.001, uP) * step(uP, .999);
  }
  else if (uType == 4) { // slam: fly through the old scene, new one lands with a flash
    float e = uP * uP * uP;
    vec2 c = uv - .5; float sA = 1. + e * 5.;
    vec4 a = vec4(0.);
    for (int i = 0; i < 6; i++) { float k = float(i) / 6.; a += S(tA, .5 + c / (sA * (1. + k * uP * .35))); }
    a /= 6.; a *= 1. - smoothstep(.35, .75, uP);
    float eb = 1. - pow(1. - uP, 3.);
    vec4 b = S(tB, .5 + c / mix(.55, 1., eb)); b *= smoothstep(.3, .7, uP);
    col = over(a, b); glow = exp(-pow((uP - .55) * 7., 2.)) * .9;
  }
  else { // 5 wash: noisy dissolve through black with a hot edge
    float n = fbm(uv * vec2(uAspect, 1.) * 3.5 + uTime * .05);
    float th = uP * 1.5 - .25; float m = smoothstep(th - .08, th + .08, n);
    col = mix(S(tB, uv), S(tA, uv), m); glow = exp(-abs(n - th) * 22.) * .7 * step(.001, uP) * step(uP, .999);
    col *= 1. - .35 * sin(uP * 3.14159);
  }
  col.rgb += uAccent * glow; col.a = clamp(max(col.a, glow * .9), 0., 1.);
  gl_FragColor = col;
}
`;var Au=`uniform sampler2D tScene;
uniform vec2 uRes;
uniform float uTime, uKick, uFade, uBloom;
varying vec2 vUv;
float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
void main(){
  vec2 c = vUv - .5; vec2 uv = c * (1. - uKick * .012) + .5;
  float ab = .0006 + uKick * .0045;
  vec3 col;
  col.r = texture2D(tScene, uv + c * ab * 2.).r; col.g = texture2D(tScene, uv).g; col.b = texture2D(tScene, uv - c * ab * 2.).b;
  vec3 b = textureLod(tScene, uv, 4.).rgb + textureLod(tScene, uv, 5.).rgb * 1.2 + textureLod(tScene, uv, 6.).rgb * 1.5 + textureLod(tScene, uv, 7.).rgb * 1.6;
  col += b / 5.3 * uBloom;
  col *= 1. - dot(c, c) * .85;
  col += (hash(vUv * uRes + fract(uTime)) - .5) * .028;
  col = pow(max(col, 0.), vec3(.97));
  gl_FragColor = vec4(col * uFade, 1.);
}
`;Ye.enabled=!1;var jl=t=>new Ze(t);function Eu(t,e,n){let i=new xo({canvas:t,antialias:!1,alpha:!1,powerPreference:"high-performance"});i.setClearColor(0,1);let s=new cs(-1,1,1,-1,0,1),r=new os,a=new Ui(2,2),o={uTime:{value:0},uEnergy:{value:.4},uDim:{value:0},uAspect:{value:16/9},uKick:{value:0},uTint:{value:jl("#ffb340")},uTint2:{value:jl("#ff6a3d")},uShift:{value:new je},uPx:{value:1}},l=new Qt(a,new Yt({vertexShader:Mo,fragmentShader:bu,uniforms:o,depthTest:!1,depthWrite:!1}));l.frustumCulled=!1,l.renderOrder=0,r.add(l);let c=2600,u=new Float32Array(c*3),f=new Float32Array(c*4),h=1234567,d=()=>(h=h*1664525+1013904223>>>0)/4294967296;for(let I=0;I<c;I++)f[I*4]=d(),f[I*4+1]=d(),f[I*4+2]=Math.pow(d(),2.2),f[I*4+3]=d();let p=new wn;p.setAttribute("position",new an(u,3)),p.setAttribute("aSeed",new an(f,4));let _=new Xs(p,new Yt({vertexShader:Su,fragmentShader:Tu,uniforms:o,transparent:!0,depthTest:!1,depthWrite:!1,blending:js}));_.frustumCulled=!1,_.renderOrder=1,r.add(_);let m=I=>{let N=new Ys(I);return N.generateMinFilter=!1,N.generateMipmaps=!1,N.minFilter=Rt,N.magFilter=Rt,N},g=m(e),y=m(n),w={tA:{value:g},tB:{value:y},uP:{value:1},uType:{value:0},uTime:o.uTime,uAspect:o.uAspect,uAccent:{value:jl("#ffb340")}},b=new Qt(a,new Yt({vertexShader:Mo,fragmentShader:wu,uniforms:w,transparent:!0,premultipliedAlpha:!0,depthTest:!1,depthWrite:!1}));b.frustumCulled=!1,b.renderOrder=2,r.add(b);let S=new qt(16,16,{generateMipmaps:!0,minFilter:An,magFilter:Rt,depthBuffer:!1}),E={tScene:{value:S.texture},uRes:{value:new je(1,1)},uTime:o.uTime,uKick:o.uKick,uFade:{value:1},uBloom:{value:.55}},x=new Qt(a,new Yt({vertexShader:Mo,fragmentShader:Au,uniforms:E,depthTest:!1,depthWrite:!1}));x.frustumCulled=!1;let T=new os;T.add(x);function U(I,N){let V=Math.min(window.devicePixelRatio||1,2);i.setPixelRatio(V),i.setSize(I,N,!1);let P=Math.round(I*V),k=Math.round(N*V);S.setSize(P,k),E.uRes.value.set(P,k),o.uAspect.value=I/N,o.uPx.value=V*N/1080}let C=new Ze;return{resize:U,U:o,TU:w,PU:E,resetTex(){g.dispose(),y.dispose()},frame(I,N,V,P,k){o.uTime.value=I,o.uKick.value=V,E.uFade.value=P,o.uTint.value.setRGB(N.tint[0],N.tint[1],N.tint[2]),o.uTint2.value.setRGB((N.tint2||N.tint)[0],(N.tint2||N.tint)[1],(N.tint2||N.tint)[2]),o.uEnergy.value=N.energy,o.uDim.value=N.dim,o.uShift.value.set(N.sx||0,N.sy||0),w.uAccent.value.setRGB(N.tint[0],N.tint[1],N.tint[2]),w.uType.value=k?k.type:0,w.uP.value=k?k.p:1,y.needsUpdate=!0,k&&(g.needsUpdate=!0),i.setRenderTarget(S),i.render(r,s),i.setRenderTarget(null),i.render(T,s)}}}function Ru(t,e,n){let i=t.getContext("2d",{alpha:!1}),s=16,r=9,a=Et(7),o=Array.from({length:140},()=>({x:a(),y:a(),z:Math.pow(a(),2),p:a()})),l=(h,d)=>"rgba("+Math.round(h[0]*255)+","+Math.round(h[1]*255)+","+Math.round(h[2]*255)+","+d+")";function c(h,d){let p=Math.min(devicePixelRatio||1,2);t.width=Math.round(h*p),t.height=Math.round(d*p),s=t.width,r=t.height}function u(h,d,p){i.fillStyle="#000",i.fillRect(0,0,s,r);let _=i.createRadialGradient(s/2,r*.65,0,s/2,r*.65,s*.6);_.addColorStop(0,l(d.tint,.2*d.energy*(1-d.dim*.6))),_.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=_,i.fillRect(0,0,s,r);for(let m of o){let g=((m.y-h*(.01+.03*m.z)*(1+p*3))%1+1)%1,y=(.15+.6*m.z)*(.5+.5*Math.sin(h*(.6+m.p*2)+m.p*40))*d.energy;i.fillStyle=l(d.tint,Math.max(0,y));let w=(1+2.6*m.z)*r/1080*1.6;i.fillRect(m.x*s,g*r,w,w)}}function f(h,d,p,_,m){u(h,d,p);let g=n.width,y=n.height;if(!m)i.drawImage(n,0,0,s,r);else{let w=m.p;if(i.save(),m.type===1){i.drawImage(e,0,0,s,r);let b=Math.pow(w,.85)*s*.78;i.save(),i.beginPath(),i.arc(s/2,r/2,b,0,7),i.clip(),i.drawImage(n,0,0,s,r),i.restore(),i.strokeStyle=l(d.tint,.9*(1-w)),i.lineWidth=8,i.shadowColor=l(d.tint,1),i.shadowBlur=40,i.beginPath(),i.arc(s/2,r/2,b,0,7),i.stroke()}else if(m.type===2){let b=Ce(-.2,1.2,w)*s,S=.12*s;i.save(),i.beginPath(),i.moveTo(b+S,0),i.lineTo(b-S,r),i.lineTo(s,r),i.lineTo(s,0),i.clip(),i.drawImage(e,w*.16*s,0,s,r),i.restore(),i.save(),i.beginPath(),i.moveTo(0,0),i.lineTo(b+S,0),i.lineTo(b-S,r),i.lineTo(0,r),i.clip(),i.drawImage(n,0,0,s,r),i.restore(),i.strokeStyle=l(d.tint,.9),i.lineWidth=6,i.shadowColor=l(d.tint,1),i.shadowBlur=30,i.beginPath(),i.moveTo(b+S,0),i.lineTo(b-S,r),i.stroke()}else if(m.type===4){let b=w*w*w;i.globalAlpha=1-$.io2(ee((w-.3)/.45));let S=1+b*5;i.drawImage(e,s/2-s*S/2,r/2-r*S/2,s*S,r*S),i.globalAlpha=ee((w-.3)/.4);let E=Ce(.55,1,$.out3(w));i.drawImage(n,s/2-s*E/2,r/2-r*E/2,s*E,r*E)}else if(m.type===3){let S=r/8;for(let E=0;E<8;E++){let x=$.io2(ee((w-E/8*.45)/.55)),T=x*Math.PI,U=Math.abs(Math.cos(T));U<.02||(i.save(),i.translate(0,E*S+S/2),i.scale(1,U),i.beginPath(),i.rect(0,-S/2,s,S),i.clip(),i.drawImage(T>Math.PI/2?n:e,0,-(E*S+S/2),s,r),i.restore())}}else i.globalAlpha=1-$.io2(ee(w*2)),i.drawImage(e,0,0,s,r),i.globalAlpha=$.io2(ee(w*2-1)),i.drawImage(n,0,0,s,r);i.restore()}_<1&&(i.fillStyle="rgba(0,0,0,"+(1-_)+")",i.fillRect(0,0,s,r))}return{resize:c,frame:f,fallback:!0}}var ze=null,vi=null,fr=null,pr=!1,dr=null;function _s(){if(ze){ze.state==="suspended"&&ze.resume();return}try{ze=new(window.AudioContext||window.webkitAudioContext)}catch{return}vi=ze.createGain(),vi.gain.value=pr?0:.5;let t=ze.createDynamicsCompressor();vi.connect(t),t.connect(ze.destination);let e=ze.createBuffer(2,ze.sampleRate*2.6,ze.sampleRate);for(let r=0;r<2;r++){let a=e.getChannelData(r);for(let o=0;o<a.length;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/a.length,3)}let n=ze.createConvolver();n.buffer=e,fr=ze.createGain(),fr.gain.value=.55,fr.connect(n),n.connect(vi);let i=ze.createBuffer(1,ze.sampleRate,ze.sampleRate),s=i.getChannelData(0);for(let r=0;r<s.length;r++)s[r]=Math.random()*2-1;_s.noise=i}function Iu(t){pr=t,vi&&vi.gain.setTargetAtTime(t?0:.5,ze.currentTime,.05)}var tc=()=>pr;function nc(t){dr&&ze&&dr.g.gain.setTargetAtTime(t?0:.07,ze.currentTime,.4)}var ic=(t,e)=>{t.connect(vi),e&&t.connect(fr)};function Lu(t,e,n,i,s){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(s,e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+n+i)}function Cu(t,e,n,i,s,r,a){let o=ze.createBufferSource();o.buffer=_s.noise;let l=ze.createBiquadFilter();l.type=r||"bandpass",l.frequency.value=n,l.Q.value=i;let c=ze.createGain();Lu(c,t,.002,e,s),o.connect(l),l.connect(c),ic(c,a),o.start(t,Math.random()),o.stop(t+e+.05)}function hn(t,e,n,i,s,r,a=!0){let o=ze.createOscillator();o.type=r||"sine",o.frequency.setValueAtTime(e,t),n&&o.frequency.exponentialRampToValueAtTime(n,t+i);let l=ze.createGain();Lu(l,t,.004,i,s),o.connect(l),ic(l,a),o.start(t),o.stop(t+i+.05)}var ec={key(){let t=ze.currentTime;Cu(t,.04,4200+Math.random()*2400,2.5,.2),hn(t,1900+Math.random()*300,null,.03,.05,"square",!1)},tick(t){let e=ze.currentTime;hn(e,(t||1400)*1.6,null,.05,.07,"triangle")},thud(){let t=ze.currentTime;hn(t,160,60,.35,.45),Cu(t,.12,1800,.7,.2,"bandpass",!0),hn(t,1046.5,null,.9,.05)},whoosh(){let t=ze.currentTime,e=ze.createBufferSource();e.buffer=_s.noise;let n=ze.createBiquadFilter();n.type="bandpass",n.Q.value=1.4,n.frequency.setValueAtTime(600,t),n.frequency.exponentialRampToValueAtTime(9e3,t+.5);let i=ze.createGain();i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.32,t+.22),i.gain.exponentialRampToValueAtTime(1e-4,t+.75),e.connect(n),n.connect(i),ic(i,!0),e.start(t,0),e.stop(t+.9),[1567.98,2093,2637].forEach((s,r)=>hn(t+.18+r*.07,s,null,.9,.04,"sine"))},pop(t){let e=ze.currentTime;hn(e,(t||520)*1.5,(t||520)*3,.08,.12)},chime(t){let e=ze.currentTime,n=1046.5*Math.pow(2,(t||0)/12);hn(e,n,null,1.6,.14),hn(e,n*2.005,null,1.1,.06),hn(e,n*3.01,null,.6,.03)},ding(){let t=ze.currentTime;hn(t,1760,null,.9,.12),hn(t,2637,null,.7,.06)},buzz(){let t=ze.currentTime;hn(t,220,180,.3,.14,"sawtooth",!1)},stamp(){ec.thud()}};function xs(t,e){if(!(!ze||pr||!ec[t]))try{ec[t](e)}catch{}}var Jg={cover:220,ledger:220,fruit:261.6,me:196,factory:293.7,copy:246.9,"ledger-again":220},Pu=[0,2,4,7,9,12,14,16];function sc(t){if(!ze)return;let e=ze.currentTime,n=Jg[t]||220;if(dr){let c=dr;clearInterval(c.iv),c.g.gain.setTargetAtTime(0,e,.6),setTimeout(()=>{try{c.os.forEach(u=>u.stop())}catch{}},3e3)}let i=ze.createGain();i.gain.value=0,i.gain.setTargetAtTime(.07,e,1.2);let s=ze.createBiquadFilter();s.type="lowpass",s.frequency.value=2200,s.Q.value=.7;let r=ze.createOscillator();r.frequency.value=.09;let a=ze.createGain();a.gain.value=900,r.connect(a),a.connect(s.frequency),r.start();let o=[r];[[1,"triangle",1],[1.25,"sine",.7],[1.5,"triangle",.8],[2,"sine",.4]].forEach(([c,u,f],h)=>{let d=ze.createOscillator(),p=ze.createGain();d.type=u,d.frequency.value=n*c*(1+(h%2?.003:-.003)),p.gain.value=f,d.connect(p),p.connect(s),d.start(),o.push(d)}),s.connect(i),i.connect(vi),i.connect(fr);let l=setInterval(()=>{if(!ze||pr||i.gain.value<.01)return;let c=n*4*Math.pow(2,Pu[Math.floor(Math.random()*Pu.length)]/12);hn(ze.currentTime,c,null,2.2,.025+Math.random()*.02)},1900);dr={os:o,g:i,iv:l}}function rc(){let t={beat:1,bt:0,st:0,time:0,silent:!1,fired:new Set,last:{},p(e,n,i,s){return t.beat>e?1:t.beat<e?0:(s||$.out3)(ee((t.bt-(n||0))/(i||.8)))},since(e){return t.beat>e?999:t.beat<e?-1:t.bt},on(e){return t.beat>=e},at(e){return t.beat===e},hit(e,n,i,s){if(t.silent||t.beat!==e||t.bt<n)return;let r=e+"/"+n+i;t.fired.has(r)||(t.fired.add(r),xs(i,s))},count(e,n,i,s,r){t.silent||t.beat!==e||t.last[n]!==i&&(t.last[n]!==void 0&&xs(s,r),t.last[n]=i)},setBeat(e,n,i){Math.abs(e-t.beat)===1&&t.beatAt!=null?(t.prevBeat=t.beat,t.prevT=n,t.prevBt=i||0):t.prevBeat=0,t.beat=e,t.beatAt=n,t.fired.clear(),t.last={}}};return t}function bo(t,e,n,i){let s=rc();return s.beat=t,s.bt=e,s.st=n??e+5,s.time=i||0,s.silent=!0,s}function Du(t,e,n){let i=0,s=!1,r=(h,d)=>new Promise((p,_)=>setTimeout(()=>d===i?p():_("cancel"),h)),a=h=>{s=h,t.style.opacity=h?1:0},o=(h,d)=>new Promise((p,_)=>{let m=()=>{t.removeEventListener("seeked",m),d===i?p():_("cancel")};t.addEventListener("seeked",m),t.currentTime=h});async function l(h){for(;;)try{await t.play(),n.classList.remove("on");return}catch{if(h!==i||(n.classList.add("on"),await new Promise(p=>{addEventListener("keydown",p,{once:!0}),addEventListener("pointerdown",p,{once:!0})}),h!==i))throw"cancel"}}let c=(h,d)=>new Promise((p,_)=>{let m=setInterval(()=>{d!==i?(clearInterval(m),_("cancel")):h()&&(clearInterval(m),p())},80)});function u(h,d,p){e.replaceChildren();let _=document.createElement("div");_.className="n",_.textContent=h+" / "+d;let m=document.createElement("div");m.className="t",m.textContent=p,e.append(_,m),e.classList.add("on")}async function f(h,d){let p=h.video;if(t.src.endsWith(p.src)||(t.src=p.src),t.preload="auto",t.currentTime=0,t.muted=!1,p.clips){let _=h.sayQuotes.slice(1);await r(p.intro*1e3,d);for(let m=0;m<p.clips.length;m++)u(m+1,p.clips.length,_[m]||""),await o(p.clips[m][0],d),await r((p.cardSecs[m]||3.3)*1e3,d),e.classList.remove("on"),await r(450,d),a(!0),await l(d),await c(()=>t.currentTime>=p.clips[m][1]||t.ended,d),t.pause(),a(!1),await r(500,d)}else await r((p.intro||2.5)*1e3,d),a(!0),await l(d),await c(()=>t.ended,d),a(!1)}return{enter(h){if(this.leave(),!h.video)return;f(h,i).catch(p=>{p!=="cancel"&&console.error("video",p)})},leave(){i++;try{t.pause()}catch{}a(!1),e.classList.remove("on"),n.classList.remove("on")},toggle(){s&&(t.paused?t.play():t.pause())},get playing(){return s},get waiting(){return n.classList.contains("on")}}}var ac=null;function $g(){ac=[0,1,2,3].map(t=>{let e=document.createElement("canvas");e.width=e.height=256;let n=e.getContext("2d"),i=n.createImageData(256,256),s=Et(t*99+7);for(let r=0;r<i.data.length;r+=4){let a=s()*255;i.data[r]=i.data[r+1]=i.data[r+2]=a,i.data[r+3]=20}return n.putImageData(i,0,0),e})}function So(t,e){ac||$g();let n=ac[Math.floor(e*24)%4];t.save(),t.globalCompositeOperation="overlay",t.fillStyle=t.createPattern(n,"repeat"),t.fillRect(0,0,1920,1080),t.restore()}function To(t,e){t.save(),t.fillStyle=Dn(t,1920/2,1080/2,1080*.32,1920*.72,[[0,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,"+(e??.8)+")"]]),t.fillRect(0,0,1920,1080),t.restore()}function yi(t,e,n,i,s,r){r<=0||(t.save(),t.globalCompositeOperation="lighter",t.globalAlpha=r,t.fillStyle=Dn(t,e,n,0,i,[[0,"rgba("+s+",1)"],[.45,"rgba("+s+",.35)"],[1,"rgba("+s+",0)"]]),t.fillRect(e-i,n-i,2*i,2*i),t.restore())}function wo(t,e,n,i,s,r,a){if(a<=0)return;let o=Et(i);t.save(),t.globalCompositeOperation="lighter";for(let l=0;l<n;l++){let c=o(),u=o(),f=.2+o()*.8,h=o()*6.283,d=.7+o()*2.4,p=s.x+((c+Math.sin(e*.23*f+h)*.02)%1+1)%1*s.w,_=s.y+((u-e*.008*f)%1+1)%1*s.h;t.globalAlpha=a*(.35+.65*Math.max(0,Math.sin(e*1.3*f+h))),t.fillStyle="rgb("+r+")",t.beginPath(),t.arc(p,_,d,0,6.283),t.fill()}t.restore()}function Ao(t,e,n){let i=n??1,s=1+.012*i*Math.sin(e*.11)+Math.min(e,90)*4e-4*i;t.translate(1920/2+Math.sin(e*.07)*10*i,1080/2+Math.cos(e*.09)*6*i),t.scale(s,s),t.translate(-1920/2,-1080/2)}var Hn=360,Mi=400,Qg=150,vs=92,mr="\u3000",jg=t=>t.charCodeAt(0)<8192?vs*.602:vs,Uu=t=>{let e=t.indexOf(mr);return e<0?["",t]:[t.slice(0,e),t.slice(e+1)]};function Fu(t,e,n,i){let s=null;return e.forEach((r,a)=>{let o=Mi+a*Qg;r.rule>0&&(t.save(),t.strokeStyle="rgba(255,179,64,.22)",t.lineWidth=2,t.beginPath(),t.moveTo(Hn-40,o+40),t.lineTo(Hn-40+1360*r.rule,o+40),t.stroke(),t.restore());let l=r.roll==null?r.value:Ei(r.value,r.roll),c=r.label+mr+l,u=Hn;for(let f=0;f<Math.min(r.n,c.length);f++){let h=c[f],d=h.charCodeAt(0)<8192,p=f<r.label.length;h!==" "&&h!==mr&&Me(t,h,u+0,o,{size:vs,mono:d,wt:700,fill:p?"#b98530":"#ffe2a6",glow:p?null:"rgba(255,179,64,.75)",gb:26}),u+=jg(h)}r.n>0&&(s={x:u,y:o})}),i&&s&&Vi(t,s.x+8,s.y-vs*.82,vs*.44,vs*.96,n,pe.amber),s}function Ou(t,e,n){return{rows:[2,3,4].map((s,r)=>{let[a,o]=Uu(e.q("ledger",s,0,["\u652F\u51FA\u3000\u6BCF\u6708 500 \u7F8E\u5143","\u6536\u5165\u300050 \u4E07","\u5458\u5DE5\u30001 \u4E2A\u4EBA"][r]));return{label:a,value:o,n:0,roll:null,rule:0}}),full:s=>s.label.length+1+s.value.length}}var jt=1320,un=660,Ms=1920/2-jt/2,uc=1080/2-un/2+20,oc=Ms+230,lc=uc+250,cc=158,ys=92,Nu=Ms+170,e_="#2b1a0b",t_="#7a5426",n_=t=>t.charCodeAt(0)<8192?ys*.602:ys,hc=null;function i_(){if(hc)return hc;let t=document.createElement("canvas");t.width=jt,t.height=un;let e=t.getContext("2d"),n=e.createLinearGradient(0,0,jt,un);n.addColorStop(0,"#f3e9d2"),n.addColorStop(1,"#e4d4b2"),e.fillStyle=n,e.fillRect(0,0,jt,un);let i=Et(42);for(let r=0;r<2600;r++)e.fillStyle="rgba(120,90,40,"+i()*.05+")",e.fillRect(i()*jt,i()*un,1+i()*3,1);for(let r=0;r<14;r++){let a=i()*jt,o=i()*un,l=40+i()*160,c=e.createRadialGradient(a,o,0,a,o,l);c.addColorStop(0,"rgba(150,110,50,.07)"),c.addColorStop(1,"rgba(150,110,50,0)"),e.fillStyle=c,e.fillRect(a-l,o-l,l*2,l*2)}e.strokeStyle="rgba(70,110,150,.28)",e.lineWidth=1.5;for(let r=120;r<un-30;r+=52)e.beginPath(),e.moveTo(30,r),e.lineTo(jt-30,r),e.stroke();e.strokeStyle="rgba(190,40,40,.55)",e.lineWidth=2;for(let r of[Nu-Ms-10,Nu-Ms])e.beginPath(),e.moveTo(r,0),e.lineTo(r,un),e.stroke();e.beginPath(),e.moveTo(0,90),e.lineTo(jt,90),e.moveTo(0,96),e.lineTo(jt,96),e.stroke();let s=e.createRadialGradient(jt/2,un/2,un*.3,jt/2,un/2,jt*.65);return s.addColorStop(0,"rgba(60,35,10,0)"),s.addColorStop(1,"rgba(60,35,10,.35)"),e.fillStyle=s,e.fillRect(0,0,jt,un),hc=t,t}function Bu(t){return[2,3,4].map((e,n)=>{let[i,s]=Uu(t.q("ledger",e,0,["\u652F\u51FA\u3000\u6BCF\u6708 500 \u7F8E\u5143","\u6536\u5165\u300050 \u4E07","\u5458\u5DE5\u30001 \u4E2A\u4EBA"][n]));return{label:i,value:s}})}function s_(t,e,n){let i=Bu(e),s=n.t||0;t.save(),t.translate(1920/2,1080/2),t.rotate(n.rot==null?-.018:n.rot),t.translate(-1920/2,-1080/2),t.save(),t.shadowColor="rgba(0,0,0,.8)",t.shadowBlur=60,t.shadowOffsetY=30,t.fillStyle="#000",t.fillRect(Ms+10,uc+14,jt-20,un-20),t.restore(),t.drawImage(i_(),Ms,uc);let r=null;if(i.forEach((a,o)=>{let l=lc+o*cc,c=n.shown[o]||0;if(!c)return;let u=o===1&&n.roll!=null?Ei(a.value,n.roll):a.value,f=a.label+mr+u,h=oc;for(let d=0;d<Math.min(c,f.length);d++){let p=f[d],_=p.charCodeAt(0)<8192,m=d<a.label.length;if(p!==" "&&p!==mr){let g=Et(o*97+d)()-.5;Me(t,p,h+g*3,l+g*4,{size:ys,mono:_,wt:700,fill:m?t_:e_,alpha:.82+g*.3})}h+=n_(p)}r={x:h,y:l}}),n.total>0){t.strokeStyle="rgba(43,26,11,.75)",t.lineWidth=4;for(let a of[66,78])t.beginPath(),t.moveTo(oc-30,lc+2*cc+a),t.lineTo(oc-30+1e3*n.total,lc+2*cc+a),t.stroke()}n.cursor&&r&&Vi(t,r.x+10,r.y-ys*.8,ys*.42,ys*.92,s,"rgba(43,26,11,.85)"),t.restore()}var r_={id:"ledger",theme(t){let e=t.beat;return{tint:"#ffb340",tint2:"#ff5a3d",energy:[0,.2,.25,.3,.6][e-1],dim:[1,.85,.8,.75,.2][e-1]}},draw(t,e,n){let i=Bu(n),s=e.beat,r=u=>i[u].label.length+1+i[u].value.length;t.fillStyle="#030201",t.fillRect(0,0,1920,1080);let a=s===1?Math.max(0,Math.sin(e.bt*23)*Math.sin(e.bt*7.3))*ee((e.bt-2.5)/1)*.12:0,o=s>=2?s===2?ee(e.bt/.25)*(1-.25*Math.max(0,Math.sin(e.bt*40))*ee(1-e.bt/.6)):1:a,l=e.p(5,.1,1.8,$.io3),c=1+.04*Math.sin(e.time*.9);if(s===2&&e.hit(2,.05,"pop",120),t.save(),Ao(t,e.st,1-l),yi(t,1920/2,1080/2-60,1150*c,"255,190,110",o*Ce(.55,.18,l)),o>0){let u=(p,_,m,g)=>s>p?r(g):s<p?0:Math.max(0,Math.floor((e.bt-_)*m)),f=[Math.min(r(0),u(2,.7,11,0)),Math.min(r(1),u(3,.3,12,1)),Math.min(r(2),u(4,.3,9,2))];e.count(2,"k",f[0],"key"),e.count(3,"k",f[1],"key"),e.count(4,"k",f[2],"key");let h=s>3?1:s<3?0:$.out3(ee((e.bt-.6)/2.6));e.count(3,"roll",Math.round(s===3?h*14:0),"tick",1500),t.save();let d=Ce(1,.3,l);t.globalAlpha=o*Ce(1,.55,l),t.translate(Ce(1920/2,330,l),Ce(1080/2,205,l)),t.scale(d,d),t.rotate(Ce(0,-.09,l)),t.translate(-1920/2,-1080/2),s_(t,n,{shown:f,roll:h,total:e.p(4,2.2,1.2,$.io2),cursor:s>=2&&s<=4,t:e.time}),t.restore(),wo(t,e.time,90,7,{x:1920/2-700,y:0,w:1400,h:1080},"255,214,150",o*.55*(1-l*.6))}if(t.restore(),s>=5){let u=n.q("ledger",5,0,"\u6211\u7528 Grok Bot \u8D5A\u94B1"),f=150,h={size:f,wt:700},d=at(t,u,h),p=1920/2-d/2+120,_=t.createLinearGradient(p,0,p+d,0);_.addColorStop(0,"#ffe2a6"),_.addColorStop(.5,"#fff7e6"),_.addColorStop(1,"#ffb340");let m=0;for(let w of u){let b=p+at(t,u.slice(0,m),h),S=$.out4(ee((e.bt-1.1-m*.06)/.9));m++,S>0&&Me(t,w,b,600+(1-S)*60,{size:f,fill:_,alpha:S,glow:"rgba(255,179,64,.45)",gb:50})}e.hit(5,1.1,"whoosh");let g=(n.byKey["ledger-5"].sayText.match(/我是(.{2,4}?)。/)||[])[1]||"",y=$.out3(ee((e.bt-2.6)/1));Me(t,g,1920/2+120,720,{size:52,wt:400,track:24+(1-y)*30,align:"center",fill:"rgba(244,241,234,"+y*.8+")"}),yi(t,1920/2+120,560,700,"255,170,80",.16*y*(1+.15*Math.sin(e.time*.8)))}To(t,.85),So(t,e.time)}},ku=r_;var gr="#ff8a3d",zu="#6f6bff";var a_=[["\u5165\u5E93\u5355","#3ddc84"],["\u7FFB\u7BB1\u5355","#6f6bff"],["\u51FA\u5E93\u5355","#ff8a3d"],["\u8C03\u62E8\u5355","#ff3df0"]],Eo=(t,e)=>t.split(e).map(n=>n.trim());function Gu(t,e,n,i,s,r,a){a=a||{},t.save(),t.translate(e,n),a.rot&&t.rotate(a.rot),t.scale(a.sx==null?1:a.sx,1),t.globalAlpha*=a.alpha==null?1:a.alpha,t.fillStyle="rgba(14,14,40,.95)",me(t,-i/2,-s/2,i,s,s*.22),t.fill(),t.strokeStyle=r,t.lineWidth=Math.max(2,s*.05),t.stroke();for(let o=0;o<3;o++)for(let l=0;l<2;l++){let c=(o-1)*i*.27,u=(l-.5)*s*.36,f=s*.15;t.fillStyle=r,Oe(t,c,u,f),t.fill(),t.fillStyle="rgba(255,255,255,.35)",Oe(t,c-f*.3,u-f*.3,f*.28),t.fill()}t.restore()}function o_(t,e,n,i,s,r){t.fillStyle="#efe9da",me(t,e,n,i,s,6),t.fill(),t.fillStyle=r,t.fillRect(e+i*.14,n+s*.16,i*.5,5),t.fillStyle="rgba(30,30,30,.35)";for(let a=0;a<4;a++)t.fillRect(e+i*.14,n+s*.36+a*s*.15,i*(.72-a%2*.2),4)}function l_(t,e,n,i,s,r,a){let o=Et(r);t.fillStyle="rgba(255,255,255,.28)";let l=2;for(let c=0;c<l;c++){let u=i*(.35+o()*.5)*a;me(t,e+i*.08,n+s*(.25+c*.32),u,s*.16,4),t.fill()}}var c_={id:"fruit",theme(t){let e=t.beat;return{tint:e===3?"#4a6dff":e===8?"#ff6a3d":"#ff8a3d",tint2:"#6f6bff",energy:e===6||e===12?.35:.6,dim:e===9||e===10?.5:.15}},draw(t,e,n){let i=(r,a,o)=>n.q("fruit",r,a,o),s=e.beat;if(s===1){let r=e.p(1,.3,2.4),a=Ei(i(1,0,"15 \u4EBF"),r),o=$.out3(ee(e.bt/.6));t.save(),t.translate(1920/2,480),t.rotate(e.st*.04);for(let u=0;u<28;u++)t.rotate(Math.PI*2/28),t.fillStyle=$t(t,380,0,980,0,[[0,"rgba(255,138,61,"+.1*o+")"],[1,"rgba(255,138,61,0)"]]),t.beginPath(),t.moveTo(380,-9),t.lineTo(980,-48),t.lineTo(980,48),t.lineTo(380,9),t.fill();t.restore(),Kt(t,a,1920/2,640,{size:430,align:"center",alpha:o,fill:(u,f,h,d)=>$t(u,0,h-d*.8,0,h,[[0,"#ffe08a"],[1,"#ff6a2d"]]),glow:"rgba(255,120,40,.65)",gb:70}),e.count(1,"r",Math.round(r*15),"tick",700+r*600);let l=e.p(1,2.7,1.2);xt(t,1920/2,500,l,200,900,gr,10),xt(t,1920/2,500,e.p(1,2.85,1.2),200,1100,"#ffe08a",4);let c=e.p(1,2.6,.9);Me(t,i(1,1,"\u4E00\u5E74\u6D41\u6C34"),1920/2,790,{size:70,wt:400,track:40-14*c,align:"center",alpha:c,fill:pe.ink}),e.hit(1,2.7,"chime",0)}else if(s===2){let o=$.bounce(ee(e.bt/1)),l=560-(e.beat>2?0:(1-o)*760),c=e.p(2,1.2,1.8,$.lin);t.save(),t.globalAlpha*=Ce(1,.55,e.p(2,3,1)),t.fillStyle=$t(t,0,l-170,0,l+170,[[0,"#d7a45e"],[1,"#9c6c34"]]),me(t,260,l-180,560,360,14),t.fill(),t.fillStyle="rgba(20,12,4,.78)",me(t,290,l-150,500,300,8),t.fill(),t.fillStyle="rgba(255,255,255,.1)",t.fillRect(260,l+130,560,8),Me(t,"12 \u76D2",540,l+224,{size:54,wt:700,align:"center",fill:pe.amber,alpha:e.p(2,.8,.5)});for(let h=0;h<12;h++){let d=h%4,p=Math.floor(h/4),_=540+(d-1.5)*118,m=l+(p-1)*94,g=1.4+h*.11,y=e.beat>2?1:ee((e.bt-g)/.75);if(y<=0||e.beat<2){e.beat===2&&o>.05&&Gu(t,_,m,100,70,zu);continue}y>=1&&e.beat>=2}t.restore();for(let h=0;h<12;h++){let d=h%4,p=Math.floor(h/4),_=540+(d-1.5)*118,m=l+(p-1)*94,g=800+h%6*118,y=800-Math.floor(h/6)*100,w=h>=6,b=h%6,S=(w?1290:880)+(b%3-1)*150+(b>=3?75:0)*(b>=3,0),E=820-Math.floor(b/3)*(w?96:76),x=e.p(2,1.4+h*.11,.75,$.lin),T=e.p(2,3+h*.08,.7,$.io2);if(x<=0)continue;let U=Ce(_,g,$.out2(x)),C=Ce(m,y,$.bounce(x)),I=1,N=zu,V=100,P=70;if(T>0){U=Ce(g,S,T),C=Ce(y,E,T);let k=T*Math.PI;I=Math.abs(Math.cos(k))+.02,T>.5&&(N=w?"#a56bff":"#4ab0ff",V=w?132:92,P=w?84:58)}Gu(t,U,C,V,P,N,{sx:I})}e.hit(2,.9,"thud"),e.hit(2,3,"whoosh");let u=e.p(2,3.9,.6);u>0&&(Me(t,"300 \u514B",880,940,{size:54,align:"center",alpha:u,fill:"#4ab0ff"}),Me(t,"450 \u514B",1290,940,{size:54,align:"center",alpha:u,fill:"#a56bff"}));let f=Eo(i(2,0,"\u65A4 / \u5934 / \u76D2 / \u7BB1"),"/");f.forEach((h,d)=>{let p=e.p(2,3.6+d*.22,.6,$.back);if(p<=0)return;let _=1700,m=250+d*120,g=Math.floor(e.st*1.6)%f.length===d;t.save(),t.translate(_,m),t.scale(p,p),t.fillStyle=g?"rgba(255,138,61,.28)":"rgba(255,255,255,.06)",me(t,-90,-42,180,84,42),t.fill(),t.strokeStyle=g?gr:"rgba(255,255,255,.25)",t.lineWidth=3,t.stroke(),Me(t,h,0,22,{size:62,align:"center",fill:g?"#ffd9b3":pe.ink}),t.restore()})}else if(s===3){let r=e.beat===3&&e.bt>1?Math.max(0,1-(e.bt-1)/.5)*14:0;t.translate(Math.sin(e.bt*90)*r,Math.cos(e.bt*70)*r);let a=$.out3(ee(e.bt/.7));t.save(),t.globalAlpha*=a,t.translate(0,(1-a)*60);let o=150,l=190,c=880,u=660;t.fillStyle="#d9dae0",t.fillRect(o,l,c,u),t.fillStyle="#2b4c9b",t.fillRect(o,l,c,58),Me(t,i(3,0,"\u7528\u53CB"),o+24,l+41,{size:34,fill:"#fff"});for(let S=0;S<3;S++)t.fillStyle="#c9ccd6",t.fillRect(o+c-150+S*46,l+10,38,38);t.strokeStyle="#8a90a2",t.lineWidth=2;for(let S=0;S<8;S++)t.beginPath(),t.moveTo(o+30,l+110+S*66),t.lineTo(o+c-30,l+110+S*66),t.stroke();for(let S=0;S<6;S++)t.beginPath(),t.moveTo(o+30+S*136,l+110),t.lineTo(o+30+S*136,l+110+462),t.stroke();t.fillStyle="#aab0c4";for(let S=0;S<7;S++)for(let E=0;E<6;E++)(S*7+E*3)%4!==0&&t.fillRect(o+44+E*136,l+132+S*66,70+(S+E)%3*16,14);t.restore();let f=e.p(3,1,.45,$.out3);if(f>0){t.save(),t.translate(620,560),t.rotate(-.22);let S=Ce(2.8,1,f);t.scale(S,S),t.globalAlpha*=f,t.strokeStyle=pe.red,t.lineWidth=12,me(t,-250,-120,500,240,22),t.stroke(),t.lineWidth=4,me(t,-234,-104,468,208,14),t.stroke(),Me(t,i(3,1,"\u5931\u8D25"),0,62,{size:190,align:"center",fill:pe.red,glow:"rgba(255,74,61,.7)",gb:36}),t.restore(),xt(t,620,560,e.p(3,1.4,.8),100,520,pe.red,8)}e.hit(3,1,"stamp");let h=1090,d=470,p=i(3,2,"X + Y = C\uFF1F= A\uFF1F"),_=e.p(3,1.2,.6),m=p.split("=")[0].trim()+" =",g=["C\uFF1F","A\uFF1F","C\uFF1F","A\uFF1F","C\uFF1F","A\uFF1F"],y=[1.7,2.5,3.1,3.5,3.8,4];t.save(),t.globalAlpha*=_,Me(t,m,h,d,{size:104,fill:pe.ink,mono:!1});let w=at(t,m,{size:104}),b=-1;if(y.forEach((S,E)=>{(e.beat>3||e.bt>=S)&&(b=E)}),e.beat>3||e.bt>4.3){let S=p.slice(p.indexOf("=")+1).trim();Me(t,S,h,d+130,{size:84,fill:pe.amber,glow:"rgba(255,179,64,.6)"})}if(b>=0&&!(e.beat>3||e.bt>4.3)){let S=e.beat>3?1:ee((e.bt-y[b])/.22);t.save(),t.beginPath(),t.rect(h+w+10,d-110,300,150),t.clip(),b>0&&Me(t,g[b-1],h+w+24,d+S*110,{size:104,fill:"rgba(244,241,234,"+(1-S)+")"}),Me(t,g[b],h+w+24,d-110+S*110,{size:104,fill:pe.amber,glow:"rgba(255,179,64,.7)"}),t.restore()}t.restore()}else if(s===4){let r=e.p(4,4,1.1,$.io3),a=Ce(1920/2,330,r),o=Ce(1,.86,r),l=$.out3(ee(e.bt/.7));t.save(),t.translate(a,560),t.scale(o,o),t.globalAlpha*=l,t.fillStyle="#0b0d16",me(t,-210,-400,420,800,56),t.fill(),t.strokeStyle="rgba(255,255,255,.35)",t.lineWidth=5,t.stroke(),t.fillStyle="rgba(255,255,255,.1)",t.fillRect(-190,-380,380,70);for(let p=0;p<3;p++)t.fillStyle=["#ff8a3d","#6f6bff","#3ddc84"][p],Oe(t,-150+p*46,-345,18),t.fill();t.fillStyle="rgba(255,255,255,.3)",me(t,-10,-352,120,14,7),t.fill(),t.save(),t.beginPath(),me(t,-190,-304,380,680,6),t.clip();let c=12,u=e.beat>4?c:Math.min(c,Math.floor(Math.max(0,e.bt-.4)/.34)+(e.bt>.4?1:0));for(let p=0;p<u;p++){let _=e.beat>4?9:e.bt-(.4+p*.34),m=$.back(ee(_/.35)),g=300-(u-1-p)*170,y=a_[p%4];t.save(),t.translate(0,g),t.scale(m,m),t.fillStyle="rgba(255,255,255,.1)",me(t,-170,-75,340,150,18),t.fill(),o_(t,-150,-60,96,120,y[1]),t.fillStyle=y[1],me(t,-34,-52,180,44,22),t.fill(),Me(t,y[0],56,-20,{size:28,align:"center",fill:"#06070d"}),t.fillStyle="rgba(255,255,255,.25)",me(t,-34,8,140,10,5),t.fill(),me(t,-34,30,90,10,5),t.fill(),t.restore()}t.restore(),t.restore(),e.count(4,"ph",Math.min(12,Math.floor(Math.max(0,e.bt-.4)/.34)),"pop",600);let f=e.beat>4?20:ee(Math.floor((e.bt-4.8)/.14)+1,0,20),h=e.p(4,4.3,.8);for(let p=0;p<20;p++){let _=p%5,m=Math.floor(p/5),g=900+_*178,y=360+m*180,w=p<f,b=e.beat>4?9:e.bt-(4.8+p*.14);t.save(),t.globalAlpha*=h;let S=w?$.back(ee(b/.3)):0;t.fillStyle=w?"rgba(60,220,130,.9)":"rgba(255,255,255,.07)",me(t,g-36,y+10,72,46,6),t.fill(),t.strokeStyle="rgba(0,0,0,.4)",t.lineWidth=2,t.beginPath(),t.moveTo(g-12,y+10),t.lineTo(g-12,y+56),t.moveTo(g+12,y+10),t.lineTo(g+12,y+56),t.moveTo(g-36,y+33),t.lineTo(g+36,y+33),t.stroke(),en(t,g,y+4,110*(w?Ce(.85,1,S):.9),w?"#f4f1ea":"rgba(244,241,234,.16)",{arms:w,t:e.time,ph:p*1.3}),t.restore()}e.count(4,"lit",f,"tick",900+f*40);let d=e.p(4,4.8,.5);d>0&&Me(t,String(f),1700,250,{size:190,mono:!0,align:"right",fill:pe.green,glow:"rgba(61,220,132,.6)",gb:40,alpha:d})}else if(s===5){let r=$.out3(ee(e.bt/.7)),a=140,o=170,l=1020,c=660,u=e.beat>5||e.bt>2.4?1:0,f=6,h=7,d=160,p=70;t.save(),t.globalAlpha*=r;let _=t.globalAlpha;t.translate(0,(1-r)*50),t.fillStyle="#10261b",me(t,a,o,l,c,12),t.fill(),t.fillStyle="#1f7a4a",t.fillRect(a,o,l,48),t.fillStyle="rgba(255,255,255,.25)";for(let C=0;C<3;C++)Oe(t,a+28+C*30,o+24,9),t.fill();[i(5,0,"\u5F53\u5929\u9500\u552E\u8868"),i(5,1,"\u5E93\u5B58\u8868")].forEach((C,I)=>{let N=I===u;t.fillStyle=N?"#2fb673":"rgba(255,255,255,.08)",me(t,a+20+I*250,o+c-62,230,52,10),t.fill(),Me(t,C,a+135+I*250,o+c-26,{size:32,align:"center",fill:N?"#06140d":pe.dim})});let g=u===0?0:2.4,y=e.beat>5&&u===1?1:ee((e.bt-g-.2)/1),w=["\u671F\u521D","\u5165\u5E93","\u9500\u552E","\u76D8\u70B9\u7ED3\u4F59"];for(let C=0;C<h;C++)for(let I=0;I<f;I++){let N=a+24+I*d,V=o+70+C*p,P=ee(y*(h+2)-C),k=C===0;if(!(P<=0)){if(t.globalAlpha=_*P,t.strokeStyle="rgba(47,182,115,.4)",t.lineWidth=2,t.strokeRect(N,V,d-4,p-4),u===1&&k&&I<4){let Y=e.beat>5?1:ee((e.bt-2.7-I*.35)/.4);Me(t,w[I],N+d/2,V+46,{size:34,align:"center",fill:"#9bf0c4",alpha:Y})}else if(!k||u===0){let Y=u===1&&I<4?e.beat>5?1:ee((e.bt-3.4-I*.5-C*.09)/.35):u===0?ee((e.bt-1.2-C*.1-I*.05)/.4):0;Y>0&&l_(t,N,V,d,p,C*11+I*5+u*31,Y)}}}t.restore();let b=e.p(5,5.6,.7),S=1500,E=520;t.save(),t.globalAlpha*=b,t.fillStyle="#20232e",me(t,S-190,E-70,380,200,22),t.fill(),t.strokeStyle="rgba(255,255,255,.3)",t.lineWidth=3,t.stroke(),t.fillStyle="#0a0b10",me(t,S-130,E-50,260,16,8),t.fill(),t.fillStyle=pe.green,Oe(t,S+150,E+100,8),t.fill(),t.restore();let x=e.beat>5?1:ee((e.bt-6.3)/1),T=$.out3(x);if(x>0){t.save(),t.beginPath(),t.rect(S-140,E-460,280,410),t.clip(),t.fillStyle="#efe9da",me(t,S-120,E-40-360*T,240,340,6),t.fill(),t.fillStyle="rgba(30,30,30,.35)";for(let C=0;C<9;C++)t.fillRect(S-96,E-20-360*T+C*34-0,192*(.5+C%3*.2),8);t.restore()}let U=e.beat>5?3:ee(Math.floor((e.bt-7.6)/.5),0,3);for(let C=0;C<U;C++){t.save(),t.translate(S+(C-1)*6,880-C*9),t.rotate((C-1)*.06),t.fillStyle="#efe9da",me(t,-90,-60,180,120,5),t.fill(),t.fillStyle="rgba(30,30,30,.3)";for(let I=0;I<4;I++)t.fillRect(-70,-40+I*22,120,6);t.restore()}e.hit(5,6.3,"buzz"),e.count(5,"pg",U,"pop",400)}else if(s===6){let r=n.byKey["fruit-6"].quote||i(6,0,""),a={size:112},o=r.split(/(?<=[，；,;])/).flatMap(f=>Ar(t,f,1600,a)),l=0;Me(t,"\u201C",190,330,{size:560,fill:"rgba(255,138,61,.16)",wt:700}),o.forEach((f,h)=>{let d=520+h*170,p=1920/2-at(t,f,a)/2,_=0;for(let m of f){let g=$.out3(ee((e.bt-.4-l*.11)/.7));l++;let y=p+at(t,f.slice(0,_),a);_++,g>0&&Me(t,m,y,d+(1-g)*36,{size:112,alpha:g,fill:"#f4f1ea"})}});let c=e.p(6,.4+l*.11+.3,.9,$.io2),u=r.indexOf("\u673A\u68B0\u5316");if(u>=0){let h=o[0]||"",d=1920/2-at(t,h,a)/2,p=at(t,h.slice(0,u),a),_=at(t,"\u673A\u68B0\u5316",a);t.strokeStyle=pe.red,t.lineWidth=9,t.lineCap="round",t.beginPath();for(let m=0;m<=24*c;m++){let g=m/24,y=d+p+_*g,w=556+Math.sin(g*22)*7;m?t.lineTo(y,w):t.moveTo(y,w)}t.stroke()}}else if(s===7){let r=$.back(ee(e.bt/.6));t.save(),t.translate(380,340),t.scale(r,r),t.fillStyle="#18204a",t.beginPath(),t.moveTo(-170,150),t.quadraticCurveTo(-170,40,0,30),t.quadraticCurveTo(170,40,170,150),t.fill(),t.fillStyle="#f4f1ea",t.beginPath(),t.moveTo(-34,34),t.lineTo(34,34),t.lineTo(0,100),t.fill(),t.fillStyle=pe.red,t.beginPath(),t.moveTo(-12,44),t.lineTo(12,44),t.lineTo(18,130),t.lineTo(0,146),t.lineTo(-18,130),t.fill(),t.fillStyle="#f2c9a0",Oe(t,0,-70,98),t.fill(),t.fillStyle="#1b1410",t.beginPath(),t.arc(0,-78,100,Math.PI*1.02,Math.PI*1.98),t.fill(),t.fillStyle="#1b1410",Oe(t,-34,-64,8),t.fill(),Oe(t,34,-64,8),t.fill(),t.strokeStyle="#1b1410",t.lineWidth=6,t.lineCap="round",t.beginPath(),t.moveTo(-30,-30),t.quadraticCurveTo(0,-18,30,-30),t.stroke(),t.restore();let a=$.back(ee((e.bt-.6)/.5)),o=i(7,0,"\u4E0A\u4E2A\u6708\u90A3\u6279\u8D27\u8D5A\u4E86\u591A\u5C11\uFF1F");a>0&&(t.save(),t.translate(1050,260),t.scale(a,a),t.fillStyle="#f4f1ea",me(t,-520,-110,1040,220,50),t.fill(),t.beginPath(),t.moveTo(-480,40),t.lineTo(-560,120),t.lineTo(-420,100),t.fill(),Me(t,o,0,26,{size:80,align:"center",fill:"#14161f",maxW:960}),t.restore(),e.hit(7,.6,"pop",500));let l=1130,c=700,u=[2,3.3,4.6],f=e.beat>7?3:u.filter(_=>e.bt>=_).length,h=e.p(7,1.4,.6);t.save(),t.globalAlpha*=h,t.translate(l,c);let d=["1","2","3"],p=(_,m)=>{t.save(),t.translate(0,-150),t.scale(1,m),t.fillStyle="#f4f1ea",me(t,-250,0,500,300,18),t.fill(),t.fillStyle=pe.red,me(t,-250,0,500,62,18),t.fill(),t.fillRect(-250,40,500,22),Kt(t,d[_]+" \u5929",0,240,{size:190,align:"center",fill:"#14161f"}),t.restore()};if(t.fillStyle="rgba(0,0,0,.45)",me(t,-262,-140,524,320,22),t.fill(),f>=3?p(2,1):p(Math.min(2,f),1),f>=1&&f<=3){let _=f-1;(e.beat>7?1:ee((e.bt-u[_])/.5))<1&&p(_-0,1)}t.restore();for(let _=0;_<3;_++){let m=e.beat>7?9:e.bt-u[_];m>=0&&m<.5&&_<2&&(t.save(),t.globalAlpha*=h,t.translate(l,c),t.fillStyle="#f4f1ea",t.translate(0,-150),t.scale(1,Math.cos(m/.5*Math.PI/2)),t.fillStyle="#e7e2d6",me(t,-250,0,500,300,18),t.fill(),Kt(t,d[_]+" \u5929",0,240,{size:190,align:"center",fill:"#14161f"}),t.restore())}e.count(7,"pg",f,"tick",700),f>=3&&xt(t,l,c,ee((e.bt-u[2])/1),200,420,pe.red,6)}else if(s===8){let r=$.back(ee(e.bt/.6)),a=$.back(ee((e.bt-.7)/.6)),o=560,l=i(8,0,"\u8A8A"),c=i(8,1,"\u7B49");t.save(),t.translate(560,560),t.scale(r,r);for(let f=4;f>=0;f--){let h=Math.sin(e.st*9+f)*4+f*14;Me(t,l,-h,190+f*6,{size:o,align:"center",fill:f===0?gr:"rgba(255,138,61,"+(.12+.02*(4-f))+")",glow:f===0?"rgba(255,138,61,.6)":null,gb:50})}t.restore(),t.save(),t.translate(1360,560),t.scale(a,a);let u=e.st*.6;for(let f=0;f<24;f++){let h=u+f/24*Math.PI*2,d=f/24;t.fillStyle="rgba(56,232,255,"+(.15+.85*d)+")",Oe(t,Math.cos(h)*330,Math.sin(h)*330,7+d*9),t.fill()}Me(t,c,0,190,{size:o*.82,align:"center",fill:pe.cyan,glow:"rgba(56,232,255,.55)",gb:50}),t.restore(),e.hit(8,0,"thud"),e.hit(8,.7,"thud")}else if(s===9){let r=Eo(i(9,0,"\u4EE5\u524D / \u73B0\u5728"),"/"),a=$.out3(ee((e.bt-.2)/.7)),o=$.out3(ee((e.bt-1.3)/.7)),l=e.bt>((n.byKey["fruit-9"].video||{}).intro||3.2)-.3?0:1;t.save(),t.globalAlpha*=l,Me(t,r[0],560,600,{size:260,align:"center",fill:"rgba(244,241,234,.45)",alpha:a*(1-.5*o)}),a>.5&&(t.strokeStyle="rgba(255,74,61,.8)",t.lineWidth=10,t.beginPath(),t.moveTo(330,520),t.lineTo(330+460*$.out3(ee((e.bt-1)/.5)),520),t.stroke()),Me(t,"/",960,640,{size:300,wt:400,align:"center",fill:"rgba(255,255,255,.2)",alpha:o}),Me(t,r[1],1360,600,{size:260,align:"center",fill:gr,glow:"rgba(255,138,61,.7)",gb:60,alpha:o}),t.restore()}else if(s===10)Me(t,i(8,1,"\u7B49"),1920/2,760,{size:760,align:"center",fill:"rgba(56,232,255,.07)"});else if(s===11){let r=Eo(i(11,0,"\u5C06\u8FD1 20 \u4E2A\u8D22\u52A1 \xB7 \u8A8A \xB7 \u7B97\u4E09\u5929"),"\xB7"),a=Eo(i(11,1,"1 \u4E2A\u667A\u80FD\u4E2D\u53F0 \xB7 \u95EE\u4E00\u53E5"),"\xB7"),o=$.out3(ee(e.bt/.8)),l=$.out3(ee((e.bt-1.6)/.9)),c=e.p(11,2.2,1);t.save(),t.globalAlpha*=o*Ce(1,.55,c);for(let h=0;h<20;h++)en(t,150+h%10*62,330+Math.floor(h/10)*100,84,"rgba(244,241,234,.5)");Kt(t,r[0],460,600,{size:76,align:"center",fill:pe.ink}),Me(t,r[1],250,760,{size:120,align:"center",fill:gr}),Me(t,r[2],640,760,{size:100,align:"center",fill:pe.red}),t.restore();let u=e.p(11,1,1,$.io2);t.save(),t.strokeStyle=pe.amber,t.lineWidth=10,t.lineCap="round",t.beginPath(),t.moveTo(900,520),t.lineTo(900+160*u,520),t.stroke(),u>.9&&(t.beginPath(),t.moveTo(1040,480),t.lineTo(1075,520),t.lineTo(1040,560),t.stroke()),t.restore(),t.save(),t.globalAlpha*=l,t.translate(1500,420);let f=1+Math.sin(e.st*2.4)*.04;for(let h=0;h<3;h++)t.strokeStyle="rgba(56,232,255,"+(.5-h*.14)+")",t.lineWidth=4,Oe(t,0,0,(110+h*50)*f),t.stroke();t.fillStyle=Dn(t,0,0,0,100,[[0,"#d8fbff"],[.4,pe.cyan],[1,"rgba(56,232,255,0)"]]),Oe(t,0,0,100*f),t.fill();for(let h=0;h<6;h++){let d=e.st*.5+h*1.047;t.fillStyle="#fff",Oe(t,Math.cos(d)*170,Math.sin(d)*170,7),t.fill()}t.restore(),t.save(),t.globalAlpha*=l,Kt(t,a[0],1500,700,{size:76,align:"center",fill:pe.ink}),Me(t,a[1],1500,840,{size:100,align:"center",fill:pe.cyan,glow:"rgba(56,232,255,.5)"}),t.restore(),e.hit(11,1.6,"chime",7)}else if(s===12){let r=i(12,0,"\u8C01\u505A\u7684\uFF1F"),a={size:360},o=at(t,r,a),l=1+e.bt*.012;t.translate(1920/2,1080/2),t.scale(l,l),t.translate(-1920/2,-1080/2);let c=0;for(let u of r){let f=1920/2-o/2+at(t,r.slice(0,c),a),h=$.out4(ee((e.bt-.2-c*.22)/.7)),d=e.bt-.2-c*.22;if(c++,h<=0)continue;let p=d<.5?(Math.random()-.5)*18*(1-d*2):0;Me(t,u,f+p,640+(1-h)*80,{size:360,alpha:h,fill:u==="\uFF1F"?pe.amber:"#fff",glow:u==="\uFF1F"?"rgba(255,179,64,.8)":"rgba(255,255,255,.35)",gb:60}),d>0&&d<.2&&(t.save(),t.globalAlpha*=.6,Me(t,u,f+14,640,{size:360,fill:pe.cyan}),Me(t,u,f-14,640,{size:360,fill:pe.magenta}),t.restore())}e.hit(12,.2,"thud"),e.hit(12,.88,"thud")}}},Vu=c_;var ti="#ff8fa3",_r=["#ffb340","#38e8ff","#a58bff"],dt={x:400,y:190,w:1400,h:780,cols:7,head:84},Ro=Et(42),h_=Array.from({length:32},(t,e)=>({col:e%7,slot:Math.floor(e/7),type:(e*5+Math.floor(e/7))%3,dx:(Ro()-.5)*220,dy:(Ro()-.5)*200,rot:(Ro()-.5)*.5,ph:Ro()})),u_=t=>{let e=dt.w/dt.cols;return[dt.x+t.col*e+e/2,dt.y+dt.head+56+t.slot*128]};function f_(t,e,n,i,s,r,a){t.save(),t.translate(e,n),t.rotate(r),t.scale(s,s),t.globalAlpha*=a;let o=_r[i.type];t.fillStyle="rgba(12,12,22,.92)",me(t,-92,-38,184,76,14),t.fill(),t.fillStyle=o,t.globalAlpha*=.22,me(t,-92,-38,184,76,14),t.fill(),t.globalAlpha/=.22,t.fillStyle=o,me(t,-92,-38,10,76,5),t.fill(),t.fillStyle="rgba(255,255,255,.55)",me(t,-66,-20,100+i.ph*40,12,6),t.fill(),t.fillStyle="rgba(255,255,255,.28)",me(t,-66,6,60+i.ph*60,12,6),t.fill(),t.restore()}function d_(t,e){t.save(),t.globalAlpha*=e,t.fillStyle="rgba(255,255,255,.04)",me(t,dt.x-20,dt.y-20,dt.w+40,dt.h+40,24),t.fill(),t.strokeStyle="rgba(255,255,255,.22)",t.lineWidth=3,t.stroke();let n=dt.w/dt.cols;for(let i=0;i<dt.cols;i++){let s=dt.x+i*n;i&&(t.strokeStyle="rgba(255,255,255,.1)",t.lineWidth=2,t.beginPath(),t.moveTo(s,dt.y+12),t.lineTo(s,dt.y+dt.h-12),t.stroke()),t.fillStyle=i===2?ti:"rgba(255,255,255,.35)",Oe(t,s+n/2,dt.y+42,20),t.fill()}t.strokeStyle="rgba(255,255,255,.14)",t.beginPath(),t.moveTo(dt.x+14,dt.y+dt.head),t.lineTo(dt.x+dt.w-14,dt.y+dt.head),t.stroke(),t.restore()}function p_(t,e,n){t.save(),t.translate(n.tx,n.ty),t.scale(n.sc,n.sc),d_(t,n.frame),h_.forEach((i,s)=>{let[r,a]=u_(i),o=r,l=a,c=1,u=0,f=1;if(s<16){let h=n.arrive(s);if(h<=0)return;let d=120,p=330+s%5*110,_=$.out3(h);o=Ce(d,r,_),l=Ce(p,a,_)-Math.sin(_*Math.PI)*120,c=Ce(.5,1,_),f=ee(h*3),n.clutter&&(o+=i.dx*n.clutter*.8,l+=i.dy*n.clutter*.8,u=i.rot*n.clutter)}else{let h=n.extra(s);if(h<=0)return;o+=i.dx*n.clutter,l+=i.dy*n.clutter,u=i.rot*n.clutter,c=$.back(h)}f_(t,o,l,i,c,u,f)}),t.restore()}function Hu(t,e,n,i,s,r,a,o){let l=e.p(5,r,.7,$.out3);if(l<=0)return;t.save(),t.translate(n+(1-l)*200,i),t.globalAlpha*=l,t.fillStyle="rgba(14,14,26,.96)",me(t,0,0,640,360,20),t.fill(),t.strokeStyle="rgba(255,255,255,.25)",t.lineWidth=3,t.stroke(),Me(t,s,36,64,{size:44,fill:pe.ink});for(let f=0;f<4;f++){let h=100+f*52,d=$.out2(ee((e.since(5)<0?0:e.beat>5?9:e.bt-a-f*.35)/.5));t.fillStyle="rgba(255,255,255,.18)",me(t,36,h,130,16,8),t.fill(),t.fillStyle="rgba(255,255,255,.07)",me(t,190,h-12,410,40,10),t.fill(),t.fillStyle=ti,me(t,200,h,(180+f%3*70)*d,16,8),t.fill()}let c=e.beat>5?1:ee((e.bt-o)/.5),u=Math.sin(ee(c*2,0,1)*Math.PI);if(t.save(),t.translate(500,316),t.scale(1-.08*u,1-.08*u),t.fillStyle=c>.5?pe.green:ti,me(t,-90,-26,180,52,26),t.fill(),Me(t,"\u63D0\u4EA4",0,12,{size:34,align:"center",fill:"#0a0a12"}),t.restore(),c>0&&c<1&&xt(t,500,316,c,20,120,pe.green,5),c>=1){let f=$.back(ee((e.beat>5?9:e.bt-o-.5)/.4));t.save(),t.translate(580,50),t.scale(f,f),t.fillStyle=pe.green,Oe(t,0,0,30),t.fill(),t.strokeStyle="#06140d",t.lineWidth=7,t.lineCap="round",t.lineJoin="round",t.beginPath(),t.moveTo(-13,2),t.lineTo(-3,12),t.lineTo(15,-10),t.stroke(),t.restore()}t.restore()}function m_(t,e,n,i,s){t.save(),t.translate(e,n),t.scale(i,i),t.fillStyle="#0d1018",me(t,-190,-130,380,250,18),t.fill(),t.strokeStyle="rgba(255,255,255,.55)",t.lineWidth=5,t.stroke(),t.fillStyle=Dn(t,0,-10,0,200,[[0,"rgba(255,143,163,"+.35*s+")"],[1,"rgba(255,143,163,0)"]]),t.fillRect(-180,-120,360,230),t.fillStyle="#1a1d28",t.beginPath(),t.moveTo(-230,120),t.lineTo(230,120),t.lineTo(200,154),t.lineTo(-200,154),t.closePath(),t.fill(),t.strokeStyle="rgba(255,255,255,.4)",t.lineWidth=3,t.stroke(),t.restore()}var g_={id:"me",theme(t){return{tint:t.beat===1?"#ffb078":ti,tint2:"#a58bff",energy:t.beat===1?.25:.55,dim:t.beat===1?.55:.1}},draw(t,e,n){let i=(r,a,o)=>n.q("me",r,a,o),s=e.beat;if(s===1){let r=1+e.bt*.012,a=e.bt<1?0:e.bt<1.9?[1,.2,.8,.1,.9,.3,1][Math.floor((e.bt-1)/.13)%7]:1;t.save(),t.translate(1920/2,560),t.scale(r,r),t.translate(-1920/2,-560);let o=360;t.strokeStyle="rgba(255,255,255,.07)",t.lineWidth=2;for(let l=-12;l<=12;l++)t.beginPath(),t.moveTo(1920/2+l*30,o+40),t.lineTo(1920/2+l*260,1180),t.stroke();for(let l=0;l<5;l++){let c=Math.pow(l/4,1.5),u=470+c*500,f=.3+c*1;for(let h=-3;h<=3;h++){let d=1920/2+h*300*f*1.1,p=l===3&&h===1;if(t.strokeStyle="rgba(255,255,255,"+(.13+c*.1)+")",t.lineWidth=Math.max(1.5,3*f),t.strokeRect(d-100*f,u,200*f,56*f),t.strokeRect(d-52*f,u-80*f,104*f,62*f),t.beginPath(),t.moveTo(d,u-18*f),t.lineTo(d,u),t.stroke(),Oe(t,d,u+100*f,30*f),t.stroke(),p&&a>0){let _=d+70*f,m=u-150*f;t.save(),t.globalAlpha*=a,t.fillStyle=Dn(t,_,m+20,10,520*f,[[0,"rgba(255,200,120,.55)"],[1,"rgba(255,200,120,0)"]]),t.beginPath(),t.moveTo(_-24*f,m+24*f),t.lineTo(_+24*f,m+24*f),t.lineTo(_+330*f,u+140*f),t.lineTo(_-330*f,u+140*f),t.fill(),t.strokeStyle="#ffd9a0",t.lineWidth=5*f,t.beginPath(),t.moveTo(_,u),t.lineTo(_-20*f,m+60*f),t.lineTo(_,m+24*f),t.stroke(),t.fillStyle="#ffe3b0",t.beginPath(),t.moveTo(_-30*f,m+30*f),t.lineTo(_+30*f,m+30*f),t.lineTo(_+16*f,m-6*f),t.lineTo(_-16*f,m-6*f),t.fill();let g=Et(5);for(let y=0;y<28;y++){let w=(e.st*.08+g())%1;t.fillStyle="rgba(255,230,180,"+.5*Math.sin(w*Math.PI)+")",Oe(t,_+(g()-.5)*360*f*w+Math.sin(e.st+y)*6,m+60*f+w*260*f,2.5*f),t.fill()}t.restore()}}}t.restore(),e.hit(1,1,"tick",300),e.hit(1,1.3,"tick",600),e.hit(1,1.7,"chime",-12)}else if(s===2){let r=$.out3(ee(e.bt/.7)),a=e.p(2,.9,1.1,$.io3),o=a*Math.PI,l=Math.abs(Math.cos(o))+.001;t.save(),t.translate(1920/2,520),t.scale(Ce(.9,1,r),Ce(.9,1,r)),t.globalAlpha*=r,t.rotate(-.03*(1-a)),t.save(),t.scale(l,1),t.shadowColor="rgba(255,143,163,.4)",t.shadowBlur=50,t.fillStyle=o<Math.PI/2?"#f1e6d6":"#15151f",me(t,-400,-250,800,500,28),t.fill(),t.shadowBlur=0,o<Math.PI/2?(t.fillStyle="#c9b8a2",Oe(t,-230,-30,90),t.fill(),t.fillStyle="#e8dccb",t.beginPath(),t.arc(-230,130,120,Math.PI,0),t.fill(),t.fillStyle="rgba(40,30,20,.35)",me(t,-90,-90,330,26,13),t.fill(),me(t,-90,-30,260,20,10),t.fill(),me(t,-90,20,300,20,10),t.fill(),me(t,-90,70,200,20,10),t.fill()):(t.strokeStyle="rgba(255,255,255,.25)",t.lineWidth=3,me(t,-400,-250,800,500,28),t.stroke(),[i(2,0,"\u6570\u5B66\u7CFB"),i(2,1,"\u54A8\u8BE2")].forEach((f,h)=>{let d=$.out3(ee((e.bt-1.8-h*.35)/.5));t.fillStyle=_r[h],Oe(t,-300,-80+h*130+0,16),t.fill(),Me(t,f,-250,-52+h*130,{size:100,fill:pe.ink,alpha:d})})),t.restore(),t.restore();let c=e.p(2,2.9,.4,$.out3);if(c>0){t.save(),t.translate(1100,760),t.rotate(-.2);let u=Ce(2.6,1,c);t.scale(u,u),t.globalAlpha*=c,t.strokeStyle=pe.red,t.lineWidth=12,me(t,-330,-85,660,170,22),t.stroke(),t.lineWidth=4,me(t,-314,-69,628,138,14),t.stroke(),Me(t,i(2,2,"\u4E0D\u662F\u7A0B\u5E8F\u5458"),0,34,{size:108,align:"center",fill:pe.red,glow:"rgba(255,74,61,.6)",gb:30}),t.restore(),xt(t,1100,760,e.p(2,3.2,.8),80,480,pe.red,7)}e.hit(2,.9,"whoosh"),e.hit(2,2.9,"stamp")}else if(s===3){let r=e.p(3,0,.7,$.back),a=e.p(3,.5,1,$.io2),o=e.p(3,1.3,.6,$.back),l=e.p(3,1.6,.7,$.back),c=2.2;t.save(),t.translate(0,0),t.save(),t.translate(360,560),t.scale(r,r),t.translate(-360,-560),m_(t,360,560,1,a),t.restore(),t.strokeStyle=ti,t.lineWidth=6,t.lineCap="round",t.shadowColor=ti,t.shadowBlur=18,t.beginPath(),t.moveTo(560,560),t.bezierCurveTo(680,560,700,420,850,420),t.setLineDash([700*a,2e3]),t.stroke(),t.setLineDash([]),t.shadowBlur=0,o>0&&(t.save(),t.translate(960,420),t.scale(o,o),Cs(t,0,0,190,{glow:40}),t.restore());let u=Et(9);for(let f=0;f<26;f++){let h=(e.beat>3,(e.bt*.55+f/26)%1);if(!(e.bt>c||e.beat>3?1:0))break;let p=Ce(1060,1440,h),_=430+h*h*230+(u()-.5)*60+Math.sin(h*6+f)*10,m=Math.sin(h*Math.PI),g=120+u()*60;t.save(),t.globalAlpha*=m,t.translate(p,_),t.scale(1-h*.45,1-h*.45),t.fillStyle=f%2?"rgba(61,220,132,.85)":"rgba(244,241,234,.9)",me(t,-g/2,-22,g,44,14),t.fill(),t.fillStyle="rgba(10,10,20,.4)",me(t,-g/2+14,-8,g*.55,8,4),t.fill(),me(t,-g/2+14,6,g*.3,8,4),t.fill(),t.restore()}if(l>0){let f=e.bt>c?.5+.5*Math.sin(e.bt*7):0;t.save(),t.translate(1590,640),t.scale(l,l),Nn(t,0,0,280,{color:pe.cyan,glow:30+f*25,t:e.time}),e.bt>c&&xt(t,0,0,e.bt*1.6%1,150,300,pe.cyan,5),t.restore()}t.restore()}else if(s===4||s===5){let r=s===4,a=$.out3(ee(e.bt/.6))*1;if(s===4){let h=Et(3);for(let d=0;d<6;d++){let p=290+d*100,_=$.out3(ee((e.bt-.1-d*.08)/.5))*(1-.8*e.p(4,2.6,1));t.save(),t.globalAlpha*=_,t.fillStyle=d%2?"rgba(61,220,132,.7)":"rgba(244,241,234,.75)",me(t,40,p-30,230+h()*40,60,18),t.fill(),t.fillStyle="rgba(10,10,20,.4)",me(t,60,p-10,120,8,4),t.fill(),me(t,60,p+6,70,8,4),t.fill(),t.restore()}Cs(t,150,200,90,{alpha:.9})}let o=s===5?e.p(5,3.9,1.1,$.io3):0,l=Ce(1,.62,o),c=Ce(0,-230,o),u=Ce(0,30,o),f=s===4?{tx:0,ty:0,sc:1,frame:a,clutter:0,arrive:h=>e.beat>4?1:ee((e.bt-1-h*.12)/.8),extra:()=>0}:{tx:c,ty:u,sc:l,frame:1,arrive:()=>1,extra:h=>ee((e.bt-.3-(h-16)*.1)/.5),clutter:e.bt<2.2?$.out2(ee(e.bt/1.6)):1-$.io2(ee((e.bt-2.4)/1.2))};if(s===5&&e.count(5,"c",Math.floor(e.bt*10),"tick",1800),p_(t,e,f),s===4){let h=e.p(4,3,.7),d=[["\u4F1A\u8BAE",_r[0]],["\u5F85\u529E",_r[1]],["\u9879\u76EE\u8FDB\u5EA6",_r[2]]];t.save(),t.globalAlpha*=h;let p=1020;d.forEach(_=>{t.fillStyle=_[1],Oe(t,p,142,11),t.fill(),Me(t,_[0],p+22,153,{size:34,fill:pe.ink}),p+=at(t,_[0],{size:34})+80}),t.restore()}s===5&&(Hu(t,e,1160,170,"\u62A5\u540D\u8868",3.8,4.3,5.9),Hu(t,e,1160,570,"\u7533\u8BF7\u8868",4.6,5.1,6.7),e.hit(5,6.2,"ding"),e.hit(5,7,"ding"))}else if(s===6){let r=i(6,0,"\u5B83\u80FD\u7BA1\u6211\u4E00\u4E2A\u4EBA\u7684\u4E8B\u3002"),a=i(6,1,"\u90A3\u80FD\u4E0D\u80FD\u66FF\u6211\u5199\u8F6F\u4EF6\uFF1F"),o=Math.floor(ee((e.bt-.4)*9,0,r.length)),l=e.beat>6?a.length:Math.floor(ee((e.bt-2.4)*8,0,a.length)),c={size:112};e.count(6,"k1",o,"key"),e.count(6,"k2",l,"key");let u=at(t,r,c),f=at(t,a,c);if(Me(t,r.slice(0,o),1920/2-u/2,450,{size:112,fill:pe.ink}),o<r.length&&Vi(t,1920/2-u/2+at(t,r.slice(0,o),c)+8,360,18,110,e.st,ti),l>0){Me(t,a.slice(0,l),1920/2-f/2,690,{size:112,fill:pe.ink});let h=a.indexOf("\u5199\u8F6F\u4EF6");if(h>=0&&l>h+3){let d=1920/2-f/2+at(t,a.slice(0,h),c),p=at(t,"\u5199\u8F6F\u4EF6",c),_=$.out3(ee((e.bt-5)/.6));t.fillStyle="rgba(255,143,163,.25)",t.fillRect(d,610,p*_,100),t.strokeStyle=ti,t.lineWidth=8,t.beginPath(),t.moveTo(d,724),t.lineTo(d+p*_,724),t.stroke()}(l<a.length||e.bt<6)&&Vi(t,1920/2-f/2+at(t,a.slice(0,l),c)+8,600,18,110,e.st,ti)}}}};var Wu=g_;var fc=null;function __(t,e){let n=Et(1116),i=[];t.forEach((d,p)=>{for(let _=0;_<d.merged;_++)i.push({di:p,k:_,h:n(),h2:n(),h3:n(),h4:n()})});let s=i.length,r=Math.round(s*e);i.map((d,p)=>p).sort((d,p)=>i[d].h-i[p].h).forEach((d,p)=>{i[d].night=p<r});let a=40,o=1920/2-t.length*a/2+4,l=930,c=10,u=t.reduce((d,p,_)=>p.merged>t[d].merged?_:d,0),f=1920/2,h=560;return i.forEach((d,p)=>{d.A=[o+d.di*a+d.k%3*c,l-Math.floor(d.k/3)*c],d.drop=d.di*.11+Math.floor(d.k/3)*.012+d.h4*.05;let _=d.night?d.h2*(8/24)*6.2832:(8/24+d.h2*(16/24))*6.2832,m=250+d.h3*170;d.B=[f+Math.sin(_)*m,h-Math.cos(_)*m];let g=p%81,y=Math.floor(g/9),w=g%9,b=.5+y*.075,S=f+(w-4)*175*b,E=300+y*72;d.f=g,d.fs=b,d.fx=S,d.fy=E;let x=d.h*6.2832,T=50*b*Math.sqrt(d.h2);d.C=[S+Math.cos(x)*T*.7,E-40*b+Math.sin(x)*T];let U=d.h*6.2832,C=330+d.h3*120;d.D=[700+Math.cos(U)*C,560+Math.sin(U)*C*.55]}),fc={tiles:i,N:s,peak:u,CX:f,CY:h,colW:a,x0:o,base:l,ts:c,nn:r},fc}var Xu={4:"A",5:"B",6:"C",7:"D"},x_=(t,e,n)=>{let i=e===4?[t.A[0],-40-t.h*300]:t[Xu[e-1]],s=t[Xu[e]];return[Ce(i[0],s[0],n),Ce(i[1],s[1],n)]};function dc(t,e,n){let i=n.data.days,s=e.beat,r=fc||__(i,n.data.nightShare||.3495),a=(u,f,h)=>n.q("factory",u,f,h);t.fillStyle="#01040a",t.fillRect(0,0,1920,1080),t.save(),Ao(t,e.st,.6),yi(t,1920/2,1080/2+120,1200,s===5?"160,60,255":"20,120,200",.25+.05*Math.sin(e.time*.7)),wo(t,e.time,60,11,{x:0,y:0,w:1920,h:1080},"120,220,255",.35);let o=0,l=u=>{if(s===4){let f=ee((e.bt-.4-u.drop)/.55);return f>=1&&o++,$.in2(f)}return $.io3(ee((e.bt-.2-u.h*.9)/1.5))};s===5&&v_(t,e,r),(s===6||s===7)&&y_(t,e,r),t.save(),t.globalCompositeOperation="lighter";let c=s===4?r.ts-2:s===5?6:5;for(let u of r.tiles){let f=l(u);if(s===4&&f<=0)continue;let[h,d]=x_(u,s,f);if(s===7&&f>=1){let g=Math.atan2((d-560)/.55,h-700)+e.time*.08,y=Math.hypot(h-700,(d-560)/.55);h=700+Math.cos(g)*y,d=560+Math.sin(g)*y*.55}let p=.55+.45*Math.sin(e.time*2.1+u.h*40),_="56,232,255";s===4&&u.di===r.peak&&(_="255,61,240"),s===5&&(_=u.night?"255,61,240":"56,160,255");let m=s===5&&!u.night?.35:1;t.fillStyle="rgba("+_+","+.11*m+")",t.fillRect(h-c*1.4,d-c*1.4,c*2.8,c*2.8),t.fillStyle="rgba("+_+","+.85*p*m+")",t.fillRect(h-c/2,d-c/2,c,c)}if(t.restore(),s===4){e.count(4,"n",Math.floor(o/37),"tick",1800);let u=o,f=ee(e.bt/.5);if(Me(t,Rs(u),1920/2,330,{size:230,mono:!0,align:"center",fill:"#dffbff",alpha:f,glow:"rgba(56,232,255,.8)",gb:60}),o>=r.N){let h=i[r.peak],d=r.x0+r.peak*r.colW+r.ts,p=r.base-Math.ceil(h.merged/3)*r.ts-40,_=$.out3(ee((e.bt-6.3)/.8));Me(t,String(h.merged),d,p,{size:64,mono:!0,align:"center",fill:"#ffd6fb",alpha:_,glow:"rgba(255,61,240,.9)",gb:30});let m=r.x0+e.bt*.08%1*37*r.colW;yi(t,m,r.base-120,260,"56,232,255",.12)}}if(s===5){let u=a(5,0,"35%"),f=$.out3(ee((e.bt-1.6)/1));Me(t,u,r.CX,r.CY+60,{size:190,mono:!0,align:"center",fill:"#ffe0fb",alpha:f,glow:"rgba(255,61,240,.8)",gb:60})}if(s===6){let u=Math.min(81,Math.floor(ee((e.bt-.6)/3.2)*81)+(e.bt>.6?1:0));e.count(6,"n",u,"tick",1400),Me(t,String(u),300,330,{size:220,mono:!0,align:"center",fill:"#dffbff",glow:"rgba(56,232,255,.8)",gb:60,alpha:ee(e.bt/.4)}),Me(t,a(6,0,""),1920/2,1035,{size:30,wt:400,align:"center",fill:"rgba(244,241,234,.45)"})}if(s===7){let u=$.back(ee((e.bt-.9)/.9));en(t,700,720,330*$.out3(ee((e.bt-.4)/1)),"#e8fbff",{alpha:.95}),Me(t,a(7,0,"81\xD7"),1480,650,{size:300*(.6+.4*u),mono:!0,align:"center",fill:"#ffffff",alpha:ee(u),glow:"rgba(56,232,255,.9)",gb:80}),yi(t,700,560,520,"56,232,255",.18+.06*Math.sin(e.time*1.4))}t.restore(),To(t,.8),So(t,e.time)}function v_(t,e,n){let{CX:i,CY:s}=n,r=$.out3(ee(e.bt/1.2));t.save(),t.globalAlpha=r,t.strokeStyle="rgba(160,200,255,.18)",t.lineWidth=2;for(let h of[230,440])t.beginPath(),t.arc(i,s,h,0,6.2832),t.stroke();for(let h=0;h<24;h++){let d=h/24*6.2832,p=h%6===0?448:452,_=470;t.beginPath(),t.moveTo(i+Math.sin(d)*p,s-Math.cos(d)*p),t.lineTo(i+Math.sin(d)*_,s-Math.cos(d)*_),t.lineWidth=h%6===0?4:2,t.stroke()}let a=$.out3(ee((e.bt-.8)/1.4));t.save(),t.globalCompositeOperation="lighter";let o=t.createRadialGradient(i,s,220,i,s,470);o.addColorStop(0,"rgba(255,61,240,0)"),o.addColorStop(.6,"rgba(255,61,240,"+.16*a+")"),o.addColorStop(1,"rgba(255,61,240,0)"),t.fillStyle=o,t.beginPath(),t.moveTo(i,s),t.arc(i,s,470,-Math.PI/2,-Math.PI/2+6.2832*8/24*a),t.closePath(),t.fill(),t.strokeStyle="rgba(255,61,240,"+.9*a+")",t.lineWidth=6,t.beginPath(),t.arc(i,s,470,-Math.PI/2,-Math.PI/2+6.2832*8/24*a),t.stroke(),t.restore();let l=4/24*6.2832,c=i+Math.sin(l)*540,u=s-Math.cos(l)*540;yi(t,c,u,150,"255,61,240",.35*a),t.save(),t.beginPath(),t.rect(0,0,1920,1080),t.arc(c+16,u-10,34,0,6.2832),t.clip("evenodd"),t.fillStyle="rgba(255,220,250,"+.9*a+")",t.beginPath(),t.arc(c,u,38,0,6.2832),t.fill(),t.restore();let f=e.time*.25;t.strokeStyle="rgba(255,255,255,.25)",t.lineWidth=3,t.beginPath(),t.moveTo(i,s),t.lineTo(i+Math.sin(f)*430,s-Math.cos(f)*430),t.stroke(),t.restore()}function y_(t,e,n){if(e.beat===6)for(let i=0;i<81;i++){let s=Math.floor(i/9),r=i%9,a=.5+s*.075,o=n.CX+(r-4)*175*a,l=300+s*72,c=i*37%81,u=$.back(ee((e.bt-.6-c/81*3.2)/.5));u<=0||en(t,o,l+20*a,110*a*u,"rgba(56,232,255,"+(.45+s*.05)+")",{arms:!0,t:e.time,ph:i})}else{let i=1-$.io3(ee(e.bt/1.2));if(i>0)for(let s=0;s<81;s++){let r=Math.floor(s/9),a=s%9,o=.5+r*.075,l=n.CX+(a-4)*175*o,c=300+r*72;en(t,Ce(l,700,1-i),Ce(c+20*o,720,1-i),110*o,"rgba(56,232,255,"+.5*i+")")}}}var St=pe.cyan,Bt=pe.magenta;var qu=["\u5206\u8BCA","\u5199\u4EE3\u7801","\u5BA1\u67E5","\u4FEE CI","\u5408\u5E76"];function M_(t,e,n,i,s){t.save(),t.translate(e,n),t.scale(i,i),t.fillStyle="#0c1220",me(t,-56,-38,112,72,8),t.fill(),t.strokeStyle="rgba(56,232,255,"+(.3+.6*s)+")",t.lineWidth=3,t.stroke(),t.fillStyle="rgba(56,232,255,"+(.15+.5*s)+")",t.fillRect(-46,-28,92,52),t.fillStyle="rgba(255,255,255,"+.3*s+")",t.fillRect(-36,-20,50,6),t.fillRect(-36,-8,70,6),t.fillRect(-36,4,40,6),t.fillStyle="#18202e",t.fillRect(-70,34,140,8),t.restore()}function b_(t,e,n,i,s){if(t.save(),t.translate(n,i),t.strokeStyle=s,t.fillStyle=s,t.lineWidth=7,t.lineCap="round",t.lineJoin="round",e===0)t.beginPath(),t.moveTo(-50,0),t.lineTo(-10,0),t.lineTo(40,-34),t.moveTo(-10,0),t.lineTo(40,0),t.moveTo(-10,0),t.lineTo(40,34),t.stroke();else if(e===1)Me(t,"</>",0,20,{size:70,mono:!0,align:"center",fill:s});else if(e===2)Oe(t,-8,-8,32),t.stroke(),t.beginPath(),t.moveTo(16,16),t.lineTo(46,46),t.stroke();else if(e===3){Oe(t,0,0,24),t.stroke();for(let r=0;r<8;r++){let a=r*Math.PI/4;t.beginPath(),t.moveTo(Math.cos(a)*30,Math.sin(a)*30),t.lineTo(Math.cos(a)*44,Math.sin(a)*44),t.stroke()}}else t.beginPath(),t.moveTo(-46,-34),t.lineTo(-6,0),t.lineTo(-46,34),t.moveTo(-46,0),t.lineTo(-6,0),t.lineTo(44,0),t.moveTo(26,-16),t.lineTo(44,0),t.lineTo(26,16),t.stroke();t.restore()}var S_={id:"factory",theme(t){let e=t.beat;return{tint:e===5?"#ff3df0":e===8?"#ff7a50":"#38e8ff",tint2:"#ff3df0",energy:e===7?.9:.6,dim:.1}},draw(t,e,n){if(e.beat>=4&&e.beat<=7)return dc(t,e,n);let i=(a,o,l)=>n.q("factory",a,o,l),s=e.beat,r=n.data.days;if(s===1){let a=e.p(1,0,.6,$.back),o=e.p(1,.5,.8,$.back);t.save(),t.translate(960,150),t.scale(a,a),en(t,0,70,130,pe.ink),t.save(),t.translate(56,22),t.rotate(.3),t.fillStyle="#222836",me(t,-14,-34,28,68,8),t.fill(),t.fillStyle=Bt,Oe(t,0,-16,6),t.fill(),t.fillStyle=St,Oe(t,0,4,6),t.fill(),t.restore(),t.restore();let l=e.p(1,1.2,.8);t.save(),t.strokeStyle="rgba(255,61,240,"+.8*l+")",t.lineWidth=4,t.setLineDash([14,12]),t.lineDashOffset=-e.st*40,t.beginPath(),t.moveTo(1010,150),t.quadraticCurveTo(1e3,250,960,320),t.stroke(),t.restore();for(let u=0;u<3;u++)xt(t,960,420,(e.st*.5+u/3)%1*l,120,280,"rgba(56,232,255,.9)",4);for(let u=0;u<2;u++)for(let f=0;f<7;f++){let h=u*7+f,d=300+f*220+u*110-(u?110:0)+0,p=740+u*170,_=e.p(1,1+h*.08,.5,$.back),m=u===0?270+f*230:380+f*190-0,g=u===0?m:m+0;if(_<=0)continue;let y=u===0?330+f*210:435+f*175;t.save(),t.strokeStyle="rgba(56,232,255,.35)",t.lineWidth=2,t.beginPath(),t.moveTo(960,520),t.bezierCurveTo(960,640,y,600,y,p-50),t.stroke();let b=(e.st*.45+h*.137)%1,S=(1-b)*(1-b)*(1-b)*960+3*(1-b)*(1-b)*b*960+3*(1-b)*b*b*y+b*b*b*y,E=(1-b)*(1-b)*(1-b)*520+3*(1-b)*(1-b)*b*640+3*(1-b)*b*b*600+b*b*b*(p-50);t.fillStyle="#fff",Oe(t,S,E,5),t.fill(),t.restore(),t.save(),t.translate(y,p),t.scale(_,_),Nn(t,0,0,104,{color:h%3===0?Bt:St,glow:14,t:e.time,ph:h}),t.restore()}t.save(),t.translate(960,420),t.scale(o,o),Nn(t,0,0,220,{color:St,glow:40,t:e.time}),t.restore();let c=e.p(1,1,.5);t.save(),t.globalAlpha*=c,t.fillStyle="rgba(56,232,255,.16)",me(t,860,546,200,62,31),t.fill(),t.strokeStyle=St,t.lineWidth=3,t.stroke(),Me(t,i(1,0,"\u4E3B\u7BA1"),960,591,{size:42,align:"center",fill:St}),t.restore()}else if(s===2){let a=ee((e.bt-.2)/1.3),o=e.p(2,.9,1.2,$.io3),l=e.p(2,1.4,1.6,$.io2),c=1-e.p(2,1.4,.8);t.save(),t.globalAlpha*=c,en(t,960,220,130,pe.ink),t.restore(),a<1&&(t.save(),t.translate(1016+a*120,172+a*a*950),t.rotate(.3+a*5),t.fillStyle="#222836",me(t,-14,-34,28,68,8),t.fill(),t.fillStyle=Bt,Oe(t,0,-16,6),t.fill(),t.restore());let u=Ce(960,300,o),f=Ce(420,670,o),h=Ce(u,1920,l);t.save(),t.strokeStyle="rgba(56,232,255,.8)",t.lineWidth=6;for(let p of[-44,44])t.beginPath(),t.moveTo(u+100,f+p),t.lineTo(h,f+p),t.stroke();t.fillStyle="rgba(56,232,255,.12)",t.fillRect(u+100,f-44,h-u-100,88),t.beginPath(),t.rect(u+100,f-44,h-u-100,88),t.clip(),t.strokeStyle="rgba(56,232,255,.55)",t.lineWidth=5;let d=e.st*120%60;for(let p=u+100-60+d;p<h;p+=60)t.beginPath(),t.moveTo(p,f-30),t.lineTo(p+22,f),t.lineTo(p,f+30),t.stroke();for(let p=0;p<12;p++){let _=u+160+(e.st*150+p*150)%1400;_<h-30&&(t.fillStyle=p%3?St:Bt,me(t,_-24,f-18,48,36,8),t.fill())}t.restore(),t.save(),t.translate(u,f),Nn(t,0,0,190,{color:St,glow:36,t:e.time}),t.restore();for(let p=0;p<12;p++){let _=p%4,m=Math.floor(p/4),g=1300+_*160,y=m===0?220:m===1?410:920,w=e.p(2,2.2+p*.12,.5,$.back);if(w<=0)continue;let b=m<2?f-44:f+44;t.save(),t.strokeStyle="rgba(56,232,255,"+.35*w+")",t.lineWidth=2,t.beginPath(),t.moveTo(g,b),t.bezierCurveTo(g,(b+y)/2,g,(b+y)/2,g,y+(m<2?40:-40)),t.stroke(),t.restore(),M_(t,g,y,w*.95,.5+.5*Math.sin(e.st*2+p))}}else if(s===3){let a=qu.map((d,p)=>280+p*340),o=1.5,l=1.25;Me(t,"ZenoForge",1920/2,170,{size:70,align:"center",track:18,fill:pe.ink,alpha:e.p(3,0,.8)});let u=e.beat>3?4.99:ee((e.bt-o)/l,0,4.99),f=Math.floor(u),h=u-f;qu.forEach((d,p)=>{let _=e.p(3,.3+p*.15,.6,$.back),m=e.beat>3?p===4:(p===f?1:0)*(h<.55?1:.3);_<=0||(t.save(),t.translate(a[p],620),t.scale(_,_),t.fillStyle="rgba(14,20,34,.92)",me(t,-140,-190,280,400,28),t.fill(),t.strokeStyle=m?p===3?Bt:St:"rgba(255,255,255,.18)",t.lineWidth=m?5:3,t.shadowColor=m?p===3?Bt:St:"transparent",t.shadowBlur=m?30:0,t.stroke(),t.shadowBlur=0,Nn(t,0,-90,110,{color:m?St:"rgba(56,232,255,.5)",glow:m?20:0,t:e.time,ph:p}),b_(t,p,0,60,m?"#fff":"rgba(255,255,255,.4)"),Me(t,d,0,170,{size:50,align:"center",fill:m?"#fff":pe.dim}),t.restore())});for(let d=0;d<4;d++)t.strokeStyle="rgba(56,232,255,.25)",t.lineWidth=3,t.setLineDash([10,10]),t.beginPath(),t.moveTo(a[d]+150,620),t.lineTo(a[d+1]-150,620),t.stroke(),t.setLineDash([]);if(e.beat>3||e.bt>o-.5){let d=e.beat>3?1:$.io2(ee(h/.45-.22)),p=Ce(a[f],a[Math.min(4,f+1)],f>=4||h<.55?0:$.io2((h-.55)/.45)),_=440+(e.beat>3,0),m=f===3&&h>.1&&h<.45,g=f===4||e.beat>3,y=m?pe.red:g?pe.green:pe.amber;t.save(),t.translate(p,_-40+Math.sin(e.st*3)*4),t.shadowColor=y,t.shadowBlur=28,t.fillStyle="#0b0e18",me(t,-70,-46,140,92,12),t.fill(),t.strokeStyle=y,t.lineWidth=5,t.stroke(),t.shadowBlur=0,t.fillStyle=y,t.fillRect(-48,-26,60,8),t.globalAlpha*=.55,t.fillRect(-48,-6,96,8),t.fillRect(-48,14,70,8),t.globalAlpha/=.55,g&&(t.strokeStyle=pe.green,t.lineWidth=7,t.beginPath(),t.moveTo(26,18),t.lineTo(40,32),t.lineTo(62,4),t.stroke()),t.restore()}e.count(3,"st",f,"tick",800+f*160),e.beat===3&&e.bt>o+4*l+.3&&(e.hit(3,o+4*l+.3,"chime",7),xt(t,a[4],620,ee((e.bt-o-4*l-.3)/.9),120,360,pe.green,7))}else if(s===4){let a=e.p(4,.3,2.4),o=r.reduce((y,w)=>y+w.merged,0),l=Math.round(o*a),c=Math.max.apply(null,r.map(y=>y.merged)),u=r.findIndex(y=>y.merged===c);Kt(t,Rs(l),1920/2,340,{size:250,align:"center",fill:(y,w,b,S)=>$t(y,0,b-S*.8,0,b,[[0,"#d8fbff"],[1,St]]),glow:"rgba(56,232,255,.6)",gb:50,alpha:$.out3(ee(e.bt/.5))}),e.count(4,"n",Math.floor(l/37),"tick",1500);let f=150,h=1620/r.length,d=980,p=400;r.forEach((y,w)=>{let b=e.p(4,1.1+w*.035,.7,$.out3),S=y.merged/c*p*b,E=w===u,x=e.p(4,3.3,.6),T=f+w*h,U=$t(t,0,d-p,0,d,[[0,E?"#ffffff":Bt],[1,St]]);t.save(),E&&(t.shadowColor="#fff",t.shadowBlur=40*x),t.fillStyle=E&&x>0?$t(t,0,d-S,0,d,[[0,"#ffffff"],[1,Bt]]):$t(t,0,d-S,0,d,[[0,"rgba(255,61,240,.9)"],[1,"rgba(56,232,255,.7)"]]),me(t,T+3,d-S,h-6,Math.max(0,S),4),t.fill(),t.restore()});let _=e.p(4,3.3,.6,$.back),m=f+u*h+h/2;if(_>0){t.save(),t.translate(m,d-c/c*p-40),t.scale(_,_),Me(t,String(c),0,0,{size:90,mono:!0,align:"center",fill:"#fff",glow:Bt,gb:40});let y=n.byKey["factory-4"].visual.match(/(\d+) 月 (\d+) 日/);Me(t,y?y[0]:"",0,-100,{size:36,align:"center",fill:pe.dim}),t.restore(),xt(t,m,d-p*.5,e.p(4,3.4,.9),20,220,Bt,5)}let g=n.byKey["factory-4"].sayText.match(/(\d+) 号到 (\d+ 月 \d+) 号/);Me(t,"10 \u6708 1 \u53F7",f,d+50,{size:30,wt:400,fill:pe.dim}),Me(t,g?g[2]+" \u53F7":"",f+1620,d+50,{size:30,wt:400,align:"right",fill:pe.dim}),Me(t,"37 \u5929",1920/2,d+50,{size:30,wt:400,align:"center",fill:pe.dim}),e.hit(4,3.3,"chime",12)}else if(s===5){let c=$.out3(ee(e.bt/.8)),u=e.p(5,.8,2.4,$.io2),f=_=>-Math.PI/2+_/24*Math.PI*2;t.save(),t.globalAlpha*=c,t.fillStyle="rgba(255,255,255,.04)",Oe(t,640,560,370),t.fill(),t.strokeStyle="rgba(255,255,255,.25)",t.lineWidth=4,Oe(t,640,560,370),t.stroke(),t.fillStyle=Dn(t,640,560,0,330,[[0,"rgba(255,61,240,"+.5*u+")"],[1,"rgba(255,61,240,"+.08*u+")"]]),t.beginPath(),t.moveTo(640,560),t.arc(640,560,330,f(0),f(0)+(f(8)-f(0))*u),t.closePath(),t.fill(),t.strokeStyle=Bt,t.lineWidth=12,t.shadowColor=Bt,t.shadowBlur=30*u,t.beginPath(),t.arc(640,560,370,f(0),f(0)+(f(8)-f(0))*u),t.stroke(),t.shadowBlur=0;for(let _=0;_<24;_++){let m=f(_),g=_%6===0?46:22;t.strokeStyle=_<8&&_/8<=u?Bt:"rgba(255,255,255,.4)",t.lineWidth=_%6===0?6:3,t.beginPath(),t.moveTo(640+Math.cos(m)*(330-g),560+Math.sin(m)*(330-g)),t.lineTo(640+Math.cos(m)*330,560+Math.sin(m)*330),t.stroke()}[0,6,12,18].forEach(_=>{let m=f(_);Me(t,String(_),640+Math.cos(m)*420,560+Math.sin(m)*420+20,{size:54,mono:!0,align:"center",fill:pe.ink})});let h=f(8*u);t.strokeStyle="#fff",t.lineWidth=8,t.lineCap="round",t.shadowColor="#fff",t.shadowBlur=20,t.beginPath(),t.moveTo(640,560),t.lineTo(640+Math.cos(h)*310,560+Math.sin(h)*310),t.stroke(),t.shadowBlur=0,t.fillStyle="#fff",Oe(t,640,560,16),t.fill(),t.save(),t.translate(640+Math.cos(f(4))*330*.6,560+Math.sin(f(4))*330*.6),t.fillStyle="rgba(255,255,255,.85)",t.beginPath(),t.arc(0,0,30,0,7),t.fill(),t.globalCompositeOperation="destination-out",t.beginPath(),t.arc(14,-8,26,0,7),t.fill(),t.restore(),t.restore();let d=i(5,0,"35%"),p=$.out3(ee((e.bt-.9)/2.4));Kt(t,Ei(d,p),1450,640,{size:340,align:"center",fill:(_,m,g,y)=>$t(_,0,g-y*.8,0,g,[[0,"#ffd6fb"],[1,Bt]]),glow:"rgba(255,61,240,.7)",gb:60,alpha:e.p(5,.8,.5)}),e.count(5,"p",Math.round(p*35),"tick",1e3),e.hit(5,3.3,"chime",4),xt(t,1450,540,e.p(5,3.3,1),100,480,Bt,6)}else if(s===6){let a=ee((e.bt-.5)/4.6),o=e.beat>6?81:Math.max(e.bt>.3?1:0,1+Math.floor(80*Math.pow(a,2.1)));for(let l=0;l<81;l++){let c=l%9,u=Math.floor(l/9),f=800+c*118,h=190+u*92,d=e.beat>6?9:e.bt-(l===0?.3:.5+4.6*Math.pow(l/80,1/2.1));if(l>=o)continue;let p=$.back(ee(d/.35));t.save(),t.translate(f,h),t.scale(p,p);let _=d<.3;en(t,0,36,80,_?"#fff":St,{alpha:_?1:.92}),t.restore(),d>0&&d<.5&&xt(t,f,h,d/.5,10,60,St,3)}Kt(t,String(o),360,640,{size:430,align:"center",fill:(l,c,u,f)=>$t(l,0,u-f*.8,0,u,[[0,"#d8fbff"],[1,St]]),glow:"rgba(56,232,255,.6)",gb:50}),e.count(6,"n",o,"tick",700+o*12),Me(t,i(6,0,""),110,1040,{size:34,wt:400,fill:pe.dim,maxW:1400,alpha:e.p(6,1.5,.8)})}else if(s===7){for(let l=0;l<81;l++){let c=l%9,u=Math.floor(l/9),f=800+c*118,h=190+u*92+36,d=$.in3(ee((e.bt-.1-l*.007)/.75));if(d>=1)continue;let p=Ce(f,960,d),_=Ce(h,540,d)-Math.sin(d*Math.PI)*60;en(t,p,_,84*(1-d*.7),St,{alpha:1-d*.5})}let a=e.p(7,.9,.55,$.out4),o=e.p(7,.85,.5);if(o>0&&o<1&&(t.fillStyle="rgba(255,255,255,"+.35*(1-o)+")",t.fillRect(0,0,1920,1080)),a>0){let l=e.beat===7&&e.bt>.9?Math.max(0,1-(e.bt-.9)/.5)*14:0;t.save(),t.translate(960+Math.sin(e.bt*80)*l,540+Math.cos(e.bt*60)*l);let c=Ce(1.6,1,a);t.scale(c,c),t.globalAlpha*=ee(a*2),Kt(t,i(7,0,"81\xD7"),0,240,{size:700,align:"center",fill:(u,f,h,d)=>$t(u,0,h-d*.8,0,h,[[0,"#ffffff"],[.5,St],[1,Bt]]),glow:"rgba(56,232,255,.75)",gb:90}),t.restore(),xt(t,960,540,e.p(7,.9,1),100,1e3,St,12),xt(t,960,540,e.p(7,1.05,1),100,1200,Bt,6)}e.hit(7,.9,"thud")}else if(s===8){let a=i(8,0,"\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u4E45\uFF1F"),o=[],l=.7;for(let h=0;h<18;h++)o.push(l),l+=Math.max(.12,.72-h*.045);let c=e.beat>8?18:o.filter(h=>e.bt>=h).length,u={size:56};if(t.save(),t.translate(330,560),Nn(t,0,0,300,{color:St,glow:20,t:e.time,mood:"sad"}),c>6){let h=e.st*1.2%1;t.fillStyle="rgba(120,200,255,"+(1-h)+")",t.beginPath(),t.moveTo(130,-100+h*90),t.quadraticCurveTo(150,-70+h*90,130,-50+h*90),t.quadraticCurveTo(110,-70+h*90,130,-100+h*90),t.fill()}t.restore(),t.save(),t.beginPath(),t.rect(700,120,700,880),t.clip();for(let h=0;h<c;h++){let d=e.beat>8?9:e.bt-o[h],p=$.back(ee(d/.25)),_=940-(c-1-h)*96,m=at(t,a,u)+80,g=ee((_-120)/160);t.save(),t.globalAlpha*=g,t.translate(1300,_),t.scale(p,p),t.fillStyle=h===c-1&&d<.6?"#ffe8d6":"#ff7a50",me(t,-m,-40,m,80,28),t.fill(),Me(t,a,-m/2,18,{size:56,align:"center",fill:"#1a0a05"}),t.restore()}t.restore(),e.count(8,"n",c,"pop",520);let f=c>=18?Math.max(0,1-(e.bt-o[17])/.4)*8:0;Kt(t,c+" \u6B21",1860+Math.sin(e.bt*70)*f,1010,{size:190,align:"right",fill:c>=18?"#ff7a50":pe.ink,glow:c>=18?"rgba(255,122,80,.7)":null,gb:50}),c===18&&xt(t,1700,930,ee((e.bt-o[17])/.9),60,400,"#ff7a50",7)}else if(s===9){let a=$.back(ee(e.bt/.5)),o=e.p(9,1.2,.25,$.out2),l=e.p(9,1.45,.25,$.out2),c=e.p(9,2.2,.9,$.in3),u=e.beat===9&&e.bt>1.7?Math.max(0,1-(e.bt-1.7)/.45)*16:0;t.translate(Math.sin(e.bt*90)*u,Math.cos(e.bt*70)*u),t.save(),t.translate(960,540+c*380),t.rotate(c*.35),t.scale(a,a),t.globalAlpha*=1-c*.8;let f=$t(t,0,-120,0,120,[[0,"#5dffa6"],[1,"#1fbf6a"]]);t.shadowColor="rgba(61,220,132,.7)",t.shadowBlur=50,t.fillStyle=f,me(t,-400,-125,800,250,62),t.fill(),t.shadowBlur=0,Kt(t,"$",-220,56,{size:190,align:"center",fill:"#06140d"}),Me(t,"\u4ED8\u8D39",70,52,{size:130,align:"center",fill:"#06140d"}),t.restore(),t.save(),t.globalAlpha*=1-c*0,t.strokeStyle=pe.red,t.lineWidth=56,t.lineCap="round",t.shadowColor=pe.red,t.shadowBlur=40,t.beginPath(),t.moveTo(560,330),t.lineTo(560+800*o,330+420*o),t.stroke(),t.beginPath(),t.moveTo(1360,330),t.lineTo(1360-800*l,330+420*l),t.stroke(),t.restore(),e.hit(9,1.2,"stamp"),e.hit(9,1.45,"thud")}else if(s===10){let a=$.out3(ee(e.bt/.8)),o=Math.max(0,e.bt-1.3),l=e.bt<1.3?.035*Math.sin(e.bt*9)*(1-e.bt/1.3):.21*(1-Math.exp(-4.5*o)*Math.cos(8*o)),c=960,u=380,f=520;t.save(),t.globalAlpha*=a,t.fillStyle="rgba(255,255,255,.12)",t.beginPath(),t.moveTo(c-28,960),t.lineTo(c+28,960),t.lineTo(c+10,u),t.lineTo(c-10,u),t.closePath(),t.fill(),me(t,c-200,950,400,36,10),t.fill();let h=c-Math.cos(l)*f,d=u-Math.sin(l)*f,p=c+Math.cos(l)*f,_=u+Math.sin(l)*f,m=(g,y,w)=>{t.strokeStyle="rgba(255,255,255,.5)",t.lineWidth=3,t.beginPath(),t.moveTo(g,y),t.lineTo(g-190,y+330),t.moveTo(g,y),t.lineTo(g+190,y+330),t.stroke(),t.fillStyle="rgba(255,255,255,.14)",t.beginPath(),t.ellipse(g,y+336,230,26,0,0,7),t.fill(),t.strokeStyle="rgba(255,255,255,.6)",t.lineWidth=4,t.stroke()};m(h,d,!0),m(p,_,!1);for(let g=0;g<81;g++){let y=g%9,w=Math.floor(g/9),b=e.p(10,.2+g*.006,.4,$.back);b>0&&en(t,h-200+y*50,d+334-w*22-6,44*b,St,{alpha:.95})}t.save(),t.translate(p,_+300),t.fillStyle=$t(t,0,-90,0,20,[[0,"#ffe08a"],[1,"#ff9a2d"]]),t.shadowColor="rgba(255,170,50,.7)",t.shadowBlur=40,me(t,-190,-110,380,130,26),t.fill(),t.shadowBlur=0,Kt(t,i(10,0,"$500 / \u6708"),0,-18,{size:78,align:"center",fill:"#2a1500",maxW:340}),t.restore(),t.strokeStyle="rgba(255,255,255,.85)",t.lineWidth=14,t.lineCap="round",t.beginPath(),t.moveTo(h,d),t.lineTo(p,_),t.stroke(),t.fillStyle=pe.amber,Oe(t,c,u,26),t.fill(),t.restore(),e.hit(10,1.3,"thud")}}},Yu=S_;var xr="#ffd25a",Zu="#3ddc84";function pc(t,e,n,i,s,r,a){t.save(),t.translate(e,n),t.shadowColor=s,t.shadowBlur=a??30,t.fillStyle="rgba(8,12,22,.92)",t.strokeStyle=s,t.lineWidth=Math.max(2.5,i*.03),t.lineJoin="round",t.beginPath(),t.moveTo(0,-i*.46),t.bezierCurveTo(-i*.5,-i*.6,-i*.86,-i*.1,-i*.6,i*.18),t.bezierCurveTo(-i*.55,i*.44,-i*.22,i*.5,-i*.08,i*.36),t.lineTo(-i*.07,i*.56),t.lineTo(i*.07,i*.56),t.lineTo(i*.08,i*.36),t.bezierCurveTo(i*.22,i*.5,i*.55,i*.44,i*.6,i*.18),t.bezierCurveTo(i*.86,-i*.1,i*.5,-i*.6,0,-i*.46),t.closePath(),t.fill(),t.stroke(),t.shadowBlur=0,t.lineWidth=Math.max(2,i*.022),t.globalAlpha*=.85,t.beginPath(),t.moveTo(0,-i*.44),t.bezierCurveTo(i*.06,-i*.2,-i*.06,i*.1,0,i*.34);for(let l of[-1,1])t.moveTo(l*i*.08,-i*.2),t.quadraticCurveTo(l*i*.34,-i*.3,l*i*.46,-i*.06),t.moveTo(l*i*.06,i*.02),t.quadraticCurveTo(l*i*.3,-i*.06,l*i*.5,i*.14),t.moveTo(l*i*.1,i*.22),t.quadraticCurveTo(l*i*.28,i*.3,l*i*.38,i*.3);t.stroke(),t.fillStyle=s;let o=t.globalAlpha;for(let l=0;l<7;l++){let c=(r||0)*.8+l*.9,u=Math.cos(c)*i*.34,f=Math.sin(c*1.3)*i*.28;t.globalAlpha=o*(.5+.5*Math.sin((r||0)*3+l)),Oe(t,u,f,i*.022),t.fill()}t.restore()}var mc=null;function T_(){if(mc)return mc;let t=Et(77),e=Array.from({length:9},()=>[300+t()*1300,260+t()*600,140+t()*220,80+t()*130]);e.push([560,560,300,200],[1020,420,300,190],[1400,700,280,190]);let n=[],i=30;for(let s=200;s<940;s+=i*.866)for(let r=180,a=Math.round((s-200)/(i*.866));r<1760;r+=i){let o=r+a%2*i/2,l=0;for(let c of e)l+=Math.exp(-Math.pow((o-c[0])/c[2],2)-Math.pow((s-c[1])/c[3],2));l+=Math.sin(o*.031)*Math.cos(s*.027)*.18,l>.55&&n.push([o,s])}return mc=n}function w_(t,e,n,i,s){t.save(),t.translate(e,n),t.scale(i,i),t.fillStyle="rgba(10,14,22,.9)",me(t,-34,-14,68,46,6),t.fill(),t.strokeStyle=s?xr:"rgba(255,255,255,.35)",t.lineWidth=3,t.stroke(),t.fillStyle=s?xr:"rgba(255,255,255,.3)",t.beginPath(),t.moveTo(-42,-14),t.lineTo(42,-14),t.lineTo(34,-34),t.lineTo(-34,-34),t.fill(),t.fillStyle=s?"#ff6a4d":"rgba(255,255,255,.2)",Oe(t,0,10,10),t.fill(),t.fillStyle=Zu,t.beginPath(),t.ellipse(8,0,6,3,-.6,0,7),t.fill(),t.restore()}var A_={id:"copy",theme(t){return{tint:t.beat===1?"#ffd25a":"#ffb340",tint2:"#3ddc84",energy:.55,dim:.1}},draw(t,e,n){let i=(r,a,o)=>n.q("copy",r,a,o),s=e.beat;if(s===1){let r=[[560,600],[1050,440],[1420,720]],a=e.p(1,0,1.6,$.out2);T_().forEach(u=>{let f=Math.hypot(u[0]-560,u[1]-600)/1100,h=ee(a*1.6-f);h>0&&(t.fillStyle="rgba(255,210,90,"+(.22+.4*h*(.5+.5*Math.sin(u[0]*.02+u[1]*.03+e.st)))+")",Oe(t,u[0],u[1],3.8),t.fill())});let l=[0,1.9,3.3];r.forEach((u,f)=>{let h=f===0?e.p(1,.6,.5):e.p(1,l[f]+1.1,.5);w_(t,u[0],u[1],.9+h*.1,h>.5),h>0&&h<1&&xt(t,u[0],u[1],h,20,130,xr,4)});let c=e.p(1,.3,.8,$.back);pc(t,560,450,230*c,xr,e.time);for(let u=1;u<3;u++){let f=e.p(1,l[u],1.1,$.io2),h=r[u][0],d=r[u][1]-150,p=560,_=450;if(f<=0)continue;let m=Ce(p,h,f),g=Ce(_,d,f)-Math.sin(f*Math.PI)*220,y=Ce(230,150,f);t.save(),t.strokeStyle="rgba(255,210,90,.28)",t.lineWidth=3,t.setLineDash([10,12]),t.beginPath(),t.moveTo(p,_),t.quadraticCurveTo((p+h)/2,Math.min(_,d)-260,h,d),t.stroke(),t.restore(),pc(t,m,g,y,u===1?"#7dffb0":"#8fd6ff",e.time),e.hit(1,l[u]+1,"chime",u*4+2),e.hit(1,l[u],"whoosh")}}else if(s===2){Me(t,"\u603B\u8D26",1920/2,150,{size:56,align:"center",track:24,fill:pe.dim,alpha:e.p(2,0,.6)});let r=[[420,"#ffd25a"],[960,"#3ddc84"],[1500,"#38e8ff"]];r.forEach((a,o)=>{let l=e.p(2,.3+o*1.1,.8,$.out4);if(l<=0)return;let[c,u]=i(2,o,"").split("\uFF1A"),f=a[0],h=600+(1-l)*220;if(t.save(),t.globalAlpha*=l,t.translate(f,h),t.fillStyle="rgba(12,16,26,.92)",me(t,-240,-330,480,640,32),t.fill(),t.strokeStyle=a[1],t.lineWidth=4,t.shadowColor=a[1],t.shadowBlur=28,t.stroke(),t.shadowBlur=0,t.save(),t.translate(0,-190),t.strokeStyle=a[1],t.fillStyle=a[1],t.lineWidth=8,t.lineCap="round",t.lineJoin="round",o===0){for(let d=0;d<4;d++)t.beginPath(),t.ellipse(-50+d%2*100,40-Math.floor(d/2)*34-d%2*8,48,16,0,0,7),t.stroke();t.beginPath(),t.moveTo(-30,-80),t.lineTo(30,-80),t.stroke()}else if(o===1){me(t,-62,-80,124,150,12),t.stroke();for(let d=0;d<3;d++)t.beginPath(),t.moveTo(-36,-44+d*28),t.lineTo(36-d*14,-44+d*28),t.stroke();Oe(t,40,56,26),t.fill()}else t.beginPath(),t.moveTo(-76,-20),t.lineTo(0,-64),t.lineTo(76,-20),t.lineTo(76,66),t.lineTo(0,106),t.lineTo(-76,66),t.closePath(),t.stroke(),t.beginPath(),t.moveTo(0,-64),t.lineTo(0,106),t.moveTo(-76,-20),t.lineTo(0,24),t.lineTo(76,-20),t.stroke();if(t.restore(),Me(t,c,0,-20,{size:92,align:"center",fill:a[1],maxW:420}),Ar(t,u||"",430,{size:44}).forEach((d,p)=>Me(t,d,0,70+p*72,{size:44,wt:400,align:"center",fill:pe.ink})),t.restore(),o>0){let d=e.p(2,.3+o*1.1-.15,.5,$.back);t.save(),t.translate((r[o-1][0]+a[0])/2,600),t.scale(d,d),t.strokeStyle=pe.ink,t.lineWidth=10,t.lineCap="round",t.beginPath(),t.moveTo(-26,0),t.lineTo(26,0),t.moveTo(0,-26),t.lineTo(0,26),t.stroke(),t.restore()}e.hit(2,.3+o*1.1,"pop",520+o*160)})}else if(s===3){let r=i(3,0,""),a=Math.floor(ee((e.bt-.9)*9,0,r.length)),o={size:112},l=at(t,r,o),c=e.p(3,0,1,$.back);e.count(3,"k",a,"key"),pc(t,1920/2,300,250*c,xr,e.time,50+30*Math.sin(e.st*2));let u=e.p(3,1.2,.9,$.back),f=e.p(3,1.6,.9,$.back);t.save(),t.translate(330,470),t.scale(u,u),t.strokeStyle="#ff8a3d",t.fillStyle="rgba(255,138,61,.14)",t.lineWidth=8,Oe(t,0,0,100),t.fill(),t.stroke(),t.lineCap="round",t.lineJoin="round",t.beginPath(),t.moveTo(0,-46),t.lineTo(0,46),t.moveTo(-32,14),t.lineTo(0,46),t.lineTo(32,14),t.stroke(),t.restore(),t.save(),t.translate(1590,470),t.scale(f,f),t.strokeStyle=Zu,t.fillStyle="rgba(61,220,132,.14)",t.lineWidth=8,Oe(t,0,0,100),t.fill(),t.stroke(),t.lineCap="round",t.lineJoin="round",t.beginPath(),t.moveTo(0,46),t.lineTo(0,-46),t.moveTo(-32,-14),t.lineTo(0,-46),t.lineTo(32,-14),t.stroke(),t.restore(),Me(t,r.slice(0,a),1920/2-l/2,800,{size:112,fill:pe.ink,glow:"rgba(255,210,90,.35)",gb:40})}}},Ju=A_;var E_=["#38e8ff","#ff3df0","#b6ff3d","#ffd25a"],In=1920,bs=1080,vr=160,Co=.295;function R_(t,e,n,i){let{rows:s,full:r}=Ou(e,n);s.forEach(u=>{u.n=r(u),u.rule=1});let a=n.q("ledger-again",2,1,"+ \u4E00\u7FA4 Grok Bot"),o=s[2],l=r(o);o.value+=" "+a;let c=e.beat>2?a.length+1:e.beat<2?0:Math.max(0,Math.floor((e.bt-.6)*10));o.n=l+Math.min(a.length+1,c),e.count(2,"k",o.n,"key"),t.save(),t.globalAlpha*=i,t.strokeStyle="rgba(255,179,64,.2)",t.lineWidth=2,t.beginPath(),t.moveTo(Hn-66,Mi-120),t.lineTo(Hn-66,Mi+300+70),t.moveTo(Hn-58,Mi-120),t.lineTo(Hn-58,Mi+300+70),t.stroke(),t.strokeStyle="rgba(255,179,64,.55)",t.lineWidth=3;for(let u of[62,72])t.beginPath(),t.moveTo(Hn-40,Mi+300+u),t.lineTo(Hn+1320,Mi+300+u),t.stroke();Fu(t,s,e.st,e.beat===2&&o.n<l+a.length+1),t.restore();for(let u=0;u<14;u++){let f=e.p(2,1.6+u*.17,.5,$.back);if(f<=0)continue;let h=410+u*100,d=930;t.save(),t.translate(h,d),t.scale(f,f),Nn(t,0,0,74,{color:E_[u%4],glow:22,t:e.time,ph:u}),t.restore(),e.beat===2&&e.count(2,"b"+u,e.bt>1.6+u*.17?1:0,"pop",500+u*60)}}function C_(t){if(t.beat<=2)return{s:1,fx:960};if(t.beat===3)return{s:Ce(1,Co,$.io3(ee(t.bt/2.8))),fx:960};if(t.beat===4){let e=$.io3(ee((t.bt-.3)/2.4));return{s:Ce(Co,1,e),fx:Ce(960,960-In-vr,e)}}return{s:1,fx:960-In-vr}}var P_={id:"ledger-again",theme(t){return{tint:t.beat>=3&&t.beat<5?"#ff8fa3":"#ffb340",tint2:"#38e8ff",energy:t.beat===1?.15:t.beat===5?.85:.45,dim:t.beat===1?.9:t.beat===5?0:.3}},draw(t,e,n){let i=e.beat;if(i===5){let l=n.q("ledger-again",5,0,"\u6211\u7528 Grok Bot \u8D5A\u94B1"),c=168,u={size:c},f=at(t,l,u),h=1920/2-f/2,d=t.createLinearGradient(h,0,h+f,0);d.addColorStop(0,"#ffe2a6"),d.addColorStop(.5,"#fff"),d.addColorStop(1,"#ffb340");let p=0;for(let g of l){let y=h+at(t,l.slice(0,p),u),w=$.out4(ee((e.bt-.3-p*.06)/.8));p++,w>0&&Me(t,g,y,560+(1-w)*90,{size:c,fill:d,alpha:w,glow:"rgba(255,179,64,.55)",gb:44})}let _=e.p(5,1.8,.8,$.back);_>0&&(t.save(),t.translate(1790,950),t.scale(_,_),Cs(t,0,0,110,{glow:26}),t.restore()),t.strokeStyle="rgba(255,179,64,.6)",t.lineWidth=3;let m=360*$.out3(ee((e.bt-1.4)/1));t.beginPath(),t.moveTo(1920/2-m/2,640),t.lineTo(1920/2+m/2,640),t.stroke();return}let s=C_(e),r=i===1&&e.bt<.9?[0,1,.2,1,.55,1][Math.floor(e.bt/.15)%6]:1;t.save(),t.translate(1920/2,1080/2),t.scale(s.s,s.s),t.translate(-s.fx,-1080/2);let a=i>=3?$.out3(ee((e.bt-(i===3?.3:9))/1)):0,o=[[-In-vr,"me",4,"chats become a calendar"],[In+vr,"factory",3,""]];i>=3&&o.forEach((l,c)=>{t.save(),t.translate(960+l[0]-960,0),t.beginPath(),t.rect(0,0,In,bs),t.clip(),t.fillStyle="rgba(4,6,12,.92)",t.fillRect(0,0,In,bs),n.scenes[l[1]].draw(t,bo(l[2],99,e.st+10,e.time),n),t.restore(),t.save(),t.strokeStyle="rgba(255,255,255,"+.28*(i===3?$.out3(ee(e.bt/1.2)):1)+")",t.lineWidth=4/s.s*Co,t.strokeRect(l[0],0,In,bs),t.restore()}),t.save(),t.beginPath(),i>=3&&(t.rect(0,0,In,bs),t.clip(),t.fillStyle="rgba(4,6,12,.92)",t.fillRect(0,0,In,bs),t.strokeStyle="rgba(255,179,64,.5)",t.lineWidth=4/s.s*Co,t.strokeRect(0,0,In,bs)),R_(t,e,n,r),t.restore(),i===4&&e.bt>2.8&&xt(t,-In-vr+150,200,(e.bt-2.8)*.8%1,30,150,"#3ddc84",5),t.restore(),i===3&&e.hit(3,.2,"whoosh"),i===4&&e.hit(4,.3,"whoosh")}},Ku=P_;var Mr=window.DECK,Tt=Mr.beats,As={};[ku,Vu,Wu,Yu,Ju,Ku].forEach(t=>{As[t.id]=t});var br={};Tt.forEach(t=>{br[t.key]=t});var $u={DECK:Mr,scenes:As,data:Mr.data,beats:Tt,byKey:br,q:(t,e,n,i)=>{let s=br[t+"-"+e];return s&&s.q[n]!=null?s.q[n]:i}},I_={1:1,2:2,3:4,4:3,5:5},Qu=t=>Mr.scenes.find(e=>e.id===t).act,Si=t=>document.getElementById(t),ju=Si("stage"),ef=Si("gl"),rf=Si("vid"),yr=Si("notes"),gc=Si("bar"),af=()=>document.createElement("canvas"),Io=af(),Lo=af(),L_=Io.getContext("2d"),D_=Lo.getContext("2d"),Ts,N_=(()=>{if(location.search.indexOf("2d")>=0)return!1;try{let t=document.createElement("canvas"),e=t.getContext("webgl2")||t.getContext("webgl");return e&&e.getExtension("WEBGL_lose_context")&&e.getExtension("WEBGL_lose_context").loseContext(),!!e}catch{return!1}})();try{if(!N_)throw new Error("no WebGL");Ts=Eu(ef,Lo,Io)}catch(t){console.info("Canvas2D renderer in use ("+t.message+")");let e=Si("fb");ef.remove(),e.style.display="block",Ts=Ru(e,Lo,Io)}var ws=Du(rf,Si("vcard"),Si("hint")),tf={},Sr=t=>tf[t]||(tf[t]={id:t,S:rc(),enteredAt:0,theme:As[t]}),vt=-1,ni=null,Do=0,_c=0,Gi=null,Ss=1,of=0,Po=0,vn={tint:[1,.7,.25],tint2:[1,.4,.2],energy:.3,dim:1},xc=window.__errors=[],lf=()=>performance.now()/1e3,nf=t=>{let e=parseInt(t.slice(1),16);return[(e>>16)/255,(e>>8&255)/255,(e&255)/255]};function cf(){let t=innerWidth,e=innerHeight,n=t,i=t*9/16;i>e&&(i=e,n=e*16/9),ju.style.width=n+"px",ju.style.height=i+"px",Ts.resize(n,i);let s=ee(Math.round(n*Math.min(devicePixelRatio||1,2)/1920*4)/4,1,1.5);s!==Ss&&Ts.resetTex&&Ts.resetTex(),Ss=s;for(let r of[Io,Lo])r.width=Math.round(1920*Ss),r.height=Math.round(1080*Ss)}addEventListener("resize",cf);function sf(t,e,n){let i=e.S;i.time=n,i.st=Gi!=null?Gi+5:n-e.enteredAt,i.bt=Gi??n-i.beatAt,t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,t.canvas.width,t.canvas.height),t.setTransform(Ss,0,0,Ss,0,0),t.save();try{As[e.id].draw(t,i,$u);let s=n-(i.prevT||0);i.prevBeat&&Gi==null&&s<.5&&(t.save(),t.globalAlpha*=1-s/.5,As[e.id].draw(t,bo(i.prevBeat,i.prevBt+s,i.st,n),$u),t.restore())}catch(s){xc.some(r=>r.msg===s.message)||(xc.push({beat:Tt[vt].key,msg:s.message,stack:s.stack}),console.error(s))}t.restore()}function U_(t){try{return As[t.id].theme(t.S)||{}}catch{return{}}}var vc=0;function hf(t){let e=t/1e3,n=Math.min(.1,e-vc);vc=e,uf(e,n),requestAnimationFrame(hf)}function uf(t,e){let n=Sr(Tt[vt].scene);sf(L_,n,t);let i=null;if(ni){let l=ee((t-ni.t0)/ni.dur);l>=1?ni=null:(sf(D_,ni.prev,t),i={type:ni.type,p:l})}let s=U_(n),r=1-Math.exp(-e*2.2),a=nf(s.tint||"#ffb340"),o=nf(s.tint2||s.tint||"#ff6a3d");for(let l=0;l<3;l++)vn.tint[l]=Ce(vn.tint[l],a[l],r),vn.tint2[l]=Ce(vn.tint2[l],o[l],r);vn.energy=Ce(vn.energy,s.energy==null?.4:s.energy,r),vn.dim=Ce(vn.dim,s.dim||0,1-Math.exp(-e*3)),Po=Ce(Po,of,1-Math.exp(-e*1.5)),Do*=Math.exp(-e*3.2),_c=Math.min(1,_c+e/1.4),Ts.frame(t,{tint:new Float32Array(vn.tint),tint2:new Float32Array(vn.tint2),energy:vn.energy,dim:vn.dim,sx:Po,sy:Po*.3},Do,_c,i)}function bi(t,e){if(e=e||{},t=ee(t,0,Tt.length-1),t===vt)return;let n=vt>=0?Tt[vt]:null,i=Tt[t],s=lf(),r=n&&n.scene!==i.scene,a=Sr(i.scene);if(ni=null,(!n||r)&&(a.enteredAt=s,sc(i.scene)),a.S.setBeat(i.n,s,a.S.bt),r&&Math.abs(t-vt)===1&&!e.instant){let o=Math.min(Qu(n.scene),Qu(i.scene));ni={prev:Sr(n.scene),type:I_[o]||1,t0:s,dur:1.5},xs("whoosh"),Do=1.6}else n&&(Do=.7,Math.abs(t-vt)===1&&xs("pop",300));vt=t,of=t*.4,history.replaceState(null,"","#"+i.key),ws.leave(),ws.enter(i),nc(!!i.video),No()}function No(){let t=Tt[vt];if(gc.style.setProperty("--p",(vt/(Tt.length-1)).toFixed(4)),gc.classList.add("on"),clearTimeout(No.t),No.t=setTimeout(()=>gc.classList.remove("on"),1800),!yr.classList.contains("on"))return;let e=Tt[vt+1],n=(s,r)=>{let a=document.createElement("div");a.className=s,a.textContent=r,yr.append(a)};yr.replaceChildren();let i=Mr.scenes.find(s=>s.id===t.scene);n("k",t.key+"  \xB7  "+i.title+"  \xB7  "+t.n+" / "+i.n+(t.tag?"  \xB7  "+t.tag:"")),n("say",t.sayText||"\uFF08\u65E0\u8BB2\u7A3F\uFF09"),n("vis","\u753B\u9762\uFF1A"+t.visual),n("src","\u51FA\u5904\uFF1A"+(t.src||"")),e&&n("nx","\u4E0B\u4E00\u62CD "+e.key+"\uFF1A"+(e.say.length?e.say[0].text.slice(0,40):"\uFF08\u65E0\u8BB2\u7A3F\uFF09"))}function ff(){let t=location.hash.slice(1).match(/^(.+)-(\d+)$/),e=t&&br[t[1]+"-"+ +t[2]];return e?e.idx:0}addEventListener("hashchange",()=>bi(ff(),{instant:!0}));addEventListener("keydown",t=>{if(t.metaKey||t.ctrlKey||t.altKey||(_s(),vt>=0&&!Sr(Tt[vt].scene).bed&&(Sr(Tt[vt].scene).bed=1,sc(Tt[vt].scene),nc(!!Tt[vt].video&&ws.playing)),ws.waiting))return;let e=t.key,n=!0;e==="ArrowRight"||e===" "||e==="PageDown"||e==="Enter"||e==="ArrowDown"?bi(vt+1>=Tt.length?0:vt+1,vt+1>=Tt.length?{instant:!0}:void 0):e==="ArrowLeft"||e==="PageUp"||e==="Backspace"||e==="ArrowUp"?bi(vt-1):e==="Home"?bi(0,{instant:!0}):e==="End"?bi(Tt.length-1,{instant:!0}):e==="n"||e==="N"?(yr.classList.toggle("on"),No()):e==="m"||e==="M"?(Iu(!tc()),rf.muted=tc()):e==="p"||e==="P"?ws.toggle():e==="f"||e==="F"?document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen():e==="Escape"?yr.classList.remove("on"):n=!1,n&&t.preventDefault()});addEventListener("pointerdown",t=>{if(t.target.closest("#notes")||(_s(),ws.waiting))return;let e=vt+(t.clientX<innerWidth/3?-1:1);bi(e>=Tt.length?0:e,e>=Tt.length?{instant:!0}:void 0)});window.__deck={go:t=>bi(typeof t=="number"?t:br[t].idx,{instant:!0}),freeze:t=>{Gi=t,ni=null},unfreeze:()=>{Gi=null},render:()=>uf(lf(),.016),get idx(){return vt},beats:Tt,errors:xc};document.fonts.load("700 40px DeckSans","\u8A8A\u7B49\u8D26\u672C").then(()=>Promise.all([document.fonts.load("400 40px DeckSans","\u8D26"),document.fonts.load("700 40px DeckMono","0123")])).catch(()=>{}).then(()=>{cf(),bi(ff(),{instant:!0}),document.body.classList.add("ready"),requestAnimationFrame(t=>{vc=t/1e3,requestAnimationFrame(hf)})});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
