import { create } from 'zustand';

export type ViewMode = 'developer' | 'recruiter';

interface ViewState {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  toggleViewMode: () => void;
}

export const useViewStore = create<ViewState>((set) => ({
  viewMode: 'recruiter',
  setViewMode: (mode) => set({ viewMode: mode }),
  toggleViewMode: () => set((state) => ({ 
    viewMode: state.viewMode === 'developer' ? 'recruiter' : 'developer' 
  })),
}));
