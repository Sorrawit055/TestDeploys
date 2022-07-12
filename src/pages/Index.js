import React from 'react'
import "../components/css/Banner.css"
import "../components/css/Content.css"
import "../components/css/CallToAction.css"
import { FiCode } from 'react-icons/fi'

let bannerData = {
    title: "React landing page",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam velit iure aut delectus sapiente omnis adipisci expedita ipsam, possimus impedit minus vero dolor? Reprehenderit eveniet, minus pariatur aperiam voluptate labore?"
}

function Index() {
    return (
        <div class="banner">
            <div className="banner-bg">
                <div className="container">
                    <div className="banner-con">
                        <div className="banner-text">
                            <h1>{bannerData.title}</h1>
                            <p>
                                {bannerData.desc}
                            </p>
                            <a href="#" className="banner-btn">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <section className="content-con">
                    <div className="content-l">
                        <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80" alt="" />
                    </div>
                    <div className="content-r">
                        <h2>Some title</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                        </p>
                    </div>
                </section>
                <section className="content-con">
                    <div className="content-r">
                        <h2>Some title</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                        </p>
                    </div>
                    <div className="content-l">
                        <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80" alt="" />
                    </div>
                </section>
                <section className="content-con">
                    <div className="content-l">
                        <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80" alt="" />
                    </div>
                    <div className="content-r">
                        <h2>Some title</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                        </p>
                    </div>
                </section>
            </div>

            <div className="cta-bg">
            <div className="overlay"></div>
            <div className="container">
                <div className="cta-text">
                    <FiCode className="FiCode" />
                    <h2>We're react dev team</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse voluptatem dolores atque asperiores maxime blanditiis, quos natus consequatur adipisci quaerat praesentium neque tempora rem deserunt iste, nam quisquam provident!</p>
                    <a href="#" className="cta-btn">get to know us</a>
                </div>
            </div>
        </div>


        </div>
    )
}

export default Index
