/* --------------------------- GLOBAL: HEADER AND RODENTTRAPS CONTAINERS --------------------------- */
/* --------------------------- MOUSETRAPCHARTS HOLDS THE CHARTS, RATTRAP HOLDS THE MAP --------------------------- */
/* --------------------------- GLUEBOARD INSIDE MOUSETRAPCHARTS AND HOLDS STACKEDBAR AND LINE --------------------------- */
/* --------------------------- SNAPTRAP INSIDE MOUSETRAPCHARTS AND HOLDS BUBBLE --------------------------- */

const body = d3.select("body").style("padding", "20px 30px 0px 30px");

body
  .style("background-image", "url('./assets/cheese-holes-reverse.svg')") // Set background image
  .style("background-size", "cover") // Optional: Ensures the background image covers the entire div
  .style("background-position", "center") // Optional: Centers the background image within the div
  .style("background-repeat", "no-repeat"); // Optional: Prevents background from repeating

const header = body.append("header");

const title = header.append("h1").text("Rats, Rants, and New York City");

const subtitle = header.append("h2").text("Surviving the City: Urban Rodent Woes");

const subsubtitle = header.append("h3").text(" (2017-2025)");

const cheeseRadios = header
  .append("form")
  .append("md-radio-group") // Group for the radios
  .attr("class", "cheese-group")
  .attr("name", "cheese-group") // All radio buttons in this group share the same name
  .style("display", "flex") // Use flex for the container (instead of inline-flex)
  .style("float", "left")
  .style("flex-wrap", "wrap") // Allow the items to wrap when the window is resized
  .selectAll("div")
  .data(["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"])
  .enter()
  .append("div")
  .attr("class", function (d) {
    return `cheeseRadio-${d}`;
  })
  .style("padding", "5px 5px 5px 0px")
  .append("label") // Append label for each radio button
  .style("display", "flex") // Ensure the label is a flex container to align its children
  .style("align-items", "right") // Center the items inside the label (radio button + span)
  .append("md-radio")
  .attr("value", function (d) {
    return d;
  }) // Set the value for each radio button
  .attr("name", "cheese-group") // Ensure all radios have the same name
  .each(function (d) {
    d3.select(this.parentNode) // Select the parent label
      .append("span") // Add a span for the text
      .style("margin-left", "5px")
      .style("color", "darkgoldenrod")
      .style("font-weight", "bold")
      .text(d); // Use the data for the text label
  });

const Descriptions = body
  .append("div")
  .attr("id", "Descriptions")
  .style("position", "absolute")
  .style("top", "9%")
  .style("width", `${window.innerWidth - 60}px`)
  .style("height", `${window.innerHeight - 160}px`)
  .style("z-index", "8000")
  .style("display", "flex")
  .style("border", "2px solid gold")
  .style("background-color", "#fff4cb")
  .on("click", function () {
    d3.select(this).style("display", "none");
  });


// container for the charts only
const ChartDescriptions = Descriptions.append("div")
  .attr("id", "ChartDescriptions")
  .style("display", "flex")
  .style("flex-direction", "column") // this is if I want to put it back to stacking
  .style("width", `${window.innerWidth / 2}px`)
  .style("height", `${window.innerHeight - 160}px`);

// has stacked bar charts and line chart
const StackedLineDescriptions = ChartDescriptions.append("div")
  .attr("id", "StackedLineDescriptions")
  .style("display", "flex")
  .style("width", `${window.innerWidth / 2}px`)
  .style("height", `${window.innerHeight / 2 - 80}px`);

// has treemap
const TreeDescription = ChartDescriptions.append("div")
  .attr("id", "TreeDescription")
  .style("display", "flex")
  .style("width", `${window.innerWidth / 2}px`)
  .style("height", `${window.innerHeight / 2 - 80}px`)
  .style("border", "1px solid gold")
  .append("div")
  .style("padding", "10px 250px 0px 20px")
  .append("h3")
  .text("Tree Maps")
  .append("p")
  .text("Tree maps display the different location types of rodent complaints. There is a large range of types, with the top five common being: 3+ Family Apt. Building, 1-2 Family Dwelling, Other, Commercial Building, and 3+ Family Mixed Use Building.")
  .append("p")
  .text("Hover over the boxes to see a location type and the count of rodent complaints for it in the selected year. Click on a box to see the distribution of rodent complaints by descriptor.");

const stackedDescription = StackedLineDescriptions.append("div")
  .attr("id", "stackedDescription")
  .attr("display", "flex")
  .style("width", `${window.innerWidth / 4}px`)
  .style("height", `${window.innerHeight / 2 - 80}px`)
  .style("border", "1px solid gold")
  .append("div")
  .style("padding", "10px 20px 0px 20px")
  .append("h3")
  .text("Stacked Bar Charts")
  .append("p")
  .text("Of the five boroughs, Brooklyn has consistently had the highest count of rodent complaints while Staten Island has had the lowest. In 2023, Brooklyn had the highest ever count at 15,746. In NYC's Open Data on Rodent Complaints, there are four descriptors used to categorize each complaint: Rat Sighting, Mouse Sighting, Signs of Rodents, and Condition Attracting Rodents. Rat Sighting is the most common descriptor type.")
  .append("p")
  .text("Hover over each of the bars to see the distribution of rodent complaints by descriptor per borough.");

const lineDescription = StackedLineDescriptions.append("div")
  .attr("id", "lineDescription")
  .attr("display", "flex")
  .style("width", `${window.innerWidth / 4}px`)
  .style("height", `${window.innerHeight / 2 - 80}px`)
  .style("border", "1px solid gold")
  .append("div")
  .style("padding", "10px 20px 0px 20px")
  .append("h3")
  .text("Line Charts")
  .append("p")
  .text("May through September tends to be the period of time when most rodent complaints are made. In 2023, the highest number of complaints were made in August, with 1,701 complaints in Brooklyn. The lowest number of complaints were made in December of 2022, with 40 complaints in Staten Island.")
  .append("p")
  .text("Hover over the points in the line charts to see the number of rodent complaints per month by borough.");

const MapDescription = Descriptions.append("div")
  .attr("display", "flex")
  .attr("id", "MapDescription")
  .style("width", `${window.innerWidth / 2 - 60}px`)
  .style("height", `${window.innerHeight - 160}px`)
  .style("position", "relative")
  .style("border", "1px solid gold")
  .append("div")
  .style("padding", "10px 250px 0px 20px")
  .append("h3")
  .text("Geographical Distribution of Rodent Complaints")
  .append("p")
  .text("The map provides a visual representation of the distribution of rodent complaints in New York City. Markers are set up in clusters so you can see the number of complaints in that area. These markers are then coded by the descriptor of rodent complaint: rat icon for Rat Sighting, mouse icon for Mouse Sighting, warning sign for Signs of Rodents, and cheese icon for Condition Attracting Rodents. Additionally, zip codes for each borough are color coded to show the number of complaints in that area.")
  .append("p")
  .text("As you zoom in, or click on the numbers, they will spread out to show you the specific location of the complaint, and subsequently display their specific icon. Click on the icons to see the details of the rodent complaint. Toggle through the years and map layers to see the distribution of rodent complaints over time (please note that each toggle button displays independently and values are not aggregated). The legend on the top left corner of the map provides a key for the icons and colors used in the map.");



// Create a parent container for the map and charts
const RodentTrap = body
  .append("div")
  .attr("id", "RodentTrap")
  .style("display", "flex")
  .style("width", `${window.innerWidth - 60}px`)
  .style("height", `${window.innerHeight - 180}px`);

// container for the charts only
const MouseTrapCharts = RodentTrap.append("div")
  .attr("id", "MouseTrapCharts")
  .style("display", "flex")
  .style("flex-direction", "column") // this is if I want to put it back to stacking
  .style("width", `${window.innerWidth / 2}px`)
  .style("height", `${window.innerHeight - 180}px`);

// has stacked bar charts and line chart
const GlueBoard = MouseTrapCharts.append("div")
  .attr("id", "GlueBoard")
  .style("display", "flex")
  .style("width", `${window.innerWidth / 2}px`)
  .style("height", `${window.innerHeight / 2 - 90}px`);

// has treemap
const SnapTrap = MouseTrapCharts.append("div")
  .attr("id", "SnapTrap")
  .style("display", "flex")
  .style("width", `${window.innerWidth / 2}px`)
  .style("height", `${window.innerHeight / 2 - 90}px`);

const stackedBarCharts = GlueBoard.append("svg")
  .attr("id", "stacked-bar-charts")
  .attr("display", "flex")
  .style("width", `${window.innerWidth / 4}px`)
  .style("height", `${window.innerHeight / 2 - 90}px`)
  .style("z-index", "1000");

const lineChart = GlueBoard.append("svg")
  .attr("id", "line-chart")
  .attr("display", "flex")
  .style("width", `${window.innerWidth / 4}px`)
  .style("height", `${window.innerHeight / 2 - 90}px`)
  .style("z-index", "1000");

const treeMap = SnapTrap.append("svg")
  .attr("id", "tree-map")
  .style("display", "flex")
  .style("width", `${window.innerWidth / 2}px`)
  .style("height", `${window.innerHeight / 2 - 90}px`);

// Create the map container inside the mapWrapper
const RatTrap = RodentTrap.append("div")
  .attr("display", "flex")
  .attr("id", "RatTrap")
  .style("z-index", "1000")
  .style("width", `${window.innerWidth / 2 - 60}px`)
  .style("height", `${window.innerHeight - 180}px`)
  .style("position", "relative");

RatTrap.append("div")
  .attr("id", "mapTitle")
  .style("position", "absolute")
  .style("top", "5px")
  .style("left", "10px")
  .style("font-size", "15px")
  .style("z-index", "2000")
  .style("font-weight", "bold");


// const markerCluster = L.markerClusterGroup();

const map = L.map("RatTrap").setView(
  [40.712466326696905, -74.00224784336004],
  11.5
);

map.createPane("baseMapPane");
map.getPane("baseMapPane").style.zIndex = 5;

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://carto.com/attributions">CartoDB</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  pane: "baseMapPane",
}).addTo(map);

// need to think about this, not sure if I want borough boundaries
d3.json("./data/Borough-Boundaries.geojson").then(function (geojsonData) {
  // Define the borough color mapping
  const boroughColorMapping = {
    Manhattan: "#EE352E",
    Brooklyn: "#FCCC0A",
    Queens: "#B933AD",
    Bronx: "#00933C",
    "Staten Island": "#0078C6",
  };

  // Add GeoJSON layer with styling
  L.geoJSON(geojsonData, {
    style: function (feature) {
      // Get the borough name from the feature's properties (change 'borough' if the field name is different)
      const boroughName = feature.properties.boro_name;

      // Use the borough color mapping to assign a color
      const strokeColor = boroughColorMapping[boroughName] || "gray"; // Fallback to gray if no match

      return {
        color: strokeColor,
        weight: 2,
        opacity: 1,
        fillColor: "none",
        fillOpacity: 0,
      };
    },
  }).addTo(map); // Add GeoJSON to the map
});

// Create the legend control
const legend = L.control({ position: "topleft" });

// Define categories with labels and assets (SVG/PNG)
const categories = [
  { label: "Rat Sighting", image: "./assets/rat.svg", icon: "" },
  { label: "Mouse Sighting", image: "./assets/mouse.svg", icon: "" },
  {
    label: "Condition Attracting Rodents",
    image: "./assets/cheese.svg",
    icon: "",
  },
  { label: "Signs of Rodents", image: "./assets/signs.svg", icon: "" },
  {
    label: "More than 750 Complaints",
    color: "darkgoldenrod",
    border: "1px solid goldenrod",
  },
  {
    label: "More than 500 Complaints",
    color: "goldenrod",
    border: "1px solid goldenrod",
  },
  {
    label: "More than 250 Complaints",
    color: "gold",
    border: "1px solid goldenrod",
  },
  {
    label: "More than 0 Complaints",
    color: "palegoldenrod",
    border: "1px solid goldenrod",
  },
];

// Add content to the legend
legend.onAdd = function () {
  const div = L.DomUtil.create("div", "info legend");

  div.style.backgroundColor = "white";
  div.style.border = "1px solid #ccc";
  div.style.padding = "10px";
  div.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.1)";
  div.style.borderRadius = "5px";

  // Loop through categories and add each to the legend
  categories.forEach((category) => {
    let iconHTML = "";
    let labelHTML = "";

    // If the category has an image, use an <img> tag to display it
    if (category.image) {
      iconHTML = `<img src="${category.image}" style="width: 32px; height: 32px; margin-right: 5px;">`;
    }

    // If the category has custom color and border
    if (category.color && category.border) {
      labelHTML = `
          <div style=
    "display: flex; 
    align-items: center; 
    margin-top: 5px; 
    border: ${category.border}; 
    background-color: ${category.color}; 
    padding: 2px 10px; 
    border-radius: 5px;
    opacity: 0.6;">
          <span style="color: black;">${category.label}</span>
        </div>
      `;
    } else {
      // Default label
      labelHTML = `<span>${category.label}</span>`;
    }

    // Add the icon and label to the legend
    div.innerHTML += `
      <div style="display: flex; align-items: center; margin-bottom: 5px;">
        ${iconHTML}
        ${labelHTML}
      </div>
    `;
  });

  return div;
};

// Add the legend to the map
legend.addTo(map);

map.zoomControl.setPosition("topleft");
const zoomControl = document.querySelector(".leaflet-control-zoom");

// Style the zoom control container (apply similar styling as the legend box)
zoomControl.style.backgroundColor = "white";
zoomControl.style.border = "1px solid #ccc";
zoomControl.style.padding = "3px";
zoomControl.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.1)";
zoomControl.style.borderRadius = "5px";

let overlayLayers = {}; // Store overlay layers here


let layerControl = L.control.layers(null, overlayLayers, {
  position: 'topleft'
}).addTo(map);


let activeLayers = [];
let markerClusterLayers = {}; // Store marker cluster layers here



const footer = body.append("footer").attr("id", "footer");

const leftFooter = footer
  .append("div")
  .append("h6")
  .style("font-size", "10px")
  .attr("id", "leftFooter")
  .text(
    "Lisa Sakai Quinley | Data Viz & Info Aesthetics | Fall 2024 | Parsons School of Design"
  );
const rightFooter = footer
  .append("div")
  .append("h6")
  .style("font-size", "10px")
  .attr("id", "rightFooter")
  .text(
    "Data Sources: 311 NYC Open Data 2010 to Present - Rodent Complaints, Modified Zip Code Tabulation Areas (MODZCTA), MTA Colors, Vecteezy.com"
  );

d3.select("md-radio[value='2025']").property("checked", true);

d3.selectAll("md-radio").on("click", function (event) {
  const selectedYear = event.target.value;


  d3.selectAll("[class^='rodents-']")
    .filter(function () {
      return !this.classList.contains(`rodents-${selectedYear}`);
    })
    .style("display", "none");

  d3.selectAll(`.rodents-${selectedYear}`).style("display", "block");

  // Check the radio button for the selected year
  d3.select(`input[value="${selectedYear}"]`).property("checked", true); // Assuming each radio has a value equal to the year

});


const LineYGlobalMax = 1800;
const BarYGlobalMax = 16000;


/* 
// the original code for the zip code areas
d3.json('./data/Modified_Zip_Code_Tabulation_Areas_(MODZCTA).geojson').then(function(geojsonData) {
    // Add GeoJSON layer with styling
    L.geoJSON(geojsonData, {
      style: function (feature) {
        return {
          color: 'goldenrod',      // Border color
          weight: 2,          // Border weight
          opacity: 0.2,       // Border opacity
          fillColor: 'yellow', // Fill color
          fillOpacity: 0.1    // Fill opacity
        };
      },
    }).addTo(map); // Add GeoJSON to the map
  });
 */


/* ----- */
/* -------------------------------------- ALL API QUERIES AND VISUALIZATIONS SPECIFIC TO 2017 -------------------------------------- */
/* ----- */

(async function Rodents2017() {
  const url2017 =
    "./data/Rodents2017.json";

//    "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$query=SELECT%0A%20%20%60unique_key%60%2C%0A%20%20%60created_date%60%2C%0A%20%20%60closed_date%60%2C%0A%20%20%60agency%60%2C%0A%20%20%60agency_name%60%2C%0A%20%20%60complaint_type%60%2C%0A%20%20%60descriptor%60%2C%0A%20%20%60location_type%60%2C%0A%20%20%60incident_zip%60%2C%0A%20%20%60incident_address%60%2C%0A%20%20%60street_name%60%2C%0A%20%20%60cross_street_1%60%2C%0A%20%20%60cross_street_2%60%2C%0A%20%20%60intersection_street_1%60%2C%0A%20%20%60intersection_street_2%60%2C%0A%20%20%60address_type%60%2C%0A%20%20%60city%60%2C%0A%20%20%60landmark%60%2C%0A%20%20%60facility_type%60%2C%0A%20%20%60status%60%2C%0A%20%20%60due_date%60%2C%0A%20%20%60resolution_description%60%2C%0A%20%20%60resolution_action_updated_date%60%2C%0A%20%20%60community_board%60%2C%0A%20%20%60bbl%60%2C%0A%20%20%60borough%60%2C%0A%20%20%60x_coordinate_state_plane%60%2C%0A%20%20%60y_coordinate_state_plane%60%2C%0A%20%20%60open_data_channel_type%60%2C%0A%20%20%60park_facility_name%60%2C%0A%20%20%60park_borough%60%2C%0A%20%20%60vehicle_type%60%2C%0A%20%20%60taxi_company_borough%60%2C%0A%20%20%60taxi_pick_up_location%60%2C%0A%20%20%60bridge_highway_name%60%2C%0A%20%20%60bridge_highway_direction%60%2C%0A%20%20%60road_ramp%60%2C%0A%20%20%60bridge_highway_segment%60%2C%0A%20%20%60latitude%60%2C%0A%20%20%60longitude%60%2C%0A%20%20%60location%60%0AWHERE%0A%20%20caseless_one_of(%60complaint_type%60%2C%20%22Rodent%22)%0A%20%20AND%20(%60created_date%60%0A%20%20%20%20%20%20%20%20%20BETWEEN%20%222017-01-01T00%3A00%3A00%22%20%3A%3A%20floating_timestamp%0A%20%20%20%20%20%20%20%20%20AND%20%222017-12-31T11%3A59%3A59%22%20%3A%3A%20floating_timestamp)%0AORDER%20BY%20%60created_date%60%20DESC%20NULL%20FIRST%0ALIMIT%20100000%20OFFSET%200";

  try {

    const json2017 = await d3.json(url2017);
    // there were 35075 rows in 2017
    console.log("2017:", json2017);

    const stackedData2017 = d3.rollup(
      json2017.filter(
        (d) =>
          d.borough &&
          d.borough.toLowerCase() !== "undefined" &&
          d.borough.toLowerCase() !== "unspecified"
      ),
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.descriptor
        ),
      (d) => d.borough
    );

    console.log(
      "Stacked Bar Chart by Count of Descriptor per Borough 2017:",
      stackedData2017
    );

    const boroughsBar = Array.from(stackedData2017, ([borough, descriptors]) => ({
      borough,
      descriptors: Array.from(descriptors, ([descriptor, count]) => ({
        descriptor,
        count,
      })),
    }));

    boroughsBar.forEach((b) => {
      b.totalCount = b.descriptors.reduce((sum, desc) => sum + desc.count, 0);
    });

    const keys = Array.from(
      new Set(boroughsBar.flatMap((b) => b.descriptors.map((d) => d.descriptor)))
    );

    const fixedCategories = [
      "Signs of Rodents",
      "Condition Attracting Rodents",
      "Mouse Sighting",
      "Rat Sighting",
    ];

    // Extract unique descriptors from the data
    const allDescriptors = new Set();
    boroughsBar.forEach((borough) => {
      borough.descriptors.forEach((descriptor) => {
        allDescriptors.add(descriptor.descriptor); // Add descriptor to the set
      });
    });

    // Convert the set to an array
    const dynamicCategories = Array.from(allDescriptors);

    // Filter out the fixed categories that are already in the dynamic categories
    const dynamicCategoriesExcludingFixed = dynamicCategories.filter(
      (category) => !fixedCategories.includes(category)
    );

    // Combine the fixed categories with dynamic categories
    const finalCategories = [
      ...fixedCategories,
      ...dynamicCategoriesExcludingFixed,
    ];

    // Create the stack with the combined order of categories
    const stack = d3
      .stack()
      .keys(finalCategories) // Use the combined fixed + dynamic order
      .value(
        (d, key) =>
          d.descriptors.find((desc) => desc.descriptor === key)?.count || 0
      );

    const series = stack(boroughsBar);
    const marginBar = { top: 20, right: 20, bottom: 40, left: 40 };
    const widthBar = parseInt(d3.select("#stacked-bar-charts").style("width"));
    const heightBar = parseInt(d3.select("#stacked-bar-charts").style("height"));
    const maxValueBar = d3.max(series[series.length - 1], (d) => d[1]);

    stackedBarCharts
      .append("text")
      .attr("class", "rodents-2017")
      .attr("x", 0)
      .attr("y", 20)
      .attr("font-size", 15)
      .attr("fill", "black")
      .style("font-weight", "bold")
      .text("Counts by Borough and Descriptor in 2017");

    const xScale = d3
      .scaleBand()
      .domain(boroughsBar.map((b) => b.borough))
      .range([marginBar.left, widthBar - marginBar.right])
      .paddingInner(0.1)
      .paddingOuter(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, BarYGlobalMax])
      //    .domain([0, maxValueBar])
      .range([heightBar - marginBar.top, marginBar.bottom])
      .nice();

    // For Bar Chart
    const BarDefs = d3
      .select("#stacked-bar-charts")
      .append("defs")
      .attr("class", "rodents-2017");

    BarDefs.append("pattern")
      .attr("id", "cheesePattern-2017") // ID to reference the pattern later for Bar Chart
      .attr("width", 2)
      .attr("height", 2)
      .append("image")
      .attr("href", "./assets/squareCheese.svg") // Path to the SVG image
      .attr("width", 300)
      .attr("height", 300);

    const barDescriptorColors = {
      "Rat Sighting": "black", // Solid color
      "Mouse Sighting": "#d1d3d4", // Yellow color
      "Condition Attracting Rodents": "url(#cheesePattern-2017)", // Reference the Bar Chart Pattern
      "Signs of Rodents": "#f1de00", // Gray color
    };

    // Example of applying border styles
    const descriptorBorders = {
      "Rat Sighting": "1px solid black",
      "Mouse Sighting": "1px solid gray",
      "Condition Attracting Rodents": "1px solid black", // Border for SVG image
      "Signs of Rodents": "1px solid black",
    };

    // Create your color scale using the descriptor colors
    const colorScaleBar = d3
      .scaleOrdinal()
      .domain(Object.keys(barDescriptorColors)) // Use descriptor keys as the domain
      .range(Object.values(barDescriptorColors));

    const axes_layer = stackedBarCharts.append("g").attr("class", "rodents-2017");
    const bars_layer = stackedBarCharts.append("g").attr("class", "rodents-2017");

    const bars = bars_layer
      .selectAll("g")
      .data(stack(boroughsBar))
      .join("g")
      .attr("fill", (d, i) => colorScaleBar(d.key));

    const stackedTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "stackedTooltip")
      .style("background-color", "white")
      .style("padding", "6px 10px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "5px")
      .style("position", "absolute") // Ensure it's absolutely positioned
      .style("opacity", 0); // Initially hidden

    // Bars and event listeners
    bars
      .selectAll("rect")
      .data((d) => d)
      .join("rect")
      .attr("x", (d) => xScale(d.data.borough))
      .attr("y", (d) => yScale(d[1]))
      .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
      .attr("width", xScale.bandwidth())
      // THIS PART OF THE CODE IS NOT WORKING. IT WON'T DO THE CORRECT STROKES ON THE BARS, FIX LATER
      .attr("fill", (d) => barDescriptorColors[d.descriptor]) // Apply the color based on the descriptor
      .attr("stroke", (d) => descriptorBorders[d.descriptor]) // Apply the border style based on the descriptor
      .on("mouseover", (event, d) => {
        const borough = d.data.borough;
        const descriptor = d.data.descriptors.find(
          (desc) => desc.count === d[1] - d[0]
        ).descriptor;
        const count = d[1] - d[0];

        stackedTooltip
          .style("opacity", 1)
          .style("z-index", 6000) // Ensure it's on top
          .html(
            `${borough
              .split(" ")
              .map(
                (word) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")}<br>${descriptor}<br>${d3.format(",")(count)}`
          )
          .style("left", `${event.pageX + 10}px`) // Add offset for visibility
          .style("top", `${event.pageY + 10}px`) // Add offset for visibility
          .transition()
          .duration(100);

        // Apply custom styles based on the descriptor
        switch (descriptor) {
          case "Condition Attracting Rodents":
            stackedTooltip
              .style("background-color", "#fee459")
              .style("border", "1px solid white")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          case "Rat Sighting":
            stackedTooltip
              .style("background-color", "black")
              .style("border", "1px solid white")
              .style("color", "white")
              .style("line-height", "1.5");
            break;
          case "Mouse Sighting":
            stackedTooltip
              .style("background-color", "#d1d3d4")
              .style("border", "1px solid white")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          case "Signs of Rodents":
            stackedTooltip
              .style("background-color", "#f1de00")
              .style("border", "1px solid black")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          default:
            stackedTooltip
              .style("background-color", "#ffffff") // Default white background
              .style("border", "1px solid #ccc")
              .style("color", "#333")
              .style("line-height", "1.5");
            break;
        }
      })
      .on("mousemove", (event) => {
        stackedTooltip
          .style("left", `${event.pageX + 10}px`) // Add offset for visibility
          .style("top", `${event.pageY + 10}px`); // Add offset for visibility
      })
      .on("mouseout", () => {
        stackedTooltip.transition().duration(100).style("opacity", 0); // Hide tooltip
      });

    // Total Count text labels
    bars_layer
      .selectAll("text")
      .data(boroughsBar)
      .join("text")
      .attr("x", (b) => xScale(b.borough) + xScale.bandwidth() / 2)
      .attr("y", (b) => yScale(b.totalCount) - 5)
      .attr("text-anchor", "middle")
      .html((b) => `Total: ${new Intl.NumberFormat().format(b.totalCount)}`)
      .style("font-size", "10px");

    axes_layer
      .append("g")
      .call(d3.axisLeft(yScale))
      .style("font-family", "Lexend Deca")
      .attr("transform", `translate(${marginBar.left}, 0)`);

    axes_layer
      .append("g")
      .call(d3.axisBottom(xScale))
      .style("font-family", "Lexend Deca")
      .attr("transform", `translate(0, ${heightBar - marginBar.top})`);

    // gotta love stack overflow solving problems for me https://stackoverflow.com/questions/63838288/convert-json-to-geojson-frontend
    const APIUrl2017 = url2017;
    getData2017();

    map.createPane("Zip2017Pane");
    map.getPane("Zip2017Pane").style.zIndex = 20;

    async function getData2017() {
      let mygeojson2017 = { type: "FeatureCollection", features: [] };
      const zipMarkerCount = {}; // Object to keep track of the marker counts by zip code
      const zipClusters = {}; // To hold the marker clusters by zip code

      // Fetch and parse the data
      const Points2017 = await fetch(APIUrl2017)
        .then((response) => response.json())
        .then((data) => {
          for (let point of data) {
            // Ensure latitude and longitude are valid
            if (!point.latitude || !point.longitude) {
              continue;
            }

            // Convert to a GeoJSON feature
            let coordinate = [
              parseFloat(point.longitude),
              parseFloat(point.latitude),
            ];
            let properties = point;
            delete properties.longitude;
            delete properties.latitude;

            let feature = {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: coordinate,
              },
              properties: properties,
            };
            mygeojson2017.features.push(feature);

            // Count the markers by zip code
            const zipCode = point.incident_zip;
            if (zipCode) {
              if (!zipMarkerCount[zipCode]) {
                zipMarkerCount[zipCode] = 0;
              }
              zipMarkerCount[zipCode]++;
            }
          }
        });

      console.log("GeoJson 2017 All Points:", mygeojson2017);
      console.log("2017 Marker Counts by Zip Code:", zipMarkerCount);

      // Create the marker clusters
      for (const feature of mygeojson2017.features) {
        const { coordinates } = feature.geometry;
        const { descriptor, created_date, borough, incident_zip, location_type } =
          feature.properties;

        if (!incident_zip) {
          continue;
        }

        // Define the marker icon based on descriptor
        let markerIcon;
        switch (descriptor) {
          case "Condition Attracting Rodents":
            markerIcon = L.icon({
              iconUrl: "./assets/cheese.svg", // CHEESE
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Rat Sighting":
            markerIcon = L.icon({
              iconUrl: "./assets/rat.svg", // RAT
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Mouse Sighting":
            markerIcon = L.icon({
              iconUrl: "./assets/mouse.svg", // MOUSE
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Signs of Rodents":
            markerIcon = L.icon({
              iconUrl: "./assets/signs.svg", // SIGNS
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          default:
            markerIcon = null; // Leaflet's default marker
            break;
        }

        // Create the marker with the appropriate icon
        const marker = L.marker([coordinates[1], coordinates[0]], {
          icon: markerIcon,
        });
        const popupContent = `
      <div style="display:flex;flex-direction:column;justify-content:center;">
        <div style="margin:0 auto;font-weight:600;">${descriptor}</div>
        <div style="margin:0 auto;font-weight:400;">
          ${new Date(created_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        </div>
        <div style="margin:0 auto;font-weight:400;">${location_type}</div>
        <div style="margin:0 auto;font-weight:400;">${borough
            .split(" ")
            .map(
              (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ")}, ${incident_zip}</div>
      </div>
    `;

        let cleanDescriptor = descriptor.replace(/\s+/g, "-");
        marker.bindPopup(popupContent, { className: cleanDescriptor });

        // Add the marker to the corresponding zip cluster
        if (!zipClusters[incident_zip]) {
          zipClusters[incident_zip] = L.markerClusterGroup();
        }
        zipClusters[incident_zip].addLayer(marker);
      }

      const markerClusterLayer2017 = L.layerGroup();

      markerClusterLayer2017.onAdd = function (map) {
        // Add a class to the layer's container when it is added to the map
        this._map._container.classList.add("Rodents-2017-Cluster");
        L.LayerGroup.prototype.onAdd.call(this, map); // Call the parent method to ensure the layer is added correctly
      };

      // Add markers to the layer
      for (const zip in zipClusters) {
        markerClusterLayer2017.addLayer(zipClusters[zip]);
      }

      // Add GeoJSON layer with dynamic styling based on marker count
      const zipCodeGeoJSONLayer2017 = L.geoJSON(null, {
        style: function (feature) {
          const zipCode = feature.properties.modzcta; // modzcta is the key for zip code
          const markerCount = zipMarkerCount[zipCode] || 0;

          // Define a color scale based on marker count
          let fillColor;
          if (markerCount > 750) {
            fillColor = "darkgoldenrod"; // High count
          } else if (markerCount > 500) {
            fillColor = "goldenrod"; // Medium count
          } else if (markerCount > 250) {
            fillColor = "gold"; // Low count
          } else if (markerCount > 0) {
            fillColor = "palegoldenrod"; // Low count
          } else {
            fillColor = "lightgoldenrodyellow"; // No markers
          }

          return {
            color: "goldenrod", // Border color
            weight: 1, // Border weight
            opacity: 0.5, // Border opacity
            fillColor: fillColor, // Fill color
            fillOpacity: 0.6, // Fill opacity
          };
        },
        onEachFeature: function (feature, layer) {
          // Use getElement() to access the DOM element for the layer
          const element = layer.getElement();
          if (element) {
            element.classList.add("Zip-Areas-2017"); // Add the class to the DOM element
          }
        },
        pane: "Zip2017Pane", // Ensure the GeoJSON uses the correct pane
      });

      // Load GeoJSON shapes for zip codes
      d3.json("./data/Modified_Zip_Code_Tabulation_Areas_(MODZCTA).geojson").then(
        function (geojsonData) {
          zipCodeGeoJSONLayer2017.addData(geojsonData); // Add the GeoJSON data to the layer
        }
      );

      // Add the layers to the global overlayLayers object
      overlayLayers["2017 Rodent Complaints"] = markerClusterLayer2017;
      overlayLayers["2017 Zip Codes"] = zipCodeGeoJSONLayer2017;

      // Update the layer control
      layerControl.addOverlay(markerClusterLayer2017, "2017 Rodent Complaints");
      layerControl.addOverlay(zipCodeGeoJSONLayer2017, "2017 Zip Codes");

      // Optionally, add the layers to the map
      // map.addLayer(markerClusterLayer2017); // Add the marker clusters layer by default
      // map.addLayer(zipCodeGeoJSONLayer2017); // Add the zip code areas layer by default

      map.on('layeradd', function (e) {
        if (e.layer === markerClusterLayer2017) {
          activeLayers.push("2017 Rodent Complaints");
          updateTitle(activeLayers);
        }
        if (e.layer === zipCodeGeoJSONLayer2017) {
          activeLayers.push("2017 Zip Codes");
          updateTitle(activeLayers);
        }
      });

      map.on('layerremove', function (e) {
        if (e.layer === markerClusterLayer2017) {
          const index = activeLayers.indexOf("2017 Rodent Complaints");
          if (index > -1) {
            activeLayers.splice(index, 1); // Remove from array
          }
          updateTitle(activeLayers);
        }
        if (e.layer === zipCodeGeoJSONLayer2017) {
          const index = activeLayers.indexOf("2017 Zip Codes");
          if (index > -1) {
            activeLayers.splice(index, 1); // Remove from array
          }
          updateTitle(activeLayers);
        }
      });


    }


    const timeSeriesData2017 = d3.rollup(
      json2017.filter(
        (d) =>
          d.borough &&
          d.borough.toLowerCase() !== "undefined" &&
          d.borough.toLowerCase() !== "unspecified"
      ), // filter out unwanted boroughs
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.borough
        ),
      (d) => new Date(d.created_date).getMonth()
    );

    console.log("2017 Line Chart with Month by Count:", timeSeriesData2017);

    // Array of month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Map the numeric months to month names
    const months = monthNames; // Now 'months' will be an array of month names

    const boroughsLine = Array.from(
      new Set(
        json2017
          .filter(
            (d) =>
              d.borough &&
              d.borough.toLowerCase() !== "undefined" &&
              d.borough.toLowerCase() !== "unspecified"
          ) // filter out unwanted boroughs
          .map((d) => d.borough) // Get all boroughs
      )
    );

    // Structure the data for each borough in a format suitable for the line chart
    const boroughData = boroughsLine.map((borough) => {
      return {
        borough,
        values: months.map((monthName, monthIndex) => {
          const monthData = timeSeriesData2017.get(monthIndex); // Use monthIndex for rollup
          return {
            month: monthName, // Month name, e.g., 'January'
            count: monthData?.get(borough) || 0, // If no data for a borough in a month, count is 0
          };
        }),
      };
    });

    const marginLine = { top: 20, right: 20, bottom: 40, left: 40 };
    const widthLine = parseInt(d3.select("#line-chart").style("width"));
    const heightLine = parseInt(d3.select("#line-chart").style("height"));

    lineChart
      .append("text")
      .attr("class", "rodents-2017")
      .attr("x", 0)
      .attr("y", 20)
      .attr("font-size", 15)
      .attr("fill", "black")
      .style("font-weight", "bold")
      .text("Counts by Borough per Month in 2017");

    // Append the SVG element to the DOM
    lineChart
      .select("#line-chart")
      .append("svg")
      .attr("class", "rodents-2017")
      .attr("width", widthLine + marginLine.left + marginLine.right)
      .attr("height", heightLine + marginLine.top + marginLine.bottom)
      .append("g")
      .attr("transform", `translate(${marginLine.left},${marginLine.top})`);

    // Set up the x and y scales
    const x = d3
      .scaleBand()
      .domain(months)
      .range([marginLine.left, widthLine - marginLine.right])
      .padding(0.1); // Padding between bars (or in this case, data points)

    const y = d3
      .scaleLinear()
      .domain([0, LineYGlobalMax])
      //    .domain([0, d3.max(boroughData, (d) => d3.max(d.values, (v) => v.count))])
      .nice()
      .range([heightLine - marginLine.top, marginLine.bottom]);

    const boroughColorMapping = {
      MANHATTAN: "#EE352E",
      BROOKLYN: "#FCCC0A",
      QUEENS: "#B933AD",
      BRONX: "#00933C",
      "STATEN ISLAND": "#0078C6",
    };

    const color = d3
      .scaleOrdinal()
      .domain(Object.keys(boroughColorMapping)) // Use borough names as the domain
      .range(Object.values(boroughColorMapping)); // Use hex colors as the range

    const lineTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "stackedTooltip")
      .style("background-color", "white")
      .style("padding", "6px 10px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "5px")
      .style("position", "absolute") // Ensure it's absolutely positioned
      .style("opacity", 0); // Initially hidden

    lineChart
      .append("g")
      .attr("class", "x-axis")
      .attr("class", "rodents-2017")
      .attr("transform", `translate(0, ${heightLine - marginLine.top})`)
      .style("font-family", "Lexend Deca")
      .call(
        d3.axisBottom(x).tickFormat(function (d) {
          // Take the first 3 characters of the month name
          return d.slice(0, 3);
        })
      );

    lineChart
      .append("g")
      .attr("class", "y-axis")
      .attr("class", "rodents-2017")
      .attr("transform", `translate(${marginLine.left}, 0)`)
      .style("font-family", "Lexend Deca")
      .call(d3.axisLeft(y));

    // Define the line generator
    const line = d3
      .line()
      .x((d) => x(d.month) + x.bandwidth() / 2) // Position by month
      .y((d) => y(d.count)); // Position by count

    // Draw lines for each borough
    boroughData.forEach((borough) => {
      // Draw the line for the borough
      lineChart
        .append("path")
        .data([borough.values]) // Use the borough's month-count data
        .attr("class", "line")
        .attr("class", "rodents-2017")
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", color(borough.borough))
        .attr("stroke-width", 2);

      // Add points (circles) for each month on the line
      lineChart
        .selectAll(".point-" + borough.borough)
        .data(borough.values) // Use the borough's month-count data
        .enter()
        .append("circle")
        .attr("class", "point")
        .attr("class", "rodents-2017")
        .attr("cx", (d) => x(d.month) + x.bandwidth() / 2) // Position by month
        .attr("cy", (d) => y(d.count)) // Position by count
        .attr("r", 5) // Radius of the points
        .attr("fill", color(borough.borough)) // Color the points according to the borough
        .attr("stroke", "white") // White border around the points
        .attr("stroke-width", 1) // Stroke width for the border
        .on("mouseover", (event, d) => {
          // Show the tooltip on hover
          lineTooltip.style("opacity", 0.9).style("z-index", 6000); // Ensure it's on top
          lineTooltip
            .html(
              `${borough.borough
                .split(" ")
                .map(
                  (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ")}<br>${d.month}: ${d3.format(",")(d.count)}`
            )
            .style("left", event.pageX + 10 + "px")
            .style("top", event.pageY + 10 + "px");
        })
        .on("mousemove", (event) => {
          lineTooltip
            .style("left", `${event.pageX + 10}px`) // Add offset for visibility
            .style("top", `${event.pageY + 10}px`); // Add offset for visibility
        })
        .on("mouseout", () => {
          lineTooltip.transition().duration(100).style("opacity", 0); // Hide tooltip
        });
    });

    // (Optional) Add tooltips to display the exact count on hover
    lineChart
      .selectAll(".point")
      .append("title")
      .text((d) => `${d.month}: ${d.count}`);

    // Add a legend
    const legendLine = lineChart
      .selectAll(".legend")
      .data(boroughData)
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", (d, i) => `translate(0, ${i * 20})`);
    //console.log(boroughData);

    // Add lines for each borough to the legend
    legendLine
      .append("line")
      .attr("x1", marginLine.left + marginLine.right - 9) // Starting point of the line
      .attr("x2", marginLine.left + marginLine.right + 12) // Ending point of the line
      .attr("y1", marginLine.bottom) // Positioning the line vertically (aligned with text)
      .attr("y2", marginLine.bottom) // Same as y1 to keep it horizontal
      .attr("stroke", (d) => color(d.borough)) // Set line color based on borough
      .attr("stroke-width", 2); // Set line width

    legendLine
      .append("circle")
      .attr("class", "point")
      .attr("cx", marginLine.left + marginLine.right + 1.5)
      .attr("cy", marginLine.bottom)
      .attr("r", 5) // Radius of the points
      .attr("fill", (d) => color(d.borough)) // Use 'd' to correctly color the circle based on the borough
      .attr("stroke", "white") // White border around the points
      .attr("stroke-width", 1); // Stroke width for the border

    legendLine
      .append("text")
      .attr("x", marginLine.left + marginLine.right + 21)
      .attr("y", marginLine.bottom)
      .attr("dy", ".35em")
      .attr("text-anchor", "beginning")
      .style("font-size", "10px")
      .text((d) => d.borough);

    const LocationType2017 = d3.rollup(
      json2017,
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.descriptor
        ),
      (d) => d.location_type
    );

    console.log("2017 Treemap Location Type and Count:", LocationType2017);

    const root = {
      name: "Rodent Complaints", // Root level name
      children: Array.from(LocationType2017.entries()).map(
        ([locationType, descriptors]) => {
          // Calculate total value for each locationType
          const totalValue = Array.from(descriptors.values()).reduce(
            (sum, count) => sum + count,
            0
          );

          return {
            name: locationType,
            total: totalValue, // Add the total count here
            children: Array.from(descriptors.entries()).map(
              ([descriptor, count]) => ({
                name: descriptor,
                value: count,
              })
            ),
          };
        }
      ),
    };

    // console.log("Root for the Tree Map:", root);

    const cheeseTree = d3
      .select("#tree-map")
      .append("svg") // Create the SVG element
      .style("width", `${window.innerWidth / 2}px`)
      .style("height", `${window.innerHeight / 2 - 90}px`)
      .attr("class", "rodents-2017");

    const hierarchy = d3
      .hierarchy(root)
      .sum((d) => d.value) // Sum the values to calculate the size of each block in the tree map
      .sort((a, b) => a.value - b.value); // Optional: Sort in descending order by value

    // Step 4: Set up the dimensions for the tree map
    const marginTree = { top: 40, right: 20, bottom: 40, left: 40 };
    const widthTree = parseInt(d3.select("#tree-map").style("width"));
    const heightTree = parseInt(d3.select("#tree-map").style("height"));

    // Step 5: Create the tree map layout
    const treemap = d3
      .treemap()
      .size([widthTree - marginTree.right, heightTree - marginTree.bottom])
      .padding(1);

    // Step 6: Apply the layout to the hierarchy data
    treemap(hierarchy);

    const colorScaleTree = d3
      .scaleLinear()
      .domain([
        d3.min(hierarchy.children, (d) => d.value),
        d3.max(hierarchy.children, (d) => d.value),
      ]) // Domain based on the min and max value
      .range(["darkgoldenrod", "palegoldenrod"]); // Color range

    const treeTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background", "rgba(0, 0, 0, 0.7)")
      .style("color", "white")
      .style("padding", "5px 10px 4px 10px")
      .style("border-radius", "3px")
      .style("font-size", "15px")
      .style("z-index", 6000);

    // Function to show descriptors for a clicked locationType
    function showDescriptors(locationTypeData) {
      // Clear the existing chart
      cheeseTree.selectAll("*").remove();

      // Create a new hierarchy for the descriptors
      const descriptorHierarchy = d3
        .hierarchy({
          name: locationTypeData.data.name, // Keep the locationType name
          children: locationTypeData.children.map((d) => ({
            name: d.data.name, // Keep the descriptor name
            value: d.data.value, // Keep the descriptor value (count)
          })),
        })
        .sum((d) => d.value) // Sum the values to calculate the size of each block
        .sort((a, b) => a.value - b.value); // Sort by value

      // Apply the treemap layout to the descriptors
      treemap(descriptorHierarchy);

      cheeseTree
        .append("text")
        .attr("class", "rodents-2017")
        .attr("x", 0)
        .attr("y", 30)
        .attr("font-size", 15)
        .attr("fill", "black")
        .style("font-weight", "bold")
        .text(`Descriptors for ${locationTypeData.data.name}`);

      // Add descriptors to the tree chart
      const descriptors = cheeseTree
        .selectAll("g")
        .data(descriptorHierarchy.leaves()) // Use leaves here to get the actual descriptors
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${d.x0},${d.y0 + marginTree.top})`);

      // For Tree Chart
      const TreeDefs = d3
        .select("#tree-map")
        .append("defs")
        .attr("class", "rodents-2017");

      TreeDefs.append("pattern")
        .attr("id", "cheesePattern-Big-2017") // ID to reference the pattern later for Tree Chart
        .attr("width", 2)
        .attr("height", 2)
        .append("image")
        .attr("href", "./assets/squareCheese-Big.svg") // Path to the SVG image
        .attr("width", 1800)
        .attr("height", 1800);

      const treeDescriptorColors = {
        "Rat Sighting": "black", // Solid color
        "Mouse Sighting": "#d1d3d4", // Gray color
        "Condition Attracting Rodents": "url(#cheesePattern-Big-2017)", // Reference the Tree Chart Pattern
        "Signs of Rodents": "#f1de00", // Yellow color
      };

      const TreeColorScale = d3
        .scaleOrdinal()
        .domain(Object.keys(treeDescriptorColors)) // Descriptor keys as the domain
        .range(Object.values(treeDescriptorColors)); // Colors/patterns as the range

      descriptors
        .append("rect")
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0)
        .attr("fill", (d) => TreeColorScale(d.data.name));

      descriptors
        .append("text")
        .attr("x", 5)
        .attr("y", 15)
        .attr("font-size", 12)
        .attr("fill", function (d) {
          // Apply different colors based on descriptor name
          switch (d.data.name) {
            case "Rat Sighting":
              return "white";
            default:
              return "black"; // Default color
          }
        })
        .text((d) => `${d.data.name}: ${d3.format(",")(d.data.value)}`);

      // Optional: Add a "Back" button to go back to the full view
      cheeseTree
        .append("text")
        .attr("x", widthTree - marginTree.left - 3)
        .attr("y", 30)
        .attr("font-size", 10)
        .attr("fill", "goldenrod")
        .style("cursor", "pointer")
        .text("Back")
        .on("click", function () {
          // Go back to the full view by clearing the chart and redrawing the main treemap
          cheeseTree.selectAll("*").remove();
          drawMainTreeMap();
        });
    }

    // Redraw the main treemap (locationType level)
    function drawMainTreeMap() {
      treemap(hierarchy);

      cheeseTree
        .append("text")
        .attr("class", "rodents-2017")
        .attr("x", 0)
        .attr("y", 30)
        .attr("font-size", 15)
        .attr("fill", "black")
        .style("font-weight", "bold")
        .text("Location Type in 2017");

      const locationTypes = cheeseTree
        .selectAll("g")
        .data(hierarchy.children)
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${d.x0},${d.y0 + marginTree.top})`)
        .on("click", function (event, d) {
          treeTooltip.style("visibility", "hidden");
          // When a locationType is clicked, show its descriptors
          showDescriptors(d);
        })
        .on("mouseover", function (event, d) {
          // Show tooltip on hover
          treeTooltip
            .style("visibility", "visible")
            .html(`${d.data.name}: ${d3.format(",")(d.data.total)}`);
        })
        .on("mousemove", function (event) {
          // Position the tooltip near the mouse pointer
          treeTooltip
            .style("top", event.pageY + 10 + "px")
            .style("left", event.pageX + 10 + "px");
        })
        .on("mouseout", function () {
          // Hide the tooltip when mouse leaves
          treeTooltip.style("visibility", "hidden");
        });

      locationTypes
        .append("rect")
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0)
        .attr("fill", (d) => colorScaleTree(d.value));
    }

    // Initial drawing of the main treemap
    drawMainTreeMap();

    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("2017 Loaded after delay.");

  } catch (error) {
    console.error("Error loading or processing data for 2017:", error);
  }

  d3.selectAll(".rodents-2017").style("display", "none");


})();

