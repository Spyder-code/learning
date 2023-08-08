

export default {
  "meta": {},
  "id": "_default",
  "_regex": {},
  "_paramKeys": {},
  "name": "",
  "file": {
    "path": "src/routes",
    "dir": "src",
    "base": "routes",
    "ext": "",
    "name": "routes"
  },
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {},
      "id": "_default_event_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "event",
      "file": {
        "path": "src/routes/event.svelte",
        "dir": "src/routes",
        "base": "event.svelte",
        "ext": ".svelte",
        "name": "event"
      },
      "asyncModule": () => import('../src/routes/event.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_index_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "index",
      "file": {
        "path": "src/routes/index.svelte",
        "dir": "src/routes",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "asyncModule": () => import('../src/routes/index.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_loop_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "loop",
      "file": {
        "path": "src/routes/loop.svelte",
        "dir": "src/routes",
        "base": "loop.svelte",
        "ext": ".svelte",
        "name": "loop"
      },
      "asyncModule": () => import('../src/routes/loop.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_quiz_loop_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "quiz-loop",
      "file": {
        "path": "src/routes/quiz-loop.svelte",
        "dir": "src/routes",
        "base": "quiz-loop.svelte",
        "ext": ".svelte",
        "name": "quiz-loop"
      },
      "asyncModule": () => import('../src/routes/quiz-loop.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_thanks_svelte",
      "_regex": {},
      "_paramKeys": {},
      "name": "thanks",
      "file": {
        "path": "src/routes/thanks.svelte",
        "dir": "src/routes",
        "base": "thanks.svelte",
        "ext": ".svelte",
        "name": "thanks"
      },
      "asyncModule": () => import('../src/routes/thanks.svelte'),
      "children": []
    },
    {
      "meta": {
        "dynamic": true,
        "dynamicSpread": true
      },
      "_regex": {},
      "_paramKeys": {},
      "name": "[...404]",
      "file": {
        "path": ".routify/components/[...404].svelte",
        "dir": ".routify/components",
        "base": "[...404].svelte",
        "ext": ".svelte",
        "name": "[...404]"
      },
      "asyncModule": () => import('./components/[...404].svelte'),
      "children": []
    }
  ]
}