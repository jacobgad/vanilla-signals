import "./style.css";
import { Counter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")?.append(...Counter());
