import Avatar from 'antd/lib/avatar/avatar'
import { UserOutlined } from '@ant-design/icons';
import { Rate } from 'antd';

const UserCard = () => {
    return (
        <div className="userCard">
            <div className="userCardImg"><Avatar size={64} icon={<UserOutlined />} /></div>
            <div>
                <h3>User Name</h3>
                <p>Member since May 2022</p>
                <span>
                    <Rate disabled defaultValue={3} />
                    <span className="ant-rate-text">(25)</span>
                </span>
            </div>
        </div>
    )
}

export default UserCard
