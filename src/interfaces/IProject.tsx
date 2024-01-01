
export interface ITechnologies {
  icon: JSX.Element;
  name: string;
}

interface IProject {
  id: number;
  title: string;
  card_description: string;
  description: string;
  key_features: string[];
  my_rol: string;
  photo: string;
  mobile_view: string;
  secondary_view: string;
  technologies: ITechnologies[];
  git: string;
  link: string;
  date: string;
}

export default IProject;