// set the dimensions and margins of the graph
const ac_margin = {top: 10, right: 30, bottom: 30, left: 60},
      ac_width = 460 - ac_margin.left - ac_margin.right,
      ac_height = 400 - ac_margin.top - ac_margin.bottom;

// append the svg object to the body of the page
const ac_svg = d3.select("#suhashinis_area_chart")
  .append("svg")
    .attr("width", ac_width + ac_margin.left + ac_margin.right)
    .attr("height", ac_height + ac_margin.top + ac_margin.bottom)
  .append("g")
    .attr("transform",`translate(${ac_margin.left},${ac_margin.top})`);
function varArea(parameter1,parameter2,chart_width,chart_height,chart_svg,csv_path){
  chart_svg.selectAll('path').remove();
  chart_svg.selectAll('g').remove();
  chart_svg.append("g")
  .attr("transform",`translate(${ac_margin.left},${ac_margin.top})`);
  
d3.csv(csv_path,

// When reading the csv, I must format variables:
d => {
  return { date : d3.timeParse("%Y-%m-%d")(d[parameter1]), value : d[parameter2] }
}).then(

// Now I can use this dataset:
function(data) {

  // Add X axis --> it is a date format
  const x = d3.scaleTime()
    .domain(d3.extent(data, d => d.date))
    .range([ 0, chart_width ]);
  xAxis = chart_svg.append("g")
    .attr("transform", `translate(0,${chart_height})`)
    .call(d3.axisBottom(x));

  // Add Y axis
  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => +d.value)])
    .range([ chart_height, 0 ]);
  yAxis = chart_svg.append("g")
    .call(d3.axisLeft(y));

  // Add a clipPath: everything out of this area won't be drawn.
  const clip = chart_svg.append("defs").append("clipPath")
      .attr("id", "clip")
      .append("rect")
      .attr("width", chart_width )
      .attr("height", chart_height )
      .attr("x", 0)
      .attr("y", 0);

  // Add brushing
  const brush = d3.brushX()                   // Add the brush feature using the d3.brush function
      .extent( [ [0,0], [chart_width,chart_height] ] )  // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
      .on("end", updateChart)               // Each time the brush selection changes, trigger the 'updateChart' function

  // Create the area variable: where both the area and the brush take place
  const area = chart_svg.append('g')
    .attr("clip-path", "url(#clip)")

  // Create an area generator
  const areaGenerator = d3.area()
    .x(d => x(d.date))
    .y0(y(0))
    .y1(d => y(d.value))

  // Add the area
  area.append("path")
    .datum(data)
    .attr("class", "myArea")  // I add the class myArea to be able to modify it later on.
    .attr("fill", "Green")
    .attr("fill-opacity", .9)
    .attr("stroke", "black")
    .attr("stroke-width", 1)
    .attr("d", areaGenerator )

  // Add the brushing
  area
    .append("g")
      .attr("class", "brush")
      .call(brush);

  // A function that set idleTimeOut to null
  let idleTimeout
  function idled() { idleTimeout = null; }

  // A function that update the chart for given boundaries
  function updateChart(event) {

    // What are the selected boundaries?
    extent = event.selection

    // If no selection, back to initial coordinate. Otherwise, update X axis domain
    if(!extent){
      if (!idleTimeout) return idleTimeout = setTimeout(idled, 350); // This allows to wait a little bit
      x.domain([ 4,8])
    }else{
      x.domain([ x.invert(extent[0]), x.invert(extent[1]) ])
      area.select(".brush").call(brush.move, null) // This remove the grey brush area as soon as the selection has been done
    }

    // Update axis and area position
    xAxis.transition().duration(1000).call(d3.axisBottom(x))
    area
        .select('.myArea')
        .transition()
        .duration(1000)
        .attr("d", areaGenerator)
  }

  // If user double click, reinitialize the chart
  chart_svg.on("dblclick",function(){
    x.domain(d3.extent(data, d => d.date))
    xAxis.transition().call(d3.axisBottom(x))
    area
      .select('.myArea')
      .transition()
      .attr("d", areaGenerator)
  });

})
}