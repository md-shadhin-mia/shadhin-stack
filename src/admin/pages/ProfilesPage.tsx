import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Table, Space, message, Modal, Row, Col } from 'antd';
import {  EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { getFirestore, collection, getDocs, query, deleteDoc, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom';



const ProfilesPage: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchForm] = Form.useForm();
  const [deleteModalVisible, setDeleteModalVisible] = useState<boolean>(false);
  const [deleteProfileId, setDeleteProfileId] = useState<string>('');

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async (): Promise<void> => {
    setLoading(true);

    try {
      const db = getFirestore();
      const profilesCollection = collection(db, 'profiles');
      const profilesQuery = query(profilesCollection);

      const snapshot = await getDocs(profilesQuery);
      const profilesData: Profile[] = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Profile[];

      setProfiles(profilesData);
    } catch (error) {
      console.error('Error fetching profiles:', error);
      message.error('Failed to fetch profiles.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (keyword: string): void => {

    if (keyword) {
      const filteredProfiles = profiles.filter(
        (profile) =>
          profile.name.toLowerCase().includes(keyword.toLowerCase()) ||
          profile.email.toLowerCase().includes(keyword.toLowerCase()) || 
          profile.phone.toLowerCase().includes(keyword.toLowerCase())
      );
      setProfiles(filteredProfiles);
    } else {
      fetchProfiles();
    }
  };

  const handleEdit = (profileId: string): void => {
    // Handle edit logic for the selected profile
  };

  const handleDelete = (profileId: string): void => {
    setDeleteProfileId(profileId);
    setDeleteModalVisible(true);
  };

  const confirmDelete = async (): Promise<void> => {
    try {
      const db = getFirestore();
      await deleteDoc(doc(db, 'profiles', deleteProfileId));
      message.success('Profile deleted successfully!');
      setDeleteModalVisible(false);
      fetchProfiles();
    } catch (error) {
      console.error('Error deleting profile:', error);
      message.error('Failed to delete profile.');
    }
  };

  const cancelDelete = (): void => {
    setDeleteModalVisible(false);
  };

  const columns = [
    {title:"avater",  key:"avatarImage", 
    render: (text: string, record: Profile) => {
      return <img src={record.avatarImage} style={{ width: 36, height: 36, borderRadius: 50 }}/>
    }  
  },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    {title: "Phone", dataIndex: "phone", key: "phone"},
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Profile): React.ReactNode => (
        <Space>
          
          <Link to={`/admin/profile-edit/${record.id}`} >
              <Button type="primary" shape="circle" icon={<EditOutlined />} />
          </Link>
        
          <Button type="primary" shape="circle" danger icon={<DeleteOutlined />} onClick={() => handleDelete(record.id as string)} />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Row>
        <Col span={8}><Input.Search placeholder="Search"  style={{ width: 200 }} onSearch={handleSearch}/></Col>
        <Col offset={8} span={8}>
        <div style={{ textAlign: 'right' }}>
          <Button type="default">

              <Link to="/admin/profile-create">
                <PlusOutlined/>
                New Profile</Link>
          </Button>
        </div>
        </Col>
      </Row>
      <Table columns={columns} dataSource={profiles} loading={loading} rowKey="id" />
      <Modal
        visible={deleteModalVisible}
        title="Confirm Delete"
        onCancel={cancelDelete}
        onOk={confirmDelete}
        okText="Delete"
        cancelText="Cancel"
      >
        <p>Are you sure you want to delete this profile?</p>
      </Modal>
    </div>
  );
};

export default ProfilesPage;
