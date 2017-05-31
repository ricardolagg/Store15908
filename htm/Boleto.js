(function(){
  "use strict";
  var aTD=document.getElementsByTagName("td");
  for(var i=0;i<aTD.length;i++)if(aTD[i].innerHTML.indexOf("Pagável preferencialmente nas Casas Lotéricas, Agências da Caixa e Rede Bancária")>=0)aTD[i].innerHTML=aTD[i].innerHTML.replace("Pagável preferencialmente nas Casas Lotéricas, Agências da Caixa e Rede Bancária","PREFERENCIALMENTE NAS CASAS LOTÉRICAS ATÉ O VALOR LIMITE");
  for(var j=0;j<aTD.length;j++)if(aTD[j].innerHTML.indexOf("e leve a qualquer agência bancária para pagamento do pedido.")>=0)aTD[j].innerHTML=aTD[j].innerHTML.replace("e leve a qualquer agência bancária para pagamento do pedido.","e leve uma agência bancária da Caixa Econômica Federal ou a uma Lotérica para pagamento do pedido.");
  for(var k=0;k<aTD.length;k++)if(aTD[k].innerHTML.indexOf("Se preferir, utilize a numeração no topo do documento para pagá-lo via <i>home-banking</i>.")>=0)aTD[k].innerHTML=aTD[k].innerHTML.replace("Se preferir, utilize a numeração no topo do documento para pagá-lo via <i>home-banking</i>.","Se preferir, utilize a numeração no topo do documento para pagá-lo via home-banking da Caixa Econômica Federal.");
})();