console.log(data);

// Trace1 for the Greek Data
var trace1 = {
    x: data.map(object => object.pair),
    y: data.map(object => object.greekSearchResults),
    text: data.map(object => object.greekName),
    name: "Greek",
    type: "bar"
  };

// Trace 2 for the Roman Data
var trace2 = {
    x: data.map(object => object.pair),
    y: data.map(object => object.romanSearchResults),
    text: data.map(object => object.romanName),
    name: "Roman",
    type: "bar"
  };

// Combining both traces
var data = [trace1, trace2];

// Apply the group barmode to the layout


// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data);