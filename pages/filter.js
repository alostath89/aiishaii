import ProductList from "../components/ProductList";
import { Breadcrumb, Checkbox, Radio, Menu, Modal, Input, Dropdown, Select, Button, Row, Col, Card } from 'antd';
import Link from 'next/link';

const filter = () => {
    return (
        <section>
            <section className="pageTitle">
                <Row gutter={30}>
                    <Col span={24} lg={{ span: 6 }}></Col>
                    <Col span={24} lg={{ span: 18 }}>
                        <h1>audio & speakers</h1>
                        <Breadcrumb>
                            <Breadcrumb.Item><Link href="/">Home</Link></Breadcrumb.Item>
                            <Breadcrumb.Item><Link href="/filter">Electronics & Media</Link></Breadcrumb.Item>
                            <Breadcrumb.Item>audio & speakers</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </section>
            <Row gutter={30} justify="center" >
                    <Col span={24} lg={{ span: 5 }}>
                        <div className="filterList">
                            <div className="filterListItem">
                                <ul>
                                    <li><Link href="/filter">All Category</Link></li>
                                    <li><Link href="/filter">Electronics & Media</Link>
                                        <ul>
                                            <li className="active"><Link href="/filter">Audio & Speakers</Link></li>
                                            <li><Link href="/filter">cell phones & accessories</Link></li>
                                            <li><Link href="/filter">cameras & photography</Link></li>
                                            <li><Link href="/filter">tv & media players</Link></li>
                                            <li><Link href="/filter">video games & consoles</Link></li>
                                            <li><Link href="/filter">computers & accessories</Link></li>
                                            <li><Link href="/filter">books, movies & music</Link></li>
                                            <li><Link href="/filter">wearables</Link></li>
                                            <li><Link href="/filter">drones</Link></li>
                                            <li><Link href="/filter">virtual reality</Link></li>
                                            <li><Link href="/filter">electronics & media</Link></li>
                                        </ul>
                                    </li>
                                    <li><a>+ show more</a></li>
                                </ul>
                            </div>
                            <div className="filterListItem">
                                <h3>price range</h3>
                                <div className="filterListItemPrice">
                                    <Input placeholder="min" />
                                    <p>to</p>
                                    <Input placeholder="max" />
                                </div>
                            </div>
                            <div className="filterListItem">
                                <h3>Condition</h3>
                                <Checkbox>New</Checkbox>
                                <Checkbox>Reconditioned/certified</Checkbox>
                                <Checkbox>Open box (never used)</Checkbox>
                                <Checkbox>Used (normal wear)</Checkbox>
                                <Checkbox>For parts</Checkbox>
                                <Checkbox>Other (see description)</Checkbox>
                            </div>
                            <div className="filterListItem">
                                <h3>sort by</h3>
                                <Radio.Group>
                                    <Radio value={1}>newest</Radio>
                                    <Radio value={2}>closest</Radio>
                                    <Radio value={3}>price: low to highh</Radio>
                                    <Radio value={4}>price: highh to low</Radio>
                                </Radio.Group>
                            </div>
                        </div>
                    </Col>
                    <Col span={24} lg={{ span: 17 }}>
                        <ProductList loadMore={true} />
                    </Col>
                </Row>
            
        </section>
    )
}

export default filter
