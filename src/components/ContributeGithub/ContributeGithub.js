import { useState } from "react";

const ContributeGithub = ({ t }) => {
  const [isPressed, setIsPressed] = useState(false);

  if (!isPressed) {
    return (
      <div className="contribute-github">
        <a
          href="https://github.com/10delin/portfolio"
          target="_blank"
          rel="noreferrer"
          onClick={() => setIsPressed(!isPressed)}
        >
          <span>{t("contributeGitHub")}</span>
          <img
            src="https://img.icons8.com/color/48/000000/github.png"
            alt="github"
          />
        </a>
      </div>
    );
  }
};

export default ContributeGithub;