/* ----- */
/* -------------------------------------- ALL API QUERIES AND VISUALIZATIONS SPECIFIC TO 2018 -------------------------------------- */
/* ----- */

(async function Rodents2018() {
  const url2018 =
  "./data/Rodents2018.json";

//    "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$query=SELECT%0A%20%20%60unique_key%60%2C%0A%20%20%60created_date%60%2C%0A%20%20%60closed_date%60%2C%0A%20%20%60agency%60%2C%0A%20%20%60agency_name%60%2C%0A%20%20%60complaint_type%60%2C%0A%20%20%60descriptor%60%2C%0A%20%20%60location_type%60%2C%0A%20%20%60incident_zip%60%2C%0A%20%20%60incident_address%60%2C%0A%20%20%60street_name%60%2C%0A%20%20%60cross_street_1%60%2C%0A%20%20%60cross_street_2%60%2C%0A%20%20%60intersection_street_1%60%2C%0A%20%20%60intersection_street_2%60%2C%0A%20%20%60address_type%60%2C%0A%20%20%60city%60%2C%0A%20%20%60landmark%60%2C%0A%20%20%60facility_type%60%2C%0A%20%20%60status%60%2C%0A%20%20%60due_date%60%2C%0A%20%20%60resolution_description%60%2C%0A%20%20%60resolution_action_updated_date%60%2C%0A%20%20%60community_board%60%2C%0A%20%20%60bbl%60%2C%0A%20%20%60borough%60%2C%0A%20%20%60x_coordinate_state_plane%60%2C%0A%20%20%60y_coordinate_state_plane%60%2C%0A%20%20%60open_data_channel_type%60%2C%0A%20%20%60park_facility_name%60%2C%0A%20%20%60park_borough%60%2C%0A%20%20%60vehicle_type%60%2C%0A%20%20%60taxi_company_borough%60%2C%0A%20%20%60taxi_pick_up_location%60%2C%0A%20%20%60bridge_highway_name%60%2C%0A%20%20%60bridge_highway_direction%60%2C%0A%20%20%60road_ramp%60%2C%0A%20%20%60bridge_highway_segment%60%2C%0A%20%20%60latitude%60%2C%0A%20%20%60longitude%60%2C%0A%20%20%60location%60%0AWHERE%0A%20%20caseless_one_of(%60complaint_type%60%2C%20%22Rodent%22)%0A%20%20AND%20(%60created_date%60%0A%20%20%20%20%20%20%20%20%20BETWEEN%20%222018-01-01T00%3A00%3A00%22%20%3A%3A%20floating_timestamp%0A%20%20%20%20%20%20%20%20%20AND%20%222018-12-31T11%3A59%3A59%22%20%3A%3A%20floating_timestamp)%0AORDER%20BY%20%60created_date%60%20DESC%20NULL%20FIRST%0ALIMIT%20100000%20OFFSET%200";

  try {

    const json2018 = await d3.json(url2018);
    // there were 32530 rows in 2018
    console.log("2018:", json2018);

    const stackedData2018 = d3.rollup(
      json2018.filter(
        (d) =>
          d.borough &&
          d.borough.toLowerCase() !== "undefined" &&
          d.borough.toLowerCase() !== "unspecified"
      ),
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.descriptor
        ),
      (d) => d.borough
    );

    console.log(
      "Stacked Bar Chart by Count of Descriptor per Borough 2018:",
      stackedData2018
    );

    const boroughsBar = Array.from(stackedData2018, ([borough, descriptors]) => ({
      borough,
      descriptors: Array.from(descriptors, ([descriptor, count]) => ({
        descriptor,
        count,
      })),
    }));

    boroughsBar.forEach((b) => {
      b.totalCount = b.descriptors.reduce((sum, desc) => sum + desc.count, 0);
    });

    const keys = Array.from(
      new Set(boroughsBar.flatMap((b) => b.descriptors.map((d) => d.descriptor)))
    );

    const fixedCategories = [
      "Signs of Rodents",
      "Condition Attracting Rodents",
      "Mouse Sighting",
      "Rat Sighting",
    ];

    // Extract unique descriptors from the data
    const allDescriptors = new Set();
    boroughsBar.forEach((borough) => {
      borough.descriptors.forEach((descriptor) => {
        allDescriptors.add(descriptor.descriptor); // Add descriptor to the set
      });
    });

    // Convert the set to an array
    const dynamicCategories = Array.from(allDescriptors);

    // Filter out the fixed categories that are already in the dynamic categories
    const dynamicCategoriesExcludingFixed = dynamicCategories.filter(
      (category) => !fixedCategories.includes(category)
    );

    // Combine the fixed categories with dynamic categories
    const finalCategories = [
      ...fixedCategories,
      ...dynamicCategoriesExcludingFixed,
    ];

    // Create the stack with the combined order of categories
    const stack = d3
      .stack()
      .keys(finalCategories) // Use the combined fixed + dynamic order
      .value(
        (d, key) =>
          d.descriptors.find((desc) => desc.descriptor === key)?.count || 0
      );

    const series = stack(boroughsBar);
    const marginBar = { top: 20, right: 20, bottom: 40, left: 40 };
    const widthBar = parseInt(d3.select("#stacked-bar-charts").style("width"));
    const heightBar = parseInt(d3.select("#stacked-bar-charts").style("height"));
    const maxValueBar = d3.max(series[series.length - 1], (d) => d[1]);

    stackedBarCharts
      .append("text")
      .attr("class", "rodents-2018")
      .attr("x", 0)
      .attr("y", 20)
      .attr("font-size", 15)
      .attr("fill", "black")
      .style("font-weight", "bold")
      .text("Counts by Borough and Descriptor in 2018");

    const xScale = d3
      .scaleBand()
      .domain(boroughsBar.map((b) => b.borough))
      .range([marginBar.left, widthBar - marginBar.right])
      .paddingInner(0.1)
      .paddingOuter(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, BarYGlobalMax])
      //    .domain([0, maxValueBar])
      .range([heightBar - marginBar.top, marginBar.bottom])
      .nice();

    // For Bar Chart
    const BarDefs = d3
      .select("#stacked-bar-charts")
      .append("defs")
      .attr("class", "rodents-2018");

    BarDefs.append("pattern")
      .attr("id", "cheesePattern-2018") // ID to reference the pattern later for Bar Chart
      .attr("width", 2)
      .attr("height", 2)
      .append("image")
      .attr("href", "./assets/squareCheese.svg") // Path to the SVG image
      .attr("width", 300)
      .attr("height", 300);

    const barDescriptorColors = {
      "Rat Sighting": "black",
      "Mouse Sighting": "#d1d3d4",
      "Condition Attracting Rodents": "url(#cheesePattern-2018)",
      "Signs of Rodents": "#f1de00",
    };

    // Example of applying border styles
    const descriptorBorders = {
      "Rat Sighting": "1px solid black",
      "Mouse Sighting": "1px solid gray",
      "Condition Attracting Rodents": "1px solid black", // Border for SVG image
      "Signs of Rodents": "1px solid black",
    };

    // Create your color scale using the descriptor colors
    const colorScaleBar = d3
      .scaleOrdinal()
      .domain(Object.keys(barDescriptorColors)) // Use descriptor keys as the domain
      .range(Object.values(barDescriptorColors));
    console.log("barDescriptorColors", barDescriptorColors);

    const axes_layer = stackedBarCharts.append("g").attr("class", "rodents-2018");
    const bars_layer = stackedBarCharts.append("g").attr("class", "rodents-2018");

    const bars = bars_layer
      .selectAll("g")
      .data(stack(boroughsBar))
      .join("g")
      .attr("fill", (d, i) => colorScaleBar(d.key));
    console.log("keys", keys, boroughsBar, stack(boroughsBar));

    const stackedTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "stackedTooltip")
      .style("background-color", "white")
      .style("padding", "6px 10px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "5px")
      .style("position", "absolute") // Ensure it's absolutely positioned
      .style("opacity", 0); // Initially hidden

    // Bars and event listeners
    bars
      .selectAll("rect")
      .data((d) => d)
      .join("rect")
      .attr("x", (d) => xScale(d.data.borough))
      .attr("y", (d) => yScale(d[1]))
      .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
      .attr("width", xScale.bandwidth())
      // THIS PART OF THE CODE IS NOT WORKING. IT WON'T DO THE CORRECT STROKES ON THE BARS, FIX LATER
      .attr("fill", (d) => barDescriptorColors[d.descriptor]) // Apply the color based on the descriptor
      .attr("stroke", (d) => barDescriptorColors[d.descriptor]) // Apply the border style based on the descriptor
      .on("mouseover", (event, d) => {
        const borough = d.data.borough;
        const descriptor = d.data.descriptors.find(
          (desc) => desc.count === d[1] - d[0]
        ).descriptor;
        const count = d[1] - d[0];

        stackedTooltip
          .style("opacity", 1)
          .style("z-index", 6000) // Ensure it's on top
          .html(
            `${borough
              .split(" ")
              .map(
                (word) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")}<br>${descriptor}<br>${d3.format(",")(count)}`
          )
          .style("left", `${event.pageX + 10}px`) // Add offset for visibility
          .style("top", `${event.pageY + 10}px`) // Add offset for visibility
          .transition()
          .duration(100);

        // Apply custom styles based on the descriptor
        switch (descriptor) {
          case "Condition Attracting Rodents":
            stackedTooltip
              .style("background-color", "#fee459")
              .style("border", "1px solid white")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          case "Rat Sighting":
            stackedTooltip
              .style("background-color", "black")
              .style("border", "1px solid white")
              .style("color", "white")
              .style("line-height", "1.5");
            break;
          case "Mouse Sighting":
            stackedTooltip
              .style("background-color", "#d1d3d4")
              .style("border", "1px solid white")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          case "Signs of Rodents":
            stackedTooltip
              .style("background-color", "#f1de00")
              .style("border", "1px solid black")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          default:
            stackedTooltip
              .style("background-color", "#ffffff") // Default white background
              .style("border", "1px solid #ccc")
              .style("color", "#333")
              .style("line-height", "1.5");
            break;
        }
      })
      .on("mousemove", (event) => {
        stackedTooltip
          .style("left", `${event.pageX + 10}px`) // Add offset for visibility
          .style("top", `${event.pageY + 10}px`); // Add offset for visibility
      })
      .on("mouseout", () => {
        stackedTooltip.transition().duration(100).style("opacity", 0); // Hide tooltip
      });

    // Total Count text labels
    bars_layer
      .selectAll("text")
      .data(boroughsBar)
      .join("text")
      .attr("x", (b) => xScale(b.borough) + xScale.bandwidth() / 2)
      .attr("y", (b) => yScale(b.totalCount) - 5)
      .attr("text-anchor", "middle")
      .html((b) => `Total: ${new Intl.NumberFormat().format(b.totalCount)}`)
      .style("font-size", "10px");

    axes_layer
      .append("g")
      .call(d3.axisLeft(yScale))
      .style("font-family", "Lexend Deca")
      .attr("transform", `translate(${marginBar.left}, 0)`);

    axes_layer
      .append("g")
      .call(d3.axisBottom(xScale))
      .style("font-family", "Lexend Deca")
      .attr("transform", `translate(0, ${heightBar - marginBar.top})`);

    // gotta love stack overflow solving problems for me https://stackoverflow.com/questions/63838288/convert-json-to-geojson-frontend

    const APIUrl2018 = url2018;
    getData2018();

    map.createPane("Zip2018Pane");
    map.getPane("Zip2018Pane").style.zIndex = 20;

    async function getData2018() {
      let mygeojson2018 = { type: "FeatureCollection", features: [] };
      const zipMarkerCount = {}; // Object to keep track of the marker counts by zip code
      const zipClusters = {}; // To hold the marker clusters by zip code

      // Fetch and parse the data
      const Points2018 = await fetch(APIUrl2018)
        .then((response) => response.json())
        .then((data) => {
          for (let point of data) {
            // Ensure latitude and longitude are valid
            if (!point.latitude || !point.longitude) {
              continue;
            }

            // Convert to a GeoJSON feature
            let coordinate = [
              parseFloat(point.longitude),
              parseFloat(point.latitude),
            ];
            let properties = point;
            delete properties.longitude;
            delete properties.latitude;

            let feature = {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: coordinate,
              },
              properties: properties,
            };
            mygeojson2018.features.push(feature);

            // Count the markers by zip code
            const zipCode = point.incident_zip;
            if (zipCode) {
              if (!zipMarkerCount[zipCode]) {
                zipMarkerCount[zipCode] = 0;
              }
              zipMarkerCount[zipCode]++;
            }
          }
        });

      console.log("GeoJson 2018 All Points:", mygeojson2018);
      console.log("2018 Marker Counts by Zip Code:", zipMarkerCount);

      // Create the marker clusters
      for (const feature of mygeojson2018.features) {
        const { coordinates } = feature.geometry;
        const { descriptor, created_date, borough, incident_zip, location_type } =
          feature.properties;

        if (!incident_zip) {
          continue;
        }

        // Define the marker icon based on descriptor
        let markerIcon;
        switch (descriptor) {
          case "Condition Attracting Rodents":
            markerIcon = L.icon({
              iconUrl: "./assets/cheese.svg", // CHEESE
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Rat Sighting":
            markerIcon = L.icon({
              iconUrl: "./assets/rat.svg", // RAT
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Mouse Sighting":
            markerIcon = L.icon({
              iconUrl: "./assets/mouse.svg", // MOUSE
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Signs of Rodents":
            markerIcon = L.icon({
              iconUrl: "./assets/signs.svg", // SIGNS
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          default:
            markerIcon = null; // Leaflet's default marker
            break;
        }

        // Create the marker with the appropriate icon
        const marker = L.marker([coordinates[1], coordinates[0]], {
          icon: markerIcon,
        });
        const popupContent = `
      <div style="display:flex;flex-direction:column;justify-content:center;">
        <div style="margin:0 auto;font-weight:600;">${descriptor}</div>
        <div style="margin:0 auto;font-weight:400;">
          ${new Date(created_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        </div>
        <div style="margin:0 auto;font-weight:400;">${location_type}</div>
        <div style="margin:0 auto;font-weight:400;">${borough
            .split(" ")
            .map(
              (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ")}, ${incident_zip}</div>
      </div>
    `;

        let cleanDescriptor = descriptor.replace(/\s+/g, "-");
        marker.bindPopup(popupContent, { className: cleanDescriptor });

        // Add the marker to the corresponding zip cluster
        if (!zipClusters[incident_zip]) {
          zipClusters[incident_zip] = L.markerClusterGroup();
        }
        zipClusters[incident_zip].addLayer(marker);
      }

      const markerClusterLayer2018 = L.layerGroup();

      markerClusterLayer2018.onAdd = function (map) {
        // Add a class to the layer's container when it is added to the map
        this._map._container.classList.add("Rodents-2018-Cluster");
        L.LayerGroup.prototype.onAdd.call(this, map); // Call the parent method to ensure the layer is added correctly
      };

      // Add markers to the layer
      for (const zip in zipClusters) {
        markerClusterLayer2018.addLayer(zipClusters[zip]);
      }

      // Add GeoJSON layer with dynamic styling based on marker count
      const zipCodeGeoJSONLayer2018 = L.geoJSON(null, {
        style: function (feature) {
          const zipCode = feature.properties.modzcta; // modzcta is the key for zip code
          const markerCount = zipMarkerCount[zipCode] || 0;

          // Define a color scale based on marker count
          let fillColor;
          if (markerCount > 750) {
            fillColor = "darkgoldenrod"; // High count
          } else if (markerCount > 500) {
            fillColor = "goldenrod"; // Medium count
          } else if (markerCount > 250) {
            fillColor = "gold"; // Low count
          } else if (markerCount > 0) {
            fillColor = "palegoldenrod"; // Low count
          } else {
            fillColor = "lightgoldenrodyellow"; // No markers
          }

          return {
            color: "goldenrod", // Border color
            weight: 1, // Border weight
            opacity: 0.5, // Border opacity
            fillColor: fillColor, // Fill color
            fillOpacity: 0.6, // Fill opacity
          };
        },
        onEachFeature: function (feature, layer) {
          // Use getElement() to access the DOM element for the layer
          const element = layer.getElement();
          if (element) {
            element.classList.add("Zip-Areas-2018"); // Add the class to the DOM element
          }
        },
        pane: "Zip2018Pane", // Ensure the GeoJSON uses the correct pane
      });

      // Load GeoJSON shapes for zip codes
      d3.json("./data/Modified_Zip_Code_Tabulation_Areas_(MODZCTA).geojson").then(
        function (geojsonData) {
          zipCodeGeoJSONLayer2018.addData(geojsonData); // Add the GeoJSON data to the layer
        }
      );

      // Add the layers to the global overlayLayers object
      overlayLayers["2018 Rodent Complaints"] = markerClusterLayer2018;
      overlayLayers["2018 Zip Codes"] = zipCodeGeoJSONLayer2018;

      // Update the layer control
      layerControl.addOverlay(markerClusterLayer2018, "2018 Rodent Complaints");
      layerControl.addOverlay(zipCodeGeoJSONLayer2018, "2018 Zip Codes");

      // Optionally, add the layers to the map
      // map.addLayer(markerClusterLayer2018); // Add the marker clusters layer by default
      // map.addLayer(zipCodeGeoJSONLayer2018); // Add the zip code areas layer by default

      map.on('layeradd', function (e) {
        if (e.layer === markerClusterLayer2018) {
          activeLayers.push("2018 Rodent Complaints");
          updateTitle(activeLayers);
        }
        if (e.layer === zipCodeGeoJSONLayer2018) {
          activeLayers.push("2018 Zip Codes");
          updateTitle(activeLayers);
        }
      });

      map.on('layerremove', function (e) {
        if (e.layer === markerClusterLayer2018) {
          const index = activeLayers.indexOf("2018 Rodent Complaints");
          if (index > -1) {
            activeLayers.splice(index, 1); // Remove from array
          }
          updateTitle(activeLayers);
        }
        if (e.layer === zipCodeGeoJSONLayer2018) {
          const index = activeLayers.indexOf("2018 Zip Codes");
          if (index > -1) {
            activeLayers.splice(index, 1); // Remove from array
          }
          updateTitle(activeLayers);
        }
      });


    }


    const timeSeriesData2018 = d3.rollup(
      json2018.filter(
        (d) =>
          d.borough &&
          d.borough.toLowerCase() !== "undefined" &&
          d.borough.toLowerCase() !== "unspecified"
      ),
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.borough
        ),
      (d) => new Date(d.created_date).getMonth()
    );

    console.log("2018 Line Chart with Month by Count:", timeSeriesData2018);

    // Array of month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Map the numeric months to month names
    const months = monthNames; // Now 'months' will be an array of month names

    const boroughsLine = Array.from(
      new Set(
        json2018
          .filter(
            (d) =>
              d.borough &&
              d.borough.toLowerCase() !== "undefined" &&
              d.borough.toLowerCase() !== "unspecified"
          ) // filter out unwanted boroughs
          .map((d) => d.borough) // Get all boroughs
      )
    );

    // Structure the data for each borough in a format suitable for the line chart
    const boroughData = boroughsLine.map((borough) => {
      return {
        borough,
        values: months.map((monthName, monthIndex) => {
          const monthData = timeSeriesData2018.get(monthIndex); // Use monthIndex for rollup
          return {
            month: monthName, // Month name, e.g., 'January'
            count: monthData?.get(borough) || 0, // If no data for a borough in a month, count is 0
          };
        }),
      };
    });

    const marginLine = { top: 20, right: 20, bottom: 40, left: 40 };
    const widthLine = parseInt(d3.select("#line-chart").style("width"));
    const heightLine = parseInt(d3.select("#line-chart").style("height"));

    lineChart
      .append("text")
      .attr("class", "rodents-2018")
      .attr("x", 0)
      .attr("y", 20)
      .attr("font-size", 15)
      .attr("fill", "black")
      .style("font-weight", "bold")
      .text("Counts by Borough per Month in 2018");

    // Append the SVG element to the DOM
    lineChart
      .select("#line-chart")
      .append("svg")
      .attr("class", "rodents-2018")
      .attr("width", widthLine + marginLine.left + marginLine.right)
      .attr("height", heightLine + marginLine.top + marginLine.bottom)
      .append("g")
      .attr("transform", `translate(${marginLine.left},${marginLine.top})`);

    // Set up the x and y scales
    const x = d3
      .scaleBand()
      .domain(months)
      .range([marginLine.left, widthLine - marginLine.right])
      .padding(0.1); // Padding between bars (or in this case, data points)

    const y = d3
      .scaleLinear()
      .domain([0, LineYGlobalMax])
      //    .domain([0, d3.max(boroughData, (d) => d3.max(d.values, (v) => v.count))])
      .nice()
      .range([heightLine - marginLine.top, marginLine.bottom]);

    const boroughColorMapping = {
      MANHATTAN: "#EE352E",
      BROOKLYN: "#FCCC0A",
      QUEENS: "#B933AD",
      BRONX: "#00933C",
      "STATEN ISLAND": "#0078C6",
    };

    const color = d3
      .scaleOrdinal()
      .domain(Object.keys(boroughColorMapping)) // Use borough names as the domain
      .range(Object.values(boroughColorMapping)); // Use hex colors as the range

    const lineTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "stackedTooltip")
      .style("background-color", "white")
      .style("padding", "6px 10px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "5px")
      .style("position", "absolute") // Ensure it's absolutely positioned
      .style("opacity", 0); // Initially hidden

    lineChart
      .append("g")
      .attr("class", "x-axis")
      .attr("class", "rodents-2018")
      .attr("transform", `translate(0, ${heightLine - marginLine.top})`)
      .style("font-family", "Lexend Deca")
      .call(
        d3.axisBottom(x).tickFormat(function (d) {
          // Take the first 3 characters of the month name
          return d.slice(0, 3);
        })
      );

    lineChart
      .append("g")
      .attr("class", "y-axis")
      .attr("class", "rodents-2018")
      .attr("transform", `translate(${marginLine.left}, 0)`)
      .style("font-family", "Lexend Deca")
      .call(d3.axisLeft(y));

    // Define the line generator
    const line = d3
      .line()
      .x((d) => x(d.month) + x.bandwidth() / 2) // Position by month
      .y((d) => y(d.count)); // Position by count

    // Draw lines for each borough
    boroughData.forEach((borough) => {
      // Draw the line for the borough
      lineChart
        .append("path")
        .data([borough.values]) // Use the borough's month-count data
        .attr("class", "line")
        .attr("class", "rodents-2018")
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", color(borough.borough))
        .attr("stroke-width", 2);

      // Add points (circles) for each month on the line
      lineChart
        .selectAll(".point-" + borough.borough)
        .data(borough.values) // Use the borough's month-count data
        .enter()
        .append("circle")
        .attr("class", "point")
        .attr("class", "rodents-2018")
        .attr("cx", (d) => x(d.month) + x.bandwidth() / 2) // Position by month
        .attr("cy", (d) => y(d.count)) // Position by count
        .attr("r", 5) // Radius of the points
        .attr("fill", color(borough.borough)) // Color the points according to the borough
        .attr("stroke", "white") // White border around the points
        .attr("stroke-width", 1) // Stroke width for the border
        .on("mouseover", (event, d) => {
          // Show the tooltip on hover
          lineTooltip.style("opacity", 0.9).style("z-index", 6000); // Ensure it's on top
          lineTooltip
            .html(
              `${borough.borough
                .split(" ")
                .map(
                  (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ")}<br>${d.month}: ${d3.format(",")(d.count)}`
            )
            .style("left", event.pageX + 10 + "px")
            .style("top", event.pageY + 10 + "px");
        })
        .on("mousemove", (event) => {
          lineTooltip
            .style("left", `${event.pageX + 10}px`) // Add offset for visibility
            .style("top", `${event.pageY + 10}px`); // Add offset for visibility
        })
        .on("mouseout", () => {
          lineTooltip.transition().duration(100).style("opacity", 0); // Hide tooltip
        });
    });

    // (Optional) Add tooltips to display the exact count on hover
    lineChart
      .selectAll(".point")
      .append("title")
      .text((d) => `${d.month}: ${d.count}`);

    // Add a legend
    const legendLine = lineChart
      .selectAll(".legend")
      .data(boroughData)
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", (d, i) => `translate(0, ${i * 20})`);
    //console.log(boroughData);

    // Add lines for each borough to the legend
    legendLine
      .append("line")
      .attr("x1", marginLine.left + marginLine.right - 9) // Starting point of the line
      .attr("x2", marginLine.left + marginLine.right + 12) // Ending point of the line
      .attr("y1", marginLine.bottom) // Positioning the line vertically (aligned with text)
      .attr("y2", marginLine.bottom) // Same as y1 to keep it horizontal
      .attr("stroke", (d) => color(d.borough)) // Set line color based on borough
      .attr("stroke-width", 2); // Set line width

    legendLine
      .append("circle")
      .attr("class", "point")
      .attr("cx", marginLine.left + marginLine.right + 1.5)
      .attr("cy", marginLine.bottom)
      .attr("r", 5) // Radius of the points
      .attr("fill", (d) => color(d.borough)) // Use 'd' to correctly color the circle based on the borough
      .attr("stroke", "white") // White border around the points
      .attr("stroke-width", 1); // Stroke width for the border

    legendLine
      .append("text")
      .attr("x", marginLine.left + marginLine.right + 21)
      .attr("y", marginLine.bottom)
      .attr("dy", ".35em")
      .attr("text-anchor", "beginning")
      .style("font-size", "10px")
      .text((d) => d.borough);

    const LocationType2018 = d3.rollup(
      json2018,
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.descriptor
        ),
      (d) => d.location_type
    );

    console.log("2018 Treemap Location Type and Count:", LocationType2018);

    const root = {
      name: "Rodent Complaints", // Root level name
      children: Array.from(LocationType2018.entries()).map(
        ([locationType, descriptors]) => {
          // Calculate total value for each locationType
          const totalValue = Array.from(descriptors.values()).reduce(
            (sum, count) => sum + count,
            0
          );

          return {
            name: locationType,
            total: totalValue, // Add the total count here
            children: Array.from(descriptors.entries()).map(
              ([descriptor, count]) => ({
                name: descriptor,
                value: count,
              })
            ),
          };
        }
      ),
    };

    // console.log("Root for the Tree Map:", root);

    const cheeseTree = d3
      .select("#tree-map")
      .append("svg") // Create the SVG element
      .style("width", `${window.innerWidth / 2}px`)
      .style("height", `${window.innerHeight / 2 - 90}px`)
      .attr("class", "rodents-2018");

    const hierarchy = d3
      .hierarchy(root)
      .sum((d) => d.value) // Sum the values to calculate the size of each block in the tree map
      .sort((a, b) => a.value - b.value); // Optional: Sort in descending order by value

    // Step 4: Set up the dimensions for the tree map
    const marginTree = { top: 40, right: 20, bottom: 40, left: 40 };
    const widthTree = parseInt(d3.select("#tree-map").style("width"));
    const heightTree = parseInt(d3.select("#tree-map").style("height"));

    // Step 5: Create the tree map layout
    const treemap = d3
      .treemap()
      .size([widthTree - marginTree.right, heightTree - marginTree.bottom])
      .padding(1);

    // Step 6: Apply the layout to the hierarchy data
    treemap(hierarchy);

    const colorScaleTree = d3
      .scaleLinear()
      .domain([
        d3.min(hierarchy.children, (d) => d.value),
        d3.max(hierarchy.children, (d) => d.value),
      ]) // Domain based on the min and max value
      .range(["darkgoldenrod", "palegoldenrod"]); // Color range

    const treeTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background", "rgba(0, 0, 0, 0.7)")
      .style("color", "white")
      .style("padding", "5px 10px 4px 10px")
      .style("border-radius", "3px")
      .style("font-size", "15px")
      .style("z-index", 6000);

    // Function to show descriptors for a clicked locationType
    function showDescriptors(locationTypeData) {
      // Clear the existing chart
      cheeseTree.selectAll("*").remove();

      // Create a new hierarchy for the descriptors
      const descriptorHierarchy = d3
        .hierarchy({
          name: locationTypeData.data.name, // Keep the locationType name
          children: locationTypeData.children.map((d) => ({
            name: d.data.name, // Keep the descriptor name
            value: d.data.value, // Keep the descriptor value (count)
          })),
        })
        .sum((d) => d.value) // Sum the values to calculate the size of each block
        .sort((a, b) => a.value - b.value); // Sort by value

      // Apply the treemap layout to the descriptors
      treemap(descriptorHierarchy);

      cheeseTree
        .append("text")
        .attr("x", 0)
        .attr("y", 30)
        .attr("font-size", 15)
        .attr("fill", "black")
        .style("font-weight", "bold")
        .text(`Descriptors for ${locationTypeData.data.name}`);

      // Add descriptors to the tree chart
      const descriptors = cheeseTree
        .selectAll("g")
        .data(descriptorHierarchy.leaves()) // Use leaves here to get the actual descriptors
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${d.x0},${d.y0 + marginTree.top})`);

      // For Tree Chart
      const TreeDefs = d3
        .select("#tree-map")
        .append("defs")
        .attr("class", "rodents-2018");

      TreeDefs.append("pattern")
        .attr("id", "cheesePattern-Big-2018") // ID to reference the pattern later for Tree Chart
        .attr("width", 2)
        .attr("height", 2)
        .append("image")
        .attr("href", "./assets/squareCheese-Big.svg") // Path to the SVG image
        .attr("width", 1800)
        .attr("height", 1800);

      const treeDescriptorColors = {
        "Rat Sighting": "black", // Solid color
        "Mouse Sighting": "#d1d3d4", // Gray color
        "Condition Attracting Rodents": "url(#cheesePattern-Big-2018)", // Reference the Tree Chart Pattern
        "Signs of Rodents": "#f1de00", // Yellow color
      };

      const TreeColorScale = d3
        .scaleOrdinal()
        .domain(Object.keys(treeDescriptorColors)) // Descriptor keys as the domain
        .range(Object.values(treeDescriptorColors)); // Colors/patterns as the range

      descriptors
        .append("rect")
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0)
        .attr("fill", (d) => TreeColorScale(d.data.name));

      descriptors
        .append("text")
        .attr("x", 5)
        .attr("y", 15)
        .attr("font-size", 12)
        .attr("fill", function (d) {
          // Apply different colors based on descriptor name
          switch (d.data.name) {
            case "Rat Sighting":
              return "white";
            default:
              return "black"; // Default color
          }
        })
        .text((d) => `${d.data.name}: ${d3.format(",")(d.data.value)}`);

      // Optional: Add a "Back" button to go back to the full view
      cheeseTree
        .append("text")
        .attr("x", widthTree - marginTree.left - 3)
        .attr("y", 30)
        .attr("font-size", 10)
        .attr("fill", "goldenrod")
        .style("cursor", "pointer")
        .text("Back")
        .on("click", function () {
          // Go back to the full view by clearing the chart and redrawing the main treemap
          cheeseTree.selectAll("*").remove();
          drawMainTreeMap();
        });
    }

    // Redraw the main treemap (locationType level)
    function drawMainTreeMap() {
      treemap(hierarchy);

      cheeseTree
        .append("text")
        .attr("class", "rodents-2018")
        .attr("x", 0)
        .attr("y", 30)
        .attr("font-size", 15)
        .attr("fill", "black")
        .style("font-weight", "bold")
        .text("Location Type in 2018");

      const locationTypes = cheeseTree
        .selectAll("g")
        .data(hierarchy.children)
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${d.x0},${d.y0 + marginTree.top})`)
        .on("click", function (event, d) {
          treeTooltip.style("visibility", "hidden");
          // When a locationType is clicked, show its descriptors
          showDescriptors(d);
        })
        .on("mouseover", function (event, d) {
          // Show tooltip on hover
          treeTooltip
            .style("visibility", "visible")
            .html(`${d.data.name}: ${d3.format(",")(d.data.total)}`);
        })
        .on("mousemove", function (event) {
          // Position the tooltip near the mouse pointer
          treeTooltip
            .style("top", event.pageY + 10 + "px")
            .style("left", event.pageX + 10 + "px");
        })
        .on("mouseout", function () {
          // Hide the tooltip when mouse leaves
          treeTooltip.style("visibility", "hidden");
        });

      locationTypes
        .append("rect")
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0)
        .attr("fill", (d) => colorScaleTree(d.value));
    }

    // Initial drawing of the main treemap
    drawMainTreeMap();

    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("2018 Loaded after delay.");

  } catch (error) {
    console.error("Error loading or processing data for 2018:", error);
  }

  d3.selectAll(".rodents-2018").style("display", "none");

})();

