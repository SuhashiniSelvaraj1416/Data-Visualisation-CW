
d3.select("#vaccine").on('click',varArea("date",selectedCountry,ac_width,ac_height,ac_svg,"https://raw.githubusercontent.com/samarthRathi/dataVisualisationCourseWork/CW1/filtered_SI4_covid_data.csv"))
d3.select("#booster").on('click',varArea("date",selectedCountry,ac_width,ac_height,ac_svg,"https://raw.githubusercontent.com/samarthRathi/dataVisualisationCourseWork/CW1/filtered_SI5_covid_data.csv"))