import { fileIcon, stylishShirt } from "../assets";

export const EditorTabs = [ 
  {
    name: "filepicker",
    icon: fileIcon,
  }, 
];

export const FilterTabs = [
  {
    name: "changeColor",
    icon: stylishShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  clear: {
    stateProperty: "clearDecal",
    filterTab: "clearLogo",
  },
};
