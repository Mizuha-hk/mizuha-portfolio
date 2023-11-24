import { Meta, StoryObj } from "@storybook/react";

import AccountCard from "../components/AccountCard";

const meta = {
    title: 'components/AccountCard',
    component: AccountCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
} satisfies Meta<typeof AccountCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
    args: {
        isLogin: true,
        username: 'UserName',
        url: 'https://github.com/microsoft',
        avatarUrl: 'https://avatars.githubusercontent.com/u/6154722?s=200&v=4',
    }
};

export const LoggedOut: Story = {
    args: {
        isLogin: false,
        username: 'UserName',
        url: '',
        avatarUrl: '',
    }
};