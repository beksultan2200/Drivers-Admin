import { TableColumnsType } from "antd";
import { Key } from "react";

export interface Driver {
    id: number;
    fullName: string;
    status: string;
    location: string;
    vehicle: string;
    break: string;
    drive: string;
    shift: string;
    cycle: string;
    violations: string;
    eldId: string;
    updated: string;
    telegramPrivateId: string;
}

export const tableHeader: TableColumnsType<Driver> = [
    {
        title: "#",
        dataIndex: "id",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.id - b.id,
    },
    {
        title: "full name",
        dataIndex: "fullName",
        sorter: (a, b) => {
            if (a.fullName && b.fullName) {
                return a.fullName.localeCompare(b.fullName);
            }
            return 0;
        },
    },
    {
        title: "Status",
        dataIndex: "status",
        filters: [
            {
                text: "Driving",
                value: "Driving",
            },
            {
                text: "Off Duty",
                value: "Off Duty",
            },
            {
                text: "Sleeper",
                value: "Sleeper",
            },
        ],
        onFilter: (value: string | Key | boolean, record) => {
            if (typeof value === "string") {
                return record.status.indexOf(value) === 0;
            } else if (typeof value === "boolean") {
                return record.eldId === (value ? "Connected" : "Disconnected");
            } else {
                return false;
            }
        },
    },
    {
        title: "Location",
        dataIndex: "location",
        sorter: (a, b) => {
            if (a.location && b.location) {
                return a.location.localeCompare(b.location);
            }
            return 0;
        },
    },
    {
        title: "Vehicle",
        dataIndex: "vehicle",
        sorter: (a, b) => {
            if (a.vehicle && b.vehicle) {
                return a.vehicle.localeCompare(b.vehicle);
            }
            return 0;
        },
    },
    {
        title: "Break",
        dataIndex: "break",
        sorter: (a, b) => {
            if (a.break && b.break) {
                return a.break.localeCompare(b.break);
            }
            return 0;
        },
    },
    {
        title: "Drive",
        dataIndex: "drive",
        sorter: (a, b) => {
            if (a.drive && b.drive) {
                return a.drive.localeCompare(b.drive);
            }
            return 0;
        },
    },
    {
        title: "Shift",
        dataIndex: "shift",
        sorter: (a, b) => {
            if (a.shift && b.shift) {
                return a.shift.localeCompare(b.shift);
            }
            return 0;
        },
    },
    {
        title: "Cycle",
        dataIndex: "cycle",
        sorter: (a, b) => {
            if (a.cycle && b.cycle) {
                return a.cycle.localeCompare(b.cycle);
            }
            return 0;
        },
    },
    {
        title: "Violations",
        dataIndex: "violations",
    },
    {
        title: "eldId",
        dataIndex: "eldId",
    },
    {
        title: "Updated",
        dataIndex: "updated",
        sorter: (a, b) => {
            if (a.updated && b.updated) {
                return a.updated.localeCompare(b.updated);
            }
            return 0;
        },
    },
    {
        title: "telegram_id",
        dataIndex: "telegramPrivateId",
    },
];
