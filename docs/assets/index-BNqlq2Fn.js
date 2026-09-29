(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rf="169",B_=0,Yp=1,k_=2,$g=1,jg=2,ws=3,oo=0,Jn=1,jn=2,Rs=0,Ar=1,Ja=2,Kp=3,id=4,H_=5,Co=100,V_=101,G_=102,W_=103,q_=104,X_=200,$_=201,j_=202,Y_=203,sd=204,od=205,K_=206,Z_=207,J_=208,Q_=209,ty=210,ey=211,ny=212,iy=213,sy=214,rd=0,ad=1,ld=2,Or=3,cd=4,hd=5,ud=6,dd=7,Pf=0,oy=1,ry=2,eo=0,Yg=1,Kg=2,Zg=3,Jg=4,ay=5,Qg=6,pl=7,tv=300,zr=301,Br=302,fd=303,pd=304,vh=306,md=1e3,Io=1001,gd=1002,Yn=1003,ly=1004,Nl=1005,yi=1006,$h=1007,No=1008,Ns=1009,ev=1010,nv=1011,Qa=1012,Lf=1013,Oo=1014,is=1015,Gi=1016,If=1017,Nf=1018,kr=1020,iv=35902,sv=1021,ov=1022,Mi=1023,rv=1024,av=1025,Cr=1026,Hr=1027,Df=1028,Uf=1029,lv=1030,Ff=1031,Of=1033,Ac=33776,Cc=33777,Rc=33778,Pc=33779,vd=35840,xd=35841,_d=35842,yd=35843,Md=36196,wd=37492,Sd=37496,bd=37808,Ed=37809,Td=37810,Ad=37811,Cd=37812,Rd=37813,Pd=37814,Ld=37815,Id=37816,Nd=37817,Dd=37818,Ud=37819,Fd=37820,Od=37821,Lc=36492,zd=36494,Bd=36495,cv=36283,kd=36284,Hd=36285,Vd=36286,cy=3200,hy=3201,zf=0,uy=1,js="",_i="srgb",lo="srgb-linear",Bf="display-p3",xh="display-p3-linear",qc="linear",Be="srgb",Xc="rec709",$c="p3",Zo=7680,Zp=519,dy=512,fy=513,py=514,hv=515,my=516,gy=517,vy=518,xy=519,Jp=35044,Qp="300 es",Es=2e3,jc=2001;class ta{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let t0=1234567;const za=Math.PI/180,Vr=180/Math.PI;function $o(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[e&63|128]+Rn[e>>8&255]+"-"+Rn[e>>16&255]+Rn[e>>24&255]+Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]).toLowerCase()}function xn(i,t,e){return Math.max(t,Math.min(e,i))}function kf(i,t){return(i%t+t)%t}function _y(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function yy(i,t,e){return i!==t?(e-i)/(t-i):0}function Ba(i,t,e){return(1-e)*i+e*t}function My(i,t,e,n){return Ba(i,t,1-Math.exp(-e*n))}function wy(i,t=1){return t-Math.abs(kf(i,t*2)-t)}function Sy(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function by(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ey(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ty(i,t){return i+Math.random()*(t-i)}function Ay(i){return i*(.5-Math.random())}function Cy(i){i!==void 0&&(t0=i);let t=t0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ry(i){return i*za}function Py(i){return i*Vr}function Ly(i){return(i&i-1)===0&&i!==0}function Iy(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ny(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dy(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),d=o((t-n)/2),u=r((t-n)/2),f=o((n-t)/2),p=r((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function On(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Uy={DEG2RAD:za,RAD2DEG:Vr,generateUUID:$o,clamp:xn,euclideanModulo:kf,mapLinear:_y,inverseLerp:yy,lerp:Ba,damp:My,pingpong:wy,smoothstep:Sy,smootherstep:by,randInt:Ey,randFloat:Ty,randFloatSpread:Ay,seededRandom:Cy,degToRad:Ry,radToDeg:Py,isPowerOfTwo:Ly,ceilPowerOfTwo:Iy,floorPowerOfTwo:Ny,setQuaternionFromProperEuler:Dy,normalize:On,denormalize:xr};class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,e,n,s,o,r,a,l,c){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],v=s[0],m=s[3],g=s[6],x=s[1],_=s[4],M=s[7],C=s[2],E=s[5],T=s[8];return o[0]=r*v+a*x+l*C,o[3]=r*m+a*_+l*E,o[6]=r*g+a*M+l*T,o[1]=c*v+h*x+d*C,o[4]=c*m+h*_+d*E,o[7]=c*g+h*M+d*T,o[2]=u*v+f*x+p*C,o[5]=u*m+f*_+p*E,o[8]=u*g+f*M+p*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*r-a*c,u=a*l-h*o,f=c*o-r*l,p=e*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*r)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*o-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(r*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(jh.makeScale(t,e)),this}rotate(t){return this.premultiply(jh.makeRotation(-t)),this}translate(t,e){return this.premultiply(jh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const jh=new ue;function uv(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Yc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fy(){const i=Yc("canvas");return i.style.display="block",i}const e0={};function Ic(i){i in e0||(e0[i]=!0,console.warn(i))}function Oy(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function zy(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function By(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const n0=new ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),i0=new ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),la={[lo]:{transfer:qc,primaries:Xc,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[_i]:{transfer:Be,primaries:Xc,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[xh]:{transfer:qc,primaries:$c,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(i0),fromReference:i=>i.applyMatrix3(n0)},[Bf]:{transfer:Be,primaries:$c,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(i0),fromReference:i=>i.applyMatrix3(n0).convertLinearToSRGB()}},ky=new Set([lo,xh]),Ce={enabled:!0,_workingColorSpace:lo,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ky.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=la[t].toReference,s=la[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return la[i].primaries},getTransfer:function(i){return i===js?qc:la[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(la[t].luminanceCoefficients)}};function Rr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yh(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Jo;class Hy{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Jo===void 0&&(Jo=Yc("canvas")),Jo.width=t.width,Jo.height=t.height;const n=Jo.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Jo}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Yc("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Rr(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Rr(e[n]/255)*255):e[n]=Rr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vy=0;class dv{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=$o(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Kh(s[r].image)):o.push(Kh(s[r]))}else o=Kh(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Kh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hy.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gy=0;class Nn extends ta{constructor(t=Nn.DEFAULT_IMAGE,e=Nn.DEFAULT_MAPPING,n=Io,s=Io,o=yi,r=No,a=Mi,l=Ns,c=Nn.DEFAULT_ANISOTROPY,h=js){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=$o(),this.name="",this.source=new dv(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case md:t.x=t.x-Math.floor(t.x);break;case Io:t.x=t.x<0?0:1;break;case gd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case md:t.y=t.y-Math.floor(t.y);break;case Io:t.y=t.y<0?0:1;break;case gd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=tv;Nn.DEFAULT_ANISOTROPY=1;class Fe{constructor(t=0,e=0,n=0,s=1){Fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,M=(f+1)/2,C=(g+1)/2,E=(h+u)/4,T=(d+v)/4,I=(p+m)/4;return _>M&&_>C?_<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(_),s=E/n,o=T/n):M>C?M<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(M),n=E/s,o=I/s):C<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(C),n=T/o,s=I/o),this.set(n,s,o,e),this}let x=Math.sqrt((m-p)*(m-p)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(d-v)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wy extends ta{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Nn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new dv(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends Wy{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fv extends Nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Io,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qy extends Nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Io,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Ei=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const u=o[r+0],f=o[r+1],p=o[r+2],v=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=p,t[e+3]=v;return}if(d!==v||l!==u||c!==f||h!==p){let m=1-a;const g=l*u+c*f+h*p+d*v,x=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const C=Math.sqrt(_),E=Math.atan2(C,g*x);m=Math.sin(m*E)/C,a=Math.sin(a*E)/C}const M=a*x;if(l=l*m+u*M,c=c*m+f*M,h=h*m+p*M,d=d*m+v*M,m===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=o[r],u=o[r+1],f=o[r+2],p=o[r+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(o/2),u=l(n/2),f=l(s/2),p=l(o/2);switch(r){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(r-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(o-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(r-s)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=o*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(s0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(s0.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),d=2*(o*n-r*e);return this.x=e+l*c+r*d-a*h,this.y=n+l*h+a*c-o*d,this.z=s+l*d+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zh.copy(this).projectOnVector(t),this.sub(Zh)}reflect(t){return this.sub(Zh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zh=new R,s0=new Ei;class Fs{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Ci):Ci.fromBufferAttribute(o,r),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dl.copy(n.boundingBox)),Dl.applyMatrix4(t.matrixWorld),this.union(Dl)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ca),Ul.subVectors(this.max,ca),Qo.subVectors(t.a,ca),tr.subVectors(t.b,ca),er.subVectors(t.c,ca),zs.subVectors(tr,Qo),Bs.subVectors(er,tr),mo.subVectors(Qo,er);let e=[0,-zs.z,zs.y,0,-Bs.z,Bs.y,0,-mo.z,mo.y,zs.z,0,-zs.x,Bs.z,0,-Bs.x,mo.z,0,-mo.x,-zs.y,zs.x,0,-Bs.y,Bs.x,0,-mo.y,mo.x,0];return!Jh(e,Qo,tr,er,Ul)||(e=[1,0,0,0,1,0,0,0,1],!Jh(e,Qo,tr,er,Ul))?!1:(Fl.crossVectors(zs,Bs),e=[Fl.x,Fl.y,Fl.z],Jh(e,Qo,tr,er,Ul))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(us[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),us[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),us[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),us[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),us[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),us[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),us[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),us[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(us),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const us=[new R,new R,new R,new R,new R,new R,new R,new R],Ci=new R,Dl=new Fs,Qo=new R,tr=new R,er=new R,zs=new R,Bs=new R,mo=new R,ca=new R,Ul=new R,Fl=new R,go=new R;function Jh(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){go.fromArray(i,o);const a=s.x*Math.abs(go.x)+s.y*Math.abs(go.y)+s.z*Math.abs(go.z),l=t.dot(go),c=e.dot(go),h=n.dot(go);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Xy=new Fs,ha=new R,Qh=new R;let co=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Xy.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ha.subVectors(t,this.center);const e=ha.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ha,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ha.copy(t.center).add(Qh)),this.expandByPoint(ha.copy(t.center).sub(Qh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const ds=new R,tu=new R,Ol=new R,ks=new R,eu=new R,zl=new R,nu=new R;let Hf=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ds)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ds.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ds.copy(this.origin).addScaledVector(this.direction,e),ds.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){tu.copy(t).add(e).multiplyScalar(.5),Ol.copy(e).sub(t).normalize(),ks.copy(this.origin).sub(tu);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ol),a=ks.dot(this.direction),l=-ks.dot(Ol),c=ks.lengthSq(),h=Math.abs(1-r*r);let d,u,f,p;if(h>0)if(d=r*l-a,u=r*a-l,p=o*h,d>=0)if(u>=-p)if(u<=p){const v=1/h;d*=v,u*=v,f=d*(d+r*u+2*a)+u*(r*d+u+2*l)+c}else u=o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u=-o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-r*o+a)),u=d>0?-o:Math.min(Math.max(-o,-l),o),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-o,-l),o),f=u*(u+2*l)+c):(d=Math.max(0,-(r*o+a)),u=d>0?o:Math.min(Math.max(-o,-l),o),f=-d*d+u*(u+2*l)+c);else u=r>0?-o:o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(tu).addScaledVector(Ol,u),f}intersectSphere(t,e){ds.subVectors(t.center,this.origin);const n=ds.dot(this.direction),s=ds.dot(ds)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ds)!==null}intersectTriangle(t,e,n,s,o){eu.subVectors(e,t),zl.subVectors(n,t),nu.crossVectors(eu,zl);let r=this.direction.dot(nu),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ks.subVectors(this.origin,t);const l=a*this.direction.dot(zl.crossVectors(ks,zl));if(l<0)return null;const c=a*this.direction.dot(eu.cross(ks));if(c<0||l+c>r)return null;const h=-a*ks.dot(nu);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class me{constructor(t,e,n,s,o,r,a,l,c,h,d,u,f,p,v,m){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,d,u,f,p,v,m)}set(t,e,n,s,o,r,a,l,c,h,d,u,f,p,v,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=o,g[5]=r,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/nr.setFromMatrixColumn(t,0).length(),o=1/nr.setFromMatrixColumn(t,1).length(),r=1/nr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const u=r*h,f=r*d,p=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=p+f*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,p=c*h,v=c*d;e[0]=u+v*a,e[4]=p*a-f,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-a,e[2]=f*a-p,e[6]=v+u*a,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,p=c*h,v=c*d;e[0]=u-v*a,e[4]=-r*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=r*h,e[9]=v-u*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,f=r*d,p=a*h,v=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,f=r*c,p=a*l,v=a*c;e[0]=l*h,e[4]=v-u*d,e[8]=p*d+f,e[1]=d,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-v*d}else if(t.order==="XZY"){const u=r*l,f=r*c,p=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=r*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($y,t,jy)}lookAt(t,e,n){const s=this.elements;return oi.subVectors(t,e),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Hs.crossVectors(n,oi),Hs.lengthSq()===0&&(Math.abs(n.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Hs.crossVectors(n,oi)),Hs.normalize(),Bl.crossVectors(oi,Hs),s[0]=Hs.x,s[4]=Bl.x,s[8]=oi.x,s[1]=Hs.y,s[5]=Bl.y,s[9]=oi.y,s[2]=Hs.z,s[6]=Bl.z,s[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],v=n[6],m=n[10],g=n[14],x=n[3],_=n[7],M=n[11],C=n[15],E=s[0],T=s[4],I=s[8],V=s[12],y=s[1],S=s[5],B=s[9],D=s[13],F=s[2],k=s[6],U=s[10],tt=s[14],q=s[3],nt=s[7],pt=s[11],dt=s[15];return o[0]=r*E+a*y+l*F+c*q,o[4]=r*T+a*S+l*k+c*nt,o[8]=r*I+a*B+l*U+c*pt,o[12]=r*V+a*D+l*tt+c*dt,o[1]=h*E+d*y+u*F+f*q,o[5]=h*T+d*S+u*k+f*nt,o[9]=h*I+d*B+u*U+f*pt,o[13]=h*V+d*D+u*tt+f*dt,o[2]=p*E+v*y+m*F+g*q,o[6]=p*T+v*S+m*k+g*nt,o[10]=p*I+v*B+m*U+g*pt,o[14]=p*V+v*D+m*tt+g*dt,o[3]=x*E+_*y+M*F+C*q,o[7]=x*T+_*S+M*k+C*nt,o[11]=x*I+_*B+M*U+C*pt,o[15]=x*V+_*D+M*tt+C*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],v=t[7],m=t[11],g=t[15];return p*(+o*l*d-s*c*d-o*a*u+n*c*u+s*a*f-n*l*f)+v*(+e*l*f-e*c*u+o*r*u-s*r*f+s*c*h-o*l*h)+m*(+e*c*d-e*a*f-o*r*d+n*r*f+o*a*h-n*c*h)+g*(-s*a*h-e*l*d+e*a*u+s*r*d-n*r*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],v=t[13],m=t[14],g=t[15],x=d*m*c-v*u*c+v*l*f-a*m*f-d*l*g+a*u*g,_=p*u*c-h*m*c-p*l*f+r*m*f+h*l*g-r*u*g,M=h*v*c-p*d*c+p*a*f-r*v*f-h*a*g+r*d*g,C=p*d*l-h*v*l-p*a*u+r*v*u+h*a*m-r*d*m,E=e*x+n*_+s*M+o*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=x*T,t[1]=(v*u*o-d*m*o-v*s*f+n*m*f+d*s*g-n*u*g)*T,t[2]=(a*m*o-v*l*o+v*s*c-n*m*c-a*s*g+n*l*g)*T,t[3]=(d*l*o-a*u*o-d*s*c+n*u*c+a*s*f-n*l*f)*T,t[4]=_*T,t[5]=(h*m*o-p*u*o+p*s*f-e*m*f-h*s*g+e*u*g)*T,t[6]=(p*l*o-r*m*o-p*s*c+e*m*c+r*s*g-e*l*g)*T,t[7]=(r*u*o-h*l*o+h*s*c-e*u*c-r*s*f+e*l*f)*T,t[8]=M*T,t[9]=(p*d*o-h*v*o-p*n*f+e*v*f+h*n*g-e*d*g)*T,t[10]=(r*v*o-p*a*o+p*n*c-e*v*c-r*n*g+e*a*g)*T,t[11]=(h*a*o-r*d*o-h*n*c+e*d*c+r*n*f-e*a*f)*T,t[12]=C*T,t[13]=(h*v*s-p*d*s+p*n*u-e*v*u-h*n*m+e*d*m)*T,t[14]=(p*a*s-r*v*s-p*n*l+e*v*l+r*n*m-e*a*m)*T,t[15]=(r*d*s-h*a*s+h*n*l-e*d*l-r*n*u+e*a*u)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,d=a+a,u=o*c,f=o*h,p=o*d,v=r*h,m=r*d,g=a*d,x=l*c,_=l*h,M=l*d,C=n.x,E=n.y,T=n.z;return s[0]=(1-(v+g))*C,s[1]=(f+M)*C,s[2]=(p-_)*C,s[3]=0,s[4]=(f-M)*E,s[5]=(1-(u+g))*E,s[6]=(m+x)*E,s[7]=0,s[8]=(p+_)*T,s[9]=(m-x)*T,s[10]=(1-(u+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=nr.set(s[0],s[1],s[2]).length();const r=nr.set(s[4],s[5],s[6]).length(),a=nr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Ri.copy(this);const c=1/o,h=1/r,d=1/a;return Ri.elements[0]*=c,Ri.elements[1]*=c,Ri.elements[2]*=c,Ri.elements[4]*=h,Ri.elements[5]*=h,Ri.elements[6]*=h,Ri.elements[8]*=d,Ri.elements[9]*=d,Ri.elements[10]*=d,e.setFromRotationMatrix(Ri),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Es){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let f,p;if(a===Es)f=-(r+o)/(r-o),p=-2*r*o/(r-o);else if(a===jc)f=-r/(r-o),p=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Es){const l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(r-o),u=(e+t)*c,f=(n+s)*h;let p,v;if(a===Es)p=(r+o)*d,v=-2*d;else if(a===jc)p=o*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const nr=new R,Ri=new me,$y=new R(0,0,0),jy=new R(1,1,1),Hs=new R,Bl=new R,oi=new R,o0=new me,r0=new Ei;class Gn{constructor(t=0,e=0,n=0,s=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(xn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-xn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-xn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return o0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(o0,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return r0.setFromEuler(this),this.setFromQuaternion(r0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class pv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yy=0;const a0=new R,ir=new Ei,fs=new me,kl=new R,ua=new R,Ky=new R,Zy=new Ei,l0=new R(1,0,0),c0=new R(0,1,0),h0=new R(0,0,1),u0={type:"added"},Jy={type:"removed"},sr={type:"childadded",child:null},iu={type:"childremoved",child:null};class rn extends ta{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const t=new R,e=new Gn,n=new Ei,s=new R(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new ue}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.multiply(ir),this}rotateOnWorldAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.premultiply(ir),this}rotateX(t){return this.rotateOnAxis(l0,t)}rotateY(t){return this.rotateOnAxis(c0,t)}rotateZ(t){return this.rotateOnAxis(h0,t)}translateOnAxis(t,e){return a0.copy(t).applyQuaternion(this.quaternion),this.position.add(a0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(l0,t)}translateY(t){return this.translateOnAxis(c0,t)}translateZ(t){return this.translateOnAxis(h0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kl.copy(t):kl.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fs.lookAt(ua,kl,this.up):fs.lookAt(kl,ua,this.up),this.quaternion.setFromRotationMatrix(fs),s&&(fs.extractRotation(s.matrixWorld),ir.setFromRotationMatrix(fs),this.quaternion.premultiply(ir.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(u0),sr.child=t,this.dispatchEvent(sr),sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jy),iu.child=t,this.dispatchEvent(iu),iu.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fs.multiply(t.parent.matrixWorld)),t.applyMatrix4(fs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(u0),sr.child=t,this.dispatchEvent(sr),sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,t,Ky),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,Zy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),f=r(t.animations),p=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}rn.DEFAULT_UP=new R(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pi=new R,ps=new R,su=new R,ms=new R,or=new R,rr=new R,d0=new R,ou=new R,ru=new R,au=new R,lu=new Fe,cu=new Fe,hu=new Fe;class Fi{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pi.subVectors(t,e),s.cross(Pi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Pi.subVectors(s,e),ps.subVectors(n,e),su.subVectors(t,e);const r=Pi.dot(Pi),a=Pi.dot(ps),l=Pi.dot(su),c=ps.dot(ps),h=ps.dot(su),d=r*c-a*a;if(d===0)return o.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,p=(r*h-a*l)*u;return o.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ms)===null?!1:ms.x>=0&&ms.y>=0&&ms.x+ms.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,ms)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,ms.x),l.addScaledVector(r,ms.y),l.addScaledVector(a,ms.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return lu.setScalar(0),cu.setScalar(0),hu.setScalar(0),lu.fromBufferAttribute(t,e),cu.fromBufferAttribute(t,n),hu.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(lu,o.x),r.addScaledVector(cu,o.y),r.addScaledVector(hu,o.z),r}static isFrontFacing(t,e,n,s){return Pi.subVectors(n,e),ps.subVectors(t,e),Pi.cross(ps).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),ps.subVectors(this.a,this.b),Pi.cross(ps).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Fi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return Fi.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return Fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;or.subVectors(s,n),rr.subVectors(o,n),ou.subVectors(t,n);const l=or.dot(ou),c=rr.dot(ou);if(l<=0&&c<=0)return e.copy(n);ru.subVectors(t,s);const h=or.dot(ru),d=rr.dot(ru);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(or,r);au.subVectors(t,o);const f=or.dot(au),p=rr.dot(au);if(p>=0&&f<=p)return e.copy(o);const v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(rr,a);const m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return d0.subVectors(o,s),a=(d-h)/(d-h+(f-p)),e.copy(s).addScaledVector(d0,a);const g=1/(m+v+u);return r=v*g,a=u*g,e.copy(n).addScaledVector(or,r).addScaledVector(rr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vs={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function uu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_i){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ce.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ce.workingColorSpace){if(t=kf(t,1),e=xn(e,0,1),n=xn(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=uu(r,o,t+1/3),this.g=uu(r,o,t),this.b=uu(r,o,t-1/3)}return Ce.toWorkingColorSpace(this,s),this}setStyle(t,e=_i){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_i){const n=mv[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rr(t.r),this.g=Rr(t.g),this.b=Rr(t.b),this}copyLinearToSRGB(t){return this.r=Yh(t.r),this.g=Yh(t.g),this.b=Yh(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_i){return Ce.fromWorkingColorSpace(Pn.copy(this),t),Math.round(xn(Pn.r*255,0,255))*65536+Math.round(xn(Pn.g*255,0,255))*256+Math.round(xn(Pn.b*255,0,255))}getHexString(t=_i){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ce.workingColorSpace){Ce.fromWorkingColorSpace(Pn.copy(this),e);const n=Pn.r,s=Pn.g,o=Pn.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const d=r-a;switch(c=h<=.5?d/(r+a):d/(2-r-a),r){case n:l=(s-o)/d+(s<o?6:0);break;case s:l=(o-n)/d+2;break;case o:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(Pn.copy(this),e),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=_i){Ce.fromWorkingColorSpace(Pn.copy(this),t);const e=Pn.r,n=Pn.g,s=Pn.b;return t!==_i?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vs),this.setHSL(Vs.h+t,Vs.s+e,Vs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vs),t.getHSL(Hl);const n=Ba(Vs.h,Hl.h,e),s=Ba(Vs.s,Hl.s,e),o=Ba(Vs.l,Hl.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new ut;ut.NAMES=mv;let Qy=0,ho=class extends ta{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=Ar,this.side=oo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=od,this.blendEquation=Co,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zo,this.stencilZFail=Zo,this.stencilZPass=Zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(n.blending=this.blending),this.side!==oo&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sd&&(n.blendSrc=this.blendSrc),this.blendDst!==od&&(n.blendDst=this.blendDst),this.blendEquation!==Co&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class ui extends ho{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Pf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ln=new R,Vl=new rt;class en{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jp,this.updateRanges=[],this.gpuType=is,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vl.fromBufferAttribute(this,e),Vl.applyMatrix3(t),this.setXY(e,Vl.x,Vl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix3(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=On(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xr(e,this.array)),e}setX(t,e){return this.normalized&&(e=On(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xr(e,this.array)),e}setY(t,e){return this.normalized&&(e=On(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=On(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xr(e,this.array)),e}setW(t,e){return this.normalized&&(e=On(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=On(e,this.array),n=On(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=On(e,this.array),n=On(n,this.array),s=On(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=On(e,this.array),n=On(n,this.array),s=On(s,this.array),o=On(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jp&&(t.usage=this.usage),t}}class gv extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class vv extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Se extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}}let t1=0;const mi=new me,du=new rn,ar=new R,ri=new Fs,da=new Fs,gn=new R;class Qe extends ta{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uv(t)?vv:gv)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ue().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,e,n){return mi.makeTranslation(t,e,n),this.applyMatrix4(mi),this}scale(t,e,n){return mi.makeScale(t,e,n),this.applyMatrix4(mi),this}lookAt(t){return du.lookAt(t),du.updateMatrix(),this.applyMatrix4(du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];ri.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new co);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];da.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(ri.min,da.min),ri.expandByPoint(gn),gn.addVectors(ri.max,da.max),ri.expandByPoint(gn)):(ri.expandByPoint(da.min),ri.expandByPoint(da.max))}ri.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)gn.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(gn));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)gn.fromBufferAttribute(a,c),l&&(ar.fromBufferAttribute(t,c),gn.add(ar)),s=Math.max(s,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new R,l[I]=new R;const c=new R,h=new R,d=new R,u=new rt,f=new rt,p=new rt,v=new R,m=new R;function g(I,V,y){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,V),d.fromBufferAttribute(n,y),u.fromBufferAttribute(o,I),f.fromBufferAttribute(o,V),p.fromBufferAttribute(o,y),h.sub(c),d.sub(c),f.sub(u),p.sub(u);const S=1/(f.x*p.y-p.x*f.y);isFinite(S)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(S),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(S),a[I].add(v),a[V].add(v),a[y].add(v),l[I].add(m),l[V].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,V=x.length;I<V;++I){const y=x[I],S=y.start,B=y.count;for(let D=S,F=S+B;D<F;D+=3)g(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const _=new R,M=new R,C=new R,E=new R;function T(I){C.fromBufferAttribute(s,I),E.copy(C);const V=a[I];_.copy(V),_.sub(C.multiplyScalar(C.dot(V))).normalize(),M.crossVectors(E,V);const S=M.dot(l[I])<0?-1:1;r.setXYZW(I,_.x,_.y,_.z,S)}for(let I=0,V=x.length;I<V;++I){const y=x[I],S=y.start,B=y.count;for(let D=S,F=S+B;D<F;D+=3)T(t.getX(D+0)),T(t.getX(D+1)),T(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new R,o=new R,r=new R,a=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){const p=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,v),r.fromBufferAttribute(e,m),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)gn.fromBufferAttribute(t,e),gn.normalize(),t.setXYZ(e,gn.x,gn.y,gn.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,p=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new en(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],d=o[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const f0=new me,vo=new Hf,Gl=new co,p0=new R,Wl=new R,ql=new R,Xl=new R,fu=new R,$l=new R,m0=new R,jl=new R;class Xe extends rn{constructor(t=new Qe,e=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){$l.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],d=o[l];h!==0&&(fu.fromBufferAttribute(d,t),r?$l.addScaledVector(fu,h):$l.addScaledVector(fu.sub(e),h))}e.add($l)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gl.copy(n.boundingSphere),Gl.applyMatrix4(o),vo.copy(t.ray).recast(t.near),!(Gl.containsPoint(vo.origin)===!1&&(vo.intersectSphere(Gl,p0)===null||vo.origin.distanceToSquared(p0)>(t.far-t.near)**2))&&(f0.copy(o).invert(),vo.copy(t.ray).applyMatrix4(f0),!(n.boundingBox!==null&&vo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vo)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,u=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,v=u.length;p<v;p++){const m=u[p],g=r[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,C=_;M<C;M+=3){const E=a.getX(M),T=a.getX(M+1),I=a.getX(M+2);s=Yl(this,g,t,n,c,h,d,E,T,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){const x=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);s=Yl(this,r,t,n,c,h,d,x,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,v=u.length;p<v;p++){const m=u[p],g=r[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,C=_;M<C;M+=3){const E=M,T=M+1,I=M+2;s=Yl(this,g,t,n,c,h,d,E,T,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){const x=m,_=m+1,M=m+2;s=Yl(this,r,t,n,c,h,d,x,_,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function e1(i,t,e,n,s,o,r,a){let l;if(t.side===Jn?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===oo,a),l===null)return null;jl.copy(a),jl.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(jl);return c<e.near||c>e.far?null:{distance:c,point:jl.clone(),object:i}}function Yl(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,Wl),i.getVertexPosition(l,ql),i.getVertexPosition(c,Xl);const h=e1(i,t,e,n,Wl,ql,Xl,m0);if(h){const d=new R;Fi.getBarycoord(m0,Wl,ql,Xl,d),s&&(h.uv=Fi.getInterpolatedAttribute(s,a,l,c,d,new rt)),o&&(h.uv1=Fi.getInterpolatedAttribute(o,a,l,c,d,new rt)),r&&(h.normal=Fi.getInterpolatedAttribute(r,a,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new R,materialIndex:0};Fi.getNormal(Wl,ql,Xl,u.normal),h.face=u,h.barycoord=d}return h}class Ut extends Qe{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,f=0;p("z","y","x",-1,-1,n,e,t,r,o,0),p("z","y","x",1,-1,n,e,-t,r,o,1),p("x","z","y",1,1,t,n,e,s,r,2),p("x","z","y",1,-1,t,n,-e,s,r,3),p("x","y","z",1,-1,t,e,n,s,o,4),p("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(d,2));function p(v,m,g,x,_,M,C,E,T,I,V){const y=M/T,S=C/I,B=M/2,D=C/2,F=E/2,k=T+1,U=I+1;let tt=0,q=0;const nt=new R;for(let pt=0;pt<U;pt++){const dt=pt*S-D;for(let mt=0;mt<k;mt++){const de=mt*y-B;nt[v]=de*x,nt[m]=dt*_,nt[g]=F,c.push(nt.x,nt.y,nt.z),nt[v]=0,nt[m]=0,nt[g]=E>0?1:-1,h.push(nt.x,nt.y,nt.z),d.push(mt/T),d.push(1-pt/I),tt+=1}}for(let pt=0;pt<I;pt++)for(let dt=0;dt<T;dt++){const mt=u+dt+k*pt,de=u+dt+k*(pt+1),Z=u+(dt+1)+k*(pt+1),at=u+(dt+1)+k*pt;l.push(mt,de,at),l.push(de,Z,at),q+=6}a.addGroup(f,q,V),f+=q,u+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ut(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function zn(i){const t={};for(let e=0;e<i.length;e++){const n=Gr(i[e]);for(const s in n)t[s]=n[s]}return t}function n1(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function xv(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const tl={clone:Gr,merge:zn};var i1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends ho{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i1,this.fragmentShader=s1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gr(t.uniforms),this.uniformsGroups=n1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _v extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Es}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gs=new R,g0=new rt,v0=new rt;class En extends _v{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gs.x,Gs.y).multiplyScalar(-t/Gs.z),Gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gs.x,Gs.y).multiplyScalar(-t/Gs.z)}getViewSize(t,e){return this.getViewBounds(t,g0,v0),e.subVectors(v0,g0)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(za*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const lr=-90,cr=1;class o1 extends rn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(lr,cr,t,e);s.layers=this.layers,this.add(s);const o=new En(lr,cr,t,e);o.layers=this.layers,this.add(o);const r=new En(lr,cr,t,e);r.layers=this.layers,this.add(r);const a=new En(lr,cr,t,e);a.layers=this.layers,this.add(a);const l=new En(lr,cr,t,e);l.layers=this.layers,this.add(l);const c=new En(lr,cr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===Es)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===jc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class yv extends Nn{constructor(t,e,n,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:zr,super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class r1 extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new yv(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ut(5,5,5),o=new An({name:"CubemapFromEquirect",uniforms:Gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jn,blending:Rs});o.uniforms.tEquirect.value=e;const r=new Xe(s,o),a=e.minFilter;return e.minFilter===No&&(e.minFilter=yi),new o1(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const pu=new R,a1=new R,l1=new ue;class Eo{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=pu.subVectors(n,e).cross(a1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(pu),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||l1.getNormalMatrix(t),s=this.coplanarPoint(pu).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xo=new co,Kl=new R;class Vf{constructor(t=new Eo,e=new Eo,n=new Eo,s=new Eo,o=new Eo,r=new Eo){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Es){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],p=s[9],v=s[10],m=s[11],g=s[12],x=s[13],_=s[14],M=s[15];if(n[0].setComponents(l-o,u-c,m-f,M-g).normalize(),n[1].setComponents(l+o,u+c,m+f,M+g).normalize(),n[2].setComponents(l+r,u+h,m+p,M+x).normalize(),n[3].setComponents(l-r,u-h,m-p,M-x).normalize(),n[4].setComponents(l-a,u-d,m-v,M-_).normalize(),e===Es)n[5].setComponents(l+a,u+d,m+v,M+_).normalize();else if(e===jc)n[5].setComponents(a,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xo.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xo)}intersectsSprite(t){return xo.center.set(0,0,0),xo.radius=.7071067811865476,xo.applyMatrix4(t.matrixWorld),this.intersectsSphere(xo)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Kl.x=s.normal.x>0?t.max.x:t.min.x,Kl.y=s.normal.y>0?t.max.y:t.min.y,Kl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mv(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function c1(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){const p=d[u],v=d[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){const v=d[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}class Ti extends Qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],v=[],m=[];for(let g=0;g<h;g++){const x=g*u-r;for(let _=0;_<c;_++){const M=_*d-o;p.push(M,-x,0),v.push(0,0,1),m.push(_/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){const _=x+c*g,M=x+c*(g+1),C=x+1+c*(g+1),E=x+1+c*g;f.push(_,M,E),f.push(M,C,E)}this.setIndex(f),this.setAttribute("position",new Se(p,3)),this.setAttribute("normal",new Se(v,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.width,t.height,t.widthSegments,t.heightSegments)}}var h1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u1=`#ifdef USE_ALPHAHASH
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
#endif`,d1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g1=`#ifdef USE_AOMAP
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
#endif`,v1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x1=`#ifdef USE_BATCHING
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
#endif`,_1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S1=`#ifdef USE_IRIDESCENCE
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
#endif`,b1=`#ifdef USE_BUMPMAP
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
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,P1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,I1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,N1=`#define PI 3.141592653589793
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
} // validated`,D1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,U1=`vec3 transformedNormal = objectNormal;
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
#endif`,F1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k1="gl_FragColor = linearToOutputTexel( gl_FragColor );",H1=`
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
}`,V1=`#ifdef USE_ENVMAP
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
#endif`,G1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,W1=`#ifdef USE_ENVMAP
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
#endif`,q1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X1=`#ifdef USE_ENVMAP
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
#endif`,$1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z1=`#ifdef USE_GRADIENTMAP
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
}`,J1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eM=`uniform bool receiveShadow;
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
#endif`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aM=`PhysicalMaterial material;
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
#endif`,lM=`struct PhysicalMaterial {
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
}`,cM=`
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
#endif`,hM=`#if defined( RE_IndirectDiffuse )
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
#endif`,uM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_M=`#if defined( USE_POINTS_UV )
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
#endif`,yM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EM=`#ifdef USE_MORPHTARGETS
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
#endif`,TM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IM=`#ifdef USE_NORMALMAP
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
#endif`,NM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,BM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$M=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jM=`float getShadowMask() {
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
}`,YM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KM=`#ifdef USE_SKINNING
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
#endif`,ZM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JM=`#ifdef USE_SKINNING
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
#endif`,QM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ew=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iw=`#ifdef USE_TRANSMISSION
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
#endif`,sw=`#ifdef USE_TRANSMISSION
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
#endif`,ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hw=`uniform sampler2D t2D;
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
}`,uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mw=`#include <common>
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
}`,gw=`#if DEPTH_PACKING == 3200
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
}`,vw=`#define DISTANCE
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
}`,xw=`#define DISTANCE
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
}`,_w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mw=`uniform float scale;
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
}`,ww=`uniform vec3 diffuse;
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
}`,Sw=`#include <common>
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
}`,bw=`uniform vec3 diffuse;
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
}`,Ew=`#define LAMBERT
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
}`,Tw=`#define LAMBERT
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
}`,Aw=`#define MATCAP
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
}`,Cw=`#define MATCAP
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
}`,Rw=`#define NORMAL
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
}`,Pw=`#define NORMAL
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
}`,Lw=`#define PHONG
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
}`,Iw=`#define PHONG
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
}`,Nw=`#define STANDARD
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
}`,Dw=`#define STANDARD
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
}`,Uw=`#define TOON
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
}`,Fw=`#define TOON
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
}`,Ow=`uniform float size;
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
}`,zw=`uniform vec3 diffuse;
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
}`,Bw=`#include <common>
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
}`,kw=`uniform vec3 color;
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
}`,Hw=`uniform float rotation;
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
}`,Vw=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:h1,alphahash_pars_fragment:u1,alphamap_fragment:d1,alphamap_pars_fragment:f1,alphatest_fragment:p1,alphatest_pars_fragment:m1,aomap_fragment:g1,aomap_pars_fragment:v1,batching_pars_vertex:x1,batching_vertex:_1,begin_vertex:y1,beginnormal_vertex:M1,bsdfs:w1,iridescence_fragment:S1,bumpmap_pars_fragment:b1,clipping_planes_fragment:E1,clipping_planes_pars_fragment:T1,clipping_planes_pars_vertex:A1,clipping_planes_vertex:C1,color_fragment:R1,color_pars_fragment:P1,color_pars_vertex:L1,color_vertex:I1,common:N1,cube_uv_reflection_fragment:D1,defaultnormal_vertex:U1,displacementmap_pars_vertex:F1,displacementmap_vertex:O1,emissivemap_fragment:z1,emissivemap_pars_fragment:B1,colorspace_fragment:k1,colorspace_pars_fragment:H1,envmap_fragment:V1,envmap_common_pars_fragment:G1,envmap_pars_fragment:W1,envmap_pars_vertex:q1,envmap_physical_pars_fragment:nM,envmap_vertex:X1,fog_vertex:$1,fog_pars_vertex:j1,fog_fragment:Y1,fog_pars_fragment:K1,gradientmap_pars_fragment:Z1,lightmap_pars_fragment:J1,lights_lambert_fragment:Q1,lights_lambert_pars_fragment:tM,lights_pars_begin:eM,lights_toon_fragment:iM,lights_toon_pars_fragment:sM,lights_phong_fragment:oM,lights_phong_pars_fragment:rM,lights_physical_fragment:aM,lights_physical_pars_fragment:lM,lights_fragment_begin:cM,lights_fragment_maps:hM,lights_fragment_end:uM,logdepthbuf_fragment:dM,logdepthbuf_pars_fragment:fM,logdepthbuf_pars_vertex:pM,logdepthbuf_vertex:mM,map_fragment:gM,map_pars_fragment:vM,map_particle_fragment:xM,map_particle_pars_fragment:_M,metalnessmap_fragment:yM,metalnessmap_pars_fragment:MM,morphinstance_vertex:wM,morphcolor_vertex:SM,morphnormal_vertex:bM,morphtarget_pars_vertex:EM,morphtarget_vertex:TM,normal_fragment_begin:AM,normal_fragment_maps:CM,normal_pars_fragment:RM,normal_pars_vertex:PM,normal_vertex:LM,normalmap_pars_fragment:IM,clearcoat_normal_fragment_begin:NM,clearcoat_normal_fragment_maps:DM,clearcoat_pars_fragment:UM,iridescence_pars_fragment:FM,opaque_fragment:OM,packing:zM,premultiplied_alpha_fragment:BM,project_vertex:kM,dithering_fragment:HM,dithering_pars_fragment:VM,roughnessmap_fragment:GM,roughnessmap_pars_fragment:WM,shadowmap_pars_fragment:qM,shadowmap_pars_vertex:XM,shadowmap_vertex:$M,shadowmask_pars_fragment:jM,skinbase_vertex:YM,skinning_pars_vertex:KM,skinning_vertex:ZM,skinnormal_vertex:JM,specularmap_fragment:QM,specularmap_pars_fragment:tw,tonemapping_fragment:ew,tonemapping_pars_fragment:nw,transmission_fragment:iw,transmission_pars_fragment:sw,uv_pars_fragment:ow,uv_pars_vertex:rw,uv_vertex:aw,worldpos_vertex:lw,background_vert:cw,background_frag:hw,backgroundCube_vert:uw,backgroundCube_frag:dw,cube_vert:fw,cube_frag:pw,depth_vert:mw,depth_frag:gw,distanceRGBA_vert:vw,distanceRGBA_frag:xw,equirect_vert:_w,equirect_frag:yw,linedashed_vert:Mw,linedashed_frag:ww,meshbasic_vert:Sw,meshbasic_frag:bw,meshlambert_vert:Ew,meshlambert_frag:Tw,meshmatcap_vert:Aw,meshmatcap_frag:Cw,meshnormal_vert:Rw,meshnormal_frag:Pw,meshphong_vert:Lw,meshphong_frag:Iw,meshphysical_vert:Nw,meshphysical_frag:Dw,meshtoon_vert:Uw,meshtoon_frag:Fw,points_vert:Ow,points_frag:zw,shadow_vert:Bw,shadow_frag:kw,sprite_vert:Hw,sprite_frag:Vw},wt={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Ji={basic:{uniforms:zn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:zn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new ut(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:zn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:zn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:zn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new ut(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:zn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:zn([wt.points,wt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:zn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:zn([wt.common,wt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:zn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:zn([wt.sprite,wt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:zn([wt.common,wt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:zn([wt.lights,wt.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ji.physical={uniforms:zn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Zl={r:0,b:0,g:0},_o=new Gn,Gw=new me;function Ww(i,t,e,n,s,o,r){const a=new ut(0);let l=o===!0?0:1,c,h,d=null,u=0,f=null;function p(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function v(x){let _=!1;const M=p(x);M===null?g(a,l):M&&M.isColor&&(g(M,1),_=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,_){const M=p(_);M&&(M.isCubeTexture||M.mapping===vh)?(h===void 0&&(h=new Xe(new Ut(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Gr(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_o.copy(_.backgroundRotation),_o.x*=-1,_o.y*=-1,_o.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(_o.y*=-1,_o.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gw.makeRotationFromEuler(_o)),h.material.toneMapped=Ce.getTransfer(M.colorSpace)!==Be,(d!==M||u!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=M,u=M.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Xe(new Ti(2,2),new An({name:"BackgroundMaterial",uniforms:Gr(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:oo,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Ce.getTransfer(M.colorSpace)!==Be,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,u=M.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,_){x.getRGB(Zl,xv(i)),n.buffers.color.setClear(Zl.r,Zl.g,Zl.b,_,r)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(a,l)},render:v,addToRenderList:m}}function qw(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let o=s,r=!1;function a(y,S,B,D,F){let k=!1;const U=d(D,B,S);o!==U&&(o=U,c(o.object)),k=f(y,D,B,F),k&&p(y,D,B,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(k||r)&&(r=!1,M(y,S,B,D),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,S,B){const D=B.wireframe===!0;let F=n[y.id];F===void 0&&(F={},n[y.id]=F);let k=F[S.id];k===void 0&&(k={},F[S.id]=k);let U=k[D];return U===void 0&&(U=u(l()),k[D]=U),U}function u(y){const S=[],B=[],D=[];for(let F=0;F<e;F++)S[F]=0,B[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:B,attributeDivisors:D,object:y,attributes:{},index:null}}function f(y,S,B,D){const F=o.attributes,k=S.attributes;let U=0;const tt=B.getAttributes();for(const q in tt)if(tt[q].location>=0){const pt=F[q];let dt=k[q];if(dt===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor)),pt===void 0||pt.attribute!==dt||dt&&pt.data!==dt.data)return!0;U++}return o.attributesNum!==U||o.index!==D}function p(y,S,B,D){const F={},k=S.attributes;let U=0;const tt=B.getAttributes();for(const q in tt)if(tt[q].location>=0){let pt=k[q];pt===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(pt=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(pt=y.instanceColor));const dt={};dt.attribute=pt,pt&&pt.data&&(dt.data=pt.data),F[q]=dt,U++}o.attributes=F,o.attributesNum=U,o.index=D}function v(){const y=o.newAttributes;for(let S=0,B=y.length;S<B;S++)y[S]=0}function m(y){g(y,0)}function g(y,S){const B=o.newAttributes,D=o.enabledAttributes,F=o.attributeDivisors;B[y]=1,D[y]===0&&(i.enableVertexAttribArray(y),D[y]=1),F[y]!==S&&(i.vertexAttribDivisor(y,S),F[y]=S)}function x(){const y=o.newAttributes,S=o.enabledAttributes;for(let B=0,D=S.length;B<D;B++)S[B]!==y[B]&&(i.disableVertexAttribArray(B),S[B]=0)}function _(y,S,B,D,F,k,U){U===!0?i.vertexAttribIPointer(y,S,B,F,k):i.vertexAttribPointer(y,S,B,D,F,k)}function M(y,S,B,D){v();const F=D.attributes,k=B.getAttributes(),U=S.defaultAttributeValues;for(const tt in k){const q=k[tt];if(q.location>=0){let nt=F[tt];if(nt===void 0&&(tt==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),tt==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor)),nt!==void 0){const pt=nt.normalized,dt=nt.itemSize,mt=t.get(nt);if(mt===void 0)continue;const de=mt.buffer,Z=mt.type,at=mt.bytesPerElement,Tt=Z===i.INT||Z===i.UNSIGNED_INT||nt.gpuType===Lf;if(nt.isInterleavedBufferAttribute){const xt=nt.data,Yt=xt.stride,$t=nt.offset;if(xt.isInstancedInterleavedBuffer){for(let se=0;se<q.locationSize;se++)g(q.location+se,xt.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let se=0;se<q.locationSize;se++)m(q.location+se);i.bindBuffer(i.ARRAY_BUFFER,de);for(let se=0;se<q.locationSize;se++)_(q.location+se,dt/q.locationSize,Z,pt,Yt*at,($t+dt/q.locationSize*se)*at,Tt)}else{if(nt.isInstancedBufferAttribute){for(let xt=0;xt<q.locationSize;xt++)g(q.location+xt,nt.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let xt=0;xt<q.locationSize;xt++)m(q.location+xt);i.bindBuffer(i.ARRAY_BUFFER,de);for(let xt=0;xt<q.locationSize;xt++)_(q.location+xt,dt/q.locationSize,Z,pt,dt*at,dt/q.locationSize*xt*at,Tt)}}else if(U!==void 0){const pt=U[tt];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(q.location,pt);break;case 3:i.vertexAttrib3fv(q.location,pt);break;case 4:i.vertexAttrib4fv(q.location,pt);break;default:i.vertexAttrib1fv(q.location,pt)}}}}x()}function C(){I();for(const y in n){const S=n[y];for(const B in S){const D=S[B];for(const F in D)h(D[F].object),delete D[F];delete S[B]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;const S=n[y.id];for(const B in S){const D=S[B];for(const F in D)h(D[F].object),delete D[F];delete S[B]}delete n[y.id]}function T(y){for(const S in n){const B=n[S];if(B[y.id]===void 0)continue;const D=B[y.id];for(const F in D)h(D[F].object),delete D[F];delete B[y.id]}}function I(){V(),r=!0,o!==s&&(o=s,c(o.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:V,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Xw(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let p=0;p<d;p++)f+=h[p];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)r(c[p],h[p],u[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=h[v];for(let v=0;v<u.length;v++)e.update(p,n,u[v])}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $w(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(T){return!(T!==Mi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const I=T===Gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Ns&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==is&&!I)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:C,maxSamples:E}}function jw(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new Eo,a=new ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const p=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||o&&!m)o?h(null):c();else{const x=o?0:n,_=x*4;let M=g.clippingState||null;l.value=M,M=h(p,u,_,f);for(let C=0;C!==_;++C)M[C]=e[C];g.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,p!==!0||m===null){const g=f+v*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let _=0,M=f;_!==v;++_,M+=4)r.copy(d[_]).applyMatrix4(x,a),r.normal.toArray(m,M),m[M+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Yw(i){let t=new WeakMap;function e(r,a){return a===fd?r.mapping=zr:a===pd&&(r.mapping=Br),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===fd||a===pd)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new r1(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Gf extends _v{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const yr=4,x0=[.125,.215,.35,.446,.526,.582],Ro=20,mu=new Gf,_0=new ut;let gu=null,vu=0,xu=0,_u=!1;const To=(1+Math.sqrt(5))/2,hr=1/To,y0=[new R(-To,hr,0),new R(To,hr,0),new R(-hr,0,To),new R(hr,0,To),new R(0,To,-hr),new R(0,To,hr),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class M0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){gu=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),xu=this._renderer.getActiveMipmapLevel(),_u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=S0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(gu,vu,xu),this._renderer.xr.enabled=_u,t.scissorTest=!1,Jl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zr||t.mapping===Br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gu=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),xu=this._renderer.getActiveMipmapLevel(),_u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Gi,format:Mi,colorSpace:lo,depthBuffer:!1},s=w0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=w0(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kw(o)),this._blurMaterial=Zw(o,t,e)}return s}_compileMaterial(t){const e=new Xe(this._lodPlanes[0],t);this._renderer.compile(e,mu)}_sceneToCubeUV(t,e,n,s){const a=new En(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(_0),h.toneMapping=eo,h.autoClear=!1;const f=new ui({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),p=new Xe(new Ut,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(_0),v=!0);for(let g=0;g<6;g++){const x=g%3;x===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):x===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const _=this._cubeSize;Jl(s,x*_,g>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===zr||t.mapping===Br;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=b0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=S0());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Xe(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Jl(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,mu)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=y0[(s-o-1)%y0.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Xe(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Ro-1),v=o/p,m=isFinite(o)?1+Math.floor(h*v):Ro;m>Ro&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ro}`);const g=[];let x=0;for(let T=0;T<Ro;++T){const I=T/v,V=Math.exp(-I*I/2);g.push(V),T===0?x+=V:T<m&&(x+=2*V)}for(let T=0;T<g.length;T++)g[T]=g[T]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=g,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=p,u.mipInt.value=_-n;const M=this._sizeLods[s],C=3*M*(s>_-yr?s-_+yr:0),E=4*(this._cubeSize-M);Jl(e,C,E,3*M,2*M),l.setRenderTarget(e),l.render(d,mu)}}function Kw(i){const t=[],e=[],n=[];let s=i;const o=i-yr+1+x0.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>i-yr?l=x0[r-i+yr-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,p=6,v=3,m=2,g=1,x=new Float32Array(v*p*f),_=new Float32Array(m*p*f),M=new Float32Array(g*p*f);for(let E=0;E<f;E++){const T=E%3*2/3-1,I=E>2?0:-1,V=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];x.set(V,v*p*E),_.set(u,m*p*E);const y=[E,E,E,E,E,E];M.set(y,g*p*E)}const C=new Qe;C.setAttribute("position",new en(x,v)),C.setAttribute("uv",new en(_,m)),C.setAttribute("faceIndex",new en(M,g)),t.push(C),s>yr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function w0(i,t,e){const n=new ci(i,t,e);return n.texture.mapping=vh,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jl(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Zw(i,t,e){const n=new Float32Array(Ro),s=new R(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Ro,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wf(),fragmentShader:`

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
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function S0(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wf(),fragmentShader:`

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
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function b0(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function Wf(){return`

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
	`}function Jw(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===fd||l===pd,h=l===zr||l===Br;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new M0(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new M0(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Qw(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ic("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function tS(i,t,e,n){const s={},o=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const p in u.attributes)t.remove(u.attributes[p]);for(const p in u.morphAttributes){const v=u.morphAttributes[p];for(let m=0,g=v.length;m<g;m++)t.remove(v[m])}u.removeEventListener("dispose",r),delete s[u.id];const f=o.get(u);f&&(t.remove(f),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)t.update(u[p],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const p in f){const v=f[p];for(let m=0,g=v.length;m<g;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,p=d.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let _=0,M=x.length;_<M;_+=3){const C=x[_+0],E=x[_+1],T=x[_+2];u.push(C,E,E,T,T,C)}}else if(p!==void 0){const x=p.array;v=p.version;for(let _=0,M=x.length/3-1;_<M;_+=3){const C=_+0,E=_+1,T=_+2;u.push(C,E,E,T,T,C)}}else return;const m=new(uv(u)?vv:gv)(u,1);m.version=v;const g=o.get(d);g&&t.remove(g),o.set(d,m)}function h(d){const u=o.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function eS(i,t,e){let n;function s(u){n=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function l(u,f){i.drawElements(n,f,o,u*r),e.update(f,n,1)}function c(u,f,p){p!==0&&(i.drawElementsInstanced(n,f,o,u*r,p),e.update(f,n,p))}function h(u,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,u,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];e.update(m,n,1)}function d(u,f,p,v){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u.length;g++)c(u[g]/r,f[g],v[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,u,0,v,0,p);let g=0;for(let x=0;x<p;x++)g+=f[x];for(let x=0;x<v.length;x++)e.update(g,n,v[x])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function nS(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function iS(i,t,e){const n=new WeakMap,s=new Fe;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let V=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",V)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;f===!0&&(_=1),p===!0&&(_=2),v===!0&&(_=3);let M=a.attributes.position.count*_,C=1;M>t.maxTextureSize&&(C=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const E=new Float32Array(M*C*4*d),T=new fv(E,M,C,d);T.type=is,T.needsUpdate=!0;const I=_*4;for(let y=0;y<d;y++){const S=m[y],B=g[y],D=x[y],F=M*C*4*y;for(let k=0;k<S.count;k++){const U=k*I;f===!0&&(s.fromBufferAttribute(S,k),E[F+U+0]=s.x,E[F+U+1]=s.y,E[F+U+2]=s.z,E[F+U+3]=0),p===!0&&(s.fromBufferAttribute(B,k),E[F+U+4]=s.x,E[F+U+5]=s.y,E[F+U+6]=s.z,E[F+U+7]=0),v===!0&&(s.fromBufferAttribute(D,k),E[F+U+8]=s.x,E[F+U+9]=s.y,E[F+U+10]=s.z,E[F+U+11]=D.itemSize===4?s.w:1)}}u={count:d,texture:T,size:new rt(M,C)},n.set(a,u),a.addEventListener("dispose",V)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:o}}function sS(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class wv extends Nn{constructor(t,e,n,s,o,r,a,l,c,h=Cr){if(h!==Cr&&h!==Hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Cr&&(n=Oo),n===void 0&&h===Hr&&(n=kr),super(null,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Yn,this.minFilter=l!==void 0?l:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Sv=new Nn,E0=new wv(1,1),bv=new fv,Ev=new qy,Tv=new yv,T0=[],A0=[],C0=new Float32Array(16),R0=new Float32Array(9),P0=new Float32Array(4);function ea(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=T0[s];if(o===void 0&&(o=new Float32Array(s),T0[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function fn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function pn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _h(i,t){let e=A0[t];e===void 0&&(e=new Int32Array(t),A0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function oS(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function rS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;i.uniform2fv(this.addr,t),pn(e,t)}}function aS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fn(e,t))return;i.uniform3fv(this.addr,t),pn(e,t)}}function lS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;i.uniform4fv(this.addr,t),pn(e,t)}}function cS(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),pn(e,t)}else{if(fn(e,n))return;P0.set(n),i.uniformMatrix2fv(this.addr,!1,P0),pn(e,n)}}function hS(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),pn(e,t)}else{if(fn(e,n))return;R0.set(n),i.uniformMatrix3fv(this.addr,!1,R0),pn(e,n)}}function uS(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),pn(e,t)}else{if(fn(e,n))return;C0.set(n),i.uniformMatrix4fv(this.addr,!1,C0),pn(e,n)}}function dS(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function fS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;i.uniform2iv(this.addr,t),pn(e,t)}}function pS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;i.uniform3iv(this.addr,t),pn(e,t)}}function mS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;i.uniform4iv(this.addr,t),pn(e,t)}}function gS(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function vS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;i.uniform2uiv(this.addr,t),pn(e,t)}}function xS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;i.uniform3uiv(this.addr,t),pn(e,t)}}function _S(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;i.uniform4uiv(this.addr,t),pn(e,t)}}function yS(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(E0.compareFunction=hv,o=E0):o=Sv,e.setTexture2D(t||o,s)}function MS(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ev,s)}function wS(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Tv,s)}function SS(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bv,s)}function bS(i){switch(i){case 5126:return oS;case 35664:return rS;case 35665:return aS;case 35666:return lS;case 35674:return cS;case 35675:return hS;case 35676:return uS;case 5124:case 35670:return dS;case 35667:case 35671:return fS;case 35668:case 35672:return pS;case 35669:case 35673:return mS;case 5125:return gS;case 36294:return vS;case 36295:return xS;case 36296:return _S;case 35678:case 36198:case 36298:case 36306:case 35682:return yS;case 35679:case 36299:case 36307:return MS;case 35680:case 36300:case 36308:case 36293:return wS;case 36289:case 36303:case 36311:case 36292:return SS}}function ES(i,t){i.uniform1fv(this.addr,t)}function TS(i,t){const e=ea(t,this.size,2);i.uniform2fv(this.addr,e)}function AS(i,t){const e=ea(t,this.size,3);i.uniform3fv(this.addr,e)}function CS(i,t){const e=ea(t,this.size,4);i.uniform4fv(this.addr,e)}function RS(i,t){const e=ea(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function PS(i,t){const e=ea(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function LS(i,t){const e=ea(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function IS(i,t){i.uniform1iv(this.addr,t)}function NS(i,t){i.uniform2iv(this.addr,t)}function DS(i,t){i.uniform3iv(this.addr,t)}function US(i,t){i.uniform4iv(this.addr,t)}function FS(i,t){i.uniform1uiv(this.addr,t)}function OS(i,t){i.uniform2uiv(this.addr,t)}function zS(i,t){i.uniform3uiv(this.addr,t)}function BS(i,t){i.uniform4uiv(this.addr,t)}function kS(i,t,e){const n=this.cache,s=t.length,o=_h(e,s);fn(n,o)||(i.uniform1iv(this.addr,o),pn(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Sv,o[r])}function HS(i,t,e){const n=this.cache,s=t.length,o=_h(e,s);fn(n,o)||(i.uniform1iv(this.addr,o),pn(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Ev,o[r])}function VS(i,t,e){const n=this.cache,s=t.length,o=_h(e,s);fn(n,o)||(i.uniform1iv(this.addr,o),pn(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Tv,o[r])}function GS(i,t,e){const n=this.cache,s=t.length,o=_h(e,s);fn(n,o)||(i.uniform1iv(this.addr,o),pn(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||bv,o[r])}function WS(i){switch(i){case 5126:return ES;case 35664:return TS;case 35665:return AS;case 35666:return CS;case 35674:return RS;case 35675:return PS;case 35676:return LS;case 5124:case 35670:return IS;case 35667:case 35671:return NS;case 35668:case 35672:return DS;case 35669:case 35673:return US;case 5125:return FS;case 36294:return OS;case 36295:return zS;case 36296:return BS;case 35678:case 36198:case 36298:case 36306:case 35682:return kS;case 35679:case 36299:case 36307:return HS;case 35680:case 36300:case 36308:case 36293:return VS;case 36289:case 36303:case 36311:case 36292:return GS}}class qS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=bS(e.type)}}class XS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=WS(e.type)}}class $S{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const yu=/(\w+)(\])?(\[|\.)?/g;function L0(i,t){i.seq.push(t),i.map[t.id]=t}function jS(i,t,e){const n=i.name,s=n.length;for(yu.lastIndex=0;;){const o=yu.exec(n),r=yu.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){L0(e,c===void 0?new qS(a,i,t):new XS(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new $S(a),L0(e,d)),e=d}}}class Nc{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);jS(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function I0(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const YS=37297;let KS=0;function ZS(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function JS(i){const t=Ce.getPrimaries(Ce.workingColorSpace),e=Ce.getPrimaries(i);let n;switch(t===e?n="":t===$c&&e===Xc?n="LinearDisplayP3ToLinearSRGB":t===Xc&&e===$c&&(n="LinearSRGBToLinearDisplayP3"),i){case lo:case xh:return[n,"LinearTransferOETF"];case _i:case Bf:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function N0(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+ZS(i.getShaderSource(t),r)}else return s}function QS(i,t){const e=JS(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function tb(i,t){let e;switch(t){case Yg:e="Linear";break;case Kg:e="Reinhard";break;case Zg:e="Cineon";break;case Jg:e="ACESFilmic";break;case Qg:e="AgX";break;case pl:e="Neutral";break;case ay:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ql=new R;function eb(){Ce.getLuminanceCoefficients(Ql);const i=Ql.x.toFixed(4),t=Ql.y.toFixed(4),e=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function ib(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sb(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Ia(i){return i!==""}function D0(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function U0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gd(i){return i.replace(ob,ab)}const rb=new Map;function ab(i,t){let e=ce[t];if(e===void 0){const n=rb.get(t);if(n!==void 0)e=ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gd(e)}const lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function F0(i){return i.replace(lb,cb)}function cb(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function O0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function hb(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$g?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===jg?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ws&&(t="SHADOWMAP_TYPE_VSM"),t}function ub(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zr:case Br:t="ENVMAP_TYPE_CUBE";break;case vh:t="ENVMAP_TYPE_CUBE_UV";break}return t}function db(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Br:t="ENVMAP_MODE_REFRACTION";break}return t}function fb(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pf:t="ENVMAP_BLENDING_MULTIPLY";break;case oy:t="ENVMAP_BLENDING_MIX";break;case ry:t="ENVMAP_BLENDING_ADD";break}return t}function pb(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function mb(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=hb(e),c=ub(e),h=db(e),d=fb(e),u=pb(e),f=nb(e),p=ib(o),v=s.createProgram();let m,g,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ia).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ia).join(`
`),g.length>0&&(g+=`
`)):(m=[O0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),g=[O0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==eo?"#define TONE_MAPPING":"",e.toneMapping!==eo?ce.tonemapping_pars_fragment:"",e.toneMapping!==eo?tb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,QS("linearToOutputTexel",e.outputColorSpace),eb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ia).join(`
`)),r=Gd(r),r=D0(r,e),r=U0(r,e),a=Gd(a),a=D0(a,e),a=U0(a,e),r=F0(r),a=F0(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=x+m+r,M=x+g+a,C=I0(s,s.VERTEX_SHADER,_),E=I0(s,s.FRAGMENT_SHADER,M);s.attachShader(v,C),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(S){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(v).trim(),D=s.getShaderInfoLog(C).trim(),F=s.getShaderInfoLog(E).trim();let k=!0,U=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,E);else{const tt=N0(s,C,"vertex"),q=N0(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+B+`
`+tt+`
`+q)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(D===""||F==="")&&(U=!1);U&&(S.diagnostics={runnable:k,programLog:B,vertexShader:{log:D,prefix:m},fragmentShader:{log:F,prefix:g}})}s.deleteShader(C),s.deleteShader(E),I=new Nc(s,v),V=sb(s,v)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let V;this.getAttributes=function(){return V===void 0&&T(this),V};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,YS)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=KS++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=E,this}let gb=0;class vb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new xb(t),e.set(t,n)),n}}class xb{constructor(t){this.id=gb++,this.code=t,this.usedTimes=0}}function _b(i,t,e,n,s,o,r){const a=new pv,l=new vb,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,f=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function g(y,S,B,D,F){const k=D.fog,U=F.geometry,tt=y.isMeshStandardMaterial?D.environment:null,q=(y.isMeshStandardMaterial?e:t).get(y.envMap||tt),nt=q&&q.mapping===vh?q.image.height:null,pt=v[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const dt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,mt=dt!==void 0?dt.length:0;let de=0;U.morphAttributes.position!==void 0&&(de=1),U.morphAttributes.normal!==void 0&&(de=2),U.morphAttributes.color!==void 0&&(de=3);let Z,at,Tt,xt;if(pt){const qn=Ji[pt];Z=qn.vertexShader,at=qn.fragmentShader}else Z=y.vertexShader,at=y.fragmentShader,l.update(y),Tt=l.getVertexShaderID(y),xt=l.getFragmentShaderID(y);const Yt=i.getRenderTarget(),$t=F.isInstancedMesh===!0,se=F.isBatchedMesh===!0,pe=!!y.map,it=!!y.matcap,L=!!q,_t=!!y.aoMap,gt=!!y.lightMap,ct=!!y.bumpMap,yt=!!y.normalMap,Vt=!!y.displacementMap,At=!!y.emissiveMap,P=!!y.metalnessMap,b=!!y.roughnessMap,X=y.anisotropy>0,J=y.clearcoat>0,st=y.dispersion>0,Q=y.iridescence>0,Ft=y.sheen>0,Mt=y.transmission>0,Lt=X&&!!y.anisotropyMap,ye=J&&!!y.clearcoatMap,ht=J&&!!y.clearcoatNormalMap,It=J&&!!y.clearcoatRoughnessMap,ee=Q&&!!y.iridescenceMap,ne=Q&&!!y.iridescenceThicknessMap,Nt=Ft&&!!y.sheenColorMap,Me=Ft&&!!y.sheenRoughnessMap,ae=!!y.specularMap,ze=!!y.specularColorMap,z=!!y.specularIntensityMap,Ct=Mt&&!!y.transmissionMap,K=Mt&&!!y.thicknessMap,ot=!!y.gradientMap,bt=!!y.alphaMap,Rt=y.alphaTest>0,be=!!y.alphaHash,an=!!y.extensions;let Wn=eo;y.toneMapped&&(Yt===null||Yt.isXRRenderTarget===!0)&&(Wn=i.toneMapping);const Ae={shaderID:pt,shaderType:y.type,shaderName:y.name,vertexShader:Z,fragmentShader:at,defines:y.defines,customVertexShaderID:Tt,customFragmentShaderID:xt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:se,batchingColor:se&&F._colorsTexture!==null,instancing:$t,instancingColor:$t&&F.instanceColor!==null,instancingMorph:$t&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Yt===null?i.outputColorSpace:Yt.isXRRenderTarget===!0?Yt.texture.colorSpace:lo,alphaToCoverage:!!y.alphaToCoverage,map:pe,matcap:it,envMap:L,envMapMode:L&&q.mapping,envMapCubeUVHeight:nt,aoMap:_t,lightMap:gt,bumpMap:ct,normalMap:yt,displacementMap:f&&Vt,emissiveMap:At,normalMapObjectSpace:yt&&y.normalMapType===uy,normalMapTangentSpace:yt&&y.normalMapType===zf,metalnessMap:P,roughnessMap:b,anisotropy:X,anisotropyMap:Lt,clearcoat:J,clearcoatMap:ye,clearcoatNormalMap:ht,clearcoatRoughnessMap:It,dispersion:st,iridescence:Q,iridescenceMap:ee,iridescenceThicknessMap:ne,sheen:Ft,sheenColorMap:Nt,sheenRoughnessMap:Me,specularMap:ae,specularColorMap:ze,specularIntensityMap:z,transmission:Mt,transmissionMap:Ct,thicknessMap:K,gradientMap:ot,opaque:y.transparent===!1&&y.blending===Ar&&y.alphaToCoverage===!1,alphaMap:bt,alphaTest:Rt,alphaHash:be,combine:y.combine,mapUv:pe&&m(y.map.channel),aoMapUv:_t&&m(y.aoMap.channel),lightMapUv:gt&&m(y.lightMap.channel),bumpMapUv:ct&&m(y.bumpMap.channel),normalMapUv:yt&&m(y.normalMap.channel),displacementMapUv:Vt&&m(y.displacementMap.channel),emissiveMapUv:At&&m(y.emissiveMap.channel),metalnessMapUv:P&&m(y.metalnessMap.channel),roughnessMapUv:b&&m(y.roughnessMap.channel),anisotropyMapUv:Lt&&m(y.anisotropyMap.channel),clearcoatMapUv:ye&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ht&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Me&&m(y.sheenRoughnessMap.channel),specularMapUv:ae&&m(y.specularMap.channel),specularColorMapUv:ze&&m(y.specularColorMap.channel),specularIntensityMapUv:z&&m(y.specularIntensityMap.channel),transmissionMapUv:Ct&&m(y.transmissionMap.channel),thicknessMapUv:K&&m(y.thicknessMap.channel),alphaMapUv:bt&&m(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(yt||X),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!U.attributes.uv&&(pe||bt),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:F.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:de,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wn,decodeVideoTexture:pe&&y.map.isVideoTexture===!0&&Ce.getTransfer(y.map.colorSpace)===Be,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===jn,flipSided:y.side===Jn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:an&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(an&&y.extensions.multiDraw===!0||se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function x(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const B in y.defines)S.push(B),S.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(_(S,y),M(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function _(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function M(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),y.push(a.mask)}function C(y){const S=v[y.type];let B;if(S){const D=Ji[S];B=tl.clone(D.uniforms)}else B=y.uniforms;return B}function E(y,S){let B;for(let D=0,F=h.length;D<F;D++){const k=h[D];if(k.cacheKey===S){B=k,++B.usedTimes;break}}return B===void 0&&(B=new mb(i,S,y,o),h.push(B)),B}function T(y){if(--y.usedTimes===0){const S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),y.destroy()}}function I(y){l.remove(y)}function V(){l.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:C,acquireProgram:E,releaseProgram:T,releaseShaderCache:I,programs:h,dispose:V}}function yb(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Mb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function z0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function B0(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(d,u,f,p,v,m){let g=i[t];return g===void 0?(g={id:d.id,object:d,geometry:u,material:f,groupOrder:p,renderOrder:d.renderOrder,z:v,group:m},i[t]=g):(g.id=d.id,g.object=d,g.geometry=u,g.material=f,g.groupOrder=p,g.renderOrder=d.renderOrder,g.z=v,g.group=m),t++,g}function a(d,u,f,p,v,m){const g=r(d,u,f,p,v,m);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):e.push(g)}function l(d,u,f,p,v,m){const g=r(d,u,f,p,v,m);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):e.unshift(g)}function c(d,u){e.length>1&&e.sort(d||Mb),n.length>1&&n.sort(u||z0),s.length>1&&s.sort(u||z0)}function h(){for(let d=t,u=i.length;d<u;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function wb(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new B0,i.set(n,[r])):s>=o.length?(r=new B0,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Sb(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new ut};break;case"SpotLight":e={position:new R,direction:new R,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":e={color:new ut,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function bb(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Eb=0;function Tb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ab(i){const t=new Sb,e=bb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const s=new R,o=new me,r=new me;function a(c){let h=0,d=0,u=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,x=0,_=0,M=0,C=0,E=0,T=0;c.sort(Tb);for(let V=0,y=c.length;V<y;V++){const S=c[V],B=S.color,D=S.intensity,F=S.distance,k=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=B.r*D,d+=B.g*D,u+=B.b*D;else if(S.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(S.sh.coefficients[U],D);T++}else if(S.isDirectionalLight){const U=t.get(S);if(U.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const tt=S.shadow,q=e.get(S);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=S.shadow.matrix,x++}n.directional[f]=U,f++}else if(S.isSpotLight){const U=t.get(S);U.position.setFromMatrixPosition(S.matrixWorld),U.color.copy(B).multiplyScalar(D),U.distance=F,U.coneCos=Math.cos(S.angle),U.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),U.decay=S.decay,n.spot[v]=U;const tt=S.shadow;if(S.map&&(n.spotLightMap[C]=S.map,C++,tt.updateMatrices(S),S.castShadow&&E++),n.spotLightMatrix[v]=tt.matrix,S.castShadow){const q=e.get(S);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=k,M++}v++}else if(S.isRectAreaLight){const U=t.get(S);U.color.copy(B).multiplyScalar(D),U.halfWidth.set(S.width*.5,0,0),U.halfHeight.set(0,S.height*.5,0),n.rectArea[m]=U,m++}else if(S.isPointLight){const U=t.get(S);if(U.color.copy(S.color).multiplyScalar(S.intensity),U.distance=S.distance,U.decay=S.decay,S.castShadow){const tt=S.shadow,q=e.get(S);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,q.shadowCameraNear=tt.camera.near,q.shadowCameraFar=tt.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=k,n.pointShadowMatrix[p]=S.shadow.matrix,_++}n.point[p]=U,p++}else if(S.isHemisphereLight){const U=t.get(S);U.skyColor.copy(S.color).multiplyScalar(D),U.groundColor.copy(S.groundColor).multiplyScalar(D),n.hemi[g]=U,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const I=n.hash;(I.directionalLength!==f||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==g||I.numDirectionalShadows!==x||I.numPointShadows!==_||I.numSpotShadows!==M||I.numSpotMaps!==C||I.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=M+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,I.directionalLength=f,I.pointLength=p,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=g,I.numDirectionalShadows=x,I.numPointShadows=_,I.numSpotShadows=M,I.numSpotMaps=C,I.numLightProbes=T,n.version=Eb++)}function l(c,h){let d=0,u=0,f=0,p=0,v=0;const m=h.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const _=c[g];if(_.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(_.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(_.isRectAreaLight){const M=n.rectArea[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),r.identity(),o.copy(_.matrixWorld),o.premultiply(m),r.extractRotation(o),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),p++}else if(_.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function k0(i){const t=new Ab(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function Cb(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new k0(i),t.set(s,[a])):o>=r.length?(a=new k0(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Rb extends ho{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pb extends ho{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ib=`uniform sampler2D shadow_pass;
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
}`;function Nb(i,t,e){let n=new Vf;const s=new rt,o=new rt,r=new Fe,a=new Rb({depthPacking:hy}),l=new Pb,c={},h=e.maxTextureSize,d={[oo]:Jn,[Jn]:oo,[jn]:jn},u=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Lb,fragmentShader:Ib}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const p=new Qe;p.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Xe(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$g;let g=this.type;this.render=function(E,T,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const V=i.getRenderTarget(),y=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Rs),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const D=g!==ws&&this.type===ws,F=g===ws&&this.type!==ws;for(let k=0,U=E.length;k<U;k++){const tt=E[k],q=tt.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const nt=q.getFrameExtents();if(s.multiply(nt),o.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/nt.x),s.x=o.x*nt.x,q.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/nt.y),s.y=o.y*nt.y,q.mapSize.y=o.y)),q.map===null||D===!0||F===!0){const dt=this.type!==ws?{minFilter:Yn,magFilter:Yn}:{};q.map!==null&&q.map.dispose(),q.map=new ci(s.x,s.y,dt),q.map.texture.name=tt.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const pt=q.getViewportCount();for(let dt=0;dt<pt;dt++){const mt=q.getViewport(dt);r.set(o.x*mt.x,o.y*mt.y,o.x*mt.z,o.y*mt.w),B.viewport(r),q.updateMatrices(tt,dt),n=q.getFrustum(),M(T,I,q.camera,tt,this.type)}q.isPointLightShadow!==!0&&this.type===ws&&x(q,I),q.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(V,y,S)};function x(E,T){const I=t.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ci(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,I,u,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,I,f,v,null)}function _(E,T,I,V){let y=null;const S=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)y=S;else if(y=I.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=y.uuid,D=T.uuid;let F=c[B];F===void 0&&(F={},c[B]=F);let k=F[D];k===void 0&&(k=y.clone(),F[D]=k,T.addEventListener("dispose",C)),y=k}if(y.visible=T.visible,y.wireframe=T.wireframe,V===ws?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=i.properties.get(y);B.light=I}return y}function M(E,T,I,V,y){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===ws)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const D=t.update(E),F=E.material;if(Array.isArray(F)){const k=D.groups;for(let U=0,tt=k.length;U<tt;U++){const q=k[U],nt=F[q.materialIndex];if(nt&&nt.visible){const pt=_(E,nt,V,y);E.onBeforeShadow(i,E,T,I,D,pt,q),i.renderBufferDirect(I,null,D,pt,E,q),E.onAfterShadow(i,E,T,I,D,pt,q)}}}else if(F.visible){const k=_(E,F,V,y);E.onBeforeShadow(i,E,T,I,D,k,null),i.renderBufferDirect(I,null,D,k,E,null),E.onAfterShadow(i,E,T,I,D,k,null)}}const B=E.children;for(let D=0,F=B.length;D<F;D++)M(B[D],T,I,V,y)}function C(E){E.target.removeEventListener("dispose",C);for(const I in c){const V=c[I],y=E.target.uuid;y in V&&(V[y].dispose(),delete V[y])}}}const Db={[rd]:ad,[ld]:ud,[cd]:dd,[Or]:hd,[ad]:rd,[ud]:ld,[dd]:cd,[hd]:Or};function Ub(i){function t(){let z=!1;const Ct=new Fe;let K=null;const ot=new Fe(0,0,0,0);return{setMask:function(bt){K!==bt&&!z&&(i.colorMask(bt,bt,bt,bt),K=bt)},setLocked:function(bt){z=bt},setClear:function(bt,Rt,be,an,Wn){Wn===!0&&(bt*=an,Rt*=an,be*=an),Ct.set(bt,Rt,be,an),ot.equals(Ct)===!1&&(i.clearColor(bt,Rt,be,an),ot.copy(Ct))},reset:function(){z=!1,K=null,ot.set(-1,0,0,0)}}}function e(){let z=!1,Ct=!1,K=null,ot=null,bt=null;return{setReversed:function(Rt){Ct=Rt},setTest:function(Rt){Rt?Tt(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(Rt){K!==Rt&&!z&&(i.depthMask(Rt),K=Rt)},setFunc:function(Rt){if(Ct&&(Rt=Db[Rt]),ot!==Rt){switch(Rt){case rd:i.depthFunc(i.NEVER);break;case ad:i.depthFunc(i.ALWAYS);break;case ld:i.depthFunc(i.LESS);break;case Or:i.depthFunc(i.LEQUAL);break;case cd:i.depthFunc(i.EQUAL);break;case hd:i.depthFunc(i.GEQUAL);break;case ud:i.depthFunc(i.GREATER);break;case dd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=Rt}},setLocked:function(Rt){z=Rt},setClear:function(Rt){bt!==Rt&&(i.clearDepth(Rt),bt=Rt)},reset:function(){z=!1,K=null,ot=null,bt=null}}}function n(){let z=!1,Ct=null,K=null,ot=null,bt=null,Rt=null,be=null,an=null,Wn=null;return{setTest:function(Ae){z||(Ae?Tt(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(Ae){Ct!==Ae&&!z&&(i.stencilMask(Ae),Ct=Ae)},setFunc:function(Ae,qn,hs){(K!==Ae||ot!==qn||bt!==hs)&&(i.stencilFunc(Ae,qn,hs),K=Ae,ot=qn,bt=hs)},setOp:function(Ae,qn,hs){(Rt!==Ae||be!==qn||an!==hs)&&(i.stencilOp(Ae,qn,hs),Rt=Ae,be=qn,an=hs)},setLocked:function(Ae){z=Ae},setClear:function(Ae){Wn!==Ae&&(i.clearStencil(Ae),Wn=Ae)},reset:function(){z=!1,Ct=null,K=null,ot=null,bt=null,Rt=null,be=null,an=null,Wn=null}}}const s=new t,o=new e,r=new n,a=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,u=[],f=null,p=!1,v=null,m=null,g=null,x=null,_=null,M=null,C=null,E=new ut(0,0,0),T=0,I=!1,V=null,y=null,S=null,B=null,D=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,U=0;const tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(tt)[1]),k=U>=1):tt.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),k=U>=2);let q=null,nt={};const pt=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),mt=new Fe().fromArray(pt),de=new Fe().fromArray(dt);function Z(z,Ct,K,ot){const bt=new Uint8Array(4),Rt=i.createTexture();i.bindTexture(z,Rt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<K;be++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(Ct+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return Rt}const at={};at[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),r.setClear(0),Tt(i.DEPTH_TEST),o.setFunc(Or),gt(!1),ct(Yp),Tt(i.CULL_FACE),L(Rs);function Tt(z){c[z]!==!0&&(i.enable(z),c[z]=!0)}function xt(z){c[z]!==!1&&(i.disable(z),c[z]=!1)}function Yt(z,Ct){return h[z]!==Ct?(i.bindFramebuffer(z,Ct),h[z]=Ct,z===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ct),z===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function $t(z,Ct){let K=u,ot=!1;if(z){K=d.get(Ct),K===void 0&&(K=[],d.set(Ct,K));const bt=z.textures;if(K.length!==bt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let Rt=0,be=bt.length;Rt<be;Rt++)K[Rt]=i.COLOR_ATTACHMENT0+Rt;K.length=bt.length,ot=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ot=!0);ot&&i.drawBuffers(K)}function se(z){return f!==z?(i.useProgram(z),f=z,!0):!1}const pe={[Co]:i.FUNC_ADD,[V_]:i.FUNC_SUBTRACT,[G_]:i.FUNC_REVERSE_SUBTRACT};pe[W_]=i.MIN,pe[q_]=i.MAX;const it={[X_]:i.ZERO,[$_]:i.ONE,[j_]:i.SRC_COLOR,[sd]:i.SRC_ALPHA,[ty]:i.SRC_ALPHA_SATURATE,[J_]:i.DST_COLOR,[K_]:i.DST_ALPHA,[Y_]:i.ONE_MINUS_SRC_COLOR,[od]:i.ONE_MINUS_SRC_ALPHA,[Q_]:i.ONE_MINUS_DST_COLOR,[Z_]:i.ONE_MINUS_DST_ALPHA,[ey]:i.CONSTANT_COLOR,[ny]:i.ONE_MINUS_CONSTANT_COLOR,[iy]:i.CONSTANT_ALPHA,[sy]:i.ONE_MINUS_CONSTANT_ALPHA};function L(z,Ct,K,ot,bt,Rt,be,an,Wn,Ae){if(z===Rs){p===!0&&(xt(i.BLEND),p=!1);return}if(p===!1&&(Tt(i.BLEND),p=!0),z!==H_){if(z!==v||Ae!==I){if((m!==Co||_!==Co)&&(i.blendEquation(i.FUNC_ADD),m=Co,_=Co),Ae)switch(z){case Ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ja:i.blendFunc(i.ONE,i.ONE);break;case Kp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case id:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ja:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Kp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case id:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}g=null,x=null,M=null,C=null,E.set(0,0,0),T=0,v=z,I=Ae}return}bt=bt||Ct,Rt=Rt||K,be=be||ot,(Ct!==m||bt!==_)&&(i.blendEquationSeparate(pe[Ct],pe[bt]),m=Ct,_=bt),(K!==g||ot!==x||Rt!==M||be!==C)&&(i.blendFuncSeparate(it[K],it[ot],it[Rt],it[be]),g=K,x=ot,M=Rt,C=be),(an.equals(E)===!1||Wn!==T)&&(i.blendColor(an.r,an.g,an.b,Wn),E.copy(an),T=Wn),v=z,I=!1}function _t(z,Ct){z.side===jn?xt(i.CULL_FACE):Tt(i.CULL_FACE);let K=z.side===Jn;Ct&&(K=!K),gt(K),z.blending===Ar&&z.transparent===!1?L(Rs):L(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const ot=z.stencilWrite;r.setTest(ot),ot&&(r.setMask(z.stencilWriteMask),r.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),r.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Vt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Tt(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(z){V!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),V=z)}function ct(z){z!==B_?(Tt(i.CULL_FACE),z!==y&&(z===Yp?i.cullFace(i.BACK):z===k_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),y=z}function yt(z){z!==S&&(k&&i.lineWidth(z),S=z)}function Vt(z,Ct,K){z?(Tt(i.POLYGON_OFFSET_FILL),(B!==Ct||D!==K)&&(i.polygonOffset(Ct,K),B=Ct,D=K)):xt(i.POLYGON_OFFSET_FILL)}function At(z){z?Tt(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function P(z){z===void 0&&(z=i.TEXTURE0+F-1),q!==z&&(i.activeTexture(z),q=z)}function b(z,Ct,K){K===void 0&&(q===null?K=i.TEXTURE0+F-1:K=q);let ot=nt[K];ot===void 0&&(ot={type:void 0,texture:void 0},nt[K]=ot),(ot.type!==z||ot.texture!==Ct)&&(q!==K&&(i.activeTexture(K),q=K),i.bindTexture(z,Ct||at[z]),ot.type=z,ot.texture=Ct)}function X(){const z=nt[q];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ft(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function It(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(z){mt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),mt.copy(z))}function Nt(z){de.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),de.copy(z))}function Me(z,Ct){let K=l.get(Ct);K===void 0&&(K=new WeakMap,l.set(Ct,K));let ot=K.get(z);ot===void 0&&(ot=i.getUniformBlockIndex(Ct,z.name),K.set(z,ot))}function ae(z,Ct){const ot=l.get(Ct).get(z);a.get(Ct)!==ot&&(i.uniformBlockBinding(Ct,ot,z.__bindingPointIndex),a.set(Ct,ot))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},q=null,nt={},h={},d=new WeakMap,u=[],f=null,p=!1,v=null,m=null,g=null,x=null,_=null,M=null,C=null,E=new ut(0,0,0),T=0,I=!1,V=null,y=null,S=null,B=null,D=null,mt.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),r.reset()}return{buffers:{color:s,depth:o,stencil:r},enable:Tt,disable:xt,bindFramebuffer:Yt,drawBuffers:$t,useProgram:se,setBlending:L,setMaterial:_t,setFlipSided:gt,setCullFace:ct,setLineWidth:yt,setPolygonOffset:Vt,setScissorTest:At,activeTexture:P,bindTexture:b,unbindTexture:X,compressedTexImage2D:J,compressedTexImage3D:st,texImage2D:It,texImage3D:ee,updateUBOMapping:Me,uniformBlockBinding:ae,texStorage2D:ye,texStorage3D:ht,texSubImage2D:Q,texSubImage3D:Ft,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Lt,scissor:ne,viewport:Nt,reset:ze}}function H0(i,t,e,n){const s=Fb(n);switch(e){case sv:return i*t;case rv:return i*t;case av:return i*t*2;case Df:return i*t/s.components*s.byteLength;case Uf:return i*t/s.components*s.byteLength;case lv:return i*t*2/s.components*s.byteLength;case Ff:return i*t*2/s.components*s.byteLength;case ov:return i*t*3/s.components*s.byteLength;case Mi:return i*t*4/s.components*s.byteLength;case Of:return i*t*4/s.components*s.byteLength;case Ac:case Cc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rc:case Pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xd:case yd:return Math.max(i,16)*Math.max(t,8)/4;case vd:case _d:return Math.max(i,8)*Math.max(t,8)/2;case Md:case wd:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sd:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bd:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ed:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Td:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ad:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Rd:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Pd:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Id:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Dd:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ud:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fd:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Od:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Lc:case zd:case Bd:return Math.ceil(i/4)*Math.ceil(t/4)*16;case cv:case kd:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Hd:case Vd:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fb(i){switch(i){case Ns:case ev:return{byteLength:1,components:1};case Qa:case nv:case Gi:return{byteLength:2,components:1};case If:case Nf:return{byteLength:2,components:4};case Oo:case Lf:case is:return{byteLength:4,components:1};case iv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ob(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,b){return f?new OffscreenCanvas(P,b):Yc("canvas")}function v(P,b,X){let J=1;const st=At(P);if((st.width>X||st.height>X)&&(J=X/Math.max(st.width,st.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Q=Math.floor(J*st.width),Ft=Math.floor(J*st.height);d===void 0&&(d=p(Q,Ft));const Mt=b?p(Q,Ft):d;return Mt.width=Q,Mt.height=Ft,Mt.getContext("2d").drawImage(P,0,0,Q,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+Q+"x"+Ft+")."),Mt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==Yn&&P.minFilter!==yi}function g(P){i.generateMipmap(P)}function x(P,b,X,J,st=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=b;if(b===i.RED&&(X===i.FLOAT&&(Q=i.R32F),X===i.HALF_FLOAT&&(Q=i.R16F),X===i.UNSIGNED_BYTE&&(Q=i.R8)),b===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.R8UI),X===i.UNSIGNED_SHORT&&(Q=i.R16UI),X===i.UNSIGNED_INT&&(Q=i.R32UI),X===i.BYTE&&(Q=i.R8I),X===i.SHORT&&(Q=i.R16I),X===i.INT&&(Q=i.R32I)),b===i.RG&&(X===i.FLOAT&&(Q=i.RG32F),X===i.HALF_FLOAT&&(Q=i.RG16F),X===i.UNSIGNED_BYTE&&(Q=i.RG8)),b===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.RG8UI),X===i.UNSIGNED_SHORT&&(Q=i.RG16UI),X===i.UNSIGNED_INT&&(Q=i.RG32UI),X===i.BYTE&&(Q=i.RG8I),X===i.SHORT&&(Q=i.RG16I),X===i.INT&&(Q=i.RG32I)),b===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),X===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),X===i.UNSIGNED_INT&&(Q=i.RGB32UI),X===i.BYTE&&(Q=i.RGB8I),X===i.SHORT&&(Q=i.RGB16I),X===i.INT&&(Q=i.RGB32I)),b===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),X===i.UNSIGNED_INT&&(Q=i.RGBA32UI),X===i.BYTE&&(Q=i.RGBA8I),X===i.SHORT&&(Q=i.RGBA16I),X===i.INT&&(Q=i.RGBA32I)),b===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),b===i.RGBA){const Ft=st?qc:Ce.getTransfer(J);X===i.FLOAT&&(Q=i.RGBA32F),X===i.HALF_FLOAT&&(Q=i.RGBA16F),X===i.UNSIGNED_BYTE&&(Q=Ft===Be?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function _(P,b){let X;return P?b===null||b===Oo||b===kr?X=i.DEPTH24_STENCIL8:b===is?X=i.DEPTH32F_STENCIL8:b===Qa&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Oo||b===kr?X=i.DEPTH_COMPONENT24:b===is?X=i.DEPTH_COMPONENT32F:b===Qa&&(X=i.DEPTH_COMPONENT16),X}function M(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Yn&&P.minFilter!==yi?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function C(P){const b=P.target;b.removeEventListener("dispose",C),T(b),b.isVideoTexture&&h.delete(b)}function E(P){const b=P.target;b.removeEventListener("dispose",E),V(b)}function T(P){const b=n.get(P);if(b.__webglInit===void 0)return;const X=P.source,J=u.get(X);if(J){const st=J[b.__cacheKey];st.usedTimes--,st.usedTimes===0&&I(P),Object.keys(J).length===0&&u.delete(X)}n.remove(P)}function I(P){const b=n.get(P);i.deleteTexture(b.__webglTexture);const X=P.source,J=u.get(X);delete J[b.__cacheKey],r.memory.textures--}function V(P){const b=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let st=0;st<b.__webglFramebuffer[J].length;st++)i.deleteFramebuffer(b.__webglFramebuffer[J][st]);else i.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)i.deleteFramebuffer(b.__webglFramebuffer[J]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const X=P.textures;for(let J=0,st=X.length;J<st;J++){const Q=n.get(X[J]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),r.memory.textures--),n.remove(X[J])}n.remove(P)}let y=0;function S(){y=0}function B(){const P=y;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),y+=1,P}function D(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function F(P,b){const X=n.get(P);if(P.isVideoTexture&&yt(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){const J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(X,P,b);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+b)}function k(P,b){const X=n.get(P);if(P.version>0&&X.__version!==P.version){de(X,P,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+b)}function U(P,b){const X=n.get(P);if(P.version>0&&X.__version!==P.version){de(X,P,b);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+b)}function tt(P,b){const X=n.get(P);if(P.version>0&&X.__version!==P.version){Z(X,P,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+b)}const q={[md]:i.REPEAT,[Io]:i.CLAMP_TO_EDGE,[gd]:i.MIRRORED_REPEAT},nt={[Yn]:i.NEAREST,[ly]:i.NEAREST_MIPMAP_NEAREST,[Nl]:i.NEAREST_MIPMAP_LINEAR,[yi]:i.LINEAR,[$h]:i.LINEAR_MIPMAP_NEAREST,[No]:i.LINEAR_MIPMAP_LINEAR},pt={[dy]:i.NEVER,[xy]:i.ALWAYS,[fy]:i.LESS,[hv]:i.LEQUAL,[py]:i.EQUAL,[vy]:i.GEQUAL,[my]:i.GREATER,[gy]:i.NOTEQUAL};function dt(P,b){if(b.type===is&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===yi||b.magFilter===$h||b.magFilter===Nl||b.magFilter===No||b.minFilter===yi||b.minFilter===$h||b.minFilter===Nl||b.minFilter===No)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,q[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,q[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,q[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,nt[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,nt[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,pt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Yn||b.minFilter!==Nl&&b.minFilter!==No||b.type===is&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function mt(P,b){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",C));const J=b.source;let st=u.get(J);st===void 0&&(st={},u.set(J,st));const Q=D(b);if(Q!==P.__cacheKey){st[Q]===void 0&&(st[Q]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,X=!0),st[Q].usedTimes++;const Ft=st[P.__cacheKey];Ft!==void 0&&(st[P.__cacheKey].usedTimes--,Ft.usedTimes===0&&I(b)),P.__cacheKey=Q,P.__webglTexture=st[Q].texture}return X}function de(P,b,X){let J=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=i.TEXTURE_3D);const st=mt(P,b),Q=b.source;e.bindTexture(J,P.__webglTexture,i.TEXTURE0+X);const Ft=n.get(Q);if(Q.version!==Ft.__version||st===!0){e.activeTexture(i.TEXTURE0+X);const Mt=Ce.getPrimaries(Ce.workingColorSpace),Lt=b.colorSpace===js?null:Ce.getPrimaries(b.colorSpace),ye=b.colorSpace===js||Mt===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ht=v(b.image,!1,s.maxTextureSize);ht=Vt(b,ht);const It=o.convert(b.format,b.colorSpace),ee=o.convert(b.type);let ne=x(b.internalFormat,It,ee,b.colorSpace,b.isVideoTexture);dt(J,b);let Nt;const Me=b.mipmaps,ae=b.isVideoTexture!==!0,ze=Ft.__version===void 0||st===!0,z=Q.dataReady,Ct=M(b,ht);if(b.isDepthTexture)ne=_(b.format===Hr,b.type),ze&&(ae?e.texStorage2D(i.TEXTURE_2D,1,ne,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,ne,ht.width,ht.height,0,It,ee,null));else if(b.isDataTexture)if(Me.length>0){ae&&ze&&e.texStorage2D(i.TEXTURE_2D,Ct,ne,Me[0].width,Me[0].height);for(let K=0,ot=Me.length;K<ot;K++)Nt=Me[K],ae?z&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Nt.width,Nt.height,It,ee,Nt.data):e.texImage2D(i.TEXTURE_2D,K,ne,Nt.width,Nt.height,0,It,ee,Nt.data);b.generateMipmaps=!1}else ae?(ze&&e.texStorage2D(i.TEXTURE_2D,Ct,ne,ht.width,ht.height),z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht.width,ht.height,It,ee,ht.data)):e.texImage2D(i.TEXTURE_2D,0,ne,ht.width,ht.height,0,It,ee,ht.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ae&&ze&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,ne,Me[0].width,Me[0].height,ht.depth);for(let K=0,ot=Me.length;K<ot;K++)if(Nt=Me[K],b.format!==Mi)if(It!==null)if(ae){if(z)if(b.layerUpdates.size>0){const bt=H0(Nt.width,Nt.height,b.format,b.type);for(const Rt of b.layerUpdates){const be=Nt.data.subarray(Rt*bt/Nt.data.BYTES_PER_ELEMENT,(Rt+1)*bt/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Rt,Nt.width,Nt.height,1,It,be,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Nt.width,Nt.height,ht.depth,It,Nt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,ne,Nt.width,Nt.height,ht.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Nt.width,Nt.height,ht.depth,It,ee,Nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,ne,Nt.width,Nt.height,ht.depth,0,It,ee,Nt.data)}else{ae&&ze&&e.texStorage2D(i.TEXTURE_2D,Ct,ne,Me[0].width,Me[0].height);for(let K=0,ot=Me.length;K<ot;K++)Nt=Me[K],b.format!==Mi?It!==null?ae?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,Nt.width,Nt.height,It,Nt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,ne,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?z&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Nt.width,Nt.height,It,ee,Nt.data):e.texImage2D(i.TEXTURE_2D,K,ne,Nt.width,Nt.height,0,It,ee,Nt.data)}else if(b.isDataArrayTexture)if(ae){if(ze&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,ne,ht.width,ht.height,ht.depth),z)if(b.layerUpdates.size>0){const K=H0(ht.width,ht.height,b.format,b.type);for(const ot of b.layerUpdates){const bt=ht.data.subarray(ot*K/ht.data.BYTES_PER_ELEMENT,(ot+1)*K/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,ht.width,ht.height,1,It,ee,bt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,It,ee,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,ht.width,ht.height,ht.depth,0,It,ee,ht.data);else if(b.isData3DTexture)ae?(ze&&e.texStorage3D(i.TEXTURE_3D,Ct,ne,ht.width,ht.height,ht.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,It,ee,ht.data)):e.texImage3D(i.TEXTURE_3D,0,ne,ht.width,ht.height,ht.depth,0,It,ee,ht.data);else if(b.isFramebufferTexture){if(ze)if(ae)e.texStorage2D(i.TEXTURE_2D,Ct,ne,ht.width,ht.height);else{let K=ht.width,ot=ht.height;for(let bt=0;bt<Ct;bt++)e.texImage2D(i.TEXTURE_2D,bt,ne,K,ot,0,It,ee,null),K>>=1,ot>>=1}}else if(Me.length>0){if(ae&&ze){const K=At(Me[0]);e.texStorage2D(i.TEXTURE_2D,Ct,ne,K.width,K.height)}for(let K=0,ot=Me.length;K<ot;K++)Nt=Me[K],ae?z&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,It,ee,Nt):e.texImage2D(i.TEXTURE_2D,K,ne,It,ee,Nt);b.generateMipmaps=!1}else if(ae){if(ze){const K=At(ht);e.texStorage2D(i.TEXTURE_2D,Ct,ne,K.width,K.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,It,ee,ht)}else e.texImage2D(i.TEXTURE_2D,0,ne,It,ee,ht);m(b)&&g(J),Ft.__version=Q.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Z(P,b,X){if(b.image.length!==6)return;const J=mt(P,b),st=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+X);const Q=n.get(st);if(st.version!==Q.__version||J===!0){e.activeTexture(i.TEXTURE0+X);const Ft=Ce.getPrimaries(Ce.workingColorSpace),Mt=b.colorSpace===js?null:Ce.getPrimaries(b.colorSpace),Lt=b.colorSpace===js||Ft===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const ye=b.isCompressedTexture||b.image[0].isCompressedTexture,ht=b.image[0]&&b.image[0].isDataTexture,It=[];for(let ot=0;ot<6;ot++)!ye&&!ht?It[ot]=v(b.image[ot],!0,s.maxCubemapSize):It[ot]=ht?b.image[ot].image:b.image[ot],It[ot]=Vt(b,It[ot]);const ee=It[0],ne=o.convert(b.format,b.colorSpace),Nt=o.convert(b.type),Me=x(b.internalFormat,ne,Nt,b.colorSpace),ae=b.isVideoTexture!==!0,ze=Q.__version===void 0||J===!0,z=st.dataReady;let Ct=M(b,ee);dt(i.TEXTURE_CUBE_MAP,b);let K;if(ye){ae&&ze&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Me,ee.width,ee.height);for(let ot=0;ot<6;ot++){K=It[ot].mipmaps;for(let bt=0;bt<K.length;bt++){const Rt=K[bt];b.format!==Mi?ne!==null?ae?z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt,0,0,Rt.width,Rt.height,ne,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt,Me,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt,0,0,Rt.width,Rt.height,ne,Nt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt,Me,Rt.width,Rt.height,0,ne,Nt,Rt.data)}}}else{if(K=b.mipmaps,ae&&ze){K.length>0&&Ct++;const ot=At(It[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Me,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(ht){ae?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,It[ot].width,It[ot].height,ne,Nt,It[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Me,It[ot].width,It[ot].height,0,ne,Nt,It[ot].data);for(let bt=0;bt<K.length;bt++){const be=K[bt].image[ot].image;ae?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt+1,0,0,be.width,be.height,ne,Nt,be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt+1,Me,be.width,be.height,0,ne,Nt,be.data)}}else{ae?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,ne,Nt,It[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Me,ne,Nt,It[ot]);for(let bt=0;bt<K.length;bt++){const Rt=K[bt];ae?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt+1,0,0,ne,Nt,Rt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt+1,Me,ne,Nt,Rt.image[ot])}}}m(b)&&g(i.TEXTURE_CUBE_MAP),Q.__version=st.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function at(P,b,X,J,st,Q){const Ft=o.convert(X.format,X.colorSpace),Mt=o.convert(X.type),Lt=x(X.internalFormat,Ft,Mt,X.colorSpace);if(!n.get(b).__hasExternalTextures){const ht=Math.max(1,b.width>>Q),It=Math.max(1,b.height>>Q);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,Q,Lt,ht,It,b.depth,0,Ft,Mt,null):e.texImage2D(st,Q,Lt,ht,It,0,Ft,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),ct(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,st,n.get(X).__webglTexture,0,gt(b)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,st,n.get(X).__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(P,b,X){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){const J=b.depthTexture,st=J&&J.isDepthTexture?J.type:null,Q=_(b.stencilBuffer,st),Ft=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=gt(b);ct(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,Q,b.width,b.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,Q,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Q,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,P)}else{const J=b.textures;for(let st=0;st<J.length;st++){const Q=J[st],Ft=o.convert(Q.format,Q.colorSpace),Mt=o.convert(Q.type),Lt=x(Q.internalFormat,Ft,Mt,Q.colorSpace),ye=gt(b);X&&ct(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,Lt,b.width,b.height):ct(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,Lt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),F(b.depthTexture,0);const J=n.get(b.depthTexture).__webglTexture,st=gt(b);if(b.depthTexture.format===Cr)ct(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(b.depthTexture.format===Hr)ct(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Yt(P){const b=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const J=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){const st=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",st)};J.addEventListener("dispose",st),b.__depthDisposeCallback=st}b.__boundDepthTexture=J}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");xt(b.__webglFramebuffer,P)}else if(X){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=i.createRenderbuffer(),Tt(b.__webglDepthbuffer[J],P,!1);else{const st=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Tt(b.__webglDepthbuffer,P,!1);else{const J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(P,b,X){const J=n.get(P);b!==void 0&&at(J.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Yt(P)}function se(P){const b=P.texture,X=n.get(P),J=n.get(b);P.addEventListener("dispose",E);const st=P.textures,Q=P.isWebGLCubeRenderTarget===!0,Ft=st.length>1;if(Ft||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=b.version,r.memory.textures++),Q){X.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[Mt]=[];for(let Lt=0;Lt<b.mipmaps.length;Lt++)X.__webglFramebuffer[Mt][Lt]=i.createFramebuffer()}else X.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let Mt=0;Mt<b.mipmaps.length;Mt++)X.__webglFramebuffer[Mt]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let Mt=0,Lt=st.length;Mt<Lt;Mt++){const ye=n.get(st[Mt]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),r.memory.textures++)}if(P.samples>0&&ct(P)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Mt=0;Mt<st.length;Mt++){const Lt=st[Mt];X.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[Mt]);const ye=o.convert(Lt.format,Lt.colorSpace),ht=o.convert(Lt.type),It=x(Lt.internalFormat,ye,ht,Lt.colorSpace,P.isXRRenderTarget===!0),ee=gt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,It,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,X.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Tt(X.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),dt(i.TEXTURE_CUBE_MAP,b);for(let Mt=0;Mt<6;Mt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Lt=0;Lt<b.mipmaps.length;Lt++)at(X.__webglFramebuffer[Mt][Lt],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Lt);else at(X.__webglFramebuffer[Mt],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);m(b)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let Mt=0,Lt=st.length;Mt<Lt;Mt++){const ye=st[Mt],ht=n.get(ye);e.bindTexture(i.TEXTURE_2D,ht.__webglTexture),dt(i.TEXTURE_2D,ye),at(X.__webglFramebuffer,P,ye,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),m(ye)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Mt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,J.__webglTexture),dt(Mt,b),b.mipmaps&&b.mipmaps.length>0)for(let Lt=0;Lt<b.mipmaps.length;Lt++)at(X.__webglFramebuffer[Lt],P,b,i.COLOR_ATTACHMENT0,Mt,Lt);else at(X.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,Mt,0);m(b)&&g(Mt),e.unbindTexture()}P.depthBuffer&&Yt(P)}function pe(P){const b=P.textures;for(let X=0,J=b.length;X<J;X++){const st=b[X];if(m(st)){const Q=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ft=n.get(st).__webglTexture;e.bindTexture(Q,Ft),g(Q),e.unbindTexture()}}}const it=[],L=[];function _t(P){if(P.samples>0){if(ct(P)===!1){const b=P.textures,X=P.width,J=P.height;let st=i.COLOR_BUFFER_BIT;const Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(P),Mt=b.length>1;if(Mt)for(let Lt=0;Lt<b.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Lt=0;Lt<b.length;Lt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),Mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Lt]);const ye=n.get(b[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ye,0)}i.blitFramebuffer(0,0,X,J,0,0,X,J,st,i.NEAREST),l===!0&&(it.length=0,L.length=0,it.push(i.COLOR_ATTACHMENT0+Lt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(it.push(Q),L.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let Lt=0;Lt<b.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Lt]);const ye=n.get(b[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,ye,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function gt(P){return Math.min(s.maxSamples,P.samples)}function ct(P){const b=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function yt(P){const b=r.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function Vt(P,b){const X=P.colorSpace,J=P.format,st=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==lo&&X!==js&&(Ce.getTransfer(X)===Be?(J!==Mi||st!==Ns)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}function At(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=S,this.setTexture2D=F,this.setTexture2DArray=k,this.setTexture3D=U,this.setTextureCube=tt,this.rebindTextures=$t,this.setupRenderTarget=se,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=ct}function zb(i,t){function e(n,s=js){let o;const r=Ce.getTransfer(s);if(n===Ns)return i.UNSIGNED_BYTE;if(n===If)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===iv)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ev)return i.BYTE;if(n===nv)return i.SHORT;if(n===Qa)return i.UNSIGNED_SHORT;if(n===Lf)return i.INT;if(n===Oo)return i.UNSIGNED_INT;if(n===is)return i.FLOAT;if(n===Gi)return i.HALF_FLOAT;if(n===sv)return i.ALPHA;if(n===ov)return i.RGB;if(n===Mi)return i.RGBA;if(n===rv)return i.LUMINANCE;if(n===av)return i.LUMINANCE_ALPHA;if(n===Cr)return i.DEPTH_COMPONENT;if(n===Hr)return i.DEPTH_STENCIL;if(n===Df)return i.RED;if(n===Uf)return i.RED_INTEGER;if(n===lv)return i.RG;if(n===Ff)return i.RG_INTEGER;if(n===Of)return i.RGBA_INTEGER;if(n===Ac||n===Cc||n===Rc||n===Pc)if(r===Be)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ac)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ac)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vd||n===xd||n===_d||n===yd)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===vd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_d)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Md||n===wd||n===Sd)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Md||n===wd)return r===Be?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Sd)return r===Be?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bd||n===Ed||n===Td||n===Ad||n===Cd||n===Rd||n===Pd||n===Ld||n===Id||n===Nd||n===Dd||n===Ud||n===Fd||n===Od)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===bd)return r===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ed)return r===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Td)return r===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ad)return r===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cd)return r===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rd)return r===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pd)return r===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ld)return r===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Id)return r===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nd)return r===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dd)return r===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ud)return r===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fd)return r===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Od)return r===Be?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lc||n===zd||n===Bd)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Lc)return r===Be?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cv||n===kd||n===Hd||n===Vd)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Lc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===kd)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===kr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Bb extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ge extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kb={type:"move"};class Mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Hb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vb=`
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

}`;class Gb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Nn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new An({vertexShader:Hb,fragmentShader:Vb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xe(new Ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wb extends ta{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null;const v=new Gb,m=e.getContextAttributes();let g=null,x=null;const _=[],M=[],C=new rt;let E=null;const T=new En;T.layers.enable(1),T.viewport=new Fe;const I=new En;I.layers.enable(2),I.viewport=new Fe;const V=[T,I],y=new Bb;y.layers.enable(1),y.layers.enable(2);let S=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let at=_[Z];return at===void 0&&(at=new Mu,_[Z]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Z){let at=_[Z];return at===void 0&&(at=new Mu,_[Z]=at),at.getGripSpace()},this.getHand=function(Z){let at=_[Z];return at===void 0&&(at=new Mu,_[Z]=at),at.getHandSpace()};function D(Z){const at=M.indexOf(Z.inputSource);if(at===-1)return;const Tt=_[at];Tt!==void 0&&(Tt.update(Z.inputSource,Z.frame,c||r),Tt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",k);for(let Z=0;Z<_.length;Z++){const at=M[Z];at!==null&&(M[Z]=null,_[Z].disconnect(at))}S=null,B=null,v.reset(),t.setRenderTarget(g),f=null,u=null,d=null,s=null,x=null,de.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",F),s.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ci(f.framebufferWidth,f.framebufferHeight,{format:Mi,type:Ns,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,Tt=null,xt=null;m.depth&&(xt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?Hr:Cr,Tt=m.stencil?kr:Oo);const Yt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:o};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Yt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new ci(u.textureWidth,u.textureHeight,{format:Mi,type:Ns,depthTexture:new wv(u.textureWidth,u.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),de.setContext(s),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function k(Z){for(let at=0;at<Z.removed.length;at++){const Tt=Z.removed[at],xt=M.indexOf(Tt);xt>=0&&(M[xt]=null,_[xt].disconnect(Tt))}for(let at=0;at<Z.added.length;at++){const Tt=Z.added[at];let xt=M.indexOf(Tt);if(xt===-1){for(let $t=0;$t<_.length;$t++)if($t>=M.length){M.push(Tt),xt=$t;break}else if(M[$t]===null){M[$t]=Tt,xt=$t;break}if(xt===-1)break}const Yt=_[xt];Yt&&Yt.connect(Tt)}}const U=new R,tt=new R;function q(Z,at,Tt){U.setFromMatrixPosition(at.matrixWorld),tt.setFromMatrixPosition(Tt.matrixWorld);const xt=U.distanceTo(tt),Yt=at.projectionMatrix.elements,$t=Tt.projectionMatrix.elements,se=Yt[14]/(Yt[10]-1),pe=Yt[14]/(Yt[10]+1),it=(Yt[9]+1)/Yt[5],L=(Yt[9]-1)/Yt[5],_t=(Yt[8]-1)/Yt[0],gt=($t[8]+1)/$t[0],ct=se*_t,yt=se*gt,Vt=xt/(-_t+gt),At=Vt*-_t;if(at.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(At),Z.translateZ(Vt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Yt[10]===-1)Z.projectionMatrix.copy(at.projectionMatrix),Z.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const P=se+Vt,b=pe+Vt,X=ct-At,J=yt+(xt-At),st=it*pe/b*P,Q=L*pe/b*P;Z.projectionMatrix.makePerspective(X,J,st,Q,P,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function nt(Z,at){at===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(at.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let at=Z.near,Tt=Z.far;v.texture!==null&&(v.depthNear>0&&(at=v.depthNear),v.depthFar>0&&(Tt=v.depthFar)),y.near=I.near=T.near=at,y.far=I.far=T.far=Tt,(S!==y.near||B!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,B=y.far);const xt=Z.parent,Yt=y.cameras;nt(y,xt);for(let $t=0;$t<Yt.length;$t++)nt(Yt[$t],xt);Yt.length===2?q(y,T,I):y.projectionMatrix.copy(T.projectionMatrix),pt(Z,y,xt)};function pt(Z,at,Tt){Tt===null?Z.matrix.copy(at.matrixWorld):(Z.matrix.copy(Tt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(at.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(at.projectionMatrix),Z.projectionMatrixInverse.copy(at.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Vr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let dt=null;function mt(Z,at){if(h=at.getViewerPose(c||r),p=at,h!==null){const Tt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let xt=!1;Tt.length!==y.cameras.length&&(y.cameras.length=0,xt=!0);for(let $t=0;$t<Tt.length;$t++){const se=Tt[$t];let pe=null;if(f!==null)pe=f.getViewport(se);else{const L=d.getViewSubImage(u,se);pe=L.viewport,$t===0&&(t.setRenderTargetTextures(x,L.colorTexture,u.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(x))}let it=V[$t];it===void 0&&(it=new En,it.layers.enable($t),it.viewport=new Fe,V[$t]=it),it.matrix.fromArray(se.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(se.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(pe.x,pe.y,pe.width,pe.height),$t===0&&(y.matrix.copy(it.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),xt===!0&&y.cameras.push(it)}const Yt=s.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")){const $t=d.getDepthInformation(Tt[0]);$t&&$t.isValid&&$t.texture&&v.init(t,$t,s.renderState)}}for(let Tt=0;Tt<_.length;Tt++){const xt=M[Tt],Yt=_[Tt];xt!==null&&Yt!==void 0&&Yt.update(xt,at,c||r)}dt&&dt(Z,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),p=null}const de=new Mv;de.setAnimationLoop(mt),this.setAnimationLoop=function(Z){dt=Z},this.dispose=function(){}}}const yo=new Gn,qb=new me;function Xb(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,xv(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,x,_,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(m,g):g.isMeshToonMaterial?(o(m,g),d(m,g)):g.isMeshPhongMaterial?(o(m,g),h(m,g)):g.isMeshStandardMaterial?(o(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(o(m,g),p(m,g)):g.isMeshDepthMaterial?o(m,g):g.isMeshDistanceMaterial?(o(m,g),v(m,g)):g.isMeshNormalMaterial?o(m,g):g.isLineBasicMaterial?(r(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,x,_):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Jn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Jn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const x=t.get(g),_=x.envMap,M=x.envMapRotation;_&&(m.envMap.value=_,yo.copy(M),yo.x*=-1,yo.y*=-1,yo.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(yo.y*=-1,yo.z*=-1),m.envMapRotation.value.setFromMatrix4(qb.makeRotationFromEuler(yo)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function r(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,_){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=_*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Jn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const x=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $b(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const M=_.program;n.uniformBlockBinding(x,M)}function c(x,_){let M=s[x.id];M===void 0&&(p(x),M=h(x),s[x.id]=M,x.addEventListener("dispose",m));const C=_.program;n.updateUBOMapping(x,C);const E=t.render.frame;o[x.id]!==E&&(u(x),o[x.id]=E)}function h(x){const _=d();x.__bindingPointIndex=_;const M=i.createBuffer(),C=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,M),M}function d(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const _=s[x.id],M=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,T=M.length;E<T;E++){const I=Array.isArray(M[E])?M[E]:[M[E]];for(let V=0,y=I.length;V<y;V++){const S=I[V];if(f(S,E,V,C)===!0){const B=S.__offset,D=Array.isArray(S.value)?S.value:[S.value];let F=0;for(let k=0;k<D.length;k++){const U=D[k],tt=v(U);typeof U=="number"||typeof U=="boolean"?(S.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,B+F,S.__data)):U.isMatrix3?(S.__data[0]=U.elements[0],S.__data[1]=U.elements[1],S.__data[2]=U.elements[2],S.__data[3]=0,S.__data[4]=U.elements[3],S.__data[5]=U.elements[4],S.__data[6]=U.elements[5],S.__data[7]=0,S.__data[8]=U.elements[6],S.__data[9]=U.elements[7],S.__data[10]=U.elements[8],S.__data[11]=0):(U.toArray(S.__data,F),F+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,_,M,C){const E=x.value,T=_+"_"+M;if(C[T]===void 0)return typeof E=="number"||typeof E=="boolean"?C[T]=E:C[T]=E.clone(),!0;{const I=C[T];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return C[T]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function p(x){const _=x.uniforms;let M=0;const C=16;for(let T=0,I=_.length;T<I;T++){const V=Array.isArray(_[T])?_[T]:[_[T]];for(let y=0,S=V.length;y<S;y++){const B=V[y],D=Array.isArray(B.value)?B.value:[B.value];for(let F=0,k=D.length;F<k;F++){const U=D[F],tt=v(U),q=M%C,nt=q%tt.boundary,pt=q+nt;M+=nt,pt!==0&&C-pt<tt.storage&&(M+=C-pt),B.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=tt.storage}}}const E=M%C;return E>0&&(M+=C-E),x.__size=M,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const M=r.indexOf(_.__bindingPointIndex);r.splice(M,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete o[_.id]}function g(){for(const x in s)i.deleteBuffer(s[x]);r=[],s={},o={}}return{bind:l,update:c,dispose:g}}class qf{constructor(t={}){const{canvas:e=Fy(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=r;const f=new Uint32Array(4),p=new Int32Array(4);let v=null,m=null;const g=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_i,this.toneMapping=eo,this.toneMappingExposure=1;const _=this;let M=!1,C=0,E=0,T=null,I=-1,V=null;const y=new Fe,S=new Fe;let B=null;const D=new ut(0);let F=0,k=e.width,U=e.height,tt=1,q=null,nt=null;const pt=new Fe(0,0,k,U),dt=new Fe(0,0,k,U);let mt=!1;const de=new Vf;let Z=!1,at=!1;const Tt=new me,xt=new me,Yt=new R,$t=new Fe,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function it(){return T===null?tt:1}let L=n;function _t(A,H){return e.getContext(A,H)}try{const A={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rf}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),L===null){const H="webgl2";if(L=_t(H,A),L===null)throw _t(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let gt,ct,yt,Vt,At,P,b,X,J,st,Q,Ft,Mt,Lt,ye,ht,It,ee,ne,Nt,Me,ae,ze,z;function Ct(){gt=new Qw(L),gt.init(),ae=new zb(L,gt),ct=new $w(L,gt,t,ae),yt=new Ub(L),ct.reverseDepthBuffer&&yt.buffers.depth.setReversed(!0),Vt=new nS(L),At=new yb,P=new Ob(L,gt,yt,At,ct,ae,Vt),b=new Yw(_),X=new Jw(_),J=new c1(L),ze=new qw(L,J),st=new tS(L,J,Vt,ze),Q=new sS(L,st,J,Vt),ne=new iS(L,ct,P),ht=new jw(At),Ft=new _b(_,b,X,gt,ct,ze,ht),Mt=new Xb(_,At),Lt=new wb,ye=new Cb(gt),ee=new Ww(_,b,X,yt,Q,u,l),It=new Nb(_,Q,ct),z=new $b(L,Vt,ct,yt),Nt=new Xw(L,gt,Vt),Me=new eS(L,gt,Vt),Vt.programs=Ft.programs,_.capabilities=ct,_.extensions=gt,_.properties=At,_.renderLists=Lt,_.shadowMap=It,_.state=yt,_.info=Vt}Ct();const K=new Wb(_,L);this.xr=K,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(A){A!==void 0&&(tt=A,this.setSize(k,U,!1))},this.getSize=function(A){return A.set(k,U)},this.setSize=function(A,H,j=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=A,U=H,e.width=Math.floor(A*tt),e.height=Math.floor(H*tt),j===!0&&(e.style.width=A+"px",e.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(k*tt,U*tt).floor()},this.setDrawingBufferSize=function(A,H,j){k=A,U=H,tt=j,e.width=Math.floor(A*j),e.height=Math.floor(H*j),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(pt)},this.setViewport=function(A,H,j,Y){A.isVector4?pt.set(A.x,A.y,A.z,A.w):pt.set(A,H,j,Y),yt.viewport(y.copy(pt).multiplyScalar(tt).round())},this.getScissor=function(A){return A.copy(dt)},this.setScissor=function(A,H,j,Y){A.isVector4?dt.set(A.x,A.y,A.z,A.w):dt.set(A,H,j,Y),yt.scissor(S.copy(dt).multiplyScalar(tt).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(A){yt.setScissorTest(mt=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){nt=A},this.getClearColor=function(A){return A.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(A=!0,H=!0,j=!0){let Y=0;if(A){let G=!1;if(T!==null){const ft=T.texture.format;G=ft===Of||ft===Ff||ft===Uf}if(G){const ft=T.texture.type,Et=ft===Ns||ft===Oo||ft===Qa||ft===kr||ft===If||ft===Nf,Dt=ee.getClearColor(),Ot=ee.getClearAlpha(),Kt=Dt.r,Qt=Dt.g,kt=Dt.b;Et?(f[0]=Kt,f[1]=Qt,f[2]=kt,f[3]=Ot,L.clearBufferuiv(L.COLOR,0,f)):(p[0]=Kt,p[1]=Qt,p[2]=kt,p[3]=Ot,L.clearBufferiv(L.COLOR,0,p))}else Y|=L.COLOR_BUFFER_BIT}H&&(Y|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),Lt.dispose(),ye.dispose(),At.dispose(),b.dispose(),X.dispose(),Q.dispose(),ze.dispose(),z.dispose(),Ft.dispose(),K.dispose(),K.removeEventListener("sessionstart",Hp),K.removeEventListener("sessionend",Vp),po.stop()};function ot(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=Vt.autoReset,H=It.enabled,j=It.autoUpdate,Y=It.needsUpdate,G=It.type;Ct(),Vt.autoReset=A,It.enabled=H,It.autoUpdate=j,It.needsUpdate=Y,It.type=G}function Rt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function be(A){const H=A.target;H.removeEventListener("dispose",be),an(H)}function an(A){Wn(A),At.remove(A)}function Wn(A){const H=At.get(A).programs;H!==void 0&&(H.forEach(function(j){Ft.releaseProgram(j)}),A.isShaderMaterial&&Ft.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,j,Y,G,ft){H===null&&(H=se);const Et=G.isMesh&&G.matrixWorld.determinant()<0,Dt=U_(A,H,j,Y,G);yt.setMaterial(Y,Et);let Ot=j.index,Kt=1;if(Y.wireframe===!0){if(Ot=st.getWireframeAttribute(j),Ot===void 0)return;Kt=2}const Qt=j.drawRange,kt=j.attributes.position;let Ne=Qt.start*Kt,We=(Qt.start+Qt.count)*Kt;ft!==null&&(Ne=Math.max(Ne,ft.start*Kt),We=Math.min(We,(ft.start+ft.count)*Kt)),Ot!==null?(Ne=Math.max(Ne,0),We=Math.min(We,Ot.count)):kt!=null&&(Ne=Math.max(Ne,0),We=Math.min(We,kt.count));const tn=We-Ne;if(tn<0||tn===1/0)return;ze.setup(G,Y,Dt,j,Ot);let ii,Re=Nt;if(Ot!==null&&(ii=J.get(Ot),Re=Me,Re.setIndex(ii)),G.isMesh)Y.wireframe===!0?(yt.setLineWidth(Y.wireframeLinewidth*it()),Re.setMode(L.LINES)):Re.setMode(L.TRIANGLES);else if(G.isLine){let Gt=Y.linewidth;Gt===void 0&&(Gt=1),yt.setLineWidth(Gt*it()),G.isLineSegments?Re.setMode(L.LINES):G.isLineLoop?Re.setMode(L.LINE_LOOP):Re.setMode(L.LINE_STRIP)}else G.isPoints?Re.setMode(L.POINTS):G.isSprite&&Re.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Re.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))Re.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Gt=G._multiDrawStarts,yn=G._multiDrawCounts,Pe=G._multiDrawCount,Ai=Ot?J.get(Ot).bytesPerElement:1,Ko=At.get(Y).currentProgram.getUniforms();for(let si=0;si<Pe;si++)Ko.setValue(L,"_gl_DrawID",si),Re.render(Gt[si]/Ai,yn[si])}else if(G.isInstancedMesh)Re.renderInstances(Ne,tn,G.count);else if(j.isInstancedBufferGeometry){const Gt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,yn=Math.min(j.instanceCount,Gt);Re.renderInstances(Ne,tn,yn)}else Re.render(Ne,tn)};function Ae(A,H,j){A.transparent===!0&&A.side===jn&&A.forceSinglePass===!1?(A.side=Jn,A.needsUpdate=!0,Il(A,H,j),A.side=oo,A.needsUpdate=!0,Il(A,H,j),A.side=jn):Il(A,H,j)}this.compile=function(A,H,j=null){j===null&&(j=A),m=ye.get(j),m.init(H),x.push(m),j.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),A!==j&&A.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const Y=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ft=G.material;if(ft)if(Array.isArray(ft))for(let Et=0;Et<ft.length;Et++){const Dt=ft[Et];Ae(Dt,j,G),Y.add(Dt)}else Ae(ft,j,G),Y.add(ft)}),x.pop(),m=null,Y},this.compileAsync=function(A,H,j=null){const Y=this.compile(A,H,j);return new Promise(G=>{function ft(){if(Y.forEach(function(Et){At.get(Et).currentProgram.isReady()&&Y.delete(Et)}),Y.size===0){G(A);return}setTimeout(ft,10)}gt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let qn=null;function hs(A){qn&&qn(A)}function Hp(){po.stop()}function Vp(){po.start()}const po=new Mv;po.setAnimationLoop(hs),typeof self<"u"&&po.setContext(self),this.setAnimationLoop=function(A){qn=A,K.setAnimationLoop(A),A===null?po.stop():po.start()},K.addEventListener("sessionstart",Hp),K.addEventListener("sessionend",Vp),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(H),H=K.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,H,T),m=ye.get(A,x.length),m.init(H),x.push(m),xt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),de.setFromProjectionMatrix(xt),at=this.localClippingEnabled,Z=ht.init(this.clippingPlanes,at),v=Lt.get(A,g.length),v.init(),g.push(v),K.enabled===!0&&K.isPresenting===!0){const ft=_.xr.getDepthSensingMesh();ft!==null&&Gh(ft,H,-1/0,_.sortObjects)}Gh(A,H,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(q,nt),pe=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,pe&&ee.addToRenderList(v,A),this.info.render.frame++,Z===!0&&ht.beginShadows();const j=m.state.shadowsArray;It.render(j,A,H),Z===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=v.opaque,G=v.transmissive;if(m.setupLights(),H.isArrayCamera){const ft=H.cameras;if(G.length>0)for(let Et=0,Dt=ft.length;Et<Dt;Et++){const Ot=ft[Et];Wp(Y,G,A,Ot)}pe&&ee.render(A);for(let Et=0,Dt=ft.length;Et<Dt;Et++){const Ot=ft[Et];Gp(v,A,Ot,Ot.viewport)}}else G.length>0&&Wp(Y,G,A,H),pe&&ee.render(A),Gp(v,A,H);T!==null&&(P.updateMultisampleRenderTarget(T),P.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(_,A,H),ze.resetDefaultState(),I=-1,V=null,x.pop(),x.length>0?(m=x[x.length-1],Z===!0&&ht.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function Gh(A,H,j,Y){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||de.intersectsSprite(A)){Y&&$t.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xt);const Et=Q.update(A),Dt=A.material;Dt.visible&&v.push(A,Et,Dt,j,$t.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||de.intersectsObject(A))){const Et=Q.update(A),Dt=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),$t.copy(A.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),$t.copy(Et.boundingSphere.center)),$t.applyMatrix4(A.matrixWorld).applyMatrix4(xt)),Array.isArray(Dt)){const Ot=Et.groups;for(let Kt=0,Qt=Ot.length;Kt<Qt;Kt++){const kt=Ot[Kt],Ne=Dt[kt.materialIndex];Ne&&Ne.visible&&v.push(A,Et,Ne,j,$t.z,kt)}}else Dt.visible&&v.push(A,Et,Dt,j,$t.z,null)}}const ft=A.children;for(let Et=0,Dt=ft.length;Et<Dt;Et++)Gh(ft[Et],H,j,Y)}function Gp(A,H,j,Y){const G=A.opaque,ft=A.transmissive,Et=A.transparent;m.setupLightsView(j),Z===!0&&ht.setGlobalState(_.clippingPlanes,j),Y&&yt.viewport(y.copy(Y)),G.length>0&&Ll(G,H,j),ft.length>0&&Ll(ft,H,j),Et.length>0&&Ll(Et,H,j),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Wp(A,H,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new ci(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?Gi:Ns,minFilter:No,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const ft=m.state.transmissionRenderTarget[Y.id],Et=Y.viewport||y;ft.setSize(Et.z,Et.w);const Dt=_.getRenderTarget();_.setRenderTarget(ft),_.getClearColor(D),F=_.getClearAlpha(),F<1&&_.setClearColor(16777215,.5),_.clear(),pe&&ee.render(j);const Ot=_.toneMapping;_.toneMapping=eo;const Kt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),Z===!0&&ht.setGlobalState(_.clippingPlanes,Y),Ll(A,j,Y),P.updateMultisampleRenderTarget(ft),P.updateRenderTargetMipmap(ft),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let kt=0,Ne=H.length;kt<Ne;kt++){const We=H[kt],tn=We.object,ii=We.geometry,Re=We.material,Gt=We.group;if(Re.side===jn&&tn.layers.test(Y.layers)){const yn=Re.side;Re.side=Jn,Re.needsUpdate=!0,qp(tn,j,Y,ii,Re,Gt),Re.side=yn,Re.needsUpdate=!0,Qt=!0}}Qt===!0&&(P.updateMultisampleRenderTarget(ft),P.updateRenderTargetMipmap(ft))}_.setRenderTarget(Dt),_.setClearColor(D,F),Kt!==void 0&&(Y.viewport=Kt),_.toneMapping=Ot}function Ll(A,H,j){const Y=H.isScene===!0?H.overrideMaterial:null;for(let G=0,ft=A.length;G<ft;G++){const Et=A[G],Dt=Et.object,Ot=Et.geometry,Kt=Y===null?Et.material:Y,Qt=Et.group;Dt.layers.test(j.layers)&&qp(Dt,H,j,Ot,Kt,Qt)}}function qp(A,H,j,Y,G,ft){A.onBeforeRender(_,H,j,Y,G,ft),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(_,H,j,Y,A,ft),G.transparent===!0&&G.side===jn&&G.forceSinglePass===!1?(G.side=Jn,G.needsUpdate=!0,_.renderBufferDirect(j,H,Y,G,A,ft),G.side=oo,G.needsUpdate=!0,_.renderBufferDirect(j,H,Y,G,A,ft),G.side=jn):_.renderBufferDirect(j,H,Y,G,A,ft),A.onAfterRender(_,H,j,Y,G,ft)}function Il(A,H,j){H.isScene!==!0&&(H=se);const Y=At.get(A),G=m.state.lights,ft=m.state.shadowsArray,Et=G.state.version,Dt=Ft.getParameters(A,G.state,ft,H,j),Ot=Ft.getProgramCacheKey(Dt);let Kt=Y.programs;Y.environment=A.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(A.isMeshStandardMaterial?X:b).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Kt===void 0&&(A.addEventListener("dispose",be),Kt=new Map,Y.programs=Kt);let Qt=Kt.get(Ot);if(Qt!==void 0){if(Y.currentProgram===Qt&&Y.lightsStateVersion===Et)return $p(A,Dt),Qt}else Dt.uniforms=Ft.getUniforms(A),A.onBeforeCompile(Dt,_),Qt=Ft.acquireProgram(Dt,Ot),Kt.set(Ot,Qt),Y.uniforms=Dt.uniforms;const kt=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=ht.uniform),$p(A,Dt),Y.needsLights=O_(A),Y.lightsStateVersion=Et,Y.needsLights&&(kt.ambientLightColor.value=G.state.ambient,kt.lightProbe.value=G.state.probe,kt.directionalLights.value=G.state.directional,kt.directionalLightShadows.value=G.state.directionalShadow,kt.spotLights.value=G.state.spot,kt.spotLightShadows.value=G.state.spotShadow,kt.rectAreaLights.value=G.state.rectArea,kt.ltc_1.value=G.state.rectAreaLTC1,kt.ltc_2.value=G.state.rectAreaLTC2,kt.pointLights.value=G.state.point,kt.pointLightShadows.value=G.state.pointShadow,kt.hemisphereLights.value=G.state.hemi,kt.directionalShadowMap.value=G.state.directionalShadowMap,kt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,kt.spotShadowMap.value=G.state.spotShadowMap,kt.spotLightMatrix.value=G.state.spotLightMatrix,kt.spotLightMap.value=G.state.spotLightMap,kt.pointShadowMap.value=G.state.pointShadowMap,kt.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Qt,Y.uniformsList=null,Qt}function Xp(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Nc.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function $p(A,H){const j=At.get(A);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function U_(A,H,j,Y,G){H.isScene!==!0&&(H=se),P.resetTextureUnits();const ft=H.fog,Et=Y.isMeshStandardMaterial?H.environment:null,Dt=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:lo,Ot=(Y.isMeshStandardMaterial?X:b).get(Y.envMap||Et),Kt=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Qt=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),kt=!!j.morphAttributes.position,Ne=!!j.morphAttributes.normal,We=!!j.morphAttributes.color;let tn=eo;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(tn=_.toneMapping);const ii=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Re=ii!==void 0?ii.length:0,Gt=At.get(Y),yn=m.state.lights;if(Z===!0&&(at===!0||A!==V)){const pi=A===V&&Y.id===I;ht.setState(Y,A,pi)}let Pe=!1;Y.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==yn.state.version||Gt.outputColorSpace!==Dt||G.isBatchedMesh&&Gt.batching===!1||!G.isBatchedMesh&&Gt.batching===!0||G.isBatchedMesh&&Gt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Gt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Gt.instancing===!1||!G.isInstancedMesh&&Gt.instancing===!0||G.isSkinnedMesh&&Gt.skinning===!1||!G.isSkinnedMesh&&Gt.skinning===!0||G.isInstancedMesh&&Gt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Gt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Gt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Gt.instancingMorph===!1&&G.morphTexture!==null||Gt.envMap!==Ot||Y.fog===!0&&Gt.fog!==ft||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==ht.numPlanes||Gt.numIntersection!==ht.numIntersection)||Gt.vertexAlphas!==Kt||Gt.vertexTangents!==Qt||Gt.morphTargets!==kt||Gt.morphNormals!==Ne||Gt.morphColors!==We||Gt.toneMapping!==tn||Gt.morphTargetsCount!==Re)&&(Pe=!0):(Pe=!0,Gt.__version=Y.version);let Ai=Gt.currentProgram;Pe===!0&&(Ai=Il(Y,H,G));let Ko=!1,si=!1,Wh=!1;const sn=Ai.getUniforms(),Os=Gt.uniforms;if(yt.useProgram(Ai.program)&&(Ko=!0,si=!0,Wh=!0),Y.id!==I&&(I=Y.id,si=!0),Ko||V!==A){ct.reverseDepthBuffer?(Tt.copy(A.projectionMatrix),zy(Tt),By(Tt),sn.setValue(L,"projectionMatrix",Tt)):sn.setValue(L,"projectionMatrix",A.projectionMatrix),sn.setValue(L,"viewMatrix",A.matrixWorldInverse);const pi=sn.map.cameraPosition;pi!==void 0&&pi.setValue(L,Yt.setFromMatrixPosition(A.matrixWorld)),ct.logarithmicDepthBuffer&&sn.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&sn.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),V!==A&&(V=A,si=!0,Wh=!0)}if(G.isSkinnedMesh){sn.setOptional(L,G,"bindMatrix"),sn.setOptional(L,G,"bindMatrixInverse");const pi=G.skeleton;pi&&(pi.boneTexture===null&&pi.computeBoneTexture(),sn.setValue(L,"boneTexture",pi.boneTexture,P))}G.isBatchedMesh&&(sn.setOptional(L,G,"batchingTexture"),sn.setValue(L,"batchingTexture",G._matricesTexture,P),sn.setOptional(L,G,"batchingIdTexture"),sn.setValue(L,"batchingIdTexture",G._indirectTexture,P),sn.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&sn.setValue(L,"batchingColorTexture",G._colorsTexture,P));const qh=j.morphAttributes;if((qh.position!==void 0||qh.normal!==void 0||qh.color!==void 0)&&ne.update(G,j,Ai),(si||Gt.receiveShadow!==G.receiveShadow)&&(Gt.receiveShadow=G.receiveShadow,sn.setValue(L,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Os.envMap.value=Ot,Os.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&H.environment!==null&&(Os.envMapIntensity.value=H.environmentIntensity),si&&(sn.setValue(L,"toneMappingExposure",_.toneMappingExposure),Gt.needsLights&&F_(Os,Wh),ft&&Y.fog===!0&&Mt.refreshFogUniforms(Os,ft),Mt.refreshMaterialUniforms(Os,Y,tt,U,m.state.transmissionRenderTarget[A.id]),Nc.upload(L,Xp(Gt),Os,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Nc.upload(L,Xp(Gt),Os,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&sn.setValue(L,"center",G.center),sn.setValue(L,"modelViewMatrix",G.modelViewMatrix),sn.setValue(L,"normalMatrix",G.normalMatrix),sn.setValue(L,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const pi=Y.uniformsGroups;for(let Xh=0,z_=pi.length;Xh<z_;Xh++){const jp=pi[Xh];z.update(jp,Ai),z.bind(jp,Ai)}}return Ai}function F_(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function O_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,H,j){At.get(A.texture).__webglTexture=H,At.get(A.depthTexture).__webglTexture=j;const Y=At.get(A);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=j===void 0,Y.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,H){const j=At.get(A);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,j=0){T=A,C=H,E=j;let Y=!0,G=null,ft=!1,Et=!1;if(A){const Ot=At.get(A);if(Ot.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1;else if(Ot.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(Ot.__hasExternalTextures)P.rebindTextures(A,At.get(A.texture).__webglTexture,At.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const kt=A.depthTexture;if(Ot.__boundDepthTexture!==kt){if(kt!==null&&At.has(kt)&&(A.width!==kt.image.width||A.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const Kt=A.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Et=!0);const Qt=At.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qt[H])?G=Qt[H][j]:G=Qt[H],ft=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?G=At.get(A).__webglMultisampledFramebuffer:Array.isArray(Qt)?G=Qt[j]:G=Qt,y.copy(A.viewport),S.copy(A.scissor),B=A.scissorTest}else y.copy(pt).multiplyScalar(tt).floor(),S.copy(dt).multiplyScalar(tt).floor(),B=mt;if(yt.bindFramebuffer(L.FRAMEBUFFER,G)&&Y&&yt.drawBuffers(A,G),yt.viewport(y),yt.scissor(S),yt.setScissorTest(B),ft){const Ot=At.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ot.__webglTexture,j)}else if(Et){const Ot=At.get(A.texture),Kt=H||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ot.__webglTexture,j||0,Kt)}I=-1},this.readRenderTargetPixels=function(A,H,j,Y,G,ft,Et){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=At.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(Dt=Dt[Et]),Dt){yt.bindFramebuffer(L.FRAMEBUFFER,Dt);try{const Ot=A.texture,Kt=Ot.format,Qt=Ot.type;if(!ct.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-Y&&j>=0&&j<=A.height-G&&L.readPixels(H,j,Y,G,ae.convert(Kt),ae.convert(Qt),ft)}finally{const Ot=T!==null?At.get(T).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(A,H,j,Y,G,ft,Et){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=At.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(Dt=Dt[Et]),Dt){const Ot=A.texture,Kt=Ot.format,Qt=Ot.type;if(!ct.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=A.width-Y&&j>=0&&j<=A.height-G){yt.bindFramebuffer(L.FRAMEBUFFER,Dt);const kt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,kt),L.bufferData(L.PIXEL_PACK_BUFFER,ft.byteLength,L.STREAM_READ),L.readPixels(H,j,Y,G,ae.convert(Kt),ae.convert(Qt),0);const Ne=T!==null?At.get(T).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,Ne);const We=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Oy(L,We,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,kt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ft),L.deleteBuffer(kt),L.deleteSync(We),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,H=null,j=0){A.isTexture!==!0&&(Ic("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1]);const Y=Math.pow(2,-j),G=Math.floor(A.image.width*Y),ft=Math.floor(A.image.height*Y),Et=H!==null?H.x:0,Dt=H!==null?H.y:0;P.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,j,0,0,Et,Dt,G,ft),yt.unbindTexture()},this.copyTextureToTexture=function(A,H,j=null,Y=null,G=0){A.isTexture!==!0&&(Ic("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1],H=arguments[2],G=arguments[3]||0,j=null);let ft,Et,Dt,Ot,Kt,Qt;j!==null?(ft=j.max.x-j.min.x,Et=j.max.y-j.min.y,Dt=j.min.x,Ot=j.min.y):(ft=A.image.width,Et=A.image.height,Dt=0,Ot=0),Y!==null?(Kt=Y.x,Qt=Y.y):(Kt=0,Qt=0);const kt=ae.convert(H.format),Ne=ae.convert(H.type);P.setTexture2D(H,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const We=L.getParameter(L.UNPACK_ROW_LENGTH),tn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ii=L.getParameter(L.UNPACK_SKIP_PIXELS),Re=L.getParameter(L.UNPACK_SKIP_ROWS),Gt=L.getParameter(L.UNPACK_SKIP_IMAGES),yn=A.isCompressedTexture?A.mipmaps[G]:A.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,yn.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yn.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Dt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ot),A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,G,Kt,Qt,ft,Et,kt,Ne,yn.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,G,Kt,Qt,yn.width,yn.height,kt,yn.data):L.texSubImage2D(L.TEXTURE_2D,G,Kt,Qt,ft,Et,kt,Ne,yn),L.pixelStorei(L.UNPACK_ROW_LENGTH,We),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,tn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ii),L.pixelStorei(L.UNPACK_SKIP_ROWS,Re),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Gt),G===0&&H.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(A,H,j=null,Y=null,G=0){A.isTexture!==!0&&(Ic("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Y=arguments[1]||null,A=arguments[2],H=arguments[3],G=arguments[4]||0);let ft,Et,Dt,Ot,Kt,Qt,kt,Ne,We;const tn=A.isCompressedTexture?A.mipmaps[G]:A.image;j!==null?(ft=j.max.x-j.min.x,Et=j.max.y-j.min.y,Dt=j.max.z-j.min.z,Ot=j.min.x,Kt=j.min.y,Qt=j.min.z):(ft=tn.width,Et=tn.height,Dt=tn.depth,Ot=0,Kt=0,Qt=0),Y!==null?(kt=Y.x,Ne=Y.y,We=Y.z):(kt=0,Ne=0,We=0);const ii=ae.convert(H.format),Re=ae.convert(H.type);let Gt;if(H.isData3DTexture)P.setTexture3D(H,0),Gt=L.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)P.setTexture2DArray(H,0),Gt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const yn=L.getParameter(L.UNPACK_ROW_LENGTH),Pe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ai=L.getParameter(L.UNPACK_SKIP_PIXELS),Ko=L.getParameter(L.UNPACK_SKIP_ROWS),si=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,tn.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,tn.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ot),L.pixelStorei(L.UNPACK_SKIP_ROWS,Kt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Qt),A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Gt,G,kt,Ne,We,ft,Et,Dt,ii,Re,tn.data):H.isCompressedArrayTexture?L.compressedTexSubImage3D(Gt,G,kt,Ne,We,ft,Et,Dt,ii,tn.data):L.texSubImage3D(Gt,G,kt,Ne,We,ft,Et,Dt,ii,Re,tn),L.pixelStorei(L.UNPACK_ROW_LENGTH,yn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ai),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ko),L.pixelStorei(L.UNPACK_SKIP_IMAGES,si),G===0&&H.generateMipmaps&&L.generateMipmap(Gt),yt.unbindTexture()},this.initRenderTarget=function(A){At.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),yt.unbindTexture()},this.resetState=function(){C=0,E=0,T=null,yt.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Es}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Bf?"display-p3":"srgb",e.unpackColorSpace=Ce.workingColorSpace===xh?"display-p3":"srgb"}}class Xf{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ut(t),this.near=e,this.far=n}clone(){return new Xf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $f extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Av extends Nn{constructor(t=null,e=1,n=1,s,o,r,a,l,c=Yn,h=Yn,d,u){super(null,r,a,l,c,h,s,o,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class V0 extends en{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ur=new me,G0=new me,tc=[],W0=new Fs,jb=new me,fa=new Xe,pa=new co;class ml extends Xe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new V0(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,jb)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Fs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ur),W0.copy(t.boundingBox).applyMatrix4(ur),this.boundingBox.union(W0)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new co),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ur),pa.copy(t.boundingSphere).applyMatrix4(ur),this.boundingSphere.union(pa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(fa.geometry=this.geometry,fa.material=this.material,fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pa.copy(this.boundingSphere),pa.applyMatrix4(n),t.ray.intersectsSphere(pa)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,ur),G0.multiplyMatrices(n,ur),fa.matrixWorld=G0,fa.raycast(t,tc);for(let r=0,a=tc.length;r<a;r++){const l=tc[r];l.instanceId=o,l.object=this,e.push(l)}tc.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new V0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Av(new Float32Array(s*this.count),s,this.count,Df,is));const o=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Cv extends ho{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Kc=new R,Zc=new R,q0=new me,ma=new Hf,ec=new co,wu=new R,X0=new R;class Yb extends rn{constructor(t=new Qe,e=new Cv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)Kc.fromBufferAttribute(e,s-1),Zc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Kc.distanceTo(Zc);t.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ec.copy(n.boundingSphere),ec.applyMatrix4(s),ec.radius+=o,t.ray.intersectsSphere(ec)===!1)return;q0.copy(s).invert(),ma.copy(t.ray).applyMatrix4(q0);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),p=Math.min(h.count,r.start+r.count);for(let v=f,m=p-1;v<m;v+=c){const g=h.getX(v),x=h.getX(v+1),_=nc(this,t,ma,l,g,x);_&&e.push(_)}if(this.isLineLoop){const v=h.getX(p-1),m=h.getX(f),g=nc(this,t,ma,l,v,m);g&&e.push(g)}}else{const f=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let v=f,m=p-1;v<m;v+=c){const g=nc(this,t,ma,l,v,v+1);g&&e.push(g)}if(this.isLineLoop){const v=nc(this,t,ma,l,p-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function nc(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(Kc.fromBufferAttribute(r,s),Zc.fromBufferAttribute(r,o),e.distanceSqToSegment(Kc,Zc,wu,X0)>n)return;wu.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(wu);if(!(l<t.near||l>t.far))return{distance:l,point:X0.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const $0=new R,j0=new R;class Kb extends Yb{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)$0.fromBufferAttribute(e,s),j0.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+$0.distanceTo(j0);t.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jf extends ho{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Y0=new me,Wd=new Hf,ic=new co,sc=new R;class Rv extends rn{constructor(t=new Qe,e=new jf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ic.copy(n.boundingSphere),ic.applyMatrix4(s),ic.radius+=o,t.ray.intersectsSphere(ic)===!1)return;Y0.copy(s).invert(),Wd.copy(t.ray).applyMatrix4(Y0);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let p=u,v=f;p<v;p++){const m=c.getX(p);sc.fromBufferAttribute(d,m),K0(sc,m,l,s,t,e,this)}}else{const u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let p=u,v=f;p<v;p++)sc.fromBufferAttribute(d,p),K0(sc,p,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function K0(i,t,e,n,s,o,r){const a=Wd.distanceSqToPoint(i);if(a<e){const l=new R;Wd.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Pv extends Nn{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cs{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const h=n[s],u=n[s+1]-h,f=(r-h)/u;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new rt:new R);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,s=[],o=[],r=[],a=new R,l=new me;for(let f=0;f<=t;f++){const p=f/t;s[f]=this.getTangentAt(p,new R)}o[0]=new R,r[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(xn(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,p))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(xn(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let p=1;p<=t;p++)o[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),r[p].crossVectors(s[p],o[p])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Yf extends cs{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new rt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Zb extends Yf{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Kf(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,d){let u=(r-o)/c-(a-o)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+d)+(l-a)/d;u*=h,f*=h,s(r,a,u,f)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const oc=new R,Su=new Kf,bu=new Kf,Eu=new Kf;class Jb extends cs{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(oc.subVectors(s[0],s[1]).add(s[0]),c=oc);const d=s[a%o],u=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(oc.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=oc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),Su.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,v,m),bu.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,v,m),Eu.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(Su.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),bu.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Eu.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Su.calc(l),bu.calc(l),Eu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Z0(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function Qb(i,t){const e=1-i;return e*e*t}function tE(i,t){return 2*(1-i)*i*t}function eE(i,t){return i*i*t}function ka(i,t,e,n){return Qb(i,t)+tE(i,e)+eE(i,n)}function nE(i,t){const e=1-i;return e*e*e*t}function iE(i,t){const e=1-i;return 3*e*e*i*t}function sE(i,t){return 3*(1-i)*i*i*t}function oE(i,t){return i*i*i*t}function Ha(i,t,e,n,s){return nE(i,t)+iE(i,e)+sE(i,n)+oE(i,s)}class Lv extends cs{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ha(t,s.x,o.x,r.x,a.x),Ha(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rE extends cs{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ha(t,s.x,o.x,r.x,a.x),Ha(t,s.y,o.y,r.y,a.y),Ha(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Iv extends cs{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class aE extends cs{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nv extends cs{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(ka(t,s.x,o.x,r.x),ka(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lE extends cs{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(ka(t,s.x,o.x,r.x),ka(t,s.y,o.y,r.y),ka(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dv extends cs{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return n.set(Z0(a,l.x,c.x,h.x,d.x),Z0(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new rt().fromArray(s))}return this}}var qd=Object.freeze({__proto__:null,ArcCurve:Zb,CatmullRomCurve3:Jb,CubicBezierCurve:Lv,CubicBezierCurve3:rE,EllipseCurve:Yf,LineCurve:Iv,LineCurve3:aE,QuadraticBezierCurve:Nv,QuadraticBezierCurve3:lE,SplineCurve:Dv});class cE extends cs{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qd[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new qd[s.type]().fromJSON(s))}return this}}class Xd extends cE{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Iv(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new Nv(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new Lv(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Dv(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new Yf(t,e,n,s,o,r,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class yh extends Qe{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=xn(s,0,Math.PI*2);const o=[],r=[],a=[],l=[],c=[],h=1/e,d=new R,u=new rt,f=new R,p=new R,v=new R;let m=0,g=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,f.x=g*1,f.y=-m,f.z=g*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let x=0;x<=e;x++){const _=n+x*h*s,M=Math.sin(_),C=Math.cos(_);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*M,d.y=t[E].y,d.z=t[E].x*C,r.push(d.x,d.y,d.z),u.x=x/e,u.y=E/(t.length-1),a.push(u.x,u.y);const T=l[3*E+0]*M,I=l[3*E+1],V=l[3*E+0]*C;c.push(T,I,V)}}for(let x=0;x<e;x++)for(let _=0;_<t.length-1;_++){const M=_+x*t.length,C=M,E=M+t.length,T=M+t.length+1,I=M+1;o.push(C,E,I),o.push(T,I,E)}this.setIndex(o),this.setAttribute("position",new Se(r,3)),this.setAttribute("uv",new Se(a,2)),this.setAttribute("normal",new Se(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yh(t.points,t.segments,t.phiStart,t.phiLength)}}class xi extends Qe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new R,h=new rt;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new Se(r,3)),this.setAttribute("normal",new Se(a,3)),this.setAttribute("uv",new Se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ze extends Qe{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],d=[],u=[],f=[];let p=0;const v=[],m=n/2;let g=0;x(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Se(d,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(f,2));function x(){const M=new R,C=new R;let E=0;const T=(e-t)/n;for(let I=0;I<=o;I++){const V=[],y=I/o,S=y*(e-t)+t;for(let B=0;B<=s;B++){const D=B/s,F=D*l+a,k=Math.sin(F),U=Math.cos(F);C.x=S*k,C.y=-y*n+m,C.z=S*U,d.push(C.x,C.y,C.z),M.set(k,T,U).normalize(),u.push(M.x,M.y,M.z),f.push(D,1-y),V.push(p++)}v.push(V)}for(let I=0;I<s;I++)for(let V=0;V<o;V++){const y=v[V][I],S=v[V+1][I],B=v[V+1][I+1],D=v[V][I+1];t>0&&(h.push(y,S,D),E+=3),e>0&&(h.push(S,B,D),E+=3)}c.addGroup(g,E,0),g+=E}function _(M){const C=p,E=new rt,T=new R;let I=0;const V=M===!0?t:e,y=M===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*y,0),u.push(0,y,0),f.push(.5,.5),p++;const S=p;for(let B=0;B<=s;B++){const F=B/s*l+a,k=Math.cos(F),U=Math.sin(F);T.x=V*U,T.y=m*y,T.z=V*k,d.push(T.x,T.y,T.z),u.push(0,y,0),E.x=k*.5+.5,E.y=U*.5*y+.5,f.push(E.x,E.y),p++}for(let B=0;B<s;B++){const D=C+B,F=S+B;M===!0?h.push(F,F+1,D):h.push(F+1,F,D),I+=3}c.addGroup(g,I,M===!0?1:2),g+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ki extends Ze{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new ki(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gl extends Qe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),h(),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(o.slice(),3)),this.setAttribute("uv",new Se(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const _=new R,M=new R,C=new R;for(let E=0;E<e.length;E+=3)f(e[E+0],_),f(e[E+1],M),f(e[E+2],C),l(_,M,C,x)}function l(x,_,M,C){const E=C+1,T=[];for(let I=0;I<=E;I++){T[I]=[];const V=x.clone().lerp(M,I/E),y=_.clone().lerp(M,I/E),S=E-I;for(let B=0;B<=S;B++)B===0&&I===E?T[I][B]=V:T[I][B]=V.clone().lerp(y,B/S)}for(let I=0;I<E;I++)for(let V=0;V<2*(E-I)-1;V++){const y=Math.floor(V/2);V%2===0?(u(T[I][y+1]),u(T[I+1][y]),u(T[I][y])):(u(T[I][y+1]),u(T[I+1][y+1]),u(T[I+1][y]))}}function c(x){const _=new R;for(let M=0;M<o.length;M+=3)_.x=o[M+0],_.y=o[M+1],_.z=o[M+2],_.normalize().multiplyScalar(x),o[M+0]=_.x,o[M+1]=_.y,o[M+2]=_.z}function h(){const x=new R;for(let _=0;_<o.length;_+=3){x.x=o[_+0],x.y=o[_+1],x.z=o[_+2];const M=m(x)/2/Math.PI+.5,C=g(x)/Math.PI+.5;r.push(M,1-C)}p(),d()}function d(){for(let x=0;x<r.length;x+=6){const _=r[x+0],M=r[x+2],C=r[x+4],E=Math.max(_,M,C),T=Math.min(_,M,C);E>.9&&T<.1&&(_<.2&&(r[x+0]+=1),M<.2&&(r[x+2]+=1),C<.2&&(r[x+4]+=1))}}function u(x){o.push(x.x,x.y,x.z)}function f(x,_){const M=x*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function p(){const x=new R,_=new R,M=new R,C=new R,E=new rt,T=new rt,I=new rt;for(let V=0,y=0;V<o.length;V+=9,y+=6){x.set(o[V+0],o[V+1],o[V+2]),_.set(o[V+3],o[V+4],o[V+5]),M.set(o[V+6],o[V+7],o[V+8]),E.set(r[y+0],r[y+1]),T.set(r[y+2],r[y+3]),I.set(r[y+4],r[y+5]),C.copy(x).add(_).add(M).divideScalar(3);const S=m(C);v(E,y+0,x,S),v(T,y+2,_,S),v(I,y+4,M,S)}}function v(x,_,M,C){C<0&&x.x===1&&(r[_]=x.x-1),M.x===0&&M.z===0&&(r[_]=C/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gl(t.vertices,t.indices,t.radius,t.details)}}class Jc extends gl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Jc(t.radius,t.detail)}}let Dc=class extends Xd{constructor(t){super(t),this.uuid=$o(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Xd().fromJSON(s))}return this}};const hE={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=Uv(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,d,u,f;if(n&&(o=mE(i,t,o,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let p=e;p<s;p+=e)d=i[p],u=i[p+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return el(o,r,e,a,l,f,0),r}};function Uv(i,t,e,n,s){let o,r;if(s===TE(i,t,e,n)>0)for(o=t;o<e;o+=n)r=J0(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=J0(o,i[o],i[o+1],r);return r&&Mh(r,r.next)&&(il(r),r=r.next),r}function zo(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Mh(e,e.next)||Ke(e.prev,e,e.next)===0)){if(il(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function el(i,t,e,n,s,o,r){if(!i)return;!r&&o&&yE(i,n,s,o);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,o?dE(i,n,s,o):uE(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),il(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=fE(zo(i),t,e),el(i,t,e,n,s,o,2)):r===2&&pE(i,t,e,n,s,o):el(zo(i),t,e,n,s,o,1);break}}}function uE(i){const t=i.prev,e=i,n=i.next;if(Ke(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=s<o?s<r?s:r:o<r?o:r,d=a<l?a<c?a:c:l<c?l:c,u=s>o?s>r?s:r:o>r?o:r,f=a>l?a>c?a:c:l>c?l:c;let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Mr(s,a,o,l,r,c,p.x,p.y)&&Ke(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function dE(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Ke(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,h=s.y,d=o.y,u=r.y,f=a<l?a<c?a:c:l<c?l:c,p=h<d?h<u?h:u:d<u?d:u,v=a>l?a>c?a:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,g=$d(f,p,t,e,n),x=$d(v,m,t,e,n);let _=i.prevZ,M=i.nextZ;for(;_&&_.z>=g&&M&&M.z<=x;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=m&&_!==s&&_!==r&&Mr(a,h,l,d,c,u,_.x,_.y)&&Ke(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=f&&M.x<=v&&M.y>=p&&M.y<=m&&M!==s&&M!==r&&Mr(a,h,l,d,c,u,M.x,M.y)&&Ke(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=g;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=m&&_!==s&&_!==r&&Mr(a,h,l,d,c,u,_.x,_.y)&&Ke(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=x;){if(M.x>=f&&M.x<=v&&M.y>=p&&M.y<=m&&M!==s&&M!==r&&Mr(a,h,l,d,c,u,M.x,M.y)&&Ke(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function fE(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!Mh(s,o)&&Fv(s,n,n.next,o)&&nl(s,o)&&nl(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),il(n),il(n.next),n=i=o),n=n.next}while(n!==i);return zo(n)}function pE(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&SE(r,a)){let l=Ov(r,a);r=zo(r,r.next),l=zo(l,l.next),el(r,t,e,n,s,o,0),el(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function mE(i,t,e,n){const s=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=Uv(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(wE(c));for(s.sort(gE),o=0;o<s.length;o++)e=vE(s[o],e);return e}function gE(i,t){return i.x-t.x}function vE(i,t){const e=xE(i,t);if(!e)return t;const n=Ov(e,i);return zo(n,n.next),zo(e,e.next)}function xE(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=o&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,d;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&Mr(r<c?o:n,r,l,c,r<c?n:o,r,e.x,e.y)&&(d=Math.abs(r-e.y)/(o-e.x),nl(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&_E(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function _E(i,t){return Ke(i.prev,i,t.prev)<0&&Ke(t.next,i,i.next)<0}function yE(i,t,e,n){let s=i;do s.z===0&&(s.z=$d(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ME(s)}function ME(i){let t,e,n,s,o,r,a,l,c=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,c*=2}while(r>1);return i}function $d(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function wE(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Mr(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function SE(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!bE(i,t)&&(nl(i,t)&&nl(t,i)&&EE(i,t)&&(Ke(i.prev,i,t.prev)||Ke(i,t.prev,t))||Mh(i,t)&&Ke(i.prev,i,i.next)>0&&Ke(t.prev,t,t.next)>0)}function Ke(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Mh(i,t){return i.x===t.x&&i.y===t.y}function Fv(i,t,e,n){const s=ac(Ke(i,t,e)),o=ac(Ke(i,t,n)),r=ac(Ke(e,n,i)),a=ac(Ke(e,n,t));return!!(s!==o&&r!==a||s===0&&rc(i,e,t)||o===0&&rc(i,n,t)||r===0&&rc(e,i,n)||a===0&&rc(e,t,n))}function rc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ac(i){return i>0?1:i<0?-1:0}function bE(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Fv(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function nl(i,t){return Ke(i.prev,i,i.next)<0?Ke(i,t,i.next)>=0&&Ke(i,i.prev,t)>=0:Ke(i,t,i.prev)<0||Ke(i,i.next,t)<0}function EE(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ov(i,t){const e=new jd(i.i,i.x,i.y),n=new jd(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function J0(i,t,e,n){const s=new jd(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function il(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function jd(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function TE(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Pr{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Pr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];Q0(t),tm(n,t);let r=t.length;e.forEach(Q0);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,tm(n,e[l]);const a=hE.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function Q0(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function tm(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Zf extends Qe{constructor(t=new Dc([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new Se(s,3)),this.setAttribute("uv",new Se(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:AE;let _,M=!1,C,E,T,I;g&&(_=g.getSpacedPoints(h),M=!0,u=!1,C=g.computeFrenetFrames(h,!1),E=new R,T=new R,I=new R),u||(m=0,f=0,p=0,v=0);const V=a.extractPoints(c);let y=V.shape;const S=V.holes;if(!Pr.isClockWise(y)){y=y.reverse();for(let it=0,L=S.length;it<L;it++){const _t=S[it];Pr.isClockWise(_t)&&(S[it]=_t.reverse())}}const D=Pr.triangulateShape(y,S),F=y;for(let it=0,L=S.length;it<L;it++){const _t=S[it];y=y.concat(_t)}function k(it,L,_t){return L||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(L,_t)}const U=y.length,tt=D.length;function q(it,L,_t){let gt,ct,yt;const Vt=it.x-L.x,At=it.y-L.y,P=_t.x-it.x,b=_t.y-it.y,X=Vt*Vt+At*At,J=Vt*b-At*P;if(Math.abs(J)>Number.EPSILON){const st=Math.sqrt(X),Q=Math.sqrt(P*P+b*b),Ft=L.x-At/st,Mt=L.y+Vt/st,Lt=_t.x-b/Q,ye=_t.y+P/Q,ht=((Lt-Ft)*b-(ye-Mt)*P)/(Vt*b-At*P);gt=Ft+Vt*ht-it.x,ct=Mt+At*ht-it.y;const It=gt*gt+ct*ct;if(It<=2)return new rt(gt,ct);yt=Math.sqrt(It/2)}else{let st=!1;Vt>Number.EPSILON?P>Number.EPSILON&&(st=!0):Vt<-Number.EPSILON?P<-Number.EPSILON&&(st=!0):Math.sign(At)===Math.sign(b)&&(st=!0),st?(gt=-At,ct=Vt,yt=Math.sqrt(X)):(gt=Vt,ct=At,yt=Math.sqrt(X/2))}return new rt(gt/yt,ct/yt)}const nt=[];for(let it=0,L=F.length,_t=L-1,gt=it+1;it<L;it++,_t++,gt++)_t===L&&(_t=0),gt===L&&(gt=0),nt[it]=q(F[it],F[_t],F[gt]);const pt=[];let dt,mt=nt.concat();for(let it=0,L=S.length;it<L;it++){const _t=S[it];dt=[];for(let gt=0,ct=_t.length,yt=ct-1,Vt=gt+1;gt<ct;gt++,yt++,Vt++)yt===ct&&(yt=0),Vt===ct&&(Vt=0),dt[gt]=q(_t[gt],_t[yt],_t[Vt]);pt.push(dt),mt=mt.concat(dt)}for(let it=0;it<m;it++){const L=it/m,_t=f*Math.cos(L*Math.PI/2),gt=p*Math.sin(L*Math.PI/2)+v;for(let ct=0,yt=F.length;ct<yt;ct++){const Vt=k(F[ct],nt[ct],gt);xt(Vt.x,Vt.y,-_t)}for(let ct=0,yt=S.length;ct<yt;ct++){const Vt=S[ct];dt=pt[ct];for(let At=0,P=Vt.length;At<P;At++){const b=k(Vt[At],dt[At],gt);xt(b.x,b.y,-_t)}}}const de=p+v;for(let it=0;it<U;it++){const L=u?k(y[it],mt[it],de):y[it];M?(T.copy(C.normals[0]).multiplyScalar(L.x),E.copy(C.binormals[0]).multiplyScalar(L.y),I.copy(_[0]).add(T).add(E),xt(I.x,I.y,I.z)):xt(L.x,L.y,0)}for(let it=1;it<=h;it++)for(let L=0;L<U;L++){const _t=u?k(y[L],mt[L],de):y[L];M?(T.copy(C.normals[it]).multiplyScalar(_t.x),E.copy(C.binormals[it]).multiplyScalar(_t.y),I.copy(_[it]).add(T).add(E),xt(I.x,I.y,I.z)):xt(_t.x,_t.y,d/h*it)}for(let it=m-1;it>=0;it--){const L=it/m,_t=f*Math.cos(L*Math.PI/2),gt=p*Math.sin(L*Math.PI/2)+v;for(let ct=0,yt=F.length;ct<yt;ct++){const Vt=k(F[ct],nt[ct],gt);xt(Vt.x,Vt.y,d+_t)}for(let ct=0,yt=S.length;ct<yt;ct++){const Vt=S[ct];dt=pt[ct];for(let At=0,P=Vt.length;At<P;At++){const b=k(Vt[At],dt[At],gt);M?xt(b.x,b.y+_[h-1].y,_[h-1].x+_t):xt(b.x,b.y,d+_t)}}}Z(),at();function Z(){const it=s.length/3;if(u){let L=0,_t=U*L;for(let gt=0;gt<tt;gt++){const ct=D[gt];Yt(ct[2]+_t,ct[1]+_t,ct[0]+_t)}L=h+m*2,_t=U*L;for(let gt=0;gt<tt;gt++){const ct=D[gt];Yt(ct[0]+_t,ct[1]+_t,ct[2]+_t)}}else{for(let L=0;L<tt;L++){const _t=D[L];Yt(_t[2],_t[1],_t[0])}for(let L=0;L<tt;L++){const _t=D[L];Yt(_t[0]+U*h,_t[1]+U*h,_t[2]+U*h)}}n.addGroup(it,s.length/3-it,0)}function at(){const it=s.length/3;let L=0;Tt(F,L),L+=F.length;for(let _t=0,gt=S.length;_t<gt;_t++){const ct=S[_t];Tt(ct,L),L+=ct.length}n.addGroup(it,s.length/3-it,1)}function Tt(it,L){let _t=it.length;for(;--_t>=0;){const gt=_t;let ct=_t-1;ct<0&&(ct=it.length-1);for(let yt=0,Vt=h+m*2;yt<Vt;yt++){const At=U*yt,P=U*(yt+1),b=L+gt+At,X=L+ct+At,J=L+ct+P,st=L+gt+P;$t(b,X,J,st)}}}function xt(it,L,_t){l.push(it),l.push(L),l.push(_t)}function Yt(it,L,_t){se(it),se(L),se(_t);const gt=s.length/3,ct=x.generateTopUV(n,s,gt-3,gt-2,gt-1);pe(ct[0]),pe(ct[1]),pe(ct[2])}function $t(it,L,_t,gt){se(it),se(L),se(gt),se(L),se(_t),se(gt);const ct=s.length/3,yt=x.generateSideWallUV(n,s,ct-6,ct-3,ct-2,ct-1);pe(yt[0]),pe(yt[1]),pe(yt[3]),pe(yt[1]),pe(yt[2]),pe(yt[3])}function se(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function pe(it){o.push(it.x),o.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return CE(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new qd[s.type]().fromJSON(s)),new Zf(n,t.options)}}const AE={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new rt(o,r),new rt(a,l),new rt(c,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],p=t[s*3+2],v=t[o*3],m=t[o*3+1],g=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new rt(r,1-l),new rt(c,1-d),new rt(u,1-p),new rt(v,1-g)]:[new rt(a,1-l),new rt(h,1-d),new rt(f,1-p),new rt(m,1-g)]}};function CE(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class jo extends gl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new jo(t.radius,t.detail)}}class wh extends gl{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wh(t.radius,t.detail)}}class Jf extends Qe{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/s,f=new R,p=new rt;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const g=o+m/n*r;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let v=0;v<s;v++){const m=v*(n+1);for(let g=0;g<n;g++){const x=g+m,_=x,M=x+n+1,C=x+n+2,E=x+1;a.push(_,M,E),a.push(M,C,E)}}this.setIndex(a),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jf(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Di extends Qe{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],d=new R,u=new R,f=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){const x=[],_=g/n;let M=0;g===0&&r===0?M=.5/e:g===n&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){const E=C/e;d.x=-t*Math.cos(s+E*o)*Math.sin(r+_*a),d.y=t*Math.cos(r+_*a),d.z=t*Math.sin(s+E*o)*Math.sin(r+_*a),p.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(E+M,1-_),x.push(c++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<e;x++){const _=h[g][x+1],M=h[g][x],C=h[g+1][x],E=h[g+1][x+1];(g!==0||r>0)&&f.push(_,M,E),(g!==n-1||l<Math.PI)&&f.push(M,C,E)}this.setIndex(f),this.setAttribute("position",new Se(p,3)),this.setAttribute("normal",new Se(v,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Di(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class li extends Qe{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],l=[],c=[],h=new R,d=new R,u=new R;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){const v=p/s*o,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(p/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){const v=(s+1)*f+p-1,m=(s+1)*(f-1)+p-1,g=(s+1)*(f-1)+p,x=(s+1)*f+p;r.push(v,m,x),r.push(m,g,x)}this.setIndex(r),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(l,3)),this.setAttribute("uv",new Se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new li(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class RE extends An{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class PE extends ho{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zf,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class uo extends ho{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zf,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Pf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const em={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class LE{constructor(t,e,n){const s=this;let o=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const IE=new LE;class Qf{constructor(t){this.manager=t!==void 0?t:IE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Qf.DEFAULT_MATERIAL_NAME="__DEFAULT";const gs={};class NE extends Error{constructor(t,e){super(t),this.response=e}}class DE extends Qf{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=em.get(t);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(o),this.manager.itemEnd(t)},0),o;if(gs[t]!==void 0){gs[t].push({onLoad:e,onProgress:n,onError:s});return}gs[t]=[],gs[t].push({onLoad:e,onProgress:n,onError:s});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=gs[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0;let v=0;const m=new ReadableStream({start(g){x();function x(){d.read().then(({done:_,value:M})=>{if(_)g.close();else{v+=M.byteLength;const C=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let E=0,T=h.length;E<T;E++){const I=h[E];I.onProgress&&I.onProgress(C)}g.enqueue(M),x()}},_=>{g.error(_)})}}});return new Response(m)}else throw new NE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{em.add(t,c);const h=gs[t];delete gs[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=gs[t];if(h===void 0)throw this.manager.itemError(t),c;delete gs[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Sh extends rn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class tp extends Sh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Tu=new me,nm=new R,im=new R;class ep{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vf,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;nm.setFromMatrixPosition(t.matrixWorld),e.position.copy(nm),im.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(im),e.updateMatrixWorld(),Tu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class UE extends ep{constructor(){super(new En(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Vr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||s!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=s,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class FE extends Sh{constructor(t,e,n=0,s=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.distance=n,this.angle=s,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new UE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const sm=new me,ga=new R,Au=new R;class OE extends ep{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new Fe(2,1,1,1),new Fe(0,1,1,1),new Fe(3,1,1,1),new Fe(1,1,1,1),new Fe(3,0,1,1),new Fe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),ga.setFromMatrixPosition(t.matrixWorld),n.position.copy(ga),Au.copy(n.position),Au.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Au),n.updateMatrixWorld(),s.makeTranslation(-ga.x,-ga.y,-ga.z),sm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sm)}}class zE extends Sh{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new OE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class BE extends ep{constructor(){super(new Gf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class np extends Sh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new BE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class zv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=om(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=om();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function om(){return performance.now()}class kE{constructor(){this.type="ShapePath",this.color=new ut,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Xd,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,o,r){return this.currentPath.bezierCurveTo(t,e,n,s,o,r),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(g){const x=[];for(let _=0,M=g.length;_<M;_++){const C=g[_],E=new Dc;E.curves=C.curves,x.push(E)}return x}function n(g,x){const _=x.length;let M=!1;for(let C=_-1,E=0;E<_;C=E++){let T=x[C],I=x[E],V=I.x-T.x,y=I.y-T.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(T=x[E],V=-V,I=x[C],y=-y),g.y<T.y||g.y>I.y)continue;if(g.y===T.y){if(g.x===T.x)return!0}else{const S=y*(g.x-T.x)-V*(g.y-T.y);if(S===0)return!0;if(S<0)continue;M=!M}}else{if(g.y!==T.y)continue;if(I.x<=g.x&&g.x<=T.x||T.x<=g.x&&g.x<=I.x)return!0}}return M}const s=Pr.isClockWise,o=this.subPaths;if(o.length===0)return[];let r,a,l;const c=[];if(o.length===1)return a=o[0],l=new Dc,l.curves=a.curves,c.push(l),c;let h=!s(o[0].getPoints());h=t?!h:h;const d=[],u=[];let f=[],p=0,v;u[p]=void 0,f[p]=[];for(let g=0,x=o.length;g<x;g++)a=o[g],v=a.getPoints(),r=s(v),r=t?!r:r,r?(!h&&u[p]&&p++,u[p]={s:new Dc,p:v},u[p].s.curves=a.curves,h&&p++,f[p]=[]):f[p].push({h:a,p:v[0]});if(!u[0])return e(o);if(u.length>1){let g=!1,x=0;for(let _=0,M=u.length;_<M;_++)d[_]=[];for(let _=0,M=u.length;_<M;_++){const C=f[_];for(let E=0;E<C.length;E++){const T=C[E];let I=!0;for(let V=0;V<u.length;V++)n(T.p,u[V].p)&&(_!==V&&x++,I?(I=!1,d[V].push(T)):g=!0);I&&d[_].push(T)}}x>0&&g===!1&&(f=d)}let m;for(let g=0,x=u.length;g<x;g++){l=u[g].s,c.push(l),m=f[g];for(let _=0,M=m.length;_<M;_++)l.holes.push(m[_].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rf);const HE={DEV:!1},VE="TESTER",Oi=220,Hn=Oi/2,Ds=-.35,bh=16,Wr={x:0,y:1.6,z:6,yaw:-Math.PI/2},Qn={x:1,z:9.8,yaw:.6},GE=[12.5,17,16.5],Bv=new URL("assets/",document.baseURI).href,Uc=HE||{},WE={apiKey:Uc.VITE_FIREBASE_API_KEY||"",projectId:Uc.VITE_FIREBASE_PROJECT_ID||"",databaseURL:Uc.VITE_FIREBASE_DATABASE_URL||""},qE="tester-saves",rm=!!Uc.DEV,$=i=>document.getElementById(i),Ge=(i,t,e)=>Math.max(t,Math.min(e,i)),Ue=(i,t,e)=>i+(t-i)*e,ke=(i,t,e)=>{const n=Ge((e-i)/(t-i),0,1);return n*n*(3-2*n)},va=()=>new Promise(i=>requestAnimationFrame(()=>i()));let dr=20260929;const ti=()=>{dr|=0,dr=dr+1831565813|0;let i=Math.imul(dr^dr>>>15,1|dr);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296},ie=(i,t)=>i+ti()*(t-i),Xt=(i,t)=>i+Math.random()*(t-i),kv=i=>i[Math.floor(ti()*i.length)];function lc(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Va(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,o=t-n,r=s*s*(3-2*s),a=o*o*(3-2*o),l=lc(e,n),c=lc(e+1,n),h=lc(e,n+1),d=lc(e+1,n+1);return l+(c-l)*r+(h-l)*a+(l-c-h+d)*r*a}const Hv=(i,t)=>.5*Va(i,t)+.3*Va(i*2.1+5.2,t*2.1+1.3)+.2*Va(i*4.3+9.1,t*4.3+3.7);function XE(i,t,e,n,s,o){const r=i-e,a=t-n,l=s-e,c=o-n,h=Ge((r*l+a*c)/(l*l+c*c),0,1);return Math.hypot(r-l*h,a-c*h)}function $E(i,t,e,n,s,o){const r=Math.abs(i-e)-s,a=Math.abs(t-n)-o;return Math.hypot(Math.max(r,0),Math.max(a,0))+Math.min(Math.max(r,a),0)}function vl(i,t,e){const n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);const s=new Pv(n);return s.colorSpace=_i,s.anisotropy=8,s}async function na(i,t="text"){const e=await fetch(Bv+i);if(!e.ok)throw new Error(`Gagal memuat ${i} (${e.status})`);return t==="json"?e.json():e.text()}class Hi{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new w);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new w);const n=this.elements,s=t.x,o=t.y,r=t.z;return e.x=n[0]*s+n[1]*o+n[2]*r,e.y=n[3]*s+n[4]*o+n[5]*r,e.z=n[6]*s+n[7]*o+n[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Hi);const n=this.elements,s=t.elements,o=e.elements,r=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],f=n[7],p=n[8],v=s[0],m=s[1],g=s[2],x=s[3],_=s[4],M=s[5],C=s[6],E=s[7],T=s[8];return o[0]=r*v+a*x+l*C,o[1]=r*m+a*_+l*E,o[2]=r*g+a*M+l*T,o[3]=c*v+h*x+d*C,o[4]=c*m+h*_+d*E,o[5]=c*g+h*M+d*T,o[6]=u*v+f*x+p*C,o[7]=u*m+f*_+p*E,o[8]=u*g+f*M+p*T,e}scale(t,e){e===void 0&&(e=new Hi);const n=this.elements,s=e.elements;for(let o=0;o!==3;o++)s[3*o+0]=t.x*n[3*o+0],s[3*o+1]=t.y*n[3*o+1],s[3*o+2]=t.z*n[3*o+2];return e}solve(t,e){e===void 0&&(e=new w);const n=3,s=4,o=[];let r,a;for(r=0;r<n*s;r++)o.push(0);for(r=0;r<3;r++)for(a=0;a<3;a++)o[r+s*a]=this.elements[r+3*a];o[3+4*0]=t.x,o[3+4*1]=t.y,o[3+4*2]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(r=c-l,o[r+s*r]===0){for(a=r+1;a<c;a++)if(o[r+s*a]!==0){h=d;do u=d-h,o[u+s*r]+=o[u+s*a];while(--h);break}}if(o[r+s*r]!==0)for(a=r+1;a<c;a++){const f=o[r+s*a]/o[r+s*r];h=d;do u=d-h,o[u+s*a]=u<=r?0:o[u+s*a]-o[u+s*r]*f;while(--h)}}while(--l);if(e.z=o[2*s+3]/o[2*s+2],e.y=(o[1*s+3]-o[1*s+2]*e.z)/o[1*s+1],e.x=(o[0*s+3]-o[0*s+2]*e.z-o[0*s+1]*e.y)/o[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new Hi);const e=3,n=6,s=jE;let o,r;for(o=0;o<3;o++)for(r=0;r<3;r++)s[o+n*r]=this.elements[o+3*r];s[3+6*0]=1,s[3+6*1]=0,s[3+6*2]=0,s[4+6*0]=0,s[4+6*1]=1,s[4+6*2]=0,s[5+6*0]=0,s[5+6*1]=0,s[5+6*2]=1;let a=3;const l=a;let c;const h=n;let d;do{if(o=l-a,s[o+n*o]===0){for(r=o+1;r<l;r++)if(s[o+n*r]!==0){c=h;do d=h-c,s[d+n*o]+=s[d+n*r];while(--c);break}}if(s[o+n*o]!==0)for(r=o+1;r<l;r++){const u=s[o+n*r]/s[o+n*o];c=h;do d=h-c,s[d+n*r]=d<=o?0:s[d+n*r]-s[d+n*o]*u;while(--c)}}while(--a);o=2;do{r=o-1;do{const u=s[o+n*r]/s[o+n*o];c=n;do d=n-c,s[d+n*r]=s[d+n*r]-s[d+n*o]*u;while(--c)}while(r--)}while(--o);o=2;do{const u=1/s[o+n*o];c=n;do d=n-c,s[d+n*o]=s[d+n*o]*u;while(--c)}while(o--);o=2;do{r=2;do{if(d=s[e+r+n*o],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(o,r,d)}while(r--)}while(o--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,s=t.z,o=t.w,r=e+e,a=n+n,l=s+s,c=e*r,h=e*a,d=e*l,u=n*a,f=n*l,p=s*l,v=o*r,m=o*a,g=o*l,x=this.elements;return x[3*0+0]=1-(u+p),x[3*0+1]=h-g,x[3*0+2]=d+m,x[3*1+0]=h+g,x[3*1+1]=1-(c+p),x[3*1+2]=f-v,x[3*2+0]=d-m,x[3*2+1]=f+v,x[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new Hi);const e=this.elements,n=t.elements;let s;return n[0]=e[0],n[4]=e[4],n[8]=e[8],s=e[1],n[1]=e[3],n[3]=s,s=e[2],n[2]=e[6],n[6]=s,s=e[5],n[5]=e[7],n[7]=s,t}}const jE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class w{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new w);const n=t.x,s=t.y,o=t.z,r=this.x,a=this.y,l=this.z;return e.x=a*o-l*s,e.y=l*n-r*o,e.z=r*s-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new w(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new w(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Hi([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,s=Math.sqrt(t*t+e*e+n*n);if(s>0){const o=1/s;this.x*=o,this.y*=o,this.z*=o}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new w);const e=this.x,n=this.y,s=this.z;let o=Math.sqrt(e*e+n*n+s*s);return o>0?(o=1/o,t.x=e*o,t.y=n*o,t.z=s*o):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z;return Math.sqrt((o-e)*(o-e)+(r-n)*(r-n)+(a-s)*(a-s))}distanceSquared(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z;return(o-e)*(o-e)+(r-n)*(r-n)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new w);const n=this.x,s=this.y,o=this.z;return e.x=t*n,e.y=t*s,e.z=t*o,e}vmul(t,e){return e===void 0&&(e=new w),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new w),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new w),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const s=YE,o=1/n;s.set(this.x*o,this.y*o,this.z*o);const r=KE;Math.abs(s.x)<.9?(r.set(1,0,0),s.cross(r,t)):(r.set(0,1,0),s.cross(r,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const s=this.x,o=this.y,r=this.z;n.x=s+(t.x-s)*e,n.y=o+(t.y-o)*e,n.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(am),am.almostEquals(t,e)}clone(){return new w(this.x,this.y,this.z)}}w.ZERO=new w(0,0,0);w.UNIT_X=new w(1,0,0);w.UNIT_Y=new w(0,1,0);w.UNIT_Z=new w(0,0,1);const YE=new w,KE=new w,am=new w;class di{constructor(t){t===void 0&&(t={}),this.lowerBound=new w,this.upperBound=new w,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,s){const o=this.lowerBound,r=this.upperBound,a=n;o.copy(t[0]),a&&a.vmult(o,o),r.copy(o);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,lm),c=lm),c.x>r.x&&(r.x=c.x),c.x<o.x&&(o.x=c.x),c.y>r.y&&(r.y=c.y),c.y<o.y&&(o.y=c.y),c.z>r.z&&(r.z=c.z),c.z<o.z&&(o.z=c.z)}return e&&(e.vadd(o,o),e.vadd(r,r)),s&&(o.x-=s,o.y-=s,o.z-=s,r.x+=s,r.y+=s,r.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new di().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,s=t.lowerBound,o=t.upperBound,r=s.x<=n.x&&n.x<=o.x||e.x<=o.x&&o.x<=n.x,a=s.y<=n.y&&n.y<=o.y||e.y<=o.y&&o.y<=n.y,l=s.z<=n.z&&n.z<=o.z||e.z<=o.z&&o.z<=n.z;return r&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,s=t.lowerBound,o=t.upperBound;return e.x<=s.x&&n.x>=o.x&&e.y<=s.y&&n.y>=o.y&&e.z<=s.z&&n.z>=o.z}getCorners(t,e,n,s,o,r,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),s.set(c.x,h.y,h.z),o.set(h.x,c.y,h.z),r.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=cm,s=n[0],o=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(s,o,r,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=cm,s=n[0],o=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(s,o,r,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,s=1/e.x,o=1/e.y,r=1/e.z,a=(this.lowerBound.x-n.x)*s,l=(this.upperBound.x-n.x)*s,c=(this.lowerBound.y-n.y)*o,h=(this.upperBound.y-n.y)*o,d=(this.lowerBound.z-n.z)*r,u=(this.upperBound.z-n.z)*r,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),p=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(p<0||f>p)}}const lm=new w,cm=[new w,new w,new w,new w,new w,new w,new w,new w];class hm{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:s}=e;if(s>n){const o=s;s=n,n=o}return this.matrix[(n*(n+1)>>1)+s-1]}set(t,e,n){let{index:s}=t,{index:o}=e;if(o>s){const r=o;o=s,s=r}this.matrix[(s*(s+1)>>1)+o-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Vv{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const s=n[t].indexOf(e);return s!==-1&&n[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let s=0,o=n.length;s<o;s++)n[s].call(this,t)}return this}}class Ve{constructor(t,e,n,s){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=n,this.w=s}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new w),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=ZE,s=JE;t.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Ve);const n=this.x,s=this.y,o=this.z,r=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+r*a+s*c-o*l,e.y=s*h+r*l+o*a-n*c,e.z=o*h+r*c+n*l-s*a,e.w=r*h-n*a-s*l-o*c,e}inverse(t){t===void 0&&(t=new Ve);const e=this.x,n=this.y,s=this.z,o=this.w;this.conjugate(t);const r=1/(e*e+n*n+s*s+o*o);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new Ve),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new w);const n=t.x,s=t.y,o=t.z,r=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*o-l*s,d=c*s+l*n-r*o,u=c*o+r*s-a*n,f=-r*n-a*s-l*o;return e.x=h*c+f*-r+d*-l-u*-a,e.y=d*c+f*-a+u*-r-h*-l,e.z=u*c+f*-l+h*-a-d*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,s,o;const r=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=r*a+l*c;if(h>.499&&(n=2*Math.atan2(r,c),s=Math.PI/2,o=0),h<-.499&&(n=-2*Math.atan2(r,c),s=-Math.PI/2,o=0),n===void 0){const d=r*r,u=a*a,f=l*l;n=Math.atan2(2*a*c-2*r*l,1-2*u-2*f),s=Math.asin(2*h),o=Math.atan2(2*r*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=s,t.x=o}setFromEuler(t,e,n,s){s===void 0&&(s="XYZ");const o=Math.cos(t/2),r=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return s==="XYZ"?(this.x=l*r*a+o*c*h,this.y=o*c*a-l*r*h,this.z=o*r*h+l*c*a,this.w=o*r*a-l*c*h):s==="YXZ"?(this.x=l*r*a+o*c*h,this.y=o*c*a-l*r*h,this.z=o*r*h-l*c*a,this.w=o*r*a+l*c*h):s==="ZXY"?(this.x=l*r*a-o*c*h,this.y=o*c*a+l*r*h,this.z=o*r*h+l*c*a,this.w=o*r*a-l*c*h):s==="ZYX"?(this.x=l*r*a-o*c*h,this.y=o*c*a+l*r*h,this.z=o*r*h-l*c*a,this.w=o*r*a+l*c*h):s==="YZX"?(this.x=l*r*a+o*c*h,this.y=o*c*a+l*r*h,this.z=o*r*h-l*c*a,this.w=o*r*a-l*c*h):s==="XZY"&&(this.x=l*r*a-o*c*h,this.y=o*c*a-l*r*h,this.z=o*r*h+l*c*a,this.w=o*r*a+l*c*h),this}clone(){return new Ve(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Ve);const s=this.x,o=this.y,r=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,f,p,v,m;return f=s*l+o*c+r*h+a*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),p=Math.sin(u),v=Math.sin((1-e)*u)/p,m=Math.sin(e*u)/p):(v=1-e,m=e),n.x=v*s+m*l,n.y=v*o+m*c,n.z=v*r+m*h,n.w=v*a+m*d,n}integrate(t,e,n,s){s===void 0&&(s=new Ve);const o=t.x*n.x,r=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return s.x+=u*(o*d+r*h-a*c),s.y+=u*(r*d+a*l-o*h),s.z+=u*(a*d+o*c-r*l),s.w+=u*(-o*l-r*c-a*h),s}}const ZE=new w,JE=new w,QE={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Pt{constructor(t){t===void 0&&(t={}),this.id=Pt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Pt.idCounter=0;Pt.types=QE;class Ee{constructor(t){t===void 0&&(t={}),this.position=new w,this.quaternion=new Ve,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Ee.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Ee.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,s){return s===void 0&&(s=new w),n.vsub(t,s),e.conjugate(um),um.vmult(s,s),s}static pointToWorldFrame(t,e,n,s){return s===void 0&&(s=new w),e.vmult(n,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new w),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,s){return s===void 0&&(s=new w),e.w*=-1,e.vmult(n,s),e.w*=-1,s}}const um=new Ve;class no extends Pt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:s=[],axes:o,boundingSphereRadius:r}=t;super({type:Pt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=o?o.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const s=new w;for(let o=0;o!==t.length;o++){const r=t[o],a=r.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[r[l]].vsub(e[r[c]],s),s.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(s)||n[d].almostEquals(s)){h=!0;break}h||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);const e=this.faceNormals[t]||new w;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],s=this.vertices[n[0]],o=this.vertices[n[1]],r=this.vertices[n[2]];no.computeNormal(s,o,r,e)}static computeNormal(t,e,n,s){const o=new w,r=new w;e.vsub(t,r),n.vsub(e,o),o.cross(r,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,n,s,o,r,a,l,c){const h=new w;let d=-1,u=-Number.MAX_VALUE;for(let p=0;p<n.faces.length;p++){h.copy(n.faceNormals[p]),o.vmult(h,h);const v=h.dot(r);v>u&&(u=v,d=p)}const f=[];for(let p=0;p<n.faces[d].length;p++){const v=n.vertices[n.faces[d][p]],m=new w;m.copy(v),o.vmult(m,m),s.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(r,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,s,o,r,a,l){const c=new w,h=new w,d=new w,u=new w,f=new w,p=new w;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let g=0;g!==m.uniqueAxes.length;g++){n.vmult(m.uniqueAxes[g],c);const x=m.testSepAxis(c,t,e,n,s,o);if(x===!1)return!1;x<v&&(v=x,r.copy(c))}else{const g=a?a.length:m.faces.length;for(let x=0;x<g;x++){const _=a?a[x]:x;c.copy(m.faceNormals[_]),n.vmult(c,c);const M=m.testSepAxis(c,t,e,n,s,o);if(M===!1)return!1;M<v&&(v=M,r.copy(c))}}if(t.uniqueAxes)for(let g=0;g!==t.uniqueAxes.length;g++){o.vmult(t.uniqueAxes[g],h);const x=m.testSepAxis(h,t,e,n,s,o);if(x===!1)return!1;x<v&&(v=x,r.copy(h))}else{const g=l?l.length:t.faces.length;for(let x=0;x<g;x++){const _=l?l[x]:x;h.copy(t.faceNormals[_]),o.vmult(h,h);const M=m.testSepAxis(h,t,e,n,s,o);if(M===!1)return!1;M<v&&(v=M,r.copy(h))}}for(let g=0;g!==m.uniqueEdges.length;g++){n.vmult(m.uniqueEdges[g],u);for(let x=0;x!==t.uniqueEdges.length;x++)if(o.vmult(t.uniqueEdges[x],f),u.cross(f,p),!p.almostZero()){p.normalize();const _=m.testSepAxis(p,t,e,n,s,o);if(_===!1)return!1;_<v&&(v=_,r.copy(p))}}return s.vsub(e,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,n,s,o,r){const a=this;no.project(a,t,n,s,Cu),no.project(e,t,o,r,Ru);const l=Cu[0],c=Cu[1],h=Ru[0],d=Ru[1];if(l<d||h<c)return!1;const u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(t,e){const n=new w,s=new w;this.computeLocalAABB(s,n);const o=n.x-s.x,r=n.y-s.y,a=n.z-s.z;e.x=1/12*t*(2*r*2*r+2*a*2*a),e.y=1/12*t*(2*o*2*o+2*a*2*a),e.z=1/12*t*(2*r*2*r+2*o*2*o)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],s=this.vertices[e[0]];return-n.dot(s)}clipFaceAgainstHull(t,e,n,s,o,r,a){const l=new w,c=new w,h=new w,d=new w,u=new w,f=new w,p=new w,v=new w,m=this,g=[],x=s,_=g;let M=-1,C=Number.MAX_VALUE;for(let y=0;y<m.faces.length;y++){l.copy(m.faceNormals[y]),n.vmult(l,l);const S=l.dot(t);S<C&&(C=S,M=y)}if(M<0)return;const E=m.faces[M];E.connectedFaces=[];for(let y=0;y<m.faces.length;y++)for(let S=0;S<m.faces[y].length;S++)E.indexOf(m.faces[y][S])!==-1&&y!==M&&E.connectedFaces.indexOf(y)===-1&&E.connectedFaces.push(y);const T=E.length;for(let y=0;y<T;y++){const S=m.vertices[E[y]],B=m.vertices[E[(y+1)%T]];S.vsub(B,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[M]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(S),n.vmult(f,f),e.vadd(f,f);const D=E.connectedFaces[y];p.copy(this.faceNormals[D]);const F=this.getPlaneConstantOfFace(D);v.copy(p),n.vmult(v,v);const k=F-v.dot(e);for(this.clipFaceAgainstPlane(x,_,v,k);x.length;)x.shift();for(;_.length;)x.push(_.shift())}p.copy(this.faceNormals[M]);const I=this.getPlaneConstantOfFace(M);v.copy(p),n.vmult(v,v);const V=I-v.dot(e);for(let y=0;y<x.length;y++){let S=v.dot(x[y])+V;if(S<=o&&(console.log(`clamped: depth=${S} to minDist=${o}`),S=o),S<=r){const B=x[y];if(S<=1e-6){const D={point:B,normal:v,depth:S};a.push(D)}}}}clipFaceAgainstPlane(t,e,n,s){let o,r;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];o=n.dot(l)+s;for(let h=0;h<a;h++){if(c=t[h],r=n.dot(c)+s,o<0)if(r<0){const d=new w;d.copy(c),e.push(d)}else{const d=new w;l.lerp(c,o/(o-r),d),e.push(d)}else if(r<0){const d=new w;l.lerp(c,o/(o-r),d),e.push(d),e.push(c)}l=c,o=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new w);const n=this.vertices,s=this.worldVertices;for(let o=0;o!==this.vertices.length;o++)e.vmult(n[o],s[o]),t.vadd(s[o],s[o]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){const o=n[s];o.x<t.x?t.x=o.x:o.x>e.x&&(e.x=o.x),o.y<t.y?t.y=o.y:o.y>e.y&&(e.y=o.y),o.z<t.z?t.z=o.z:o.z>e.z&&(e.z=o.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new w);const n=this.faceNormals,s=this.worldFaceNormals;for(let o=0;o!==e;o++)t.vmult(n[o],s[o]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const s=e[n].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,s){const o=this.vertices;let r,a,l,c,h,d,u=new w;for(let f=0;f<o.length;f++){u.copy(o[f]),e.vmult(u,u),t.vadd(u,u);const p=u;(r===void 0||p.x<r)&&(r=p.x),(c===void 0||p.x>c)&&(c=p.x),(a===void 0||p.y<a)&&(a=p.y),(h===void 0||p.y>h)&&(h=p.y),(l===void 0||p.z<l)&&(l=p.z),(d===void 0||p.z>d)&&(d=p.z)}n.set(r,a,l),s.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new w);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,s=this.vertices;if(e){for(let o=0;o<n;o++){const r=s[o];e.vmult(r,r)}for(let o=0;o<this.faceNormals.length;o++){const r=this.faceNormals[o];e.vmult(r,r)}}if(t)for(let o=0;o<n;o++){const r=s[o];r.vadd(t,r)}}pointIsInside(t){const e=this.vertices,n=this.faces,s=this.faceNormals,o=new w;this.getAveragePointLocal(o);for(let r=0;r<this.faces.length;r++){let a=s[r];const l=e[n[r][0]],c=new w;t.vsub(l,c);const h=a.dot(c),d=new w;o.vsub(l,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,s,o){const r=t.vertices.length,a=tT;let l=0,c=0;const h=eT,d=t.vertices;h.setZero(),Ee.vectorToLocalFrame(n,s,e,a),Ee.pointToLocalFrame(n,s,h,h);const u=h.dot(a);c=l=d[0].dot(a);for(let f=1;f<r;f++){const p=d[f].dot(a);p>l&&(l=p),p<c&&(c=p)}if(c-=u,l-=u,c>l){const f=c;c=l,l=f}o[0]=l,o[1]=c}}const Cu=[],Ru=[];new w;const tT=new w,eT=new w;class mn extends Pt{constructor(t){super({type:Pt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,s=w,o=[new s(-t,-e,-n),new s(t,-e,-n),new s(t,e,-n),new s(-t,e,-n),new s(-t,-e,n),new s(t,-e,n),new s(t,e,n),new s(-t,e,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new no({vertices:o,faces:r,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new w),mn.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const s=t;n.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){const n=t,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),e!==void 0)for(let o=0;o!==n.length;o++)e.vmult(n[o],n[o]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const s=this.halfExtents,o=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let r=0;r<o.length;r++)Ws.set(o[r][0],o[r][1],o[r][2]),e.vmult(Ws,Ws),t.vadd(Ws,Ws),n(Ws.x,Ws.y,Ws.z)}calculateWorldAABB(t,e,n,s){const o=this.halfExtents;qi[0].set(o.x,o.y,o.z),qi[1].set(-o.x,o.y,o.z),qi[2].set(-o.x,-o.y,o.z),qi[3].set(-o.x,-o.y,-o.z),qi[4].set(o.x,-o.y,-o.z),qi[5].set(o.x,o.y,-o.z),qi[6].set(-o.x,o.y,-o.z),qi[7].set(o.x,-o.y,o.z);const r=qi[0];e.vmult(r,r),t.vadd(r,r),s.copy(r),n.copy(r);for(let a=1;a<8;a++){const l=qi[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>s.x&&(s.x=c),h>s.y&&(s.y=h),d>s.z&&(s.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const Ws=new w,qi=[new w,new w,new w,new w,new w,new w,new w,new w],ip={DYNAMIC:1,STATIC:2,KINEMATIC:4},sp={AWAKE:0,SLEEPY:1,SLEEPING:2};class St extends Vv{constructor(t){t===void 0&&(t={}),super(),this.id=St.idCounter++,this.index=-1,this.world=null,this.vlambda=new w,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new w,this.previousPosition=new w,this.interpolatedPosition=new w,this.initPosition=new w,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new w,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new w,this.force=new w;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?St.STATIC:St.DYNAMIC,typeof t.type==typeof St.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=St.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new w,this.quaternion=new Ve,this.initQuaternion=new Ve,this.previousQuaternion=new Ve,this.interpolatedQuaternion=new Ve,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new w,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new w,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new w,this.invInertia=new w,this.invInertiaWorld=new Hi,this.invMassSolve=0,this.invInertiaSolve=new w,this.invInertiaWorldSolve=new Hi,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new w(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new w(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new di,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new w,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=St.AWAKE,this.wakeUpAfterNarrowphase=!1,t===St.SLEEPING&&this.dispatchEvent(St.wakeupEvent)}sleep(){this.sleepState=St.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===St.AWAKE&&n<s?(this.sleepState=St.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(St.sleepyEvent)):e===St.SLEEPY&&n>s?this.wakeUp():e===St.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(St.sleepEvent))}}updateSolveMassProperties(){this.sleepState===St.SLEEPING||this.type===St.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new w),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new w),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e}addShape(t,e,n){const s=new w,o=new Ve;return e&&s.copy(e),n&&o.copy(n),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(o),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let s=0;for(let o=0;o!==n;o++){const r=t[o];r.updateBoundingSphereRadius();const a=e[o].length(),l=r.boundingSphereRadius;a+l>s&&(s=a+l)}this.boundingRadius=s}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,s=t.length,o=nT,r=iT,a=this.quaternion,l=this.aabb,c=sT;for(let h=0;h!==s;h++){const d=t[h];a.vmult(e[h],o),o.vadd(this.position,o),a.mult(n[h],r),d.calculateWorldAABB(o,r,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=oT,s=rT;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(e,n),n.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new w),this.type!==St.DYNAMIC)return;this.sleepState===St.SLEEPING&&this.wakeUp();const n=aT;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new w),this.type!==St.DYNAMIC)return;const n=lT,s=cT;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyForce(n,s)}applyTorque(t){this.type===St.DYNAMIC&&(this.sleepState===St.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new w),this.type!==St.DYNAMIC)return;this.sleepState===St.SLEEPING&&this.wakeUp();const n=e,s=hT;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);const o=uT;n.cross(t,o),this.invInertiaWorld.vmult(o,o),this.angularVelocity.vadd(o,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new w),this.type!==St.DYNAMIC)return;const n=dT,s=fT;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyImpulse(n,s)}updateMassProperties(){const t=pT;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),mn.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new w;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===St.DYNAMIC||this.type===St.KINEMATIC)||this.sleepState===St.SLEEPING)return;const s=this.velocity,o=this.angularVelocity,r=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;s.x+=a.x*f*u.x,s.y+=a.y*f*u.y,s.z+=a.z*f*u.z;const p=d.elements,v=this.angularFactor,m=l.x*v.x,g=l.y*v.y,x=l.z*v.z;o.x+=t*(p[0]*m+p[1]*g+p[2]*x),o.y+=t*(p[3]*m+p[4]*g+p[5]*x),o.z+=t*(p[6]*m+p[7]*g+p[8]*x),r.x+=s.x*t,r.y+=s.y*t,r.z+=s.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}St.idCounter=0;St.COLLIDE_EVENT_NAME="collide";St.DYNAMIC=ip.DYNAMIC;St.STATIC=ip.STATIC;St.KINEMATIC=ip.KINEMATIC;St.AWAKE=sp.AWAKE;St.SLEEPY=sp.SLEEPY;St.SLEEPING=sp.SLEEPING;St.wakeupEvent={type:"wakeup"};St.sleepyEvent={type:"sleepy"};St.sleepEvent={type:"sleep"};const nT=new w,iT=new Ve,sT=new di,oT=new Hi,rT=new Hi;new Hi;const aT=new w,lT=new w,cT=new w,hT=new w,uT=new w,dT=new w,fT=new w,pT=new w;class Gv{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&St.STATIC||t.sleepState===St.SLEEPING)&&(e.type&St.STATIC||e.sleepState===St.SLEEPING))}intersectionTest(t,e,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,s):this.doBoundingSphereBroadphase(t,e,n,s)}doBoundingSphereBroadphase(t,e,n,s){const o=mT;e.position.vsub(t.position,o);const r=(t.boundingRadius+e.boundingRadius)**2;o.lengthSquared()<r&&(n.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,n,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),s.push(e))}makePairsUnique(t,e){const n=gT,s=vT,o=xT,r=t.length;for(let a=0;a!==r;a++)s[a]=t[a],o[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==r;a++){const l=s[a].id,c=o[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(s[c]),e.push(o[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new w;t.position.vsub(e.position,n);const s=t.shapes[0],o=e.shapes[0];return Math.pow(s.boundingSphereRadius+o.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const mT=new w;new w;new Ve;new w;const gT={keys:[]},vT=[],xT=[];new w;new w;new w;class _T extends Gv{constructor(){super()}collisionPairs(t,e,n){const s=t.bodies,o=s.length;let r,a;for(let l=0;l!==o;l++)for(let c=0;c!==l;c++)r=s[l],a=s[c],this.needBroadphaseCollision(r,a)&&this.intersectionTest(r,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let s=0;s<t.bodies.length;s++){const o=t.bodies[s];o.aabbNeedsUpdate&&o.updateAABB(),o.aabb.overlaps(e)&&n.push(o)}return n}}class Bo{constructor(){this.rayFromWorld=new w,this.rayToWorld=new w,this.hitNormalWorld=new w,this.hitPointWorld=new w,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,s,o,r,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=o,this.body=r,this.distance=a}}let Wv,qv,Xv,$v,jv,Yv,Kv;const op={CLOSEST:1,ANY:2,ALL:4};Wv=Pt.types.SPHERE;qv=Pt.types.PLANE;Xv=Pt.types.BOX;$v=Pt.types.CYLINDER;jv=Pt.types.CONVEXPOLYHEDRON;Yv=Pt.types.HEIGHTFIELD;Kv=Pt.types.TRIMESH;class cn{get[Wv](){return this._intersectSphere}get[qv](){return this._intersectPlane}get[Xv](){return this._intersectBox}get[$v](){return this._intersectConvex}get[jv](){return this._intersectConvex}get[Yv](){return this._intersectHeightfield}get[Kv](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new w),e===void 0&&(e=new w),this.from=t.clone(),this.to=e.clone(),this.direction=new w,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=cn.ANY,this.result=new Bo,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||cn.ANY,this.result=e.result||new Bo,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(dm),Pu.length=0,t.broadphase.aabbQuery(t,dm,Pu),this.intersectBodies(Pu),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const s=yT,o=MT;for(let r=0,a=t.shapes.length;r<a;r++){const l=t.shapes[r];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],o),t.quaternion.vmult(t.shapeOffsets[r],s),s.vadd(t.position,s),this.intersectShape(l,o,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,s=t.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,s){const o=this.from;if(UT(o,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,s,t)}_intersectBox(t,e,n,s,o){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,s,o)}_intersectPlane(t,e,n,s,o){const r=this.from,a=this.to,l=this.direction,c=new w(0,0,1);e.vmult(c,c);const h=new w;r.vsub(n,h);const d=h.dot(c);a.vsub(n,h);const u=h.dot(c);if(d*u>0||r.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const p=new w,v=new w,m=new w;r.vsub(n,p);const g=-c.dot(p)/f;l.scale(g,v),r.vadd(v,m),this.reportIntersection(c,m,o,s,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,s=this.to,o=this.from;e.x=Math.min(s.x,o.x),e.y=Math.min(s.y,o.y),e.z=Math.min(s.z,o.z),n.x=Math.max(s.x,o.x),n.y=Math.max(s.y,o.y),n.z=Math.max(s.z,o.z)}_intersectHeightfield(t,e,n,s,o){t.data,t.elementSize;const r=wT;r.from.copy(this.from),r.to.copy(this.to),Ee.pointToLocalFrame(n,e,r.from,r.from),Ee.pointToLocalFrame(n,e,r.to,r.to),r.updateDirection();const a=ST;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new di;r.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<h;f++)for(let p=c;p<d;p++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,p,u),!!u.overlapsRay(r)){if(t.getConvexTrianglePillar(f,p,!1),Ee.pointToWorldFrame(n,e,t.pillarOffset,cc),this._intersectConvex(t.pillarConvex,e,cc,s,o,fm),this.result.shouldStop)return;t.getConvexTrianglePillar(f,p,!0),Ee.pointToWorldFrame(n,e,t.pillarOffset,cc),this._intersectConvex(t.pillarConvex,e,cc,s,o,fm)}}}_intersectSphere(t,e,n,s,o){const r=this.from,a=this.to,l=t.radius,c=(a.x-r.x)**2+(a.y-r.y)**2+(a.z-r.z)**2,h=2*((a.x-r.x)*(r.x-n.x)+(a.y-r.y)*(r.y-n.y)+(a.z-r.z)*(r.z-n.z)),d=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-l**2,u=h**2-4*c*d,f=bT,p=ET;if(!(u<0))if(u===0)r.lerp(a,u,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,o,s,-1);else{const v=(-h-Math.sqrt(u))/(2*c),m=(-h+Math.sqrt(u))/(2*c);if(v>=0&&v<=1&&(r.lerp(a,v,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,o,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(r.lerp(a,m,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,o,s,-1))}}_intersectConvex(t,e,n,s,o,r){const a=TT,l=pm,c=r&&r.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,p=this.from,v=this.to,m=p.distanceTo(v),g=c?c.length:h.length,x=this.result;for(let _=0;!x.shouldStop&&_<g;_++){const M=c?c[_]:_,C=h[M],E=u[M],T=e,I=n;l.copy(d[C[0]]),T.vmult(l,l),l.vadd(I,l),l.vsub(p,l),T.vmult(E,a);const V=f.dot(a);if(Math.abs(V)<this.precision)continue;const y=a.dot(l)/V;if(!(y<0)){f.scale(y,Xn),Xn.vadd(p,Xn),Li.copy(d[C[0]]),T.vmult(Li,Li),I.vadd(Li,Li);for(let S=1;!x.shouldStop&&S<C.length-1;S++){Xi.copy(d[C[S]]),$i.copy(d[C[S+1]]),T.vmult(Xi,Xi),T.vmult($i,$i),I.vadd(Xi,Xi),I.vadd($i,$i);const B=Xn.distanceTo(p);!(cn.pointInTriangle(Xn,Li,Xi,$i)||cn.pointInTriangle(Xn,Xi,Li,$i))||B>m||this.reportIntersection(a,Xn,o,s,M)}}}}_intersectTrimesh(t,e,n,s,o,r){const a=AT,l=NT,c=DT,h=pm,d=CT,u=RT,f=PT,p=IT,v=LT,m=t.indices;t.vertices;const g=this.from,x=this.to,_=this.direction;c.position.copy(n),c.quaternion.copy(e),Ee.vectorToLocalFrame(n,e,_,d),Ee.pointToLocalFrame(n,e,g,u),Ee.pointToLocalFrame(n,e,x,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();const M=u.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let C=0,E=l.length;!this.result.shouldStop&&C!==E;C++){const T=l[C];t.getNormal(T,a),t.getVertex(m[T*3],Li),Li.vsub(u,h);const I=d.dot(a),V=a.dot(h)/I;if(V<0)continue;d.scale(V,Xn),Xn.vadd(u,Xn),t.getVertex(m[T*3+1],Xi),t.getVertex(m[T*3+2],$i);const y=Xn.distanceSquared(u);!(cn.pointInTriangle(Xn,Xi,Li,$i)||cn.pointInTriangle(Xn,Li,Xi,$i))||y>M||(Ee.vectorToWorldFrame(e,a,v),Ee.pointToWorldFrame(n,e,Xn,p),this.reportIntersection(v,p,o,s,T))}l.length=0}reportIntersection(t,e,n,s,o){const r=this.from,a=this.to,l=r.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof o<"u"?o:-1,this.mode){case cn.ALL:this.hasHit=!0,c.set(r,a,t,e,n,s,l),c.hasHit=!0,this.callback(c);break;case cn.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,a,t,e,n,s,l));break;case cn.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,a,t,e,n,s,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,s){s.vsub(e,Po),n.vsub(e,xa),t.vsub(e,Lu);const o=Po.dot(Po),r=Po.dot(xa),a=Po.dot(Lu),l=xa.dot(xa),c=xa.dot(Lu);let h,d;return(h=l*a-r*c)>=0&&(d=o*c-r*a)>=0&&h+d<o*l-r*r}}cn.CLOSEST=op.CLOSEST;cn.ANY=op.ANY;cn.ALL=op.ALL;const dm=new di,Pu=[],xa=new w,Lu=new w,yT=new w,MT=new Ve,Xn=new w,Li=new w,Xi=new w,$i=new w;new w;new Bo;const fm={faceList:[0]},cc=new w,wT=new cn,ST=[],bT=new w,ET=new w,TT=new w;new w;new w;const pm=new w,AT=new w,CT=new w,RT=new w,PT=new w,LT=new w,IT=new w;new di;const NT=[],DT=new Ee,Po=new w,hc=new w;function UT(i,t,e){e.vsub(i,Po);const n=Po.dot(t);return t.scale(n,hc),hc.vadd(i,hc),e.distanceTo(hc)}class wr extends Gv{static checkBounds(t,e,n){let s,o;n===0?(s=t.position.x,o=e.position.x):n===1?(s=t.position.y,o=e.position.y):n===2&&(s=t.position.z,o=e.position.z);const r=t.boundingRadius,a=e.boundingRadius,l=s+r;return o-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const s=t[e];let o;for(o=e-1;o>=0&&!(t[o].aabb.lowerBound.x<=s.aabb.lowerBound.x);o--)t[o+1]=t[o];t[o+1]=s}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const s=t[e];let o;for(o=e-1;o>=0&&!(t[o].aabb.lowerBound.y<=s.aabb.lowerBound.y);o--)t[o+1]=t[o];t[o+1]=s}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const s=t[e];let o;for(o=e-1;o>=0&&!(t[o].aabb.lowerBound.z<=s.aabb.lowerBound.z);o--)t[o+1]=t[o];t[o+1]=s}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const s=e.indexOf(n.body);s!==-1&&e.splice(s,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const s=this.axisList,o=s.length,r=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==o;a++){const c=s[a];for(l=a+1;l<o;l++){const h=s[l];if(this.needBroadphaseCollision(c,h)){if(!wr.checkBounds(c,h,r))break;this.intersectionTest(c,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let s=0;s!==n;s++){const o=t[s];o.aabbNeedsUpdate&&o.updateAABB()}e===0?wr.insertionSortX(t):e===1?wr.insertionSortY(t):e===2&&wr.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,s=0,o=0,r=0;const a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){const p=a[f],v=p.position.x;t+=v,e+=v*v;const m=p.position.y;n+=m,s+=m*m;const g=p.position.z;o+=g,r+=g*g}const h=e-t*t*c,d=s-n*n*c,u=r-o*o*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const s=this.axisIndex;let o="x";s===1&&(o="y"),s===2&&(o="z");const r=this.axisList;e.lowerBound[o],e.upperBound[o];for(let a=0;a<r.length;a++){const l=r[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class rp{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class mm{constructor(){this.spatial=new w,this.rotational=new w}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class xl{constructor(t,e,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=xl.idCounter++,this.minForce=n,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new mm,this.jacobianElementB=new mm,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const s=e,o=t,r=n;this.a=4/(r*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(r*r*o*(1+4*s))}computeB(t,e,n){const s=this.computeGW(),o=this.computeGq(),r=this.computeGiMf();return-o*t-s*e-r*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,o=n.position,r=s.position;return t.spatial.dot(o)+e.spatial.dot(r)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,o=n.velocity,r=s.velocity,a=n.angularVelocity,l=s.angularVelocity;return t.multiplyVectors(o,a)+e.multiplyVectors(r,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,o=n.vlambda,r=s.vlambda,a=n.wlambda,l=s.wlambda;return t.multiplyVectors(o,a)+e.multiplyVectors(r,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,o=n.force,r=n.torque,a=s.force,l=s.torque,c=n.invMassSolve,h=s.invMassSolve;return o.scale(c,gm),a.scale(h,vm),n.invInertiaWorldSolve.vmult(r,xm),s.invInertiaWorldSolve.vmult(l,_m),t.multiplyVectors(gm,xm)+e.multiplyVectors(vm,_m)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,o=n.invMassSolve,r=s.invMassSolve,a=n.invInertiaWorldSolve,l=s.invInertiaWorldSolve;let c=o+r;return a.vmult(t.rotational,uc),c+=uc.dot(t.rotational),l.vmult(e.rotational,uc),c+=uc.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,o=this.bj,r=FT;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),o.vlambda.addScaledVector(o.invMassSolve*t,n.spatial,o.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda),o.invInertiaWorldSolve.vmult(n.rotational,r),o.wlambda.addScaledVector(t,r,o.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}xl.idCounter=0;const gm=new w,vm=new w,xm=new w,_m=new w,uc=new w,FT=new w;class OT extends xl{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new w,this.rj=new w,this.ni=new w}computeB(t){const e=this.a,n=this.b,s=this.bi,o=this.bj,r=this.ri,a=this.rj,l=zT,c=BT,h=s.velocity,d=s.angularVelocity;s.force,s.torque;const u=o.velocity,f=o.angularVelocity;o.force,o.torque;const p=kT,v=this.jacobianElementA,m=this.jacobianElementB,g=this.ni;r.cross(g,l),a.cross(g,c),g.negate(v.spatial),l.negate(v.rotational),m.spatial.copy(g),m.rotational.copy(c),p.copy(o.position),p.vadd(a,p),p.vsub(s.position,p),p.vsub(r,p);const x=g.dot(p),_=this.restitution+1,M=_*u.dot(g)-_*h.dot(g)+f.dot(c)-d.dot(l),C=this.computeGiMf();return-x*e-M*n-t*C}getImpactVelocityAlongNormal(){const t=HT,e=VT,n=GT,s=WT,o=qT;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,o),this.ni.dot(o)}}const zT=new w,BT=new w,kT=new w,HT=new w,VT=new w,GT=new w,WT=new w,qT=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class ym extends xl{constructor(t,e,n){super(t,e,-n,n),this.ri=new w,this.rj=new w,this.t=new w}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,s=this.rj,o=XT,r=$T,a=this.t;n.cross(a,o),s.cross(a,r);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),o.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(r);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const XT=new w,$T=new w;class _l{constructor(t,e,n){n=rp.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=_l.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}_l.idCounter=0;class yl{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=yl.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}yl.idCounter=0;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class jT{constructor(t){t===void 0&&(t={}),t=rp.defaults(t,{chassisConnectionPointLocal:new w,chassisConnectionPointWorld:new w,directionLocal:new w,directionWorld:new w,axleLocal:new w,axleWorld:new w,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:10.5,forwardAcceleration:1,sideAcceleration:1,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,slipInfo:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=t.maxSuspensionTravel,this.customSlidingRotationalSpeed=t.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=t.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=t.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=t.chassisConnectionPointWorld.clone(),this.directionLocal=t.directionLocal.clone(),this.directionWorld=t.directionWorld.clone(),this.axleLocal=t.axleLocal.clone(),this.axleWorld=t.axleWorld.clone(),this.suspensionRestLength=t.suspensionRestLength,this.suspensionMaxLength=t.suspensionMaxLength,this.radius=t.radius,this.suspensionStiffness=t.suspensionStiffness,this.dampingCompression=t.dampingCompression,this.dampingRelaxation=t.dampingRelaxation,this.frictionSlip=t.frictionSlip,this.forwardAcceleration=t.forwardAcceleration,this.sideAcceleration=t.sideAcceleration,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=t.rollInfluence,this.maxSuspensionForce=t.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=t.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.slipInfo=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new Bo,this.worldTransform=new Ee,this.isInContact=!1}updateWheel(t){const e=this.raycastResult;if(this.isInContact){const n=e.hitNormalWorld.dot(e.directionWorld);e.hitPointWorld.vsub(t.position,wm),t.getVelocityAtWorldPoint(wm,Mm);const s=e.hitNormalWorld.dot(Mm);if(n>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{const o=-1/n;this.suspensionRelativeVelocity=s*o,this.clippedInvContactDotSuspension=o}}else e.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,e.directionWorld.scale(-1,e.hitNormalWorld),this.clippedInvContactDotSuspension=1}}const Mm=new w,wm=new w;class YT{constructor(t){this.chassisBody=t.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof t.indexRightAxis<"u"?t.indexRightAxis:2,this.indexForwardAxis=typeof t.indexForwardAxis<"u"?t.indexForwardAxis:0,this.indexUpAxis=typeof t.indexUpAxis<"u"?t.indexUpAxis:1,this.constraints=[],this.preStepCallback=()=>{},this.currentVehicleSpeedKmHour=0,this.numWheelsOnGround=0}addWheel(t){t===void 0&&(t={});const e=new jT(t),n=this.wheelInfos.length;return this.wheelInfos.push(e),n}setSteeringValue(t,e){const n=this.wheelInfos[e];n.steering=t}applyEngineForce(t,e){this.wheelInfos[e].engineForce=t}setBrake(t,e){this.wheelInfos[e].brake=t}addToWorld(t){t.addBody(this.chassisBody);const e=this;this.preStepCallback=()=>{e.updateVehicle(t.dt)},t.addEventListener("preStep",this.preStepCallback),this.world=t}getVehicleAxisWorld(t,e){e.set(t===0?1:0,t===1?1:0,t===2?1:0),this.chassisBody.vectorToWorldFrame(e,e)}updateVehicle(t){const e=this.wheelInfos,n=e.length,s=this.chassisBody;for(let d=0;d<n;d++)this.updateWheelTransform(d);this.currentVehicleSpeedKmHour=3.6*s.velocity.length();const o=new w;this.getVehicleAxisWorld(this.indexForwardAxis,o),o.dot(s.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(let d=0;d<n;d++)this.castRay(e[d]);this.updateSuspension(t);const r=new w,a=new w;for(let d=0;d<n;d++){const u=e[d];let f=u.suspensionForce;f>u.maxSuspensionForce&&(f=u.maxSuspensionForce),u.raycastResult.hitNormalWorld.scale(f*t,r),u.raycastResult.hitPointWorld.vsub(s.position,a),s.applyImpulse(r,a)}this.updateFriction(t);const l=new w,c=new w,h=new w;for(let d=0;d<n;d++){const u=e[d];s.getVelocityAtWorldPoint(u.chassisConnectionPointWorld,h);let f=1;switch(this.indexUpAxis){case 1:f=-1;break}if(u.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,c);const p=c.dot(u.raycastResult.hitNormalWorld);u.raycastResult.hitNormalWorld.scale(p,l),c.vsub(l,c);const v=c.dot(h);u.deltaRotation=f*v*t/u.radius}(u.sliding||!u.isInContact)&&u.engineForce!==0&&u.useCustomSlidingRotationalSpeed&&(u.deltaRotation=(u.engineForce>0?1:-1)*u.customSlidingRotationalSpeed*t),Math.abs(u.brake)>Math.abs(u.engineForce)&&(u.deltaRotation=0),u.rotation+=u.deltaRotation,u.deltaRotation*=.99}}updateSuspension(t){const n=this.chassisBody.mass,s=this.wheelInfos,o=s.length;for(let r=0;r<o;r++){const a=s[r];if(a.isInContact){let l;const c=a.suspensionRestLength,h=a.suspensionLength,d=c-h;l=a.suspensionStiffness*d*a.clippedInvContactDotSuspension;const u=a.suspensionRelativeVelocity;let f;u<0?f=a.dampingCompression:f=a.dampingRelaxation,l-=f*u,a.suspensionForce=l*n,a.suspensionForce<0&&(a.suspensionForce=0)}else a.suspensionForce=0}}removeFromWorld(t){this.constraints,t.removeBody(this.chassisBody),t.removeEventListener("preStep",this.preStepCallback),this.world=null}castRay(t){const e=QT,n=t2;this.updateWheelTransformWorld(t);const s=this.chassisBody;let o=-1;const r=t.suspensionRestLength+t.radius;t.directionWorld.scale(r,e);const a=t.chassisConnectionPointWorld;a.vadd(e,n);const l=t.raycastResult;l.reset();const c=s.collisionResponse;s.collisionResponse=!1,this.world.rayTest(a,n,l),s.collisionResponse=c;const h=l.body;if(t.raycastResult.groundObject=0,h){o=l.distance,t.raycastResult.hitNormalWorld=l.hitNormalWorld,t.isInContact=!0;const d=l.distance;t.suspensionLength=d-t.radius;const u=t.suspensionRestLength-t.maxSuspensionTravel,f=t.suspensionRestLength+t.maxSuspensionTravel;t.suspensionLength<u&&(t.suspensionLength=u),t.suspensionLength>f&&(t.suspensionLength=f,t.raycastResult.reset());const p=t.raycastResult.hitNormalWorld.dot(t.directionWorld),v=new w;s.getVelocityAtWorldPoint(t.raycastResult.hitPointWorld,v);const m=t.raycastResult.hitNormalWorld.dot(v);if(p>=-.1)t.suspensionRelativeVelocity=0,t.clippedInvContactDotSuspension=1/.1;else{const g=-1/p;t.suspensionRelativeVelocity=m*g,t.clippedInvContactDotSuspension=g}}else t.suspensionLength=t.suspensionRestLength+0*t.maxSuspensionTravel,t.suspensionRelativeVelocity=0,t.directionWorld.scale(-1,t.raycastResult.hitNormalWorld),t.clippedInvContactDotSuspension=1;return o}updateWheelTransformWorld(t){t.isInContact=!1;const e=this.chassisBody;e.pointToWorldFrame(t.chassisConnectionPointLocal,t.chassisConnectionPointWorld),e.vectorToWorldFrame(t.directionLocal,t.directionWorld),e.vectorToWorldFrame(t.axleLocal,t.axleWorld)}updateWheelTransform(t){const e=KT,n=ZT,s=JT,o=this.wheelInfos[t];this.updateWheelTransformWorld(o),o.directionLocal.scale(-1,e),n.copy(o.axleLocal),e.cross(n,s),s.normalize(),n.normalize();const r=o.steering,a=new Ve;a.setFromAxisAngle(e,r);const l=new Ve;l.setFromAxisAngle(n,o.rotation);const c=o.worldTransform.quaternion;this.chassisBody.quaternion.mult(a,c),c.mult(l,c),c.normalize();const h=o.worldTransform.position;h.copy(o.directionWorld),h.scale(o.suspensionLength,h),h.vadd(o.chassisConnectionPointWorld,h)}getWheelTransformWorld(t){return this.wheelInfos[t].worldTransform}updateFriction(t){const e=n2,n=this.wheelInfos,s=n.length,o=this.chassisBody,r=s2,a=i2;this.numWheelsOnGround=0;for(let h=0;h<s;h++){const d=n[h];d.raycastResult.body&&this.numWheelsOnGround++,d.sideImpulse=0,d.forwardImpulse=0,r[h]||(r[h]=new w),a[h]||(a[h]=new w)}for(let h=0;h<s;h++){const d=n[h],u=d.raycastResult.body;if(u){const f=a[h];this.getWheelTransformWorld(h).vectorToWorldFrame(e2[this.indexRightAxis],f);const v=d.raycastResult.hitNormalWorld,m=f.dot(v);v.scale(m,e),f.vsub(e,f),f.normalize(),v.cross(f,r[h]),r[h].normalize(),d.sideImpulse=v2(o,d.raycastResult.hitPointWorld,u,d.raycastResult.hitPointWorld,f),d.sideImpulse*=o2}}const l=1,c=.5;this.sliding=!1;for(let h=0;h<s;h++){const d=n[h],u=d.raycastResult.body;let f=0;if(d.slipInfo=1,u){const v=d.brake?d.brake:0;f=c2(o,u,d.raycastResult.hitPointWorld,r[h],v),f+=d.engineForce*t;const m=v/f;d.slipInfo*=m}if(d.forwardImpulse=0,d.skidInfo=1,u){d.skidInfo=1;const p=d.suspensionForce*t*d.frictionSlip,m=p*p;d.forwardImpulse=f;const g=d.forwardImpulse*c/d.forwardAcceleration,x=d.sideImpulse*l/d.sideAcceleration,_=g*g+x*x;if(d.sliding=!1,_>m){this.sliding=!0,d.sliding=!0;const M=p/Math.sqrt(_);d.skidInfo*=M}}}if(this.sliding)for(let h=0;h<s;h++){const d=n[h];d.sideImpulse!==0&&d.skidInfo<1&&(d.forwardImpulse*=d.skidInfo,d.sideImpulse*=d.skidInfo)}for(let h=0;h<s;h++){const d=n[h],u=new w;if(d.raycastResult.hitPointWorld.vsub(o.position,u),d.forwardImpulse!==0){const f=new w;r[h].scale(d.forwardImpulse,f),o.applyImpulse(f,u)}if(d.sideImpulse!==0){const f=d.raycastResult.body,p=new w;d.raycastResult.hitPointWorld.vsub(f.position,p);const v=new w;a[h].scale(d.sideImpulse,v),o.vectorToLocalFrame(u,u),u["xyz"[this.indexUpAxis]]*=d.rollInfluence,o.vectorToWorldFrame(u,u),o.applyImpulse(v,u),v.scale(-1,v),f.applyImpulse(v,p)}}}}new w;new w;new w;const KT=new w,ZT=new w,JT=new w;new cn;new w;const QT=new w,t2=new w,e2=[new w(1,0,0),new w(0,1,0),new w(0,0,1)],n2=new w,i2=[],s2=[],o2=1,r2=new w,a2=new w,l2=new w;function c2(i,t,e,n,s){let o=0;const r=e,a=r2,l=a2,c=l2;i.getVelocityAtWorldPoint(r,a),t.getVelocityAtWorldPoint(r,l),a.vsub(l,c);const h=n.dot(c),d=Sm(i,e,n),u=Sm(t,e,n),p=1/(d+u);return o=-h*p,s<o&&(o=s),o<-s&&(o=-s),o}const h2=new w,u2=new w,d2=new w,f2=new w;function Sm(i,t,e){const n=h2,s=u2,o=d2,r=f2;return t.vsub(i.position,n),n.cross(e,s),i.invInertiaWorld.vmult(s,r),r.cross(n,o),i.invMass+e.dot(o)}const p2=new w,m2=new w,g2=new w;function v2(i,t,e,n,s){if(s.lengthSquared()>1.1)return 0;const r=p2,a=m2,l=g2;i.getVelocityAtWorldPoint(t,r),e.getVelocityAtWorldPoint(n,a),r.vsub(a,l);const c=s.dot(l),h=1/(i.invMass+e.invMass);return-.2*c*h}class ap extends Pt{constructor(t){if(super({type:Pt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new w);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,s){const o=this.radius,r=["x","y","z"];for(let a=0;a<r.length;a++){const l=r[a];n[l]=t[l]-o,s[l]=t[l]+o}}}new w;new w;new w;new w;new w;new w;new w;new w;new w;class ro extends no{constructor(t,e,n,s){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),s===void 0&&(s=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const o=s,r=[],a=[],l=[],c=[],h=[],d=Math.cos,u=Math.sin;r.push(new w(-e*u(0),-n*.5,e*d(0))),c.push(0),r.push(new w(-t*u(0),n*.5,t*d(0))),h.push(1);for(let p=0;p<o;p++){const v=2*Math.PI/o*(p+1),m=2*Math.PI/o*(p+.5);p<o-1?(r.push(new w(-e*u(v),-n*.5,e*d(v))),c.push(2*p+2),r.push(new w(-t*u(v),n*.5,t*d(v))),h.push(2*p+3),l.push([2*p,2*p+1,2*p+3,2*p+2])):l.push([2*p,2*p+1,1,0]),(o%2===1||p<o/2)&&a.push(new w(-u(m),0,d(m)))}l.push(c),a.push(new w(0,1,0));const f=[];for(let p=0;p<h.length;p++)f.push(h[h.length-p-1]);l.push(f),super({vertices:r,faces:l,axes:a}),this.type=Pt.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=s}}new w;class x2 extends Pt{constructor(t,e){e===void 0&&(e={}),e=rp.defaults(e,{maxValue:null,minValue:null,elementSize:1}),super({type:Pt.types.HEIGHTFIELD}),this.data=t,this.maxValue=e.maxValue,this.minValue=e.minValue,this.elementSize=e.elementSize,e.minValue===null&&this.updateMinValue(),e.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,this.pillarConvex=new no,this.pillarOffset=new w,this.updateBoundingSphereRadius(),this._cachedPillars={}}update(){this._cachedPillars={}}updateMinValue(){const t=this.data;let e=t[0][0];for(let n=0;n!==t.length;n++)for(let s=0;s!==t[n].length;s++){const o=t[n][s];o<e&&(e=o)}this.minValue=e}updateMaxValue(){const t=this.data;let e=t[0][0];for(let n=0;n!==t.length;n++)for(let s=0;s!==t[n].length;s++){const o=t[n][s];o>e&&(e=o)}this.maxValue=e}setHeightValueAtIndex(t,e,n){const s=this.data;s[t][e]=n,this.clearCachedConvexTrianglePillar(t,e,!1),t>0&&(this.clearCachedConvexTrianglePillar(t-1,e,!0),this.clearCachedConvexTrianglePillar(t-1,e,!1)),e>0&&(this.clearCachedConvexTrianglePillar(t,e-1,!0),this.clearCachedConvexTrianglePillar(t,e-1,!1)),e>0&&t>0&&this.clearCachedConvexTrianglePillar(t-1,e-1,!0)}getRectMinMax(t,e,n,s,o){o===void 0&&(o=[]);const r=this.data;let a=this.minValue;for(let l=t;l<=n;l++)for(let c=e;c<=s;c++){const h=r[l][c];h>a&&(a=h)}o[0]=this.minValue,o[1]=a}getIndexOfPosition(t,e,n,s){const o=this.elementSize,r=this.data;let a=Math.floor(t/o),l=Math.floor(e/o);return n[0]=a,n[1]=l,s&&(a<0&&(a=0),l<0&&(l=0),a>=r.length-1&&(a=r.length-1),l>=r[0].length-1&&(l=r[0].length-1)),!(a<0||l<0||a>=r.length-1||l>=r[0].length-1)}getTriangleAt(t,e,n,s,o,r){const a=bm;this.getIndexOfPosition(t,e,a,n);let l=a[0],c=a[1];const h=this.data;n&&(l=Math.min(h.length-2,Math.max(0,l)),c=Math.min(h[0].length-2,Math.max(0,c)));const d=this.elementSize,u=(t/d-l)**2+(e/d-c)**2,f=(t/d-(l+1))**2+(e/d-(c+1))**2,p=u>f;return this.getTriangle(l,c,p,s,o,r),p}getNormalAt(t,e,n,s){const o=w2,r=S2,a=b2,l=E2,c=T2;this.getTriangleAt(t,e,n,o,r,a),r.vsub(o,l),a.vsub(o,c),l.cross(c,s),s.normalize()}getAabbAtIndex(t,e,n){let{lowerBound:s,upperBound:o}=n;const r=this.data,a=this.elementSize;s.set(t*a,e*a,r[t][e]),o.set((t+1)*a,(e+1)*a,r[t+1][e+1])}getHeightAt(t,e,n){const s=this.data,o=_2,r=y2,a=M2,l=bm;this.getIndexOfPosition(t,e,l,n);let c=l[0],h=l[1];n&&(c=Math.min(s.length-2,Math.max(0,c)),h=Math.min(s[0].length-2,Math.max(0,h)));const d=this.getTriangleAt(t,e,n,o,r,a);A2(t,e,o.x,o.y,r.x,r.y,a.x,a.y,Em);const u=Em;return d?s[c+1][h+1]*u.x+s[c][h+1]*u.y+s[c+1][h]*u.z:s[c][h]*u.x+s[c+1][h]*u.y+s[c][h+1]*u.z}getCacheConvexTrianglePillarKey(t,e,n){return`${t}_${e}_${n?1:0}`}getCachedConvexTrianglePillar(t,e,n){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(t,e,n)]}setCachedConvexTrianglePillar(t,e,n,s,o){this._cachedPillars[this.getCacheConvexTrianglePillarKey(t,e,n)]={convex:s,offset:o}}clearCachedConvexTrianglePillar(t,e,n){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(t,e,n)]}getTriangle(t,e,n,s,o,r){const a=this.data,l=this.elementSize;n?(s.set((t+1)*l,(e+1)*l,a[t+1][e+1]),o.set(t*l,(e+1)*l,a[t][e+1]),r.set((t+1)*l,e*l,a[t+1][e])):(s.set(t*l,e*l,a[t][e]),o.set((t+1)*l,e*l,a[t+1][e]),r.set(t*l,(e+1)*l,a[t][e+1]))}getConvexTrianglePillar(t,e,n){let s=this.pillarConvex,o=this.pillarOffset;if(this.cacheEnabled){const d=this.getCachedConvexTrianglePillar(t,e,n);if(d){this.pillarConvex=d.convex,this.pillarOffset=d.offset;return}s=new no,o=new w,this.pillarConvex=s,this.pillarOffset=o}const r=this.data,a=this.elementSize,l=s.faces;s.vertices.length=6;for(let d=0;d<6;d++)s.vertices[d]||(s.vertices[d]=new w);l.length=5;for(let d=0;d<5;d++)l[d]||(l[d]=[]);const c=s.vertices,h=(Math.min(r[t][e],r[t+1][e],r[t][e+1],r[t+1][e+1])-this.minValue)/2+this.minValue;n?(o.set((t+.75)*a,(e+.75)*a,h),c[0].set(.25*a,.25*a,r[t+1][e+1]-h),c[1].set(-.75*a,.25*a,r[t][e+1]-h),c[2].set(.25*a,-.75*a,r[t+1][e]-h),c[3].set(.25*a,.25*a,-Math.abs(h)-1),c[4].set(-.75*a,.25*a,-Math.abs(h)-1),c[5].set(.25*a,-.75*a,-Math.abs(h)-1),l[0][0]=0,l[0][1]=1,l[0][2]=2,l[1][0]=5,l[1][1]=4,l[1][2]=3,l[2][0]=2,l[2][1]=5,l[2][2]=3,l[2][3]=0,l[3][0]=3,l[3][1]=4,l[3][2]=1,l[3][3]=0,l[4][0]=1,l[4][1]=4,l[4][2]=5,l[4][3]=2):(o.set((t+.25)*a,(e+.25)*a,h),c[0].set(-.25*a,-.25*a,r[t][e]-h),c[1].set(.75*a,-.25*a,r[t+1][e]-h),c[2].set(-.25*a,.75*a,r[t][e+1]-h),c[3].set(-.25*a,-.25*a,-Math.abs(h)-1),c[4].set(.75*a,-.25*a,-Math.abs(h)-1),c[5].set(-.25*a,.75*a,-Math.abs(h)-1),l[0][0]=0,l[0][1]=1,l[0][2]=2,l[1][0]=5,l[1][1]=4,l[1][2]=3,l[2][0]=0,l[2][1]=2,l[2][2]=5,l[2][3]=3,l[3][0]=1,l[3][1]=0,l[3][2]=3,l[3][3]=4,l[4][0]=4,l[4][1]=5,l[4][2]=2,l[4][3]=1),s.computeNormals(),s.computeEdges(),s.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(t,e,n,s,o)}calculateLocalInertia(t,e){return e===void 0&&(e=new w),e.set(0,0,0),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,s){n.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),s.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)}updateBoundingSphereRadius(){const t=this.data,e=this.elementSize;this.boundingSphereRadius=new w(t.length*e,t[0].length*e,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).length()}setHeightsFromImage(t,e){const{x:n,z:s,y:o}=e,r=document.createElement("canvas");r.width=t.width,r.height=t.height;const a=r.getContext("2d");a.drawImage(t,0,0);const l=a.getImageData(0,0,t.width,t.height),c=this.data;c.length=0,this.elementSize=Math.abs(n)/l.width;for(let h=0;h<l.height;h++){const d=[];for(let u=0;u<l.width;u++){const f=l.data[(h*l.height+u)*4],p=l.data[(h*l.height+u)*4+1],v=l.data[(h*l.height+u)*4+2],m=(f+p+v)/4/255*s;n<0?d.push(m):d.unshift(m)}o<0?c.unshift(d):c.push(d)}this.updateMaxValue(),this.updateMinValue(),this.update()}}const bm=[],Em=new w,_2=new w,y2=new w,M2=new w,w2=new w,S2=new w,b2=new w,E2=new w,T2=new w;function A2(i,t,e,n,s,o,r,a,l){l.x=((o-a)*(i-r)+(r-s)*(t-a))/((o-a)*(e-r)+(r-s)*(n-a)),l.y=((a-n)*(i-r)+(e-r)*(t-a))/((o-a)*(e-r)+(r-s)*(n-a)),l.z=1-l.x-l.y}new w;new di;new w;new di;new w;new w;new w;new w;new w;new w;new w;new di;new w;new Ee;new di;class C2{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class R2 extends C2{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const s=this.iterations,o=this.tolerance*this.tolerance,r=this.equations,a=r.length,l=e.bodies,c=l.length,h=t;let d,u,f,p,v,m;if(a!==0)for(let M=0;M!==c;M++)l[M].updateSolveMassProperties();const g=L2,x=I2,_=P2;g.length=a,x.length=a,_.length=a;for(let M=0;M!==a;M++){const C=r[M];_[M]=0,x[M]=C.computeB(h),g[M]=1/C.computeC()}if(a!==0){for(let E=0;E!==c;E++){const T=l[E],I=T.vlambda,V=T.wlambda;I.set(0,0,0),V.set(0,0,0)}for(n=0;n!==s;n++){p=0;for(let E=0;E!==a;E++){const T=r[E];d=x[E],u=g[E],m=_[E],v=T.computeGWlambda(),f=u*(d-v-T.eps*m),m+f<T.minForce?f=T.minForce-m:m+f>T.maxForce&&(f=T.maxForce-m),_[E]+=f,p+=f>0?f:-f,T.addToWlambda(f)}if(p*p<o)break}for(let E=0;E!==c;E++){const T=l[E],I=T.velocity,V=T.angularVelocity;T.vlambda.vmul(T.linearFactor,T.vlambda),I.vadd(T.vlambda,I),T.wlambda.vmul(T.angularFactor,T.wlambda),V.vadd(T.wlambda,V)}let M=r.length;const C=1/h;for(;M--;)r[M].multiplier=_[M]*C}return n}}const P2=[],L2=[],I2=[];class N2{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class D2 extends N2{constructor(){super(...arguments),this.type=w}constructObject(){return new w}}const qe={sphereSphere:Pt.types.SPHERE,spherePlane:Pt.types.SPHERE|Pt.types.PLANE,boxBox:Pt.types.BOX|Pt.types.BOX,sphereBox:Pt.types.SPHERE|Pt.types.BOX,planeBox:Pt.types.PLANE|Pt.types.BOX,convexConvex:Pt.types.CONVEXPOLYHEDRON,sphereConvex:Pt.types.SPHERE|Pt.types.CONVEXPOLYHEDRON,planeConvex:Pt.types.PLANE|Pt.types.CONVEXPOLYHEDRON,boxConvex:Pt.types.BOX|Pt.types.CONVEXPOLYHEDRON,sphereHeightfield:Pt.types.SPHERE|Pt.types.HEIGHTFIELD,boxHeightfield:Pt.types.BOX|Pt.types.HEIGHTFIELD,convexHeightfield:Pt.types.CONVEXPOLYHEDRON|Pt.types.HEIGHTFIELD,sphereParticle:Pt.types.PARTICLE|Pt.types.SPHERE,planeParticle:Pt.types.PLANE|Pt.types.PARTICLE,boxParticle:Pt.types.BOX|Pt.types.PARTICLE,convexParticle:Pt.types.PARTICLE|Pt.types.CONVEXPOLYHEDRON,cylinderCylinder:Pt.types.CYLINDER,sphereCylinder:Pt.types.SPHERE|Pt.types.CYLINDER,planeCylinder:Pt.types.PLANE|Pt.types.CYLINDER,boxCylinder:Pt.types.BOX|Pt.types.CYLINDER,convexCylinder:Pt.types.CONVEXPOLYHEDRON|Pt.types.CYLINDER,heightfieldCylinder:Pt.types.HEIGHTFIELD|Pt.types.CYLINDER,particleCylinder:Pt.types.PARTICLE|Pt.types.CYLINDER,sphereTrimesh:Pt.types.SPHERE|Pt.types.TRIMESH,planeTrimesh:Pt.types.PLANE|Pt.types.TRIMESH};class U2{get[qe.sphereSphere](){return this.sphereSphere}get[qe.spherePlane](){return this.spherePlane}get[qe.boxBox](){return this.boxBox}get[qe.sphereBox](){return this.sphereBox}get[qe.planeBox](){return this.planeBox}get[qe.convexConvex](){return this.convexConvex}get[qe.sphereConvex](){return this.sphereConvex}get[qe.planeConvex](){return this.planeConvex}get[qe.boxConvex](){return this.boxConvex}get[qe.sphereHeightfield](){return this.sphereHeightfield}get[qe.boxHeightfield](){return this.boxHeightfield}get[qe.convexHeightfield](){return this.convexHeightfield}get[qe.sphereParticle](){return this.sphereParticle}get[qe.planeParticle](){return this.planeParticle}get[qe.boxParticle](){return this.boxParticle}get[qe.convexParticle](){return this.convexParticle}get[qe.cylinderCylinder](){return this.convexConvex}get[qe.sphereCylinder](){return this.sphereConvex}get[qe.planeCylinder](){return this.planeConvex}get[qe.boxCylinder](){return this.boxConvex}get[qe.convexCylinder](){return this.convexConvex}get[qe.heightfieldCylinder](){return this.heightfieldCylinder}get[qe.particleCylinder](){return this.particleCylinder}get[qe.sphereTrimesh](){return this.sphereTrimesh}get[qe.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new D2,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,s,o,r){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new OT(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&s.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=s.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=o||n,a.sj=r||s,a}createFrictionEquationsFromContact(t,e){const n=t.bi,s=t.bj,o=t.si,r=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=o.material||n.material,d=r.material||s.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+s.invMass;f>0&&(f=1/f);const p=this.frictionEquationPool,v=p.length?p.pop():new ym(n,s,u*f),m=p.length?p.pop():new ym(n,s,u*f);return v.bi=m.bi=n,v.bj=m.bj=s,v.minForce=m.minForce=-u*f,v.maxForce=m.maxForce=u*f,v.ri.copy(t.ri),v.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(v.t,m.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=m.enabled=t.enabled,e.push(v,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];Mo.setZero(),fr.setZero(),pr.setZero();const o=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==o?(Mo.vadd(e.ni,Mo),fr.vadd(e.ri,fr),pr.vadd(e.rj,pr)):(Mo.vsub(e.ni,Mo),fr.vadd(e.rj,fr),pr.vadd(e.ri,pr));const r=1/t;fr.scale(r,n.ri),pr.scale(r,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),Mo.normalize(),Mo.tangents(n.t,s.t)}getContacts(t,e,n,s,o,r,a){this.contactPointPool=o,this.frictionEquationPool=a,this.result=s,this.frictionResult=r;const l=z2,c=B2,h=F2,d=O2;for(let u=0,f=t.length;u!==f;u++){const p=t[u],v=e[u];let m=null;p.material&&v.material&&(m=n.getContactMaterial(p.material,v.material)||null);const g=p.type&St.KINEMATIC&&v.type&St.STATIC||p.type&St.STATIC&&v.type&St.KINEMATIC||p.type&St.KINEMATIC&&v.type&St.KINEMATIC;for(let x=0;x<p.shapes.length;x++){p.quaternion.mult(p.shapeOrientations[x],l),p.quaternion.vmult(p.shapeOffsets[x],h),h.vadd(p.position,h);const _=p.shapes[x];for(let M=0;M<v.shapes.length;M++){v.quaternion.mult(v.shapeOrientations[M],c),v.quaternion.vmult(v.shapeOffsets[M],d),d.vadd(v.position,d);const C=v.shapes[M];if(!(_.collisionFilterMask&C.collisionFilterGroup&&C.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(d)>_.boundingSphereRadius+C.boundingSphereRadius)continue;let E=null;_.material&&C.material&&(E=n.getContactMaterial(_.material,C.material)||null),this.currentContactMaterial=E||m||n.defaultContactMaterial;const T=_.type|C.type,I=this[T];if(I){let V=!1;_.type<C.type?V=I.call(this,_,C,h,d,l,c,p,v,_,C,g):V=I.call(this,C,_,d,h,c,l,v,p,_,C,g),V&&g&&(n.shapeOverlapKeeper.set(_.id,C.id),n.bodyOverlapKeeper.set(p.id,v.id))}}}}}sphereSphere(t,e,n,s,o,r,a,l,c,h,d){if(d)return n.distanceSquared(s)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,l,t,e,c,h);s.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(s,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,s,o,r,a,l,c,h,d){const u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),r.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(s,dc),u.ni.scale(u.ni.dot(dc),Tm),dc.vsub(Tm,u.rj),-dc.dot(u.ni)<=t.radius){if(d)return!0;const f=u.ri,p=u.rj;f.vadd(n,f),f.vsub(a.position,f),p.vadd(s,p),p.vsub(l.position,p),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,s,o,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,s,o,r,a,l,t,e,d)}sphereBox(t,e,n,s,o,r,a,l,c,h,d){const u=this.v3pool,f=uA;n.vsub(s,fc),e.getSideNormals(f,r);const p=t.radius;let v=!1;const m=fA,g=pA,x=mA;let _=null,M=0,C=0,E=0,T=null;for(let U=0,tt=f.length;U!==tt&&v===!1;U++){const q=lA;q.copy(f[U]);const nt=q.length();q.normalize();const pt=fc.dot(q);if(pt<nt+p&&pt>0){const dt=cA,mt=hA;dt.copy(f[(U+1)%3]),mt.copy(f[(U+2)%3]);const de=dt.length(),Z=mt.length();dt.normalize(),mt.normalize();const at=fc.dot(dt),Tt=fc.dot(mt);if(at<de&&at>-de&&Tt<Z&&Tt>-Z){const xt=Math.abs(pt-nt-p);if((T===null||xt<T)&&(T=xt,C=at,E=Tt,_=nt,m.copy(q),g.copy(dt),x.copy(mt),M++,d))return!0}}}if(M){v=!0;const U=this.createContactEquation(a,l,t,e,c,h);m.scale(-p,U.ri),U.ni.copy(m),U.ni.negate(U.ni),m.scale(_,m),g.scale(C,g),m.vadd(g,m),x.scale(E,x),m.vadd(x,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.vadd(s,U.rj),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}let I=u.get();const V=dA;for(let U=0;U!==2&&!v;U++)for(let tt=0;tt!==2&&!v;tt++)for(let q=0;q!==2&&!v;q++)if(I.set(0,0,0),U?I.vadd(f[0],I):I.vsub(f[0],I),tt?I.vadd(f[1],I):I.vsub(f[1],I),q?I.vadd(f[2],I):I.vsub(f[2],I),s.vadd(I,V),V.vsub(n,V),V.lengthSquared()<p*p){if(d)return!0;v=!0;const nt=this.createContactEquation(a,l,t,e,c,h);nt.ri.copy(V),nt.ri.normalize(),nt.ni.copy(nt.ri),nt.ri.scale(p,nt.ri),nt.rj.copy(I),nt.ri.vadd(n,nt.ri),nt.ri.vsub(a.position,nt.ri),nt.rj.vadd(s,nt.rj),nt.rj.vsub(l.position,nt.rj),this.result.push(nt),this.createFrictionEquationsFromContact(nt,this.frictionResult)}u.release(I),I=null;const y=u.get(),S=u.get(),B=u.get(),D=u.get(),F=u.get(),k=f.length;for(let U=0;U!==k&&!v;U++)for(let tt=0;tt!==k&&!v;tt++)if(U%3!==tt%3){f[tt].cross(f[U],y),y.normalize(),f[U].vadd(f[tt],S),B.copy(n),B.vsub(S,B),B.vsub(s,B);const q=B.dot(y);y.scale(q,D);let nt=0;for(;nt===U%3||nt===tt%3;)nt++;F.copy(n),F.vsub(D,F),F.vsub(S,F),F.vsub(s,F);const pt=Math.abs(q),dt=F.length();if(pt<f[nt].length()&&dt<p){if(d)return!0;v=!0;const mt=this.createContactEquation(a,l,t,e,c,h);S.vadd(D,mt.rj),mt.rj.copy(mt.rj),F.negate(mt.ni),mt.ni.normalize(),mt.ri.copy(mt.rj),mt.ri.vadd(s,mt.ri),mt.ri.vsub(n,mt.ri),mt.ri.normalize(),mt.ri.scale(p,mt.ri),mt.ri.vadd(n,mt.ri),mt.ri.vsub(a.position,mt.ri),mt.rj.vadd(s,mt.rj),mt.rj.vsub(l.position,mt.rj),this.result.push(mt),this.createFrictionEquationsFromContact(mt,this.frictionResult)}}u.release(y,S,B,D,F)}planeBox(t,e,n,s,o,r,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,s,o,r,a,l,t,e,d)}convexConvex(t,e,n,s,o,r,a,l,c,h,d,u,f){const p=PA;if(!(n.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,o,s,r,p,u,f)){const v=[],m=LA;t.clipAgainstHull(n,o,e,s,r,p,-100,100,v);let g=0;for(let x=0;x!==v.length;x++){if(d)return!0;const _=this.createContactEquation(a,l,t,e,c,h),M=_.ri,C=_.rj;p.negate(_.ni),v[x].normal.negate(m),m.scale(v[x].depth,m),v[x].point.vadd(m,M),C.copy(v[x].point),M.vsub(n,M),C.vsub(s,C),M.vadd(n,M),M.vsub(a.position,M),C.vadd(s,C),C.vsub(l.position,C),this.result.push(_),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(t,e,n,s,o,r,a,l,c,h,d){const u=this.v3pool;n.vsub(s,gA);const f=e.faceNormals,p=e.faces,v=e.vertices,m=t.radius;let g=!1;for(let x=0;x!==v.length;x++){const _=v[x],M=yA;r.vmult(_,M),s.vadd(M,M);const C=_A;if(M.vsub(n,C),C.lengthSquared()<m*m){if(d)return!0;g=!0;const E=this.createContactEquation(a,l,t,e,c,h);E.ri.copy(C),E.ri.normalize(),E.ni.copy(E.ri),E.ri.scale(m,E.ri),M.vsub(s,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(a.position,E.ri),E.rj.vadd(s,E.rj),E.rj.vsub(l.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);return}}for(let x=0,_=p.length;x!==_&&g===!1;x++){const M=f[x],C=p[x],E=MA;r.vmult(M,E);const T=wA;r.vmult(v[C[0]],T),T.vadd(s,T);const I=SA;E.scale(-m,I),n.vadd(I,I);const V=bA;I.vsub(T,V);const y=V.dot(E),S=EA;if(n.vsub(T,S),y<0&&S.dot(E)>0){const B=[];for(let D=0,F=C.length;D!==F;D++){const k=u.get();r.vmult(v[C[D]],k),s.vadd(k,k),B.push(k)}if(aA(B,E,n)){if(d)return!0;g=!0;const D=this.createContactEquation(a,l,t,e,c,h);E.scale(-m,D.ri),E.negate(D.ni);const F=u.get();E.scale(-y,F);const k=u.get();E.scale(-m,k),n.vsub(s,D.rj),D.rj.vadd(k,D.rj),D.rj.vadd(F,D.rj),D.rj.vadd(s,D.rj),D.rj.vsub(l.position,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),u.release(F),u.release(k),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult);for(let U=0,tt=B.length;U!==tt;U++)u.release(B[U]);return}else for(let D=0;D!==C.length;D++){const F=u.get(),k=u.get();r.vmult(v[C[(D+1)%C.length]],F),r.vmult(v[C[(D+2)%C.length]],k),s.vadd(F,F),s.vadd(k,k);const U=vA;k.vsub(F,U);const tt=xA;U.unit(tt);const q=u.get(),nt=u.get();n.vsub(F,nt);const pt=nt.dot(tt);tt.scale(pt,q),q.vadd(F,q);const dt=u.get();if(q.vsub(n,dt),pt>0&&pt*pt<U.lengthSquared()&&dt.lengthSquared()<m*m){if(d)return!0;const mt=this.createContactEquation(a,l,t,e,c,h);q.vsub(s,mt.rj),q.vsub(n,mt.ni),mt.ni.normalize(),mt.ni.scale(m,mt.ri),mt.rj.vadd(s,mt.rj),mt.rj.vsub(l.position,mt.rj),mt.ri.vadd(n,mt.ri),mt.ri.vsub(a.position,mt.ri),this.result.push(mt),this.createFrictionEquationsFromContact(mt,this.frictionResult);for(let de=0,Z=B.length;de!==Z;de++)u.release(B[de]);u.release(F),u.release(k),u.release(q),u.release(dt),u.release(nt);return}u.release(F),u.release(k),u.release(q),u.release(dt),u.release(nt)}for(let D=0,F=B.length;D!==F;D++)u.release(B[D])}}}planeConvex(t,e,n,s,o,r,a,l,c,h,d){const u=TA,f=AA;f.set(0,0,1),o.vmult(f,f);let p=0;const v=CA;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),r.vmult(u,u),s.vadd(u,u),u.vsub(n,v),f.dot(v)<=0){if(d)return!0;const x=this.createContactEquation(a,l,t,e,c,h),_=RA;f.scale(f.dot(v),_),u.vsub(_,_),_.vsub(n,x.ri),x.ni.copy(f),u.vsub(s,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(s,x.rj),x.rj.vsub(l.position,x.rj),this.result.push(x),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(t,e,n,s,o,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,s,o,r,a,l,t,e,d)}sphereHeightfield(t,e,n,s,o,r,a,l,c,h,d){const u=e.data,f=t.radius,p=e.elementSize,v=GA,m=VA;Ee.pointToLocalFrame(s,r,n,m);let g=Math.floor((m.x-f)/p)-1,x=Math.ceil((m.x+f)/p)+1,_=Math.floor((m.y-f)/p)-1,M=Math.ceil((m.y+f)/p)+1;if(x<0||M<0||g>u.length||_>u[0].length)return;g<0&&(g=0),x<0&&(x=0),_<0&&(_=0),M<0&&(M=0),g>=u.length&&(g=u.length-1),x>=u.length&&(x=u.length-1),M>=u[0].length&&(M=u[0].length-1),_>=u[0].length&&(_=u[0].length-1);const C=[];e.getRectMinMax(g,_,x,M,C);const E=C[0],T=C[1];if(m.z-f>T||m.z+f<E)return;const I=this.result;for(let V=g;V<x;V++)for(let y=_;y<M;y++){const S=I.length;let B=!1;if(e.getConvexTrianglePillar(V,y,!1),Ee.pointToWorldFrame(s,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.sphereConvex(t,e.pillarConvex,n,v,o,r,a,l,t,e,d)),d&&B||(e.getConvexTrianglePillar(V,y,!0),Ee.pointToWorldFrame(s,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.sphereConvex(t,e.pillarConvex,n,v,o,r,a,l,t,e,d)),d&&B))return!0;if(I.length-S>2)return}}boxHeightfield(t,e,n,s,o,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,s,o,r,a,l,t,e,d)}convexHeightfield(t,e,n,s,o,r,a,l,c,h,d){const u=e.data,f=e.elementSize,p=t.boundingSphereRadius,v=kA,m=HA,g=BA;Ee.pointToLocalFrame(s,r,n,g);let x=Math.floor((g.x-p)/f)-1,_=Math.ceil((g.x+p)/f)+1,M=Math.floor((g.y-p)/f)-1,C=Math.ceil((g.y+p)/f)+1;if(_<0||C<0||x>u.length||M>u[0].length)return;x<0&&(x=0),_<0&&(_=0),M<0&&(M=0),C<0&&(C=0),x>=u.length&&(x=u.length-1),_>=u.length&&(_=u.length-1),C>=u[0].length&&(C=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);const E=[];e.getRectMinMax(x,M,_,C,E);const T=E[0],I=E[1];if(!(g.z-p>I||g.z+p<T))for(let V=x;V<_;V++)for(let y=M;y<C;y++){let S=!1;if(e.getConvexTrianglePillar(V,y,!1),Ee.pointToWorldFrame(s,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(S=this.convexConvex(t,e.pillarConvex,n,v,o,r,a,l,null,null,d,m,null)),d&&S||(e.getConvexTrianglePillar(V,y,!0),Ee.pointToWorldFrame(s,r,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(S=this.convexConvex(t,e.pillarConvex,n,v,o,r,a,l,null,null,d,m,null)),d&&S))return!0}}sphereParticle(t,e,n,s,o,r,a,l,c,h,d){const u=UA;if(u.set(0,0,1),s.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const p=this.createContactEquation(l,a,e,t,c,h);u.normalize(),p.rj.copy(u),p.rj.scale(t.radius,p.rj),p.ni.copy(u),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(t,e,n,s,o,r,a,l,c,h,d){const u=IA;u.set(0,0,1),a.quaternion.vmult(u,u);const f=NA;if(s.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(l,a,e,t,c,h);v.ni.copy(u),v.ni.negate(v.ni),v.ri.set(0,0,0);const m=DA;u.scale(u.dot(s),m),s.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,s,o,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,s,o,r,a,l,t,e,d)}convexParticle(t,e,n,s,o,r,a,l,c,h,d){let u=-1;const f=OA,p=zA;let v=null;const m=FA;if(m.copy(s),m.vsub(n,m),o.conjugate(Am),Am.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,o),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(o);for(let g=0,x=t.faces.length;g!==x;g++){const _=[t.worldVertices[t.faces[g][0]]],M=t.worldFaceNormals[g];s.vsub(_[0],Cm);const C=-M.dot(Cm);if(v===null||Math.abs(C)<Math.abs(v)){if(d)return!0;v=C,u=g,f.copy(M)}}if(u!==-1){const g=this.createContactEquation(l,a,e,t,c,h);f.scale(v,p),p.vadd(s,p),p.vsub(n,p),g.rj.copy(p),f.negate(g.ni),g.ri.set(0,0,0);const x=g.ri,_=g.rj;x.vadd(s,x),x.vsub(l.position,x),_.vadd(n,_),_.vsub(a.position,_),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,s,o,r,a,l,c,h,d){return this.convexHeightfield(e,t,s,n,r,o,l,a,c,h,d)}particleCylinder(t,e,n,s,o,r,a,l,c,h,d){return this.convexParticle(e,t,s,n,r,o,l,a,c,h,d)}sphereTrimesh(t,e,n,s,o,r,a,l,c,h,d){const u=$2,f=j2,p=Y2,v=K2,m=Z2,g=J2,x=nA,_=X2,M=W2,C=iA;Ee.pointToLocalFrame(s,r,n,m);const E=t.radius;x.lowerBound.set(m.x-E,m.y-E,m.z-E),x.upperBound.set(m.x+E,m.y+E,m.z+E),e.getTrianglesInAABB(x,C);const T=q2,I=t.radius*t.radius;for(let D=0;D<C.length;D++)for(let F=0;F<3;F++)if(e.getVertex(e.indices[C[D]*3+F],T),T.vsub(m,M),M.lengthSquared()<=I){if(_.copy(T),Ee.pointToWorldFrame(s,r,_,T),T.vsub(n,M),d)return!0;let k=this.createContactEquation(a,l,t,e,c,h);k.ni.copy(M),k.ni.normalize(),k.ri.copy(k.ni),k.ri.scale(t.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(a.position,k.ri),k.rj.copy(T),k.rj.vsub(l.position,k.rj),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}for(let D=0;D<C.length;D++)for(let F=0;F<3;F++){e.getVertex(e.indices[C[D]*3+F],u),e.getVertex(e.indices[C[D]*3+(F+1)%3],f),f.vsub(u,p),m.vsub(f,g);const k=g.dot(p);m.vsub(u,g);let U=g.dot(p);if(U>0&&k<0&&(m.vsub(u,g),v.copy(p),v.normalize(),U=g.dot(v),v.scale(U,g),g.vadd(u,g),g.distanceTo(m)<t.radius)){if(d)return!0;const q=this.createContactEquation(a,l,t,e,c,h);g.vsub(m,q.ni),q.ni.normalize(),q.ni.scale(t.radius,q.ri),q.ri.vadd(n,q.ri),q.ri.vsub(a.position,q.ri),Ee.pointToWorldFrame(s,r,g,g),g.vsub(l.position,q.rj),Ee.vectorToWorldFrame(r,q.ni,q.ni),Ee.vectorToWorldFrame(r,q.ri,q.ri),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}}const V=Q2,y=tA,S=eA,B=G2;for(let D=0,F=C.length;D!==F;D++){e.getTriangleVertices(C[D],V,y,S),e.getNormal(C[D],B),m.vsub(V,g);let k=g.dot(B);if(B.scale(k,g),m.vsub(g,g),k=g.distanceTo(m),cn.pointInTriangle(g,V,y,S)&&k<t.radius){if(d)return!0;let U=this.createContactEquation(a,l,t,e,c,h);g.vsub(m,U.ni),U.ni.normalize(),U.ni.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),Ee.pointToWorldFrame(s,r,g,g),g.vsub(l.position,U.rj),Ee.vectorToWorldFrame(r,U.ni,U.ni),Ee.vectorToWorldFrame(r,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}C.length=0}planeTrimesh(t,e,n,s,o,r,a,l,c,h,d){const u=new w,f=k2;f.set(0,0,1),o.vmult(f,f);for(let p=0;p<e.vertices.length/3;p++){e.getVertex(p,u);const v=new w;v.copy(u),Ee.pointToWorldFrame(s,r,v,u);const m=H2;if(u.vsub(n,m),f.dot(m)<=0){if(d)return!0;const x=this.createContactEquation(a,l,t,e,c,h);x.ni.copy(f);const _=V2;f.scale(m.dot(f),_),u.vsub(_,_),x.ri.copy(_),x.ri.vsub(a.position,x.ri),x.rj.copy(u),x.rj.vsub(l.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const Mo=new w,fr=new w,pr=new w,F2=new w,O2=new w,z2=new Ve,B2=new Ve,k2=new w,H2=new w,V2=new w,G2=new w,W2=new w;new w;const q2=new w,X2=new w,$2=new w,j2=new w,Y2=new w,K2=new w,Z2=new w,J2=new w,Q2=new w,tA=new w,eA=new w,nA=new di,iA=[],dc=new w,Tm=new w,sA=new w,oA=new w,rA=new w;function aA(i,t,e){let n=null;const s=i.length;for(let o=0;o!==s;o++){const r=i[o],a=sA;i[(o+1)%s].vsub(r,a);const l=oA;a.cross(t,l);const c=rA;e.vsub(r,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const fc=new w,lA=new w,cA=new w,hA=new w,uA=[new w,new w,new w,new w,new w,new w],dA=new w,fA=new w,pA=new w,mA=new w,gA=new w,vA=new w,xA=new w,_A=new w,yA=new w,MA=new w,wA=new w,SA=new w,bA=new w,EA=new w;new w;new w;const TA=new w,AA=new w,CA=new w,RA=new w,PA=new w,LA=new w,IA=new w,NA=new w,DA=new w,UA=new w,Am=new Ve,FA=new w;new w;const OA=new w,Cm=new w,zA=new w,BA=new w,kA=new w,HA=[0],VA=new w,GA=new w;class Rm{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),s=this.current;let o=0;for(;n>s[o];)o++;if(n!==s[o]){for(let r=s.length-1;r>=o;r--)s[r+1]=s[r];s[o]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,s=this.previous,o=n.length,r=s.length;let a=0;for(let l=0;l<o;l++){let c=!1;const h=n[l];for(;h>s[a];)a++;c=h===s[a],c||Pm(t,h)}a=0;for(let l=0;l<r;l++){let c=!1;const h=s[l];for(;h>n[a];)a++;c=n[a]===h,c||Pm(e,h)}}}function Pm(i,t){i.push((t&4294901760)>>16,t&65535)}const Iu=(i,t)=>i<t?`${i}-${t}`:`${t}-${i}`;class WA{constructor(){this.data={keys:[]}}get(t,e){const n=Iu(t,e);return this.data[n]}set(t,e,n){const s=Iu(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=n}delete(t,e){const n=Iu(t,e),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class qA extends Vv{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new w,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new w,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new _T,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new R2,this.constraints=[],this.narrowphase=new U2(this),this.collisionMatrix=new hm,this.collisionMatrixPrevious=new hm,this.bodyOverlapKeeper=new Rm,this.shapeOverlapKeeper=new Rm,this.contactmaterials=[],this.contactMaterialTable=new WA,this.defaultMaterial=new yl("default"),this.defaultContactMaterial=new _l(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Bo?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,s){return n===void 0&&(n={}),n.mode=cn.ALL,n.from=t,n.to=e,n.callback=s,Nu.intersectWorld(this,n)}raycastAny(t,e,n,s){return n===void 0&&(n={}),n.mode=cn.ANY,n.from=t,n.to=e,n.result=s,Nu.intersectWorld(this,n)}raycastClosest(t,e,n,s){return n===void 0&&(n={}),n.mode=cn.CLOSEST,n.from=t,n.to=e,n.result=s,Nu.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof St&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,s=n.indexOf(t);if(s!==-1){n.splice(s,1);for(let o=0;o!==n.length;o++)n[o].index=o;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const s=e[n].shapes;for(let o=0;o<s.length;o++){const r=s[o];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=dn.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const s=n-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const s=dn.now();let o=0;for(;this.accumulator>=t&&o<n&&(this.internalStep(t),this.accumulator-=t,o++,!(dn.now()-s>t*1e3)););this.accumulator=this.accumulator%t;const r=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,r,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,r,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=KA,s=ZA,o=this.bodies.length,r=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=St.DYNAMIC;let u=-1/0;const f=this.constraints,p=YA;l.length();const v=l.x,m=l.y,g=l.z;let x=0;for(c&&(u=dn.now()),x=0;x!==o;x++){const D=r[x];if(D.type===d){const F=D.force,k=D.mass;F.x+=k*v,F.y+=k*m,F.z+=k*g}}for(let D=0,F=this.subsystems.length;D!==F;D++)this.subsystems[D].update();c&&(u=dn.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),c&&(h.broadphase=dn.now()-u);let _=f.length;for(x=0;x!==_;x++){const D=f[x];if(!D.collideConnected)for(let F=n.length-1;F>=0;F-=1)(D.bodyA===n[F]&&D.bodyB===s[F]||D.bodyB===n[F]&&D.bodyA===s[F])&&(n.splice(F,1),s.splice(F,1))}this.collisionMatrixTick(),c&&(u=dn.now());const M=jA,C=e.length;for(x=0;x!==C;x++)M.push(e[x]);e.length=0;const E=this.frictionEquations.length;for(x=0;x!==E;x++)p.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,e,M,this.frictionEquations,p),c&&(h.narrowphase=dn.now()-u),c&&(u=dn.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);const T=e.length;for(let D=0;D!==T;D++){const F=e[D],k=F.bi,U=F.bj,tt=F.si,q=F.sj;let nt;if(k.material&&U.material?nt=this.getContactMaterial(k.material,U.material)||this.defaultContactMaterial:nt=this.defaultContactMaterial,nt.friction,k.material&&U.material&&(k.material.friction>=0&&U.material.friction>=0&&k.material.friction*U.material.friction,k.material.restitution>=0&&U.material.restitution>=0&&(F.restitution=k.material.restitution*U.material.restitution)),a.addEquation(F),k.allowSleep&&k.type===St.DYNAMIC&&k.sleepState===St.SLEEPING&&U.sleepState===St.AWAKE&&U.type!==St.STATIC){const pt=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),dt=U.sleepSpeedLimit**2;pt>=dt*2&&(k.wakeUpAfterNarrowphase=!0)}if(U.allowSleep&&U.type===St.DYNAMIC&&U.sleepState===St.SLEEPING&&k.sleepState===St.AWAKE&&k.type!==St.STATIC){const pt=k.velocity.lengthSquared()+k.angularVelocity.lengthSquared(),dt=k.sleepSpeedLimit**2;pt>=dt*2&&(U.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(k,U,!0),this.collisionMatrixPrevious.get(k,U)||(_a.body=U,_a.contact=F,k.dispatchEvent(_a),_a.body=k,U.dispatchEvent(_a)),this.bodyOverlapKeeper.set(k.id,U.id),this.shapeOverlapKeeper.set(tt.id,q.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=dn.now()-u,u=dn.now()),x=0;x!==o;x++){const D=r[x];D.wakeUpAfterNarrowphase&&(D.wakeUp(),D.wakeUpAfterNarrowphase=!1)}for(_=f.length,x=0;x!==_;x++){const D=f[x];D.update();for(let F=0,k=D.equations.length;F!==k;F++){const U=D.equations[F];a.addEquation(U)}}a.solve(t,this),c&&(h.solve=dn.now()-u),a.removeAllEquations();const I=Math.pow;for(x=0;x!==o;x++){const D=r[x];if(D.type&d){const F=I(1-D.linearDamping,t),k=D.velocity;k.scale(F,k);const U=D.angularVelocity;if(U){const tt=I(1-D.angularDamping,t);U.scale(tt,U)}}}this.dispatchEvent($A),c&&(u=dn.now());const y=this.stepnumber%(this.quatNormalizeSkip+1)===0,S=this.quatNormalizeFast;for(x=0;x!==o;x++)r[x].integrate(t,y,S);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=dn.now()-u),this.stepnumber+=1,this.dispatchEvent(XA);let B=!0;if(this.allowSleep)for(B=!1,x=0;x!==o;x++){const D=r[x];D.sleepTick(this.time),D.sleepState!==St.SLEEPING&&(B=!0)}this.hasActiveBodies=B}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(vs,xs),t){for(let o=0,r=vs.length;o<r;o+=2)ya.bodyA=this.getBodyById(vs[o]),ya.bodyB=this.getBodyById(vs[o+1]),this.dispatchEvent(ya);ya.bodyA=ya.bodyB=null}if(e){for(let o=0,r=xs.length;o<r;o+=2)Ma.bodyA=this.getBodyById(xs[o]),Ma.bodyB=this.getBodyById(xs[o+1]),this.dispatchEvent(Ma);Ma.bodyA=Ma.bodyB=null}vs.length=xs.length=0;const n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(vs,xs),n){for(let o=0,r=vs.length;o<r;o+=2){const a=this.getShapeById(vs[o]),l=this.getShapeById(vs[o+1]);_s.shapeA=a,_s.shapeB=l,a&&(_s.bodyA=a.body),l&&(_s.bodyB=l.body),this.dispatchEvent(_s)}_s.bodyA=_s.bodyB=_s.shapeA=_s.shapeB=null}if(s){for(let o=0,r=xs.length;o<r;o+=2){const a=this.getShapeById(xs[o]),l=this.getShapeById(xs[o+1]);ys.shapeA=a,ys.shapeB=l,a&&(ys.bodyA=a.body),l&&(ys.bodyB=l.body),this.dispatchEvent(ys)}ys.bodyA=ys.bodyB=ys.shapeA=ys.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const s=t[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}}new di;const Nu=new cn,dn=globalThis.performance||{};if(!dn.now){let i=Date.now();dn.timing&&dn.timing.navigationStart&&(i=dn.timing.navigationStart),dn.now=()=>Date.now()-i}new w;const XA={type:"postStep"},$A={type:"preStep"},_a={type:St.COLLIDE_EVENT_NAME,body:null,contact:null},jA=[],YA=[],KA=[],ZA=[],vs=[],xs=[],ya={type:"beginContact",bodyA:null,bodyB:null},Ma={type:"endContact",bodyA:null,bodyB:null},_s={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ys={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Zv={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ia{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const JA=new Gf(-1,1,1,-1,0,1);class QA extends Qe{constructor(){super(),this.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Se([0,2,0,0,2,0],2))}}const tC=new QA;class Eh{constructor(t){this._mesh=new Xe(tC,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,JA)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Jv extends ia{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof An?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=tl.clone(t.uniforms),this.material=new An({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Eh(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Lm extends ia{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class eC extends ia{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class nC{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new rt);this._width=n.width,this._height=n.height,e=new ci(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jv(Zv),this.copyPass.material.blending=Rs,this.clock=new zv}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Lm!==void 0&&(r instanceof Lm?n=!0:r instanceof eC&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new rt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const iC={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new rt(1/1024,1/512)}},vertexShader:`

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
	`},sC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ut(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class qr extends ia{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new rt(t.x,t.y):new rt(256,256),this.clearColor=new ut(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new ci(o,r,{type:Gi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new ci(o,r,{type:Gi});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new ci(o,r,{type:Gi});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),o=Math.round(o/2),r=Math.round(r/2)}const a=sC;this.highPassUniforms=tl.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new An({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new rt(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Zv;this.copyUniforms=tl.clone(h.uniforms),this.blendMaterial=new An({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ja,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ut,this.oldClearAlpha=1,this.basic=new ui,this.fsQuad=new Eh(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new rt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=qr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=qr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new An({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new rt(.5,.5)},direction:{value:new rt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new An({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}qr.BlurDirectionX=new rt(1,0);qr.BlurDirectionY=new rt(0,1);const oC={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class rC extends ia{constructor(){super();const t=oC;this.uniforms=tl.clone(t.uniforms),this.material=new RE({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Eh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ce.getTransfer(this._outputColorSpace)===Be&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Yg?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Kg?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Zg?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Jg?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Qg?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===pl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const aC=["common","ground.frag","grass.vert","grass.frag","leaves.vert","leaves.frag","water.vert","water.frag","post.vert","scenepost.frag","wind.vert","wind.frag"],Yd=[`#define WORLD_HALF ${Hn.toFixed(1)}`,`#define WORLD_SIZE ${Oi.toFixed(1)}`,`#define WATER_Y ${Ds.toFixed(2)}`,`#define MAX_LAMPS ${bh}`,""].join(`
`),Zs={};await Promise.all(aC.map(async i=>{Zs[i]=await na(`shaders/${i}.glsl`)}));function Im(i=""){const t=i.indexOf("//#main");return t<0?{head:i,main:""}:{head:i.slice(0,t),main:i.slice(t+7)}}const Nm=i=>Yd+Zs[i],bi=new qf({antialias:!1,powerPreference:"high-performance"});let Vi=Math.min(devicePixelRatio,1.5);bi.setPixelRatio(Vi);bi.setSize(innerWidth,innerHeight);bi.shadowMap.enabled=!0;bi.shadowMap.type=jg;bi.toneMapping=pl;$("app").appendChild(bi.domElement);const Jt=new $f;Jt.background=new ut;Jt.fog=new Xf(0,45,115);const Ie=new En(38,innerWidth/innerHeight,.5,400),as=1;Ie.layers.enable(as);class lC extends ia{constructor(){super(),this.target=new ci(1,1,{type:Gi,samples:4}),this.uniforms={tDiffuse:{value:this.target.texture},uRes:{value:new rt(1,1)},uAmount:{value:0}},this.quad=new Eh(new An({uniforms:this.uniforms,vertexShader:Zs["post.vert"],fragmentShader:Zs["scenepost.frag"],depthTest:!1,depthWrite:!1})),this.tilt=!0}setSize(t,e){this.target.setSize(t,e),this.uniforms.uRes.value.set(t,e)}setSamples(t){this.target.samples!==t&&(this.target.samples=t,this.target.dispose())}render(t,e){t.setRenderTarget(this.target),t.clear(),t.render(Jt,Ie),this.uniforms.uAmount.value=this.tilt?8.8*Vi:0,t.setRenderTarget(this.renderToScreen?null:e),this.quad.render(t)}}const ko=new nC(bi,new ci(1,1,{type:Gi})),lp=new lC,Ps=new qr(new rt(innerWidth,innerHeight),.7,.5,.95),cp=new Jv(iC);ko.addPass(lp);ko.addPass(Ps);ko.addPass(new rC);ko.addPass(cp);let Kd=1;const cC=Ps.setSize.bind(Ps);Ps.setSize=(i,t)=>cC(Math.max(1,Math.round(i*Kd)),Math.max(1,Math.round(t*Kd)));function Th(){bi.setPixelRatio(Vi),bi.setSize(innerWidth,innerHeight),ko.setPixelRatio(Vi),ko.setSize(innerWidth,innerHeight),cp.material.uniforms.resolution.value.set(1/(innerWidth*Vi),1/(innerHeight*Vi))}const Dm={high:{pr:()=>Math.min(devicePixelRatio,1.5),samples:4,bloomScale:1,shadow:2048},mid:{pr:()=>1,samples:0,bloomScale:.35,shadow:1024},low:{pr:()=>.8,samples:0,bloomScale:.35,shadow:1024}};let Zd=!1;function hC(i){Zd=i==="auto";const t=Dm[Zd?"mid":i]||Dm.high;Vi=t.pr(),Kd=t.bloomScale,lp.setSamples(t.samples),cp.enabled=t.samples===0,nn.shadow.mapSize.x!==t.shadow&&(nn.shadow.mapSize.setScalar(t.shadow),nn.shadow.map?.dispose(),nn.shadow.map=null),Th()}Th();const Jd=i=>{lp.tilt=i},uC=()=>Vi;let Du=0,Um=performance.now();function dC(){if(!Zd)return;Du++;const i=performance.now(),t=(i-Um)/1e3;if(t<1.5)return;const e=Du/t;Du=0,Um=i;let n=Vi;e<48?n=Math.max(.7,n-(e<35?.15:.08)):e>57&&(n=Math.min(Math.min(devicePixelRatio,1.25),n+.05)),Math.abs(n-Vi)>.01&&(Vi=n,Th())}addEventListener("resize",()=>{Ie.aspect=innerWidth/innerHeight,Ie.updateProjectionMatrix(),Th()});const Fc=new tp(16777215,4473924,1);Jt.add(Fc);const nn=new np(16777215,1.5);nn.castShadow=!0;nn.shadow.mapSize.set(2048,2048);Object.assign(nn.shadow.camera,{left:-38,right:38,top:38,bottom:-38,near:1,far:160});nn.shadow.bias=-4e-4;nn.shadow.normalBias=.05;nn.shadow.camera.layers.enable(1);Jt.add(nn,nn.target);const Te={uTime:{value:0},uMask:{value:null},uGround:{value:new ut},uPaved:{value:new ut},uAsphalt:{value:new ut},uGrassA:{value:new ut},uGrassB:{value:new ut},uShadowTint:{value:new ut},uLeafTint:{value:new ut},uLamps:{value:Array.from({length:bh},()=>new R(9999,0,9999))},uLampI:{value:0},uLampColor:{value:new ut(1,.55,.2)},uCarPos:{value:new R},uPlayerPos:{value:new R(9999,-99,9999)},uCarDir:{value:new rt(0,-1)},uHeadI:{value:0},uWindDir:{value:new rt(1,.35).normalize()},uGrassH:{value:1},uLeafScale:{value:1},uLeafMix:{value:0},uLeafMixColor:{value:new ut(1,1,1)}};function hp(i,t){const e=Im(Zs[`${t}.vert`]),n=Im(Zs[`${t}.frag`]);return i.customProgramCacheKey=()=>"paint-"+t,i.userData.painted=!0,i.onBeforeCompile=s=>{Object.assign(s.uniforms,Te),s.vertexShader=[Yd,Zs.common,e.head,""].join(`
`)+s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+e.main).replace("#include <fog_vertex>",`#include <fog_vertex>
 vW = (modelMatrix * vec4(transformed, 1.)).xyz;`),s.fragmentShader=[Yd,Zs.common,n.head,""].join(`
`)+s.fragmentShader.replace("#include <shadowmap_pars_fragment>",`#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>`).replace("#include <opaque_fragment>",n.main+`
#include <opaque_fragment>`)},i}const Qv=(i,t,e)=>new An({vertexShader:Nm(i),fragmentShader:Nm(t),...e}),Je=new qA({gravity:new w(0,-9.82*1.3,0)});Je.broadphase=new wr(Je);Je.allowSleep=!0;Je.defaultContactMaterial.friction=.35;Je.defaultContactMaterial.restitution=.12;const bs=[];function Xr(i,t){Je.addBody(t);const e={mesh:i,body:t,home:{p:t.position.clone(),q:t.quaternion.clone()}};return bs.push(e),e}function _n(i,t,e,n,s=0,o){const r=new St({mass:0});return r.addShape(i),r.position.set(t,e,n),o?r.quaternion.copy(o):r.quaternion.setFromEuler(0,s,0),Je.addBody(r),r}function Qd(i){for(const t of i)t.body.position.copy(t.home.p),t.body.quaternion.copy(t.home.q),t.body.velocity.setZero(),t.body.angularVelocity.setZero(),t.body.wakeUp()}const O=(i,t={})=>new uo({color:i,flatShading:!0,...t}),tx=[];function hi(i,t,e){const n=new ui({color:new ut(i)});return tx.push({m:n,base:new ut(i),dayI:t,nightI:e}),n}function N(i,t,e,n=0,s=0,o=0,r=!0){const a=new Xe(i,t);return a.position.set(n,s,o),a.castShadow=r,a.receiveShadow=!0,(e||Jt).add(a),a}function fi(i,t,e,n=0){const s=new ge;return s.position.set(i,t,e),s.rotation.y=n,Jt.add(s),s}const Na=new Map;function je(i,t){return Na.has(i)||Na.set(i,new Set),Na.get(i).add(t),()=>Na.get(i).delete(t)}function Ye(i,t){const e=Na.get(i);if(!e)return 0;for(const n of[...e])n(t);return e.size}const Qc=[];function fC(i){for(const t of i){if(!t||!t.id)throw new Error("feature without an id");if(Qc.some(e=>e.id===t.id))throw new Error(`feature '${t.id}' registered twice`);Qc.push(t)}}async function pC(i){for(const t of Qc)t.build&&await t.build(i)}function mC(i,t){for(const e of Qc)e.update&&e.update(i,t)}function ex(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new Qe;let c=0;for(let h=0;h<i.length;++h){const d=i[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let u=0;u<i.length;++u){const f=i[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(const h in o){const d=Fm(o[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in r){const d=r[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let v=0;v<r[h].length;++v)f.push(r[h][v][u]);const p=Fm(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function Fm(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new en(r,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<e;p++){const v=h.getComponent(u,p);a.setComponent(u+d,p,v)}}else r.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const gC=new me,vC=new me,Uu=new R;function nx(i,t,e,n){const s=i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();s.applyMatrix4(vC.multiplyMatrices(gC.copy(t.matrixWorld).invert(),i.matrixWorld));for(const o of Object.keys(s.attributes))o!=="position"&&o!=="normal"&&!(e&&o==="uv")&&s.deleteAttribute(o);if(s.morphAttributes={},s.clearGroups(),n){const o=s.attributes.position.count,r=new Float32Array(o*3);for(let a=0;a<o;a++)n.toArray(r,a*3);s.setAttribute("color",new en(r,3))}return s}function ix(i,t,e,n){const s=new Xe(ex(t),e);s.castShadow=n.some(o=>o.castShadow),s.receiveShadow=n.some(o=>o.receiveShadow),i.add(s);for(const o of n)o.removeFromParent();return s}function Ah(i,t,e){i.updateMatrixWorld(!0);const n=new Map;for(const o of t){const r=o.material.uuid+(e?"|"+e(o):"");n.has(r)||n.set(r,[]),n.get(r).push(o)}let s=0;for(const o of n.values()){if(o.length<2)continue;const r=o[0].material;ix(i,o.map(a=>nx(a,i,!!r.map)),r,o),s+=o.length-1}return s}const up=i=>i.children.filter(t=>t.isMesh&&!t.isInstancedMesh);function sx(i,t){const e=new Set(t),n=O("#ffffff",{vertexColors:!0});i.updateMatrixWorld(!0);const s=[];for(const o of t){const r=[],a=c=>{for(const h of c.children)e.has(h)||(h.isMesh&&r.push(h),a(h))};a(o);const l=r.map(c=>nx(c,o,!1,c.material.map?new ut("#f29a86"):c.material.color));s.push({node:o,list:r,geos:l})}for(const{node:o,list:r,geos:a}of s){for(const l of[...o.children])e.has(l)||l.removeFromParent();a.length&&ix(o,a,n,r)}}function xC(i,t){const e=new Set;for(const s of t)s.traverse(o=>e.add(o));const n=[];return i.traverse(s=>{if(!s.isMesh||s.isInstancedMesh||e.has(s))return;const o=s.material;Array.isArray(o)||o.userData.painted||!(o.isMeshLambertMaterial||o.isMeshBasicMaterial||o.isMeshStandardMaterial)||Object.keys(s.geometry.attributes).some(r=>r!=="position"&&r!=="normal"&&r!=="uv")||n.push(s)}),i.updateMatrixWorld(!0),Ah(i,n,s=>(s.getWorldPosition(Uu),Math.floor(Uu.x/30)+","+Math.floor(Uu.z/30)))}const Om=i=>{try{return JSON.parse(localStorage.getItem(i))}catch{return null}},zm=(i,t)=>{try{localStorage.setItem(i,JSON.stringify(t))}catch{}},Bm=8e3;function _C(i){const t=!!i.databaseURL,e=`fb.${i.projectId||"db"}.auth`;let n=Om(e),s=!i.apiKey,o=Om("fb.deviceId");o||(o="dev_"+Math.random().toString(36).slice(2,12)+Date.now().toString(36),zm("fb.deviceId",o));async function r(c,h,d){const u=await fetch(c,{method:"POST",signal:AbortSignal.timeout(Bm),headers:{"Content-Type":d?"application/x-www-form-urlencoded":"application/json"},body:d?new URLSearchParams(h):JSON.stringify(h)}),f=await u.json().catch(()=>({}));if(!u.ok){const p=new Error(f.error?.message||`HTTP ${u.status}`);throw p.status=u.status,p}return f}async function a(){if(s)return null;if(n&&n.exp>Date.now()+6e4)return n.idToken;try{if(n?.refreshToken){const c=await r(`https://securetoken.googleapis.com/v1/token?key=${i.apiKey}`,{grant_type:"refresh_token",refresh_token:n.refreshToken},!0);n={uid:c.user_id,idToken:c.id_token,refreshToken:c.refresh_token,exp:Date.now()+c.expires_in*1e3}}else{const c=await r(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${i.apiKey}`,{returnSecureToken:!0});n={uid:c.localId,idToken:c.idToken,refreshToken:c.refreshToken,exp:Date.now()+c.expiresIn*1e3}}return zm(e,n),n.idToken}catch(c){throw(c.status===400||c.status===403)&&(console.warn(`firebase: anonymous sign-in unavailable (${c.message}), using unauthenticated access`),s=!0),c}}async function l(c,h,d,{keepalive:u=!1}={}){if(!t)throw new Error("firebase not configured");let f=null;try{f=await a()}catch(v){if(!s)throw v}const p=await fetch(`${i.databaseURL}/${h}.json${f?`?auth=${f}`:""}`,{method:c,keepalive:u,signal:u?void 0:AbortSignal.timeout(Bm),body:d===void 0?void 0:JSON.stringify(d)});if(!p.ok)throw new Error(`firebase ${c} ${h}: HTTP ${p.status} ${(await p.text()).slice(0,120)}`);return p.json()}return{enabled:t,async id(){try{await a()}catch{}return!s&&n?n.uid:o},get signedIn(){return!s&&!!n},get:c=>l("GET",c),set:(c,h,d)=>l("PUT",c,h,d),update:(c,h,d)=>l("PATCH",c,h,d),remove:c=>l("DELETE",c)}}const yC=1,MC=["auto","slot1","slot2","slot3"],wC={auto:"Simpanan tidur",reload:"Muat ulang (dev)"},Ml=i=>wC[i]||"Slot "+i.slice(4),sl=new Map;function Yo(i,t){sl.has(i)&&console.warn(`save: slice '${i}' registered twice, the newer one wins (hot reload?)`),sl.set(i,{version:1,...t})}const Us={playTime:0,slot:null};function SC(){const i={},t=[];for(const[n,s]of sl){const o=s.save();i[n]={v:s.version,d:o};const r=s.summary&&s.summary(o);r&&t.push(r)}return{meta:{version:yC,savedAt:Date.now(),playTime:Math.round(Us.playTime),summary:t.join(" · ")},data:i}}function bC(i){for(const[t,e]of sl){const n=i[t];try{if(!n){e.reset();continue}let s=n.d;if(n.v!==e.version){if(!e.migrate){console.warn(`save: '${t}' v${n.v} -> v${e.version} without migrate(), using defaults`),e.reset();continue}s=e.migrate(s,n.v)}e.load(s)}catch(s){console.error(`save: slice '${t}' failed to load, reset instead`,s),e.reset()}}}function EC(){for(const i of sl.values())i.reset();Us.playTime=0,Us.slot=null,Ye("save:applied",{slot:null})}const ss=_C(WE),km=i=>`tester.save.${i}`,th={read(i){try{return JSON.parse(localStorage.getItem(km(i)))}catch{return null}},write(i,t){try{return localStorage.setItem(km(i),JSON.stringify(t)),!0}catch{return!1}}},Ls={get enabled(){return ss.enabled},get signedIn(){return ss.signedIn},online:null},dp=async()=>`${qE}/${await ss.id()}`;async function fp(){let i={};if(ss.enabled)try{i=await ss.get(`${await dp()}/meta`)||{},Ls.online=!0}catch(t){console.warn("save: cloud list failed",t.message),Ls.online=!1}return MC.map(t=>{const e=th.read(t)?.meta,n=i[t];return n&&(!e||n.savedAt>=e.savedAt)?{slot:t,meta:n,where:"cloud"}:{slot:t,meta:e||null,where:e?"local":null}})}async function TC(){return(await fp()).filter(t=>t.meta).sort((t,e)=>e.meta.savedAt-t.meta.savedAt)[0]||null}async function pp(i,{keepalive:t=!1,localOnly:e=!1}={}){const n=SC();let o=th.write(i,n)?"local":null;if(ss.enabled&&!e)try{await ss.update(await dp(),{[`meta/${i}`]:n.meta,[`slots/${i}`]:JSON.stringify(n.data)},{keepalive:t}),o="cloud",Ls.online=!0}catch(r){console.warn("save: cloud save failed, kept locally",r.message),Ls.online=!1}return o&&(e||(Us.slot=i),Ye("save:saved",{slot:i,where:o,meta:n.meta})),o}async function ox(i){const t=th.read(i);let e=null,n=null;if(ss.enabled)try{const s=await dp(),o=await ss.get(`${s}/meta/${i}`);if(o&&(!t||o.savedAt>=t.meta.savedAt)){const r=await ss.get(`${s}/slots/${i}`);r&&(e={meta:o,data:JSON.parse(r)},n="cloud",th.write(i,e))}Ls.online=!0}catch(s){console.warn("save: cloud load failed, using the local copy",s.message),Ls.online=!1}return!e&&t&&(e=t,n="local"),e?(bC(e.data),Us.playTime=e.meta.playTime||0,Us.slot=i,Ye("save:applied",{slot:i,meta:e.meta}),n):null}function AC(i,t){t&&(Us.playTime+=i)}const mp=await na("data/palettes.json","json"),rx=i=>Object.fromEntries(Object.entries(i).map(([t,e])=>[t,typeof e=="string"?new ut(e):e])),CC=Object.fromEntries(Object.entries(mp.palettes).map(([i,t])=>[i,rx(t)])),pc=mp.keys.map(([i,t])=>[i,CC[t]]),wa=rx(Object.fromEntries(Object.entries(mp.palettes.night).map(([i,t])=>[i,typeof t=="string"?"#000":0])));function RC(i){let t=0;for(;t<pc.length-2&&i>=pc[t+1][0];)t++;const[e,n]=pc[t],[s,o]=pc[t+1],r=ke(0,1,(i-e)/(s-e));for(const a in wa)wa[a]instanceof ut?wa[a].lerpColors(n[a],o[a],r):wa[a]=Ue(n[a],o[a],r);return wa}function ax(i){return i<4.5||i>=20.4?"Malam":i<6?"Subuh":i<7.5?"Fajar":i<11?"Pagi":i<15?"Siang":i<17.3?"Sore":i<18.6?"Matahari terbenam":"Senja"}const Zt={real:!0,hour:12,speed:60,day:0},PC=i=>String(Math.floor(i)).padStart(2,"0")+":"+String(Math.floor(i*60)%60).padStart(2,"0");Yo("time",{version:2,migrate:i=>({...i,day:0}),save:()=>({hour:+Zt.hour.toFixed(3),real:Zt.real,speed:Zt.speed,day:Zt.day}),load(i){Zt.real=!!i.real,Zt.hour=i.hour??12,Zt.speed=i.speed??60,Zt.day=i.day??0},reset(){Zt.real=!0,Zt.speed=60,Zt.day=0},summary:i=>`${PC(i.hour)} ${ax(i.hour)}`});function gp(i){Zt.real&&(Zt.real=!1,Zt.hour=vp());const t=Zt.hour+i;Zt.day+=Math.floor(t/24),Zt.hour=t%24,Ye("time:skipped",{hours:i})}const vp=()=>{const i=new Date;return i.getHours()+i.getMinutes()/60+i.getSeconds()/3600};function LC(i){if(Zt.real){const t=vp();t<Zt.hour-12&&Zt.day++,Zt.hour=t}else{const t=Zt.hour+i*Zt.speed/3600;t>=24&&Zt.day++,Zt.hour=t%24}return Zt.hour}const Ho={fwd:0,back:0,left:0,right:0,brake:0,boost:0},ol={KeyW:"fwd",ArrowUp:"fwd",KeyS:"back",ArrowDown:"back",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"brake",ShiftLeft:"boost",ShiftRight:"boost"},fo=()=>{for(const i in Ho)Ho[i]=0},Da=new Map;function IC(i,t){return Da.has(i)||Da.set(i,new Set),Da.get(i).add(t),()=>Da.get(i).delete(t)}function NC(i){const t=Da.get(i);if(t)for(const e of t)e()}const re=await na("data/survival.json","json");re.conditions.push(...re.envConditions||[]);const Ts=re.base,Wi=Object.keys(re.needs),rl=[...Wi,"health","stamina"],Wt=Object.fromEntries(rl.map(i=>[i,100])),Uo={name:re.profile.name,title:re.profile.title,attributes:{...re.profile.attributes}},Dn=new Map,xe={fullHealth:100,fullStamina:100,maxHealth:100,maxStamina:100,healthRegen:0,staminaRegen:0,healthRate:0,speed:1,noRun:!1,rates:Object.fromEntries(Wi.map(i=>[i,0]))},Cn=[],Ys=i=>(Uo.attributes[i]??5)-5,DC=["healthMax","staminaMax","healthRegen","staminaRegen","speed","health","noRun",...Wi],Ki={},tf={};function lx(i,t){tf[i]=!!t}let xp=!1;const UC=i=>Object.entries(i.above||{}).every(([t,e])=>Wt[t]>=e)&&Object.entries(i.below||{}).every(([t,e])=>Wt[t]<e)&&(!i.env||!xp&&tf[i.env])&&!(i.notEnv&&tf[i.notEnv])&&!(i.unless||[]).some(t=>Dn.has(t));let Lr=0,al=-9,Ch=!1,ll=!1,Ga=new Set;function sa(){for(const t of DC)Ki[t]=0;Cn.length=0;const i=new Set(re.conditions.filter(UC).map(t=>t.id));for(const t of re.conditions)i.has(t.id)&&!i.has(t.hideIf)&&Cn.push({id:t.id,def:t});for(const[t,e]of Dn)Cn.push({id:t,def:re.effects[t],left:e.left,total:e.total});for(const t of Cn)for(const e in t.def.mods)Ki[e]+=t.def.mods[e]}function oa(i){const t=xe,e=Ue(re.energyMinCap,1,Ge(Wt.energy/re.energyFullAt,0,1));t.fullHealth=Ts.health*(1+Ys("vitalitas")*.06),t.fullStamina=Ts.stamina*(1+Ys("ketahanan")*.06),t.maxHealth=t.fullHealth*Math.max(.2,1+Ki.healthMax),t.maxStamina=t.fullStamina*Math.max(.2,1+Ki.staminaMax)*e,t.staminaRegen=Ts.staminaRegen*(1+Ys("ketahanan")*.05)*Math.max(0,1+Ki.staminaRegen);const n=Object.entries(re.healthRegenNeeds).every(([o,r])=>Wt[o]>=r);t.healthRegen=n?Ts.healthRegen*(1+Ys("vitalitas")*.08)*Math.max(0,1+Ki.healthRegen)*(i?2:1):0,t.healthRate=t.healthRegen+Ki.health,t.speed=Math.max(.4,1+Ki.speed),t.noRun=Ki.noRun>0;const s=1-Ys("metabolisme")*.05;for(const o of Wi){const r=re.needs[o];if(i&&r.sleep){t.rates[o]=r.sleep;continue}t.rates[o]=-r.drain*s*Math.max(0,1+Ki[o])*(i?r.sleepMul??1:Ch?r.runMul:1)}}function cx(i,t){Lr+=i,xp=t,Ch=!t&&Lr-al<.35;for(const[e,n]of Dn)(n.left-=i)<=0&&Dn.delete(e);sa(),oa(t);for(const e of Wi)Wt[e]=Ge(Wt[e]+xe.rates[e]*i,0,100);Lr-al>Ts.staminaDelay&&(Wt.stamina+=xe.staminaRegen*i),Wt.stamina=Ge(Wt.stamina,0,xe.maxStamina),Wt.health=Ge(Wt.health+xe.healthRate*i,0,xe.maxHealth)}function Rh(){const i=new Set(Cn.map(t=>t.id));for(const t of Cn)Ga.has(t.id)||Ye("stats:effect",{id:t.id,on:!0,def:t.def});for(const t of Ga)i.has(t)||Ye("stats:effect",{id:t,on:!1,def:re.effects[t]||re.conditions.find(e=>e.id===t)});Ga=i,Wt.health<=0&&!ll&&(ll=!0,Ye("stats:depleted",{meter:"health"}))}function wl(){sa(),oa(!1),Wt.health=Math.min(Wt.health,xe.maxHealth),Wt.stamina=Math.min(Wt.stamina,xe.maxStamina),Rh()}function FC(i,t){t&&(cx(i,!1),Rh())}const OC=()=>!xe.noRun&&Wt.stamina>(Ch?0:Ts.runMin),zC=()=>xe.speed;function hx(i){Wt.stamina=Math.max(0,Wt.stamina-i),al=Lr,Wt.stamina<=0&&!Dn.has("ngos")&&ra("ngos")}const BC=i=>hx(Ts.runCost*(1-Ys("ketahanan")*.05)*i);function kC(){return Wt.stamina<Ts.jumpCost*.5?!1:(hx(Ts.jumpCost),!0)}function ra(i,{duration:t}={}){const e=re.effects[i];if(!e)return console.warn(`stats: unknown effect '${i}'`),!1;if([...Dn.keys()].some(o=>(re.effects[o].blocks||[]).includes(i)))return!1;let n=t??e.duration;e.immunity&&(n*=1-Ys("imunitas")*.06);const s=Dn.get(i);return s?(s.left=Math.max(s.left,n),s.total=Math.max(s.total,s.left)):Dn.set(i,{left:n,total:n}),wl(),!0}const Oc=i=>Dn.has(i)||Cn.some(t=>t.id===i);function HC(i){Dn.delete(i)&&wl()}function ux(i){const t=[...Dn.keys()].filter(e=>(re.effects[e].cure||[]).includes(i));for(const e of t)Dn.delete(e);return t.length&&wl(),t}function dx(i){const t={},e=[],n=[];for(const o of i.cure||[])n.push(...ux(o));const s=(o,r)=>{if(!r)return;const a=Wt[o];Wt[o]=Ge(a+r,0,o==="health"?xe.maxHealth:o==="stamina"?xe.maxStamina:100),t[o]=(t[o]||0)+Wt[o]-a};for(const o of rl)o!=="bladder"&&s(o,i[o]);s("bladder",(i.bladder||0)-Math.max(0,i.thirst||0)*re.bladderPerThirst-Math.max(0,i.hunger||0)*re.bladderPerHunger);for(const{id:o,chance:r=1}of i.effects||[]){const a=re.effects[o],l=a&&a.immunity?r*(1-Ys("imunitas")*.08):r;Math.random()<l&&ra(o)&&e.push(o)}return wl(),{delta:t,added:e,cured:n}}function Ao(i,t){Wt[i]=Ge(t,0,i==="health"?xe.maxHealth:i==="stamina"?xe.maxStamina:100),wl()}function VC(i){const t=re.secondsPerGameHour,e={...Wt};let n=0;for(;n<i*t&&(cx(1,!0),n+=1,!(Wt.health<re.wakeHealth&&xe.healthRate<0)););const s=n/t;return Ch=!1,al=Lr-9,xp=!1,Wt.stamina=xe.maxStamina,s>=6&&Wt.health>=re.wakeHealth&&ra("bugar"),sa(),oa(!1),Rh(),{hours:s,woke:s<i?"hurt":"rested",energy:Wt.energy-e.energy}}function GC(){Dn.clear();for(const i of Wi)Wt[i]=Math.max(Wt[i],30);sa(),oa(!1),Wt.health=xe.maxHealth*.35,Wt.stamina=xe.maxStamina*.5,ll=!1,Rh()}function ef(){for(const i of rl)Wt[i]=100;Dn.clear(),Object.assign(Uo.attributes,re.profile.attributes),ll=!1,al=Lr-9,sa(),oa(!1),Ga=new Set(Cn.map(i=>i.id))}const Fu=i=>Math.round(i*10)/10;Yo("stats",{save:()=>({m:Object.fromEntries(rl.map(i=>[i,Fu(Wt[i])])),fx:[...Dn].map(([i,t])=>[i,Fu(t.left),Fu(t.total)]),p:{...Uo.attributes}}),load(i){ef();for(const t of rl)typeof i.m?.[t]=="number"&&(Wt[t]=i.m[t]);for(const[t,e,n]of i.fx||[])re.effects[t]&&Dn.set(t,{left:e,total:n||e});Object.assign(Uo.attributes,i.p||{}),sa(),oa(!1),Ga=new Set(Cn.map(t=>t.id)),ll=!1},reset:ef,summary:i=>i.m&&i.m.health<99.5?`❤ ${Math.round(i.m.health)}`:""});ef();const He=await na("data/calendar.json","json"),zc=He.daysPerSeason,nf=He.seasons.length;function WC(i){let t=Math.imul(i+1^1540483477,668265261)>>>0;return t^=t>>>15,t=Math.imul(t,2246822507)>>>0,t^=t>>>13,t/4294967296}function qC(i){const t=He.seasons[Math.floor(i/zc)%nf],e=Object.entries(t.weather||{cerah:1}),n=e.reduce((r,[,a])=>r+a,0);let s=WC(i)*n,o=e[0][0];for(const[r,a]of e)if((s-=a)<0){o=r;break}return{id:o,...He.weathers[o]}}let Bc=null;function fx(i){Bc=i&&He.weathers[i]?{day:Zt.day,weather:{id:i,...He.weathers[i]}}:null}function eh(i){const t=Math.max(0,Math.floor(i)),e=Math.floor(t/zc)%nf,n=Bc&&Bc.day===t?Bc.weather:qC(t);return{index:t,day:t%zc+1,season:He.seasons[e],seasonIndex:e,year:Math.floor(t/(zc*nf))+1,weekday:He.weekdays[t%7],weather:n}}const Vn=()=>eh(Zt.day),px=(i,t)=>He.events.filter(e=>e.season===i&&e.day===t),aa=i=>`${i.season.short} ${i.day} · Thn ${i.year}`;function sf(i){Zt.day=Math.max(0,Math.floor(i))}let of=-1,mx=-1;const rf=()=>{of=Zt.day,mx=Vn().seasonIndex};je("save:applied",rf);function XC(){if(Zt.day===of)return;if(of<0){rf();return}const i=Vn(),t=i.seasonIndex!==mx;rf(),Ye("calendar:day",i),t&&Ye("calendar:season",i)}const $r=[];function Ks(i){return $r.push(i),i}function Ph(i){const t=$r.indexOf(i);t>=0&&$r.splice(t,1)}const Hm=3.2;function $C(i,t,e){let n=null,s=Hm;for(const o of $r){o.dia&&(o.dia.rotation.y=i*1.5,o.dia.position.y=1.4+Math.sin(i*2.5)*.1);const r=Math.hypot(t.x-o.pos.x,t.z-o.pos.z);r<s&&r<(o.range||Hm)&&(s=r,n=o)}e&&(!n||s>1.6)&&(n=e);for(const o of $r)o.ring&&(o.ring.material.opacity+=((o===n?.95:.3)-o.ring.material.opacity)*.15);return n}const[gx,vx,xx]=GE,_p=Math.hypot(gx,vx,xx),Sr={yaw:Math.atan2(gx,xx),pitch:Math.asin(vx/_p),zoom:1},jC=.12,YC=1.45,KC=.45,ZC=2,Vm=2.2,Gm=1.2,Wm=Math.PI/4,qm=1.25,Xm={near:Jt.fog.near,far:Jt.fog.far},JC=nn.shadow.camera.right,Bn={...Sr,scale:.48};let _x=Bn.scale;const QC=i=>{_x=i},Un={...Sr};function Lh(i,t,e){Un.yaw=i,Un.pitch=Ge(t,jC,YC),Un.zoom=Ge(e,KC,ZC)}const mc=i=>Lh(Un.yaw+i,Un.pitch,Un.zoom),br=i=>Lh(Un.yaw,Un.pitch,Un.zoom*i);function yp(){Lh(Math.round((Un.yaw-Sr.yaw)/(Math.PI*2))*Math.PI*2+Sr.yaw,Sr.pitch,Sr.zoom)}function yx(i){return i.setFromSphericalCoords(_p*Bn.zoom*Bn.scale,Math.PI/2-Bn.pitch,Bn.yaw)}const jr=new Set,Mx={left:{rate:i=>mc(-Vm*i),step:()=>mc(-Wm)},right:{rate:i=>mc(Vm*i),step:()=>mc(Wm)},in:{rate:i=>br(Math.exp(-Gm*i)),step:()=>br(1/qm)},out:{rate:i=>br(Math.exp(Gm*i)),step:()=>br(qm)}};function tR(i){for(const a of jr)Mx[a].rate(i);const t=1-Math.exp(-i*12);Bn.yaw+=(Un.yaw-Bn.yaw)*t,Bn.pitch+=(Un.pitch-Bn.pitch)*t,Bn.zoom+=(Un.zoom-Bn.zoom)*t,Bn.scale+=(_x-Bn.scale)*(1-Math.exp(-i*2.5));const e=Bn.zoom*Bn.scale,n=_p*(e-1);Jt.fog.near=Xm.near+Math.max(n,0),Jt.fog.far=Xm.far+Math.max(n,0);const s=Jt.fog.far+5;Math.abs(Ie.far-s)>2&&(Ie.far=s,Ie.updateProjectionMatrix());const o=JC*Math.max(e,.6),r=nn.shadow.camera;Math.abs(r.right-o)>.5&&(Object.assign(r,{left:-o,right:o,top:o,bottom:-o}),r.updateProjectionMatrix())}const os=bi.domElement,Is=new Map;let Wa=0;const wx=()=>{const[i,t]=[...Is.values()];return Math.hypot(i.x-t.x,i.y-t.y)};os.addEventListener("pointerdown",i=>{i.pointerType==="mouse"&&i.button!==0&&i.button!==2||(os.setPointerCapture(i.pointerId),Is.set(i.pointerId,{x:i.clientX,y:i.clientY}),Is.size===2&&(Wa=wx()),os.classList.add("dragging"))});os.addEventListener("pointermove",i=>{const t=Is.get(i.pointerId);if(t&&(Is.size===1&&Lh(Un.yaw-(i.clientX-t.x)*.006,Un.pitch+(i.clientY-t.y)*.004,Un.zoom),t.x=i.clientX,t.y=i.clientY,Is.size===2)){const e=wx();Wa>0&&e>0&&br(Wa/e),Wa=e}});const Sx=i=>{Is.delete(i.pointerId),Is.size<2&&(Wa=0),Is.size||os.classList.remove("dragging")};os.addEventListener("pointerup",Sx);os.addEventListener("pointercancel",Sx);os.addEventListener("contextmenu",i=>i.preventDefault());os.addEventListener("dblclick",yp);os.addEventListener("wheel",i=>{i.preventDefault(),br(Math.exp(Ge(i.deltaY,-200,200)*.0012))},{passive:!1});document.querySelectorAll("#camPad button").forEach(i=>{const t=i.dataset.cam;if(t==="reset"){i.onclick=yp;return}let e=0,n=0;const s=o=>{e&&(clearTimeout(n),jr.delete(t),i.classList.remove("on"),o&&performance.now()-e<250&&Mx[t].step(),e=0)};i.addEventListener("pointerdown",o=>{o.preventDefault(),i.setPointerCapture(o.pointerId),e=performance.now(),i.classList.add("on"),n=setTimeout(()=>jr.add(t),250)}),i.addEventListener("pointerup",()=>s(!0)),i.addEventListener("pointercancel",()=>s(!1))});const nh={KeyZ:"left",KeyX:"right",Equal:"in",NumpadAdd:"in",Minus:"out",NumpadSubtract:"out"};addEventListener("keydown",i=>{i.target.tagName==="INPUT"||i.target.tagName==="SELECT"||(nh[i.code]&&(jr.add(nh[i.code]),i.preventDefault()),i.code==="KeyC"&&!i.repeat&&yp())});addEventListener("keyup",i=>{nh[i.code]&&jr.delete(nh[i.code])});addEventListener("blur",()=>jr.clear());const rs=new R(Qn.x,.55,Qn.z),$m=new R,jm=rs.clone(),af=new R,eR=new R;function nR(i,t){QC(t.scale),$m.lerp(eR.set(t.vel.x,0,t.vel.z).multiplyScalar(t.lead),1-Math.exp(-i*2.5)),rs.lerp(af.copy(t.pos).add($m),1-Math.exp(-i*7)),jm.lerp(rs,1-Math.exp(-i*10)),tR(i),Ie.position.copy(jm).add(yx(af)),Ie.position.y=Math.max(Ie.position.y,1),Ie.lookAt(rs)}function Mp(){Ie.position.copy(rs).add(yx(af)),Ie.lookAt(rs)}const wp=[{x:-40,z:-20,r:14},{x:18,z:47,r:12},{x:51,z:-35,r:9},{x:-61,z:12,r:6}],Ir={x:24,z:-25,r:9.5},iR=[[0,0,12.5],[40,4,9],[-26,28,11],[46,-23,5],[-50,16,5],[Ir.x,Ir.z,Ir.r]],sR=[[0,0,36,4],[0,0,-24,26],[0,0,0,-48],[0,0,8,31],[36,4,46,-22],[-24,26,-50,16],[0,-25,Ir.x,Ir.z]],Js={x:0,z:-55,hx:26,hz:7},ni=[];function Sl(i,t){let e=86+18*(Hv(i*.02+3,t*.02+7)-.5)-Math.hypot(i,t);for(const n of wp)e=Math.min(e,Math.hypot(i-n.x,t-n.z)-n.r*(1+.45*(Va(i*.11+n.x,t*.11+n.z)-.5)));return e}const oR=i=>i>=0?0:-1.2*ke(0,5,-i),ao=(i,t)=>oR(Sl(i,t));function rR(i,t,e){let n=1e9;for(const[s,o,r]of iR)n=Math.min(n,Math.hypot(i-s,t-o)-r);for(const[s,o,r,a]of sR)n=Math.min(n,XE(i,t,s,o,r,a)-2.8);return n+=(Va(i*.35,t*.35)-.5)*.9,ke(.5,-.5,n)*ke(.3,1.5,e)}const aR=(i,t)=>ke(.3,-.3,$E(i,t,Js.x,Js.z,Js.hx,Js.hz));function lR(i,t,e,n,s){let o=ke(.32,.5,Hv(i*.045+11,t*.045+4));o*=(1-n)*(1-s)*ke(.5,2.5,e);for(const r of ni){const a=Math.hypot(i-r.x,t-r.z);a<r.r+1&&(o*=ke(r.r,r.r+1,a))}return o}const bn=512,As=new Uint8Array(bn*bn*4);function cR(){for(let i=0;i<bn;i++){const t=-Hn+(i+.5)*Oi/bn;for(let e=0;e<bn;e++){const n=-Hn+(e+.5)*Oi/bn,s=Sl(n,t),o=aR(n,t),r=rR(n,t,s)*(1-o),a=lR(n,t,s,r,o),l=(i*bn+e)*4;As[l]=Ge((s+10)/20,0,1)*255,As[l+1]=r*255,As[l+2]=a*255,As[l+3]=o*255}}}function Vo(i,t){const e=Ge((i+Hn)/Oi*bn-.5,0,bn-1.001),n=Ge((t+Hn)/Oi*bn-.5,0,bn-1.001),s=Math.floor(e),o=Math.floor(n),r=e-s,a=n-o,l=[0,0,0,0];for(let c=0;c<4;c++){const h=As[(o*bn+s)*4+c],d=As[(o*bn+s+1)*4+c],u=As[((o+1)*bn+s)*4+c],f=As[((o+1)*bn+s+1)*4+c];l[c]=Ue(Ue(h,d,r),Ue(u,f,r),a)/255}return{d:l[0]*20-10,paved:l[1],grass:l[2],asphalt:l[3]}}const bx=[];function Qs(i){return bx.push({kind:"place",...i}),i}function hR(){const i=new Av(As,bn,bn,Mi);i.magFilter=i.minFilter=yi,i.needsUpdate=!0,Te.uMask.value=i;const t=new Ti(Oi,Oi,Oi,Oi).rotateX(-Math.PI/2),e=t.attributes.position;for(let a=0;a<e.count;a++)e.setY(a,ao(e.getX(a),e.getZ(a)));t.computeVertexNormals();const n=new Xe(t,hp(new uo,"ground"));n.receiveShadow=!0,Jt.add(n);const s=Oi+1,o=[];for(let a=0;a<s;a++){const l=[];for(let c=0;c<s;c++)l.push(ao(a-Hn,Hn-c));o.push(l)}const r=new St({mass:0,shape:new x2(o,{elementSize:1})});r.quaternion.setFromEuler(-Math.PI/2,0,0),r.position.set(-Hn,0,Hn),Je.addBody(r);for(const[a,l,c,h]of[[100,0,1,100],[-100,0,1,100],[0,100,100,1],[0,-100,100,1]])_n(new mn(new w(c,5,h)),a,2,l)}const Ss={uTime:Te.uTime,uMask:Te.uMask,uDeep:{value:new ut},uShallow:{value:new ut},uFoam:{value:new ut},uFoamI:{value:1},uFog:{value:new ut},uFogNF:{value:new rt(45,115)},uCam:{value:Ie.position}};function uR(){const i=Qv("water.vert","water.frag",{uniforms:Ss,transparent:!0}),t=new Xe(new Ti(1200,1200).rotateX(-Math.PI/2),i);t.position.y=Ds,t.renderOrder=1,Jt.add(t)}const dR=hp(new uo({side:jn}),"grass"),Ex=[];function fR(){const t=new Map,e=.3;for(let s=-Hn+1;s<Hn-1;s+=e)for(let o=-Hn+1;o<Hn-1;o+=e){const r=o+ie(-.15,.15),a=s+ie(-.15,.15),l=Vo(r,a);if(l.grass<.12||ti()>ke(.12,.3,l.grass))continue;const c=Math.floor((r+Hn)/20)+","+Math.floor((a+Hn)/20)+"|"+(ti()<.5?0:1);t.has(c)||t.set(c,[]),t.get(c).push(r,a,l.grass)}let n=0;for(const[s,o]of t){const r=o.length/3;n+=r;const a=new Float32Array(r*9),l=new Float32Array(r*9),c=new Float32Array(r*9),h=new Float32Array(r*3),d=new Float32Array(r*3);for(let p=0;p<r;p++){const v=o[p*3],m=o[p*3+1],g=o[p*3+2],x=ie(0,Math.PI),_=ie(.26,.38)*.5,M=ie(.55,.85)*(.75+.25*g),C=Math.cos(x)*_,E=Math.sin(x)*_,T=ie(-.12,.12)*M,I=ie(-.12,.12)*M;a.set([v-C,0,m-E,v+C,0,m+E,v+T,M,m+I],p*9);for(let y=0;y<3;y++)l.set([0,1,0],p*9+y*3),c.set([v,0,m],p*9+y*3);h.set([0,0,1],p*3);const V=ti();d.set([V,V,V],p*3)}const u=new Qe;u.setAttribute("position",new en(a,3)),u.setAttribute("normal",new en(l,3)),u.setAttribute("aRoot",new en(c,3)),u.setAttribute("aTip",new en(h,1)),u.setAttribute("aRand",new en(d,1)),u.computeBoundingSphere(),u.boundingSphere.radius+=2;const f=new Xe(u,dR);f.receiveShadow=!0,f.userData.layer=+s.split("|")[1],f.layers.set(as),Ex.push(f),Jt.add(f)}return n}const $n=[],lf={pink:"#ff8fc4",orange:"#ff8a38",yellow:"#f2b53e",white:"#e2dcec",purple:"#a57aff",red:"#e8503c"},pR=["pink","pink","orange","yellow","white","white","purple","red"];function ih(i,t,e,n,s,o=125){const r=new ut(s),a=new ut,l={};r.getHSL(l);const c=Math.round(o*n*n);for(let h=0;h<c;h++){const d=ti()*2-1,u=ti()*Math.PI*2,f=Math.sqrt(1-d*d),p=f*Math.cos(u),v=d,m=f*Math.sin(u),g=n*Math.pow(ti(),.4),x=.28+.72*Ge((v*.5+.5)*.55+g/n*.5,0,1);a.setHSL(l.h+ie(-.025,.025),l.s,l.l).multiplyScalar(x*ie(.9,1.1)),$n.push(i+p*g,t+v*g*.85,e+m*g,ie(0,6.28),ie(0,6.28),ie(0,6.28),ie(.7,1.25),a.r,a.g,a.b)}}const Ym=O("#eadcea"),Km=O("#5b3b52");function mR(i,t){const e=kv(pR),n=ie(1,1.45),s=ie(3,4.2)*n,o=e==="white"||e==="pink"||ti()<.3,r=fi(i,0,t,ie(0,6));N(new Ze(.13*n,.24*n,s,6),o?Ym:Km,r,0,s/2,0);const a=N(new Ze(.06*n,.1*n,s*.5,5),o?Ym:Km,r,.35*n,s*.65,0);a.rotation.z=-.7;const l=lf[e];ih(i,s+.7*n,t,ie(1.6,2)*n,l);const c=2+Math.floor(ti()*3);for(let h=0;h<c;h++){const d=ti()*6.28,u=ie(.9,1.5)*n;ih(i+Math.cos(d)*ie(.9,1.5)*n,s+ie(-.6,.6)*n,t+Math.sin(d)*ie(.9,1.5)*n,u,l)}_n(new ro(.3*n,.3*n,s,8),i,s/2,t)}function gR(i,t){const e=kv(["#7b8a4a","#8a5a8a","#5a6a8a",lf.pink,lf.orange,"#9a8aa0"]),n=ie(.8,1.4);ih(i,n*.55,t,n,e,130),ti()<.5&&ih(i+ie(-.8,.8),n*.4,t+ie(-.8,.8),n*.7,e,130)}function vR(){const i=$n.length/10,t=30,e=new Map;for(let d=0;d<i;d++){const u=Math.floor($n[d*10]/t)+","+Math.floor($n[d*10+2]/t);e.has(u)||e.set(u,[]),e.get(u).push(d)}const n=new Ti(.3,.3),s=hp(new uo({side:jn}),"leaves"),o=new me,r=new Ei,a=new Gn,l=new R,c=new R,h=new ut;for(const d of e.values()){const u=new ml(n,s,d.length);d.forEach((f,p)=>{const v=f*10;l.set($n[v],$n[v+1],$n[v+2]),r.setFromEuler(a.set($n[v+3],$n[v+4],$n[v+5])),c.setScalar($n[v+6]),u.setMatrixAt(p,o.compose(l,r,c)),u.setColorAt(p,h.setRGB($n[v+7],$n[v+8],$n[v+9]))}),u.computeBoundingSphere(),u.boundingSphere.radius+=1,u.castShadow=!0,u.receiveShadow=!0,Jt.add(u)}return i}const cf=[];function xR(){const i=[];for(let e=0;e<3e3&&i.length<62;e++){const n=ie(-88,88),s=ie(-88,88),o=Vo(n,s);o.d<3||o.paved>.05||o.asphalt>.05||o.grass<.25&&ti()<.7||ni.some(r=>Math.hypot(n-r.x,s-r.z)<r.r+2.5)||i.some(r=>Math.hypot(r.x-n,r.z-s)<5.5)||(i.push({x:n,z:s}),cf.push({x:n,z:s,r:3.6}),mR(n,s))}let t=0;for(let e=0;e<3e3&&t<90;e++){const n=ie(-88,88),s=ie(-88,88),o=Vo(n,s);o.d<1.5||o.paved>.3||o.asphalt>.05||ni.some(r=>Math.hypot(n-r.x,s-r.z)<r.r+1)||i.some(r=>Math.hypot(r.x-n,r.z-s)<2.5)||(gR(n,s),cf.push({x:n,z:s,r:1.6}),t++)}return{trees:i.length,bushes:t,leaves:vR()}}function _R(i){const t=new ml(new jo(.5,0),O("#7c78f0"),i),e=new me,n=new Ei,s=new Gn;let o=0;for(let r=0;r<i*6&&o<i;r++){const a=ie(-95,95),l=ie(-95,95),c=Vo(a,l);if(c.d<-1.2||c.d>6&&ti()<.7||c.paved>.5||c.asphalt>.1)continue;const h=ie(.35,1.3);e.compose(new R(a,ao(a,l)+.1*h,l),n.setFromEuler(s.set(ie(0,3),ie(0,3),0)),new R(h,h*.65,h)),t.setMatrixAt(o++,e)}t.count=o,t.castShadow=!0,t.receiveShadow=!0,Jt.add(t)}const Tx={mesh:null};function yR(i){const t=new ml(new Ti(.26,.26).rotateX(-Math.PI/2),O("#8a2a44",{side:jn}),i),e=new me,n=new Ei,s=new Gn;let o=0;for(let r=0;r<i*3&&o<i;r++){const a=ie(-100,100),l=ie(-100,100);if(Math.hypot(a,l)>110)continue;const c=Math.max(ao(a,l),Ds)+.02,h=ie(.6,1.4);e.compose(new R(a,c,l),n.setFromEuler(s.set(0,ie(0,6.28),0)),new R(h,1,h)),t.setMatrixAt(o++,e)}t.count=o,t.receiveShadow=!0,Jt.add(t),Tx.mesh=t}class MR extends Qf{constructor(t){super(t)}load(t,e,n,s){const o=this,r=new DE(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(a){const l=o.parse(JSON.parse(a));e&&e(l)},n,s)}parse(t){return new wR(t)}}class wR{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],s=SR(t,e,this.data);for(let o=0,r=s.length;o<r;o++)n.push(...s[o].toShapes());return n}}function SR(i,t,e){const n=Array.from(i),s=t/e.resolution,o=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*s,r=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=o;else{const d=bR(h,s,a,l,e);a+=d.offsetX,r.push(d.path)}}return r}function bR(i,t,e,n,s){const o=s.glyphs[i]||s.glyphs["?"];if(!o){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}const r=new kE;let a,l,c,h,d,u,f,p;if(o.o){const v=o._cachedOutline||(o._cachedOutline=o.o.split(" "));for(let m=0,g=v.length;m<g;)switch(v[m++]){case"m":a=v[m++]*t+e,l=v[m++]*t+n,r.moveTo(a,l);break;case"l":a=v[m++]*t+e,l=v[m++]*t+n,r.lineTo(a,l);break;case"q":c=v[m++]*t+e,h=v[m++]*t+n,d=v[m++]*t+e,u=v[m++]*t+n,r.quadraticCurveTo(d,u,c,h);break;case"b":c=v[m++]*t+e,h=v[m++]*t+n,d=v[m++]*t+e,u=v[m++]*t+n,f=v[m++]*t+e,p=v[m++]*t+n,r.bezierCurveTo(d,u,f,p,c,h);break}}return{offsetX:o.ha*t,path:r}}class ER extends Zf{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const s=n.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(s,e)}this.type="TextGeometry"}}const Sa=new R;function gi(i,t,e,n,s,o){const r=2*Math.PI*s/4,a=Math.max(o-2*s,0),l=Math.PI/4;Sa.copy(t),Sa[n]=0,Sa.normalize();const c=.5*r/(r+a),h=1-Sa.angleTo(i)/l;return Math.sign(Sa[e])===1?h*c:a/(r+a)+c+c*(1-h)}class sh extends Ut{constructor(t=1,e=1,n=1,s=2,o=.1){if(s=s*2+1,o=Math.min(t/2,e/2,n/2,o),super(1,1,1,s,s,s),s===1)return;const r=this.toNonIndexed();this.index=null,this.attributes.position=r.attributes.position,this.attributes.normal=r.attributes.normal,this.attributes.uv=r.attributes.uv;const a=new R,l=new R,c=new R(t,e,n).divideScalar(2).subScalar(o),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=h.length/6,p=new R,v=.5/s;for(let m=0,g=0;m<h.length;m+=3,g+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*o,h[m+1]=c.y*Math.sign(a.y)+l.y*o,h[m+2]=c.z*Math.sign(a.z)+l.z*o,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/f)){case 0:p.set(1,0,0),u[g+0]=gi(p,l,"z","y",o,n),u[g+1]=1-gi(p,l,"y","z",o,e);break;case 1:p.set(-1,0,0),u[g+0]=1-gi(p,l,"z","y",o,n),u[g+1]=1-gi(p,l,"y","z",o,e);break;case 2:p.set(0,1,0),u[g+0]=1-gi(p,l,"x","z",o,t),u[g+1]=gi(p,l,"z","x",o,n);break;case 3:p.set(0,-1,0),u[g+0]=1-gi(p,l,"x","z",o,t),u[g+1]=1-gi(p,l,"z","x",o,n);break;case 4:p.set(0,0,1),u[g+0]=1-gi(p,l,"x","y",o,t),u[g+1]=1-gi(p,l,"y","x",o,e);break;case 5:p.set(0,0,-1),u[g+0]=gi(p,l,"x","y",o,t),u[g+1]=1-gi(p,l,"y","x",o,e);break}}}const oh=[],Sp=[],Ax=hi("#ffae3a",.5,4.2),TR=O("#6a64d8"),AR=O("#4a45a8"),rh=O("#3b3584"),kc=O("#2e2860"),hf=O("#8d5f9e"),uf=O("#5d3b6e");function Zm(i,t,e){const n=fi(i,0,t);N(new Ut(.7,.5,.7),TR,n,0,.25,0),N(new Ze(.1,.13,2.8,6),AR,n,0,1.9,0),N(new Ut(.4,.12,.4),rh,n,0,3.28,0),N(new Ut(.42,.55,.42),Ax,n,0,3.62,0,!1);for(const[s,o]of[[1,1],[1,-1],[-1,1],[-1,-1]])N(new Ut(.06,.6,.06),kc,n,s*.22,3.62,o*.22);if(N(new ki(.42,.38,4).rotateY(Math.PI/4),rh,n,0,4.08,0),e){const s=new zE(16751162,0,13,1.6);s.position.set(0,3.4,0),n.add(s),Sp.push(s)}_n(new ro(.25,.25,3.6,8),i,1.8,t),ni.push({x:i,z:t,r:.8}),oh.push(new R(i,0,t))}function CR(i,t){const e=new ge;Jt.add(e),N(new Ut(.62,.72,.62),Ax,e,0,0,0,!1);for(const[s,o]of[[1,1],[1,-1],[-1,1],[-1,-1]])N(new Ut(.1,.8,.1),kc,e,s*.32,0,o*.32);N(new Ut(.64,.05,.05),kc,e,0,0,.33),N(new Ut(.05,.05,.64),kc,e,.33,0,0),N(new Ut(.85,.14,.85),rh,e,0,.44,0),N(new Ut(.85,.12,.85),rh,e,0,-.42,0);const n=new St({mass:3,shape:new mn(new w(.42,.48,.42)),position:new w(i,.5,t)});n.quaternion.setFromEuler(0,ie(0,3),0),Xr(e,n),oh.length<bh&&oh.push(new R(i,0,t))}function RR(i,t,e){const n=fi(i,0,t,e);for(let s=0;s<3;s++)N(new Ut(2.6,.08,.22),hf,n,0,.62,-.3+s*.27);for(let s=0;s<2;s++)N(new Ut(2.6,.2,.07),hf,n,0,.95+s*.26,-.44);for(const s of[-1.1,1.1])N(new Ut(.1,.62,.7),uf,n,s,.31,-.05),N(new Ut(.1,.8,.08),uf,n,s,.95,-.46);_n(new mn(new w(1.3,.6,.45)),i,.6,t,e),ni.push({x:i,z:t,r:1.8})}const PR=vl(128,128,(i,t)=>{i.fillStyle="#b0563f",i.fillRect(0,0,t,t),i.fillStyle="#8d3f31";for(let e=0;e<5;e++)i.fillRect(16,18+e*20,t-32,4);i.strokeStyle="#5a2330",i.lineWidth=16,i.strokeRect(8,8,t-16,t-16)});function Ou(i,t,e,n=1.25){const s=N(new Ut(n,n,n),new uo({map:PR}));Xr(s,new St({mass:6,shape:new mn(new w(n/2,n/2,n/2)),position:new w(i,t,e)}))}function gc(i,t,e){const n=new ge;Jt.add(n),N(new Ze(.5,.5,1.2,12),O(e),n);for(const s of[-.38,.38])N(new Ze(.53,.53,.1,12),O("#2c2640"),n,0,s,0);Xr(n,new St({mass:5,shape:new ro(.5,.5,1.2,10),position:new w(i,.62,t)}))}function bp({x:i,z:t,rot:e,title:n,html:s,label:o,action:r,map:a=!0}){const l=fi(i,0,t,e),c=O("#7a4f8a"),h=O("#c9304c"),d=O("#8e1f38");for(const g of[-2,2])N(new Ut(.28,3.4,.28),c,l,g,1.7,0);N(new Ut(4.3,2.3,.2),c,l,0,2.05,0);const u=vl(512,280,(g,x,_)=>{g.fillStyle="#3d3574",g.fillRect(0,0,x,_);const M=["#e9e4ff","#ffe7d6","#d6ecff","#ffd6ea"];for(let C=0;C<6;C++){g.save(),g.translate(40+C%3*160+ie(0,40),90+Math.floor(C/3)*95+ie(-8,8)),g.rotate(ie(-.15,.15)),g.fillStyle=M[C%4],g.fillRect(0,0,ie(80,120),ie(60,80)),g.fillStyle="#00000030";for(let E=0;E<4;E++)g.fillRect(10,14+E*13,ie(40,80),4);g.fillStyle="#c9304c",g.beginPath(),g.arc(8,6,5,0,7),g.fill(),g.restore()}g.fillStyle="#1c1636",g.fillRect(0,0,x,64),g.fillStyle="#d6f58a",g.font='700 52px "Amatic SC", sans-serif',g.textAlign="center",g.textBaseline="middle",g.fillText(n,x/2,34)}),f=new Xe(new Ti(4,2.1),new uo({map:u,emissive:16777215,emissiveMap:u,emissiveIntensity:.25}));f.position.set(0,2.05,.11),l.add(f);for(const g of[1,-1]){const x=N(new Ut(5,.12,1.2),h,l,0,3.6,g*.45);x.rotation.x=g*.5;for(let _=0;_<5;_++)N(new Ut(5.02,.05,.08),d,x,0,.07,-.5+_*.25,!1)}_n(new mn(new w(2.2,1.8,.3)),i,1.8,t,e);const p=new R(0,0,3.2).applyAxisAngle(new R(0,1,0),e).add(l.position),v=new Xe(new wh(.3),new ui({color:new ut(2,2,2)}));v.position.set(0,1.4,.35),l.add(v);const m=new Xe(new Jf(1.6,1.85,48).rotateX(-Math.PI/2),new ui({color:new ut(1.6,1.6,1.6),transparent:!0,opacity:.3,depthWrite:!1}));m.position.set(p.x,.04,p.z),Jt.add(m),Ks({pos:p,label:o||n,content:s||null,action:r?()=>Ye(r)||console.warn(`board '${n}': no listener for event '${r}'`):null,dia:v,ring:m}),ni.push({x:i,z:t,r:3.5},{x:p.x,z:p.z,r:2.5}),a&&Qs({x:i,z:t,icon:"📋",label:n,kind:"board"})}function Jm(i,t,e){const n=fi(i,0,t,e),s=O("#b52c44"),o=O("#4b53d6"),r=O("#4d48b8"),a=O("#2c2650");for(const l of[-1,1]){N(new Ut(2.4,.5,.9),s,n,0,.25,l*1.25),N(new Ut(2.4,1.2,.35),s,n,0,.85,l*1.65);for(let c=0;c<2;c++)N(new Ut(.3,1.21,.37),o,n,-.45+c*.9,.86,l*1.65);N(new Ut(2.42,.12,.92),o,n,0,.52,l*1.25)}N(new Ut(2.1,.1,1.3),r,n,0,.92,0),N(new Ze(.1,.18,.9,6),a,n,0,.45,0),N(new Ze(.09,.09,.35,8),O("#d0342c"),n,.2,1.14,.1),N(new Ze(.09,.09,.35,8),O("#e6c23a"),n,.42,1.14,-.05),_n(new mn(new w(1.25,.7,1.85)),i,.7,t,e),ni.push({x:i,z:t,r:3})}function LR(i,t,e){const n=fi(i,0,t,e);N(new sh(4.4,2.9,.4,3,.35),hi("#e2a4ff",1.3,3.2),n,0,2.1,-.02,!1),N(new sh(4.1,2.6,.45,3,.3),O("#2a2650"),n,0,2.1,0);const s=vl(256,160,(r,a)=>{r.fillStyle="#1a1830",r.fillRect(0,0,a,160),r.fillStyle="#ffffff";for(let l=0;l<4;l++)for(let c=0;c<=l;c++)r.beginPath(),r.arc(a/2+(c-l/2)*30,34+l*30,7,0,7),r.fill()}),o=new Xe(new Ti(3.7,2.2),new ui({map:s,color:new ut(1.6,1.6,1.6)}));o.position.set(0,2.1,.24),n.add(o);for(const r of[-1.5,1.5])N(new li(.35,.08,6,16).rotateX(Math.PI/2),hi("#e2a4ff",1.2,3),n,r,.3,.2,!1);N(new Ut(.3,1.2,.3),O("#2a2650"),n,0,.6,0),_n(new mn(new w(2.2,1.6,.35)),i,1.6,t,e),ni.push({x:i,z:t,r:3.2})}function IR(i,t,e){const n=fi(i,0,t,e),s=.26,o=9,r=.5,a=N(new Ut(5.5,r,o),O("#5a4fc0"),n,0,Math.sin(s)*o/2-r/2+.05,0);a.rotation.x=s;for(let h=0;h<4;h++)N(new Ut(5.52,.02,.35),hi("#ff4fb8",1.2,3),a,0,r/2+.01,-o/2+1.2+h*2.2,!1);const l=new Ve().setFromEuler(0,e,0).mult(new Ve().setFromEuler(s,0,0)),c=new R(0,a.position.y,0).applyAxisAngle(new R(0,1,0),e).add(n.position);_n(new mn(new w(2.75,r/2,o/2)),c.x,c.y,c.z,0,l)}function NR(){const i=hi("#8a90ff",.9,1.8);for(let t=-4;t<=4;t++)for(const e of[-1,1]){const n=t*5,s=Js.z+e*3.2;N(new Ut(.22,.03,2.6),i,Jt,n-1.2,.02,s+e*.2,!1),N(new Ut(1.2,.03,.22),i,Jt,n-.7,.02,s+e*1.4,!1)}}function DR(){const i=wp[1];let t=8-i.x,e=31-i.z;const n=Math.hypot(t,e);t/=n,e/=n;let s=n;for(;s>0&&Sl(i.x+t*s,i.z+e*s)>.6;)s-=.25;const o=i.x+t*(s+2.5),r=i.z+e*(s+2.5),a=Math.atan2(t,e),l=11,c=o-t*l/2,h=r-e*l/2,d=fi(c,0,h,a);for(let u=0;u<16;u++)N(new Ut(3.4,.14,.62),u%2?hf:O("#9c6cab"),d,0,.12,-l/2+.35+u*.68);for(let u=0;u<4;u++)for(const f of[-1.5,1.5])N(new Ze(.13,.13,1.8,6),uf,d,f,-.6,-l/2+1+u*3);_n(new mn(new w(1.7,.1,l/2)),c,.1,h,a),ni.push({x:o,z:r,r:3}),Qs({x:c,z:h,icon:"⚓",label:"Dermaga"})}async function UR(){const i=await new MR().loadAsync(Bv+"fonts/helvetiker_bold.typeface.json"),t=O("#a58cff",{flatShading:!1}),e=[...VE].map(o=>{const r=new ER(o,{font:i,size:2.4,depth:.9,curveSegments:6,bevelEnabled:!0,bevelThickness:.08,bevelSize:.06,bevelSegments:2});return r.center(),r.computeBoundingBox(),r}),n=e.map(o=>o.boundingBox.max.x-o.boundingBox.min.x);let s=-(n.reduce((o,r)=>o+r,0)+.35*(e.length-1))/2;e.forEach((o,r)=>{const a=o.boundingBox,l=n[r]/2,c=(a.max.y-a.min.y)/2,h=(a.max.z-a.min.z)/2,d=new St({mass:10,shape:new mn(new w(l,c,h)),position:new w(s+l,c+.02,-6)});d.sleep(),Xr(N(o,t),d),s+=n[r]+.35})}async function FR(i,t){i(.05,"Menata taman…");const e=await na("data/zones.json","json");for(const r of e.boards)bp(r);Jm(38,8,.2),Jm(44.5,9.5,.2),LR(45,-1.5,-.35);for(const r of[.8,1.9,3.3,-.75,-2.5])RR(Math.cos(r)*10.6,Math.sin(r)*10.6,-r-Math.PI/2);for(let r=0;r<8;r++){const a=r/8*Math.PI*2+.4;Zm(Math.cos(a)*12.2,Math.sin(a)*12.2,r<6)}for(const[r,a]of[[20,5],[-14,16],[2,-27],[5,20],[41,-12],[-38,22],[30,12]])Zm(r,a,Sp.length<9);for(const[r,a]of[[4,-3.5],[-6,9],[9,8],[35,0],[-19,30],[-5,-14],[47,5],[2,-40]])CR(r,a);ni.push({x:0,z:0,r:13}),Qs({x:0,z:0,icon:"⛲",label:"Alun-alun"}),Qs({x:41,z:6,icon:"🍔",label:"Kedai & Arkade"}),Qs({x:Js.x,z:Js.z,icon:"🅿",label:"Parkiran"}),wp.forEach((r,a)=>Qs({x:r.x,z:r.z,icon:"💧",label:a===0?"Danau Besar":"Danau",kind:"water"})),DR(),await t(),await va(),i(.15,"Mengukir danau…"),cR(),await va(),hR(),uR(),NR(),IR(-16,Js.z,Math.PI/2),await va(),i(.35,"Menanam rumput…");const n=fR();await va(),i(.55,"Menanam pohon…");const s=xR();_R(140),yR(3e3),await va(),i(.75,"Menyusun peti & huruf…");const o=1.25;for(let r=0;r<3;r++)for(let a=0;a<3-r;a++)Ou(7.5+(a-(2-r)/2)*(o+.02),o/2+r*o+.01,3.5);Ou(40,o/2,-6),Ou(41.4,o/2,-6.3),gc(-7.5,3,"#e07a2a"),gc(-8.4,4.2,"#4b57c9"),gc(-7.2,4.6,"#e07a2a"),gc(22,-3,"#4b57c9"),oh.slice(0,bh).forEach((r,a)=>Te.uLamps.value[a].copy(r));try{await UR()}catch(r){console.warn("font failed, skipping letters",r)}console.log(`world: ${n} grass blades, ${s.trees} trees, ${s.bushes} bushes, ${s.leaves} leaves`)}const OR=i=>Math.round(i*1e3)/1e3;Yo("props",{save:()=>bs.map(({body:{position:i,quaternion:t}})=>[i.x,i.y,i.z,t.x,t.y,t.z,t.w].map(OR)),load(i){if(i.length!==bs.length){Qd(bs);return}bs.forEach(({body:t},e)=>{const[n,s,o,r,a,l,c]=i[e];t.position.set(n,s,o),t.quaternion.set(r,a,l,c).normalize(),t.previousPosition.copy(t.position),t.interpolatedPosition.copy(t.position),t.previousQuaternion.copy(t.quaternion),t.interpolatedQuaternion.copy(t.quaternion),t.velocity.setZero(),t.angularVelocity.setZero(),t.wakeUp()})},reset:()=>Qd(bs)});class Cx{constructor(t,e){this.n=t,this.i=0,this.p=[],this.im=new ml(new jo(1,0),e,t),this.im.frustumCulled=!1,this.im.castShadow=!1,this.im.layers.set(as);const n=new me().makeScale(0,0,0),s=new ut(1,1,1);for(let o=0;o<t;o++)this.p.push({life:1,max:1,pos:new R,vel:new R,size:1,rise:0,rot:0}),this.im.setMatrixAt(o,n),this.im.setColorAt(o,s);Jt.add(this.im),this.m=new me,this.q=new Ei,this.e=new Gn,this.s=new R}spawn(t,e,n,s,o,r=.6){const a=this.i,l=this.p[a];this.i=(this.i+1)%this.n,l.life=0,l.max=s,l.pos.copy(t),l.vel.copy(e),l.size=n,l.rise=r,l.rot=Math.random()*6,this.im.setColorAt(a,o),this.im.instanceColor.needsUpdate=!0}update(t){for(let e=0;e<this.n;e++){const n=this.p[e];if(n.life>=n.max)continue;n.life+=t;const s=Math.min(1,n.life/n.max);n.vel.multiplyScalar(Math.exp(-t*2.2)),n.vel.y+=n.rise*t,n.pos.addScaledVector(n.vel,t);const o=s>=1?0:n.size*Math.pow(Math.max(Math.sin(Math.PI*Math.min(1,s*1.15+.08)),0),.6);this.im.setMatrixAt(e,this.m.compose(n.pos,this.q.setFromEuler(this.e.set(n.rot,n.rot*.7+s,0)),this.s.setScalar(o)))}this.im.instanceMatrix.needsUpdate=!0}}const Do=new Cx(260,new uo({flatShading:!0})),Qm=new Cx(80,new ui),Rx={uColor:{value:new ut}},df=[];function zR(){const t=new Float32Array(366),e=new Float32Array(61*2),n=[];for(let a=0;a<=60;a++)if(e[a*2]=e[a*2+1]=a/60,a<60){const l=a*2;n.push(l,l+1,l+2,l+1,l+3,l+2)}const s=new Qe;s.setAttribute("position",new en(t,3)),s.setAttribute("aS",new en(e,1)),s.setIndex(n);const o=Qv("wind.vert","wind.frag",{uniforms:{uColor:Rx.uColor,uHead:{value:0}},transparent:!0,depthWrite:!1,blending:Ja,side:jn}),r=new Xe(s,o);return r.frustumCulled=!1,r.visible=!1,r.layers.set(as),Jt.add(r),{me:r,t:0,dur:1,N:60}}for(let i=0;i<4;i++)df.push(zR());function BR(i,t){const e=new R(Te.uWindDir.value.x,0,Te.uWindDir.value.y),n=new R(-e.z,0,e.x),s=t.clone().addScaledVector(e,Xt(-26,-14)).addScaledVector(n,Xt(-14,14)),o=Xt(22,32),r=Xt(.6,1.8),a=Xt(0,6),l=Xt(3,6),c=Xt(1.2,3.2),h=.07,d=i.me.geometry.attributes.position;for(let u=0;u<=i.N;u++){const f=u/i.N,p=s.clone().addScaledVector(e,f*o).addScaledVector(n,Math.sin(f*l+a)*r);p.y=c+Math.sin(f*l*.7+a)*.6;const v=h*(.4+Math.sin(f*Math.PI));d.setXYZ(u*2,p.x-n.x*v,p.y,p.z-n.z*v),d.setXYZ(u*2+1,p.x+n.x*v,p.y,p.z+n.z*v)}d.needsUpdate=!0,i.t=0,i.dur=Xt(2.2,3.4),i.me.visible=!0}let zu=1;function kR(i,t,e){if(zu-=i,e&&zu<=0){const n=df.find(s=>!s.me.visible);n&&BR(n,t),zu=Xt(.8,2.2)}for(const n of df)n.me.visible&&(n.t+=i,n.me.material.uniforms.uHead.value=n.t/n.dur*1.5,(n.t>n.dur||!e)&&(n.me.visible=!1))}const ff=(()=>{const t=new Float32Array(900);for(let s=0;s<300;s++)t[s*3]=Xt(-80,80),t[s*3+1]=Xt(.4,4),t[s*3+2]=Xt(-80,80);const e=new Qe;e.setAttribute("position",new en(t,3));const n=new Rv(e,new jf({color:new ut(3,1.8,.8),size:.14,transparent:!0,opacity:0,blending:Ja,depthWrite:!1}));return n.layers.set(as),Jt.add(n),n})(),tg=new R;function HR(i,t,e){Jt.background.copy(t.sky),Jt.fog.color.copy(t.sky),Ss.uFog.value.copy(t.sky),Ss.uFogNF.value.set(Jt.fog.near,Jt.fog.far),Te.uGround.value.copy(t.ground),Te.uPaved.value.copy(t.paved),Te.uAsphalt.value.copy(t.asphalt),Te.uGrassA.value.copy(t.grassA),Te.uGrassB.value.copy(t.grassB),Te.uShadowTint.value.copy(t.shadow),Te.uLeafTint.value.copy(t.leaf),Ss.uDeep.value.copy(t.deep),Ss.uShallow.value.copy(t.shallow),Ss.uFoam.value.copy(t.foam),Ss.uFoamI.value=t.foamI,Fc.color.copy(t.hemiS),Fc.groundColor.copy(t.hemiG),Fc.intensity=t.hemiI,nn.color.copy(t.sunC),nn.intensity=t.sunI,Te.uLampI.value=t.lamp,Te.uHeadI.value=t.lamp,Ps.strength=t.bloom,Rx.uColor.value.copy(t.wind).multiplyScalar(t.windI*.6),ff.material.opacity=.9*ke(.4,.9,t.lamp);for(const a of Sp)a.intensity=22*t.lamp;for(const a of tx)a.m.color.copy(a.base).multiplyScalar(Ue(a.dayI,a.nightI,t.lamp));const n=Math.sin((i-6)/12*Math.PI),s=n>.02,o=s?(i-6)/12*Math.PI:(i-18+24)%24/12*Math.PI,r=Math.max(s?Math.asin(Ge(n,0,1)):Math.asin(Ge(-n,0,1))*.6+.45,.38);tg.set(-Math.cos(o)*Math.cos(r),Math.sin(r),-.45*Math.cos(r)-.3).normalize(),nn.position.copy(e).addScaledVector(tg,60),nn.target.position.copy(e)}function VR(i){ff.position.y=Math.sin(i*.7)*.3,ff.rotation.y=Math.sin(i*.05)*.03}let vt,hn,ba,Ea,Ta,wo,So,vc=!1,eg=0,Aa=null,ng=-1;const te={init(){if(vt)return;vt=new(window.AudioContext||window.webkitAudioContext),hn=vt.createGain(),hn.gain.value=.55,hn.connect(vt.destination),wo=vt.createBiquadFilter(),wo.type="lowpass",wo.frequency.value=500,Ta=vt.createGain(),Ta.gain.value=0,ba=vt.createOscillator(),ba.type="sawtooth",Ea=vt.createOscillator(),Ea.type="square",ba.connect(wo),Ea.connect(wo),wo.connect(Ta).connect(hn),ba.start(),Ea.start(),So=vt.createBuffer(1,vt.sampleRate*.3,vt.sampleRate);const i=So.getChannelData(0);for(let t=0;t<i.length;t++)i[t]=(Math.random()*2-1)*Math.pow(1-t/i.length,3)},engine(i,t,e=!0){if(!vt)return;if(!e){Ta.gain.setTargetAtTime(0,vt.currentTime,.25);return}const n=36+i*4.2+t*16,s=vt.currentTime;ba.frequency.setTargetAtTime(n,s,.08),Ea.frequency.setTargetAtTime(n*.5,s,.08),wo.frequency.setTargetAtTime(320+i*38+t*280,s,.1),Ta.gain.setTargetAtTime(.045+t*.05+Math.min(i,25)*.002,s,.1)},hit(i){if(!vt||performance.now()-eg<90)return;eg=performance.now();const t=vt.createBufferSource();t.buffer=So,t.playbackRate.value=Xt(.5,.9);const e=vt.createBiquadFilter();e.type="lowpass",e.frequency.value=700+i*1200;const n=vt.createGain();n.gain.value=.2+i*.6,t.connect(e).connect(n).connect(hn),t.start()},horn(){if(!vt)return;const i=vt.currentTime,t=vt.createGain();t.gain.setValueAtTime(1e-4,i),t.gain.exponentialRampToValueAtTime(.18,i+.02),t.gain.exponentialRampToValueAtTime(1e-4,i+.45),t.connect(hn);for(const e of[392,494]){const n=vt.createOscillator();n.type="square",n.frequency.value=e,n.connect(t),n.start(i),n.stop(i+.5)}},step(i=0){if(!vt)return;const t=vt.currentTime,e=vt.createBufferSource();e.buffer=So,e.playbackRate.value=Xt(1.4,2.1);const n=vt.createBiquadFilter();n.type="lowpass",n.frequency.value=420+i*380;const s=vt.createGain();s.gain.setValueAtTime(.09+i*.1,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.09),e.connect(n).connect(s).connect(hn),e.start(t),e.stop(t+.12)},jump(){if(!vt)return;const i=vt.currentTime,t=vt.createOscillator(),e=vt.createGain();t.type="triangle",t.frequency.setValueAtTime(320,i),t.frequency.exponentialRampToValueAtTime(640,i+.12),e.gain.setValueAtTime(.09,i),e.gain.exponentialRampToValueAtTime(1e-4,i+.16),t.connect(e).connect(hn),t.start(i),t.stop(i+.18)},door(i){if(!vt)return;const t=vt.currentTime,e=vt.createBufferSource();e.buffer=So,e.playbackRate.value=i?1.6:.9;const n=vt.createBiquadFilter();n.type="bandpass",n.frequency.value=i?1800:700,n.Q.value=1.2;const s=vt.createGain();if(s.gain.value=i?.25:.4,e.connect(n).connect(s).connect(hn),e.start(t),e.stop(t+.15),i)return;const o=vt.createOscillator(),r=vt.createGain();o.type="sine",o.frequency.setValueAtTime(130,t),o.frequency.exponentialRampToValueAtTime(60,t+.15),r.gain.setValueAtTime(.35,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.2),o.connect(r).connect(hn),o.start(t),o.stop(t+.22)},pop(){if(!vt)return;const i=vt.currentTime,t=vt.createOscillator(),e=vt.createGain();t.type="sine",t.frequency.setValueAtTime(300,i),t.frequency.exponentialRampToValueAtTime(900,i+.15),e.gain.setValueAtTime(.2,i),e.gain.exponentialRampToValueAtTime(1e-4,i+.25),t.connect(e).connect(hn),t.start(i),t.stop(i+.3)},pick(){if(!vt)return;const i=vt.currentTime,t=vt.createOscillator(),e=vt.createGain();t.type="triangle",t.frequency.setValueAtTime(420,i),t.frequency.exponentialRampToValueAtTime(1100,i+.1),e.gain.setValueAtTime(.12,i),e.gain.exponentialRampToValueAtTime(1e-4,i+.16),t.connect(e).connect(hn),t.start(i),t.stop(i+.18)},stash(){if(!vt)return;const i=vt.currentTime;[[660,0],[990,.08]].forEach(([t,e])=>{const n=vt.createOscillator(),s=vt.createGain();n.type="square",n.frequency.value=t,s.gain.setValueAtTime(1e-4,i+e),s.gain.exponentialRampToValueAtTime(.06,i+e+.01),s.gain.exponentialRampToValueAtTime(1e-4,i+e+.14),n.connect(s).connect(hn),n.start(i+e),n.stop(i+e+.16)})},drop(){if(!vt)return;const i=vt.currentTime,t=vt.createOscillator(),e=vt.createGain();t.type="sine",t.frequency.setValueAtTime(220,i),t.frequency.exponentialRampToValueAtTime(90,i+.12),e.gain.setValueAtTime(.22,i),e.gain.exponentialRampToValueAtTime(1e-4,i+.16),t.connect(e).connect(hn),t.start(i),t.stop(i+.18)},eat(){if(!vt)return;const i=vt.currentTime;for(let t=0;t<3;t++){const e=vt.createBufferSource();e.buffer=So,e.playbackRate.value=Xt(1.8,2.6);const n=vt.createBiquadFilter();n.type="bandpass",n.frequency.value=Xt(1400,2400),n.Q.value=.9;const s=vt.createGain();s.gain.setValueAtTime(.35,i+t*.16),s.gain.exponentialRampToValueAtTime(1e-4,i+t*.16+.08),e.connect(n).connect(s).connect(hn),e.start(i+t*.16),e.stop(i+t*.16+.1)}},drink(){if(!vt)return;const i=vt.currentTime;for(let t=0;t<3;t++){const e=vt.createOscillator(),n=vt.createGain(),s=t*.22;e.type="sine",e.frequency.setValueAtTime(420,i+s),e.frequency.exponentialRampToValueAtTime(170,i+s+.1),n.gain.setValueAtTime(.16,i+s),n.gain.exponentialRampToValueAtTime(1e-4,i+s+.13),e.connect(n).connect(hn),e.start(i+s),e.stop(i+s+.15)}},flush(){if(!vt)return;const i=vt.currentTime;for(let t=0;t<4;t++){const e=vt.createBufferSource();e.buffer=So,e.playbackRate.value=.35;const n=vt.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(2200,i+t*.18),n.frequency.exponentialRampToValueAtTime(300,i+t*.18+.6);const s=vt.createGain();s.gain.setValueAtTime(.3,i+t*.18),s.gain.exponentialRampToValueAtTime(1e-4,i+t*.18+.7),e.connect(n).connect(s).connect(hn),e.start(i+t*.18),e.stop(i+t*.18+.8)}},rain(i){if(!vt)return;const t=Math.round(i*50)/50;if(t!==ng){if(ng=t,!Aa){const e=vt.createBuffer(1,vt.sampleRate*2,vt.sampleRate),n=e.getChannelData(0);for(let a=0;a<n.length;a++)n[a]=Math.random()*2-1;const s=vt.createBufferSource();s.buffer=e,s.loop=!0;const o=vt.createBiquadFilter();o.type="lowpass",o.frequency.value=2600;const r=vt.createBiquadFilter();r.type="highpass",r.frequency.value=400,Aa=vt.createGain(),Aa.gain.value=0,s.connect(o).connect(r).connect(Aa).connect(hn),s.start()}Aa.gain.setTargetAtTime(t*.09,vt.currentTime,.4)}},toggle(){return vt?(vc=!vc,hn.gain.value=vc?0:.55,vc):!1}},cl=["grassA","grassB","leaf","ground","paved"],Px=Object.fromEntries(cl.map(i=>[i,new ut(He.seasons[0].look[i])])),GR=He.seasons.map(i=>Object.fromEntries(cl.map(t=>[t,new ut(i.look[t])]))),ig=i=>i.r*.2126+i.g*.7152+i.b*.0722,WR=[...new Set([...He.seasons.flatMap(i=>[...i.env||[],...i.envNight||[],...i.envNoon||[]]),...Object.values(He.weathers).flatMap(i=>i.env||[])])],he={tint:Object.fromEntries(cl.map(i=>[i,Px[i].clone()])),leafMix:0,leafMixColor:new ut(1,1,1),grassH:1,leafScale:1,dim:1,amb:0,rain:0,snow:0,season:-1,seasonKey:-1};let Ep=!0;const sg=new ut,Bu=new ut,og=new ut,Er=(i,t)=>Ep?1:1-Math.exp(-i*t);function qR(i,t){const e=Vn();e.seasonIndex!==he.seasonKey&&(Ep=!0,he.seasonKey=e.seasonIndex);const n=Er(t,.8),s=GR[e.seasonIndex];for(const o of cl){const r=he.tint[o].lerp(s[o],n),a=i[o],l=Px[o],c=ig(a)/Math.max(ig(l),1e-4);Bu.copy(r).multiplyScalar(c),og.setRGB(a.r/Math.max(l.r,.001),a.g/Math.max(l.g,.001),a.b/Math.max(l.b,.001)).multiply(r),a.copy(Bu.lerp(og,.3))}if(he.leafMix+=((e.season.look.leafMix||0)-he.leafMix)*n,Te.uLeafMix.value=he.leafMix,he.leafMixColor.lerp(Bu.set(e.season.look.leafMixColor||"#ffffff"),n),Te.uLeafMixColor.value.copy(he.leafMixColor),he.dim+=(e.weather.dim-he.dim)*Er(t,1),he.dim<.999){const o=(i.sky.r+i.sky.g+i.sky.b)/3;i.sky.lerp(sg.setRGB(o,o,o*1.05),(1-he.dim)*1.2).multiplyScalar(.55+.45*he.dim),i.sunI*=he.dim*he.dim,i.hemiI*=.8+.2*he.dim;const r=.5+.5*he.dim;for(const a of cl)i[a].multiplyScalar(r);i.shadow.lerp(sg.setRGB(r,r,r),(1-he.dim)*1.6)}return i}const Zi={x:44,y:18,z:44};function Tp(i,t){const e=new Float32Array(i*t.verts*3),n=new Float32Array(i);for(let a=0;a<i;a++)n[a]=Math.random()*100;const s=new Qe;s.setAttribute("position",new en(e,3));const o=t.build(s);o.frustumCulled=!1,o.visible=!1,o.layers.set(as),Jt.add(o);const r=[];for(let a=0;a<i;a++)r.push(new R(Xt(-44,Zi.x)/2,Xt(0,Zi.y),Xt(-44,Zi.z)/2));return{n:i,obj:o,pos:e,p:r,seed:n,verts:t.verts,inited:!1}}const Lx=(i,t)=>({verts:1,build:e=>new Rv(e,new jf({size:i,color:t,transparent:!0,opacity:.95,depthWrite:!1}))}),ku=Tp(260,Lx(.3,"#ffffff")),rg=Tp(1100,Lx(.3,"#ffffff")),ag=Tp(1500,{verts:2,build:i=>new Kb(i,new Cv({color:"#e4ecff",transparent:!0,opacity:.8,depthWrite:!1}))}),XR=new ut("#dfe9ff"),$R=new R,jR=new R;function Hu(i,t,e,n,s,o,r,a=0){if(i.obj.visible=t>0,!t)return;i.obj.geometry.setDrawRange(0,t*i.verts);const l=Te.uWindDir.value.x,c=Te.uWindDir.value.y;for(let h=0;h<t;h++){const d=i.p[h],u=i.seed[h];d.y-=s*(.75+u%1*.5)*e,d.x+=(Math.sin(r*o+u)*o*.5+l*s*.12)*e,d.z+=(Math.cos(r*o*.8+u)*o*.5+c*s*.12)*e,d.y<0&&(d.y+=Zi.y),d.x>Zi.x/2?d.x-=Zi.x:d.x<-44/2&&(d.x+=Zi.x),d.z>Zi.z/2?d.z-=Zi.z:d.z<-44/2&&(d.z+=Zi.z);const f=h*i.verts*3,p=n.x+d.x,v=n.y-2+d.y,m=n.z+d.z;i.pos[f]=p,i.pos[f+1]=v,i.pos[f+2]=m,a&&(i.pos[f+3]=p-l*a*.15,i.pos[f+4]=v+a,i.pos[f+5]=m-c*a*.15)}i.obj.geometry.attributes.position.needsUpdate=!0}let xc=0;function YR(i,t,e){xc+=i;const n=Vn(),s=n.season,o=n.weather,r=Er(i,.8);if(he.grassH+=(s.look.grassH-he.grassH)*r,Te.uGrassH.value=he.grassH,he.leafScale+=(s.look.leafScale-he.leafScale)*r,Te.uLeafScale.value=he.leafScale,he.season!==n.seasonIndex){he.season=n.seasonIndex;const u=Tx.mesh;u&&(u.visible=!!s.look.groundLeaves,s.look.groundLeaves&&u.material.color.set(s.look.groundLeaves));const f=s.particles||{};f.kind&&f.kind!=="none"&&(ku.obj.material.color.set(f.color),ku.obj.material.size=f.size)}const a=s.particles||{},l=Math.max(he.rain,he.snow);he.amb+=((a.kind&&a.kind!=="none"?1:0)*(1-l*.7)-he.amb)*Er(i,.5),he.rain+=((o.fx==="rain"?o.amount:0)-he.rain)*Er(i,1),he.snow+=((o.fx==="snow"?o.amount:0)-he.snow)*Er(i,1),Hu(ku,Math.round((a.count||0)*he.amb),i,e,a.fall||.6,a.sway||1,xc),Hu(rg,Math.round(rg.n*he.snow),i,e,1.4,.7,xc),Hu(ag,Math.round(ag.n*he.rain),i,e,17,0,xc,1.1);for(let u=Math.floor(he.rain*40*i+Math.random());u>0&&he.rain>.2;u--){const f=e.x+Xt(-16,16),p=e.z+Xt(-16,16);Do.spawn($R.set(f,Math.max(ao(f,p),-.3)+.04,p),jR.set(0,Xt(.6,1.2),0),Xt(.04,.07),.3,XR,-2)}te.rain(he.rain),Ep=!1;const c=t>=20||t<6,h=t>=11&&t<15.5,d=new Set([...s.env||[],...c?s.envNight||[]:[],...h?s.envNoon||[]:[],...o.env||[]]);for(const u of WR)lx(u,d.has(u))}const bl=80,KR=new xi(1,10).rotateX(-Math.PI/2),ZR=new ui({blending:id,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),ls=new ml(KR,ZR,bl);ls.frustumCulled=!1;ls.renderOrder=1;ls.layers.set(as);const Ix=Array.from({length:bl},()=>({age:1,life:1,dark:0})),Nx=new me,lg=new Ei,cg=new R,hg=new R,JR=new R(0,1,0),Dx=new ut(1,1,1),QR=new ut,ug={dingin:new ut("#8f9cc4"),other:new ut("#9c7a62")};let Vu=0;for(let i=0;i<bl;i++)ls.setMatrixAt(i,Nx.makeScale(0,0,0)),ls.setColorAt(i,Dx);Jt.add(ls);function tP(i,t,e,n,s){const o=Vn(),r=Math.min(1,o.season.footprints*(o.weather.prints||1));if(r<.02)return;const a=Vu;Vu=(Vu+1)%bl;const l=Ix[a];l.age=0,l.life=o.season.printLife||10,l.dark=r,l.ink=o.season.id==="dingin"?ug.dingin:ug.other;const c=Math.cos(n)*.11*s,h=-Math.sin(n)*.11*s;cg.set(i+c,t+.025,e+h),lg.setFromAxisAngle(JR,n),hg.set(.085,1,.14),ls.setMatrixAt(a,Nx.compose(cg,lg,hg)),ls.instanceMatrix.needsUpdate=!0}function eP(i){let t=!1;for(let e=0;e<bl;e++){const n=Ix[e];if(n.age>=n.life)continue;n.age+=i;const s=n.age>=n.life?0:n.dark*(1-Math.max(0,(n.age/n.life-.6)/.4));ls.setColorAt(e,QR.copy(Dx).lerp(n.ink,s)),t=!0}t&&(ls.instanceColor.needsUpdate=!0)}const fe=new St({mass:150});fe.addShape(new mn(new w(1.9,.45,1)),new w(0,.3,0));fe.allowSleep=!1;fe.angularDamping=.5;const zi=new YT({chassisBody:fe}),Ua=.6,dg={radius:Ua,directionLocal:new w(0,-1,0),suspensionStiffness:28,suspensionRestLength:.45,frictionSlip:2.2,dampingRelaxation:2.5,dampingCompression:4.5,maxSuspensionForce:1e5,rollInfluence:.05,axleLocal:new w(0,0,1),chassisConnectionPointLocal:new w,maxSuspensionTravel:.4,customSlidingRotationalSpeed:-30,useCustomSlidingRotationalSpeed:!0};for(const[i,t]of[[-1.35,1.1],[-1.35,-1.1],[1.35,1.1],[1.35,-1.1]])dg.chassisConnectionPointLocal.set(i,0,t),zi.addWheel(dg);zi.addToWorld(Je);const Ht=new ge;Jt.add(Ht);const Ii={},Ui=new ge;Ui.position.set(-.52,0,-1.1);Ht.add(Ui);const Ux=i=>{Ui.rotation.y=i*1.15};{const i=O("#c8243f"),t=O("#9c1a33"),e=O("#2a2238"),n=O("#3d3250"),s=O("#1b1734"),o=(c,h,d,u=.12)=>new sh(c,h,d,2,u);N(new Ut(3.6,.3,1.4),e,Ht,0,-.12,0),N(o(4.1,.78,2.15),i,Ht,0,.36,0),N(o(1.6,.14,1.5,.06),t,Ht,-1.2,.78,0);for(const c of[-.35,0,.35])N(new Ut(.7,.05,.12),e,Ht,-1.2,.86,c);N(o(2.15,.78,1.96,.1),i,Ht,.48,1.12,0),N(new Ut(.08,.52,1.72),s,Ht,-.6,1.14,0),N(new Ut(1.75,.46,2),s,Ht,.52,1.16,0),N(new Ut(.08,.46,1.6),s,Ht,1.57,1.16,0),N(new Ut(2,.08,1.85),n,Ht,.45,1.55,0);for(const c of[-.3,.3,.9,1.3])N(new Ut(.08,.1,1.9),e,Ht,c,1.63,0);const r=hi("#ffb428",2.2,4.5);for(let c=0;c<5;c++)N(new Ut(.12,.12,.16),r,Ht,-.52,1.62,-.66+c*.33,!1);N(o(.38,.42,2.35,.08),e,Ht,-2.14,.05,0),N(new Ut(.06,.11,1.7),r,Ht,-2.34,.1,0,!1),N(new Ut(.05,.3,.9),e,Ht,-2.06,.46,0),Ii.head=hi("#fff4d0",1.2,5);for(const c of[1,-1])N(new Ut(.06,.2,.34),Ii.head,Ht,-2.07,.5,c*.75,!1);N(o(.36,.42,2.3,.08),e,Ht,2.13,.05,0),Ii.brake=new ui({color:new ut(2,.1,.2)});for(const c of[1,-1])N(new Ut(.06,.22,.3),Ii.brake,Ht,2.07,.52,c*.8,!1);N(new Ze(.46,.46,.3,14).rotateZ(Math.PI/2),e,Ht,2.22,.95,0),N(new Ze(.24,.24,.32,8).rotateZ(Math.PI/2),n,Ht,2.24,.95,0);const a=hi("#ff4fc0",1.5,3.2);for(let c=0;c<5;c++)for(const h of[1,-1])N(new Ut(.2,.05,.02),a,Ht,-1+c*.4,.56,h*1.085,!1);N(o(1.08,.74,.07,.03),i,Ui,.54,.37,0),N(new Ut(1,.44,.05),s,Ui,.56,1.13,0),N(new Ut(1.08,.08,.07),i,Ui,.54,1.39,0),N(new Ut(.07,.5,.07),i,Ui,.035,1.12,0),N(new Ut(.2,.06,.05),e,Ui,.85,.62,-.05);for(const c of[.32,.72])N(new Ut(.2,.05,.02),a,Ui,c,.56,-.045,!1);const l=new ki(.12,.2,3).rotateZ(Math.PI/2).rotateX(Math.PI/2);for(const c of[-.4,.4]){const h=N(l,a,Ht,-1.2,.87,c,!1);h.rotation.y=Math.PI/2}for(const c of[1,-1]){N(new Ut(3,.14,.18),e,Ht,0,-.14,c*1.1);for(const h of[-1.35,1.35])N(o(1.5,.28,.42,.08),e,Ht,h,.5,c*1.02)}N(new Ze(.09,.09,.5,8).rotateZ(Math.PI/2),n,Ht,2.2,-.15,-.72),Ii.spot=new FE(16773320,0,30,.6,.6,1.3),Ii.spot.position.set(-2.1,.4,0),Ii.spot.target.position.set(-10,-1.4,0),Ht.add(Ii.spot,Ii.spot.target)}const pf=[];{const i=Array.from({length:16},(a,l)=>{const c=l/16*Math.PI*2;return new Ut(.14,l%2?.5:.36,.2).rotateY(-c).translate(Math.cos(c)*(Ua-.06),l%2?0:.07,Math.sin(c)*(Ua-.06))}),t=ex([new Ze(Ua-.07,Ua-.07,.5,18),...i]).rotateX(Math.PI/2),e=new Ze(.32,.32,.52,8).rotateX(Math.PI/2),n=new Ze(.12,.12,.56,6).rotateX(Math.PI/2),s=O("#262036"),o=O("#8a86cc"),r=O("#c8243f");for(let a=0;a<4;a++){const l=new ge;N(t,s,l),N(e,o,l),N(n,r,l),Ht.add(l),pf.push(l)}}Ah(Ht,up(Ht));Ah(Ui,up(Ui));const nP=new R(2.48,-.15,-.72);fe.addEventListener("collide",i=>{const t=Math.abs(i.contact.getImpactVelocityAlongNormal());t>1.5&&i.body.mass>0&&!i.body.isPlayer&&te.hit(Math.min(1,t/12))});function hl(i,t){fe.position.set(i.x,i.y,i.z),fe.quaternion.setFromEuler(0,t,0),fe.velocity.setZero(),fe.angularVelocity.setZero(),fe.previousPosition.copy(fe.position),fe.interpolatedPosition.copy(fe.position),fe.previousQuaternion.copy(fe.quaternion),fe.interpolatedQuaternion.copy(fe.quaternion)}const Fx=()=>{hl(Wr,Wr.yaw),te.pop()},Ih=()=>fe.quaternion.vmult(new w(0,1,0)).y<.5;function Nh(){const i=fe.quaternion.vmult(new w(-1,0,0)),t=fe.position.clone();t.y=Math.max(t.y,0)+1.6,hl(t,Math.atan2(i.z,-i.x))}hl(Wr,Wr.yaw);const fg=i=>Math.round(i*1e3)/1e3;Yo("car",{save:()=>{const i=fe.position,t=fe.quaternion;return{p:[i.x,i.y,i.z].map(fg),q:[t.x,t.y,t.z,t.w].map(fg)}},load({p:i,q:t}){hl({x:i[0],y:i[1]+.05,z:i[2]},0),fe.quaternion.set(t[0],t[1],t[2],t[3]).normalize(),fe.previousQuaternion.copy(fe.quaternion),fe.interpolatedQuaternion.copy(fe.quaternion)},reset:()=>hl(Wr,Wr.yaw)});const wn={throttle:0,braking:!1,boosting:!1,speed:0,fwdSpeed:0,inWater:!1,engineOn:!0};let _c=0,yc=0;const iP={fwd:0,back:0,left:0,right:0,brake:0,boost:0};function sP(i,t,e,n=!0){const s=e?t:iP,r=-fe.vectorToLocalFrame(fe.velocity).x,a=fe.velocity.length(),l=!!(s.boost&&s.fwd),c=l?30:19;let h=0;s.fwd&&r<c&&(h=-(l?1250:780)*(r<4?1.25:1)),s.back&&(h=r>1?0:r>-9?520:0);const d=!!(s.brake||s.back&&r>1);zi.applyEngineForce(h,2),zi.applyEngineForce(h,3);const u=d?13:h===0?e?1.1:3:0;for(let m=0;m<4;m++)zi.setBrake(u,m);const f=(s.left-s.right)*Ue(.62,.24,Ge(a/26,0,1));_c+=(f-_c)*(1-Math.exp(-i*(f===0?9:6))),zi.setSteeringValue(_c,0),zi.setSteeringValue(_c,1);const p=fe.position.y<Ds+.85;fe.linearDamping=p?.45:.02,Object.assign(wn,{throttle:s.fwd||s.back?1:0,braking:d,boosting:l,speed:a,fwdSpeed:r,inWater:p,engineOn:n}),te.engine(a,wn.throttle,n),yc=fe.quaternion.vmult(new w(0,1,0)).y<.3&&a<2?yc+i:0,yc>2&&(Nh(),yc=0),fe.position.y<-6&&Fx()}const Ox=[!1,!1,!1,!1],Gu=new Ve,Mc=new w,pg=new Ve,Wu=new R;function oP(){Ht.position.copy(fe.interpolatedPosition),Ht.quaternion.copy(fe.interpolatedQuaternion),fe.quaternion.conjugate(Gu);for(let i=0;i<4;i++){Ox[i]=zi.wheelInfos[i].isInContact,zi.updateWheelTransform(i);const t=zi.wheelInfos[i].worldTransform;t.position.vsub(fe.position,Mc),Gu.vmult(Mc,Mc),Gu.mult(t.quaternion,pg),pf[i].position.copy(Mc),pf[i].quaternion.copy(pg)}Te.uCarPos.value.copy(Ht.position),Wu.set(-1,0,0).applyQuaternion(Ht.quaternion),Te.uCarDir.value.set(Wu.x,Wu.z).normalize()}let qu=0,Xu=0,$u=0;const rP=new R,aP=new R,Ca=new ut;function lP(i,t){const e=rP.copy(nP).applyQuaternion(Ht.quaternion).add(Ht.position),n=aP.set(1,0,0).applyQuaternion(Ht.quaternion);for(qu+=i*(wn.throttle?26:wn.engineOn?5:0);qu>1;){qu--;const o=wn.throttle?.62:.75;Do.spawn(e,n.clone().multiplyScalar(Xt(1.2,2.5)).add(new R(Xt(-.3,.3),Xt(.2,.6),Xt(-.3,.3))),Xt(.12,.2)*(wn.throttle?1.5:1),Xt(.7,1.2),Ca.setRGB(o,o,o*1.08),.9)}if(wn.boosting)for(Xu+=i*40;Xu>1;)Xu--,Qm.spawn(e,n.clone().multiplyScalar(Xt(3,5)),Xt(.12,.22),Xt(.18,.3),Ca.setRGB(3.2,Xt(.5,1.2),2.4),0);if($u+=i*30,$u>1){$u=0;for(let o=0;o<4;o++){if(!Ox[o])continue;const r=zi.wheelInfos[o],a=r.raycastResult.hitPointWorld,l=new R(a.x,a.y,a.z),c=r.skidInfo<.7||o>=2&&wn.throttle&&wn.speed<6&&Math.abs(wn.fwdSpeed)<3;if(a.y<Ds-.05&&wn.speed>1.5)Do.spawn(l.setY(Ds+.1),new R(Xt(-1.5,1.5),Xt(2.5,4.5),Xt(-1.5,1.5)),Xt(.15,.28),Xt(.4,.7),Ca.copy(Ss.uFoam.value).multiplyScalar(.8).addScalar(.2),-3);else if((c||wn.speed>9)&&o>=2){const h=Vo(l.x,l.z);if(h.paved>.6&&!c)continue;Ca.copy(h.asphalt>.5?Te.uAsphalt.value:Te.uGround.value).multiplyScalar(1.15),Do.spawn(l.setY(l.y+.15),new R(Xt(-.6,.6),Xt(.5,1.4),Xt(-.6,.6)),Xt(.18,.32),Xt(.5,.9),Ca,.3)}}}Do.update(i),Qm.update(i);const s=wn.braking||wn.fwdSpeed<-.5&&wn.throttle;Ii.brake.color.setRGB(s?5:1.4+1.2*t.lamp,.08,.15),Ii.spot.intensity=70*t.lamp}const Yr=.64,lt={skin:O("#f7c6a3"),blush:O("#ff8e8e"),hair:O("#3a2520"),eye:O("#2a1712"),iris:O("#dc972a"),white:O("#fffaf0"),mouth:O("#8a1f2c"),tongue:O("#ff7a7a"),capCream:O("#f1e7cf"),capTeal:O("#1d98a6"),brim:O("#f2b026"),leather:O("#7b4a2b"),gold:O("#e6b53a"),leaf:O("#5fbf3a"),jacket:O("#c9e04e"),jacketCream:O("#f3eed8"),trim:O("#1d98a6"),hood:O("#f3a531"),shirt:O("#fbf7ee"),scarf:O("#e2472f"),denim:O("#3d63b3"),denimD:O("#2f4f92"),cuff:O("#aaa5bf"),sock:O("#f5f1ea"),boot:O("#8b5a33"),toe:O("#c98d4f"),sole:O("#3b2b2e"),lace:O("#ef6a2e"),fur:O("#efe2c4"),glove:O("#6e4428"),whistle:O("#f7d22c"),wood:O("#c98b45"),woodD:O("#9a6431"),basket:O("#b27a3e"),tomato:O("#e8352c"),cloth:new uo({map:vl(16,16,i=>{i.fillStyle="#fff",i.fillRect(0,0,16,16),i.fillStyle="#e2472f";for(let t=0;t<4;t++)for(let e=0;e<4;e++)(t+e)%2&&i.fillRect(t*4,e*4,4,4)})})},Kn=(i,t,e,n,s=2)=>new sh(i,t,e,s,n),Tn=(i,t,e,n=8)=>new Ze(i,t,e,n),we=(i,t,e)=>new Ut(i,t,e),zt=(i,t,e,n,s,o)=>N(i,t,e,n,s,o,!1),qt=new ge;Jt.add(qt);const Dh=new ge;qt.add(Dh);const et={hips:new ge,spine:new ge,head:new ge};Dh.add(et.hips);et.hips.position.y=Yr;et.hips.add(et.spine);et.spine.position.y=.1;et.spine.add(et.head);et.head.position.y=.41;N(Kn(.36,.2,.26,.07),lt.denim,et.hips,0,.02,0);N(we(.385,.055,.285),lt.leather,et.hips,0,.1,0);zt(we(.075,.06,.02),lt.gold,et.hips,0,.1,.147);{const i=new ge;i.position.set(-.215,.02,.02),et.hips.add(i),N(Kn(.09,.17,.15,.03),lt.leather,i,0,0,0),zt(we(.095,.05,.155),lt.woodD,i,0,.06,0),zt(Tn(.02,.02,.12,6),lt.scarf,i,0,.1,.035),zt(Tn(.018,.018,.11,6),lt.hood,i,0,.1,-.03)}et.bucket=new ge;et.bucket.position.set(-.09,.07,.16);et.hips.add(et.bucket);{zt(new li(.025,.008,4,10),lt.gold,et.bucket,0,0,0),zt(new li(.06,.007,4,10,Math.PI),lt.leather,et.bucket,0,-.07,.03),N(Tn(.065,.055,.1,10),lt.wood,et.bucket,0,-.1,.03);for(const t of[-.07,-.13])zt(Tn(.068,.068,.014,10),lt.woodD,et.bucket,0,t,.03);const i=zt(we(.045,.03,.01),lt.leaf,et.bucket,0,-.1,.095);i.rotation.z=.5}et.basket=new ge;et.basket.position.set(.23,.08,.02);et.hips.add(et.basket);{N(Tn(.11,.085,.13,10),lt.basket,et.basket,0,-.1,0),zt(new li(.11,.015,4,12).rotateX(Math.PI/2),lt.woodD,et.basket,0,-.035,0);for(const[t,e]of[[.03,.03],[-.04,.01],[.01,-.05]])N(new jo(.045,0),lt.tomato,et.basket,t,-.01,e);for(const t of[0,2,4])zt(we(.07,.012,.03),lt.leaf,et.basket,Math.cos(t)*.04,.03,Math.sin(t)*.04).rotation.set(.4,t,.5);zt(we(.1,.07,.012),lt.cloth,et.basket,.06,-.06,.07).rotation.set(.1,.7,-.3)}function zx(i){const t=new ge;t.position.set(.105*i,-.02,0),et.hips.add(t),N(Tn(.115,.1,.27),lt.denim,t,0,-.12,0);const e=new ge;e.position.y=-.24,t.add(e),N(Tn(.1,.1,.1),lt.denim,e,0,-.03,0),N(Tn(.122,.122,.085),lt.cuff,e,0,-.11,0),N(Tn(.066,.066,.14),lt.sock,e,0,-.2,0),zt(Tn(.069,.069,.025),lt.scarf,e,0,-.17,0);const n=new ge;n.position.y=-.38,e.add(n),N(Kn(.19,.06,.3,.025),lt.sole,n,0,.03,.035),N(Kn(.18,.2,.24,.06),lt.boot,n,0,.15,0),N(Kn(.186,.11,.13,.05),lt.toe,n,0,.1,.11),N(Tn(.1,.1,.05,10),lt.fur,n,0,.26,-.01);for(let s=0;s<3;s++)zt(we(.1,.016,.02),lt.lace,n,0,.17+s*.035,.122);return zt(we(.06,.07,.02),lt.brim,n,0,.2,-.125),{hip:t,knee:e,foot:n}}et.L=zx(1);et.R=zx(-1);const Fa=[[.15,0],[.155,.93],[.2,.98],[.26,1],[.33,1],[.38,.93],[.41,.78],[.43,.5],[.44,0]],ah=.21,mf=.14,Ap=i=>{for(let t=1;t<Fa.length;t++)if(i<=Fa[t][0]){const[e,n]=Fa[t-1],[s,o]=Fa[t];return Ue(n,o,(i-e)/(s-e))}return 0};function qs(i,t,e,n,s=1,o=-Math.PI,r=Math.PI,a=!1){const l=[e,...Fa.map(d=>d[0]).filter(d=>d>e&&d<n),n],c=Math.max(3,Math.ceil((r-o)/(Math.PI*2)*28)),h=new yh(l.map(d=>new rt(Ap(d)*s,d)),c,o,r-o).scale(ah,1,mf);return N(h,i,t,0,0,0,a)}function Bx(i,t,e,n=1){const s=Ap(e)*n;return i.position.set(ah*s*Math.sin(t),e,mf*s*Math.cos(t)),i.rotation.y=Math.atan2(Math.sin(t)/ah,Math.cos(t)/mf),i}const cP=(i,t,e,n=0)=>(Bx(i,Math.asin(Ge(t/(ah*Ap(e)),-1,1)),e),i.position.z+=n,i);{const i=et.spine;N(Kn(.33,.3,.23,.08,4),lt.denim,i,0,.12,0),qs(lt.jacketCream,i,.15,.44,1,-Math.PI,Math.PI,!0),qs(lt.trim,i,.155,.195,1.06);for(const n of[1,-1]){qs(lt.jacket,i,.2,.4,1.05,...n>0?[.47,1.4]:[-1.4,-.47]),qs(lt.denim,i,.29,.41,1.05,...n>0?[.26,.44]:[-.44,-.26]);const s=zt(we(.05,.12,.03),lt.hood,i,n*.1,.4,.105);s.rotation.z=n*.4}qs(lt.shirt,i,.21,.41,1.025,-.39,.39),qs(lt.denim,i,.195,.315,1.05,-.42,.42),qs(lt.denimD,i,.205,.275,1.075,-.24,.24),zt(Kn(.05,.065,.035,.015),lt.whistle,i,.01,.29,.16);for(const n of[1,-1]){const s=zt(we(.01,.13,.01),lt.eye,i,n*.035,.36,.145);s.rotation.z=n*.45}const t=new ge;i.add(cP(t,-.15,.35,.012)),zt(we(.05,.05,.014),lt.shirt,t,0,0,0),zt(we(.02,.02,.012),lt.scarf,t,0,.032,0),zt(we(.015,.012,.012),lt.whistle,t,.024,0,.005),zt(we(.08,.05,.05),lt.scarf,i,0,.405,.13),zt(new ki(.07,.11,3).rotateX(Math.PI),lt.scarf,i,0,.35,.15);const e=N(new li(.13,.042,6,18).rotateX(Math.PI/2),lt.scarf,i,0,.415,-.005);e.scale.z=.8;for(const[n,s,o,r]of[[3,3.58,.17,1.08],[2.52,3,.23,1.12]]){qs(lt.scarf,i,o,.41,r,n,s,!0);for(let a=0;a<5;a++)Bx(zt(we(.014,.045,.01),lt.scarf,i),Ue(n+.04,s-.04,a/4),o-.018,r)}}function kx(i){const t=new ge;t.position.set(.225*i,.37,0),et.spine.add(t),N(Kn(.15,.17,.16,.065,4),lt.jacket,t,.01*i,-.06,0),N(Tn(.085,.085,.04,10),lt.trim,t,.01*i,-.155,0),N(Tn(.048,.048,.08),lt.skin,t,.01*i,-.2,0);const e=new ge;return e.position.set(.01*i,-.22,0),t.add(e),N(Tn(.048,.045,.1),lt.skin,e,0,-.04,0),N(Kn(.105,.06,.105,.02),lt.glove,e,0,-.1,0),N(Kn(.095,.11,.09,.035),lt.glove,e,0,-.17,.005),zt(we(.05,.045,.012),lt.toe,e,0,-.165,.052),{sh:t,el:e}}et.LA=kx(1);et.RA=kx(-1);{const i=et.head;N(Tn(.065,.075,.09),lt.skin,i,0,0,0),N(Kn(.4,.37,.36,.11),lt.skin,i,0,.2,.01);for(const l of[1,-1])N(Kn(.05,.08,.06,.02),lt.skin,i,l*.2,.18,0);et.eyes=new ge,et.eyes.position.set(0,.19,.192),i.add(et.eyes);for(const l of[1,-1]){const c=l*.085;zt(we(.075,.1,.012),lt.eye,et.eyes,c,0,0),zt(we(.057,.055,.012),lt.iris,et.eyes,c,-.018,.003),zt(we(.026,.026,.01),lt.white,et.eyes,c+.014,.022,.007),zt(we(.012,.012,.01),lt.white,et.eyes,c-.018,-.03,.007);const h=zt(we(.092,.018,.014),lt.eye,et.eyes,c+l*.004,.052,.002);h.rotation.z=l*.15;const d=zt(new xi(.032,10),lt.blush,i,l*.135,.12,.188);d.scale.y=.55}et.mouth=new ge,et.mouth.position.set(0,.095,.19),i.add(et.mouth),zt(new xi(.045,12,Math.PI,Math.PI),lt.mouth,et.mouth,0,0,.002).scale.x=1.2,zt(new xi(.026,10,Math.PI,Math.PI),lt.tongue,et.mouth,0,-.02,.004),zt(we(.08,.012,.004),lt.white,et.mouth,0,-.005,.004);const t=(l,c,h,d,u=i)=>{const f=new ge;return f.position.set(c,h,d),u.add(f),et[l]=f,f};for(const[l,c]of[["browL",1],["browR",-1]])zt(we(.07,.014,.01),lt.hair,t(l,c*.085,.285,.19),0,0,0);for(const[l,c]of[["lidL",1],["lidR",-1]])zt(we(.092,.11,.01),lt.skin,t(l,c*.085,.245,.201),0,-.055,0);{const l=t("mouthO",0,.09,.19);zt(new xi(.03,12),lt.mouth,l,0,0,.003).scale.y=1.25,zt(new xi(.016,8),lt.tongue,l,0,-.014,.005)}{const l=t("mouthFrown",0,.08,.19);zt(new xi(.036,12,0,Math.PI),lt.mouth,l,0,0,.003).scale.set(1.1,.55,1)}{const l=t("mouthWavy",0,.09,.19);for(let c=-2;c<=2;c++){const h=zt(we(.026,.011,.006),lt.mouth,l,c*.021,0,.003);h.rotation.z=c%2?.55:-.55}}{const l=t("tongue",0,.075,.195);zt(we(.04,.05,.012),lt.tongue,l,0,-.022,0),zt(we(.004,.035,.013),lt.mouth,l,0,-.022,.001)}{const l=t("fxSick",0,0,0),c=O("#7cc46a"),h=O("#4f9a54");for(const d of[1,-1]){for(let u=-1;u<=1;u++)zt(we(.009,.034-Math.abs(u)*.008,.006),h,l,d*.085+u*.022,.12,.198);zt(new xi(.036,10),c,l,d*.145,.105,.191).scale.y=.6}}{const l=t("fxSweat",.165,.25,.205);zt(new Di(.028,8,6),O("#8fd8ff"),l,0,0,0).scale.set(.8,1.2,.6),zt(new ki(.02,.04,6),O("#8fd8ff"),l,0,.038,0)}{const l=t("fxDrool",-.045,.07,.195);zt(new Di(.014,6,4),O("#bfe8ff"),l,0,-.012,0).scale.y=1.6}{const l=t("fxCold",0,0,0);for(const c of[1,-1])zt(new xi(.038,10),O("#8fb8ff"),l,c*.14,.11,.191).scale.y=.6;zt(new Di(.012,6,4),O("#d8f0ff"),l,.012,.125,.202).scale.y=1.8}{const l=t("fxBags",0,.13,.198);for(const c of[1,-1])zt(we(.06,.012,.006),O("#b07f8f"),l,c*.085,0,0)}N(new Di(.25,16,6,0,Math.PI*2,0,Math.PI/2),lt.hair,i,0,.3,-.005).scale.set(.95,.75,.9),N(Kn(.44,.28,.14,.07),lt.hair,i,0,.21,-.14);for(let l=-3;l<=3;l++){const c=(l%2?.1:.14)-Math.abs(l)*.008;N(new ki(.045,c,4).rotateX(Math.PI),lt.hair,i,l*.055,.09-c/2,-.17+Math.abs(l)*.008).rotation.set(-.25,0,-l*.05)}N(we(.42,.06,.06),lt.hair,i,0,.36,.17);for(let l=-2;l<=2;l++){const c=N(new ki(.05,.13,4).rotateX(Math.PI),lt.hair,i,l*.08,.31,.18);c.rotation.z=-l*.18}for(const l of[1,-1]){N(Kn(.05,.22,.24,.02),lt.hair,i,l*.205,.22,.02);const c=N(new ki(.04,.12,4).rotateX(Math.PI),lt.hair,i,l*.205,.09,.1);c.rotation.z=l*.2}const n=new ge;n.position.set(0,.395,-.01),n.rotation.set(-.12,.55,-.1),i.add(n);const s=(l,c)=>{N(new Di(.24,12,6,c,Math.PI,0,Math.PI/2),l,n).scale.set(1,.62,1.05)};s(lt.capCream,0),s(lt.capTeal,Math.PI);const o=N(new Ze(.21,.21,.025,14,1,!1,-Math.PI/2,Math.PI),lt.brim,n,0,.005,.1);o.rotation.x=.1,zt(we(.02,.045,.2),lt.leather,n,-.236,.05,-.07),zt(we(.022,.05,.04),lt.gold,n,-.246,.05,-.01);const r=zt(we(.1,.07,.01),lt.leather,n,0,.1,.228);r.rotation.x=-.5;const a=zt(we(.06,.035,.01),lt.leaf,r,0,0,.007);a.rotation.z=.5,zt(Tn(.03,.03,.02,8),lt.capTeal,n,0,.175,0),zt(new jo(.022,0),lt.brim,n,.06,.18,-.04),zt(Tn(.008,.008,.06,4),lt.leaf,n,.06,.21,-.04);for(const l of[1,-1]){const c=zt(new Di(.03,6,4),lt.leaf,n,.06+l*.03,.24,-.04);c.scale.set(1.4,.35,.8),c.rotation.z=l*.45}}const Uh=["browL","browR","lidL","lidR","mouthO","mouthFrown","mouthWavy","tongue","fxSick","fxSweat","fxDrool","fxBags","fxCold"],hP={hips:et.hips,spine:et.spine,head:et.head,eyes:et.eyes,mouth:et.mouth,bucket:et.bucket,basket:et.basket,lHip:et.L.hip,lKnee:et.L.knee,lFoot:et.L.foot,rHip:et.R.hip,rKnee:et.R.knee,rFoot:et.R.foot,lSh:et.LA.sh,lEl:et.LA.el,rSh:et.RA.sh,rEl:et.RA.el,squash:Dh,...Object.fromEntries(Uh.map(i=>[i,et[i]]))};for(const[i,t]of Object.entries(hP))t.name="j:"+i;function uP(i){const t=n=>i.getObjectByName("j:"+n),e={squash:t("squash"),hips:t("hips"),spine:t("spine"),head:t("head"),eyes:t("eyes"),mouth:t("mouth"),bucket:t("bucket"),basket:t("basket"),L:{hip:t("lHip"),knee:t("lKnee"),foot:t("lFoot")},R:{hip:t("rHip"),knee:t("rKnee"),foot:t("rFoot")},LA:{sh:t("lSh"),el:t("lEl")},RA:{sh:t("rSh"),el:t("rEl")}};for(const n of Uh)e[n]=t(n);return e}sx(qt,[...Uh.map(i=>et[i]),et.hips,et.spine,et.head,et.eyes,et.mouth,et.bucket,et.basket,et.L.hip,et.L.knee,et.L.foot,et.R.hip,et.R.knee,et.R.foot,et.LA.sh,et.LA.el,et.RA.sh,et.RA.el]);for(const i of Uh)et[i].visible=i.startsWith("brow");et.lidL.scale.y=et.lidR.scale.y=.001;const gf={senang:{label:"Senang",lid:0,brow:0,browY:.006,mouth:"smile",smile:1.15},normal:{label:"Biasa",lid:.05,brow:0,browY:0,mouth:"smile",smile:.8},lapar:{label:"Lapar",lid:.15,brow:.35,browY:.004,mouth:"o",drool:!0},haus:{label:"Haus",lid:.4,brow:.3,browY:-.004,mouth:"frown",tongue:!0,sweat:!0},ngantuk:{label:"Ngantuk",lid:.62,brow:.1,browY:-.012,mouth:"smile",smile:.2,bags:!0,yawn:!0,nod:!0},capek:{label:"Kelelahan",lid:.7,brow:.45,browY:.002,mouth:"o",pant:!0,sweat:!0},sakit:{label:"Keracunan",lid:.45,brow:.5,browY:.004,mouth:"wavy",sick:!0,sweat:!0,wobble:!0},mual:{label:"Mual",lid:.35,brow:.45,browY:.002,mouth:"wavy",sick:!0,wobble:!0},kebelet:{label:"Kebelet",lid:.55,brow:-.4,browY:-.01,mouth:"frown",sweat:!0,jitter:!0,squeeze:!0},dingin:{label:"Kedinginan",lid:.3,brow:.4,browY:.002,mouth:"wavy",cold:!0,jitter:!0},panas:{label:"Kepanasan",lid:.4,brow:.3,browY:-.004,mouth:"o",sweat:!0,pant:!0},kesakitan:{label:"Kesakitan",lid:.35,brow:.55,browY:.004,mouth:"frown",sweat:!0}};function dP(){const i=t=>Cn.some(e=>e.id===t);return i("ngos")?"capek":i("keracunan")?"sakit":i("mual")?"mual":i("kebelet_parah")?"kebelet":Wt.health<xe.maxHealth*.3?"kesakitan":i("membeku")||i("kedinginan")?"dingin":i("kepanasan")?"panas":i("dehidrasi")||i("haus")?"haus":i("kelaparan")||i("lapar")?"lapar":i("kecapekan")||i("ngantuk")?"ngantuk":i("kebelet")?"kebelet":i("kenyang")?"senang":"normal"}const Hx=()=>({mood:"normal",lid:0,brow:0,browY:0,smile:1,yawnT:4,squeeze:0}),fP=.285,pP=.26;function Vx(i,t,e,n,s=dP()){const o=gf[s]||gf.normal,r=1-Math.exp(-e*8);t.mood=s;let a=0;o.yawn&&((t.yawnT-=e)<0&&(t.yawnT=6+Math.random()*4),t.yawnT<1.6&&(a=Math.sin(Math.PI*(1-t.yawnT/1.6)))),t.lid+=(Math.max(o.lid,a*.9)-t.lid)*r,t.brow+=(o.brow-t.brow)*r,t.browY+=(o.browY-t.browY)*r,t.smile+=((o.smile??1)-t.smile)*r,t.squeeze+=((o.squeeze&&Math.sin(n*2.4)>.3?1:0)-t.squeeze)*(1-Math.exp(-e*14));const l=t.lid+(o.nod?Math.max(0,Math.sin(n*.9))*.15:0)+t.squeeze*.4;for(const h of[i.lidL,i.lidR])h.scale.y=Math.max(.001,Math.min(1,l)),h.visible=l>.03;i.browL.rotation.z=-(.12+t.brow),i.browR.rotation.z=.12+t.brow,i.browL.position.y=i.browR.position.y=fP+t.browY;const c=a>.2?"o":o.mouth;if(i.mouth.visible=c==="smile",i.mouthO.visible=c==="o",i.mouthFrown.visible=c==="frown",i.mouthWavy.visible=c==="wavy",c==="smile"&&(i.mouth.scale.y*=t.smile),c==="o"){const h=o.pant?1+.35*Math.sin(n*10):1;i.mouthO.scale.set(1+a*.35,Math.max(h,1+a*1.3),1)}c==="wavy"&&(i.mouthWavy.position.x=Math.sin(n*3)*.004),i.tongue.visible=!!o.tongue&&c!=="o",i.tongue.visible&&(i.tongue.scale.y=1+Math.sin(n*5)*.15),i.fxSick.visible=!!o.sick,i.fxBags.visible=!!o.bags,i.fxCold.visible=!!o.cold,i.fxSweat.visible=!!o.sweat,o.sweat&&(i.fxSweat.position.y=pP-n*.35%1*.07),i.fxDrool.visible=!!o.drool,o.drool&&(i.fxDrool.scale.y=.6+ke(0,1,n*.4%1)*.9),o.wobble&&(i.head.rotation.z+=Math.sin(n*2.1)*.07),o.jitter&&(i.head.rotation.z+=Math.sin(n*28)*.018),o.nod&&(i.head.rotation.x+=Math.max(0,Math.sin(n*.9))*.12+a*-.15),o.pant&&(i.head.rotation.x+=Math.sin(n*10)*.03)}const mP=3.4,gP=7,vP=6.2,le=new St({mass:45,fixedRotation:!0,linearDamping:0});le.addShape(new ap(.3),new w(0,.3,0));le.addShape(new ap(.28),new w(0,.95,0));le.collisionFilterGroup=2;le.allowSleep=!1;le.isPlayer=!0;Je.addBody(le);le.material=new yl("player");function xP(){const i=Je.defaultMaterial;for(const t of Je.bodies)t.material||(t.material=i);Je.addContactMaterial(new _l(le.material,i,{friction:0,restitution:0}))}const Gx={collisionFilterMask:1,skipBackfaces:!0},Nr=new Bo,lh=new w,ch=new w;function Wx(i,t,e){return lh.set(i,e,t),ch.set(i,e-8,t),Nr.reset(),Je.raycastClosest(lh,ch,Gx,Nr)?Nr.hitPointWorld.y:ao(i,t)}const Bt={mode:"foot",wantExit:!1},W={t:0,yaw:Qn.yaw,phase:0,hs:0,grounded:!0,lastGround:0,jumpBuf:-1,prevJump:0,airVy:0,stretch:0,squash:0,airW:0,cheer:0,tiredW:0,breathT:0,carry:!1,carryW:0,idleT:0,blink:3,blinkT:0,inWater:!1,path:[],seqT:0,from:new R,to:new R,door:0,doorGoal:0},Go=()=>Bt.mode==="foot"||Bt.mode==="toCar";function El(i,t,e){le.position.set(i,Wx(i,t,6)+.02,t),le.velocity.setZero(),le.previousPosition.copy(le.position),le.interpolatedPosition.copy(le.position),W.yaw=e,qt.position.copy(le.position),qt.rotation.y=e}function qx(){Go()&&(Bt.mode="foot",El(Qn.x,Qn.z,Qn.yaw),te.pop())}const _P=()=>{Go()&&(W.cheer=1.8)},Kr=new ge;qt.updateMatrixWorld(!0);Kr.position.set(0,new Fs().setFromObject(et.head).max.y-qt.position.y-Yr-.1+.02,.04);et.spine.add(Kr);function Xx(i){i!==W.carry&&(W.carry=i,W.cheer=0,W.idleT=0,Go()&&(W.squash=Math.max(W.squash,.55)))}function mg(i,t,e,n){const s=Je.bodies.includes(le);if(Bt.wantExit=!1,W.path=[],W.seqT=0,W.door=W.doorGoal=0,Ux(0),W.cheer=0,W.squash=W.stretch=0,le.velocity.setZero(),i){s&&Je.removeBody(le),Bt.mode="car",qt.visible=!1;return}s||Je.addBody(le),Bt.mode="foot",qt.visible=!0,W.grounded=!0,El(t,e,n)}Yo("player",{save:()=>({inCar:Bt.mode==="car"||Bt.mode==="enter"||Bt.mode==="exit",x:+le.position.x.toFixed(3),z:+le.position.z.toFixed(3),yaw:+W.yaw.toFixed(3)}),load:i=>mg(i.inCar,i.x,i.z,i.yaw),reset:()=>mg(!1,Qn.x,Qn.z,Qn.yaw),summary:i=>i.inCar?"di mobil":""});El(Qn.x,Qn.z,Qn.yaw);const qa=[.3,-1.95],Dr=new R(.3,.25,-.55),yP=new Ei,Ur=new R,Xa=new R,bo=new R,$a=new ut,Fh=(i,t,e,n)=>n.set(i,t,e).applyQuaternion(Ht.quaternion).add(Ht.position),MP=(i,t)=>t.copy(i).sub(Ht.position).applyQuaternion(yP.copy(Ht.quaternion).invert()),hh=(i,t)=>(Xa.set(i,0,t).applyQuaternion(Ht.quaternion),Math.atan2(Xa.x,Xa.z)),wP=i=>Math.atan2(Math.sin(i),Math.cos(i)),uh=(i,t,e)=>i+wP(t-i)*e;function Cp(i,t,e,n=.6){const s=Vo(i.x,i.z);i.y<Ds?$a.copy(Ss.uFoam.value).multiplyScalar(.8).addScalar(.2):$a.copy(s.asphalt>.5?Te.uAsphalt.value:s.paved>.5?Te.uPaved.value:Te.uGround.value).multiplyScalar(1.2);for(let o=0;o<t;o++){const r=Math.random()*Math.PI*2;Do.spawn(Ur.set(i.x+Math.cos(r)*.2,Math.max(i.y,Ds)+.08,i.z+Math.sin(r)*.2),Xa.set(Math.cos(r)*e,Xt(.2,n),Math.sin(r)*e),Xt(.08,.15),Xt(.35,.6),$a,.2)}}function $x(i){W.squash=.4+i*.6,te.step(1),Cp(le.position,4+Math.round(i*6),1.2+i)}const gg={enter:{label:"Masuk mobil",quiet:!0,action:()=>dh()},flip:{label:"Balikkan mobil",action:()=>Nh()}},jx=()=>Math.hypot(le.position.x-Ht.position.x,le.position.z-Ht.position.z)<4.3&&Math.abs(le.position.y-Ht.position.y)<2.5,SP=()=>Bt.mode==="foot"&&jx()?Ih()?gg.flip:gg.enter:null;function dh(){if(Bt.mode==="foot"&&jx()){if(Ih()){Nh();return}const i=MP(le.position,Ur);if(W.path=[],i.z>-1.45){const t=i.x>qa[0]?2.95:-2.95;W.path.push([t,i.z],[t,qa[1]])}W.path.push(qa),W.seqT=0,W.cheer=0,Bt.mode="toCar"}else Bt.mode==="toCar"?Bt.mode="foot":Bt.mode==="car"&&(wn.speed<2.5?Yx():Bt.wantExit=!Bt.wantExit)}function bP(){Bt.mode="enter",W.seqT=0,W.from.copy(qt.position),Je.removeBody(le),le.velocity.setZero()}function Yx(){Bt.mode="exit",Bt.wantExit=!1,W.seqT=0,W.doorGoal=1,te.door(!0),Fh(qa[0],0,qa[1],W.to),W.to.y=Wx(W.to.x,W.to.z,Ht.position.y+1.5)+.02,Ih()&&(W.to.y=Math.max(W.to.y,Ht.position.y+1))}const vi={pos:new R,vel:new R,lead:.22,scale:1};function EP(){return Bt.mode==="car"||Bt.mode==="enter"&&W.seqT>.7||Bt.mode==="exit"&&W.seqT<.35?(vi.pos.copy(Ht.position),vi.pos.y=Math.max(Ht.position.y-.6,0),vi.vel.copy(fe.velocity),vi.lead=.22,vi.scale=1):(vi.pos.copy(qt.position),vi.pos.y+=.55,Go()?vi.vel.copy(le.velocity):vi.vel.set(0,0,0),vi.lead=.14,vi.scale=.48),vi}const TP=()=>Bt.mode==="car"?Ht.position:qt.position,Kx={fwd:0,back:0,left:0,right:0,brake:0,boost:0},AP={...Kx,brake:1},CP=i=>Bt.wantExit?AP:i,Xs=[];function RP(i,t){const e=le.position,n=le.velocity;lh.set(e.x,e.y+.45,e.z),ch.set(e.x,e.y-.3,e.z),Nr.reset();const s=Je.raycastClosest(lh,ch,Gx,Nr)&&Nr.distance<.55;let o=!1;Xs.length=0;for(const v of Je.contacts){const m=v.bi===le?-1:v.bj===le?1:0;if(!m)continue;const g=v.ni.y*m,x=m<0?v.bj:v.bi;g>.5?o=!0:Math.abs(g)<.5&&(x.mass===0||!W.grounded)&&Xs.length<8&&Xs.push(v.ni.x*m,v.ni.z*m)}const r=W.grounded;W.grounded=(s||o)&&n.y<2.5,W.grounded?(W.lastGround=W.t,!r&&W.airVy<-2.5&&$x(Math.min(1,-W.airVy/10))):W.airVy=n.y;let a,l,c=!!t.boost;if(Bt.mode==="toCar"){W.seqT+=i,(t.fwd||t.back||t.left||t.right||t.brake)&&(Bt.mode="foot");const v=W.path[0];Fh(v[0],0,v[1],Ur);const m=Ur.x-e.x,g=Ur.z-e.z,x=Math.hypot(m,g),_=W.path.length===1;if((x<(_?.22:.5)||W.seqT>5)&&(W.path.shift(),(!W.path.length||W.seqT>5)&&Bt.mode==="toCar")){bP();return}const M=_?Ge(x/.8,.25,1):1;a=m/(x||1)*M,l=g/(x||1)*M,c=x>3}if(Bt.mode==="foot"){const v=t.right-t.left,m=t.fwd-t.back;Ie.getWorldDirection(bo),bo.y=0,bo.normalize(),a=bo.x*m-bo.z*v,l=bo.z*m+bo.x*v;const g=Math.hypot(a,l);g>1&&(a/=g,l/=g)}W.inWater=e.y<Ds-.2;const h=Math.hypot(a,l)>.3;Bt.mode==="foot"&&(c=c&&h&&OC(),c&&W.grounded&&BC(i));const d=(c?gP:mP)*(W.inWater?.55:1)*(Bt.mode==="foot"?zC():1),u=1-Math.exp(-i*(W.grounded?14:3.5));let f=n.x+(a*d-n.x)*u,p=n.z+(l*d-n.z)*u;for(let v=0;v<Xs.length;v+=2){const m=f*Xs[v]+p*Xs[v+1];m<0&&(f-=m*Xs[v],p-=m*Xs[v+1])}n.x=f,n.z=p,Math.hypot(a,l)>.05&&(W.yaw=uh(W.yaw,Math.atan2(a,l),1-Math.exp(-i*12))),t.brake&&!W.prevJump&&(W.jumpBuf=W.t),W.prevJump=t.brake,Bt.mode==="foot"&&W.jumpBuf>=0&&W.t-W.jumpBuf<.15&&W.t-W.lastGround<.12&&kC()&&(n.y=vP,W.jumpBuf=-1,W.lastGround=-1,W.grounded=!1,W.stretch=1,W.cheer=0,te.jump(),Cp(e,4,.8)),e.y<-6&&qx()}function PP(i){const t=W.seqT+=i;t>.08&&t<.9&&W.doorGoal===0&&(W.doorGoal=1,te.door(!0));const e=hh(0,1),n=hh(-1,0),s=ke(.42,.95,t);W.yaw=uh(uh(W.yaw,e,1-Math.exp(-i*12)),n,s),Fh(Dr.x,Dr.y,Dr.z,W.to),qt.position.lerpVectors(W.from,W.to,s),qt.position.y+=Math.sin(Math.PI*s)*.55,t>.92&&(qt.visible=!1),t>.95&&(W.doorGoal=0),t>1.35&&(Bt.mode="car")}function LP(i){const t=W.seqT+=i;qt.visible=t>.22,Fh(Dr.x,Dr.y,Dr.z,W.from);const e=ke(.28,.78,t);W.yaw=uh(hh(-1,0),hh(0,-1),ke(.2,.6,t)),qt.position.lerpVectors(W.from,W.to,e),qt.position.y+=Math.sin(Math.PI*e)*.5,t>.78&&(le.position.set(W.to.x,W.to.y,W.to.z),le.velocity.setZero(),le.previousPosition.copy(le.position),le.interpolatedPosition.copy(le.position),Je.addBody(le),Bt.mode="foot",W.grounded=!0,W.doorGoal=0,$x(.4))}function IP(i,t,e){W.t+=i;const n=e?t:Kx;Go()?RP(i,n):Bt.mode==="enter"?PP(i):Bt.mode==="exit"?LP(i):Bt.wantExit&&wn.speed<2.5&&Yx();const s=W.door;W.door+=Ge(W.doorGoal-W.door,-i/.3,i/.3),s>0&&W.door===0&&te.door(!1),Ux(W.door*W.door*(3-2*W.door))}const De={},jt={},NP=Hx(),Zx=["hipsY","hipsYaw","spineX","spineY","spineZ","headX","headY","lHipX","lKnee","rHipX","rKnee","lShX","lShZ","lElX","lElZ","rShX","rShZ","rElX","rElZ","mouth"];for(const i of Zx)De[i]=jt[i]=0;De.hipsY=Yr;De.mouth=1;const oe=(i,t,e)=>{jt[i]+=(t-jt[i])*e};function DP(i){if(Go()&&(qt.position.copy(le.interpolatedPosition),qt.visible=!0),qt.rotation.y=W.yaw,qt.visible?Te.uPlayerPos.value.copy(qt.position):Te.uPlayerPos.value.set(9999,-99,9999),!qt.visible)return;const t=Go(),e=W.t,n=le.velocity;W.hs+=((t?Math.hypot(n.x,n.z):0)-W.hs)*(1-Math.exp(-i*10));const s=!t||W.grounded;W.airW+=((s?0:1)-W.airW)*(1-Math.exp(-i*(s?16:8)));const o=ke(.15,1.6,W.hs)*(1-W.airW),r=ke(3.6,6.2,W.hs),a=W.phase;W.phase+=i*W.hs*Ue(2.9,2.3,r),t&&s&&W.hs>.8&&Math.floor(W.phase/Math.PI)!==Math.floor(a/Math.PI)&&(te.step(r*.6),W.inWater||tP(qt.position.x,qt.position.y,qt.position.z,W.yaw,Math.floor(W.phase/Math.PI)%2?1:-1),(r>.5||W.inWater)&&Cp(qt.position,W.inWater?3:1,.5,W.inWater?2.5:.6)),W.idleT=t&&s&&o<.1?W.idleT+i:0,W.idleT>9&&!W.carry&&(W.cheer=1.8,W.idleT=0),(o>.3||!s)&&(W.cheer=0),W.cheer=Math.max(0,W.cheer-i),W.squash=Math.max(0,W.squash-i*4),W.stretch=Math.max(0,W.stretch-i*4);const l=Math.sin(W.phase),c=Math.cos(W.phase),h=Math.sin(e*2.2),d=Ue(.55,.85,r)*o,u=Ue(.7,1.35,r)*o,f=Ue(.45,1,r)*o;if(jt.hipsY=Yr+o*(Ue(.025,.06,r)*(Math.abs(c)-.6)-r*.04),jt.hipsYaw=-l*.1*o,jt.spineX=.03+h*.012+o*Ue(.06,.26,r),jt.spineY=l*.14*o,jt.spineZ=0,jt.headX=-jt.spineX*.5+Math.sin(e*1.3)*.02,jt.headY=-jt.spineY*.8+(1-o)*Math.sin(e*.45)*.35*ke(2.5,4.5,W.idleT),jt.lHipX=-l*d,jt.rHipX=l*d,jt.lKnee=.04+u*Math.max(0,c),jt.rKnee=.04+u*Math.max(0,-c),jt.lShX=.04+l*f,jt.rShX=.04-l*f,jt.lShZ=.12+h*.02+r*.1*o,jt.rShZ=-jt.lShZ,jt.lElX=jt.rElX=-.18-Ue(.1,1.2,r)*o,jt.lElZ=jt.rElZ=0,jt.mouth=1+r*.25*o,W.airW>.01){const x=W.airW,_=ke(-2,2,n.y),M=Math.sin(e*18)*.18*(1-_);oe("lHipX",Ue(-.25,-.95,_),x),oe("lKnee",Ue(.35,1.3,_),x),oe("rHipX",Ue(-.1,.35,_),x),oe("rKnee",Ue(.25,.6,_),x),oe("lShX",Ue(-.5,-.3,_),x),oe("lShZ",Ue(1.9,.6,_)+M,x),oe("rShX",Ue(-.5,.5,_),x),oe("rShZ",-Ue(1.9,.6,_)+M,x),oe("lElX",-.5,x),oe("rElX",-.5,x),oe("spineX",.12,x),oe("mouth",1.6,x)}if((W.breathT-=i)<0&&(W.breathT=Xt(1.4,2.2),Oc("kedinginan")||Oc("membeku"))){const x=Math.sin(W.yaw),_=Math.cos(W.yaw);$a.setRGB(1,1,1),Do.spawn(Ur.set(qt.position.x+x*.28,qt.position.y+1.2,qt.position.z+_*.28),Xa.set(x*.5,.15,_*.5),.07,.9,$a,.25)}if(W.tiredW+=((t&&Oc("ngos")?1:0)-W.tiredW)*(1-Math.exp(-i*5)),W.tiredW>.01){const x=W.tiredW*(1-W.airW),_=Math.sin(e*10)*.5+.5;jt.spineX+=(.3+_*.05)*x,jt.headX-=.2*x,jt.mouth+=(.4+_*.7)*x,jt.lShZ+=.15*x,jt.rShZ-=.15*x,jt.hipsY-=.03*x}if(W.squash>0){const x=Math.min(W.squash,1);jt.hipsY-=.14*x,jt.lKnee+=.75*x,jt.rKnee+=.75*x,jt.lHipX-=.45*x,jt.rHipX-=.45*x,jt.spineX+=.25*x,jt.lShZ+=.3*x,jt.rShZ-=.3*x}const p=ke(0,.25,W.cheer)*ke(1.8,1.55,W.cheer);if(p>0){const x=Math.sin(W.cheer*14)*.22;oe("rShX",-.35,p),oe("rShZ",-1.35,p),oe("rElX",0,p),oe("rElZ",-1.7+x,p),oe("lShX",.25,p),oe("lShZ",.8,p),oe("lElX",0,p),oe("lElZ",-1.6,p),jt.hipsY+=Math.abs(Math.sin(W.cheer*7))*.035*p,jt.headX-=.12*p,jt.spineZ=.06*p,jt.mouth+=.6*p}W.carryW+=((W.carry&&qt.visible?1:0)-W.carryW)*(1-Math.exp(-i*12));const v=W.carryW;if(v>.01){const x=l*.05*o;oe("lShX",-.2+x,v),oe("lShZ",2.75,v),oe("lElX",0,v),oe("lElZ",.4,v),oe("rShX",-.2-x,v),oe("rShZ",-2.75,v),oe("rElX",0,v),oe("rElZ",-.4,v),oe("spineX",jt.spineX*.4-.04,v),oe("headX",-.08,v),oe("headY",0,v*.6)}if(Kr.rotation.z=-jt.spineZ,Kr.rotation.x=-jt.spineX*.8,Bt.mode==="enter"||Bt.mode==="exit"){const x=W.seqT,_=Bt.mode==="enter",M=_?ke(.05,.25,x)*ke(.55,.4,x):0,C=ke(_?.38:.8,.6,x);oe("lShX",-1.35,M),oe("lShZ",.15,M),oe("lElX",-.2,M),oe("hipsY",Yr-.2,C),oe("lHipX",-1.3,C),oe("lKnee",1.6,C),oe("rHipX",-.6,C),oe("rKnee",1.1,C),oe("spineX",.35,C),oe("lShX",-1.1,C),oe("rShX",-1.1,C),oe("mouth",1.5,C)}const m=1-Math.exp(-i*22);for(const x of Zx)De[x]+=(jt[x]-De[x])*m;et.hips.position.y=De.hipsY,et.hips.rotation.y=De.hipsYaw,et.spine.rotation.set(De.spineX,De.spineY,De.spineZ),et.head.rotation.set(De.headX,De.headY,0),et.L.hip.rotation.x=De.lHipX,et.L.knee.rotation.x=De.lKnee,et.L.foot.rotation.x=-(De.lHipX+De.lKnee)*.85,et.R.hip.rotation.x=De.rHipX,et.R.knee.rotation.x=De.rKnee,et.R.foot.rotation.x=-(De.rHipX+De.rKnee)*.85,et.LA.sh.rotation.set(De.lShX,0,De.lShZ),et.LA.el.rotation.set(De.lElX,0,De.lElZ),et.RA.sh.rotation.set(De.rShX,0,De.rShZ),et.RA.el.rotation.set(De.rElX,0,De.rElZ),et.mouth.scale.set(1,De.mouth,1),Vx(et,NP,i,e,p>.3?"senang":void 0),et.bucket.rotation.x=Math.sin(W.phase*2)*.3*o-W.airW*.35*Math.sign(n.y),et.basket.rotation.z=Math.sin(W.phase)*.12*o,W.blink-=i,W.blink<0&&(W.blink=Xt(2,5),W.blinkT=.12),W.blinkT=Math.max(0,W.blinkT-i),et.eyes.scale.y=W.blinkT>0?.15:1;const g=W.stretch*.12*(1-W.stretch*.3)-Math.min(W.squash,1)*.1;Dh.scale.set(1-g*.5,1+g,1-g*.5)}const $e={started:!1,activeZone:null},Zr=()=>["modal","inventory","pause","profile","fade","mapView"].some(i=>$(i).classList.contains("show")),UP=()=>$("optWind").checked;function Tl(i,t=null){$("modalBody").innerHTML=i,$("modalBody").onclick=t,$("modal").classList.add("show"),fo()}function Oh(){$("modal").classList.remove("show")}function Rp(i,t,e=900){return $("fade").classList.contains("show")?Promise.resolve():($("fadeText").innerHTML=i||"",$("fade").classList.add("show"),fo(),new Promise(n=>setTimeout(()=>{t&&t(),setTimeout(()=>{$("fade").classList.remove("show"),setTimeout(n,500)},e)},550)))}function Jx(i){i.action&&(i.action(),i.quiet||te.pop()),i.content&&Tl(i.content)}function Qx(){Bt.mode==="car"?Ih()?Nh():Fx():qx()}const FP={foot:"<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> / panah = jalan · <kbd>Shift</kbd> lari · <kbd>Space</kbd> lompat · <kbd>F</kbd> masuk mobil · <kbd>E</kbd> ambil · <kbd>I</kbd> tas · <kbd>P</kbd> profil · <kbd>K</kbd> kalender · <kbd>M</kbd> peta · <kbd>R</kbd> reset<br>Drag mouse = putar kamera · Scroll = zoom · <kbd>C</kbd> reset kamera",car:"<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> / panah = setir · <kbd>Shift</kbd> boost · <kbd>Space</kbd> rem · <kbd>H</kbd> klakson · <kbd>F</kbd> keluar mobil · <kbd>R</kbd> reset"};let vg=0;function t_(i,t=8e3){$("hint").innerHTML=FP[i?"car":"foot"],$("hint").style.opacity=.85,clearTimeout(vg),vg=setTimeout(()=>{$("hint").style.opacity=0},t)}function Pp(i){i!==$e.activeZone&&($e.activeZone=i,$("prompt").innerHTML=i?`<kbd>E</kbd> ${i.label}`:"",$("prompt").classList.toggle("show",!!i))}document.addEventListener("click",i=>{const t=i.target.closest("button");t&&t.blur()});const OP=new Set(["KeyE","Enter","NumpadEnter","Space",...Object.keys(ol)]);addEventListener("keydown",i=>{$e.started&&!Zr()&&OP.has(i.code)&&document.activeElement?.tagName==="BUTTON"&&(i.preventDefault(),document.activeElement.blur()),!((i.target.tagName==="INPUT"||i.target.tagName==="SELECT")&&i.code!=="Escape")&&(ol[i.code]&&(Ho[ol[i.code]]=1,i.preventDefault()),!i.repeat&&(i.code==="Escape"&&(Oh(),$("settings").classList.remove("show")),i.code==="KeyT"&&$("settings").classList.toggle("show"),(i.code==="BracketLeft"||i.code==="BracketRight")&&zh((Zt.hour+(i.code==="BracketLeft"?-1:1)+24)%24),!(!$e.started||Zr())&&(i.code==="KeyR"&&Qx(),i.code==="KeyH"&&Bt.mode==="car"&&te.horn(),i.code==="KeyF"&&dh(),i.code==="KeyN"&&e_(),(i.code==="KeyE"||i.code==="Enter")&&($e.activeZone?Jx($e.activeZone):Bt.mode==="car"&&dh()),NC(i.code))))});addEventListener("keyup",i=>{ol[i.code]&&(Ho[ol[i.code]]=0)});addEventListener("blur",fo);document.querySelectorAll("#touch button").forEach(i=>{const t=i.dataset.k,e=n=>s=>{s.preventDefault(),Ho[t]=n,i.classList.toggle("on",!!n)};i.addEventListener("pointerdown",e(1)),i.addEventListener("pointerup",e(0)),i.addEventListener("pointerleave",e(0)),i.addEventListener("pointercancel",e(0))});$("modalClose").onclick=Oh;$("modal").onclick=i=>{i.target.id==="modal"&&Oh()};$("prompt").onclick=()=>$e.activeZone&&Jx($e.activeZone);$("respawnBtn").onclick=Qx;function ve(i,t){const e=document.createElement("div");for(e.className="toast",e.innerHTML=(t?`<img src="${t}" alt="">`:"")+`<span>${i}</span>`,$("toasts").prepend(e);$("toasts").children.length>4;)$("toasts").lastChild.remove();setTimeout(()=>{e.classList.add("out"),setTimeout(()=>e.remove(),400)},1800)}$("carBtn").onclick=()=>{$e.started&&!Zr()&&dh()};function e_(){const i=te.toggle();$("muteIcon").innerHTML=i?'<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9l5 6M21 9l-5 6"/>':'<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/>'}$("muteBtn").onclick=e_;$("clock").onclick=()=>$("settings").classList.toggle("show");function zh(i){Zt.real=!1,Zt.hour=i,$("realTime").checked=!1,$("speedSel").disabled=!1}$("realTime").onchange=i=>{Zt.real=i.target.checked,$("speedSel").disabled=Zt.real};$("hourSlider").oninput=i=>zh(parseFloat(i.target.value));$("speedSel").onchange=i=>{Zt.speed=parseFloat(i.target.value)};$("speedSel").disabled=!0;const n_=()=>{$("realTime").checked=Zt.real,$("speedSel").disabled=Zt.real,[...$("speedSel").options].some(i=>+i.value===Zt.speed)&&($("speedSel").value=String(Zt.speed))};je("save:applied",n_);je("time:skipped",n_);document.querySelectorAll("#settings .presets button[data-h]").forEach(i=>{i.onclick=()=>zh(parseFloat(i.dataset.h))});$("weatherBtns").innerHTML=Object.entries(He.weathers).map(([i,t])=>`<button data-w="${i}">${t.icon} ${t.name}</button>`).join("")+'<button data-w="">🔄 Otomatis</button>';const Lp=()=>{const i=Vn().weather.id;for(const t of $("weatherBtns").children)t.classList.toggle("on",t.dataset.w===i)};$("weatherBtns").onclick=i=>{const t=i.target.closest("button[data-w]");t&&(fx(t.dataset.w||null),Lp())};je("calendar:day",Lp);function Ip(i,t=!0){hC(i);for(const e of Ex)e.visible=i==="high"||e.userData.layer===0;if(t)try{localStorage.setItem("tester.quality",i)}catch{}}$("qualitySel").onchange=i=>Ip(i.target.value);function zP(){try{const i=bi.getContext(),t=i.getExtension("WEBGL_debug_renderer_info");return/intel|iris|uhd|mali|adreno|powervr|apple|swiftshader/i.test(t?i.getParameter(t.UNMASKED_RENDERER_WEBGL):"")}catch{return!1}}function BP(){let i=null;try{i=localStorage.getItem("tester.quality")}catch{}i||(i=zP()?"auto":"high"),$("qualitySel").value=i,Ip(i,!1)}$("optShadow").onchange=i=>{nn.castShadow=i.target.checked};$("optBloom").onchange=i=>{Ps.enabled=i.target.checked};$("optTilt").onchange=i=>Jd(i.target.checked);$("optFps").onchange=i=>{$("fps").style.display=i.target.checked?"block":"none"};const xg=i=>{const t=Math.floor(i*60)%1440;return String(Math.floor(t/60)).padStart(2,"0")+":"+String(t%60).padStart(2,"0")},kP='<circle r="7" fill="#ffd45a"/>'+Array.from({length:8},(i,t)=>{const e=t*Math.PI/4;return`<line x1="${Math.cos(e)*9.5}" y1="${Math.sin(e)*9.5}" x2="${Math.cos(e)*13}" y2="${Math.sin(e)*13}" stroke="#ffd45a" stroke-width="2.4" stroke-linecap="round"/>`}).join(""),HP='<circle r="8" fill="#e8e6ff"/><circle r="7" cx="4" cy="-3" fill="#1b1624"/>';let _g=null,yg="";function VP(i){const t=i>=6&&i<18,e=t?(i-6)/12:(i-18+24)%24/12,n=6+88*e,s=50-44*Math.sin(Math.PI*e);t!==_g&&($("skyIcon").innerHTML=t?kP:HP,_g=t),$("skyIcon").setAttribute("transform",`translate(${n.toFixed(1)} ${s.toFixed(1)})`);const o=xg(i);o!==yg&&(yg=o,$("clockTime").textContent=o,$("clockLabel").textContent=ax(i),Lp(),$("hourVal").textContent=o,$("realNow").textContent=xg(vp()),document.activeElement!==$("hourSlider")&&($("hourSlider").value=i))}let ju=0,wc=0;function GP(i){ju++,wc+=i,wc>.5&&($("fps").textContent=Math.round(ju/wc)+" fps · resolusi "+Math.round(uC()*100)+"%",ju=0,wc=0)}const Mg=(i,t)=>{$("bar").firstElementChild.style.width=i*100+"%",t&&($("loadText").textContent=t)},ul=20,dl=new Map,_e={slots:Array.from({length:ul},()=>null),held:null};function WP(i){return dl.set(i.id,{stack:99,...i}),dl.get(i.id)}const ei=i=>dl.get(i)||{id:i,name:i,stack:99},wg=()=>[...dl.values()],Wo=()=>Ye("inventory:changed",_e);function Np(i){const t=ei(i).stack;let e=0;for(const n of _e.slots)e+=n?n.id===i?t-n.n:0:t;return e}function qo(i,t=1){const e=ei(i).stack,n=_e.slots;let s=t;for(const r of n)if(s&&r&&r.id===i&&r.n<e){const a=Math.min(e-r.n,s);r.n+=a,s-=a}for(let r=0;r<n.length&&s;r++)if(!n[r]){const a=Math.min(e,s);n[r]={id:i,n:a},s-=a}const o=t-s;return o&&(Wo(),Ye("inventory:added",{id:i,n:o})),s&&Ye("inventory:full",{id:i,n:s}),o}function Dp(i,t=1){const e=_e.slots[i];return e?(e.n-=Math.min(t,e.n),e.n<=0&&(_e.slots[i]=null),Wo(),e.id):null}function qP(i,t=1){if(io(i)<t)return!1;const e=_e.slots;for(let n=e.length-1;n>=0&&t;n--)if(e[n]&&e[n].id===i){const s=Math.min(e[n].n,t);e[n].n-=s,t-=s,e[n].n||(e[n]=null)}return Wo(),!0}const io=i=>_e.slots.reduce((t,e)=>t+(e&&e.id===i?e.n:0),0);function XP(i,t){const e=_e.slots,n=e[i],s=e[t];if(!(i===t||!n)){if(s&&s.id===n.id){const o=Math.min(ei(n.id).stack-s.n,n.n);s.n+=o,n.n-=o,n.n||(e[i]=null)}else e[i]=s,e[t]=n;Wo()}}function i_(i){_e.held=i,Wo()}Yo("inventory",{save:()=>_e.slots.map(i=>i?[i.id,i.n]:0),load(i){_e.slots=Array.from({length:ul},(t,e)=>i[e]&&dl.has(i[e][0])?{id:i[e][0],n:i[e][1]}:null),Wo()},reset(){_e.slots=Array.from({length:ul},()=>null),Wo()},summary:i=>{const t=i.reduce((e,n)=>e+(n?n[1]:0),0);return t?`${t} barang`:""}});const Sg=180,bg=270,Al=qt.clone(!0);Al.position.set(0,0,0);Al.rotation.set(0,0,0);Al.visible=!0;const un=uP(Al),Eg=Hx(),fh={x:innerWidth/2,y:innerHeight/2},ji={x:0,y:0};let ai=null,Oa,Hc,ja=null,fl,ph=0,vf=0,mh=0,Lo=0,Ra=0,xf=0;const mr={y:1.05,z:4.4,at:.84},Yu={y:1.42,z:1.55,at:1.36};function $P(){ai=new qf({antialias:!0,alpha:!0}),ai.setPixelRatio(Math.min(devicePixelRatio,2)),ai.setSize(Sg,bg),ai.setClearColor(0,0),ai.toneMapping=pl,ai.domElement.className="cp-canvas",ai.domElement.title="Klik: melambai · Scroll: zoom ke wajah",Oa=new $f,Oa.add(new tp("#ffffff","#5a4a7a",2.1));const i=new np("#fff4e0",2.4);i.position.set(1.5,3,3),Oa.add(i);const t=new Xe(new xi(.42,24).rotateX(-Math.PI/2),new ui({color:0,transparent:!0,opacity:.28}));t.position.y=.005,Oa.add(t,Al),Hc=new En(24,Sg/bg,.1,20),fl=document.createElement("div"),fl.className="cp-mood",addEventListener("pointermove",e=>{fh.x=e.clientX,fh.y=e.clientY}),ai.domElement.addEventListener("click",()=>{Lo=1.8}),ai.domElement.addEventListener("wheel",e=>{e.preventDefault(),xf=Ge(xf-Math.sign(e.deltaY)*.34,0,1)},{passive:!1})}function jP(i){const t=ai.domElement.getBoundingClientRect(),e=Ge((fh.x-(t.left+t.width/2))/320,-1,1),n=Ge((fh.y-(t.top+t.height*.3))/320,-1,1),s=1-Math.exp(-i*7);ji.x+=(e-ji.x)*s,ji.y+=(n-ji.y)*s;const o=Math.sin(mh*2.2);un.squash.scale.set(1,1,1),un.hips.position.y=Yr+o*.004,un.hips.rotation.set(0,ji.x*.12,0),un.spine.rotation.set(.03+o*.012,ji.x*.22,0),un.head.rotation.set(ji.y*.4,ji.x*.65,0),un.eyes.position.set(ji.x*.014,.19-ji.y*.01,.192);for(const[r,a]of[[un.L,1],[un.R,-1]])r.hip.rotation.set(0,0,a*.02),r.knee.rotation.set(.04,0,0),r.foot.rotation.set(-.03,0,0);if(un.LA.sh.rotation.set(.04,0,.12+o*.02),un.LA.el.rotation.set(-.18,0,0),un.RA.sh.rotation.set(.04,0,-.12-o*.02),un.RA.el.rotation.set(-.18,0,0),Lo>0){Lo-=i;const r=Math.min(1,Lo*3,(1.8-Lo)*5);un.RA.sh.rotation.set(-.2*r,0,-.12-2.5*r),un.RA.el.rotation.set(0,0,(-.3+Math.sin(mh*14)*.45)*r),un.head.rotation.z=.08*r}un.bucket.rotation.set(0,0,0),un.basket.rotation.set(0,0,0),un.mouth.scale.set(1,1+(Lo>0?.3:0),1)}function s_(i){if(!ja||!ja.isConnected||ja.offsetParent===null){ph=0;return}ph=requestAnimationFrame(s_);const t=Ge((i-vf)/1e3,0,.05);vf=i,mh+=t,Ra+=(xf-Ra)*(1-Math.exp(-t*8));const e=Ra*Ra*(3-2*Ra);Hc.position.set(0,mr.y+(Yu.y-mr.y)*e,mr.z+(Yu.z-mr.z)*e),Hc.lookAt(0,mr.at+(Yu.at-mr.at)*e,0),jP(t),Vx(un,Eg,t,mh,Lo>0?"senang":void 0);const n=gf[Eg.mood].label;fl.textContent!==n&&(fl.textContent=n),ai.render(Oa,Hc)}function o_(i){ai||$P(),ja!==i&&(i.append(ai.domElement,fl),ja=i),ph||(vf=performance.now(),ph=requestAnimationFrame(s_))}const es=-1;let vn=null;const _f=()=>$("inventory").classList.contains("show"),so=[];function _r(i=!_f()){i&&(!$e.started||$("modal").classList.contains("show"))||i!==_f()&&($("inventory").classList.toggle("show",i),i&&(fo(),vn=null,Jr(),o_($("invPreview"))),te.pop())}const Up=(i,t="")=>{const e=ei(i);return e.icon?`<img class="${t}" src="${e.icon}" alt="" draggable="false">`:`<i class="dot ${t}" style="background:${e.color||"#ccc"}"></i>`},r_=i=>i?Up(i.id)+(i.n>1?`<b>${i.n}</b>`:""):"";function YP(){const i=vn===es?_e.held:vn!==null&&_e.slots[vn]?.id;if(!i)return`<p class="inv-empty">${_e.slots.some(Boolean)||_e.held?"Pilih barang untuk melihat detailnya.":"Tas masih kosong.<br>Dekati barang di taman lalu tekan <kbd>E</kbd>."}</p>`;const t=ei(i),e=vn===es?1:_e.slots[vn].n,s=(t.use?`<button data-act="use" class="use">${t.use.verb||"Pakai"}</button>`:"")+(vn===es?'<button data-act="stash">Simpan ke tas</button><button data-act="drop" class="alt">Taruh</button>':`<button data-act="hold"${_e.held?' title="Tanganmu penuh: barang yang dipegang akan disimpan dulu"':""}>Pegang</button><button data-act="drop" class="alt">Buang 1</button>`);return`<div class="inv-big">${Up(i)}</div><h3 class="amatic">${t.name}</h3>`+(t.desc?`<p>${t.desc}</p>`:"")+`<p class="inv-meta">${vn===es?"Sedang dipegang":`Jumlah: <b>${e}</b>`}${vn===es&&io(i)?` · di tas: <b>${io(i)}</b>`:""}${t.price?` · harga <b>${t.price} G</b>`:""}</p><div class="inv-btns">${s}</div>`}function Jr(){_e.slots.forEach((i,t)=>{so[t].innerHTML=r_(i),so[t].classList.toggle("full",!!i),so[t].classList.toggle("sel",vn===t)}),$("invHand").innerHTML=_e.held?Up(_e.held):"",$("invHand").classList.toggle("full",!!_e.held),$("invHand").classList.toggle("sel",vn===es),$("invCap").textContent=`${_e.slots.filter(Boolean).length}/${ul} slot`,$("invDetail").innerHTML=YP()}function Tg(){const i=_e.slots.reduce((t,e)=>t+(e?e.n:0),0);$("bagCount").textContent=i>99?"99+":i||""}function a_(i){vn=(i===es?_e.held:_e.slots[i]?.id)&&vn!==i?i:null,Jr()}function Ag(i){const t=vn;let e=0;i==="hold"?e=Ye("inventory:hold",{slot:t}):i==="drop"?e=Ye("inventory:drop",{slot:t}):i==="stash"?e=Ye("inventory:stash"):i==="use"&&(e=Ye("inventory:use",{slot:t})),e||ve("Belum bisa dilakukan di sini"),i==="hold"||t===es&&i!=="use"?_r(!1):t===es?(_e.held||(vn=null),Jr()):(_e.slots[t]||(vn=null),Jr())}let Sn=null;function KP(i){if(!Sn)return;if(!Sn.ghost){if(Math.hypot(i.clientX-Sn.x,i.clientY-Sn.y)<6||!_e.slots[Sn.from])return;Sn.ghost=document.createElement("div"),Sn.ghost.className="slot full inv-ghost",Sn.ghost.innerHTML=r_(_e.slots[Sn.from]),document.body.append(Sn.ghost),so[Sn.from].classList.add("dragging")}Sn.ghost.style.transform=`translate(${i.clientX}px, ${i.clientY}px) translate(-50%, -50%) scale(1.1)`;const t=document.elementFromPoint(i.clientX,i.clientY)?.closest("#invGrid .slot");for(const e of so)e.classList.toggle("over",e===t&&e!==so[Sn.from])}function Cg(i){if(!Sn)return;const t=Sn;if(Sn=null,!t.ghost){i.type==="pointerup"&&a_(t.from);return}t.ghost.remove();for(const n of so)n.classList.remove("over","dragging");const e=i.type==="pointerup"&&document.elementFromPoint(i.clientX,i.clientY)?.closest("#invGrid .slot");e&&+e.dataset.i!==t.from&&(XP(t.from,+e.dataset.i),vn=+e.dataset.i,te.step(.6)),Jr()}function ZP(){for(let i=0;i<ul;i++){const t=document.createElement("div");t.className="slot",t.dataset.i=i,$("invGrid").append(t),so.push(t)}$("invGrid").addEventListener("pointerdown",i=>{const t=i.target.closest(".slot");t&&i.button===0&&(Sn={from:+t.dataset.i,x:i.clientX,y:i.clientY,ghost:null},i.preventDefault())}),$("invGrid").addEventListener("dblclick",i=>{const t=i.target.closest(".slot");t&&_e.slots[+t.dataset.i]&&(vn=+t.dataset.i,Ag("hold"))}),addEventListener("pointermove",KP),addEventListener("pointerup",Cg),addEventListener("pointercancel",Cg),$("invHand").onclick=()=>a_(es),$("invDetail").onclick=i=>{const t=i.target.closest("button[data-act]");t&&Ag(t.dataset.act)},$("invClose").onclick=()=>_r(!1),$("inventory").onclick=i=>{i.target.id==="inventory"&&_r(!1)},$("bagBtn").onclick=()=>_r(),addEventListener("keydown",i=>{i.repeat||i.target.tagName==="INPUT"||i.target.tagName==="SELECT"||(i.code==="KeyI"||i.code==="Tab"?(i.preventDefault(),_r()):i.code==="Escape"&&_r(!1))}),je("inventory:changed",()=>{Tg(),_f()&&Jr()}),je("inventory:added",({id:i,n:t})=>{ve(`+${t} ${ei(i).name}`,ei(i).icon),$("bagBtn").classList.remove("bump"),$("bagBtn").offsetWidth,$("bagBtn").classList.add("bump")}),je("inventory:full",()=>ve("Tas penuh!")),Tg()}const JP={hunger:'<path d="M7 3v7a2 2 0 0 0 2 2 2 2 0 0 0 2-2V3M9 12v9M16.5 3C14.5 4.5 14 8 14 12h2.5v9"/>',thirst:'<path d="M12 3s6 7 6 11.2a6 6 0 0 1-12 0C6 10 12 3 12 3z"/><path d="M9.5 15a2.6 2.6 0 0 0 2.4 2.5"/>',energy:'<path d="M17 15.5A7 7 0 1 1 9 5a5.6 5.6 0 0 0 8 10.5z"/><path d="M14.5 3.5h4l-4 4h4"/>',bladder:'<path d="M7 3h5v7H7z"/><path d="M4.5 10h15a6.5 6.5 0 0 1-6.5 6.5h-2A6.5 6.5 0 0 1 4.5 10z"/><path d="M9 16.5 8 21h8l-1-4.5"/>'},QP='<path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/>',t3='<path d="M13 3 6 13h5l-1 8 7-10h-5z"/>',l_=2*Math.PI*19,Fp=re.secondsPerGameHour,c_={},h_=i=>i>50?"var(--lime)":i>25?"var(--gold)":"#ff5a6e";function e3(i){const t=Math.abs(i*Fp),e=t<.5?0:t<5?1:t<10?2:3;return(i<0?"▾":"▴").repeat(e)}const u_=i=>i>=60?`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`:`${Math.ceil(i)} dtk`;function n3(){c_.needs=Wi.map(i=>{const t=document.createElement("div");return t.className="need",t.title=re.needs[i].name,t.innerHTML=`<svg class="ring" viewBox="0 0 44 44"><circle class="bg" cx="22" cy="22" r="19"/><circle class="fg" cx="22" cy="22" r="19" stroke-dasharray="${l_}"/></svg><svg class="ico" viewBox="0 0 24 24">${JP[i]||""}</svg><i class="trend"></i>`,$("needRow").append(t),{k:i,d:t,fg:t.querySelector(".fg"),tr:t.querySelector(".trend"),last:""}});for(const[i,t]of[["hpBar",QP],["stBar",t3]])$(i).innerHTML=`<svg class="ico" viewBox="0 0 24 24">${t}</svg><div class="track"><i class="fill"></i><i class="lock"></i></div><b class="rate"></b>`}let Rg=0,Ku=0,Pg="";function Lg(i,t,e,n,s,o){const r=$(i),a=Math.max(n,e);r.querySelector(".fill").style.width=(t/a*100).toFixed(1)+"%",r.querySelector(".lock").style.width=((1-e/a)*100).toFixed(1)+"%",r.querySelector(".rate").textContent=s>.01&&t<e-.5?"+":s<-.01?"−":"",r.querySelector(".rate").className="rate "+(s>0?"up":"down"),r.classList.toggle("low",t/e<.25),o&&r.classList.toggle(o[0],o[1])}function d_(i){if(Ku+=i,(Rg+=i)<.1)return;Rg=0;for(const e of c_.needs){const n=Wt[e.k];e.fg.style.strokeDashoffset=(l_*(1-n/100)).toFixed(1),e.fg.style.stroke=h_(n),e.d.classList.toggle("crit",n<15);const s=e3(xe.rates[e.k]);s!==e.last&&(e.tr.textContent=s,e.tr.classList.toggle("up",xe.rates[e.k]>0),e.last=s);const o=xe.rates[e.k]*Fp;e.d.title=`${re.needs[e.k].name}: ${Math.round(n)}%`+(s?` · ${o>0?"naik":"turun"} ${Math.abs(o).toFixed(1)}/jam (${s})`:"")}Lg("hpBar",Wt.health,xe.maxHealth,xe.fullHealth,xe.healthRate),Lg("stBar",Wt.stamina,xe.maxStamina,xe.fullStamina,0,["norun",xe.noRun]);const t=Cn.map(e=>e.id).join();t!==Pg&&(Pg=t,$("fxRow").innerHTML=Cn.map(e=>`<span class="fx ${e.def.kind}" title="${e.def.name}: ${e.def.desc}"><i>${e.def.icon||"•"}</i>${e.def.name}<em></em></span>`).join("")),Cn.forEach((e,n)=>{const s=$("fxRow").children[n]?.lastChild;s&&(s.textContent=e.left?u_(e.left):"")}),yf()&&Ku>.5&&(Ku=0,f_())}const yf=()=>$("profile").classList.contains("show");function Pa(i=!yf()){i&&(!$e.started||["modal","inventory","pause","fade"].some(t=>$(t).classList.contains("show")))||i!==yf()&&($("profile").classList.toggle("show",i),i&&(fo(),f_(),o_($("pfPreview"))),te.pop())}const Ig=i=>{const t=i*Fp;return Math.abs(t)<.05?"—":`${t>0?"+":""}${t.toFixed(1)}/jam`};function f_(){const i=Uo.attributes,t=xe,e=re.attributes.map(o=>`<div class="pf-attr" title="${o.desc}"><span>${o.name}</span><span class="pips">${'<i class="on"></i>'.repeat(i[o.id])+"<i></i>".repeat(Math.max(0,10-i[o.id]))}</span><b>${i[o.id]}</b></div>`).join(""),n=Wi.map(o=>`<tr><td>${re.needs[o].name}</td><td><b style="color:${h_(Wt[o])}">${Math.round(Wt[o])}%</b></td><td>${Ig(t.rates[o])}</td></tr>`).join("")+`<tr><td>Darah</td><td><b>${Math.round(Wt.health)}</b> / ${Math.round(t.maxHealth)}</td><td>${Ig(t.healthRate)}</td></tr><tr><td>Stamina</td><td><b>${Math.round(Wt.stamina)}</b> / ${Math.round(t.maxStamina)}</td><td>+${t.staminaRegen.toFixed(0)}/dtk</td></tr>`,s=Cn.length?Cn.map(o=>`<div class="pf-fx ${o.def.kind}"><b>${o.def.icon||"•"} ${o.def.name}</b>${o.left?` <small>${u_(o.left)}</small>`:""}<p>${o.def.desc}</p></div>`).join(""):'<p class="pf-none">Tidak ada efek. Kondisi normal.</p>';$("profileBody").innerHTML=`
    <div class="pf-head"><div><h3 class="amatic">${Uo.name}</h3><span>${Uo.title}</span></div>
      <div class="pf-quick"><span>Kecepatan <b>${Math.round(t.speed*100)}%</b></span><span>Lari <b>${t.noRun?"tidak bisa":"bisa"}</b></span></div></div>
    <div class="pf-cols">
      <section><h4>Atribut</h4>${e}<h4>Kondisi</h4><table class="pf-tab">${n}</table></section>
      <section><h4>Efek aktif</h4>${s}
        <h4>Cara bertahan</h4><ul class="pf-tips">
          <li><b>Lapar</b>: buka tas (<kbd>I</kbd>), pilih makanan, lalu <b>Makan</b>. Jamur &amp; telur mentah bisa bikin sakit.</li>
          <li><b>Haus</b>: keran air minum di Balai Warga, atau botol air (isi ulang di keran).</li>
          <li><b>Energi</b>: tidur di kasur gazebo Balai. Waktu akan dilewati.</li>
          <li><b>Kandung kemih</b>: toilet umum di Balai. Juga menyembuhkan keracunan &amp; mual.</li>
          <li>Kebutuhan di 0% menguras darah. Darah habis = pingsan.</li>
        </ul></section>
    </div>`}function i3(){n3(),$("vitals").onclick=()=>Pa(),$("profileClose").onclick=()=>Pa(!1),$("profile").onclick=i=>{i.target.id==="profile"&&Pa(!1)},addEventListener("keydown",i=>{i.repeat||i.target.tagName==="INPUT"||i.target.tagName==="SELECT"||(i.code==="KeyP"?Pa():i.code==="Escape"&&Pa(!1))}),je("stats:effect",({on:i,def:t})=>{!t||t.quiet||!$e.started||(i?ve(`<span class="fx-toast ${t.kind}">${t.icon||""} ${t.name}</span>`):t.kind==="debuff"&&ve(`${t.name} hilang`))}),d_(1)}const Zu=He.daysPerSeason;let Ya=0;function s3(i){const t=new Set([...i.env||[],...i.envNight||[],...i.envNoon||[],...Object.keys(i.weather||{}).flatMap(e=>He.weathers[e]?.env||[])]);return re.conditions.filter(e=>e.env&&t.has(e.env)).map(e=>`<span class="dc-tag ${e.kind}" title="${e.desc}">${e.icon||""} ${e.name}</span>`).join("")||'<span class="dc-tag none">tidak ada</span>'}function o3(){const i=Vn(),t=He.seasons[Ya],e=(i.year-1)*Zu*He.seasons.length,n=e+Ya*Zu,s=[];for(let a=0;a<Zu;a++){const l=eh(n+a),c=l.index<i.index,h=l.index===i.index,d=l.index<=i.index+1,u=px(t.id,a+1);s.push(`<div class="cal-day${h?" today":""}${c?" past":""}${u.length?" event":""} jump" data-day="${l.index}" title="${l.weekday}, ${t.name} ${a+1}${u.map(f=>" · "+f.name).join("")}${d?" · "+l.weather.name:""} · klik: pindah ke tanggal ini">
      <b>${a+1}</b>${d?`<i class="cal-w">${l.weather.icon}</i>`:""}${u.map(f=>`<span class="cal-ev">${f.icon} ${f.name}</span>`).join("")}</div>`)}const o=eh(i.index+1),r=He.events.filter(a=>a.season===t.id).map(a=>`<li>${a.icon} <b>${a.day}</b> ${a.name}</li>`).join("");return`<div class="calendar" style="--sc:${t.color}">
    <div class="cal-head"><h2>${t.icon} ${t.name}</h2><span>Tahun ${i.year}</span></div>
    <div class="dc-tabs">${He.seasons.map((a,l)=>`<button data-page="${l}" class="${l===Ya?"on":""}">${a.icon} ${a.short}</button>`).join("")}</div>
    <p class="cal-demo">Mode demo: klik tanggal mana pun untuk pindah ke hari itu.</p>
    <p class="cal-now">Hari ini: <b>${i.weekday}, ${aa(i)}</b> · ${i.weather.icon} ${i.weather.name} · Besok: ${o.weather.icon} ${o.weather.name}</p>
    <div class="cal-grid">${He.weekdays.map(a=>`<div class="cal-wd">${a}</div>`).join("")}${s.join("")}</div>
    <div class="cal-info">
      <div><h4>Musim ini</h4><p>${t.desc}</p><div class="dc-tags">${s3(t)}</div>
        <p class="cal-weather">Cuaca: ${Object.entries(t.weather||{}).map(([a,l])=>`${He.weathers[a].icon} ${He.weathers[a].name} ${Math.round(l*100)}%`).join(" · ")}</p></div>
      <div><h4>Acara</h4><ul class="cal-list">${r||"<li>—</li>"}</ul></div>
    </div>
  </div>`}const Mf=()=>Tl(o3(),r3);function r3(i){const t=i.target.closest(".cal-day[data-day]");if(t){sf(+t.dataset.day),te.pop(),ve(`Pindah ke ${aa(eh(+t.dataset.day))}`),Mf();return}const e=i.target.closest("button[data-page]");e&&(Ya=+e.dataset.page,te.step(.5),Mf())}function wf(){!$e.started||Zr()||(Ya=Vn().seasonIndex,te.pop(),Mf())}let Ng="";function a3(){const i=Vn(),t=`${i.season.icon} ${i.weekday}, ${aa(i)} ${i.weather.icon}`;t!==Ng&&(Ng=t,$("clockDate").textContent=t,$("clockDate").title=`${i.season.name} hari ke-${i.day} · ${i.weather.name} · klik: kalender (K)`)}function l3(){$("clockDate").onclick=i=>{i.stopPropagation(),wf()},addEventListener("keydown",i=>{i.repeat||i.target.tagName==="INPUT"||i.target.tagName==="SELECT"||i.code==="KeyK"&&wf()}),je("calendar:day",i=>{ve(`${i.season.icon} ${i.weekday}, ${aa(i)} · ${i.weather.icon} ${i.weather.name}`);for(const t of px(i.season.id,i.day))ve(`${t.icon} Hari ini: ${t.name}!`)}),je("calendar:season",i=>ve(`<b style="color:${i.season.color}">${i.season.icon} ${i.season.name} dimulai!</b>`))}const c3=.9,Fr={pos:new R(0,245,75),at:new R(0,0,6),fov:50};{const i=new En;i.position.copy(Fr.pos),i.lookAt(Fr.at),Fr.q=i.quaternion.clone()}let ns=0,Qi=0,Sf=!1,kn=null,Cl=0,p_=0,m_=0;const Ln={pos:new R,q:new Ei,fov:38,near:45,far:115,camFar:400},gr={shadow:!0,bloom:!0,avatar:!0},Sc=new R,Dg=new R,bf=()=>$("mapView").classList.contains("show"),h3=()=>Qi!==0||ns>0,u3=()=>ns===1&&Qi===0&&Cl>2,g_=()=>$("mapSnap").classList.remove("show");addEventListener("resize",()=>{Cl=0,g_()});function d3(){if(ns!==1||Qi!==0||Cl!==2)return;const i=bi.domElement,t=$("mapSnap");t.width=i.width,t.height=i.height,t.getContext("2d").drawImage(i,0,0),t.classList.add("show")}function bc(i=!bf()){if(i!==bf()){if(i){if(!$e.started||["modal","inventory","pause","profile","fade"].some(e=>$(e).classList.contains("show")))return;ns===0&&(Ln.pos.copy(Ie.position),Ln.q.copy(Ie.quaternion),Ln.fov=Ie.fov,Ln.near=Jt.fog.near,Ln.far=Jt.fog.far,Ln.camFar=Ie.far),fo(),f3(),$("mapView").classList.add("show");const t=Vn();$("mapDate").textContent=`${t.season.icon} ${t.weekday}, ${aa(t)} ${t.weather.icon}`}else $("mapView").classList.remove("show");document.body.classList.toggle("map-open",i),Qi=i?1:-1,Cl=0,p_=ns,m_=performance.now(),g_(),te.pop()}}function Ug(i){i!==Sf&&(Sf=i,i?(gr.shadow=nn.castShadow,gr.bloom=Ps.enabled,gr.avatar=qt.visible,Ie.layers.disable(as),nn.castShadow=!1,Ps.enabled=!1,Jd(!1)):(Ie.layers.enable(as),nn.castShadow=gr.shadow,Ps.enabled=gr.bloom,Jd($("optTilt").checked),qt.visible=gr.avatar))}function f3(){if(kn)return;const i=$("mapMarkers");kn=bx.map(t=>{const e=document.createElement("div");return e.className="mk mk-"+t.kind,e.innerHTML=`<i>${t.icon}</i><span>${t.label}</span>`,i.append(e),{m:t,e}}),kn.car=document.createElement("div"),kn.car.className="mk mk-car",kn.car.innerHTML="<i>🚙</i><span>Mobil</span>",i.append(kn.car),kn.me=document.createElement("div"),kn.me.className="mk-me",kn.me.innerHTML='<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="17"/><path d="M20 6 30 30 20 24 10 30z"/></svg><span>Kamu</span>',i.append(kn.me)}function Ec(i,t,e){return Sc.set(i,t,e).project(Ie),Sc.z>1?null:[(Sc.x*.5+.5)*innerWidth,(-Sc.y*.5+.5)*innerHeight]}const Ju=(i,t)=>{i.style.display=t?"":"none",t&&(i.style.transform=`translate(${t[0].toFixed(1)}px, ${t[1].toFixed(1)}px)`)};function p3(){if(!h3())return!1;Qi&&(ns=Ge(p_+Qi*(performance.now()-m_)/1e3/c3,0,1));const i=ke(0,1,ns);if(Ie.position.lerpVectors(Ln.pos,Fr.pos,i),Ie.quaternion.slerpQuaternions(Ln.q,Fr.q,i),Ie.fov=Ue(Ln.fov,Fr.fov,i),Jt.fog.near=Ue(Ln.near,500,i),Jt.fog.far=Ue(Ln.far,900,i),Ie.far=Ue(Ln.camFar,900,i),Ie.updateProjectionMatrix(),Ug(i>.35),Sf&&(qt.visible=!1),ns===0&&Qi<0)return Qi=0,Ug(!1),Ie.fov=Ln.fov,Jt.fog.near=Ln.near,Jt.fog.far=Ln.far,Ie.far=Ln.camFar,Ie.updateProjectionMatrix(),!1;if(ns===1&&Qi>0&&(Qi=0),ns===1&&Cl++,kn&&bf()){for(const{m:o,e:r}of kn)Ju(r,Ec(o.x,0,o.z));Ju(kn.car,Bt.mode==="car"?null:Ec(Ht.position.x,Ht.position.y,Ht.position.z));const t=Bt.mode==="car"?Ht.position:qt.position,e=Ec(t.x,t.y,t.z),n=Bt.mode==="car"?Math.atan2(Dg.set(-1,0,0).applyQuaternion(Ht.quaternion).x,Dg.z):qt.rotation.y,s=Ec(t.x+Math.sin(n)*4,t.y,t.z+Math.cos(n)*4);Ju(kn.me,e),e&&s&&(kn.me.firstChild.style.transform=`rotate(${Math.atan2(s[0]-e[0],e[1]-s[1])}rad)`)}return!0}function m3(){$("mapBtn").onclick=()=>bc(),$("mapClose").onclick=()=>bc(!1),addEventListener("keydown",i=>{i.repeat||i.target.tagName==="INPUT"||i.target.tagName==="SELECT"||(i.code==="KeyM"?bc():i.code==="Escape"&&bc(!1))})}let v_=()=>{},Bi=!1;const Ef="tester.resume",x_=i=>{try{i?sessionStorage.setItem(Ef,"1"):sessionStorage.removeItem(Ef)}catch{}},g3=()=>{try{return sessionStorage.getItem(Ef)==="1"}catch{return!1}},v3=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function Bh(){return Ls.enabled?Ls.online===!1?"⚠ Cloud tidak terjangkau: memakai salinan di perangkat ini":Ls.signedIn?"☁ Simpanan tersinkron ke cloud":"☁ Cloud aktif (tanpa login)":"💾 Simpanan disimpan di perangkat ini (cloud belum diatur)"}const __=i=>new Date(i).toLocaleString("id-ID",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),x3=i=>{const t=Math.floor(i/60),e=Math.floor(t/60);return e?`${e}j ${t%60}m`:`${t} mnt`};function y_(i,t){return'<div class="slot-list">'+i.filter(e=>t==="load"||e.slot!=="auto").map(({slot:e,meta:n,where:s})=>{const o=!n,r=t==="load"&&o,a=s==="cloud"?"☁ cloud":s==="local"?"💾 perangkat":"";return`<button class="slot-row" data-slot="${e}"${r?" disabled":""}>
      <div class="sr-top"><span>${Ml(e)}</span><span class="sr-where">${a}</span></div>
      ${o?'<div class="sr-info">— kosong —</div>':`<div class="sr-info">${v3(n.summary||"Permainan tersimpan")}</div><div class="sr-date">${__(n.savedAt)} · main ${x3(n.playTime||0)}</div>`}
    </button>`}).join("")+"</div>"}function M_(i,t,e){i.querySelectorAll(".slot-row").forEach(n=>{n.onclick=()=>{const s=!!n.querySelector(".sr-date");if(t==="save"&&s&&!n.classList.contains("confirm")){i.querySelectorAll(".slot-row.confirm").forEach(o=>o.classList.remove("confirm")),n.classList.add("confirm"),n.querySelector(".sr-info").textContent="Klik lagi untuk menimpa simpanan ini";return}e(n.dataset.slot)}})}async function _3(i){const t=await pp(i);return ve(t?`Tersimpan di ${Ml(i)} ${t==="cloud"?"☁":"(perangkat ini)"}`:"Gagal menyimpan!"),t}function y3(){$("loader").style.opacity=0,setTimeout(()=>{$e.started&&$("loader").classList.add("gone")},800)}async function Ka(i){if(!Bi){Bi=!0,te.init(),te.pop(),$("loadText").textContent=i?"Memuat simpanan…":"Menyiapkan dunia baru…";try{if(!i)EC();else if(!await ox(i)){$("loadText").textContent="Simpanan tidak ditemukan.";return}$("mainMenu").classList.remove("panel"),Mp(),y3(),v_({fresh:!i}),x_(!0)}finally{Bi=!1}}}async function w_(i,t,e){i.innerHTML="<h3>Muat Game</h3><p>Memeriksa simpanan…</p>";const n=await fp();i.innerHTML="<h3>Muat Game</h3>"+y_(n,"load")+'<button class="menu-back">Kembali</button>',M_(i,"load",e),i.querySelector(".menu-back").onclick=t,$("mmStatus").textContent=Bh()}async function M3(){$("mmContinue").disabled=!0,$("mmContinueInfo").textContent="memeriksa simpanan…";const i=await TC();$("mmContinue").disabled=!i,$("mmContinue").dataset.slot=i?i.slot:"",$("mmContinueInfo").textContent=i?`${Ml(i.slot)} · ${__(i.meta.savedAt)}`:"belum ada simpanan",$("mmStatus").textContent=Bh()}function S_(){$e.started=!1,fo(),x_(!1),$("loader").classList.remove("gone"),$("loader").style.opacity=1,$("bar").style.display="none",$("loadText").textContent="",$("mainMenu").style.display="flex",$("mainMenu").classList.remove("panel"),M3()}function w3(i){Bi||(i==="new"?Ka(null):i==="continue"?$("mmContinue").dataset.slot&&Ka($("mmContinue").dataset.slot):i==="load"?(te.init(),$("mainMenu").classList.add("panel"),w_($("mmPanel"),()=>$("mainMenu").classList.remove("panel"),t=>Ka(t))):i==="exit"&&(window.close(),setTimeout(()=>{$("mainMenu").classList.add("panel"),$("mmPanel").innerHTML='<h3>Sampai jumpa!</h3><p>Terima kasih sudah bermain. Tutup tab ini untuk keluar.</p><button class="menu-back">Kembali ke menu</button>',$("mmPanel").querySelector(".menu-back").onclick=()=>$("mainMenu").classList.remove("panel")},150)))}const b_=()=>$("pause").classList.contains("show");function Vc(){$("pauseBody").innerHTML=`<h2>Jeda</h2><div class="mm-buttons">
    <button class="amatic" data-p="resume">Lanjutkan</button>
    <button class="amatic" data-p="save">Simpan Game</button>
    <button class="amatic" data-p="load">Muat Game</button>
    <button class="amatic" data-p="controls">Kontrol</button>
    <button class="amatic" data-p="menu">Menu Utama</button>
  </div><p class="save-status">${Bh()}${Us.slot?` · terakhir: ${Ml(Us.slot)}`:""}</p>`,$("pauseBody").querySelectorAll("[data-p]").forEach(i=>{i.onclick=()=>S3(i.dataset.p)})}function to(i=!b_()){i&&!$e.started||($("pause").classList.toggle("show",i),i&&(fo(),Vc()),te.pop())}async function S3(i){if(Bi)return;const t=$("pauseBody");if(i==="resume")to(!1);else if(i==="controls")to(!1),Tl($("controlsTemplate").innerHTML);else if(i==="save"){t.innerHTML='<h2>Simpan Game</h2><p class="save-status">Memeriksa slot…</p>';const e=await fp();t.innerHTML="<h2>Simpan Game</h2>"+y_(e,"save")+`<p class="save-status">${Bh()}</p><button class="menu-back">Kembali</button>`,M_(t,"save",async n=>{Bi=!0,t.querySelectorAll(".slot-row").forEach(s=>{s.disabled=!0});try{await _3(n)?to(!1):Vc()}finally{Bi=!1}}),t.querySelector(".menu-back").onclick=Vc}else if(i==="load")t.innerHTML="<div></div>",w_(t.firstChild,Vc,async e=>{Bi=!0;try{await ox(e)?(to(!1),Mp(),ve(`${Ml(e)} dimuat`)):ve("Simpanan tidak ditemukan")}finally{Bi=!1}});else if(i==="menu"){const e=t.querySelector("[data-p=menu]");if(!e.classList.contains("confirm")){e.classList.add("confirm"),e.innerHTML="Yakin keluar?<small>progres sejak terakhir tidur / simpan akan hilang</small>";return}$("pause").classList.remove("show"),S_()}}function b3(i){v_=i,document.querySelectorAll("#mainMenu [data-mm]").forEach(n=>{n.onclick=()=>w3(n.dataset.mm)}),$("menuBtn").onclick=()=>to(),$("pause").onclick=n=>{n.target.id==="pause"&&!Bi&&to(!1)},addEventListener("keydown",n=>{if(n.code!=="Escape"||n.repeat||!$e.started||Bi)return;if(b_()){to(!1);return}["modal","settings","inventory","profile","fade","mapView"].some(o=>$(o).classList.contains("show"))||to(!0)},!0);const t=()=>{rm&&$e.started&&pp("reload",{localOnly:!0})};addEventListener("pagehide",t),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&t()}),je("save:saved",({slot:n,where:s})=>{n==="auto"&&$e.started&&ve(`💾 Game tersimpan (tidur) ${s==="cloud"?"☁":""}`)});const e=rm&&g3();S_(),e&&Ka("reload").then(()=>{$e.started&&ve("Halaman dimuat ulang (dev): melanjutkan dari sebelum reload")})}const E3=()=>Ka(null),Qu={x:-27,z:28,len:20},T3={x:-17,z:36,rot:.62,title:"BOWLING",label:"Reset pin bowling",action:"bowling:reset",map:!1},Tf=[];function A3({x:i,z:t,len:e}){N(new Ut(e,.04,4.6),O("#6f5ed0"),Jt,i,.03,t,!1);for(const l of[-2.4,2.4])N(new Ut(e,.05,.14),hi("#ff4fb8",1.4,3.5),Jt,i,.05,t+l,!1);const n=[[0,0],[.26,0],[.34,.35],[.22,.85],[.16,1.05],[.22,1.28],[.14,1.48],[0,1.55]].map(([l,c])=>new rt(l,c)),s=new yh(n,10).translate(0,-.77,0),o=O("#f2eeff",{flatShading:!1}),r=hi("#ff2f6a",1,2);for(let l=0;l<4;l++)for(let c=0;c<=l;c++){const h=new ge;Jt.add(h),N(s,o,h),N(new Ze(.19,.19,.08,10),r,h,0,.35,0,!1),Tf.push(Xr(h,new St({mass:1.2,shape:new ro(.26,.26,1.55,8),position:new w(i-e/2+2-l*.8,.8,t+(c-l/2)*.9)})))}const a=N(new Di(.75,20,14),new PE({color:"#2a1f66",roughness:.25,metalness:.3}));Tf.push(Xr(a,new St({mass:25,shape:new ap(.75),position:new w(i+e/2-2,.8,t),linearDamping:.1,angularDamping:.2})))}const C3={id:"bowling",build(){A3(Qu),Qs({x:Qu.x,z:Qu.z,icon:"🎳",label:"Bowling"}),bp(T3),je("bowling:reset",()=>Qd(Tf))}};let Ni=null,vr,$s;const R3=new Fs,Tc=new co;function P3(i,t=128,{yaw:e=.75,pitch:n=.5,zoom:s=1}={}){if(!Ni){Ni=new qf({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),Ni.setClearColor(0,0),Ni.toneMapping=pl,vr=new $f,vr.add(new tp("#ffffff","#5a4a7a",2.2));const l=new np("#fff4e0",2.6);l.position.set(2,4,3),vr.add(l),$s=new En(28,1,.01,100)}Ni.setSize(t,t,!1);const o=i.parent;vr.add(i),i.updateMatrixWorld(!0),R3.setFromObject(i).getBoundingSphere(Tc);const r=Tc.radius/Math.sin(Uy.degToRad($s.fov/2))/s;$s.position.set(Math.sin(e)*Math.cos(n),Math.sin(n),Math.cos(e)*Math.cos(n)).multiplyScalar(r).add(Tc.center),$s.lookAt(Tc.center),$s.near=r/20,$s.far=r*4,$s.updateProjectionMatrix(),Ni.render(vr,$s);const a=Ni.domElement.toDataURL("image/png");return vr.remove(i),o&&o.add(i),a}function L3(){Ni&&(Ni.dispose(),Ni.forceContextLoss(),Ni=null)}const I3=1.4,on=(i,t,e)=>new Ut(i,t,e),Le=(i,t,e,n=7)=>new Ze(i,t,e,n),Mn=(i,t=0)=>new jo(i,t),Fg={apple(i){N(Mn(.17,1),O("#e8323c"),i,0,.16,0).scale.set(1,.9,1),N(Mn(.07,0),O("#ff8a7a"),i,-.07,.22,.1,!1),N(Le(.015,.02,.1,5),O("#6b4020"),i,0,.34,0,!1).rotation.z=.25;const t=N(on(.12,.015,.06),O("#5fb84a"),i,.06,.36,0,!1);t.rotation.z=-.4},mushroom(i){N(Le(.06,.08,.2,8),O("#f4ead0"),i,0,.1,0),N(new Di(.19,10,6,0,Math.PI*2,0,Math.PI/2),O("#d9344a"),i,0,.17,0).scale.y=.8;for(const[t,e]of[[.09,.05],[-.07,.09],[-.05,-.1],[.06,-.09],[0,0]]){const n=.17+Math.sqrt(Math.max(0,.034-t*t-e*e))*.8;N(Mn(.028,0),O("#fff8ec"),i,t,n,e,!1)}},flower(i){N(Le(.015,.02,.32,5),O("#4f9e3c"),i,0,.16,0,!1);for(const e of[1,-1]){const n=N(on(.13,.015,.05),O("#6cc24e"),i,e*.06,.1,0,!1);n.rotation.z=e*.5}const t=new ge;t.position.y=.34,t.rotation.x=.35,i.add(t);for(let e=0;e<6;e++){const n=e/6*Math.PI*2;N(Mn(.065,0),O("#ffd23a"),t,Math.cos(n)*.08,0,Math.sin(n)*.08).scale.y=.45}N(Mn(.05,0),O("#e8751a"),t,0,.02,0,!1)},berry(i){const t=N(on(.26,.02,.14),O("#4f9e3c"),i,0,.02,0,!1);t.rotation.y=.5;for(const[e,n,s]of[[0,0,.09],[.1,.04,.08],[-.06,.08,.08],[.03,-.09,.08],[.04,.02,.18]])N(Mn(.075,1),O("#6a3fc0"),i,e,s,n);N(Mn(.03,0),O("#c6a8ff"),i,.02,.24,.04,!1)},egg(i){const t=N(new li(.16,.06,5,10).rotateX(Math.PI/2),O("#b98d4e"),i,0,.05,0);t.scale.y=.8,N(Le(.14,.1,.05,10),O("#9c7340"),i,0,.03,0,!1),N(Mn(.12,1),O("#fff4dc"),i,0,.17,0).scale.set(.9,1.25,.9),N(Mn(.025,0),O("#d8b98a"),i,.07,.22,.05,!1)},shell(i){N(new ki(.2,.12,9),O("#f5a3b4"),i,0,.06,0).scale.set(1,1,.8);for(let t=-3;t<=3;t++){const e=N(on(.018,.02,.2),O("#e0788e"),i,Math.sin(t*.4)*.1,.075,.02,!1);e.rotation.y=t*.4,e.rotation.x=-.45}N(on(.1,.04,.06),O("#f5a3b4"),i,0,.02,-.15)},stone(i){N(new Jc(.2,0),O("#9a9aa6"),i,0,.14,0).scale.set(1.1,.7,.9),N(new Jc(.1,0),O("#b8b8c4"),i,.14,.07,.1).scale.set(1,.7,1)},branch(i){const t=O("#a8703e"),e=O("#6b4020");N(Le(.05,.065,.62,6),t,i,0,.05,0).rotation.set(0,.3,Math.PI/2);const n=N(Le(.02,.03,.26,5),t,i,.06,.07,.1);n.rotation.set(Math.PI/2,0,.9),n.rotation.order="YXZ",n.rotation.y=-.6,N(Le(.05,.05,.01,6),e,i,.29,.05,-.09,!1).rotation.set(0,.3,Math.PI/2);const s=N(on(.1,.015,.06),O("#8fb84a"),i,-.2,.09,.08,!1);s.rotation.y=.7},bottle(i){Og(i,!0)},bottleEmpty(i){Og(i,!1)},ginger(i){const t=O("#d9a55a");for(const[e,n,s]of[[0,0,.09],[.12,.03,.07],[-.11,-.02,.075],[.05,-.1,.06],[-.04,.1,.055]])N(Mn(s,0),t,i,e,s*.8,n).scale.set(1.2,.8,1);N(Mn(.03,0),O("#f1d59a"),i,.02,.13,.02,!1),N(Le(.012,.015,.14,4),O("#6cc24e"),i,-.1,.13,-.02,!1).rotation.z=.4},antidote(i){N(Mn(.12,1),O("#5fe08a"),i,0,.12,0).scale.set(1,1,1),N(Le(.04,.05,.1,7),O("#9ff0bb"),i,0,.25,0),N(Le(.045,.04,.06,7),O("#a8703e"),i,0,.32,0,!1),N(on(.1,.03,.02),O("#ffffff"),i,0,.13,.115,!1),N(on(.03,.1,.02),O("#ffffff"),i,0,.13,.115,!1)},bandage(i){const t=new ge;t.rotation.z=Math.PI/2,t.position.y=.11,i.add(t),N(Le(.11,.11,.18,10),O("#f4f0e8"),t),N(Le(.045,.045,.19,8),O("#d8cfc0"),t,0,0,0,!1),N(on(.18,.01,.2),O("#f4f0e8"),i,0,.005,.18,!1),N(on(.1,.012,.03),O("#e8324f"),i,0,.012,.2,!1),N(on(.03,.012,.1),O("#e8324f"),i,0,.012,.2,!1)},bread(i){N(on(.36,.12,.2),O("#e0a95c"),i,0,.06,0),N(Mn(.14,1),O("#c47e38"),i,0,.12,0).scale.set(1.3,.55,.75);for(const t of[-.09,0,.09]){const e=N(on(.02,.012,.14),O("#f1d59a"),i,t,.19,0,!1);e.rotation.y=.5}},soup(i){N(Le(.18,.1,.13,10),O("#d0342c"),i,0,.065,0),N(Le(.16,.16,.02,10),O("#e8b04a"),i,0,.12,0,!1);for(const[e,n]of[[.06,.04],[-.07,.02],[0,-.08]])N(Mn(.035,0),O("#f4ead0"),i,e,.135,n,!1);N(Mn(.03,0),O("#d9344a"),i,-.02,.14,.08,!1),N(on(.03,.02,.26),O("#c9c9d9"),i,.1,.17,-.02,!1).rotation.set(.5,.4,0)},coffee(i){N(Le(.16,.16,.025,12),O("#f2eeff"),i,0,.012,0),N(Le(.1,.08,.16,10),O("#ffffff"),i,0,.1,0),N(Le(.088,.088,.01,10),O("#4a2a18"),i,0,.176,0,!1),N(new li(.045,.015,5,8),O("#ffffff"),i,.11,.1,0,!1)},energyDrink(i){N(Le(.075,.075,.26,10),O("#2f8cff"),i,0,.13,0),N(Le(.065,.075,.03,10),O("#c9c9d9"),i,0,.275,0,!1);const t=N(on(.05,.14,.02),O("#ffe03a"),i,0,.14,.072,!1);t.rotation.z=.5},tea(i){N(Le(.09,.08,.18,10),O("#e8f4ff"),i,0,.09,0),N(Le(.082,.082,.01,10),O("#c9772a"),i,0,.17,0,!1),N(new li(.045,.014,5,8),O("#e8f4ff"),i,.1,.1,0,!1);for(const[t,e]of[[.24,.02],[.3,-.02]])N(Mn(.025,0),O("#ffffff"),i,e,t,0,!1).scale.y=1.4},cocoa(i){N(Le(.1,.09,.17,10),O("#d0342c"),i,0,.085,0),N(Le(.09,.09,.01,10),O("#5a2e1a"),i,0,.165,0,!1);for(const[t,e]of[[.03,.02],[-.03,-.01],[0,-.04]])N(on(.035,.03,.035),O("#fff4f8"),i,t,.18,e,!1);N(new li(.05,.016,5,8),O("#d0342c"),i,.11,.09,0,!1)},icedTea(i){N(Le(.075,.06,.28,10),O("#e0a050"),i,0,.14,0);for(const[e,n,s]of[[.02,.02,.26],[-.025,-.01,.27]])N(on(.04,.04,.04),O("#eaf8ff"),i,e,s,n,!1);const t=N(Le(.01,.01,.2,5),O("#e8324f"),i,.03,.33,.01,!1);t.rotation.z=-.3},umbrella(i){N(Le(.012,.012,.5,5),O("#5d3b6e"),i,0,.25,0);const t=N(new li(.035,.012,4,8,Math.PI),O("#5d3b6e"),i,.035,0,0,!1);t.rotation.z=Math.PI;for(let e=0;e<8;e++){const n=e/8*Math.PI*2,s=N(new ki(.42,.2,3,1,!0,n,Math.PI/4),O(e%2?"#ffffff":"#e8324f",{side:jn}),i,0,.58,0);s.castShadow=!0}N(Mn(.02,0),O("#ffd98a"),i,0,.69,0,!1)},sachet(i){N(on(.22,.03,.28),O("#ff9a3a"),i,0,.015,0),N(on(.14,.01,.12),O("#ffffff"),i,0,.034,.02,!1),N(on(.22,.02,.03),O("#e0772a"),i,0,.02,-.14,!1)}};function Og(i,t){const e=new ge;e.rotation.z=Math.PI/2,e.position.y=.09,i.add(e),N(Le(.085,.085,.3,9),O(t?"#5fb8f0":"#cfe3ee"),e,0,0,0),N(Le(.088,.088,.1,9),O(t?"#ffffff":"#e9eef2"),e,0,.02,0,!1),N(Le(.05,.085,.07,9),O(t?"#8fd0f7":"#dcebf2"),e,0,.185,0),N(Le(.045,.045,.06,8),O(t?"#2f6fd6":"#8a96a8"),e,0,.25,0)}function N3(i){const t=new ge,e=new ge;return e.scale.setScalar(I3),t.add(e),(Fg[i]||(n=>N(on(.25,.25,.25),O("#888"),n,0,.125,0)))(e),Fg[i]||console.warn(`pickup: unknown item model '${i}'`),sx(t,[t]),t.traverse(n=>n.layers.set(as)),t}const D3=1.5,U3=80,F3=[13,26],O3=.28,z3=.34,B3=.25,Zn=new Map,wi=[],Si=[],Cs=[];let Fn=null,Xo=0;const E_=new R,zg=new w,Bg=new w,td=new Bo;function Op(i,t,e=6){return zg.set(i,e,t),Bg.set(i,e-12,t),td.reset(),Je.raycastClosest(zg,Bg,{collisionFilterMask:1,skipBackfaces:!0},td)?td.hitPointWorld.y:ao(i,t)}function kg(i,t){for(let e=0;e<80;e++){const n=Math.random()*Math.PI*2,s=t?Xt(...F3):Math.sqrt(Math.random())*U3,o=(t?Qn.x:0)+Math.cos(n)*s,r=(t?Qn.z:0)+Math.sin(n)*s,a=Sl(o,r);if(i==="shore"?a<.7||a>3.2:a<2)continue;const l=Vo(o,r);if(l.asphalt>.2||i==="grass"&&l.paved>.25||ni.some(h=>Math.hypot(o-h.x,r-h.z)<h.r+.6)||cf.some(h=>Math.hypot(o-h.x,r-h.z)<h.r)||wi.some(h=>Math.hypot(o-h.obj.position.x,r-h.obj.position.z)<2.5))continue;const c=Op(o,r);if(!(c>ao(o,r)+.12))return E_.set(o,c,r)}return null}function Rl(i,t,e,n,{arc:s=0,s0:o=1,s1:r=1,done:a}={}){const l={obj:i,from:t.clone(),to:e.clone(),t:0,dur:n,arc:s,s0:o,s1:r,done:a};for(let c=Cs.length-1;c>=0;c--)Cs[c].obj===i&&Cs.splice(c,1);Cs.push(l),i.position.copy(t),i.scale.setScalar(o)}const T_=i=>E_.set(Math.sin(qt.rotation.y)*i,0,Math.cos(qt.rotation.y)*i),kh=()=>Bt.mode==="foot"&&qt.visible;function Hh(i,t,{wild:e=!1,pop:n=!1}={}){const s=Zn.get(i).proto.clone();s.position.copy(t),s.rotation.y=Math.random()*Math.PI*2,Jt.add(s);const o={id:i,obj:s,wild:e,baseY:t.y,hl:0};return o.zone=Ks({pos:s.position,label:`Ambil ${ei(i).name}`,quiet:!0,range:D3,action:()=>k3(o)}),wi.push(o),n&&Rl(s,t,t,.4,{arc:.3,s0:.05}),o}const Gc=i=>{const t=Zn.get(i).spawn?.seasons;return!t||t.includes(Vn().season.id)};function zp(i,t=!1){if(!Gc(i))return;const e=t&&kg(Zn.get(i).spawn.where,!0)||kg(Zn.get(i).spawn.where,!1);e?Hh(i,e,{wild:!0,pop:Xo>0}):Si.push({id:i,at:Xo+10})}function Bp(i,t,e,n=1){Fn={id:i,obj:t},Fn.zone=Ks({pos:qt.position,label:`Simpan ${ei(i).name} ke tas · <kbd>Q</kbd> taruh`,quiet:!0,action:A_}),i_(i),Xx(!0),Pp(Fn.zone),Kr.add(t),t.rotation.set(0,.5,0),Rl(t,e,new R,O3,{arc:.25,s0:n})}function Qr(){const i=Fn;return Ph(i.zone),Fn=null,i_(null),Xx(!1),Pp(null),i}function k3(i){if(Fn||!kh())return;wi.splice(wi.indexOf(i),1),Ph(i.zone),i.wild&&Si.push({id:i.id,at:Xo+(Zn.get(i.id).spawn.respawn||90)});const t=Kr.worldToLocal(i.obj.getWorldPosition(new R));te.pick(),Bp(i.id,i.obj,t)}function A_(){if(!Fn)return;if(!Np(Fn.id)){ve("Tas penuh! Tekan <kbd>Q</kbd> untuk menaruh"),te.drop();return}const{id:i,obj:t}=Qr();qo(i,1),te.stash(),Rl(t,t.position,new R(.25,-.75,-.2),B3,{arc:.2,s1:.1,done:()=>t.removeFromParent()})}function C_(i,t){const e=T_(.85),n=qt.position.x+e.x+Xt(-.15,.15),s=qt.position.z+e.z+Xt(-.15,.15),o=new R(n,Op(n,s,qt.position.y+1.5),s);t.rotation.set(0,Math.random()*Math.PI*2,0),Rl(t,t.position,o,z3,{arc:.35,s0:t.scale.x,done:()=>{t.removeFromParent(),Hh(i,o)}})}const R_=()=>{const i=T_(.85);return Sl(qt.position.x+i.x,qt.position.z+i.z)<.3};function P_(){if(!Fn||!kh())return;if(R_()){ve("Jangan dibuang ke air!"),te.drop();return}const{id:i,obj:t}=Qr();Jt.attach(t),te.drop(),C_(i,t)}function H3({slot:i}){if(!kh()){ve("Keluar dari mobil dulu");return}const t=_e.slots[i]?.id;if(t){if(Dp(i,1),Fn){if(!Np(Fn.id)){qo(t,1),ve("Tas penuh! Taruh dulu barang yang dipegang");return}const e=Qr();qo(e.id,1),e.obj.removeFromParent()}te.pick(),Bp(t,Zn.get(t).proto.clone(),new R(.25,-.8,-.15),.2)}}function V3({slot:i}){if(i===-1){P_();return}if(!kh()){ve("Keluar dari mobil dulu");return}if(R_()){ve("Jangan dibuang ke air!");return}const t=Dp(i,1);if(!t)return;const e=Zn.get(t).proto.clone();Jt.add(e),e.position.copy(qt.position).y+=.7,te.drop(),C_(t,e)}function Hg(){for(const i of wi)Ph(i.zone),i.obj.removeFromParent();for(const i of Cs)i.obj.removeFromParent();wi.length=Si.length=Cs.length=0,Fn&&Qr().obj.removeFromParent()}function L_(){for(const[i,t]of Zn)if(t.spawn)for(let e=0;e<t.spawn.count;e++)zp(i,e===0)}function G3(){for(let i=wi.length-1;i>=0;i--){const t=wi[i];!t.wild||Gc(t.id)||(wi.splice(i,1),Ph(t.zone),Rl(t.obj,t.obj.position,t.obj.position,.35,{s0:1,s1:.01,done:()=>t.obj.removeFromParent()}))}for(let i=Si.length-1;i>=0;i--)Gc(Si[i].id)||Si.splice(i,1);for(const[i,t]of Zn){if(!t.spawn||!Gc(i))continue;const e=wi.filter(n=>n.wild&&n.id===i).length+Si.filter(n=>n.id===i).length;for(let n=e;n<t.spawn.count;n++)zp(i)}}const ed=i=>Math.round(i*100)/100,W3={save:()=>({items:wi.map(i=>[i.id,ed(i.obj.position.x),ed(i.baseY),ed(i.obj.position.z),i.wild?1:0]),regrow:Si.map(i=>[i.id,Math.max(0,Math.round(i.at-Xo))]),held:Fn?Fn.id:null}),load(i){Hg();for(const[t,e,n,s,o]of i.items||[])Zn.has(t)&&Hh(t,new R(e,n,s),{wild:!!o});for(const[t,e]of i.regrow||[])Zn.has(t)&&Si.push({id:t,at:Xo+e});i.held&&Zn.has(i.held)&&Bp(i.held,Zn.get(i.held).proto.clone(),new R,1)},reset(){Hg(),L_()}},q3={id:"pickup",async build(){const i=await na("data/items.json","json");for(const t of i.items){const e=N3(t.model);WP({id:t.id,name:t.name,desc:t.desc,stack:t.stack,price:t.price,use:t.use,icon:P3(e.clone(),128)}),Zn.set(t.id,{proto:e,spawn:t.spawn||null})}L3(),je("inventory:hold",H3),je("inventory:drop",V3),je("inventory:stash",A_),je("inventory:discardHeld",()=>{Fn&&Qr().obj.removeFromParent()}),IC("KeyQ",P_),je("player:mode",t=>{if(t!=="car"||!Fn)return;const{id:e,obj:n}=Qr();if(n.removeFromParent(),!qo(e,1)){const{x:s,z:o}=qt.position;Hh(e,new R(s,Op(s,o),o))}}),je("world:ready",L_),je("calendar:season",G3),Yo("pickup",W3)},update(i,{t}){Xo+=i;for(let e=Cs.length-1;e>=0;e--){const n=Cs[e],s=Math.min(1,(n.t+=i)/n.dur),o=1-(1-s)*(1-s);n.obj.position.lerpVectors(n.from,n.to,o).y+=Math.sin(Math.PI*s)*n.arc,n.obj.scale.setScalar(n.s0+(n.s1-n.s0)*ke(0,1,s)),s>=1&&(Cs.splice(e,1),n.done&&n.done())}for(let e=Si.length-1;e>=0;e--)Xo>Si[e].at&&zp(Si.splice(e,1)[0].id);for(const e of wi){const n=$e.activeZone===e.zone?1:0;!n&&e.hl<.001||(e.hl+=(n-e.hl)*(1-Math.exp(-i*10)),e.obj.position.y=e.baseY+e.hl*(.06+Math.abs(Math.sin(t*5))*.1),e.obj.rotation.y+=i*1.2*e.hl)}}},Oe=(i,t,e)=>new Ut(i,t,e),In=(i,t,e,n=8)=>new Ze(i,t,e,n),Vg=O("#8f89c9"),Af=O("#6a64b0"),gh=O("#8d5f9e"),Tr=O("#5d3b6e"),X3=O("#c9304c"),$3=O("#8e1f38"),Gg=hi("#7fd4ff",1.1,2.4),kp=(i,t,e,n,s)=>new R(i+n*Math.cos(e)+s*Math.sin(e),0,t-n*Math.sin(e)+s*Math.cos(e)),Vh=(i,t,e,n)=>kp(i,t,e,0,n);function j3(i,t,e){const n=fi(i,0,t,e);N(In(.75,.85,.22,8),Af,n,0,.11,0),N(In(.32,.4,.95,8),Vg,n,0,.7,0),N(In(.62,.42,.22,10),Vg,n,0,1.25,0),N(In(.52,.52,.04,10),Gg,n,0,1.35,0,!1),N(Oe(.14,.5,.14),Af,n,0,1.6,-.35),N(In(.045,.045,.36,6).rotateX(Math.PI/2),O("#c9c9d9"),n,0,1.82,-.2,!1);const s=N(In(.03,.03,.45,5),Gg,n,0,1.6,-.02,!1);return s.rotation.x=.35,N(In(.05,.05,.08,6),O("#2f6fd6"),n,0,1.9,-.33,!1),N(Oe(.5,.36,.05),O("#e9e4ff"),n,0,.75,.41,!1),N(Oe(.1,.18,.06),O("#2f6fd6"),n,0,.78,.43,!1),_n(new ro(.62,.8,1.4,8),i,.7,t),ni.push({x:i,z:t,r:1.6}),Vh(i,t,e,1.4)}const Y3=vl(128,64,(i,t,e)=>{i.fillStyle="#1c1636",i.fillRect(0,0,t,e),i.fillStyle="#d6f58a",i.font="700 44px system-ui, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("WC",t/2,e/2+2)});function K3(i,t,e){const n=fi(i,0,t,e),s=O("#7fb3c9"),o=O("#5c8fa8"),r=2.4,a=2.2,l=2.5;N(Oe(r+.3,.16,a+.3),Af,n,0,.08,0),N(Oe(r,l,a),s,n,0,l/2+.16,0);for(const d of[-1,1])N(Oe(.14,l,.14),o,n,d*r/2,l/2+.16,a/2);N(Oe(1,1.9,.08),Tr,n,0,1.11,a/2+.02),N(Oe(.08,.08,.1),O("#ffd98a"),n,.35,1.1,a/2+.08,!1),N(Oe(.7,.14,.04),O("#3b3584"),n,0,1.75,a/2+.07,!1);const c=new Xe(new Ti(.8,.4),new ui({map:Y3,color:new ut(1.3,1.3,1.3)}));c.position.set(0,2.35,a/2+.02),n.add(c);for(const d of[-1,1]){const u=N(Oe(r+.7,.12,a/2+.6),X3,n,0,l+.5,d*(a/4+.15));u.rotation.x=d*.42;for(let f=0;f<4;f++)N(Oe(r+.72,.05,.08),$3,u,0,.07,-.55+f*.36,!1)}N(Oe(.5,.5,.06),O("#bfe8ff"),n,r/2+.01,1.9,0,!1).rotation.y=Math.PI/2,N(In(.08,.08,.7,6),O("#9a9aa6"),n,-.7,l+.8,-.5),N(In(.35,.3,.7,8),O("#4a4a8a"),n,r/2+.45,.35,a/2-.3),_n(new mn(new w(r/2,l/2+.2,a/2)),i,l/2+.2,t,e);const h=kp(i,t,e,r/2+.45,a/2-.3);return _n(new ro(.35,.35,.7,8),h.x,.35,h.z),ni.push({x:i,z:t,r:2.8}),Vh(i,t,e,a/2+1.2)}function Z3(i,t,e){const n=fi(i,0,t,e),s=3,o=2.6,r=6;N(In(s+.15,s+.3,.12,r),Tr,n,0,.06,0);for(let v=0;v<12;v++)N(Oe(.08,.01,s*1.7),O("#9c6cab"),n,-s*.85+v*.155,.125,0,!1);const a=[];for(let v=0;v<r;v++){const m=(v+.5)/r*Math.PI*2,g=Math.sin(m)*s,x=Math.cos(m)*s;a.push([g,x]),N(In(.12,.14,o,6),gh,n,g,o/2+.12,x)}const l=[];for(let v=0;v<r;v++){const[m,g]=a[v],[x,_]=a[(v+1)%r],M=(m+x)/2,C=(g+_)/2;if(C>s*.8)continue;const E=Math.hypot(x-m,_-g),T=Math.atan2(x-m,_-g);for(const I of[.45,.85]){const V=N(Oe(.08,.08,E),Tr,n,M,I,C);V.rotation.y=T}l.push([M,C,E,T])}const c=["#c9304c","#8e1f38","#ffd98a"].map(v=>O(v,{transparent:!0}));N(In(.01,s+.9,1.5,r),c[0],n,0,o+.12+.75,0),N(In(s+.92,s+.92,.14,r),c[1],n,0,o+.12,0),N(new Di(.18,8,6),c[2],n,0,o+1.95,0),N(In(.02,.02,.5,4),Tr,n,0,o-.1,0,!1),N(Oe(.3,.38,.3),hi("#ffae3a",.5,4.2),n,0,o-.45,0,!1);const h=new ge;h.position.set(0,.12,-s+1.35),n.add(h),N(Oe(1.4,.35,2.3),gh,h,0,.18,0),N(Oe(1.5,.75,.12),Tr,h,0,.38,-1.15),N(Oe(1.3,.18,2.1),O("#f2eeff"),h,0,.44,.05),N(Oe(.9,.14,.45),O("#ffffff"),h,0,.58,-.75,!1),N(Oe(1.34,.08,1.3),O("#4b57c9"),h,0,.56,.45,!1),N(Oe(1.34,.02,.14),O("#ffd98a"),h,0,.605,-.15,!1);const d=(v,m)=>kp(i,t,e,v,m);for(const[v,m]of a){const g=d(v,m);_n(new ro(.14,.14,o,6),g.x,o/2,g.z)}for(const[v,m,g,x]of l){const _=d(v,m);_n(new mn(new w(.06,.5,g/2)),_.x,.5,_.z,e+x)}const u=d(h.position.x,h.position.z);_n(new mn(new w(.72,.35,1.2)),u.x,.35,u.z,e),_n(new ro(s+.2,s+.2,.12,12),i,.06,t),ni.push({x:i,z:t,r:s+1.4});const f=d(0,h.position.z+1.55),p=d(-1.25,h.position.z-.2);return{spot:d(1.1,h.position.z+.3),roof:{mats:c,x:i,z:t,r:s+.6,k:1},foot:{x:f.x,z:f.z,rot:e},cal:{x:p.x,z:p.z,rot:e}}}function J3(i,t,e){const n=fi(i,.12,t,e),s=O("#3b3584");N(Oe(1,.45,.6),O("#a8703e"),n,0,.23,0);const o=N(In(.3,.3,1,8),O("#c0844a"),n,0,.45,0);o.rotation.z=Math.PI/2,o.scale.set(1,1,.55);for(const r of[-.38,.38]){N(Oe(.08,.47,.62),s,n,r,.23,0,!1);const a=N(In(.31,.31,.08,8),s,n,r,.45,0,!1);a.rotation.z=Math.PI/2,a.scale.set(1,1,.57)}return N(Oe(.16,.2,.06),O("#ffd98a"),n,0,.42,.31,!1),N(new wh(.1),hi("#c77dff",1.4,3.2),n,0,.72,0,!1),_n(new mn(new w(.5,.35,.3)),i,.35,t,e),Vh(i,t,e,.95)}function Q3(i,t,e){const n=fi(i,.12,t,e);for(const c of[-1,1]){const h=N(Oe(.06,1.35,.06),gh,n,c*.3,.64,0);h.rotation.z=c*-.08}const s=N(Oe(.05,1.25,.05),gh,n,0,.58,-.25);s.rotation.x=-.38,N(Oe(.76,.86,.05),Tr,n,0,1,.03);const o=document.createElement("canvas");o.width=256,o.height=288;const r=new Pv(o);r.colorSpace=_i,r.anisotropy=4;const a=new Xe(new Ti(.66,.76),new ui({map:r,color:new ut(1.15,1.15,1.15)}));a.position.set(0,1,.062),n.add(a);for(const c of[-.2,0,.2])N(new li(.03,.008,4,8),O("#c9c9d9"),n,c,1.38,.065,!1);_n(new mn(new w(.38,.7,.2)),i,.7,t,e);const l=c=>{const h=o.getContext("2d"),d=o.width,u=o.height;h.fillStyle="#fffaf0",h.fillRect(0,0,d,u),h.fillStyle=c.season.color,h.fillRect(0,0,d,64),h.fillStyle="#1c1636",h.textAlign="center",h.textBaseline="middle",h.font="700 34px system-ui, sans-serif",h.fillText(`${c.season.short} · Thn ${c.year}`,d/2,34),h.font="800 110px system-ui, sans-serif",h.fillText(String(c.day),d/2,128),h.font="700 30px system-ui, sans-serif",h.fillText(`${c.weekday}  ${c.weather.icon}`,d/2,200);const f=c.season.days||28;for(let p=0;p<f;p++){const v=30+p%14*14.4,m=238+Math.floor(p/14)*18;h.beginPath(),h.arc(v,m,5,0,7),p+1<c.day?(h.fillStyle="#b8b0c8",h.fill()):p+1===c.day?(h.strokeStyle=c.season.color,h.lineWidth=4,h.stroke()):(h.fillStyle="#e4e0ec",h.fill())}r.needsUpdate=!0};return{spot:Vh(i,t,e,.85),draw:l}}const tL={thirst:35},eL=.25,nL=4,Wg=7,Yi=Ir,ts={};let Ms=null;const iL={...Object.fromEntries(Object.entries(re.needs).map(([i,t])=>[i,t.name])),health:"Darah",stamina:"Stamina"},I_=i=>Object.entries(i).filter(([,t])=>Math.abs(t)>=.5).map(([t,e])=>`${iL[t]} ${e>0?"+":"−"}${Math.round(Math.abs(e))}`).join(" · "),N_=i=>String(Math.floor(i)).padStart(2,"0")+":"+String(Math.floor(i*60)%60).padStart(2,"0"),Pl=()=>Bt.mode==="foot";function sL({slot:i}){const t=i===-1?_e.held:_e.slots[i]?.id,e=t&&ei(t).use;if(!e){ve("Barang ini tidak bisa dipakai");return}const n=["hunger","thirst","energy","health","stamina"].filter(c=>e[c]>0),s=c=>c==="health"?xe.maxHealth:c==="stamina"?xe.maxStamina:100;if(n.length&&!e.effects&&!e.cure&&n.every(c=>Wt[c]>=s(c)-1)){ve(n.includes("hunger")?"Kamu sudah kenyang":n.includes("thirst")?"Kamu belum haus":n.includes("health")?"Darahmu sudah penuh":"Belum perlu"),te.drop();return}if(i===-1){if(!Ye("inventory:discardHeld"))return}else Dp(i,1);const{delta:o,cured:r}=dx(e);e.verb==="Pakai"?te.pick():e.verb==="Minum"?te.drink():te.eat();const a={Minum:"Glek!",Makan:"Nyam!"}[e.verb]||"Beres!",l=[I_(o),r.length?`${r.map(c=>re.effects[c].name).join(" & ")} sembuh`:""].filter(Boolean).join(" · ");ve(`${a} ${ei(t).name}${l?": "+l:""}`,ei(t).icon),e.gives&&qo(e.gives,1),Ye("survival:consumed",{id:t,delta:o,cured:r})}function oL(){if(!Pl())return;let i=!1;if(Wt.thirst<97){const{delta:e}=dx(tL);ra("segar"),te.drink(),i=!0,ve(`Glek glek… segar! ${I_(e)}`)}const t=io("botol_kosong");t&&(qP("botol_kosong",t),qo("botol_air",t),te.stash(),i=!0,ve(`${t} botol diisi ulang`)),i||ve("Kamu belum haus")}function rL(){if(!Pl())return;const i=Object.entries(re.effects).some(([e,n])=>(n.cure||[]).includes("toilet")&&Oc(e));if(Wt.bladder>90&&!i){ve("Belum kebelet");return}let t=[];te.door(!0),Rp("Di toilet…",()=>{Ao("bladder",100),t=ux("toilet"),ra("lega"),gp(eL),te.flush()},1100).then(()=>{te.door(!1),ve(t.length?`Lega! ${t.map(e=>re.effects[e].name).join(" & ")} sembuh`:"Lega!")})}function aL(){if(!Pl())return;if(Wt.energy>90){ve("Kamu belum ngantuk");return}const i=Math.ceil((100-Wt.energy)/(re.needs.energy.sleep*re.secondsPerGameHour)),t=((Wg-Zt.hour)%24+24)%24,e=[[1,"1 jam","tidur siang"],[3,"3 jam",""],[i,"Sampai segar",`± ${i} jam`]];t>.5&&t<=12&&e.push([t,"Sampai pagi",`bangun jam 0${Wg}:00`]);const n=Wt.hunger<25||Wt.thirst<25?'<p style="color:#ff9aaa">Kamu lapar / haus. Tidur lama bisa membuatmu terbangun kesakitan.</p>':"";Tl(`<h2>Tidur</h2><p>Energi <b>${Math.round(Wt.energy)}%</b> · sekarang jam <b>${N_(Zt.hour)}</b>. Mau tidur berapa lama? Lapar, haus dan kandung kemih tetap berkurang pelan-pelan. <b>Game tersimpan saat kamu bangun.</b></p>${n}<div class="choice-btns">${e.map(([s,o,r])=>`<button data-h="${s}">${o}${r?`<small>${r}</small>`:""}</button>`).join("")}</div>`,s=>{const o=s.target.closest("button[data-h]");o&&(Oh(),lL(+o.dataset.h))})}function lL(i){let t;Rp("Zzz…",()=>{t=VC(i),gp(t.hours),El(ts.bed.x,ts.bed.z,qt.rotation.y)},1700).then(()=>{ve(`Bangun jam ${N_(Zt.hour)} · Energi ${t.energy>=0?"+":"−"}${Math.round(Math.abs(t.energy))}`),t.woke==="hurt"&&ve("Kamu terbangun karena lapar / haus!"),Ye("survival:slept",{hours:t.hours}),pp("auto")})}function cL(){Rp("Kamu pingsan…",()=>{GC(),gp(nL),Pl()&&El(ts.bed.x,ts.bed.z,0)},2e3).then(()=>ve("Kamu siuman di Balai Warga. Makan, minum, lalu istirahat!"))}const hL={id:"survival",build(){Qs({x:Yi.x,z:Yi.z,icon:"🏠",label:"Balai Warga"}),ts.fountain=j3(Yi.x-1.5,Yi.z+5,.65),ts.toilet=K3(Yi.x+5.5,Yi.z-3.5,.25);let i,t;({spot:ts.bed,roof:Ms,foot:i,cal:t}=Z3(Yi.x-2,Yi.z-6,.65));const e=Q3(t.x,t.z,t.rot);Ks({pos:e.spot,label:"Lihat kalender",range:1.2,action:wf});const n=()=>e.draw(Vn());n(),je("calendar:day",n),je("save:applied",n),Ks({pos:J3(i.x,i.z,i.rot),label:"Buka peti debug (semua barang)",range:1.4,action:()=>Ye("debug:chest")||ve("Fitur debug tidak aktif")}),bp({x:Yi.x-8.5,z:Yi.z+6.5,rot:.62,map:!1,title:"BALAI WARGA",label:"Baca papan Balai Warga",html:"<h2>Balai Warga</h2><p>Tempat istirahat warga desa.</p><ul><li><b>Keran air minum</b>: hilangkan haus, isi ulang botol kosong.</li><li><b>Toilet umum</b>: kosongkan kandung kemih. Juga menyembuhkan keracunan &amp; mual.</li><li><b>Gazebo</b>: tidur di kasur untuk memulihkan energi (waktu akan dilewati).</li></ul><p>Tekan <kbd>P</kbd> untuk melihat profil dan kondisi tubuhmu.</p>"}),Ks({pos:ts.fountain,get label(){return io("botol_kosong")?"Minum air · isi botol":"Minum air"},quiet:!0,range:2,action:oL}),Ks({pos:ts.toilet,label:"Pakai toilet umum",quiet:!0,range:2,action:rL}),Ks({pos:ts.bed,label:"Tidur (lewati waktu)",quiet:!0,range:2.2,action:aL}),je("inventory:use",sL),je("stats:depleted",()=>{$e.started&&cL()})},update(i){const t=qt.visible&&Math.hypot(qt.position.x-Ms.x,qt.position.z-Ms.z)<Ms.r;lx("teduh",t||!Pl()||_e.held==="payung");const e=Ms.k+((t?.15:1)-Ms.k)*(1-Math.exp(-i*8));if(!(Math.abs(e-Ms.k)<1e-4)){Ms.k=e;for(const n of Ms.mats)n.opacity=e,n.depthWrite=e>.99}}},qg={...Object.fromEntries(Wi.map(i=>[i,re.needs[i].name])),health:"Darah",stamina:"Stamina"};let Fo=null,Wc="all";function uL(i){if(!i)return'<span class="dc-tag none">tidak bisa dimakan / dipakai</span>';const t=[];for(const e in qg)i[e]&&t.push(`<span class="dc-tag ${i[e]>0?"up":"down"}">${qg[e]} ${i[e]>0?"+":"−"}${Math.abs(i[e])}</span>`);for(const e of i.cure||[]){const n=Object.entries(re.effects).filter(([,s])=>(s.cure||[]).includes(e)).map(([,s])=>s.name);n.length&&t.push(`<span class="dc-tag cure">menyembuhkan ${n.join(", ")}</span>`)}for(const{id:e,chance:n=1}of i.effects||[]){const s=re.effects[e];s&&t.push(`<span class="dc-tag ${s.kind}" title="${s.desc}">${s.icon||""} ${s.name}${n<1?` ${Math.round(n*100)}%`:""}</span>`)}return i.gives&&t.push(`<span class="dc-tag">sisa: ${ei(i.gives).name}</span>`),t.join("")}const Xg=i=>i.icon?`<img src="${i.icon}" alt="">`:`<i class="dot" style="background:${i.color||"#ccc"}"></i>`,dL=[["d1","+1 hari"],["d7","+7 hari"],["season","Musim berikutnya"],...Object.entries(He.weathers).map(([i,t])=>["w:"+i,`${t.icon} ${t.name}`]),["w:","Cuaca otomatis"]],fL=[["all","Semua"],["use","Makanan & obat"],["other","Bahan & lainnya"]],pL=[["heal","Pulihkan semua"],["hunger","Lapar 10%"],["thirst","Haus 10%"],["energy","Ngantuk 10%"],["bladder","Kebelet 10%"],["health","Darah 20%"],["stamina","Stamina 0"],["fx:keracunan","Keracunan"],["fx:mual","Mual"]];function mL(){const i=wg().filter(s=>Wc==="all"||Wc==="use"==!!s.use),t=Fo&&ei(Fo),e=t?`<div class="dc-big">${Xg(t)}</div><h3 class="amatic">${t.name}</h3><p>${t.desc||""}</p><div class="dc-tags">${uL(t.use)}</div>
       <p class="dc-meta">id <code>${t.id}</code> · tumpukan ${t.stack} · harga ${t.price??"–"} G · di tas <b>${io(t.id)}</b></p>
       <div class="choice-btns dc-take"><button data-take="1">Ambil 1</button><button data-take="5">Ambil 5</button><button data-take="${t.stack}">Ambil ${t.stack}<small>1 tumpuk</small></button></div>`:'<p class="dc-empty">Pilih barang untuk melihat detail dan efeknya.</p>',n=Cn.map(s=>`<span class="dc-tag ${s.def.kind}">${s.def.icon||""} ${s.def.name}</span>`).join("")||'<span class="dc-tag none">normal</span>';return`<div class="debug-chest">
    <h2>Peti Debug</h2>
    <p class="dc-sub">Semua barang yang ada di game (${wg().length}). Ambil sebanyak apa pun untuk dicoba. Muncul karena <code>DEBUG = true</code> di game/config.js.</p>
    <div class="dc-tabs">${fL.map(([s,o])=>`<button data-tab="${s}" class="${s===Wc?"on":""}">${o}</button>`).join("")}</div>
    <div class="dc-body">
      <div class="dc-grid">${i.map(s=>`<button class="dc-item${s.id===Fo?" on":""}" data-id="${s.id}" title="${s.name}">${Xg(s)}<span>${s.name}</span>${io(s.id)?`<b>${io(s.id)}</b>`:""}</button>`).join("")}</div>
      <div class="dc-detail">${e}</div>
    </div>
    <h4>Waktu &amp; cuaca</h4>
    <div class="dc-states">${dL.map(([s,o])=>`<button data-time="${s}">${o}</button>`).join("")}</div>
    <p class="dc-now">Tanggal: <b>${aa(Vn())}</b> · cuaca ${Vn().weather.icon} ${Vn().weather.name}</p>
    <h4>Uji kondisi</h4>
    <div class="dc-states">${pL.map(([s,o])=>`<button data-state="${s}">${o}</button>`).join("")}</div>
    <p class="dc-now">Sekarang: ${Wi.map(s=>`${re.needs[s].name} <b>${Math.round(Wt[s])}%</b>`).join(" · ")} · Darah <b>${Math.round(Wt.health)}/${Math.round(xe.maxHealth)}</b><br>${n}</p>
  </div>`}const D_=()=>Tl(mL(),_L);function gL(i){const t=Np(Fo);if(!t){ve("Tas penuh!"),te.drop();return}qo(Fo,Math.min(i,t)),te.stash()}function vL(i){if(i==="heal"){for(const t of[...Cn])t.left!==void 0&&HC(t.id);for(const t of Wi)Ao(t,100);Ao("health",xe.maxHealth),Ao("stamina",xe.maxStamina)}else i.startsWith("fx:")?ra(i.slice(3))||ve("Diblokir oleh efek lain"):i==="health"?Ao("health",xe.maxHealth*.2):i==="stamina"?Ao("stamina",0):Ao(i,10);te.pop()}function xL(i){i==="d1"||i==="d7"?sf(Zt.day+(i==="d1"?1:7)):i==="season"?sf((Math.floor(Zt.day/He.daysPerSeason)+1)*He.daysPerSeason):fx(i.slice(2)||null),te.pop()}function _L(i){const t=i.target.closest("button");if(t){if(t.dataset.id)Fo=Fo===t.dataset.id?null:t.dataset.id,te.step(.5);else if(t.dataset.tab)Wc=t.dataset.tab;else if(t.dataset.take)gL(+t.dataset.take);else if(t.dataset.state)vL(t.dataset.state);else if(t.dataset.time)xL(t.dataset.time);else return;D_()}}const yL={id:"debug",build(){je("debug:chest",()=>{Zr()||D_()})}},ML=[C3,q3,hL,yL];fC(ML);ZP();i3();l3();m3();async function wL(){await FR(Mg,()=>pC({player:Bt})),xP();let i=xC(Jt,[Ht,qt,...bs.map(t=>t.mesh),...$r.map(t=>t.dia).filter(Boolean)]);for(const t of bs)t.mesh.isMesh||(i+=Ah(t.mesh,up(t.mesh)));console.log(`batching: ${i} meshes merged away`),Mg(1,"Siap!")}const SL=new zv,nd={t:0,player:Bt,active:!1};let La=!1;function Cf(){const i=Math.min(SL.getDelta(),.05),t=Te.uTime.value+=i,e=LC(i);XC();const n=qR(RC(e),i);VP(e),a3();const s=$e.started&&!Zr();IP(i,Ho,s),sP(i,CP(Ho),s&&Bt.mode==="car",Bt.mode==="car"),Je.step(1/120,i,10),oP(),DP(i),(Bt.mode==="car"?!La:La&&Bt.mode==="foot")&&(La=!La,t_(La),Ye("player:mode",Bt.mode));for(const o of bs)o.mesh.position.copy(o.body.interpolatedPosition),o.mesh.quaternion.copy(o.body.interpolatedQuaternion),o.body.position.y<-8&&(o.body.position.copy(o.home.p),o.body.velocity.setZero(),o.body.angularVelocity.setZero());FC(i,s),nd.t=t,nd.active=s,mC(i,nd),p3()||nR(i,EP()),HR(e,n,rs),lP(i,n),kR(i,rs,UP()),YR(i,e,rs),eP(i),VR(t),Pp($C(t,TP(),SP())),d_(i),u3()||(ko.render(),d3()),dC(),AC(i,s),GP(i),requestAnimationFrame(Cf)}const Za=new URLSearchParams(location.search);function bL({fresh:i}){i&&Za.has("jam")&&(zh(parseFloat(Za.get("jam"))%24),$("speedSel").value="0",Zt.speed=0),$e.started=!0,t_(Bt.mode==="car",12e3),i&&_P(),Ye("game:start")}wL().then(()=>{BP(),Za.has("kualitas")&&($("qualitySel").value=Za.get("kualitas"),Ip(Za.get("kualitas"))),Mp(),window.__tester={tick:Cf,camTarget:rs,player:Bt},Ye("world:ready"),b3(bL),location.hash==="#auto"&&E3(),Cf()}).catch(i=>{console.error(i),$("loadText").innerHTML=`<span class="err">Gagal memuat: ${i.message}</span>`});
