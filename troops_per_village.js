var current_url = document.URL;

if (current_url.includes('tribalwars') && current_url.includes('village=') && current_url.includes('mode=units')) {
	var final_text = "";
	var output = [];
    var units_table = document.getElementById('units_table').getElementsByTagName("tr");
    if (units_table != null) {
        var village_info_offset = 1;
        var id_cell = 0;

        if (units_table[1].cells[1].firstChild.data == 'Na Aldeia') {
            village_info_offset = 0;
            id_cell = 1;
        }

        for (var i = 1; i < units_table.length; i++) {
            var row = units_table[i];

            if (row.cells[id_cell].firstChild.data == 'Na Aldeia') {
                var village_units = [];
                var village_info = units_table[i - village_info_offset].cells[0].childNodes[1].childNodes[1].childNodes[1].innerText;

                village_units.push(village_info.substr(village_info.indexOf('(') + 1, (village_info.indexOf(')') - village_info.indexOf('(') - 1)));

                for (var j = 1; j < row.cells.length; j++) {
                    village_units.push(units_table[i].cells[j].firstChild.data);
                }

                output.push(village_units);
            }
        }

        for (var i = 0; i < output.length; i++) {
            var village = output[i];

            var line = "";

            village.forEach(function(v){ if (v != undefined) { line += v + ";"} });
            final_text += line + "\n";
        }

        var textbox = document.createElement("textarea");
        textbox.value = final_text;
        document.body.appendChild(textbox);
    } else {
        alert('Erro ao encontrar tabela de unidades');
    }
} else {
    alert('Voce deve estar na visualizacao de tropas para rodar o script');
}