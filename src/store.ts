import { createStore } from "stan-js";

export const { useStore, reset, getState, actions, useStoreEffect } =
  createStore({
    counter: 0,
    message: "Hello, Stan!",
    get upperCaseMessage() {
      return this.message.toUpperCase();
    },
    currentTime: new Date(),
    users: [] as Array<string>,
  });
