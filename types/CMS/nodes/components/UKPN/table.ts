import { ComponentsTypeName } from '_types/CMS'

export interface TableType {
  __typename: ComponentsTypeName.TABLE
  columns?: TableColumnType[]
  columnHighlights?: ColumnNumericInput[]
  rowHighlights?: RowNumericInput[]
  removeBottomMargin?: boolean
}

export interface TableColumnType {
  rows?: TableRowType[]
}

export interface TableRowType {
  cellContent: string
}

export interface ColumnNumericInput {
  columnNumber: number
}

export interface RowNumericInput {
  rowNumber: number
}
