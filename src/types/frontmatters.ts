export type projectItemType = {
  title: string;
  description: string;
  link: string;
  icon: React.ReactComponentElement<any>;
};

export type ProjectsType = {
  category: string;
  child: Array<projectItemType>;
};
