import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
import { resolveComponent, mergeProps, withCtx, renderSlot, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, Transition, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  props: [
    "selected",
    "selectable",
    "readonly"
  ],
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    SelectorIcon
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Listbox = resolveComponent("Listbox");
  const _component_ListboxLabel = resolveComponent("ListboxLabel");
  const _component_ListboxButton = resolveComponent("ListboxButton");
  const _component_SelectorIcon = resolveComponent("SelectorIcon");
  const _component_ListboxOptions = resolveComponent("ListboxOptions");
  const _component_ListboxOption = resolveComponent("ListboxOption");
  const _component_CheckIcon = resolveComponent("CheckIcon");
  _push(ssrRenderComponent(_component_Listbox, mergeProps({
    as: "div",
    modelValue: $props.selected,
    "onUpdate:modelValue": ($event) => $props.selected = $event
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ListboxLabel, { class: "block text-sm font-medium text-gray-700" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "title", {}, null, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "title")
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
        _push2(`<div class="mt-1 relative"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ListboxButton, {
          class: [[$props.readonly ? "bg-gray-200" : "bg-white"], "relative w-full border text-gray-600 border-dark-brand rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:border-blue-brand focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"]
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="flex items-center"${_scopeId2}><span class="block truncate capitalize"${_scopeId2}>${ssrInterpolate($props.selected.name)}</span></span><span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_SelectorIcon, {
                class: "h-5 w-5 text-gray-600",
                "aria-hidden": "true"
              }, null, _parent3, _scopeId2));
              _push3(`</span>`);
            } else {
              return [
                createVNode("span", { class: "flex items-center" }, [
                  createVNode("span", { class: "block truncate capitalize" }, toDisplayString($props.selected.name), 1)
                ]),
                createVNode("span", { class: "ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" }, [
                  createVNode(_component_SelectorIcon, {
                    class: "h-5 w-5 text-gray-600",
                    "aria-hidden": "true"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ListboxOptions, { class: "absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($props.selectable, (option) => {
                _push3(ssrRenderComponent(_component_ListboxOption, {
                  as: "template",
                  key: option.id,
                  value: option
                }, {
                  default: withCtx(({ active, selected }, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<li class="${ssrRenderClass([active ? "text-white bg-blue-brand" : "text-gray-900", "cursor-default select-none relative py-2 pl-3 pr-9"])}"${_scopeId3}><div class="flex items-center"${_scopeId3}><span class="${ssrRenderClass([selected ? "font-semibold" : "font-normal", "block truncate capitalize"])}"${_scopeId3}>${ssrInterpolate(option.name)}</span></div>`);
                      if (selected) {
                        _push4(`<span class="${ssrRenderClass([active ? "text-white" : "text-blue-brand", "absolute inset-y-0 right-0 flex items-center pr-4"])}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_CheckIcon, {
                          class: "h-5 w-5",
                          "aria-hidden": "true"
                        }, null, _parent4, _scopeId3));
                        _push4(`</span>`);
                      } else {
                        _push4(`<!---->`);
                      }
                      _push4(`</li>`);
                    } else {
                      return [
                        createVNode("li", {
                          class: [active ? "text-white bg-blue-brand" : "text-gray-900", "cursor-default select-none relative py-2 pl-3 pr-9"]
                        }, [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("span", {
                              class: [selected ? "font-semibold" : "font-normal", "block truncate capitalize"]
                            }, toDisplayString(option.name), 3)
                          ]),
                          selected ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: [active ? "text-white" : "text-blue-brand", "absolute inset-y-0 right-0 flex items-center pr-4"]
                          }, [
                            createVNode(_component_CheckIcon, {
                              class: "h-5 w-5",
                              "aria-hidden": "true"
                            })
                          ], 2)) : createCommentVNode("", true)
                        ], 2)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList($props.selectable, (option) => {
                  return openBlock(), createBlock(_component_ListboxOption, {
                    as: "template",
                    key: option.id,
                    value: option
                  }, {
                    default: withCtx(({ active, selected }) => [
                      createVNode("li", {
                        class: [active ? "text-white bg-blue-brand" : "text-gray-900", "cursor-default select-none relative py-2 pl-3 pr-9"]
                      }, [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("span", {
                            class: [selected ? "font-semibold" : "font-normal", "block truncate capitalize"]
                          }, toDisplayString(option.name), 3)
                        ]),
                        selected ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: [active ? "text-white" : "text-blue-brand", "absolute inset-y-0 right-0 flex items-center pr-4"]
                        }, [
                          createVNode(_component_CheckIcon, {
                            class: "h-5 w-5",
                            "aria-hidden": "true"
                          })
                        ], 2)) : createCommentVNode("", true)
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["value"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode(_component_ListboxLabel, { class: "block text-sm font-medium text-gray-700" }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "title")
            ]),
            _: 3
          }),
          createVNode("div", { class: "mt-1 relative" }, [
            createVNode(_component_ListboxButton, {
              class: [[$props.readonly ? "bg-gray-200" : "bg-white"], "relative w-full border text-gray-600 border-dark-brand rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:border-blue-brand focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm"]
            }, {
              default: withCtx(() => [
                createVNode("span", { class: "flex items-center" }, [
                  createVNode("span", { class: "block truncate capitalize" }, toDisplayString($props.selected.name), 1)
                ]),
                createVNode("span", { class: "ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none" }, [
                  createVNode(_component_SelectorIcon, {
                    class: "h-5 w-5 text-gray-600",
                    "aria-hidden": "true"
                  })
                ])
              ]),
              _: 1
            }, 8, ["class"]),
            createVNode(Transition, {
              "leave-active-class": "transition ease-in duration-100",
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: withCtx(() => [
                createVNode(_component_ListboxOptions, { class: "absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList($props.selectable, (option) => {
                      return openBlock(), createBlock(_component_ListboxOption, {
                        as: "template",
                        key: option.id,
                        value: option
                      }, {
                        default: withCtx(({ active, selected }) => [
                          createVNode("li", {
                            class: [active ? "text-white bg-blue-brand" : "text-gray-900", "cursor-default select-none relative py-2 pl-3 pr-9"]
                          }, [
                            createVNode("div", { class: "flex items-center" }, [
                              createVNode("span", {
                                class: [selected ? "font-semibold" : "font-normal", "block truncate capitalize"]
                              }, toDisplayString(option.name), 3)
                            ]),
                            selected ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: [active ? "text-white" : "text-blue-brand", "absolute inset-y-0 right-0 flex items-center pr-4"]
                            }, [
                              createVNode(_component_CheckIcon, {
                                class: "h-5 w-5",
                                "aria-hidden": "true"
                              })
                            ], 2)) : createCommentVNode("", true)
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Select.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const JetSelect = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  JetSelect as J
};
