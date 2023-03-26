import { create } from 'zustand';

const initialState = {
  currentRoute: null,
  mainNav: null,
  customerNav: null,
  repairerNav: null,
  customerAccountNav: null,
  repairerAccountNav: null,
  manageNav: null,
  dropdownNav: null,
};

const storeFn = (set) => ({
  ...initialState,
  // actions
  setCurrentRoute(currentRoute) {
    set({ currentRoute });
  },
  setMainNav(mainNav) {
    set({ mainNav });
  },
  setCustomerNav(customerNav) {
    set({ customerNav });
  },
  setRepairerNav(repairerNav) {
    set({ repairerNav });
  },
  setCustomerAccountNav(customerAccountNav) {
    set({ customerAccountNav });
  },
  setRepairerAccountNav(repairerAccountNav) {
    set({ repairerAccountNav });
  },
  setManageNav(manageNav) {
    set({ manageNav });
  },
  setDropdownNav(dropdownNav) {
    set({ dropdownNav });
  },
  clearDashboardState() {
    set({ ...initialState });
  },
});
export const useDashboardStore = create(storeFn);
