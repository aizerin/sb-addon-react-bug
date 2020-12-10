import { addons, types } from "@storybook/addons";
import ControlPanel from "./ControlPanel";

addons.register("mockServerCheck", () => {
  addons.add("mockServerCheck/tool", {
    type: types.TOOL,
    title: "",
    // eslint-disable-next-line react/display-name
    render: () => <ControlPanel />,
  });
});
