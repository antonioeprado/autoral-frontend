import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchboxWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: fit-content;
    height: fit-content;
    background-color: #e7e7e7;
    border-radius: 8px;
    overflow: hidden;
    align-self: baseline;
    margin-top: 18px;
    @media screen and (max-width: 600px) {
        max-width: 314px;
    }
`;

export const InputWrapper = styled.div`
    @media (min-width: 667px) {
        width: 40vw;
        min-width: 350px;
    }
    display: inherit;
    align-items: center;
    justify-content: space-between;
    height: 45px;
    width: 100%;
    background-color: #fff;
    border-radius: 8px;
    color: black;
`;

export const ResultWrapper = styled.div`
    display: inherit;
    flex-flow: row nowrap;
    align-items: center;
    margin: 16px 17px;
    user-select: none;
`;

export const ProfilePicture = styled.img`
    width: 39px;
    border-radius: 50%;
`;

export const Username = styled.p`
    font-family: "Lato", sans-serif;
    font-size: 19px;
    line-height: 23px;
    color: #515151;
    margin-left: 12px;
`;

export const SearchIcon = styled(AiOutlineSearch)`
    @media (min-width: 768px) {
        width: 21px;
        height: 21px;
    }
    width: 19.15px;
    height: 19.15px;
    color: #c6c6c6;
    cursor: pointer;
    @media screen and (max-width: 600px) {
        display: none;
    }
`;

export const StyledInput = styled(DebounceInput)`
    @media (min-width: 768px) {
        width: 100%;
        text-indent: 14px;
        &::placeholder {
            font-size: 19px;
        }
    }
    all: unset;
    height: 43px;
    width: 330px;
    font-family: "Lato", sans-serif;
    border: none;
    border-radius: 8px;
    text-indent: 16px;
    &::placeholder {
        color: #c6c6c6;
        font-size: 17px;
    }
`;
