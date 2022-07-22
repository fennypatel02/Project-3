
console.log(" Plots.js")
//////CREATE PLOTS FOR HTML/////////////////////////////////////////////////////////////////////////
Plotly.d3.csv('https://raw.githubusercontent.com/agarcia91/sample/main/stock.csv', function (err, rows) {

    function unpack(rows, key) {
        return rows.map(function (row) { return row[key]; });
    }

    var allname = unpack(rows, 'company_name'),
        allDate = unpack(rows, 'date'),
        alladjusted = unpack(rows, 'adjusted_close'),
        allclose = unpack(rows, 'close'),
        allhigh = unpack(rows, 'high'),
        alllow = unpack(rows, 'low'),
        allopen = unpack(rows, 'open'),
        listofnames = [],
        currentname,
        currentadjusted = [],
        currentDate = [],
        currentclose = [],
        currenthigh = [],
        currentlow = [],
        currentopen = [];

    for (var i = 0; i < allname.length; i++) {
        if (listofnames.indexOf(allname[i]) === -1) {
            listofnames.push(allname[i]);
        }
    }

    function getnameData(chosenname) {
        currentadjusted = [];
        currentDate = [];
        for (var i = 0; i < allname.length; i++) {
            if (allname[i] === chosenname) {
                currentadjusted.push(alladjusted[i]);
                currentDate.push(allDate[i]);
                currentclose.push(allclose[i]);
                currenthigh.push(allhigh[i]);
                currentlow.push(alllow[i]);
                currentopen.push(allopen[i]);
            }
        }
    };

    ///////line chart//////////////////////////////////////
    setBubblePlot('Apple');

    function setBubblePlot(chosenname) {
        getnameData(chosenname);

        var trace1 = {
            x: currentDate,
            y: currentadjusted,

            mode: 'lines+markers',
            text: '<br>Adjusted Closing Price',
            line: { color: 'orange' },
            marker: {
                size: 12,
                opacity: 0.5
            }
        };
        var data = [trace1];

        var layout = {
            title: 'Stock Prices Per Last 6 Months<br>' + chosenname
        };

        Plotly.newPlot('plotdiv', data, layout, { showSendToCloud: true });
    };
    ///////CANDLESTICK CHART/////////////////////////////////////////////
    var trace2 = {
        x: currentDate,
        close: currentclose,

        decreasing: { line: { color: 'blue' } },

        high: currenthigh,

        increasing: { line: { color: 'green' } },

        line: { color: 'orange' },

        low: currentlow,

        open: currentopen,

        type: 'candlestick',
        xaxis: 'x',
        yaxis: 'y'
    };

    var data_ = [trace2];

    var layout = {
        title: "<br> Candlestick Chart with Rangeslider",
        dragmode: 'zoom',
        margin: {
            r: 10,
            t: 25,
            b: 40,
            l: 60
        },
        showlegend: false,
        xaxis: {
            autorange: true,
            domain: [0, 1],
            range: ['2022-01-14 12:00', '2022-07-11 12:00'],
            rangeslider: { range: ['2022-01-14 12:00', '2022-07-11 12:00'] },
            //title: 'Date', 
            type: 'date'
        },
        yaxis: {
            autorange: true,
            domain: [0, 1],
            range: [0, 999],
            type: 'linear'
        }
    };
    Plotly.newPlot('candle', data_, layout);

    /////////selector for dropdown/////////////////////////
    var innerContainer = document.querySelector('[data-num="0"'),
        plotEl = innerContainer.querySelector('.plot'),
        stockSelector = innerContainer.querySelector('.stockdata');

    function assignOptions(textArray, selector) {
        for (var i = 0; i < textArray.length; i++) {
            var currentOption = document.createElement('option');
            currentOption.text = textArray[i];
            selector.appendChild(currentOption);
        }
    }

    assignOptions(listofnames, stockSelector);

    function updateStock() {
        setBubblePlot(stockSelector.value);
    }

    stockSelector.addEventListener('change', updateStock, false);



    ////////Interactive table///////////////////////////////////////////////////////////////////////////
    var headerNames = d3.keys(rows[0]);
    var headerValues = [];
    var cellValues = [];
    for (i = 0; i < headerNames.length; i++) {
        headerValue = [headerNames[i]];
        headerValues[i] = headerValue;
        cellValue = unpack(rows, headerNames[i]);
        cellValues[i] = cellValue;
    }
    // clean date
    for (i = 0; i < cellValues[1].length; i++) {
        var dateValue = cellValues[1][i].split(' ')[0]
        cellValues[1][i] = dateValue
    }
    var info = [{
        type: 'table',
        columnwidth: [300, 1000, 1000, 900, 600, 500, 1000, 1000, 1000],
        columnorder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        header: {
            values: headerValues,
            align: "center",
            line: { width: 2, color: 'rgb(50, 50, 50)' },
            fill: { color: ['rgb(92, 158, 87)'] },
            font: { family: "Arial", size: 15, color: "white" }
        },
        cells: {
            values: cellValues,
            align: ["center", "center"],
            line: { color: "black", width: 1 },
            fill: { color: ['rgba(174, 229, 147, 0.89)', 'rgba(129, 215, 86, 0.89)', 'rgba(216, 241, 203, 0.89)'] },
            font: { family: "Arial", size: 12, color: ["black"] }
        }
    }]
    var layout = {
        title: "Stock table for previous 6 month period"
    };
    Plotly.newPlot('table', info, layout);

});

      /////end of code//////////////////////////////////////////////