import React, { useState } from 'react';
import { Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import { RcFile } from 'antd/es/upload';
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (values:any) => {
    setLoading(true);

    try {
      const storage = getStorage();
      const storageRef = ref(storage);
      console.log({n1:values.avatarImage, n2:values.coverImage});
      const avatarImageRef = ref(storageRef, `avatar/${values.avatarImage.file.name}`);
      const coverImageRef = ref(storageRef, `cover/${values.coverImage.file.name}`);

      await Promise.all([
        uploadBytes(avatarImageRef, values.avatarImage.file),
        uploadBytes(coverImageRef, values.coverImage.file),
      ]);

      const avatarImageUrl = await getDownloadURL(avatarImageRef);
      const coverImageUrl = await getDownloadURL(coverImageRef);

      const profileData = {
        avatarImage: avatarImageUrl,
        coverImage: coverImageUrl,
        name:values.name,
        bio: values.bio,
        about: values.about,
        phone: values.phone,
        email: values.email,
      };
      console.log(profileData)
      const db = getFirestore();
      await addDoc(collection(db, 'profiles'), profileData);

      message.success('Profile created successfully!');
      navigate("/admin/profile-list")
    } catch (error) {
      console.error('Error creating profile:', error);
      message.error('An error occurred while creating the profile.');
    } finally {
      setLoading(false);
    }
  };

  const handleUploadAvatar = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }

    return false;
  };

  const handleUploadCover = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }

    return false;
  };

  return (
    <div style={{margin:"16px"}}>
      <Form layout="vertical" onFinish={handleSubmit} style={{width:"100%"}}>
        <Form.Item label="Avatar Image">
          <Form.Item name="avatarImage" noStyle rules={[{ required: true, message: 'Please upload an avatar image' }]}>
            <Upload
              name="avatarImage"
              beforeUpload={handleUploadAvatar}
              showUploadList={false}
              action={undefined}
              accept="image/*"
            >
              <Button icon={<UploadOutlined />} loading={loading}>
                Upload Avatar Image
              </Button>
            </Upload>
          </Form.Item>
        </Form.Item>
        <Form.Item label="Cover Image">
          <Form.Item name="coverImage" noStyle rules={[{ required: true, message: 'Please upload a cover image' }]}>
            <Upload
              name="coverImage"
              beforeUpload={handleUploadCover}
              showUploadList={false}
              action={undefined}
              accept="image/*"
            >
              <Button icon={<UploadOutlined />} loading={loading}>
                Upload Cover Image
              </Button>
            </Upload>
          </Form.Item>
        </Form.Item>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your profile Name' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Bio" name="bio" rules={[{ required: true, message: 'Please enter your bio' }]}>
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item label="About" name="about" rules={[{ required: true, message: 'Please enter information about yourself' }]}>
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'Please enter your phone number' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email address' }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
    
  );
};

export default ProfileForm;