/* ----- */
/* -------------------------------------- ALL API QUERIES AND VISUALIZATIONS SPECIFIC TO 2019 -------------------------------------- */
/* ----- */

(async function Rodents2019() {
  const url2019 =
    "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$query=SELECT%0A%20%20%60unique_key%60%2C%0A%20%20%60created_date%60%2C%0A%20%20%60closed_date%60%2C%0A%20%20%60agency%60%2C%0A%20%20%60agency_name%60%2C%0A%20%20%60complaint_type%60%2C%0A%20%20%60descriptor%60%2C%0A%20%20%60location_type%60%2C%0A%20%20%60incident_zip%60%2C%0A%20%20%60incident_address%60%2C%0A%20%20%60street_name%60%2C%0A%20%20%60cross_street_1%60%2C%0A%20%20%60cross_street_2%60%2C%0A%20%20%60intersection_street_1%60%2C%0A%20%20%60intersection_street_2%60%2C%0A%20%20%60address_type%60%2C%0A%20%20%60city%60%2C%0A%20%20%60landmark%60%2C%0A%20%20%60facility_type%60%2C%0A%20%20%60status%60%2C%0A%20%20%60due_date%60%2C%0A%20%20%60resolution_description%60%2C%0A%20%20%60resolution_action_updated_date%60%2C%0A%20%20%60community_board%60%2C%0A%20%20%60bbl%60%2C%0A%20%20%60borough%60%2C%0A%20%20%60x_coordinate_state_plane%60%2C%0A%20%20%60y_coordinate_state_plane%60%2C%0A%20%20%60open_data_channel_type%60%2C%0A%20%20%60park_facility_name%60%2C%0A%20%20%60park_borough%60%2C%0A%20%20%60vehicle_type%60%2C%0A%20%20%60taxi_company_borough%60%2C%0A%20%20%60taxi_pick_up_location%60%2C%0A%20%20%60bridge_highway_name%60%2C%0A%20%20%60bridge_highway_direction%60%2C%0A%20%20%60road_ramp%60%2C%0A%20%20%60bridge_highway_segment%60%2C%0A%20%20%60latitude%60%2C%0A%20%20%60longitude%60%2C%0A%20%20%60location%60%0AWHERE%0A%20%20caseless_one_of(%60complaint_type%60%2C%20%22Rodent%22)%0A%20%20AND%20(%60created_date%60%0A%20%20%20%20%20%20%20%20%20BETWEEN%20%222019-01-01T00%3A00%3A00%22%20%3A%3A%20floating_timestamp%0A%20%20%20%20%20%20%20%20%20AND%20%222019-12-31T11%3A59%3A59%22%20%3A%3A%20floating_timestamp)%0AORDER%20BY%20%60created_date%60%20DESC%20NULL%20FIRST%0ALIMIT%20100000%20OFFSET%200";

  try {

    const json2019 = await d3.json(url2019);
    // there were 31615 rows in 2019
    console.log("2019:", json2019);

    const stackedData2019 = d3.rollup(
      json2019.filter(
        (d) =>
          d.borough &&
          d.borough.toLowerCase() !== "undefined" &&
          d.borough.toLowerCase() !== "unspecified"
      ),
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.descriptor
        ),
      (d) => d.borough
    );

    console.log(
      "Stacked Bar Chart by Count of Descriptor per Borough 2019:",
      stackedData2019
    );

    const boroughsBar = Array.from(stackedData2019, ([borough, descriptors]) => ({
      borough,
      descriptors: Array.from(descriptors, ([descriptor, count]) => ({
        descriptor,
        count,
      })),
    }));

    boroughsBar.forEach((b) => {
      b.totalCount = b.descriptors.reduce((sum, desc) => sum + desc.count, 0);
    });

    const keys = Array.from(
      new Set(boroughsBar.flatMap((b) => b.descriptors.map((d) => d.descriptor)))
    );

    const fixedCategories = [
      "Signs of Rodents",
      "Condition Attracting Rodents",
      "Mouse Sighting",
      "Rat Sighting",
    ];

    // Extract unique descriptors from the data
    const allDescriptors = new Set();
    boroughsBar.forEach((borough) => {
      borough.descriptors.forEach((descriptor) => {
        allDescriptors.add(descriptor.descriptor); // Add descriptor to the set
      });
    });

    // Convert the set to an array
    const dynamicCategories = Array.from(allDescriptors);

    // Filter out the fixed categories that are already in the dynamic categories
    const dynamicCategoriesExcludingFixed = dynamicCategories.filter(
      (category) => !fixedCategories.includes(category)
    );

    // Combine the fixed categories with dynamic categories
    const finalCategories = [
      ...fixedCategories,
      ...dynamicCategoriesExcludingFixed,
    ];

    // Create the stack with the combined order of categories
    const stack = d3
      .stack()
      .keys(finalCategories) // Use the combined fixed + dynamic order
      .value(
        (d, key) =>
          d.descriptors.find((desc) => desc.descriptor === key)?.count || 0
      );

    const series = stack(boroughsBar);
    const marginBar = { top: 20, right: 20, bottom: 40, left: 40 };
    const widthBar = parseInt(d3.select("#stacked-bar-charts").style("width"));
    const heightBar = parseInt(d3.select("#stacked-bar-charts").style("height"));
    const maxValueBar = d3.max(series[series.length - 1], (d) => d[1]);

    stackedBarCharts
      .append("text")
      .attr("class", "rodents-2019")
      .attr("x", 0)
      .attr("y", 20)
      .attr("font-size", 15)
      .attr("fill", "black")
      .style("font-weight", "bold")
      .text("Counts by Borough and Descriptor in 2019");

    const xScale = d3
      .scaleBand()
      .domain(boroughsBar.map((b) => b.borough))
      .range([marginBar.left, widthBar - marginBar.right])
      .paddingInner(0.1)
      .paddingOuter(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, BarYGlobalMax])
      //    .domain([0, maxValueBar])
      .range([heightBar - marginBar.top, marginBar.bottom])
      .nice();

    // For Bar Chart
    const BarDefs = d3
      .select("#stacked-bar-charts")
      .append("defs")
      .attr("class", "rodents-2019");

    BarDefs.append("pattern")
      .attr("id", "cheesePattern-2019") // ID to reference the pattern later for Bar Chart
      .attr("width", 2)
      .attr("height", 2)
      .append("image")
      .attr("href", "./assets/squareCheese.svg") // Path to the SVG image
      .attr("width", 300)
      .attr("height", 300);

    const barDescriptorColors = {
      "Rat Sighting": "black",
      "Mouse Sighting": "#d1d3d4",
      "Condition Attracting Rodents": "url(#cheesePattern-2019)",
      "Signs of Rodents": "#f1de00",
    };

    // Example of applying border styles
    const descriptorBorders = {
      "Rat Sighting": "1px solid black",
      "Mouse Sighting": "1px solid gray",
      "Condition Attracting Rodents": "1px solid black", // Border for SVG image
      "Signs of Rodents": "1px solid black",
    };

    // Create your color scale using the descriptor colors
    const colorScaleBar = d3
      .scaleOrdinal()
      .domain(Object.keys(barDescriptorColors)) // Use descriptor keys as the domain
      .range(Object.values(barDescriptorColors));

    const axes_layer = stackedBarCharts.append("g").attr("class", "rodents-2019");
    const bars_layer = stackedBarCharts.append("g").attr("class", "rodents-2019");

    const bars = bars_layer
      .selectAll("g")
      .data(stack(boroughsBar))
      .join("g")
      .attr("fill", (d, i) => colorScaleBar(d.key));

    const stackedTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "stackedTooltip")
      .style("background-color", "white")
      .style("padding", "6px 10px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "5px")
      .style("position", "absolute") // Ensure it's absolutely positioned
      .style("opacity", 0); // Initially hidden

    // Bars and event listeners
    bars
      .selectAll("rect")
      .data((d) => d)
      .join("rect")
      .attr("x", (d) => xScale(d.data.borough))
      .attr("y", (d) => yScale(d[1]))
      .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
      .attr("width", xScale.bandwidth())
      // THIS PART OF THE CODE IS NOT WORKING. IT WON'T DO THE CORRECT STROKES ON THE BARS, FIX LATER
      .attr("fill", (d) => barDescriptorColors[d.descriptor]) // Apply the color based on the descriptor
      .attr("stroke", (d) => descriptorBorders[d.descriptor]) // Apply the border style based on the descriptor
      .on("mouseover", (event, d) => {
        const borough = d.data.borough;
        const descriptor = d.data.descriptors.find(
          (desc) => desc.count === d[1] - d[0]
        ).descriptor;
        const count = d[1] - d[0];

        stackedTooltip
          .style("opacity", 1)
          .style("z-index", 6000) // Ensure it's on top
          .html(
            `${borough
              .split(" ")
              .map(
                (word) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")}<br>${descriptor}<br>${d3.format(",")(count)}`
          )
          .style("left", `${event.pageX + 10}px`) // Add offset for visibility
          .style("top", `${event.pageY + 10}px`) // Add offset for visibility
          .transition()
          .duration(100);

        // Apply custom styles based on the descriptor
        switch (descriptor) {
          case "Condition Attracting Rodents":
            stackedTooltip
              .style("background-color", "#fee459")
              .style("border", "1px solid white")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          case "Rat Sighting":
            stackedTooltip
              .style("background-color", "black")
              .style("border", "1px solid white")
              .style("color", "white")
              .style("line-height", "1.5");
            break;
          case "Mouse Sighting":
            stackedTooltip
              .style("background-color", "#d1d3d4")
              .style("border", "1px solid white")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          case "Signs of Rodents":
            stackedTooltip
              .style("background-color", "#f1de00")
              .style("border", "1px solid black")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          default:
            stackedTooltip
              .style("background-color", "#ffffff") // Default white background
              .style("border", "1px solid #ccc")
              .style("color", "#333")
              .style("line-height", "1.5");
            break;
        }
      })
      .on("mousemove", (event) => {
        stackedTooltip
          .style("left", `${event.pageX + 10}px`) // Add offset for visibility
          .style("top", `${event.pageY + 10}px`); // Add offset for visibility
      })
      .on("mouseout", () => {
        stackedTooltip.transition().duration(100).style("opacity", 0); // Hide tooltip
      });

    // Total Count text labels
    bars_layer
      .selectAll("text")
      .data(boroughsBar)
      .join("text")
      .attr("x", (b) => xScale(b.borough) + xScale.bandwidth() / 2)
      .attr("y", (b) => yScale(b.totalCount) - 5)
      .attr("text-anchor", "middle")
      .html((b) => `Total: ${new Intl.NumberFormat().format(b.totalCount)}`)
      .style("font-size", "10px");

    axes_layer
      .append("g")
      .call(d3.axisLeft(yScale))
      .style("font-family", "Lexend Deca")
      .attr("transform", `translate(${marginBar.left}, 0)`);

    axes_layer
      .append("g")
      .call(d3.axisBottom(xScale))
      .style("font-family", "Lexend Deca")
      .attr("transform", `translate(0, ${heightBar - marginBar.top})`);

    // gotta love stack overflow solving problems for me https://stackoverflow.com/questions/63838288/convert-json-to-geojson-frontend

    const APIUrl2019 = url2019;
    getData2019();

    map.createPane("Zip2019Pane");
    map.getPane("Zip2019Pane").style.zIndex = 20;

    async function getData2019() {
      let mygeojson2019 = { type: "FeatureCollection", features: [] };
      const zipMarkerCount = {}; // Object to keep track of the marker counts by zip code
      const zipClusters = {}; // To hold the marker clusters by zip code

      // Fetch and parse the data
      const Points2019 = await fetch(APIUrl2019)
        .then((response) => response.json())
        .then((data) => {
          for (let point of data) {
            // Ensure latitude and longitude are valid
            if (!point.latitude || !point.longitude) {
              continue;
            }

            // Convert to a GeoJSON feature
            let coordinate = [
              parseFloat(point.longitude),
              parseFloat(point.latitude),
            ];
            let properties = point;
            delete properties.longitude;
            delete properties.latitude;

            let feature = {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: coordinate,
              },
              properties: properties,
            };
            mygeojson2019.features.push(feature);

            // Count the markers by zip code
            const zipCode = point.incident_zip;
            if (zipCode) {
              if (!zipMarkerCount[zipCode]) {
                zipMarkerCount[zipCode] = 0;
              }
              zipMarkerCount[zipCode]++;
            }
          }
        });

      console.log("GeoJson 2019 All Points:", mygeojson2019);
      console.log("2019 Marker Counts by Zip Code:", zipMarkerCount);

      // Create the marker clusters
      for (const feature of mygeojson2019.features) {
        const { coordinates } = feature.geometry;
        const { descriptor, created_date, borough, incident_zip, location_type } =
          feature.properties;

        if (!incident_zip) {
          continue;
        }

        // Define the marker icon based on descriptor
        let markerIcon;
        switch (descriptor) {
          case "Condition Attracting Rodents":
            markerIcon = L.icon({
              iconUrl: "./assets/cheese.svg", // CHEESE
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Rat Sighting":
            markerIcon = L.icon({
              iconUrl: "./assets/rat.svg", // RAT
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Mouse Sighting":
            markerIcon = L.icon({
              iconUrl: "./assets/mouse.svg", // MOUSE
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Signs of Rodents":
            markerIcon = L.icon({
              iconUrl: "./assets/signs.svg", // SIGNS
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          default:
            markerIcon = null; // Leaflet's default marker
            break;
        }

        // Create the marker with the appropriate icon
        const marker = L.marker([coordinates[1], coordinates[0]], {
          icon: markerIcon,
        });
        const popupContent = `
        <div style="display:flex;flex-direction:column;justify-content:center;">
          <div style="margin:0 auto;font-weight:600;">${descriptor}</div>
          <div style="margin:0 auto;font-weight:400;">
            ${new Date(created_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
          </div>
          <div style="margin:0 auto;font-weight:400;">${location_type}</div>
          <div style="margin:0 auto;font-weight:400;">${borough
            .split(" ")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ")}, ${incident_zip}</div>
        </div>
      `;

        let cleanDescriptor = descriptor.replace(/\s+/g, "-");
        marker.bindPopup(popupContent, { className: cleanDescriptor });

        // Add the marker to the corresponding zip cluster
        if (!zipClusters[incident_zip]) {
          zipClusters[incident_zip] = L.markerClusterGroup();
        }
        zipClusters[incident_zip].addLayer(marker);
      }

      const markerClusterLayer2019 = L.layerGroup();

      markerClusterLayer2019.onAdd = function (map) {
        // Add a class to the layer's container when it is added to the map
        this._map._container.classList.add("Rodents-2019-Cluster");
        L.LayerGroup.prototype.onAdd.call(this, map); // Call the parent method to ensure the layer is added correctly
      };

      // Add markers to the layer
      for (const zip in zipClusters) {
        markerClusterLayer2019.addLayer(zipClusters[zip]);
      }

      // Add GeoJSON layer with dynamic styling based on marker count
      const zipCodeGeoJSONLayer2019 = L.geoJSON(null, {
        style: function (feature) {
          const zipCode = feature.properties.modzcta; // modzcta is the key for zip code
          const markerCount = zipMarkerCount[zipCode] || 0;

          // Define a color scale based on marker count
          let fillColor;
          if (markerCount > 750) {
            fillColor = "darkgoldenrod"; // High count
          } else if (markerCount > 500) {
            fillColor = "goldenrod"; // Medium count
          } else if (markerCount > 250) {
            fillColor = "gold"; // Low count
          } else if (markerCount > 0) {
            fillColor = "palegoldenrod"; // Low count
          } else {
            fillColor = "lightgoldenrodyellow"; // No markers
          }

          return {
            color: "goldenrod", // Border color
            weight: 1, // Border weight
            opacity: 0.5, // Border opacity
            fillColor: fillColor, // Fill color
            fillOpacity: 0.6, // Fill opacity
          };
        },
        onEachFeature: function (feature, layer) {
          // Use getElement() to access the DOM element for the layer
          const element = layer.getElement();
          if (element) {
            element.classList.add("Zip-Areas-2019"); // Add the class to the DOM element
          }
        },
        pane: "Zip2019Pane", // Ensure the GeoJSON uses the correct pane
      });

      // Load GeoJSON shapes for zip codes
      d3.json("./data/Modified_Zip_Code_Tabulation_Areas_(MODZCTA).geojson").then(
        function (geojsonData) {
          zipCodeGeoJSONLayer2019.addData(geojsonData); // Add the GeoJSON data to the layer
        }
      );

      // Add the layers to the global overlayLayers object
      overlayLayers["2019 Rodent Complaints"] = markerClusterLayer2019;
      overlayLayers["2019 Zip Codes"] = zipCodeGeoJSONLayer2019;

      // Update the layer control
      layerControl.addOverlay(markerClusterLayer2019, "2019 Rodent Complaints");
      layerControl.addOverlay(zipCodeGeoJSONLayer2019, "2019 Zip Codes");

      // Optionally, add the layers to the map
      // map.addLayer(markerClusterLayer); // Add the marker clusters layer by default
      // map.addLayer(zipCodeGeoJSONLayer); // Add the zip code areas layer by default

      map.on('layeradd', function (e) {
        if (e.layer === markerClusterLayer2019) {
          activeLayers.push("2019 Rodent Complaints");
          updateTitle(activeLayers);
        }
        if (e.layer === zipCodeGeoJSONLayer2019) {
          activeLayers.push("2019 Zip Codes");
          updateTitle(activeLayers);
        }
      });

      map.on('layerremove', function (e) {
        if (e.layer === markerClusterLayer2019) {
          const index = activeLayers.indexOf("2019 Rodent Complaints");
          if (index > -1) {
            activeLayers.splice(index, 1); // Remove from array
          }
          updateTitle(activeLayers);
        }
        if (e.layer === zipCodeGeoJSONLayer2019) {
          const index = activeLayers.indexOf("2019 Zip Codes");
          if (index > -1) {
            activeLayers.splice(index, 1); // Remove from array
          }
          updateTitle(activeLayers);
        }
      });


    }


    const timeSeriesData2019 = d3.rollup(
      json2019.filter(
        (d) =>
          d.borough &&
          d.borough.toLowerCase() !== "undefined" &&
          d.borough.toLowerCase() !== "unspecified"
      ),
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.borough
        ),
      (d) => new Date(d.created_date).getMonth()
    );

    console.log("2019 Line Chart with Month by Count:", timeSeriesData2019);

    // Array of month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Map the numeric months to month names
    const months = monthNames; // Now 'months' will be an array of month names

    const boroughsLine = Array.from(
      new Set(
        json2019
          .filter(
            (d) =>
              d.borough &&
              d.borough.toLowerCase() !== "undefined" &&
              d.borough.toLowerCase() !== "unspecified"
          ) // filter out unwanted boroughs
          .map((d) => d.borough) // Get all boroughs
      )
    );

    // Structure the data for each borough in a format suitable for the line chart
    const boroughData = boroughsLine.map((borough) => {
      return {
        borough,
        values: months.map((monthName, monthIndex) => {
          const monthData = timeSeriesData2019.get(monthIndex); // Use monthIndex for rollup
          return {
            month: monthName, // Month name, e.g., 'January'
            count: monthData?.get(borough) || 0, // If no data for a borough in a month, count is 0
          };
        }),
      };
    });

    const marginLine = { top: 20, right: 20, bottom: 40, left: 40 };
    const widthLine = parseInt(d3.select("#line-chart").style("width"));
    const heightLine = parseInt(d3.select("#line-chart").style("height"));

    lineChart
      .append("text")
      .attr("class", "rodents-2019")
      .attr("x", 0)
      .attr("y", 20)
      .attr("font-size", 15)
      .attr("fill", "black")
      .style("font-weight", "bold")
      .text("Counts by Borough per Month in 2019");

    // Append the SVG element to the DOM
    lineChart
      .select("#line-chart")
      .append("svg")
      .attr("class", "rodents-2019")
      .attr("width", widthLine + marginLine.left + marginLine.right)
      .attr("height", heightLine + marginLine.top + marginLine.bottom)
      .append("g")
      .attr("transform", `translate(${marginLine.left},${marginLine.top})`);

    // Set up the x and y scales
    const x = d3
      .scaleBand()
      .domain(months)
      .range([marginLine.left, widthLine - marginLine.right])
      .padding(0.1); // Padding between bars (or in this case, data points)

    const y = d3
      .scaleLinear()
      .domain([0, LineYGlobalMax])
      //    .domain([0, d3.max(boroughData, (d) => d3.max(d.values, (v) => v.count))])
      .nice()
      .range([heightLine - marginLine.top, marginLine.bottom]);

    const boroughColorMapping = {
      MANHATTAN: "#EE352E",
      BROOKLYN: "#FCCC0A",
      QUEENS: "#B933AD",
      BRONX: "#00933C",
      "STATEN ISLAND": "#0078C6",
    };

    const color = d3
      .scaleOrdinal()
      .domain(Object.keys(boroughColorMapping)) // Use borough names as the domain
      .range(Object.values(boroughColorMapping)); // Use hex colors as the range

    const lineTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "stackedTooltip")
      .style("background-color", "white")
      .style("padding", "6px 10px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "5px")
      .style("position", "absolute") // Ensure it's absolutely positioned
      .style("opacity", 0); // Initially hidden

    lineChart
      .append("g")
      .attr("class", "x-axis")
      .attr("class", "rodents-2019")
      .attr("transform", `translate(0, ${heightLine - marginLine.top})`)
      .style("font-family", "Lexend Deca")
      .call(
        d3.axisBottom(x).tickFormat(function (d) {
          // Take the first 3 characters of the month name
          return d.slice(0, 3);
        })
      );

    lineChart
      .append("g")
      .attr("class", "y-axis")
      .attr("class", "rodents-2019")
      .attr("transform", `translate(${marginLine.left}, 0)`)
      .style("font-family", "Lexend Deca")
      .call(d3.axisLeft(y));

    // Define the line generator
    const line = d3
      .line()
      .x((d) => x(d.month) + x.bandwidth() / 2) // Position by month
      .y((d) => y(d.count)); // Position by count

    // Draw lines for each borough
    boroughData.forEach((borough) => {
      // Draw the line for the borough
      lineChart
        .append("path")
        .data([borough.values]) // Use the borough's month-count data
        .attr("class", "line")
        .attr("class", "rodents-2019")
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", color(borough.borough))
        .attr("stroke-width", 2);

      // Add points (circles) for each month on the line
      lineChart
        .selectAll(".point-" + borough.borough)
        .data(borough.values) // Use the borough's month-count data
        .enter()
        .append("circle")
        .attr("class", "point")
        .attr("class", "rodents-2019")
        .attr("cx", (d) => x(d.month) + x.bandwidth() / 2) // Position by month
        .attr("cy", (d) => y(d.count)) // Position by count
        .attr("r", 5) // Radius of the points
        .attr("fill", color(borough.borough)) // Color the points according to the borough
        .attr("stroke", "white") // White border around the points
        .attr("stroke-width", 1) // Stroke width for the border
        .on("mouseover", (event, d) => {
          // Show the tooltip on hover
          lineTooltip.style("opacity", 0.9).style("z-index", 6000); // Ensure it's on top
          lineTooltip
            .html(
              `${borough.borough
                .split(" ")
                .map(
                  (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ")}<br>${d.month}: ${d3.format(",")(d.count)}`
            )
            .style("left", event.pageX + 10 + "px")
            .style("top", event.pageY + 10 + "px");
        })
        .on("mousemove", (event) => {
          lineTooltip
            .style("left", `${event.pageX + 10}px`) // Add offset for visibility
            .style("top", `${event.pageY + 10}px`); // Add offset for visibility
        })
        .on("mouseout", () => {
          lineTooltip.transition().duration(100).style("opacity", 0); // Hide tooltip
        });
    });

    // (Optional) Add tooltips to display the exact count on hover
    lineChart
      .selectAll(".point")
      .append("title")
      .text((d) => `${d.month}: ${d.count}`);

    // Add a legend
    const legendLine = lineChart
      .selectAll(".legend")
      .data(boroughData)
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", (d, i) => `translate(0, ${i * 20})`);
    //console.log(boroughData);

    // Add lines for each borough to the legend
    legendLine
      .append("line")
      .attr("x1", marginLine.left + marginLine.right - 9) // Starting point of the line
      .attr("x2", marginLine.left + marginLine.right + 12) // Ending point of the line
      .attr("y1", marginLine.bottom) // Positioning the line vertically (aligned with text)
      .attr("y2", marginLine.bottom) // Same as y1 to keep it horizontal
      .attr("stroke", (d) => color(d.borough)) // Set line color based on borough
      .attr("stroke-width", 2); // Set line width

    legendLine
      .append("circle")
      .attr("class", "point")
      .attr("cx", marginLine.left + marginLine.right + 1.5)
      .attr("cy", marginLine.bottom)
      .attr("r", 5) // Radius of the points
      .attr("fill", (d) => color(d.borough)) // Use 'd' to correctly color the circle based on the borough
      .attr("stroke", "white") // White border around the points
      .attr("stroke-width", 1); // Stroke width for the border

    legendLine
      .append("text")
      .attr("x", marginLine.left + marginLine.right + 21)
      .attr("y", marginLine.bottom)
      .attr("dy", ".35em")
      .attr("text-anchor", "beginning")
      .style("font-size", "10px")
      .text((d) => d.borough);

    const LocationType2019 = d3.rollup(
      json2019,
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.descriptor
        ),
      (d) => d.location_type
    );

    console.log("2019 Treemap Location Type and Count:", LocationType2019);

    const root = {
      name: "Rodent Complaints", // Root level name
      children: Array.from(LocationType2019.entries()).map(
        ([locationType, descriptors]) => {
          // Calculate total value for each locationType
          const totalValue = Array.from(descriptors.values()).reduce(
            (sum, count) => sum + count,
            0
          );

          return {
            name: locationType,
            total: totalValue, // Add the total count here
            children: Array.from(descriptors.entries()).map(
              ([descriptor, count]) => ({
                name: descriptor,
                value: count,
              })
            ),
          };
        }
      ),
    };

    // console.log("Root for the Tree Map:", root);

    const cheeseTree = d3
      .select("#tree-map")
      .append("svg") // Create the SVG element
      .style("width", `${window.innerWidth / 2}px`)
      .style("height", `${window.innerHeight / 2 - 90}px`)
      .attr("class", "rodents-2019");

    const hierarchy = d3
      .hierarchy(root)
      .sum((d) => d.value) // Sum the values to calculate the size of each block in the tree map
      .sort((a, b) => a.value - b.value); // Optional: Sort in descending order by value

    // Step 4: Set up the dimensions for the tree map
    const marginTree = { top: 40, right: 20, bottom: 40, left: 40 };
    const widthTree = parseInt(d3.select("#tree-map").style("width"));
    const heightTree = parseInt(d3.select("#tree-map").style("height"));

    // Step 5: Create the tree map layout
    const treemap = d3
      .treemap()
      .size([widthTree - marginTree.right, heightTree - marginTree.bottom])
      .padding(1);

    // Step 6: Apply the layout to the hierarchy data
    treemap(hierarchy);

    const colorScaleTree = d3
      .scaleLinear()
      .domain([
        d3.min(hierarchy.children, (d) => d.value),
        d3.max(hierarchy.children, (d) => d.value),
      ]) // Domain based on the min and max value
      .range(["darkgoldenrod", "palegoldenrod"]); // Color range

    const treeTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background", "rgba(0, 0, 0, 0.7)")
      .style("color", "white")
      .style("padding", "5px 10px 4px 10px")
      .style("border-radius", "3px")
      .style("font-size", "15px")
      .style("z-index", 6000);

    // Function to show descriptors for a clicked locationType
    function showDescriptors(locationTypeData) {
      // Clear the existing chart
      cheeseTree.selectAll("*").remove();

      // Create a new hierarchy for the descriptors
      const descriptorHierarchy = d3
        .hierarchy({
          name: locationTypeData.data.name, // Keep the locationType name
          children: locationTypeData.children.map((d) => ({
            name: d.data.name, // Keep the descriptor name
            value: d.data.value, // Keep the descriptor value (count)
          })),
        })
        .sum((d) => d.value) // Sum the values to calculate the size of each block
        .sort((a, b) => a.value - b.value); // Sort by value

      // Apply the treemap layout to the descriptors
      treemap(descriptorHierarchy);

      cheeseTree
        .append("text")
        .attr("x", 0)
        .attr("y", 30)
        .attr("font-size", 15)
        .attr("fill", "black")
        .style("font-weight", "bold")
        .text(`Descriptors for ${locationTypeData.data.name}`);

      // Add descriptors to the tree chart
      const descriptors = cheeseTree
        .selectAll("g")
        .data(descriptorHierarchy.leaves()) // Use leaves here to get the actual descriptors
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${d.x0},${d.y0 + marginTree.top})`);

      // For Tree Chart
      const TreeDefs = d3
        .select("#tree-map")
        .append("defs")
        .attr("class", "rodents-2019");

      TreeDefs.append("pattern")
        .attr("id", "cheesePattern-Big-2019") // ID to reference the pattern later for Tree Chart
        .attr("width", 2)
        .attr("height", 2)
        .append("image")
        .attr("href", "./assets/squareCheese-Big.svg") // Path to the SVG image
        .attr("width", 1800)
        .attr("height", 1800);

      const treeDescriptorColors = {
        "Rat Sighting": "black", // Solid color
        "Mouse Sighting": "#d1d3d4", // Gray color
        "Condition Attracting Rodents": "url(#cheesePattern-Big-2019)", // Reference the Tree Chart Pattern
        "Signs of Rodents": "#f1de00", // Yellow color
      };

      const TreeColorScale = d3
        .scaleOrdinal()
        .domain(Object.keys(treeDescriptorColors)) // Descriptor keys as the domain
        .range(Object.values(treeDescriptorColors)); // Colors/patterns as the range

      descriptors
        .append("rect")
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0)
        .attr("fill", (d) => TreeColorScale(d.data.name));

      descriptors
        .append("text")
        .attr("x", 5)
        .attr("y", 15)
        .attr("font-size", 12)
        .attr("fill", function (d) {
          // Apply different colors based on descriptor name
          switch (d.data.name) {
            case "Rat Sighting":
              return "white";
            default:
              return "black"; // Default color
          }
        })
        .text((d) => `${d.data.name}: ${d3.format(",")(d.data.value)}`);

      // Optional: Add a "Back" button to go back to the full view
      cheeseTree
        .append("text")
        .attr("x", widthTree - marginTree.left - 3)
        .attr("y", 30)
        .attr("font-size", 10)
        .attr("fill", "goldenrod")
        .style("cursor", "pointer")
        .text("Back")
        .on("click", function () {
          // Go back to the full view by clearing the chart and redrawing the main treemap
          cheeseTree.selectAll("*").remove();
          drawMainTreeMap();
        });
    }

    // Redraw the main treemap (locationType level)
    function drawMainTreeMap() {
      treemap(hierarchy);

      cheeseTree
        .append("text")
        .attr("class", "rodents-2019")
        .attr("x", 0)
        .attr("y", 30)
        .attr("font-size", 15)
        .attr("fill", "black")
        .style("font-weight", "bold")
        .text("Location Type in 2019");

      const locationTypes = cheeseTree
        .selectAll("g")
        .data(hierarchy.children)
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${d.x0},${d.y0 + marginTree.top})`)
        .on("click", function (event, d) {
          treeTooltip.style("visibility", "hidden");
          // When a locationType is clicked, show its descriptors
          showDescriptors(d);
        })
        .on("mouseover", function (event, d) {
          // Show tooltip on hover
          treeTooltip
            .style("visibility", "visible")
            .html(`${d.data.name}: ${d3.format(",")(d.data.total)}`);
        })
        .on("mousemove", function (event) {
          // Position the tooltip near the mouse pointer
          treeTooltip
            .style("top", event.pageY + 10 + "px")
            .style("left", event.pageX + 10 + "px");
        })
        .on("mouseout", function () {
          // Hide the tooltip when mouse leaves
          treeTooltip.style("visibility", "hidden");
        });

      locationTypes
        .append("rect")
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0)
        .attr("fill", (d) => colorScaleTree(d.value));
    }

    // Initial drawing of the main treemap
    drawMainTreeMap();

    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("2019 Loaded after delay.");

  } catch (error) {
    console.error("Error loading or processing data for 2019:", error);
  }


  d3.selectAll(".rodents-2019").style("display", "none");

})();

/* ----- */
/* -------------------------------------- ALL API QUERIES AND VISUALIZATIONS SPECIFIC TO 2020 -------------------------------------- */
/* ----- */

