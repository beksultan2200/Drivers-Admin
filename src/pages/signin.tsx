import { Button, Flex, Input, Typography } from "antd";
// import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
    const [formData, setFormData] = useState({
        userName: "",
        password: "",
    });

    // const url = import.meta.env.VITE_BACKEND_LINK;

    const nav = useNavigate();
    const submitHandler = () => {
        if (Object.values(formData).every((el) => el)) {
            console.log(formData);
            localStorage.setItem("aitimAdminToken", "token");
            nav("/");
            // axios
            //     .post(url + "/api/users/login", formData)
            //     .then((res) => {
            //         console.log(res);
            //     })
            //     .catch((er) => console.log(er));
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

                        <Button type="primary" onClick={submitHandler}>
                            Sin in
                        </Button>

                        <Typography.Text
                            style={{ marginTop: 20, textAlign: "center" }}
                        >
                            Еще не зарегистрировались?
                            <Link to={"/register"}>Зарегистрироваться</Link>
                        </Typography.Text>
                    </Flex>
                </form>
            </Flex>
        </div>
    );
}

export default SignIn;
