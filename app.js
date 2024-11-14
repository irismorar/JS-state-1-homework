const buttonActiveColor = 'lightblue';
const buttonInactiveColor = '#888';

let state = {
  isBold: false,
  isItalic: false,
  isUnderline: false,
}

document.body.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON"){
    return
  }

  const clickedButtonAttribute = event.target.getAttribute("data-attribute");

  switch(clickedButtonAttribute) {
    case "bold": {
      update((currentState) => {
        return {
          ...currentState,
          isBold: !currentState.isBold,
        };
      });
      break;
    }
    case "italic": {
      update((currentState) => {
        return {
          ...currentState,
          isItalic: !currentState.isItalic,
        };
      });
      break;
    }
    case "underline": {
      update((currentState) => {
        return {
          ...currentState,
          isUnderline: !currentState.isUnderline,
        };
      });
      break;
    }
    default:
      break;
  };
});


function update(stateUpdateFunction) {
  const newState = stateUpdateFunction(state);
  state = newState;
  render(newState);
}

render(state);

function render(state) {
  const {
    isBold,
    isItalic,
    isUnderline
  } = state;

  document.body.innerHTML = "";

  document.body.append(
    Toolbar(
      [
        ButtonsGroup([
          Button(
            "B",
            "bold",
            {
              backgroundColor: isBold ? buttonActiveColor : buttonInactiveColor,
            }
          ),
          Button(
            "I",
            "italic",
            {
              backgroundColor: isItalic ? buttonActiveColor : buttonInactiveColor,
            }
          ),
          Button(
            "U",
            "underline",
            {
              backgroundColor: isUnderline ? buttonActiveColor : buttonInactiveColor,
            }
          )]
        )
      ]
    ),
    TextBox(
      Paragraphs({
        fontWeight: isBold ? 600 : 400,
        fontStyle: isItalic ? "italic" : "normal",
        textDecoration: isUnderline ? "underline" : "none",
      })
    )
  )
}