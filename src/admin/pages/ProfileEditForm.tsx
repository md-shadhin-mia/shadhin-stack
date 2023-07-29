// UpdateProfileForm component using the Profile interface
import React, { useState, useEffect } from "react";
import { Form, Input, Button, Upload, message, Image } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { RcFile } from "antd/es/upload";

const ProfileEditForm = () => {
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState<Profile | null>(null); // Use the Profile interface
  const navigate = useNavigate();
  const { id } = useParams<string>();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const db = getFirestore();
        const profileSnapshot = await getDoc(doc(db, "profiles", id as string));
        if (profileSnapshot.exists()) {
          const profileData = profileSnapshot.data() as Profile;
          setInitialValues(profileData);
        } else {
          message.error("Profile not found");
          navigate("/admin/profile-list");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        message.error("An error occurred while fetching the profile.");
      }
    };
    fetchProfileData();
  }, [id, navigate]);

  const handleSubmit = async (values: any) => {
    setLoading(true);

    try {
      const db = getFirestore();
      const profileRef = doc(db, "profiles", id as string);
      const { avatarImage, coverImage, ...rest } = values;

      // Update the profile data except for avatar and cover images
      await updateDoc(profileRef, rest);

      // If a new avatar image is uploaded, update it
      if (avatarImage && avatarImage.file) {
        const storage = getStorage();
        const storageRef = ref(storage, `avatar/${avatarImage.file.name}`);
        await uploadBytes(storageRef, avatarImage.file);
        const avatarImageUrl = await getDownloadURL(storageRef);
        await updateDoc(profileRef, { avatarImage: avatarImageUrl });
      }

      // If a new cover image is uploaded, update it
      if (coverImage && coverImage.file) {
        const storage = getStorage();
        const storageRef = ref(storage, `cover/${coverImage.file.name}`);
        await uploadBytes(storageRef, coverImage.file);
        const coverImageUrl = await getDownloadURL(storageRef);
        await updateDoc(profileRef, { coverImage: coverImageUrl });
      }

      message.success("Profile updated successfully!");
      navigate("/admin/profile-list");
    } catch (error) {
      console.error("Error updating profile:", error);
      message.error("An error occurred while updating the profile.");
    } finally {
      setLoading(false);
    }
  };

  // ... The rest of your handleUploadAvatar and handleUploadCover functions remain unchanged
  /**
   * Handles the upload of an avatar file.
   *
   * @param {RcFile} file - The file to be uploaded.
   * @return {boolean} Returns false if the file is not a JPG or PNG or if it exceeds 2MB in size.
   */
  const handleUploadAvatar = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }

    return false;
  };

  const handleUploadCover = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }

    return false;
  };
  if (!initialValues) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ margin: "16px" }}>
      <Form
        layout="vertical"
        onFinish={handleSubmit}
        style={{ width: "100%" }}
        initialValues={initialValues}
      >
        <Form.Item label="Avatar Image">
          <Form.Item
            name="avatarImage"
            noStyle
            rules={[
              { required: true, message: "Please upload an avatar image" },
            ]}
          >
            <Upload
              name="avatarImage"
              beforeUpload={handleUploadAvatar}
              showUploadList={true}
              action={undefined}
              maxCount={1}
              accept="image/*"
              listType="picture"
            >
              <Button icon={<UploadOutlined />} loading={loading}>
                Upload Avatar Image
              </Button>
              {/* {avaterSelect&&<Image src={avaterSelect} width={"100%"} />} */}
            </Upload>
          </Form.Item>
        </Form.Item>
        <Form.Item label="Cover Image">
          <Form.Item
            name="coverImage"
            noStyle
            rules={[{ required: true, message: "Please upload a cover image" }]}
          >
            <Upload
              name="coverImage"
              beforeUpload={handleUploadCover}
              showUploadList={true}
              action={undefined}
              maxCount={1}
              listType="picture"
              accept="image/*"
            >
              <Button icon={<UploadOutlined />} loading={loading}>
                Upload Cover Image
              </Button>
            </Upload>
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            { required: true, message: "Please enter your profile Name" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Bio"
          name="bio"
          rules={[{ required: true, message: "Please enter your bio" }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="About"
          name="about"
          rules={[
            {
              required: true,
              message: "Please enter information about yourself",
            },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            { required: true, message: "Please enter your phone number" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email address" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProfileEditForm;
