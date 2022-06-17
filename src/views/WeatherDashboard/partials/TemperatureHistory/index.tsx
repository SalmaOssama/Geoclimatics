import React, { FC, useEffect, useRef } from "react";
import CardHeader from "../../../../components/Card/partials/CardHeader";
import CardBody from "../../../../components/Card/partials/CardBody";
import Card from "../../../../components/Card/index";
import * as d3 from 'd3';
import { formatTime } from "../../../../services/formatters/timeFormatter";
import { HistoricalWeatherResponse } from "../../index.interface";
const TemperatureHistory: FC<HistoricalWeatherResponse> = ({ data }) => {

    let historyData = data.weather[0].hourly
    const lineRef = useRef();
    useEffect(() => {

        if (lineRef.current) {
            (lineRef.current as any).innerHTML = ''

            let x = (d: any) => d.time; 
            let y = (d: any) => d.tempC; 
            let marginTop = 20; 
            let marginRight = 30; 
            let marginBottom = 30; 
            let marginLeft = 40; 
            let width = parseInt(d3.select('#history-line-chart').style('width')); 
            let height = parseInt(d3.select('#history-line-chart').style('height'));
            let xRange = [marginLeft, width - marginRight]; 
            let yType = d3.scaleLinear;
            let yFormat; 
            let yDomain: any; 
            let xDomain: any;
            let curve = d3.curveLinear;
            let defined;
            let xType = d3.scaleLinear;
            let yRange = [height - marginBottom, marginTop];
            let color = "var(--font-secondary)"; 
            let strokeLinecap = "round"; 
            let strokeLinejoin = "round"; 
            let strokeWidth = 1.5; 
            let strokeOpacity = 1; 
            let yLabel = "Temperature °C";
            const X = d3.map(historyData, x);
            const Y = d3.map(historyData, y);

            const I = d3.range(X.length);
            if (defined === undefined) defined = (d: any, i: any) => !isNaN(X[i]) && !isNaN(Y[i]);
            const D = d3.map(historyData, defined);

            if (xDomain === undefined) xDomain = [X[0], X[X.length - 1]];
            if (yDomain === undefined) yDomain = [0, d3.max(Y)];


            const xScale = xType(xDomain, xRange);
            const yScale = yType(yDomain, yRange);
            const xAxis = d3.axisBottom(xScale).tickFormat((d, i) => formatTime(historyData[i].time) as any).ticks(24).tickSizeOuter(0);
            const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat);

            const line = d3.line()
                .defined((i: any) => D[i])
                .curve(curve)
                .x((i: any) => xScale(X[i]))
                .y((i: any) => yScale(Y[i]));

            const svg = d3.select(lineRef.current)
                .attr("width", width)
                .attr("height", height)
                .attr("viewBox", [0, 0, width, height])
                .attr("style", "width: 100%; height: 100%;color:var(--chart-ticks);");

            svg.append("g")
                .attr("transform", `translate(0,${height - marginBottom})`)
                .call(xAxis)
                .attr("font-size", "14px");

            svg.append("g")
                .attr("transform", `translate(${marginLeft},0)`)
                .call(yAxis)
                .call(g => g.select(".domain").remove())
                .call(g => g.selectAll(".tick line").clone()
                    .attr("x2", width - marginLeft - marginRight)
                    .attr("stroke-opacity", 0.1))
                .call(g => g.append("text")
                    .attr("x", -marginLeft)
                    .attr("y", 10)
                    .attr("fill", "white")
                    .attr("text-anchor", "start")
                    .text(yLabel))
                .attr("font-size", "14px");

            svg.append("path")
                .attr("fill", "none")
                .attr("stroke", color)
                .attr("stroke-width", strokeWidth)
                .attr("stroke-linecap", strokeLinecap)
                .attr("stroke-linejoin", strokeLinejoin)
                .attr("stroke-opacity", strokeOpacity)
                .attr("d", line(I as any));

        }
    // eslint-disable-next-line
    }, [])

    return (
        <Card className="temperature-history-card">
            <CardHeader>
                Yesterday's Temperature
            </CardHeader>
            <CardBody>
                <div id={'history-line-chart'} style={{ width: '1500px', height: '500px' }}>
                    <svg ref={lineRef as any}>
                    </svg>
                </div>
            </CardBody>
        </Card>
    )
}
export default TemperatureHistory;