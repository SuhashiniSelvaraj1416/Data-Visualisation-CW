// set the dimensions and margins of the graph
    const csp_margin = {top: 10, right: 60, bottom: 30, left: 60},
        csp_width = 660 - csp_margin.left - csp_margin.right,
        csp_height = 400 - csp_margin.top - csp_margin.bottom;
    
    // append the svg object to the body of the page
    const csp_svg = d3.select("#suhashinis_connected_scatter_plot")
      .append("svg")
        .attr("width", csp_width + csp_margin.left + csp_margin.right)
        .attr("height", csp_height + csp_margin.top + csp_margin.bottom)
      .append("g")
        .attr("transform", `translate(${csp_margin.left},${csp_margin.top})`);

function c_scat(csPath, csFilter, c_svg, c_width, c_height, c_margin){
  console.log(csFilter)
  c_svg.selectAll('path').remove();
  c_svg.selectAll('g').remove();
  c_svg.append("g")
  .attr("transform",`translate(${c_margin.left},${c_margin.top})`);
    //Read the data
    console.log(csFilter)
    d3.csv(csPath, function(d){
          return { date : d3.timeParse("%Y-%m-%d")(d["date"]), value : d[csFilter] } }).then(
        function(data) {
          console.log(data)
        // Add X axis --> it is a date format
        const csp_x = d3.scaleTime()
          .domain(d3.extent(data, d => d.date))
          .range([ 0, c_width ]);
        c_svg.append("g")
          .attr("transform",`translate(0,${c_height})`)
          .call(d3.axisBottom(csp_x));
        // Add Y axis
        const csp_y = d3.scaleLinear()
          .domain([0, d3.max(data, function(d) { return +d.value; })])
          .range([ c_height, 0 ]);
        c_svg.append("g")
          .call(d3.axisLeft(csp_y));
        // Add the line
        c_svg.append("path")
          .datum(data)
          .attr("fill", "white")
          .attr("stroke", "Green")
          .attr("stroke-width", 4)
          .attr("d", d3.line()
          .curve(d3.curveBasis) // Just add that to have a curve instead of segments
            .x(d => csp_x(d.date))
            .y(d => csp_y(d.value))
            )
            console.log(data)
    // create a Tooltip
    var csp_Tooltip = d3.select("#suhashinis_connected_scatter_plot")
    .append("div")
    .style("opacity", 0)
    .attr("class", "csp_Tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px")

    // Three function that change the Tooltip when user hover / move / leave a cell
    var mouseover = function(event,d) {
      csp_Tooltip
        .style("opacity", 1)
    }
    var mousemove = function(event,d) {
      csp_Tooltip
        .html("Exact value: " + d.value)
        .style("left", `${event.layerX+10}px`)
        .style("top", `${event.layerY}px`)
    }
    var mouseleave = function(event,d) {
      csp_Tooltip
        .style("opacity", 0)
    }



  // Add the points
  c_svg
    .append("g")
    .selectAll("dot")
    .data(data)
    .join("circle")
      .attr("class", "myCircle")
      .attr("cx", d => csp_x(d.date))
      .attr("cy", d => csp_y(d.value))
      .attr("r", 8)
      .attr("stroke", "#69b3a2")
      .attr("stroke-width", 3)
      .attr("fill", "white")
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)
})
}
