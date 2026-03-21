<script language='JavaScript' type='text/JavaScript'>
//<![CDATA[
//<!--
function hitung(){
var myForm=document.form1;
var hargaMaduMultiflora200=parseInt(myForm.MaduMultiflora200.value)*parseInt(myForm.pesanMaduMultiflora200.value);
var hargaMaduMultiflora350=parseInt(myForm.MaduMultiflora350.value)*parseInt(myForm.pesanMaduMultiflora350.value);
var hargaMaduMultiflora500=parseInt(myForm.MaduMultiflora500.value)*parseInt(myForm.pesanMaduMultiflora500.value);
var hargaMaduHutan200=parseInt(myForm.MaduHutan200.value)*parseInt(myForm.pesanMaduHutan200.value);
var hargaMaduHutan350=parseInt(myForm.MaduHutan350.value)*parseInt(myForm.pesanMaduHutan350.value);
var hargaMaduHutan500=parseInt(myForm.MaduHutan500.value)*parseInt(myForm.pesanMaduHutan500.value);
var hargaMaduRanduPati200=parseInt(myForm.MaduRanduPati200.value)*parseInt(myForm.pesanMaduRanduPati200.value);
var hargaMaduRanduPati350=parseInt(myForm.MaduRanduPati350.value)*parseInt(myForm.pesanMaduRanduPati350.value);
var hargaMaduRanduPati500=parseInt(myForm.MaduRanduPati500.value)*parseInt(myForm.pesanMaduRanduPati500.value);
var hargaMaduKopi200=parseInt(myForm.MaduKopi200.value)*parseInt(myForm.pesanMaduKopi200.value);
var hargaMaduKopi350=parseInt(myForm.MaduKopi350.value)*parseInt(myForm.pesanMaduKopi350.value);
var hargaMaduKopi500=parseInt(myForm.MaduKopi500.value)*parseInt(myForm.pesanMaduKopi500.value);
var asberatMaduMultiflora200=parseInt(myForm.pesanMaduMultiflora200.value)*290;
var asberatMaduMultiflora350=parseInt(myForm.pesanMaduMultiflora350.value)*500;
var asberatMaduMultiflora500=parseInt(myForm.pesanMaduMultiflora500.value)*715;
var asberatMaduHutan200=parseInt(myForm.pesanMaduHutan200.value)*290;
var asberatMaduHutan350=parseInt(myForm.pesanMaduHutan350.value)*500;
var asberatMaduHutan500=parseInt(myForm.pesanMaduHutan500.value)*715;
var asberatMaduRanduPati200=parseInt(myForm.pesanMaduRanduPati200.value)*290;
var asberatMaduRanduPati350=parseInt(myForm.pesanMaduRanduPati350.value)*500;
var asberatMaduRanduPati500=parseInt(myForm.pesanMaduRanduPati500.value)*715;
var asberatMaduKopi200=parseInt(myForm.pesanMaduKopi200.value)*290;
var asberatMaduKopi350=parseInt(myForm.pesanMaduKopi350.value)*500;
var asberatMaduKopi500=parseInt(myForm.pesanMaduKopi500.value)*715;
var QTYOrderMaduMultiflora200=parseInt(myForm.pesanMaduMultiflora200.value);
var QTYOrderMaduMultiflora350=parseInt(myForm.pesanMaduMultiflora350.value);
var QTYOrderMaduMultiflora500=parseInt(myForm.pesanMaduMultiflora500.value);
var QTYOrderMaduHutan200=parseInt(myForm.pesanMaduHutan200.value);
var QTYOrderMaduHutan350=parseInt(myForm.pesanMaduHutan350.value);
var QTYOrderMaduHutan500=parseInt(myForm.pesanMaduHutan500.value);
var QTYOrderMaduRanduPati200=parseInt(myForm.pesanMaduRanduPati200.value);
var QTYOrderMaduRanduPati350=parseInt(myForm.pesanMaduRanduPati350.value);
var QTYOrderMaduRanduPati500=parseInt(myForm.pesanMaduRanduPati500.value);
var QTYOrderMaduKopi200=parseInt(myForm.pesanMaduKopi200.value);
var QTYOrderMaduKopi350=parseInt(myForm.pesanMaduKopi350.value);
var QTYOrderMaduKopi500=parseInt(myForm.pesanMaduKopi500.value);
var QTYOrder=QTYOrderMaduMultiflora200+QTYOrderMaduMultiflora350+QTYOrderMaduMultiflora500+QTYOrderMaduHutan200+QTYOrderMaduHutan350+QTYOrderMaduHutan500+QTYOrderMaduRanduPati200+QTYOrderMaduRanduPati350+QTYOrderMaduRanduPati500+QTYOrderMaduKopi200+QTYOrderMaduKopi350+QTYOrderMaduKopi500;
var beratTotal=(asberatMaduMultiflora200+asberatMaduMultiflora350+asberatMaduMultiflora500+asberatMaduHutan200+asberatMaduHutan350+asberatMaduHutan500+asberatMaduRanduPati200+asberatMaduRanduPati350+asberatMaduRanduPati500+asberatMaduKopi200+asberatMaduKopi350+asberatMaduKopi500)/1000;
var hargaTotal=(hargaMaduMultiflora200+hargaMaduMultiflora350+hargaMaduMultiflora500+hargaMaduHutan200+hargaMaduHutan350+hargaMaduHutan500+hargaMaduRanduPati200+hargaMaduRanduPati350+hargaMaduRanduPati500+hargaMaduKopi200+hargaMaduKopi350+hargaMaduKopi500)*1000;
if(hargaTotal>0,01)
{
myForm.subtotalMaduMultiflora200.value=hargaMaduMultiflora200*1.000;
myForm.subtotalMaduMultiflora350.value=hargaMaduMultiflora350*1.000;
myForm.subtotalMaduMultiflora500.value=hargaMaduMultiflora500*1.000;
myForm.subtotalMaduHutan200.value=hargaMaduHutan200*1.000;
myForm.subtotalMaduHutan350.value=hargaMaduHutan350*1.000;
myForm.subtotalMaduHutan500.value=hargaMaduHutan500*1.000;
myForm.subtotalMaduRanduPati200.value=hargaMaduRanduPati200*1.000;
myForm.subtotalMaduRanduPati350.value=hargaMaduRanduPati350*1.000;
myForm.subtotalMaduRanduPati500.value=hargaMaduRanduPati500*1.000;
myForm.subtotalMaduKopi200.value=hargaMaduKopi200*1.000;
myForm.subtotalMaduKopi350.value=hargaMaduKopi350*1.000;
myForm.subtotalMaduKopi500.value=hargaMaduKopi500*1.000;
myForm.beratMaduMultiflora200.value=(parseInt(myForm.pesanMaduMultiflora200.value)*290)/1000;
myForm.beratMaduMultiflora350.value=(parseInt(myForm.pesanMaduMultiflora350.value)*500)/1000;
myForm.beratMaduMultiflora500.value=(parseInt(myForm.pesanMaduMultiflora500.value)*715)/1000;
myForm.beratMaduHutan200.value=(parseInt(myForm.pesanMaduHutan200.value)*290)/1000;
myForm.beratMaduHutan350.value=(parseInt(myForm.pesanMaduHutan350.value)*500)/1000;
myForm.beratMaduHutan500.value=(parseInt(myForm.pesanMaduHutan500.value)*715)/1000;
myForm.beratMaduRanduPati200.value=(parseInt(myForm.pesanMaduRanduPati200.value)*290)/1000;
myForm.beratMaduRanduPati350.value=(parseInt(myForm.pesanMaduRanduPati350.value)*500)/1000;
myForm.beratMaduRanduPati500.value=(parseInt(myForm.pesanMaduRanduPati500.value)*715)/1000;
myForm.beratMaduKopi200.value=(parseInt(myForm.pesanMaduKopi200.value)*290)/1000;
myForm.beratMaduKopi350.value=(parseInt(myForm.pesanMaduKopi350.value)*500)/1000;
myForm.beratMaduKopi500.value=(parseInt(myForm.pesanMaduKopi500.value)*715)/1000;
myForm.jmlorder.value=QTYOrder;
myForm.subjmlorder.value=QTYOrder;
myForm.berat.value=beratTotal;
myForm.subberat.value=beratTotal;
myForm.total.value=hargaTotal/1000;
myForm.subtotal.value=hargaTotal/1000;
myForm.ongkir.value=parseInt(myForm.ongkir.value);
myForm.pembulatankg.value=parseInt(myForm.pembulatankg.value);
myForm.totalongkir.value=parseInt(myForm.pembulatankg.value)*parseInt(myForm.ongkir.value) ;
myForm.bayar.value=(hargaTotal/1000)+parseInt(myForm.totalongkir.value);
}
else
{
myForm.total.value=hargaTotal;
myForm.berat.value=beratTotal;
myForm.diskon.value=0;
myForm.bayar.value=hargaTotal;
}
}
function hapus(){
document.form1.reset();
}
//-->
//]]>
</script>
