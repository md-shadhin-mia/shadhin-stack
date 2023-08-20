import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc } from 'firebase/firestore';
import { Card, Avatar, message, Button } from 'antd';
import LoadingPage from '../../Component/LoadingPage';
import ProfileCard from './component/ProfileCard';

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
  const [activeProfileId, setActiveProfileId] = useState<string>();


  const fetchProfiles = async (): Promise<void> => {
    setLoading(true);

    try {
      const db = getFirestore();
      const profilesCollection = collection(db, 'profiles');
      const profilesQuery = query(profilesCollection);

      const snapshot = await getDocs(profilesQuery);
      const profilesData: Profile[] = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Profile));
    
      setProfiles(profilesData);

      const activeProfileCollection = collection(db, 'active-profile');
      const activeProfileDocRef = doc(activeProfileCollection, "activeProfileDocument");
      const activeProfileDoc = await getDoc(activeProfileDocRef);
      if(activeProfileDoc.exists()){
        const activeProfileId = activeProfileDoc.data().profileId;
        setActiveProfileId(activeProfileId);
      }
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

  const handleActiveProfile = async (profileId: string): Promise<void> => {
    
    try {
      const db = getFirestore();
      const activeProfileCollection = collection(db, 'active-profile');
      const activeProfileDocRef = doc(activeProfileCollection, "activeProfileDocument");
      await setDoc(activeProfileDocRef,{profileId:profileId});
      setActiveProfileId(profileId);
      message.success('Active Profile');
    } catch (error) {
      console.log(error);
      message.error('Failed to Active Profile');
    }

  }

  if (loading) {
    // You can show a loading state or return null if the data is not available yet
    return <LoadingPage />;
  }

  return (
    <div>
      {profiles.map((profile) => (
        <ProfileCard profile={profile}
         handleActiveProfile={handleActiveProfile}
          activated={activeProfileId === profile.id}
          />
      ))}
    </div>
  );
};

export default ActiveProfile;
