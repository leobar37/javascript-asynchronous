import { ACTIONS } from "./constants";
export class Instruction {
  label = "";
  action;
  labelInWebApi = "";
  id;
  affected;
  constructor(
    id,
    { label = "", labelInWebApi = "", action = ACTIONS.SYNC, affected } = {}
  ) {
    this.label = label;
    this.labelInWebApi = labelInWebApi;
    this.action = action;
    this.id = id;
    this.affected = affected;
  }
}
