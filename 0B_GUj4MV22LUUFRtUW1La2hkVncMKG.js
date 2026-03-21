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