(async function Rodents2020() {
  const url2020 =
    "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$query=SELECT%0A%20%20%60unique_key%60%2C%0A%20%20%60created_date%60%2C%0A%20%20%60closed_date%60%2C%0A%20%20%60agency%60%2C%0A%20%20%60agency_name%60%2C%0A%20%20%60complaint_type%60%2C%0A%20%20%60descriptor%60%2C%0A%20%20%60location_type%60%2C%0A%20%20%60incident_zip%60%2C%0A%20%20%60incident_address%60%2C%0A%20%20%60street_name%60%2C%0A%20%20%60cross_street_1%60%2C%0A%20%20%60cross_street_2%60%2C%0A%20%20%60intersection_street_1%60%2C%0A%20%20%60intersection_street_2%60%2C%0A%20%20%60address_type%60%2C%0A%20%20%60city%60%2C%0A%20%20%60landmark%60%2C%0A%20%20%60facility_type%60%2C%0A%20%20%60status%60%2C%0A%20%20%60due_date%60%2C%0A%20%20%60resolution_description%60%2C%0A%20%20%60resolution_action_updated_date%60%2C%0A%20%20%60community_board%60%2C%0A%20%20%60bbl%60%2C%0A%20%20%60borough%60%2C%0A%20%20%60x_coordinate_state_plane%60%2C%0A%20%20%60y_coordinate_state_plane%60%2C%0A%20%20%60open_data_channel_type%60%2C%0A%20%20%60park_facility_name%60%2C%0A%20%20%60park_borough%60%2C%0A%20%20%60vehicle_type%60%2C%0A%20%20%60taxi_company_borough%60%2C%0A%20%20%60taxi_pick_up_location%60%2C%0A%20%20%60bridge_highway_name%60%2C%0A%20%20%60bridge_highway_direction%60%2C%0A%20%20%60road_ramp%60%2C%0A%20%20%60bridge_highway_segment%60%2C%0A%20%20%60latitude%60%2C%0A%20%20%60longitude%60%2C%0A%20%20%60location%60%0AWHERE%0A%20%20caseless_one_of(%60complaint_type%60%2C%20%22Rodent%22)%0A%20%20AND%20(%60created_date%60%0A%20%20%20%20%20%20%20%20%20BETWEEN%20%222020-01-01T00%3A00%3A00%22%20%3A%3A%20floating_timestamp%0A%20%20%20%20%20%20%20%20%20AND%20%222020-12-31T11%3A59%3A59%22%20%3A%3A%20floating_timestamp)%0AORDER%20BY%20%60created_date%60%20DESC%20NULL%20FIRST%0ALIMIT%20100000%20OFFSET%200";

  try {

    const json2020 = await d3.json(url2020);
    // there were 31615 rows in 2020
    console.log("2020:", json2020);

    const stackedData2020 = d3.rollup(
      json2020.filter(
        (d) =>
          d.borough &&
          d.borough.toLowerCase() !== "undefined" &&
          d.borough.toLowerCase() !== "unspecified"
      ),
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.descriptor
        ),
      (d) => d.borough
    );

    console.log(
      "Stacked Bar Chart by Count of Descriptor per Borough 2020:",
      stackedData2020
    );

    const boroughsBar = Array.from(stackedData2020, ([borough, descriptors]) => ({
      borough,
      descriptors: Array.from(descriptors, ([descriptor, count]) => ({
        descriptor,
        count,
      })),
    }));

    boroughsBar.forEach((b) => {
      b.totalCount = b.descriptors.reduce((sum, desc) => sum + desc.count, 0);
    });

    const keys = Array.from(
      new Set(boroughsBar.flatMap((b) => b.descriptors.map((d) => d.descriptor)))
    );

    const fixedCategories = [
      "Signs of Rodents",
      "Condition Attracting Rodents",
      "Mouse Sighting",
      "Rat Sighting",
    ];

    // Extract unique descriptors from the data
    const allDescriptors = new Set();
    boroughsBar.forEach((borough) => {
      borough.descriptors.forEach((descriptor) => {
        allDescriptors.add(descriptor.descriptor); // Add descriptor to the set
      });
    });

    // Convert the set to an array
    const dynamicCategories = Array.from(allDescriptors);

    // Filter out the fixed categories that are already in the dynamic categories
    const dynamicCategoriesExcludingFixed = dynamicCategories.filter(
      (category) => !fixedCategories.includes(category)
    );

    // Combine the fixed categories with dynamic categories
    const finalCategories = [
      ...fixedCategories,
      ...dynamicCategoriesExcludingFixed,
    ];

    // Create the stack with the combined order of categories
    const stack = d3
      .stack()
      .keys(finalCategories) // Use the combined fixed + dynamic order
      .value(
        (d, key) =>
          d.descriptors.find((desc) => desc.descriptor === key)?.count || 0
      );

    const series = stack(boroughsBar);
    const marginBar = { top: 20, right: 20, bottom: 40, left: 40 };
    const widthBar = parseInt(d3.select("#stacked-bar-charts").style("width"));
    const heightBar = parseInt(d3.select("#stacked-bar-charts").style("height"));
    const maxValueBar = d3.max(series[series.length - 1], (d) => d[1]);

    stackedBarCharts
      .append("text")
      .attr("class", "rodents-2020")
      .attr("x", 0)
      .attr("y", 20)
      .attr("font-size", 15)
      .attr("fill", "black")
      .style("font-weight", "bold")
      .text("Counts by Borough and Descriptor in 2020");

    const xScale = d3
      .scaleBand()
      .domain(boroughsBar.map((b) => b.borough))
      .range([marginBar.left, widthBar - marginBar.right])
      .paddingInner(0.1)
      .paddingOuter(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, BarYGlobalMax])
      //    .domain([0, maxValueBar])
      .range([heightBar - marginBar.top, marginBar.bottom])
      .nice();

    // For Bar Chart
    const BarDefs = d3
      .select("#stacked-bar-charts")
      .append("defs")
      .attr("class", "rodents-2020");

    BarDefs.append("pattern")
      .attr("id", "cheesePattern-2020") // ID to reference the pattern later for Bar Chart
      .attr("width", 2)
      .attr("height", 2)
      .append("image")
      .attr("href", "./assets/squareCheese.svg") // Path to the SVG image
      .attr("width", 300)
      .attr("height", 300);

    const barDescriptorColors = {
      "Rat Sighting": "black",
      "Mouse Sighting": "#d1d3d4",
      "Condition Attracting Rodents": "url(#cheesePattern-2020)",
      "Signs of Rodents": "#f1de00",
    };

    // Example of applying border styles
    const descriptorBorders = {
      "Rat Sighting": "1px solid black",
      "Mouse Sighting": "1px solid gray",
      "Condition Attracting Rodents": "1px solid black", // Border for SVG image
      "Signs of Rodents": "1px solid black",
    };

    // Create your color scale using the descriptor colors
    const colorScaleBar = d3
      .scaleOrdinal()
      .domain(Object.keys(barDescriptorColors)) // Use descriptor keys as the domain
      .range(Object.values(barDescriptorColors));

    const axes_layer = stackedBarCharts.append("g").attr("class", "rodents-2020");
    const bars_layer = stackedBarCharts.append("g").attr("class", "rodents-2020");

    const bars = bars_layer
      .selectAll("g")
      .data(stack(boroughsBar))
      .join("g")
      .attr("fill", (d, i) => colorScaleBar(d.key));

    const stackedTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "stackedTooltip")
      .style("background-color", "white")
      .style("padding", "6px 10px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "5px")
      .style("position", "absolute") // Ensure it's absolutely positioned
      .style("opacity", 0); // Initially hidden

    // Bars and event listeners
    bars
      .selectAll("rect")
      .data((d) => d)
      .join("rect")
      .attr("x", (d) => xScale(d.data.borough))
      .attr("y", (d) => yScale(d[1]))
      .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
      .attr("width", xScale.bandwidth())
      // THIS PART OF THE CODE IS NOT WORKING. IT WON'T DO THE CORRECT STROKES ON THE BARS, FIX LATER
      .attr("fill", (d) => barDescriptorColors[d.descriptor]) // Apply the color based on the descriptor
      .attr("stroke", (d) => descriptorBorders[d.descriptor]) // Apply the border style based on the descriptor
      .on("mouseover", (event, d) => {
        const borough = d.data.borough;
        const descriptor = d.data.descriptors.find(
          (desc) => desc.count === d[1] - d[0]
        ).descriptor;
        const count = d[1] - d[0];

        stackedTooltip
          .style("opacity", 1)
          .style("z-index", 6000) // Ensure it's on top
          .html(
            `${borough
              .split(" ")
              .map(
                (word) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")}<br>${descriptor}<br>${d3.format(",")(count)}`
          )
          .style("left", `${event.pageX + 10}px`) // Add offset for visibility
          .style("top", `${event.pageY + 10}px`) // Add offset for visibility
          .transition()
          .duration(100);

        // Apply custom styles based on the descriptor
        switch (descriptor) {
          case "Condition Attracting Rodents":
            stackedTooltip
              .style("background-color", "#fee459")
              .style("border", "1px solid white")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          case "Rat Sighting":
            stackedTooltip
              .style("background-color", "black")
              .style("border", "1px solid white")
              .style("color", "white")
              .style("line-height", "1.5");
            break;
          case "Mouse Sighting":
            stackedTooltip
              .style("background-color", "#d1d3d4")
              .style("border", "1px solid white")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          case "Signs of Rodents":
            stackedTooltip
              .style("background-color", "#f1de00")
              .style("border", "1px solid black")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          default:
            stackedTooltip
              .style("background-color", "#ffffff") // Default white background
              .style("border", "1px solid #ccc")
              .style("color", "#333")
              .style("line-height", "1.5");
            break;
        }
      })
      .on("mousemove", (event) => {
        stackedTooltip
          .style("left", `${event.pageX + 10}px`) // Add offset for visibility
          .style("top", `${event.pageY + 10}px`); // Add offset for visibility
      })
      .on("mouseout", () => {
        stackedTooltip.transition().duration(100).style("opacity", 0); // Hide tooltip
      });

    // Total Count text labels
    bars_layer
      .selectAll("text")
      .data(boroughsBar)
      .join("text")
      .attr("x", (b) => xScale(b.borough) + xScale.bandwidth() / 2)
      .attr("y", (b) => yScale(b.totalCount) - 5)
      .attr("text-anchor", "middle")
      .html((b) => `Total: ${new Intl.NumberFormat().format(b.totalCount)}`)
      .style("font-size", "10px");

    axes_layer
      .append("g")
      .call(d3.axisLeft(yScale))
      .style("font-family", "Lexend Deca")
      .attr("transform", `translate(${marginBar.left}, 0)`);

    axes_layer
      .append("g")
      .call(d3.axisBottom(xScale))
      .style("font-family", "Lexend Deca")
      .attr("transform", `translate(0, ${heightBar - marginBar.top})`);

    // gotta love stack overflow solving problems for me https://stackoverflow.com/questions/63838288/convert-json-to-geojson-frontend

    const APIUrl2020 = url2020;
    getData2020();

    map.createPane("Zip2020Pane");
    map.getPane("Zip2020Pane").style.zIndex = 20;

    async function getData2020() {
      let mygeojson2020 = { type: "FeatureCollection", features: [] };
      const zipMarkerCount = {}; // Object to keep track of the marker counts by zip code
      const zipClusters = {}; // To hold the marker clusters by zip code

      // Fetch and parse the data
      const Points2020 = await fetch(APIUrl2020)
        .then((response) => response.json())
        .then((data) => {
          for (let point of data) {
            // Ensure latitude and longitude are valid
            if (!point.latitude || !point.longitude) {
              continue;
            }

            // Convert to a GeoJSON feature
            let coordinate = [
              parseFloat(point.longitude),
              parseFloat(point.latitude),
            ];
            let properties = point;
            delete properties.longitude;
            delete properties.latitude;

            let feature = {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: coordinate,
              },
              properties: properties,
            };
            mygeojson2020.features.push(feature);

            // Count the markers by zip code
            const zipCode = point.incident_zip;
            if (zipCode) {
              if (!zipMarkerCount[zipCode]) {
                zipMarkerCount[zipCode] = 0;
              }
              zipMarkerCount[zipCode]++;
            }
          }
        });

      console.log("GeoJson 2020 All Points:", mygeojson2020);
      console.log("2020 Marker Counts by Zip Code:", zipMarkerCount);

      // Create the marker clusters
      for (const feature of mygeojson2020.features) {
        const { coordinates } = feature.geometry;
        const { descriptor, created_date, borough, incident_zip, location_type } =
          feature.properties;

        if (!incident_zip) {
          continue;
        }

        // Define the marker icon based on descriptor
        let markerIcon;
        switch (descriptor) {
          case "Condition Attracting Rodents":
            markerIcon = L.icon({
              iconUrl: "./assets/cheese.svg", // CHEESE
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Rat Sighting":
            markerIcon = L.icon({
              iconUrl: "./assets/rat.svg", // RAT
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Mouse Sighting":
            markerIcon = L.icon({
              iconUrl: "./assets/mouse.svg", // MOUSE
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Signs of Rodents":
            markerIcon = L.icon({
              iconUrl: "./assets/signs.svg", // SIGNS
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          default:
            markerIcon = null; // Leaflet's default marker
            break;
        }

        // Create the marker with the appropriate icon
        const marker = L.marker([coordinates[1], coordinates[0]], {
          icon: markerIcon,
        });
        const popupContent = `
        <div style="display:flex;flex-direction:column;justify-content:center;">
          <div style="margin:0 auto;font-weight:600;">${descriptor}</div>
          <div style="margin:0 auto;font-weight:400;">
            ${new Date(created_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
          </div>
          <div style="margin:0 auto;font-weight:400;">${location_type}</div>
          <div style="margin:0 auto;font-weight:400;">${borough
            .split(" ")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ")}, ${incident_zip}</div>
        </div>
      `;

        let cleanDescriptor = descriptor.replace(/\s+/g, "-");
        marker.bindPopup(popupContent, { className: cleanDescriptor });

        // Add the marker to the corresponding zip cluster
        if (!zipClusters[incident_zip]) {
          zipClusters[incident_zip] = L.markerClusterGroup();
        }
        zipClusters[incident_zip].addLayer(marker);
      }

      const markerClusterLayer2020 = L.layerGroup();

      markerClusterLayer2020.onAdd = function (map) {
        // Add a class to the layer's container when it is added to the map
        this._map._container.classList.add("Rodents-2020-Cluster");
        L.LayerGroup.prototype.onAdd.call(this, map); // Call the parent method to ensure the layer is added correctly
      };

      // Add markers to the layer
      for (const zip in zipClusters) {
        markerClusterLayer2020.addLayer(zipClusters[zip]);
      }

      // Add GeoJSON layer with dynamic styling based on marker count
      const zipCodeGeoJSONLayer2020 = L.geoJSON(null, {
        style: function (feature) {
          const zipCode = feature.properties.modzcta; // modzcta is the key for zip code
          const markerCount = zipMarkerCount[zipCode] || 0;

          // Define a color scale based on marker count
          let fillColor;
          if (markerCount > 750) {
            fillColor = "darkgoldenrod"; // High count
          } else if (markerCount > 500) {
            fillColor = "goldenrod"; // Medium count
          } else if (markerCount > 250) {
            fillColor = "gold"; // Low count
          } else if (markerCount > 0) {
            fillColor = "palegoldenrod"; // Low count
          } else {
            fillColor = "lightgoldenrodyellow"; // No markers
          }

          return {
            color: "goldenrod", // Border color
            weight: 1, // Border weight
            opacity: 0.5, // Border opacity
            fillColor: fillColor, // Fill color
            fillOpacity: 0.6, // Fill opacity
          };
        },
        onEachFeature: function (feature, layer) {
          // Use getElement() to access the DOM element for the layer
          const element = layer.getElement();
          if (element) {
            element.classList.add("Zip-Areas-2020"); // Add the class to the DOM element
          }
        },
        pane: "Zip2020Pane", // Ensure the GeoJSON uses the correct pane
      });

      // Load GeoJSON shapes for zip codes
      d3.json("./data/Modified_Zip_Code_Tabulation_Areas_(MODZCTA).geojson").then(
        function (geojsonData) {
          zipCodeGeoJSONLayer2020.addData(geojsonData); // Add the GeoJSON data to the layer
        }
      );

      // Add the layers to the global overlayLayers object
      overlayLayers["2020 Rodent Complaints"] = markerClusterLayer2020;
      overlayLayers["2020 Zip Codes"] = zipCodeGeoJSONLayer2020;

      // Update the layer control
      layerControl.addOverlay(markerClusterLayer2020, "2020 Rodent Complaints");
      layerControl.addOverlay(zipCodeGeoJSONLayer2020, "2020 Zip Codes");

      // Optionally, add the layers to the map
      // map.addLayer(markerClusterLayer); // Add the marker clusters layer by default
      // map.addLayer(zipCodeGeoJSONLayer); // Add the zip code areas layer by default

      map.on('layeradd', function (e) {
        if (e.layer === markerClusterLayer2020) {
          activeLayers.push("2020 Rodent Complaints");
          updateTitle(activeLayers);
        }
        if (e.layer === zipCodeGeoJSONLayer2020) {
          activeLayers.push("2020 Zip Codes");
          updateTitle(activeLayers);
        }
      });

      map.on('layerremove', function (e) {
        if (e.layer === markerClusterLayer2020) {
          const index = activeLayers.indexOf("2020 Rodent Complaints");
          if (index > -1) {
            activeLayers.splice(index, 1); // Remove from array
          }
          updateTitle(activeLayers);
        }
        if (e.layer === zipCodeGeoJSONLayer2020) {
          const index = activeLayers.indexOf("2020 Zip Codes");
          if (index > -1) {
            activeLayers.splice(index, 1); // Remove from array
          }
          updateTitle(activeLayers);
        }
      });


    }


    const timeSeriesData2020 = d3.rollup(
      json2020.filter(
        (d) =>
          d.borough &&
          d.borough.toLowerCase() !== "undefined" &&
          d.borough.toLowerCase() !== "unspecified"
      ),
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.borough
        ),
      (d) => new Date(d.created_date).getMonth()
    );

    console.log("2020 Line Chart with Month by Count:", timeSeriesData2020);

    // Array of month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Map the numeric months to month names
    const months = monthNames; // Now 'months' will be an array of month names

    const boroughsLine = Array.from(
      new Set(
        json2020
          .filter(
            (d) =>
              d.borough &&
              d.borough.toLowerCase() !== "undefined" &&
              d.borough.toLowerCase() !== "unspecified"
          ) // filter out unwanted boroughs
          .map((d) => d.borough) // Get all boroughs
      )
    );

    // Structure the data for each borough in a format suitable for the line chart
    const boroughData = boroughsLine.map((borough) => {
      return {
        borough,
        values: months.map((monthName, monthIndex) => {
          const monthData = timeSeriesData2020.get(monthIndex); // Use monthIndex for rollup
          return {
            month: monthName, // Month name, e.g., 'January'
            count: monthData?.get(borough) || 0, // If no data for a borough in a month, count is 0
          };
        }),
      };
    });

    const marginLine = { top: 20, right: 20, bottom: 40, left: 40 };
    const widthLine = parseInt(d3.select("#line-chart").style("width"));
    const heightLine = parseInt(d3.select("#line-chart").style("height"));

    lineChart
      .append("text")
      .attr("class", "rodents-2020")
      .attr("x", 0)
      .attr("y", 20)
      .attr("font-size", 15)
      .attr("fill", "black")
      .style("font-weight", "bold")
      .text("Counts by Borough per Month in 2020");

    // Append the SVG element to the DOM
    lineChart
      .select("#line-chart")
      .append("svg")
      .attr("class", "rodents-2020")
      .attr("width", widthLine + marginLine.left + marginLine.right)
      .attr("height", heightLine + marginLine.top + marginLine.bottom)
      .append("g")
      .attr("transform", `translate(${marginLine.left},${marginLine.top})`);

    // Set up the x and y scales
    const x = d3
      .scaleBand()
      .domain(months)
      .range([marginLine.left, widthLine - marginLine.right])
      .padding(0.1); // Padding between bars (or in this case, data points)

    const y = d3
      .scaleLinear()
      .domain([0, LineYGlobalMax])
      //    .domain([0, d3.max(boroughData, (d) => d3.max(d.values, (v) => v.count))])
      .nice()
      .range([heightLine - marginLine.top, marginLine.bottom]);

    const boroughColorMapping = {
      MANHATTAN: "#EE352E",
      BROOKLYN: "#FCCC0A",
      QUEENS: "#B933AD",
      BRONX: "#00933C",
      "STATEN ISLAND": "#0078C6",
    };

    const color = d3
      .scaleOrdinal()
      .domain(Object.keys(boroughColorMapping)) // Use borough names as the domain
      .range(Object.values(boroughColorMapping)); // Use hex colors as the range

    const lineTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "stackedTooltip")
      .style("background-color", "white")
      .style("padding", "6px 10px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "5px")
      .style("position", "absolute") // Ensure it's absolutely positioned
      .style("opacity", 0); // Initially hidden

    lineChart
      .append("g")
      .attr("class", "x-axis")
      .attr("class", "rodents-2020")
      .attr("transform", `translate(0, ${heightLine - marginLine.top})`)
      .style("font-family", "Lexend Deca")
      .call(
        d3.axisBottom(x).tickFormat(function (d) {
          // Take the first 3 characters of the month name
          return d.slice(0, 3);
        })
      );

    lineChart
      .append("g")
      .attr("class", "y-axis")
      .attr("class", "rodents-2020")
      .attr("transform", `translate(${marginLine.left}, 0)`)
      .style("font-family", "Lexend Deca")
      .call(d3.axisLeft(y));

    // Define the line generator
    const line = d3
      .line()
      .x((d) => x(d.month) + x.bandwidth() / 2) // Position by month
      .y((d) => y(d.count)); // Position by count

    // Draw lines for each borough
    boroughData.forEach((borough) => {
      // Draw the line for the borough
      lineChart
        .append("path")
        .data([borough.values]) // Use the borough's month-count data
        .attr("class", "line")
        .attr("class", "rodents-2020")
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", color(borough.borough))
        .attr("stroke-width", 2);

      // Add points (circles) for each month on the line
      lineChart
        .selectAll(".point-" + borough.borough)
        .data(borough.values) // Use the borough's month-count data
        .enter()
        .append("circle")
        .attr("class", "point")
        .attr("class", "rodents-2020")
        .attr("cx", (d) => x(d.month) + x.bandwidth() / 2) // Position by month
        .attr("cy", (d) => y(d.count)) // Position by count
        .attr("r", 5) // Radius of the points
        .attr("fill", color(borough.borough)) // Color the points according to the borough
        .attr("stroke", "white") // White border around the points
        .attr("stroke-width", 1) // Stroke width for the border
        .on("mouseover", (event, d) => {
          // Show the tooltip on hover
          lineTooltip.style("opacity", 0.9).style("z-index", 6000); // Ensure it's on top
          lineTooltip
            .html(
              `${borough.borough
                .split(" ")
                .map(
                  (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ")}<br>${d.month}: ${d3.format(",")(d.count)}`
            )
            .style("left", event.pageX + 10 + "px")
            .style("top", event.pageY + 10 + "px");
        })
        .on("mousemove", (event) => {
          lineTooltip
            .style("left", `${event.pageX + 10}px`) // Add offset for visibility
            .style("top", `${event.pageY + 10}px`); // Add offset for visibility
        })
        .on("mouseout", () => {
          lineTooltip.transition().duration(100).style("opacity", 0); // Hide tooltip
        });
    });

    // (Optional) Add tooltips to display the exact count on hover
    lineChart
      .selectAll(".point")
      .append("title")
      .text((d) => `${d.month}: ${d.count}`);

    // Add a legend
    const legendLine = lineChart
      .selectAll(".legend")
      .data(boroughData)
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", (d, i) => `translate(0, ${i * 20})`);
    //console.log(boroughData);

    // Add lines for each borough to the legend
    legendLine
      .append("line")
      .attr("x1", marginLine.left + marginLine.right - 9) // Starting point of the line
      .attr("x2", marginLine.left + marginLine.right + 12) // Ending point of the line
      .attr("y1", marginLine.bottom) // Positioning the line vertically (aligned with text)
      .attr("y2", marginLine.bottom) // Same as y1 to keep it horizontal
      .attr("stroke", (d) => color(d.borough)) // Set line color based on borough
      .attr("stroke-width", 2); // Set line width

    legendLine
      .append("circle")
      .attr("class", "point")
      .attr("cx", marginLine.left + marginLine.right + 1.5)
      .attr("cy", marginLine.bottom)
      .attr("r", 5) // Radius of the points
      .attr("fill", (d) => color(d.borough)) // Use 'd' to correctly color the circle based on the borough
      .attr("stroke", "white") // White border around the points
      .attr("stroke-width", 1); // Stroke width for the border

    legendLine
      .append("text")
      .attr("x", marginLine.left + marginLine.right + 21)
      .attr("y", marginLine.bottom)
      .attr("dy", ".35em")
      .attr("text-anchor", "beginning")
      .style("font-size", "10px")
      .text((d) => d.borough);

    const LocationType2020 = d3.rollup(
      json2020,
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.descriptor
        ),
      (d) => d.location_type
    );

    console.log("2020 Treemap Location Type and Count:", LocationType2020);

    const root = {
      name: "Rodent Complaints", // Root level name
      children: Array.from(LocationType2020.entries()).map(
        ([locationType, descriptors]) => {
          // Calculate total value for each locationType
          const totalValue = Array.from(descriptors.values()).reduce(
            (sum, count) => sum + count,
            0
          );

          return {
            name: locationType,
            total: totalValue, // Add the total count here
            children: Array.from(descriptors.entries()).map(
              ([descriptor, count]) => ({
                name: descriptor,
                value: count,
              })
            ),
          };
        }
      ),
    };

    // console.log("Root for the Tree Map:", root);

    const cheeseTree = d3
      .select("#tree-map")
      .append("svg") // Create the SVG element
      .style("width", `${window.innerWidth / 2}px`)
      .style("height", `${window.innerHeight / 2 - 90}px`)
      .attr("class", "rodents-2020");

    const hierarchy = d3
      .hierarchy(root)
      .sum((d) => d.value) // Sum the values to calculate the size of each block in the tree map
      .sort((a, b) => a.value - b.value); // Optional: Sort in descending order by value

    // Step 4: Set up the dimensions for the tree map
    const marginTree = { top: 40, right: 20, bottom: 40, left: 40 };
    const widthTree = parseInt(d3.select("#tree-map").style("width"));
    const heightTree = parseInt(d3.select("#tree-map").style("height"));

    // Step 5: Create the tree map layout
    const treemap = d3
      .treemap()
      .size([widthTree - marginTree.right, heightTree - marginTree.bottom])
      .padding(1);

    // Step 6: Apply the layout to the hierarchy data
    treemap(hierarchy);

    const colorScaleTree = d3
      .scaleLinear()
      .domain([
        d3.min(hierarchy.children, (d) => d.value),
        d3.max(hierarchy.children, (d) => d.value),
      ]) // Domain based on the min and max value
      .range(["darkgoldenrod", "palegoldenrod"]); // Color range

    const treeTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background", "rgba(0, 0, 0, 0.7)")
      .style("color", "white")
      .style("padding", "5px 10px 4px 10px")
      .style("border-radius", "3px")
      .style("font-size", "15px")
      .style("z-index", 6000);

    // Function to show descriptors for a clicked locationType
    function showDescriptors(locationTypeData) {
      // Clear the existing chart
      cheeseTree.selectAll("*").remove();

      // Create a new hierarchy for the descriptors
      const descriptorHierarchy = d3
        .hierarchy({
          name: locationTypeData.data.name, // Keep the locationType name
          children: locationTypeData.children.map((d) => ({
            name: d.data.name, // Keep the descriptor name
            value: d.data.value, // Keep the descriptor value (count)
          })),
        })
        .sum((d) => d.value) // Sum the values to calculate the size of each block
        .sort((a, b) => a.value - b.value); // Sort by value

      // Apply the treemap layout to the descriptors
      treemap(descriptorHierarchy);

      cheeseTree
        .append("text")
        .attr("x", 0)
        .attr("y", 30)
        .attr("font-size", 15)
        .attr("fill", "black")
        .style("font-weight", "bold")
        .text(`Descriptors for ${locationTypeData.data.name}`);

      // Add descriptors to the tree chart
      const descriptors = cheeseTree
        .selectAll("g")
        .data(descriptorHierarchy.leaves()) // Use leaves here to get the actual descriptors
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${d.x0},${d.y0 + marginTree.top})`);

      // For Tree Chart
      const TreeDefs = d3
        .select("#tree-map")
        .append("defs")
        .attr("class", "rodents-2020");

      TreeDefs.append("pattern")
        .attr("id", "cheesePattern-Big-2020") // ID to reference the pattern later for Tree Chart
        .attr("width", 2)
        .attr("height", 2)
        .append("image")
        .attr("href", "./assets/squareCheese-Big.svg") // Path to the SVG image
        .attr("width", 1800)
        .attr("height", 1800);

      const treeDescriptorColors = {
        "Rat Sighting": "black", // Solid color
        "Mouse Sighting": "#d1d3d4", // Gray color
        "Condition Attracting Rodents": "url(#cheesePattern-Big-2020)", // Reference the Tree Chart Pattern
        "Signs of Rodents": "#f1de00", // Yellow color
      };

      const TreeColorScale = d3
        .scaleOrdinal()
        .domain(Object.keys(treeDescriptorColors)) // Descriptor keys as the domain
        .range(Object.values(treeDescriptorColors)); // Colors/patterns as the range

      descriptors
        .append("rect")
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0)
        .attr("fill", (d) => TreeColorScale(d.data.name));

      descriptors
        .append("text")
        .attr("x", 5)
        .attr("y", 15)
        .attr("font-size", 12)
        .attr("fill", function (d) {
          // Apply different colors based on descriptor name
          switch (d.data.name) {
            case "Rat Sighting":
              return "white";
            default:
              return "black"; // Default color
          }
        })
        .text((d) => `${d.data.name}: ${d3.format(",")(d.data.value)}`);

      // Optional: Add a "Back" button to go back to the full view
      cheeseTree
        .append("text")
        .attr("x", widthTree - marginTree.left - 3)
        .attr("y", 30)
        .attr("font-size", 10)
        .attr("fill", "goldenrod")
        .style("cursor", "pointer")
        .text("Back")
        .on("click", function () {
          // Go back to the full view by clearing the chart and redrawing the main treemap
          cheeseTree.selectAll("*").remove();
          drawMainTreeMap();
        });
    }

    // Redraw the main treemap (locationType level)
    function drawMainTreeMap() {
      treemap(hierarchy);

      cheeseTree
        .append("text")
        .attr("class", "rodents-2020")
        .attr("x", 0)
        .attr("y", 30)
        .attr("font-size", 15)
        .attr("fill", "black")
        .style("font-weight", "bold")
        .text("Location Type in 2020");

      const locationTypes = cheeseTree
        .selectAll("g")
        .data(hierarchy.children)
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${d.x0},${d.y0 + marginTree.top})`)
        .on("click", function (event, d) {
          treeTooltip.style("visibility", "hidden");
          // When a locationType is clicked, show its descriptors
          showDescriptors(d);
        })
        .on("mouseover", function (event, d) {
          // Show tooltip on hover
          treeTooltip
            .style("visibility", "visible")
            .html(`${d.data.name}: ${d3.format(",")(d.data.total)}`);
        })
        .on("mousemove", function (event) {
          // Position the tooltip near the mouse pointer
          treeTooltip
            .style("top", event.pageY + 10 + "px")
            .style("left", event.pageX + 10 + "px");
        })
        .on("mouseout", function () {
          // Hide the tooltip when mouse leaves
          treeTooltip.style("visibility", "hidden");
        });

      locationTypes
        .append("rect")
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0)
        .attr("fill", (d) => colorScaleTree(d.value));
    }

    // Initial drawing of the main treemap
    drawMainTreeMap();

    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("2020 Loaded after delay.");

  } catch (error) {
    console.error("Error loading or processing data for 2020:", error);
  }


  d3.selectAll(".rodents-2020").style("display", "none");

})();

/* ----- */
/* -------------------------------------- ALL API QUERIES AND VISUALIZATIONS SPECIFIC TO 2021 -------------------------------------- */
/* ----- */

