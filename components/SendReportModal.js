import { Button, Col, Row, Modal, Radio, Space } from 'antd'
import React, {useState, useEffect, useRef} from 'react'

const SendReportModal = ({openModal , closeModel}) => {
    
    const [isSendReportModalVisible, setisSendReportModalVisible] = useState(false);    
    const [reportValue, setReportValue] = useState(0);

    useEffect(() => {
        setisSendReportModalVisible(openModal);
    }, [openModal])

    const onChangeSendReport = (e) => {
        setReportValue(e.target.value);
    };

    const sendReportHandleOk = () => {
        setisSendReportModalVisible(false);
        closeModel(false)
    };
    
    const sendReportHandleCancel = () => {
        setisSendReportModalVisible(false);
        closeModel(false)
    };

    return (
        <>
            <Modal title="Send Report" visible={isSendReportModalVisible} onOk={sendReportHandleOk} onCancel={sendReportHandleCancel} okText="Send Report">
                    <div className="modalProductCard">
                        <div className="modalProductCardImg" style={{backgroundImage: `url(/product/1.jpeg)`}} ></div>
                        <div>
                            <p>product title</p>
                            <span>sold by user name</span>
                        </div>
                    </div>
                    <h2>Why do you want to report this item?</h2>
                    <Radio.Group onChange={onChangeSendReport} value={reportValue} className="reportList">
                        <Space direction="vertical">
                            <Radio value={1}>Item looks like a scam</Radio>
                            <Radio value={2}>Offensive or inappropriate</Radio>
                            <Radio value={3}>Duplicate post</Radio>
                            <Radio value={4}>Wrong category</Radio>
                            <Radio value={5}>I think it is stolen</Radio>
                            <Radio value={6}>None of the above</Radio>
                        </Space>
                    </Radio.Group>
                    {reportValue === 6 && 
                        <div className="mt-20">
                            <h3>Add a note (optional)</h3>
                            <textarea placeholder="Report"></textarea>
                        </div>
                    }
            </Modal>
        </>
    )
}

export default SendReportModal
