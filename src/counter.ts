import { createEffect, createSignal } from "./signal";

export function Counter() {
  const [count, setCount] = createSignal(0);

  const h1 = document.createElement("h1");

  const incrementButton = createButton({
    label: "Increment",
    onClick: () => setCount(count() + 1),
  });

  const decrementButton = createButton({
    label: "Decrement",
    onClick: () => setCount(count() - 1),
  });

  createEffect(() => {
    h1.innerText = count().toString();
  });

  return [h1, incrementButton, decrementButton];
}

function createButton(props: { label: string; onClick: () => void }) {
  const button = document.createElement("button");
  button.innerText = props.label;
  button.addEventListener("click", props.onClick);
  return button;
}
