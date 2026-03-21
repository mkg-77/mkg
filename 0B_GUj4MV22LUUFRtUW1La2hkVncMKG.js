//<![CDATA[
shortcut={all_shortcuts:{},add:function(a,b,c){var d={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};if(c)for(var e in d)"undefined"==typeof c[e]&&(c[e]=d[e]);else c=d;d=c.target,"string"==typeof c.target&&(d=document.getElementById(c.target)),a=a.toLowerCase(),e=function(d){d=d||window.event;if(c.disable_in_input){var e;d.target?e=d.target:d.srcElement&&(e=d.srcElement),3==e.nodeType&&(e=e.parentNode);if("INPUT"==e.tagName||"TEXTAREA"==e.tagName)return}d.keyCode?code=d.keyCode:d.which&&(code=d.which),e=String.fromCharCode(code).toLowerCase(),188==code&&(e=","),190==code&&(e=".");var f=a.split("+"),g=0,h={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","":"|"},i={esc:27,escape:27,tab:9,space:32,"return":13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,"break":19,insert:45,home:36,"delete":46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},j=!1,l=!1,m=!1,n=!1,o=!1,p=!1,q=!1,r=!1;d.ctrlKey&&(n=!0),d.shiftKey&&(l=!0),d.altKey&&(p=!0),d.metaKey&&(r=!0);for(var s=0;k=f[s],s<f.length;s++)"ctrl"==k||"control"==k?(g++,m=!0):"shift"==k?(g++,j=!0):"alt"==k?(g++,o=!0):"meta"==k?(g++,q=!0):1<k.length?i[k]==code&&g++:c.keycode?c.keycode==code&&g++:e==k?g++:h[e]&&d.shiftKey&&(e=h[e],e==k&&g++);if(g==f.length&&n==m&&l==j&&p==o&&r==q&&(b(d),!c.propagate))return d.cancelBubble=!0,d.returnValue=!1,d.stopPropagation&&(d.stopPropagation(),d.preventDefault()),!1},this.all_shortcuts[a]={callback:e,target:d,event:c.type},d.addEventListener?d.addEventListener(c.type,e,!1):d.attachEvent?d.attachEvent("on"+c.type,e):d["on"+c.type]=e},remove:function(a){var a=a.toLowerCase(),b=this.all_shortcuts[a];delete this.all_shortcuts[a];if(b){var a=b.event,c=b.target,b=b.callback;c.detachEvent?c.detachEvent("on"+a,b):c.removeEventListener?c.removeEventListener(a,b,!1):c["on"+a]=!1}}},shortcut.add("esc",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Ctrl+Shift+Del",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Ctrl+Shift+K",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Ctrl+Shift+P",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Ctrl+Shift+I",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Ctrl+Shift+J",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Ctrl+Shift+S",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Ctrl+Shift+Q",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Shift+F2",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Shift+F4",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Shift+F5",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Shift+F7",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Shift+F8",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Ctrl+F",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Ctrl+W",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Ctrl+U",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Ctrl+A",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Ctrl+S",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Ctrl+X",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Ctrl+C",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Ctrl+V",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Ctrl+Y",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Ctrl+Z",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Ctrl+P",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Ctrl+R",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Ctrl+I",function(){top.location.href="//www.madukaruhungandawijaya.com"});shortcut.add("Ctrl+L",function(){top.location.href="//www.madukaruhungandawijaya.com"});//]]>

function toInt(val) {
  return parseInt(val) || 0;
}

function hitung() {
  var a = document.form1;

  // DATA PRODUK
  const produk = [
    { harga: toInt(a.MaduMultiflora200.value), qty: toInt(a.pesanMaduMultiflora200.value), berat: 290, sub: "subtotalMaduMultiflora200", b: "beratMaduMultiflora200" },
    { harga: toInt(a.MaduMultiflora350.value), qty: toInt(a.pesanMaduMultiflora350.value), berat: 500, sub: "subtotalMaduMultiflora350", b: "beratMaduMultiflora350" },
    { harga: toInt(a.MaduMultiflora500.value), qty: toInt(a.pesanMaduMultiflora500.value), berat: 715, sub: "subtotalMaduMultiflora500", b: "beratMaduMultiflora500" },

    { harga: toInt(a.MaduHutan200.value), qty: toInt(a.pesanMaduHutan200.value), berat: 290, sub: "subtotalMaduHutan200", b: "beratMaduHutan200" },
    { harga: toInt(a.MaduHutan350.value), qty: toInt(a.pesanMaduHutan350.value), berat: 500, sub: "subtotalMaduHutan350", b: "beratMaduHutan350" },
    { harga: toInt(a.MaduHutan500.value), qty: toInt(a.pesanMaduHutan500.value), berat: 715, sub: "subtotalMaduHutan500", b: "beratMaduHutan500" },

    { harga: toInt(a.MaduRanduPati200.value), qty: toInt(a.pesanMaduRanduPati200.value), berat: 290, sub: "subtotalMaduRanduPati200", b: "beratMaduRanduPati200" },
    { harga: toInt(a.MaduRanduPati350.value), qty: toInt(a.pesanMaduRanduPati350.value), berat: 500, sub: "subtotalMaduRanduPati350", b: "beratMaduRanduPati350" },
    { harga: toInt(a.MaduRanduPati500.value), qty: toInt(a.pesanMaduRanduPati500.value), berat: 715, sub: "subtotalMaduRanduPati500", b: "beratMaduRanduPati500" },

    { harga: toInt(a.MaduKopi200.value), qty: toInt(a.pesanMaduKopi200.value), berat: 290, sub: "subtotalMaduKopi200", b: "beratMaduKopi200" },
    { harga: toInt(a.MaduKopi350.value), qty: toInt(a.pesanMaduKopi350.value), berat: 500, sub: "subtotalMaduKopi350", b: "beratMaduKopi350" },
    { harga: toInt(a.MaduKopi500.value), qty: toInt(a.pesanMaduKopi500.value), berat: 715, sub: "subtotalMaduKopi500", b: "beratMaduKopi500" },
  ];

  let totalHarga = 0;
  let totalQty = 0;
  let totalBerat = 0;

  produk.forEach(p => {
    let subtotal = p.harga * p.qty;
    let beratKg = (p.berat * p.qty) / 1000;

    totalHarga += subtotal;
    totalQty += p.qty;
    totalBerat += beratKg;

    a[p.sub].value = subtotal;
    a[p.b].value = beratKg;
  });

  // ONGKIR
  let ongkir = toInt(a.ongkir.value);
  let pembulatan = Math.ceil(totalBerat); // pembulatan ke atas

  let totalOngkir = pembulatan * ongkir;
  let grandTotal = totalHarga + totalOngkir;

  // OUTPUT
  a.jmlorder.value = totalQty;
  a.subjmlorder.value = totalQty;

  a.berat.value = totalBerat;
  a.subberat.value = totalBerat;

  a.total.value = totalHarga;
  a.subtotal.value = totalHarga;

  a.pembulatankg.value = pembulatan;
  a.totalongkir.value = totalOngkir;

  a.bayar.value = grandTotal;
}

function hapus() {
  document.form1.reset();
}
