import create from 'zustand'

export type Mode = 'layout' | 'size' | 'colors'
export type Layout = 'auto' | 'centered'
export type Size = 'auto' | 'insta'
export type Color = 'light' | 'dark'

export const useConfiguratorStore = create<{
  mode: Mode
  layout: Layout
  size: Size
  color: Color
  setMode: (value: Mode) => void
  setLayout: (value: Layout) => void
  setSize: (value: Size) => void
  setColor: (value: Color) => void
}>((set) => ({
  mode: 'layout',
  layout: 'auto',
  size: 'auto',
  color: 'light',
  setMode: (mode: Mode) => set({ mode }),
  setLayout: (layout: Layout) => set({ layout }),
  setSize: (size: Size) => set({ size }),
  setColor: (color: Color) => set({ color }),
}))
