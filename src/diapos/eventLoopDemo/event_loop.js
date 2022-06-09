const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
import { domUtils } from "./utils";
import { Box } from "./Box";
import { LoopIcon } from "./Icon";
import { ACTIONS, COLORS } from "./constants";

export class EventLoopDemo {
  callStack = new Box("Call stack", { lineColor: COLORS.ONE });
  webApi = new Box("Web api", { lineColor: COLORS.TWO });
  messageQueue = new Box("Message queue", { lineColor: COLORS.THREE });
  loopIcon = new LoopIcon();
  button = domUtils.create("button", { class: "button" }, "start");

  instructions = [];

  constructor(instructions) {
    this.instructions = instructions;
  }

  running = false;

  setup(element) {
    element.classList.add("event-loop");

    this.button.addEventListener("click", () => {
      if (this.running) {
        this.reset();
      } else {
        this.loopIcon.toggleAnimation();
        this.processSentence();
        this.button.textContent = "reset";
        this.running = true;
      }
    });
  }

  async processSentence() {
    let all = this.instructions.length;
    for await (const instruction of this.instructions) {
      switch (instruction?.action) {
        case ACTIONS.SYNC:
          this.callStack.makeLine(instruction.id, instruction.label);
          break;
        case ACTIONS.ASYNC:
          this.callStack.makeLine(instruction.id, instruction.label);
          await sleep(500);
          this.callStack.removeLine(instruction.id);
          this.webApi.makeLine(instruction.id, instruction.labelInWebApi);
          break;
        case ACTIONS.REMOVE_FROM_WEB_API:
          this.webApi.removeLine(instruction.affected);
          this.messageQueue.makeLine(instruction.id, instruction.label);
          break;

        case ACTIONS.REMOVE_FROM_CALL_STACK:
          this.callStack.removeLine(instruction.affected);
          break;
        case ACTIONS.REMOVE_FROM_MESSAGE_QUEUE:
          this.messageQueue.removeLine(instruction.affected);
          this.callStack.makeLine(instruction.id, instruction.label);
          break;
      }
      await sleep(2000);
      all--;
      if (all === 0) {
        this.reset();
      }
    }
  }
  reset() {
    this.callStack.clearLines();
    this.webApi.clearLines();
    this.messageQueue.clearLines();
    this.button.textContent = "start";
    this.loopIcon.toggleAnimation();
    this.running = false;
  }

  render() {
    const column1 = domUtils.create("div", { class: "column-1" }, [
      this.button,
      this.callStack.render(),
    ]);
    const column2 = domUtils.create("div", { class: "column-2" }, [
      this.loopIcon.render(),
    ]);

    const column3 = domUtils.create("div", { class: "column-3" }, [
      this.webApi.render(),
      this.messageQueue.render(),
    ]);

    const content = domUtils.create("div", { class: "content" }, [
      column1,
      column2,
      column3,
    ]);

    return content;
  }
}
