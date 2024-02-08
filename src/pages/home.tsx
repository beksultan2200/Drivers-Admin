import { Button, Flex, Input, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Driver, tableHeader } from "../api/drivers";
import { getAllDrivers } from "../api";

function Home() {
    const [search, setSearch] = useState("");
    const [driversCount, setDriversCount] = useState(10);

    const [drivers, setDrivers] = useState<Driver[]>([]);

    const [driversCopy, setDriversCopy] = useState<Driver[]>([]);

    const nav = useNavigate();

    useEffect(() => {
        const tokenInfo = localStorage.getItem("aitimAdminToken");
        if (tokenInfo) {
            const tokenObj = JSON.parse(tokenInfo);
            if (tokenObj.date === new Date().toDateString()) {
                getAllDrivers(tokenObj.token).then((res) => {
                    setDrivers(res.data);
                    setDriversCopy(res.data);
                });
            }
        } else {
            nav("/signin");
        }
    }, []);

    const searchHandler = (value: string) => {
        setSearch(value);
        if (value) {
            value = value.trim().toLowerCase();
            const found = driversCopy.filter(
                (driver) =>
                    driver.fullName?.toLowerCase().includes(value) ||
                    driver.location?.toLowerCase().includes(value)
            );

            setDriversCopy(found);
        } else {
            setDriversCopy(drivers);
        }
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
                            placeholder={String(driversCount)}
                            type="number"
                            value={driversCount}
                            className="table__count"
                            onChange={(e) => setDriversCount(+e.target.value)}
                        />
                    </Flex>
                </Flex>

                <div style={{ overflow: "auto" }}>
                    <Table
                        columns={tableHeader}
                        dataSource={driversCopy}
                        pagination={{
                            pageSize: driversCount,
                        }}
                        className="table"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
