import React, { FC, useEffect, useRef } from "react";
import CardHeader from "../../../../components/Card/partials/CardHeader";
import CardBody from "../../../../components/Card/partials/CardBody";
import Card from "../../../../components/Card/index";
import * as d3 from 'd3';
import { formatTime } from "../../../../services/formatters/timeFormatter";
import { LandWeatherDataResponse } from '../../../LandingDisplay/index.interface'
const TodaysTemperature: FC<LandWeatherDataResponse> = ({data }) => {

    let hourlyData = data.weather[0].hourly
    const barRef = useRef()
    useEffect(() => {
        if (barRef.current) {
            (barRef.current as any).innerHTML = ''

            let x = (d: any) => d.time; 
            let y = (d: any) => d.tempC;  
            let marginTop = 20; 
            let marginRight = 0; 
            let marginBottom = 30; 
            let marginLeft = 40;
            let width = parseInt(d3.select('#today-bar-chart').style('width'));
            let height = parseInt(d3.select('#today-bar-chart').style('height')); 
            let xDomain: any; 
            let xRange = [marginLeft, width - marginRight]; 
            let yType = d3.scaleLinear; 
            let yDomain: any; 
            let yRange = [height - marginBottom, marginTop];
            let xPadding = 0.4; 
            let yLabel = "Temperature °C"; 
            let color = "var(--font-secondary)"; 
            const X = d3.map(hourlyData, x);
            const Y = d3.map(hourlyData, y);

            if (xDomain === undefined) xDomain = X;
            if (yDomain === undefined) yDomain = [0, d3.max(Y)];
            xDomain = new d3.InternSet(xDomain);

            const I = d3.range(X.length).filter(i => xDomain.has(X[i]));

            const xScale = d3.scaleBand(xDomain, xRange).padding(xPadding);
            const yScale = yType(yDomain, yRange);
            const xAxis = d3.axisBottom(xScale as any).tickFormat((d, i) => formatTime(hourlyData[i].time) as any).tickSizeOuter(0);
            const yAxis = d3.axisLeft(yScale).ticks(height / 40);



            const svg = d3.select(barRef.current)
                .attr("width", width)
                .attr("height", height)
                .attr("viewBox", [0, 0, width, height])
                .attr("style", "width: 100%; height: 100%; color:var(--chart-ticks);")

            svg.append("g")
                .attr("transform", `translate(${marginLeft},0)`)
                .call(yAxis)
                .call(g => g.select(".domain").remove())
                .call(g => g.selectAll(".tick line").clone()
                    .attr("x2", width - marginLeft - marginRight)
                    .attr("stroke-opacity", 0.3))
                .call(g => g.selectAll("text").clone())
                .call(g => g.append("text")
                    .attr("x", -marginLeft)
                    .attr("y", 0)
                    .attr("fill", "white")
                    .attr("text-anchor", "start")
                    .text(yLabel)
                )
                .attr("font-size", "14px");

            svg.append("g")
                .attr("fill", color)
                .selectAll("rect")
                .data(I)
                .join("rect")
                .attr("x", (i: any) => xScale(X[i]) as any)
                .attr("y", i => yScale(Y[i]))
                .attr("height", i => yScale(0) - yScale(Y[i]))
                .attr("width", xScale.bandwidth());

            svg.append("g")
                .attr("transform", `translate(0,${height - marginBottom})`)
                .call(xAxis)
                .attr("font-size", "14px");

        }
    // eslint-disable-next-line
    }, [])

    return (
        <Card className="todays-temperature-container">
            <CardHeader>
                Today's Temperature
            </CardHeader>
            <CardBody>
                <div id={'today-bar-chart'} style={{ width: '1700px', height: '500px' }}>
                    <svg ref={barRef as any}>

                    </svg>
                </div>
            </CardBody>
        </Card>
    )
}
export default TodaysTemperature;