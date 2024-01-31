import { Button, Flex, Input, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import allDrivers, { Driver, tableHeader } from "../api/drivers";

function Home() {
    const [showCount, setShowCount] = useState(10);
    const [search, setSearch] = useState("");

    const [drivers, setDrivers] = useState<Driver[]>([]);

    const nav = useNavigate();

    useEffect(() => {
        setDrivers(allDrivers);

        const token = localStorage.getItem("aitimAdminToken");
        if (token) {
            console.log(token);
        } else {
            nav("/signin");
        }
    }, []);

    const searchHandler = (value: string) => {
        setSearch(value);
        value = value.trim().toLowerCase();
        const found = allDrivers.filter(
            (driver) =>
                driver.fullName.toLowerCase().includes(value) ||
                driver.location.toLowerCase().includes(value)
        );
        setDrivers(found);
    };

    return (
        <div className="container">
            <div className="table__wrap">
                <Typography.Title level={4}>Список</Typography.Title>
                <Flex gap={10} justify="space-between" className="table__top">
                    <Flex gap={5} align="center">
                        <Input
                            placeholder="Search"
                            value={search}
                            className="table__count"
                            onChange={(e) => searchHandler(e.target.value)}
                        />
                        <Button type="primary" className="search__btn">
                            search
                        </Button>
                    </Flex>

                    <Flex gap={5} align="center">
                        <Typography.Text className="count__text">
                            Drivers count
                        </Typography.Text>

                        <Input
                            placeholder={String(showCount)}
                            type="number"
                            value={showCount}
                            className="table__count"
                            onChange={(e) => setShowCount(+e.target.value)}
                        />
                    </Flex>
                </Flex>

                <div style={{ overflow: "auto" }}>
                    <Table
                        columns={tableHeader}
                        dataSource={drivers}
                        pagination={{ pageSize: showCount }}
                        className="table"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
