import { Button, Flex, Input, Typography } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../api";

function SignIn() {
    const [formData, setFormData] = useState({
        userName: "",
        password: "",
    });

    const [error, setError] = useState("");

    const nav = useNavigate();

    useEffect(() => {
        const tokenInfo = localStorage.getItem("aitimAdminToken");
        if (tokenInfo) {
            const tokenObj = JSON.parse(tokenInfo);
            if (tokenObj.date === new Date().toDateString()) nav("/");
        }
    }, []);

    const submitHandler = () => {
        if (Object.values(formData).every((el) => el)) {
            signIn(formData)
                .then(() => {
                    nav("/");
                })
                .catch((er) => setError(er.code));
        }
    };
    return (
        <div className="container">
            <Flex justify="center" align="center" style={{ height: "100vh" }}>
                <form className="form" onSubmit={submitHandler}>
                    <Flex vertical gap={10}>
                        <Typography.Title level={3} type="danger">
                            {error}
                        </Typography.Title>
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
