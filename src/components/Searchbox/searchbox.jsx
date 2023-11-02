import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    SearchboxWrapper,
    InputWrapper,
    SearchIcon,
    ResultWrapper,
    ProfilePicture,
    Username,
    StyledInput,
} from "./searchbox-styles";
import useUser from "../../hooks/useUser";
import { SearchUser } from "../../api/UserAPI/Search";
import InviteButton from "../InviteButton/InviteButton";
import FamilyContext from "../../contexts/FamilyContext";

function Searchbox() {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);

    const { id, access_token: token } = useUser();
    const { familyData } = useContext(FamilyContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (search.length >= 3) {
            SearchUser(token, search).then((res) => {
                setResult(res);
            });
        }
    }, [search]);

    return (
        <SearchboxWrapper result={result}>
            <InputWrapper>
                <StyledInput
                    minLength={3}
                    debounceTimeout={300}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder='Search for people'
                />
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: "17px",
                    }}>
                    <SearchIcon />
                </div>
            </InputWrapper>
            {search.length >= 3 &&
                result.length !== 0 &&
                result.map(
                    (user, index) =>
                        user.id !== id && (
                            <ResultWrapper key={index}>
                                <ProfilePicture src={user.profile_picture} />
                                <Username>{user.name}</Username>
                                <InviteButton searchId={user.id} familyId={familyData.id} />
                            </ResultWrapper>
                        )
                )}
        </SearchboxWrapper>
    );
}

export default Searchbox;
