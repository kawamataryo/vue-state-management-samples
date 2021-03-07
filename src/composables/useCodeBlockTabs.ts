import { ref } from "vue";

const TABS = [
  { id: 1, name: "Store" },
  { id: 2, name: "Components" }
];

export const useCodeBlockTabs = () => {
  const activeTabId = ref(1);
  const onSelected = (id: number) => {
    activeTabId.value = id;
  };

  return {
    tabs: TABS,
    activeTabId,
    onSelected
  };
};