(async function Rodents2021() {
  const url2021 =
    "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$query=SELECT%0A%20%20%60unique_key%60%2C%0A%20%20%60created_date%60%2C%0A%20%20%60closed_date%60%2C%0A%20%20%60agency%60%2C%0A%20%20%60agency_name%60%2C%0A%20%20%60complaint_type%60%2C%0A%20%20%60descriptor%60%2C%0A%20%20%60location_type%60%2C%0A%20%20%60incident_zip%60%2C%0A%20%20%60incident_address%60%2C%0A%20%20%60street_name%60%2C%0A%20%20%60cross_street_1%60%2C%0A%20%20%60cross_street_2%60%2C%0A%20%20%60intersection_street_1%60%2C%0A%20%20%60intersection_street_2%60%2C%0A%20%20%60address_type%60%2C%0A%20%20%60city%60%2C%0A%20%20%60landmark%60%2C%0A%20%20%60facility_type%60%2C%0A%20%20%60status%60%2C%0A%20%20%60due_date%60%2C%0A%20%20%60resolution_description%60%2C%0A%20%20%60resolution_action_updated_date%60%2C%0A%20%20%60community_board%60%2C%0A%20%20%60bbl%60%2C%0A%20%20%60borough%60%2C%0A%20%20%60x_coordinate_state_plane%60%2C%0A%20%20%60y_coordinate_state_plane%60%2C%0A%20%20%60open_data_channel_type%60%2C%0A%20%20%60park_facility_name%60%2C%0A%20%20%60park_borough%60%2C%0A%20%20%60vehicle_type%60%2C%0A%20%20%60taxi_company_borough%60%2C%0A%20%20%60taxi_pick_up_location%60%2C%0A%20%20%60bridge_highway_name%60%2C%0A%20%20%60bridge_highway_direction%60%2C%0A%20%20%60road_ramp%60%2C%0A%20%20%60bridge_highway_segment%60%2C%0A%20%20%60latitude%60%2C%0A%20%20%60longitude%60%2C%0A%20%20%60location%60%0AWHERE%0A%20%20caseless_one_of(%60complaint_type%60%2C%20%22Rodent%22)%0A%20%20AND%20(%60created_date%60%0A%20%20%20%20%20%20%20%20%20BETWEEN%20%222021-01-01T00%3A00%3A00%22%20%3A%3A%20floating_timestamp%0A%20%20%20%20%20%20%20%20%20AND%20%222021-12-31T11%3A59%3A59%22%20%3A%3A%20floating_timestamp)%0AORDER%20BY%20%60created_date%60%20DESC%20NULL%20FIRST%0ALIMIT%20100000%20OFFSET%200";

  try {

    const json2021 = await d3.json(url2021);
    // there were 31615 rows in 2021
    console.log("2021:", json2021);

    const stackedData2021 = d3.rollup(
      json2021.filter(
        (d) =>
          d.borough &&
          d.borough.toLowerCase() !== "undefined" &&
          d.borough.toLowerCase() !== "unspecified"
      ),
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.descriptor
        ),
      (d) => d.borough
    );

    console.log(
      "Stacked Bar Chart by Count of Descriptor per Borough 2021:",
      stackedData2021
    );

    const boroughsBar = Array.from(stackedData2021, ([borough, descriptors]) => ({
      borough,
      descriptors: Array.from(descriptors, ([descriptor, count]) => ({
        descriptor,
        count,
      })),
    }));

    boroughsBar.forEach((b) => {
      b.totalCount = b.descriptors.reduce((sum, desc) => sum + desc.count, 0);
    });

    const keys = Array.from(
      new Set(boroughsBar.flatMap((b) => b.descriptors.map((d) => d.descriptor)))
    );

    const fixedCategories = [
      "Signs of Rodents",
      "Condition Attracting Rodents",
      "Mouse Sighting",
      "Rat Sighting",
    ];

    // Extract unique descriptors from the data
    const allDescriptors = new Set();
    boroughsBar.forEach((borough) => {
      borough.descriptors.forEach((descriptor) => {
        allDescriptors.add(descriptor.descriptor); // Add descriptor to the set
      });
    });

    // Convert the set to an array
    const dynamicCategories = Array.from(allDescriptors);

    // Filter out the fixed categories that are already in the dynamic categories
    const dynamicCategoriesExcludingFixed = dynamicCategories.filter(
      (category) => !fixedCategories.includes(category)
    );

    // Combine the fixed categories with dynamic categories
    const finalCategories = [
      ...fixedCategories,
      ...dynamicCategoriesExcludingFixed,
    ];

    // Create the stack with the combined order of categories
    const stack = d3
      .stack()
      .keys(finalCategories) // Use the combined fixed + dynamic order
      .value(
        (d, key) =>
          d.descriptors.find((desc) => desc.descriptor === key)?.count || 0
      );

    const series = stack(boroughsBar);
    const marginBar = { top: 20, right: 20, bottom: 40, left: 40 };
    const widthBar = parseInt(d3.select("#stacked-bar-charts").style("width"));
    const heightBar = parseInt(d3.select("#stacked-bar-charts").style("height"));
    const maxValueBar = d3.max(series[series.length - 1], (d) => d[1]);

    stackedBarCharts
      .append("text")
      .attr("class", "rodents-2021")
      .attr("x", 0)
      .attr("y", 20)
      .attr("font-size", 15)
      .attr("fill", "black")
      .style("font-weight", "bold")
      .text("Counts by Borough and Descriptor in 2021");

    const xScale = d3
      .scaleBand()
      .domain(boroughsBar.map((b) => b.borough))
      .range([marginBar.left, widthBar - marginBar.right])
      .paddingInner(0.1)
      .paddingOuter(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, BarYGlobalMax])
      //    .domain([0, maxValueBar])
      .range([heightBar - marginBar.top, marginBar.bottom])
      .nice();

    // For Bar Chart
    const BarDefs = d3
      .select("#stacked-bar-charts")
      .append("defs")
      .attr("class", "rodents-2021");

    BarDefs.append("pattern")
      .attr("id", "cheesePattern-2021") // ID to reference the pattern later for Bar Chart
      .attr("width", 2)
      .attr("height", 2)
      .append("image")
      .attr("href", "./assets/squareCheese.svg") // Path to the SVG image
      .attr("width", 300)
      .attr("height", 300);

    const barDescriptorColors = {
      "Rat Sighting": "black",
      "Mouse Sighting": "#d1d3d4",
      "Condition Attracting Rodents": "url(#cheesePattern-2021)",
      "Signs of Rodents": "#f1de00",
    };

    // Example of applying border styles
    const descriptorBorders = {
      "Rat Sighting": "1px solid black",
      "Mouse Sighting": "1px solid gray",
      "Condition Attracting Rodents": "1px solid black", // Border for SVG image
      "Signs of Rodents": "1px solid black",
    };

    // Create your color scale using the descriptor colors
    const colorScaleBar = d3
      .scaleOrdinal()
      .domain(Object.keys(barDescriptorColors)) // Use descriptor keys as the domain
      .range(Object.values(barDescriptorColors));

    const axes_layer = stackedBarCharts.append("g").attr("class", "rodents-2021");
    const bars_layer = stackedBarCharts.append("g").attr("class", "rodents-2021");

    const bars = bars_layer
      .selectAll("g")
      .data(stack(boroughsBar))
      .join("g")
      .attr("fill", (d, i) => colorScaleBar(d.key));

    const stackedTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "stackedTooltip")
      .style("background-color", "white")
      .style("padding", "6px 10px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "5px")
      .style("position", "absolute") // Ensure it's absolutely positioned
      .style("opacity", 0); // Initially hidden

    // Bars and event listeners
    bars
      .selectAll("rect")
      .data((d) => d)
      .join("rect")
      .attr("x", (d) => xScale(d.data.borough))
      .attr("y", (d) => yScale(d[1]))
      .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
      .attr("width", xScale.bandwidth())
      // THIS PART OF THE CODE IS NOT WORKING. IT WON'T DO THE CORRECT STROKES ON THE BARS, FIX LATER
      .attr("fill", (d) => barDescriptorColors[d.descriptor]) // Apply the color based on the descriptor
      .attr("stroke", (d) => descriptorBorders[d.descriptor]) // Apply the border style based on the descriptor
      .on("mouseover", (event, d) => {
        const borough = d.data.borough;
        const descriptor = d.data.descriptors.find(
          (desc) => desc.count === d[1] - d[0]
        ).descriptor;
        const count = d[1] - d[0];

        stackedTooltip
          .style("opacity", 1)
          .style("z-index", 6000) // Ensure it's on top
          .html(
            `${borough
              .split(" ")
              .map(
                (word) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")}<br>${descriptor}<br>${d3.format(",")(count)}`
          )
          .style("left", `${event.pageX + 10}px`) // Add offset for visibility
          .style("top", `${event.pageY + 10}px`) // Add offset for visibility
          .transition()
          .duration(100);

        // Apply custom styles based on the descriptor
        switch (descriptor) {
          case "Condition Attracting Rodents":
            stackedTooltip
              .style("background-color", "#fee459")
              .style("border", "1px solid white")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          case "Rat Sighting":
            stackedTooltip
              .style("background-color", "black")
              .style("border", "1px solid white")
              .style("color", "white")
              .style("line-height", "1.5");
            break;
          case "Mouse Sighting":
            stackedTooltip
              .style("background-color", "#d1d3d4")
              .style("border", "1px solid white")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          case "Signs of Rodents":
            stackedTooltip
              .style("background-color", "#f1de00")
              .style("border", "1px solid black")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          default:
            stackedTooltip
              .style("background-color", "#ffffff") // Default white background
              .style("border", "1px solid #ccc")
              .style("color", "#333")
              .style("line-height", "1.5");
            break;
        }
      })
      .on("mousemove", (event) => {
        stackedTooltip
          .style("left", `${event.pageX + 10}px`) // Add offset for visibility
          .style("top", `${event.pageY + 10}px`); // Add offset for visibility
      })
      .on("mouseout", () => {
        stackedTooltip.transition().duration(100).style("opacity", 0); // Hide tooltip
      });

    // Total Count text labels
    bars_layer
      .selectAll("text")
      .data(boroughsBar)
      .join("text")
      .attr("x", (b) => xScale(b.borough) + xScale.bandwidth() / 2)
      .attr("y", (b) => yScale(b.totalCount) - 5)
      .attr("text-anchor", "middle")
      .html((b) => `Total: ${new Intl.NumberFormat().format(b.totalCount)}`)
      .style("font-size", "10px");

    axes_layer
      .append("g")
      .call(d3.axisLeft(yScale))
      .style("font-family", "Lexend Deca")
      .attr("transform", `translate(${marginBar.left}, 0)`);

    axes_layer
      .append("g")
      .call(d3.axisBottom(xScale))
      .style("font-family", "Lexend Deca")
      .attr("transform", `translate(0, ${heightBar - marginBar.top})`);

    // gotta love stack overflow solving problems for me https://stackoverflow.com/questions/63838288/convert-json-to-geojson-frontend

    const APIUrl2021 = url2021;
    getData2021();

    map.createPane("Zip2021Pane");
    map.getPane("Zip2021Pane").style.zIndex = 20;

    async function getData2021() {
      let mygeojson2021 = { type: "FeatureCollection", features: [] };
      const zipMarkerCount = {}; // Object to keep track of the marker counts by zip code
      const zipClusters = {}; // To hold the marker clusters by zip code

      // Fetch and parse the data
      const Points2021 = await fetch(APIUrl2021)
        .then((response) => response.json())
        .then((data) => {
          for (let point of data) {
            // Ensure latitude and longitude are valid
            if (!point.latitude || !point.longitude) {
              continue;
            }

            // Convert to a GeoJSON feature
            let coordinate = [
              parseFloat(point.longitude),
              parseFloat(point.latitude),
            ];
            let properties = point;
            delete properties.longitude;
            delete properties.latitude;

            let feature = {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: coordinate,
              },
              properties: properties,
            };
            mygeojson2021.features.push(feature);

            // Count the markers by zip code
            const zipCode = point.incident_zip;
            if (zipCode) {
              if (!zipMarkerCount[zipCode]) {
                zipMarkerCount[zipCode] = 0;
              }
              zipMarkerCount[zipCode]++;
            }
          }
        });

      console.log("GeoJson 2021 All Points:", mygeojson2021);
      console.log("2021 Marker Counts by Zip Code:", zipMarkerCount);

      // Create the marker clusters
      for (const feature of mygeojson2021.features) {
        const { coordinates } = feature.geometry;
        const { descriptor, created_date, borough, incident_zip, location_type } =
          feature.properties;

        if (!incident_zip) {
          continue;
        }

        // Define the marker icon based on descriptor
        let markerIcon;
        switch (descriptor) {
          case "Condition Attracting Rodents":
            markerIcon = L.icon({
              iconUrl: "./assets/cheese.svg", // CHEESE
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Rat Sighting":
            markerIcon = L.icon({
              iconUrl: "./assets/rat.svg", // RAT
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Mouse Sighting":
            markerIcon = L.icon({
              iconUrl: "./assets/mouse.svg", // MOUSE
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Signs of Rodents":
            markerIcon = L.icon({
              iconUrl: "./assets/signs.svg", // SIGNS
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          default:
            markerIcon = null; // Leaflet's default marker
            break;
        }

        // Create the marker with the appropriate icon
        const marker = L.marker([coordinates[1], coordinates[0]], {
          icon: markerIcon,
        });
        const popupContent = `
        <div style="display:flex;flex-direction:column;justify-content:center;">
          <div style="margin:0 auto;font-weight:600;">${descriptor}</div>
          <div style="margin:0 auto;font-weight:400;">
            ${new Date(created_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
          </div>
          <div style="margin:0 auto;font-weight:400;">${location_type}</div>
<div style="margin:0 auto;font-weight:400;">
  ${borough
            ? borough
              .split(" ")
              .map(
                (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")
            : "Unknown Borough"
          }, ${incident_zip}
</div>
      `;

        let cleanDescriptor = descriptor.replace(/\s+/g, "-");
        marker.bindPopup(popupContent, { className: cleanDescriptor });

        // Add the marker to the corresponding zip cluster
        if (!zipClusters[incident_zip]) {
          zipClusters[incident_zip] = L.markerClusterGroup();
        }
        zipClusters[incident_zip].addLayer(marker);
      }

      const markerClusterLayer2021 = L.layerGroup();

      markerClusterLayer2021.onAdd = function (map) {
        // Add a class to the layer's container when it is added to the map
        this._map._container.classList.add("Rodents-2021-Cluster");
        L.LayerGroup.prototype.onAdd.call(this, map); // Call the parent method to ensure the layer is added correctly
      };

      // Add markers to the layer
      for (const zip in zipClusters) {
        markerClusterLayer2021.addLayer(zipClusters[zip]);
      }

      // Add GeoJSON layer with dynamic styling based on marker count
      const zipCodeGeoJSONLayer2021 = L.geoJSON(null, {
        style: function (feature) {
          const zipCode = feature.properties.modzcta; // modzcta is the key for zip code
          const markerCount = zipMarkerCount[zipCode] || 0;

          // Define a color scale based on marker count
          let fillColor;
          if (markerCount > 750) {
            fillColor = "darkgoldenrod"; // High count
          } else if (markerCount > 500) {
            fillColor = "goldenrod"; // Medium count
          } else if (markerCount > 250) {
            fillColor = "gold"; // Low count
          } else if (markerCount > 0) {
            fillColor = "palegoldenrod"; // Low count
          } else {
            fillColor = "lightgoldenrodyellow"; // No markers
          }

          return {
            color: "goldenrod", // Border color
            weight: 1, // Border weight
            opacity: 0.5, // Border opacity
            fillColor: fillColor, // Fill color
            fillOpacity: 0.6, // Fill opacity
          };
        },
        onEachFeature: function (feature, layer) {
          // Use getElement() to access the DOM element for the layer
          const element = layer.getElement();
          if (element) {
            element.classList.add("Zip-Areas-2021"); // Add the class to the DOM element
          }
        },
        pane: "Zip2021Pane", // Ensure the GeoJSON uses the correct pane
      });

      // Load GeoJSON shapes for zip codes
      d3.json("./data/Modified_Zip_Code_Tabulation_Areas_(MODZCTA).geojson").then(
        function (geojsonData) {
          zipCodeGeoJSONLayer2021.addData(geojsonData); // Add the GeoJSON data to the layer
        }
      );

      // Add the layers to the global overlayLayers object
      overlayLayers["2021 Rodent Complaints"] = markerClusterLayer2021;
      overlayLayers["2021 Zip Codes"] = zipCodeGeoJSONLayer2021;

      // Update the layer control
      layerControl.addOverlay(markerClusterLayer2021, "2021 Rodent Complaints");
      layerControl.addOverlay(zipCodeGeoJSONLayer2021, "2021 Zip Codes");

      // Optionally, add the layers to the map
      // map.addLayer(markerClusterLayer2021); // Add the marker clusters layer by default
      // map.addLayer(zipCodeGeoJSONLayer2021); // Add the zip code areas layer by default

      map.on('layeradd', function (e) {
        if (e.layer === markerClusterLayer2021) {
          activeLayers.push("2021 Rodent Complaints");
          updateTitle(activeLayers);
        }
        if (e.layer === zipCodeGeoJSONLayer2021) {
          activeLayers.push("2021 Zip Codes");
          updateTitle(activeLayers);
        }
      });

      map.on('layerremove', function (e) {
        if (e.layer === markerClusterLayer2021) {
          const index = activeLayers.indexOf("2021 Rodent Complaints");
          if (index > -1) {
            activeLayers.splice(index, 1); // Remove from array
          }
          updateTitle(activeLayers);
        }
        if (e.layer === zipCodeGeoJSONLayer2021) {
          const index = activeLayers.indexOf("2021 Zip Codes");
          if (index > -1) {
            activeLayers.splice(index, 1); // Remove from array
          }
          updateTitle(activeLayers);
        }
      });


    }


    const timeSeriesData2021 = d3.rollup(
      json2021.filter(
        (d) =>
          d.borough &&
          d.borough.toLowerCase() !== "undefined" &&
          d.borough.toLowerCase() !== "unspecified"
      ),
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.borough
        ),
      (d) => new Date(d.created_date).getMonth()
    );

    console.log("2021 Line Chart with Month by Count:", timeSeriesData2021);

    // Array of month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Map the numeric months to month names
    const months = monthNames; // Now 'months' will be an array of month names

    const boroughsLine = Array.from(
      new Set(
        json2021
          .filter(
            (d) =>
              d.borough &&
              d.borough.toLowerCase() !== "undefined" &&
              d.borough.toLowerCase() !== "unspecified"
          ) // filter out unwanted boroughs
          .map((d) => d.borough) // Get all boroughs
      )
    );

    // Structure the data for each borough in a format suitable for the line chart
    const boroughData = boroughsLine.map((borough) => {
      return {
        borough,
        values: months.map((monthName, monthIndex) => {
          const monthData = timeSeriesData2021.get(monthIndex); // Use monthIndex for rollup
          return {
            month: monthName, // Month name, e.g., 'January'
            count: monthData?.get(borough) || 0, // If no data for a borough in a month, count is 0
          };
        }),
      };
    });

    const marginLine = { top: 20, right: 20, bottom: 40, left: 40 };
    const widthLine = parseInt(d3.select("#line-chart").style("width"));
    const heightLine = parseInt(d3.select("#line-chart").style("height"));

    lineChart
      .append("text")
      .attr("class", "rodents-2021")
      .attr("x", 0)
      .attr("y", 20)
      .attr("font-size", 15)
      .attr("fill", "black")
      .style("font-weight", "bold")
      .text("Counts by Borough per Month in 2021");

    // Append the SVG element to the DOM
    lineChart
      .select("#line-chart")
      .append("svg")
      .attr("class", "rodents-2021")
      .attr("width", widthLine + marginLine.left + marginLine.right)
      .attr("height", heightLine + marginLine.top + marginLine.bottom)
      .append("g")
      .attr("transform", `translate(${marginLine.left},${marginLine.top})`);

    // Set up the x and y scales
    const x = d3
      .scaleBand()
      .domain(months)
      .range([marginLine.left, widthLine - marginLine.right])
      .padding(0.1); // Padding between bars (or in this case, data points)

    const y = d3
      .scaleLinear()
      .domain([0, LineYGlobalMax])
      //    .domain([0, d3.max(boroughData, (d) => d3.max(d.values, (v) => v.count))])
      .nice()
      .range([heightLine - marginLine.top, marginLine.bottom]);

    const boroughColorMapping = {
      MANHATTAN: "#EE352E",
      BROOKLYN: "#FCCC0A",
      QUEENS: "#B933AD",
      BRONX: "#00933C",
      "STATEN ISLAND": "#0078C6",
    };

    const color = d3
      .scaleOrdinal()
      .domain(Object.keys(boroughColorMapping)) // Use borough names as the domain
      .range(Object.values(boroughColorMapping)); // Use hex colors as the range

    const lineTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "stackedTooltip")
      .style("background-color", "white")
      .style("padding", "6px 10px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "5px")
      .style("position", "absolute") // Ensure it's absolutely positioned
      .style("opacity", 0); // Initially hidden

    lineChart
      .append("g")
      .attr("class", "x-axis")
      .attr("class", "rodents-2021")
      .attr("transform", `translate(0, ${heightLine - marginLine.top})`)
      .style("font-family", "Lexend Deca")
      .call(
        d3.axisBottom(x).tickFormat(function (d) {
          // Take the first 3 characters of the month name
          return d.slice(0, 3);
        })
      );

    lineChart
      .append("g")
      .attr("class", "y-axis")
      .attr("class", "rodents-2021")
      .attr("transform", `translate(${marginLine.left}, 0)`)
      .style("font-family", "Lexend Deca")
      .call(d3.axisLeft(y));

    // Define the line generator
    const line = d3
      .line()
      .x((d) => x(d.month) + x.bandwidth() / 2) // Position by month
      .y((d) => y(d.count)); // Position by count

    // Draw lines for each borough
    boroughData.forEach((borough) => {
      // Draw the line for the borough
      lineChart
        .append("path")
        .data([borough.values]) // Use the borough's month-count data
        .attr("class", "line")
        .attr("class", "rodents-2021")
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", color(borough.borough))
        .attr("stroke-width", 2);

      // Add points (circles) for each month on the line
      lineChart
        .selectAll(".point-" + borough.borough)
        .data(borough.values) // Use the borough's month-count data
        .enter()
        .append("circle")
        .attr("class", "point")
        .attr("class", "rodents-2021")
        .attr("cx", (d) => x(d.month) + x.bandwidth() / 2) // Position by month
        .attr("cy", (d) => y(d.count)) // Position by count
        .attr("r", 5) // Radius of the points
        .attr("fill", color(borough.borough)) // Color the points according to the borough
        .attr("stroke", "white") // White border around the points
        .attr("stroke-width", 1) // Stroke width for the border
        .on("mouseover", (event, d) => {
          // Show the tooltip on hover
          lineTooltip.style("opacity", 0.9).style("z-index", 6000); // Ensure it's on top
          lineTooltip
            .html(
              `${borough.borough
                .split(" ")
                .map(
                  (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ")}<br>${d.month}: ${d3.format(",")(d.count)}`
            )
            .style("left", event.pageX + 10 + "px")
            .style("top", event.pageY + 10 + "px");
        })
        .on("mousemove", (event) => {
          lineTooltip
            .style("left", `${event.pageX + 10}px`) // Add offset for visibility
            .style("top", `${event.pageY + 10}px`); // Add offset for visibility
        })
        .on("mouseout", () => {
          lineTooltip.transition().duration(100).style("opacity", 0); // Hide tooltip
        });
    });

    // (Optional) Add tooltips to display the exact count on hover
    lineChart
      .selectAll(".point")
      .append("title")
      .text((d) => `${d.month}: ${d.count}`);

    // Add a legend
    const legendLine = lineChart
      .selectAll(".legend")
      .data(boroughData)
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", (d, i) => `translate(0, ${i * 20})`);
    //console.log(boroughData);

    // Add lines for each borough to the legend
    legendLine
      .append("line")
      .attr("x1", marginLine.left + marginLine.right - 9) // Starting point of the line
      .attr("x2", marginLine.left + marginLine.right + 12) // Ending point of the line
      .attr("y1", marginLine.bottom) // Positioning the line vertically (aligned with text)
      .attr("y2", marginLine.bottom) // Same as y1 to keep it horizontal
      .attr("stroke", (d) => color(d.borough)) // Set line color based on borough
      .attr("stroke-width", 2); // Set line width

    legendLine
      .append("circle")
      .attr("class", "point")
      .attr("cx", marginLine.left + marginLine.right + 1.5)
      .attr("cy", marginLine.bottom)
      .attr("r", 5) // Radius of the points
      .attr("fill", (d) => color(d.borough)) // Use 'd' to correctly color the circle based on the borough
      .attr("stroke", "white") // White border around the points
      .attr("stroke-width", 1); // Stroke width for the border

    legendLine
      .append("text")
      .attr("x", marginLine.left + marginLine.right + 21)
      .attr("y", marginLine.bottom)
      .attr("dy", ".35em")
      .attr("text-anchor", "beginning")
      .style("font-size", "10px")
      .text((d) => d.borough);

    const LocationType2021 = d3.rollup(
      json2021,
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.descriptor
        ),
      (d) => d.location_type
    );

    console.log("2021 Treemap Location Type and Count:", LocationType2021);

    const root = {
      name: "Rodent Complaints", // Root level name
      children: Array.from(LocationType2021.entries()).map(
        ([locationType, descriptors]) => {
          // Calculate total value for each locationType
          const totalValue = Array.from(descriptors.values()).reduce(
            (sum, count) => sum + count,
            0
          );

          return {
            name: locationType,
            total: totalValue, // Add the total count here
            children: Array.from(descriptors.entries()).map(
              ([descriptor, count]) => ({
                name: descriptor,
                value: count,
              })
            ),
          };
        }
      ),
    };

    // console.log("Root for the Tree Map:", root);

    const cheeseTree = d3
      .select("#tree-map")
      .append("svg") // Create the SVG element
      .style("width", `${window.innerWidth / 2}px`)
      .style("height", `${window.innerHeight / 2 - 90}px`)
      .attr("class", "rodents-2021");

    const hierarchy = d3
      .hierarchy(root)
      .sum((d) => d.value) // Sum the values to calculate the size of each block in the tree map
      .sort((a, b) => a.value - b.value); // Optional: Sort in descending order by value

    // Step 4: Set up the dimensions for the tree map
    const marginTree = { top: 40, right: 20, bottom: 40, left: 40 };
    const widthTree = parseInt(d3.select("#tree-map").style("width"));
    const heightTree = parseInt(d3.select("#tree-map").style("height"));

    // Step 5: Create the tree map layout
    const treemap = d3
      .treemap()
      .size([widthTree - marginTree.right, heightTree - marginTree.bottom])
      .padding(1);

    // Step 6: Apply the layout to the hierarchy data
    treemap(hierarchy);

    const colorScaleTree = d3
      .scaleLinear()
      .domain([
        d3.min(hierarchy.children, (d) => d.value),
        d3.max(hierarchy.children, (d) => d.value),
      ]) // Domain based on the min and max value
      .range(["darkgoldenrod", "palegoldenrod"]); // Color range

    const treeTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background", "rgba(0, 0, 0, 0.7)")
      .style("color", "white")
      .style("padding", "5px 10px 4px 10px")
      .style("border-radius", "3px")
      .style("font-size", "15px")
      .style("z-index", 6000);

    // Function to show descriptors for a clicked locationType
    function showDescriptors(locationTypeData) {
      // Clear the existing chart
      cheeseTree.selectAll("*").remove();

      // Create a new hierarchy for the descriptors
      const descriptorHierarchy = d3
        .hierarchy({
          name: locationTypeData.data.name, // Keep the locationType name
          children: locationTypeData.children.map((d) => ({
            name: d.data.name, // Keep the descriptor name
            value: d.data.value, // Keep the descriptor value (count)
          })),
        })
        .sum((d) => d.value) // Sum the values to calculate the size of each block
        .sort((a, b) => a.value - b.value); // Sort by value

      // Apply the treemap layout to the descriptors
      treemap(descriptorHierarchy);

      cheeseTree
        .append("text")
        .attr("x", 0)
        .attr("y", 30)
        .attr("font-size", 15)
        .attr("fill", "black")
        .style("font-weight", "bold")
        .text(`Descriptors for ${locationTypeData.data.name}`);

      // Add descriptors to the tree chart
      const descriptors = cheeseTree
        .selectAll("g")
        .data(descriptorHierarchy.leaves()) // Use leaves here to get the actual descriptors
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${d.x0},${d.y0 + marginTree.top})`);

      // For Tree Chart
      const TreeDefs = d3
        .select("#tree-map")
        .append("defs")
        .attr("class", "rodents-2021");

      TreeDefs.append("pattern")
        .attr("id", "cheesePattern-Big-2021") // ID to reference the pattern later for Tree Chart
        .attr("width", 2)
        .attr("height", 2)
        .append("image")
        .attr("href", "./assets/squareCheese-Big.svg") // Path to the SVG image
        .attr("width", 1800)
        .attr("height", 1800);

      const treeDescriptorColors = {
        "Rat Sighting": "black", // Solid color
        "Mouse Sighting": "#d1d3d4", // Gray color
        "Condition Attracting Rodents": "url(#cheesePattern-Big-2021)", // Reference the Tree Chart Pattern
        "Signs of Rodents": "#f1de00", // Yellow color
      };

      const TreeColorScale = d3
        .scaleOrdinal()
        .domain(Object.keys(treeDescriptorColors)) // Descriptor keys as the domain
        .range(Object.values(treeDescriptorColors)); // Colors/patterns as the range

      descriptors
        .append("rect")
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0)
        .attr("fill", (d) => TreeColorScale(d.data.name));

      descriptors
        .append("text")
        .attr("x", 5)
        .attr("y", 15)
        .attr("font-size", 12)
        .attr("fill", function (d) {
          // Apply different colors based on descriptor name
          switch (d.data.name) {
            case "Rat Sighting":
              return "white";
            default:
              return "black"; // Default color
          }
        })
        .text((d) => `${d.data.name}: ${d3.format(",")(d.data.value)}`);

      // Optional: Add a "Back" button to go back to the full view
      cheeseTree
        .append("text")
        .attr("x", widthTree - marginTree.left - 3)
        .attr("y", 30)
        .attr("font-size", 10)
        .attr("fill", "goldenrod")
        .style("cursor", "pointer")
        .text("Back")
        .on("click", function () {
          // Go back to the full view by clearing the chart and redrawing the main treemap
          cheeseTree.selectAll("*").remove();
          drawMainTreeMap();
        });
    }

    // Redraw the main treemap (locationType level)
    function drawMainTreeMap() {
      treemap(hierarchy);

      cheeseTree
        .append("text")
        .attr("class", "rodents-2021")
        .attr("x", 0)
        .attr("y", 30)
        .attr("font-size", 15)
        .attr("fill", "black")
        .style("font-weight", "bold")
        .text("Location Type in 2021");

      const locationTypes = cheeseTree
        .selectAll("g")
        .data(hierarchy.children)
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${d.x0},${d.y0 + marginTree.top})`)
        .on("click", function (event, d) {
          treeTooltip.style("visibility", "hidden");
          // When a locationType is clicked, show its descriptors
          showDescriptors(d);
        })
        .on("mouseover", function (event, d) {
          // Show tooltip on hover
          treeTooltip
            .style("visibility", "visible")
            .html(`${d.data.name}: ${d3.format(",")(d.data.total)}`);
        })
        .on("mousemove", function (event) {
          // Position the tooltip near the mouse pointer
          treeTooltip
            .style("top", event.pageY + 10 + "px")
            .style("left", event.pageX + 10 + "px");
        })
        .on("mouseout", function () {
          // Hide the tooltip when mouse leaves
          treeTooltip.style("visibility", "hidden");
        });

      locationTypes
        .append("rect")
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0)
        .attr("fill", (d) => colorScaleTree(d.value));
    }

    // Initial drawing of the main treemap
    drawMainTreeMap();

    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("2021 Loaded after delay.");

  } catch (error) {
    console.error("Error loading or processing data for 2021:", error);
  }


  d3.selectAll(".rodents-2021").style("display", "none");

})();

/* ----- */
/* -------------------------------------- ALL API QUERIES AND VISUALIZATIONS SPECIFIC TO 2022 -------------------------------------- */
/* ----- */

