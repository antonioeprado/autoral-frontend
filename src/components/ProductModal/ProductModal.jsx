import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { useProducts } from "../../hooks/useProducts";
import { useContext } from "react";
import FamilyContext from "../../contexts/FamilyContext";

// Modal.setAppElement("#modalMain");

export default function ProductModal({ modalState, reload, token }) {
    const { modalIsOpen, setIsOpen } = modalState;
    const { trigger, setTrigger } = reload;
    const { registerProduct } = useProducts();
    const { familyData } = useContext(FamilyContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function handleClose() {
        setTrigger(!trigger);
        setIsOpen(false);
    }

    function handleSubmition() {
        handleSubmit((data) => {
            registerProduct(token, data, familyId);
        });
    }

    return (
        <StyledModal
            ariaHideApp={false}
            parentSelector={() => document.querySelector("#modal-main")}
            isOpen={modalIsOpen}
            onRequestClose={handleClose}
            contentLabel='Example Modal'>
            <Form
                onSubmit={handleSubmit((data) => {
                    registerProduct(token, data.name, familyData.id);
                })}>
                <Header>REGISTER YOUR PRODUCT</Header>
                <label>
                    Name:
                    <input {...register("name", { required: "This is required." })} type='text' />
                    {errors.name && <span>{errors.name.message}</span>}
                </label>
                <div>
                    <button type='submit'>Submit</button>
                    <button onClick={handleClose}>Close</button>
                </div>
            </Form>
        </StyledModal>
    );
}

const StyledModal = styled(Modal)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    color: ${(props) => props.theme.textColor};
`;

const Header = styled.header`
    padding: 80px 0;
    font-size: 18px;
    font-weight: 700;
`;

const Form = styled.form`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 400px;
    height: 400px;
    border: ${(props) => `2px solid ${props.theme.subTitleColor}`};
    border-radius: 8px;
    background-color: ${(props) => props.theme.terciaryColor};
`;
