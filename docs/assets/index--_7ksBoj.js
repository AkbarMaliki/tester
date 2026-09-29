(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vu="169",mg=0,wd=1,gg=2,Xp=1,Yp=2,Oi=3,ys=0,Rn=1,zn=2,Gi=0,Nr=1,Go=2,bd=3,Ed=4,vg=5,ks=100,xg=101,_g=102,yg=103,Mg=104,Sg=200,wg=201,bg=202,Eg=203,hh=204,uh=205,Tg=206,Ag=207,Cg=208,Rg=209,Pg=210,Lg=211,Ig=212,Ng=213,Dg=214,dh=0,fh=1,ph=2,kr=3,mh=4,gh=5,vh=6,xh=7,xu=0,Ug=1,Fg=2,gs=0,jp=1,$p=2,Kp=3,Zp=4,Og=5,Jp=6,Nl=7,Qp=300,Vr=301,Hr=302,_h=303,yh=304,Dl=306,Mh=1e3,Gs=1001,Sh=1002,Tn=1003,zg=1004,ha=1005,Yn=1006,lc=1007,Ws=1008,ji=1009,tm=1010,em=1011,Wo=1012,_u=1013,Xs=1014,xi=1015,hi=1016,yu=1017,Mu=1018,Gr=1020,nm=35902,im=1021,sm=1022,jn=1023,rm=1024,om=1025,Dr=1026,Wr=1027,Su=1028,wu=1029,am=1030,bu=1031,Eu=1033,Ja=33776,Qa=33777,tl=33778,el=33779,wh=35840,bh=35841,Eh=35842,Th=35843,Ah=36196,Ch=37492,Rh=37496,Ph=37808,Lh=37809,Ih=37810,Nh=37811,Dh=37812,Uh=37813,Fh=37814,Oh=37815,zh=37816,Bh=37817,kh=37818,Vh=37819,Hh=37820,Gh=37821,nl=36492,Wh=36494,qh=36495,lm=36283,Xh=36284,Yh=36285,jh=36286,Bg=3200,kg=3201,Tu=0,Vg=1,ds="",ni="srgb",ws="srgb-linear",Au="display-p3",Ul="display-p3-linear",ul="linear",Ae="srgb",dl="rec709",fl="p3",or=7680,Td=519,Hg=512,Gg=513,Wg=514,cm=515,qg=516,Xg=517,Yg=518,jg=519,Ad=35044,Cd="300 es",ki=2e3,pl=2001;class eo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rd=1234567;const No=Math.PI/180,qr=180/Math.PI;function er(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function Je(i,t,e){return Math.max(t,Math.min(e,i))}function Cu(i,t){return(i%t+t)%t}function $g(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Kg(i,t,e){return i!==t?(e-i)/(t-i):0}function Do(i,t,e){return(1-e)*i+e*t}function Zg(i,t,e,n){return Do(i,t,1-Math.exp(-e*n))}function Jg(i,t=1){return t-Math.abs(Cu(i,t*2)-t)}function Qg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function tv(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ev(i,t){return i+Math.floor(Math.random()*(t-i+1))}function nv(i,t){return i+Math.random()*(t-i)}function iv(i){return i*(.5-Math.random())}function sv(i){i!==void 0&&(Rd=i);let t=Rd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rv(i){return i*No}function ov(i){return i*qr}function av(i){return(i&i-1)===0&&i!==0}function lv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hv(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Er(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const uv={DEG2RAD:No,RAD2DEG:qr,generateUUID:er,clamp:Je,euclideanModulo:Cu,mapLinear:$g,inverseLerp:Kg,lerp:Do,damp:Zg,pingpong:Jg,smoothstep:Qg,smootherstep:tv,randInt:ev,randFloat:nv,randFloatSpread:iv,seededRandom:sv,degToRad:rv,radToDeg:ov,isPowerOfTwo:av,ceilPowerOfTwo:lv,floorPowerOfTwo:cv,setQuaternionFromProperEuler:hv,normalize:pn,denormalize:Er};class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(t,e,n,s,r,o,a,l,c){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],v=s[0],m=s[3],g=s[6],x=s[1],_=s[4],M=s[7],C=s[2],E=s[5],T=s[8];return r[0]=o*v+a*x+l*C,r[3]=o*m+a*_+l*E,r[6]=o*g+a*M+l*T,r[1]=c*v+h*x+d*C,r[4]=c*m+h*_+d*E,r[7]=c*g+h*M+d*T,r[2]=u*v+f*x+p*C,r[5]=u*m+f*_+p*E,r[8]=u*g+f*M+p*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=e*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(cc.makeScale(t,e)),this}rotate(t){return this.premultiply(cc.makeRotation(-t)),this}translate(t,e){return this.premultiply(cc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cc=new se;function hm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ml(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dv(){const i=ml("canvas");return i.style.display="block",i}const Pd={};function il(i){i in Pd||(Pd[i]=!0,console.warn(i))}function fv(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function pv(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function mv(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ld=new se().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Id=new se().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ro={[ws]:{transfer:ul,primaries:dl,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ni]:{transfer:Ae,primaries:dl,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ul]:{transfer:ul,primaries:fl,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Id),fromReference:i=>i.applyMatrix3(Ld)},[Au]:{transfer:Ae,primaries:fl,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Id),fromReference:i=>i.applyMatrix3(Ld).convertLinearToSRGB()}},gv=new Set([ws,Ul]),xe={enabled:!0,_workingColorSpace:ws,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!gv.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ro[t].toReference,s=ro[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ro[i].primaries},getTransfer:function(i){return i===ds?ul:ro[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(ro[t].luminanceCoefficients)}};function Ur(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ar;class vv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ar===void 0&&(ar=ml("canvas")),ar.width=t.width,ar.height=t.height;const n=ar.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ar}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ml("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ur(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ur(e[n]/255)*255):e[n]=Ur(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xv=0;class um{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=er(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(uc(s[o].image)):r.push(uc(s[o]))}else r=uc(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function uc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _v=0;class un extends eo{constructor(t=un.DEFAULT_IMAGE,e=un.DEFAULT_MAPPING,n=Gs,s=Gs,r=Yn,o=Ws,a=jn,l=ji,c=un.DEFAULT_ANISOTROPY,h=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=er(),this.name="",this.source=new um(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mh:t.x=t.x-Math.floor(t.x);break;case Gs:t.x=t.x<0?0:1;break;case Sh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mh:t.y=t.y-Math.floor(t.y);break;case Gs:t.y=t.y<0?0:1;break;case Sh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Qp;un.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,n=0,s=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,M=(f+1)/2,C=(g+1)/2,E=(h+u)/4,T=(d+v)/4,I=(p+m)/4;return _>M&&_>C?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=T/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=I/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=T/r,s=I/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-p)*(m-p)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(d-v)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yv extends eo{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new un(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new um(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends yv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class dm extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mv extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Gs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Si=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const u=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=p,t[e+3]=v;return}if(d!==v||l!==u||c!==f||h!==p){let m=1-a;const g=l*u+c*f+h*p+d*v,x=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const C=Math.sqrt(_),E=Math.atan2(C,g*x);m=Math.sin(m*E)/C,a=Math.sin(a*E)/C}const M=a*x;if(l=l*m+u*M,c=c*m+f*M,h=h*m+p*M,d=d*m+v*M,m===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dc.copy(this).projectOnVector(t),this.sub(dc)}reflect(t){return this.sub(dc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dc=new P,Nd=new Si;class Qi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(t.matrixWorld),this.expandByPoint(Zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ua.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ua.copy(n.boundingBox)),ua.applyMatrix4(t.matrixWorld),this.union(ua)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zn),Zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(oo),da.subVectors(this.max,oo),lr.subVectors(t.a,oo),cr.subVectors(t.b,oo),hr.subVectors(t.c,oo),ns.subVectors(cr,lr),is.subVectors(hr,cr),As.subVectors(lr,hr);let e=[0,-ns.z,ns.y,0,-is.z,is.y,0,-As.z,As.y,ns.z,0,-ns.x,is.z,0,-is.x,As.z,0,-As.x,-ns.y,ns.x,0,-is.y,is.x,0,-As.y,As.x,0];return!fc(e,lr,cr,hr,da)||(e=[1,0,0,0,1,0,0,0,1],!fc(e,lr,cr,hr,da))?!1:(fa.crossVectors(ns,is),e=[fa.x,fa.y,fa.z],fc(e,lr,cr,hr,da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ti=[new P,new P,new P,new P,new P,new P,new P,new P],Zn=new P,ua=new Qi,lr=new P,cr=new P,hr=new P,ns=new P,is=new P,As=new P,oo=new P,da=new P,fa=new P,Cs=new P;function fc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Cs.fromArray(i,r);const a=s.x*Math.abs(Cs.x)+s.y*Math.abs(Cs.y)+s.z*Math.abs(Cs.z),l=t.dot(Cs),c=e.dot(Cs),h=n.dot(Cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Sv=new Qi,ao=new P,pc=new P;let nr=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Sv.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ao.subVectors(t,this.center);const e=ao.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ao,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ao.copy(t.center).add(pc)),this.expandByPoint(ao.copy(t.center).sub(pc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Ai=new P,mc=new P,pa=new P,ss=new P,gc=new P,ma=new P,vc=new P;let fm=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){mc.copy(t).add(e).multiplyScalar(.5),pa.copy(e).sub(t).normalize(),ss.copy(this.origin).sub(mc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(pa),a=ss.dot(this.direction),l=-ss.dot(pa),c=ss.lengthSq(),h=Math.abs(1-o*o);let d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(mc).addScaledVector(pa,u),f}intersectSphere(t,e){Ai.subVectors(t.center,this.origin);const n=Ai.dot(this.direction),s=Ai.dot(Ai)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,n,s,r){gc.subVectors(e,t),ma.subVectors(n,t),vc.crossVectors(gc,ma);let o=this.direction.dot(vc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ss.subVectors(this.origin,t);const l=a*this.direction.dot(ma.crossVectors(ss,ma));if(l<0)return null;const c=a*this.direction.dot(gc.cross(ss));if(c<0||l+c>o)return null;const h=-a*ss.dot(vc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class he{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,p,v,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,p,v,m)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,p,v,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ur.setFromMatrixColumn(t,0).length(),r=1/ur.setFromMatrixColumn(t,1).length(),o=1/ur.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,p=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,p=c*h,v=c*d;e[0]=u+v*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,p=c*h,v=c*d;e[0]=u-v*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,p=a*h,v=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*l,f=o*c,p=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wv,t,bv)}lookAt(t,e,n){const s=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),rs.crossVectors(n,Un),rs.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),rs.crossVectors(n,Un)),rs.normalize(),ga.crossVectors(Un,rs),s[0]=rs.x,s[4]=ga.x,s[8]=Un.x,s[1]=rs.y,s[5]=ga.y,s[9]=Un.y,s[2]=rs.z,s[6]=ga.z,s[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],v=n[6],m=n[10],g=n[14],x=n[3],_=n[7],M=n[11],C=n[15],E=s[0],T=s[4],I=s[8],k=s[12],y=s[1],w=s[5],O=s[9],N=s[13],U=s[2],z=s[6],D=s[10],Q=s[14],H=s[3],tt=s[7],ft=s[11],ut=s[15];return r[0]=o*E+a*y+l*U+c*H,r[4]=o*T+a*w+l*z+c*tt,r[8]=o*I+a*O+l*D+c*ft,r[12]=o*k+a*N+l*Q+c*ut,r[1]=h*E+d*y+u*U+f*H,r[5]=h*T+d*w+u*z+f*tt,r[9]=h*I+d*O+u*D+f*ft,r[13]=h*k+d*N+u*Q+f*ut,r[2]=p*E+v*y+m*U+g*H,r[6]=p*T+v*w+m*z+g*tt,r[10]=p*I+v*O+m*D+g*ft,r[14]=p*k+v*N+m*Q+g*ut,r[3]=x*E+_*y+M*U+C*H,r[7]=x*T+_*w+M*z+C*tt,r[11]=x*I+_*O+M*D+C*ft,r[15]=x*k+_*N+M*Q+C*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],v=t[7],m=t[11],g=t[15];return p*(+r*l*d-s*c*d-r*a*u+n*c*u+s*a*f-n*l*f)+v*(+e*l*f-e*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+m*(+e*c*d-e*a*f-r*o*d+n*o*f+r*a*h-n*c*h)+g*(-s*a*h-e*l*d+e*a*u+s*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],v=t[13],m=t[14],g=t[15],x=d*m*c-v*u*c+v*l*f-a*m*f-d*l*g+a*u*g,_=p*u*c-h*m*c-p*l*f+o*m*f+h*l*g-o*u*g,M=h*v*c-p*d*c+p*a*f-o*v*f-h*a*g+o*d*g,C=p*d*l-h*v*l-p*a*u+o*v*u+h*a*m-o*d*m,E=e*x+n*_+s*M+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=x*T,t[1]=(v*u*r-d*m*r-v*s*f+n*m*f+d*s*g-n*u*g)*T,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*g+n*l*g)*T,t[3]=(d*l*r-a*u*r-d*s*c+n*u*c+a*s*f-n*l*f)*T,t[4]=_*T,t[5]=(h*m*r-p*u*r+p*s*f-e*m*f-h*s*g+e*u*g)*T,t[6]=(p*l*r-o*m*r-p*s*c+e*m*c+o*s*g-e*l*g)*T,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*f+e*l*f)*T,t[8]=M*T,t[9]=(p*d*r-h*v*r-p*n*f+e*v*f+h*n*g-e*d*g)*T,t[10]=(o*v*r-p*a*r+p*n*c-e*v*c-o*n*g+e*a*g)*T,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*f-e*a*f)*T,t[12]=C*T,t[13]=(h*v*s-p*d*s+p*n*u-e*v*u-h*n*m+e*d*m)*T,t[14]=(p*a*s-o*v*s-p*n*l+e*v*l+o*n*m-e*a*m)*T,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*u+e*a*u)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,v=o*h,m=o*d,g=a*d,x=l*c,_=l*h,M=l*d,C=n.x,E=n.y,T=n.z;return s[0]=(1-(v+g))*C,s[1]=(f+M)*C,s[2]=(p-_)*C,s[3]=0,s[4]=(f-M)*E,s[5]=(1-(u+g))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(p+_)*T,s[9]=(m-x)*T,s[10]=(1-(u+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ur.set(s[0],s[1],s[2]).length();const o=ur.set(s[4],s[5],s[6]).length(),a=ur.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Jn.copy(this);const c=1/r,h=1/o,d=1/a;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=d,Jn.elements[9]*=d,Jn.elements[10]*=d,e.setFromRotationMatrix(Jn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ki){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let f,p;if(a===ki)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===pl)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ki){const l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),u=(e+t)*c,f=(n+s)*h;let p,v;if(a===ki)p=(o+r)*d,v=-2*d;else if(a===pl)p=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ur=new P,Jn=new he,wv=new P(0,0,0),bv=new P(1,1,1),rs=new P,ga=new P,Un=new P,Dd=new he,Ud=new Si;class yn{constructor(t=0,e=0,n=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ud.setFromEuler(this),this.setFromQuaternion(Ud,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class pm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ev=0;const Fd=new P,dr=new Si,Ci=new he,va=new P,lo=new P,Tv=new P,Av=new Si,Od=new P(1,0,0),zd=new P(0,1,0),Bd=new P(0,0,1),kd={type:"added"},Cv={type:"removed"},fr={type:"childadded",child:null},xc={type:"childremoved",child:null};class Ye extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const t=new P,e=new yn,n=new Si,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new se}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return dr.setFromAxisAngle(t,e),this.quaternion.multiply(dr),this}rotateOnWorldAxis(t,e){return dr.setFromAxisAngle(t,e),this.quaternion.premultiply(dr),this}rotateX(t){return this.rotateOnAxis(Od,t)}rotateY(t){return this.rotateOnAxis(zd,t)}rotateZ(t){return this.rotateOnAxis(Bd,t)}translateOnAxis(t,e){return Fd.copy(t).applyQuaternion(this.quaternion),this.position.add(Fd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Od,t)}translateY(t){return this.translateOnAxis(zd,t)}translateZ(t){return this.translateOnAxis(Bd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?va.copy(t):va.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(lo,va,this.up):Ci.lookAt(va,lo,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),dr.setFromRotationMatrix(Ci),this.quaternion.premultiply(dr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kd),fr.child=t,this.dispatchEvent(fr),fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cv),xc.child=t,this.dispatchEvent(xc),xc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kd),fr.child=t,this.dispatchEvent(fr),fr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,t,Tv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,Av,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ye.DEFAULT_UP=new P(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new P,Ri=new P,_c=new P,Pi=new P,pr=new P,mr=new P,Vd=new P,yc=new P,Mc=new P,Sc=new P,wc=new Ee,bc=new Ee,Ec=new Ee;class ri{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qn.subVectors(t,e),s.cross(Qn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qn.subVectors(s,e),Ri.subVectors(n,e),_c.subVectors(t,e);const o=Qn.dot(Qn),a=Qn.dot(Ri),l=Qn.dot(_c),c=Ri.dot(Ri),h=Ri.dot(_c),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return wc.setScalar(0),bc.setScalar(0),Ec.setScalar(0),wc.fromBufferAttribute(t,e),bc.fromBufferAttribute(t,n),Ec.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(wc,r.x),o.addScaledVector(bc,r.y),o.addScaledVector(Ec,r.z),o}static isFrontFacing(t,e,n,s){return Qn.subVectors(n,e),Ri.subVectors(t,e),Qn.cross(Ri).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Qn.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ri.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return ri.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;pr.subVectors(s,n),mr.subVectors(r,n),yc.subVectors(t,n);const l=pr.dot(yc),c=mr.dot(yc);if(l<=0&&c<=0)return e.copy(n);Mc.subVectors(t,s);const h=pr.dot(Mc),d=mr.dot(Mc);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(pr,o);Sc.subVectors(t,r);const f=pr.dot(Sc),p=mr.dot(Sc);if(p>=0&&f<=p)return e.copy(r);const v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(mr,a);const m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Vd.subVectors(r,s),a=(d-h)/(d-h+(f-p)),e.copy(s).addScaledVector(Vd,a);const g=1/(m+v+u);return o=v*g,a=u*g,e.copy(n).addScaledVector(pr,o).addScaledVector(mr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},xa={h:0,s:0,l:0};function Tc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class St{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ni){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=xe.workingColorSpace){if(t=Cu(t,1),e=Je(e,0,1),n=Je(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Tc(o,r,t+1/3),this.g=Tc(o,r,t),this.b=Tc(o,r,t-1/3)}return xe.toWorkingColorSpace(this,s),this}setStyle(t,e=ni){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ni){const n=mm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ur(t.r),this.g=Ur(t.g),this.b=Ur(t.b),this}copyLinearToSRGB(t){return this.r=hc(t.r),this.g=hc(t.g),this.b=hc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ni){return xe.fromWorkingColorSpace(hn.copy(this),t),Math.round(Je(hn.r*255,0,255))*65536+Math.round(Je(hn.g*255,0,255))*256+Math.round(Je(hn.b*255,0,255))}getHexString(t=ni){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,s=hn.g,r=hn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=xe.workingColorSpace){return xe.fromWorkingColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=ni){xe.fromWorkingColorSpace(hn.copy(this),t);const e=hn.r,n=hn.g,s=hn.b;return t!==ni?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(os),this.setHSL(os.h+t,os.s+e,os.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(os),t.getHSL(xa);const n=Do(os.h,xa.h,e),s=Do(os.s,xa.s,e),r=Do(os.l,xa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new St;St.NAMES=mm;let Rv=0,ir=class extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=er(),this.name="",this.type="Material",this.blending=Nr,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hh,this.blendDst=uh,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(n.blending=this.blending),this.side!==ys&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hh&&(n.blendSrc=this.blendSrc),this.blendDst!==uh&&(n.blendDst=this.blendDst),this.blendEquation!==ks&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Td&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(n.stencilFail=this.stencilFail),this.stencilZFail!==or&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class $i extends ir{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const qe=new P,_a=new st;class He{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ad,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_a.fromBufferAttribute(this,e),_a.applyMatrix3(t),this.setXY(e,_a.x,_a.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Er(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Er(e,this.array)),e}setX(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Er(e,this.array)),e}setY(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Er(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Er(e,this.array)),e}setW(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),s=pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),s=pn(s,this.array),r=pn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ad&&(t.usage=this.usage),t}}class gm extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class vm extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ge extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Pv=0;const Wn=new he,Ac=new Ye,gr=new P,Fn=new Qi,co=new Qi,Ze=new P;class Ge extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hm(t)?vm:gm)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,n){return Wn.makeTranslation(t,e,n),this.applyMatrix4(Wn),this}scale(t,e,n){return Wn.makeScale(t,e,n),this.applyMatrix4(Wn),this}lookAt(t){return Ac.lookAt(t),Ac.updateMatrix(),this.applyMatrix4(Ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ge(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];co.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(Fn.min,co.min),Fn.expandByPoint(Ze),Ze.addVectors(Fn.max,co.max),Fn.expandByPoint(Ze)):(Fn.expandByPoint(co.min),Fn.expandByPoint(co.max))}Fn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ze.fromBufferAttribute(a,c),l&&(gr.fromBufferAttribute(t,c),Ze.add(gr)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new P,l[I]=new P;const c=new P,h=new P,d=new P,u=new st,f=new st,p=new st,v=new P,m=new P;function g(I,k,y){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,k),d.fromBufferAttribute(n,y),u.fromBufferAttribute(r,I),f.fromBufferAttribute(r,k),p.fromBufferAttribute(r,y),h.sub(c),d.sub(c),f.sub(u),p.sub(u);const w=1/(f.x*p.y-p.x*f.y);isFinite(w)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(w),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(w),a[I].add(v),a[k].add(v),a[y].add(v),l[I].add(m),l[k].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,k=x.length;I<k;++I){const y=x[I],w=y.start,O=y.count;for(let N=w,U=w+O;N<U;N+=3)g(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const _=new P,M=new P,C=new P,E=new P;function T(I){C.fromBufferAttribute(s,I),E.copy(C);const k=a[I];_.copy(k),_.sub(C.multiplyScalar(C.dot(k))).normalize(),M.crossVectors(E,k);const w=M.dot(l[I])<0?-1:1;o.setXYZW(I,_.x,_.y,_.z,w)}for(let I=0,k=x.length;I<k;++I){const y=x[I],w=y.start,O=y.count;for(let N=w,U=w+O;N<U;N+=3)T(t.getX(N+0)),T(t.getX(N+1)),T(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){const p=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,p=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new He(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ge,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hd=new he,Rs=new fm,ya=new nr,Gd=new P,Ma=new P,Sa=new P,wa=new P,Cc=new P,ba=new P,Wd=new P,Ea=new P;class Be extends Ye{constructor(t=new Ge,e=new $i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ba.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Cc.fromBufferAttribute(d,t),o?ba.addScaledVector(Cc,h):ba.addScaledVector(Cc.sub(e),h))}e.add(ba)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(r),Rs.copy(t.ray).recast(t.near),!(ya.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(ya,Gd)===null||Rs.origin.distanceToSquared(Gd)>(t.far-t.near)**2))&&(Hd.copy(r).invert(),Rs.copy(t.ray).applyMatrix4(Hd),!(n.boundingBox!==null&&Rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Rs)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=u.length;p<v;p++){const m=u[p],g=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,C=_;M<C;M+=3){const E=a.getX(M),T=a.getX(M+1),I=a.getX(M+2);s=Ta(this,g,t,n,c,h,d,E,T,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){const x=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);s=Ta(this,o,t,n,c,h,d,x,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=u.length;p<v;p++){const m=u[p],g=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,C=_;M<C;M+=3){const E=M,T=M+1,I=M+2;s=Ta(this,g,t,n,c,h,d,E,T,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){const x=m,_=m+1,M=m+2;s=Ta(this,o,t,n,c,h,d,x,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Lv(i,t,e,n,s,r,o,a){let l;if(t.side===Rn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ys,a),l===null)return null;Ea.copy(a),Ea.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ea);return c<e.near||c>e.far?null:{distance:c,point:Ea.clone(),object:i}}function Ta(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ma),i.getVertexPosition(l,Sa),i.getVertexPosition(c,wa);const h=Lv(i,t,e,n,Ma,Sa,wa,Wd);if(h){const d=new P;ri.getBarycoord(Wd,Ma,Sa,wa,d),s&&(h.uv=ri.getInterpolatedAttribute(s,a,l,c,d,new st)),r&&(h.uv1=ri.getInterpolatedAttribute(r,a,l,c,d,new st)),o&&(h.normal=ri.getInterpolatedAttribute(o,a,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new P,materialIndex:0};ri.getNormal(Ma,Sa,wa,u.normal),h.face=u,h.barycoord=d}return h}class Dt extends Ge{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(d,2));function p(v,m,g,x,_,M,C,E,T,I,k){const y=M/T,w=C/I,O=M/2,N=C/2,U=E/2,z=T+1,D=I+1;let Q=0,H=0;const tt=new P;for(let ft=0;ft<D;ft++){const ut=ft*w-N;for(let pt=0;pt<z;pt++){const re=pt*y-O;tt[v]=re*x,tt[m]=ut*_,tt[g]=U,c.push(tt.x,tt.y,tt.z),tt[v]=0,tt[m]=0,tt[g]=E>0?1:-1,h.push(tt.x,tt.y,tt.z),d.push(pt/T),d.push(1-ft/I),Q+=1}}for(let ft=0;ft<I;ft++)for(let ut=0;ut<T;ut++){const pt=u+ut+z*ft,re=u+ut+z*(ft+1),$=u+(ut+1)+z*(ft+1),ot=u+(ut+1)+z*ft;l.push(pt,re,ot),l.push(re,$,ot),H+=6}a.addGroup(f,H,k),f+=H,u+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function mn(i){const t={};for(let e=0;e<i.length;e++){const n=Xr(i[e]);for(const s in n)t[s]=n[s]}return t}function Iv(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function xm(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const qo={clone:Xr,merge:mn};var Nv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends ir{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nv,this.fragmentShader=Dv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xr(t.uniforms),this.uniformsGroups=Iv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _m extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=ki}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const as=new P,qd=new st,Xd=new st;class vn extends _m{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(as.x,as.y).multiplyScalar(-t/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(as.x,as.y).multiplyScalar(-t/as.z)}getViewSize(t,e){return this.getViewBounds(t,qd,Xd),e.subVectors(Xd,qd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(No*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vr=-90,xr=1;class Uv extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(vr,xr,t,e);s.layers=this.layers,this.add(s);const r=new vn(vr,xr,t,e);r.layers=this.layers,this.add(r);const o=new vn(vr,xr,t,e);o.layers=this.layers,this.add(o);const a=new vn(vr,xr,t,e);a.layers=this.layers,this.add(a);const l=new vn(vr,xr,t,e);l.layers=this.layers,this.add(l);const c=new vn(vr,xr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ki)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pl)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class ym extends un{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Vr,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Fv extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ym(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Dt(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:Xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:Gi});r.uniforms.tEquirect.value=e;const o=new Be(s,r),a=e.minFilter;return e.minFilter===Ws&&(e.minFilter=Yn),new Uv(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Rc=new P,Ov=new P,zv=new se;class Os{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Rc.subVectors(n,e).cross(Ov.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Rc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zv.getNormalMatrix(t),s=this.coplanarPoint(Rc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new nr,Aa=new P;class Ru{constructor(t=new Os,e=new Os,n=new Os,s=new Os,r=new Os,o=new Os){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ki){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],p=s[9],v=s[10],m=s[11],g=s[12],x=s[13],_=s[14],M=s[15];if(n[0].setComponents(l-r,u-c,m-f,M-g).normalize(),n[1].setComponents(l+r,u+c,m+f,M+g).normalize(),n[2].setComponents(l+o,u+h,m+p,M+x).normalize(),n[3].setComponents(l-o,u-h,m-p,M-x).normalize(),n[4].setComponents(l-a,u-d,m-v,M-_).normalize(),e===ki)n[5].setComponents(l+a,u+d,m+v,M+_).normalize();else if(e===pl)n[5].setComponents(a,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(t){return Ps.center.set(0,0,0),Ps.radius=.7071067811865476,Ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Aa.x=s.normal.x>0?t.max.x:t.min.x,Aa.y=s.normal.y>0?t.max.y:t.min.y,Aa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mm(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Bv(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){const p=d[u],v=d[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){const v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class wi extends Ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],v=[],m=[];for(let g=0;g<h;g++){const x=g*u-o;for(let _=0;_<c;_++){const M=_*d-r;p.push(M,-x,0),v.push(0,0,1),m.push(_/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){const _=x+c*g,M=x+c*(g+1),C=x+1+c*(g+1),E=x+1+c*g;f.push(_,M,E),f.push(M,C,E)}this.setIndex(f),this.setAttribute("position",new ge(p,3)),this.setAttribute("normal",new ge(v,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.width,t.height,t.widthSegments,t.heightSegments)}}var kv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vv=`#ifdef USE_ALPHAHASH
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
#endif`,Hv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xv=`#ifdef USE_AOMAP
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
#endif`,Yv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jv=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$v=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qv=`#ifdef USE_IRIDESCENCE
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
#endif`,tx=`#ifdef USE_BUMPMAP
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
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cx=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,hx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ux=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,px=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gx="gl_FragColor = linearToOutputTexel( gl_FragColor );",vx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ex=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ax=`#ifdef USE_GRADIENTMAP
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
}`,Cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lx=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Ix=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ux=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ox=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,zx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bx=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$x=`#if defined( USE_POINTS_UV )
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
#endif`,Kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e_=`#ifdef USE_MORPHTARGETS
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
#endif`,n_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,s_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,r_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,l_=`#ifdef USE_NORMALMAP
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
#endif`,c_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,m_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,__=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,S_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,w_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,b_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,E_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T_=`#ifdef USE_SKINNING
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
#endif`,A_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C_=`#ifdef USE_SKINNING
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
#endif`,R_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,N_=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,D_=`#ifdef USE_TRANSMISSION
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
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k_=`uniform sampler2D t2D;
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
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`#include <common>
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
}`,X_=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Y_=`#define DISTANCE
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
}`,j_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z_=`uniform float scale;
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
}`,J_=`uniform vec3 diffuse;
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
}`,Q_=`#include <common>
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
}`,ty=`uniform vec3 diffuse;
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
}`,ey=`#define LAMBERT
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
}`,ny=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,iy=`#define MATCAP
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
}`,sy=`#define MATCAP
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
}`,ry=`#define NORMAL
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
}`,oy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ay=`#define PHONG
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
}`,ly=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,cy=`#define STANDARD
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
}`,hy=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,uy=`#define TOON
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
}`,dy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,fy=`uniform float size;
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
}`,py=`uniform vec3 diffuse;
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
}`,my=`#include <common>
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
}`,gy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,vy=`uniform float rotation;
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
}`,xy=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:kv,alphahash_pars_fragment:Vv,alphamap_fragment:Hv,alphamap_pars_fragment:Gv,alphatest_fragment:Wv,alphatest_pars_fragment:qv,aomap_fragment:Xv,aomap_pars_fragment:Yv,batching_pars_vertex:jv,batching_vertex:$v,begin_vertex:Kv,beginnormal_vertex:Zv,bsdfs:Jv,iridescence_fragment:Qv,bumpmap_pars_fragment:tx,clipping_planes_fragment:ex,clipping_planes_pars_fragment:nx,clipping_planes_pars_vertex:ix,clipping_planes_vertex:sx,color_fragment:rx,color_pars_fragment:ox,color_pars_vertex:ax,color_vertex:lx,common:cx,cube_uv_reflection_fragment:hx,defaultnormal_vertex:ux,displacementmap_pars_vertex:dx,displacementmap_vertex:fx,emissivemap_fragment:px,emissivemap_pars_fragment:mx,colorspace_fragment:gx,colorspace_pars_fragment:vx,envmap_fragment:xx,envmap_common_pars_fragment:_x,envmap_pars_fragment:yx,envmap_pars_vertex:Mx,envmap_physical_pars_fragment:Ix,envmap_vertex:Sx,fog_vertex:wx,fog_pars_vertex:bx,fog_fragment:Ex,fog_pars_fragment:Tx,gradientmap_pars_fragment:Ax,lightmap_pars_fragment:Cx,lights_lambert_fragment:Rx,lights_lambert_pars_fragment:Px,lights_pars_begin:Lx,lights_toon_fragment:Nx,lights_toon_pars_fragment:Dx,lights_phong_fragment:Ux,lights_phong_pars_fragment:Fx,lights_physical_fragment:Ox,lights_physical_pars_fragment:zx,lights_fragment_begin:Bx,lights_fragment_maps:kx,lights_fragment_end:Vx,logdepthbuf_fragment:Hx,logdepthbuf_pars_fragment:Gx,logdepthbuf_pars_vertex:Wx,logdepthbuf_vertex:qx,map_fragment:Xx,map_pars_fragment:Yx,map_particle_fragment:jx,map_particle_pars_fragment:$x,metalnessmap_fragment:Kx,metalnessmap_pars_fragment:Zx,morphinstance_vertex:Jx,morphcolor_vertex:Qx,morphnormal_vertex:t_,morphtarget_pars_vertex:e_,morphtarget_vertex:n_,normal_fragment_begin:i_,normal_fragment_maps:s_,normal_pars_fragment:r_,normal_pars_vertex:o_,normal_vertex:a_,normalmap_pars_fragment:l_,clearcoat_normal_fragment_begin:c_,clearcoat_normal_fragment_maps:h_,clearcoat_pars_fragment:u_,iridescence_pars_fragment:d_,opaque_fragment:f_,packing:p_,premultiplied_alpha_fragment:m_,project_vertex:g_,dithering_fragment:v_,dithering_pars_fragment:x_,roughnessmap_fragment:__,roughnessmap_pars_fragment:y_,shadowmap_pars_fragment:M_,shadowmap_pars_vertex:S_,shadowmap_vertex:w_,shadowmask_pars_fragment:b_,skinbase_vertex:E_,skinning_pars_vertex:T_,skinning_vertex:A_,skinnormal_vertex:C_,specularmap_fragment:R_,specularmap_pars_fragment:P_,tonemapping_fragment:L_,tonemapping_pars_fragment:I_,transmission_fragment:N_,transmission_pars_fragment:D_,uv_pars_fragment:U_,uv_pars_vertex:F_,uv_vertex:O_,worldpos_vertex:z_,background_vert:B_,background_frag:k_,backgroundCube_vert:V_,backgroundCube_frag:H_,cube_vert:G_,cube_frag:W_,depth_vert:q_,depth_frag:X_,distanceRGBA_vert:Y_,distanceRGBA_frag:j_,equirect_vert:$_,equirect_frag:K_,linedashed_vert:Z_,linedashed_frag:J_,meshbasic_vert:Q_,meshbasic_frag:ty,meshlambert_vert:ey,meshlambert_frag:ny,meshmatcap_vert:iy,meshmatcap_frag:sy,meshnormal_vert:ry,meshnormal_frag:oy,meshphong_vert:ay,meshphong_frag:ly,meshphysical_vert:cy,meshphysical_frag:hy,meshtoon_vert:uy,meshtoon_frag:dy,points_vert:fy,points_frag:py,shadow_vert:my,shadow_frag:gy,sprite_vert:vy,sprite_frag:xy},yt={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},gi={basic:{uniforms:mn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:mn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new St(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:mn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:mn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:mn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new St(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:mn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:mn([yt.points,yt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:mn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:mn([yt.common,yt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:mn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:mn([yt.sprite,yt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:mn([yt.common,yt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:mn([yt.lights,yt.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};gi.physical={uniforms:mn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const Ca={r:0,b:0,g:0},Ls=new yn,_y=new he;function yy(i,t,e,n,s,r,o){const a=new St(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function p(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1;const M=p(x);M===null?g(a,l):M&&M.isColor&&(g(M,1),_=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,_){const M=p(_);M&&(M.isCubeTexture||M.mapping===Dl)?(h===void 0&&(h=new Be(new Dt(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Xr(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ls.copy(_.backgroundRotation),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_y.makeRotationFromEuler(Ls)),h.material.toneMapped=xe.getTransfer(M.colorSpace)!==Ae,(d!==M||u!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=M,u=M.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Be(new wi(2,2),new an({name:"BackgroundMaterial",uniforms:Xr(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=xe.getTransfer(M.colorSpace)!==Ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,u=M.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,_){x.getRGB(Ca,xm(i)),n.buffers.color.setClear(Ca.r,Ca.g,Ca.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(a,l)},render:v,addToRenderList:m}}function My(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(y,w,O,N,U){let z=!1;const D=d(N,O,w);r!==D&&(r=D,c(r.object)),z=f(y,N,O,U),z&&p(y,N,O,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,M(y,w,O,N),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,w,O){const N=O.wireframe===!0;let U=n[y.id];U===void 0&&(U={},n[y.id]=U);let z=U[w.id];z===void 0&&(z={},U[w.id]=z);let D=z[N];return D===void 0&&(D=u(l()),z[N]=D),D}function u(y){const w=[],O=[],N=[];for(let U=0;U<e;U++)w[U]=0,O[U]=0,N[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:O,attributeDivisors:N,object:y,attributes:{},index:null}}function f(y,w,O,N){const U=r.attributes,z=w.attributes;let D=0;const Q=O.getAttributes();for(const H in Q)if(Q[H].location>=0){const ft=U[H];let ut=z[H];if(ut===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor)),ft===void 0||ft.attribute!==ut||ut&&ft.data!==ut.data)return!0;D++}return r.attributesNum!==D||r.index!==N}function p(y,w,O,N){const U={},z=w.attributes;let D=0;const Q=O.getAttributes();for(const H in Q)if(Q[H].location>=0){let ft=z[H];ft===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor));const ut={};ut.attribute=ft,ft&&ft.data&&(ut.data=ft.data),U[H]=ut,D++}r.attributes=U,r.attributesNum=D,r.index=N}function v(){const y=r.newAttributes;for(let w=0,O=y.length;w<O;w++)y[w]=0}function m(y){g(y,0)}function g(y,w){const O=r.newAttributes,N=r.enabledAttributes,U=r.attributeDivisors;O[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),U[y]!==w&&(i.vertexAttribDivisor(y,w),U[y]=w)}function x(){const y=r.newAttributes,w=r.enabledAttributes;for(let O=0,N=w.length;O<N;O++)w[O]!==y[O]&&(i.disableVertexAttribArray(O),w[O]=0)}function _(y,w,O,N,U,z,D){D===!0?i.vertexAttribIPointer(y,w,O,U,z):i.vertexAttribPointer(y,w,O,N,U,z)}function M(y,w,O,N){v();const U=N.attributes,z=O.getAttributes(),D=w.defaultAttributeValues;for(const Q in z){const H=z[Q];if(H.location>=0){let tt=U[Q];if(tt===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(tt=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(tt=y.instanceColor)),tt!==void 0){const ft=tt.normalized,ut=tt.itemSize,pt=t.get(tt);if(pt===void 0)continue;const re=pt.buffer,$=pt.type,ot=pt.bytesPerElement,Et=$===i.INT||$===i.UNSIGNED_INT||tt.gpuType===_u;if(tt.isInterleavedBufferAttribute){const gt=tt.data,Wt=gt.stride,Gt=tt.offset;if(gt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<H.locationSize;Kt++)g(H.location+Kt,gt.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Kt=0;Kt<H.locationSize;Kt++)m(H.location+Kt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let Kt=0;Kt<H.locationSize;Kt++)_(H.location+Kt,ut/H.locationSize,$,ft,Wt*ot,(Gt+ut/H.locationSize*Kt)*ot,Et)}else{if(tt.isInstancedBufferAttribute){for(let gt=0;gt<H.locationSize;gt++)g(H.location+gt,tt.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let gt=0;gt<H.locationSize;gt++)m(H.location+gt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let gt=0;gt<H.locationSize;gt++)_(H.location+gt,ut/H.locationSize,$,ft,ut*ot,ut/H.locationSize*gt*ot,Et)}}else if(D!==void 0){const ft=D[Q];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(H.location,ft);break;case 3:i.vertexAttrib3fv(H.location,ft);break;case 4:i.vertexAttrib4fv(H.location,ft);break;default:i.vertexAttrib1fv(H.location,ft)}}}}x()}function C(){I();for(const y in n){const w=n[y];for(const O in w){const N=w[O];for(const U in N)h(N[U].object),delete N[U];delete w[O]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;const w=n[y.id];for(const O in w){const N=w[O];for(const U in N)h(N[U].object),delete N[U];delete w[O]}delete n[y.id]}function T(y){for(const w in n){const O=n[w];if(O[y.id]===void 0)continue;const N=O[y.id];for(const U in N)h(N[U].object),delete N[U];delete O[y.id]}}function I(){k(),o=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:k,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Sy(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let p=0;p<d;p++)f+=h[p];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],h[p],u[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=h[v];for(let v=0;v<u.length;v++)e.update(p,n,u[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wy(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==jn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const I=T===hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ji&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==xi&&!I)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:C,maxSamples:E}}function by(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Os,a=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const p=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,_=x*4;let M=g.clippingState||null;l.value=M,M=h(p,u,_,f);for(let C=0;C!==_;++C)M[C]=e[C];g.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,p!==!0||m===null){const g=f+v*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let _=0,M=f;_!==v;++_,M+=4)o.copy(d[_]).applyMatrix4(x,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Ey(i){let t=new WeakMap;function e(o,a){return a===_h?o.mapping=Vr:a===yh&&(o.mapping=Hr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===_h||a===yh)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Fv(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Pu extends _m{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ar=4,Yd=[.125,.215,.35,.446,.526,.582],Vs=20,Pc=new Pu,jd=new St;let Lc=null,Ic=0,Nc=0,Dc=!1;const zs=(1+Math.sqrt(5))/2,_r=1/zs,$d=[new P(-zs,_r,0),new P(zs,_r,0),new P(-_r,0,zs),new P(_r,0,zs),new P(0,zs,-_r),new P(0,zs,_r),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Kd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Lc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Lc,Ic,Nc),this._renderer.xr.enabled=Dc,t.scissorTest=!1,Ra(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vr||t.mapping===Hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:hi,format:jn,colorSpace:ws,depthBuffer:!1},s=Zd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zd(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ty(r)),this._blurMaterial=Ay(r,t,e)}return s}_compileMaterial(t){const e=new Be(this._lodPlanes[0],t);this._renderer.compile(e,Pc)}_sceneToCubeUV(t,e,n,s){const a=new vn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(jd),h.toneMapping=gs,h.autoClear=!1;const f=new $i({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),p=new Be(new Dt,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(jd),v=!0);for(let g=0;g<6;g++){const x=g%3;x===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):x===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const _=this._cubeSize;Ra(s,x*_,g>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Vr||t.mapping===Hr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ra(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Pc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$d[(s-r-1)%$d.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Be(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vs-1),v=r/p,m=isFinite(r)?1+Math.floor(h*v):Vs;m>Vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vs}`);const g=[];let x=0;for(let T=0;T<Vs;++T){const I=T/v,k=Math.exp(-I*I/2);g.push(k),T===0?x+=k:T<m&&(x+=2*k)}for(let T=0;T<g.length;T++)g[T]=g[T]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=p,u.mipInt.value=_-n;const M=this._sizeLods[s],C=3*M*(s>_-Ar?s-_+Ar:0),E=4*(this._cubeSize-M);Ra(e,C,E,3*M,2*M),l.setRenderTarget(e),l.render(d,Pc)}}function Ty(i){const t=[],e=[],n=[];let s=i;const r=i-Ar+1+Yd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ar?l=Yd[o-i+Ar-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,p=6,v=3,m=2,g=1,x=new Float32Array(v*p*f),_=new Float32Array(m*p*f),M=new Float32Array(g*p*f);for(let E=0;E<f;E++){const T=E%3*2/3-1,I=E>2?0:-1,k=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];x.set(k,v*p*E),_.set(u,m*p*E);const y=[E,E,E,E,E,E];M.set(y,g*p*E)}const C=new Ge;C.setAttribute("position",new He(x,v)),C.setAttribute("uv",new He(_,m)),C.setAttribute("faceIndex",new He(M,g)),t.push(C),s>Ar&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zd(i,t,e){const n=new Bn(i,t,e);return n.texture.mapping=Dl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ra(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ay(i,t,e){const n=new Float32Array(Vs),s=new P(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Jd(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Qd(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Lu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cy(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===_h||l===yh,h=l===Vr||l===Hr;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Kd(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Kd(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ry(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&il("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Py(i,t,e,n){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const p in u.attributes)t.remove(u.attributes[p]);for(const p in u.morphAttributes){const v=u.morphAttributes[p];for(let m=0,g=v.length;m<g;m++)t.remove(v[m])}u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)t.update(u[p],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const p in f){const v=f[p];for(let m=0,g=v.length;m<g;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,p=d.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let _=0,M=x.length;_<M;_+=3){const C=x[_+0],E=x[_+1],T=x[_+2];u.push(C,E,E,T,T,C)}}else if(p!==void 0){const x=p.array;v=p.version;for(let _=0,M=x.length/3-1;_<M;_+=3){const C=_+0,E=_+1,T=_+2;u.push(C,E,E,T,T,C)}}else return;const m=new(hm(u)?vm:gm)(u,1);m.version=v;const g=r.get(d);g&&t.remove(g),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Ly(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,u*o,p),e.update(f,n,p))}function h(u,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];e.update(m,n,1)}function d(u,f,p,v){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u.length;g++)c(u[g]/o,f[g],v[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,v,0,p);let g=0;for(let x=0;x<p;x++)g+=f[x];for(let x=0;x<v.length;x++)e.update(g,n,v[x])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Iy(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ny(i,t,e){const n=new WeakMap,s=new Ee;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let k=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",k)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;f===!0&&(_=1),p===!0&&(_=2),v===!0&&(_=3);let M=a.attributes.position.count*_,C=1;M>t.maxTextureSize&&(C=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const E=new Float32Array(M*C*4*d),T=new dm(E,M,C,d);T.type=xi,T.needsUpdate=!0;const I=_*4;for(let y=0;y<d;y++){const w=m[y],O=g[y],N=x[y],U=M*C*4*y;for(let z=0;z<w.count;z++){const D=z*I;f===!0&&(s.fromBufferAttribute(w,z),E[U+D+0]=s.x,E[U+D+1]=s.y,E[U+D+2]=s.z,E[U+D+3]=0),p===!0&&(s.fromBufferAttribute(O,z),E[U+D+4]=s.x,E[U+D+5]=s.y,E[U+D+6]=s.z,E[U+D+7]=0),v===!0&&(s.fromBufferAttribute(N,z),E[U+D+8]=s.x,E[U+D+9]=s.y,E[U+D+10]=s.z,E[U+D+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:T,size:new st(M,C)},n.set(a,u),a.addEventListener("dispose",k)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Dy(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Sm extends un{constructor(t,e,n,s,r,o,a,l,c,h=Dr){if(h!==Dr&&h!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Dr&&(n=Xs),n===void 0&&h===Wr&&(n=Gr),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const wm=new un,tf=new Sm(1,1),bm=new dm,Em=new Mv,Tm=new ym,ef=[],nf=[],sf=new Float32Array(16),rf=new Float32Array(9),of=new Float32Array(4);function no(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ef[s];if(r===void 0&&(r=new Float32Array(s),ef[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function $e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Fl(i,t){let e=nf[t];e===void 0&&(e=new Int32Array(t),nf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Uy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Fy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function Oy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function zy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function By(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;of.set(n),i.uniformMatrix2fv(this.addr,!1,of),Ke(e,n)}}function ky(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;rf.set(n),i.uniformMatrix3fv(this.addr,!1,rf),Ke(e,n)}}function Vy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if($e(e,n))return;sf.set(n),i.uniformMatrix4fv(this.addr,!1,sf),Ke(e,n)}}function Hy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Gy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function Wy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function qy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function Xy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Yy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function jy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function $y(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function Ky(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tf.compareFunction=cm,r=tf):r=wm,e.setTexture2D(t||r,s)}function Zy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Em,s)}function Jy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Tm,s)}function Qy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bm,s)}function tM(i){switch(i){case 5126:return Uy;case 35664:return Fy;case 35665:return Oy;case 35666:return zy;case 35674:return By;case 35675:return ky;case 35676:return Vy;case 5124:case 35670:return Hy;case 35667:case 35671:return Gy;case 35668:case 35672:return Wy;case 35669:case 35673:return qy;case 5125:return Xy;case 36294:return Yy;case 36295:return jy;case 36296:return $y;case 35678:case 36198:case 36298:case 36306:case 35682:return Ky;case 35679:case 36299:case 36307:return Zy;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return Qy}}function eM(i,t){i.uniform1fv(this.addr,t)}function nM(i,t){const e=no(t,this.size,2);i.uniform2fv(this.addr,e)}function iM(i,t){const e=no(t,this.size,3);i.uniform3fv(this.addr,e)}function sM(i,t){const e=no(t,this.size,4);i.uniform4fv(this.addr,e)}function rM(i,t){const e=no(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function oM(i,t){const e=no(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function aM(i,t){const e=no(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function lM(i,t){i.uniform1iv(this.addr,t)}function cM(i,t){i.uniform2iv(this.addr,t)}function hM(i,t){i.uniform3iv(this.addr,t)}function uM(i,t){i.uniform4iv(this.addr,t)}function dM(i,t){i.uniform1uiv(this.addr,t)}function fM(i,t){i.uniform2uiv(this.addr,t)}function pM(i,t){i.uniform3uiv(this.addr,t)}function mM(i,t){i.uniform4uiv(this.addr,t)}function gM(i,t,e){const n=this.cache,s=t.length,r=Fl(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||wm,r[o])}function vM(i,t,e){const n=this.cache,s=t.length,r=Fl(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Em,r[o])}function xM(i,t,e){const n=this.cache,s=t.length,r=Fl(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Tm,r[o])}function _M(i,t,e){const n=this.cache,s=t.length,r=Fl(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||bm,r[o])}function yM(i){switch(i){case 5126:return eM;case 35664:return nM;case 35665:return iM;case 35666:return sM;case 35674:return rM;case 35675:return oM;case 35676:return aM;case 5124:case 35670:return lM;case 35667:case 35671:return cM;case 35668:case 35672:return hM;case 35669:case 35673:return uM;case 5125:return dM;case 36294:return fM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return vM;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return _M}}class MM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=tM(e.type)}}class SM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yM(e.type)}}class wM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Uc=/(\w+)(\])?(\[|\.)?/g;function af(i,t){i.seq.push(t),i.map[t.id]=t}function bM(i,t,e){const n=i.name,s=n.length;for(Uc.lastIndex=0;;){const r=Uc.exec(n),o=Uc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){af(e,c===void 0?new MM(a,i,t):new SM(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new wM(a),af(e,d)),e=d}}}class sl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);bM(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function lf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const EM=37297;let TM=0;function AM(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function CM(i){const t=xe.getPrimaries(xe.workingColorSpace),e=xe.getPrimaries(i);let n;switch(t===e?n="":t===fl&&e===dl?n="LinearDisplayP3ToLinearSRGB":t===dl&&e===fl&&(n="LinearSRGBToLinearDisplayP3"),i){case ws:case Ul:return[n,"LinearTransferOETF"];case ni:case Au:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function cf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+AM(i.getShaderSource(t),o)}else return s}function RM(i,t){const e=CM(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function PM(i,t){let e;switch(t){case jp:e="Linear";break;case $p:e="Reinhard";break;case Kp:e="Cineon";break;case Zp:e="ACESFilmic";break;case Jp:e="AgX";break;case Nl:e="Neutral";break;case Og:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Pa=new P;function LM(){xe.getLuminanceCoefficients(Pa);const i=Pa.x.toFixed(4),t=Pa.y.toFixed(4),e=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function NM(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function DM(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ao(i){return i!==""}function hf(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const UM=/^[ \t]*#include +<([\w\d./]+)>/gm;function $h(i){return i.replace(UM,OM)}const FM=new Map;function OM(i,t){let e=ie[t];if(e===void 0){const n=FM.get(t);if(n!==void 0)e=ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $h(e)}const zM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(i){return i.replace(zM,BM)}function BM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ff(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function kM(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xp?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Oi&&(t="SHADOWMAP_TYPE_VSM"),t}function VM(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vr:case Hr:t="ENVMAP_TYPE_CUBE";break;case Dl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function HM(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hr:t="ENVMAP_MODE_REFRACTION";break}return t}function GM(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xu:t="ENVMAP_BLENDING_MULTIPLY";break;case Ug:t="ENVMAP_BLENDING_MIX";break;case Fg:t="ENVMAP_BLENDING_ADD";break}return t}function WM(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function qM(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=kM(e),c=VM(e),h=HM(e),d=GM(e),u=WM(e),f=IM(e),p=NM(r),v=s.createProgram();let m,g,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ao).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ao).join(`
`),g.length>0&&(g+=`
`)):(m=[ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),g=[ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gs?"#define TONE_MAPPING":"",e.toneMapping!==gs?ie.tonemapping_pars_fragment:"",e.toneMapping!==gs?PM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,RM("linearToOutputTexel",e.outputColorSpace),LM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ao).join(`
`)),o=$h(o),o=hf(o,e),o=uf(o,e),a=$h(a),a=hf(a,e),a=uf(a,e),o=df(o),a=df(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Cd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=x+m+o,M=x+g+a,C=lf(s,s.VERTEX_SHADER,_),E=lf(s,s.FRAGMENT_SHADER,M);s.attachShader(v,C),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(w){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(v).trim(),N=s.getShaderInfoLog(C).trim(),U=s.getShaderInfoLog(E).trim();let z=!0,D=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,E);else{const Q=cf(s,C,"vertex"),H=cf(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+O+`
`+Q+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||U==="")&&(D=!1);D&&(w.diagnostics={runnable:z,programLog:O,vertexShader:{log:N,prefix:m},fragmentShader:{log:U,prefix:g}})}s.deleteShader(C),s.deleteShader(E),I=new sl(s,v),k=DM(s,v)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let k;this.getAttributes=function(){return k===void 0&&T(this),k};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,EM)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=TM++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=E,this}let XM=0;class YM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new jM(t),e.set(t,n)),n}}class jM{constructor(t){this.id=XM++,this.code=t,this.usedTimes=0}}function $M(i,t,e,n,s,r,o){const a=new pm,l=new YM,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,f=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,w,O,N,U){const z=N.fog,D=U.geometry,Q=y.isMeshStandardMaterial?N.environment:null,H=(y.isMeshStandardMaterial?e:t).get(y.envMap||Q),tt=H&&H.mapping===Dl?H.image.height:null,ft=v[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ut=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,pt=ut!==void 0?ut.length:0;let re=0;D.morphAttributes.position!==void 0&&(re=1),D.morphAttributes.normal!==void 0&&(re=2),D.morphAttributes.color!==void 0&&(re=3);let $,ot,Et,gt;if(ft){const wn=gi[ft];$=wn.vertexShader,ot=wn.fragmentShader}else $=y.vertexShader,ot=y.fragmentShader,l.update(y),Et=l.getVertexShaderID(y),gt=l.getFragmentShaderID(y);const Wt=i.getRenderTarget(),Gt=U.isInstancedMesh===!0,Kt=U.isBatchedMesh===!0,ae=!!y.map,et=!!y.matcap,L=!!H,vt=!!y.aoMap,mt=!!y.lightMap,at=!!y.bumpMap,xt=!!y.normalMap,zt=!!y.displacementMap,Tt=!!y.emissiveMap,R=!!y.metalnessMap,b=!!y.roughnessMap,W=y.anisotropy>0,K=y.clearcoat>0,nt=y.dispersion>0,Z=y.iridescence>0,Ut=y.sheen>0,_t=y.transmission>0,Pt=W&&!!y.anisotropyMap,ue=K&&!!y.clearcoatMap,ct=K&&!!y.clearcoatNormalMap,Lt=K&&!!y.clearcoatRoughnessMap,Yt=Z&&!!y.iridescenceMap,jt=Z&&!!y.iridescenceThicknessMap,It=Ut&&!!y.sheenColorMap,de=Ut&&!!y.sheenRoughnessMap,Jt=!!y.specularMap,Te=!!y.specularColorMap,F=!!y.specularIntensityMap,At=_t&&!!y.transmissionMap,j=_t&&!!y.thicknessMap,it=!!y.gradientMap,wt=!!y.alphaMap,Ct=y.alphaTest>0,fe=!!y.alphaHash,We=!!y.extensions;let Sn=gs;y.toneMapped&&(Wt===null||Wt.isXRRenderTarget===!0)&&(Sn=i.toneMapping);const ve={shaderID:ft,shaderType:y.type,shaderName:y.name,vertexShader:$,fragmentShader:ot,defines:y.defines,customVertexShaderID:Et,customFragmentShaderID:gt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Kt,batchingColor:Kt&&U._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&U.instanceColor!==null,instancingMorph:Gt&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Wt===null?i.outputColorSpace:Wt.isXRRenderTarget===!0?Wt.texture.colorSpace:ws,alphaToCoverage:!!y.alphaToCoverage,map:ae,matcap:et,envMap:L,envMapMode:L&&H.mapping,envMapCubeUVHeight:tt,aoMap:vt,lightMap:mt,bumpMap:at,normalMap:xt,displacementMap:f&&zt,emissiveMap:Tt,normalMapObjectSpace:xt&&y.normalMapType===Vg,normalMapTangentSpace:xt&&y.normalMapType===Tu,metalnessMap:R,roughnessMap:b,anisotropy:W,anisotropyMap:Pt,clearcoat:K,clearcoatMap:ue,clearcoatNormalMap:ct,clearcoatRoughnessMap:Lt,dispersion:nt,iridescence:Z,iridescenceMap:Yt,iridescenceThicknessMap:jt,sheen:Ut,sheenColorMap:It,sheenRoughnessMap:de,specularMap:Jt,specularColorMap:Te,specularIntensityMap:F,transmission:_t,transmissionMap:At,thicknessMap:j,gradientMap:it,opaque:y.transparent===!1&&y.blending===Nr&&y.alphaToCoverage===!1,alphaMap:wt,alphaTest:Ct,alphaHash:fe,combine:y.combine,mapUv:ae&&m(y.map.channel),aoMapUv:vt&&m(y.aoMap.channel),lightMapUv:mt&&m(y.lightMap.channel),bumpMapUv:at&&m(y.bumpMap.channel),normalMapUv:xt&&m(y.normalMap.channel),displacementMapUv:zt&&m(y.displacementMap.channel),emissiveMapUv:Tt&&m(y.emissiveMap.channel),metalnessMapUv:R&&m(y.metalnessMap.channel),roughnessMapUv:b&&m(y.roughnessMap.channel),anisotropyMapUv:Pt&&m(y.anisotropyMap.channel),clearcoatMapUv:ue&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ct&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:It&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:de&&m(y.sheenRoughnessMap.channel),specularMapUv:Jt&&m(y.specularMap.channel),specularColorMapUv:Te&&m(y.specularColorMap.channel),specularIntensityMapUv:F&&m(y.specularIntensityMap.channel),transmissionMapUv:At&&m(y.transmissionMap.channel),thicknessMapUv:j&&m(y.thicknessMap.channel),alphaMapUv:wt&&m(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(xt||W),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(ae||wt),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:U.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Sn,decodeVideoTexture:ae&&y.map.isVideoTexture===!0&&xe.getTransfer(y.map.colorSpace)===Ae,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===zn,flipSided:y.side===Rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:We&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&y.extensions.multiDraw===!0||Kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function x(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const O in y.defines)w.push(O),w.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(_(w,y),M(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function _(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function M(y,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),y.push(a.mask)}function C(y){const w=v[y.type];let O;if(w){const N=gi[w];O=qo.clone(N.uniforms)}else O=y.uniforms;return O}function E(y,w){let O;for(let N=0,U=h.length;N<U;N++){const z=h[N];if(z.cacheKey===w){O=z,++O.usedTimes;break}}return O===void 0&&(O=new qM(i,w,y,r),h.push(O)),O}function T(y){if(--y.usedTimes===0){const w=h.indexOf(y);h[w]=h[h.length-1],h.pop(),y.destroy()}}function I(y){l.remove(y)}function k(){l.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:C,acquireProgram:E,releaseProgram:T,releaseShaderCache:I,programs:h,dispose:k}}function KM(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ZM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function pf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function mf(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,f,p,v,m){let g=i[t];return g===void 0?(g={id:d.id,object:d,geometry:u,material:f,groupOrder:p,renderOrder:d.renderOrder,z:v,group:m},i[t]=g):(g.id=d.id,g.object=d,g.geometry=u,g.material=f,g.groupOrder=p,g.renderOrder=d.renderOrder,g.z=v,g.group=m),t++,g}function a(d,u,f,p,v,m){const g=o(d,u,f,p,v,m);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):e.push(g)}function l(d,u,f,p,v,m){const g=o(d,u,f,p,v,m);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):e.unshift(g)}function c(d,u){e.length>1&&e.sort(d||ZM),n.length>1&&n.sort(u||pf),s.length>1&&s.sort(u||pf)}function h(){for(let d=t,u=i.length;d<u;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function JM(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new mf,i.set(n,[o])):s>=r.length?(o=new mf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function QM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new St};break;case"SpotLight":e={position:new P,direction:new P,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function tS(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let eS=0;function nS(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function iS(i){const t=new QM,e=tS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new he,o=new he;function a(c){let h=0,d=0,u=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,x=0,_=0,M=0,C=0,E=0,T=0;c.sort(nS);for(let k=0,y=c.length;k<y;k++){const w=c[k],O=w.color,N=w.intensity,U=w.distance,z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=O.r*N,d+=O.g*N,u+=O.b*N;else if(w.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(w.sh.coefficients[D],N);T++}else if(w.isDirectionalLight){const D=t.get(w);if(D.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Q=w.shadow,H=e.get(w);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=w.shadow.matrix,x++}n.directional[f]=D,f++}else if(w.isSpotLight){const D=t.get(w);D.position.setFromMatrixPosition(w.matrixWorld),D.color.copy(O).multiplyScalar(N),D.distance=U,D.coneCos=Math.cos(w.angle),D.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),D.decay=w.decay,n.spot[v]=D;const Q=w.shadow;if(w.map&&(n.spotLightMap[C]=w.map,C++,Q.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[v]=Q.matrix,w.castShadow){const H=e.get(w);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=z,M++}v++}else if(w.isRectAreaLight){const D=t.get(w);D.color.copy(O).multiplyScalar(N),D.halfWidth.set(w.width*.5,0,0),D.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=D,m++}else if(w.isPointLight){const D=t.get(w);if(D.color.copy(w.color).multiplyScalar(w.intensity),D.distance=w.distance,D.decay=w.decay,w.castShadow){const Q=w.shadow,H=e.get(w);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,n.pointShadow[p]=H,n.pointShadowMap[p]=z,n.pointShadowMatrix[p]=w.shadow.matrix,_++}n.point[p]=D,p++}else if(w.isHemisphereLight){const D=t.get(w);D.skyColor.copy(w.color).multiplyScalar(N),D.groundColor.copy(w.groundColor).multiplyScalar(N),n.hemi[g]=D,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const I=n.hash;(I.directionalLength!==f||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==g||I.numDirectionalShadows!==x||I.numPointShadows!==_||I.numSpotShadows!==M||I.numSpotMaps!==C||I.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,I.directionalLength=f,I.pointLength=p,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=g,I.numDirectionalShadows=x,I.numPointShadows=_,I.numSpotShadows=M,I.numSpotMaps=C,I.numLightProbes=T,n.version=eS++)}function l(c,h){let d=0,u=0,f=0,p=0,v=0;const m=h.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const _=c[g];if(_.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(_.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(_.isRectAreaLight){const M=n.rectArea[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function gf(i){const t=new iS(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function sS(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new gf(i),t.set(s,[a])):r>=o.length?(a=new gf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class rS extends ir{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class oS extends ir{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const aS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cS(i,t,e){let n=new Ru;const s=new st,r=new st,o=new Ee,a=new rS({depthPacking:kg}),l=new oS,c={},h=e.maxTextureSize,d={[ys]:Rn,[Rn]:ys,[zn]:zn},u=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:aS,fragmentShader:lS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const p=new Ge;p.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Be(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xp;let g=this.type;this.render=function(E,T,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const k=i.getRenderTarget(),y=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Gi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=g!==Oi&&this.type===Oi,U=g===Oi&&this.type!==Oi;for(let z=0,D=E.length;z<D;z++){const Q=E[z],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const tt=H.getFrameExtents();if(s.multiply(tt),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,H.mapSize.y=r.y)),H.map===null||N===!0||U===!0){const ut=this.type!==Oi?{minFilter:Tn,magFilter:Tn}:{};H.map!==null&&H.map.dispose(),H.map=new Bn(s.x,s.y,ut),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ft=H.getViewportCount();for(let ut=0;ut<ft;ut++){const pt=H.getViewport(ut);o.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),O.viewport(o),H.updateMatrices(Q,ut),n=H.getFrustum(),M(T,I,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===Oi&&x(H,I),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(k,y,w)};function x(E,T){const I=t.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Bn(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,I,u,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,I,f,v,null)}function _(E,T,I,k){let y=null;const w=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)y=w;else if(y=I.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const O=y.uuid,N=T.uuid;let U=c[O];U===void 0&&(U={},c[O]=U);let z=U[N];z===void 0&&(z=y.clone(),U[N]=z,T.addEventListener("dispose",C)),y=z}if(y.visible=T.visible,y.wireframe=T.wireframe,k===Oi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=i.properties.get(y);O.light=I}return y}function M(E,T,I,k,y){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Oi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const N=t.update(E),U=E.material;if(Array.isArray(U)){const z=N.groups;for(let D=0,Q=z.length;D<Q;D++){const H=z[D],tt=U[H.materialIndex];if(tt&&tt.visible){const ft=_(E,tt,k,y);E.onBeforeShadow(i,E,T,I,N,ft,H),i.renderBufferDirect(I,null,N,ft,E,H),E.onAfterShadow(i,E,T,I,N,ft,H)}}}else if(U.visible){const z=_(E,U,k,y);E.onBeforeShadow(i,E,T,I,N,z,null),i.renderBufferDirect(I,null,N,z,E,null),E.onAfterShadow(i,E,T,I,N,z,null)}}const O=E.children;for(let N=0,U=O.length;N<U;N++)M(O[N],T,I,k,y)}function C(E){E.target.removeEventListener("dispose",C);for(const I in c){const k=c[I],y=E.target.uuid;y in k&&(k[y].dispose(),delete k[y])}}}const hS={[dh]:fh,[ph]:vh,[mh]:xh,[kr]:gh,[fh]:dh,[vh]:ph,[xh]:mh,[gh]:kr};function uS(i){function t(){let F=!1;const At=new Ee;let j=null;const it=new Ee(0,0,0,0);return{setMask:function(wt){j!==wt&&!F&&(i.colorMask(wt,wt,wt,wt),j=wt)},setLocked:function(wt){F=wt},setClear:function(wt,Ct,fe,We,Sn){Sn===!0&&(wt*=We,Ct*=We,fe*=We),At.set(wt,Ct,fe,We),it.equals(At)===!1&&(i.clearColor(wt,Ct,fe,We),it.copy(At))},reset:function(){F=!1,j=null,it.set(-1,0,0,0)}}}function e(){let F=!1,At=!1,j=null,it=null,wt=null;return{setReversed:function(Ct){At=Ct},setTest:function(Ct){Ct?Et(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(Ct){j!==Ct&&!F&&(i.depthMask(Ct),j=Ct)},setFunc:function(Ct){if(At&&(Ct=hS[Ct]),it!==Ct){switch(Ct){case dh:i.depthFunc(i.NEVER);break;case fh:i.depthFunc(i.ALWAYS);break;case ph:i.depthFunc(i.LESS);break;case kr:i.depthFunc(i.LEQUAL);break;case mh:i.depthFunc(i.EQUAL);break;case gh:i.depthFunc(i.GEQUAL);break;case vh:i.depthFunc(i.GREATER);break;case xh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}it=Ct}},setLocked:function(Ct){F=Ct},setClear:function(Ct){wt!==Ct&&(i.clearDepth(Ct),wt=Ct)},reset:function(){F=!1,j=null,it=null,wt=null}}}function n(){let F=!1,At=null,j=null,it=null,wt=null,Ct=null,fe=null,We=null,Sn=null;return{setTest:function(ve){F||(ve?Et(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(ve){At!==ve&&!F&&(i.stencilMask(ve),At=ve)},setFunc:function(ve,wn,Ei){(j!==ve||it!==wn||wt!==Ei)&&(i.stencilFunc(ve,wn,Ei),j=ve,it=wn,wt=Ei)},setOp:function(ve,wn,Ei){(Ct!==ve||fe!==wn||We!==Ei)&&(i.stencilOp(ve,wn,Ei),Ct=ve,fe=wn,We=Ei)},setLocked:function(ve){F=ve},setClear:function(ve){Sn!==ve&&(i.clearStencil(ve),Sn=ve)},reset:function(){F=!1,At=null,j=null,it=null,wt=null,Ct=null,fe=null,We=null,Sn=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,u=[],f=null,p=!1,v=null,m=null,g=null,x=null,_=null,M=null,C=null,E=new St(0,0,0),T=0,I=!1,k=null,y=null,w=null,O=null,N=null;const U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,D=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(Q)[1]),z=D>=1):Q.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),z=D>=2);let H=null,tt={};const ft=i.getParameter(i.SCISSOR_BOX),ut=i.getParameter(i.VIEWPORT),pt=new Ee().fromArray(ft),re=new Ee().fromArray(ut);function $(F,At,j,it){const wt=new Uint8Array(4),Ct=i.createTexture();i.bindTexture(F,Ct),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let fe=0;fe<j;fe++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(At,0,i.RGBA,1,1,it,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(At+fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return Ct}const ot={};ot[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Et(i.DEPTH_TEST),r.setFunc(kr),mt(!1),at(wd),Et(i.CULL_FACE),L(Gi);function Et(F){c[F]!==!0&&(i.enable(F),c[F]=!0)}function gt(F){c[F]!==!1&&(i.disable(F),c[F]=!1)}function Wt(F,At){return h[F]!==At?(i.bindFramebuffer(F,At),h[F]=At,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=At),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=At),!0):!1}function Gt(F,At){let j=u,it=!1;if(F){j=d.get(At),j===void 0&&(j=[],d.set(At,j));const wt=F.textures;if(j.length!==wt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let Ct=0,fe=wt.length;Ct<fe;Ct++)j[Ct]=i.COLOR_ATTACHMENT0+Ct;j.length=wt.length,it=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,it=!0);it&&i.drawBuffers(j)}function Kt(F){return f!==F?(i.useProgram(F),f=F,!0):!1}const ae={[ks]:i.FUNC_ADD,[xg]:i.FUNC_SUBTRACT,[_g]:i.FUNC_REVERSE_SUBTRACT};ae[yg]=i.MIN,ae[Mg]=i.MAX;const et={[Sg]:i.ZERO,[wg]:i.ONE,[bg]:i.SRC_COLOR,[hh]:i.SRC_ALPHA,[Pg]:i.SRC_ALPHA_SATURATE,[Cg]:i.DST_COLOR,[Tg]:i.DST_ALPHA,[Eg]:i.ONE_MINUS_SRC_COLOR,[uh]:i.ONE_MINUS_SRC_ALPHA,[Rg]:i.ONE_MINUS_DST_COLOR,[Ag]:i.ONE_MINUS_DST_ALPHA,[Lg]:i.CONSTANT_COLOR,[Ig]:i.ONE_MINUS_CONSTANT_COLOR,[Ng]:i.CONSTANT_ALPHA,[Dg]:i.ONE_MINUS_CONSTANT_ALPHA};function L(F,At,j,it,wt,Ct,fe,We,Sn,ve){if(F===Gi){p===!0&&(gt(i.BLEND),p=!1);return}if(p===!1&&(Et(i.BLEND),p=!0),F!==vg){if(F!==v||ve!==I){if((m!==ks||_!==ks)&&(i.blendEquation(i.FUNC_ADD),m=ks,_=ks),ve)switch(F){case Nr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Go:i.blendFunc(i.ONE,i.ONE);break;case bd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ed:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Go:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ed:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}g=null,x=null,M=null,C=null,E.set(0,0,0),T=0,v=F,I=ve}return}wt=wt||At,Ct=Ct||j,fe=fe||it,(At!==m||wt!==_)&&(i.blendEquationSeparate(ae[At],ae[wt]),m=At,_=wt),(j!==g||it!==x||Ct!==M||fe!==C)&&(i.blendFuncSeparate(et[j],et[it],et[Ct],et[fe]),g=j,x=it,M=Ct,C=fe),(We.equals(E)===!1||Sn!==T)&&(i.blendColor(We.r,We.g,We.b,Sn),E.copy(We),T=Sn),v=F,I=!1}function vt(F,At){F.side===zn?gt(i.CULL_FACE):Et(i.CULL_FACE);let j=F.side===Rn;At&&(j=!j),mt(j),F.blending===Nr&&F.transparent===!1?L(Gi):L(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),s.setMask(F.colorWrite);const it=F.stencilWrite;o.setTest(it),it&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),zt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Et(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(F){k!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),k=F)}function at(F){F!==mg?(Et(i.CULL_FACE),F!==y&&(F===wd?i.cullFace(i.BACK):F===gg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),y=F}function xt(F){F!==w&&(z&&i.lineWidth(F),w=F)}function zt(F,At,j){F?(Et(i.POLYGON_OFFSET_FILL),(O!==At||N!==j)&&(i.polygonOffset(At,j),O=At,N=j)):gt(i.POLYGON_OFFSET_FILL)}function Tt(F){F?Et(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function R(F){F===void 0&&(F=i.TEXTURE0+U-1),H!==F&&(i.activeTexture(F),H=F)}function b(F,At,j){j===void 0&&(H===null?j=i.TEXTURE0+U-1:j=H);let it=tt[j];it===void 0&&(it={type:void 0,texture:void 0},tt[j]=it),(it.type!==F||it.texture!==At)&&(H!==j&&(i.activeTexture(j),H=j),i.bindTexture(F,At||ot[F]),it.type=F,it.texture=At)}function W(){const F=tt[H];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Yt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function jt(F){pt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),pt.copy(F))}function It(F){re.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),re.copy(F))}function de(F,At){let j=l.get(At);j===void 0&&(j=new WeakMap,l.set(At,j));let it=j.get(F);it===void 0&&(it=i.getUniformBlockIndex(At,F.name),j.set(F,it))}function Jt(F,At){const it=l.get(At).get(F);a.get(At)!==it&&(i.uniformBlockBinding(At,it,F.__bindingPointIndex),a.set(At,it))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,tt={},h={},d=new WeakMap,u=[],f=null,p=!1,v=null,m=null,g=null,x=null,_=null,M=null,C=null,E=new St(0,0,0),T=0,I=!1,k=null,y=null,w=null,O=null,N=null,pt.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Et,disable:gt,bindFramebuffer:Wt,drawBuffers:Gt,useProgram:Kt,setBlending:L,setMaterial:vt,setFlipSided:mt,setCullFace:at,setLineWidth:xt,setPolygonOffset:zt,setScissorTest:Tt,activeTexture:R,bindTexture:b,unbindTexture:W,compressedTexImage2D:K,compressedTexImage3D:nt,texImage2D:Lt,texImage3D:Yt,updateUBOMapping:de,uniformBlockBinding:Jt,texStorage2D:ue,texStorage3D:ct,texSubImage2D:Z,texSubImage3D:Ut,compressedTexSubImage2D:_t,compressedTexSubImage3D:Pt,scissor:jt,viewport:It,reset:Te}}function vf(i,t,e,n){const s=dS(n);switch(e){case im:return i*t;case rm:return i*t;case om:return i*t*2;case Su:return i*t/s.components*s.byteLength;case wu:return i*t/s.components*s.byteLength;case am:return i*t*2/s.components*s.byteLength;case bu:return i*t*2/s.components*s.byteLength;case sm:return i*t*3/s.components*s.byteLength;case jn:return i*t*4/s.components*s.byteLength;case Eu:return i*t*4/s.components*s.byteLength;case Ja:case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case tl:case el:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bh:case Th:return Math.max(i,16)*Math.max(t,8)/4;case wh:case Eh:return Math.max(i,8)*Math.max(t,8)/2;case Ah:case Ch:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ph:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ih:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Nh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Dh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Uh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Oh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case zh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Bh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case kh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Vh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Hh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Gh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case nl:case Wh:case qh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case lm:case Xh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Yh:case jh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dS(i){switch(i){case ji:case tm:return{byteLength:1,components:1};case Wo:case em:case hi:return{byteLength:2,components:1};case yu:case Mu:return{byteLength:2,components:4};case Xs:case _u:case xi:return{byteLength:4,components:1};case nm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function fS(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,b){return f?new OffscreenCanvas(R,b):ml("canvas")}function v(R,b,W){let K=1;const nt=Tt(R);if((nt.width>W||nt.height>W)&&(K=W/Math.max(nt.width,nt.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(K*nt.width),Ut=Math.floor(K*nt.height);d===void 0&&(d=p(Z,Ut));const _t=b?p(Z,Ut):d;return _t.width=Z,_t.height=Ut,_t.getContext("2d").drawImage(R,0,0,Z,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Z+"x"+Ut+")."),_t}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Tn&&R.minFilter!==Yn}function g(R){i.generateMipmap(R)}function x(R,b,W,K,nt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=b;if(b===i.RED&&(W===i.FLOAT&&(Z=i.R32F),W===i.HALF_FLOAT&&(Z=i.R16F),W===i.UNSIGNED_BYTE&&(Z=i.R8)),b===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(Z=i.R8UI),W===i.UNSIGNED_SHORT&&(Z=i.R16UI),W===i.UNSIGNED_INT&&(Z=i.R32UI),W===i.BYTE&&(Z=i.R8I),W===i.SHORT&&(Z=i.R16I),W===i.INT&&(Z=i.R32I)),b===i.RG&&(W===i.FLOAT&&(Z=i.RG32F),W===i.HALF_FLOAT&&(Z=i.RG16F),W===i.UNSIGNED_BYTE&&(Z=i.RG8)),b===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(Z=i.RG8UI),W===i.UNSIGNED_SHORT&&(Z=i.RG16UI),W===i.UNSIGNED_INT&&(Z=i.RG32UI),W===i.BYTE&&(Z=i.RG8I),W===i.SHORT&&(Z=i.RG16I),W===i.INT&&(Z=i.RG32I)),b===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),W===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),W===i.UNSIGNED_INT&&(Z=i.RGB32UI),W===i.BYTE&&(Z=i.RGB8I),W===i.SHORT&&(Z=i.RGB16I),W===i.INT&&(Z=i.RGB32I)),b===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),W===i.UNSIGNED_INT&&(Z=i.RGBA32UI),W===i.BYTE&&(Z=i.RGBA8I),W===i.SHORT&&(Z=i.RGBA16I),W===i.INT&&(Z=i.RGBA32I)),b===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),b===i.RGBA){const Ut=nt?ul:xe.getTransfer(K);W===i.FLOAT&&(Z=i.RGBA32F),W===i.HALF_FLOAT&&(Z=i.RGBA16F),W===i.UNSIGNED_BYTE&&(Z=Ut===Ae?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(R,b){let W;return R?b===null||b===Xs||b===Gr?W=i.DEPTH24_STENCIL8:b===xi?W=i.DEPTH32F_STENCIL8:b===Wo&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Xs||b===Gr?W=i.DEPTH_COMPONENT24:b===xi?W=i.DEPTH_COMPONENT32F:b===Wo&&(W=i.DEPTH_COMPONENT16),W}function M(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Tn&&R.minFilter!==Yn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function C(R){const b=R.target;b.removeEventListener("dispose",C),T(b),b.isVideoTexture&&h.delete(b)}function E(R){const b=R.target;b.removeEventListener("dispose",E),k(b)}function T(R){const b=n.get(R);if(b.__webglInit===void 0)return;const W=R.source,K=u.get(W);if(K){const nt=K[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&I(R),Object.keys(K).length===0&&u.delete(W)}n.remove(R)}function I(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const W=R.source,K=u.get(W);delete K[b.__cacheKey],o.memory.textures--}function k(R){const b=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let nt=0;nt<b.__webglFramebuffer[K].length;nt++)i.deleteFramebuffer(b.__webglFramebuffer[K][nt]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=R.textures;for(let K=0,nt=W.length;K<nt;K++){const Z=n.get(W[K]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(W[K])}n.remove(R)}let y=0;function w(){y=0}function O(){const R=y;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),y+=1,R}function N(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function U(R,b){const W=n.get(R);if(R.isVideoTexture&&xt(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(W,R,b);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+b)}function z(R,b){const W=n.get(R);if(R.version>0&&W.__version!==R.version){re(W,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+b)}function D(R,b){const W=n.get(R);if(R.version>0&&W.__version!==R.version){re(W,R,b);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+b)}function Q(R,b){const W=n.get(R);if(R.version>0&&W.__version!==R.version){$(W,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+b)}const H={[Mh]:i.REPEAT,[Gs]:i.CLAMP_TO_EDGE,[Sh]:i.MIRRORED_REPEAT},tt={[Tn]:i.NEAREST,[zg]:i.NEAREST_MIPMAP_NEAREST,[ha]:i.NEAREST_MIPMAP_LINEAR,[Yn]:i.LINEAR,[lc]:i.LINEAR_MIPMAP_NEAREST,[Ws]:i.LINEAR_MIPMAP_LINEAR},ft={[Hg]:i.NEVER,[jg]:i.ALWAYS,[Gg]:i.LESS,[cm]:i.LEQUAL,[Wg]:i.EQUAL,[Yg]:i.GEQUAL,[qg]:i.GREATER,[Xg]:i.NOTEQUAL};function ut(R,b){if(b.type===xi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Yn||b.magFilter===lc||b.magFilter===ha||b.magFilter===Ws||b.minFilter===Yn||b.minFilter===lc||b.minFilter===ha||b.minFilter===Ws)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,H[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,H[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,H[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,tt[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,tt[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ft[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Tn||b.minFilter!==ha&&b.minFilter!==Ws||b.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function pt(R,b){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",C));const K=b.source;let nt=u.get(K);nt===void 0&&(nt={},u.set(K,nt));const Z=N(b);if(Z!==R.__cacheKey){nt[Z]===void 0&&(nt[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),nt[Z].usedTimes++;const Ut=nt[R.__cacheKey];Ut!==void 0&&(nt[R.__cacheKey].usedTimes--,Ut.usedTimes===0&&I(b)),R.__cacheKey=Z,R.__webglTexture=nt[Z].texture}return W}function re(R,b,W){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);const nt=pt(R,b),Z=b.source;e.bindTexture(K,R.__webglTexture,i.TEXTURE0+W);const Ut=n.get(Z);if(Z.version!==Ut.__version||nt===!0){e.activeTexture(i.TEXTURE0+W);const _t=xe.getPrimaries(xe.workingColorSpace),Pt=b.colorSpace===ds?null:xe.getPrimaries(b.colorSpace),ue=b.colorSpace===ds||_t===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let ct=v(b.image,!1,s.maxTextureSize);ct=zt(b,ct);const Lt=r.convert(b.format,b.colorSpace),Yt=r.convert(b.type);let jt=x(b.internalFormat,Lt,Yt,b.colorSpace,b.isVideoTexture);ut(K,b);let It;const de=b.mipmaps,Jt=b.isVideoTexture!==!0,Te=Ut.__version===void 0||nt===!0,F=Z.dataReady,At=M(b,ct);if(b.isDepthTexture)jt=_(b.format===Wr,b.type),Te&&(Jt?e.texStorage2D(i.TEXTURE_2D,1,jt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,jt,ct.width,ct.height,0,Lt,Yt,null));else if(b.isDataTexture)if(de.length>0){Jt&&Te&&e.texStorage2D(i.TEXTURE_2D,At,jt,de[0].width,de[0].height);for(let j=0,it=de.length;j<it;j++)It=de[j],Jt?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,It.width,It.height,Lt,Yt,It.data):e.texImage2D(i.TEXTURE_2D,j,jt,It.width,It.height,0,Lt,Yt,It.data);b.generateMipmaps=!1}else Jt?(Te&&e.texStorage2D(i.TEXTURE_2D,At,jt,ct.width,ct.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,Lt,Yt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,jt,ct.width,ct.height,0,Lt,Yt,ct.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Jt&&Te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,jt,de[0].width,de[0].height,ct.depth);for(let j=0,it=de.length;j<it;j++)if(It=de[j],b.format!==jn)if(Lt!==null)if(Jt){if(F)if(b.layerUpdates.size>0){const wt=vf(It.width,It.height,b.format,b.type);for(const Ct of b.layerUpdates){const fe=It.data.subarray(Ct*wt/It.data.BYTES_PER_ELEMENT,(Ct+1)*wt/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Ct,It.width,It.height,1,Lt,fe,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,It.width,It.height,ct.depth,Lt,It.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,jt,It.width,It.height,ct.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,It.width,It.height,ct.depth,Lt,Yt,It.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,jt,It.width,It.height,ct.depth,0,Lt,Yt,It.data)}else{Jt&&Te&&e.texStorage2D(i.TEXTURE_2D,At,jt,de[0].width,de[0].height);for(let j=0,it=de.length;j<it;j++)It=de[j],b.format!==jn?Lt!==null?Jt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,It.width,It.height,Lt,It.data):e.compressedTexImage2D(i.TEXTURE_2D,j,jt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,It.width,It.height,Lt,Yt,It.data):e.texImage2D(i.TEXTURE_2D,j,jt,It.width,It.height,0,Lt,Yt,It.data)}else if(b.isDataArrayTexture)if(Jt){if(Te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,jt,ct.width,ct.height,ct.depth),F)if(b.layerUpdates.size>0){const j=vf(ct.width,ct.height,b.format,b.type);for(const it of b.layerUpdates){const wt=ct.data.subarray(it*j/ct.data.BYTES_PER_ELEMENT,(it+1)*j/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,ct.width,ct.height,1,Lt,Yt,wt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Lt,Yt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,jt,ct.width,ct.height,ct.depth,0,Lt,Yt,ct.data);else if(b.isData3DTexture)Jt?(Te&&e.texStorage3D(i.TEXTURE_3D,At,jt,ct.width,ct.height,ct.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Lt,Yt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,jt,ct.width,ct.height,ct.depth,0,Lt,Yt,ct.data);else if(b.isFramebufferTexture){if(Te)if(Jt)e.texStorage2D(i.TEXTURE_2D,At,jt,ct.width,ct.height);else{let j=ct.width,it=ct.height;for(let wt=0;wt<At;wt++)e.texImage2D(i.TEXTURE_2D,wt,jt,j,it,0,Lt,Yt,null),j>>=1,it>>=1}}else if(de.length>0){if(Jt&&Te){const j=Tt(de[0]);e.texStorage2D(i.TEXTURE_2D,At,jt,j.width,j.height)}for(let j=0,it=de.length;j<it;j++)It=de[j],Jt?F&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Lt,Yt,It):e.texImage2D(i.TEXTURE_2D,j,jt,Lt,Yt,It);b.generateMipmaps=!1}else if(Jt){if(Te){const j=Tt(ct);e.texStorage2D(i.TEXTURE_2D,At,jt,j.width,j.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt,Yt,ct)}else e.texImage2D(i.TEXTURE_2D,0,jt,Lt,Yt,ct);m(b)&&g(K),Ut.__version=Z.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function $(R,b,W){if(b.image.length!==6)return;const K=pt(R,b),nt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+W);const Z=n.get(nt);if(nt.version!==Z.__version||K===!0){e.activeTexture(i.TEXTURE0+W);const Ut=xe.getPrimaries(xe.workingColorSpace),_t=b.colorSpace===ds?null:xe.getPrimaries(b.colorSpace),Pt=b.colorSpace===ds||Ut===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const ue=b.isCompressedTexture||b.image[0].isCompressedTexture,ct=b.image[0]&&b.image[0].isDataTexture,Lt=[];for(let it=0;it<6;it++)!ue&&!ct?Lt[it]=v(b.image[it],!0,s.maxCubemapSize):Lt[it]=ct?b.image[it].image:b.image[it],Lt[it]=zt(b,Lt[it]);const Yt=Lt[0],jt=r.convert(b.format,b.colorSpace),It=r.convert(b.type),de=x(b.internalFormat,jt,It,b.colorSpace),Jt=b.isVideoTexture!==!0,Te=Z.__version===void 0||K===!0,F=nt.dataReady;let At=M(b,Yt);ut(i.TEXTURE_CUBE_MAP,b);let j;if(ue){Jt&&Te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,de,Yt.width,Yt.height);for(let it=0;it<6;it++){j=Lt[it].mipmaps;for(let wt=0;wt<j.length;wt++){const Ct=j[wt];b.format!==jn?jt!==null?Jt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt,0,0,Ct.width,Ct.height,jt,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt,de,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt,0,0,Ct.width,Ct.height,jt,It,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt,de,Ct.width,Ct.height,0,jt,It,Ct.data)}}}else{if(j=b.mipmaps,Jt&&Te){j.length>0&&At++;const it=Tt(Lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,de,it.width,it.height)}for(let it=0;it<6;it++)if(ct){Jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Lt[it].width,Lt[it].height,jt,It,Lt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,de,Lt[it].width,Lt[it].height,0,jt,It,Lt[it].data);for(let wt=0;wt<j.length;wt++){const fe=j[wt].image[it].image;Jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt+1,0,0,fe.width,fe.height,jt,It,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt+1,de,fe.width,fe.height,0,jt,It,fe.data)}}else{Jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,jt,It,Lt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,de,jt,It,Lt[it]);for(let wt=0;wt<j.length;wt++){const Ct=j[wt];Jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt+1,0,0,jt,It,Ct.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt+1,de,jt,It,Ct.image[it])}}}m(b)&&g(i.TEXTURE_CUBE_MAP),Z.__version=nt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ot(R,b,W,K,nt,Z){const Ut=r.convert(W.format,W.colorSpace),_t=r.convert(W.type),Pt=x(W.internalFormat,Ut,_t,W.colorSpace);if(!n.get(b).__hasExternalTextures){const ct=Math.max(1,b.width>>Z),Lt=Math.max(1,b.height>>Z);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,Z,Pt,ct,Lt,b.depth,0,Ut,_t,null):e.texImage2D(nt,Z,Pt,ct,Lt,0,Ut,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),at(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,nt,n.get(W).__webglTexture,0,mt(b)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,nt,n.get(W).__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(R,b,W){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){const K=b.depthTexture,nt=K&&K.isDepthTexture?K.type:null,Z=_(b.stencilBuffer,nt),Ut=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=mt(b);at(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,Z,b.width,b.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,Z,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Z,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,R)}else{const K=b.textures;for(let nt=0;nt<K.length;nt++){const Z=K[nt],Ut=r.convert(Z.format,Z.colorSpace),_t=r.convert(Z.type),Pt=x(Z.internalFormat,Ut,_t,Z.colorSpace),ue=mt(b);W&&at(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,Pt,b.width,b.height):at(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,Pt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),U(b.depthTexture,0);const K=n.get(b.depthTexture).__webglTexture,nt=mt(b);if(b.depthTexture.format===Dr)at(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(b.depthTexture.format===Wr)at(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Wt(R){const b=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){const nt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",nt)};K.addEventListener("dispose",nt),b.__depthDisposeCallback=nt}b.__boundDepthTexture=K}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");gt(b.__webglFramebuffer,R)}else if(W){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),Et(b.__webglDepthbuffer[K],R,!1);else{const nt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Et(b.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(R,b,W){const K=n.get(R);b!==void 0&&ot(K.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Wt(R)}function Kt(R){const b=R.texture,W=n.get(R),K=n.get(b);R.addEventListener("dispose",E);const nt=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Ut=nt.length>1;if(Ut||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,o.memory.textures++),Z){W.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[_t]=[];for(let Pt=0;Pt<b.mipmaps.length;Pt++)W.__webglFramebuffer[_t][Pt]=i.createFramebuffer()}else W.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let _t=0;_t<b.mipmaps.length;_t++)W.__webglFramebuffer[_t]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let _t=0,Pt=nt.length;_t<Pt;_t++){const ue=n.get(nt[_t]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&at(R)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let _t=0;_t<nt.length;_t++){const Pt=nt[_t];W.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[_t]);const ue=r.convert(Pt.format,Pt.colorSpace),ct=r.convert(Pt.type),Lt=x(Pt.internalFormat,ue,ct,Pt.colorSpace,R.isXRRenderTarget===!0),Yt=mt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,Lt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,W.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(W.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ut(i.TEXTURE_CUBE_MAP,b);for(let _t=0;_t<6;_t++)if(b.mipmaps&&b.mipmaps.length>0)for(let Pt=0;Pt<b.mipmaps.length;Pt++)ot(W.__webglFramebuffer[_t][Pt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Pt);else ot(W.__webglFramebuffer[_t],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(b)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let _t=0,Pt=nt.length;_t<Pt;_t++){const ue=nt[_t],ct=n.get(ue);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),ut(i.TEXTURE_2D,ue),ot(W.__webglFramebuffer,R,ue,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),m(ue)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_t=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,K.__webglTexture),ut(_t,b),b.mipmaps&&b.mipmaps.length>0)for(let Pt=0;Pt<b.mipmaps.length;Pt++)ot(W.__webglFramebuffer[Pt],R,b,i.COLOR_ATTACHMENT0,_t,Pt);else ot(W.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,_t,0);m(b)&&g(_t),e.unbindTexture()}R.depthBuffer&&Wt(R)}function ae(R){const b=R.textures;for(let W=0,K=b.length;W<K;W++){const nt=b[W];if(m(nt)){const Z=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ut=n.get(nt).__webglTexture;e.bindTexture(Z,Ut),g(Z),e.unbindTexture()}}}const et=[],L=[];function vt(R){if(R.samples>0){if(at(R)===!1){const b=R.textures,W=R.width,K=R.height;let nt=i.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(R),_t=b.length>1;if(_t)for(let Pt=0;Pt<b.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Pt=0;Pt<b.length;Pt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Pt]);const ue=n.get(b[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,W,K,0,0,W,K,nt,i.NEAREST),l===!0&&(et.length=0,L.length=0,et.push(i.COLOR_ATTACHMENT0+Pt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(et.push(Z),L.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let Pt=0;Pt<b.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Pt]);const ue=n.get(b[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,ue,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function mt(R){return Math.min(s.maxSamples,R.samples)}function at(R){const b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function xt(R){const b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function zt(R,b){const W=R.colorSpace,K=R.format,nt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==ws&&W!==ds&&(xe.getTransfer(W)===Ae?(K!==jn||nt!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),b}function Tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=w,this.setTexture2D=U,this.setTexture2DArray=z,this.setTexture3D=D,this.setTextureCube=Q,this.rebindTextures=Gt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=at}function pS(i,t){function e(n,s=ds){let r;const o=xe.getTransfer(s);if(n===ji)return i.UNSIGNED_BYTE;if(n===yu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tm)return i.BYTE;if(n===em)return i.SHORT;if(n===Wo)return i.UNSIGNED_SHORT;if(n===_u)return i.INT;if(n===Xs)return i.UNSIGNED_INT;if(n===xi)return i.FLOAT;if(n===hi)return i.HALF_FLOAT;if(n===im)return i.ALPHA;if(n===sm)return i.RGB;if(n===jn)return i.RGBA;if(n===rm)return i.LUMINANCE;if(n===om)return i.LUMINANCE_ALPHA;if(n===Dr)return i.DEPTH_COMPONENT;if(n===Wr)return i.DEPTH_STENCIL;if(n===Su)return i.RED;if(n===wu)return i.RED_INTEGER;if(n===am)return i.RG;if(n===bu)return i.RG_INTEGER;if(n===Eu)return i.RGBA_INTEGER;if(n===Ja||n===Qa||n===tl||n===el)if(o===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===el)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===el)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wh||n===bh||n===Eh||n===Th)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Eh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Th)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ah||n===Ch||n===Rh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ah||n===Ch)return o===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rh)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ph||n===Lh||n===Ih||n===Nh||n===Dh||n===Uh||n===Fh||n===Oh||n===zh||n===Bh||n===kh||n===Vh||n===Hh||n===Gh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ph)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lh)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ih)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nh)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dh)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uh)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fh)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oh)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zh)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bh)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kh)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vh)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hh)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gh)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nl||n===Wh||n===qh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===nl)return o===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lm||n===Xh||n===Yh||n===jh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===nl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class mS extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class me extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gS={type:"move"};class Fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const vS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xS=`
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

}`;class _S{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new un,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new an({vertexShader:vS,fragmentShader:xS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Be(new wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yS extends eo{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null;const v=new _S,m=e.getContextAttributes();let g=null,x=null;const _=[],M=[],C=new st;let E=null;const T=new vn;T.layers.enable(1),T.viewport=new Ee;const I=new vn;I.layers.enable(2),I.viewport=new Ee;const k=[T,I],y=new mS;y.layers.enable(1),y.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ot=_[$];return ot===void 0&&(ot=new Fc,_[$]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function($){let ot=_[$];return ot===void 0&&(ot=new Fc,_[$]=ot),ot.getGripSpace()},this.getHand=function($){let ot=_[$];return ot===void 0&&(ot=new Fc,_[$]=ot),ot.getHandSpace()};function N($){const ot=M.indexOf($.inputSource);if(ot===-1)return;const Et=_[ot];Et!==void 0&&(Et.update($.inputSource,$.frame,c||o),Et.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",z);for(let $=0;$<_.length;$++){const ot=M[$];ot!==null&&(M[$]=null,_[$].disconnect(ot))}w=null,O=null,v.reset(),t.setRenderTarget(g),f=null,u=null,d=null,s=null,x=null,re.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",U),s.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Bn(f.framebufferWidth,f.framebufferHeight,{format:jn,type:ji,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ot=null,Et=null,gt=null;m.depth&&(gt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?Wr:Dr,Et=m.stencil?Gr:Xs);const Wt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Wt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Bn(u.textureWidth,u.textureHeight,{format:jn,type:ji,depthTexture:new Sm(u.textureWidth,u.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function z($){for(let ot=0;ot<$.removed.length;ot++){const Et=$.removed[ot],gt=M.indexOf(Et);gt>=0&&(M[gt]=null,_[gt].disconnect(Et))}for(let ot=0;ot<$.added.length;ot++){const Et=$.added[ot];let gt=M.indexOf(Et);if(gt===-1){for(let Gt=0;Gt<_.length;Gt++)if(Gt>=M.length){M.push(Et),gt=Gt;break}else if(M[Gt]===null){M[Gt]=Et,gt=Gt;break}if(gt===-1)break}const Wt=_[gt];Wt&&Wt.connect(Et)}}const D=new P,Q=new P;function H($,ot,Et){D.setFromMatrixPosition(ot.matrixWorld),Q.setFromMatrixPosition(Et.matrixWorld);const gt=D.distanceTo(Q),Wt=ot.projectionMatrix.elements,Gt=Et.projectionMatrix.elements,Kt=Wt[14]/(Wt[10]-1),ae=Wt[14]/(Wt[10]+1),et=(Wt[9]+1)/Wt[5],L=(Wt[9]-1)/Wt[5],vt=(Wt[8]-1)/Wt[0],mt=(Gt[8]+1)/Gt[0],at=Kt*vt,xt=Kt*mt,zt=gt/(-vt+mt),Tt=zt*-vt;if(ot.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Tt),$.translateZ(zt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Wt[10]===-1)$.projectionMatrix.copy(ot.projectionMatrix),$.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const R=Kt+zt,b=ae+zt,W=at-Tt,K=xt+(gt-Tt),nt=et*ae/b*R,Z=L*ae/b*R;$.projectionMatrix.makePerspective(W,K,nt,Z,R,b),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function tt($,ot){ot===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ot.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ot=$.near,Et=$.far;v.texture!==null&&(v.depthNear>0&&(ot=v.depthNear),v.depthFar>0&&(Et=v.depthFar)),y.near=I.near=T.near=ot,y.far=I.far=T.far=Et,(w!==y.near||O!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,O=y.far);const gt=$.parent,Wt=y.cameras;tt(y,gt);for(let Gt=0;Gt<Wt.length;Gt++)tt(Wt[Gt],gt);Wt.length===2?H(y,T,I):y.projectionMatrix.copy(T.projectionMatrix),ft($,y,gt)};function ft($,ot,Et){Et===null?$.matrix.copy(ot.matrixWorld):($.matrix.copy(Et.matrixWorld),$.matrix.invert(),$.matrix.multiply(ot.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ot.projectionMatrix),$.projectionMatrixInverse.copy(ot.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=qr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let ut=null;function pt($,ot){if(h=ot.getViewerPose(c||o),p=ot,h!==null){const Et=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let gt=!1;Et.length!==y.cameras.length&&(y.cameras.length=0,gt=!0);for(let Gt=0;Gt<Et.length;Gt++){const Kt=Et[Gt];let ae=null;if(f!==null)ae=f.getViewport(Kt);else{const L=d.getViewSubImage(u,Kt);ae=L.viewport,Gt===0&&(t.setRenderTargetTextures(x,L.colorTexture,u.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(x))}let et=k[Gt];et===void 0&&(et=new vn,et.layers.enable(Gt),et.viewport=new Ee,k[Gt]=et),et.matrix.fromArray(Kt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Kt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(ae.x,ae.y,ae.width,ae.height),Gt===0&&(y.matrix.copy(et.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),gt===!0&&y.cameras.push(et)}const Wt=s.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")){const Gt=d.getDepthInformation(Et[0]);Gt&&Gt.isValid&&Gt.texture&&v.init(t,Gt,s.renderState)}}for(let Et=0;Et<_.length;Et++){const gt=M[Et],Wt=_[Et];gt!==null&&Wt!==void 0&&Wt.update(gt,ot,c||o)}ut&&ut($,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),p=null}const re=new Mm;re.setAnimationLoop(pt),this.setAnimationLoop=function($){ut=$},this.dispose=function(){}}}const Is=new yn,MS=new he;function SS(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,xm(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,x,_,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,x,_):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Rn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Rn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const x=t.get(g),_=x.envMap,M=x.envMapRotation;_&&(m.envMap.value=_,Is.copy(M),Is.x*=-1,Is.y*=-1,Is.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),m.envMapRotation.value.setFromMatrix4(MS.makeRotationFromEuler(Is)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,_){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=_*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Rn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const x=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wS(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const M=_.program;n.uniformBlockBinding(x,M)}function c(x,_){let M=s[x.id];M===void 0&&(p(x),M=h(x),s[x.id]=M,x.addEventListener("dispose",m));const C=_.program;n.updateUBOMapping(x,C);const E=t.render.frame;r[x.id]!==E&&(u(x),r[x.id]=E)}function h(x){const _=d();x.__bindingPointIndex=_;const M=i.createBuffer(),C=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const _=s[x.id],M=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,T=M.length;E<T;E++){const I=Array.isArray(M[E])?M[E]:[M[E]];for(let k=0,y=I.length;k<y;k++){const w=I[k];if(f(w,E,k,C)===!0){const O=w.__offset,N=Array.isArray(w.value)?w.value:[w.value];let U=0;for(let z=0;z<N.length;z++){const D=N[z],Q=v(D);typeof D=="number"||typeof D=="boolean"?(w.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,O+U,w.__data)):D.isMatrix3?(w.__data[0]=D.elements[0],w.__data[1]=D.elements[1],w.__data[2]=D.elements[2],w.__data[3]=0,w.__data[4]=D.elements[3],w.__data[5]=D.elements[4],w.__data[6]=D.elements[5],w.__data[7]=0,w.__data[8]=D.elements[6],w.__data[9]=D.elements[7],w.__data[10]=D.elements[8],w.__data[11]=0):(D.toArray(w.__data,U),U+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,_,M,C){const E=x.value,T=_+"_"+M;if(C[T]===void 0)return typeof E=="number"||typeof E=="boolean"?C[T]=E:C[T]=E.clone(),!0;{const I=C[T];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return C[T]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function p(x){const _=x.uniforms;let M=0;const C=16;for(let T=0,I=_.length;T<I;T++){const k=Array.isArray(_[T])?_[T]:[_[T]];for(let y=0,w=k.length;y<w;y++){const O=k[y],N=Array.isArray(O.value)?O.value:[O.value];for(let U=0,z=N.length;U<z;U++){const D=N[U],Q=v(D),H=M%C,tt=H%Q.boundary,ft=H+tt;M+=tt,ft!==0&&C-ft<Q.storage&&(M+=C-ft),O.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=Q.storage}}}const E=M%C;return E>0&&(M+=C-E),x.__size=M,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function g(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}class Am{constructor(t={}){const{canvas:e=dv(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const f=new Uint32Array(4),p=new Int32Array(4);let v=null,m=null;const g=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this.toneMapping=gs,this.toneMappingExposure=1;const _=this;let M=!1,C=0,E=0,T=null,I=-1,k=null;const y=new Ee,w=new Ee;let O=null;const N=new St(0);let U=0,z=e.width,D=e.height,Q=1,H=null,tt=null;const ft=new Ee(0,0,z,D),ut=new Ee(0,0,z,D);let pt=!1;const re=new Ru;let $=!1,ot=!1;const Et=new he,gt=new he,Wt=new P,Gt=new Ee,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function et(){return T===null?Q:1}let L=n;function vt(A,B){return e.getContext(A,B)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vu}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),L===null){const B="webgl2";if(L=vt(B,A),L===null)throw vt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let mt,at,xt,zt,Tt,R,b,W,K,nt,Z,Ut,_t,Pt,ue,ct,Lt,Yt,jt,It,de,Jt,Te,F;function At(){mt=new Ry(L),mt.init(),Jt=new pS(L,mt),at=new wy(L,mt,t,Jt),xt=new uS(L),at.reverseDepthBuffer&&xt.buffers.depth.setReversed(!0),zt=new Iy(L),Tt=new KM,R=new fS(L,mt,xt,Tt,at,Jt,zt),b=new Ey(_),W=new Cy(_),K=new Bv(L),Te=new My(L,K),nt=new Py(L,K,zt,Te),Z=new Dy(L,nt,K,zt),jt=new Ny(L,at,R),ct=new by(Tt),Ut=new $M(_,b,W,mt,at,Te,ct),_t=new SS(_,Tt),Pt=new JM,ue=new sS(mt),Yt=new yy(_,b,W,xt,Z,u,l),Lt=new cS(_,Z,at),F=new wS(L,zt,at,xt),It=new Sy(L,mt,zt),de=new Ly(L,mt,zt),zt.programs=Ut.programs,_.capabilities=at,_.extensions=mt,_.properties=Tt,_.renderLists=Pt,_.shadowMap=Lt,_.state=xt,_.info=zt}At();const j=new yS(_,L);this.xr=j,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(A){A!==void 0&&(Q=A,this.setSize(z,D,!1))},this.getSize=function(A){return A.set(z,D)},this.setSize=function(A,B,q=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,D=B,e.width=Math.floor(A*Q),e.height=Math.floor(B*Q),q===!0&&(e.style.width=A+"px",e.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(z*Q,D*Q).floor()},this.setDrawingBufferSize=function(A,B,q){z=A,D=B,Q=q,e.width=Math.floor(A*q),e.height=Math.floor(B*q),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(ft)},this.setViewport=function(A,B,q,Y){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,B,q,Y),xt.viewport(y.copy(ft).multiplyScalar(Q).round())},this.getScissor=function(A){return A.copy(ut)},this.setScissor=function(A,B,q,Y){A.isVector4?ut.set(A.x,A.y,A.z,A.w):ut.set(A,B,q,Y),xt.scissor(w.copy(ut).multiplyScalar(Q).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(A){xt.setScissorTest(pt=A)},this.setOpaqueSort=function(A){H=A},this.setTransparentSort=function(A){tt=A},this.getClearColor=function(A){return A.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(A=!0,B=!0,q=!0){let Y=0;if(A){let V=!1;if(T!==null){const dt=T.texture.format;V=dt===Eu||dt===bu||dt===wu}if(V){const dt=T.texture.type,bt=dt===ji||dt===Xs||dt===Wo||dt===Gr||dt===yu||dt===Mu,Nt=Yt.getClearColor(),Ft=Yt.getClearAlpha(),qt=Nt.r,Xt=Nt.g,Ot=Nt.b;bt?(f[0]=qt,f[1]=Xt,f[2]=Ot,f[3]=Ft,L.clearBufferuiv(L.COLOR,0,f)):(p[0]=qt,p[1]=Xt,p[2]=Ot,p[3]=Ft,L.clearBufferiv(L.COLOR,0,p))}else Y|=L.COLOR_BUFFER_BIT}B&&(Y|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),q&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),Pt.dispose(),ue.dispose(),Tt.dispose(),b.dispose(),W.dispose(),Z.dispose(),Te.dispose(),F.dispose(),Ut.dispose(),j.dispose(),j.removeEventListener("sessionstart",md),j.removeEventListener("sessionend",gd),Ts.stop()};function it(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=zt.autoReset,B=Lt.enabled,q=Lt.autoUpdate,Y=Lt.needsUpdate,V=Lt.type;At(),zt.autoReset=A,Lt.enabled=B,Lt.autoUpdate=q,Lt.needsUpdate=Y,Lt.type=V}function Ct(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function fe(A){const B=A.target;B.removeEventListener("dispose",fe),We(B)}function We(A){Sn(A),Tt.remove(A)}function Sn(A){const B=Tt.get(A).programs;B!==void 0&&(B.forEach(function(q){Ut.releaseProgram(q)}),A.isShaderMaterial&&Ut.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,q,Y,V,dt){B===null&&(B=Kt);const bt=V.isMesh&&V.matrixWorld.determinant()<0,Nt=ug(A,B,q,Y,V);xt.setMaterial(Y,bt);let Ft=q.index,qt=1;if(Y.wireframe===!0){if(Ft=nt.getWireframeAttribute(q),Ft===void 0)return;qt=2}const Xt=q.drawRange,Ot=q.attributes.position;let Se=Xt.start*qt,Le=(Xt.start+Xt.count)*qt;dt!==null&&(Se=Math.max(Se,dt.start*qt),Le=Math.min(Le,(dt.start+dt.count)*qt)),Ft!==null?(Se=Math.max(Se,0),Le=Math.min(Le,Ft.count)):Ot!=null&&(Se=Math.max(Se,0),Le=Math.min(Le,Ot.count));const ze=Le-Se;if(ze<0||ze===1/0)return;Te.setup(V,Y,Nt,q,Ft);let Nn,_e=It;if(Ft!==null&&(Nn=K.get(Ft),_e=de,_e.setIndex(Nn)),V.isMesh)Y.wireframe===!0?(xt.setLineWidth(Y.wireframeLinewidth*et()),_e.setMode(L.LINES)):_e.setMode(L.TRIANGLES);else if(V.isLine){let Bt=Y.linewidth;Bt===void 0&&(Bt=1),xt.setLineWidth(Bt*et()),V.isLineSegments?_e.setMode(L.LINES):V.isLineLoop?_e.setMode(L.LINE_LOOP):_e.setMode(L.LINE_STRIP)}else V.isPoints?_e.setMode(L.POINTS):V.isSprite&&_e.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)_e.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))_e.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Bt=V._multiDrawStarts,tn=V._multiDrawCounts,ye=V._multiDrawCount,Kn=Ft?K.get(Ft).bytesPerElement:1,rr=Tt.get(Y).currentProgram.getUniforms();for(let Dn=0;Dn<ye;Dn++)rr.setValue(L,"_gl_DrawID",Dn),_e.render(Bt[Dn]/Kn,tn[Dn])}else if(V.isInstancedMesh)_e.renderInstances(Se,ze,V.count);else if(q.isInstancedBufferGeometry){const Bt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,tn=Math.min(q.instanceCount,Bt);_e.renderInstances(Se,ze,tn)}else _e.render(Se,ze)};function ve(A,B,q){A.transparent===!0&&A.side===zn&&A.forceSinglePass===!1?(A.side=Rn,A.needsUpdate=!0,ca(A,B,q),A.side=ys,A.needsUpdate=!0,ca(A,B,q),A.side=zn):ca(A,B,q)}this.compile=function(A,B,q=null){q===null&&(q=A),m=ue.get(q),m.init(B),x.push(m),q.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),A!==q&&A.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();const Y=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const dt=V.material;if(dt)if(Array.isArray(dt))for(let bt=0;bt<dt.length;bt++){const Nt=dt[bt];ve(Nt,q,V),Y.add(Nt)}else ve(dt,q,V),Y.add(dt)}),x.pop(),m=null,Y},this.compileAsync=function(A,B,q=null){const Y=this.compile(A,B,q);return new Promise(V=>{function dt(){if(Y.forEach(function(bt){Tt.get(bt).currentProgram.isReady()&&Y.delete(bt)}),Y.size===0){V(A);return}setTimeout(dt,10)}mt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let wn=null;function Ei(A){wn&&wn(A)}function md(){Ts.stop()}function gd(){Ts.start()}const Ts=new Mm;Ts.setAnimationLoop(Ei),typeof self<"u"&&Ts.setContext(self),this.setAnimationLoop=function(A){wn=A,j.setAnimationLoop(A),A===null?Ts.stop():Ts.start()},j.addEventListener("sessionstart",md),j.addEventListener("sessionend",gd),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(B),B=j.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,B,T),m=ue.get(A,x.length),m.init(B),x.push(m),gt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),re.setFromProjectionMatrix(gt),ot=this.localClippingEnabled,$=ct.init(this.clippingPlanes,ot),v=Pt.get(A,g.length),v.init(),g.push(v),j.enabled===!0&&j.isPresenting===!0){const dt=_.xr.getDepthSensingMesh();dt!==null&&sc(dt,B,-1/0,_.sortObjects)}sc(A,B,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(H,tt),ae=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,ae&&Yt.addToRenderList(v,A),this.info.render.frame++,$===!0&&ct.beginShadows();const q=m.state.shadowsArray;Lt.render(q,A,B),$===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=v.opaque,V=v.transmissive;if(m.setupLights(),B.isArrayCamera){const dt=B.cameras;if(V.length>0)for(let bt=0,Nt=dt.length;bt<Nt;bt++){const Ft=dt[bt];xd(Y,V,A,Ft)}ae&&Yt.render(A);for(let bt=0,Nt=dt.length;bt<Nt;bt++){const Ft=dt[bt];vd(v,A,Ft,Ft.viewport)}}else V.length>0&&xd(Y,V,A,B),ae&&Yt.render(A),vd(v,A,B);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(_,A,B),Te.resetDefaultState(),I=-1,k=null,x.pop(),x.length>0?(m=x[x.length-1],$===!0&&ct.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function sc(A,B,q,Y){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||re.intersectsSprite(A)){Y&&Gt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(gt);const bt=Z.update(A),Nt=A.material;Nt.visible&&v.push(A,bt,Nt,q,Gt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||re.intersectsObject(A))){const bt=Z.update(A),Nt=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Gt.copy(A.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Gt.copy(bt.boundingSphere.center)),Gt.applyMatrix4(A.matrixWorld).applyMatrix4(gt)),Array.isArray(Nt)){const Ft=bt.groups;for(let qt=0,Xt=Ft.length;qt<Xt;qt++){const Ot=Ft[qt],Se=Nt[Ot.materialIndex];Se&&Se.visible&&v.push(A,bt,Se,q,Gt.z,Ot)}}else Nt.visible&&v.push(A,bt,Nt,q,Gt.z,null)}}const dt=A.children;for(let bt=0,Nt=dt.length;bt<Nt;bt++)sc(dt[bt],B,q,Y)}function vd(A,B,q,Y){const V=A.opaque,dt=A.transmissive,bt=A.transparent;m.setupLightsView(q),$===!0&&ct.setGlobalState(_.clippingPlanes,q),Y&&xt.viewport(y.copy(Y)),V.length>0&&la(V,B,q),dt.length>0&&la(dt,B,q),bt.length>0&&la(bt,B,q),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function xd(A,B,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new Bn(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?hi:ji,minFilter:Ws,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xe.workingColorSpace}));const dt=m.state.transmissionRenderTarget[Y.id],bt=Y.viewport||y;dt.setSize(bt.z,bt.w);const Nt=_.getRenderTarget();_.setRenderTarget(dt),_.getClearColor(N),U=_.getClearAlpha(),U<1&&_.setClearColor(16777215,.5),_.clear(),ae&&Yt.render(q);const Ft=_.toneMapping;_.toneMapping=gs;const qt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),$===!0&&ct.setGlobalState(_.clippingPlanes,Y),la(A,q,Y),R.updateMultisampleRenderTarget(dt),R.updateRenderTargetMipmap(dt),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Ot=0,Se=B.length;Ot<Se;Ot++){const Le=B[Ot],ze=Le.object,Nn=Le.geometry,_e=Le.material,Bt=Le.group;if(_e.side===zn&&ze.layers.test(Y.layers)){const tn=_e.side;_e.side=Rn,_e.needsUpdate=!0,_d(ze,q,Y,Nn,_e,Bt),_e.side=tn,_e.needsUpdate=!0,Xt=!0}}Xt===!0&&(R.updateMultisampleRenderTarget(dt),R.updateRenderTargetMipmap(dt))}_.setRenderTarget(Nt),_.setClearColor(N,U),qt!==void 0&&(Y.viewport=qt),_.toneMapping=Ft}function la(A,B,q){const Y=B.isScene===!0?B.overrideMaterial:null;for(let V=0,dt=A.length;V<dt;V++){const bt=A[V],Nt=bt.object,Ft=bt.geometry,qt=Y===null?bt.material:Y,Xt=bt.group;Nt.layers.test(q.layers)&&_d(Nt,B,q,Ft,qt,Xt)}}function _d(A,B,q,Y,V,dt){A.onBeforeRender(_,B,q,Y,V,dt),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(_,B,q,Y,A,dt),V.transparent===!0&&V.side===zn&&V.forceSinglePass===!1?(V.side=Rn,V.needsUpdate=!0,_.renderBufferDirect(q,B,Y,V,A,dt),V.side=ys,V.needsUpdate=!0,_.renderBufferDirect(q,B,Y,V,A,dt),V.side=zn):_.renderBufferDirect(q,B,Y,V,A,dt),A.onAfterRender(_,B,q,Y,V,dt)}function ca(A,B,q){B.isScene!==!0&&(B=Kt);const Y=Tt.get(A),V=m.state.lights,dt=m.state.shadowsArray,bt=V.state.version,Nt=Ut.getParameters(A,V.state,dt,B,q),Ft=Ut.getProgramCacheKey(Nt);let qt=Y.programs;Y.environment=A.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(A.isMeshStandardMaterial?W:b).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,qt===void 0&&(A.addEventListener("dispose",fe),qt=new Map,Y.programs=qt);let Xt=qt.get(Ft);if(Xt!==void 0){if(Y.currentProgram===Xt&&Y.lightsStateVersion===bt)return Md(A,Nt),Xt}else Nt.uniforms=Ut.getUniforms(A),A.onBeforeCompile(Nt,_),Xt=Ut.acquireProgram(Nt,Ft),qt.set(Ft,Xt),Y.uniforms=Nt.uniforms;const Ot=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ot.clippingPlanes=ct.uniform),Md(A,Nt),Y.needsLights=fg(A),Y.lightsStateVersion=bt,Y.needsLights&&(Ot.ambientLightColor.value=V.state.ambient,Ot.lightProbe.value=V.state.probe,Ot.directionalLights.value=V.state.directional,Ot.directionalLightShadows.value=V.state.directionalShadow,Ot.spotLights.value=V.state.spot,Ot.spotLightShadows.value=V.state.spotShadow,Ot.rectAreaLights.value=V.state.rectArea,Ot.ltc_1.value=V.state.rectAreaLTC1,Ot.ltc_2.value=V.state.rectAreaLTC2,Ot.pointLights.value=V.state.point,Ot.pointLightShadows.value=V.state.pointShadow,Ot.hemisphereLights.value=V.state.hemi,Ot.directionalShadowMap.value=V.state.directionalShadowMap,Ot.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ot.spotShadowMap.value=V.state.spotShadowMap,Ot.spotLightMatrix.value=V.state.spotLightMatrix,Ot.spotLightMap.value=V.state.spotLightMap,Ot.pointShadowMap.value=V.state.pointShadowMap,Ot.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Xt,Y.uniformsList=null,Xt}function yd(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=sl.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function Md(A,B){const q=Tt.get(A);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function ug(A,B,q,Y,V){B.isScene!==!0&&(B=Kt),R.resetTextureUnits();const dt=B.fog,bt=Y.isMeshStandardMaterial?B.environment:null,Nt=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ws,Ft=(Y.isMeshStandardMaterial?W:b).get(Y.envMap||bt),qt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ot=!!q.morphAttributes.position,Se=!!q.morphAttributes.normal,Le=!!q.morphAttributes.color;let ze=gs;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ze=_.toneMapping);const Nn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_e=Nn!==void 0?Nn.length:0,Bt=Tt.get(Y),tn=m.state.lights;if($===!0&&(ot===!0||A!==k)){const Gn=A===k&&Y.id===I;ct.setState(Y,A,Gn)}let ye=!1;Y.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==tn.state.version||Bt.outputColorSpace!==Nt||V.isBatchedMesh&&Bt.batching===!1||!V.isBatchedMesh&&Bt.batching===!0||V.isBatchedMesh&&Bt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Bt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Bt.instancing===!1||!V.isInstancedMesh&&Bt.instancing===!0||V.isSkinnedMesh&&Bt.skinning===!1||!V.isSkinnedMesh&&Bt.skinning===!0||V.isInstancedMesh&&Bt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Bt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Bt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Bt.instancingMorph===!1&&V.morphTexture!==null||Bt.envMap!==Ft||Y.fog===!0&&Bt.fog!==dt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ct.numPlanes||Bt.numIntersection!==ct.numIntersection)||Bt.vertexAlphas!==qt||Bt.vertexTangents!==Xt||Bt.morphTargets!==Ot||Bt.morphNormals!==Se||Bt.morphColors!==Le||Bt.toneMapping!==ze||Bt.morphTargetsCount!==_e)&&(ye=!0):(ye=!0,Bt.__version=Y.version);let Kn=Bt.currentProgram;ye===!0&&(Kn=ca(Y,B,V));let rr=!1,Dn=!1,rc=!1;const Ve=Kn.getUniforms(),es=Bt.uniforms;if(xt.useProgram(Kn.program)&&(rr=!0,Dn=!0,rc=!0),Y.id!==I&&(I=Y.id,Dn=!0),rr||k!==A){at.reverseDepthBuffer?(Et.copy(A.projectionMatrix),pv(Et),mv(Et),Ve.setValue(L,"projectionMatrix",Et)):Ve.setValue(L,"projectionMatrix",A.projectionMatrix),Ve.setValue(L,"viewMatrix",A.matrixWorldInverse);const Gn=Ve.map.cameraPosition;Gn!==void 0&&Gn.setValue(L,Wt.setFromMatrixPosition(A.matrixWorld)),at.logarithmicDepthBuffer&&Ve.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ve.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),k!==A&&(k=A,Dn=!0,rc=!0)}if(V.isSkinnedMesh){Ve.setOptional(L,V,"bindMatrix"),Ve.setOptional(L,V,"bindMatrixInverse");const Gn=V.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),Ve.setValue(L,"boneTexture",Gn.boneTexture,R))}V.isBatchedMesh&&(Ve.setOptional(L,V,"batchingTexture"),Ve.setValue(L,"batchingTexture",V._matricesTexture,R),Ve.setOptional(L,V,"batchingIdTexture"),Ve.setValue(L,"batchingIdTexture",V._indirectTexture,R),Ve.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&Ve.setValue(L,"batchingColorTexture",V._colorsTexture,R));const oc=q.morphAttributes;if((oc.position!==void 0||oc.normal!==void 0||oc.color!==void 0)&&jt.update(V,q,Kn),(Dn||Bt.receiveShadow!==V.receiveShadow)&&(Bt.receiveShadow=V.receiveShadow,Ve.setValue(L,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(es.envMap.value=Ft,es.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(es.envMapIntensity.value=B.environmentIntensity),Dn&&(Ve.setValue(L,"toneMappingExposure",_.toneMappingExposure),Bt.needsLights&&dg(es,rc),dt&&Y.fog===!0&&_t.refreshFogUniforms(es,dt),_t.refreshMaterialUniforms(es,Y,Q,D,m.state.transmissionRenderTarget[A.id]),sl.upload(L,yd(Bt),es,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(sl.upload(L,yd(Bt),es,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ve.setValue(L,"center",V.center),Ve.setValue(L,"modelViewMatrix",V.modelViewMatrix),Ve.setValue(L,"normalMatrix",V.normalMatrix),Ve.setValue(L,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Gn=Y.uniformsGroups;for(let ac=0,pg=Gn.length;ac<pg;ac++){const Sd=Gn[ac];F.update(Sd,Kn),F.bind(Sd,Kn)}}return Kn}function dg(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function fg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,B,q){Tt.get(A.texture).__webglTexture=B,Tt.get(A.depthTexture).__webglTexture=q;const Y=Tt.get(A);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,B){const q=Tt.get(A);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,q=0){T=A,C=B,E=q;let Y=!0,V=null,dt=!1,bt=!1;if(A){const Ft=Tt.get(A);if(Ft.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1;else if(Ft.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(Ft.__hasExternalTextures)R.rebindTextures(A,Tt.get(A.texture).__webglTexture,Tt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ot=A.depthTexture;if(Ft.__boundDepthTexture!==Ot){if(Ot!==null&&Tt.has(Ot)&&(A.width!==Ot.image.width||A.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const qt=A.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(bt=!0);const Xt=Tt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xt[B])?V=Xt[B][q]:V=Xt[B],dt=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?V=Tt.get(A).__webglMultisampledFramebuffer:Array.isArray(Xt)?V=Xt[q]:V=Xt,y.copy(A.viewport),w.copy(A.scissor),O=A.scissorTest}else y.copy(ft).multiplyScalar(Q).floor(),w.copy(ut).multiplyScalar(Q).floor(),O=pt;if(xt.bindFramebuffer(L.FRAMEBUFFER,V)&&Y&&xt.drawBuffers(A,V),xt.viewport(y),xt.scissor(w),xt.setScissorTest(O),dt){const Ft=Tt.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ft.__webglTexture,q)}else if(bt){const Ft=Tt.get(A.texture),qt=B||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ft.__webglTexture,q||0,qt)}I=-1},this.readRenderTargetPixels=function(A,B,q,Y,V,dt,bt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Tt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(Nt=Nt[bt]),Nt){xt.bindFramebuffer(L.FRAMEBUFFER,Nt);try{const Ft=A.texture,qt=Ft.format,Xt=Ft.type;if(!at.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-Y&&q>=0&&q<=A.height-V&&L.readPixels(B,q,Y,V,Jt.convert(qt),Jt.convert(Xt),dt)}finally{const Ft=T!==null?Tt.get(T).__webglFramebuffer:null;xt.bindFramebuffer(L.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(A,B,q,Y,V,dt,bt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Tt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(Nt=Nt[bt]),Nt){const Ft=A.texture,qt=Ft.format,Xt=Ft.type;if(!at.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=A.width-Y&&q>=0&&q<=A.height-V){xt.bindFramebuffer(L.FRAMEBUFFER,Nt);const Ot=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ot),L.bufferData(L.PIXEL_PACK_BUFFER,dt.byteLength,L.STREAM_READ),L.readPixels(B,q,Y,V,Jt.convert(qt),Jt.convert(Xt),0);const Se=T!==null?Tt.get(T).__webglFramebuffer:null;xt.bindFramebuffer(L.FRAMEBUFFER,Se);const Le=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await fv(L,Le,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ot),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,dt),L.deleteBuffer(Ot),L.deleteSync(Le),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,B=null,q=0){A.isTexture!==!0&&(il("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,A=arguments[1]);const Y=Math.pow(2,-q),V=Math.floor(A.image.width*Y),dt=Math.floor(A.image.height*Y),bt=B!==null?B.x:0,Nt=B!==null?B.y:0;R.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,bt,Nt,V,dt),xt.unbindTexture()},this.copyTextureToTexture=function(A,B,q=null,Y=null,V=0){A.isTexture!==!0&&(il("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1],B=arguments[2],V=arguments[3]||0,q=null);let dt,bt,Nt,Ft,qt,Xt;q!==null?(dt=q.max.x-q.min.x,bt=q.max.y-q.min.y,Nt=q.min.x,Ft=q.min.y):(dt=A.image.width,bt=A.image.height,Nt=0,Ft=0),Y!==null?(qt=Y.x,Xt=Y.y):(qt=0,Xt=0);const Ot=Jt.convert(B.format),Se=Jt.convert(B.type);R.setTexture2D(B,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const Le=L.getParameter(L.UNPACK_ROW_LENGTH),ze=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Nn=L.getParameter(L.UNPACK_SKIP_PIXELS),_e=L.getParameter(L.UNPACK_SKIP_ROWS),Bt=L.getParameter(L.UNPACK_SKIP_IMAGES),tn=A.isCompressedTexture?A.mipmaps[V]:A.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,tn.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,tn.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Nt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ft),A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,V,qt,Xt,dt,bt,Ot,Se,tn.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,V,qt,Xt,tn.width,tn.height,Ot,tn.data):L.texSubImage2D(L.TEXTURE_2D,V,qt,Xt,dt,bt,Ot,Se,tn),L.pixelStorei(L.UNPACK_ROW_LENGTH,Le),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ze),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Nn),L.pixelStorei(L.UNPACK_SKIP_ROWS,_e),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Bt),V===0&&B.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),xt.unbindTexture()},this.copyTextureToTexture3D=function(A,B,q=null,Y=null,V=0){A.isTexture!==!0&&(il("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,A=arguments[2],B=arguments[3],V=arguments[4]||0);let dt,bt,Nt,Ft,qt,Xt,Ot,Se,Le;const ze=A.isCompressedTexture?A.mipmaps[V]:A.image;q!==null?(dt=q.max.x-q.min.x,bt=q.max.y-q.min.y,Nt=q.max.z-q.min.z,Ft=q.min.x,qt=q.min.y,Xt=q.min.z):(dt=ze.width,bt=ze.height,Nt=ze.depth,Ft=0,qt=0,Xt=0),Y!==null?(Ot=Y.x,Se=Y.y,Le=Y.z):(Ot=0,Se=0,Le=0);const Nn=Jt.convert(B.format),_e=Jt.convert(B.type);let Bt;if(B.isData3DTexture)R.setTexture3D(B,0),Bt=L.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)R.setTexture2DArray(B,0),Bt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const tn=L.getParameter(L.UNPACK_ROW_LENGTH),ye=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Kn=L.getParameter(L.UNPACK_SKIP_PIXELS),rr=L.getParameter(L.UNPACK_SKIP_ROWS),Dn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ze.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ze.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ft),L.pixelStorei(L.UNPACK_SKIP_ROWS,qt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Xt),A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Bt,V,Ot,Se,Le,dt,bt,Nt,Nn,_e,ze.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Bt,V,Ot,Se,Le,dt,bt,Nt,Nn,ze.data):L.texSubImage3D(Bt,V,Ot,Se,Le,dt,bt,Nt,Nn,_e,ze),L.pixelStorei(L.UNPACK_ROW_LENGTH,tn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ye),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Kn),L.pixelStorei(L.UNPACK_SKIP_ROWS,rr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Dn),V===0&&B.generateMipmaps&&L.generateMipmap(Bt),xt.unbindTexture()},this.initRenderTarget=function(A){Tt.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),xt.unbindTexture()},this.resetState=function(){C=0,E=0,T=null,xt.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Au?"display-p3":"srgb",e.unpackColorSpace=xe.workingColorSpace===Ul?"display-p3":"srgb"}}class Iu{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new St(t),this.near=e,this.far=n}clone(){return new Iu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Cm extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Rm extends un{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Tn,h=Tn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xf extends He{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const yr=new he,_f=new he,La=[],yf=new Qi,bS=new he,ho=new Be,uo=new nr;class Ol extends Be{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,bS)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yr),yf.copy(t.boundingBox).applyMatrix4(yr),this.boundingBox.union(yf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new nr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yr),uo.copy(t.boundingSphere).applyMatrix4(yr),this.boundingSphere.union(uo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uo.copy(this.boundingSphere),uo.applyMatrix4(n),t.ray.intersectsSphere(uo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,yr),_f.multiplyMatrices(n,yr),ho.matrixWorld=_f,ho.raycast(t,La);for(let o=0,a=La.length;o<a;o++){const l=La[o];l.instanceId=r,l.object=this,e.push(l)}La.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new xf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rm(new Float32Array(s*this.count),s,this.count,Su,xi));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Pm extends ir{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Mf=new he,Kh=new fm,Ia=new nr,Na=new P;class ES extends Ye{constructor(t=new Ge,e=new Pm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(s),Ia.radius+=r,t.ray.intersectsSphere(Ia)===!1)return;Mf.copy(s).invert(),Kh.copy(t.ray).applyMatrix4(Mf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,v=f;p<v;p++){const m=c.getX(p);Na.fromBufferAttribute(d,m),Sf(Na,m,l,s,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,v=f;p<v;p++)Na.fromBufferAttribute(d,p),Sf(Na,p,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Sf(i,t,e,n,s,r,o){const a=Kh.distanceSqToPoint(i);if(a<e){const l=new P;Kh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class TS extends un{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new st:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],o=[],a=new P,l=new he;for(let f=0;f<=t;f++){const p=f/t;s[f]=this.getTangentAt(p,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Je(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Nu extends bi{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new st){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class AS extends Nu{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Du(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Da=new P,Oc=new Du,zc=new Du,Bc=new Du;class CS extends bi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Da.subVectors(s[0],s[1]).add(s[0]),c=Da);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Da.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Da),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),Oc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,v,m),zc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,v,m),Bc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(Oc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),zc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Bc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Oc.calc(l),zc.calc(l),Bc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function wf(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function RS(i,t){const e=1-i;return e*e*t}function PS(i,t){return 2*(1-i)*i*t}function LS(i,t){return i*i*t}function Uo(i,t,e,n){return RS(i,t)+PS(i,e)+LS(i,n)}function IS(i,t){const e=1-i;return e*e*e*t}function NS(i,t){const e=1-i;return 3*e*e*i*t}function DS(i,t){return 3*(1-i)*i*i*t}function US(i,t){return i*i*i*t}function Fo(i,t,e,n,s){return IS(i,t)+NS(i,e)+DS(i,n)+US(i,s)}class Lm extends bi{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fo(t,s.x,r.x,o.x,a.x),Fo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class FS extends bi{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fo(t,s.x,r.x,o.x,a.x),Fo(t,s.y,r.y,o.y,a.y),Fo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Im extends bi{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class OS extends bi{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nm extends bi{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Uo(t,s.x,r.x,o.x),Uo(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zS extends bi{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Uo(t,s.x,r.x,o.x),Uo(t,s.y,r.y,o.y),Uo(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dm extends bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(wf(a,l.x,c.x,h.x,d.x),wf(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new st().fromArray(s))}return this}}var Zh=Object.freeze({__proto__:null,ArcCurve:AS,CatmullRomCurve3:CS,CubicBezierCurve:Lm,CubicBezierCurve3:FS,EllipseCurve:Nu,LineCurve:Im,LineCurve3:OS,QuadraticBezierCurve:Nm,QuadraticBezierCurve3:zS,SplineCurve:Dm});class BS extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zh[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Zh[s.type]().fromJSON(s))}return this}}class Jh extends BS{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Im(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Nm(this.currentPoint.clone(),new st(t,e),new st(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Lm(this.currentPoint.clone(),new st(t,e),new st(n,s),new st(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Dm(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Nu(t,e,n,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class zl extends Ge{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Je(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new P,u=new st,f=new P,p=new P,v=new P;let m=0,g=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,f.x=g*1,f.y=-m,f.z=g*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let x=0;x<=e;x++){const _=n+x*h*s,M=Math.sin(_),C=Math.cos(_);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*M,d.y=t[E].y,d.z=t[E].x*C,o.push(d.x,d.y,d.z),u.x=x/e,u.y=E/(t.length-1),a.push(u.x,u.y);const T=l[3*E+0]*M,I=l[3*E+1],k=l[3*E+0]*C;c.push(T,I,k)}}for(let x=0;x<e;x++)for(let _=0;_<t.length-1;_++){const M=_+x*t.length,C=M,E=M+t.length,T=M+t.length+1,I=M+1;r.push(C,E,I),r.push(T,I,E)}this.setIndex(r),this.setAttribute("position",new ge(o,3)),this.setAttribute("uv",new ge(a,2)),this.setAttribute("normal",new ge(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zl(t.points,t.segments,t.phiStart,t.phiLength)}}class Oo extends Ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new P,h=new st;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(a,3)),this.setAttribute("uv",new ge(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ke extends Ge{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let p=0;const v=[],m=n/2;let g=0;x(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ge(d,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(f,2));function x(){const M=new P,C=new P;let E=0;const T=(e-t)/n;for(let I=0;I<=r;I++){const k=[],y=I/r,w=y*(e-t)+t;for(let O=0;O<=s;O++){const N=O/s,U=N*l+a,z=Math.sin(U),D=Math.cos(U);C.x=w*z,C.y=-y*n+m,C.z=w*D,d.push(C.x,C.y,C.z),M.set(z,T,D).normalize(),u.push(M.x,M.y,M.z),f.push(N,1-y),k.push(p++)}v.push(k)}for(let I=0;I<s;I++)for(let k=0;k<r;k++){const y=v[k][I],w=v[k+1][I],O=v[k+1][I+1],N=v[k][I+1];t>0&&(h.push(y,w,N),E+=3),e>0&&(h.push(w,O,N),E+=3)}c.addGroup(g,E,0),g+=E}function _(M){const C=p,E=new st,T=new P;let I=0;const k=M===!0?t:e,y=M===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*y,0),u.push(0,y,0),f.push(.5,.5),p++;const w=p;for(let O=0;O<=s;O++){const U=O/s*l+a,z=Math.cos(U),D=Math.sin(U);T.x=k*D,T.y=m*y,T.z=k*z,d.push(T.x,T.y,T.z),u.push(0,y,0),E.x=z*.5+.5,E.y=D*.5*y+.5,f.push(E.x,E.y),p++}for(let O=0;O<s;O++){const N=C+O,U=w+O;M===!0?h.push(U,U+1,N):h.push(U+1,U,N),I+=3}c.addGroup(g,I,M===!0?1:2),g+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wi extends ke{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Wi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qo extends Ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ge(r,3)),this.setAttribute("normal",new ge(r.slice(),3)),this.setAttribute("uv",new ge(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const _=new P,M=new P,C=new P;for(let E=0;E<e.length;E+=3)f(e[E+0],_),f(e[E+1],M),f(e[E+2],C),l(_,M,C,x)}function l(x,_,M,C){const E=C+1,T=[];for(let I=0;I<=E;I++){T[I]=[];const k=x.clone().lerp(M,I/E),y=_.clone().lerp(M,I/E),w=E-I;for(let O=0;O<=w;O++)O===0&&I===E?T[I][O]=k:T[I][O]=k.clone().lerp(y,O/w)}for(let I=0;I<E;I++)for(let k=0;k<2*(E-I)-1;k++){const y=Math.floor(k/2);k%2===0?(u(T[I][y+1]),u(T[I+1][y]),u(T[I][y])):(u(T[I][y+1]),u(T[I+1][y+1]),u(T[I+1][y]))}}function c(x){const _=new P;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(x),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function h(){const x=new P;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];const M=m(x)/2/Math.PI+.5,C=g(x)/Math.PI+.5;o.push(M,1-C)}p(),d()}function d(){for(let x=0;x<o.length;x+=6){const _=o[x+0],M=o[x+2],C=o[x+4],E=Math.max(_,M,C),T=Math.min(_,M,C);E>.9&&T<.1&&(_<.2&&(o[x+0]+=1),M<.2&&(o[x+2]+=1),C<.2&&(o[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,_){const M=x*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function p(){const x=new P,_=new P,M=new P,C=new P,E=new st,T=new st,I=new st;for(let k=0,y=0;k<r.length;k+=9,y+=6){x.set(r[k+0],r[k+1],r[k+2]),_.set(r[k+3],r[k+4],r[k+5]),M.set(r[k+6],r[k+7],r[k+8]),E.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),I.set(o[y+4],o[y+5]),C.copy(x).add(_).add(M).divideScalar(3);const w=m(C);v(E,y+0,x,w),v(T,y+2,_,w),v(I,y+4,M,w)}}function v(x,_,M,C){C<0&&x.x===1&&(o[_]=x.x-1),M.x===0&&M.z===0&&(o[_]=C/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.vertices,t.indices,t.radius,t.details)}}class gl extends Qo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new gl(t.radius,t.detail)}}let rl=class extends Jh{constructor(t){super(t),this.uuid=er(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Jh().fromJSON(s))}return this}};const kS={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Um(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,f;if(n&&(r=qS(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let p=e;p<s;p+=e)d=i[p],u=i[p+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Xo(r,o,e,a,l,f,0),o}};function Um(i,t,e,n,s){let r,o;if(s===n1(i,t,e,n)>0)for(r=t;r<e;r+=n)o=bf(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=bf(r,i[r],i[r+1],o);return o&&Bl(o,o.next)&&(jo(o),o=o.next),o}function Ys(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Bl(e,e.next)||Fe(e.prev,e,e.next)===0)){if(jo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&KS(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?HS(i,n,s,r):VS(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),jo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=GS(Ys(i),t,e),Xo(i,t,e,n,s,r,2)):o===2&&WS(i,t,e,n,s,r):Xo(Ys(i),t,e,n,s,r,1);break}}}function VS(i){const t=i.prev,e=i,n=i.next;if(Fe(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Cr(s,a,r,l,o,c,p.x,p.y)&&Fe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function HS(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Fe(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=a<l?a<c?a:c:l<c?l:c,p=h<d?h<u?h:u:d<u?d:u,v=a>l?a>c?a:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,g=Qh(f,p,t,e,n),x=Qh(v,m,t,e,n);let _=i.prevZ,M=i.nextZ;for(;_&&_.z>=g&&M&&M.z<=x;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&Cr(a,h,l,d,c,u,_.x,_.y)&&Fe(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=f&&M.x<=v&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&Cr(a,h,l,d,c,u,M.x,M.y)&&Fe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=g;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&Cr(a,h,l,d,c,u,_.x,_.y)&&Fe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=x;){if(M.x>=f&&M.x<=v&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&Cr(a,h,l,d,c,u,M.x,M.y)&&Fe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function GS(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Bl(s,r)&&Fm(s,n,n.next,r)&&Yo(s,r)&&Yo(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),jo(n),jo(n.next),n=i=r),n=n.next}while(n!==i);return Ys(n)}function WS(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&QS(o,a)){let l=Om(o,a);o=Ys(o,o.next),l=Ys(l,l.next),Xo(o,t,e,n,s,r,0),Xo(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function qS(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Um(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(JS(c));for(s.sort(XS),r=0;r<s.length;r++)e=YS(s[r],e);return e}function XS(i,t){return i.x-t.x}function YS(i,t){const e=jS(i,t);if(!e)return t;const n=Om(e,i);return Ys(n,n.next),Ys(e,e.next)}function jS(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,d;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Cr(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),Yo(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&$S(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function $S(i,t){return Fe(i.prev,i,t.prev)<0&&Fe(t.next,i,i.next)<0}function KS(i,t,e,n){let s=i;do s.z===0&&(s.z=Qh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ZS(s)}function ZS(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Qh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function JS(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Cr(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function QS(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!t1(i,t)&&(Yo(i,t)&&Yo(t,i)&&e1(i,t)&&(Fe(i.prev,i,t.prev)||Fe(i,t.prev,t))||Bl(i,t)&&Fe(i.prev,i,i.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Bl(i,t){return i.x===t.x&&i.y===t.y}function Fm(i,t,e,n){const s=Fa(Fe(i,t,e)),r=Fa(Fe(i,t,n)),o=Fa(Fe(e,n,i)),a=Fa(Fe(e,n,t));return!!(s!==r&&o!==a||s===0&&Ua(i,e,t)||r===0&&Ua(i,n,t)||o===0&&Ua(e,i,n)||a===0&&Ua(e,t,n))}function Ua(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Fa(i){return i>0?1:i<0?-1:0}function t1(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Fm(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Yo(i,t){return Fe(i.prev,i,i.next)<0?Fe(i,t,i.next)>=0&&Fe(i,i.prev,t)>=0:Fe(i,t,i.prev)<0||Fe(i,i.next,t)<0}function e1(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Om(i,t){const e=new tu(i.i,i.x,i.y),n=new tu(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function bf(i,t,e,n){const s=new tu(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function jo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function tu(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function n1(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Fr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Fr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Ef(t),Tf(n,t);let o=t.length;e.forEach(Ef);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Tf(n,e[l]);const a=kS.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ef(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Tf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Uu extends Ge{constructor(t=new rl([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ge(s,3)),this.setAttribute("uv",new ge(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:i1;let _,M=!1,C,E,T,I;g&&(_=g.getSpacedPoints(h),M=!0,u=!1,C=g.computeFrenetFrames(h,!1),E=new P,T=new P,I=new P),u||(m=0,f=0,p=0,v=0);const k=a.extractPoints(c);let y=k.shape;const w=k.holes;if(!Fr.isClockWise(y)){y=y.reverse();for(let et=0,L=w.length;et<L;et++){const vt=w[et];Fr.isClockWise(vt)&&(w[et]=vt.reverse())}}const N=Fr.triangulateShape(y,w),U=y;for(let et=0,L=w.length;et<L;et++){const vt=w[et];y=y.concat(vt)}function z(et,L,vt){return L||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(L,vt)}const D=y.length,Q=N.length;function H(et,L,vt){let mt,at,xt;const zt=et.x-L.x,Tt=et.y-L.y,R=vt.x-et.x,b=vt.y-et.y,W=zt*zt+Tt*Tt,K=zt*b-Tt*R;if(Math.abs(K)>Number.EPSILON){const nt=Math.sqrt(W),Z=Math.sqrt(R*R+b*b),Ut=L.x-Tt/nt,_t=L.y+zt/nt,Pt=vt.x-b/Z,ue=vt.y+R/Z,ct=((Pt-Ut)*b-(ue-_t)*R)/(zt*b-Tt*R);mt=Ut+zt*ct-et.x,at=_t+Tt*ct-et.y;const Lt=mt*mt+at*at;if(Lt<=2)return new st(mt,at);xt=Math.sqrt(Lt/2)}else{let nt=!1;zt>Number.EPSILON?R>Number.EPSILON&&(nt=!0):zt<-Number.EPSILON?R<-Number.EPSILON&&(nt=!0):Math.sign(Tt)===Math.sign(b)&&(nt=!0),nt?(mt=-Tt,at=zt,xt=Math.sqrt(W)):(mt=zt,at=Tt,xt=Math.sqrt(W/2))}return new st(mt/xt,at/xt)}const tt=[];for(let et=0,L=U.length,vt=L-1,mt=et+1;et<L;et++,vt++,mt++)vt===L&&(vt=0),mt===L&&(mt=0),tt[et]=H(U[et],U[vt],U[mt]);const ft=[];let ut,pt=tt.concat();for(let et=0,L=w.length;et<L;et++){const vt=w[et];ut=[];for(let mt=0,at=vt.length,xt=at-1,zt=mt+1;mt<at;mt++,xt++,zt++)xt===at&&(xt=0),zt===at&&(zt=0),ut[mt]=H(vt[mt],vt[xt],vt[zt]);ft.push(ut),pt=pt.concat(ut)}for(let et=0;et<m;et++){const L=et/m,vt=f*Math.cos(L*Math.PI/2),mt=p*Math.sin(L*Math.PI/2)+v;for(let at=0,xt=U.length;at<xt;at++){const zt=z(U[at],tt[at],mt);gt(zt.x,zt.y,-vt)}for(let at=0,xt=w.length;at<xt;at++){const zt=w[at];ut=ft[at];for(let Tt=0,R=zt.length;Tt<R;Tt++){const b=z(zt[Tt],ut[Tt],mt);gt(b.x,b.y,-vt)}}}const re=p+v;for(let et=0;et<D;et++){const L=u?z(y[et],pt[et],re):y[et];M?(T.copy(C.normals[0]).multiplyScalar(L.x),E.copy(C.binormals[0]).multiplyScalar(L.y),I.copy(_[0]).add(T).add(E),gt(I.x,I.y,I.z)):gt(L.x,L.y,0)}for(let et=1;et<=h;et++)for(let L=0;L<D;L++){const vt=u?z(y[L],pt[L],re):y[L];M?(T.copy(C.normals[et]).multiplyScalar(vt.x),E.copy(C.binormals[et]).multiplyScalar(vt.y),I.copy(_[et]).add(T).add(E),gt(I.x,I.y,I.z)):gt(vt.x,vt.y,d/h*et)}for(let et=m-1;et>=0;et--){const L=et/m,vt=f*Math.cos(L*Math.PI/2),mt=p*Math.sin(L*Math.PI/2)+v;for(let at=0,xt=U.length;at<xt;at++){const zt=z(U[at],tt[at],mt);gt(zt.x,zt.y,d+vt)}for(let at=0,xt=w.length;at<xt;at++){const zt=w[at];ut=ft[at];for(let Tt=0,R=zt.length;Tt<R;Tt++){const b=z(zt[Tt],ut[Tt],mt);M?gt(b.x,b.y+_[h-1].y,_[h-1].x+vt):gt(b.x,b.y,d+vt)}}}$(),ot();function $(){const et=s.length/3;if(u){let L=0,vt=D*L;for(let mt=0;mt<Q;mt++){const at=N[mt];Wt(at[2]+vt,at[1]+vt,at[0]+vt)}L=h+m*2,vt=D*L;for(let mt=0;mt<Q;mt++){const at=N[mt];Wt(at[0]+vt,at[1]+vt,at[2]+vt)}}else{for(let L=0;L<Q;L++){const vt=N[L];Wt(vt[2],vt[1],vt[0])}for(let L=0;L<Q;L++){const vt=N[L];Wt(vt[0]+D*h,vt[1]+D*h,vt[2]+D*h)}}n.addGroup(et,s.length/3-et,0)}function ot(){const et=s.length/3;let L=0;Et(U,L),L+=U.length;for(let vt=0,mt=w.length;vt<mt;vt++){const at=w[vt];Et(at,L),L+=at.length}n.addGroup(et,s.length/3-et,1)}function Et(et,L){let vt=et.length;for(;--vt>=0;){const mt=vt;let at=vt-1;at<0&&(at=et.length-1);for(let xt=0,zt=h+m*2;xt<zt;xt++){const Tt=D*xt,R=D*(xt+1),b=L+mt+Tt,W=L+at+Tt,K=L+at+R,nt=L+mt+R;Gt(b,W,K,nt)}}}function gt(et,L,vt){l.push(et),l.push(L),l.push(vt)}function Wt(et,L,vt){Kt(et),Kt(L),Kt(vt);const mt=s.length/3,at=x.generateTopUV(n,s,mt-3,mt-2,mt-1);ae(at[0]),ae(at[1]),ae(at[2])}function Gt(et,L,vt,mt){Kt(et),Kt(L),Kt(mt),Kt(L),Kt(vt),Kt(mt);const at=s.length/3,xt=x.generateSideWallUV(n,s,at-6,at-3,at-2,at-1);ae(xt[0]),ae(xt[1]),ae(xt[3]),ae(xt[1]),ae(xt[2]),ae(xt[3])}function Kt(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function ae(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return s1(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Zh[s.type]().fromJSON(s)),new Uu(n,t.options)}}const i1={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new st(r,o),new st(a,l),new st(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],p=t[s*3+2],v=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new st(o,1-l),new st(c,1-d),new st(u,1-p),new st(v,1-g)]:[new st(a,1-l),new st(h,1-d),new st(f,1-p),new st(m,1-g)]}};function s1(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class sr extends Qo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new sr(t.radius,t.detail)}}class Fu extends Qo{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fu(t.radius,t.detail)}}class Ou extends Ge{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/s,f=new P,p=new st;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const g=r+m/n*o;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let v=0;v<s;v++){const m=v*(n+1);for(let g=0;g<n;g++){const x=g+m,_=x,M=x+n+1,C=x+n+2,E=x+1;a.push(_,M,E),a.push(M,C,E)}}this.setIndex(a),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ou(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class qs extends Ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new P,u=new P,f=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){const x=[],_=g/n;let M=0;g===0&&o===0?M=.5/e:g===n&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){const E=C/e;d.x=-t*Math.cos(s+E*r)*Math.sin(o+_*a),d.y=t*Math.cos(o+_*a),d.z=t*Math.sin(s+E*r)*Math.sin(o+_*a),p.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(E+M,1-_),x.push(c++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<e;x++){const _=h[g][x+1],M=h[g][x],C=h[g+1][x],E=h[g+1][x+1];(g!==0||o>0)&&f.push(_,M,E),(g!==n-1||l<Math.PI)&&f.push(M,C,E)}this.setIndex(f),this.setAttribute("position",new ge(p,3)),this.setAttribute("normal",new ge(v,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ms extends Ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new P,d=new P,u=new P;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){const v=p/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(p/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){const v=(s+1)*f+p-1,m=(s+1)*(f-1)+p-1,g=(s+1)*(f-1)+p,x=(s+1)*f+p;o.push(v,m,x),o.push(m,g,x)}this.setIndex(o),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(l,3)),this.setAttribute("uv",new ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class r1 extends an{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class o1 extends ir{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tu,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bs extends ir{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tu,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Af={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class a1{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const l1=new a1;class zu{constructor(t){this.manager=t!==void 0?t:l1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}zu.DEFAULT_MATERIAL_NAME="__DEFAULT";const Li={};class c1 extends Error{constructor(t,e){super(t),this.response=e}}class h1 extends zu{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Af.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Li[t]!==void 0){Li[t].push({onLoad:e,onProgress:n,onError:s});return}Li[t]=[],Li[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Li[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0;let v=0;const m=new ReadableStream({start(g){x();function x(){d.read().then(({done:_,value:M})=>{if(_)g.close();else{v+=M.byteLength;const C=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let E=0,T=h.length;E<T;E++){const I=h[E];I.onProgress&&I.onProgress(C)}g.enqueue(M),x()}},_=>{g.error(_)})}}});return new Response(m)}else throw new c1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Af.add(t,c);const h=Li[t];delete Li[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Li[t];if(h===void 0)throw this.manager.itemError(t),c;delete Li[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class kl extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class zm extends kl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const kc=new he,Cf=new P,Rf=new P;class Bu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ru,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Cf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cf),Rf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rf),e.updateMatrixWorld(),kc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class u1 extends Bu{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=qr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class d1 extends kl{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new u1}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Pf=new he,fo=new P,Vc=new P;class f1 extends Bu{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new Ee(2,1,1,1),new Ee(0,1,1,1),new Ee(3,1,1,1),new Ee(1,1,1,1),new Ee(3,0,1,1),new Ee(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fo.setFromMatrixPosition(t.matrixWorld),n.position.copy(fo),Vc.copy(n.position),Vc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Vc),n.updateMatrixWorld(),s.makeTranslation(-fo.x,-fo.y,-fo.z),Pf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pf)}}class p1 extends kl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new f1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class m1 extends Bu{constructor(){super(new Pu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bm extends kl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new m1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class km{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Lf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Lf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Lf(){return performance.now()}class g1{constructor(){this.type="ShapePath",this.color=new St,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Jh,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,o){return this.currentPath.bezierCurveTo(t,e,n,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(g){const x=[];for(let _=0,M=g.length;_<M;_++){const C=g[_],E=new rl;E.curves=C.curves,x.push(E)}return x}function n(g,x){const _=x.length;let M=!1;for(let C=_-1,E=0;E<_;C=E++){let T=x[C],I=x[E],k=I.x-T.x,y=I.y-T.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(T=x[E],k=-k,I=x[C],y=-y),g.y<T.y||g.y>I.y)continue;if(g.y===T.y){if(g.x===T.x)return!0}else{const w=y*(g.x-T.x)-k*(g.y-T.y);if(w===0)return!0;if(w<0)continue;M=!M}}else{if(g.y!==T.y)continue;if(I.x<=g.x&&g.x<=T.x||T.x<=g.x&&g.x<=I.x)return!0}}return M}const s=Fr.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new rl,l.curves=a.curves,c.push(l),c;let h=!s(r[0].getPoints());h=t?!h:h;const d=[],u=[];let f=[],p=0,v;u[p]=void 0,f[p]=[];for(let g=0,x=r.length;g<x;g++)a=r[g],v=a.getPoints(),o=s(v),o=t?!o:o,o?(!h&&u[p]&&p++,u[p]={s:new rl,p:v},u[p].s.curves=a.curves,h&&p++,f[p]=[]):f[p].push({h:a,p:v[0]});if(!u[0])return e(r);if(u.length>1){let g=!1,x=0;for(let _=0,M=u.length;_<M;_++)d[_]=[];for(let _=0,M=u.length;_<M;_++){const C=f[_];for(let E=0;E<C.length;E++){const T=C[E];let I=!0;for(let k=0;k<u.length;k++)n(T.p,u[k].p)&&(_!==k&&x++,I?(I=!1,d[k].push(T)):g=!0);I&&d[_].push(T)}}x>0&&g===!1&&(f=d)}let m;for(let g=0,x=u.length;g<x;g++){l=u[g].s,c.push(l),m=f[g];for(let _=0,M=m.length;_<M;_++)l.holes.push(m[_].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vu);const v1={},x1="TESTER",oi=220,xn=oi/2,Ki=-.35,Vl=16,Yr={x:0,y:1.6,z:6,yaw:-Math.PI/2},Pn={x:1,z:9.8,yaw:.6},_1=[12.5,17,16.5],Vm=new URL("assets/",document.baseURI).href,Hc=v1||{},y1={apiKey:Hc.VITE_FIREBASE_API_KEY||"",projectId:Hc.VITE_FIREBASE_PROJECT_ID||"",databaseURL:Hc.VITE_FIREBASE_DATABASE_URL||""},M1="tester-saves",S1=180,J=i=>document.getElementById(i),Mn=(i,t,e)=>Math.max(t,Math.min(e,i)),Ue=(i,t,e)=>i+(t-i)*e,Ne=(i,t,e)=>{const n=Mn((e-i)/(t-i),0,1);return n*n*(3-2*n)},po=()=>new Promise(i=>requestAnimationFrame(()=>i()));let Mr=20260929;const Ln=()=>{Mr|=0,Mr=Mr+1831565813|0;let i=Math.imul(Mr^Mr>>>15,1|Mr);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296},$t=(i,t)=>i+Ln()*(t-i),ne=(i,t)=>i+Math.random()*(t-i),Hm=i=>i[Math.floor(Ln()*i.length)];function Oa(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function zo(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=Oa(e,n),c=Oa(e+1,n),h=Oa(e,n+1),d=Oa(e+1,n+1);return l+(c-l)*o+(h-l)*a+(l-c-h+d)*o*a}const Gm=(i,t)=>.5*zo(i,t)+.3*zo(i*2.1+5.2,t*2.1+1.3)+.2*zo(i*4.3+9.1,t*4.3+3.7);function w1(i,t,e,n,s,r){const o=i-e,a=t-n,l=s-e,c=r-n,h=Mn((o*l+a*c)/(l*l+c*c),0,1);return Math.hypot(o-l*h,a-c*h)}function b1(i,t,e,n,s,r){const o=Math.abs(i-e)-s,a=Math.abs(t-n)-r;return Math.hypot(Math.max(o,0),Math.max(a,0))+Math.min(Math.max(o,a),0)}function Hl(i,t,e){const n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);const s=new TS(n);return s.colorSpace=ni,s.anisotropy=8,s}async function Gl(i,t="text"){const e=await fetch(Vm+i);if(!e.ok)throw new Error(`Gagal memuat ${i} (${e.status})`);return t==="json"?e.json():e.text()}class li{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new S);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new S);const n=this.elements,s=t.x,r=t.y,o=t.z;return e.x=n[0]*s+n[1]*r+n[2]*o,e.y=n[3]*s+n[4]*r+n[5]*o,e.z=n[6]*s+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new li);const n=this.elements,s=t.elements,r=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],f=n[7],p=n[8],v=s[0],m=s[1],g=s[2],x=s[3],_=s[4],M=s[5],C=s[6],E=s[7],T=s[8];return r[0]=o*v+a*x+l*C,r[1]=o*m+a*_+l*E,r[2]=o*g+a*M+l*T,r[3]=c*v+h*x+d*C,r[4]=c*m+h*_+d*E,r[5]=c*g+h*M+d*T,r[6]=u*v+f*x+p*C,r[7]=u*m+f*_+p*E,r[8]=u*g+f*M+p*T,e}scale(t,e){e===void 0&&(e=new li);const n=this.elements,s=e.elements;for(let r=0;r!==3;r++)s[3*r+0]=t.x*n[3*r+0],s[3*r+1]=t.y*n[3*r+1],s[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new S);const n=3,s=4,r=[];let o,a;for(o=0;o<n*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3+4*0]=t.x,r[3+4*1]=t.y,r[3+4*2]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(o=c-l,r[o+s*o]===0){for(a=o+1;a<c;a++)if(r[o+s*a]!==0){h=d;do u=d-h,r[u+s*o]+=r[u+s*a];while(--h);break}}if(r[o+s*o]!==0)for(a=o+1;a<c;a++){const f=r[o+s*a]/r[o+s*o];h=d;do u=d-h,r[u+s*a]=u<=o?0:r[u+s*a]-r[u+s*o]*f;while(--h)}}while(--l);if(e.z=r[2*s+3]/r[2*s+2],e.y=(r[1*s+3]-r[1*s+2]*e.z)/r[1*s+1],e.x=(r[0*s+3]-r[0*s+2]*e.z-r[0*s+1]*e.y)/r[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new li);const e=3,n=6,s=E1;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+n*o]=this.elements[r+3*o];s[3+6*0]=1,s[3+6*1]=0,s[3+6*2]=0,s[4+6*0]=0,s[4+6*1]=1,s[4+6*2]=0,s[5+6*0]=0,s[5+6*1]=0,s[5+6*2]=1;let a=3;const l=a;let c;const h=n;let d;do{if(r=l-a,s[r+n*r]===0){for(o=r+1;o<l;o++)if(s[r+n*o]!==0){c=h;do d=h-c,s[d+n*r]+=s[d+n*o];while(--c);break}}if(s[r+n*r]!==0)for(o=r+1;o<l;o++){const u=s[r+n*o]/s[r+n*r];c=h;do d=h-c,s[d+n*o]=d<=r?0:s[d+n*o]-s[d+n*r]*u;while(--c)}}while(--a);r=2;do{o=r-1;do{const u=s[r+n*o]/s[r+n*r];c=n;do d=n-c,s[d+n*o]=s[d+n*o]-s[d+n*r]*u;while(--c)}while(o--)}while(--r);r=2;do{const u=1/s[r+n*r];c=n;do d=n-c,s[d+n*r]=s[d+n*r]*u;while(--c)}while(r--);r=2;do{o=2;do{if(d=s[e+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,d)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,s=t.z,r=t.w,o=e+e,a=n+n,l=s+s,c=e*o,h=e*a,d=e*l,u=n*a,f=n*l,p=s*l,v=r*o,m=r*a,g=r*l,x=this.elements;return x[3*0+0]=1-(u+p),x[3*0+1]=h-g,x[3*0+2]=d+m,x[3*1+0]=h+g,x[3*1+1]=1-(c+p),x[3*1+2]=f-v,x[3*2+0]=d-m,x[3*2+1]=f+v,x[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new li);const e=this.elements,n=t.elements;let s;return n[0]=e[0],n[4]=e[4],n[8]=e[8],s=e[1],n[1]=e[3],n[3]=s,s=e[2],n[2]=e[6],n[6]=s,s=e[5],n[5]=e[7],n[7]=s,t}}const E1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class S{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new S);const n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*r-l*s,e.y=l*n-o*r,e.z=o*s-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new S(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new S(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new li([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,s=Math.sqrt(t*t+e*e+n*n);if(s>0){const r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new S);const e=this.x,n=this.y,s=this.z;let r=Math.sqrt(e*e+n*n+s*s);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=s*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s))}distanceSquared(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new S);const n=this.x,s=this.y,r=this.z;return e.x=t*n,e.y=t*s,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new S),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new S),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new S),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const s=T1,r=1/n;s.set(this.x*r,this.y*r,this.z*r);const o=A1;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,t)):(o.set(0,1,0),s.cross(o,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const s=this.x,r=this.y,o=this.z;n.x=s+(t.x-s)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(If),If.almostEquals(t,e)}clone(){return new S(this.x,this.y,this.z)}}S.ZERO=new S(0,0,0);S.UNIT_X=new S(1,0,0);S.UNIT_Y=new S(0,1,0);S.UNIT_Z=new S(0,0,1);const T1=new S,A1=new S,If=new S;class Hn{constructor(t){t===void 0&&(t={}),this.lowerBound=new S,this.upperBound=new S,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,s){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Nf),c=Nf),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Hn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound,o=s.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=s.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,l=s.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound;return e.x<=s.x&&n.x>=r.x&&e.y<=s.y&&n.y>=r.y&&e.z<=s.z&&n.z>=r.z}getCorners(t,e,n,s,r,o,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),s.set(c.x,h.y,h.z),r.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=Df,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(s,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Df,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(s,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,s=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*s,l=(this.upperBound.x-n.x)*s,c=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),p=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(p<0||f>p)}}const Nf=new S,Df=[new S,new S,new S,new S,new S,new S,new S,new S];class Uf{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:s}=e;if(s>n){const r=s;s=n,n=r}return this.matrix[(n*(n+1)>>1)+s-1]}set(t,e,n){let{index:s}=t,{index:r}=e;if(r>s){const o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Wm{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const s=n[t].indexOf(e);return s!==-1&&n[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let s=0,r=n.length;s<r;s++)n[s].call(this,t)}return this}}class Re{constructor(t,e,n,s){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=n,this.w=s}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new S),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=C1,s=R1;t.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Re);const n=this.x,s=this.y,r=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*a+s*c-r*l,e.y=s*h+o*l+r*a-n*c,e.z=r*h+o*c+n*l-s*a,e.w=o*h-n*a-s*l-r*c,e}inverse(t){t===void 0&&(t=new Re);const e=this.x,n=this.y,s=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+n*n+s*s+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Re),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new S);const n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*r-l*s,d=c*s+l*n-o*r,u=c*r+o*s-a*n,f=-o*n-a*s-l*r;return e.x=h*c+f*-o+d*-l-u*-a,e.y=d*c+f*-a+u*-o-h*-l,e.z=u*c+f*-l+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,s,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),s=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,c),s=-Math.PI/2,r=0),n===void 0){const d=o*o,u=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*u-2*f),s=Math.asin(2*h),r=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=s,t.x=r}setFromEuler(t,e,n,s){s===void 0&&(s="XYZ");const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return s==="XYZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):s==="YXZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):s==="ZXY"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):s==="ZYX"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):s==="YZX"?(this.x=l*o*a+r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a-l*c*h):s==="XZY"&&(this.x=l*o*a-r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a+l*c*h),this}clone(){return new Re(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Re);const s=this.x,r=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,f,p,v,m;return f=s*l+r*c+o*h+a*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),p=Math.sin(u),v=Math.sin((1-e)*u)/p,m=Math.sin(e*u)/p):(v=1-e,m=e),n.x=v*s+m*l,n.y=v*r+m*c,n.z=v*o+m*h,n.w=v*a+m*d,n}integrate(t,e,n,s){s===void 0&&(s=new Re);const r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return s.x+=u*(r*d+o*h-a*c),s.y+=u*(o*d+a*l-r*h),s.z+=u*(a*d+r*c-o*l),s.w+=u*(-r*l-o*c-a*h),s}}const C1=new S,R1=new S,P1={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Rt{constructor(t){t===void 0&&(t={}),this.id=Rt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Rt.idCounter=0;Rt.types=P1;class pe{constructor(t){t===void 0&&(t={}),this.position=new S,this.quaternion=new Re,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return pe.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return pe.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,s){return s===void 0&&(s=new S),n.vsub(t,s),e.conjugate(Ff),Ff.vmult(s,s),s}static pointToWorldFrame(t,e,n,s){return s===void 0&&(s=new S),e.vmult(n,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new S),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,s){return s===void 0&&(s=new S),e.w*=-1,e.vmult(n,s),e.w*=-1,s}}const Ff=new Re;class vs extends Rt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:s=[],axes:r,boundingSphereRadius:o}=t;super({type:Rt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const s=new S;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],s),s.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(s)||n[d].almostEquals(s)){h=!0;break}h||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);const e=this.faceNormals[t]||new S;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],s=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];vs.computeNormal(s,r,o,e)}static computeNormal(t,e,n,s){const r=new S,o=new S;e.vsub(t,o),n.vsub(e,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,n,s,r,o,a,l,c){const h=new S;let d=-1,u=-Number.MAX_VALUE;for(let p=0;p<n.faces.length;p++){h.copy(n.faceNormals[p]),r.vmult(h,h);const v=h.dot(o);v>u&&(u=v,d=p)}const f=[];for(let p=0;p<n.faces[d].length;p++){const v=n.vertices[n.faces[d][p]],m=new S;m.copy(v),r.vmult(m,m),s.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,s,r,o,a,l){const c=new S,h=new S,d=new S,u=new S,f=new S,p=new S;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let g=0;g!==m.uniqueAxes.length;g++){n.vmult(m.uniqueAxes[g],c);const x=m.testSepAxis(c,t,e,n,s,r);if(x===!1)return!1;x<v&&(v=x,o.copy(c))}else{const g=a?a.length:m.faces.length;for(let x=0;x<g;x++){const _=a?a[x]:x;c.copy(m.faceNormals[_]),n.vmult(c,c);const M=m.testSepAxis(c,t,e,n,s,r);if(M===!1)return!1;M<v&&(v=M,o.copy(c))}}if(t.uniqueAxes)for(let g=0;g!==t.uniqueAxes.length;g++){r.vmult(t.uniqueAxes[g],h);const x=m.testSepAxis(h,t,e,n,s,r);if(x===!1)return!1;x<v&&(v=x,o.copy(h))}else{const g=l?l.length:t.faces.length;for(let x=0;x<g;x++){const _=l?l[x]:x;h.copy(t.faceNormals[_]),r.vmult(h,h);const M=m.testSepAxis(h,t,e,n,s,r);if(M===!1)return!1;M<v&&(v=M,o.copy(h))}}for(let g=0;g!==m.uniqueEdges.length;g++){n.vmult(m.uniqueEdges[g],u);for(let x=0;x!==t.uniqueEdges.length;x++)if(r.vmult(t.uniqueEdges[x],f),u.cross(f,p),!p.almostZero()){p.normalize();const _=m.testSepAxis(p,t,e,n,s,r);if(_===!1)return!1;_<v&&(v=_,o.copy(p))}}return s.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,s,r,o){const a=this;vs.project(a,t,n,s,Gc),vs.project(e,t,r,o,Wc);const l=Gc[0],c=Gc[1],h=Wc[0],d=Wc[1];if(l<d||h<c)return!1;const u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(t,e){const n=new S,s=new S;this.computeLocalAABB(s,n);const r=n.x-s.x,o=n.y-s.y,a=n.z-s.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],s=this.vertices[e[0]];return-n.dot(s)}clipFaceAgainstHull(t,e,n,s,r,o,a){const l=new S,c=new S,h=new S,d=new S,u=new S,f=new S,p=new S,v=new S,m=this,g=[],x=s,_=g;let M=-1,C=Number.MAX_VALUE;for(let y=0;y<m.faces.length;y++){l.copy(m.faceNormals[y]),n.vmult(l,l);const w=l.dot(t);w<C&&(C=w,M=y)}if(M<0)return;const E=m.faces[M];E.connectedFaces=[];for(let y=0;y<m.faces.length;y++)for(let w=0;w<m.faces[y].length;w++)E.indexOf(m.faces[y][w])!==-1&&y!==M&&E.connectedFaces.indexOf(y)===-1&&E.connectedFaces.push(y);const T=E.length;for(let y=0;y<T;y++){const w=m.vertices[E[y]],O=m.vertices[E[(y+1)%T]];w.vsub(O,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[M]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(w),n.vmult(f,f),e.vadd(f,f);const N=E.connectedFaces[y];p.copy(this.faceNormals[N]);const U=this.getPlaneConstantOfFace(N);v.copy(p),n.vmult(v,v);const z=U-v.dot(e);for(this.clipFaceAgainstPlane(x,_,v,z);x.length;)x.shift();for(;_.length;)x.push(_.shift())}p.copy(this.faceNormals[M]);const I=this.getPlaneConstantOfFace(M);v.copy(p),n.vmult(v,v);const k=I-v.dot(e);for(let y=0;y<x.length;y++){let w=v.dot(x[y])+k;if(w<=r&&(console.log(`clamped: depth=${w} to minDist=${r}`),w=r),w<=o){const O=x[y];if(w<=1e-6){const N={point:O,normal:v,depth:w};a.push(N)}}}}clipFaceAgainstPlane(t,e,n,s){let r,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];r=n.dot(l)+s;for(let h=0;h<a;h++){if(c=t[h],o=n.dot(c)+s,r<0)if(o<0){const d=new S;d.copy(c),e.push(d)}else{const d=new S;l.lerp(c,r/(r-o),d),e.push(d)}else if(o<0){const d=new S;l.lerp(c,r/(r-o),d),e.push(d),e.push(c)}l=c,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new S);const n=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],s[r]),t.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){const r=n[s];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new S);const n=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const s=e[n].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,s){const r=this.vertices;let o,a,l,c,h,d,u=new S;for(let f=0;f<r.length;f++){u.copy(r[f]),e.vmult(u,u),t.vadd(u,u);const p=u;(o===void 0||p.x<o)&&(o=p.x),(c===void 0||p.x>c)&&(c=p.x),(a===void 0||p.y<a)&&(a=p.y),(h===void 0||p.y>h)&&(h=p.y),(l===void 0||p.z<l)&&(l=p.z),(d===void 0||p.z>d)&&(d=p.z)}n.set(o,a,l),s.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new S);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,s=this.vertices;if(e){for(let r=0;r<n;r++){const o=s[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){const o=s[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,s=this.faceNormals,r=new S;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=s[o];const l=e[n[o][0]],c=new S;t.vsub(l,c);const h=a.dot(c),d=new S;r.vsub(l,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,s,r){const o=t.vertices.length,a=L1;let l=0,c=0;const h=I1,d=t.vertices;h.setZero(),pe.vectorToLocalFrame(n,s,e,a),pe.pointToLocalFrame(n,s,h,h);const u=h.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){const p=d[f].dot(a);p>l&&(l=p),p<c&&(c=p)}if(c-=u,l-=u,c>l){const f=c;c=l,l=f}r[0]=l,r[1]=c}}const Gc=[],Wc=[];new S;const L1=new S,I1=new S;class In extends Rt{constructor(t){super({type:Rt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,s=S,r=[new s(-t,-e,-n),new s(t,-e,-n),new s(t,e,-n),new s(-t,e,-n),new s(-t,-e,n),new s(t,-e,n),new s(t,e,n),new s(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new vs({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new S),In.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const s=t;n.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){const n=t,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)ls.set(r[o][0],r[o][1],r[o][2]),e.vmult(ls,ls),t.vadd(ls,ls),n(ls.x,ls.y,ls.z)}calculateWorldAABB(t,e,n,s){const r=this.halfExtents;fi[0].set(r.x,r.y,r.z),fi[1].set(-r.x,r.y,r.z),fi[2].set(-r.x,-r.y,r.z),fi[3].set(-r.x,-r.y,-r.z),fi[4].set(r.x,-r.y,-r.z),fi[5].set(r.x,r.y,-r.z),fi[6].set(-r.x,r.y,-r.z),fi[7].set(r.x,-r.y,r.z);const o=fi[0];e.vmult(o,o),t.vadd(o,o),s.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=fi[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>s.x&&(s.x=c),h>s.y&&(s.y=h),d>s.z&&(s.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const ls=new S,fi=[new S,new S,new S,new S,new S,new S,new S,new S],ku={DYNAMIC:1,STATIC:2,KINEMATIC:4},Vu={AWAKE:0,SLEEPY:1,SLEEPING:2};class Mt extends Wm{constructor(t){t===void 0&&(t={}),super(),this.id=Mt.idCounter++,this.index=-1,this.world=null,this.vlambda=new S,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new S,this.previousPosition=new S,this.interpolatedPosition=new S,this.initPosition=new S,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new S,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new S,this.force=new S;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?Mt.STATIC:Mt.DYNAMIC,typeof t.type==typeof Mt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Mt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new S,this.quaternion=new Re,this.initQuaternion=new Re,this.previousQuaternion=new Re,this.interpolatedQuaternion=new Re,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new S,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new S,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new S,this.invInertia=new S,this.invInertiaWorld=new li,this.invMassSolve=0,this.invInertiaSolve=new S,this.invInertiaWorldSolve=new li,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new S(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new S(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Hn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new S,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Mt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Mt.SLEEPING&&this.dispatchEvent(Mt.wakeupEvent)}sleep(){this.sleepState=Mt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===Mt.AWAKE&&n<s?(this.sleepState=Mt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Mt.sleepyEvent)):e===Mt.SLEEPY&&n>s?this.wakeUp():e===Mt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Mt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Mt.SLEEPING||this.type===Mt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new S),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new S),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e}addShape(t,e,n){const s=new S,r=new Re;return e&&s.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let s=0;for(let r=0;r!==n;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),l=o.boundingSphereRadius;a+l>s&&(s=a+l)}this.boundingRadius=s}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,s=t.length,r=N1,o=D1,a=this.quaternion,l=this.aabb,c=U1;for(let h=0;h!==s;h++){const d=t[h];a.vmult(e[h],r),r.vadd(this.position,r),a.mult(n[h],o),d.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=F1,s=O1;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(e,n),n.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new S),this.type!==Mt.DYNAMIC)return;this.sleepState===Mt.SLEEPING&&this.wakeUp();const n=z1;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new S),this.type!==Mt.DYNAMIC)return;const n=B1,s=k1;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyForce(n,s)}applyTorque(t){this.type===Mt.DYNAMIC&&(this.sleepState===Mt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new S),this.type!==Mt.DYNAMIC)return;this.sleepState===Mt.SLEEPING&&this.wakeUp();const n=e,s=V1;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);const r=H1;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new S),this.type!==Mt.DYNAMIC)return;const n=G1,s=W1;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyImpulse(n,s)}updateMassProperties(){const t=q1;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),In.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new S;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Mt.DYNAMIC||this.type===Mt.KINEMATIC)||this.sleepState===Mt.SLEEPING)return;const s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;s.x+=a.x*f*u.x,s.y+=a.y*f*u.y,s.z+=a.z*f*u.z;const p=d.elements,v=this.angularFactor,m=l.x*v.x,g=l.y*v.y,x=l.z*v.z;r.x+=t*(p[0]*m+p[1]*g+p[2]*x),r.y+=t*(p[3]*m+p[4]*g+p[5]*x),r.z+=t*(p[6]*m+p[7]*g+p[8]*x),o.x+=s.x*t,o.y+=s.y*t,o.z+=s.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Mt.idCounter=0;Mt.COLLIDE_EVENT_NAME="collide";Mt.DYNAMIC=ku.DYNAMIC;Mt.STATIC=ku.STATIC;Mt.KINEMATIC=ku.KINEMATIC;Mt.AWAKE=Vu.AWAKE;Mt.SLEEPY=Vu.SLEEPY;Mt.SLEEPING=Vu.SLEEPING;Mt.wakeupEvent={type:"wakeup"};Mt.sleepyEvent={type:"sleepy"};Mt.sleepEvent={type:"sleep"};const N1=new S,D1=new Re,U1=new Hn,F1=new li,O1=new li;new li;const z1=new S,B1=new S,k1=new S,V1=new S,H1=new S,G1=new S,W1=new S,q1=new S;class qm{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&Mt.STATIC||t.sleepState===Mt.SLEEPING)&&(e.type&Mt.STATIC||e.sleepState===Mt.SLEEPING))}intersectionTest(t,e,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,s):this.doBoundingSphereBroadphase(t,e,n,s)}doBoundingSphereBroadphase(t,e,n,s){const r=X1;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,n,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),s.push(e))}makePairsUnique(t,e){const n=Y1,s=j1,r=$1,o=t.length;for(let a=0;a!==o;a++)s[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=s[a].id,c=r[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(s[c]),e.push(r[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new S;t.position.vsub(e.position,n);const s=t.shapes[0],r=e.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const X1=new S;new S;new Re;new S;const Y1={keys:[]},j1=[],$1=[];new S;new S;new S;class K1 extends qm{constructor(){super()}collisionPairs(t,e,n){const s=t.bodies,r=s.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=s[l],a=s[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let s=0;s<t.bodies.length;s++){const r=t.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}}class js{constructor(){this.rayFromWorld=new S,this.rayToWorld=new S,this.hitNormalWorld=new S,this.hitPointWorld=new S,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,s,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}}let Xm,Ym,jm,$m,Km,Zm,Jm;const Hu={CLOSEST:1,ANY:2,ALL:4};Xm=Rt.types.SPHERE;Ym=Rt.types.PLANE;jm=Rt.types.BOX;$m=Rt.types.CYLINDER;Km=Rt.types.CONVEXPOLYHEDRON;Zm=Rt.types.HEIGHTFIELD;Jm=Rt.types.TRIMESH;class Xe{get[Xm](){return this._intersectSphere}get[Ym](){return this._intersectPlane}get[jm](){return this._intersectBox}get[$m](){return this._intersectConvex}get[Km](){return this._intersectConvex}get[Zm](){return this._intersectHeightfield}get[Jm](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new S),e===void 0&&(e=new S),this.from=t.clone(),this.to=e.clone(),this.direction=new S,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Xe.ANY,this.result=new js,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Xe.ANY,this.result=e.result||new js,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Of),qc.length=0,t.broadphase.aabbQuery(t,Of,qc),this.intersectBodies(qc),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const s=Z1,r=J1;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],s),s.vadd(t.position,s),this.intersectShape(l,r,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,s=t.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,s){const r=this.from;if(dw(r,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,s,t)}_intersectBox(t,e,n,s,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,s,r)}_intersectPlane(t,e,n,s,r){const o=this.from,a=this.to,l=this.direction,c=new S(0,0,1);e.vmult(c,c);const h=new S;o.vsub(n,h);const d=h.dot(c);a.vsub(n,h);const u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const p=new S,v=new S,m=new S;o.vsub(n,p);const g=-c.dot(p)/f;l.scale(g,v),o.vadd(v,m),this.reportIntersection(c,m,r,s,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,s=this.to,r=this.from;e.x=Math.min(s.x,r.x),e.y=Math.min(s.y,r.y),e.z=Math.min(s.z,r.z),n.x=Math.max(s.x,r.x),n.y=Math.max(s.y,r.y),n.z=Math.max(s.z,r.z)}_intersectHeightfield(t,e,n,s,r){t.data,t.elementSize;const o=Q1;o.from.copy(this.from),o.to.copy(this.to),pe.pointToLocalFrame(n,e,o.from,o.from),pe.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=tw;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new Hn;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<h;f++)for(let p=c;p<d;p++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,p,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(f,p,!1),pe.pointToWorldFrame(n,e,t.pillarOffset,za),this._intersectConvex(t.pillarConvex,e,za,s,r,zf),this.result.shouldStop)return;t.getConvexTrianglePillar(f,p,!0),pe.pointToWorldFrame(n,e,t.pillarOffset,za),this._intersectConvex(t.pillarConvex,e,za,s,r,zf)}}}_intersectSphere(t,e,n,s,r){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,f=ew,p=nw;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,s,-1);else{const v=(-h-Math.sqrt(u))/(2*c),m=(-h+Math.sqrt(u))/(2*c);if(v>=0&&v<=1&&(o.lerp(a,v,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,s,-1))}}_intersectConvex(t,e,n,s,r,o){const a=iw,l=Bf,c=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,p=this.from,v=this.to,m=p.distanceTo(v),g=c?c.length:h.length,x=this.result;for(let _=0;!x.shouldStop&&_<g;_++){const M=c?c[_]:_,C=h[M],E=u[M],T=e,I=n;l.copy(d[C[0]]),T.vmult(l,l),l.vadd(I,l),l.vsub(p,l),T.vmult(E,a);const k=f.dot(a);if(Math.abs(k)<this.precision)continue;const y=a.dot(l)/k;if(!(y<0)){f.scale(y,bn),bn.vadd(p,bn),ti.copy(d[C[0]]),T.vmult(ti,ti),I.vadd(ti,ti);for(let w=1;!x.shouldStop&&w<C.length-1;w++){pi.copy(d[C[w]]),mi.copy(d[C[w+1]]),T.vmult(pi,pi),T.vmult(mi,mi),I.vadd(pi,pi),I.vadd(mi,mi);const O=bn.distanceTo(p);!(Xe.pointInTriangle(bn,ti,pi,mi)||Xe.pointInTriangle(bn,pi,ti,mi))||O>m||this.reportIntersection(a,bn,r,s,M)}}}}_intersectTrimesh(t,e,n,s,r,o){const a=sw,l=hw,c=uw,h=Bf,d=rw,u=ow,f=aw,p=cw,v=lw,m=t.indices;t.vertices;const g=this.from,x=this.to,_=this.direction;c.position.copy(n),c.quaternion.copy(e),pe.vectorToLocalFrame(n,e,_,d),pe.pointToLocalFrame(n,e,g,u),pe.pointToLocalFrame(n,e,x,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();const M=u.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let C=0,E=l.length;!this.result.shouldStop&&C!==E;C++){const T=l[C];t.getNormal(T,a),t.getVertex(m[T*3],ti),ti.vsub(u,h);const I=d.dot(a),k=a.dot(h)/I;if(k<0)continue;d.scale(k,bn),bn.vadd(u,bn),t.getVertex(m[T*3+1],pi),t.getVertex(m[T*3+2],mi);const y=bn.distanceSquared(u);!(Xe.pointInTriangle(bn,pi,ti,mi)||Xe.pointInTriangle(bn,ti,pi,mi))||y>M||(pe.vectorToWorldFrame(e,a,v),pe.pointToWorldFrame(n,e,bn,p),this.reportIntersection(v,p,r,s,T))}l.length=0}reportIntersection(t,e,n,s,r){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case Xe.ALL:this.hasHit=!0,c.set(o,a,t,e,n,s,l),c.hasHit=!0,this.callback(c);break;case Xe.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,s,l));break;case Xe.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,s,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,s){s.vsub(e,Hs),n.vsub(e,mo),t.vsub(e,Xc);const r=Hs.dot(Hs),o=Hs.dot(mo),a=Hs.dot(Xc),l=mo.dot(mo),c=mo.dot(Xc);let h,d;return(h=l*a-o*c)>=0&&(d=r*c-o*a)>=0&&h+d<r*l-o*o}}Xe.CLOSEST=Hu.CLOSEST;Xe.ANY=Hu.ANY;Xe.ALL=Hu.ALL;const Of=new Hn,qc=[],mo=new S,Xc=new S,Z1=new S,J1=new Re,bn=new S,ti=new S,pi=new S,mi=new S;new S;new js;const zf={faceList:[0]},za=new S,Q1=new Xe,tw=[],ew=new S,nw=new S,iw=new S;new S;new S;const Bf=new S,sw=new S,rw=new S,ow=new S,aw=new S,lw=new S,cw=new S;new Hn;const hw=[],uw=new pe,Hs=new S,Ba=new S;function dw(i,t,e){e.vsub(i,Hs);const n=Hs.dot(t);return t.scale(n,Ba),Ba.vadd(i,Ba),e.distanceTo(Ba)}class Rr extends qm{static checkBounds(t,e,n){let s,r;n===0?(s=t.position.x,r=e.position.x):n===1?(s=t.position.y,r=e.position.y):n===2&&(s=t.position.z,r=e.position.z);const o=t.boundingRadius,a=e.boundingRadius,l=s+o;return r-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const s=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.x<=s.aabb.lowerBound.x);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const s=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.y<=s.aabb.lowerBound.y);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const s=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.z<=s.aabb.lowerBound.z);r--)t[r+1]=t[r];t[r+1]=s}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const s=e.indexOf(n.body);s!==-1&&e.splice(s,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const s=this.axisList,r=s.length,o=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){const c=s[a];for(l=a+1;l<r;l++){const h=s[l];if(this.needBroadphaseCollision(c,h)){if(!Rr.checkBounds(c,h,o))break;this.intersectionTest(c,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let s=0;s!==n;s++){const r=t[s];r.aabbNeedsUpdate&&r.updateAABB()}e===0?Rr.insertionSortX(t):e===1?Rr.insertionSortY(t):e===2&&Rr.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,s=0,r=0,o=0;const a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){const p=a[f],v=p.position.x;t+=v,e+=v*v;const m=p.position.y;n+=m,s+=m*m;const g=p.position.z;r+=g,o+=g*g}const h=e-t*t*c,d=s-n*n*c,u=o-r*r*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const s=this.axisIndex;let r="x";s===1&&(r="y"),s===2&&(r="z");const o=this.axisList;e.lowerBound[r],e.upperBound[r];for(let a=0;a<o.length;a++){const l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class Gu{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class kf{constructor(){this.spatial=new S,this.rotational=new S}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class ta{constructor(t,e,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=ta.idCounter++,this.minForce=n,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new kf,this.jacobianElementB=new kf,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const s=e,r=t,o=n;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(t,e,n){const s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-s*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.position,o=s.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.velocity,o=s.velocity,a=n.angularVelocity,l=s.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.vlambda,o=s.vlambda,a=n.wlambda,l=s.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.force,o=n.torque,a=s.force,l=s.torque,c=n.invMassSolve,h=s.invMassSolve;return r.scale(c,Vf),a.scale(h,Hf),n.invInertiaWorldSolve.vmult(o,Gf),s.invInertiaWorldSolve.vmult(l,Wf),t.multiplyVectors(Vf,Gf)+e.multiplyVectors(Hf,Wf)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.invMassSolve,o=s.invMassSolve,a=n.invInertiaWorldSolve,l=s.invInertiaWorldSolve;let c=r+o;return a.vmult(t.rotational,ka),c+=ka.dot(t.rotational),l.vmult(e.rotational,ka),c+=ka.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,r=this.bj,o=fw;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}ta.idCounter=0;const Vf=new S,Hf=new S,Gf=new S,Wf=new S,ka=new S,fw=new S;class pw extends ta{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new S,this.rj=new S,this.ni=new S}computeB(t){const e=this.a,n=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,l=mw,c=gw,h=s.velocity,d=s.angularVelocity;s.force,s.torque;const u=r.velocity,f=r.angularVelocity;r.force,r.torque;const p=vw,v=this.jacobianElementA,m=this.jacobianElementB,g=this.ni;o.cross(g,l),a.cross(g,c),g.negate(v.spatial),l.negate(v.rotational),m.spatial.copy(g),m.rotational.copy(c),p.copy(r.position),p.vadd(a,p),p.vsub(s.position,p),p.vsub(o,p);const x=g.dot(p),_=this.restitution+1,M=_*u.dot(g)-_*h.dot(g)+f.dot(c)-d.dot(l),C=this.computeGiMf();return-x*e-M*n-t*C}getImpactVelocityAlongNormal(){const t=xw,e=_w,n=yw,s=Mw,r=Sw;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,r),this.ni.dot(r)}}const mw=new S,gw=new S,vw=new S,xw=new S,_w=new S,yw=new S,Mw=new S,Sw=new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class qf extends ta{constructor(t,e,n){super(t,e,-n,n),this.ri=new S,this.rj=new S,this.t=new S}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,s=this.rj,r=ww,o=bw,a=this.t;n.cross(a,r),s.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const ww=new S,bw=new S;class ea{constructor(t,e,n){n=Gu.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=ea.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}ea.idCounter=0;class na{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=na.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}na.idCounter=0;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class Ew{constructor(t){t===void 0&&(t={}),t=Gu.defaults(t,{chassisConnectionPointLocal:new S,chassisConnectionPointWorld:new S,directionLocal:new S,directionWorld:new S,axleLocal:new S,axleWorld:new S,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:10.5,forwardAcceleration:1,sideAcceleration:1,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,slipInfo:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=t.maxSuspensionTravel,this.customSlidingRotationalSpeed=t.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=t.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=t.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=t.chassisConnectionPointWorld.clone(),this.directionLocal=t.directionLocal.clone(),this.directionWorld=t.directionWorld.clone(),this.axleLocal=t.axleLocal.clone(),this.axleWorld=t.axleWorld.clone(),this.suspensionRestLength=t.suspensionRestLength,this.suspensionMaxLength=t.suspensionMaxLength,this.radius=t.radius,this.suspensionStiffness=t.suspensionStiffness,this.dampingCompression=t.dampingCompression,this.dampingRelaxation=t.dampingRelaxation,this.frictionSlip=t.frictionSlip,this.forwardAcceleration=t.forwardAcceleration,this.sideAcceleration=t.sideAcceleration,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=t.rollInfluence,this.maxSuspensionForce=t.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=t.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.slipInfo=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new js,this.worldTransform=new pe,this.isInContact=!1}updateWheel(t){const e=this.raycastResult;if(this.isInContact){const n=e.hitNormalWorld.dot(e.directionWorld);e.hitPointWorld.vsub(t.position,Yf),t.getVelocityAtWorldPoint(Yf,Xf);const s=e.hitNormalWorld.dot(Xf);if(n>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{const r=-1/n;this.suspensionRelativeVelocity=s*r,this.clippedInvContactDotSuspension=r}}else e.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,e.directionWorld.scale(-1,e.hitNormalWorld),this.clippedInvContactDotSuspension=1}}const Xf=new S,Yf=new S;class Tw{constructor(t){this.chassisBody=t.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof t.indexRightAxis<"u"?t.indexRightAxis:2,this.indexForwardAxis=typeof t.indexForwardAxis<"u"?t.indexForwardAxis:0,this.indexUpAxis=typeof t.indexUpAxis<"u"?t.indexUpAxis:1,this.constraints=[],this.preStepCallback=()=>{},this.currentVehicleSpeedKmHour=0,this.numWheelsOnGround=0}addWheel(t){t===void 0&&(t={});const e=new Ew(t),n=this.wheelInfos.length;return this.wheelInfos.push(e),n}setSteeringValue(t,e){const n=this.wheelInfos[e];n.steering=t}applyEngineForce(t,e){this.wheelInfos[e].engineForce=t}setBrake(t,e){this.wheelInfos[e].brake=t}addToWorld(t){t.addBody(this.chassisBody);const e=this;this.preStepCallback=()=>{e.updateVehicle(t.dt)},t.addEventListener("preStep",this.preStepCallback),this.world=t}getVehicleAxisWorld(t,e){e.set(t===0?1:0,t===1?1:0,t===2?1:0),this.chassisBody.vectorToWorldFrame(e,e)}updateVehicle(t){const e=this.wheelInfos,n=e.length,s=this.chassisBody;for(let d=0;d<n;d++)this.updateWheelTransform(d);this.currentVehicleSpeedKmHour=3.6*s.velocity.length();const r=new S;this.getVehicleAxisWorld(this.indexForwardAxis,r),r.dot(s.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(let d=0;d<n;d++)this.castRay(e[d]);this.updateSuspension(t);const o=new S,a=new S;for(let d=0;d<n;d++){const u=e[d];let f=u.suspensionForce;f>u.maxSuspensionForce&&(f=u.maxSuspensionForce),u.raycastResult.hitNormalWorld.scale(f*t,o),u.raycastResult.hitPointWorld.vsub(s.position,a),s.applyImpulse(o,a)}this.updateFriction(t);const l=new S,c=new S,h=new S;for(let d=0;d<n;d++){const u=e[d];s.getVelocityAtWorldPoint(u.chassisConnectionPointWorld,h);let f=1;switch(this.indexUpAxis){case 1:f=-1;break}if(u.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,c);const p=c.dot(u.raycastResult.hitNormalWorld);u.raycastResult.hitNormalWorld.scale(p,l),c.vsub(l,c);const v=c.dot(h);u.deltaRotation=f*v*t/u.radius}(u.sliding||!u.isInContact)&&u.engineForce!==0&&u.useCustomSlidingRotationalSpeed&&(u.deltaRotation=(u.engineForce>0?1:-1)*u.customSlidingRotationalSpeed*t),Math.abs(u.brake)>Math.abs(u.engineForce)&&(u.deltaRotation=0),u.rotation+=u.deltaRotation,u.deltaRotation*=.99}}updateSuspension(t){const n=this.chassisBody.mass,s=this.wheelInfos,r=s.length;for(let o=0;o<r;o++){const a=s[o];if(a.isInContact){let l;const c=a.suspensionRestLength,h=a.suspensionLength,d=c-h;l=a.suspensionStiffness*d*a.clippedInvContactDotSuspension;const u=a.suspensionRelativeVelocity;let f;u<0?f=a.dampingCompression:f=a.dampingRelaxation,l-=f*u,a.suspensionForce=l*n,a.suspensionForce<0&&(a.suspensionForce=0)}else a.suspensionForce=0}}removeFromWorld(t){this.constraints,t.removeBody(this.chassisBody),t.removeEventListener("preStep",this.preStepCallback),this.world=null}castRay(t){const e=Pw,n=Lw;this.updateWheelTransformWorld(t);const s=this.chassisBody;let r=-1;const o=t.suspensionRestLength+t.radius;t.directionWorld.scale(o,e);const a=t.chassisConnectionPointWorld;a.vadd(e,n);const l=t.raycastResult;l.reset();const c=s.collisionResponse;s.collisionResponse=!1,this.world.rayTest(a,n,l),s.collisionResponse=c;const h=l.body;if(t.raycastResult.groundObject=0,h){r=l.distance,t.raycastResult.hitNormalWorld=l.hitNormalWorld,t.isInContact=!0;const d=l.distance;t.suspensionLength=d-t.radius;const u=t.suspensionRestLength-t.maxSuspensionTravel,f=t.suspensionRestLength+t.maxSuspensionTravel;t.suspensionLength<u&&(t.suspensionLength=u),t.suspensionLength>f&&(t.suspensionLength=f,t.raycastResult.reset());const p=t.raycastResult.hitNormalWorld.dot(t.directionWorld),v=new S;s.getVelocityAtWorldPoint(t.raycastResult.hitPointWorld,v);const m=t.raycastResult.hitNormalWorld.dot(v);if(p>=-.1)t.suspensionRelativeVelocity=0,t.clippedInvContactDotSuspension=1/.1;else{const g=-1/p;t.suspensionRelativeVelocity=m*g,t.clippedInvContactDotSuspension=g}}else t.suspensionLength=t.suspensionRestLength+0*t.maxSuspensionTravel,t.suspensionRelativeVelocity=0,t.directionWorld.scale(-1,t.raycastResult.hitNormalWorld),t.clippedInvContactDotSuspension=1;return r}updateWheelTransformWorld(t){t.isInContact=!1;const e=this.chassisBody;e.pointToWorldFrame(t.chassisConnectionPointLocal,t.chassisConnectionPointWorld),e.vectorToWorldFrame(t.directionLocal,t.directionWorld),e.vectorToWorldFrame(t.axleLocal,t.axleWorld)}updateWheelTransform(t){const e=Aw,n=Cw,s=Rw,r=this.wheelInfos[t];this.updateWheelTransformWorld(r),r.directionLocal.scale(-1,e),n.copy(r.axleLocal),e.cross(n,s),s.normalize(),n.normalize();const o=r.steering,a=new Re;a.setFromAxisAngle(e,o);const l=new Re;l.setFromAxisAngle(n,r.rotation);const c=r.worldTransform.quaternion;this.chassisBody.quaternion.mult(a,c),c.mult(l,c),c.normalize();const h=r.worldTransform.position;h.copy(r.directionWorld),h.scale(r.suspensionLength,h),h.vadd(r.chassisConnectionPointWorld,h)}getWheelTransformWorld(t){return this.wheelInfos[t].worldTransform}updateFriction(t){const e=Nw,n=this.wheelInfos,s=n.length,r=this.chassisBody,o=Uw,a=Dw;this.numWheelsOnGround=0;for(let h=0;h<s;h++){const d=n[h];d.raycastResult.body&&this.numWheelsOnGround++,d.sideImpulse=0,d.forwardImpulse=0,o[h]||(o[h]=new S),a[h]||(a[h]=new S)}for(let h=0;h<s;h++){const d=n[h],u=d.raycastResult.body;if(u){const f=a[h];this.getWheelTransformWorld(h).vectorToWorldFrame(Iw[this.indexRightAxis],f);const v=d.raycastResult.hitNormalWorld,m=f.dot(v);v.scale(m,e),f.vsub(e,f),f.normalize(),v.cross(f,o[h]),o[h].normalize(),d.sideImpulse=jw(r,d.raycastResult.hitPointWorld,u,d.raycastResult.hitPointWorld,f),d.sideImpulse*=Fw}}const l=1,c=.5;this.sliding=!1;for(let h=0;h<s;h++){const d=n[h],u=d.raycastResult.body;let f=0;if(d.slipInfo=1,u){const v=d.brake?d.brake:0;f=kw(r,u,d.raycastResult.hitPointWorld,o[h],v),f+=d.engineForce*t;const m=v/f;d.slipInfo*=m}if(d.forwardImpulse=0,d.skidInfo=1,u){d.skidInfo=1;const p=d.suspensionForce*t*d.frictionSlip,m=p*p;d.forwardImpulse=f;const g=d.forwardImpulse*c/d.forwardAcceleration,x=d.sideImpulse*l/d.sideAcceleration,_=g*g+x*x;if(d.sliding=!1,_>m){this.sliding=!0,d.sliding=!0;const M=p/Math.sqrt(_);d.skidInfo*=M}}}if(this.sliding)for(let h=0;h<s;h++){const d=n[h];d.sideImpulse!==0&&d.skidInfo<1&&(d.forwardImpulse*=d.skidInfo,d.sideImpulse*=d.skidInfo)}for(let h=0;h<s;h++){const d=n[h],u=new S;if(d.raycastResult.hitPointWorld.vsub(r.position,u),d.forwardImpulse!==0){const f=new S;o[h].scale(d.forwardImpulse,f),r.applyImpulse(f,u)}if(d.sideImpulse!==0){const f=d.raycastResult.body,p=new S;d.raycastResult.hitPointWorld.vsub(f.position,p);const v=new S;a[h].scale(d.sideImpulse,v),r.vectorToLocalFrame(u,u),u["xyz"[this.indexUpAxis]]*=d.rollInfluence,r.vectorToWorldFrame(u,u),r.applyImpulse(v,u),v.scale(-1,v),f.applyImpulse(v,p)}}}}new S;new S;new S;const Aw=new S,Cw=new S,Rw=new S;new Xe;new S;const Pw=new S,Lw=new S,Iw=[new S(1,0,0),new S(0,1,0),new S(0,0,1)],Nw=new S,Dw=[],Uw=[],Fw=1,Ow=new S,zw=new S,Bw=new S;function kw(i,t,e,n,s){let r=0;const o=e,a=Ow,l=zw,c=Bw;i.getVelocityAtWorldPoint(o,a),t.getVelocityAtWorldPoint(o,l),a.vsub(l,c);const h=n.dot(c),d=jf(i,e,n),u=jf(t,e,n),p=1/(d+u);return r=-h*p,s<r&&(r=s),r<-s&&(r=-s),r}const Vw=new S,Hw=new S,Gw=new S,Ww=new S;function jf(i,t,e){const n=Vw,s=Hw,r=Gw,o=Ww;return t.vsub(i.position,n),n.cross(e,s),i.invInertiaWorld.vmult(s,o),o.cross(n,r),i.invMass+e.dot(r)}const qw=new S,Xw=new S,Yw=new S;function jw(i,t,e,n,s){if(s.lengthSquared()>1.1)return 0;const o=qw,a=Xw,l=Yw;i.getVelocityAtWorldPoint(t,o),e.getVelocityAtWorldPoint(n,a),o.vsub(a,l);const c=s.dot(l),h=1/(i.invMass+e.invMass);return-.2*c*h}class Wu extends Rt{constructor(t){if(super({type:Rt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new S);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,s){const r=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];n[l]=t[l]-r,s[l]=t[l]+r}}}new S;new S;new S;new S;new S;new S;new S;new S;new S;class Wl extends vs{constructor(t,e,n,s){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),s===void 0&&(s=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const r=s,o=[],a=[],l=[],c=[],h=[],d=Math.cos,u=Math.sin;o.push(new S(-e*u(0),-n*.5,e*d(0))),c.push(0),o.push(new S(-t*u(0),n*.5,t*d(0))),h.push(1);for(let p=0;p<r;p++){const v=2*Math.PI/r*(p+1),m=2*Math.PI/r*(p+.5);p<r-1?(o.push(new S(-e*u(v),-n*.5,e*d(v))),c.push(2*p+2),o.push(new S(-t*u(v),n*.5,t*d(v))),h.push(2*p+3),l.push([2*p,2*p+1,2*p+3,2*p+2])):l.push([2*p,2*p+1,1,0]),(r%2===1||p<r/2)&&a.push(new S(-u(m),0,d(m)))}l.push(c),a.push(new S(0,1,0));const f=[];for(let p=0;p<h.length;p++)f.push(h[h.length-p-1]);l.push(f),super({vertices:o,faces:l,axes:a}),this.type=Rt.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=s}}new S;class $w extends Rt{constructor(t,e){e===void 0&&(e={}),e=Gu.defaults(e,{maxValue:null,minValue:null,elementSize:1}),super({type:Rt.types.HEIGHTFIELD}),this.data=t,this.maxValue=e.maxValue,this.minValue=e.minValue,this.elementSize=e.elementSize,e.minValue===null&&this.updateMinValue(),e.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,this.pillarConvex=new vs,this.pillarOffset=new S,this.updateBoundingSphereRadius(),this._cachedPillars={}}update(){this._cachedPillars={}}updateMinValue(){const t=this.data;let e=t[0][0];for(let n=0;n!==t.length;n++)for(let s=0;s!==t[n].length;s++){const r=t[n][s];r<e&&(e=r)}this.minValue=e}updateMaxValue(){const t=this.data;let e=t[0][0];for(let n=0;n!==t.length;n++)for(let s=0;s!==t[n].length;s++){const r=t[n][s];r>e&&(e=r)}this.maxValue=e}setHeightValueAtIndex(t,e,n){const s=this.data;s[t][e]=n,this.clearCachedConvexTrianglePillar(t,e,!1),t>0&&(this.clearCachedConvexTrianglePillar(t-1,e,!0),this.clearCachedConvexTrianglePillar(t-1,e,!1)),e>0&&(this.clearCachedConvexTrianglePillar(t,e-1,!0),this.clearCachedConvexTrianglePillar(t,e-1,!1)),e>0&&t>0&&this.clearCachedConvexTrianglePillar(t-1,e-1,!0)}getRectMinMax(t,e,n,s,r){r===void 0&&(r=[]);const o=this.data;let a=this.minValue;for(let l=t;l<=n;l++)for(let c=e;c<=s;c++){const h=o[l][c];h>a&&(a=h)}r[0]=this.minValue,r[1]=a}getIndexOfPosition(t,e,n,s){const r=this.elementSize,o=this.data;let a=Math.floor(t/r),l=Math.floor(e/r);return n[0]=a,n[1]=l,s&&(a<0&&(a=0),l<0&&(l=0),a>=o.length-1&&(a=o.length-1),l>=o[0].length-1&&(l=o[0].length-1)),!(a<0||l<0||a>=o.length-1||l>=o[0].length-1)}getTriangleAt(t,e,n,s,r,o){const a=$f;this.getIndexOfPosition(t,e,a,n);let l=a[0],c=a[1];const h=this.data;n&&(l=Math.min(h.length-2,Math.max(0,l)),c=Math.min(h[0].length-2,Math.max(0,c)));const d=this.elementSize,u=(t/d-l)**2+(e/d-c)**2,f=(t/d-(l+1))**2+(e/d-(c+1))**2,p=u>f;return this.getTriangle(l,c,p,s,r,o),p}getNormalAt(t,e,n,s){const r=Qw,o=tb,a=eb,l=nb,c=ib;this.getTriangleAt(t,e,n,r,o,a),o.vsub(r,l),a.vsub(r,c),l.cross(c,s),s.normalize()}getAabbAtIndex(t,e,n){let{lowerBound:s,upperBound:r}=n;const o=this.data,a=this.elementSize;s.set(t*a,e*a,o[t][e]),r.set((t+1)*a,(e+1)*a,o[t+1][e+1])}getHeightAt(t,e,n){const s=this.data,r=Kw,o=Zw,a=Jw,l=$f;this.getIndexOfPosition(t,e,l,n);let c=l[0],h=l[1];n&&(c=Math.min(s.length-2,Math.max(0,c)),h=Math.min(s[0].length-2,Math.max(0,h)));const d=this.getTriangleAt(t,e,n,r,o,a);sb(t,e,r.x,r.y,o.x,o.y,a.x,a.y,Kf);const u=Kf;return d?s[c+1][h+1]*u.x+s[c][h+1]*u.y+s[c+1][h]*u.z:s[c][h]*u.x+s[c+1][h]*u.y+s[c][h+1]*u.z}getCacheConvexTrianglePillarKey(t,e,n){return`${t}_${e}_${n?1:0}`}getCachedConvexTrianglePillar(t,e,n){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(t,e,n)]}setCachedConvexTrianglePillar(t,e,n,s,r){this._cachedPillars[this.getCacheConvexTrianglePillarKey(t,e,n)]={convex:s,offset:r}}clearCachedConvexTrianglePillar(t,e,n){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(t,e,n)]}getTriangle(t,e,n,s,r,o){const a=this.data,l=this.elementSize;n?(s.set((t+1)*l,(e+1)*l,a[t+1][e+1]),r.set(t*l,(e+1)*l,a[t][e+1]),o.set((t+1)*l,e*l,a[t+1][e])):(s.set(t*l,e*l,a[t][e]),r.set((t+1)*l,e*l,a[t+1][e]),o.set(t*l,(e+1)*l,a[t][e+1]))}getConvexTrianglePillar(t,e,n){let s=this.pillarConvex,r=this.pillarOffset;if(this.cacheEnabled){const d=this.getCachedConvexTrianglePillar(t,e,n);if(d){this.pillarConvex=d.convex,this.pillarOffset=d.offset;return}s=new vs,r=new S,this.pillarConvex=s,this.pillarOffset=r}const o=this.data,a=this.elementSize,l=s.faces;s.vertices.length=6;for(let d=0;d<6;d++)s.vertices[d]||(s.vertices[d]=new S);l.length=5;for(let d=0;d<5;d++)l[d]||(l[d]=[]);const c=s.vertices,h=(Math.min(o[t][e],o[t+1][e],o[t][e+1],o[t+1][e+1])-this.minValue)/2+this.minValue;n?(r.set((t+.75)*a,(e+.75)*a,h),c[0].set(.25*a,.25*a,o[t+1][e+1]-h),c[1].set(-.75*a,.25*a,o[t][e+1]-h),c[2].set(.25*a,-.75*a,o[t+1][e]-h),c[3].set(.25*a,.25*a,-Math.abs(h)-1),c[4].set(-.75*a,.25*a,-Math.abs(h)-1),c[5].set(.25*a,-.75*a,-Math.abs(h)-1),l[0][0]=0,l[0][1]=1,l[0][2]=2,l[1][0]=5,l[1][1]=4,l[1][2]=3,l[2][0]=2,l[2][1]=5,l[2][2]=3,l[2][3]=0,l[3][0]=3,l[3][1]=4,l[3][2]=1,l[3][3]=0,l[4][0]=1,l[4][1]=4,l[4][2]=5,l[4][3]=2):(r.set((t+.25)*a,(e+.25)*a,h),c[0].set(-.25*a,-.25*a,o[t][e]-h),c[1].set(.75*a,-.25*a,o[t+1][e]-h),c[2].set(-.25*a,.75*a,o[t][e+1]-h),c[3].set(-.25*a,-.25*a,-Math.abs(h)-1),c[4].set(.75*a,-.25*a,-Math.abs(h)-1),c[5].set(-.25*a,.75*a,-Math.abs(h)-1),l[0][0]=0,l[0][1]=1,l[0][2]=2,l[1][0]=5,l[1][1]=4,l[1][2]=3,l[2][0]=0,l[2][1]=2,l[2][2]=5,l[2][3]=3,l[3][0]=1,l[3][1]=0,l[3][2]=3,l[3][3]=4,l[4][0]=4,l[4][1]=5,l[4][2]=2,l[4][3]=1),s.computeNormals(),s.computeEdges(),s.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(t,e,n,s,r)}calculateLocalInertia(t,e){return e===void 0&&(e=new S),e.set(0,0,0),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,s){n.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),s.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)}updateBoundingSphereRadius(){const t=this.data,e=this.elementSize;this.boundingSphereRadius=new S(t.length*e,t[0].length*e,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).length()}setHeightsFromImage(t,e){const{x:n,z:s,y:r}=e,o=document.createElement("canvas");o.width=t.width,o.height=t.height;const a=o.getContext("2d");a.drawImage(t,0,0);const l=a.getImageData(0,0,t.width,t.height),c=this.data;c.length=0,this.elementSize=Math.abs(n)/l.width;for(let h=0;h<l.height;h++){const d=[];for(let u=0;u<l.width;u++){const f=l.data[(h*l.height+u)*4],p=l.data[(h*l.height+u)*4+1],v=l.data[(h*l.height+u)*4+2],m=(f+p+v)/4/255*s;n<0?d.push(m):d.unshift(m)}r<0?c.unshift(d):c.push(d)}this.updateMaxValue(),this.updateMinValue(),this.update()}}const $f=[],Kf=new S,Kw=new S,Zw=new S,Jw=new S,Qw=new S,tb=new S,eb=new S,nb=new S,ib=new S;function sb(i,t,e,n,s,r,o,a,l){l.x=((r-a)*(i-o)+(o-s)*(t-a))/((r-a)*(e-o)+(o-s)*(n-a)),l.y=((a-n)*(i-o)+(e-o)*(t-a))/((r-a)*(e-o)+(o-s)*(n-a)),l.z=1-l.x-l.y}new S;new Hn;new S;new Hn;new S;new S;new S;new S;new S;new S;new S;new Hn;new S;new pe;new Hn;class rb{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class ob extends rb{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t;let d,u,f,p,v,m;if(a!==0)for(let M=0;M!==c;M++)l[M].updateSolveMassProperties();const g=lb,x=cb,_=ab;g.length=a,x.length=a,_.length=a;for(let M=0;M!==a;M++){const C=o[M];_[M]=0,x[M]=C.computeB(h),g[M]=1/C.computeC()}if(a!==0){for(let E=0;E!==c;E++){const T=l[E],I=T.vlambda,k=T.wlambda;I.set(0,0,0),k.set(0,0,0)}for(n=0;n!==s;n++){p=0;for(let E=0;E!==a;E++){const T=o[E];d=x[E],u=g[E],m=_[E],v=T.computeGWlambda(),f=u*(d-v-T.eps*m),m+f<T.minForce?f=T.minForce-m:m+f>T.maxForce&&(f=T.maxForce-m),_[E]+=f,p+=f>0?f:-f,T.addToWlambda(f)}if(p*p<r)break}for(let E=0;E!==c;E++){const T=l[E],I=T.velocity,k=T.angularVelocity;T.vlambda.vmul(T.linearFactor,T.vlambda),I.vadd(T.vlambda,I),T.wlambda.vmul(T.angularFactor,T.wlambda),k.vadd(T.wlambda,k)}let M=o.length;const C=1/h;for(;M--;)o[M].multiplier=_[M]*C}return n}}const ab=[],lb=[],cb=[];class hb{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class ub extends hb{constructor(){super(...arguments),this.type=S}constructObject(){return new S}}const Ie={sphereSphere:Rt.types.SPHERE,spherePlane:Rt.types.SPHERE|Rt.types.PLANE,boxBox:Rt.types.BOX|Rt.types.BOX,sphereBox:Rt.types.SPHERE|Rt.types.BOX,planeBox:Rt.types.PLANE|Rt.types.BOX,convexConvex:Rt.types.CONVEXPOLYHEDRON,sphereConvex:Rt.types.SPHERE|Rt.types.CONVEXPOLYHEDRON,planeConvex:Rt.types.PLANE|Rt.types.CONVEXPOLYHEDRON,boxConvex:Rt.types.BOX|Rt.types.CONVEXPOLYHEDRON,sphereHeightfield:Rt.types.SPHERE|Rt.types.HEIGHTFIELD,boxHeightfield:Rt.types.BOX|Rt.types.HEIGHTFIELD,convexHeightfield:Rt.types.CONVEXPOLYHEDRON|Rt.types.HEIGHTFIELD,sphereParticle:Rt.types.PARTICLE|Rt.types.SPHERE,planeParticle:Rt.types.PLANE|Rt.types.PARTICLE,boxParticle:Rt.types.BOX|Rt.types.PARTICLE,convexParticle:Rt.types.PARTICLE|Rt.types.CONVEXPOLYHEDRON,cylinderCylinder:Rt.types.CYLINDER,sphereCylinder:Rt.types.SPHERE|Rt.types.CYLINDER,planeCylinder:Rt.types.PLANE|Rt.types.CYLINDER,boxCylinder:Rt.types.BOX|Rt.types.CYLINDER,convexCylinder:Rt.types.CONVEXPOLYHEDRON|Rt.types.CYLINDER,heightfieldCylinder:Rt.types.HEIGHTFIELD|Rt.types.CYLINDER,particleCylinder:Rt.types.PARTICLE|Rt.types.CYLINDER,sphereTrimesh:Rt.types.SPHERE|Rt.types.TRIMESH,planeTrimesh:Rt.types.PLANE|Rt.types.TRIMESH};class db{get[Ie.sphereSphere](){return this.sphereSphere}get[Ie.spherePlane](){return this.spherePlane}get[Ie.boxBox](){return this.boxBox}get[Ie.sphereBox](){return this.sphereBox}get[Ie.planeBox](){return this.planeBox}get[Ie.convexConvex](){return this.convexConvex}get[Ie.sphereConvex](){return this.sphereConvex}get[Ie.planeConvex](){return this.planeConvex}get[Ie.boxConvex](){return this.boxConvex}get[Ie.sphereHeightfield](){return this.sphereHeightfield}get[Ie.boxHeightfield](){return this.boxHeightfield}get[Ie.convexHeightfield](){return this.convexHeightfield}get[Ie.sphereParticle](){return this.sphereParticle}get[Ie.planeParticle](){return this.planeParticle}get[Ie.boxParticle](){return this.boxParticle}get[Ie.convexParticle](){return this.convexParticle}get[Ie.cylinderCylinder](){return this.convexConvex}get[Ie.sphereCylinder](){return this.sphereConvex}get[Ie.planeCylinder](){return this.planeConvex}get[Ie.boxCylinder](){return this.boxConvex}get[Ie.convexCylinder](){return this.convexConvex}get[Ie.heightfieldCylinder](){return this.heightfieldCylinder}get[Ie.particleCylinder](){return this.particleCylinder}get[Ie.sphereTrimesh](){return this.sphereTrimesh}get[Ie.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new ub,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new pw(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&s.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=s.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=r||n,a.sj=o||s,a}createFrictionEquationsFromContact(t,e){const n=t.bi,s=t.bj,r=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=r.material||n.material,d=o.material||s.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+s.invMass;f>0&&(f=1/f);const p=this.frictionEquationPool,v=p.length?p.pop():new qf(n,s,u*f),m=p.length?p.pop():new qf(n,s,u*f);return v.bi=m.bi=n,v.bj=m.bj=s,v.minForce=m.minForce=-u*f,v.maxForce=m.maxForce=u*f,v.ri.copy(t.ri),v.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(v.t,m.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=m.enabled=t.enabled,e.push(v,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];Ns.setZero(),Sr.setZero(),wr.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(Ns.vadd(e.ni,Ns),Sr.vadd(e.ri,Sr),wr.vadd(e.rj,wr)):(Ns.vsub(e.ni,Ns),Sr.vadd(e.rj,Sr),wr.vadd(e.ri,wr));const o=1/t;Sr.scale(o,n.ri),wr.scale(o,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),Ns.normalize(),Ns.tangents(n.t,s.t)}getContacts(t,e,n,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;const l=mb,c=gb,h=fb,d=pb;for(let u=0,f=t.length;u!==f;u++){const p=t[u],v=e[u];let m=null;p.material&&v.material&&(m=n.getContactMaterial(p.material,v.material)||null);const g=p.type&Mt.KINEMATIC&&v.type&Mt.STATIC||p.type&Mt.STATIC&&v.type&Mt.KINEMATIC||p.type&Mt.KINEMATIC&&v.type&Mt.KINEMATIC;for(let x=0;x<p.shapes.length;x++){p.quaternion.mult(p.shapeOrientations[x],l),p.quaternion.vmult(p.shapeOffsets[x],h),h.vadd(p.position,h);const _=p.shapes[x];for(let M=0;M<v.shapes.length;M++){v.quaternion.mult(v.shapeOrientations[M],c),v.quaternion.vmult(v.shapeOffsets[M],d),d.vadd(v.position,d);const C=v.shapes[M];if(!(_.collisionFilterMask&C.collisionFilterGroup&&C.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(d)>_.boundingSphereRadius+C.boundingSphereRadius)continue;let E=null;_.material&&C.material&&(E=n.getContactMaterial(_.material,C.material)||null),this.currentContactMaterial=E||m||n.defaultContactMaterial;const T=_.type|C.type,I=this[T];if(I){let k=!1;_.type<C.type?k=I.call(this,_,C,h,d,l,c,p,v,_,C,g):k=I.call(this,C,_,d,h,c,l,v,p,_,C,g),k&&g&&(n.shapeOverlapKeeper.set(_.id,C.id),n.bodyOverlapKeeper.set(p.id,v.id))}}}}}sphereSphere(t,e,n,s,r,o,a,l,c,h,d){if(d)return n.distanceSquared(s)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,l,t,e,c,h);s.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(s,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,s,r,o,a,l,c,h,d){const u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(s,Va),u.ni.scale(u.ni.dot(Va),Zf),Va.vsub(Zf,u.rj),-Va.dot(u.ni)<=t.radius){if(d)return!0;const f=u.ri,p=u.rj;f.vadd(n,f),f.vsub(a.position,f),p.vadd(s,p),p.vsub(l.position,p),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,s,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,s,r,o,a,l,t,e,d)}sphereBox(t,e,n,s,r,o,a,l,c,h,d){const u=this.v3pool,f=Hb;n.vsub(s,Ha),e.getSideNormals(f,o);const p=t.radius;let v=!1;const m=Wb,g=qb,x=Xb;let _=null,M=0,C=0,E=0,T=null;for(let D=0,Q=f.length;D!==Q&&v===!1;D++){const H=Bb;H.copy(f[D]);const tt=H.length();H.normalize();const ft=Ha.dot(H);if(ft<tt+p&&ft>0){const ut=kb,pt=Vb;ut.copy(f[(D+1)%3]),pt.copy(f[(D+2)%3]);const re=ut.length(),$=pt.length();ut.normalize(),pt.normalize();const ot=Ha.dot(ut),Et=Ha.dot(pt);if(ot<re&&ot>-re&&Et<$&&Et>-$){const gt=Math.abs(ft-tt-p);if((T===null||gt<T)&&(T=gt,C=ot,E=Et,_=tt,m.copy(H),g.copy(ut),x.copy(pt),M++,d))return!0}}}if(M){v=!0;const D=this.createContactEquation(a,l,t,e,c,h);m.scale(-p,D.ri),D.ni.copy(m),D.ni.negate(D.ni),m.scale(_,m),g.scale(C,g),m.vadd(g,m),x.scale(E,x),m.vadd(x,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.vadd(s,D.rj),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}let I=u.get();const k=Gb;for(let D=0;D!==2&&!v;D++)for(let Q=0;Q!==2&&!v;Q++)for(let H=0;H!==2&&!v;H++)if(I.set(0,0,0),D?I.vadd(f[0],I):I.vsub(f[0],I),Q?I.vadd(f[1],I):I.vsub(f[1],I),H?I.vadd(f[2],I):I.vsub(f[2],I),s.vadd(I,k),k.vsub(n,k),k.lengthSquared()<p*p){if(d)return!0;v=!0;const tt=this.createContactEquation(a,l,t,e,c,h);tt.ri.copy(k),tt.ri.normalize(),tt.ni.copy(tt.ri),tt.ri.scale(p,tt.ri),tt.rj.copy(I),tt.ri.vadd(n,tt.ri),tt.ri.vsub(a.position,tt.ri),tt.rj.vadd(s,tt.rj),tt.rj.vsub(l.position,tt.rj),this.result.push(tt),this.createFrictionEquationsFromContact(tt,this.frictionResult)}u.release(I),I=null;const y=u.get(),w=u.get(),O=u.get(),N=u.get(),U=u.get(),z=f.length;for(let D=0;D!==z&&!v;D++)for(let Q=0;Q!==z&&!v;Q++)if(D%3!==Q%3){f[Q].cross(f[D],y),y.normalize(),f[D].vadd(f[Q],w),O.copy(n),O.vsub(w,O),O.vsub(s,O);const H=O.dot(y);y.scale(H,N);let tt=0;for(;tt===D%3||tt===Q%3;)tt++;U.copy(n),U.vsub(N,U),U.vsub(w,U),U.vsub(s,U);const ft=Math.abs(H),ut=U.length();if(ft<f[tt].length()&&ut<p){if(d)return!0;v=!0;const pt=this.createContactEquation(a,l,t,e,c,h);w.vadd(N,pt.rj),pt.rj.copy(pt.rj),U.negate(pt.ni),pt.ni.normalize(),pt.ri.copy(pt.rj),pt.ri.vadd(s,pt.ri),pt.ri.vsub(n,pt.ri),pt.ri.normalize(),pt.ri.scale(p,pt.ri),pt.ri.vadd(n,pt.ri),pt.ri.vsub(a.position,pt.ri),pt.rj.vadd(s,pt.rj),pt.rj.vsub(l.position,pt.rj),this.result.push(pt),this.createFrictionEquationsFromContact(pt,this.frictionResult)}}u.release(y,w,O,N,U)}planeBox(t,e,n,s,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,s,r,o,a,l,t,e,d)}convexConvex(t,e,n,s,r,o,a,l,c,h,d,u,f){const p=aE;if(!(n.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,s,o,p,u,f)){const v=[],m=lE;t.clipAgainstHull(n,r,e,s,o,p,-100,100,v);let g=0;for(let x=0;x!==v.length;x++){if(d)return!0;const _=this.createContactEquation(a,l,t,e,c,h),M=_.ri,C=_.rj;p.negate(_.ni),v[x].normal.negate(m),m.scale(v[x].depth,m),v[x].point.vadd(m,M),C.copy(v[x].point),M.vsub(n,M),C.vsub(s,C),M.vadd(n,M),M.vsub(a.position,M),C.vadd(s,C),C.vsub(l.position,C),this.result.push(_),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(t,e,n,s,r,o,a,l,c,h,d){const u=this.v3pool;n.vsub(s,Yb);const f=e.faceNormals,p=e.faces,v=e.vertices,m=t.radius;let g=!1;for(let x=0;x!==v.length;x++){const _=v[x],M=Zb;o.vmult(_,M),s.vadd(M,M);const C=Kb;if(M.vsub(n,C),C.lengthSquared()<m*m){if(d)return!0;g=!0;const E=this.createContactEquation(a,l,t,e,c,h);E.ri.copy(C),E.ri.normalize(),E.ni.copy(E.ri),E.ri.scale(m,E.ri),M.vsub(s,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(a.position,E.ri),E.rj.vadd(s,E.rj),E.rj.vsub(l.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);return}}for(let x=0,_=p.length;x!==_&&g===!1;x++){const M=f[x],C=p[x],E=Jb;o.vmult(M,E);const T=Qb;o.vmult(v[C[0]],T),T.vadd(s,T);const I=tE;E.scale(-m,I),n.vadd(I,I);const k=eE;I.vsub(T,k);const y=k.dot(E),w=nE;if(n.vsub(T,w),y<0&&w.dot(E)>0){const O=[];for(let N=0,U=C.length;N!==U;N++){const z=u.get();o.vmult(v[C[N]],z),s.vadd(z,z),O.push(z)}if(zb(O,E,n)){if(d)return!0;g=!0;const N=this.createContactEquation(a,l,t,e,c,h);E.scale(-m,N.ri),E.negate(N.ni);const U=u.get();E.scale(-y,U);const z=u.get();E.scale(-m,z),n.vsub(s,N.rj),N.rj.vadd(z,N.rj),N.rj.vadd(U,N.rj),N.rj.vadd(s,N.rj),N.rj.vsub(l.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),u.release(U),u.release(z),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let D=0,Q=O.length;D!==Q;D++)u.release(O[D]);return}else for(let N=0;N!==C.length;N++){const U=u.get(),z=u.get();o.vmult(v[C[(N+1)%C.length]],U),o.vmult(v[C[(N+2)%C.length]],z),s.vadd(U,U),s.vadd(z,z);const D=jb;z.vsub(U,D);const Q=$b;D.unit(Q);const H=u.get(),tt=u.get();n.vsub(U,tt);const ft=tt.dot(Q);Q.scale(ft,H),H.vadd(U,H);const ut=u.get();if(H.vsub(n,ut),ft>0&&ft*ft<D.lengthSquared()&&ut.lengthSquared()<m*m){if(d)return!0;const pt=this.createContactEquation(a,l,t,e,c,h);H.vsub(s,pt.rj),H.vsub(n,pt.ni),pt.ni.normalize(),pt.ni.scale(m,pt.ri),pt.rj.vadd(s,pt.rj),pt.rj.vsub(l.position,pt.rj),pt.ri.vadd(n,pt.ri),pt.ri.vsub(a.position,pt.ri),this.result.push(pt),this.createFrictionEquationsFromContact(pt,this.frictionResult);for(let re=0,$=O.length;re!==$;re++)u.release(O[re]);u.release(U),u.release(z),u.release(H),u.release(ut),u.release(tt);return}u.release(U),u.release(z),u.release(H),u.release(ut),u.release(tt)}for(let N=0,U=O.length;N!==U;N++)u.release(O[N])}}}planeConvex(t,e,n,s,r,o,a,l,c,h,d){const u=iE,f=sE;f.set(0,0,1),r.vmult(f,f);let p=0;const v=rE;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),o.vmult(u,u),s.vadd(u,u),u.vsub(n,v),f.dot(v)<=0){if(d)return!0;const x=this.createContactEquation(a,l,t,e,c,h),_=oE;f.scale(f.dot(v),_),u.vsub(_,_),_.vsub(n,x.ri),x.ni.copy(f),u.vsub(s,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(s,x.rj),x.rj.vsub(l.position,x.rj),this.result.push(x),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(t,e,n,s,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,d)}sphereHeightfield(t,e,n,s,r,o,a,l,c,h,d){const u=e.data,f=t.radius,p=e.elementSize,v=yE,m=_E;pe.pointToLocalFrame(s,o,n,m);let g=Math.floor((m.x-f)/p)-1,x=Math.ceil((m.x+f)/p)+1,_=Math.floor((m.y-f)/p)-1,M=Math.ceil((m.y+f)/p)+1;if(x<0||M<0||g>u.length||_>u[0].length)return;g<0&&(g=0),x<0&&(x=0),_<0&&(_=0),M<0&&(M=0),g>=u.length&&(g=u.length-1),x>=u.length&&(x=u.length-1),M>=u[0].length&&(M=u[0].length-1),_>=u[0].length&&(_=u[0].length-1);const C=[];e.getRectMinMax(g,_,x,M,C);const E=C[0],T=C[1];if(m.z-f>T||m.z+f<E)return;const I=this.result;for(let k=g;k<x;k++)for(let y=_;y<M;y++){const w=I.length;let O=!1;if(e.getConvexTrianglePillar(k,y,!1),pe.pointToWorldFrame(s,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(O=this.sphereConvex(t,e.pillarConvex,n,v,r,o,a,l,t,e,d)),d&&O||(e.getConvexTrianglePillar(k,y,!0),pe.pointToWorldFrame(s,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(O=this.sphereConvex(t,e.pillarConvex,n,v,r,o,a,l,t,e,d)),d&&O))return!0;if(I.length-w>2)return}}boxHeightfield(t,e,n,s,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,d)}convexHeightfield(t,e,n,s,r,o,a,l,c,h,d){const u=e.data,f=e.elementSize,p=t.boundingSphereRadius,v=vE,m=xE,g=gE;pe.pointToLocalFrame(s,o,n,g);let x=Math.floor((g.x-p)/f)-1,_=Math.ceil((g.x+p)/f)+1,M=Math.floor((g.y-p)/f)-1,C=Math.ceil((g.y+p)/f)+1;if(_<0||C<0||x>u.length||M>u[0].length)return;x<0&&(x=0),_<0&&(_=0),M<0&&(M=0),C<0&&(C=0),x>=u.length&&(x=u.length-1),_>=u.length&&(_=u.length-1),C>=u[0].length&&(C=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);const E=[];e.getRectMinMax(x,M,_,C,E);const T=E[0],I=E[1];if(!(g.z-p>I||g.z+p<T))for(let k=x;k<_;k++)for(let y=M;y<C;y++){let w=!1;if(e.getConvexTrianglePillar(k,y,!1),pe.pointToWorldFrame(s,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(w=this.convexConvex(t,e.pillarConvex,n,v,r,o,a,l,null,null,d,m,null)),d&&w||(e.getConvexTrianglePillar(k,y,!0),pe.pointToWorldFrame(s,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(w=this.convexConvex(t,e.pillarConvex,n,v,r,o,a,l,null,null,d,m,null)),d&&w))return!0}}sphereParticle(t,e,n,s,r,o,a,l,c,h,d){const u=dE;if(u.set(0,0,1),s.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const p=this.createContactEquation(l,a,e,t,c,h);u.normalize(),p.rj.copy(u),p.rj.scale(t.radius,p.rj),p.ni.copy(u),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(t,e,n,s,r,o,a,l,c,h,d){const u=cE;u.set(0,0,1),a.quaternion.vmult(u,u);const f=hE;if(s.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(l,a,e,t,c,h);v.ni.copy(u),v.ni.negate(v.ni),v.ri.set(0,0,0);const m=uE;u.scale(u.dot(s),m),s.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,s,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,d)}convexParticle(t,e,n,s,r,o,a,l,c,h,d){let u=-1;const f=pE,p=mE;let v=null;const m=fE;if(m.copy(s),m.vsub(n,m),r.conjugate(Jf),Jf.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let g=0,x=t.faces.length;g!==x;g++){const _=[t.worldVertices[t.faces[g][0]]],M=t.worldFaceNormals[g];s.vsub(_[0],Qf);const C=-M.dot(Qf);if(v===null||Math.abs(C)<Math.abs(v)){if(d)return!0;v=C,u=g,f.copy(M)}}if(u!==-1){const g=this.createContactEquation(l,a,e,t,c,h);f.scale(v,p),p.vadd(s,p),p.vsub(n,p),g.rj.copy(p),f.negate(g.ni),g.ri.set(0,0,0);const x=g.ri,_=g.rj;x.vadd(s,x),x.vsub(l.position,x),_.vadd(n,_),_.vsub(a.position,_),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,s,r,o,a,l,c,h,d){return this.convexHeightfield(e,t,s,n,o,r,l,a,c,h,d)}particleCylinder(t,e,n,s,r,o,a,l,c,h,d){return this.convexParticle(e,t,s,n,o,r,l,a,c,h,d)}sphereTrimesh(t,e,n,s,r,o,a,l,c,h,d){const u=bb,f=Eb,p=Tb,v=Ab,m=Cb,g=Rb,x=Nb,_=wb,M=Mb,C=Db;pe.pointToLocalFrame(s,o,n,m);const E=t.radius;x.lowerBound.set(m.x-E,m.y-E,m.z-E),x.upperBound.set(m.x+E,m.y+E,m.z+E),e.getTrianglesInAABB(x,C);const T=Sb,I=t.radius*t.radius;for(let N=0;N<C.length;N++)for(let U=0;U<3;U++)if(e.getVertex(e.indices[C[N]*3+U],T),T.vsub(m,M),M.lengthSquared()<=I){if(_.copy(T),pe.pointToWorldFrame(s,o,_,T),T.vsub(n,M),d)return!0;let z=this.createContactEquation(a,l,t,e,c,h);z.ni.copy(M),z.ni.normalize(),z.ri.copy(z.ni),z.ri.scale(t.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),z.rj.copy(T),z.rj.vsub(l.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}for(let N=0;N<C.length;N++)for(let U=0;U<3;U++){e.getVertex(e.indices[C[N]*3+U],u),e.getVertex(e.indices[C[N]*3+(U+1)%3],f),f.vsub(u,p),m.vsub(f,g);const z=g.dot(p);m.vsub(u,g);let D=g.dot(p);if(D>0&&z<0&&(m.vsub(u,g),v.copy(p),v.normalize(),D=g.dot(v),v.scale(D,g),g.vadd(u,g),g.distanceTo(m)<t.radius)){if(d)return!0;const H=this.createContactEquation(a,l,t,e,c,h);g.vsub(m,H.ni),H.ni.normalize(),H.ni.scale(t.radius,H.ri),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),pe.pointToWorldFrame(s,o,g,g),g.vsub(l.position,H.rj),pe.vectorToWorldFrame(o,H.ni,H.ni),pe.vectorToWorldFrame(o,H.ri,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}}const k=Pb,y=Lb,w=Ib,O=yb;for(let N=0,U=C.length;N!==U;N++){e.getTriangleVertices(C[N],k,y,w),e.getNormal(C[N],O),m.vsub(k,g);let z=g.dot(O);if(O.scale(z,g),m.vsub(g,g),z=g.distanceTo(m),Xe.pointInTriangle(g,k,y,w)&&z<t.radius){if(d)return!0;let D=this.createContactEquation(a,l,t,e,c,h);g.vsub(m,D.ni),D.ni.normalize(),D.ni.scale(t.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),pe.pointToWorldFrame(s,o,g,g),g.vsub(l.position,D.rj),pe.vectorToWorldFrame(o,D.ni,D.ni),pe.vectorToWorldFrame(o,D.ri,D.ri),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}}C.length=0}planeTrimesh(t,e,n,s,r,o,a,l,c,h,d){const u=new S,f=vb;f.set(0,0,1),r.vmult(f,f);for(let p=0;p<e.vertices.length/3;p++){e.getVertex(p,u);const v=new S;v.copy(u),pe.pointToWorldFrame(s,o,v,u);const m=xb;if(u.vsub(n,m),f.dot(m)<=0){if(d)return!0;const x=this.createContactEquation(a,l,t,e,c,h);x.ni.copy(f);const _=_b;f.scale(m.dot(f),_),u.vsub(_,_),x.ri.copy(_),x.ri.vsub(a.position,x.ri),x.rj.copy(u),x.rj.vsub(l.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const Ns=new S,Sr=new S,wr=new S,fb=new S,pb=new S,mb=new Re,gb=new Re,vb=new S,xb=new S,_b=new S,yb=new S,Mb=new S;new S;const Sb=new S,wb=new S,bb=new S,Eb=new S,Tb=new S,Ab=new S,Cb=new S,Rb=new S,Pb=new S,Lb=new S,Ib=new S,Nb=new Hn,Db=[],Va=new S,Zf=new S,Ub=new S,Fb=new S,Ob=new S;function zb(i,t,e){let n=null;const s=i.length;for(let r=0;r!==s;r++){const o=i[r],a=Ub;i[(r+1)%s].vsub(o,a);const l=Fb;a.cross(t,l);const c=Ob;e.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Ha=new S,Bb=new S,kb=new S,Vb=new S,Hb=[new S,new S,new S,new S,new S,new S],Gb=new S,Wb=new S,qb=new S,Xb=new S,Yb=new S,jb=new S,$b=new S,Kb=new S,Zb=new S,Jb=new S,Qb=new S,tE=new S,eE=new S,nE=new S;new S;new S;const iE=new S,sE=new S,rE=new S,oE=new S,aE=new S,lE=new S,cE=new S,hE=new S,uE=new S,dE=new S,Jf=new Re,fE=new S;new S;const pE=new S,Qf=new S,mE=new S,gE=new S,vE=new S,xE=[0],_E=new S,yE=new S;class tp{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),s=this.current;let r=0;for(;n>s[r];)r++;if(n!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,s=this.previous,r=n.length,o=s.length;let a=0;for(let l=0;l<r;l++){let c=!1;const h=n[l];for(;h>s[a];)a++;c=h===s[a],c||ep(t,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=s[l];for(;h>n[a];)a++;c=n[a]===h,c||ep(e,h)}}}function ep(i,t){i.push((t&4294901760)>>16,t&65535)}const Yc=(i,t)=>i<t?`${i}-${t}`:`${t}-${i}`;class ME{constructor(){this.data={keys:[]}}get(t,e){const n=Yc(t,e);return this.data[n]}set(t,e,n){const s=Yc(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=n}delete(t,e){const n=Yc(t,e),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class SE extends Wm{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new S,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new S,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new K1,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new ob,this.constraints=[],this.narrowphase=new db(this),this.collisionMatrix=new Uf,this.collisionMatrixPrevious=new Uf,this.bodyOverlapKeeper=new tp,this.shapeOverlapKeeper=new tp,this.contactmaterials=[],this.contactMaterialTable=new ME,this.defaultMaterial=new na("default"),this.defaultContactMaterial=new ea(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof js?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,s){return n===void 0&&(n={}),n.mode=Xe.ALL,n.from=t,n.to=e,n.callback=s,jc.intersectWorld(this,n)}raycastAny(t,e,n,s){return n===void 0&&(n={}),n.mode=Xe.ANY,n.from=t,n.to=e,n.result=s,jc.intersectWorld(this,n)}raycastClosest(t,e,n,s){return n===void 0&&(n={}),n.mode=Xe.CLOSEST,n.from=t,n.to=e,n.result=s,jc.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Mt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,s=n.indexOf(t);if(s!==-1){n.splice(s,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const s=e[n].shapes;for(let r=0;r<s.length;r++){const o=s[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=je.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const s=n-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const s=je.now();let r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(je.now()-s>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=AE,s=CE,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=Mt.DYNAMIC;let u=-1/0;const f=this.constraints,p=TE;l.length();const v=l.x,m=l.y,g=l.z;let x=0;for(c&&(u=je.now()),x=0;x!==r;x++){const N=o[x];if(N.type===d){const U=N.force,z=N.mass;U.x+=z*v,U.y+=z*m,U.z+=z*g}}for(let N=0,U=this.subsystems.length;N!==U;N++)this.subsystems[N].update();c&&(u=je.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),c&&(h.broadphase=je.now()-u);let _=f.length;for(x=0;x!==_;x++){const N=f[x];if(!N.collideConnected)for(let U=n.length-1;U>=0;U-=1)(N.bodyA===n[U]&&N.bodyB===s[U]||N.bodyB===n[U]&&N.bodyA===s[U])&&(n.splice(U,1),s.splice(U,1))}this.collisionMatrixTick(),c&&(u=je.now());const M=EE,C=e.length;for(x=0;x!==C;x++)M.push(e[x]);e.length=0;const E=this.frictionEquations.length;for(x=0;x!==E;x++)p.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,e,M,this.frictionEquations,p),c&&(h.narrowphase=je.now()-u),c&&(u=je.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);const T=e.length;for(let N=0;N!==T;N++){const U=e[N],z=U.bi,D=U.bj,Q=U.si,H=U.sj;let tt;if(z.material&&D.material?tt=this.getContactMaterial(z.material,D.material)||this.defaultContactMaterial:tt=this.defaultContactMaterial,tt.friction,z.material&&D.material&&(z.material.friction>=0&&D.material.friction>=0&&z.material.friction*D.material.friction,z.material.restitution>=0&&D.material.restitution>=0&&(U.restitution=z.material.restitution*D.material.restitution)),a.addEquation(U),z.allowSleep&&z.type===Mt.DYNAMIC&&z.sleepState===Mt.SLEEPING&&D.sleepState===Mt.AWAKE&&D.type!==Mt.STATIC){const ft=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),ut=D.sleepSpeedLimit**2;ft>=ut*2&&(z.wakeUpAfterNarrowphase=!0)}if(D.allowSleep&&D.type===Mt.DYNAMIC&&D.sleepState===Mt.SLEEPING&&z.sleepState===Mt.AWAKE&&z.type!==Mt.STATIC){const ft=z.velocity.lengthSquared()+z.angularVelocity.lengthSquared(),ut=z.sleepSpeedLimit**2;ft>=ut*2&&(D.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(z,D,!0),this.collisionMatrixPrevious.get(z,D)||(go.body=D,go.contact=U,z.dispatchEvent(go),go.body=z,D.dispatchEvent(go)),this.bodyOverlapKeeper.set(z.id,D.id),this.shapeOverlapKeeper.set(Q.id,H.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=je.now()-u,u=je.now()),x=0;x!==r;x++){const N=o[x];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(_=f.length,x=0;x!==_;x++){const N=f[x];N.update();for(let U=0,z=N.equations.length;U!==z;U++){const D=N.equations[U];a.addEquation(D)}}a.solve(t,this),c&&(h.solve=je.now()-u),a.removeAllEquations();const I=Math.pow;for(x=0;x!==r;x++){const N=o[x];if(N.type&d){const U=I(1-N.linearDamping,t),z=N.velocity;z.scale(U,z);const D=N.angularVelocity;if(D){const Q=I(1-N.angularDamping,t);D.scale(Q,D)}}}this.dispatchEvent(bE),c&&(u=je.now());const y=this.stepnumber%(this.quatNormalizeSkip+1)===0,w=this.quatNormalizeFast;for(x=0;x!==r;x++)o[x].integrate(t,y,w);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=je.now()-u),this.stepnumber+=1,this.dispatchEvent(wE);let O=!0;if(this.allowSleep)for(O=!1,x=0;x!==r;x++){const N=o[x];N.sleepTick(this.time),N.sleepState!==Mt.SLEEPING&&(O=!0)}this.hasActiveBodies=O}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Ii,Ni),t){for(let r=0,o=Ii.length;r<o;r+=2)vo.bodyA=this.getBodyById(Ii[r]),vo.bodyB=this.getBodyById(Ii[r+1]),this.dispatchEvent(vo);vo.bodyA=vo.bodyB=null}if(e){for(let r=0,o=Ni.length;r<o;r+=2)xo.bodyA=this.getBodyById(Ni[r]),xo.bodyB=this.getBodyById(Ni[r+1]),this.dispatchEvent(xo);xo.bodyA=xo.bodyB=null}Ii.length=Ni.length=0;const n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(Ii,Ni),n){for(let r=0,o=Ii.length;r<o;r+=2){const a=this.getShapeById(Ii[r]),l=this.getShapeById(Ii[r+1]);Di.shapeA=a,Di.shapeB=l,a&&(Di.bodyA=a.body),l&&(Di.bodyB=l.body),this.dispatchEvent(Di)}Di.bodyA=Di.bodyB=Di.shapeA=Di.shapeB=null}if(s){for(let r=0,o=Ni.length;r<o;r+=2){const a=this.getShapeById(Ni[r]),l=this.getShapeById(Ni[r+1]);Ui.shapeA=a,Ui.shapeB=l,a&&(Ui.bodyA=a.body),l&&(Ui.bodyB=l.body),this.dispatchEvent(Ui)}Ui.bodyA=Ui.bodyB=Ui.shapeA=Ui.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const s=t[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}}new Hn;const jc=new Xe,je=globalThis.performance||{};if(!je.now){let i=Date.now();je.timing&&je.timing.navigationStart&&(i=je.timing.navigationStart),je.now=()=>Date.now()-i}new S;const wE={type:"postStep"},bE={type:"preStep"},go={type:Mt.COLLIDE_EVENT_NAME,body:null,contact:null},EE=[],TE=[],AE=[],CE=[],Ii=[],Ni=[],vo={type:"beginContact",bodyA:null,bodyB:null},xo={type:"endContact",bodyA:null,bodyB:null},Di={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Ui={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Qm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class io{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const RE=new Pu(-1,1,1,-1,0,1);class PE extends Ge{constructor(){super(),this.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ge([0,2,0,0,2,0],2))}}const LE=new PE;class ql{constructor(t){this._mesh=new Be(LE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,RE)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class t0 extends io{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof an?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=qo.clone(t.uniforms),this.material=new an({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ql(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class np extends io{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class IE extends io{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class NE{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new st);this._width=n.width,this._height=n.height,e=new Bn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new t0(Qm),this.copyPass.material.blending=Gi,this.clock=new km}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}np!==void 0&&(o instanceof np?n=!0:o instanceof IE&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const DE={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new st(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`},UE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new St(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class jr extends io{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new st(t.x,t.y):new st(256,256),this.clearColor=new St(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Bn(r,o,{type:hi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new Bn(r,o,{type:hi});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new Bn(r,o,{type:hi});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=UE;this.highPassUniforms=qo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new an({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new st(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Qm;this.copyUniforms=qo.clone(h.uniforms),this.blendMaterial=new an({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Go,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new St,this.oldClearAlpha=1,this.basic=new $i,this.fsQuad=new ql(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new st(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=jr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=jr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new an({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new an({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}jr.BlurDirectionX=new st(1,0);jr.BlurDirectionY=new st(0,1);const FE={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class OE extends io{constructor(){super();const t=FE;this.uniforms=qo.clone(t.uniforms),this.material=new r1({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ql(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},xe.getTransfer(this._outputColorSpace)===Ae&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===jp?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$p?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Kp?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Zp?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Jp?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Nl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const zE=["common","ground.frag","grass.vert","grass.frag","leaves.vert","leaves.frag","water.vert","water.frag","post.vert","scenepost.frag","wind.vert","wind.frag"],eu=[`#define WORLD_HALF ${xn.toFixed(1)}`,`#define WORLD_SIZE ${oi.toFixed(1)}`,`#define WATER_Y ${Ki.toFixed(2)}`,`#define MAX_LAMPS ${Vl}`,""].join(`
`),ps={};await Promise.all(zE.map(async i=>{ps[i]=await Gl(`shaders/${i}.glsl`)}));function ip(i=""){const t=i.indexOf("//#main");return t<0?{head:i,main:""}:{head:i.slice(0,t),main:i.slice(t+7)}}const sp=i=>eu+ps[i],ui=new Am({antialias:!1,powerPreference:"high-performance"});let ci=Math.min(devicePixelRatio,1.5);ui.setPixelRatio(ci);ui.setSize(innerWidth,innerHeight);ui.shadowMap.enabled=!0;ui.shadowMap.type=Yp;ui.toneMapping=Nl;J("app").appendChild(ui.domElement);const ce=new Cm;ce.background=new St;ce.fog=new Iu(0,45,115);const An=new vn(38,innerWidth/innerHeight,.5,400);class BE extends io{constructor(){super(),this.target=new Bn(1,1,{type:hi,samples:4}),this.uniforms={tDiffuse:{value:this.target.texture},uRes:{value:new st(1,1)},uAmount:{value:0}},this.quad=new ql(new an({uniforms:this.uniforms,vertexShader:ps["post.vert"],fragmentShader:ps["scenepost.frag"],depthTest:!1,depthWrite:!1})),this.tilt=!0}setSize(t,e){this.target.setSize(t,e),this.uniforms.uRes.value.set(t,e)}setSamples(t){this.target.samples!==t&&(this.target.samples=t,this.target.dispose())}render(t,e){t.setRenderTarget(this.target),t.clear(),t.render(ce,An),this.uniforms.uAmount.value=this.tilt?8.8*ci:0,t.setRenderTarget(this.renderToScreen?null:e),this.quad.render(t)}}const $s=new NE(ui,new Bn(1,1,{type:hi})),qu=new BE,$r=new jr(new st(innerWidth,innerHeight),.7,.5,.95),Xu=new t0(DE);$s.addPass(qu);$s.addPass($r);$s.addPass(new OE);$s.addPass(Xu);let nu=1;const kE=$r.setSize.bind($r);$r.setSize=(i,t)=>kE(Math.max(1,Math.round(i*nu)),Math.max(1,Math.round(t*nu)));function Xl(){ui.setPixelRatio(ci),ui.setSize(innerWidth,innerHeight),$s.setPixelRatio(ci),$s.setSize(innerWidth,innerHeight),Xu.material.uniforms.resolution.value.set(1/(innerWidth*ci),1/(innerHeight*ci))}const rp={high:{pr:()=>Math.min(devicePixelRatio,1.5),samples:4,bloomScale:1,shadow:2048},mid:{pr:()=>1,samples:0,bloomScale:.35,shadow:1024},low:{pr:()=>.8,samples:0,bloomScale:.35,shadow:1024}};let iu=!1;function VE(i){iu=i==="auto";const t=rp[iu?"mid":i]||rp.high;ci=t.pr(),nu=t.bloomScale,qu.setSamples(t.samples),Xu.enabled=t.samples===0,Qe.shadow.mapSize.x!==t.shadow&&(Qe.shadow.mapSize.setScalar(t.shadow),Qe.shadow.map?.dispose(),Qe.shadow.map=null),Xl()}Xl();const HE=i=>{qu.tilt=i},GE=()=>ci;let $c=0,op=performance.now();function WE(){if(!iu)return;$c++;const i=performance.now(),t=(i-op)/1e3;if(t<1.5)return;const e=$c/t;$c=0,op=i;let n=ci;e<48?n=Math.max(.7,n-(e<35?.15:.08)):e>57&&(n=Math.min(Math.min(devicePixelRatio,1.25),n+.05)),Math.abs(n-ci)>.01&&(ci=n,Xl())}addEventListener("resize",()=>{An.aspect=innerWidth/innerHeight,An.updateProjectionMatrix(),Xl()});const ol=new zm(16777215,4473924,1);ce.add(ol);const Qe=new Bm(16777215,1.5);Qe.castShadow=!0;Qe.shadow.mapSize.set(2048,2048);Object.assign(Qe.shadow.camera,{left:-38,right:38,top:38,bottom:-38,near:1,far:160});Qe.shadow.bias=-4e-4;Qe.shadow.normalBias=.05;ce.add(Qe,Qe.target);const Ce={uTime:{value:0},uMask:{value:null},uGround:{value:new St},uPaved:{value:new St},uAsphalt:{value:new St},uGrassA:{value:new St},uGrassB:{value:new St},uShadowTint:{value:new St},uLeafTint:{value:new St},uLamps:{value:Array.from({length:Vl},()=>new P(9999,0,9999))},uLampI:{value:0},uLampColor:{value:new St(1,.55,.2)},uCarPos:{value:new P},uPlayerPos:{value:new P(9999,-99,9999)},uCarDir:{value:new st(0,-1)},uHeadI:{value:0},uWindDir:{value:new st(1,.35).normalize()}};function Yu(i,t){const e=ip(ps[`${t}.vert`]),n=ip(ps[`${t}.frag`]);return i.customProgramCacheKey=()=>"paint-"+t,i.userData.painted=!0,i.onBeforeCompile=s=>{Object.assign(s.uniforms,Ce),s.vertexShader=[eu,ps.common,e.head,""].join(`
`)+s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+e.main).replace("#include <fog_vertex>",`#include <fog_vertex>
 vW = (modelMatrix * vec4(transformed, 1.)).xyz;`),s.fragmentShader=[eu,ps.common,n.head,""].join(`
`)+s.fragmentShader.replace("#include <shadowmap_pars_fragment>",`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`).replace("#include <opaque_fragment>",n.main+`
#include <opaque_fragment>`)},i}const e0=(i,t,e)=>new an({vertexShader:sp(i),fragmentShader:sp(t),...e}),Oe=new SE({gravity:new S(0,-9.82*1.3,0)});Oe.broadphase=new Rr(Oe);Oe.allowSleep=!0;Oe.defaultContactMaterial.friction=.35;Oe.defaultContactMaterial.restitution=.12;const zi=[];function Kr(i,t){Oe.addBody(t);const e={mesh:i,body:t,home:{p:t.position.clone(),q:t.quaternion.clone()}};return zi.push(e),e}function ts(i,t,e,n,s=0,r){const o=new Mt({mass:0});return o.addShape(i),o.position.set(t,e,n),r?o.quaternion.copy(r):o.quaternion.setFromEuler(0,s,0),Oe.addBody(o),o}function su(i){for(const t of i)t.body.position.copy(t.home.p),t.body.quaternion.copy(t.home.q),t.body.velocity.setZero(),t.body.angularVelocity.setZero(),t.body.wakeUp()}const rt=(i,t={})=>new bs({color:i,flatShading:!0,...t}),n0=[];function _i(i,t,e){const n=new $i({color:new St(i)});return n0.push({m:n,base:new St(i),dayI:t,nightI:e}),n}function X(i,t,e,n=0,s=0,r=0,o=!0){const a=new Be(i,t);return a.position.set(n,s,r),a.castShadow=o,a.receiveShadow=!0,(e||ce).add(a),a}function Es(i,t,e,n=0){const s=new me;return s.position.set(i,t,e),s.rotation.y=n,ce.add(s),s}const Co=new Map;function vi(i,t){return Co.has(i)||Co.set(i,new Set),Co.get(i).add(t),()=>Co.get(i).delete(t)}function kn(i,t){const e=Co.get(i);if(!e)return 0;for(const n of[...e])n(t);return e.size}const vl=[];function qE(i){for(const t of i){if(!t||!t.id)throw new Error("feature without an id");if(vl.some(e=>e.id===t.id))throw new Error(`feature '${t.id}' registered twice`);vl.push(t)}}async function XE(i){for(const t of vl)t.build&&await t.build(i)}function YE(i,t){for(const e of vl)e.update&&e.update(i,t)}function i0(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ge;let c=0;for(let h=0;h<i.length;++h){const d=i[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let u=0;u<i.length;++u){const f=i[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(const h in r){const d=ap(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][u]);const p=ap(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function ap(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new He(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<e;p++){const v=h.getComponent(u,p);a.setComponent(u+d,p,v)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const jE=new he,$E=new he,Kc=new P;function s0(i,t,e,n){const s=i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();s.applyMatrix4($E.multiplyMatrices(jE.copy(t.matrixWorld).invert(),i.matrixWorld));for(const r of Object.keys(s.attributes))r!=="position"&&r!=="normal"&&!(e&&r==="uv")&&s.deleteAttribute(r);if(s.morphAttributes={},s.clearGroups(),n){const r=s.attributes.position.count,o=new Float32Array(r*3);for(let a=0;a<r;a++)n.toArray(o,a*3);s.setAttribute("color",new He(o,3))}return s}function r0(i,t,e,n){const s=new Be(i0(t),e);s.castShadow=n.some(r=>r.castShadow),s.receiveShadow=n.some(r=>r.receiveShadow),i.add(s);for(const r of n)r.removeFromParent();return s}function Yl(i,t,e){i.updateMatrixWorld(!0);const n=new Map;for(const r of t){const o=r.material.uuid+(e?"|"+e(r):"");n.has(o)||n.set(o,[]),n.get(o).push(r)}let s=0;for(const r of n.values()){if(r.length<2)continue;const o=r[0].material;r0(i,r.map(a=>s0(a,i,!!o.map)),o,r),s+=r.length-1}return s}const ju=i=>i.children.filter(t=>t.isMesh&&!t.isInstancedMesh);function o0(i,t){const e=new Set(t),n=rt("#ffffff",{vertexColors:!0});i.updateMatrixWorld(!0);const s=[];for(const r of t){const o=[],a=c=>{for(const h of c.children)e.has(h)||(h.isMesh&&o.push(h),a(h))};a(r);const l=o.map(c=>s0(c,r,!1,c.material.map?new St("#f29a86"):c.material.color));s.push({node:r,list:o,geos:l})}for(const{node:r,list:o,geos:a}of s){for(const l of[...r.children])e.has(l)||l.removeFromParent();a.length&&r0(r,a,n,o)}}function KE(i,t){const e=new Set;for(const s of t)s.traverse(r=>e.add(r));const n=[];return i.traverse(s=>{if(!s.isMesh||s.isInstancedMesh||e.has(s))return;const r=s.material;Array.isArray(r)||r.userData.painted||!(r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial)||Object.keys(s.geometry.attributes).some(o=>o!=="position"&&o!=="normal"&&o!=="uv")||n.push(s)}),i.updateMatrixWorld(!0),Yl(i,n,s=>(s.getWorldPosition(Kc),Math.floor(Kc.x/30)+","+Math.floor(Kc.z/30)))}const lp=i=>{try{return JSON.parse(localStorage.getItem(i))}catch{return null}},cp=(i,t)=>{try{localStorage.setItem(i,JSON.stringify(t))}catch{}},hp=8e3;function ZE(i){const t=!!i.databaseURL,e=`fb.${i.projectId||"db"}.auth`;let n=lp(e),s=!i.apiKey,r=lp("fb.deviceId");r||(r="dev_"+Math.random().toString(36).slice(2,12)+Date.now().toString(36),cp("fb.deviceId",r));async function o(c,h,d){const u=await fetch(c,{method:"POST",signal:AbortSignal.timeout(hp),headers:{"Content-Type":d?"application/x-www-form-urlencoded":"application/json"},body:d?new URLSearchParams(h):JSON.stringify(h)}),f=await u.json().catch(()=>({}));if(!u.ok){const p=new Error(f.error?.message||`HTTP ${u.status}`);throw p.status=u.status,p}return f}async function a(){if(s)return null;if(n&&n.exp>Date.now()+6e4)return n.idToken;try{if(n?.refreshToken){const c=await o(`https://securetoken.googleapis.com/v1/token?key=${i.apiKey}`,{grant_type:"refresh_token",refresh_token:n.refreshToken},!0);n={uid:c.user_id,idToken:c.id_token,refreshToken:c.refresh_token,exp:Date.now()+c.expires_in*1e3}}else{const c=await o(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${i.apiKey}`,{returnSecureToken:!0});n={uid:c.localId,idToken:c.idToken,refreshToken:c.refreshToken,exp:Date.now()+c.expiresIn*1e3}}return cp(e,n),n.idToken}catch(c){throw(c.status===400||c.status===403)&&(console.warn(`firebase: anonymous sign-in unavailable (${c.message}), using unauthenticated access`),s=!0),c}}async function l(c,h,d,{keepalive:u=!1}={}){if(!t)throw new Error("firebase not configured");let f=null;try{f=await a()}catch(v){if(!s)throw v}const p=await fetch(`${i.databaseURL}/${h}.json${f?`?auth=${f}`:""}`,{method:c,keepalive:u,signal:u?void 0:AbortSignal.timeout(hp),body:d===void 0?void 0:JSON.stringify(d)});if(!p.ok)throw new Error(`firebase ${c} ${h}: HTTP ${p.status} ${(await p.text()).slice(0,120)}`);return p.json()}return{enabled:t,async id(){try{await a()}catch{}return!s&&n?n.uid:r},get signedIn(){return!s&&!!n},get:c=>l("GET",c),set:(c,h,d)=>l("PUT",c,h,d),update:(c,h,d)=>l("PATCH",c,h,d),remove:c=>l("DELETE",c)}}const JE=1,QE=["auto","slot1","slot2","slot3"],ia=i=>i==="auto"?"Simpan otomatis":"Slot "+i.slice(4),$o=new Map;function so(i,t){$o.has(i)&&console.warn(`save: slice '${i}' registered twice, the newer one wins (hot reload?)`),$o.set(i,{version:1,...t})}const Zi={playTime:0,slot:null};function tT(){const i={},t=[];for(const[n,s]of $o){const r=s.save();i[n]={v:s.version,d:r};const o=s.summary&&s.summary(r);o&&t.push(o)}return{meta:{version:JE,savedAt:Date.now(),playTime:Math.round(Zi.playTime),summary:t.join(" · ")},data:i}}function eT(i){for(const[t,e]of $o){const n=i[t];try{if(!n){e.reset();continue}let s=n.d;if(n.v!==e.version){if(!e.migrate){console.warn(`save: '${t}' v${n.v} -> v${e.version} without migrate(), using defaults`),e.reset();continue}s=e.migrate(s,n.v)}e.load(s)}catch(s){console.error(`save: slice '${t}' failed to load, reset instead`,s),e.reset()}}}function nT(){for(const i of $o.values())i.reset();Zi.playTime=0,Zi.slot=null,Or=0,kn("save:applied",{slot:null})}const yi=ZE(y1),up=i=>`tester.save.${i}`,xl={read(i){try{return JSON.parse(localStorage.getItem(up(i)))}catch{return null}},write(i,t){try{return localStorage.setItem(up(i),JSON.stringify(t)),!0}catch{return!1}}},qi={get enabled(){return yi.enabled},get signedIn(){return yi.signedIn},online:null},$u=async()=>`${M1}/${await yi.id()}`;async function Ku(){let i={};if(yi.enabled)try{i=await yi.get(`${await $u()}/meta`)||{},qi.online=!0}catch(t){console.warn("save: cloud list failed",t.message),qi.online=!1}return QE.map(t=>{const e=xl.read(t)?.meta,n=i[t];return n&&(!e||n.savedAt>=e.savedAt)?{slot:t,meta:n,where:"cloud"}:{slot:t,meta:e||null,where:e?"local":null}})}async function iT(){return(await Ku()).filter(t=>t.meta).sort((t,e)=>e.meta.savedAt-t.meta.savedAt)[0]||null}async function jl(i,{keepalive:t=!1}={}){const e=tT();let s=xl.write(i,e)?"local":null;if(yi.enabled)try{await yi.update(await $u(),{[`meta/${i}`]:e.meta,[`slots/${i}`]:JSON.stringify(e.data)},{keepalive:t}),s="cloud",qi.online=!0}catch(r){console.warn("save: cloud save failed, kept locally",r.message),qi.online=!1}return s&&(Zi.slot=i,i==="auto"&&(Or=0),kn("save:saved",{slot:i,where:s,meta:e.meta})),s}async function a0(i){const t=xl.read(i);let e=null,n=null;if(yi.enabled)try{const s=await $u(),r=await yi.get(`${s}/meta/${i}`);if(r&&(!t||r.savedAt>=t.meta.savedAt)){const o=await yi.get(`${s}/slots/${i}`);o&&(e={meta:r,data:JSON.parse(o)},n="cloud",xl.write(i,e))}qi.online=!0}catch(s){console.warn("save: cloud load failed, using the local copy",s.message),qi.online=!1}return!e&&t&&(e=t,n="local"),e?(eT(e.data),Zi.playTime=e.meta.playTime||0,Zi.slot=i,Or=0,kn("save:applied",{slot:i,meta:e.meta}),n):null}let Or=0,Zc=!1;function sT(i,t){t&&(Zi.playTime+=i,Or+=i,Or>S1&&!Zc&&(Zc=!0,Or=0,jl("auto").finally(()=>{Zc=!1})))}const Zu=await Gl("data/palettes.json","json"),l0=i=>Object.fromEntries(Object.entries(i).map(([t,e])=>[t,typeof e=="string"?new St(e):e])),rT=Object.fromEntries(Object.entries(Zu.palettes).map(([i,t])=>[i,l0(t)])),Ga=Zu.keys.map(([i,t])=>[i,rT[t]]),_o=l0(Object.fromEntries(Object.entries(Zu.palettes.night).map(([i,t])=>[i,typeof t=="string"?"#000":0])));function oT(i){let t=0;for(;t<Ga.length-2&&i>=Ga[t+1][0];)t++;const[e,n]=Ga[t],[s,r]=Ga[t+1],o=Ne(0,1,(i-e)/(s-e));for(const a in _o)_o[a]instanceof St?_o[a].lerpColors(n[a],r[a],o):_o[a]=Ue(n[a],r[a],o);return _o}function c0(i){return i<4.5||i>=20.4?"Malam":i<6?"Subuh":i<7.5?"Fajar":i<11?"Pagi":i<15?"Siang":i<17.3?"Sore":i<18.6?"Matahari terbenam":"Senja"}const De={real:!0,hour:12,speed:60},aT=i=>String(Math.floor(i)).padStart(2,"0")+":"+String(Math.floor(i*60)%60).padStart(2,"0");so("time",{save:()=>({hour:+De.hour.toFixed(3),real:De.real,speed:De.speed}),load(i){De.real=!!i.real,De.hour=i.hour??12,De.speed=i.speed??60},reset(){De.real=!0,De.speed=60},summary:i=>`${aT(i.hour)} ${c0(i.hour)}`});const h0=()=>{const i=new Date;return i.getHours()+i.getMinutes()/60+i.getSeconds()/3600};function lT(i){return De.hour=De.real?h0():(De.hour+i*De.speed/3600)%24,De.hour}const Ks={fwd:0,back:0,left:0,right:0,brake:0,boost:0},_l={KeyW:"fwd",ArrowUp:"fwd",KeyS:"back",ArrowDown:"back",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"brake",ShiftLeft:"boost",ShiftRight:"boost"},sa=()=>{for(const i in Ks)Ks[i]=0},Ro=new Map;function cT(i,t){return Ro.has(i)||Ro.set(i,new Set),Ro.get(i).add(t),()=>Ro.get(i).delete(t)}function hT(i){const t=Ro.get(i);if(t)for(const e of t)e()}const Zr=[];function Ju(i){return Zr.push(i),i}function Qu(i){const t=Zr.indexOf(i);t>=0&&Zr.splice(t,1)}const dp=3.2;function uT(i,t,e){let n=null,s=dp;for(const r of Zr){r.dia&&(r.dia.rotation.y=i*1.5,r.dia.position.y=1.4+Math.sin(i*2.5)*.1);const o=Math.hypot(t.x-r.pos.x,t.z-r.pos.z);o<s&&o<(r.range||dp)&&(s=o,n=r)}e&&(!n||s>1.6)&&(n=e);for(const r of Zr)r.ring&&(r.ring.material.opacity+=((r===n?.95:.3)-r.ring.material.opacity)*.15);return n}const[u0,d0,f0]=_1,td=Math.hypot(u0,d0,f0),Pr={yaw:Math.atan2(u0,f0),pitch:Math.asin(d0/td),zoom:1},dT=.12,fT=1.45,pT=.45,mT=2,fp=2.2,pp=1.2,mp=Math.PI/4,gp=1.25,vp={near:ce.fog.near,far:ce.fog.far},gT=Qe.shadow.camera.right,gn={...Pr,scale:.48};let p0=gn.scale;const vT=i=>{p0=i},dn={...Pr};function $l(i,t,e){dn.yaw=i,dn.pitch=Mn(t,dT,fT),dn.zoom=Mn(e,pT,mT)}const Wa=i=>$l(dn.yaw+i,dn.pitch,dn.zoom),Lr=i=>$l(dn.yaw,dn.pitch,dn.zoom*i);function ed(){$l(Math.round((dn.yaw-Pr.yaw)/(Math.PI*2))*Math.PI*2+Pr.yaw,Pr.pitch,Pr.zoom)}function m0(i){return i.setFromSphericalCoords(td*gn.zoom*gn.scale,Math.PI/2-gn.pitch,gn.yaw)}const Jr=new Set,g0={left:{rate:i=>Wa(-fp*i),step:()=>Wa(-mp)},right:{rate:i=>Wa(fp*i),step:()=>Wa(mp)},in:{rate:i=>Lr(Math.exp(-pp*i)),step:()=>Lr(1/gp)},out:{rate:i=>Lr(Math.exp(pp*i)),step:()=>Lr(gp)}};function xT(i){for(const a of Jr)g0[a].rate(i);const t=1-Math.exp(-i*12);gn.yaw+=(dn.yaw-gn.yaw)*t,gn.pitch+=(dn.pitch-gn.pitch)*t,gn.zoom+=(dn.zoom-gn.zoom)*t,gn.scale+=(p0-gn.scale)*(1-Math.exp(-i*2.5));const e=gn.zoom*gn.scale,n=td*(e-1);ce.fog.near=vp.near+Math.max(n,0),ce.fog.far=vp.far+Math.max(n,0);const s=ce.fog.far+5;Math.abs(An.far-s)>2&&(An.far=s,An.updateProjectionMatrix());const r=gT*Math.max(e,.6),o=Qe.shadow.camera;Math.abs(o.right-r)>.5&&(Object.assign(o,{left:-r,right:r,top:r,bottom:-r}),o.updateProjectionMatrix())}const Mi=ui.domElement,Xi=new Map;let Bo=0;const v0=()=>{const[i,t]=[...Xi.values()];return Math.hypot(i.x-t.x,i.y-t.y)};Mi.addEventListener("pointerdown",i=>{i.pointerType==="mouse"&&i.button!==0&&i.button!==2||(Mi.setPointerCapture(i.pointerId),Xi.set(i.pointerId,{x:i.clientX,y:i.clientY}),Xi.size===2&&(Bo=v0()),Mi.classList.add("dragging"))});Mi.addEventListener("pointermove",i=>{const t=Xi.get(i.pointerId);if(t&&(Xi.size===1&&$l(dn.yaw-(i.clientX-t.x)*.006,dn.pitch+(i.clientY-t.y)*.004,dn.zoom),t.x=i.clientX,t.y=i.clientY,Xi.size===2)){const e=v0();Bo>0&&e>0&&Lr(Bo/e),Bo=e}});const x0=i=>{Xi.delete(i.pointerId),Xi.size<2&&(Bo=0),Xi.size||Mi.classList.remove("dragging")};Mi.addEventListener("pointerup",x0);Mi.addEventListener("pointercancel",x0);Mi.addEventListener("contextmenu",i=>i.preventDefault());Mi.addEventListener("dblclick",ed);Mi.addEventListener("wheel",i=>{i.preventDefault(),Lr(Math.exp(Mn(i.deltaY,-200,200)*.0012))},{passive:!1});document.querySelectorAll("#camPad button").forEach(i=>{const t=i.dataset.cam;if(t==="reset"){i.onclick=ed;return}let e=0,n=0;const s=r=>{e&&(clearTimeout(n),Jr.delete(t),i.classList.remove("on"),r&&performance.now()-e<250&&g0[t].step(),e=0)};i.addEventListener("pointerdown",r=>{r.preventDefault(),i.setPointerCapture(r.pointerId),e=performance.now(),i.classList.add("on"),n=setTimeout(()=>Jr.add(t),250)}),i.addEventListener("pointerup",()=>s(!0)),i.addEventListener("pointercancel",()=>s(!1))});const yl={KeyZ:"left",KeyX:"right",Equal:"in",NumpadAdd:"in",Minus:"out",NumpadSubtract:"out"};addEventListener("keydown",i=>{i.target.tagName==="INPUT"||i.target.tagName==="SELECT"||(yl[i.code]&&(Jr.add(yl[i.code]),i.preventDefault()),i.code==="KeyC"&&!i.repeat&&ed())});addEventListener("keyup",i=>{yl[i.code]&&Jr.delete(yl[i.code])});addEventListener("blur",()=>Jr.clear());const Yi=new P(Pn.x,.55,Pn.z),xp=new P,_p=Yi.clone(),ru=new P,_T=new P;function yT(i,t){vT(t.scale),xp.lerp(_T.set(t.vel.x,0,t.vel.z).multiplyScalar(t.lead),1-Math.exp(-i*2.5)),Yi.lerp(ru.copy(t.pos).add(xp),1-Math.exp(-i*7)),_p.lerp(Yi,1-Math.exp(-i*10)),xT(i),An.position.copy(_p).add(m0(ru)),An.position.y=Math.max(An.position.y,1),An.lookAt(Yi)}function nd(){An.position.copy(Yi).add(m0(ru)),An.lookAt(Yi)}const _0=[{x:-40,z:-20,r:14},{x:18,z:47,r:12},{x:51,z:-35,r:9},{x:-61,z:12,r:6}],MT=[[0,0,12.5],[40,4,9],[-26,28,11],[46,-23,5],[-50,16,5]],ST=[[0,0,36,4],[0,0,-24,26],[0,0,0,-48],[0,0,8,31],[36,4,46,-22],[-24,26,-50,16]],Ir={x:0,z:-55,hx:26,hz:7},di=[];function ra(i,t){let e=86+18*(Gm(i*.02+3,t*.02+7)-.5)-Math.hypot(i,t);for(const n of _0)e=Math.min(e,Math.hypot(i-n.x,t-n.z)-n.r*(1+.45*(zo(i*.11+n.x,t*.11+n.z)-.5)));return e}const wT=i=>i>=0?0:-1.2*Ne(0,5,-i),Zs=(i,t)=>wT(ra(i,t));function bT(i,t,e){let n=1e9;for(const[s,r,o]of MT)n=Math.min(n,Math.hypot(i-s,t-r)-o);for(const[s,r,o,a]of ST)n=Math.min(n,w1(i,t,s,r,o,a)-2.8);return n+=(zo(i*.35,t*.35)-.5)*.9,Ne(.5,-.5,n)*Ne(.3,1.5,e)}const ET=(i,t)=>Ne(.3,-.3,b1(i,t,Ir.x,Ir.z,Ir.hx,Ir.hz));function TT(i,t,e,n,s){let r=Ne(.32,.5,Gm(i*.045+11,t*.045+4));r*=(1-n)*(1-s)*Ne(.5,2.5,e);for(const o of di){const a=Math.hypot(i-o.x,t-o.z);a<o.r+1&&(r*=Ne(o.r,o.r+1,a))}return r}const sn=512,Vi=new Uint8Array(sn*sn*4);function AT(){for(let i=0;i<sn;i++){const t=-xn+(i+.5)*oi/sn;for(let e=0;e<sn;e++){const n=-xn+(e+.5)*oi/sn,s=ra(n,t),r=ET(n,t),o=bT(n,t,s)*(1-r),a=TT(n,t,s,o,r),l=(i*sn+e)*4;Vi[l]=Mn((s+10)/20,0,1)*255,Vi[l+1]=o*255,Vi[l+2]=a*255,Vi[l+3]=r*255}}}function Js(i,t){const e=Mn((i+xn)/oi*sn-.5,0,sn-1.001),n=Mn((t+xn)/oi*sn-.5,0,sn-1.001),s=Math.floor(e),r=Math.floor(n),o=e-s,a=n-r,l=[0,0,0,0];for(let c=0;c<4;c++){const h=Vi[(r*sn+s)*4+c],d=Vi[(r*sn+s+1)*4+c],u=Vi[((r+1)*sn+s)*4+c],f=Vi[((r+1)*sn+s+1)*4+c];l[c]=Ue(Ue(h,d,o),Ue(u,f,o),a)/255}return{d:l[0]*20-10,paved:l[1],grass:l[2],asphalt:l[3]}}function CT(){const i=new Rm(Vi,sn,sn,jn);i.magFilter=i.minFilter=Yn,i.needsUpdate=!0,Ce.uMask.value=i;const t=new wi(oi,oi,oi,oi).rotateX(-Math.PI/2),e=t.attributes.position;for(let a=0;a<e.count;a++)e.setY(a,Zs(e.getX(a),e.getZ(a)));t.computeVertexNormals();const n=new Be(t,Yu(new bs,"ground"));n.receiveShadow=!0,ce.add(n);const s=oi+1,r=[];for(let a=0;a<s;a++){const l=[];for(let c=0;c<s;c++)l.push(Zs(a-xn,xn-c));r.push(l)}const o=new Mt({mass:0,shape:new $w(r,{elementSize:1})});o.quaternion.setFromEuler(-Math.PI/2,0,0),o.position.set(-xn,0,xn),Oe.addBody(o);for(const[a,l,c,h]of[[100,0,1,100],[-100,0,1,100],[0,100,100,1],[0,-100,100,1]])ts(new In(new S(c,5,h)),a,2,l)}const fs={uTime:Ce.uTime,uMask:Ce.uMask,uDeep:{value:new St},uShallow:{value:new St},uFoam:{value:new St},uFoamI:{value:1},uFog:{value:new St},uCam:{value:An.position}};function RT(){const i=e0("water.vert","water.frag",{uniforms:fs,transparent:!0}),t=new Be(new wi(1200,1200).rotateX(-Math.PI/2),i);t.position.y=Ki,t.renderOrder=1,ce.add(t)}const PT=Yu(new bs({side:zn}),"grass"),y0=[];function LT(){const t=new Map,e=.3;for(let s=-xn+1;s<xn-1;s+=e)for(let r=-xn+1;r<xn-1;r+=e){const o=r+$t(-.15,.15),a=s+$t(-.15,.15),l=Js(o,a);if(l.grass<.12||Ln()>Ne(.12,.3,l.grass))continue;const c=Math.floor((o+xn)/20)+","+Math.floor((a+xn)/20)+"|"+(Ln()<.5?0:1);t.has(c)||t.set(c,[]),t.get(c).push(o,a,l.grass)}let n=0;for(const[s,r]of t){const o=r.length/3;n+=o;const a=new Float32Array(o*9),l=new Float32Array(o*9),c=new Float32Array(o*9),h=new Float32Array(o*3),d=new Float32Array(o*3);for(let p=0;p<o;p++){const v=r[p*3],m=r[p*3+1],g=r[p*3+2],x=$t(0,Math.PI),_=$t(.26,.38)*.5,M=$t(.55,.85)*(.75+.25*g),C=Math.cos(x)*_,E=Math.sin(x)*_,T=$t(-.12,.12)*M,I=$t(-.12,.12)*M;a.set([v-C,0,m-E,v+C,0,m+E,v+T,M,m+I],p*9);for(let y=0;y<3;y++)l.set([0,1,0],p*9+y*3),c.set([v,0,m],p*9+y*3);h.set([0,0,1],p*3);const k=Ln();d.set([k,k,k],p*3)}const u=new Ge;u.setAttribute("position",new He(a,3)),u.setAttribute("normal",new He(l,3)),u.setAttribute("aRoot",new He(c,3)),u.setAttribute("aTip",new He(h,1)),u.setAttribute("aRand",new He(d,1)),u.computeBoundingSphere(),u.boundingSphere.radius+=2;const f=new Be(u,PT);f.receiveShadow=!0,f.userData.layer=+s.split("|")[1],y0.push(f),ce.add(f)}return n}const En=[],ou={pink:"#ff8fc4",orange:"#ff8a38",yellow:"#f2b53e",white:"#e2dcec",purple:"#a57aff",red:"#e8503c"},IT=["pink","pink","orange","yellow","white","white","purple","red"];function Ml(i,t,e,n,s,r=125){const o=new St(s),a=new St,l={};o.getHSL(l);const c=Math.round(r*n*n);for(let h=0;h<c;h++){const d=Ln()*2-1,u=Ln()*Math.PI*2,f=Math.sqrt(1-d*d),p=f*Math.cos(u),v=d,m=f*Math.sin(u),g=n*Math.pow(Ln(),.4),x=.28+.72*Mn((v*.5+.5)*.55+g/n*.5,0,1);a.setHSL(l.h+$t(-.025,.025),l.s,l.l).multiplyScalar(x*$t(.9,1.1)),En.push(i+p*g,t+v*g*.85,e+m*g,$t(0,6.28),$t(0,6.28),$t(0,6.28),$t(.7,1.25),a.r,a.g,a.b)}}const yp=rt("#eadcea"),Mp=rt("#5b3b52");function NT(i,t){const e=Hm(IT),n=$t(1,1.45),s=$t(3,4.2)*n,r=e==="white"||e==="pink"||Ln()<.3,o=Es(i,0,t,$t(0,6));X(new ke(.13*n,.24*n,s,6),r?yp:Mp,o,0,s/2,0);const a=X(new ke(.06*n,.1*n,s*.5,5),r?yp:Mp,o,.35*n,s*.65,0);a.rotation.z=-.7;const l=ou[e];Ml(i,s+.7*n,t,$t(1.6,2)*n,l);const c=2+Math.floor(Ln()*3);for(let h=0;h<c;h++){const d=Ln()*6.28,u=$t(.9,1.5)*n;Ml(i+Math.cos(d)*$t(.9,1.5)*n,s+$t(-.6,.6)*n,t+Math.sin(d)*$t(.9,1.5)*n,u,l)}ts(new Wl(.3*n,.3*n,s,8),i,s/2,t)}function DT(i,t){const e=Hm(["#7b8a4a","#8a5a8a","#5a6a8a",ou.pink,ou.orange,"#9a8aa0"]),n=$t(.8,1.4);Ml(i,n*.55,t,n,e,130),Ln()<.5&&Ml(i+$t(-.8,.8),n*.4,t+$t(-.8,.8),n*.7,e,130)}function UT(){const i=En.length/10,t=30,e=new Map;for(let d=0;d<i;d++){const u=Math.floor(En[d*10]/t)+","+Math.floor(En[d*10+2]/t);e.has(u)||e.set(u,[]),e.get(u).push(d)}const n=new wi(.3,.3),s=Yu(new bs({side:zn}),"leaves"),r=new he,o=new Si,a=new yn,l=new P,c=new P,h=new St;for(const d of e.values()){const u=new Ol(n,s,d.length);d.forEach((f,p)=>{const v=f*10;l.set(En[v],En[v+1],En[v+2]),o.setFromEuler(a.set(En[v+3],En[v+4],En[v+5])),c.setScalar(En[v+6]),u.setMatrixAt(p,r.compose(l,o,c)),u.setColorAt(p,h.setRGB(En[v+7],En[v+8],En[v+9]))}),u.computeBoundingSphere(),u.boundingSphere.radius+=1,u.castShadow=!0,u.receiveShadow=!0,ce.add(u)}return i}const au=[];function FT(){const i=[];for(let e=0;e<3e3&&i.length<62;e++){const n=$t(-88,88),s=$t(-88,88),r=Js(n,s);r.d<3||r.paved>.05||r.asphalt>.05||r.grass<.25&&Ln()<.7||di.some(o=>Math.hypot(n-o.x,s-o.z)<o.r+2.5)||i.some(o=>Math.hypot(o.x-n,o.z-s)<5.5)||(i.push({x:n,z:s}),au.push({x:n,z:s,r:3.6}),NT(n,s))}let t=0;for(let e=0;e<3e3&&t<90;e++){const n=$t(-88,88),s=$t(-88,88),r=Js(n,s);r.d<1.5||r.paved>.3||r.asphalt>.05||di.some(o=>Math.hypot(n-o.x,s-o.z)<o.r+1)||i.some(o=>Math.hypot(o.x-n,o.z-s)<2.5)||(DT(n,s),au.push({x:n,z:s,r:1.6}),t++)}return{trees:i.length,bushes:t,leaves:UT()}}function OT(i){const t=new Ol(new sr(.5,0),rt("#7c78f0"),i),e=new he,n=new Si,s=new yn;let r=0;for(let o=0;o<i*6&&r<i;o++){const a=$t(-95,95),l=$t(-95,95),c=Js(a,l);if(c.d<-1.2||c.d>6&&Ln()<.7||c.paved>.5||c.asphalt>.1)continue;const h=$t(.35,1.3);e.compose(new P(a,Zs(a,l)+.1*h,l),n.setFromEuler(s.set($t(0,3),$t(0,3),0)),new P(h,h*.65,h)),t.setMatrixAt(r++,e)}t.count=r,t.castShadow=!0,t.receiveShadow=!0,ce.add(t)}function zT(i){const t=new Ol(new wi(.26,.26).rotateX(-Math.PI/2),rt("#8a2a44",{side:zn}),i),e=new he,n=new Si,s=new yn;let r=0;for(let o=0;o<i*3&&r<i;o++){const a=$t(-100,100),l=$t(-100,100);if(Math.hypot(a,l)>110)continue;const c=Math.max(Zs(a,l),Ki)+.02,h=$t(.6,1.4);e.compose(new P(a,c,l),n.setFromEuler(s.set(0,$t(0,6.28),0)),new P(h,1,h)),t.setMatrixAt(r++,e)}t.count=r,t.receiveShadow=!0,ce.add(t)}class BT extends zu{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new h1(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=r.parse(JSON.parse(a));e&&e(l)},n,s)}parse(t){return new kT(t)}}class kT{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],s=VT(t,e,this.data);for(let r=0,o=s.length;r<o;r++)n.push(...s[r].toShapes());return n}}function VT(i,t,e){const n=Array.from(i),s=t/e.resolution,r=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=r;else{const d=HT(h,s,a,l,e);a+=d.offsetX,o.push(d.path)}}return o}function HT(i,t,e,n,s){const r=s.glyphs[i]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}const o=new g1;let a,l,c,h,d,u,f,p;if(r.o){const v=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,g=v.length;m<g;)switch(v[m++]){case"m":a=v[m++]*t+e,l=v[m++]*t+n,o.moveTo(a,l);break;case"l":a=v[m++]*t+e,l=v[m++]*t+n,o.lineTo(a,l);break;case"q":c=v[m++]*t+e,h=v[m++]*t+n,d=v[m++]*t+e,u=v[m++]*t+n,o.quadraticCurveTo(d,u,c,h);break;case"b":c=v[m++]*t+e,h=v[m++]*t+n,d=v[m++]*t+e,u=v[m++]*t+n,f=v[m++]*t+e,p=v[m++]*t+n,o.bezierCurveTo(d,u,f,p,c,h);break}}return{offsetX:r.ha*t,path:o}}class GT extends Uu{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const s=n.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}const yo=new P;function qn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;yo.copy(t),yo[n]=0,yo.normalize();const c=.5*o/(o+a),h=1-yo.angleTo(i)/l;return Math.sign(yo[e])===1?h*c:a/(o+a)+c+c*(1-h)}class Sl extends Dt{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new P,l=new P,c=new P(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=h.length/6,p=new P,v=.5/s;for(let m=0,g=0;m<h.length;m+=3,g+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/f)){case 0:p.set(1,0,0),u[g+0]=qn(p,l,"z","y",r,n),u[g+1]=1-qn(p,l,"y","z",r,e);break;case 1:p.set(-1,0,0),u[g+0]=1-qn(p,l,"z","y",r,n),u[g+1]=1-qn(p,l,"y","z",r,e);break;case 2:p.set(0,1,0),u[g+0]=1-qn(p,l,"x","z",r,t),u[g+1]=qn(p,l,"z","x",r,n);break;case 3:p.set(0,-1,0),u[g+0]=1-qn(p,l,"x","z",r,t),u[g+1]=1-qn(p,l,"z","x",r,n);break;case 4:p.set(0,0,1),u[g+0]=1-qn(p,l,"x","y",r,t),u[g+1]=1-qn(p,l,"y","x",r,e);break;case 5:p.set(0,0,-1),u[g+0]=qn(p,l,"x","y",r,t),u[g+1]=1-qn(p,l,"y","x",r,e);break}}}const wl=[],id=[],M0=_i("#ffae3a",.5,4.2),WT=rt("#6a64d8"),qT=rt("#4a45a8"),bl=rt("#3b3584"),al=rt("#2e2860"),lu=rt("#8d5f9e"),cu=rt("#5d3b6e");function Sp(i,t,e){const n=Es(i,0,t);X(new Dt(.7,.5,.7),WT,n,0,.25,0),X(new ke(.1,.13,2.8,6),qT,n,0,1.9,0),X(new Dt(.4,.12,.4),bl,n,0,3.28,0),X(new Dt(.42,.55,.42),M0,n,0,3.62,0,!1);for(const[s,r]of[[1,1],[1,-1],[-1,1],[-1,-1]])X(new Dt(.06,.6,.06),al,n,s*.22,3.62,r*.22);if(X(new Wi(.42,.38,4).rotateY(Math.PI/4),bl,n,0,4.08,0),e){const s=new p1(16751162,0,13,1.6);s.position.set(0,3.4,0),n.add(s),id.push(s)}ts(new Wl(.25,.25,3.6,8),i,1.8,t),di.push({x:i,z:t,r:.8}),wl.push(new P(i,0,t))}function XT(i,t){const e=new me;ce.add(e),X(new Dt(.62,.72,.62),M0,e,0,0,0,!1);for(const[s,r]of[[1,1],[1,-1],[-1,1],[-1,-1]])X(new Dt(.1,.8,.1),al,e,s*.32,0,r*.32);X(new Dt(.64,.05,.05),al,e,0,0,.33),X(new Dt(.05,.05,.64),al,e,.33,0,0),X(new Dt(.85,.14,.85),bl,e,0,.44,0),X(new Dt(.85,.12,.85),bl,e,0,-.42,0);const n=new Mt({mass:3,shape:new In(new S(.42,.48,.42)),position:new S(i,.5,t)});n.quaternion.setFromEuler(0,$t(0,3),0),Kr(e,n),wl.length<Vl&&wl.push(new P(i,0,t))}function YT(i,t,e){const n=Es(i,0,t,e);for(let s=0;s<3;s++)X(new Dt(2.6,.08,.22),lu,n,0,.62,-.3+s*.27);for(let s=0;s<2;s++)X(new Dt(2.6,.2,.07),lu,n,0,.95+s*.26,-.44);for(const s of[-1.1,1.1])X(new Dt(.1,.62,.7),cu,n,s,.31,-.05),X(new Dt(.1,.8,.08),cu,n,s,.95,-.46);ts(new In(new S(1.3,.6,.45)),i,.6,t,e),di.push({x:i,z:t,r:1.8})}const jT=Hl(128,128,(i,t)=>{i.fillStyle="#b0563f",i.fillRect(0,0,t,t),i.fillStyle="#8d3f31";for(let e=0;e<5;e++)i.fillRect(16,18+e*20,t-32,4);i.strokeStyle="#5a2330",i.lineWidth=16,i.strokeRect(8,8,t-16,t-16)});function Jc(i,t,e,n=1.25){const s=X(new Dt(n,n,n),new bs({map:jT}));Kr(s,new Mt({mass:6,shape:new In(new S(n/2,n/2,n/2)),position:new S(i,t,e)}))}function qa(i,t,e){const n=new me;ce.add(n),X(new ke(.5,.5,1.2,12),rt(e),n);for(const s of[-.38,.38])X(new ke(.53,.53,.1,12),rt("#2c2640"),n,0,s,0);Kr(n,new Mt({mass:5,shape:new Wl(.5,.5,1.2,10),position:new S(i,.62,t)}))}function S0({x:i,z:t,rot:e,title:n,html:s,label:r,action:o}){const a=Es(i,0,t,e),l=rt("#7a4f8a"),c=rt("#c9304c"),h=rt("#8e1f38");for(const m of[-2,2])X(new Dt(.28,3.4,.28),l,a,m,1.7,0);X(new Dt(4.3,2.3,.2),l,a,0,2.05,0);const d=Hl(512,280,(m,g,x)=>{m.fillStyle="#3d3574",m.fillRect(0,0,g,x);const _=["#e9e4ff","#ffe7d6","#d6ecff","#ffd6ea"];for(let M=0;M<6;M++){m.save(),m.translate(40+M%3*160+$t(0,40),90+Math.floor(M/3)*95+$t(-8,8)),m.rotate($t(-.15,.15)),m.fillStyle=_[M%4],m.fillRect(0,0,$t(80,120),$t(60,80)),m.fillStyle="#00000030";for(let C=0;C<4;C++)m.fillRect(10,14+C*13,$t(40,80),4);m.fillStyle="#c9304c",m.beginPath(),m.arc(8,6,5,0,7),m.fill(),m.restore()}m.fillStyle="#1c1636",m.fillRect(0,0,g,64),m.fillStyle="#d6f58a",m.font='700 52px "Amatic SC", sans-serif',m.textAlign="center",m.textBaseline="middle",m.fillText(n,g/2,34)}),u=new Be(new wi(4,2.1),new bs({map:d,emissive:16777215,emissiveMap:d,emissiveIntensity:.25}));u.position.set(0,2.05,.11),a.add(u);for(const m of[1,-1]){const g=X(new Dt(5,.12,1.2),c,a,0,3.6,m*.45);g.rotation.x=m*.5;for(let x=0;x<5;x++)X(new Dt(5.02,.05,.08),h,g,0,.07,-.5+x*.25,!1)}ts(new In(new S(2.2,1.8,.3)),i,1.8,t,e);const f=new P(0,0,3.2).applyAxisAngle(new P(0,1,0),e).add(a.position),p=new Be(new Fu(.3),new $i({color:new St(2,2,2)}));p.position.set(0,1.4,.35),a.add(p);const v=new Be(new Ou(1.6,1.85,48).rotateX(-Math.PI/2),new $i({color:new St(1.6,1.6,1.6),transparent:!0,opacity:.3,depthWrite:!1}));v.position.set(f.x,.04,f.z),ce.add(v),Ju({pos:f,label:r||n,content:s||null,action:o?()=>kn(o)||console.warn(`board '${n}': no listener for event '${o}'`):null,dia:p,ring:v}),di.push({x:i,z:t,r:3.5},{x:f.x,z:f.z,r:2.5})}function wp(i,t,e){const n=Es(i,0,t,e),s=rt("#b52c44"),r=rt("#4b53d6"),o=rt("#4d48b8"),a=rt("#2c2650");for(const l of[-1,1]){X(new Dt(2.4,.5,.9),s,n,0,.25,l*1.25),X(new Dt(2.4,1.2,.35),s,n,0,.85,l*1.65);for(let c=0;c<2;c++)X(new Dt(.3,1.21,.37),r,n,-.45+c*.9,.86,l*1.65);X(new Dt(2.42,.12,.92),r,n,0,.52,l*1.25)}X(new Dt(2.1,.1,1.3),o,n,0,.92,0),X(new ke(.1,.18,.9,6),a,n,0,.45,0),X(new ke(.09,.09,.35,8),rt("#d0342c"),n,.2,1.14,.1),X(new ke(.09,.09,.35,8),rt("#e6c23a"),n,.42,1.14,-.05),ts(new In(new S(1.25,.7,1.85)),i,.7,t,e),di.push({x:i,z:t,r:3})}function $T(i,t,e){const n=Es(i,0,t,e);X(new Sl(4.4,2.9,.4,3,.35),_i("#e2a4ff",1.3,3.2),n,0,2.1,-.02,!1),X(new Sl(4.1,2.6,.45,3,.3),rt("#2a2650"),n,0,2.1,0);const s=Hl(256,160,(o,a)=>{o.fillStyle="#1a1830",o.fillRect(0,0,a,160),o.fillStyle="#ffffff";for(let l=0;l<4;l++)for(let c=0;c<=l;c++)o.beginPath(),o.arc(a/2+(c-l/2)*30,34+l*30,7,0,7),o.fill()}),r=new Be(new wi(3.7,2.2),new $i({map:s,color:new St(1.6,1.6,1.6)}));r.position.set(0,2.1,.24),n.add(r);for(const o of[-1.5,1.5])X(new Ms(.35,.08,6,16).rotateX(Math.PI/2),_i("#e2a4ff",1.2,3),n,o,.3,.2,!1);X(new Dt(.3,1.2,.3),rt("#2a2650"),n,0,.6,0),ts(new In(new S(2.2,1.6,.35)),i,1.6,t,e),di.push({x:i,z:t,r:3.2})}function KT(i,t,e){const n=Es(i,0,t,e),s=.26,r=9,o=.5,a=X(new Dt(5.5,o,r),rt("#5a4fc0"),n,0,Math.sin(s)*r/2-o/2+.05,0);a.rotation.x=s;for(let h=0;h<4;h++)X(new Dt(5.52,.02,.35),_i("#ff4fb8",1.2,3),a,0,o/2+.01,-r/2+1.2+h*2.2,!1);const l=new Re().setFromEuler(0,e,0).mult(new Re().setFromEuler(s,0,0)),c=new P(0,a.position.y,0).applyAxisAngle(new P(0,1,0),e).add(n.position);ts(new In(new S(2.75,o/2,r/2)),c.x,c.y,c.z,0,l)}function ZT(){const i=_i("#8a90ff",.9,1.8);for(let t=-4;t<=4;t++)for(const e of[-1,1]){const n=t*5,s=Ir.z+e*3.2;X(new Dt(.22,.03,2.6),i,ce,n-1.2,.02,s+e*.2,!1),X(new Dt(1.2,.03,.22),i,ce,n-.7,.02,s+e*1.4,!1)}}function JT(){const i=_0[1];let t=8-i.x,e=31-i.z;const n=Math.hypot(t,e);t/=n,e/=n;let s=n;for(;s>0&&ra(i.x+t*s,i.z+e*s)>.6;)s-=.25;const r=i.x+t*(s+2.5),o=i.z+e*(s+2.5),a=Math.atan2(t,e),l=11,c=r-t*l/2,h=o-e*l/2,d=Es(c,0,h,a);for(let u=0;u<16;u++)X(new Dt(3.4,.14,.62),u%2?lu:rt("#9c6cab"),d,0,.12,-l/2+.35+u*.68);for(let u=0;u<4;u++)for(const f of[-1.5,1.5])X(new ke(.13,.13,1.8,6),cu,d,f,-.6,-l/2+1+u*3);ts(new In(new S(1.7,.1,l/2)),c,.1,h,a),di.push({x:r,z:o,r:3})}async function QT(){const i=await new BT().loadAsync(Vm+"fonts/helvetiker_bold.typeface.json"),t=rt("#a58cff",{flatShading:!1}),e=[...x1].map(r=>{const o=new GT(r,{font:i,size:2.4,depth:.9,curveSegments:6,bevelEnabled:!0,bevelThickness:.08,bevelSize:.06,bevelSegments:2});return o.center(),o.computeBoundingBox(),o}),n=e.map(r=>r.boundingBox.max.x-r.boundingBox.min.x);let s=-(n.reduce((r,o)=>r+o,0)+.35*(e.length-1))/2;e.forEach((r,o)=>{const a=r.boundingBox,l=n[o]/2,c=(a.max.y-a.min.y)/2,h=(a.max.z-a.min.z)/2,d=new Mt({mass:10,shape:new In(new S(l,c,h)),position:new S(s+l,c+.02,-6)});d.sleep(),Kr(X(r,t),d),s+=n[o]+.35})}async function tA(i,t){i(.05,"Menata taman…");const e=await Gl("data/zones.json","json");for(const o of e.boards)S0(o);wp(38,8,.2),wp(44.5,9.5,.2),$T(45,-1.5,-.35);for(const o of[.8,1.9,3.3,-.75,-2.5])YT(Math.cos(o)*10.6,Math.sin(o)*10.6,-o-Math.PI/2);for(let o=0;o<8;o++){const a=o/8*Math.PI*2+.4;Sp(Math.cos(a)*12.2,Math.sin(a)*12.2,o<6)}for(const[o,a]of[[20,5],[-14,16],[2,-27],[5,20],[41,-12],[-38,22],[30,12]])Sp(o,a,id.length<9);for(const[o,a]of[[4,-3.5],[-6,9],[9,8],[35,0],[-19,30],[-5,-14],[47,5],[2,-40]])XT(o,a);di.push({x:0,z:0,r:13}),JT(),await t(),await po(),i(.15,"Mengukir danau…"),AT(),await po(),CT(),RT(),ZT(),KT(-16,Ir.z,Math.PI/2),await po(),i(.35,"Menanam rumput…");const n=LT();await po(),i(.55,"Menanam pohon…");const s=FT();OT(140),zT(3e3),await po(),i(.75,"Menyusun peti & huruf…");const r=1.25;for(let o=0;o<3;o++)for(let a=0;a<3-o;a++)Jc(7.5+(a-(2-o)/2)*(r+.02),r/2+o*r+.01,3.5);Jc(40,r/2,-6),Jc(41.4,r/2,-6.3),qa(-7.5,3,"#e07a2a"),qa(-8.4,4.2,"#4b57c9"),qa(-7.2,4.6,"#e07a2a"),qa(22,-3,"#4b57c9"),wl.slice(0,Vl).forEach((o,a)=>Ce.uLamps.value[a].copy(o));try{await QT()}catch(o){console.warn("font failed, skipping letters",o)}console.log(`world: ${n} grass blades, ${s.trees} trees, ${s.bushes} bushes, ${s.leaves} leaves`)}const eA=i=>Math.round(i*1e3)/1e3;so("props",{save:()=>zi.map(({body:{position:i,quaternion:t}})=>[i.x,i.y,i.z,t.x,t.y,t.z,t.w].map(eA)),load(i){if(i.length!==zi.length){su(zi);return}zi.forEach(({body:t},e)=>{const[n,s,r,o,a,l,c]=i[e];t.position.set(n,s,r),t.quaternion.set(o,a,l,c).normalize(),t.previousPosition.copy(t.position),t.interpolatedPosition.copy(t.position),t.previousQuaternion.copy(t.quaternion),t.interpolatedQuaternion.copy(t.quaternion),t.velocity.setZero(),t.angularVelocity.setZero(),t.wakeUp()})},reset:()=>su(zi)});class w0{constructor(t,e){this.n=t,this.i=0,this.p=[],this.im=new Ol(new sr(1,0),e,t),this.im.frustumCulled=!1,this.im.castShadow=!1;const n=new he().makeScale(0,0,0),s=new St(1,1,1);for(let r=0;r<t;r++)this.p.push({life:1,max:1,pos:new P,vel:new P,size:1,rise:0,rot:0}),this.im.setMatrixAt(r,n),this.im.setColorAt(r,s);ce.add(this.im),this.m=new he,this.q=new Si,this.e=new yn,this.s=new P}spawn(t,e,n,s,r,o=.6){const a=this.i,l=this.p[a];this.i=(this.i+1)%this.n,l.life=0,l.max=s,l.pos.copy(t),l.vel.copy(e),l.size=n,l.rise=o,l.rot=Math.random()*6,this.im.setColorAt(a,r),this.im.instanceColor.needsUpdate=!0}update(t){for(let e=0;e<this.n;e++){const n=this.p[e];if(n.life>=n.max)continue;n.life+=t;const s=Math.min(1,n.life/n.max);n.vel.multiplyScalar(Math.exp(-t*2.2)),n.vel.y+=n.rise*t,n.pos.addScaledVector(n.vel,t);const r=s>=1?0:n.size*Math.pow(Math.max(Math.sin(Math.PI*Math.min(1,s*1.15+.08)),0),.6);this.im.setMatrixAt(e,this.m.compose(n.pos,this.q.setFromEuler(this.e.set(n.rot,n.rot*.7+s,0)),this.s.setScalar(r)))}this.im.instanceMatrix.needsUpdate=!0}}const Po=new w0(260,new bs({flatShading:!0})),bp=new w0(80,new $i),b0={uColor:{value:new St}},hu=[];function nA(){const t=new Float32Array(366),e=new Float32Array(61*2),n=[];for(let a=0;a<=60;a++)if(e[a*2]=e[a*2+1]=a/60,a<60){const l=a*2;n.push(l,l+1,l+2,l+1,l+3,l+2)}const s=new Ge;s.setAttribute("position",new He(t,3)),s.setAttribute("aS",new He(e,1)),s.setIndex(n);const r=e0("wind.vert","wind.frag",{uniforms:{uColor:b0.uColor,uHead:{value:0}},transparent:!0,depthWrite:!1,blending:Go,side:zn}),o=new Be(s,r);return o.frustumCulled=!1,o.visible=!1,ce.add(o),{me:o,t:0,dur:1,N:60}}for(let i=0;i<4;i++)hu.push(nA());function iA(i,t){const e=new P(Ce.uWindDir.value.x,0,Ce.uWindDir.value.y),n=new P(-e.z,0,e.x),s=t.clone().addScaledVector(e,ne(-26,-14)).addScaledVector(n,ne(-14,14)),r=ne(22,32),o=ne(.6,1.8),a=ne(0,6),l=ne(3,6),c=ne(1.2,3.2),h=.07,d=i.me.geometry.attributes.position;for(let u=0;u<=i.N;u++){const f=u/i.N,p=s.clone().addScaledVector(e,f*r).addScaledVector(n,Math.sin(f*l+a)*o);p.y=c+Math.sin(f*l*.7+a)*.6;const v=h*(.4+Math.sin(f*Math.PI));d.setXYZ(u*2,p.x-n.x*v,p.y,p.z-n.z*v),d.setXYZ(u*2+1,p.x+n.x*v,p.y,p.z+n.z*v)}d.needsUpdate=!0,i.t=0,i.dur=ne(2.2,3.4),i.me.visible=!0}let Qc=1;function sA(i,t,e){if(Qc-=i,e&&Qc<=0){const n=hu.find(s=>!s.me.visible);n&&iA(n,t),Qc=ne(.8,2.2)}for(const n of hu)n.me.visible&&(n.t+=i,n.me.material.uniforms.uHead.value=n.t/n.dur*1.5,(n.t>n.dur||!e)&&(n.me.visible=!1))}const uu=(()=>{const t=new Float32Array(900);for(let s=0;s<300;s++)t[s*3]=ne(-80,80),t[s*3+1]=ne(.4,4),t[s*3+2]=ne(-80,80);const e=new Ge;e.setAttribute("position",new He(t,3));const n=new ES(e,new Pm({color:new St(3,1.8,.8),size:.14,transparent:!0,opacity:0,blending:Go,depthWrite:!1}));return ce.add(n),n})(),Ep=new P;function rA(i,t,e){ce.background.copy(t.sky),ce.fog.color.copy(t.sky),fs.uFog.value.copy(t.sky),Ce.uGround.value.copy(t.ground),Ce.uPaved.value.copy(t.paved),Ce.uAsphalt.value.copy(t.asphalt),Ce.uGrassA.value.copy(t.grassA),Ce.uGrassB.value.copy(t.grassB),Ce.uShadowTint.value.copy(t.shadow),Ce.uLeafTint.value.copy(t.leaf),fs.uDeep.value.copy(t.deep),fs.uShallow.value.copy(t.shallow),fs.uFoam.value.copy(t.foam),fs.uFoamI.value=t.foamI,ol.color.copy(t.hemiS),ol.groundColor.copy(t.hemiG),ol.intensity=t.hemiI,Qe.color.copy(t.sunC),Qe.intensity=t.sunI,Ce.uLampI.value=t.lamp,Ce.uHeadI.value=t.lamp,$r.strength=t.bloom,b0.uColor.value.copy(t.wind).multiplyScalar(t.windI*.6),uu.material.opacity=.9*Ne(.4,.9,t.lamp);for(const a of id)a.intensity=22*t.lamp;for(const a of n0)a.m.color.copy(a.base).multiplyScalar(Ue(a.dayI,a.nightI,t.lamp));const n=Math.sin((i-6)/12*Math.PI),s=n>.02,r=s?(i-6)/12*Math.PI:(i-18+24)%24/12*Math.PI,o=Math.max(s?Math.asin(Mn(n,0,1)):Math.asin(Mn(-n,0,1))*.6+.45,.38);Ep.set(-Math.cos(r)*Math.cos(o),Math.sin(o),-.45*Math.cos(o)-.3).normalize(),Qe.position.copy(e).addScaledVector(Ep,60),Qe.target.position.copy(e)}function oA(i){uu.position.y=Math.sin(i*.7)*.3,uu.rotation.y=Math.sin(i*.05)*.03}let kt,fn,Mo,So,wo,Ds,bo,Xa=!1,Tp=0;const Pe={init(){if(kt)return;kt=new(window.AudioContext||window.webkitAudioContext),fn=kt.createGain(),fn.gain.value=.55,fn.connect(kt.destination),Ds=kt.createBiquadFilter(),Ds.type="lowpass",Ds.frequency.value=500,wo=kt.createGain(),wo.gain.value=0,Mo=kt.createOscillator(),Mo.type="sawtooth",So=kt.createOscillator(),So.type="square",Mo.connect(Ds),So.connect(Ds),Ds.connect(wo).connect(fn),Mo.start(),So.start(),bo=kt.createBuffer(1,kt.sampleRate*.3,kt.sampleRate);const i=bo.getChannelData(0);for(let t=0;t<i.length;t++)i[t]=(Math.random()*2-1)*Math.pow(1-t/i.length,3)},engine(i,t,e=!0){if(!kt)return;if(!e){wo.gain.setTargetAtTime(0,kt.currentTime,.25);return}const n=36+i*4.2+t*16,s=kt.currentTime;Mo.frequency.setTargetAtTime(n,s,.08),So.frequency.setTargetAtTime(n*.5,s,.08),Ds.frequency.setTargetAtTime(320+i*38+t*280,s,.1),wo.gain.setTargetAtTime(.045+t*.05+Math.min(i,25)*.002,s,.1)},hit(i){if(!kt||performance.now()-Tp<90)return;Tp=performance.now();const t=kt.createBufferSource();t.buffer=bo,t.playbackRate.value=ne(.5,.9);const e=kt.createBiquadFilter();e.type="lowpass",e.frequency.value=700+i*1200;const n=kt.createGain();n.gain.value=.2+i*.6,t.connect(e).connect(n).connect(fn),t.start()},horn(){if(!kt)return;const i=kt.currentTime,t=kt.createGain();t.gain.setValueAtTime(1e-4,i),t.gain.exponentialRampToValueAtTime(.18,i+.02),t.gain.exponentialRampToValueAtTime(1e-4,i+.45),t.connect(fn);for(const e of[392,494]){const n=kt.createOscillator();n.type="square",n.frequency.value=e,n.connect(t),n.start(i),n.stop(i+.5)}},step(i=0){if(!kt)return;const t=kt.currentTime,e=kt.createBufferSource();e.buffer=bo,e.playbackRate.value=ne(1.4,2.1);const n=kt.createBiquadFilter();n.type="lowpass",n.frequency.value=420+i*380;const s=kt.createGain();s.gain.setValueAtTime(.09+i*.1,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.09),e.connect(n).connect(s).connect(fn),e.start(t),e.stop(t+.12)},jump(){if(!kt)return;const i=kt.currentTime,t=kt.createOscillator(),e=kt.createGain();t.type="triangle",t.frequency.setValueAtTime(320,i),t.frequency.exponentialRampToValueAtTime(640,i+.12),e.gain.setValueAtTime(.09,i),e.gain.exponentialRampToValueAtTime(1e-4,i+.16),t.connect(e).connect(fn),t.start(i),t.stop(i+.18)},door(i){if(!kt)return;const t=kt.currentTime,e=kt.createBufferSource();e.buffer=bo,e.playbackRate.value=i?1.6:.9;const n=kt.createBiquadFilter();n.type="bandpass",n.frequency.value=i?1800:700,n.Q.value=1.2;const s=kt.createGain();if(s.gain.value=i?.25:.4,e.connect(n).connect(s).connect(fn),e.start(t),e.stop(t+.15),i)return;const r=kt.createOscillator(),o=kt.createGain();r.type="sine",r.frequency.setValueAtTime(130,t),r.frequency.exponentialRampToValueAtTime(60,t+.15),o.gain.setValueAtTime(.35,t),o.gain.exponentialRampToValueAtTime(1e-4,t+.2),r.connect(o).connect(fn),r.start(t),r.stop(t+.22)},pop(){if(!kt)return;const i=kt.currentTime,t=kt.createOscillator(),e=kt.createGain();t.type="sine",t.frequency.setValueAtTime(300,i),t.frequency.exponentialRampToValueAtTime(900,i+.15),e.gain.setValueAtTime(.2,i),e.gain.exponentialRampToValueAtTime(1e-4,i+.25),t.connect(e).connect(fn),t.start(i),t.stop(i+.3)},pick(){if(!kt)return;const i=kt.currentTime,t=kt.createOscillator(),e=kt.createGain();t.type="triangle",t.frequency.setValueAtTime(420,i),t.frequency.exponentialRampToValueAtTime(1100,i+.1),e.gain.setValueAtTime(.12,i),e.gain.exponentialRampToValueAtTime(1e-4,i+.16),t.connect(e).connect(fn),t.start(i),t.stop(i+.18)},stash(){if(!kt)return;const i=kt.currentTime;[[660,0],[990,.08]].forEach(([t,e])=>{const n=kt.createOscillator(),s=kt.createGain();n.type="square",n.frequency.value=t,s.gain.setValueAtTime(1e-4,i+e),s.gain.exponentialRampToValueAtTime(.06,i+e+.01),s.gain.exponentialRampToValueAtTime(1e-4,i+e+.14),n.connect(s).connect(fn),n.start(i+e),n.stop(i+e+.16)})},drop(){if(!kt)return;const i=kt.currentTime,t=kt.createOscillator(),e=kt.createGain();t.type="sine",t.frequency.setValueAtTime(220,i),t.frequency.exponentialRampToValueAtTime(90,i+.12),e.gain.setValueAtTime(.22,i),e.gain.exponentialRampToValueAtTime(1e-4,i+.16),t.connect(e).connect(fn),t.start(i),t.stop(i+.18)},toggle(){return kt?(Xa=!Xa,fn.gain.value=Xa?0:.55,Xa):!1}},oe=new Mt({mass:150});oe.addShape(new In(new S(1.9,.45,1)),new S(0,.3,0));oe.allowSleep=!1;oe.angularDamping=.5;const ai=new Tw({chassisBody:oe}),Lo=.6,Ap={radius:Lo,directionLocal:new S(0,-1,0),suspensionStiffness:28,suspensionRestLength:.45,frictionSlip:2.2,dampingRelaxation:2.5,dampingCompression:4.5,maxSuspensionForce:1e5,rollInfluence:.05,axleLocal:new S(0,0,1),chassisConnectionPointLocal:new S,maxSuspensionTravel:.4,customSlidingRotationalSpeed:-30,useCustomSlidingRotationalSpeed:!0};for(const[i,t]of[[-1.35,1.1],[-1.35,-1.1],[1.35,1.1],[1.35,-1.1]])Ap.chassisConnectionPointLocal.set(i,0,t),ai.addWheel(Ap);ai.addToWorld(Oe);const Vt=new me;ce.add(Vt);const ei={},si=new me;si.position.set(-.52,0,-1.1);Vt.add(si);const E0=i=>{si.rotation.y=i*1.15};{const i=rt("#c8243f"),t=rt("#9c1a33"),e=rt("#2a2238"),n=rt("#3d3250"),s=rt("#1b1734"),r=(c,h,d,u=.12)=>new Sl(c,h,d,2,u);X(new Dt(3.6,.3,1.4),e,Vt,0,-.12,0),X(r(4.1,.78,2.15),i,Vt,0,.36,0),X(r(1.6,.14,1.5,.06),t,Vt,-1.2,.78,0);for(const c of[-.35,0,.35])X(new Dt(.7,.05,.12),e,Vt,-1.2,.86,c);X(r(2.15,.78,1.96,.1),i,Vt,.48,1.12,0),X(new Dt(.08,.52,1.72),s,Vt,-.6,1.14,0),X(new Dt(1.75,.46,2),s,Vt,.52,1.16,0),X(new Dt(.08,.46,1.6),s,Vt,1.57,1.16,0),X(new Dt(2,.08,1.85),n,Vt,.45,1.55,0);for(const c of[-.3,.3,.9,1.3])X(new Dt(.08,.1,1.9),e,Vt,c,1.63,0);const o=_i("#ffb428",2.2,4.5);for(let c=0;c<5;c++)X(new Dt(.12,.12,.16),o,Vt,-.52,1.62,-.66+c*.33,!1);X(r(.38,.42,2.35,.08),e,Vt,-2.14,.05,0),X(new Dt(.06,.11,1.7),o,Vt,-2.34,.1,0,!1),X(new Dt(.05,.3,.9),e,Vt,-2.06,.46,0),ei.head=_i("#fff4d0",1.2,5);for(const c of[1,-1])X(new Dt(.06,.2,.34),ei.head,Vt,-2.07,.5,c*.75,!1);X(r(.36,.42,2.3,.08),e,Vt,2.13,.05,0),ei.brake=new $i({color:new St(2,.1,.2)});for(const c of[1,-1])X(new Dt(.06,.22,.3),ei.brake,Vt,2.07,.52,c*.8,!1);X(new ke(.46,.46,.3,14).rotateZ(Math.PI/2),e,Vt,2.22,.95,0),X(new ke(.24,.24,.32,8).rotateZ(Math.PI/2),n,Vt,2.24,.95,0);const a=_i("#ff4fc0",1.5,3.2);for(let c=0;c<5;c++)for(const h of[1,-1])X(new Dt(.2,.05,.02),a,Vt,-1+c*.4,.56,h*1.085,!1);X(r(1.08,.74,.07,.03),i,si,.54,.37,0),X(new Dt(1,.44,.05),s,si,.56,1.13,0),X(new Dt(1.08,.08,.07),i,si,.54,1.39,0),X(new Dt(.07,.5,.07),i,si,.035,1.12,0),X(new Dt(.2,.06,.05),e,si,.85,.62,-.05);for(const c of[.32,.72])X(new Dt(.2,.05,.02),a,si,c,.56,-.045,!1);const l=new Wi(.12,.2,3).rotateZ(Math.PI/2).rotateX(Math.PI/2);for(const c of[-.4,.4]){const h=X(l,a,Vt,-1.2,.87,c,!1);h.rotation.y=Math.PI/2}for(const c of[1,-1]){X(new Dt(3,.14,.18),e,Vt,0,-.14,c*1.1);for(const h of[-1.35,1.35])X(r(1.5,.28,.42,.08),e,Vt,h,.5,c*1.02)}X(new ke(.09,.09,.5,8).rotateZ(Math.PI/2),n,Vt,2.2,-.15,-.72),ei.spot=new d1(16773320,0,30,.6,.6,1.3),ei.spot.position.set(-2.1,.4,0),ei.spot.target.position.set(-10,-1.4,0),Vt.add(ei.spot,ei.spot.target)}const du=[];{const i=Array.from({length:16},(a,l)=>{const c=l/16*Math.PI*2;return new Dt(.14,l%2?.5:.36,.2).rotateY(-c).translate(Math.cos(c)*(Lo-.06),l%2?0:.07,Math.sin(c)*(Lo-.06))}),t=i0([new ke(Lo-.07,Lo-.07,.5,18),...i]).rotateX(Math.PI/2),e=new ke(.32,.32,.52,8).rotateX(Math.PI/2),n=new ke(.12,.12,.56,6).rotateX(Math.PI/2),s=rt("#262036"),r=rt("#8a86cc"),o=rt("#c8243f");for(let a=0;a<4;a++){const l=new me;X(t,s,l),X(e,r,l),X(n,o,l),Vt.add(l),du.push(l)}}Yl(Vt,ju(Vt));Yl(si,ju(si));const aA=new P(2.48,-.15,-.72);oe.addEventListener("collide",i=>{const t=Math.abs(i.contact.getImpactVelocityAlongNormal());t>1.5&&i.body.mass>0&&!i.body.isPlayer&&Pe.hit(Math.min(1,t/12))});function Ko(i,t){oe.position.set(i.x,i.y,i.z),oe.quaternion.setFromEuler(0,t,0),oe.velocity.setZero(),oe.angularVelocity.setZero(),oe.previousPosition.copy(oe.position),oe.interpolatedPosition.copy(oe.position),oe.previousQuaternion.copy(oe.quaternion),oe.interpolatedQuaternion.copy(oe.quaternion)}const T0=()=>{Ko(Yr,Yr.yaw),Pe.pop()},Kl=()=>oe.quaternion.vmult(new S(0,1,0)).y<.5;function Zl(){const i=oe.quaternion.vmult(new S(-1,0,0)),t=oe.position.clone();t.y=Math.max(t.y,0)+1.6,Ko(t,Math.atan2(i.z,-i.x))}Ko(Yr,Yr.yaw);const Cp=i=>Math.round(i*1e3)/1e3;so("car",{save:()=>{const i=oe.position,t=oe.quaternion;return{p:[i.x,i.y,i.z].map(Cp),q:[t.x,t.y,t.z,t.w].map(Cp)}},load({p:i,q:t}){Ko({x:i[0],y:i[1]+.05,z:i[2]},0),oe.quaternion.set(t[0],t[1],t[2],t[3]).normalize(),oe.previousQuaternion.copy(oe.quaternion),oe.interpolatedQuaternion.copy(oe.quaternion)},reset:()=>Ko(Yr,Yr.yaw)});const en={throttle:0,braking:!1,boosting:!1,speed:0,fwdSpeed:0,inWater:!1,engineOn:!0};let Ya=0,ja=0;const lA={fwd:0,back:0,left:0,right:0,brake:0,boost:0};function cA(i,t,e,n=!0){const s=e?t:lA,o=-oe.vectorToLocalFrame(oe.velocity).x,a=oe.velocity.length(),l=!!(s.boost&&s.fwd),c=l?30:19;let h=0;s.fwd&&o<c&&(h=-(l?1250:780)*(o<4?1.25:1)),s.back&&(h=o>1?0:o>-9?520:0);const d=!!(s.brake||s.back&&o>1);ai.applyEngineForce(h,2),ai.applyEngineForce(h,3);const u=d?13:h===0?e?1.1:3:0;for(let m=0;m<4;m++)ai.setBrake(u,m);const f=(s.left-s.right)*Ue(.62,.24,Mn(a/26,0,1));Ya+=(f-Ya)*(1-Math.exp(-i*(f===0?9:6))),ai.setSteeringValue(Ya,0),ai.setSteeringValue(Ya,1);const p=oe.position.y<Ki+.85;oe.linearDamping=p?.45:.02,Object.assign(en,{throttle:s.fwd||s.back?1:0,braking:d,boosting:l,speed:a,fwdSpeed:o,inWater:p,engineOn:n}),Pe.engine(a,en.throttle,n),ja=oe.quaternion.vmult(new S(0,1,0)).y<.3&&a<2?ja+i:0,ja>2&&(Zl(),ja=0),oe.position.y<-6&&T0()}const A0=[!1,!1,!1,!1],th=new Re,$a=new S,Rp=new Re,eh=new P;function hA(){Vt.position.copy(oe.interpolatedPosition),Vt.quaternion.copy(oe.interpolatedQuaternion),oe.quaternion.conjugate(th);for(let i=0;i<4;i++){A0[i]=ai.wheelInfos[i].isInContact,ai.updateWheelTransform(i);const t=ai.wheelInfos[i].worldTransform;t.position.vsub(oe.position,$a),th.vmult($a,$a),th.mult(t.quaternion,Rp),du[i].position.copy($a),du[i].quaternion.copy(Rp)}Ce.uCarPos.value.copy(Vt.position),eh.set(-1,0,0).applyQuaternion(Vt.quaternion),Ce.uCarDir.value.set(eh.x,eh.z).normalize()}let nh=0,ih=0,sh=0;const uA=new P,dA=new P,Eo=new St;function fA(i,t){const e=uA.copy(aA).applyQuaternion(Vt.quaternion).add(Vt.position),n=dA.set(1,0,0).applyQuaternion(Vt.quaternion);for(nh+=i*(en.throttle?26:en.engineOn?5:0);nh>1;){nh--;const r=en.throttle?.62:.75;Po.spawn(e,n.clone().multiplyScalar(ne(1.2,2.5)).add(new P(ne(-.3,.3),ne(.2,.6),ne(-.3,.3))),ne(.12,.2)*(en.throttle?1.5:1),ne(.7,1.2),Eo.setRGB(r,r,r*1.08),.9)}if(en.boosting)for(ih+=i*40;ih>1;)ih--,bp.spawn(e,n.clone().multiplyScalar(ne(3,5)),ne(.12,.22),ne(.18,.3),Eo.setRGB(3.2,ne(.5,1.2),2.4),0);if(sh+=i*30,sh>1){sh=0;for(let r=0;r<4;r++){if(!A0[r])continue;const o=ai.wheelInfos[r],a=o.raycastResult.hitPointWorld,l=new P(a.x,a.y,a.z),c=o.skidInfo<.7||r>=2&&en.throttle&&en.speed<6&&Math.abs(en.fwdSpeed)<3;if(a.y<Ki-.05&&en.speed>1.5)Po.spawn(l.setY(Ki+.1),new P(ne(-1.5,1.5),ne(2.5,4.5),ne(-1.5,1.5)),ne(.15,.28),ne(.4,.7),Eo.copy(fs.uFoam.value).multiplyScalar(.8).addScalar(.2),-3);else if((c||en.speed>9)&&r>=2){const h=Js(l.x,l.z);if(h.paved>.6&&!c)continue;Eo.copy(h.asphalt>.5?Ce.uAsphalt.value:Ce.uGround.value).multiplyScalar(1.15),Po.spawn(l.setY(l.y+.15),new P(ne(-.6,.6),ne(.5,1.4),ne(-.6,.6)),ne(.18,.32),ne(.5,.9),Eo,.3)}}}Po.update(i),bp.update(i);const s=en.braking||en.fwdSpeed<-.5&&en.throttle;ei.brake.color.setRGB(s?5:1.4+1.2*t.lamp,.08,.15),ei.spot.intensity=70*t.lamp}const Zo=.64,ht={skin:rt("#f7c6a3"),blush:rt("#ff8e8e"),hair:rt("#3a2520"),eye:rt("#2a1712"),iris:rt("#dc972a"),white:rt("#fffaf0"),mouth:rt("#8a1f2c"),tongue:rt("#ff7a7a"),capCream:rt("#f1e7cf"),capTeal:rt("#1d98a6"),brim:rt("#f2b026"),leather:rt("#7b4a2b"),gold:rt("#e6b53a"),leaf:rt("#5fbf3a"),jacket:rt("#c9e04e"),jacketCream:rt("#f3eed8"),trim:rt("#1d98a6"),hood:rt("#f3a531"),shirt:rt("#fbf7ee"),scarf:rt("#e2472f"),denim:rt("#3d63b3"),denimD:rt("#2f4f92"),cuff:rt("#aaa5bf"),sock:rt("#f5f1ea"),boot:rt("#8b5a33"),toe:rt("#c98d4f"),sole:rt("#3b2b2e"),lace:rt("#ef6a2e"),fur:rt("#efe2c4"),glove:rt("#6e4428"),whistle:rt("#f7d22c"),wood:rt("#c98b45"),woodD:rt("#9a6431"),basket:rt("#b27a3e"),tomato:rt("#e8352c"),cloth:new bs({map:Hl(16,16,i=>{i.fillStyle="#fff",i.fillRect(0,0,16,16),i.fillStyle="#e2472f";for(let t=0;t<4;t++)for(let e=0;e<4;e++)(t+e)%2&&i.fillRect(t*4,e*4,4,4)})})},Cn=(i,t,e,n,s=2)=>new Sl(i,t,e,s,n),on=(i,t,e,n=8)=>new ke(i,t,e,n),be=(i,t,e)=>new Dt(i,t,e),te=(i,t,e,n,s,r)=>X(i,t,e,n,s,r,!1),le=new me;ce.add(le);const sd=new me;le.add(sd);const lt={hips:new me,spine:new me,head:new me};sd.add(lt.hips);lt.hips.position.y=Zo;lt.hips.add(lt.spine);lt.spine.position.y=.1;lt.spine.add(lt.head);lt.head.position.y=.41;X(Cn(.36,.2,.26,.07),ht.denim,lt.hips,0,.02,0);X(be(.385,.055,.285),ht.leather,lt.hips,0,.1,0);te(be(.075,.06,.02),ht.gold,lt.hips,0,.1,.147);{const i=new me;i.position.set(-.215,.02,.02),lt.hips.add(i),X(Cn(.09,.17,.15,.03),ht.leather,i,0,0,0),te(be(.095,.05,.155),ht.woodD,i,0,.06,0),te(on(.02,.02,.12,6),ht.scarf,i,0,.1,.035),te(on(.018,.018,.11,6),ht.hood,i,0,.1,-.03)}lt.bucket=new me;lt.bucket.position.set(-.09,.07,.16);lt.hips.add(lt.bucket);{te(new Ms(.025,.008,4,10),ht.gold,lt.bucket,0,0,0),te(new Ms(.06,.007,4,10,Math.PI),ht.leather,lt.bucket,0,-.07,.03),X(on(.065,.055,.1,10),ht.wood,lt.bucket,0,-.1,.03);for(const t of[-.07,-.13])te(on(.068,.068,.014,10),ht.woodD,lt.bucket,0,t,.03);const i=te(be(.045,.03,.01),ht.leaf,lt.bucket,0,-.1,.095);i.rotation.z=.5}lt.basket=new me;lt.basket.position.set(.23,.08,.02);lt.hips.add(lt.basket);{X(on(.11,.085,.13,10),ht.basket,lt.basket,0,-.1,0),te(new Ms(.11,.015,4,12).rotateX(Math.PI/2),ht.woodD,lt.basket,0,-.035,0);for(const[t,e]of[[.03,.03],[-.04,.01],[.01,-.05]])X(new sr(.045,0),ht.tomato,lt.basket,t,-.01,e);for(const t of[0,2,4])te(be(.07,.012,.03),ht.leaf,lt.basket,Math.cos(t)*.04,.03,Math.sin(t)*.04).rotation.set(.4,t,.5);te(be(.1,.07,.012),ht.cloth,lt.basket,.06,-.06,.07).rotation.set(.1,.7,-.3)}function C0(i){const t=new me;t.position.set(.105*i,-.02,0),lt.hips.add(t),X(on(.115,.1,.27),ht.denim,t,0,-.12,0);const e=new me;e.position.y=-.24,t.add(e),X(on(.1,.1,.1),ht.denim,e,0,-.03,0),X(on(.122,.122,.085),ht.cuff,e,0,-.11,0),X(on(.066,.066,.14),ht.sock,e,0,-.2,0),te(on(.069,.069,.025),ht.scarf,e,0,-.17,0);const n=new me;n.position.y=-.38,e.add(n),X(Cn(.19,.06,.3,.025),ht.sole,n,0,.03,.035),X(Cn(.18,.2,.24,.06),ht.boot,n,0,.15,0),X(Cn(.186,.11,.13,.05),ht.toe,n,0,.1,.11),X(on(.1,.1,.05,10),ht.fur,n,0,.26,-.01);for(let s=0;s<3;s++)te(be(.1,.016,.02),ht.lace,n,0,.17+s*.035,.122);return te(be(.06,.07,.02),ht.brim,n,0,.2,-.125),{hip:t,knee:e,foot:n}}lt.L=C0(1);lt.R=C0(-1);const Io=[[.15,0],[.155,.93],[.2,.98],[.26,1],[.33,1],[.38,.93],[.41,.78],[.43,.5],[.44,0]],El=.21,fu=.14,rd=i=>{for(let t=1;t<Io.length;t++)if(i<=Io[t][0]){const[e,n]=Io[t-1],[s,r]=Io[t];return Ue(n,r,(i-e)/(s-e))}return 0};function cs(i,t,e,n,s=1,r=-Math.PI,o=Math.PI,a=!1){const l=[e,...Io.map(d=>d[0]).filter(d=>d>e&&d<n),n],c=Math.max(3,Math.ceil((o-r)/(Math.PI*2)*28)),h=new zl(l.map(d=>new st(rd(d)*s,d)),c,r,o-r).scale(El,1,fu);return X(h,i,t,0,0,0,a)}function R0(i,t,e,n=1){const s=rd(e)*n;return i.position.set(El*s*Math.sin(t),e,fu*s*Math.cos(t)),i.rotation.y=Math.atan2(Math.sin(t)/El,Math.cos(t)/fu),i}const pA=(i,t,e,n=0)=>(R0(i,Math.asin(Mn(t/(El*rd(e)),-1,1)),e),i.position.z+=n,i);{const i=lt.spine;X(Cn(.33,.3,.23,.08,4),ht.denim,i,0,.12,0),cs(ht.jacketCream,i,.15,.44,1,-Math.PI,Math.PI,!0),cs(ht.trim,i,.155,.195,1.06);for(const n of[1,-1]){cs(ht.jacket,i,.2,.4,1.05,...n>0?[.47,1.4]:[-1.4,-.47]),cs(ht.denim,i,.29,.41,1.05,...n>0?[.26,.44]:[-.44,-.26]);const s=te(be(.05,.12,.03),ht.hood,i,n*.1,.4,.105);s.rotation.z=n*.4}cs(ht.shirt,i,.21,.41,1.025,-.39,.39),cs(ht.denim,i,.195,.315,1.05,-.42,.42),cs(ht.denimD,i,.205,.275,1.075,-.24,.24),te(Cn(.05,.065,.035,.015),ht.whistle,i,.01,.29,.16);for(const n of[1,-1]){const s=te(be(.01,.13,.01),ht.eye,i,n*.035,.36,.145);s.rotation.z=n*.45}const t=new me;i.add(pA(t,-.15,.35,.012)),te(be(.05,.05,.014),ht.shirt,t,0,0,0),te(be(.02,.02,.012),ht.scarf,t,0,.032,0),te(be(.015,.012,.012),ht.whistle,t,.024,0,.005),te(be(.08,.05,.05),ht.scarf,i,0,.405,.13),te(new Wi(.07,.11,3).rotateX(Math.PI),ht.scarf,i,0,.35,.15);const e=X(new Ms(.13,.042,6,18).rotateX(Math.PI/2),ht.scarf,i,0,.415,-.005);e.scale.z=.8;for(const[n,s,r,o]of[[3,3.58,.17,1.08],[2.52,3,.23,1.12]]){cs(ht.scarf,i,r,.41,o,n,s,!0);for(let a=0;a<5;a++)R0(te(be(.014,.045,.01),ht.scarf,i),Ue(n+.04,s-.04,a/4),r-.018,o)}}function P0(i){const t=new me;t.position.set(.225*i,.37,0),lt.spine.add(t),X(Cn(.15,.17,.16,.065,4),ht.jacket,t,.01*i,-.06,0),X(on(.085,.085,.04,10),ht.trim,t,.01*i,-.155,0),X(on(.048,.048,.08),ht.skin,t,.01*i,-.2,0);const e=new me;return e.position.set(.01*i,-.22,0),t.add(e),X(on(.048,.045,.1),ht.skin,e,0,-.04,0),X(Cn(.105,.06,.105,.02),ht.glove,e,0,-.1,0),X(Cn(.095,.11,.09,.035),ht.glove,e,0,-.17,.005),te(be(.05,.045,.012),ht.toe,e,0,-.165,.052),{sh:t,el:e}}lt.LA=P0(1);lt.RA=P0(-1);{const i=lt.head;X(on(.065,.075,.09),ht.skin,i,0,0,0),X(Cn(.4,.37,.36,.11),ht.skin,i,0,.2,.01);for(const a of[1,-1])X(Cn(.05,.08,.06,.02),ht.skin,i,a*.2,.18,0);lt.eyes=new me,lt.eyes.position.set(0,.19,.192),i.add(lt.eyes);for(const a of[1,-1]){const l=a*.085;te(be(.075,.1,.012),ht.eye,lt.eyes,l,0,0),te(be(.057,.055,.012),ht.iris,lt.eyes,l,-.018,.003),te(be(.026,.026,.01),ht.white,lt.eyes,l+.014,.022,.007),te(be(.012,.012,.01),ht.white,lt.eyes,l-.018,-.03,.007);const c=te(be(.092,.018,.014),ht.eye,lt.eyes,l+a*.004,.052,.002);c.rotation.z=a*.15;const h=te(be(.07,.014,.01),ht.hair,i,l,.285,.19);h.rotation.z=-a*.12;const d=te(new Oo(.032,10),ht.blush,i,a*.135,.12,.188);d.scale.y=.55}lt.mouth=new me,lt.mouth.position.set(0,.095,.19),i.add(lt.mouth),te(new Oo(.045,12,Math.PI,Math.PI),ht.mouth,lt.mouth,0,0,.002).scale.x=1.2,te(new Oo(.026,10,Math.PI,Math.PI),ht.tongue,lt.mouth,0,-.02,.004),te(be(.08,.012,.004),ht.white,lt.mouth,0,-.005,.004),X(new qs(.25,16,6,0,Math.PI*2,0,Math.PI/2),ht.hair,i,0,.3,-.005).scale.set(.95,.75,.9),X(Cn(.44,.28,.14,.07),ht.hair,i,0,.21,-.14);for(let a=-3;a<=3;a++){const l=(a%2?.1:.14)-Math.abs(a)*.008;X(new Wi(.045,l,4).rotateX(Math.PI),ht.hair,i,a*.055,.09-l/2,-.17+Math.abs(a)*.008).rotation.set(-.25,0,-a*.05)}X(be(.42,.06,.06),ht.hair,i,0,.36,.17);for(let a=-2;a<=2;a++){const l=X(new Wi(.05,.13,4).rotateX(Math.PI),ht.hair,i,a*.08,.31,.18);l.rotation.z=-a*.18}for(const a of[1,-1]){X(Cn(.05,.22,.24,.02),ht.hair,i,a*.205,.22,.02);const l=X(new Wi(.04,.12,4).rotateX(Math.PI),ht.hair,i,a*.205,.09,.1);l.rotation.z=a*.2}const e=new me;e.position.set(0,.395,-.01),e.rotation.set(-.12,.55,-.1),i.add(e);const n=(a,l)=>{X(new qs(.24,12,6,l,Math.PI,0,Math.PI/2),a,e).scale.set(1,.62,1.05)};n(ht.capCream,0),n(ht.capTeal,Math.PI);const s=X(new ke(.21,.21,.025,14,1,!1,-Math.PI/2,Math.PI),ht.brim,e,0,.005,.1);s.rotation.x=.1,te(be(.02,.045,.2),ht.leather,e,-.236,.05,-.07),te(be(.022,.05,.04),ht.gold,e,-.246,.05,-.01);const r=te(be(.1,.07,.01),ht.leather,e,0,.1,.228);r.rotation.x=-.5;const o=te(be(.06,.035,.01),ht.leaf,r,0,0,.007);o.rotation.z=.5,te(on(.03,.03,.02,8),ht.capTeal,e,0,.175,0),te(new sr(.022,0),ht.brim,e,.06,.18,-.04),te(on(.008,.008,.06,4),ht.leaf,e,.06,.21,-.04);for(const a of[1,-1]){const l=te(new qs(.03,6,4),ht.leaf,e,.06+a*.03,.24,-.04);l.scale.set(1.4,.35,.8),l.rotation.z=a*.45}}o0(le,[lt.hips,lt.spine,lt.head,lt.eyes,lt.mouth,lt.bucket,lt.basket,lt.L.hip,lt.L.knee,lt.L.foot,lt.R.hip,lt.R.knee,lt.R.foot,lt.LA.sh,lt.LA.el,lt.RA.sh,lt.RA.el]);const mA=3.4,gA=7,vA=6.2,ee=new Mt({mass:45,fixedRotation:!0,linearDamping:0});ee.addShape(new Wu(.3),new S(0,.3,0));ee.addShape(new Wu(.28),new S(0,.95,0));ee.collisionFilterGroup=2;ee.allowSleep=!1;ee.isPlayer=!0;Oe.addBody(ee);ee.material=new na("player");function xA(){const i=Oe.defaultMaterial;for(const t of Oe.bodies)t.material||(t.material=i);Oe.addContactMaterial(new ea(ee.material,i,{friction:0,restitution:0}))}const L0={collisionFilterMask:1,skipBackfaces:!0},zr=new js,Tl=new S,Al=new S;function I0(i,t,e){return Tl.set(i,e,t),Al.set(i,e-8,t),zr.reset(),Oe.raycastClosest(Tl,Al,L0,zr)?zr.hitPointWorld.y:Zs(i,t)}const Ht={mode:"foot",wantExit:!1},G={t:0,yaw:Pn.yaw,phase:0,hs:0,grounded:!0,lastGround:0,jumpBuf:-1,prevJump:0,airVy:0,stretch:0,squash:0,airW:0,cheer:0,carry:!1,carryW:0,idleT:0,blink:3,blinkT:0,inWater:!1,path:[],seqT:0,from:new P,to:new P,door:0,doorGoal:0},Qs=()=>Ht.mode==="foot"||Ht.mode==="toCar";function od(i,t,e){ee.position.set(i,I0(i,t,6)+.02,t),ee.velocity.setZero(),ee.previousPosition.copy(ee.position),ee.interpolatedPosition.copy(ee.position),G.yaw=e,le.position.copy(ee.position),le.rotation.y=e}function N0(){Qs()&&(Ht.mode="foot",od(Pn.x,Pn.z,Pn.yaw),Pe.pop())}const _A=()=>{Qs()&&(G.cheer=1.8)},Qr=new me;le.updateMatrixWorld(!0);Qr.position.set(0,new Qi().setFromObject(lt.head).max.y-le.position.y-Zo-.1+.02,.04);lt.spine.add(Qr);function D0(i){i!==G.carry&&(G.carry=i,G.cheer=0,G.idleT=0,Qs()&&(G.squash=Math.max(G.squash,.55)))}function Pp(i,t,e,n){const s=Oe.bodies.includes(ee);if(Ht.wantExit=!1,G.path=[],G.seqT=0,G.door=G.doorGoal=0,E0(0),G.cheer=0,G.squash=G.stretch=0,ee.velocity.setZero(),i){s&&Oe.removeBody(ee),Ht.mode="car",le.visible=!1;return}s||Oe.addBody(ee),Ht.mode="foot",le.visible=!0,G.grounded=!0,od(t,e,n)}so("player",{save:()=>({inCar:Ht.mode==="car"||Ht.mode==="enter"||Ht.mode==="exit",x:+ee.position.x.toFixed(3),z:+ee.position.z.toFixed(3),yaw:+G.yaw.toFixed(3)}),load:i=>Pp(i.inCar,i.x,i.z,i.yaw),reset:()=>Pp(!1,Pn.x,Pn.z,Pn.yaw),summary:i=>i.inCar?"di mobil":""});od(Pn.x,Pn.z,Pn.yaw);const ko=[.3,-1.95],Br=new P(.3,.25,-.55),yA=new Si,Vo=new P,ll=new P,Us=new P,rh=new St,Jl=(i,t,e,n)=>n.set(i,t,e).applyQuaternion(Vt.quaternion).add(Vt.position),MA=(i,t)=>t.copy(i).sub(Vt.position).applyQuaternion(yA.copy(Vt.quaternion).invert()),Cl=(i,t)=>(ll.set(i,0,t).applyQuaternion(Vt.quaternion),Math.atan2(ll.x,ll.z)),SA=i=>Math.atan2(Math.sin(i),Math.cos(i)),Rl=(i,t,e)=>i+SA(t-i)*e;function ad(i,t,e,n=.6){const s=Js(i.x,i.z);i.y<Ki?rh.copy(fs.uFoam.value).multiplyScalar(.8).addScalar(.2):rh.copy(s.asphalt>.5?Ce.uAsphalt.value:s.paved>.5?Ce.uPaved.value:Ce.uGround.value).multiplyScalar(1.2);for(let r=0;r<t;r++){const o=Math.random()*Math.PI*2;Po.spawn(Vo.set(i.x+Math.cos(o)*.2,Math.max(i.y,Ki)+.08,i.z+Math.sin(o)*.2),ll.set(Math.cos(o)*e,ne(.2,n),Math.sin(o)*e),ne(.08,.15),ne(.35,.6),rh,.2)}}function U0(i){G.squash=.4+i*.6,Pe.step(1),ad(ee.position,4+Math.round(i*6),1.2+i)}const Lp={enter:{label:"Masuk mobil",quiet:!0,action:()=>Pl()},flip:{label:"Balikkan mobil",action:()=>Zl()}},F0=()=>Math.hypot(ee.position.x-Vt.position.x,ee.position.z-Vt.position.z)<4.3&&Math.abs(ee.position.y-Vt.position.y)<2.5,wA=()=>Ht.mode==="foot"&&F0()?Kl()?Lp.flip:Lp.enter:null;function Pl(){if(Ht.mode==="foot"&&F0()){if(Kl()){Zl();return}const i=MA(ee.position,Vo);if(G.path=[],i.z>-1.45){const t=i.x>ko[0]?2.95:-2.95;G.path.push([t,i.z],[t,ko[1]])}G.path.push(ko),G.seqT=0,G.cheer=0,Ht.mode="toCar"}else Ht.mode==="toCar"?Ht.mode="foot":Ht.mode==="car"&&(en.speed<2.5?O0():Ht.wantExit=!Ht.wantExit)}function bA(){Ht.mode="enter",G.seqT=0,G.from.copy(le.position),Oe.removeBody(ee),ee.velocity.setZero()}function O0(){Ht.mode="exit",Ht.wantExit=!1,G.seqT=0,G.doorGoal=1,Pe.door(!0),Jl(ko[0],0,ko[1],G.to),G.to.y=I0(G.to.x,G.to.z,Vt.position.y+1.5)+.02,Kl()&&(G.to.y=Math.max(G.to.y,Vt.position.y+1))}const Xn={pos:new P,vel:new P,lead:.22,scale:1};function EA(){return Ht.mode==="car"||Ht.mode==="enter"&&G.seqT>.7||Ht.mode==="exit"&&G.seqT<.35?(Xn.pos.copy(Vt.position),Xn.pos.y=Math.max(Vt.position.y-.6,0),Xn.vel.copy(oe.velocity),Xn.lead=.22,Xn.scale=1):(Xn.pos.copy(le.position),Xn.pos.y+=.55,Qs()?Xn.vel.copy(ee.velocity):Xn.vel.set(0,0,0),Xn.lead=.14,Xn.scale=.48),Xn}const TA=()=>Ht.mode==="car"?Vt.position:le.position,z0={fwd:0,back:0,left:0,right:0,brake:0,boost:0},AA={...z0,brake:1},CA=i=>Ht.wantExit?AA:i,hs=[];function RA(i,t){const e=ee.position,n=ee.velocity;Tl.set(e.x,e.y+.45,e.z),Al.set(e.x,e.y-.3,e.z),zr.reset();const s=Oe.raycastClosest(Tl,Al,L0,zr)&&zr.distance<.55;let r=!1;hs.length=0;for(const p of Oe.contacts){const v=p.bi===ee?-1:p.bj===ee?1:0;if(!v)continue;const m=p.ni.y*v,g=v<0?p.bj:p.bi;m>.5?r=!0:Math.abs(m)<.5&&(g.mass===0||!G.grounded)&&hs.length<8&&hs.push(p.ni.x*v,p.ni.z*v)}const o=G.grounded;G.grounded=(s||r)&&n.y<2.5,G.grounded?(G.lastGround=G.t,!o&&G.airVy<-2.5&&U0(Math.min(1,-G.airVy/10))):G.airVy=n.y;let a,l,c=!!t.boost;if(Ht.mode==="toCar"){G.seqT+=i,(t.fwd||t.back||t.left||t.right||t.brake)&&(Ht.mode="foot");const p=G.path[0];Jl(p[0],0,p[1],Vo);const v=Vo.x-e.x,m=Vo.z-e.z,g=Math.hypot(v,m),x=G.path.length===1;if((g<(x?.22:.5)||G.seqT>5)&&(G.path.shift(),(!G.path.length||G.seqT>5)&&Ht.mode==="toCar")){bA();return}const _=x?Mn(g/.8,.25,1):1;a=v/(g||1)*_,l=m/(g||1)*_,c=g>3}if(Ht.mode==="foot"){const p=t.right-t.left,v=t.fwd-t.back;An.getWorldDirection(Us),Us.y=0,Us.normalize(),a=Us.x*v-Us.z*p,l=Us.z*v+Us.x*p;const m=Math.hypot(a,l);m>1&&(a/=m,l/=m)}G.inWater=e.y<Ki-.2;const h=(c?gA:mA)*(G.inWater?.55:1),d=1-Math.exp(-i*(G.grounded?14:3.5));let u=n.x+(a*h-n.x)*d,f=n.z+(l*h-n.z)*d;for(let p=0;p<hs.length;p+=2){const v=u*hs[p]+f*hs[p+1];v<0&&(u-=v*hs[p],f-=v*hs[p+1])}n.x=u,n.z=f,Math.hypot(a,l)>.05&&(G.yaw=Rl(G.yaw,Math.atan2(a,l),1-Math.exp(-i*12))),t.brake&&!G.prevJump&&(G.jumpBuf=G.t),G.prevJump=t.brake,Ht.mode==="foot"&&G.jumpBuf>=0&&G.t-G.jumpBuf<.15&&G.t-G.lastGround<.12&&(n.y=vA,G.jumpBuf=-1,G.lastGround=-1,G.grounded=!1,G.stretch=1,G.cheer=0,Pe.jump(),ad(e,4,.8)),e.y<-6&&N0()}function PA(i){const t=G.seqT+=i;t>.08&&t<.9&&G.doorGoal===0&&(G.doorGoal=1,Pe.door(!0));const e=Cl(0,1),n=Cl(-1,0),s=Ne(.42,.95,t);G.yaw=Rl(Rl(G.yaw,e,1-Math.exp(-i*12)),n,s),Jl(Br.x,Br.y,Br.z,G.to),le.position.lerpVectors(G.from,G.to,s),le.position.y+=Math.sin(Math.PI*s)*.55,t>.92&&(le.visible=!1),t>.95&&(G.doorGoal=0),t>1.35&&(Ht.mode="car")}function LA(i){const t=G.seqT+=i;le.visible=t>.22,Jl(Br.x,Br.y,Br.z,G.from);const e=Ne(.28,.78,t);G.yaw=Rl(Cl(-1,0),Cl(0,-1),Ne(.2,.6,t)),le.position.lerpVectors(G.from,G.to,e),le.position.y+=Math.sin(Math.PI*e)*.5,t>.78&&(ee.position.set(G.to.x,G.to.y,G.to.z),ee.velocity.setZero(),ee.previousPosition.copy(ee.position),ee.interpolatedPosition.copy(ee.position),Oe.addBody(ee),Ht.mode="foot",G.grounded=!0,G.doorGoal=0,U0(.4))}function IA(i,t,e){G.t+=i;const n=e?t:z0;Qs()?RA(i,n):Ht.mode==="enter"?PA(i):Ht.mode==="exit"?LA(i):Ht.wantExit&&en.speed<2.5&&O0();const s=G.door;G.door+=Mn(G.doorGoal-G.door,-i/.3,i/.3),s>0&&G.door===0&&Pe.door(!1),E0(G.door*G.door*(3-2*G.door))}const we={},Qt={},B0=["hipsY","hipsYaw","spineX","spineY","spineZ","headX","headY","lHipX","lKnee","rHipX","rKnee","lShX","lShZ","lElX","lElZ","rShX","rShZ","rElX","rElZ","mouth"];for(const i of B0)we[i]=Qt[i]=0;we.hipsY=Zo;we.mouth=1;const Zt=(i,t,e)=>{Qt[i]+=(t-Qt[i])*e};function NA(i){if(Qs()&&(le.position.copy(ee.interpolatedPosition),le.visible=!0),le.rotation.y=G.yaw,le.visible?Ce.uPlayerPos.value.copy(le.position):Ce.uPlayerPos.value.set(9999,-99,9999),!le.visible)return;const t=Qs(),e=G.t,n=ee.velocity;G.hs+=((t?Math.hypot(n.x,n.z):0)-G.hs)*(1-Math.exp(-i*10));const s=!t||G.grounded;G.airW+=((s?0:1)-G.airW)*(1-Math.exp(-i*(s?16:8)));const r=Ne(.15,1.6,G.hs)*(1-G.airW),o=Ne(3.6,6.2,G.hs),a=G.phase;G.phase+=i*G.hs*Ue(2.9,2.3,o),t&&s&&G.hs>.8&&Math.floor(G.phase/Math.PI)!==Math.floor(a/Math.PI)&&(Pe.step(o*.6),(o>.5||G.inWater)&&ad(le.position,G.inWater?3:1,.5,G.inWater?2.5:.6)),G.idleT=t&&s&&r<.1?G.idleT+i:0,G.idleT>9&&!G.carry&&(G.cheer=1.8,G.idleT=0),(r>.3||!s)&&(G.cheer=0),G.cheer=Math.max(0,G.cheer-i),G.squash=Math.max(0,G.squash-i*4),G.stretch=Math.max(0,G.stretch-i*4);const l=Math.sin(G.phase),c=Math.cos(G.phase),h=Math.sin(e*2.2),d=Ue(.55,.85,o)*r,u=Ue(.7,1.35,o)*r,f=Ue(.45,1,o)*r;if(Qt.hipsY=Zo+r*(Ue(.025,.06,o)*(Math.abs(c)-.6)-o*.04),Qt.hipsYaw=-l*.1*r,Qt.spineX=.03+h*.012+r*Ue(.06,.26,o),Qt.spineY=l*.14*r,Qt.spineZ=0,Qt.headX=-Qt.spineX*.5+Math.sin(e*1.3)*.02,Qt.headY=-Qt.spineY*.8+(1-r)*Math.sin(e*.45)*.35*Ne(2.5,4.5,G.idleT),Qt.lHipX=-l*d,Qt.rHipX=l*d,Qt.lKnee=.04+u*Math.max(0,c),Qt.rKnee=.04+u*Math.max(0,-c),Qt.lShX=.04+l*f,Qt.rShX=.04-l*f,Qt.lShZ=.12+h*.02+o*.1*r,Qt.rShZ=-Qt.lShZ,Qt.lElX=Qt.rElX=-.18-Ue(.1,1.2,o)*r,Qt.lElZ=Qt.rElZ=0,Qt.mouth=1+o*.25*r,G.airW>.01){const x=G.airW,_=Ne(-2,2,n.y),M=Math.sin(e*18)*.18*(1-_);Zt("lHipX",Ue(-.25,-.95,_),x),Zt("lKnee",Ue(.35,1.3,_),x),Zt("rHipX",Ue(-.1,.35,_),x),Zt("rKnee",Ue(.25,.6,_),x),Zt("lShX",Ue(-.5,-.3,_),x),Zt("lShZ",Ue(1.9,.6,_)+M,x),Zt("rShX",Ue(-.5,.5,_),x),Zt("rShZ",-Ue(1.9,.6,_)+M,x),Zt("lElX",-.5,x),Zt("rElX",-.5,x),Zt("spineX",.12,x),Zt("mouth",1.6,x)}if(G.squash>0){const x=Math.min(G.squash,1);Qt.hipsY-=.14*x,Qt.lKnee+=.75*x,Qt.rKnee+=.75*x,Qt.lHipX-=.45*x,Qt.rHipX-=.45*x,Qt.spineX+=.25*x,Qt.lShZ+=.3*x,Qt.rShZ-=.3*x}const p=Ne(0,.25,G.cheer)*Ne(1.8,1.55,G.cheer);if(p>0){const x=Math.sin(G.cheer*14)*.22;Zt("rShX",-.35,p),Zt("rShZ",-1.35,p),Zt("rElX",0,p),Zt("rElZ",-1.7+x,p),Zt("lShX",.25,p),Zt("lShZ",.8,p),Zt("lElX",0,p),Zt("lElZ",-1.6,p),Qt.hipsY+=Math.abs(Math.sin(G.cheer*7))*.035*p,Qt.headX-=.12*p,Qt.spineZ=.06*p,Qt.mouth+=.6*p}G.carryW+=((G.carry&&le.visible?1:0)-G.carryW)*(1-Math.exp(-i*12));const v=G.carryW;if(v>.01){const x=l*.05*r;Zt("lShX",-.2+x,v),Zt("lShZ",2.75,v),Zt("lElX",0,v),Zt("lElZ",.4,v),Zt("rShX",-.2-x,v),Zt("rShZ",-2.75,v),Zt("rElX",0,v),Zt("rElZ",-.4,v),Zt("spineX",Qt.spineX*.4-.04,v),Zt("headX",-.08,v),Zt("headY",0,v*.6)}if(Qr.rotation.z=-Qt.spineZ,Qr.rotation.x=-Qt.spineX*.8,Ht.mode==="enter"||Ht.mode==="exit"){const x=G.seqT,_=Ht.mode==="enter",M=_?Ne(.05,.25,x)*Ne(.55,.4,x):0,C=Ne(_?.38:.8,.6,x);Zt("lShX",-1.35,M),Zt("lShZ",.15,M),Zt("lElX",-.2,M),Zt("hipsY",Zo-.2,C),Zt("lHipX",-1.3,C),Zt("lKnee",1.6,C),Zt("rHipX",-.6,C),Zt("rKnee",1.1,C),Zt("spineX",.35,C),Zt("lShX",-1.1,C),Zt("rShX",-1.1,C),Zt("mouth",1.5,C)}const m=1-Math.exp(-i*22);for(const x of B0)we[x]+=(Qt[x]-we[x])*m;lt.hips.position.y=we.hipsY,lt.hips.rotation.y=we.hipsYaw,lt.spine.rotation.set(we.spineX,we.spineY,we.spineZ),lt.head.rotation.set(we.headX,we.headY,0),lt.L.hip.rotation.x=we.lHipX,lt.L.knee.rotation.x=we.lKnee,lt.L.foot.rotation.x=-(we.lHipX+we.lKnee)*.85,lt.R.hip.rotation.x=we.rHipX,lt.R.knee.rotation.x=we.rKnee,lt.R.foot.rotation.x=-(we.rHipX+we.rKnee)*.85,lt.LA.sh.rotation.set(we.lShX,0,we.lShZ),lt.LA.el.rotation.set(we.lElX,0,we.lElZ),lt.RA.sh.rotation.set(we.rShX,0,we.rShZ),lt.RA.el.rotation.set(we.rElX,0,we.rElZ),lt.mouth.scale.set(1,we.mouth,1),lt.bucket.rotation.x=Math.sin(G.phase*2)*.3*r-G.airW*.35*Math.sign(n.y),lt.basket.rotation.z=Math.sin(G.phase)*.12*r,G.blink-=i,G.blink<0&&(G.blink=ne(2,5),G.blinkT=.12),G.blinkT=Math.max(0,G.blinkT-i),lt.eyes.scale.y=G.blinkT>0?.15:1;const g=G.stretch*.12*(1-G.stretch*.3)-Math.min(G.squash,1)*.1;sd.scale.set(1-g*.5,1+g,1-g*.5)}const ln={started:!1,activeZone:null},ld=()=>["modal","inventory","pause"].some(i=>J(i).classList.contains("show")),DA=()=>J("optWind").checked;function k0(i){J("modalBody").innerHTML=i,J("modal").classList.add("show"),sa()}function cd(){J("modal").classList.remove("show")}function V0(i){i.action&&(i.action(),i.quiet||Pe.pop()),i.content&&k0(i.content)}function H0(){Ht.mode==="car"?Kl()?Zl():T0():N0()}const UA={foot:"<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> / panah = jalan · <kbd>Shift</kbd> lari · <kbd>Space</kbd> lompat · <kbd>F</kbd> masuk mobil · <kbd>E</kbd> ambil · <kbd>I</kbd> tas · <kbd>R</kbd> reset<br>Drag mouse = putar kamera · Scroll = zoom · <kbd>C</kbd> reset kamera",car:"<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> / panah = setir · <kbd>Shift</kbd> boost · <kbd>Space</kbd> rem · <kbd>H</kbd> klakson · <kbd>F</kbd> keluar mobil · <kbd>R</kbd> reset"};let Ip=0;function G0(i,t=8e3){J("hint").innerHTML=UA[i?"car":"foot"],J("hint").style.opacity=.85,clearTimeout(Ip),Ip=setTimeout(()=>{J("hint").style.opacity=0},t)}function hd(i){i!==ln.activeZone&&(ln.activeZone=i,J("prompt").innerHTML=i?`<kbd>E</kbd> ${i.label}`:"",J("prompt").classList.toggle("show",!!i))}addEventListener("keydown",i=>{(i.target.tagName==="INPUT"||i.target.tagName==="SELECT")&&i.code!=="Escape"||(_l[i.code]&&(Ks[_l[i.code]]=1,i.preventDefault()),!i.repeat&&(i.code==="Escape"&&(cd(),J("settings").classList.remove("show")),i.code==="KeyT"&&J("settings").classList.toggle("show"),(i.code==="BracketLeft"||i.code==="BracketRight")&&Ql((De.hour+(i.code==="BracketLeft"?-1:1)+24)%24),!(!ln.started||ld())&&(i.code==="KeyR"&&H0(),i.code==="KeyH"&&Ht.mode==="car"&&Pe.horn(),i.code==="KeyF"&&Pl(),i.code==="KeyM"&&W0(),(i.code==="KeyE"||i.code==="Enter")&&(ln.activeZone?V0(ln.activeZone):Ht.mode==="car"&&Pl()),hT(i.code))))});addEventListener("keyup",i=>{_l[i.code]&&(Ks[_l[i.code]]=0)});addEventListener("blur",sa);document.querySelectorAll("#touch button").forEach(i=>{const t=i.dataset.k,e=n=>s=>{s.preventDefault(),Ks[t]=n,i.classList.toggle("on",!!n)};i.addEventListener("pointerdown",e(1)),i.addEventListener("pointerup",e(0)),i.addEventListener("pointerleave",e(0)),i.addEventListener("pointercancel",e(0))});J("modalClose").onclick=cd;J("modal").onclick=i=>{i.target.id==="modal"&&cd()};J("prompt").onclick=()=>ln.activeZone&&V0(ln.activeZone);J("respawnBtn").onclick=H0;function Vn(i,t){const e=document.createElement("div");for(e.className="toast",e.innerHTML=(t?`<img src="${t}" alt="">`:"")+`<span>${i}</span>`,J("toasts").prepend(e);J("toasts").children.length>4;)J("toasts").lastChild.remove();setTimeout(()=>{e.classList.add("out"),setTimeout(()=>e.remove(),400)},1800)}J("carBtn").onclick=()=>{ln.started&&!ld()&&Pl()};function W0(){const i=Pe.toggle();J("muteIcon").innerHTML=i?'<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9l5 6M21 9l-5 6"/>':'<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/>'}J("muteBtn").onclick=W0;J("clock").onclick=()=>J("settings").classList.toggle("show");function Ql(i){De.real=!1,De.hour=i,J("realTime").checked=!1,J("speedSel").disabled=!1}J("realTime").onchange=i=>{De.real=i.target.checked,J("speedSel").disabled=De.real};J("hourSlider").oninput=i=>Ql(parseFloat(i.target.value));J("speedSel").onchange=i=>{De.speed=parseFloat(i.target.value)};J("speedSel").disabled=!0;vi("save:applied",()=>{J("realTime").checked=De.real,J("speedSel").disabled=De.real,[...J("speedSel").options].some(i=>+i.value===De.speed)&&(J("speedSel").value=String(De.speed))});document.querySelectorAll("#settings .presets button").forEach(i=>{i.onclick=()=>Ql(parseFloat(i.dataset.h))});function ud(i,t=!0){VE(i);for(const e of y0)e.visible=i==="high"||e.userData.layer===0;if(t)try{localStorage.setItem("tester.quality",i)}catch{}}J("qualitySel").onchange=i=>ud(i.target.value);function FA(){try{const i=ui.getContext(),t=i.getExtension("WEBGL_debug_renderer_info");return/intel|iris|uhd|mali|adreno|powervr|apple|swiftshader/i.test(t?i.getParameter(t.UNMASKED_RENDERER_WEBGL):"")}catch{return!1}}function OA(){let i=null;try{i=localStorage.getItem("tester.quality")}catch{}i||(i=FA()?"auto":"high"),J("qualitySel").value=i,ud(i,!1)}J("optShadow").onchange=i=>{Qe.castShadow=i.target.checked};J("optBloom").onchange=i=>{$r.enabled=i.target.checked};J("optTilt").onchange=i=>HE(i.target.checked);J("optFps").onchange=i=>{J("fps").style.display=i.target.checked?"block":"none"};const Np=i=>{const t=Math.floor(i*60)%1440;return String(Math.floor(t/60)).padStart(2,"0")+":"+String(t%60).padStart(2,"0")},zA='<circle r="7" fill="#ffd45a"/>'+Array.from({length:8},(i,t)=>{const e=t*Math.PI/4;return`<line x1="${Math.cos(e)*9.5}" y1="${Math.sin(e)*9.5}" x2="${Math.cos(e)*13}" y2="${Math.sin(e)*13}" stroke="#ffd45a" stroke-width="2.4" stroke-linecap="round"/>`}).join(""),BA='<circle r="8" fill="#e8e6ff"/><circle r="7" cx="4" cy="-3" fill="#1b1624"/>';let Dp=null,Up="";function kA(i){const t=i>=6&&i<18,e=t?(i-6)/12:(i-18+24)%24/12,n=6+88*e,s=50-44*Math.sin(Math.PI*e);t!==Dp&&(J("skyIcon").innerHTML=t?zA:BA,Dp=t),J("skyIcon").setAttribute("transform",`translate(${n.toFixed(1)} ${s.toFixed(1)})`);const r=Np(i);r!==Up&&(Up=r,J("clockTime").textContent=r,J("clockLabel").textContent=c0(i),J("hourVal").textContent=r,J("realNow").textContent=Np(h0()),document.activeElement!==J("hourSlider")&&(J("hourSlider").value=i))}let oh=0,Ka=0;function VA(i){oh++,Ka+=i,Ka>.5&&(J("fps").textContent=Math.round(oh/Ka)+" fps · resolusi "+Math.round(GE()*100)+"%",oh=0,Ka=0)}const Fp=(i,t)=>{J("bar").firstElementChild.style.width=i*100+"%",t&&(J("loadText").textContent=t)},Jo=20,Ll=new Map,Me={slots:Array.from({length:Jo},()=>null),held:null};function HA(i){return Ll.set(i.id,{stack:99,...i}),Ll.get(i.id)}const Ji=i=>Ll.get(i)||{id:i,name:i,stack:99},to=()=>kn("inventory:changed",Me);function q0(i){const t=Ji(i).stack;let e=0;for(const n of Me.slots)e+=n?n.id===i?t-n.n:0:t;return e}function Il(i,t=1){const e=Ji(i).stack,n=Me.slots;let s=t;for(const o of n)if(s&&o&&o.id===i&&o.n<e){const a=Math.min(e-o.n,s);o.n+=a,s-=a}for(let o=0;o<n.length&&s;o++)if(!n[o]){const a=Math.min(e,s);n[o]={id:i,n:a},s-=a}const r=t-s;return r&&(to(),kn("inventory:added",{id:i,n:r})),s&&kn("inventory:full",{id:i,n:s}),r}function X0(i,t=1){const e=Me.slots[i];return e?(e.n-=Math.min(t,e.n),e.n<=0&&(Me.slots[i]=null),to(),e.id):null}const Op=i=>Me.slots.reduce((t,e)=>t+(e&&e.id===i?e.n:0),0);function GA(i,t){const e=Me.slots,n=e[i],s=e[t];if(!(i===t||!n)){if(s&&s.id===n.id){const r=Math.min(Ji(n.id).stack-s.n,n.n);s.n+=r,n.n-=r,n.n||(e[i]=null)}else e[i]=s,e[t]=n;to()}}function Y0(i){Me.held=i,to()}so("inventory",{save:()=>Me.slots.map(i=>i?[i.id,i.n]:0),load(i){Me.slots=Array.from({length:Jo},(t,e)=>i[e]&&Ll.has(i[e][0])?{id:i[e][0],n:i[e][1]}:null),to()},reset(){Me.slots=Array.from({length:Jo},()=>null),to()},summary:i=>{const t=i.reduce((e,n)=>e+(n?n[1]:0),0);return t?`${t} barang`:""}});const Bi=-1;let rn=null;const pu=()=>J("inventory").classList.contains("show"),xs=[];function Tr(i=!pu()){i&&(!ln.started||J("modal").classList.contains("show"))||i!==pu()&&(J("inventory").classList.toggle("show",i),i&&(sa(),rn=null,oa()),Pe.pop())}const dd=(i,t="")=>{const e=Ji(i);return e.icon?`<img class="${t}" src="${e.icon}" alt="" draggable="false">`:`<i class="dot ${t}" style="background:${e.color||"#ccc"}"></i>`},j0=i=>i?dd(i.id)+(i.n>1?`<b>${i.n}</b>`:""):"";function WA(){const i=rn===Bi?Me.held:rn!==null&&Me.slots[rn]?.id;if(!i)return`<p class="inv-empty">${Me.slots.some(Boolean)||Me.held?"Pilih barang untuk melihat detailnya.":"Tas masih kosong.<br>Dekati barang di taman lalu tekan <kbd>E</kbd>."}</p>`;const t=Ji(i),e=rn===Bi?1:Me.slots[rn].n,n=rn===Bi?'<button data-act="stash">Simpan ke tas</button><button data-act="drop" class="alt">Taruh</button>':`<button data-act="hold"${Me.held?' title="Tanganmu penuh: barang yang dipegang akan disimpan dulu"':""}>Pegang</button><button data-act="drop" class="alt">Buang 1</button>`;return`<div class="inv-big">${dd(i)}</div><h3 class="amatic">${t.name}</h3>`+(t.desc?`<p>${t.desc}</p>`:"")+`<p class="inv-meta">${rn===Bi?"Sedang dipegang":`Jumlah: <b>${e}</b>`}${rn===Bi&&Op(i)?` · di tas: <b>${Op(i)}</b>`:""}${t.price?` · harga <b>${t.price} G</b>`:""}</p><div class="inv-btns">${n}</div>`}function oa(){Me.slots.forEach((i,t)=>{xs[t].innerHTML=j0(i),xs[t].classList.toggle("full",!!i),xs[t].classList.toggle("sel",rn===t)}),J("invHand").innerHTML=Me.held?dd(Me.held):"",J("invHand").classList.toggle("full",!!Me.held),J("invHand").classList.toggle("sel",rn===Bi),J("invCap").textContent=`${Me.slots.filter(Boolean).length}/${Jo} slot`,J("invDetail").innerHTML=WA()}function zp(){const i=Me.slots.reduce((t,e)=>t+(e?e.n:0),0);J("bagCount").textContent=i>99?"99+":i||""}function $0(i){rn=(i===Bi?Me.held:Me.slots[i]?.id)&&rn!==i?i:null,oa()}function Bp(i){const t=rn;let e=0;i==="hold"?e=kn("inventory:hold",{slot:t}):i==="drop"?e=kn("inventory:drop",{slot:t}):i==="stash"&&(e=kn("inventory:stash")),e||Vn("Belum bisa dilakukan di sini"),i==="hold"||t===Bi?Tr(!1):(Me.slots[t]||(rn=null),oa())}let nn=null;function qA(i){if(!nn)return;if(!nn.ghost){if(Math.hypot(i.clientX-nn.x,i.clientY-nn.y)<6||!Me.slots[nn.from])return;nn.ghost=document.createElement("div"),nn.ghost.className="slot full inv-ghost",nn.ghost.innerHTML=j0(Me.slots[nn.from]),document.body.append(nn.ghost),xs[nn.from].classList.add("dragging")}nn.ghost.style.transform=`translate(${i.clientX}px, ${i.clientY}px) translate(-50%, -50%) scale(1.1)`;const t=document.elementFromPoint(i.clientX,i.clientY)?.closest("#invGrid .slot");for(const e of xs)e.classList.toggle("over",e===t&&e!==xs[nn.from])}function kp(i){if(!nn)return;const t=nn;if(nn=null,!t.ghost){i.type==="pointerup"&&$0(t.from);return}t.ghost.remove();for(const n of xs)n.classList.remove("over","dragging");const e=i.type==="pointerup"&&document.elementFromPoint(i.clientX,i.clientY)?.closest("#invGrid .slot");e&&+e.dataset.i!==t.from&&(GA(t.from,+e.dataset.i),rn=+e.dataset.i,Pe.step(.6)),oa()}function XA(){for(let i=0;i<Jo;i++){const t=document.createElement("div");t.className="slot",t.dataset.i=i,J("invGrid").append(t),xs.push(t)}J("invGrid").addEventListener("pointerdown",i=>{const t=i.target.closest(".slot");t&&i.button===0&&(nn={from:+t.dataset.i,x:i.clientX,y:i.clientY,ghost:null},i.preventDefault())}),J("invGrid").addEventListener("dblclick",i=>{const t=i.target.closest(".slot");t&&Me.slots[+t.dataset.i]&&(rn=+t.dataset.i,Bp("hold"))}),addEventListener("pointermove",qA),addEventListener("pointerup",kp),addEventListener("pointercancel",kp),J("invHand").onclick=()=>$0(Bi),J("invDetail").onclick=i=>{const t=i.target.closest("button[data-act]");t&&Bp(t.dataset.act)},J("invClose").onclick=()=>Tr(!1),J("inventory").onclick=i=>{i.target.id==="inventory"&&Tr(!1)},J("bagBtn").onclick=()=>Tr(),addEventListener("keydown",i=>{i.repeat||i.target.tagName==="INPUT"||i.target.tagName==="SELECT"||(i.code==="KeyI"||i.code==="Tab"?(i.preventDefault(),Tr()):i.code==="Escape"&&Tr(!1))}),vi("inventory:changed",()=>{zp(),pu()&&oa()}),vi("inventory:added",({id:i,n:t})=>{Vn(`+${t} ${Ji(i).name}`,Ji(i).icon),J("bagBtn").classList.remove("bump"),J("bagBtn").offsetWidth,J("bagBtn").classList.add("bump")}),vi("inventory:full",()=>Vn("Tas penuh!")),zp()}let K0=()=>{},On=!1;const YA=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function tc(){return qi.enabled?qi.online===!1?"⚠ Cloud tidak terjangkau: memakai salinan di perangkat ini":qi.signedIn?"☁ Simpanan tersinkron ke cloud":"☁ Cloud aktif (tanpa login)":"💾 Simpanan disimpan di perangkat ini (cloud belum diatur)"}const Z0=i=>new Date(i).toLocaleString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),jA=i=>{const t=Math.floor(i/60),e=Math.floor(t/60);return e?`${e}j ${t%60}m`:`${t} mnt`};function J0(i,t){return'<div class="slot-list">'+i.filter(e=>t==="load"||e.slot!=="auto").map(({slot:e,meta:n,where:s})=>{const r=!n,o=t==="load"&&r,a=s==="cloud"?"☁ cloud":s==="local"?"💾 perangkat":"";return`<button class="slot-row" data-slot="${e}"${o?" disabled":""}>
      <div class="sr-top"><span>${ia(e)}</span><span class="sr-where">${a}</span></div>
      ${r?'<div class="sr-info">— kosong —</div>':`<div class="sr-info">${YA(n.summary||"Permainan tersimpan")}</div><div class="sr-date">${Z0(n.savedAt)} · main ${jA(n.playTime||0)}</div>`}
    </button>`}).join("")+"</div>"}function Q0(i,t,e){i.querySelectorAll(".slot-row").forEach(n=>{n.onclick=()=>{const s=!!n.querySelector(".sr-date");if(t==="save"&&s&&!n.classList.contains("confirm")){i.querySelectorAll(".slot-row.confirm").forEach(r=>r.classList.remove("confirm")),n.classList.add("confirm"),n.querySelector(".sr-info").textContent="Klik lagi untuk menimpa simpanan ini";return}e(n.dataset.slot)}})}async function $A(i){const t=await jl(i);return Vn(t?`Tersimpan di ${ia(i)} ${t==="cloud"?"☁":"(perangkat ini)"}`:"Gagal menyimpan!"),t}function KA(){J("loader").style.opacity=0,setTimeout(()=>{ln.started&&J("loader").classList.add("gone")},800)}async function cl(i){if(!On){On=!0,Pe.init(),Pe.pop(),J("loadText").textContent=i?"Memuat simpanan…":"Menyiapkan dunia baru…";try{if(!i)nT();else if(!await a0(i)){J("loadText").textContent="Simpanan tidak ditemukan.";return}J("mainMenu").classList.remove("panel"),nd(),KA(),K0({fresh:!i})}finally{On=!1}}}async function tg(i,t,e){i.innerHTML="<h3>Muat Game</h3><p>Memeriksa simpanan…</p>";const n=await Ku();i.innerHTML="<h3>Muat Game</h3>"+J0(n,"load")+'<button class="menu-back">Kembali</button>',Q0(i,"load",e),i.querySelector(".menu-back").onclick=t,J("mmStatus").textContent=tc()}async function ZA(){J("mmContinue").disabled=!0,J("mmContinueInfo").textContent="memeriksa simpanan…";const i=await iT();J("mmContinue").disabled=!i,J("mmContinue").dataset.slot=i?i.slot:"",J("mmContinueInfo").textContent=i?`${ia(i.slot)} · ${Z0(i.meta.savedAt)}`:"belum ada simpanan",J("mmStatus").textContent=tc()}function eg(){ln.started=!1,sa(),J("loader").classList.remove("gone"),J("loader").style.opacity=1,J("bar").style.display="none",J("loadText").textContent="",J("mainMenu").style.display="flex",J("mainMenu").classList.remove("panel"),ZA()}function JA(i){On||(i==="new"?cl(null):i==="continue"?J("mmContinue").dataset.slot&&cl(J("mmContinue").dataset.slot):i==="load"?(Pe.init(),J("mainMenu").classList.add("panel"),tg(J("mmPanel"),()=>J("mainMenu").classList.remove("panel"),t=>cl(t))):i==="exit"&&(window.close(),setTimeout(()=>{J("mainMenu").classList.add("panel"),J("mmPanel").innerHTML='<h3>Sampai jumpa!</h3><p>Terima kasih sudah bermain. Tutup tab ini untuk keluar.</p><button class="menu-back">Kembali ke menu</button>',J("mmPanel").querySelector(".menu-back").onclick=()=>J("mainMenu").classList.remove("panel")},150)))}const ng=()=>J("pause").classList.contains("show");function hl(){J("pauseBody").innerHTML=`<h2>Jeda</h2><div class="mm-buttons">
    <button class="amatic" data-p="resume">Lanjutkan</button>
    <button class="amatic" data-p="save">Simpan Game</button>
    <button class="amatic" data-p="load">Muat Game</button>
    <button class="amatic" data-p="controls">Kontrol</button>
    <button class="amatic" data-p="menu">Menu Utama</button>
  </div><p class="save-status">${tc()}${Zi.slot?` · terakhir: ${ia(Zi.slot)}`:""}</p>`,J("pauseBody").querySelectorAll("[data-p]").forEach(i=>{i.onclick=()=>QA(i.dataset.p)})}function ms(i=!ng()){i&&!ln.started||(J("pause").classList.toggle("show",i),i&&(sa(),hl()),Pe.pop())}async function QA(i){if(On)return;const t=J("pauseBody");if(i==="resume")ms(!1);else if(i==="controls")ms(!1),k0(J("controlsTemplate").innerHTML);else if(i==="save"){t.innerHTML='<h2>Simpan Game</h2><p class="save-status">Memeriksa slot…</p>';const e=await Ku();t.innerHTML="<h2>Simpan Game</h2>"+J0(e,"save")+`<p class="save-status">${tc()}</p><button class="menu-back">Kembali</button>`,Q0(t,"save",async n=>{On=!0,t.querySelectorAll(".slot-row").forEach(s=>{s.disabled=!0});try{await $A(n)?ms(!1):hl()}finally{On=!1}}),t.querySelector(".menu-back").onclick=hl}else if(i==="load")t.innerHTML="<div></div>",tg(t.firstChild,hl,async e=>{On=!0;try{await a0(e)?(ms(!1),nd(),Vn(`${ia(e)} dimuat`)):Vn("Simpanan tidak ditemukan")}finally{On=!1}});else if(i==="menu"){On=!0,t.innerHTML='<h2>Menyimpan…</h2><p class="save-status">Menyimpan otomatis sebelum keluar</p>';try{await jl("auto")}finally{On=!1}J("pause").classList.remove("show"),eg()}}function t2(i){K0=i,document.querySelectorAll("#mainMenu [data-mm]").forEach(n=>{n.onclick=()=>JA(n.dataset.mm)}),J("menuBtn").onclick=()=>ms(),J("pause").onclick=n=>{n.target.id==="pause"&&!On&&ms(!1)},addEventListener("keydown",n=>{if(n.code!=="Escape"||n.repeat||!ln.started||On)return;if(ng()){ms(!1);return}["modal","settings","inventory"].some(r=>J(r).classList.contains("show"))||ms(!0)},!0);let t=0;const e=()=>{!ln.started||Date.now()-t<5e3||(t=Date.now(),jl("auto",{keepalive:!0}))};addEventListener("pagehide",e),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e()}),eg()}const e2=()=>cl(null),n2={x:-27,z:28,len:20},i2={x:-17,z:36,rot:.62,title:"BOWLING",label:"Reset pin bowling",action:"bowling:reset"},mu=[];function s2({x:i,z:t,len:e}){X(new Dt(e,.04,4.6),rt("#6f5ed0"),ce,i,.03,t,!1);for(const l of[-2.4,2.4])X(new Dt(e,.05,.14),_i("#ff4fb8",1.4,3.5),ce,i,.05,t+l,!1);const n=[[0,0],[.26,0],[.34,.35],[.22,.85],[.16,1.05],[.22,1.28],[.14,1.48],[0,1.55]].map(([l,c])=>new st(l,c)),s=new zl(n,10).translate(0,-.77,0),r=rt("#f2eeff",{flatShading:!1}),o=_i("#ff2f6a",1,2);for(let l=0;l<4;l++)for(let c=0;c<=l;c++){const h=new me;ce.add(h),X(s,r,h),X(new ke(.19,.19,.08,10),o,h,0,.35,0,!1),mu.push(Kr(h,new Mt({mass:1.2,shape:new Wl(.26,.26,1.55,8),position:new S(i-e/2+2-l*.8,.8,t+(c-l/2)*.9)})))}const a=X(new qs(.75,20,14),new o1({color:"#2a1f66",roughness:.25,metalness:.3}));mu.push(Kr(a,new Mt({mass:25,shape:new Wu(.75),position:new S(i+e/2-2,.8,t),linearDamping:.1,angularDamping:.2})))}const r2={id:"bowling",build(){s2(n2),S0(i2),vi("bowling:reset",()=>su(mu))}};let ii=null,br,us;const o2=new Qi,Za=new nr;function a2(i,t=128,{yaw:e=.75,pitch:n=.5,zoom:s=1}={}){if(!ii){ii=new Am({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),ii.setClearColor(0,0),ii.toneMapping=Nl,br=new Cm,br.add(new zm("#ffffff","#5a4a7a",2.2));const l=new Bm("#fff4e0",2.6);l.position.set(2,4,3),br.add(l),us=new vn(28,1,.01,100)}ii.setSize(t,t,!1);const r=i.parent;br.add(i),i.updateMatrixWorld(!0),o2.setFromObject(i).getBoundingSphere(Za);const o=Za.radius/Math.sin(uv.degToRad(us.fov/2))/s;us.position.set(Math.sin(e)*Math.cos(n),Math.sin(n),Math.cos(e)*Math.cos(n)).multiplyScalar(o).add(Za.center),us.lookAt(Za.center),us.near=o/20,us.far=o*4,us.updateProjectionMatrix(),ii.render(br,us);const a=ii.domElement.toDataURL("image/png");return br.remove(i),r&&r.add(i),a}function l2(){ii&&(ii.dispose(),ii.forceContextLoss(),ii=null)}const c2=1.4,Bs=(i,t,e)=>new Dt(i,t,e),Fs=(i,t,e,n=7)=>new ke(i,t,e,n),Fi=(i,t=0)=>new sr(i,t),Vp={apple(i){X(Fi(.17,1),rt("#e8323c"),i,0,.16,0).scale.set(1,.9,1),X(Fi(.07,0),rt("#ff8a7a"),i,-.07,.22,.1,!1),X(Fs(.015,.02,.1,5),rt("#6b4020"),i,0,.34,0,!1).rotation.z=.25;const t=X(Bs(.12,.015,.06),rt("#5fb84a"),i,.06,.36,0,!1);t.rotation.z=-.4},mushroom(i){X(Fs(.06,.08,.2,8),rt("#f4ead0"),i,0,.1,0),X(new qs(.19,10,6,0,Math.PI*2,0,Math.PI/2),rt("#d9344a"),i,0,.17,0).scale.y=.8;for(const[t,e]of[[.09,.05],[-.07,.09],[-.05,-.1],[.06,-.09],[0,0]]){const n=.17+Math.sqrt(Math.max(0,.034-t*t-e*e))*.8;X(Fi(.028,0),rt("#fff8ec"),i,t,n,e,!1)}},flower(i){X(Fs(.015,.02,.32,5),rt("#4f9e3c"),i,0,.16,0,!1);for(const e of[1,-1]){const n=X(Bs(.13,.015,.05),rt("#6cc24e"),i,e*.06,.1,0,!1);n.rotation.z=e*.5}const t=new me;t.position.y=.34,t.rotation.x=.35,i.add(t);for(let e=0;e<6;e++){const n=e/6*Math.PI*2;X(Fi(.065,0),rt("#ffd23a"),t,Math.cos(n)*.08,0,Math.sin(n)*.08).scale.y=.45}X(Fi(.05,0),rt("#e8751a"),t,0,.02,0,!1)},berry(i){const t=X(Bs(.26,.02,.14),rt("#4f9e3c"),i,0,.02,0,!1);t.rotation.y=.5;for(const[e,n,s]of[[0,0,.09],[.1,.04,.08],[-.06,.08,.08],[.03,-.09,.08],[.04,.02,.18]])X(Fi(.075,1),rt("#6a3fc0"),i,e,s,n);X(Fi(.03,0),rt("#c6a8ff"),i,.02,.24,.04,!1)},egg(i){const t=X(new Ms(.16,.06,5,10).rotateX(Math.PI/2),rt("#b98d4e"),i,0,.05,0);t.scale.y=.8,X(Fs(.14,.1,.05,10),rt("#9c7340"),i,0,.03,0,!1),X(Fi(.12,1),rt("#fff4dc"),i,0,.17,0).scale.set(.9,1.25,.9),X(Fi(.025,0),rt("#d8b98a"),i,.07,.22,.05,!1)},shell(i){X(new Wi(.2,.12,9),rt("#f5a3b4"),i,0,.06,0).scale.set(1,1,.8);for(let t=-3;t<=3;t++){const e=X(Bs(.018,.02,.2),rt("#e0788e"),i,Math.sin(t*.4)*.1,.075,.02,!1);e.rotation.y=t*.4,e.rotation.x=-.45}X(Bs(.1,.04,.06),rt("#f5a3b4"),i,0,.02,-.15)},stone(i){X(new gl(.2,0),rt("#9a9aa6"),i,0,.14,0).scale.set(1.1,.7,.9),X(new gl(.1,0),rt("#b8b8c4"),i,.14,.07,.1).scale.set(1,.7,1)},branch(i){const t=rt("#a8703e"),e=rt("#6b4020");X(Fs(.05,.065,.62,6),t,i,0,.05,0).rotation.set(0,.3,Math.PI/2);const n=X(Fs(.02,.03,.26,5),t,i,.06,.07,.1);n.rotation.set(Math.PI/2,0,.9),n.rotation.order="YXZ",n.rotation.y=-.6,X(Fs(.05,.05,.01,6),e,i,.29,.05,-.09,!1).rotation.set(0,.3,Math.PI/2);const s=X(Bs(.1,.015,.06),rt("#8fb84a"),i,-.2,.09,.08,!1);s.rotation.y=.7}};function h2(i){const t=new me,e=new me;return e.scale.setScalar(c2),t.add(e),(Vp[i]||(n=>X(Bs(.25,.25,.25),rt("#888"),n,0,.125,0)))(e),Vp[i]||console.warn(`pickup: unknown item model '${i}'`),o0(t,[t]),t}const u2=1.5,d2=80,f2=[13,26],p2=.28,m2=.34,g2=.25,$n=new Map,Ss=[],_s=[],Hi=[];let _n=null,tr=0;const ig=new P,Hp=new S,Gp=new S,ah=new js;function fd(i,t,e=6){return Hp.set(i,e,t),Gp.set(i,e-12,t),ah.reset(),Oe.raycastClosest(Hp,Gp,{collisionFilterMask:1,skipBackfaces:!0},ah)?ah.hitPointWorld.y:Zs(i,t)}function Wp(i,t){for(let e=0;e<80;e++){const n=Math.random()*Math.PI*2,s=t?ne(...f2):Math.sqrt(Math.random())*d2,r=(t?Pn.x:0)+Math.cos(n)*s,o=(t?Pn.z:0)+Math.sin(n)*s,a=ra(r,o);if(i==="shore"?a<.7||a>3.2:a<2)continue;const l=Js(r,o);if(l.asphalt>.2||i==="grass"&&l.paved>.25||di.some(h=>Math.hypot(r-h.x,o-h.z)<h.r+.6)||au.some(h=>Math.hypot(r-h.x,o-h.z)<h.r)||Ss.some(h=>Math.hypot(r-h.obj.position.x,o-h.obj.position.z)<2.5))continue;const c=fd(r,o);if(!(c>Zs(r,o)+.12))return ig.set(r,c,o)}return null}function ec(i,t,e,n,{arc:s=0,s0:r=1,s1:o=1,done:a}={}){const l={obj:i,from:t.clone(),to:e.clone(),t:0,dur:n,arc:s,s0:r,s1:o,done:a};for(let c=Hi.length-1;c>=0;c--)Hi[c].obj===i&&Hi.splice(c,1);Hi.push(l),i.position.copy(t),i.scale.setScalar(r)}const sg=i=>ig.set(Math.sin(le.rotation.y)*i,0,Math.cos(le.rotation.y)*i),nc=()=>Ht.mode==="foot"&&le.visible;function ic(i,t,{wild:e=!1,pop:n=!1}={}){const s=$n.get(i).proto.clone();s.position.copy(t),s.rotation.y=Math.random()*Math.PI*2,ce.add(s);const r={id:i,obj:s,wild:e,baseY:t.y,hl:0};return r.zone=Ju({pos:s.position,label:`Ambil ${Ji(i).name}`,quiet:!0,range:u2,action:()=>v2(r)}),Ss.push(r),n&&ec(s,t,t,.4,{arc:.3,s0:.05}),r}function rg(i,t=!1){const e=t&&Wp($n.get(i).spawn.where,!0)||Wp($n.get(i).spawn.where,!1);e?ic(i,e,{wild:!0,pop:tr>0}):_s.push({id:i,at:tr+10})}function pd(i,t,e,n=1){_n={id:i,obj:t},_n.zone=Ju({pos:le.position,label:`Simpan ${Ji(i).name} ke tas · <kbd>Q</kbd> taruh`,quiet:!0,action:og}),Y0(i),D0(!0),hd(_n.zone),Qr.add(t),t.rotation.set(0,.5,0),ec(t,e,new P,p2,{arc:.25,s0:n})}function aa(){const i=_n;return Qu(i.zone),_n=null,Y0(null),D0(!1),hd(null),i}function v2(i){if(_n||!nc())return;Ss.splice(Ss.indexOf(i),1),Qu(i.zone),i.wild&&_s.push({id:i.id,at:tr+($n.get(i.id).spawn.respawn||90)});const t=Qr.worldToLocal(i.obj.getWorldPosition(new P));Pe.pick(),pd(i.id,i.obj,t)}function og(){if(!_n)return;if(!q0(_n.id)){Vn("Tas penuh! Tekan <kbd>Q</kbd> untuk menaruh"),Pe.drop();return}const{id:i,obj:t}=aa();Il(i,1),Pe.stash(),ec(t,t.position,new P(.25,-.75,-.2),g2,{arc:.2,s1:.1,done:()=>t.removeFromParent()})}function ag(i,t){const e=sg(.85),n=le.position.x+e.x+ne(-.15,.15),s=le.position.z+e.z+ne(-.15,.15),r=new P(n,fd(n,s,le.position.y+1.5),s);t.rotation.set(0,Math.random()*Math.PI*2,0),ec(t,t.position,r,m2,{arc:.35,s0:t.scale.x,done:()=>{t.removeFromParent(),ic(i,r)}})}const lg=()=>{const i=sg(.85);return ra(le.position.x+i.x,le.position.z+i.z)<.3};function cg(){if(!_n||!nc())return;if(lg()){Vn("Jangan dibuang ke air!"),Pe.drop();return}const{id:i,obj:t}=aa();ce.attach(t),Pe.drop(),ag(i,t)}function x2({slot:i}){if(!nc()){Vn("Keluar dari mobil dulu");return}const t=Me.slots[i]?.id;if(t){if(X0(i,1),_n){if(!q0(_n.id)){Il(t,1),Vn("Tas penuh! Taruh dulu barang yang dipegang");return}const e=aa();Il(e.id,1),e.obj.removeFromParent()}Pe.pick(),pd(t,$n.get(t).proto.clone(),new P(.25,-.8,-.15),.2)}}function _2({slot:i}){if(i===-1){cg();return}if(!nc()){Vn("Keluar dari mobil dulu");return}if(lg()){Vn("Jangan dibuang ke air!");return}const t=X0(i,1);if(!t)return;const e=$n.get(t).proto.clone();ce.add(e),e.position.copy(le.position).y+=.7,Pe.drop(),ag(t,e)}function qp(){for(const i of Ss)Qu(i.zone),i.obj.removeFromParent();for(const i of Hi)i.obj.removeFromParent();Ss.length=_s.length=Hi.length=0,_n&&aa().obj.removeFromParent()}function hg(){for(const[i,t]of $n)if(t.spawn)for(let e=0;e<t.spawn.count;e++)rg(i,e===0)}const lh=i=>Math.round(i*100)/100,y2={save:()=>({items:Ss.map(i=>[i.id,lh(i.obj.position.x),lh(i.baseY),lh(i.obj.position.z),i.wild?1:0]),regrow:_s.map(i=>[i.id,Math.max(0,Math.round(i.at-tr))]),held:_n?_n.id:null}),load(i){qp();for(const[t,e,n,s,r]of i.items||[])$n.has(t)&&ic(t,new P(e,n,s),{wild:!!r});for(const[t,e]of i.regrow||[])$n.has(t)&&_s.push({id:t,at:tr+e});i.held&&$n.has(i.held)&&pd(i.held,$n.get(i.held).proto.clone(),new P,1)},reset(){qp(),hg()}},M2={id:"pickup",async build(){const i=await Gl("data/items.json","json");for(const t of i.items){const e=h2(t.model);HA({id:t.id,name:t.name,desc:t.desc,stack:t.stack,price:t.price,icon:a2(e.clone(),128)}),$n.set(t.id,{proto:e,spawn:t.spawn||null})}l2(),vi("inventory:hold",x2),vi("inventory:drop",_2),vi("inventory:stash",og),cT("KeyQ",cg),vi("player:mode",t=>{if(t!=="car"||!_n)return;const{id:e,obj:n}=aa();if(n.removeFromParent(),!Il(e,1)){const{x:s,z:r}=le.position;ic(e,new P(s,fd(s,r),r))}}),vi("world:ready",hg),so("pickup",y2)},update(i,{t}){tr+=i;for(let e=Hi.length-1;e>=0;e--){const n=Hi[e],s=Math.min(1,(n.t+=i)/n.dur),r=1-(1-s)*(1-s);n.obj.position.lerpVectors(n.from,n.to,r).y+=Math.sin(Math.PI*s)*n.arc,n.obj.scale.setScalar(n.s0+(n.s1-n.s0)*Ne(0,1,s)),s>=1&&(Hi.splice(e,1),n.done&&n.done())}for(let e=_s.length-1;e>=0;e--)tr>_s[e].at&&rg(_s.splice(e,1)[0].id);for(const e of Ss){const n=ln.activeZone===e.zone?1:0;!n&&e.hl<.001||(e.hl+=(n-e.hl)*(1-Math.exp(-i*10)),e.obj.position.y=e.baseY+e.hl*(.06+Math.abs(Math.sin(t*5))*.1),e.obj.rotation.y+=i*1.2*e.hl)}}},S2=[r2,M2];qE(S2);XA();async function w2(){await tA(Fp,()=>XE({player:Ht})),xA();let i=KE(ce,[Vt,le,...zi.map(t=>t.mesh),...Zr.map(t=>t.dia).filter(Boolean)]);for(const t of zi)t.mesh.isMesh||(i+=Yl(t.mesh,ju(t.mesh)));console.log(`batching: ${i} meshes merged away`),Fp(1,"Siap!")}const b2=new km,ch={t:0,player:Ht,active:!1};let To=!1;function gu(){const i=Math.min(b2.getDelta(),.05),t=Ce.uTime.value+=i,e=lT(i),n=oT(e);kA(e);const s=ln.started&&!ld();IA(i,Ks,s),cA(i,CA(Ks),s&&Ht.mode==="car",Ht.mode==="car"),Oe.step(1/120,i,10),hA(),NA(i),(Ht.mode==="car"?!To:To&&Ht.mode==="foot")&&(To=!To,G0(To),kn("player:mode",Ht.mode));for(const r of zi)r.mesh.position.copy(r.body.interpolatedPosition),r.mesh.quaternion.copy(r.body.interpolatedQuaternion),r.body.position.y<-8&&(r.body.position.copy(r.home.p),r.body.velocity.setZero(),r.body.angularVelocity.setZero());ch.t=t,ch.active=s,YE(i,ch),yT(i,EA()),rA(e,n,Yi),fA(i,n),sA(i,Yi,DA()),oA(t),hd(uT(t,TA(),wA())),$s.render(),WE(),sT(i,s),VA(i),requestAnimationFrame(gu)}const Ho=new URLSearchParams(location.search);function E2({fresh:i}){i&&Ho.has("jam")&&(Ql(parseFloat(Ho.get("jam"))%24),J("speedSel").value="0",De.speed=0),ln.started=!0,G0(Ht.mode==="car",12e3),i&&_A(),kn("game:start")}w2().then(()=>{OA(),Ho.has("kualitas")&&(J("qualitySel").value=Ho.get("kualitas"),ud(Ho.get("kualitas"))),nd(),window.__tester={tick:gu,camTarget:Yi,player:Ht},kn("world:ready"),t2(E2),location.hash==="#auto"&&e2(),gu()}).catch(i=>{console.error(i),J("loadText").innerHTML=`<span class="err">Gagal memuat: ${i.message}</span>`});
