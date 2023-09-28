export interface OptionSelectorState {
  trail: any[]
  autoProgress: boolean
  currentStep: any
  nextStep: any
  helpOpen: any
  comp: HTMLDivElement
}

export type OptionHandlerType = (e: Event) => void

export type AutoProgressHandlerType = (target: HTMLDivElement) => void

export type ResetSelectedOptionsType = (target: HTMLDivElement) => void

export type ClearSelectedStateType = (panelEl: HTMLDivElement) => void

export type TransitionToTrailType = (target: HTMLElement) => void

export type SetTargetSelectedType = (target: HTMLElement) => void

export type SetTabToNextStateType = (target: HTMLDivElement) => void

export type TransitionFromInactiveType = (inTrail?: boolean) => void

export type FireEvent = (
  elm: HTMLDivElement,
  evt: string,
  data: { [key: string]: any }
) => void

export type SetCurrentStepType = (
  current?: string | null,
  activeChoice?: string
) => void

export type SetParentChoiceInactiveType = (
  target: HTMLDivElement | null
) => void

export type SetParentChoiceActiveType = (target: HTMLDivElement | null) => void

export type StoreNextStepType = (target: HTMLDivElement | null) => void

export type GetElem = (
  container: HTMLElement | Document,
  selector: string
) => HTMLDivElement

export type GetAllElems = (
  container: HTMLElement,
  selector: string
) => NodeListOf<HTMLElement>

export type StripHash = (idString: string) => string

export type HanldeTabbing = (target: HTMLElement, selector?: string) => void

export interface findParentNodeOptions {
  className?: string
  tagName?: string
  attributeName?: string
}

export type FindParentNode = (
  options: findParentNodeOptions,
  child: HTMLElement | null
) => HTMLDivElement | HTMLBodyElement
