import React from "react";
import { Button } from "semantic-ui-react";
import "./HeaderPage.scss";

export function HeaderPage(props) {
  const { title, btnTitle, btnClick, btnTitleTwo, btnClickTwo } = props;

  return (
    <div className="header-page-admin">
      <h2>{title}</h2>

      <div>
        {btnTitle && (
          <Button positive onClick={btnClick}>
            {btnTitle}
          </Button>
        )}
        {btnTitleTwo && (
          <Button negative onClick={btnClickTwo}>
            {btnTitleTwo}
          </Button>
        )}
      </div>
    </div>
  );
}
