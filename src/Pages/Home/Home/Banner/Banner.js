
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block img-size"
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&w=1000&q=80"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Best Photographar In Bangladesh</h3>
                    <p>It is rightly said that a single picture can sometimes be much more eloquent than a
                        thousand words. Few vocations offer a larger variety of prospects than does photography.
                        Photography is divided into many streams each generating numerous job opportunities.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block img-size"
                    src="https://images.unsplash.com/photo-1590071089561-2087ff1fc418?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>A Career in Photography</h3>
                    <p>These days, Photography is fast emerging as a popular career choice among all the age groups.
                        Photography is both a science and an art.
                        It is an artistic means of expression, the camera replacing the pen or the paintbrush.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-size"
                    src="https://i.ytimg.com/vi/ineZXLbL7s8/maxresdefault.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Take Our Services </h3>
                    <p>
                        Packshot Factory has a rich and long-standing history in the product
                        advertising industry, as commercial photographers and tabletop cinematographers we have been creating our own brand with a mission that has remained
                        unchanged for nearly four decades: to create images that are of the highest quality
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;