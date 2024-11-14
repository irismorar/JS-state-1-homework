function Toolbar(children){
  return createElement(
    "section",
    null,
    {
      className: "toolbar",
    },
    children,
  );
};

function ButtonsGroup(children) {
  return createElement(
    "div",
    null,
    {
      className: "buttons-group",
    },
    children,
  );
};

function Button(labelButton, attributeName, styleObject) {
  return createElement(
    "button",
    {
      "data-attribute": attributeName,
    },
    {
      style: styleObject,
    },
    [labelButton],
  );
};

function TextBox(children) {
  return createElement(
    "section",
    null,
    {
      className: "text-box",
    },
    children,
  );
};

function Paragraphs(styleObject) {
  return [
    createElement(
      "p",
      null,
      {
        style: styleObject,
      },
      ["Ș-am încălecat pe-o șa,"]
    ),
    createElement(
      "p",
      null,
      {
        style: styleObject,
      },
      ["și v-am spus poveste-așa!"]
    )
  ];
};
