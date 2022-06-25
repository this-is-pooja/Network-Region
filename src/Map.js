import React from 'react'
import Network from "./Network.json";
import Network2 from "./Network2.json";
import Network3 from "./Network3.json";

const style = {
    title: {
        fontSize: "12px",
        fontWeight: "500",
        color: "#666666",
        margin: "-5px 4px 0 0"
    },
    flexbox: {
        display: "flex",
        flexDirection: "column"
    },
    subcontainer: {
        display: "flex",
        flexDirection: "row",
        marginTop: "10px"
    },
    legend: {
        width: "6px",
        height: "6px"
    },
    showData: {
        display: "flex",
        marginTop: "-6px"
    }
}

function Map() {
    let regiondata1 = [];
    let regiondata2 = [];
    let regiondata3 = [];

    Network.features.map((item) => {
        return regiondata1.push(item.properties.data);
    })
    Network2.features.map((item) => {
        return regiondata2.push(item.properties.data);
    })
    Network3.features.map((item) => {
        return regiondata3.push(item.properties.data);
    })

    const region1total = regiondata1.reduce(
        (previousValue, currentValue, index) => previousValue + currentValue,
        0);
    const region2total = regiondata2.reduce(
        (previousValue, currentValue, index) => previousValue + currentValue,
        0);
    const region3total = regiondata3.reduce(
        (previousValue, currentValue, index) => previousValue + currentValue,
        0);

    return (
        <div
            style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
                margin: "80px 20px 0 20px"
            }}
        >
            <div style={style.title}>$</div>
            <div style={style.title}> Usage</div>
            <div
                style=
                {{
                    ...style.flexbox,
                    width: region1total
                }}>
                <div
                    style=
                    {{
                        backgroundColor: "#00bfff",
                        height: "6px"
                    }}></div>
                <div style={style.subcontainer}>
                    <div
                        style=
                        {{
                            ...style.legend,
                            backgroundColor: "#00bfff"
                        }}></div>
                    <div style={style.showData}>
                        <div
                            style=
                            {{
                                ...style.title,
                                margin: "0px 525px 0 4px"
                            }}>
                            {region1total < 5000 ?
                                <span style={style.title}> {"> 5 k"}</span>
                                : region1total > 1000 && region1total < 5000 ?
                                    <span style={style.title}>{"$1k-$5k"}</span>
                                    : <span style={style.title}>{"$500-$1k"}</span>
                            }
                        </div>
                        <div style={{ ...style.title, marginTop: "2px" }}>44%</div>
                    </div>
                </div>
            </div>
            <div style={{ ...style.flexbox, width: region2total }}>
                <div
                    style={{
                        backgroundColor: "#00008b",
                        height: "6px"
                    }}>
                </div>
                <div style={style.subcontainer}>
                    <div
                        style=
                        {{
                            ...style.legend,
                            backgroundColor: "#00008b"
                        }}></div>
                    <div style={style.showData}>
                        <div
                            style=
                            {{
                                ...style.title,
                                margin: "0px 335px 0 4px"
                            }}>
                            {region2total < 5000 ?
                                <span style={style.title}> {"> 5 k"}</span>
                                : region2total > 1000 && region2total < 5000 ?
                                    <span style={style.title}>{"$1k-$5k"}</span>
                                    : <span style={style.title}>{"$500-$1k"}</span>
                            }
                        </div>
                        <div style={{ ...style.title, marginTop: "2px" }}>26%</div>
                    </div>
                </div>
            </div>
            <div
                style=
                {{
                    ...style.flexbox,
                    width: region3total
                }}>
                <div
                    style={{
                        backgroundColor: "#87CEEB",
                        height: "6px"
                    }}>
                </div>
                <div style={style.subcontainer}>
                    <div
                        style=
                        {{
                            ...style.legend,
                            backgroundColor: "#87CEEB"
                        }}></div>
                    <div style={style.showData}>
                        <div
                            style=
                            {{
                                ...style.title,
                                margin: "0px 345px 0 4px"
                            }}>
                            {region3total < 5000 ?
                                <span style={style.title}> {"> 5 k"}</span>
                                : region3total > 1000 && region3total < 5000 ?
                                    <span style={style.title}>{"$1k-$5k"}</span>
                                    : <span style={style.title}>{"$500-$1k"}</span>
                            }
                        </div>
                        <div style={{ ...style.title, marginTop: "2px" }}>30%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map