import type { Meta, StoryObj } from '@storybook/react';

import { InputNumber } from '@components/InputNumber';
const meta: Meta<typeof InputNumber> = {
  component: InputNumber,
  args: {
    value: 0,
    maxNumber: 4,
    disabled: false,
    onChange: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof InputNumber>;

export const Default: Story = {
  render: (args) => <InputNumber {...args} />,
};
