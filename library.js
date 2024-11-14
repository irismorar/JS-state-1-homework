function createElement(tagName, attributes, properties, children) {
  const element = document.createElement(tagName);

  if (attributes){
    for (const attributeName in attributes) {
      element.setAttribute(attributeName, attributes[attributeName]);
    }
  }

  if (properties) {
    for (const propertyName in properties) {
      if (propertyName === "style") {
        for (const stylePropertyName in properties[propertyName]) {
          element.style[stylePropertyName] = properties[propertyName][stylePropertyName];
        }
        continue;
      }
      element[propertyName] = properties[propertyName];
    }
  }

  if (children instanceof Array) {
    element.append(...children);
  } else {
    throw new Error("Not compatible type");
  }

  return element;
}