var dataDaily = [
    ['CVR', 'TALK'],
    [90, 353]
];

var dataWeekly = [
    ['CVR', 'TALK'],
    [225, 893]
];

var dataMonthly = [
    ['CVR', 'TALK'],
    [1602, 4934]  
];

$(function () {
    
    // Initial chart
    var chart = c3.generate({
        data: {
            rows: dataDaily,
            type: 'pie'
        }
    });
    
    // Redraw chart depending on which option is selected
    $("#DataType").change(function (evt) {
        var timeSelection = $("#DataType").val();
        var chart = c3.generate({
            data: {
                rows: timeSelection,
                type: 'pie' 
            }
        });
    });
    
});
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.4.11/d3.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.css">
<select id="DataType">
  <option value="dataDaily">Daily</option>
  <option value="dataWeekly">Weekly</option>
  <option value="dataMonthly">Monthly</option>
</select>
<div id="chart"></div>