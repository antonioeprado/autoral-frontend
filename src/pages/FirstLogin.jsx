import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useFamily } from "../hooks/useFamily";
import { useNavigate, Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import styled from "styled-components";
import FamilyContext from "../contexts/FamilyContext";

export default function FirstLogin() {
    const { newFamily, fetchFamily } = useFamily();
    const { setFamilyData } = useContext(FamilyContext);
    const navigate = useNavigate();
    const { id: ownerId, access_token: token } = useUser();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <ComponentWrapper>
            <Form
                onSubmit={handleSubmit((data) => {
                    newFamily(token, { ownerId, ...data })
                        .then(() => {
                            fetchFamily(token, ownerId).then((res) => {
                                setFamilyData(res.data);
                                navigate("/home");
                            });
                        })
                        .catch((err) => console.log(err));
                })}>
                <InputLabel>
                    Qual nome deseja dar a sua familia?
                    <input {...register("name", { required: "This is required." })} type='text' />
                    {errors.name && <span>{errors.name.message}</span>}
                </InputLabel>
                <InputLabel>
                    Deseja proteger sua familia? Se sim, apenas você poderá excluir itens.
                    <div>
                        <input {...register("protect")} type='checkbox' />
                        <Legend>Sim, desejo protejer minha familia.</Legend>
                    </div>
                </InputLabel>
                <Button>Enviar</Button>
            </Form>
        </ComponentWrapper>
    );
}

const ComponentWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 50%;
    height: 75%;
    margin: auto;
`;

const Form = styled.form`
    display: flex;
    flex-flow: column nowrap;
    margin: auto;
`;

const InputLabel = styled.label`
    display: flex;
    flex-direction: column;
    font-weight: 700;
    margin-bottom: 10px;
    & input {
        height: 32px;
        border-radius: 5px;
        box-sizing: border-box;
        text-indent: 6px;
    }
    & input[type="checkbox"] {
        height: 18px;
    }
    & span {
        font-weight: 400;
        color: red;
    }
    & div {
        display: flex;
        align-items: center;
        margin-top: 8px;
    }
`;

const Legend = styled.label`
    font-weight: 400;
    font-size: 14px;
    margin-left: 15px;
`;

const Button = styled.button`
    all: unset;
    text-align: center;
    height: 48px;
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.terciaryColor};
    margin: 10px 0;
`;
