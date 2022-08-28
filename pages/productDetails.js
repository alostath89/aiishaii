import { Button, Col, Row, Modal, Radio, Space } from 'antd'
import React, {useState, useEffect, useRef} from 'react'
import ProductList from '../components/ProductList'
import { HeartOutlined, FlagOutlined, ShareAltOutlined } from '@ant-design/icons';
import UserCard from '../components/UserCard';
import Map from '../components/Map';
import SendReportModal from '../components/SendReportModal'
import SendMessageModal from '../components/SendMessageModal'
import EnterOfferModal from '../components/EnterOfferModal'

const productDetails = () => {
    
    const [saveProduct, setsaveProduct] = useState(false);
    const [SendReportModalVal, setSendReportModalVal] = useState(false);
    const [SendMessageModalVal, setSendMessageModalVal] = useState(false);
    const [EnterOfferModalVal, setEnterOfferModalVal] = useState(false);
    
    const openSendReportModal = (() => {
        setSendReportModalVal(true);
    })
    const closeSendReportModal = (val) => {
        setSendReportModalVal(val);
    }  

    const openSendMessageModal = (() => {
        setSendMessageModalVal(true);
    })
    const closeSendMessageModal = (val) => {
        setSendMessageModalVal(val);
    }

    const openEnterOfferModal = (() => {
        setEnterOfferModalVal(true);
    })
    const closeEnterOfferModal = (val) => {
        setEnterOfferModalVal(val);
    }

    const addToSave = () => {
        setsaveProduct(!saveProduct);
    };
    
    const productgallaryArray = [
        {id:"1", img: "/product/1.jpeg"},
        {id:"2", img: "/product/2.jpeg"},
        {id:"3", img: "/product/3.jpeg"},
        {id:"4", img: "/product/4.jpeg"},
        {id:"5", img: "/product/5.jpeg"},
        {id:"6", img: "/product/6.jpeg"},
        {id:"7", img: "/product/7.jpeg"},
    ]

    const [gallaryCoverImg, setGallaryCoverImg] = useState(productgallaryArray[0].img)

    const removeClassActive = () => {
        var element = document.getElementsByClassName("productgallaryImg");
        for(var i=0; element.length > i ; i++){
            element[i].classList.remove("active");
        }
    }

    const getImgSrc = (e) => {
        setGallaryCoverImg(e.target.dataset.img)
        removeClassActive()
        e.target.classList.add('active')
    }

    const productgallary = productgallaryArray.map((item, index) => (
        <div key={index} data-img={item.img} className={`productgallaryImg ` + (index == 0 && 'active')} style={{backgroundImage:`url(${item.img})`}} onClick={( (e) => getImgSrc(e) )} ></div>
    ))

    return (
        <section>
            <section className="offersDetails">
                <Row justify="center" gutter={30}>
                    <Col span={24} lg={{ span: 6 }}>
                        <h1>2008 toyota tacoma</h1>
                        <h2>SAR 1,200</h2>
                        <ul>
                            <li><img src="/speedometer.svg"/> 87,000 KM</li>
                            <li><img src="/gas-station.svg"/> 87,000 KM</li>
                            <li><img src="/quality.svg"/> Condition: Good</li>
                            <li><img src="/glyph.svg"/> Posted 25 minutes ago in Columbus, Ohio</li>
                            <li><img src="/tag.svg"/> Vehicles - cars & Trucks</li>
                        </ul>
                        <Row justify="center" gutter={10}>
                            <Col span={12} lg={{ span: 12 }}><Button className="askButton" type="primary" onClick={openSendMessageModal}>ask</Button></Col>
                            <Col span={12} lg={{ span: 12 }}><Button className="makeOfferButton" type="primary" onClick={openEnterOfferModal}>make offer</Button></Col>
                        </Row>
                        <section className="userBox">
                            <UserCard />
                        </section>
                        <Row justify="center" gutter={10}>
                            <Col span={8} lg={{ span: 8 }}><Button icon={<HeartOutlined />} onClick={addToSave} className={`buttonBorderStyle ` + (saveProduct ? "active" : null)}>save</Button></Col>
                            <Col span={8} lg={{ span: 8 }}><Button icon={<FlagOutlined />} onClick={openSendReportModal} className="buttonBorderStyle">report</Button></Col>
                            <Col span={8} lg={{ span: 8 }}><Button icon={<ShareAltOutlined />} className="buttonBorderStyle">share</Button></Col>
                        </Row>
                        
                    </Col>
                    <Col span={24} lg={{ span: 16 }}>
                        <section>
                            <section>
                                <div className="gallaryCoverImg"><img src={gallaryCoverImg} height="100%" /></div>
                                <div className="productgallary">
                                    {productgallary}
                                </div>
                            </section>
                            <section className="productDetails">
                                <h2>details</h2>
                                <div className="detailsList">
                                    <div className="detailsListItem">brand: <b>toyota</b></div>
                                    <div className="detailsListItem">model: <b>2008</b></div>
                                    <div className="detailsListItem">type: <b>tacoma</b></div>
                                </div>
                            </section>
                            <section className="productDescription">
                                <h2>Description</h2>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                <div></div>
                            </section>
                            <section>
                                <Map/>
                            </section>
                        </section>
                    </Col>
                </Row>
            </section>
            <section className="userOtherOffers">
                <Row justify="center">
                    <Col span={24} lg={{ span: 22 }}>
                        <h2>name other offers</h2>
                        <ProductList productSpan={4} productNum={12} loadMore={false} />
                    </Col>
                </Row>
            </section>
            <SendReportModal openModal={SendReportModalVal} closeModel={closeSendReportModal} />
            <SendMessageModal openModal={SendMessageModalVal} closeModel={closeSendMessageModal} />
            <EnterOfferModal openModal={EnterOfferModalVal} closeModel={closeEnterOfferModal} />
            
        </section>
    )
}

export default productDetails
