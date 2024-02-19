import { fileIcon } from "../assets";

export const EditorTabs = [ 
  {
    name: "filepicker",
    icon: fileIcon,
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

export const BaseUrl = {
  image: "https://firebasestorage.googleapis.com/v0/b/stampiza2.appspot.com/o/",
  media: "?alt=media&token=34464818-fdf2-4a4d-ac9d-cc74b4c9a5fd"
}
