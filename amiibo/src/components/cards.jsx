import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./carousel.css"
import styled from "styled-components";

const Cards = props => {

    const data = useSelector(state => state.amiiboReducer);
    const [carousel, setCarousel] = useState("");
    const [slider, setSlider] = useState("");
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setCarousel(document.querySelector('.carousel'));
        setSlider(document.querySelector('.slider'));
        setWidth(!data.data ? 0 : Math.round(100 / data.data.length));
    }, [data])
    let direction;

    console.log(width)

    const Section = styled.div`
        flex-basis: ${props => props.width}%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px; 
    `


    return (
        <div className="cardsContainer">
            <h2 className="message">{data.message}</h2>
            {!data.data ? "" :
                <div className="carousel">
                    <div className="slider"
                        onTransitionEnd={() => {
                            if (direction === "backward") {
                                slider.prepend(slider.lastElementChild);
                            } else {
                                slider.appendChild(slider.firstElementChild);
                            }

                            slider.style.transition = 'none';
                            slider.style.transform = 'translate(0)';
                            setTimeout(() => {
                                slider.style.transition = 'all 0.5s';
                            })
                        }}
                    >
                        {data.data.map(single => {
                                console.log(data.data.length)
                            return (
                                <Section width={width}>
                                    <h3>{single.character}</h3>
                                    <img src={single.image} alt="" />
                                </Section>
                            )
                        })}
                    </div>
                    <div className="controls">
                        <button className="next"
                            onClick={() => {
                                direction = "forward";
                                carousel.style.justifyContent = 'flex-start';
                                slider.style.transform = `translate(-${width}%)`;
                            }}
                        >&raquo;</button>
                        <button className="prev"
                            onClick={() => {
                                if (direction === "forward") {
                                    direction = "backward";
                                    slider.appendChild(slider.firstElementChild);
                                }
                                carousel.style.justifyContent = 'flex-end';
                                slider.style.transform = `translate(${width}%)`;

                            }}
                        >&laquo;</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cards;