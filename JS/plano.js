function selecao(tipo){
	console.log('deu certo'+tipo);
	if(tipo == 'basico'){
		document.getElementById('basico').className = 'caixa selecionado'; 
		document.getElementById('padrao').className = 'caixa'; 
		document.getElementById('premium').className = 'caixa';
		document.getElementById('selBasico').className = 'corBasico selecionado';
		document.getElementById('selPadrao').className = 'corPadrao';
		document.getElementById('selPremium').className = 'corPremium';
		document.getElementById('selBasico1').className = 'uncheck selecionado';
		document.getElementById('selPadrao1').className = 'check';
		document.getElementById('selPremium1').className = 'check';
		document.getElementById('selBasico2').className = 'uncheck selecionado';
		document.getElementById('selPadrao2').className = 'uncheck';
		document.getElementById('selPremium2').className = 'check';
		document.getElementById('selBasico3').className = 'corBasico selecionado';
		document.getElementById('selPadrao3').className = 'corPadrao';
		document.getElementById('selPremium3').className = 'corPremium';
		document.getElementById('selBasico4').className = 'check selecionado';
		document.getElementById('selPadrao4').className = 'check';
		document.getElementById('selPremium4').className = 'check';
		document.getElementById('selBasico5').className = 'check selecionado';
		document.getElementById('selPadrao5').className = 'check';
		document.getElementById('selPremium5').className = 'check';
		document.getElementById('selBasico6').className = 'check selecionado';
		document.getElementById('selPadrao6').className = 'check';
		document.getElementById('selPremium6').className = 'check';
		document.getElementById('selBasico7').className = 'check selecionado';
		document.getElementById('selPadrao7').className = 'check';
		document.getElementById('selPremium7').className = 'check';

	}else if(tipo == 'padrao'){
		document.getElementById('basico').className = 'caixa'; 
		document.getElementById('padrao').className = 'caixa selecionado'; 
		document.getElementById('premium').className = 'caixa';
		document.getElementById('selBasico').className = 'corBasico';
		document.getElementById('selPadrao').className = 'corPadrao selecionado';
		document.getElementById('selPremium').className = 'corPremium';
		document.getElementById('selBasico1').className = 'uncheck';
		document.getElementById('selPadrao1').className = 'check selecionado';
		document.getElementById('selPremium1').className = 'check';
		document.getElementById('selBasico2').className = 'uncheck';
		document.getElementById('selPadrao2').className = 'uncheck selecionado';
		document.getElementById('selPremium2').className = 'check';
		document.getElementById('selBasico3').className = 'corBasico';
		document.getElementById('selPadrao3').className = 'corPadrao selecionado';
		document.getElementById('selPremium3').className = 'corPremium';
		document.getElementById('selBasico4').className = 'check';
		document.getElementById('selPadrao4').className = 'check selecionado';
		document.getElementById('selPremium4').className = 'check';
		document.getElementById('selBasico5').className = 'check';
		document.getElementById('selPadrao5').className = 'check selecionado';
		document.getElementById('selPremium5').className = 'check';
		document.getElementById('selBasico6').className = 'check';
		document.getElementById('selPadrao6').className = 'check selecionado';
		document.getElementById('selPremium6').className = 'check';
		document.getElementById('selBasico7').className = 'check';
		document.getElementById('selPadrao7').className = 'check selecionado';
		document.getElementById('selPremium7').className = 'check';

	}else if(tipo == 'premium'){
		document.getElementById('basico').className = 'caixa'; 
		document.getElementById('padrao').className = 'caixa'; 
		document.getElementById('premium').className = 'caixa selecionado';
		document.getElementById('selBasico').className = 'corBasico';
		document.getElementById('selPadrao').className = 'corPadrao';
		document.getElementById('selPremium').className = 'corPremium selecionado';
		document.getElementById('selBasico1').className = 'uncheck';
		document.getElementById('selPadrao1').className = 'check';
		document.getElementById('selPremium1').className = 'check selecionado';
		document.getElementById('selBasico2').className = 'uncheck';
		document.getElementById('selPadrao2').className = 'uncheck';
		document.getElementById('selPremium2').className = 'check selecionado';
		document.getElementById('selBasico3').className = 'corBasico';
		document.getElementById('selPadrao3').className = 'corPadrao';
		document.getElementById('selPremium3').className = 'corPremium selecionado';
		document.getElementById('selBasico4').className = 'check';
		document.getElementById('selPadrao4').className = 'check';
		document.getElementById('selPremium4').className = 'check selecionado';
		document.getElementById('selBasico5').className = 'check';
		document.getElementById('selPadrao5').className = 'check';
		document.getElementById('selPremium5').className = 'check selecionado';
		document.getElementById('selBasico6').className = 'check';
		document.getElementById('selPadrao6').className = 'check';
		document.getElementById('selPremium6').className = 'check selecionado';
		document.getElementById('selBasico7').className = 'check';
		document.getElementById('selPadrao7').className = 'check';
		document.getElementById('selPremium7').className = 'check selecionado';
	}
}