(async function Rodents2022() {
  const url2022 =
    "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$query=SELECT%0A%20%20%60unique_key%60%2C%0A%20%20%60created_date%60%2C%0A%20%20%60closed_date%60%2C%0A%20%20%60agency%60%2C%0A%20%20%60agency_name%60%2C%0A%20%20%60complaint_type%60%2C%0A%20%20%60descriptor%60%2C%0A%20%20%60location_type%60%2C%0A%20%20%60incident_zip%60%2C%0A%20%20%60incident_address%60%2C%0A%20%20%60street_name%60%2C%0A%20%20%60cross_street_1%60%2C%0A%20%20%60cross_street_2%60%2C%0A%20%20%60intersection_street_1%60%2C%0A%20%20%60intersection_street_2%60%2C%0A%20%20%60address_type%60%2C%0A%20%20%60city%60%2C%0A%20%20%60landmark%60%2C%0A%20%20%60facility_type%60%2C%0A%20%20%60status%60%2C%0A%20%20%60due_date%60%2C%0A%20%20%60resolution_description%60%2C%0A%20%20%60resolution_action_updated_date%60%2C%0A%20%20%60community_board%60%2C%0A%20%20%60bbl%60%2C%0A%20%20%60borough%60%2C%0A%20%20%60x_coordinate_state_plane%60%2C%0A%20%20%60y_coordinate_state_plane%60%2C%0A%20%20%60open_data_channel_type%60%2C%0A%20%20%60park_facility_name%60%2C%0A%20%20%60park_borough%60%2C%0A%20%20%60vehicle_type%60%2C%0A%20%20%60taxi_company_borough%60%2C%0A%20%20%60taxi_pick_up_location%60%2C%0A%20%20%60bridge_highway_name%60%2C%0A%20%20%60bridge_highway_direction%60%2C%0A%20%20%60road_ramp%60%2C%0A%20%20%60bridge_highway_segment%60%2C%0A%20%20%60latitude%60%2C%0A%20%20%60longitude%60%2C%0A%20%20%60location%60%0AWHERE%0A%20%20caseless_one_of(%60complaint_type%60%2C%20%22Rodent%22)%0A%20%20AND%20(%60created_date%60%0A%20%20%20%20%20%20%20%20%20BETWEEN%20%222022-01-01T00%3A00%3A00%22%20%3A%3A%20floating_timestamp%0A%20%20%20%20%20%20%20%20%20AND%20%222022-12-31T11%3A59%3A59%22%20%3A%3A%20floating_timestamp)%0AORDER%20BY%20%60created_date%60%20DESC%20NULL%20FIRST%0ALIMIT%20100000%20OFFSET%200";

  try {

    const json2022 = await d3.json(url2022);
    // there were 31615 rows in 2022
    console.log("2022:", json2022);

    const stackedData2022 = d3.rollup(
      json2022.filter(
        (d) =>
          d.borough &&
          d.borough.toLowerCase() !== "undefined" &&
          d.borough.toLowerCase() !== "unspecified"
      ),
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.descriptor
        ),
      (d) => d.borough
    );

    console.log(
      "Stacked Bar Chart by Count of Descriptor per Borough 2022:",
      stackedData2022
    );

    const boroughsBar = Array.from(stackedData2022, ([borough, descriptors]) => ({
      borough,
      descriptors: Array.from(descriptors, ([descriptor, count]) => ({
        descriptor,
        count,
      })),
    }));

    boroughsBar.forEach((b) => {
      b.totalCount = b.descriptors.reduce((sum, desc) => sum + desc.count, 0);
    });

    const keys = Array.from(
      new Set(boroughsBar.flatMap((b) => b.descriptors.map((d) => d.descriptor)))
    );

    const fixedCategories = [
      "Signs of Rodents",
      "Condition Attracting Rodents",
      "Mouse Sighting",
      "Rat Sighting",
    ];

    // Extract unique descriptors from the data
    const allDescriptors = new Set();
    boroughsBar.forEach((borough) => {
      borough.descriptors.forEach((descriptor) => {
        allDescriptors.add(descriptor.descriptor); // Add descriptor to the set
      });
    });

    // Convert the set to an array
    const dynamicCategories = Array.from(allDescriptors);

    // Filter out the fixed categories that are already in the dynamic categories
    const dynamicCategoriesExcludingFixed = dynamicCategories.filter(
      (category) => !fixedCategories.includes(category)
    );

    // Combine the fixed categories with dynamic categories
    const finalCategories = [
      ...fixedCategories,
      ...dynamicCategoriesExcludingFixed,
    ];

    // Create the stack with the combined order of categories
    const stack = d3
      .stack()
      .keys(finalCategories) // Use the combined fixed + dynamic order
      .value(
        (d, key) =>
          d.descriptors.find((desc) => desc.descriptor === key)?.count || 0
      );

    const series = stack(boroughsBar);
    const marginBar = { top: 20, right: 20, bottom: 40, left: 40 };
    const widthBar = parseInt(d3.select("#stacked-bar-charts").style("width"));
    const heightBar = parseInt(d3.select("#stacked-bar-charts").style("height"));
    const maxValueBar = d3.max(series[series.length - 1], (d) => d[1]);

    stackedBarCharts
      .append("text")
      .attr("class", "rodents-2022")
      .attr("x", 0)
      .attr("y", 20)
      .attr("font-size", 15)
      .attr("fill", "black")
      .style("font-weight", "bold")
      .text("Counts by Borough and Descriptor in 2022");

    const xScale = d3
      .scaleBand()
      .domain(boroughsBar.map((b) => b.borough))
      .range([marginBar.left, widthBar - marginBar.right])
      .paddingInner(0.1)
      .paddingOuter(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, BarYGlobalMax])
      //    .domain([0, maxValueBar])
      .range([heightBar - marginBar.top, marginBar.bottom])
      .nice();

    // For Bar Chart
    const BarDefs = d3
      .select("#stacked-bar-charts")
      .append("defs")
      .attr("class", "rodents-2022");

    BarDefs.append("pattern")
      .attr("id", "cheesePattern-2022") // ID to reference the pattern later for Bar Chart
      .attr("width", 2)
      .attr("height", 2)
      .append("image")
      .attr("href", "./assets/squareCheese.svg") // Path to the SVG image
      .attr("width", 300)
      .attr("height", 300);

    const barDescriptorColors = {
      "Rat Sighting": "black",
      "Mouse Sighting": "#d1d3d4",
      "Condition Attracting Rodents": "url(#cheesePattern-2022)",
      "Signs of Rodents": "#f1de00",
    };

    // Example of applying border styles
    const descriptorBorders = {
      "Rat Sighting": "1px solid black",
      "Mouse Sighting": "1px solid gray",
      "Condition Attracting Rodents": "1px solid black", // Border for SVG image
      "Signs of Rodents": "1px solid black",
    };

    // Create your color scale using the descriptor colors
    const colorScaleBar = d3
      .scaleOrdinal()
      .domain(Object.keys(barDescriptorColors)) // Use descriptor keys as the domain
      .range(Object.values(barDescriptorColors));

    const axes_layer = stackedBarCharts.append("g").attr("class", "rodents-2022");
    const bars_layer = stackedBarCharts.append("g").attr("class", "rodents-2022");

    const bars = bars_layer
      .selectAll("g")
      .data(stack(boroughsBar))
      .join("g")
      .attr("fill", (d, i) => colorScaleBar(d.key));

    const stackedTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "stackedTooltip")
      .style("background-color", "white")
      .style("padding", "6px 10px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "5px")
      .style("position", "absolute") // Ensure it's absolutely positioned
      .style("opacity", 0); // Initially hidden

    // Bars and event listeners
    bars
      .selectAll("rect")
      .data((d) => d)
      .join("rect")
      .attr("x", (d) => xScale(d.data.borough))
      .attr("y", (d) => yScale(d[1]))
      .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
      .attr("width", xScale.bandwidth())
      // THIS PART OF THE CODE IS NOT WORKING. IT WON'T DO THE CORRECT STROKES ON THE BARS, FIX LATER
      .attr("fill", (d) => barDescriptorColors[d.descriptor]) // Apply the color based on the descriptor
      .attr("stroke", (d) => descriptorBorders[d.descriptor]) // Apply the border style based on the descriptor
      .on("mouseover", (event, d) => {
        const borough = d.data.borough;
        const descriptor = d.data.descriptors.find(
          (desc) => desc.count === d[1] - d[0]
        ).descriptor;
        const count = d[1] - d[0];

        stackedTooltip
          .style("opacity", 1)
          .style("z-index", 6000) // Ensure it's on top
          .html(
            `${borough
              .split(" ")
              .map(
                (word) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")}<br>${descriptor}<br>${d3.format(",")(count)}`
          )
          .style("left", `${event.pageX + 10}px`) // Add offset for visibility
          .style("top", `${event.pageY + 10}px`) // Add offset for visibility
          .transition()
          .duration(100);

        // Apply custom styles based on the descriptor
        switch (descriptor) {
          case "Condition Attracting Rodents":
            stackedTooltip
              .style("background-color", "#fee459")
              .style("border", "1px solid white")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          case "Rat Sighting":
            stackedTooltip
              .style("background-color", "black")
              .style("border", "1px solid white")
              .style("color", "white")
              .style("line-height", "1.5");
            break;
          case "Mouse Sighting":
            stackedTooltip
              .style("background-color", "#d1d3d4")
              .style("border", "1px solid white")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          case "Signs of Rodents":
            stackedTooltip
              .style("background-color", "#f1de00")
              .style("border", "1px solid black")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          default:
            stackedTooltip
              .style("background-color", "#ffffff") // Default white background
              .style("border", "1px solid #ccc")
              .style("color", "#333")
              .style("line-height", "1.5");
            break;
        }
      })
      .on("mousemove", (event) => {
        stackedTooltip
          .style("left", `${event.pageX + 10}px`) // Add offset for visibility
          .style("top", `${event.pageY + 10}px`); // Add offset for visibility
      })
      .on("mouseout", () => {
        stackedTooltip.transition().duration(100).style("opacity", 0); // Hide tooltip
      });

    // Total Count text labels
    bars_layer
      .selectAll("text")
      .data(boroughsBar)
      .join("text")
      .attr("x", (b) => xScale(b.borough) + xScale.bandwidth() / 2)
      .attr("y", (b) => yScale(b.totalCount) - 5)
      .attr("text-anchor", "middle")
      .html((b) => `Total: ${new Intl.NumberFormat().format(b.totalCount)}`)
      .style("font-size", "10px");

    axes_layer
      .append("g")
      .call(d3.axisLeft(yScale))
      .style("font-family", "Lexend Deca")
      .attr("transform", `translate(${marginBar.left}, 0)`);

    axes_layer
      .append("g")
      .call(d3.axisBottom(xScale))
      .style("font-family", "Lexend Deca")
      .attr("transform", `translate(0, ${heightBar - marginBar.top})`);

    // gotta love stack overflow solving problems for me https://stackoverflow.com/questions/63838288/convert-json-to-geojson-frontend

    const APIUrl2022 = url2022;
    getData2022();

    map.createPane("Zip2022Pane");
    map.getPane("Zip2022Pane").style.zIndex = 20;

    async function getData2022() {
      let mygeojson2022 = { type: "FeatureCollection", features: [] };
      const zipMarkerCount = {}; // Object to keep track of the marker counts by zip code
      const zipClusters = {}; // To hold the marker clusters by zip code

      // Fetch and parse the data
      const Points2022 = await fetch(APIUrl2022)
        .then((response) => response.json())
        .then((data) => {
          for (let point of data) {
            // Ensure latitude and longitude are valid
            if (!point.latitude || !point.longitude) {
              continue;
            }

            // Convert to a GeoJSON feature
            let coordinate = [
              parseFloat(point.longitude),
              parseFloat(point.latitude),
            ];
            let properties = point;
            delete properties.longitude;
            delete properties.latitude;

            let feature = {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: coordinate,
              },
              properties: properties,
            };
            mygeojson2022.features.push(feature);

            // Count the markers by zip code
            const zipCode = point.incident_zip;
            if (zipCode) {
              if (!zipMarkerCount[zipCode]) {
                zipMarkerCount[zipCode] = 0;
              }
              zipMarkerCount[zipCode]++;
            }
          }
        });

      console.log("GeoJson 2022 All Points:", mygeojson2022);
      console.log("2022 Marker Counts by Zip Code:", zipMarkerCount);

      // Create the marker clusters
      for (const feature of mygeojson2022.features) {
        const { coordinates } = feature.geometry;
        const { descriptor, created_date, borough, incident_zip, location_type } =
          feature.properties;

        if (!incident_zip) {
          continue;
        }

        // Define the marker icon based on descriptor
        let markerIcon;
        switch (descriptor) {
          case "Condition Attracting Rodents":
            markerIcon = L.icon({
              iconUrl: "./assets/cheese.svg", // CHEESE
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Rat Sighting":
            markerIcon = L.icon({
              iconUrl: "./assets/rat.svg", // RAT
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Mouse Sighting":
            markerIcon = L.icon({
              iconUrl: "./assets/mouse.svg", // MOUSE
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Signs of Rodents":
            markerIcon = L.icon({
              iconUrl: "./assets/signs.svg", // SIGNS
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          default:
            markerIcon = null; // Leaflet's default marker
            break;
        }

        // Create the marker with the appropriate icon
        const marker = L.marker([coordinates[1], coordinates[0]], {
          icon: markerIcon,
        });
        const popupContent = `
        <div style="display:flex;flex-direction:column;justify-content:center;">
          <div style="margin:0 auto;font-weight:600;">${descriptor}</div>
          <div style="margin:0 auto;font-weight:400;">
            ${new Date(created_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
          </div>
          <div style="margin:0 auto;font-weight:400;">${location_type}</div>
          <div style="margin:0 auto;font-weight:400;">${borough
            .split(" ")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ")}, ${incident_zip}</div>
        </div>
      `;

        let cleanDescriptor = descriptor.replace(/\s+/g, "-");
        marker.bindPopup(popupContent, { className: cleanDescriptor });

        // Add the marker to the corresponding zip cluster
        if (!zipClusters[incident_zip]) {
          zipClusters[incident_zip] = L.markerClusterGroup();
        }
        zipClusters[incident_zip].addLayer(marker);
      }

      const markerClusterLayer2022 = L.layerGroup();

      markerClusterLayer2022.onAdd = function (map) {
        // Add a class to the layer's container when it is added to the map
        this._map._container.classList.add("Rodents-2022-Cluster");
        L.LayerGroup.prototype.onAdd.call(this, map); // Call the parent method to ensure the layer is added correctly
      };

      // Add markers to the layer
      for (const zip in zipClusters) {
        markerClusterLayer2022.addLayer(zipClusters[zip]);
      }

      // Add GeoJSON layer with dynamic styling based on marker count
      const zipCodeGeoJSONLayer2022 = L.geoJSON(null, {
        style: function (feature) {
          const zipCode = feature.properties.modzcta; // modzcta is the key for zip code
          const markerCount = zipMarkerCount[zipCode] || 0;

          // Define a color scale based on marker count
          let fillColor;
          if (markerCount > 750) {
            fillColor = "darkgoldenrod"; // High count
          } else if (markerCount > 500) {
            fillColor = "goldenrod"; // Medium count
          } else if (markerCount > 250) {
            fillColor = "gold"; // Low count
          } else if (markerCount > 0) {
            fillColor = "palegoldenrod"; // Low count
          } else {
            fillColor = "lightgoldenrodyellow"; // No markers
          }

          return {
            color: "goldenrod", // Border color
            weight: 1, // Border weight
            opacity: 0.5, // Border opacity
            fillColor: fillColor, // Fill color
            fillOpacity: 0.6, // Fill opacity
          };
        },
        onEachFeature: function (feature, layer) {
          // Use getElement() to access the DOM element for the layer
          const element = layer.getElement();
          if (element) {
            element.classList.add("Zip-Areas-2022"); // Add the class to the DOM element
          }
        },
        pane: "Zip2022Pane", // Ensure the GeoJSON uses the correct pane
      });

      // Load GeoJSON shapes for zip codes
      d3.json("./data/Modified_Zip_Code_Tabulation_Areas_(MODZCTA).geojson").then(
        function (geojsonData) {
          zipCodeGeoJSONLayer2022.addData(geojsonData); // Add the GeoJSON data to the layer
        }
      );

      // Add the layers to the global overlayLayers object
      overlayLayers["2022 Rodent Complaints"] = markerClusterLayer2022;
      overlayLayers["2022 Zip Codes"] = zipCodeGeoJSONLayer2022;

      // Update the layer control
      layerControl.addOverlay(markerClusterLayer2022, "2022 Rodent Complaints");
      layerControl.addOverlay(zipCodeGeoJSONLayer2022, "2022 Zip Codes");

      // Optionally, add the layers to the map
      // map.addLayer(markerClusterLayer2022); // Add the marker clusters layer by default
      // map.addLayer(zipCodeGeoJSONLayer2022); // Add the zip code areas layer by default

      map.on('layeradd', function (e) {
        if (e.layer === markerClusterLayer2022) {
          activeLayers.push("2022 Rodent Complaints");
          updateTitle(activeLayers);
        }
        if (e.layer === zipCodeGeoJSONLayer2022) {
          activeLayers.push("2022 Zip Codes");
          updateTitle(activeLayers);
        }
      });

      map.on('layerremove', function (e) {
        if (e.layer === markerClusterLayer2022) {
          const index = activeLayers.indexOf("2022 Rodent Complaints");
          if (index > -1) {
            activeLayers.splice(index, 1); // Remove from array
          }
          updateTitle(activeLayers);
        }
        if (e.layer === zipCodeGeoJSONLayer2022) {
          const index = activeLayers.indexOf("2022 Zip Codes");
          if (index > -1) {
            activeLayers.splice(index, 1); // Remove from array
          }
          updateTitle(activeLayers);
        }
      });


    }



    const timeSeriesData2022 = d3.rollup(
      json2022.filter(
        (d) =>
          d.borough &&
          d.borough.toLowerCase() !== "undefined" &&
          d.borough.toLowerCase() !== "unspecified"
      ),
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.borough
        ),
      (d) => new Date(d.created_date).getMonth()
    );

    console.log("2022 Line Chart with Month by Count:", timeSeriesData2022);

    // Array of month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Map the numeric months to month names
    const months = monthNames; // Now 'months' will be an array of month names

    const boroughsLine = Array.from(
      new Set(
        json2022
          .filter(
            (d) =>
              d.borough &&
              d.borough.toLowerCase() !== "undefined" &&
              d.borough.toLowerCase() !== "unspecified"
          ) // filter out unwanted boroughs
          .map((d) => d.borough) // Get all boroughs
      )
    );

    // Structure the data for each borough in a format suitable for the line chart
    const boroughData = boroughsLine.map((borough) => {
      return {
        borough,
        values: months.map((monthName, monthIndex) => {
          const monthData = timeSeriesData2022.get(monthIndex); // Use monthIndex for rollup
          return {
            month: monthName, // Month name, e.g., 'January'
            count: monthData?.get(borough) || 0, // If no data for a borough in a month, count is 0
          };
        }),
      };
    });

    const marginLine = { top: 20, right: 20, bottom: 40, left: 40 };
    const widthLine = parseInt(d3.select("#line-chart").style("width"));
    const heightLine = parseInt(d3.select("#line-chart").style("height"));

    lineChart
      .append("text")
      .attr("class", "rodents-2022")
      .attr("x", 0)
      .attr("y", 20)
      .attr("font-size", 15)
      .attr("fill", "black")
      .style("font-weight", "bold")
      .text("Counts by Borough per Month in 2022");

    // Append the SVG element to the DOM
    lineChart
      .select("#line-chart")
      .append("svg")
      .attr("class", "rodents-2022")
      .attr("width", widthLine + marginLine.left + marginLine.right)
      .attr("height", heightLine + marginLine.top + marginLine.bottom)
      .append("g")
      .attr("transform", `translate(${marginLine.left},${marginLine.top})`);

    // Set up the x and y scales
    const x = d3
      .scaleBand()
      .domain(months)
      .range([marginLine.left, widthLine - marginLine.right])
      .padding(0.1); // Padding between bars (or in this case, data points)

    const y = d3
      .scaleLinear()
      .domain([0, LineYGlobalMax])
      //    .domain([0, d3.max(boroughData, (d) => d3.max(d.values, (v) => v.count))])
      .nice()
      .range([heightLine - marginLine.top, marginLine.bottom]);

    const boroughColorMapping = {
      MANHATTAN: "#EE352E",
      BROOKLYN: "#FCCC0A",
      QUEENS: "#B933AD",
      BRONX: "#00933C",
      "STATEN ISLAND": "#0078C6",
    };

    const color = d3
      .scaleOrdinal()
      .domain(Object.keys(boroughColorMapping)) // Use borough names as the domain
      .range(Object.values(boroughColorMapping)); // Use hex colors as the range

    const lineTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "stackedTooltip")
      .style("background-color", "white")
      .style("padding", "6px 10px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "5px")
      .style("position", "absolute") // Ensure it's absolutely positioned
      .style("opacity", 0); // Initially hidden

    lineChart
      .append("g")
      .attr("class", "x-axis")
      .attr("class", "rodents-2022")
      .attr("transform", `translate(0, ${heightLine - marginLine.top})`)
      .style("font-family", "Lexend Deca")
      .call(
        d3.axisBottom(x).tickFormat(function (d) {
          // Take the first 3 characters of the month name
          return d.slice(0, 3);
        })
      );

    lineChart
      .append("g")
      .attr("class", "y-axis")
      .attr("class", "rodents-2022")
      .attr("transform", `translate(${marginLine.left}, 0)`)
      .style("font-family", "Lexend Deca")
      .call(d3.axisLeft(y));

    // Define the line generator
    const line = d3
      .line()
      .x((d) => x(d.month) + x.bandwidth() / 2) // Position by month
      .y((d) => y(d.count)); // Position by count

    // Draw lines for each borough
    boroughData.forEach((borough) => {
      // Draw the line for the borough
      lineChart
        .append("path")
        .data([borough.values]) // Use the borough's month-count data
        .attr("class", "line")
        .attr("class", "rodents-2022")
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", color(borough.borough))
        .attr("stroke-width", 2);

      // Add points (circles) for each month on the line
      lineChart
        .selectAll(".point-" + borough.borough)
        .data(borough.values) // Use the borough's month-count data
        .enter()
        .append("circle")
        .attr("class", "point")
        .attr("class", "rodents-2022")
        .attr("cx", (d) => x(d.month) + x.bandwidth() / 2) // Position by month
        .attr("cy", (d) => y(d.count)) // Position by count
        .attr("r", 5) // Radius of the points
        .attr("fill", color(borough.borough)) // Color the points according to the borough
        .attr("stroke", "white") // White border around the points
        .attr("stroke-width", 1) // Stroke width for the border
        .on("mouseover", (event, d) => {
          // Show the tooltip on hover
          lineTooltip.style("opacity", 0.9).style("z-index", 6000); // Ensure it's on top
          lineTooltip
            .html(
              `${borough.borough
                .split(" ")
                .map(
                  (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ")}<br>${d.month}: ${d3.format(",")(d.count)}`
            )
            .style("left", event.pageX + 10 + "px")
            .style("top", event.pageY + 10 + "px");
        })
        .on("mousemove", (event) => {
          lineTooltip
            .style("left", `${event.pageX + 10}px`) // Add offset for visibility
            .style("top", `${event.pageY + 10}px`); // Add offset for visibility
        })
        .on("mouseout", () => {
          lineTooltip.transition().duration(100).style("opacity", 0); // Hide tooltip
        });
    });

    // (Optional) Add tooltips to display the exact count on hover
    lineChart
      .selectAll(".point")
      .append("title")
      .text((d) => `${d.month}: ${d.count}`);

    // Add a legend
    const legendLine = lineChart
      .selectAll(".legend")
      .data(boroughData)
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", (d, i) => `translate(0, ${i * 20})`);
    //console.log(boroughData);

    // Add lines for each borough to the legend
    legendLine
      .append("line")
      .attr("x1", marginLine.left + marginLine.right - 9) // Starting point of the line
      .attr("x2", marginLine.left + marginLine.right + 12) // Ending point of the line
      .attr("y1", marginLine.bottom) // Positioning the line vertically (aligned with text)
      .attr("y2", marginLine.bottom) // Same as y1 to keep it horizontal
      .attr("stroke", (d) => color(d.borough)) // Set line color based on borough
      .attr("stroke-width", 2); // Set line width

    legendLine
      .append("circle")
      .attr("class", "point")
      .attr("cx", marginLine.left + marginLine.right + 1.5)
      .attr("cy", marginLine.bottom)
      .attr("r", 5) // Radius of the points
      .attr("fill", (d) => color(d.borough)) // Use 'd' to correctly color the circle based on the borough
      .attr("stroke", "white") // White border around the points
      .attr("stroke-width", 1); // Stroke width for the border

    legendLine
      .append("text")
      .attr("x", marginLine.left + marginLine.right + 21)
      .attr("y", marginLine.bottom)
      .attr("dy", ".35em")
      .attr("text-anchor", "beginning")
      .style("font-size", "10px")
      .text((d) => d.borough);

    const LocationType2022 = d3.rollup(
      json2022,
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.descriptor
        ),
      (d) => d.location_type
    );

    console.log("2022 Treemap Location Type and Count:", LocationType2022);

    const root = {
      name: "Rodent Complaints", // Root level name
      children: Array.from(LocationType2022.entries()).map(
        ([locationType, descriptors]) => {
          // Calculate total value for each locationType
          const totalValue = Array.from(descriptors.values()).reduce(
            (sum, count) => sum + count,
            0
          );

          return {
            name: locationType,
            total: totalValue, // Add the total count here
            children: Array.from(descriptors.entries()).map(
              ([descriptor, count]) => ({
                name: descriptor,
                value: count,
              })
            ),
          };
        }
      ),
    };

    // console.log("Root for the Tree Map:", root);

    const cheeseTree = d3
      .select("#tree-map")
      .append("svg") // Create the SVG element
      .style("width", `${window.innerWidth / 2}px`)
      .style("height", `${window.innerHeight / 2 - 90}px`)
      .attr("class", "rodents-2022");

    const hierarchy = d3
      .hierarchy(root)
      .sum((d) => d.value) // Sum the values to calculate the size of each block in the tree map
      .sort((a, b) => a.value - b.value); // Optional: Sort in descending order by value

    // Step 4: Set up the dimensions for the tree map
    const marginTree = { top: 40, right: 20, bottom: 40, left: 40 };
    const widthTree = parseInt(d3.select("#tree-map").style("width"));
    const heightTree = parseInt(d3.select("#tree-map").style("height"));

    // Step 5: Create the tree map layout
    const treemap = d3
      .treemap()
      .size([widthTree - marginTree.right, heightTree - marginTree.bottom])
      .padding(1);

    // Step 6: Apply the layout to the hierarchy data
    treemap(hierarchy);

    const colorScaleTree = d3
      .scaleLinear()
      .domain([
        d3.min(hierarchy.children, (d) => d.value),
        d3.max(hierarchy.children, (d) => d.value),
      ]) // Domain based on the min and max value
      .range(["darkgoldenrod", "palegoldenrod"]); // Color range

    const treeTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background", "rgba(0, 0, 0, 0.7)")
      .style("color", "white")
      .style("padding", "5px 10px 4px 10px")
      .style("border-radius", "3px")
      .style("font-size", "15px")
      .style("z-index", 6000);

    // Function to show descriptors for a clicked locationType
    function showDescriptors(locationTypeData) {
      // Clear the existing chart
      cheeseTree.selectAll("*").remove();

      // Create a new hierarchy for the descriptors
      const descriptorHierarchy = d3
        .hierarchy({
          name: locationTypeData.data.name, // Keep the locationType name
          children: locationTypeData.children.map((d) => ({
            name: d.data.name, // Keep the descriptor name
            value: d.data.value, // Keep the descriptor value (count)
          })),
        })
        .sum((d) => d.value) // Sum the values to calculate the size of each block
        .sort((a, b) => a.value - b.value); // Sort by value

      // Apply the treemap layout to the descriptors
      treemap(descriptorHierarchy);

      cheeseTree
        .append("text")
        .attr("x", 0)
        .attr("y", 30)
        .attr("font-size", 15)
        .attr("fill", "black")
        .style("font-weight", "bold")
        .text(`Descriptors for ${locationTypeData.data.name}`);

      // Add descriptors to the tree chart
      const descriptors = cheeseTree
        .selectAll("g")
        .data(descriptorHierarchy.leaves()) // Use leaves here to get the actual descriptors
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${d.x0},${d.y0 + marginTree.top})`);

      // For Tree Chart
      const TreeDefs = d3
        .select("#tree-map")
        .append("defs")
        .attr("class", "rodents-2022");

      TreeDefs.append("pattern")
        .attr("id", "cheesePattern-Big-2022") // ID to reference the pattern later for Tree Chart
        .attr("width", 2)
        .attr("height", 2)
        .append("image")
        .attr("href", "./assets/squareCheese-Big.svg") // Path to the SVG image
        .attr("width", 1800)
        .attr("height", 1800);

      const treeDescriptorColors = {
        "Rat Sighting": "black", // Solid color
        "Mouse Sighting": "#d1d3d4", // Gray color
        "Condition Attracting Rodents": "url(#cheesePattern-Big-2022)", // Reference the Tree Chart Pattern
        "Signs of Rodents": "#f1de00", // Yellow color
      };

      const TreeColorScale = d3
        .scaleOrdinal()
        .domain(Object.keys(treeDescriptorColors)) // Descriptor keys as the domain
        .range(Object.values(treeDescriptorColors)); // Colors/patterns as the range

      descriptors
        .append("rect")
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0)
        .attr("fill", (d) => TreeColorScale(d.data.name));

      descriptors
        .append("text")
        .attr("x", 5)
        .attr("y", 15)
        .attr("font-size", 12)
        .attr("fill", function (d) {
          // Apply different colors based on descriptor name
          switch (d.data.name) {
            case "Rat Sighting":
              return "white";
            default:
              return "black"; // Default color
          }
        })
        .text((d) => `${d.data.name}: ${d3.format(",")(d.data.value)}`);

      // Optional: Add a "Back" button to go back to the full view
      cheeseTree
        .append("text")
        .attr("x", widthTree - marginTree.left - 3)
        .attr("y", 30)
        .attr("font-size", 10)
        .attr("fill", "goldenrod")
        .style("cursor", "pointer")
        .text("Back")
        .on("click", function () {
          // Go back to the full view by clearing the chart and redrawing the main treemap
          cheeseTree.selectAll("*").remove();
          drawMainTreeMap();
        });
    }

    // Redraw the main treemap (locationType level)
    function drawMainTreeMap() {
      treemap(hierarchy);

      cheeseTree
        .append("text")
        .attr("class", "rodents-2022")
        .attr("x", 0)
        .attr("y", 30)
        .attr("font-size", 15)
        .attr("fill", "black")
        .style("font-weight", "bold")
        .text("Location Type in 2022");

      const locationTypes = cheeseTree
        .selectAll("g")
        .data(hierarchy.children)
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${d.x0},${d.y0 + marginTree.top})`)
        .on("click", function (event, d) {
          treeTooltip.style("visibility", "hidden");
          // When a locationType is clicked, show its descriptors
          showDescriptors(d);
        })
        .on("mouseover", function (event, d) {
          // Show tooltip on hover
          treeTooltip
            .style("visibility", "visible")
            .html(`${d.data.name}: ${d3.format(",")(d.data.total)}`);
        })
        .on("mousemove", function (event) {
          // Position the tooltip near the mouse pointer
          treeTooltip
            .style("top", event.pageY + 10 + "px")
            .style("left", event.pageX + 10 + "px");
        })
        .on("mouseout", function () {
          // Hide the tooltip when mouse leaves
          treeTooltip.style("visibility", "hidden");
        });

      locationTypes
        .append("rect")
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0)
        .attr("fill", (d) => colorScaleTree(d.value));
    }

    // Initial drawing of the main treemap
    drawMainTreeMap();

    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("2022 Loaded after delay.");

  } catch (error) {
    console.error("Error loading or processing data for 2022:", error);
  }


  d3.selectAll(".rodents-2022").style("display", "none");

})();

/* ----- */
/* -------------------------------------- ALL API QUERIES AND VISUALIZATIONS SPECIFIC TO 2023 -------------------------------------- */
/* ----- */

(async function Rodents2023() {
  const url2023 =
    "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$query=SELECT%0A%20%20%60unique_key%60%2C%0A%20%20%60created_date%60%2C%0A%20%20%60closed_date%60%2C%0A%20%20%60agency%60%2C%0A%20%20%60agency_name%60%2C%0A%20%20%60complaint_type%60%2C%0A%20%20%60descriptor%60%2C%0A%20%20%60location_type%60%2C%0A%20%20%60incident_zip%60%2C%0A%20%20%60incident_address%60%2C%0A%20%20%60street_name%60%2C%0A%20%20%60cross_street_1%60%2C%0A%20%20%60cross_street_2%60%2C%0A%20%20%60intersection_street_1%60%2C%0A%20%20%60intersection_street_2%60%2C%0A%20%20%60address_type%60%2C%0A%20%20%60city%60%2C%0A%20%20%60landmark%60%2C%0A%20%20%60facility_type%60%2C%0A%20%20%60status%60%2C%0A%20%20%60due_date%60%2C%0A%20%20%60resolution_description%60%2C%0A%20%20%60resolution_action_updated_date%60%2C%0A%20%20%60community_board%60%2C%0A%20%20%60bbl%60%2C%0A%20%20%60borough%60%2C%0A%20%20%60x_coordinate_state_plane%60%2C%0A%20%20%60y_coordinate_state_plane%60%2C%0A%20%20%60open_data_channel_type%60%2C%0A%20%20%60park_facility_name%60%2C%0A%20%20%60park_borough%60%2C%0A%20%20%60vehicle_type%60%2C%0A%20%20%60taxi_company_borough%60%2C%0A%20%20%60taxi_pick_up_location%60%2C%0A%20%20%60bridge_highway_name%60%2C%0A%20%20%60bridge_highway_direction%60%2C%0A%20%20%60road_ramp%60%2C%0A%20%20%60bridge_highway_segment%60%2C%0A%20%20%60latitude%60%2C%0A%20%20%60longitude%60%2C%0A%20%20%60location%60%0AWHERE%0A%20%20caseless_one_of(%60complaint_type%60%2C%20%22Rodent%22)%0A%20%20AND%20(%60created_date%60%0A%20%20%20%20%20%20%20%20%20BETWEEN%20%222023-01-01T00%3A00%3A00%22%20%3A%3A%20floating_timestamp%0A%20%20%20%20%20%20%20%20%20AND%20%222023-12-31T11%3A59%3A59%22%20%3A%3A%20floating_timestamp)%0AORDER%20BY%20%60created_date%60%20DESC%20NULL%20FIRST%0ALIMIT%20100000%20OFFSET%200";

  try {

    const json2023 = await d3.json(url2023);
    // there were 31615 rows in 2023
    console.log("2023:", json2023);

    const stackedData2023 = d3.rollup(
      json2023.filter(
        (d) =>
          d.borough &&
          d.borough.toLowerCase() !== "undefined" &&
          d.borough.toLowerCase() !== "unspecified"
      ),
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.descriptor
        ),
      (d) => d.borough
    );

    console.log(
      "Stacked Bar Chart by Count of Descriptor per Borough 2023:",
      stackedData2023
    );

    const boroughsBar = Array.from(stackedData2023, ([borough, descriptors]) => ({
      borough,
      descriptors: Array.from(descriptors, ([descriptor, count]) => ({
        descriptor,
        count,
      })),
    }));

    boroughsBar.forEach((b) => {
      b.totalCount = b.descriptors.reduce((sum, desc) => sum + desc.count, 0);
    });

    const keys = Array.from(
      new Set(boroughsBar.flatMap((b) => b.descriptors.map((d) => d.descriptor)))
    );

    const fixedCategories = [
      "Signs of Rodents",
      "Condition Attracting Rodents",
      "Mouse Sighting",
      "Rat Sighting",
    ];

    // Extract unique descriptors from the data
    const allDescriptors = new Set();
    boroughsBar.forEach((borough) => {
      borough.descriptors.forEach((descriptor) => {
        allDescriptors.add(descriptor.descriptor); // Add descriptor to the set
      });
    });

    // Convert the set to an array
    const dynamicCategories = Array.from(allDescriptors);

    // Filter out the fixed categories that are already in the dynamic categories
    const dynamicCategoriesExcludingFixed = dynamicCategories.filter(
      (category) => !fixedCategories.includes(category)
    );

    // Combine the fixed categories with dynamic categories
    const finalCategories = [
      ...fixedCategories,
      ...dynamicCategoriesExcludingFixed,
    ];

    // Create the stack with the combined order of categories
    const stack = d3
      .stack()
      .keys(finalCategories) // Use the combined fixed + dynamic order
      .value(
        (d, key) =>
          d.descriptors.find((desc) => desc.descriptor === key)?.count || 0
      );

    const series = stack(boroughsBar);
    const marginBar = { top: 20, right: 20, bottom: 40, left: 40 };
    const widthBar = parseInt(d3.select("#stacked-bar-charts").style("width"));
    const heightBar = parseInt(d3.select("#stacked-bar-charts").style("height"));
    const maxValueBar = d3.max(series[series.length - 1], (d) => d[1]);

    stackedBarCharts
      .append("text")
      .attr("class", "rodents-2023")
      .attr("x", 0)
      .attr("y", 20)
      .attr("font-size", 15)
      .attr("fill", "black")
      .style("font-weight", "bold")
      .text("Counts by Borough and Descriptor in 2023");

    const xScale = d3
      .scaleBand()
      .domain(boroughsBar.map((b) => b.borough))
      .range([marginBar.left, widthBar - marginBar.right])
      .paddingInner(0.1)
      .paddingOuter(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, BarYGlobalMax])
      //    .domain([0, maxValueBar])
      .range([heightBar - marginBar.top, marginBar.bottom])
      .nice();

    // For Bar Chart
    const BarDefs = d3
      .select("#stacked-bar-charts")
      .append("defs")
      .attr("class", "rodents-2023");

    BarDefs.append("pattern")
      .attr("id", "cheesePattern-2023") // ID to reference the pattern later for Bar Chart
      .attr("width", 2)
      .attr("height", 2)
      .append("image")
      .attr("href", "./assets/squareCheese.svg") // Path to the SVG image
      .attr("width", 300)
      .attr("height", 300);

    const barDescriptorColors = {
      "Rat Sighting": "black",
      "Mouse Sighting": "#d1d3d4",
      "Condition Attracting Rodents": "url(#cheesePattern-2023)",
      "Signs of Rodents": "#f1de00",
    };

    // Example of applying border styles
    const descriptorBorders = {
      "Rat Sighting": "1px solid black",
      "Mouse Sighting": "1px solid gray",
      "Condition Attracting Rodents": "1px solid black", // Border for SVG image
      "Signs of Rodents": "1px solid black",
    };

    // Create your color scale using the descriptor colors
    const colorScaleBar = d3
      .scaleOrdinal()
      .domain(Object.keys(barDescriptorColors)) // Use descriptor keys as the domain
      .range(Object.values(barDescriptorColors));

    const axes_layer = stackedBarCharts.append("g").attr("class", "rodents-2023");
    const bars_layer = stackedBarCharts.append("g").attr("class", "rodents-2023");

    const bars = bars_layer
      .selectAll("g")
      .data(stack(boroughsBar))
      .join("g")
      .attr("fill", (d, i) => colorScaleBar(d.key));

    const stackedTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "stackedTooltip")
      .style("background-color", "white")
      .style("padding", "6px 10px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "5px")
      .style("position", "absolute") // Ensure it's absolutely positioned
      .style("opacity", 0); // Initially hidden

    // Bars and event listeners
    bars
      .selectAll("rect")
      .data((d) => d)
      .join("rect")
      .attr("x", (d) => xScale(d.data.borough))
      .attr("y", (d) => yScale(d[1]))
      .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
      .attr("width", xScale.bandwidth())
      // THIS PART OF THE CODE IS NOT WORKING. IT WON'T DO THE CORRECT STROKES ON THE BARS, FIX LATER
      .attr("fill", (d) => barDescriptorColors[d.descriptor]) // Apply the color based on the descriptor
      .attr("stroke", (d) => descriptorBorders[d.descriptor]) // Apply the border style based on the descriptor
      .on("mouseover", (event, d) => {
        const borough = d.data.borough;
        const descriptor = d.data.descriptors.find(
          (desc) => desc.count === d[1] - d[0]
        ).descriptor;
        const count = d[1] - d[0];

        stackedTooltip
          .style("opacity", 1)
          .style("z-index", 6000) // Ensure it's on top
          .html(
            `${borough
              .split(" ")
              .map(
                (word) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")}<br>${descriptor}<br>${d3.format(",")(count)}`
          )
          .style("left", `${event.pageX + 10}px`) // Add offset for visibility
          .style("top", `${event.pageY + 10}px`) // Add offset for visibility
          .transition()
          .duration(100);

        // Apply custom styles based on the descriptor
        switch (descriptor) {
          case "Condition Attracting Rodents":
            stackedTooltip
              .style("background-color", "#fee459")
              .style("border", "1px solid white")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          case "Rat Sighting":
            stackedTooltip
              .style("background-color", "black")
              .style("border", "1px solid white")
              .style("color", "white")
              .style("line-height", "1.5");
            break;
          case "Mouse Sighting":
            stackedTooltip
              .style("background-color", "#d1d3d4")
              .style("border", "1px solid white")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          case "Signs of Rodents":
            stackedTooltip
              .style("background-color", "#f1de00")
              .style("border", "1px solid black")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          default:
            stackedTooltip
              .style("background-color", "#ffffff") // Default white background
              .style("border", "1px solid #ccc")
              .style("color", "#333")
              .style("line-height", "1.5");
            break;
        }
      })
      .on("mousemove", (event) => {
        stackedTooltip
          .style("left", `${event.pageX + 10}px`) // Add offset for visibility
          .style("top", `${event.pageY + 10}px`); // Add offset for visibility
      })
      .on("mouseout", () => {
        stackedTooltip.transition().duration(100).style("opacity", 0); // Hide tooltip
      });

    // Total Count text labels
    bars_layer
      .selectAll("text")
      .data(boroughsBar)
      .join("text")
      .attr("x", (b) => xScale(b.borough) + xScale.bandwidth() / 2)
      .attr("y", (b) => yScale(b.totalCount) - 5)
      .attr("text-anchor", "middle")
      .html((b) => `Total: ${new Intl.NumberFormat().format(b.totalCount)}`)
      .style("font-size", "10px");

    axes_layer
      .append("g")
      .call(d3.axisLeft(yScale))
      .style("font-family", "Lexend Deca")
      .attr("transform", `translate(${marginBar.left}, 0)`);

    axes_layer
      .append("g")
      .call(d3.axisBottom(xScale))
      .style("font-family", "Lexend Deca")
      .attr("transform", `translate(0, ${heightBar - marginBar.top})`);

    // gotta love stack overflow solving problems for me https://stackoverflow.com/questions/63838288/convert-json-to-geojson-frontend

    const APIUrl2023 = url2023;
    getData2023();

    map.createPane("Zip2023Pane");
    map.getPane("Zip2023Pane").style.zIndex = 20;

    async function getData2023() {
      let mygeojson2023 = { type: "FeatureCollection", features: [] };
      const zipMarkerCount = {}; // Object to keep track of the marker counts by zip code
      const zipClusters = {}; // To hold the marker clusters by zip code

      // Fetch and parse the data
      const Points2023 = await fetch(APIUrl2023)
        .then((response) => response.json())
        .then((data) => {
          for (let point of data) {
            // Ensure latitude and longitude are valid
            if (!point.latitude || !point.longitude) {
              continue;
            }

            // Convert to a GeoJSON feature
            let coordinate = [
              parseFloat(point.longitude),
              parseFloat(point.latitude),
            ];
            let properties = point;
            delete properties.longitude;
            delete properties.latitude;

            let feature = {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: coordinate,
              },
              properties: properties,
            };
            mygeojson2023.features.push(feature);

            // Count the markers by zip code
            const zipCode = point.incident_zip;
            if (zipCode) {
              if (!zipMarkerCount[zipCode]) {
                zipMarkerCount[zipCode] = 0;
              }
              zipMarkerCount[zipCode]++;
            }
          }
        });

      console.log("GeoJson 2023 All Points:", mygeojson2023);
      console.log("2023 Marker Counts by Zip Code:", zipMarkerCount);

      // Create the marker clusters
      for (const feature of mygeojson2023.features) {
        const { coordinates } = feature.geometry;
        const { descriptor, created_date, borough, incident_zip, location_type } =
          feature.properties;

        if (!incident_zip) {
          continue;
        }

        // Define the marker icon based on descriptor
        let markerIcon;
        switch (descriptor) {
          case "Condition Attracting Rodents":
            markerIcon = L.icon({
              iconUrl: "./assets/cheese.svg", // CHEESE
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Rat Sighting":
            markerIcon = L.icon({
              iconUrl: "./assets/rat.svg", // RAT
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Mouse Sighting":
            markerIcon = L.icon({
              iconUrl: "./assets/mouse.svg", // MOUSE
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Signs of Rodents":
            markerIcon = L.icon({
              iconUrl: "./assets/signs.svg", // SIGNS
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          default:
            markerIcon = null; // Leaflet's default marker
            break;
        }

        // Create the marker with the appropriate icon
        const marker = L.marker([coordinates[1], coordinates[0]], {
          icon: markerIcon,
        });
        const popupContent = `
        <div style="display:flex;flex-direction:column;justify-content:center;">
          <div style="margin:0 auto;font-weight:600;">${descriptor}</div>
          <div style="margin:0 auto;font-weight:400;">
            ${new Date(created_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
          </div>
          <div style="margin:0 auto;font-weight:400;">${location_type}</div>
          <div style="margin:0 auto;font-weight:400;">${borough
            .split(" ")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ")}, ${incident_zip}</div>
        </div>
      `;

        let cleanDescriptor = descriptor.replace(/\s+/g, "-");
        marker.bindPopup(popupContent, { className: cleanDescriptor });

        // Add the marker to the corresponding zip cluster
        if (!zipClusters[incident_zip]) {
          zipClusters[incident_zip] = L.markerClusterGroup();
        }
        zipClusters[incident_zip].addLayer(marker);
      }

      const markerClusterLayer2023 = L.layerGroup();

      markerClusterLayer2023.onAdd = function (map) {
        // Add a class to the layer's container when it is added to the map
        this._map._container.classList.add("Rodents-2023-Cluster");
        L.LayerGroup.prototype.onAdd.call(this, map); // Call the parent method to ensure the layer is added correctly
      };

      // Add markers to the layer
      for (const zip in zipClusters) {
        markerClusterLayer2023.addLayer(zipClusters[zip]);
      }

      // Add GeoJSON layer with dynamic styling based on marker count
      const zipCodeGeoJSONLayer2023 = L.geoJSON(null, {
        style: function (feature) {
          const zipCode = feature.properties.modzcta; // modzcta is the key for zip code
          const markerCount = zipMarkerCount[zipCode] || 0;

          // Define a color scale based on marker count
          let fillColor;
          if (markerCount > 750) {
            fillColor = "darkgoldenrod"; // High count
          } else if (markerCount > 500) {
            fillColor = "goldenrod"; // Medium count
          } else if (markerCount > 250) {
            fillColor = "gold"; // Low count
          } else if (markerCount > 0) {
            fillColor = "palegoldenrod"; // Low count
          } else {
            fillColor = "lightgoldenrodyellow"; // No markers
          }

          return {
            color: "goldenrod", // Border color
            weight: 1, // Border weight
            opacity: 0.5, // Border opacity
            fillColor: fillColor, // Fill color
            fillOpacity: 0.6, // Fill opacity
          };
        },
        onEachFeature: function (feature, layer) {
          // Use getElement() to access the DOM element for the layer
          const element = layer.getElement();
          if (element) {
            element.classList.add("Zip-Areas-2023"); // Add the class to the DOM element
          }
        },
        pane: "Zip2023Pane", // Ensure the GeoJSON uses the correct pane
      });

      // Load GeoJSON shapes for zip codes
      d3.json("./data/Modified_Zip_Code_Tabulation_Areas_(MODZCTA).geojson").then(
        function (geojsonData) {
          zipCodeGeoJSONLayer2023.addData(geojsonData); // Add the GeoJSON data to the layer
        }
      );

      // Add the layers to the global overlayLayers object
      overlayLayers["2023 Rodent Complaints"] = markerClusterLayer2023;
      overlayLayers["2023 Zip Codes"] = zipCodeGeoJSONLayer2023;

      // Update the layer control
      layerControl.addOverlay(markerClusterLayer2023, "2023 Rodent Complaints");
      layerControl.addOverlay(zipCodeGeoJSONLayer2023, "2023 Zip Codes");

      // Optionally, add the layers to the map
      // map.addLayer(markerClusterLayer); // Add the marker clusters layer by default
      // map.addLayer(zipCodeGeoJSONLayer); // Add the zip code areas layer by default

      map.on('layeradd', function (e) {
        if (e.layer === markerClusterLayer2023) {
          activeLayers.push("2023 Rodent Complaints");
          updateTitle(activeLayers);
        }
        if (e.layer === zipCodeGeoJSONLayer2023) {
          activeLayers.push("2023 Zip Codes");
          updateTitle(activeLayers);
        }
      });

      map.on('layerremove', function (e) {
        if (e.layer === markerClusterLayer2023) {
          const index = activeLayers.indexOf("2023 Rodent Complaints");
          if (index > -1) {
            activeLayers.splice(index, 1); // Remove from array
          }
          updateTitle(activeLayers);
        }
        if (e.layer === zipCodeGeoJSONLayer2023) {
          const index = activeLayers.indexOf("2023 Zip Codes");
          if (index > -1) {
            activeLayers.splice(index, 1); // Remove from array
          }
          updateTitle(activeLayers);
        }
      });


    }


    const timeSeriesData2023 = d3.rollup(
      json2023.filter(
        (d) =>
          d.borough &&
          d.borough.toLowerCase() !== "undefined" &&
          d.borough.toLowerCase() !== "unspecified"
      ),
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.borough
        ),
      (d) => new Date(d.created_date).getMonth()
    );

    console.log("2023 Line Chart with Month by Count:", timeSeriesData2023);

    // Array of month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Map the numeric months to month names
    const months = monthNames; // Now 'months' will be an array of month names

    const boroughsLine = Array.from(
      new Set(
        json2023
          .filter(
            (d) =>
              d.borough &&
              d.borough.toLowerCase() !== "undefined" &&
              d.borough.toLowerCase() !== "unspecified"
          ) // filter out unwanted boroughs
          .map((d) => d.borough) // Get all boroughs
      )
    );

    // Structure the data for each borough in a format suitable for the line chart
    const boroughData = boroughsLine.map((borough) => {
      return {
        borough,
        values: months.map((monthName, monthIndex) => {
          const monthData = timeSeriesData2023.get(monthIndex); // Use monthIndex for rollup
          return {
            month: monthName, // Month name, e.g., 'January'
            count: monthData?.get(borough) || 0, // If no data for a borough in a month, count is 0
          };
        }),
      };
    });

    const marginLine = { top: 20, right: 20, bottom: 40, left: 40 };
    const widthLine = parseInt(d3.select("#line-chart").style("width"));
    const heightLine = parseInt(d3.select("#line-chart").style("height"));

    lineChart
      .append("text")
      .attr("class", "rodents-2023")
      .attr("x", 0)
      .attr("y", 20)
      .attr("font-size", 15)
      .attr("fill", "black")
      .style("font-weight", "bold")
      .text("Counts by Borough per Month in 2023");

    // Append the SVG element to the DOM
    lineChart
      .select("#line-chart")
      .append("svg")
      .attr("class", "rodents-2023")
      .attr("width", widthLine + marginLine.left + marginLine.right)
      .attr("height", heightLine + marginLine.top + marginLine.bottom)
      .append("g")
      .attr("transform", `translate(${marginLine.left},${marginLine.top})`);

    // Set up the x and y scales
    const x = d3
      .scaleBand()
      .domain(months)
      .range([marginLine.left, widthLine - marginLine.right])
      .padding(0.1); // Padding between bars (or in this case, data points)

    const y = d3
      .scaleLinear()
      .domain([0, LineYGlobalMax])
      //    .domain([0, d3.max(boroughData, (d) => d3.max(d.values, (v) => v.count))])
      .nice()
      .range([heightLine - marginLine.top, marginLine.bottom]);

    const boroughColorMapping = {
      MANHATTAN: "#EE352E",
      BROOKLYN: "#FCCC0A",
      QUEENS: "#B933AD",
      BRONX: "#00933C",
      "STATEN ISLAND": "#0078C6",
    };

    const color = d3
      .scaleOrdinal()
      .domain(Object.keys(boroughColorMapping)) // Use borough names as the domain
      .range(Object.values(boroughColorMapping)); // Use hex colors as the range

    const lineTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "stackedTooltip")
      .style("background-color", "white")
      .style("padding", "6px 10px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "5px")
      .style("position", "absolute") // Ensure it's absolutely positioned
      .style("opacity", 0); // Initially hidden

    lineChart
      .append("g")
      .attr("class", "x-axis")
      .attr("class", "rodents-2023")
      .attr("transform", `translate(0, ${heightLine - marginLine.top})`)
      .style("font-family", "Lexend Deca")
      .call(
        d3.axisBottom(x).tickFormat(function (d) {
          // Take the first 3 characters of the month name
          return d.slice(0, 3);
        })
      );

    lineChart
      .append("g")
      .attr("class", "y-axis")
      .attr("class", "rodents-2023")
      .attr("transform", `translate(${marginLine.left}, 0)`)
      .style("font-family", "Lexend Deca")
      .call(d3.axisLeft(y));

    // Define the line generator
    const line = d3
      .line()
      .x((d) => x(d.month) + x.bandwidth() / 2) // Position by month
      .y((d) => y(d.count)); // Position by count

    // Draw lines for each borough
    boroughData.forEach((borough) => {
      // Draw the line for the borough
      lineChart
        .append("path")
        .data([borough.values]) // Use the borough's month-count data
        .attr("class", "line")
        .attr("class", "rodents-2023")
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", color(borough.borough))
        .attr("stroke-width", 2);

      // Add points (circles) for each month on the line
      lineChart
        .selectAll(".point-" + borough.borough)
        .data(borough.values) // Use the borough's month-count data
        .enter()
        .append("circle")
        .attr("class", "point")
        .attr("class", "rodents-2023")
        .attr("cx", (d) => x(d.month) + x.bandwidth() / 2) // Position by month
        .attr("cy", (d) => y(d.count)) // Position by count
        .attr("r", 5) // Radius of the points
        .attr("fill", color(borough.borough)) // Color the points according to the borough
        .attr("stroke", "white") // White border around the points
        .attr("stroke-width", 1) // Stroke width for the border
        .on("mouseover", (event, d) => {
          // Show the tooltip on hover
          lineTooltip.style("opacity", 0.9).style("z-index", 6000); // Ensure it's on top
          lineTooltip
            .html(
              `${borough.borough
                .split(" ")
                .map(
                  (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ")}<br>${d.month}: ${d3.format(",")(d.count)}`
            )
            .style("left", event.pageX + 10 + "px")
            .style("top", event.pageY + 10 + "px");
        })
        .on("mousemove", (event) => {
          lineTooltip
            .style("left", `${event.pageX + 10}px`) // Add offset for visibility
            .style("top", `${event.pageY + 10}px`); // Add offset for visibility
        })
        .on("mouseout", () => {
          lineTooltip.transition().duration(100).style("opacity", 0); // Hide tooltip
        });
    });

    // (Optional) Add tooltips to display the exact count on hover
    lineChart
      .selectAll(".point")
      .append("title")
      .text((d) => `${d.month}: ${d.count}`);

    // Add a legend
    const legendLine = lineChart
      .selectAll(".legend")
      .data(boroughData)
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", (d, i) => `translate(0, ${i * 20})`);
    //console.log(boroughData);

    // Add lines for each borough to the legend
    legendLine
      .append("line")
      .attr("x1", marginLine.left + marginLine.right - 9) // Starting point of the line
      .attr("x2", marginLine.left + marginLine.right + 12) // Ending point of the line
      .attr("y1", marginLine.bottom) // Positioning the line vertically (aligned with text)
      .attr("y2", marginLine.bottom) // Same as y1 to keep it horizontal
      .attr("stroke", (d) => color(d.borough)) // Set line color based on borough
      .attr("stroke-width", 2); // Set line width

    legendLine
      .append("circle")
      .attr("class", "point")
      .attr("cx", marginLine.left + marginLine.right + 1.5)
      .attr("cy", marginLine.bottom)
      .attr("r", 5) // Radius of the points
      .attr("fill", (d) => color(d.borough)) // Use 'd' to correctly color the circle based on the borough
      .attr("stroke", "white") // White border around the points
      .attr("stroke-width", 1); // Stroke width for the border

    legendLine
      .append("text")
      .attr("x", marginLine.left + marginLine.right + 21)
      .attr("y", marginLine.bottom)
      .attr("dy", ".35em")
      .attr("text-anchor", "beginning")
      .style("font-size", "10px")
      .text((d) => d.borough);

    const LocationType2023 = d3.rollup(
      json2023,
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.descriptor
        ),
      (d) => d.location_type
    );

    console.log("2023 Treemap Location Type and Count:", LocationType2023);

    const root = {
      name: "Rodent Complaints", // Root level name
      children: Array.from(LocationType2023.entries()).map(
        ([locationType, descriptors]) => {
          // Calculate total value for each locationType
          const totalValue = Array.from(descriptors.values()).reduce(
            (sum, count) => sum + count,
            0
          );

          return {
            name: locationType,
            total: totalValue, // Add the total count here
            children: Array.from(descriptors.entries()).map(
              ([descriptor, count]) => ({
                name: descriptor,
                value: count,
              })
            ),
          };
        }
      ),
    };

    // console.log("Root for the Tree Map:", root);

    const cheeseTree = d3
      .select("#tree-map")
      .append("svg") // Create the SVG element
      .style("width", `${window.innerWidth / 2}px`)
      .style("height", `${window.innerHeight / 2 - 90}px`)
      .attr("class", "rodents-2023");

    const hierarchy = d3
      .hierarchy(root)
      .sum((d) => d.value) // Sum the values to calculate the size of each block in the tree map
      .sort((a, b) => a.value - b.value); // Optional: Sort in descending order by value

    // Step 4: Set up the dimensions for the tree map
    const marginTree = { top: 40, right: 20, bottom: 40, left: 40 };
    const widthTree = parseInt(d3.select("#tree-map").style("width"));
    const heightTree = parseInt(d3.select("#tree-map").style("height"));

    // Step 5: Create the tree map layout
    const treemap = d3
      .treemap()
      .size([widthTree - marginTree.right, heightTree - marginTree.bottom])
      .padding(1);

    // Step 6: Apply the layout to the hierarchy data
    treemap(hierarchy);

    const colorScaleTree = d3
      .scaleLinear()
      .domain([
        d3.min(hierarchy.children, (d) => d.value),
        d3.max(hierarchy.children, (d) => d.value),
      ]) // Domain based on the min and max value
      .range(["darkgoldenrod", "palegoldenrod"]); // Color range

    const treeTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background", "rgba(0, 0, 0, 0.7)")
      .style("color", "white")
      .style("padding", "5px 10px 4px 10px")
      .style("border-radius", "3px")
      .style("font-size", "15px")
      .style("z-index", 6000);

    // Function to show descriptors for a clicked locationType
    function showDescriptors(locationTypeData) {
      // Clear the existing chart
      cheeseTree.selectAll("*").remove();

      // Create a new hierarchy for the descriptors
      const descriptorHierarchy = d3
        .hierarchy({
          name: locationTypeData.data.name, // Keep the locationType name
          children: locationTypeData.children.map((d) => ({
            name: d.data.name, // Keep the descriptor name
            value: d.data.value, // Keep the descriptor value (count)
          })),
        })
        .sum((d) => d.value) // Sum the values to calculate the size of each block
        .sort((a, b) => a.value - b.value); // Sort by value

      // Apply the treemap layout to the descriptors
      treemap(descriptorHierarchy);

      cheeseTree
        .append("text")
        .attr("x", 0)
        .attr("y", 30)
        .attr("font-size", 15)
        .attr("fill", "black")
        .style("font-weight", "bold")
        .text(`Descriptors for ${locationTypeData.data.name}`);

      // Add descriptors to the tree chart
      const descriptors = cheeseTree
        .selectAll("g")
        .data(descriptorHierarchy.leaves()) // Use leaves here to get the actual descriptors
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${d.x0},${d.y0 + marginTree.top})`);

      // For Tree Chart
      const TreeDefs = d3
        .select("#tree-map")
        .append("defs")
        .attr("class", "rodents-2023");

      TreeDefs.append("pattern")
        .attr("id", "cheesePattern-Big-2023") // ID to reference the pattern later for Tree Chart
        .attr("width", 2)
        .attr("height", 2)
        .append("image")
        .attr("href", "./assets/squareCheese-Big.svg") // Path to the SVG image
        .attr("width", 1800)
        .attr("height", 1800);

      const treeDescriptorColors = {
        "Rat Sighting": "black", // Solid color
        "Mouse Sighting": "#d1d3d4", // Gray color
        "Condition Attracting Rodents": "url(#cheesePattern-Big-2023)", // Reference the Tree Chart Pattern
        "Signs of Rodents": "#f1de00", // Yellow color
      };

      const TreeColorScale = d3
        .scaleOrdinal()
        .domain(Object.keys(treeDescriptorColors)) // Descriptor keys as the domain
        .range(Object.values(treeDescriptorColors)); // Colors/patterns as the range

      descriptors
        .append("rect")
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0)
        .attr("fill", (d) => TreeColorScale(d.data.name));

      descriptors
        .append("text")
        .attr("x", 5)
        .attr("y", 15)
        .attr("font-size", 12)
        .attr("fill", function (d) {
          // Apply different colors based on descriptor name
          switch (d.data.name) {
            case "Rat Sighting":
              return "white";
            default:
              return "black"; // Default color
          }
        })
        .text((d) => `${d.data.name}: ${d3.format(",")(d.data.value)}`);

      // Optional: Add a "Back" button to go back to the full view
      cheeseTree
        .append("text")
        .attr("x", widthTree - marginTree.left - 3)
        .attr("y", 30)
        .attr("font-size", 10)
        .attr("fill", "goldenrod")
        .style("cursor", "pointer")
        .text("Back")
        .on("click", function () {
          // Go back to the full view by clearing the chart and redrawing the main treemap
          cheeseTree.selectAll("*").remove();
          drawMainTreeMap();
        });
    }

    // Redraw the main treemap (locationType level)
    function drawMainTreeMap() {
      treemap(hierarchy);

      cheeseTree
        .append("text")
        .attr("class", "rodents-2023")
        .attr("x", 0)
        .attr("y", 30)
        .attr("font-size", 15)
        .attr("fill", "black")
        .style("font-weight", "bold")
        .text("Location Type in 2023");

      const locationTypes = cheeseTree
        .selectAll("g")
        .data(hierarchy.children)
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${d.x0},${d.y0 + marginTree.top})`)
        .on("click", function (event, d) {
          treeTooltip.style("visibility", "hidden");
          // When a locationType is clicked, show its descriptors
          showDescriptors(d);
        })
        .on("mouseover", function (event, d) {
          // Show tooltip on hover
          treeTooltip
            .style("visibility", "visible")
            .html(`${d.data.name}: ${d3.format(",")(d.data.total)}`);
        })
        .on("mousemove", function (event) {
          // Position the tooltip near the mouse pointer
          treeTooltip
            .style("top", event.pageY + 10 + "px")
            .style("left", event.pageX + 10 + "px");
        })
        .on("mouseout", function () {
          // Hide the tooltip when mouse leaves
          treeTooltip.style("visibility", "hidden");
        });

      locationTypes
        .append("rect")
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0)
        .attr("fill", (d) => colorScaleTree(d.value));
    }

    // Initial drawing of the main treemap
    drawMainTreeMap();

    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("2023 Loaded after delay.");

  } catch (error) {
    console.error("Error loading or processing data for 2023:", error);
  }


  d3.selectAll(".rodents-2023").style("display", "none");

})();

