(function(){
  "use strict";
  var aTD=document.getElementsByTagName("td");
  for(var i=0;i<aTD.length;i++)if(aTD[i].innerHTML.indexOf("Pag�vel preferencialmente nas Casas Lot�ricas, Ag�ncias da Caixa e Rede Banc�ria")>=0)aTD[i].innerHTML=aTD[i].innerHTML.replace("Pag�vel preferencialmente nas Casas Lot�ricas, Ag�ncias da Caixa e Rede Banc�ria","PREFERENCIALMENTE NAS CASAS LOT�RICAS AT� O VALOR LIMITE");
  for(var j=0;j<aTD.length;j++)if(aTD[j].innerHTML.indexOf("e leve a qualquer ag�ncia banc�ria para pagamento do pedido.")>=0)aTD[j].innerHTML=aTD[j].innerHTML.replace("e leve a qualquer ag�ncia banc�ria para pagamento do pedido.","e leve uma ag�ncia banc�ria da Caixa Econ�mica Federal ou a uma Lot�rica para pagamento do pedido.");
  for(var k=0;k<aTD.length;k++)if(aTD[k].innerHTML.indexOf("Se preferir, utilize a numera��o no topo do documento para pag�-lo via <i>home-banking</i>.")>=0)aTD[k].innerHTML=aTD[k].innerHTML.replace("Se preferir, utilize a numera��o no topo do documento para pag�-lo via <i>home-banking</i>.","Se preferir, utilize a numera��o no topo do documento para pag�-lo via home-banking da Caixa Econ�mica Federal.");
})();