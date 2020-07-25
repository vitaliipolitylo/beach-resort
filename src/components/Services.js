import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'


export class Services extends Component {
    constructor(props){
        super(props);
        this.state={
            services:[
                {
                    icon: <FaCocktail />,
                    title: 'Free Cocktails',
                    info: 'Limited time only! Enjoy your time.'
                },
                {
                    icon: <FaHiking />,
                    title: 'Endless Hiking',
                    info: 'Get on the top of the world. Amazing!'
                },
                {
                    icon: <FaShuttleVan />,
                    title: 'Free Shuttle For Everyone',
                    info: 'To make your vacation more comfortable.'
                },
                {
                    icon: <FaBeer />,
                    title: 'Best Beer Here',
                    info: 'Sparkling. Cold. Made with love.'
                }
            ]
        }
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((service, index) => {
                        return <article key={index} className="service">
                            <span>{service.icon}</span>
                            <h6>{service.title}</h6>
                            <p>{service.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}

export default Services
