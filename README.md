# vue-state-management-samples
Vue.js state management samples.

[Demo site](https://vue-state-management-compare.vercel.app/vuex)

![](https://i.gyazo.com/0b3acd2b4e1011fa7fb08ead6d6ce0f1.png)

## Vuex4
### Store
### Components

---

## Pinia
### Store

```ts:src/stores/vuex/store.ts
import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
});
```

### Components


---

## Apollo Client
### Store
### Components

---

## Original Store
### Store
### Components