/* ----- */
/* -------------------------------------- ALL API QUERIES AND VISUALIZATIONS SPECIFIC TO 2024 -------------------------------------- */
/* ----- */

(async function Rodents2024() {
  const url2024 =
    "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$query=SELECT%0A%20%20%60unique_key%60%2C%0A%20%20%60created_date%60%2C%0A%20%20%60closed_date%60%2C%0A%20%20%60agency%60%2C%0A%20%20%60agency_name%60%2C%0A%20%20%60complaint_type%60%2C%0A%20%20%60descriptor%60%2C%0A%20%20%60location_type%60%2C%0A%20%20%60incident_zip%60%2C%0A%20%20%60incident_address%60%2C%0A%20%20%60street_name%60%2C%0A%20%20%60cross_street_1%60%2C%0A%20%20%60cross_street_2%60%2C%0A%20%20%60intersection_street_1%60%2C%0A%20%20%60intersection_street_2%60%2C%0A%20%20%60address_type%60%2C%0A%20%20%60city%60%2C%0A%20%20%60landmark%60%2C%0A%20%20%60facility_type%60%2C%0A%20%20%60status%60%2C%0A%20%20%60due_date%60%2C%0A%20%20%60resolution_description%60%2C%0A%20%20%60resolution_action_updated_date%60%2C%0A%20%20%60community_board%60%2C%0A%20%20%60bbl%60%2C%0A%20%20%60borough%60%2C%0A%20%20%60x_coordinate_state_plane%60%2C%0A%20%20%60y_coordinate_state_plane%60%2C%0A%20%20%60open_data_channel_type%60%2C%0A%20%20%60park_facility_name%60%2C%0A%20%20%60park_borough%60%2C%0A%20%20%60vehicle_type%60%2C%0A%20%20%60taxi_company_borough%60%2C%0A%20%20%60taxi_pick_up_location%60%2C%0A%20%20%60bridge_highway_name%60%2C%0A%20%20%60bridge_highway_direction%60%2C%0A%20%20%60road_ramp%60%2C%0A%20%20%60bridge_highway_segment%60%2C%0A%20%20%60latitude%60%2C%0A%20%20%60longitude%60%2C%0A%20%20%60location%60%0AWHERE%0A%20%20caseless_one_of(%60complaint_type%60%2C%20%22Rodent%22)%0A%20%20AND%20(%60created_date%60%0A%20%20%20%20%20%20%20%20%20BETWEEN%20%222024-01-01T00%3A00%3A00%22%20%3A%3A%20floating_timestamp%0A%20%20%20%20%20%20%20%20%20AND%20%222024-12-31T11%3A59%3A59%22%20%3A%3A%20floating_timestamp)%0AORDER%20BY%20%60created_date%60%20DESC%20NULL%20FIRST%0ALIMIT%20100000%20OFFSET%200";

  try {

    const json2024 = await d3.json(url2024);
    // there were 31615 rows in 2024
    console.log("2024:", json2024);

    const stackedData2024 = d3.rollup(
      json2024.filter(
        (d) =>
          d.borough &&
          d.borough.toLowerCase() !== "undefined" &&
          d.borough.toLowerCase() !== "unspecified"
      ),
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.descriptor
        ),
      (d) => d.borough
    );

    console.log(
      "Stacked Bar Chart by Count of Descriptor per Borough 2024:",
      stackedData2024
    );

    const boroughsBar = Array.from(stackedData2024, ([borough, descriptors]) => ({
      borough,
      descriptors: Array.from(descriptors, ([descriptor, count]) => ({
        descriptor,
        count,
      })),
    }));

    boroughsBar.forEach((b) => {
      b.totalCount = b.descriptors.reduce((sum, desc) => sum + desc.count, 0);
    });

    const keys = Array.from(
      new Set(boroughsBar.flatMap((b) => b.descriptors.map((d) => d.descriptor)))
    );

    const fixedCategories = [
      "Signs of Rodents",
      "Condition Attracting Rodents",
      "Mouse Sighting",
      "Rat Sighting",
    ];

    // Extract unique descriptors from the data
    const allDescriptors = new Set();
    boroughsBar.forEach((borough) => {
      borough.descriptors.forEach((descriptor) => {
        allDescriptors.add(descriptor.descriptor); // Add descriptor to the set
      });
    });

    // Convert the set to an array
    const dynamicCategories = Array.from(allDescriptors);

    // Filter out the fixed categories that are already in the dynamic categories
    const dynamicCategoriesExcludingFixed = dynamicCategories.filter(
      (category) => !fixedCategories.includes(category)
    );

    // Combine the fixed categories with dynamic categories
    const finalCategories = [
      ...fixedCategories,
      ...dynamicCategoriesExcludingFixed,
    ];

    // Create the stack with the combined order of categories
    const stack = d3
      .stack()
      .keys(finalCategories) // Use the combined fixed + dynamic order
      .value(
        (d, key) =>
          d.descriptors.find((desc) => desc.descriptor === key)?.count || 0
      );

    const series = stack(boroughsBar);
    const marginBar = { top: 20, right: 20, bottom: 40, left: 40 };
    const widthBar = parseInt(d3.select("#stacked-bar-charts").style("width"));
    const heightBar = parseInt(d3.select("#stacked-bar-charts").style("height"));
    const maxValueBar = d3.max(series[series.length - 1], (d) => d[1]);

    stackedBarCharts
      .append("text")
      .attr("class", "rodents-2024")
      .attr("x", 0)
      .attr("y", 20)
      .attr("font-size", 15)
      .attr("fill", "black")
      .style("font-weight", "bold")
      .text("Counts by Borough and Descriptor in 2024");

    const xScale = d3
      .scaleBand()
      .domain(boroughsBar.map((b) => b.borough))
      .range([marginBar.left, widthBar - marginBar.right])
      .paddingInner(0.1)
      .paddingOuter(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, BarYGlobalMax])
      //    .domain([0, maxValueBar])
      .range([heightBar - marginBar.top, marginBar.bottom])
      .nice();

    // For Bar Chart
    const BarDefs = d3
      .select("#stacked-bar-charts")
      .append("defs")
      .attr("class", "rodents-2024");

    BarDefs.append("pattern")
      .attr("id", "cheesePattern-2024") // ID to reference the pattern later for Bar Chart
      .attr("width", 2)
      .attr("height", 2)
      .append("image")
      .attr("href", "./assets/squareCheese.svg") // Path to the SVG image
      .attr("width", 300)
      .attr("height", 300);

    const barDescriptorColors = {
      "Rat Sighting": "black",
      "Mouse Sighting": "#d1d3d4",
      "Condition Attracting Rodents": "url(#cheesePattern-2024)",
      "Signs of Rodents": "#f1de00",
    };

    // Example of applying border styles
    const descriptorBorders = {
      "Rat Sighting": "1px solid black",
      "Mouse Sighting": "1px solid gray",
      "Condition Attracting Rodents": "1px solid black", // Border for SVG image
      "Signs of Rodents": "1px solid black",
    };

    // Create your color scale using the descriptor colors
    const colorScaleBar = d3
      .scaleOrdinal()
      .domain(Object.keys(barDescriptorColors)) // Use descriptor keys as the domain
      .range(Object.values(barDescriptorColors));

    const axes_layer = stackedBarCharts.append("g").attr("class", "rodents-2024");
    const bars_layer = stackedBarCharts.append("g").attr("class", "rodents-2024");

    const bars = bars_layer
      .selectAll("g")
      .data(stack(boroughsBar))
      .join("g")
      .attr("fill", (d, i) => colorScaleBar(d.key));

    const stackedTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "stackedTooltip")
      .style("background-color", "white")
      .style("padding", "6px 10px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "5px")
      .style("position", "absolute") // Ensure it's absolutely positioned
      .style("opacity", 0); // Initially hidden

    // Bars and event listeners
    bars
      .selectAll("rect")
      .data((d) => d)
      .join("rect")
      .attr("x", (d) => xScale(d.data.borough))
      .attr("y", (d) => yScale(d[1]))
      .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
      .attr("width", xScale.bandwidth())
      // THIS PART OF THE CODE IS NOT WORKING. IT WON'T DO THE CORRECT STROKES ON THE BARS, FIX LATER
      .attr("fill", (d) => barDescriptorColors[d.descriptor]) // Apply the color based on the descriptor
      .attr("stroke", (d) => descriptorBorders[d.descriptor]) // Apply the border style based on the descriptor
      .on("mouseover", (event, d) => {
        const borough = d.data.borough;
        const descriptor = d.data.descriptors.find(
          (desc) => desc.count === d[1] - d[0]
        ).descriptor;
        const count = d[1] - d[0];

        stackedTooltip
          .style("opacity", 1)
          .style("z-index", 6000) // Ensure it's on top
          .html(
            `${borough
              .split(" ")
              .map(
                (word) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")}<br>${descriptor}<br>${d3.format(",")(count)}`
          )
          .style("left", `${event.pageX + 10}px`) // Add offset for visibility
          .style("top", `${event.pageY + 10}px`) // Add offset for visibility
          .transition()
          .duration(100);

        // Apply custom styles based on the descriptor
        switch (descriptor) {
          case "Condition Attracting Rodents":
            stackedTooltip
              .style("background-color", "#fee459")
              .style("border", "1px solid white")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          case "Rat Sighting":
            stackedTooltip
              .style("background-color", "black")
              .style("border", "1px solid white")
              .style("color", "white")
              .style("line-height", "1.5");
            break;
          case "Mouse Sighting":
            stackedTooltip
              .style("background-color", "#d1d3d4")
              .style("border", "1px solid white")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          case "Signs of Rodents":
            stackedTooltip
              .style("background-color", "#f1de00")
              .style("border", "1px solid black")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          default:
            stackedTooltip
              .style("background-color", "#ffffff") // Default white background
              .style("border", "1px solid #ccc")
              .style("color", "#333")
              .style("line-height", "1.5");
            break;
        }
      })
      .on("mousemove", (event) => {
        stackedTooltip
          .style("left", `${event.pageX + 10}px`) // Add offset for visibility
          .style("top", `${event.pageY + 10}px`); // Add offset for visibility
      })
      .on("mouseout", () => {
        stackedTooltip.transition().duration(100).style("opacity", 0); // Hide tooltip
      });

    // Total Count text labels
    bars_layer
      .selectAll("text")
      .data(boroughsBar)
      .join("text")
      .attr("x", (b) => xScale(b.borough) + xScale.bandwidth() / 2)
      .attr("y", (b) => yScale(b.totalCount) - 5)
      .attr("text-anchor", "middle")
      .html((b) => `Total: ${new Intl.NumberFormat().format(b.totalCount)}`)
      .style("font-size", "10px");

    axes_layer
      .append("g")
      .call(d3.axisLeft(yScale))
      .style("font-family", "Lexend Deca")
      .attr("transform", `translate(${marginBar.left}, 0)`);

    axes_layer
      .append("g")
      .call(d3.axisBottom(xScale))
      .style("font-family", "Lexend Deca")
      .attr("transform", `translate(0, ${heightBar - marginBar.top})`);

    // gotta love stack overflow solving problems for me https://stackoverflow.com/questions/63838288/convert-json-to-geojson-frontend

    const APIUrl2024 = url2024;
    getData2024();

    map.createPane("Zip2024Pane");
    map.getPane("Zip2024Pane").style.zIndex = 20;

    async function getData2024() {
      let mygeojson2024 = { type: "FeatureCollection", features: [] };
      const zipMarkerCount = {}; // Object to keep track of the marker counts by zip code
      const zipClusters = {}; // To hold the marker clusters by zip code

      // Fetch and parse the data
      const Points2024 = await fetch(APIUrl2024)
        .then((response) => response.json())
        .then((data) => {
          for (let point of data) {
            // Ensure latitude and longitude are valid
            if (!point.latitude || !point.longitude) {
              continue;
            }

            // Convert to a GeoJSON feature
            let coordinate = [
              parseFloat(point.longitude),
              parseFloat(point.latitude),
            ];
            let properties = point;
            delete properties.longitude;
            delete properties.latitude;

            let feature = {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: coordinate,
              },
              properties: properties,
            };
            mygeojson2024.features.push(feature);

            // Count the markers by zip code
            const zipCode = point.incident_zip;
            if (zipCode) {
              if (!zipMarkerCount[zipCode]) {
                zipMarkerCount[zipCode] = 0;
              }
              zipMarkerCount[zipCode]++;
            }
          }
        });

      console.log("GeoJson 2024 All Points:", mygeojson2024);
      console.log("2024 Marker Counts by Zip Code:", zipMarkerCount);

      // Create the marker clusters
      for (const feature of mygeojson2024.features) {
        const { coordinates } = feature.geometry;
        const { descriptor, created_date, borough, incident_zip, location_type } =
          feature.properties;

        if (!incident_zip) {
          continue;
        }

        // Define the marker icon based on descriptor
        let markerIcon;
        switch (descriptor) {
          case "Condition Attracting Rodents":
            markerIcon = L.icon({
              iconUrl: "./assets/cheese.svg", // CHEESE
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Rat Sighting":
            markerIcon = L.icon({
              iconUrl: "./assets/rat.svg", // RAT
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Mouse Sighting":
            markerIcon = L.icon({
              iconUrl: "./assets/mouse.svg", // MOUSE
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Signs of Rodents":
            markerIcon = L.icon({
              iconUrl: "./assets/signs.svg", // SIGNS
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          default:
            markerIcon = null; // Leaflet's default marker
            break;
        }

        // Create the marker with the appropriate icon
        const marker = L.marker([coordinates[1], coordinates[0]], {
          icon: markerIcon,
        });
        const popupContent = `
        <div style="display:flex;flex-direction:column;justify-content:center;">
          <div style="margin:0 auto;font-weight:600;">${descriptor}</div>
          <div style="margin:0 auto;font-weight:400;">
            ${new Date(created_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
          </div>
          <div style="margin:0 auto;font-weight:400;">${location_type}</div>
          <div style="margin:0 auto;font-weight:400;">${borough
            .split(" ")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ")}, ${incident_zip}</div>
        </div>
      `;

        let cleanDescriptor = descriptor.replace(/\s+/g, "-");
        marker.bindPopup(popupContent, { className: cleanDescriptor });

        // Add the marker to the corresponding zip cluster
        if (!zipClusters[incident_zip]) {
          zipClusters[incident_zip] = L.markerClusterGroup();
        }
        zipClusters[incident_zip].addLayer(marker);
      }

      const markerClusterLayer2024 = L.layerGroup();

      markerClusterLayer2024.onAdd = function (map) {
        // Add a class to the layer's container when it is added to the map
        this._map._container.classList.add("Rodents-2024-Cluster");
        L.LayerGroup.prototype.onAdd.call(this, map); // Call the parent method to ensure the layer is added correctly
      };

      // Add markers to the layer
      for (const zip in zipClusters) {
        markerClusterLayer2024.addLayer(zipClusters[zip]);
      }

      // Add GeoJSON layer with dynamic styling based on marker count
      const zipCodeGeoJSONLayer2024 = L.geoJSON(null, {
        style: function (feature) {
          const zipCode = feature.properties.modzcta; // modzcta is the key for zip code
          const markerCount = zipMarkerCount[zipCode] || 0;

          // Define a color scale based on marker count
          let fillColor;
          if (markerCount > 750) {
            fillColor = "darkgoldenrod"; // High count
          } else if (markerCount > 500) {
            fillColor = "goldenrod"; // Medium count
          } else if (markerCount > 250) {
            fillColor = "gold"; // Low count
          } else if (markerCount > 0) {
            fillColor = "palegoldenrod"; // Low count
          } else {
            fillColor = "lightgoldenrodyellow"; // No markers
          }

          return {
            color: "goldenrod", // Border color
            weight: 1, // Border weight
            opacity: 0.5, // Border opacity
            fillColor: fillColor, // Fill color
            fillOpacity: 0.6, // Fill opacity
          };
        },
        onEachFeature: function (feature, layer) {
          // Use getElement() to access the DOM element for the layer
          const element = layer.getElement();
          if (element) {
            element.classList.add("Zip-Areas-2024"); // Add the class to the DOM element
          }
        },
        pane: "Zip2024Pane", // Ensure the GeoJSON uses the correct pane
      });

      // Load GeoJSON shapes for zip codes
      d3.json("./data/Modified_Zip_Code_Tabulation_Areas_(MODZCTA).geojson").then(
        function (geojsonData) {
          zipCodeGeoJSONLayer2024.addData(geojsonData); // Add the GeoJSON data to the layer
        }
      );

      // Add the layers to the global overlayLayers object
      overlayLayers["2024 Rodent Complaints"] = markerClusterLayer2024;
      overlayLayers["2024 Zip Codes"] = zipCodeGeoJSONLayer2024;

      // Update the layer control
      layerControl.addOverlay(markerClusterLayer2024, "2024 Rodent Complaints");
      layerControl.addOverlay(zipCodeGeoJSONLayer2024, "2024 Zip Codes");

      // Optionally, add the layers to the map
      // map.addLayer(markerClusterLayer); // Add the marker clusters layer by default
      // map.addLayer(zipCodeGeoJSONLayer); // Add the zip code areas layer by default

      map.on('layeradd', function (e) {
        if (e.layer === markerClusterLayer2024) {
          activeLayers.push("2024 Rodent Complaints");
          updateTitle(activeLayers);
        }
        if (e.layer === zipCodeGeoJSONLayer2024) {
          activeLayers.push("2024 Zip Codes");
          updateTitle(activeLayers);
        }
      });

      map.on('layerremove', function (e) {
        if (e.layer === markerClusterLayer2024) {
          const index = activeLayers.indexOf("2024 Rodent Complaints");
          if (index > -1) {
            activeLayers.splice(index, 1); // Remove from array
          }
          updateTitle(activeLayers);
        }
        if (e.layer === zipCodeGeoJSONLayer2024) {
          const index = activeLayers.indexOf("2024 Zip Codes");
          if (index > -1) {
            activeLayers.splice(index, 1); // Remove from array
          }
          updateTitle(activeLayers);
        }
      });


    }


    const timeSeriesData2024 = d3.rollup(
      json2024.filter(
        (d) =>
          d.borough &&
          d.borough.toLowerCase() !== "undefined" &&
          d.borough.toLowerCase() !== "unspecified"
      ),
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.borough
        ),
      (d) => new Date(d.created_date).getMonth()
    );

    console.log("2024 Line Chart with Month by Count:", timeSeriesData2024);

    // Array of month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Map the numeric months to month names
    const months = monthNames; // Now 'months' will be an array of month names

    const boroughsLine = Array.from(
      new Set(
        json2024
          .filter(
            (d) =>
              d.borough &&
              d.borough.toLowerCase() !== "undefined" &&
              d.borough.toLowerCase() !== "unspecified"
          ) // filter out unwanted boroughs
          .map((d) => d.borough) // Get all boroughs
      )
    );

    // Structure the data for each borough in a format suitable for the line chart
    const boroughData = boroughsLine.map((borough) => {
      return {
        borough,
        values: months.map((monthName, monthIndex) => {
          const monthData = timeSeriesData2024.get(monthIndex); // Use monthIndex for rollup
          return {
            month: monthName, // Month name, e.g., 'January'
            count: monthData?.get(borough) || 0, // If no data for a borough in a month, count is 0
          };
        }),
      };
    });

    const marginLine = { top: 20, right: 20, bottom: 40, left: 40 };
    const widthLine = parseInt(d3.select("#line-chart").style("width"));
    const heightLine = parseInt(d3.select("#line-chart").style("height"));

    lineChart
      .append("text")
      .attr("class", "rodents-2024")
      .attr("x", 0)
      .attr("y", 20)
      .attr("font-size", 15)
      .attr("fill", "black")
      .style("font-weight", "bold")
      .text("Counts by Borough per Month in 2024");

    // Append the SVG element to the DOM
    lineChart
      .select("#line-chart")
      .append("svg")
      .attr("class", "rodents-2024")
      .attr("width", widthLine + marginLine.left + marginLine.right)
      .attr("height", heightLine + marginLine.top + marginLine.bottom)
      .append("g")
      .attr("transform", `translate(${marginLine.left},${marginLine.top})`);

    // Set up the x and y scales
    const x = d3
      .scaleBand()
      .domain(months)
      .range([marginLine.left, widthLine - marginLine.right])
      .padding(0.1); // Padding between bars (or in this case, data points)

    const y = d3
      .scaleLinear()
      .domain([0, LineYGlobalMax])
      //    .domain([0, d3.max(boroughData, (d) => d3.max(d.values, (v) => v.count))])
      .nice()
      .range([heightLine - marginLine.top, marginLine.bottom]);

    const boroughColorMapping = {
      MANHATTAN: "#EE352E",
      BROOKLYN: "#FCCC0A",
      QUEENS: "#B933AD",
      BRONX: "#00933C",
      "STATEN ISLAND": "#0078C6",
    };

    const color = d3
      .scaleOrdinal()
      .domain(Object.keys(boroughColorMapping)) // Use borough names as the domain
      .range(Object.values(boroughColorMapping)); // Use hex colors as the range

    const lineTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "stackedTooltip")
      .style("background-color", "white")
      .style("padding", "6px 10px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "5px")
      .style("position", "absolute") // Ensure it's absolutely positioned
      .style("opacity", 0); // Initially hidden

    lineChart
      .append("g")
      .attr("class", "x-axis")
      .attr("class", "rodents-2024")
      .attr("transform", `translate(0, ${heightLine - marginLine.top})`)
      .style("font-family", "Lexend Deca")
      .call(
        d3.axisBottom(x).tickFormat(function (d) {
          // Take the first 3 characters of the month name
          return d.slice(0, 3);
        })
      );

    lineChart
      .append("g")
      .attr("class", "y-axis")
      .attr("class", "rodents-2024")
      .attr("transform", `translate(${marginLine.left}, 0)`)
      .style("font-family", "Lexend Deca")
      .call(d3.axisLeft(y));

    // Define the line generator
    const line = d3
      .line()
      .x((d) => x(d.month) + x.bandwidth() / 2) // Position by month
      .y((d) => y(d.count)); // Position by count

    // Draw lines for each borough
    boroughData.forEach((borough) => {
      // Draw the line for the borough
      lineChart
        .append("path")
        .data([borough.values]) // Use the borough's month-count data
        .attr("class", "line")
        .attr("class", "rodents-2024")
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", color(borough.borough))
        .attr("stroke-width", 2);

      // Add points (circles) for each month on the line
      lineChart
        .selectAll(".point-" + borough.borough)
        .data(borough.values) // Use the borough's month-count data
        .enter()
        .append("circle")
        .attr("class", "point")
        .attr("class", "rodents-2024")
        .attr("cx", (d) => x(d.month) + x.bandwidth() / 2) // Position by month
        .attr("cy", (d) => y(d.count)) // Position by count
        .attr("r", 5) // Radius of the points
        .attr("fill", color(borough.borough)) // Color the points according to the borough
        .attr("stroke", "white") // White border around the points
        .attr("stroke-width", 1) // Stroke width for the border
        .on("mouseover", (event, d) => {
          // Show the tooltip on hover
          lineTooltip.style("opacity", 0.9).style("z-index", 6000); // Ensure it's on top
          lineTooltip
            .html(
              `${borough.borough
                .split(" ")
                .map(
                  (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ")}<br>${d.month}: ${d3.format(",")(d.count)}`
            )
            .style("left", event.pageX + 10 + "px")
            .style("top", event.pageY + 10 + "px");
        })
        .on("mousemove", (event) => {
          lineTooltip
            .style("left", `${event.pageX + 10}px`) // Add offset for visibility
            .style("top", `${event.pageY + 10}px`); // Add offset for visibility
        })
        .on("mouseout", () => {
          lineTooltip.transition().duration(100).style("opacity", 0); // Hide tooltip
        });
    });

    // (Optional) Add tooltips to display the exact count on hover
    lineChart
      .selectAll(".point")
      .append("title")
      .text((d) => `${d.month}: ${d.count}`);

    // Add a legend
    const legendLine = lineChart
      .selectAll(".legend")
      .data(boroughData)
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", (d, i) => `translate(0, ${i * 20})`);
    //console.log(boroughData);

    // Add lines for each borough to the legend
    legendLine
      .append("line")
      .attr("x1", marginLine.left + marginLine.right - 9) // Starting point of the line
      .attr("x2", marginLine.left + marginLine.right + 12) // Ending point of the line
      .attr("y1", marginLine.bottom) // Positioning the line vertically (aligned with text)
      .attr("y2", marginLine.bottom) // Same as y1 to keep it horizontal
      .attr("stroke", (d) => color(d.borough)) // Set line color based on borough
      .attr("stroke-width", 2); // Set line width

    legendLine
      .append("circle")
      .attr("class", "point")
      .attr("cx", marginLine.left + marginLine.right + 1.5)
      .attr("cy", marginLine.bottom)
      .attr("r", 5) // Radius of the points
      .attr("fill", (d) => color(d.borough)) // Use 'd' to correctly color the circle based on the borough
      .attr("stroke", "white") // White border around the points
      .attr("stroke-width", 1); // Stroke width for the border

    legendLine
      .append("text")
      .attr("x", marginLine.left + marginLine.right + 21)
      .attr("y", marginLine.bottom)
      .attr("dy", ".35em")
      .attr("text-anchor", "beginning")
      .style("font-size", "10px")
      .text((d) => d.borough);

    const LocationType2024 = d3.rollup(
      json2024,
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.descriptor
        ),
      (d) => d.location_type
    );

    console.log("2024 Treemap Location Type and Count:", LocationType2024);

    const root = {
      name: "Rodent Complaints", // Root level name
      children: Array.from(LocationType2024.entries()).map(
        ([locationType, descriptors]) => {
          // Calculate total value for each locationType
          const totalValue = Array.from(descriptors.values()).reduce(
            (sum, count) => sum + count,
            0
          );

          return {
            name: locationType,
            total: totalValue, // Add the total count here
            children: Array.from(descriptors.entries()).map(
              ([descriptor, count]) => ({
                name: descriptor,
                value: count,
              })
            ),
          };
        }
      ),
    };

    // console.log("Root for the Tree Map:", root);

    const cheeseTree = d3
      .select("#tree-map")
      .append("svg") // Create the SVG element
      .style("width", `${window.innerWidth / 2}px`)
      .style("height", `${window.innerHeight / 2 - 90}px`)
      .attr("class", "rodents-2024");

    const hierarchy = d3
      .hierarchy(root)
      .sum((d) => d.value) // Sum the values to calculate the size of each block in the tree map
      .sort((a, b) => a.value - b.value); // Optional: Sort in descending order by value

    // Step 4: Set up the dimensions for the tree map
    const marginTree = { top: 40, right: 20, bottom: 40, left: 40 };
    const widthTree = parseInt(d3.select("#tree-map").style("width"));
    const heightTree = parseInt(d3.select("#tree-map").style("height"));

    // Step 5: Create the tree map layout
    const treemap = d3
      .treemap()
      .size([widthTree - marginTree.right, heightTree - marginTree.bottom])
      .padding(1);

    // Step 6: Apply the layout to the hierarchy data
    treemap(hierarchy);

    const colorScaleTree = d3
      .scaleLinear()
      .domain([
        d3.min(hierarchy.children, (d) => d.value),
        d3.max(hierarchy.children, (d) => d.value),
      ]) // Domain based on the min and max value
      .range(["darkgoldenrod", "palegoldenrod"]); // Color range

    const treeTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background", "rgba(0, 0, 0, 0.7)")
      .style("color", "white")
      .style("padding", "5px 10px 4px 10px")
      .style("border-radius", "3px")
      .style("font-size", "15px")
      .style("z-index", 6000);

    // Function to show descriptors for a clicked locationType
    function showDescriptors(locationTypeData) {
      // Clear the existing chart
      cheeseTree.selectAll("*").remove();

      // Create a new hierarchy for the descriptors
      const descriptorHierarchy = d3
        .hierarchy({
          name: locationTypeData.data.name, // Keep the locationType name
          children: locationTypeData.children.map((d) => ({
            name: d.data.name, // Keep the descriptor name
            value: d.data.value, // Keep the descriptor value (count)
          })),
        })
        .sum((d) => d.value) // Sum the values to calculate the size of each block
        .sort((a, b) => a.value - b.value); // Sort by value

      // Apply the treemap layout to the descriptors
      treemap(descriptorHierarchy);

      cheeseTree
        .append("text")
        .attr("x", 0)
        .attr("y", 30)
        .attr("font-size", 15)
        .attr("fill", "black")
        .style("font-weight", "bold")
        .text(`Descriptors for ${locationTypeData.data.name}`);

      // Add descriptors to the tree chart
      const descriptors = cheeseTree
        .selectAll("g")
        .data(descriptorHierarchy.leaves()) // Use leaves here to get the actual descriptors
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${d.x0},${d.y0 + marginTree.top})`);

      // For Tree Chart
      const TreeDefs = d3
        .select("#tree-map")
        .append("defs")
        .attr("class", "rodents-2024");

      TreeDefs.append("pattern")
        .attr("id", "cheesePattern-Big-2024") // ID to reference the pattern later for Tree Chart
        .attr("width", 2)
        .attr("height", 2)
        .append("image")
        .attr("href", "./assets/squareCheese-Big.svg") // Path to the SVG image
        .attr("width", 1800)
        .attr("height", 1800);

      const treeDescriptorColors = {
        "Rat Sighting": "black", // Solid color
        "Mouse Sighting": "#d1d3d4", // Gray color
        "Condition Attracting Rodents": "url(#cheesePattern-Big-2024)", // Reference the Tree Chart Pattern
        "Signs of Rodents": "#f1de00", // Yellow color
      };

      const TreeColorScale = d3
        .scaleOrdinal()
        .domain(Object.keys(treeDescriptorColors)) // Descriptor keys as the domain
        .range(Object.values(treeDescriptorColors)); // Colors/patterns as the range

      descriptors
        .append("rect")
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0)
        .attr("fill", (d) => TreeColorScale(d.data.name));

      descriptors
        .append("text")
        .attr("x", 5)
        .attr("y", 15)
        .attr("font-size", 12)
        .attr("fill", function (d) {
          // Apply different colors based on descriptor name
          switch (d.data.name) {
            case "Rat Sighting":
              return "white";
            default:
              return "black"; // Default color
          }
        })
        .text((d) => `${d.data.name}: ${d3.format(",")(d.data.value)}`);

      // Optional: Add a "Back" button to go back to the full view
      cheeseTree
        .append("text")
        .attr("x", widthTree - marginTree.left - 3)
        .attr("y", 30)
        .attr("font-size", 10)
        .attr("fill", "goldenrod")
        .style("cursor", "pointer")
        .text("Back")
        .on("click", function () {
          // Go back to the full view by clearing the chart and redrawing the main treemap
          cheeseTree.selectAll("*").remove();
          drawMainTreeMap();
        });
    }

    // Redraw the main treemap (locationType level)
    function drawMainTreeMap() {
      treemap(hierarchy);

      cheeseTree
        .append("text")
        .attr("class", "rodents-2024")
        .attr("x", 0)
        .attr("y", 30)
        .attr("font-size", 15)
        .attr("fill", "black")
        .style("font-weight", "bold")
        .text("Location Type in 2024");

      const locationTypes = cheeseTree
        .selectAll("g")
        .data(hierarchy.children)
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${d.x0},${d.y0 + marginTree.top})`)
        .on("click", function (event, d) {
          treeTooltip.style("visibility", "hidden");
          // When a locationType is clicked, show its descriptors
          showDescriptors(d);
        })
        .on("mouseover", function (event, d) {
          // Show tooltip on hover
          treeTooltip
            .style("visibility", "visible")
            .html(`${d.data.name}: ${d3.format(",")(d.data.total)}`);
        })
        .on("mousemove", function (event) {
          // Position the tooltip near the mouse pointer
          treeTooltip
            .style("top", event.pageY + 10 + "px")
            .style("left", event.pageX + 10 + "px");
        })
        .on("mouseout", function () {
          // Hide the tooltip when mouse leaves
          treeTooltip.style("visibility", "hidden");
        });

      locationTypes
        .append("rect")
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0)
        .attr("fill", (d) => colorScaleTree(d.value));
    }

    // Initial drawing of the main treemap
    drawMainTreeMap();

    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("2024 Loaded after delay.");

  } catch (error) {
    console.error("Error loading or processing data for 2024:", error);
  }


  d3.selectAll(".rodents-2024").style("display", "none");

})();





