// set the dimensions and margins of the graph
const bp_margin = {top: 10, right: 60, bottom: 55, left: 60}
    bp_width = window.innerWidth/2.1 - bp_margin.left - bp_margin.right,
    bp_height = 500 - bp_margin.top - bp_margin.bottom;
const bp_svg = d3.select("#suhashinis_barplot")
    .append("svg")
      .attr("width", bp_width + bp_margin.left + bp_margin.right)
      .attr("height", bp_height + bp_margin.top + bp_margin.bottom)
    .attr("id","bp_svg").append("g")
      .attr("transform", `translate(${bp_margin.left},${bp_margin.top})`);

      bar_plot(bp_width,bp_height,bp_svg,csv_bar_plot);
function bar_plot(plot_width,plot_height,plot_svg,csv_path){
  plot_svg.selectAll('rect').remove();
  plot_svg.selectAll('g').remove();
  plot_svg.append('g').attr("transform", `translate(${bp_margin.left},${bp_margin.top})`);

function data_streamline(csv_path){
  let data_csv = d3.csv(csv_path).then(data=>data.filter(function(d){ return d.Continent == selected_continent }))
  return data_csv
}
console.log(data_streamline(csv_path));
console.log(d3.csv(csv_path));
//d3.csv(csv_path)
data_streamline(csv_path)
.then( function(data) {

// X axis
const bp_x = d3.scaleBand()
  .range([ 0,plot_width])
  .domain(data.map(d => d.location))

  .padding(0.2);
plot_svg.append("g")
  .attr("transform", `translate(0,${plot_height})`)
  .call(d3.axisBottom(bp_x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");
console.log(d3.max(data, (d) => d.total_cases));
console.log(data.map(d => d.location));

var max_y=0;
data.forEach((item, i) => {if(item.total_cases>max_y){
  console.log(item.total_cases);
  max_y=item.total_cases;
}});
console.log(max_y);
// Add Y axis
const bp_y = d3.scaleLinear()
  .domain([0, max_y])
  .range([ plot_height, 0]);
plot_svg.append("g")
  .call(d3.axisLeft(bp_y));

// Bars
plot_svg.selectAll("mybar")
  .data(data)
  .join("rect")
    .attr("x", d => bp_x(d.location))
    .attr("id",d => d.location)
    .attr("width", bp_x.bandwidth())
    .attr("fill", "Green")
    .attr("stroke","Black")
    // no bar at the beginning thus:
    .attr("height", d => plot_height - bp_y(0)) // always equal to 0
    .attr("y", d => bp_y(0))

// Animation
plot_svg.selectAll("rect")
  .transition()
  .duration(800)
  .attr("y", d => bp_y(d.total_cases))
  .attr("height", d => plot_height - bp_y(d.total_cases))
  .delay((d,i) => {console.log(i); return i*100})

    plot_svg.selectAll("rect")
    .on("click", function() {
      selectedCountry = d3.select(this).attr("id");
      varArea("date",selectedCountry,ac_width,ac_height,ac_svg,"https://raw.githubusercontent.com/samarthRathi/dataVisualisationCourseWork/CW1/filtered_SI4_covid_data.csv")
      c_scat("https://raw.githubusercontent.com/SuhashiniSelvaraj1416/Data-Visualisation-CW/main/stringency_index.csv", selectedCountry, csp_svg, csp_width, csp_height, csp_margin)

    });

  });
}


  


