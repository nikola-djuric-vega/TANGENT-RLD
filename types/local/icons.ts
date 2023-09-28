import React from 'react'

export interface IconProps extends React.HTMLAttributes<SVGElement> {
  name: IconNames
  size?: keyof typeof Sizes
  flip?: boolean
  baseColour?: boolean
}

export enum Sizes {
  xxs,
  xs,
  sm,
  md,
  lg,
  xl,
  full,
}

export interface BaseIconProps extends IconProps {
  G81Type?: G81IconType
  type?: IconType
}

export enum IconType {
  DEFAULT = 'default',
  LARGE = 'large',
}

export enum G81IconType {
  FILE_CAD = 'file_cad',
  FILE_DOC = 'file_doc',
  FILE_DOCX = 'file_docx',
  FILE_PDF = 'file_pdf',
  FILE_SWG = 'file_swg',
  FILE_UNKWOWN = 'file_unknown',
  FILE_XLS = 'file_xls',
  FILE_XLSX = 'file_xlsx',
  FILE_VIEW_DOCUMENT = 'file_view_document',
}

export enum IconNames {
  SIXTEEN_PX_CHEVRON_DOWN = '16px_chevron_down',
  SIXTEEN_PX_CHEVRON_RIGHT = '16px_chevron_right',
  SIXTEEN_PX_CHEVRON_RIGHT_ORANGE = '16px_chevron_right_orange',
  SIXTEEN_PX_CLEAR = '16px_clear_icon',
  SIXTEEN_PX_CLOSE = '16px_close',
  SIXTEEN_PX_SEARCH = '16px_search',
  SIXTEEN_PX_SHARE = '16px_share',
  SIXTEEN_PX_TICK = '16px_tick',
  TWENTYFOUR_PX_PLANNED_PC = '24px_planned_pc',
}
