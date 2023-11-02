import React from "react";
import styled from "styled-components";
import inviteResponse from "../../api/MembersAPI/inviteResponse";

function ProfileInvites({ ownerPicture, owner, inviteId, familyName, token, trigger, setTrigger }) {
    function handleAction(e) {
        if (e.target.innerHTML === "Accept") {
            inviteResponse(inviteId, token, "Accept");
            setTrigger(!trigger);
        } else {
            inviteResponse(inviteId, token, "Reject");
            setTrigger(!trigger);
        }
    }

    return (
        <>
            <InviteInfo>
                <FamilyOwnerPicture src={ownerPicture} width={39} />
                <FamilyOwner>Owner: {owner}</FamilyOwner>
                <ButtonsContainer>
                    <Button action={"accept"} onClick={handleAction}>
                        Accept
                    </Button>
                    <Button action={"reject"} onClick={handleAction}>
                        Reject
                    </Button>
                </ButtonsContainer>
            </InviteInfo>
            <FamilyName>Family name: {familyName}</FamilyName>
        </>
    );
}

const FamilyOwnerPicture = styled.img`
    margin: 0px 0px 0px 10px;
    border: 0;
`;

const FamilyName = styled.p`
    font-size: 20px;
    color: ${(props) => props.theme.textColor};
    margin: 0px 68px;
`;

const FamilyOwner = styled(FamilyName)`
    margin: 0px 30px 0 18px;
`;

const ButtonsContainer = styled.div`
    display: inherit;
    flex-flow: row nowrap;
    margin: 0 18px 0 180px;
`;

const Button = styled.div`
    margin: 0 10px;
    border: ${(props) => `1px solid ${props.theme.textColor}`};
    border-radius: 3px;
    background-color: ${(props) =>
        props.action === "accept" ? `${props.theme.mainColor}` : `${props.theme.subTitleColor}`};
    width: 60px;
    text-align: center;
    cursor: pointer;
`;

const InviteInfo = styled.div`
    display: inherit;
    align-items: center;
`;

export default ProfileInvites;
