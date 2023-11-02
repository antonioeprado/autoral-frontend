import React, { useEffect, useState } from "react";
import useUser from "../hooks/useUser";
import styled from "styled-components";
import dayjs from "dayjs";
import loadInvitations from "../api/MembersAPI/findUserInvites";
import ProfileInvites from "../components/ProfileInvites/ProfileInvites";

function Profile() {
    const { id, profile_picture, name, email, created_at, access_token: token } = useUser();
    const [invites, setInvites] = useState([]);
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        loadInvitations(id, token).then((res) => setInvites(res));
    }, [trigger]);

    return (
        <ComponentWrapper>
            <ProfilePicture src={profile_picture} width={240} alt='' />
            <UserInfoWrapper>
                <Text>
                    <StyledSpan>User: </StyledSpan>
                    {name}
                </Text>
                <Text>
                    <StyledSpan>Email: </StyledSpan>
                    {email}
                </Text>
                <Text>
                    <StyledSpan>Date of creation: </StyledSpan>
                    {dayjs(created_at).format("DD of MMMM, YYYY")} at {dayjs(created_at).format("hh:mm A")}
                </Text>
            </UserInfoWrapper>
            <InvitesWrapper>
                <InviteTitle>Your invites</InviteTitle>
                {invites.length !== 0 ? (
                    invites.map((invite, index) => (
                        <Invite key={index}>
                            <ProfileInvites {...invite} token={token} trigger={trigger} setTrigger={setTrigger} />
                        </Invite>
                    ))
                ) : (
                    <p>No invites</p>
                )}
            </InvitesWrapper>
        </ComponentWrapper>
    );
}

const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
`;

const UserInfoWrapper = styled.div`
    display: inherit;
    flex-direction: column;
`;

const InvitesWrapper = styled.div`
    display: inherit;
    flex-direction: column;
`;

const Invite = styled.div`
    display: inherit;
    flex-direction: column;
    border: ${(props) => `1px solid ${props.theme.textColor}`};
    padding: 10px 0px;
`;

export const Text = styled.p`
    font-size: 20px;
    color: ${(props) => props.theme.textColor};
`;

const StyledSpan = styled.span`
    color: ${(props) => props.theme.subTitleColor};
    font-weight: 700;
`;

export const ProfilePicture = styled.img`
    border: ${(props) => `1px solid ${props.theme.textColor}`};
    border-radius: 50%;
    margin: 30px 0px;
`;

const InviteTitle = styled(Text)`
    font-size: 36px;
    font-weight: 700;
`;

export default Profile;
