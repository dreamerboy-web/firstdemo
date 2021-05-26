import React from "react";
import Album from "../Album/Album";
import Weather from "../Weather/Weather";
import Chart from "../Chart/Chart";
import Download from "../Download/Download";
import Social from "../Social/Social";
import Auth from "../Auth/Auth";
import Contact from "../Contact/Contact";
import Blog from "../Blog/Blog";
import Users from "../Users/Users";
import Time from "../Time/Time";
import Map from "../Map/Map";
import Player from "../Player/Player";
import Shoes from "../Shoes/Shoes";
import ShoesSmall from "../ShoesSmall/ShoesSmall";
import Messanger from "../Messanger/Messanger";
import Last from "../Last/Last";
import CalendarExample from '../Calendar/Calendar'


export default function All(){
    return(
        <div>
            <div className="first-block">
                <div className="first-block-item">
                    <Album  />
                    <Weather />
                </div>
                <div className="first-block-item">
                    <Chart  />
                </div>
                <div className="first-block-item">
                    <Download  />
                    <Social  />
                    <Auth  />
                </div>
            </div>

            <div className="second-block">
                <div className="contact-wrapper">
                    <Contact  />
                </div>

                <div className="blog-wrapper">
                    <Blog  />
                </div>
            </div>

            <div className="third-block">
                <div className="users-wrapper">
                    <Users />
                </div>

                <div className="second-item">
                    <div>
                        {/*<Time />*/}
                        <div className="some">
                            <CalendarExample/>
                        </div>
                        {/*<Calendar />*/}
                    </div>
                    <div>
                        <Map />
                    </div>
                </div>
            </div>

            <div className="fourth-block">
                <div className="item">
                    <Player />
                </div>
                <div className="item">
                    <Shoes />
                    <ShoesSmall />
                </div>
                <div className="item">
                    <Messanger />
                    <Last />
                </div>
            </div>
        </div>
    )
}
