
import Link from 'next/link'
import { Menu, Modal, Input, Dropdown, Select, Button, Row, Col } from 'antd';
import LiginModal from './LiginModal';
import React, { useState } from 'react';
import { EnvironmentFilled, SearchOutlined } from '@ant-design/icons';
import CategoryNav from './CategoryNav';




const Header = () => {

    const { Option } = Select;

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const menu = (
        <div className="dropdownBox">

            <h3 className="dropdownBoxTitle">local distance</h3>
            <Select defaultValue="30" className="dropdownBoxSelect">
                <Option value="30">30 KM</Option>
                <Option value="40">40 KM</Option>
                <Option value="50">50 KM</Option>
            </Select>
            <Button className="buttonGetMyLocation"><EnvironmentFilled /> Get My Location</Button>
            <Row justify="center" gutter={10}>
                <Col span={12} ><Button className="buttonPrimary"> See Listings</Button></Col>
                <Col span={12} ><Button className="buttonSecondary"> Reset</Button></Col>
            </Row>


        </div>    
    );

    return (
        <>
            <header>
                <Row justify="center">
                    <Col span={23} lg={{ span: 22 }} >
                        <Row justify="center" align="middle">
                            <Col span={23} lg={{ span: 3 }}>
                                <Link href="/">
                                    <a>
                                        <img src="/logo.svg" height="50"/>
                                    </a>
                                </Link>
                            </Col>
                            <Col span={23} lg={{ span: 14 }} >
                                <Row justify="center">
                                    <Col span={8} >
                                        
                                        <Dropdown overlay={menu} trigger={['click']}>
                                            <Button className="headerSearchFilter" onClick={e => e.preventDefault()}>
                                                <EnvironmentFilled /> Arrowhead Farm: 30 KM
                                            </Button>
                                        </Dropdown>

                                    </Col>
                                    <Col span={16} >
                                        <SearchOutlined className="headerSearchIcon" />
                                        <Input className="headerSearch" placeholder="search AiishAii" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={23} lg={{ span: 7 }}>
                                <div className="headerLeftMenu flex-end">
                                    <div className="menuItem"><Link href="/staticPage"><a>About Us</a></Link></div>
                                    <div className="menuItem"><Link href="/staticPage"><a>Help</a></Link></div>
                                    <div className="menuItem"><Button onClick={showModal}> <img src="/login-icon.svg" />Login</Button></div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <LiginModal/>
                </Modal>
            </header>
            <CategoryNav/>
        </>
    )
}

export default Header
