import { Markdown } from "./markdown";
import { Markup } from "./Markup";
import { example1, EventLoopDemo } from "./eventLoopDemo";

export default async function () {
  const part1 = new Markdown();
  const part2 = new Markup();
  const part3 = new Markdown();
  const part1Loaded = await Promise.all([
    part1.load("introduction"),
    part1.load("intro1"),
    part1.load("bloqueante"),
    part1.load("analogy"),
    part1.load("nobloqueante"),
    part1.load("event_loop"),
  ]);
  part1Loaded.forEach((content) => {
    part1.addSlide(content);
  });

  [new EventLoopDemo(example1)].forEach((content) => {
    part2.addSlide(content);
  });

  const part3Loaded = await Promise.all([
    part3.load("event_loop1"),
    part3.load("callback_hell"),
    part3.load("promises"),
    part3.load("async_await"),
    part3.load("about"),
  ]);

  part3Loaded.forEach((content) => {
    part3.addSlide(content);
  });

  return [part1, part2, part3];
}
