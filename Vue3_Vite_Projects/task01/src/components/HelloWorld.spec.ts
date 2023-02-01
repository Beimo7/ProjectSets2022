import { test, expect } from "vitest";
import HelloWorld from "./HelloWorld.vue"
import { mount } from "@vue/test-utils"

test("hello", () => {
  console.log(HelloWorld)
  const wrapper = mount(HelloWorld)
  expect(wrapper.text()).toContain("hello")

  // input output 
  // api
})