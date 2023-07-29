import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import { Card, Avatar, message, Button } from 'antd';

const { Meta } = Card;

interface Profile {
  id: string;
  avatarImage: string;
  coverImage: string;
  name: string;
  bio: string;
  about: string;
  email: string;
  phone: string;
}

const ActiveProfile: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const fetchProfiles = async (): Promise<void> => {
    setLoading(true);

    try {
      const db = getFirestore();
      const profilesCollection = collection(db, 'profiles');
      const profilesQuery = query(profilesCollection);

      const snapshot = await getDocs(profilesQuery);
      const profilesData: Profile[] = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Profile));

      setProfiles(profilesData);
    } catch (error) {
      console.error('Error fetching profiles:', error);
      message.error('Failed to fetch profiles.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  if (loading) {
    // You can show a loading state or return null if the data is not available yet
    return null;
  }

  return (
    <div>
      {profiles.map((profile) => (
        <Card
          key={profile.id}
          cover={<img alt="Profile Cover" src={profile.coverImage} />}
          style={{ width: 300, margin: 'auto', marginBottom: 20 }}
        >
          <Meta
            avatar={<Avatar src={profile.avatarImage} />}
            title={profile.name}
            description={profile.bio}
          />
          <div style={{ marginTop: 20 }}>
            <strong>About:</strong>
            <p>{profile.about}</p>
            <strong>Email:</strong>
            <p>{profile.email}</p>
            <strong>Phone:</strong>
            <p>{profile.phone}</p>
            <div style={{textAlign:"center"}}>
              <Button type='primary' shape='round'>Active</Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ActiveProfile;
