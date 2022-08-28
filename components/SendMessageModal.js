import { Button, Col, Row, Modal, Radio, Space } from 'antd'
import React, {useState, useEffect, useRef} from 'react'
import UserCard from "./UserCard";

const SendMessageModal = ({openModal , closeModel}) => {

    const [isSendMessageModalVisible, setisSendMessageModalVisible] = useState(false);    

    useEffect(() => {
        setisSendMessageModalVisible(openModal);
    }, [openModal])

    const sendMessageHandleOk = () => {
        setisSendMessageModalVisible(false);
        closeModel(false)
    };
    
    const sendMessageHandleCancel = () => {
        setisSendMessageModalVisible(false);
        closeModel(false)
    };

    return (
        <>
        <Modal title="Send a Message" visible={isSendMessageModalVisible} onOk={sendMessageHandleOk} onCancel={sendMessageHandleCancel} okText="Send Message">
            <UserCard/>
            <h2>Tap a message or write your own:</h2>
            <ul className={'sendMessageDefaults'}>
                <li><a href={'#'}>Hi, is this still available?</a></li>
                <li><a href={'#'}>Hi, I would like to buy this?</a></li>
                <li><a href={'#'}>Hi, can you meet today?</a></li>
            </ul>
            <h2>New message</h2>
            <textarea placeholder={'New message'}></textarea>
        </Modal>
    </>
    )
}

export default SendMessageModal
