import { create } from 'zustand';

const initialState = {
  appUser: null,
  appUserAccessToken: null,
  appUserRegistration: null,
  updatePassword: null,
  sendAccountActivationCode: null,
  confirmAccountActivationCode: null,
  signIn: null,
  signUp: null,
  canSwitchToRepairer: false,
  canSwitchToCustomer: false,
  canManageSystem: false,
  repairDeviceData: null,
};

const storeFn = (set) => ({
  ...initialState,
  // actions
  setAppUser(appUser) {
    set({ appUser });
  },
  setAppUserAccessToken(appUserAccessToken) {
    set({ appUserAccessToken });
  },
  setAppUserRegistration(appUserRegistration) {
    set({ appUserRegistration });
  },
  setUpdatePassword(updatePassword) {
    set({ updatePassword });
  },
  setSendAccountActivationCode(sendAccountActivationCode) {
    set({ sendAccountActivationCode });
  },
  setConfirmAccountActivationCode(confirmAccountActivationCode) {
    set({ confirmAccountActivationCode });
  },
  setSignIn(signIn) {
    set({ signIn });
  },
  setSignUp(signUp) {
    set({ signUp });
  },
  setCanSwitchToRepairer(canSwitchToRepairer) {
    set({ canSwitchToRepairer });
  },
  setCanSwitchToCustomer(canSwitchToCustomer) {
    set({ canSwitchToCustomer });
  },
  setCanManageSystemr(canManageSystem) {
    set({ canManageSystem });
  },
  setRepairDeviceData(repairDeviceData) {
    set({ repairDeviceData });
  },
  clearAppUserRegistration() {
    set({
      appUserRegistration: null,
      updatePassword: null,
      sendAccountActivationCode: null,
      confirmAccountActivationCode: null,
      signIn: null,
      signUp: null,
    });
  },
  clearAuthState() {
    set({ ...initialState });
  },
});
export const useAuthStore = create(storeFn);
