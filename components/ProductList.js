
import { Menu, Modal, Input, Dropdown, Select, Button, Row, Col, Card } from 'antd';
import { EnvironmentFilled, SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React, { useState } from 'react';


const ProductList = (props) => {

    const productSpan = props.productSpan
    const productNum = props.productNum
    const loadMore = props.loadMore

const listProduct =  new Array(!productNum ? 16 : productNum).fill(null).map((_, index) => {
    return (
      <Col key={index} span={12} lg={{ span: !productSpan ? 6 : productSpan }}>
        <Link href="/productDetails">
        <a>
          <Card
          className="productItem"
          hoverable
          style={{ width: '100%' }}
          cover={<img alt="example" src="/product/1.jpeg" />}
        >
          <h2>2008 toyota tacoma</h2>
          <h3>SAR 1,200</h3>
          <p> <EnvironmentFilled/> Location</p>
        </Card>
        </a>
      </Link>
    </Col>
    );
    })


    return (
        <Row justify="center" align="top"  gutter={[20, 20]} className="productList">
            {listProduct}
            {loadMore ? <div className="loadMoreButton" ><Button type="primary">Load More</Button></div> : "" }
        </Row>
    )
}

export default ProductList
