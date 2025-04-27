import React from 'react';
import ProfileLayouts from '../Layouts/ProfileLayouts';
import ProfileSidebar from '../components/organisems/ProfileSidebar';
import ProfileForm from '../components/organisems/ProfileForm';

const ProfilePage = () => {
    return (
        <ProfileLayouts>
            <ProfileSidebar />
            <ProfileForm />
        </ProfileLayouts>
    );
};

export default ProfilePage;