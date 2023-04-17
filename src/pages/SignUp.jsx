import React from "react";
import styled, { useTheme } from "styled-components";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import ThemeContext from "../contexts/ThemeContext";
import { useAPI } from "../hooks/useAPI";

export function SignUp() {
    const theme = useTheme(ThemeContext);
    const navigate = useNavigate();
    const { signUp } = useAPI();
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm();
    const password = getValues("password");
    return (
        <ComponentWrapper>
            <Form
                theme={theme}
                onSubmit={handleSubmit((data) => {
                    signUp(data).then(() => navigate("/sign-in"));
                })}>
                <label htmlFor=''>
                    Name
                    <input
                        {...register("name", { required: "This is required." })}
                        type='text'
                        placeholder='Your name'
                    />
                    {errors.name && <span>{errors.name.message}</span>}
                </label>
                <label htmlFor=''>
                    E-mail
                    <input
                        {...register("email", { required: "This is required." })}
                        type='email'
                        placeholder='Your email'
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                </label>
                <label htmlFor=''>
                    Password
                    <input
                        {...register("password", {
                            required: "This is required.",
                            minLength: { value: 6, message: "Password needs to have at least 6 characters." },
                        })}
                        type='password'
                        placeholder='Your password'
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                </label>

                <label htmlFor=''>
                    Repeat password
                    <input
                        {...register("repassword", {
                            validate: (value) => value === password || "Passwords don't match",
                            required: "This is required.",
                        })}
                        type='password'
                        placeholder='Repeat your password'
                    />
                    {errors.repassword && <span>{errors.repassword.message}</span>}
                </label>

                <Button theme={theme} type='submit'>
                    Enviar
                </Button>
                <StyledLink theme={theme} to='/sign-in'>
                    Já é cadastrado? Faça login agora!
                </StyledLink>
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
    & label {
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
        & span {
            font-weight: 400;
            color: red;
        }
    }
`;

const Button = styled.button`
    all: unset;
    text-align: center;
    height: 48px;
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.terciaryColor};
    margin: 10px 0;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${(props) => props.theme.subTitleColor};
`;

// export default SignUp;
