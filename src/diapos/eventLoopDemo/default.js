import { Instruction } from "./Instruction";
import { ACTIONS } from "./constants";
export const example1 = [
  new Instruction(1, { label: "foo()" }),
  new Instruction(2, { label: `console.log("One)` }),
  new Instruction(3, {
    label: "setTimeout()",
    action: ACTIONS.ASYNC,
    labelInWebApi: "timer",
  }),
  new Instruction(4, { label: `console.log("Three")` }),
  new Instruction(5, {
    action: ACTIONS.REMOVE_FROM_WEB_API,
    label: `console.log("Two")`,
    affected: 3,
  }),
  new Instruction(6, { action: ACTIONS.REMOVE_FROM_CALL_STACK, affected: 4 }),
  new Instruction(6, { action: ACTIONS.REMOVE_FROM_CALL_STACK, affected: 2 }),
  new Instruction(6, { action: ACTIONS.REMOVE_FROM_CALL_STACK, affected: 1 }),
  new Instruction(6, {
    action: ACTIONS.REMOVE_FROM_MESSAGE_QUEUE,
    label: `console.log("Two")`,
    affected: 5,
  }),
  new Instruction(7, {
    action: ACTIONS.REMOVE_FROM_CALL_STACK,
    affected: 6,
  }),
];
