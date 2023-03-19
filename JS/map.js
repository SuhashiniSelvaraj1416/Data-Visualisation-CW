// The svg
const svg = d3.select("#suhashinis_map").append('svg').style('background','radial-gradient(circle, rgba(32,123,142,1) 0%, rgba(9,133,121,1) 48%, rgba(2,0,36,1) 88%)');

;
svg.attr("width",window.innerWidth-70);
svg.attr("height",window.innerHeight);
    width = +svg.attr("width"),
    height = +svg.attr("height");

// Map and projection
const projection = d3.geoNaturalEarth1()
    .scale(width / 2 /Math.PI)
    .translate([width /2, height /2 ])

// Load external data and boot
d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then( function(data) {

    // Draw the map
    svg.append("g")
        .selectAll("path")
        .data(data.features)
        .join("path")
            .attr("fill", "radial-gradient(circle, rgba(32,123,142,1) 0%, rgba(9,133,121,1) 48%, rgba(2,0,36,1) 88%)")
            .attr("d", d3.geoPath()
            .projection(projection)
            )
            .style("stroke", "black")
            const North_America = svg.append("image")
                .attr("xlink:href", "https://hrtraining.com.au/wp-content/uploads/2020/10/AjarFloweryJumpingbean-size_restricted.gif")
                .attr("x", 380)
                .attr("y", 130)
                .attr("width", 40)
                .attr("height", 40)
            .on("click",function(){
                country_list=country_north_america; 
                console.log(country_list);
                selected_continent="North America";
                for (var index=0; index<country_list.length;index++){
                    var button = document.getElementById("city"+String(index+1));
                    button.textContent = country_list[index];
                }
                bar_plot(bp_width,bp_height,bp_svg,csv_bar_plot);
                varScatter("https://raw.githubusercontent.com/SuhashiniSelvaraj1416/Data-Visualisation-CW/main/Continent_countries%20total%20cases.csv", selected_continent, sc_svg, sc_width, sc_height, sc_margin)
                toBarCharts();
                
            }); // 
            const South_America = svg.append("image")
            .attr("xlink:href", "https://hrtraining.com.au/wp-content/uploads/2020/10/AjarFloweryJumpingbean-size_restricted.gif")
            .attr("x", 500)
            .attr("y", 400)
            .attr("width", 40)
            .attr("height", 40)
            .on("click",function(){
                country_list=country_south_america; 
                console.log(country_list);
                selected_continent="South America";
                for (var index=0; index<country_list.length;index++){
                    var button = document.getElementById("city"+String(index+1));
                    button.textContent = country_list[index];
                }
                bar_plot(bp_width,bp_height,bp_svg,csv_bar_plot);
                varScatter("https://raw.githubusercontent.com/SuhashiniSelvaraj1416/Data-Visualisation-CW/main/Continent_countries%20total%20cases.csv", selected_continent, sc_svg, sc_width, sc_height, sc_margin)
                toBarCharts();
            }); // 
            const Antartica = svg.append("image")
            .attr("xlink:href", "https://hrtraining.com.au/wp-content/uploads/2020/10/AjarFloweryJumpingbean-size_restricted.gif")
            .attr("x", 860)
            .attr("y", 650)
            .attr("width", 40)
            .attr("height", 40).on("click",function(){
                country_list=country_antartica; 
                console.log(country_list);
                selected_continent="Antartica";
                for (var index=0; index<country_list.length;index++){
                    var button = document.getElementById("city"+String(index+1));
                    button.textContent = country_list[index];
                }
                bar_plot(bp_width,bp_height,bp_svg,csv_bar_plot);
                varScatter("https://raw.githubusercontent.com/SuhashiniSelvaraj1416/Data-Visualisation-CW/main/Continent_countries%20total%20cases.csv", selected_continent, sc_svg, sc_width, sc_height, sc_margin)
                toBarCharts();
            }); // 
            const Europe = svg.append("image")
            .attr("xlink:href", "https://hrtraining.com.au/wp-content/uploads/2020/10/AjarFloweryJumpingbean-size_restricted.gif")
            .attr("x", 870)
            .attr("y", 130)
            .attr("width", 40)
            .attr("height", 40)
            .on("click",function(){
                country_list=country_europe; 
                console.log(country_list);
                selected_continent="Europe";
                for (var index=0; index<country_list.length;index++){
                    var button = document.getElementById("city"+String(index+1));
                    button.textContent = country_list[index];
                }
                bar_plot(bp_width,bp_height,bp_svg,csv_bar_plot);
                varScatter("https://raw.githubusercontent.com/SuhashiniSelvaraj1416/Data-Visualisation-CW/main/Continent_countries%20total%20cases.csv", selected_continent, sc_svg, sc_width, sc_height, sc_margin)
                toBarCharts();
            }); // 
            const Africa = svg.append("image")
            .attr("xlink:href", "https://hrtraining.com.au/wp-content/uploads/2020/10/AjarFloweryJumpingbean-size_restricted.gif")
            .attr("x", 820)
            .attr("y", 350)
            .attr("width", 40)
            .attr("height", 40)
            .on("click",function(){
                country_list=country_africa; 
                console.log(country_list);
                selected_continent="Africa";
                for (var index=0; index<country_list.length;index++){
                    var button = document.getElementById("city"+String(index+1));
                    button.textContent = country_list[index];
                }
                bar_plot(bp_width,bp_height,bp_svg,csv_bar_plot);
                varScatter("https://raw.githubusercontent.com/SuhashiniSelvaraj1416/Data-Visualisation-CW/main/Continent_countries%20total%20cases.csv", selected_continent, sc_svg, sc_width, sc_height, sc_margin)
                toBarCharts();
            }); // 
            const Asia = svg.append("image")
            .attr("xlink:href", "https://hrtraining.com.au/wp-content/uploads/2020/10/AjarFloweryJumpingbean-size_restricted.gif")
            .attr("x", 1050)
            .attr("y", 130)
            .attr("width", 40)
            .attr("height", 40)
            .on("click",function(){
                country_list=country_asia; 
                console.log(country_list);
                selected_continent="Asia";
                for (var index=0; index<country_list.length;index++){
                    var button = document.getElementById("city"+String(index+1));
                    button.textContent = country_list[index];
                }
                bar_plot(bp_width,bp_height,bp_svg,csv_bar_plot);
                varScatter("https://raw.githubusercontent.com/SuhashiniSelvaraj1416/Data-Visualisation-CW/main/Continent_countries%20total%20cases.csv", selected_continent, sc_svg, sc_width, sc_height, sc_margin)
                toBarCharts();
            }); // 
            const Australia = svg.append("image")
            .attr("xlink:href", "https://hrtraining.com.au/wp-content/uploads/2020/10/AjarFloweryJumpingbean-size_restricted.gif")
            .attr("x", 1200)
            .attr("y", 450)
            .attr("width", 40)
            .attr("height", 40)
            .on("click",function(){
                country_list=country_australia; 
                console.log(country_list);
                selected_continent="Australia"
                for (var index=0; index<country_list.length;index++){
                    var button = document.getElementById("city"+String(index+1));
                    button.textContent = country_list[index];
                }
                bar_plot(bp_width,bp_height,bp_svg,csv_bar_plot);
                varScatter("https://raw.githubusercontent.com/SuhashiniSelvaraj1416/Data-Visualisation-CW/main/Continent_countries%20total%20cases.csv", selected_continent, sc_svg, sc_width, sc_height, sc_margin)
                toBarCharts();
            }); // 

})
