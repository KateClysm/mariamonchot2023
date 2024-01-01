import './technologyicon.scss';
import '../../animations/bounce.scss';
const TechnologyIcon = ({ icon, name }: { icon: JSX.Element; name: string }) => {
    return (
      <div className="technology-icon">
        <p className="technology-name">{name}</p>
        <div className="icon-container">
            {icon}
        </div>
      </div>
    );
  };
export default TechnologyIcon;