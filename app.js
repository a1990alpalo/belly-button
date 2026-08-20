const DATA_URL = "samples.json";

const PLOT_CONFIG = {
  responsive: true,
  displaylogo: false,
};

let dashboardData;

// Find the metadata and sample records for one subject.
function findSubject(sampleId) {
  const normalizedId = String(sampleId);

  const metadata = dashboardData.metadata.find(
    (sampleObject) => String(sampleObject.id) === normalizedId
  );

  const sample = dashboardData.samples.find((sampleObject) => sampleObject.id === normalizedId);

  if (!metadata || !sample) {
    throw new Error(`No data found for subject ${normalizedId}.`);
  }

  return { metadata, sample };
}

// Build the demographic information panel.
function buildMetadata(metadata) {
  const panel = d3.select("#sample-metadata");

  panel.html("");

  Object.entries(metadata).forEach(([key, value]) => {
    panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
  });
}

// Build the bar and bubble charts.
function buildCharts(sample) {
  const { otu_ids, otu_labels, sample_values } = sample;

  const bubbleData = [
    {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: "Earth",
      },
    },
  ];

  const bubbleLayout = {
    title: "Bacteria Cultures Per Sample",
    margin: { t: 50 },
    hovermode: "closest",
    xaxis: { title: "OTU ID" },
    yaxis: { title: "Sample Values" },
  };

  Plotly.react("bubble", bubbleData, bubbleLayout, PLOT_CONFIG);

  const topOtuIds = otu_ids
    .slice(0, 10)
    .map((otuId) => `OTU ${otuId}`)
    .reverse();

  const barData = [
    {
      y: topOtuIds,
      x: sample_values.slice(0, 10).reverse(),
      text: otu_labels.slice(0, 10).reverse(),
      type: "bar",
      orientation: "h",
    },
  ];

  const barLayout = {
    title: "Top 10 Bacteria Cultures Found",
    margin: { t: 50, l: 150 },
  };

  Plotly.react("bar", barData, barLayout, PLOT_CONFIG);
}

// Update all dashboard components for one subject.
function renderDashboard(sampleId) {
  const { metadata, sample } = findSubject(sampleId);

  buildMetadata(metadata);
  buildCharts(sample);
}

// Display a user-friendly loading or selection error.
function showError(message) {
  const panel = d3.select("#sample-metadata");

  panel.html("");
  panel.append("p").attr("class", "text-danger").text(message);
}

// Run when the page loads.
async function init() {
  try {
    dashboardData = await d3.json(DATA_URL);

    const names = dashboardData.names;

    if (!Array.isArray(names) || names.length === 0) {
      throw new Error("The dataset does not contain any subject IDs.");
    }

    const selector = d3.select("#selDataset");

    selector.selectAll("option").remove();

    names.forEach((sampleId) => {
      selector.append("option").text(sampleId).property("value", sampleId);
    });

    renderDashboard(names[0]);
  } catch (error) {
    console.error("Unable to initialize the dashboard:", error);
    showError("Unable to load the dashboard data.");
  }
}

// Run whenever the selected subject changes.
function optionChanged(newSample) {
  try {
    renderDashboard(newSample);
  } catch (error) {
    console.error("Unable to update the dashboard:", error);
    showError("Unable to display the selected subject.");
  }
}

init();
