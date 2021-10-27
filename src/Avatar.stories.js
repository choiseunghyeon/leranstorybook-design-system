//src/Avatar.stories.js
import React from "react";
import { Avatar } from "./Avatar";
// Controls을 사용하는 새로운 스토리
const Template = args => <Avatar {...args} />;
export const Controls = Template.bind({});
Controls.args = {
  loading: false,
  size: "tiny",
  username: "Dominic Nguyen",
  src: "https://avatars2.githubusercontent.com/u/263385",
};
