import React, { useContext, useEffect, useState } from "react";
import FamilyContext from "../contexts/FamilyContext";
import { useFamily } from "../hooks/useFamily";
import useUser from "../hooks/useUser";
import { ProfilePicture, ResultWrapper, Username } from "../components/Searchbox/searchbox-styles";
import styled from "styled-components";

function Family() {
    const { familyData } = useContext(FamilyContext);
    const { id, access_token: token } = useUser();
    const { getMembers } = useFamily();
    const userFamily = familyData.filter((family) => family.ownerId === id).pop();

    const [members, setMembers] = useState();

    useEffect(() => {
        getMembers(token, userFamily.id).then((res) => {
            setMembers(res);
        });
    }, []);

    if (!members) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <header>
                <h2>{userFamily.name}</h2>
            </header>
            <div>
                <h3>MEMBERS</h3>
                {members.map((member, index) => (
                    <MembersWrapper key={index}>
                        <ProfilePicture src={member.Member.picture} />
                        <MembersName>{member.Member.name}</MembersName>
                    </MembersWrapper>
                ))}
            </div>
        </div>
    );
}

const MembersWrapper = styled(ResultWrapper)`
    display: flex;
    cursor: default;
    user-select: none;
`;

const MembersName = styled(Username)`
    color: ${(props) => props.theme.textColor};
`;

export default Family;
