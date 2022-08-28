import ProductList from "../components/ProductList";
import { Menu, Modal, Input, Dropdown, Select, Button, Row, Col, Card } from 'antd';
import { EnvironmentFilled, SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function Home() {

  return (

    <Row justify="center">
      <Col span={23} lg={{ span: 22 }} >
        <Row justify="center" align="top"  gutter={20}>
            <Col span={24} lg={{ span: 3 }}>
            <img src="/ads.png" width="100%" />
            </Col>
            <Col span={24} lg={{ span: 18 }}>
              <ProductList loadMore={true}/>
            </Col>
            <Col span={24} lg={{ span: 3 }}>
            <img src="/ads.png" width="100%" />
            </Col>
        </Row>
      </Col>
    </Row>

    
  )
}
