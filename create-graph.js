function parseData(createGraph) {
	Papa.parse("test4.csv", {
		download: true,
		complete: function(results) {
            //console.log(results.data);
			createGraph(results.data);
		}
	});
}
function createGraph(data){
    var long = [];
    var br_rtn = [];
    var bt_rtn = [];
    var bn_rtn = [];
    
    for(var i = 0; i < data.length; i++){
        long.push(data[i][0]);
        br_rtn.push(data[i][1]);
        bt_rtn.push(data[i][2]);
        bn_rtn.push(data[i][3]);
    }

    var chart = c3.generate({
        bindto: '#chart',
        data: {
            columns: [
                br_rtn,
                bt_rtn,
                bn_rtn
            ]
        },
        axis: {
            x: {
                type: 'category',
                categories: long
            }
        }
    });
}

parseData(createGraph);
