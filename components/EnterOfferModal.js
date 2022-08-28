import { Button, Col, Row, Modal, Radio, Space } from 'antd'
import React, {useState, useEffect, useRef} from 'react'

const EnterOfferModal = ({openModal , closeModel}) => {
    const [isEnterOfferModalVisible, setisEnterOfferModalVisible] = useState(false);    

    useEffect(() => {
        setisEnterOfferModalVisible(openModal);
    }, [openModal])

    const enterOfferHandleOk = () => {
        setisEnterOfferModalVisible(false);
        closeModel(false)
    };
    
    const enterOfferHandleCancel = () => {
        setisEnterOfferModalVisible(false);
        closeModel(false)
    };

    return (
        <>
        <Modal title="Enter Your Offer" visible={isEnterOfferModalVisible} onOk={enterOfferHandleOk} onCancel={enterOfferHandleCancel} okText="Send Offer">

        </Modal>
    </>
    )
}

export default EnterOfferModal
