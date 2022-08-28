import { Menu, Modal, Input, Dropdown, Select, Button, Row, Col } from 'antd';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <section className="downloadApps">
                <Row justify="center" align="middle">
                    <Col span={23} lg={{ span: 11 }} >
                        <p>Download Our App</p>
                        <h3>App is available for free on app store</h3>
                    </Col>
                    <Col span={23} lg={{ span: 11 }} className="downloadAppsImg">
                        <a href="#" target="_blank" ><img src="/android-app.png"/></a>
                        <a href="#" target="_blank" ><img src="/ios-app.png"/></a>
                    </Col>
                </Row>
            </section>
            <section className="footerBody">
                <Row justify="center" align="top" gutter={30}>
                    <Col span={23} lg={{ span: 6 }} className="footerInfo" >
                        <img src="/footer-logo.svg"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis metus nec eros tincidunt molestie. Cras tempus interdum orci quis tincidunt. Vivamus aliquam vel mauris non pretium.</p>
                    </Col>
                    <Col span={23} lg={{ span: 4 }} className="footerInfo" ><br/></Col>
                    <Col span={23} lg={{ span: 4 }} className="footerListLink" >
                        <h3>Support</h3>
                        <ul>
                            <li><Link href="/"><a>Help Center</a></Link></li>
                            <li><Link href="/"><a>About Us</a></Link></li>
                            <li><Link href="/"><a>FAQ</a></Link></li>
                            <li><Link href="/"><a>How It Work?</a></Link></li>
                            <li><Link href="/"><a>Careers</a></Link></li>
                        </ul>
                    </Col>
                    <Col span={23} lg={{ span: 4 }} className="footerListLink" >
                        <h3>Account</h3>
                        <ul>
                            <li><Link href="/"><a>My Account</a></Link></li>
                            <li><Link href="/"><a>Account Settings</a></Link></li>
                            <li><Link href="/"><a>Save Items</a></Link></li>
                            <li><Link href="/"><a>Selling</a></Link></li>
                            <li><Link href="/"><a>Inbox</a></Link></li>
                        </ul>
                    </Col>
                    <Col span={23} lg={{ span: 4 }} className="footerListLink footerSocialMedia" >
                        <h3>Follow us on</h3>
                        <ul>
                            <li><a href="#" target="_blank"><img src="/facebook.svg" /></a></li>
                            <li><a href="#" target="_blank"><img src="/twitter.svg" /></a></li>
                            <li><a href="#" target="_blank"><img src="/instagram.svg" /></a></li>
                            <li><a href="#" target="_blank"><img src="/youtube.svg" /></a></li>
                        </ul>

                    </Col>
                </Row>
            </section>
            <section className="footerFooter">
                <Row justify="center" align="middle">
                    <Col span={23} lg={{ span: 11 }} className="footerCopyright" >
                        <p>Copyright © 2022 AiishAii. All Rights Reserved</p>
                    </Col>
                    <Col span={23} lg={{ span: 11 }} className="footerListLinkHorizontal">
                        <ul>
                            <li><Link href="/"><a>Terms & Conditions</a></Link></li>
                            <li><Link href="/"><a>Privacy Policy</a></Link></li>
                        </ul>
                    </Col>
                </Row>
            </section>
        </footer>
    )
}

export default Footer
