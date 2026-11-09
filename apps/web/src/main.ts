import { Application, Container, Graphics, Text } from "pixi.js";
import { CORE_PACKAGE_ID } from "@stage-fright/core";
import "./style.css";

async function bootstrap(): Promise<void> {
  const mount = document.querySelector<HTMLElement>("#app");
  if (!mount) throw new Error("Stage Fright mount element not found.");

  const app = new Application();
  await app.init({
    resizeTo: window,
    background: 0x10101a,
    antialias: false,
    preference: "webgl",
  });
  mount.appendChild(app.canvas);

  const panel = new Container();
  app.stage.addChild(panel);

  const backdrop = new Graphics()
    .roundRect(-270, -110, 540, 220, 16)
    .fill(0x261c33)
    .stroke({ color: 0xb09166, width: 2, alpha: 0.8 });
  panel.addChild(backdrop);

  const title = new Text({
    text: "STAGE FRIGHT",
    style: {
      fontFamily: "Georgia, serif",
      fontSize: 42,
      fontWeight: "bold",
      fill: 0xeacb9c,
      letterSpacing: 3,
    },
  });
  title.anchor.set(0.5);
  title.y = -34;
  panel.addChild(title);

  const subtitle = new Text({
    text: "Render smoke test — no gameplay implemented",
    style: {
      fontFamily: "sans-serif",
      fontSize: 17,
      fill: 0xb4a9bb,
    },
  });
  subtitle.anchor.set(0.5);
  subtitle.y = 25;
  panel.addChild(subtitle);

  const marker = new Text({
    text: CORE_PACKAGE_ID,
    style: { fontFamily: "monospace", fontSize: 13, fill: 0x898198 },
  });
  marker.anchor.set(0.5);
  marker.y = 70;
  panel.addChild(marker);

  const centerPanel = (): void => {
    panel.position.set(app.screen.width / 2, app.screen.height / 2);
    const scale = Math.min(1, (app.screen.width - 24) / 560);
    panel.scale.set(Math.max(0.2, scale));
  };

  centerPanel();
  window.addEventListener("resize", centerPanel);
}

void bootstrap().catch((error: unknown) => {
  console.error("Stage Fright renderer failed to initialize:", error);
  const mount = document.querySelector<HTMLElement>("#app");
  if (mount) mount.textContent = "Renderer unavailable. See the browser console.";
});
