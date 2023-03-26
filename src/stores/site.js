import { create } from 'zustand';

const initialState = {
  siteHeaderNav: null,
  siteFooterNav: null,
};

const storeFn = (set) => ({
  ...initialState,
  // actions
  setSiteHeaderNav(siteHeaderNav) {
    set({ siteHeaderNav });
  },
  setSiteFooterNav(siteFooterNav) {
    set({ siteFooterNav });
  },
  clearSiteState() {
    set({ ...initialState });
  },
});
export const useSiteStore = create(storeFn);
