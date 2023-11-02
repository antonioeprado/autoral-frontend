import React, { useEffect, useState } from "react";
import useUser from "../../hooks/useUser";
import { findInvite } from "../../api/MembersAPI/findInvite";
import styled from "styled-components";
import { inviteMember } from "../../api/MembersAPI/inviteMember";
import { deleteInvite } from "../../api/MembersAPI/deleteInvite";

function InviteButton({ searchId, familyId }) {
    const { access_token: token } = useUser();
    const [invited, setInvited] = useState(false);
    const [inviteId, setInviteId] = useState(0);

    useEffect(() => {
        findInvite(searchId, familyId, token).then((res) => {
            try {
                if (res.id) {
                    setInviteId(res.id);
                    setInvited(true);
                }
            } catch (error) {
                if (error instanceof TypeError) {
                    setInvited(false);
                }
            }
        });
    }, []);

    function handleClick() {
        if (!invited) {
            inviteMember(searchId, familyId, token).then((res) => {
                setInviteId(res.id);
                setInvited(true);
            });
        } else {
            deleteInvite(inviteId, token);
            setInvited(false);
        }
    }

    return (
        <Invite inv={invited} onClick={handleClick}>
            {invited ? "Invited" : "Invite"}
        </Invite>
    );
}

const Invite = styled.div`
    margin: auto;
    border: 1px solid black;
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => (props.inv ? props.theme.subTitleColor : props.theme.terciaryColor)};
    border-radius: 3px;
    width: 50px;
    height: 20px;
    text-align: center;
    padding-top: 3px;
    cursor: pointer;
`;

export default InviteButton;
