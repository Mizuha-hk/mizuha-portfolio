import { Meta, StoryObj } from "@storybook/react";

import AccountCard from "../components/AccountCard";

const meta = {
    title: 'components/accountCard',
    component: AccountCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
} satisfies Meta<typeof AccountCard>;

export default meta;
// type Story = StoryObj<typeof meta>;

// export const LoggedIn: Story = {};

// export const LoggedOut: Story = {};