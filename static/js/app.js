// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    metadata = data.metadata;

    // Check if data is properly assigned to metadata
    console.log(metadata); 

    // Filter the metadata for the object with the desired sample number
    metaDataResultArray = metadata.filter(sampleNum => sampleNum.id == sample);
    metaDataResult = metaDataResultArray[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    for (let key in metaDataResult) {
      if (metaDataResult.hasOwnProperty(key)) { //this is to make sure I am using the actual key's properties, not inherited properties
        panel.append("p").text(`${key}: ${metaDataResult[key]}`);
      }
    }
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    samples = data.samples;

    // Print the samples data to the console to confirm it loaded properly
    console.log(samples); 

    // Filter the samples for the object with the desired sample number
    samplesResultArray = samples.filter(sampleNum => sampleNum.id == sample);
    samplesResult = samplesResultArray[0];

    // Get the otu_ids, otu_labels, and sample_values
    otu_ids = samplesResult.otu_ids;
    otu_labels = samplesResult.otu_labels;
    sample_values = samplesResult.sample_values;

    // Build a Bubble Chart
    bubbleChartData = [
    {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: "Earth"
      }
    }];
    
    // Set the Bubble Chart Layout with title, margin, set what value to display when hovering over a bubble and what
    // the title the x-axis
    bubbleChartLayout = {
      title: "Bacteria Cultures per Sample",
      margin: { t: 30 },
      hovermode: "closest",
      xaxis: { title: "OTU ID" },
      yaxis: { title: "Number of Bacteria" }
    };
    
    // Render the Bubble Chart
    Plotly.newPlot("bubble", bubbleChartData, bubbleChartLayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    yticks = otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();
  
    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    barChartData = [
      {
        x: sample_values.slice(0, 10).reverse(),
        y: yticks,
        text: otu_labels.slice(0, 10).reverse(),
        type: "bar",
        orientation: "h"
      }
    ];

    // Set the Bar Chart Layout with title and margins
    barChartLayout = {
      title: "Top 10 Bacteria Cultures Found",
      margin: { t: 30, l: 150 },
      xaxis: { title: "Nubmer of Bacteria" }
    };

    // Render the Bar Chart
    Plotly.newPlot("bar", barChartData, barChartLayout);
  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    names = data.names;

    // Print the results of the names query to the console to make sure it loaded correctly
    console.log(names); 

    // Use d3 to select the dropdown with id of `#selDataset`
    dropdown = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    for (let i = 0; i < names.length; i++) {
      dropdown
        .append("option")
        .text(names[i])
        .property("value", names[i]);
    }

    // Get the first sample from the list
    firstSample = names[0];

    // Build charts and metadata panel with the first sample
    buildMetadata(firstSample);
    buildCharts(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Initialize the dashboard
init();
