import { Button, Flex, Input, Typography } from "antd";
// import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [formData, setFormData] = useState({
        userName: "",
        password: "",
        confirmPasswor: "",
    });

    // const url = import.meta.env.VITE_BACKEND_LINK;

    const nav = useNavigate();
    const submitHandler = () => {
        // const data = {
        //     userName: formData.userName,
        //     password: formData.password,
        // };

        if (
            formData.password === formData.confirmPasswor &&
            Object.values(formData).every((el) => el)
        ) {
            console.log(formData);
            nav("/");
            // axios
            //     .post(url + "/api/users/register", JSON.stringify(data))
            //     .then((res) => {
            //         console.log(res);
            //     });
        }
    };

    return (
        <div className="container">
            <Flex justify="center" align="center" style={{ height: "100vh" }}>
                <form className="form" onSubmit={submitHandler}>
                    <Flex vertical gap={10}>
                        <Flex vertical gap={8}>
                            <Typography.Text>User Name</Typography.Text>
                            <Input
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        userName: e.target.value,
                                    })
                                }
                            />
                        </Flex>
                        <Flex vertical gap={8}>
                            <Typography.Text>Password</Typography.Text>
                            <Input
                                type="password"
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </Flex>
                        <Flex vertical gap={8}>
                            <Typography.Text>Confirm password</Typography.Text>
                            <Input
                                type="password"
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        confirmPasswor: e.target.value,
                                    })
                                }
                            />
                        </Flex>
                        <Button type="primary" onClick={submitHandler}>
                            Register
                        </Button>

                        <Typography.Text
                            style={{ marginTop: 20, textAlign: "center" }}
                        >
                            Уже зарегистрировались?
                            <Link to={"/signin"}> Войти</Link>
                        </Typography.Text>
                    </Flex>
                </form>
            </Flex>
        </div>
    );
}

export default Register;
