import "./loader.scss";
import React from "react";

const Loader = () => {
  return (
    <div className="box">
      <div className="planet"></div>
    </div>
  );
};

export default React.memo(Loader);

// React.memo(Loader)возвращает новый мемоизированный компонент .
//  React.memo(Loader) выводит тот же контент, что и исходный Loader компонент, но с одним отличием - React.memo(Loader) рендеринг запоминается.
// Наилучший случай обертывания компонента React.memo()- это когда вы ожидаете, что функциональный компонент будет отрисовываться часто и обычно с одними и теми же реквизитами.
