import "./scrollButton.css";
import Up from "../image/up.ico";

const ScrollButton = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {isScrolling > 20 && (
        <button className="up" onClick={toTheTop}>
          <img src={Up} alt="" className="UpIco" />
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