/* ----- */
/* -------------------------------------- ALL API QUERIES AND VISUALIZATIONS SPECIFIC TO 2025 -------------------------------------- */
/* ----- */

(async function Rodents2025() {
  const url2025 =
    "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$query=SELECT%0A%20%20%60unique_key%60%2C%0A%20%20%60created_date%60%2C%0A%20%20%60closed_date%60%2C%0A%20%20%60agency%60%2C%0A%20%20%60agency_name%60%2C%0A%20%20%60complaint_type%60%2C%0A%20%20%60descriptor%60%2C%0A%20%20%60location_type%60%2C%0A%20%20%60incident_zip%60%2C%0A%20%20%60incident_address%60%2C%0A%20%20%60street_name%60%2C%0A%20%20%60cross_street_1%60%2C%0A%20%20%60cross_street_2%60%2C%0A%20%20%60intersection_street_1%60%2C%0A%20%20%60intersection_street_2%60%2C%0A%20%20%60address_type%60%2C%0A%20%20%60city%60%2C%0A%20%20%60landmark%60%2C%0A%20%20%60facility_type%60%2C%0A%20%20%60status%60%2C%0A%20%20%60due_date%60%2C%0A%20%20%60resolution_description%60%2C%0A%20%20%60resolution_action_updated_date%60%2C%0A%20%20%60community_board%60%2C%0A%20%20%60bbl%60%2C%0A%20%20%60borough%60%2C%0A%20%20%60x_coordinate_state_plane%60%2C%0A%20%20%60y_coordinate_state_plane%60%2C%0A%20%20%60open_data_channel_type%60%2C%0A%20%20%60park_facility_name%60%2C%0A%20%20%60park_borough%60%2C%0A%20%20%60vehicle_type%60%2C%0A%20%20%60taxi_company_borough%60%2C%0A%20%20%60taxi_pick_up_location%60%2C%0A%20%20%60bridge_highway_name%60%2C%0A%20%20%60bridge_highway_direction%60%2C%0A%20%20%60road_ramp%60%2C%0A%20%20%60bridge_highway_segment%60%2C%0A%20%20%60latitude%60%2C%0A%20%20%60longitude%60%2C%0A%20%20%60location%60%0AWHERE%0A%20%20caseless_one_of(%60complaint_type%60%2C%20%22Rodent%22)%0A%20%20AND%20(%60created_date%60%0A%20%20%20%20%20%20%20%20%20BETWEEN%20%222025-01-01T00%3A00%3A00%22%20%3A%3A%20floating_timestamp%0A%20%20%20%20%20%20%20%20%20AND%20%222025-12-31T23%3A59%3A59%22%20%3A%3A%20floating_timestamp)%0AORDER%20BY%20%60created_date%60%20DESC%20NULL%20FIRST%0ALIMIT%20100000%20OFFSET%200";

  try {

    const json2025 = await d3.json(url2025);
    // there were 31615 rows in 2025
    console.log("2025:", json2025);

    const stackedData2025 = d3.rollup(
      json2025.filter(
        (d) =>
          d.borough &&
          d.borough.toLowerCase() !== "undefined" &&
          d.borough.toLowerCase() !== "unspecified"
      ),
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.descriptor
        ),
      (d) => d.borough
    );

    console.log(
      "Stacked Bar Chart by Count of Descriptor per Borough 2025:",
      stackedData2025
    );

    const boroughsBar = Array.from(stackedData2025, ([borough, descriptors]) => ({
      borough,
      descriptors: Array.from(descriptors, ([descriptor, count]) => ({
        descriptor,
        count,
      })),
    }));

    boroughsBar.forEach((b) => {
      b.totalCount = b.descriptors.reduce((sum, desc) => sum + desc.count, 0);
    });

    const keys = Array.from(
      new Set(boroughsBar.flatMap((b) => b.descriptors.map((d) => d.descriptor)))
    );

    const fixedCategories = [
      "Signs of Rodents",
      "Condition Attracting Rodents",
      "Mouse Sighting",
      "Rat Sighting",
    ];

    // Extract unique descriptors from the data
    const allDescriptors = new Set();
    boroughsBar.forEach((borough) => {
      borough.descriptors.forEach((descriptor) => {
        allDescriptors.add(descriptor.descriptor); // Add descriptor to the set
      });
    });

    // Convert the set to an array
    const dynamicCategories = Array.from(allDescriptors);

    // Filter out the fixed categories that are already in the dynamic categories
    const dynamicCategoriesExcludingFixed = dynamicCategories.filter(
      (category) => !fixedCategories.includes(category)
    );

    // Combine the fixed categories with dynamic categories
    const finalCategories = [
      ...fixedCategories,
      ...dynamicCategoriesExcludingFixed,
    ];

    // Create the stack with the combined order of categories
    const stack = d3
      .stack()
      .keys(finalCategories) // Use the combined fixed + dynamic order
      .value(
        (d, key) =>
          d.descriptors.find((desc) => desc.descriptor === key)?.count || 0
      );

    const series = stack(boroughsBar);
    const marginBar = { top: 20, right: 20, bottom: 40, left: 40 };
    const widthBar = parseInt(d3.select("#stacked-bar-charts").style("width"));
    const heightBar = parseInt(d3.select("#stacked-bar-charts").style("height"));
    const maxValueBar = d3.max(series[series.length - 1], (d) => d[1]);

    stackedBarCharts
      .append("text")
      .attr("class", "rodents-2025")
      .attr("x", 0)
      .attr("y", 20)
      .attr("font-size", 15)
      .attr("fill", "black")
      .style("font-weight", "bold")
      .text("Counts by Borough and Descriptor in 2025");

    const xScale = d3
      .scaleBand()
      .domain(boroughsBar.map((b) => b.borough))
      .range([marginBar.left, widthBar - marginBar.right])
      .paddingInner(0.1)
      .paddingOuter(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, BarYGlobalMax])
      //    .domain([0, maxValueBar])
      .range([heightBar - marginBar.top, marginBar.bottom])
      .nice();

    // For Bar Chart
    const BarDefs = d3
      .select("#stacked-bar-charts")
      .append("defs")
      .attr("class", "rodents-2025");

    BarDefs.append("pattern")
      .attr("id", "cheesePattern-2025") // ID to reference the pattern later for Bar Chart
      .attr("width", 2)
      .attr("height", 2)
      .append("image")
      .attr("href", "./assets/squareCheese.svg") // Path to the SVG image
      .attr("width", 300)
      .attr("height", 300);

    const barDescriptorColors = {
      "Rat Sighting": "black",
      "Mouse Sighting": "#d1d3d4",
      "Condition Attracting Rodents": "url(#cheesePattern-2025)",
      "Signs of Rodents": "#f1de00",
    };

    // Example of applying border styles
    const descriptorBorders = {
      "Rat Sighting": "1px solid black",
      "Mouse Sighting": "1px solid gray",
      "Condition Attracting Rodents": "1px solid black", // Border for SVG image
      "Signs of Rodents": "1px solid black",
    };

    // Create your color scale using the descriptor colors
    const colorScaleBar = d3
      .scaleOrdinal()
      .domain(Object.keys(barDescriptorColors)) // Use descriptor keys as the domain
      .range(Object.values(barDescriptorColors));

    const axes_layer = stackedBarCharts.append("g").attr("class", "rodents-2025");
    const bars_layer = stackedBarCharts.append("g").attr("class", "rodents-2025");

    const bars = bars_layer
      .selectAll("g")
      .data(stack(boroughsBar))
      .join("g")
      .attr("fill", (d, i) => colorScaleBar(d.key));

    const stackedTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "stackedTooltip")
      .style("background-color", "white")
      .style("padding", "6px 10px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "5px")
      .style("position", "absolute") // Ensure it's absolutely positioned
      .style("opacity", 0); // Initially hidden

    // Bars and event listeners
    bars
      .selectAll("rect")
      .data((d) => d)
      .join("rect")
      .attr("x", (d) => xScale(d.data.borough))
      .attr("y", (d) => yScale(d[1]))
      .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
      .attr("width", xScale.bandwidth())
      // THIS PART OF THE CODE IS NOT WORKING. IT WON'T DO THE CORRECT STROKES ON THE BARS, FIX LATER
      .attr("fill", (d) => barDescriptorColors[d.descriptor]) // Apply the color based on the descriptor
      .attr("stroke", (d) => descriptorBorders[d.descriptor]) // Apply the border style based on the descriptor
      .on("mouseover", (event, d) => {
        const borough = d.data.borough;
        const descriptor = d.data.descriptors.find(
          (desc) => desc.count === d[1] - d[0]
        ).descriptor;
        const count = d[1] - d[0];

        stackedTooltip
          .style("opacity", 1)
          .style("z-index", 6000) // Ensure it's on top
          .html(
            `${borough
              .split(" ")
              .map(
                (word) =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")}<br>${descriptor}<br>${d3.format(",")(count)}`
          )
          .style("left", `${event.pageX + 10}px`) // Add offset for visibility
          .style("top", `${event.pageY + 10}px`) // Add offset for visibility
          .transition()
          .duration(100);

        // Apply custom styles based on the descriptor
        switch (descriptor) {
          case "Condition Attracting Rodents":
            stackedTooltip
              .style("background-color", "#fee459")
              .style("border", "1px solid white")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          case "Rat Sighting":
            stackedTooltip
              .style("background-color", "black")
              .style("border", "1px solid white")
              .style("color", "white")
              .style("line-height", "1.5");
            break;
          case "Mouse Sighting":
            stackedTooltip
              .style("background-color", "#d1d3d4")
              .style("border", "1px solid white")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          case "Signs of Rodents":
            stackedTooltip
              .style("background-color", "#f1de00")
              .style("border", "1px solid black")
              .style("color", "black")
              .style("line-height", "1.5");
            break;
          default:
            stackedTooltip
              .style("background-color", "#ffffff") // Default white background
              .style("border", "1px solid #ccc")
              .style("color", "#333")
              .style("line-height", "1.5");
            break;
        }
      })
      .on("mousemove", (event) => {
        stackedTooltip
          .style("left", `${event.pageX + 10}px`) // Add offset for visibility
          .style("top", `${event.pageY + 10}px`); // Add offset for visibility
      })
      .on("mouseout", () => {
        stackedTooltip.transition().duration(100).style("opacity", 0); // Hide tooltip
      });

    // Total Count text labels
    bars_layer
      .selectAll("text")
      .data(boroughsBar)
      .join("text")
      .attr("x", (b) => xScale(b.borough) + xScale.bandwidth() / 2)
      .attr("y", (b) => yScale(b.totalCount) - 5)
      .attr("text-anchor", "middle")
      .html((b) => `Total: ${new Intl.NumberFormat().format(b.totalCount)}`)
      .style("font-size", "10px");

    axes_layer
      .append("g")
      .call(d3.axisLeft(yScale))
      .style("font-family", "Lexend Deca")
      .attr("transform", `translate(${marginBar.left}, 0)`);

    axes_layer
      .append("g")
      .call(d3.axisBottom(xScale))
      .style("font-family", "Lexend Deca")
      .attr("transform", `translate(0, ${heightBar - marginBar.top})`);

    // gotta love stack overflow solving problems for me https://stackoverflow.com/questions/63838288/convert-json-to-geojson-frontend

    const APIUrl2025 = url2025;
    getData2025();

    map.createPane("Zip2025Pane");
    map.getPane("Zip2025Pane").style.zIndex = 20;

    async function getData2025() {
      let mygeojson2025 = { type: "FeatureCollection", features: [] };
      const zipMarkerCount = {}; // Object to keep track of the marker counts by zip code
      const zipClusters = {}; // To hold the marker clusters by zip code

      // Fetch and parse the data
      const Points2025 = await fetch(APIUrl2025)
        .then((response) => response.json())
        .then((data) => {
          for (let point of data) {
            // Ensure latitude and longitude are valid
            if (!point.latitude || !point.longitude) {
              continue;
            }

            // Convert to a GeoJSON feature
            let coordinate = [
              parseFloat(point.longitude),
              parseFloat(point.latitude),
            ];
            let properties = point;
            delete properties.longitude;
            delete properties.latitude;

            let feature = {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: coordinate,
              },
              properties: properties,
            };
            mygeojson2025.features.push(feature);

            // Count the markers by zip code
            const zipCode = point.incident_zip;
            if (zipCode) {
              if (!zipMarkerCount[zipCode]) {
                zipMarkerCount[zipCode] = 0;
              }
              zipMarkerCount[zipCode]++;
            }
          }
        });

      console.log("GeoJson 2025 All Points:", mygeojson2025);
      console.log("2025 Marker Counts by Zip Code:", zipMarkerCount);

      // Create the marker clusters
      for (const feature of mygeojson2025.features) {
        const { coordinates } = feature.geometry;
        const { descriptor, created_date, borough, incident_zip, location_type } =
          feature.properties;

        if (!incident_zip) {
          continue;
        }

        // Define the marker icon based on descriptor
        let markerIcon;
        switch (descriptor) {
          case "Condition Attracting Rodents":
            markerIcon = L.icon({
              iconUrl: "./assets/cheese.svg", // CHEESE
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Rat Sighting":
            markerIcon = L.icon({
              iconUrl: "./assets/rat.svg", // RAT
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Mouse Sighting":
            markerIcon = L.icon({
              iconUrl: "./assets/mouse.svg", // MOUSE
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          case "Signs of Rodents":
            markerIcon = L.icon({
              iconUrl: "./assets/signs.svg", // SIGNS
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            });
            break;
          default:
            markerIcon = null; // Leaflet's default marker
            break;
        }

        // Create the marker with the appropriate icon
        const marker = L.marker([coordinates[1], coordinates[0]], {
          icon: markerIcon,
        });
        const popupContent = `
      <div style="display:flex;flex-direction:column;justify-content:center;">
        <div style="margin:0 auto;font-weight:600;">${descriptor}</div>
        <div style="margin:0 auto;font-weight:400;">
          ${new Date(created_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        </div>
        <div style="margin:0 auto;font-weight:400;">${location_type}</div>
        <div style="margin:0 auto;font-weight:400;">${borough
            .split(" ")
            .map(
              (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ")}, ${incident_zip}</div>
      </div>
    `;

        let cleanDescriptor = descriptor.replace(/\s+/g, "-");
        marker.bindPopup(popupContent, { className: cleanDescriptor });

        // Add the marker to the corresponding zip cluster
        if (!zipClusters[incident_zip]) {
          zipClusters[incident_zip] = L.markerClusterGroup();
        }
        zipClusters[incident_zip].addLayer(marker);
      }

      const markerClusterLayer2025 = L.layerGroup();

      markerClusterLayer2025.onAdd = function (map) {
        // Add a class to the layer's container when it is added to the map
        this._map._container.classList.add("Rodents-2025-Cluster");
        L.LayerGroup.prototype.onAdd.call(this, map); // Call the parent method to ensure the layer is added correctly
      };

      // Add markers to the layer
      for (const zip in zipClusters) {
        markerClusterLayer2025.addLayer(zipClusters[zip]);
      }

      // Add GeoJSON layer with dynamic styling based on marker count
      const zipCodeGeoJSONLayer2025 = L.geoJSON(null, {
        style: function (feature) {
          const zipCode = feature.properties.modzcta; // modzcta is the key for zip code
          const markerCount = zipMarkerCount[zipCode] || 0;

          // Define a color scale based on marker count
          let fillColor;
          if (markerCount > 750) {
            fillColor = "darkgoldenrod"; // High count
          } else if (markerCount > 500) {
            fillColor = "goldenrod"; // Medium count
          } else if (markerCount > 250) {
            fillColor = "gold"; // Low count
          } else if (markerCount > 0) {
            fillColor = "palegoldenrod"; // Low count
          } else {
            fillColor = "lightgoldenrodyellow"; // No markers
          }

          return {
            color: "goldenrod", // Border color
            weight: 1, // Border weight
            opacity: 0.5, // Border opacity
            fillColor: fillColor, // Fill color
            fillOpacity: 0.6, // Fill opacity
          };
        },
        onEachFeature: function (feature, layer) {
          // Use getElement() to access the DOM element for the layer
          const element = layer.getElement();
          if (element) {
            element.classList.add("Zip-Areas-2025"); // Add the class to the DOM element
          }
        },
        pane: "Zip2025Pane", // Ensure the GeoJSON uses the correct pane
      });

      // Load GeoJSON shapes for zip codes
      d3.json("./data/Modified_Zip_Code_Tabulation_Areas_(MODZCTA).geojson").then(
        function (geojsonData) {
          zipCodeGeoJSONLayer2025.addData(geojsonData); // Add the GeoJSON data to the layer
        }
      );

      // Add the layers to the global overlayLayers object
      overlayLayers["2025 Rodent Complaints"] = markerClusterLayer2025;
      overlayLayers["2025 Zip Codes"] = zipCodeGeoJSONLayer2025;

      // Update the layer control
      layerControl.addOverlay(markerClusterLayer2025, "2025 Rodent Complaints");
      layerControl.addOverlay(zipCodeGeoJSONLayer2025, "2025 Zip Codes");

      activeLayers.push("2025 Rodent Complaints");
      activeLayers.push("2025 Zip Codes");

      map.addLayer(markerClusterLayer2025);
      map.addLayer(zipCodeGeoJSONLayer2025);

      updateTitle(activeLayers);

      map.on('layeradd', function (e) {
        if (e.layer === markerClusterLayer2025) {
          activeLayers.push("2025 Rodent Complaints");
          updateTitle(activeLayers);
        }
        if (e.layer === zipCodeGeoJSONLayer2025) {
          activeLayers.push("2025 Zip Codes");
          updateTitle(activeLayers);
        }
      });

      map.on('layerremove', function (e) {
        if (e.layer === markerClusterLayer2025) {
          const index = activeLayers.indexOf("2025 Rodent Complaints");
          if (index > -1) {
            activeLayers.splice(index, 1); // Remove from array
          }
          updateTitle(activeLayers);
        }
        if (e.layer === zipCodeGeoJSONLayer2025) {
          const index = activeLayers.indexOf("2025 Zip Codes");
          if (index > -1) {
            activeLayers.splice(index, 1); // Remove from array
          }
          updateTitle(activeLayers);
        }
      });


    }


    const timeSeriesData2025 = d3.rollup(
      json2025.filter(
        (d) =>
          d.borough &&
          d.borough.toLowerCase() !== "undefined" &&
          d.borough.toLowerCase() !== "unspecified"
      ),
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.borough
        ),
      (d) => new Date(d.created_date).getMonth()
    );

    console.log("2025 Line Chart with Month by Count:", timeSeriesData2025);

    // Array of month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Map the numeric months to month names
    const months = monthNames; // Now 'months' will be an array of month names

    const boroughsLine = Array.from(
      new Set(
        json2025
          .filter(
            (d) =>
              d.borough &&
              d.borough.toLowerCase() !== "undefined" &&
              d.borough.toLowerCase() !== "unspecified"
          ) // filter out unwanted boroughs
          .map((d) => d.borough) // Get all boroughs
      )
    );

    // Structure the data for each borough in a format suitable for the line chart
    const boroughData = boroughsLine.map((borough) => {
      return {
        borough,
        values: months.map((monthName, monthIndex) => {
          const monthData = timeSeriesData2025.get(monthIndex); // Use monthIndex for rollup
          return {
            month: monthName, // Month name, e.g., 'January'
            count: monthData?.get(borough) || 0, // If no data for a borough in a month, count is 0
          };
        }),
      };
    });

    const marginLine = { top: 20, right: 20, bottom: 40, left: 40 };
    const widthLine = parseInt(d3.select("#line-chart").style("width"));
    const heightLine = parseInt(d3.select("#line-chart").style("height"));

    lineChart
      .append("text")
      .attr("class", "rodents-2025")
      .attr("x", 0)
      .attr("y", 20)
      .attr("font-size", 15)
      .attr("fill", "black")
      .style("font-weight", "bold")
      .text("Counts by Borough per Month in 2025");

    // Append the SVG element to the DOM
    lineChart
      .select("#line-chart")
      .append("svg")
      .attr("class", "rodents-2025")
      .attr("width", widthLine + marginLine.left + marginLine.right)
      .attr("height", heightLine + marginLine.top + marginLine.bottom)
      .append("g")
      .attr("transform", `translate(${marginLine.left},${marginLine.top})`);

    // Set up the x and y scales
    const x = d3
      .scaleBand()
      .domain(months)
      .range([marginLine.left, widthLine - marginLine.right])
      .padding(0.1); // Padding between bars (or in this case, data points)

    const y = d3
      .scaleLinear()
      .domain([0, LineYGlobalMax])
      //    .domain([0, d3.max(boroughData, (d) => d3.max(d.values, (v) => v.count))])
      .nice()
      .range([heightLine - marginLine.top, marginLine.bottom]);

    const boroughColorMapping = {
      MANHATTAN: "#EE352E",
      BROOKLYN: "#FCCC0A",
      QUEENS: "#B933AD",
      BRONX: "#00933C",
      "STATEN ISLAND": "#0078C6",
    };

    const color = d3
      .scaleOrdinal()
      .domain(Object.keys(boroughColorMapping)) // Use borough names as the domain
      .range(Object.values(boroughColorMapping)); // Use hex colors as the range

    const lineTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "stackedTooltip")
      .style("background-color", "white")
      .style("padding", "6px 10px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "5px")
      .style("position", "absolute") // Ensure it's absolutely positioned
      .style("opacity", 0); // Initially hidden

    lineChart
      .append("g")
      .attr("class", "x-axis")
      .attr("class", "rodents-2025")
      .attr("transform", `translate(0, ${heightLine - marginLine.top})`)
      .style("font-family", "Lexend Deca")
      .call(
        d3.axisBottom(x).tickFormat(function (d) {
          // Take the first 3 characters of the month name
          return d.slice(0, 3);
        })
      );

    lineChart
      .append("g")
      .attr("class", "y-axis")
      .attr("class", "rodents-2025")
      .attr("transform", `translate(${marginLine.left}, 0)`)
      .style("font-family", "Lexend Deca")
      .call(d3.axisLeft(y));

    // Define the line generator
    const line = d3
      .line()
      .x((d) => x(d.month) + x.bandwidth() / 2) // Position by month
      .y((d) => y(d.count)); // Position by count

    // Draw lines for each borough
    boroughData.forEach((borough) => {
      // Draw the line for the borough
      lineChart
        .append("path")
        .data([borough.values]) // Use the borough's month-count data
        .attr("class", "line")
        .attr("class", "rodents-2025")
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", color(borough.borough))
        .attr("stroke-width", 2);

      // Add points (circles) for each month on the line
      lineChart
        .selectAll(".point-" + borough.borough)
        .data(borough.values) // Use the borough's month-count data
        .enter()
        .append("circle")
        .attr("class", "point")
        .attr("class", "rodents-2025")
        .attr("cx", (d) => x(d.month) + x.bandwidth() / 2) // Position by month
        .attr("cy", (d) => y(d.count)) // Position by count
        .attr("r", 5) // Radius of the points
        .attr("fill", color(borough.borough)) // Color the points according to the borough
        .attr("stroke", "white") // White border around the points
        .attr("stroke-width", 1) // Stroke width for the border
        .on("mouseover", (event, d) => {
          // Show the tooltip on hover
          lineTooltip.style("opacity", 0.9).style("z-index", 6000); // Ensure it's on top
          lineTooltip
            .html(
              `${borough.borough
                .split(" ")
                .map(
                  (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ")}<br>${d.month}: ${d3.format(",")(d.count)}`
            )
            .style("left", event.pageX + 10 + "px")
            .style("top", event.pageY + 10 + "px");
        })
        .on("mousemove", (event) => {
          lineTooltip
            .style("left", `${event.pageX + 10}px`) // Add offset for visibility
            .style("top", `${event.pageY + 10}px`); // Add offset for visibility
        })
        .on("mouseout", () => {
          lineTooltip.transition().duration(100).style("opacity", 0); // Hide tooltip
        });
    });

    // (Optional) Add tooltips to display the exact count on hover
    lineChart
      .selectAll(".point")
      .append("title")
      .text((d) => `${d.month}: ${d.count}`);

    // Add a legend
    const legendLine = lineChart
      .selectAll(".legend")
      .data(boroughData)
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", (d, i) => `translate(0, ${i * 20})`);
    //console.log(boroughData);

    // Add lines for each borough to the legend
    legendLine
      .append("line")
      .attr("x1", marginLine.left + marginLine.right - 9) // Starting point of the line
      .attr("x2", marginLine.left + marginLine.right + 12) // Ending point of the line
      .attr("y1", marginLine.bottom) // Positioning the line vertically (aligned with text)
      .attr("y2", marginLine.bottom) // Same as y1 to keep it horizontal
      .attr("stroke", (d) => color(d.borough)) // Set line color based on borough
      .attr("stroke-width", 2); // Set line width

    legendLine
      .append("circle")
      .attr("class", "point")
      .attr("cx", marginLine.left + marginLine.right + 1.5)
      .attr("cy", marginLine.bottom)
      .attr("r", 5) // Radius of the points
      .attr("fill", (d) => color(d.borough)) // Use 'd' to correctly color the circle based on the borough
      .attr("stroke", "white") // White border around the points
      .attr("stroke-width", 1); // Stroke width for the border

    legendLine
      .append("text")
      .attr("x", marginLine.left + marginLine.right + 21)
      .attr("y", marginLine.bottom)
      .attr("dy", ".35em")
      .attr("text-anchor", "beginning")
      .style("font-size", "10px")
      .text((d) => d.borough);

    const LocationType2025 = d3.rollup(
      json2025,
      (v) =>
        d3.rollup(
          v,
          (group) => group.length,
          (d) => d.descriptor
        ),
      (d) => d.location_type
    );

    console.log("2025 Treemap Location Type and Count:", LocationType2025);

    const root = {
      name: "Rodent Complaints", // Root level name
      children: Array.from(LocationType2025.entries()).map(
        ([locationType, descriptors]) => {
          // Calculate total value for each locationType
          const totalValue = Array.from(descriptors.values()).reduce(
            (sum, count) => sum + count,
            0
          );

          return {
            name: locationType,
            total: totalValue, // Add the total count here
            children: Array.from(descriptors.entries()).map(
              ([descriptor, count]) => ({
                name: descriptor,
                value: count,
              })
            ),
          };
        }
      ),
    };

    // console.log("Root for the Tree Map:", root);

    const cheeseTree = d3
      .select("#tree-map")
      .append("svg") // Create the SVG element
      .style("width", `${window.innerWidth / 2}px`)
      .style("height", `${window.innerHeight / 2 - 90}px`)
      .attr("class", "rodents-2025");

    const hierarchy = d3
      .hierarchy(root)
      .sum((d) => d.value) // Sum the values to calculate the size of each block in the tree map
      .sort((a, b) => a.value - b.value); // Optional: Sort in descending order by value

    // Step 4: Set up the dimensions for the tree map
    const marginTree = { top: 40, right: 20, bottom: 40, left: 40 };
    const widthTree = parseInt(d3.select("#tree-map").style("width"));
    const heightTree = parseInt(d3.select("#tree-map").style("height"));

    // Step 5: Create the tree map layout
    const treemap = d3
      .treemap()
      .size([widthTree - marginTree.right, heightTree - marginTree.bottom])
      .padding(1);

    // Step 6: Apply the layout to the hierarchy data
    treemap(hierarchy);

    const colorScaleTree = d3
      .scaleLinear()
      .domain([
        d3.min(hierarchy.children, (d) => d.value),
        d3.max(hierarchy.children, (d) => d.value),
      ]) // Domain based on the min and max value
      .range(["darkgoldenrod", "palegoldenrod"]); // Color range

    const treeTooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background", "rgba(0, 0, 0, 0.7)")
      .style("color", "white")
      .style("padding", "5px 10px 4px 10px")
      .style("border-radius", "3px")
      .style("font-size", "15px")
      .style("z-index", 6000);

    // Function to show descriptors for a clicked locationType
    function showDescriptors(locationTypeData) {
      // Clear the existing chart
      cheeseTree.selectAll("*").remove();

      // Create a new hierarchy for the descriptors
      const descriptorHierarchy = d3
        .hierarchy({
          name: locationTypeData.data.name, // Keep the locationType name
          children: locationTypeData.children.map((d) => ({
            name: d.data.name, // Keep the descriptor name
            value: d.data.value, // Keep the descriptor value (count)
          })),
        })
        .sum((d) => d.value) // Sum the values to calculate the size of each block
        .sort((a, b) => a.value - b.value); // Sort by value

      // Apply the treemap layout to the descriptors
      treemap(descriptorHierarchy);

      cheeseTree
        .append("text")
        .attr("x", 0)
        .attr("y", 30)
        .attr("font-size", 15)
        .attr("fill", "black")
        .style("font-weight", "bold")
        .text(`Descriptors for ${locationTypeData.data.name}`);

      // Add descriptors to the tree chart
      const descriptors = cheeseTree
        .selectAll("g")
        .data(descriptorHierarchy.leaves()) // Use leaves here to get the actual descriptors
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${d.x0},${d.y0 + marginTree.top})`);

      // For Tree Chart
      const TreeDefs = d3
        .select("#tree-map")
        .append("defs")
        .attr("class", "rodents-2025");

      TreeDefs.append("pattern")
        .attr("id", "cheesePattern-Big-2025") // ID to reference the pattern later for Tree Chart
        .attr("width", 2)
        .attr("height", 2)
        .append("image")
        .attr("href", "./assets/squareCheese-Big.svg") // Path to the SVG image
        .attr("width", 1800)
        .attr("height", 1800);

      const treeDescriptorColors = {
        "Rat Sighting": "black", // Solid color
        "Mouse Sighting": "#d1d3d4", // Gray color
        "Condition Attracting Rodents": "url(#cheesePattern-Big-2025)", // Reference the Tree Chart Pattern
        "Signs of Rodents": "#f1de00", // Yellow color
      };

      const TreeColorScale = d3
        .scaleOrdinal()
        .domain(Object.keys(treeDescriptorColors)) // Descriptor keys as the domain
        .range(Object.values(treeDescriptorColors)); // Colors/patterns as the range

      descriptors
        .append("rect")
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0)
        .attr("fill", (d) => TreeColorScale(d.data.name));

      descriptors
        .append("text")
        .attr("x", 5)
        .attr("y", 15)
        .attr("font-size", 12)
        .attr("fill", function (d) {
          // Apply different colors based on descriptor name
          switch (d.data.name) {
            case "Rat Sighting":
              return "white";
            default:
              return "black"; // Default color
          }
        })
        .text((d) => `${d.data.name}: ${d3.format(",")(d.data.value)}`);

      // Optional: Add a "Back" button to go back to the full view
      cheeseTree
        .append("text")
        .attr("x", widthTree - marginTree.left - 3)
        .attr("y", 30)
        .attr("font-size", 10)
        .attr("fill", "goldenrod")
        .style("cursor", "pointer")
        .text("Back")
        .on("click", function () {
          // Go back to the full view by clearing the chart and redrawing the main treemap
          cheeseTree.selectAll("*").remove();
          drawMainTreeMap();
        });
    }

    // Redraw the main treemap (locationType level)
    function drawMainTreeMap() {
      treemap(hierarchy);

      cheeseTree
        .append("text")
        .attr("class", "rodents-2025")
        .attr("x", 0)
        .attr("y", 30)
        .attr("font-size", 15)
        .attr("fill", "black")
        .style("font-weight", "bold")
        .text("Location Type in 2025");

      const locationTypes = cheeseTree
        .selectAll("g")
        .data(hierarchy.children)
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${d.x0},${d.y0 + marginTree.top})`)
        .on("click", function (event, d) {
          treeTooltip.style("visibility", "hidden");
          // When a locationType is clicked, show its descriptors
          showDescriptors(d);
        })
        .on("mouseover", function (event, d) {
          // Show tooltip on hover
          treeTooltip
            .style("visibility", "visible")
            .html(`${d.data.name}: ${d3.format(",")(d.data.total)}`);
        })
        .on("mousemove", function (event) {
          // Position the tooltip near the mouse pointer
          treeTooltip
            .style("top", event.pageY + 10 + "px")
            .style("left", event.pageX + 10 + "px");
        })
        .on("mouseout", function () {
          // Hide the tooltip when mouse leaves
          treeTooltip.style("visibility", "hidden");
        });

      locationTypes
        .append("rect")
        .attr("width", (d) => d.x1 - d.x0)
        .attr("height", (d) => d.y1 - d.y0)
        .attr("fill", (d) => colorScaleTree(d.value));
    }

    // Initial drawing of the main treemap
    drawMainTreeMap();

    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("2025 Loaded after delay.");

  } catch (error) {
    console.error("Error loading or processing data for 2025:", error);
  }

})();









function updateTitle(layerNames) {
  const titleElement = document.getElementById('mapTitle'); // Corrected: No '#' symbol here

  if (Array.isArray(layerNames)) {
    titleElement.textContent = layerNames.join(" | "); // Combine layer names with a separator
  } else {
    titleElement.textContent = layerNames; // For a single layer name
  }
}
