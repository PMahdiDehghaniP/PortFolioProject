import {
  HomeRounded,
  FaceRounded,
  TextSnippetRounded,
  ConnectWithoutContactRounded,
} from "@mui/icons-material";
const tabProps = (index) => {
  return {
    id: `sidebar-tap-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
};

export const tabsData = () => {
  const tabs = [
    { label: "صفحه اصلی", icon: <HomeRounded />, ...tabProps(0) },
    { label: "درباره من", icon: <FaceRounded />, ...tabProps(1) },
    { label: "رزومه من", icon: <TextSnippetRounded />, ...tabProps(2) },
    {
      label: "ارتباط با من",
      icon: <ConnectWithoutContactRounded />,
      ...tabProps(3),
    },
  ];
  return tabs;
};
