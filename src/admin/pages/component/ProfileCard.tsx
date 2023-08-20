import { Avatar, Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import { useState } from "react";

type Props = {
    profile:Profile
    handleActiveProfile: (profileId: string) => Promise<void>
    activated:boolean
}
function ProfileCard(props: Props){
    const profile = props.profile;
    const [activing, setActiving] = useState<boolean>(false);
    const handleActiveProfile = async ()=>{
       setActiving(true);
       await props.handleActiveProfile(profile.id as string);
       setActiving(false);
    }
    return <Card
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
        <Button type='primary' disabled={props.activated} shape='round' onClick={handleActiveProfile} loading={activing}>Active{props.activated && "d"}</Button>
      </div>
    </div>
  </Card>
}


export default ProfileCard;