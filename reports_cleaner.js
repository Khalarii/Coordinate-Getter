var current_url = document.URL;

if (current_url.includes('tribalwars') && current_url.includes('village=') && current_url.includes('screen=report')) {
    var reports_table = document.getElementById('report_list').getElementsByTagName("tr");
    if (reports_table != null) {

        for (var i = 1; i < reports_table.length; i++) {
        	//var village_info = reports_table[i - village_info_offset].cells[0].childNodes[1].childNodes[1].childNodes[1].innerText;
            var row = reports_table[i];
            var trigger_words = { 'forneceu', 'oferta', 'apoiou' };
            trigger_words.forEach(function(word){ if (row.cells[1].firstChild.data.includes('forneceu')){
            	var l = row.cells[0].firstChild.data;
                alert(l);
                break;
            } else{ alert(row.cells[1].firstChild.data); break; } });
        }
    } else {
        alert('Erro ao encontrar tabela de relatorios');
    }
} else {
    alert('Voce deve estar na visualizacao de relatorios para rodar o script');
}