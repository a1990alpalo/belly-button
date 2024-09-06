# belly-button-challenge
module 14 challenge 

Background
This project builds an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dataset shows that a small number of microbial species (OTUs) were found in over 70% of people, while others were more rare.
Project Overview
The goal of this project is to visualize the data using D3 and Plotly libraries to help users explore the microbial species found in different individuals. Users can select a sample ID from a dropdown menu to update the charts and view relevant data.
Features
1. Horizontal Bar Chart
* Displays the top 10 OTUs found in an individual.
* Uses:
o sample_values for the bar chart values.
o otu_ids for the labels.
o otu_labels for hover text.
2. Bubble Chart
* Visualizes all OTUs in the sample.
* Uses:
o otu_ids for the x-axis values.
o sample_values for the y-axis values and marker size.
o otu_ids for marker colors.
o otu_labels for the hover text.
3. Demographic Information Panel
* Displays metadata for the selected individual, such as demographic information.
4. Dynamic Updating
* All charts and metadata dynamically update based on the selected sample ID from the dropdown menu.
Data Source
The data is read from the following URL using the D3 library:
* samples.json
Deployment
The project is deployed on GitHub Pages for easy access.

