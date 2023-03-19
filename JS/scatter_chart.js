// set the dimensions and margins of the graph
const sc_margin = {top: 10, right: 30, bottom: 30, left: 50},
    sc_width = 660 - sc_margin.left - sc_margin.right,
    sc_height = 500 - sc_margin.top - sc_margin.bottom;
    // append the svg object to the body of the page
    const sc_svg = d3.select("#suhashinis_scatter_chart")
      .append("svg")
        .attr("width", sc_width + sc_margin.left + sc_margin.right)
        .attr("height", sc_height + sc_margin.top + sc_margin.bottom)
      .append("g")
        .attr("transform", `translate(${sc_margin.left}, ${sc_margin.top})`);


function varScatter(scatterPath, scatFilter, s_svg, s_width, s_height, s_margin ){
  console.log(scatFilter)
    //Read the data
    s_svg.selectAll('g').remove();
    s_svg.append('g').attr("transform", `translate(${s_margin.left}, ${s_margin.top})`);   
    d3.csv(scatterPath).then(function(data) {

    const scatterData = data.filter(d => d.Continent === scatFilter);
    console.log(scatterData)
  
    // Add X axis
      const sc_x = d3.scaleLinear()
      .domain([0, d3.max(scatterData, (d) => d.total_cases)])
      .range([ 0, s_width ]);
    s_svg.append("g")
      .attr("class", "myXaxis")   // Note that here we give a class to the X axis, to be able to call it later and modify it
      .attr("transform", `translate(0, ${s_height})`)
      .call(d3.axisBottom(sc_x))
      //.attr("opacity", "0")

      // Add Y axis
      const sc_y = d3.scaleLinear()
      .domain([0, d3.max(scatterData, (d) => d.gdp_per_capita)])
      .range([ s_height, 0]);
    s_svg.append("g")
      .call(d3.axisLeft(sc_y));

    // Add dots
    s_svg.append('g')
      .selectAll("dot")
      .data(scatterData)
      .enter()
      .append("circle")
        .attr("cx", function (d) { return sc_x(d.total_cases); } )
        .attr("cy", function (d) { return sc_y(d.gdp_per_capita); } )
        .attr("r", 10.5)
        .style("fill", "Green")

      // new X axis
      sc_x.domain([0, d3.max(scatterData, (d) => d.total_cases)])
      s_svg.select(".myXaxis")
        .transition()
        .duration(2000)
        .attr("opacity", "1")
        .call(d3.axisBottom(sc_x));

      s_svg.selectAll("circle")
        .transition()
        .delay(function(d,i){return(i*3)})
        .duration(2000)
        .attr("cx", function (d) { return sc_x(d.total_cases); } )
        .attr("cy", function (d) { return sc_y(d.gdp_per_capita); } )
    })

}
